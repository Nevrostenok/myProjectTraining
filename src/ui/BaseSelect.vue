<template>
    <label class="block">
        <span v-if="label" class="mb-1 block text-sm font-medium text-gray-700">{{ label }}</span>
        <select :value="modelValue" @change="$emit('update:modelValue', $event.target.value)"
            class="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring">
            <option v-if="placeholder" disabled value="">{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
    </label>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: string;
    options: { value: string; label: string }[];
    label?: string;
    placeholder?: string;
    error?: string;
}>();

defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();
</script>