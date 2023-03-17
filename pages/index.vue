<template>

  <div class="main-block">
    <Header></Header>
    <MainPages></MainPages>
  </div>

</template>

<script setup>

import MainPages from "~/pages/MainPages";
import {onMounted} from "vue";
import requestsServer from '~/mixins/requests-server'

const {getItems} = requestsServer();

onMounted(() => {
  getItems();
})
</script>

<style scoped>
.main-block {
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 77px;
}



</style>
