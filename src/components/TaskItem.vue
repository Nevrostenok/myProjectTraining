<template>
  <li class="flex items-center justify-between p-2 border-b">
    <label class="flex items-center gap-2 cursor-pointer w-full">
      <input type="checkbox" :checked="task.done" @change="toggle" />
      <span :class="{ 'line-through text-gray-400': task.done }">{{ task.text }}</span>
    </label>
    <button class="text-red-500 hover:text-red-700" @click="remove" aria-label="Удалить задачу">
      ✕
    </button>
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useTaskStore } from '../store/taskStore'
import type { Task } from '../store/taskStore'

const props = defineProps<{ task: Task }>()

const store = useTaskStore()

function toggle() {
  store.toggleTask(props.task.id)
}

function remove() {
  store.removeTask(props.task.id)
}
</script>
