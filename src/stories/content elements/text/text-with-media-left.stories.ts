import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";
import { CeBlockFigureGroupSetting } from "@components/tbeui-block-figure-group/tbeui-block-figure-group.ts";
import { TbeuiSettingsGroupItem } from "../../../components/tbeui-settings-group/tbeui-settings-group";

interface TextWithMediaLeftProps {
    text: string;
}

export default {
    title: 'Content Elements/Text / Text With Media Left',
    component: 'text',
    argTypes: {
        text: { control: 'text' },
    },
} as Meta<TextWithMediaLeftProps>;

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

const listSettings: TbeuiSettingsGroupItem[] = [
    { title: 'ul', value: 'Unordered list' },
];

const Template: StoryFn<TextWithMediaLeftProps> = (args: TextWithMediaLeftProps) => {
    return html`
        <tbeui-page-column header-name="Content area">
            <tbeui-page-ce-element slot="content" header-text="Text with media left">
                <toujou-be-media-block
                    slot="body"
                    image-aspect-ratio="16-9"
                    no-padding="true"
                    .figureSettings="${figureSettings}"
                ></toujou-be-media-block>

                <tbeui-block-text slot="body" .textSettings="${listSettings}">
                    <ul class="list" slot="content">
                        <li>Item one</li>
                        <li>Item two</li>
                        <li>Item three</li>
                    </ul>
                </tbeui-block-text>
            </tbeui-page-ce-element>
        </tbeui-page-column>

    `;
}

export const TextWithMediaLeft = Template.bind({});
TextWithMediaLeft.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
