<template>
  <div class="loader" v-if=" inProgress ">
    <div class="loader-element"></div>
  </div>

  <div class="header-block">
    <nav class="wrapper-button">
      <button v-for="buttonPage in allButtonPages"
          @click="updateCurrentPage(FilterKey.Page, buttonPage.page)"
              :class="{ selected: currentPage.page ===  buttonPage.page }">
        <img :src="buttonPage.urlImage" alt="logo button">
        <span>{{ buttonPage.page }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
import {mainStore} from '~/store/store'
import {storeToRefs} from 'pinia'
import {FilterPage, FilterKey} from "~/types/filters";
import {Pages} from "~/types/pages";
import changePage from "~/mixins/changePage";

const store = storeToRefs(mainStore());
const {updateCurrentPage} = changePage();
const currentPage: Ref<(FilterPage)> = ref(store.filters);
const inProgress: Ref<boolean> = ref(store.inProgress);

interface ButtonPages{
  page:string;
  urlImage:string;
}
const allButtonPages: ButtonPages[] = [{page:Pages.Favorite, urlImage:'/like.svg'}, {page:Pages.Store, urlImage:'/block.svg'}, {page:Pages.Deal, urlImage: '/bag.svg'}]

</script>

<style scoped>

.header-block {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.header-block:after {
  content: '';
  width: 1200px;
  height: 40px;
  position: absolute;
  top: 0;
  background-color: var(--grey-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.wrapper-button {
  display: flex;
  justify-content: flex-end;
}

button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: none;
  min-width: 86px;
  height: 50px;
  padding: 6px 0 7px 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: var(--main-background-color);
}

span {
  font-style: normal;
  font-weight: var(--main-font-weight);
  font-size: var(--font-size);
  color: var(--blue-color);
}

.selected {
  background-color: var(--main-light-gray-color);
}

.loader {
  overflow: hidden;
  width: 100vw;
  height: 7px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  z-index: 100000;
}

.loader-element {
  height: 7px;
  width: 100%;
  background: var(--light-blue);
}

.loader-element:before {
  content: '';
  display: block;
  background-color: var(--blue-color);
  height: 10px;
  width: 0;
  animation: getWidth 3s ease-in infinite;
}

@keyframes getWidth {
  100% {
    width: 100%;
  }
}
</style>
