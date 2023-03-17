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
                pay:filters.page === 'Сделки' && currentItem.statusDeal === 'Оплатить',
                paid:filters.page === 'Сделки' && currentItem.statusDeal === 'Оплачено'
                }">
        {{ currentItem.statusDeal }}
      </button>
      <button class="like"
              @click="toggleFavorite(currentItem)"
              :class="{selectedLike:currentItem.isFavorite === true}">
        <!--        <img src="/favourite.svg" alt="">-->
        <div class="logo-like"></div>
      </button>
    </div>

  </section>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, onUnmounted, Ref, ref, watch} from "vue";
import {ItemInterface} from "~/types";
import {mainStore} from "~/store/store";

const props = defineProps(['item'])
const {updateDealType, filters, updateFavorite} = mainStore();
let currentItem: Ref<ItemInterface> = ref(props.item);
let currentTotalPrice: number = countTotalPrice(currentItem.value);

watch(() => props.item, first => {
  currentItem = first
  currentTotalPrice = countTotalPrice(currentItem)

})

function countTotalPrice(currentItem: ItemInterface): number {
  return currentItem.price * currentItem.quantity
}

function toggleFavorite(currentItem:ItemInterface) {
  filters.page === 'Сделки' ? updateFavorite(currentItem.parentId!) : updateFavorite(currentItem.id)
}

</script>

<style scoped>
.info-block {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--grey-color);

}

.info {
  display: block;
  flex-direction: column;
  gap: 15px;
}

.total-price {
  font-weight: 500;
  font-size: 20px;
  color: var(--blue-color);
}

.quantity,
.price {
  display: flex;
  justify-content: space-between;
}

.quantity span,
.price span {
  color: var(--light-blue);
  font-weight: 400;
  font-size: 13px;
}

.quantity p,
.price p {
  color: var(--blue-color);
  font-weight: 500;
  font-size: 13px;
}

.wrapper-button {
  display: flex;
  gap: 12px;

}

.wrapper-button .edd-deal,
.wrapper-button .like {
  border-radius: 10px;
  border: none;
  height: 50px;
  cursor: pointer;
}

.wrapper-button .edd-deal {
  width: 200px;
  font-weight: 500;
  font-size: 15px;
  color: var(--blue-color);
}

.wrapper-button .like {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}

.wrapper-button .pay {
  background-color: #69C57F;
  color: var(--main-background-color);
}

.wrapper-button .paid {
  color: var(--light-blue);
}

.logo-like {
  width: 30px;
  height: 30px;
  background-color: var(--blue-color);
  mask: url(/favourite.svg) no-repeat center;
}

.selectedLike {
  background-color: var(--blue-color);
}

.selectedLike .logo-like {
  background-color: var(--main-background-color);
}
</style>
