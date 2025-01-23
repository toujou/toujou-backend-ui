import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";
import { createTextBlock } from "../../molecules/text-block.molecule";
import { createMediaBlock } from "../../molecules/media-block.molecule";
import { CeBlockFigureGroupSetting } from "../../../components/ce-block-figure-group/ce-block-figure-group";

interface TextWithMediaRightProps {
    text: string;
}

export default {
    title: 'Content Elements/Text Elements/Text With Media Right',
    component: 'text',
    argTypes: {
        text: { control: 'text' },
    },
} as Meta<TextWithMediaRightProps>;

const Template: StoryFn<TextWithMediaRightProps> = (args: TextWithMediaRightProps) => {
    const textSettings: CeBlockSettingsBarItem[] = [
        { title: 'Some settings', value: 'Some value' },
        { title: 'Another setting' },
    ];

    const figureSettings: CeBlockFigureGroupSetting[] = [
        {
            title: 'crop',
            label: 'Cropped image',
            iconName: 'crop'
        },
        {
            title: 'lightbox',
            label: 'Click to enlarge',
            iconName: 'eye'
        },
        {
            title: 'link',
            label: 'Image has a link',
            iconName: 'link'
        },
        {
            title: 'a11y-error',
            label: 'Image has some accessibility errors',
            iconName: 'a11y',
            isWarning: true
        },
    ];

    const elementSettings: CeBlockSettingsBarItem[] = [
        { title: 'Lightbox' },
        { title: 'Autoslide', value: '6s' },
        { title: 'Secondary divider' },
    ];

    return html`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${elementSettings}"
                    header-text="Text with media right"
                    column-layout="66-33"
                >
                    ${createTextBlock(args.text, textSettings)}
                    ${createMediaBlock('16-9', figureSettings)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const TextWithMediaRight = Template.bind({});
TextWithMediaRight.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
