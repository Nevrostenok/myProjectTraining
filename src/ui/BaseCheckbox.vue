<template>
    <div>
        <input type="checkbox" :checked="modelValue" @change="onChange" id="checkbox" />
        <label for="checkbox">{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: boolean;
    label: string;
}>();
const emit = defineEmits(['update:modelValue']);

function onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    emit('update:modelValue', target.checked);
}
</script>