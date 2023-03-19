<template>
  <div class="loader" v-if=" inProgress ">
    <div class="loader-element"></div>
  </div>

  <div class="header-block">
    <nav class="wrapper-button">
      <button v-for="buttonPage in allButtonPages"
              @click="updateCurrentPage(FilterKey.Page, buttonPage.page)"
              :class="{ selected: currentPage.page ===  buttonPage.page,
               notificationAddDeal:  Pages.Deal=== buttonPage.page && notificationDeal,
               notificationAddLike:   buttonPage.page === Pages.Favorite && notificationLike}">
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
const notificationDeal: Ref<boolean> = ref(store.notificationDeal);
const notificationLike: Ref<boolean> = ref(store.notificationLike);

interface ButtonPages {
  page: string;
  urlImage: string;
}

const allButtonPages: ButtonPages[] = [
  {page: Pages.Favorite, urlImage: '/like.svg'},
  {page: Pages.Store, urlImage: '/block.svg'},
  {page: Pages.Deal, urlImage: '/bag.svg'}]

</script>

<style scoped>
@import "@/style/animation-notification.css";
@import "@/style/loader.css";

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

@media screen and (max-width: 1200px) {
  .header-block:after {
    width: 1000px;
  }
}

@media screen and (max-width: 1000px) {
  .header-block:after {
    width: 800px;
  }
}

@media screen and (max-width: 800px) {
  .header-block:after {
    width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .header-block:after {
    width: 350px;
  }

  .header-block {
    align-items: center;
  }
}
</style>
