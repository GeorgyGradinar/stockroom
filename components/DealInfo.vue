<template>
  <section class="info-block">

    <div class="info">
      <p class="total-price">{{ currentTotalPrice }} ₽</p>
      <div class="details">
        <span>Количество</span>
        <p>{{ currentItem.quantity }} шт.</p>
      </div>
      <div class="details">
        <span>Цена за штуку</span>
        <p>{{ currentItem.price }} ₽</p>
      </div>
    </div>

    <div class="wrapper-button">
      <button class="add-deal"
              @click="updateDealType(currentItem.id)"
              :class="{
                pay:filters.page === Pages.Deal && currentItem.statusDeal === StatusDeal.Pay,
                paid:filters.page === Pages.Deal && currentItem.statusDeal === StatusDeal.Paid
                }">
        {{ currentItem.statusDeal }}
      </button>
      <button class="like"
              @click="updateFavoriteStatus(currentItem)"
              :class="{'selected-like':currentItem.isFavorite}">
        <div class="logo-like"/>
      </button>
    </div>

  </section>
</template>

<script setup lang="ts">
import {Ref, ref, watch} from "vue";
import {ItemInterface} from "~/types/item";
import {Pages, StatusDeal} from "~/types/pages";
import {mainStore} from "~/store/store";
import toggleFavorite from '~/mixins/toggleFavorite'
import changeDeal from '~/mixins/changeDeal'

const {updateFavorite} = toggleFavorite();
const {updateDealType} = changeDeal();
const {filters} = mainStore();

const props = defineProps(['item']);

let currentItem: Ref<ItemInterface> = ref(props.item);
let currentTotalPrice: number = countTotalPrice(currentItem.value);

watch(() => props.item, updatedItem => {
  currentItem = updatedItem;
  currentTotalPrice = countTotalPrice(currentItem);
});

function countTotalPrice(currentItem: ItemInterface): number {
  return currentItem.price * currentItem.quantity;
}

function updateFavoriteStatus(currentItem: ItemInterface): void {
  const currentItemId: number | undefined = filters.page === Pages.Deal ? currentItem.parentId : currentItem.id;
  if (currentItemId) {
    updateFavorite(currentItemId);
  }
}

</script>

<style scoped>
@import "@/style/main-button.css";
@import "@/style/like-button.css";

.info-block {
  mix-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-color);
}

.total-price,
.details {
  font-weight: var(--main-font-weight);
  font-size: var(--font-size);
  color: var(--blue-color);
}

.total-price {
  font-size: 20px;
}

.details {
  display: flex;
  justify-content: space-between;
}

.details span {
  color: var(--light-blue);
  font-weight: var(--secondary-font-weight);
  font-size: var(--font-size);
}

.wrapper-button {
  display: flex;
  gap: 12px;
}

@media screen and (max-width: 1000px) {
  .info-block {
    gap: 10px;
  }

  .wrapper-button {
    justify-content: space-between;
  }
}

@media screen and (max-width: 500px) {
  .info-block {
    padding: 10px;
  }
}
</style>
