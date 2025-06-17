// src/ui/BaseButton.stories.ts
import BaseButton from './BaseButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BaseButton> = {
    title: 'UI/BaseButton',
    component: BaseButton,
};

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
    render: () => ({
        components: { BaseButton },
        template: `<BaseButton @click="alert('Клик!')">Нажми меня</BaseButton>`,
    }),
};
