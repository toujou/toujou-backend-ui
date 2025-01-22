import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";

interface TwoTextBlocksProps {
    /** The text to display in the component */
    textOne: string;
    textTwo: string;
    layout: '50-50' | '33-66' | '66-33';
}

export default {
    title: 'Content Elements/Text Elements/Two Text Blocks',
    component: 'text',
    argTypes: {
        textOne: { control: 'text' },
        textTwo: { control: 'text' },
        layout: {
            name: 'Layout',
            control: { type: 'inline-radio' },
            options: ['50-50', '33-66', '66-33'],
        }
    },
} as Meta<TwoTextBlocksProps>;

const Template: StoryFn<TwoTextBlocksProps> = (args: TwoTextBlocksProps) => {
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
                <toujou-be-page-ce-element class="page-ce-element" .elementSettings="${elementSettings}" header-text="Two text blocks" column-layout="${args.layout}">
                    <toujou-be-page-ce-block class="ce-block" slot="body">
                        <slot name="content" slot="content">
                            <p>${args.textOne}</p>
                        </slot>
                        <toujou-be-ce-block-settings-bar slot="settings-bar" class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>
                    </toujou-be-page-ce-block>

                    <toujou-be-page-ce-block class="ce-block" slot="body">
                        <slot name="content" slot="content">
                            <p>${args.textTwo}</p>
                        </slot>
                        <toujou-be-ce-block-settings-bar slot="settings-bar" class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>
                    </toujou-be-page-ce-block>
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const TwoTextBlocks = Template.bind({});
TwoTextBlocks.args = {
    textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    textTwo: 'Tempus accumsan lobortis donec nostra tortor justo. Dapibus eget sed augue ac nunc ornare luctus. Malesuada interdum in phasellus dapibus purus orci. Sem pulvinar cubilia lacinia lobortis; penatibus aptent mattis elementum. Euismod quam dolor tempor velit, imperdiet metus. Nec justo facilisis est mattis posuere felis. Faucibus nec quis nisl ligula nibh pharetra aptent nullam. ',
    layout: '50-50',
}
