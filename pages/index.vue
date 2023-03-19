<template>

  <div class="main-block">
    <Header></Header>
    <MainPages></MainPages>
  </div>

</template>

<script setup lang="ts">

import MainPages from "~/pages/MainPages";
import {onMounted} from "vue";
import requestsServer from '~/mixins/requestsServer'

const {getItems} = requestsServer();

onMounted(() => {
  getItems();
})
</script>

<style scoped>
.main-block {
  width: 1200px;
  /*max-width: 1200px;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 77px;
  transition: width 0.5s;
}

@media screen and (max-width: 1200px) {
  .main-block {
    width: 1000px;
  }
}

@media screen and (max-width: 1000px) {
  .main-block {
    width: 800px;
  }
}

@media screen and (max-width: 800px) {
  .main-block {
    width: 500px;
  }
}

@media screen and (max-width: 500px) {
  .main-block {
    width: 300px;
    gap: 50px;
  }
}
</style>
