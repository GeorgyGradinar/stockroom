<template>
  <header>
    <section class="type-items">
      <button class="button-type-items"
              :class="{selected:currentFilters.type === 'Все типы'}"
              @click="changeFilters('type','Все типы')">
        Все типы
      </button>
      <button class="button-type-items"
              :class="{selected:currentFilters.type === 'Прямые продажи'}"
              @click="changeFilters('type', 'Прямые продажи')">Прямые продажи
      </button>
      <button class="button-type-items"
              :class="{selected:currentFilters.type === 'Аукцион'}"
              @click="changeFilters('type', 'Аукцион')">
        Аукцион
      </button>
    </section>
    <section class="search-block">
      <input class="search-input" @input="debounceSearch()" v-model="currentFilters.search">
      <button class="search-button"><img src="/search.svg" alt=""></button>
    </section>
  </header>
  <Item v-for="item in Items" :getItem="item"></Item>

</template>

<script setup lang="ts">
import Item from '../components/Item.vue'
import {ref, Ref} from 'vue'
import {mainStore} from '~/store/store'
import {storeToRefs} from 'pinia'
import {ItemInterface, Filters} from "~/types";

const store = storeToRefs(mainStore())
const {changeFilters} = mainStore();
const Items: Ref<ItemInterface[]> = ref(store.filteredItems)
const currentFilters: Ref<(Filters)> = ref(store.filters);
let debounceTimeout: number;

function debounceSearch(): void {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  debounceTimeout = setTimeout(() => {
    changeFilters('search', currentFilters.value.search)
  }, 500);
}

</script>

<style scoped>

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.type-items {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: 10px;
  background-color: var(--main-light-gray-color);
}

.button-type-items {
  border: none;
  background-color: var(--main-light-gray-color);
  font-weight: 500;
  font-size: 15px;
  color: var(--light-blue);
  cursor: pointer;
  transition: opacity 0.3s;
}

.button-type-items:hover {
  opacity: 0.7;
}

.search-block {
  display: flex;
  gap: 10px;
  padding: 4px 4px 4px 20px;
  border: 1px solid var(--grey-color);
  border-radius: 10px;
}

.search-input {
  width: 200px;
  border: none;
  color: var(--blue-color);
}

.search-input:focus {
  outline: none;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: var(--blue-color);
  border-radius: 10px;
  border: none;
}

.selected {
  color: var(--blue-color);
}
</style>
