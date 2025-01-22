import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";

interface TextProps {
    /** The text to display in the component */
    text: string;
}

export default {
    title: 'Content Elements/Text Elements/Text',
    component: 'text',
    argTypes: {
        text: { control: 'text' },
    },
} as Meta<TextProps>;

const Template: StoryFn<TextProps> = (args: TextProps) => {
    const textSettings: CeBlockSettingsBarItem[] = [
        { title: 'Some settings', value: 'Some value' },
        { title: 'Another setting' },
    ];


    const elementSettings: CeBlockSettingsBarItem[] = [
        { title: 'Publish date', value: '01.01.2025' },
        { title: 'Primary divider' },
    ];

    return html`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element class="page-ce-element" .elementSettings="${elementSettings}" header-text="Text element">
                    <toujou-be-page-ce-block class="ce-block" slot="body">
                        <slot name="content" slot="content">
                            <p>${args.text}</p>
                        </slot>
                        <toujou-be-ce-block-settings-bar slot="settings-bar" class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>
                    </toujou-be-page-ce-block>
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const Text = Template.bind({});
Text.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
