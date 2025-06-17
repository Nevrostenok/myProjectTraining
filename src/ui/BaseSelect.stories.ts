import BaseSelect from './BaseSelect.vue';

export default {
    title: 'Components/BaseSelect',
    component: BaseSelect,
};

const options = [
    { value: 'apple', label: 'Яблоко' },
    { value: 'banana', label: 'Банан' },
    { value: 'cherry', label: 'Вишня' },
];

export const Default = () => ({
    components: { BaseSelect },
    data() {
        return {
            selected: '',
        };
    },
    template: `
    <BaseSelect
      v-model="selected"
      label="Выберите фрукт"
      :options="options"
      placeholder="Не выбрано"
    />
  `,
    setup() {
        return { options };
    },
});

export const WithError = () => ({
    components: { BaseSelect },
    data() {
        return {
            selected: '',
        };
    },
    template: `
    <BaseSelect
      v-model="selected"
      label="Фрукт"
      :options="options"
      error="Это поле обязательно"
    />
  `,
    setup() {
        return { options };
    },
});
