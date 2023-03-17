<template>

  <div class="loader" v-if=" inProgress ">
    <div class="loader__element"></div>
  </div>

  <div class="header-block">
    <div class="decore-element"></div>

    <nav class="wrapper-button">
      <button @click="changeCurrentPage('page', Pages.Favorite)"
              :class="{ selected: currentPage.page === Pages.Favorite }">
        <img src="/like.svg" alt="">
        <span>{{ Pages.Favorite }}</span>
      </button>
      <button @click="changeCurrentPage('page', Pages.Store)"
              :class="{ selected: currentPage.page === Pages.Store }">
        <img src="/block.svg" alt="">
        <span>{{ Pages.Store }}</span>
      </button>
      <button @click="changeCurrentPage('page', Pages.Deal)"
              :class="{ selected: currentPage.page === Pages.Deal }">
        <img src="/bag.svg" alt="">
        <span>{{ Pages.Deal }}</span>
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import {ref, Ref} from 'vue'
import {mainStore} from '~/store/store'
import {storeToRefs} from 'pinia'
import {Filters, Pages, ItemInterface} from "~/types";

const store = storeToRefs(mainStore())
const {changeCurrentPage} = mainStore();
const currentPage: Ref<(Filters)> = ref(store.filters);
const inProgress: Ref<boolean> = ref(store.inProgress)


</script>

<style scoped>

.header-block {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.decore-element {
  width: 100%;
  height: 40px;
  background-color: var(--grey-color);
  border-radius: 0 0 10px 10px;
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
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--main-background-color);
}

span {
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
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

.loader__element {
  height: 7px;
  width: 100%;
  background: var(--light-blue);

}

.loader__element:before {
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
