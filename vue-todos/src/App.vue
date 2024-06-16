<script setup>
import { RouterLink, RouterView } from "vue-router";
import TodoHeader from "./components/TodoHeader.vue";
</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style lang="scss">
* {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none; 
  text-decoration: none;
  font-size: 14px;
  text-align: center;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 15px;
}
</style>
