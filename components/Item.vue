<template>
  <section class="item">

    <div class="image">
      <img src="/Image.svg">
    </div>

    <section class="description-block">
      <p class="status">{{ item.typeDeal }}</p>
      <p class="title">{{ item.title }}</p>
      <div class="location">
        <img src="/location.svg">
        <p>{{ item.location }}</p>
      </div>
      <p class="seller"><span>Продавец</span>{{ item.seller }}</p>
      <p class="type"><span>Вид товара</span>{{ item.typeOfGoods }}</p>
      <p class="description">{{ item.description }}</p>
    </section>
    <DealInfo :item="item"></DealInfo>
  </section>

</template>

<script setup lang="ts">
import {ref, Ref, watch} from 'vue'
import DealInfo from "~/components/DealInfo.vue";
import {ItemInterface} from "~/types";

let props = defineProps(['getItem'])

let item: Ref<ItemInterface> = ref(props.getItem)

watch(() => props.getItem, first => {
  item = ref(first)
})

</script>

<style scoped>

.item {
  width: 100%;
  height: 360px;
  border-radius: 10px;
  border: 1px solid var(--grey-color);
  display: flex;
}

.image {
  width: 256px;
  min-width: 256px;
  height: 256px;
  overflow: hidden;
  margin: 20px;
  border-radius: 10px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.description-block {
  padding: 20px 20px 20px 0;
}

.status {
  font-weight: 400;
  font-size: 13px;
  color: var(--light-blue);
  margin-bottom: 15px;
}

.title {
  font-weight: 500;
  font-size: 15px;
  color: var(--blue-color);
  margin-bottom: 20px;
}

.location {
  display: inline-flex;
  align-items: center;
  background-color: var(--main-light-gray-color);
  padding: 5px 8px 5px 10px;
  border-radius: 10px;
  color: var(--blue-color);
  margin-bottom: 12px;
}

.location p {
  font-weight: 400;
  font-size: 13px;
}

.location img {
  width: 15px;
  height: 15px;
}

.seller {
  font-weight: 500;
  font-size: 13px;
  color: var(--blue-color);
  margin-bottom: 12px;
}

.seller span {
  font-weight: 400;
  font-size: 13px;
  color: var(--light-blue);
  margin-right: 4px;
}

.type {
  display: inline-flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 13px;
  background-color: var(--grey-color);
  color: var(--blue-color);
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 12px;
}

.type span {
  font-weight: 400;
  font-size: 13px;
  color: var(--light-blue);
}

.description {
  font-weight: 500;
  font-size: 13px;
  color: var(--blue-color);
}


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

</style>
