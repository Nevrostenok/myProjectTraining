<template>
  <form @submit.prevent="handleAdd" class="flex gap-2 mb-4">
    <input v-model="text" type="text" placeholder="Новая задача..." class="flex-1 border px-2 py-1 rounded" />
    <button type="submit" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
      Добавить
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '../store/taskStore'

const store = useTaskStore()
const text = ref('')

function handleAdd() {
  if (text.value.trim()) {
    store.addTask(text.value.trim())
    text.value = ''
  }
}
</script>
