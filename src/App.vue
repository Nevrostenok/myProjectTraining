<template>
  <main class="max-w-xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">📝 Мои задачи</h1>
    <NewTaskForm />
    <TaskList />
  </main>
</template>

<script setup lang="ts">
import NewTaskForm from './components/NewTaskForm.vue'
import TaskList from './components/TaskList.vue'
</script>
