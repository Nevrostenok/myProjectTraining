<template>
  <ul class="mt-4">
    <TaskItem v-for="task in store.tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/store/taskStore'
import TaskItem from './TaskItem.vue'

const store = useTaskStore()
</script>
