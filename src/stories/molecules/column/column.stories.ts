import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { TbeuiSettingsBarItem } from "../../../components/molecules/tbeui-settings-bar/tbeui-settings-bar";
import {
    TbeuiBlockFigureGroupSetting
} from "../../../components/molecules/tbeui-block-figure-group/tbeui-block-figure-group";
import { text } from "node:stream/consumers";

export default {
    title: 'Molecules / Column',
    argTypes: {},
} as Meta;

const textSettings: TbeuiSettingsBarItem[] = [
    { title: 'Some settings', value: 'Some value' },
    { title: 'Another setting' },
];

const figureSettings: TbeuiBlockFigureGroupSetting[] = [
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
]

const elementSettings: TbeuiSettingsBarItem[] = [
    { title: 'Publish date', value: '01.01.2025' },
    { title: 'Primary divider' },
];

const Template: StoryFn = () => {
    return html`
        <tbeui-column header-name="Content area">
            <tbeui-element slot="content" header-text="Content element One">
                <tbeui-block-text slot="body">
                    <p slot="content">Example one</p>
                </tbeui-block-text>
            </tbeui-element>

            <tbeui-element slot="content" header-text="Content element two">
                <tbeui-block-text slot="body">
                    <p slot="content">Example two</p>
                </tbeui-block-text>
            </tbeui-element>

            <tbeui-element
                header-text="Text with media left"
                column-layout="33-66"
                slot="content"
            >
                <tbeui-block-text slot="body">
                    <p slot="content">Example three</p>
                </tbeui-block-text>
            </tbeui-element>
        </tbeui-column>
    `;
};

export const Column = Template.bind({});
