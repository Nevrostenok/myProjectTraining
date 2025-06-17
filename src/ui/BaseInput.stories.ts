// src/ui/BaseInput.stories.ts
import BaseInput from './BaseInput.vue';
import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BaseInput> = {
    title: 'UI/BaseInput',
    component: BaseInput,
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
    render: () => ({
        components: { BaseInput },
        setup() {
            const value = ref('');
            return { value };
        },
        template: `<BaseInput v-model="value" label="Имя" placeholder="Введите имя" />`,
    }),
};

export const WithError: Story = {
    render: () => ({
        components: { BaseInput },
        setup() {
            const value = ref('');
            return { value };
        },
        template: `<BaseInput v-model="value" label="Имя" placeholder="Введите имя" error="Обязательное поле" />`,
    }),
};
