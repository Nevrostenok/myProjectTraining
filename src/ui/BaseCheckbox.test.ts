import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/vue';
import BaseCheckbox from './BaseCheckbox.vue';

describe('BaseCheckbox', () => {
    it('отображает текст label', () => {
        const { getByText } = render(BaseCheckbox, {
            props: {
                modelValue: false,
                label: 'Согласен с условиями',
            },
        });

        getByText('Согласен с условиями');
    });

    it('эмитит update:modelValue при клике', async () => {
        const { getByRole, emitted } = render(BaseCheckbox, {
            props: {
                modelValue: false,
                label: 'Согласен',
            },
        });

        const checkbox = getByRole('checkbox');
        await fireEvent.click(checkbox);

        expect(emitted()['update:modelValue'][0]).toEqual([true]);
    });
});
