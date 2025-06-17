<template>
    <div>
        <input type="checkbox" :checked="modelValue" @change="onChange" />
        <label>{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ label: string; modelValue: boolean }>();
const emit = defineEmits(['update:modelValue']);

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
}
</script>