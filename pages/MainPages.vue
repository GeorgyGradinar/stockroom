<template>

  <header>
    <section class="type-items">
      <button class="button-type-items"
              v-for="type in allButtonTypes"
              :class="{selected: currentFilters.type === type}"
              @click="changeFilters(FilterKey.Type, type)">
        {{ type }}
      </button>
    </section>
    <section class="search-block">
      <input class="search-input" @input="debounceSearch()" v-model="currentFilters.search">
      <button class="search-button"><img src="/search.svg" alt=""></button>
    </section>
  </header>
  <section class="items">
    <Item v-for="item in Items" :getItem="item"></Item>
    <button v-if="Items.length && currentFilters.page === Pages.Deal" @click="deleteAllDeals" class="delete">Очистить
    </button>
    <p v-if="!Items.length" class="not-found">{{ currentFilters.page }} не найдены</p>
  </section>


</template>

<script setup lang="ts">
import Item from '../components/Item.vue'
import {ref, Ref} from 'vue'
import {mainStore} from '~/store/store'
import {storeToRefs} from 'pinia'
import updateFilters from "~/mixins/updateFilters";
import changeDeal from "~/mixins/changeDeal";
import {ItemInterface} from "~/types/item";
import {FilterPage, FilterType, FilterKey} from "~/types/filters";
import {Pages} from "~/types/pages";

const store = storeToRefs(mainStore())
const {changeFilters} = updateFilters();
const {deleteAllDeals} = changeDeal();
const Items: Ref<ItemInterface[]> = ref(store.filteredItems);
const Deals: Ref<ItemInterface[]> = ref(store.deals)
const currentFilters: Ref<(FilterPage)> = ref(store.filters);
const allButtonTypes: string[] = [FilterType.AllType, FilterType.DirectSales, FilterType.Auction]

let debounceTimeout: number;

function debounceSearch(): void {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  debounceTimeout = setTimeout(() => {
    changeFilters(FilterKey.Search, currentFilters.value.search)
  }, 500);
}

</script>

<style scoped>
@import "@/style/main-button.css";

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.type-items {
  display: flex;
  gap: 12px;
  padding: 12px;
  border-radius: var(--border-radius);
  background-color: var(--main-light-gray-color);
}

.button-type-items {
  border: none;
  background-color: var(--main-light-gray-color);
  font-weight: var(--main-font-weight);
  font-size: var(--font-size);
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
  border-radius: var(--border-radius);
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
  border-radius: var(--border-radius);
  border: none;
}

.selected {
  color: var(--blue-color);
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
}

.not-found {
  font-weight: var(--main-font-weight);
  font-size: 20px;
  color: var(--blue-color);
  margin-bottom: 15px;
}

@media screen and (max-width: 500px) {

  header {
    flex-direction: column;
    gap: 20px;
  }

  .search-block {
    justify-content: space-between;
  }
}
</style>
