import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

interface TextProps {
    /** The text to display in the component */
    text: string;
}

export default {
    title: 'Content Elements/Text Elements',
    component: 'text',
    argTypes: {
        text: { control: 'text' },
    },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args: TextProps) => html`
    <toujou-be-page-ce-element>
        <p slot="header">${args.text}</p>
    </toujou-be-page-ce-element>
`;

export const Text = Template.bind({});
Text.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
