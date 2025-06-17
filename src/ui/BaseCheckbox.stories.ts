import BaseCheckbox from './BaseCheckbox.vue';

export default {
    title: 'Components/BaseCheckbox',
    component: BaseCheckbox,
};

export const Default = () => ({
    components: { BaseCheckbox },
    data() {
        return {
            checked: false,
        };
    },
    template: `
    <BaseCheckbox
      v-model="checked"
      label="Согласен с условиями"
    />
  `,
});
