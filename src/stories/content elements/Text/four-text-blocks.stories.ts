import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";

interface FourTextBlocksProps {
    /** The text to display in the component */
    textOne: string;
    textTwo: string;
    textThree: string;
    textFour: string;
    layout: '25-25-25-25';
}

export default {
    title: 'Content Elements/Text Elements/Four Text Blocks',
    component: 'text',
    argTypes: {
        textOne: { control: 'text' },
        textTwo: { control: 'text' },
        textThree: { control: 'text' },
        layout: {
            name: 'Layout',
            control: { type: 'inline-radio' },
            options: ['25-25-25-25'],
        }
    },
} as Meta<FourTextBlocksProps>;

const Template: StoryFn<FourTextBlocksProps> = (args: FourTextBlocksProps) => {
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
                <toujou-be-page-ce-element class="page-ce-element" .elementSettings="${elementSettings}" header-text="Four text blocks" column-layout="${args.layout}">
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
                    </toujou-be-page-ce-block>

                    <toujou-be-page-ce-block class="ce-block" slot="body">
                        <slot name="content" slot="content">
                            <p>${args.textTwo}</p>
                        </slot>
                        <toujou-be-ce-block-settings-bar slot="settings-bar" class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>
                    </toujou-be-page-ce-block>

                    <toujou-be-page-ce-block class="ce-block" slot="body">
                        <slot name="content" slot="content">
                            <p>${args.textFour}</p>
                        </slot>
                        <toujou-be-ce-block-settings-bar slot="settings-bar" class="ce-block-settings-bar" .items="${textSettings}"></toujou-be-ce-block-settings-bar>
                    </toujou-be-page-ce-block>
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const FourTextBlocks = Template.bind({});
FourTextBlocks.args = {
    textOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    textTwo: 'Tempus accumsan lobortis donec nostra tortor justo. Dapibus eget sed augue ac nunc ornare luctus. Malesuada interdum in phasellus dapibus purus orci. Sem pulvinar cubilia lacinia lobortis; penatibus aptent mattis elementum. Euismod quam dolor tempor velit, imperdiet metus. Nec justo facilisis est mattis posuere felis. Faucibus nec quis nisl ligula nibh pharetra aptent nullam.',
    textThree: 'Lacinia tempor himenaeos consectetur hendrerit integer malesuada hendrerit rhoncus. Volutpat vulputate potenti erat non tellus feugiat rutrum tristique. Magnis hendrerit justo enim, rutrum himenaeos ornare augue. Odio sapien blandit vel vel hendrerit erat. Non vestibulum iaculis cras sollicitudin quis nibh platea risus ad. Vel tincidunt sit condimentum senectus habitant hac. Hendrerit sem eros nullam blandit sociosqu cubilia.',
    textFour: 'Mauris ornare cursus tempus metus, consequat dui consequat. Porttitor nostra venenatis varius sapien sollicitudin sodales tincidunt. Gravida primis elementum vivamus inceptos fames. Aliquet hendrerit blandit rutrum volutpat turpis per. Iaculis platea sociosqu facilisis potenti interdum hendrerit sem. Finibus lobortis magnis ut dictum luctus. Vel tincidunt sit condimentum senectu. dui erat himenaeos.',
    layout: '25-25-25-25',
}
