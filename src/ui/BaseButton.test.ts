// src/ui/BaseButton.test.ts
import { render, fireEvent } from '@testing-library/vue';
import { describe, it, expect, vi } from 'vitest'
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
    it('отображает текст из слота', () => {
        const { getByText } = render(BaseButton, {
            slots: {
                default: 'Нажми меня',
            },
        });
        getByText('Нажми меня');
    });

    it('вызывает событие click', async () => {
        const handleClick = vi.fn();

        const { getByRole } = render(BaseButton, {
            attrs: { onClick: handleClick },
            slots: {
                default: 'Кликни',
            },
        });

        await fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalled();
    });
});
