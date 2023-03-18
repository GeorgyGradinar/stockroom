<template>
  <section class="item">

    <div class="image">
      <img :src="item.urlImage" alt="main image">
    </div>

    <section class="description-block">
      <p class="status">{{ item.typeDeal }}</p>
      <p class="title">{{ item.title }}</p>
      <div class="location">
        <img src="/location.svg" alt="logo location">
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
import {ItemInterface} from "~/types/item";

let props = defineProps(['getItem']);
let item: Ref<ItemInterface> = ref(props.getItem);

watch(() => props.getItem, updatedItem => {
  item = ref(updatedItem);
})

</script>

<style scoped>

.item {
  width: 100%;
  height: 360px;
  border-radius: var(--border-radius);
  border: 1px solid var(--grey-color);
  display: flex;
}

.image {
  width: 256px;
  min-width: 256px;
  height: 256px;
  overflow: hidden;
  margin: 20px;
  border-radius: var(--border-radius);
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description-block {
  padding: 20px 20px 20px 0;
}

.item {
  font-weight: var(--secondary-font-weight);
  font-size: var(--font-size);
}

.description-block {
  font-weight: var(--main-font-weight);
  font-size: var(--font-size);
  color: var(--blue-color);
}

.status {
  color: var(--light-blue);
  margin-bottom: 15px;
}

.title {
  margin-bottom: 20px;
}

.location {
  display: inline-flex;
  align-items: center;
  background-color: var(--main-light-gray-color);
  padding: 5px 8px 5px 10px;
  border-radius: var(--border-radius);
  margin-bottom: 12px;
}

.location img {
  width: 15px;
  height: 15px;
}

.seller {
  margin-bottom: 12px;
}

.seller span {
  margin-right: 4px;
}

.type {
  display: inline-flex;
  flex-direction: column;
  background-color: var(--grey-color);
  padding: 8px;
  border-radius: var(--border-radius);
  margin-bottom: 12px;
}

.quantity span,
.price span,
.type span,
.seller span {
  color: var(--light-blue);
}

</style>
