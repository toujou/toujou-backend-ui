import { html } from 'lit';
import { Meta } from "@storybook/web-components";

export default {
    title: 'Atoms/Figure',
} as Meta;

const Template = () => {
    return html`<toujou-be-ce-block-figure-group></toujou-be-ce-block-figure-group>`
};

export const Figure = Template.bind({});
