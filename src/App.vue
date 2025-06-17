<script setup lang="ts">
import { ref } from 'vue';
import NewTaskForm from './components/NewTaskForm.vue';
import TaskList from './components/TaskList.vue';

const tasks = ref([
  { id: 1, text: 'Сделать домашку', done: false },
  { id: 2, text: 'Купить продукты', done: false },
]);
</script>

<template>
  <main class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">📝 Мои задачи</h1>
    <NewTaskForm />
    <TaskList :tasks="tasks" />
  </main>
</template>