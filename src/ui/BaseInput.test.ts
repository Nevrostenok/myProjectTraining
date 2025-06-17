// src/ui/BaseInput.test.ts
import { render, fireEvent } from '@testing-library/vue';
import { describe, it, expect, vi } from 'vitest'

import BaseInput from './BaseInput.vue';

describe('BaseInput', () => {
    it('отображает label и placeholder', () => {
        const { getByLabelText } = render(BaseInput, {
            props: {
                modelValue: '',
                label: 'Имя',
                placeholder: 'Введите имя',
            },
        });

        const input = getByLabelText('Имя') as HTMLInputElement;
        expect(input.placeholder).toBe('Введите имя');
    });

    it('отображает ошибку', () => {
        const { getByText } = render(BaseInput, {
            props: {
                modelValue: '',
                error: 'Обязательное поле',
            },
        });

        getByText('Обязательное поле');
    });

    it('обновляет modelValue при вводе', async () => {
        const onUpdate = vi.fn();
        const { getByRole } = render(BaseInput, {
            props: {
                modelValue: '',
                'onUpdate:modelValue': onUpdate,
            },
        });

        const input = getByRole('textbox') as HTMLInputElement;
        await fireEvent.update(input, 'Elina');
        expect(onUpdate).toHaveBeenCalledWith('Elina');
    });
});
