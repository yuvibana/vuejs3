<script setup>
import TodoCreator from "../components/TodoCreator.vue";
import { ref } from "vue"
import { uid } from "uid"

const todoList = ref([])

const createTodo = (todo) => {
  todoList.value.push({
    id: uid(),
    todo,
    isCompleted: null,
    isEditing: null
  })
};

</script>

<template>
  <main class="container">
    <h1>Create Todo</h1>
    <TodoCreator @create-todo="createTodo" />
  </main>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 28px;
  margin-bottom: 15px;
}
</style>