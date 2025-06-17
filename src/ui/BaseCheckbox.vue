<template>
    <label class="inline-flex items-center space-x-2 text-sm">
        <input type="checkbox" :checked="modelValue" @change="$emit('update:modelValue', $event.target.checked)"
            class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <span>{{ label }}</span>
    </label>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: boolean;
    label: string;
}>();

defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
}>();
</script>