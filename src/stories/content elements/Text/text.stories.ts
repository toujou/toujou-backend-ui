import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";

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

const Template: StoryFn<TextProps> = (args: TextProps) => {
    const textSettings: CeBlockSettingsBarItem[] = [
        { title: 'Some settings', value: 'Some value' },
        { title: 'Another setting' },
    ];

    return html`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-bg-page-ce-element class="page-ce-element">
                    <toujou-bg-page-ce-element-header class="page-ce-element-header">
                        <ul class="page-ce-element-header__left">
                            <li class="page-ce-element-header__left-item">
                                <fake-icon class="fake-icon"></fake-icon>
                            </li>
                            <li class="page-ce-element-header__left-item">
                                <fake-icon class="fake-icon"></fake-icon>
                            </li>
                        </ul>
                        <p class="page-ce-element-header__title">Text Element</p>
                        <ul class="page-ce-element-header__right">
                            <li class="page-ce-element-header__right-item">
                                <fake-icon class="fake-icon"></fake-icon>
                            </li>
                            <li class="page-ce-element-header__right-item">
                                <fake-icon class="fake-icon"></fake-icon>
                            </li>
                            <li class="page-ce-element-header__right-item">
                                <fake-icon class="fake-icon"></fake-icon>
                            </li>
                        </ul>
                    </toujou-bg-page-ce-element-header>
                    <toujou-bg-page-ce-element-body class="page-ce-element__body">
                        <toujou-be-page-ce-block class="ce-block">
                            <toujou-be-page-ce-block-content class="ce-block__content">
                                <p>${args.text}</p>
                            </toujou-be-page-ce-block-content>

                            <toujou-be-ce-block-settings-bar class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>

                        </toujou-be-page-ce-block>
                    </toujou-bg-page-ce-element-body>
                </toujou-bg-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const Text = Template.bind({});
Text.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
