import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

export default {
    title: 'Atoms/Button',
    argTypes: {},
} as Meta;

const Template: StoryFn = () => {
    return html`
        <tbeui-button
            icon-name="plus"
            button-size="s"
            is-centered
        >Create new content</tbeui-button>
    `;
};

export const Button = Template.bind({});
