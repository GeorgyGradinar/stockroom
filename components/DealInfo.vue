<template>
  <section class="info-block">

    <div class="info">
      <p class="total-price">{{ currentTotalPrice }} ₽</p>
      <div class="quantity">
        <span>Количество</span>
        <p>{{ currentItem.quantity }} шт.</p>
      </div>
      <div class="price">
        <span>Цена за штуку</span>
        <p>{{ currentItem.price }} ₽</p>
      </div>
    </div>

    <div class="wrapper-button">
      <button class="edd-deal"
              @click="updateDealType(currentItem.id)"
              :class="{
                pay:filters.page === Pages.Deal && currentItem.statusDeal === StatusDeal.Pay,
                paid:filters.page === Pages.Deal && currentItem.statusDeal === StatusDeal.Paid
                }">
        {{ currentItem.statusDeal }}
      </button>
      <button class="like"
              @click="findCurrentPage(currentItem)"
              :class="{selectedLike:currentItem.isFavorite === true}">
        <div class="logo-like"/>
      </button>
    </div>

  </section>
</template>

<script setup lang="ts">
import {Ref, ref, watch} from "vue";
import {ItemInterface } from "~/types/item";
import {Pages, StatusDeal} from "~/types/pages";
import {mainStore} from "~/store/store";
import toggleFavorite from '~/mixins/toggleFavorite'
import changeDeal from '~/mixins/changeDeal'

const {updateFavorite} = toggleFavorite();
const {updateDealType} = changeDeal();
const { filters} = mainStore();

const props = defineProps(['item'])

let currentItem: Ref<ItemInterface> = ref(props.item);
let currentTotalPrice: number = countTotalPrice(currentItem.value);

watch(() => props.item, first => {
  currentItem = first;
  currentTotalPrice = countTotalPrice(currentItem)
});

function countTotalPrice(currentItem: ItemInterface): number {
  return currentItem.price * currentItem.quantity;
}

function findCurrentPage(currentItem:ItemInterface):void {
  filters.page === Pages.Deal ? updateFavorite(currentItem.parentId!) : updateFavorite(currentItem.id);
}

</script>

<style scoped>
@import "@/style/main-button.css";
@import "@/style/like-button.css";

.info-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-color);
}

.info {
  display: block;
  flex-direction: column;
  gap: 15px;
}

.total-price,
.quantity p,
.price p{
  font-weight: var(--main-font-weight);
  font-size: var(--font-size);
}

.total-price,
.quantity p,
.price p{
  color: var(--blue-color);
}

.total-price {
  font-size: 20px;
}

.quantity,
.price {
  display: flex;
  justify-content: space-between;
}

.quantity span,
.price span {
  color: var(--light-blue);
  font-weight: var(--secondary-font-weight);
  font-size: var(--font-size);
}

.wrapper-button {
  display: flex;
  gap: 12px;
}
</style>
