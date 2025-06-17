<!-- src/ui/BaseButton.vue -->
<template>
    <button :class="[
        'py-2 px-4 rounded font-semibold',
        variant === 'primary' ? 'bg-blue-500 text-white' :
            variant === 'secondary' ? 'bg-gray-300 text-black' :
                variant === 'danger' ? 'bg-red-500 text-white' : '',
        disabled && 'opacity-50 cursor-not-allowed',
    ]" :disabled="disabled" v-bind="$attrs" @click="$emit('click')">
        <slot />
    </button>
</template>

<script setup lang="ts">
defineProps<{
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
}>();
</script>