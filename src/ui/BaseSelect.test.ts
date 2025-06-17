import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import BaseSelect from './BaseSelect.vue';

const options = [
    { value: 'apple', label: 'Яблоко' },
    { value: 'banana', label: 'Банан' },
];

describe('BaseSelect', () => {
    it('отображает label и placeholder', () => {
        const { getByText, getByDisplayValue } = render(BaseSelect, {
            props: {
                label: 'Фрукт',
                placeholder: 'Выберите...',
                modelValue: '',
                options,
            },
        });

        getByText('Фрукт');
        getByDisplayValue('Выберите...');
    });

    it('отображает переданные опции', () => {
        const { getByText } = render(BaseSelect, {
            props: {
                modelValue: '',
                options,
            },
        });

        getByText('Яблоко');
        getByText('Банан');
    });

    it('эмитит update:modelValue при выборе', async () => {
        const { getByDisplayValue, emitted } = render(BaseSelect, {
            props: {
                modelValue: '',
                options,
            },
        });

        const select = getByDisplayValue('') as HTMLSelectElement;
        await fireEvent.update(select, 'banana');

        expect(emitted()['update:modelValue'][0]).toEqual(['banana']);
    });

    it('показывает сообщение об ошибке', () => {
        const { getByText } = render(BaseSelect, {
            props: {
                modelValue: '',
                options,
                error: 'Обязательное поле',
            },
        });

        getByText('Обязательное поле');
    });
});
