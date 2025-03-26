import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { TbeuiSettingsBarItem } from "../../../components/tbeui-settings-bar/tbeui-settings-bar";
import {
    TbeuiBlockFigureGroupSetting
} from "../../../components/tbeui-block-figure-group/tbeui-block-figure-group";

export default {
    title: 'Molecules / Column',
    argTypes: {},
} as Meta;

const textPreviewSettings: TbeuiSettingsBarItem[] = [
    { title: 'Some settings', value: 'Some value' },
    { title: 'Another setting' },
];

const figurePreviewSettings: TbeuiBlockFigureGroupSetting[] = [
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

const textWithMediaLeftSettings: TbeuiSettingsBarItem[] = [
    { title: 'Publish date', value: '01.01.2025' },
    { title: 'Primary divider' },
];

const Template: StoryFn = () => {
    return html`
        <tbeui-page-column header-name="Content area">
            <tbeui-page-ce-element slot="content" header-text="Headline">
                <tbeui-block-text slot="body">
                    <h3 slot="content">Headline</h3>
                </tbeui-block-text>
            </tbeui-page-ce-element>

            <tbeui-new-content-button slot="content"></tbeui-new-content-button>

            <tbeui-page-ce-element slot="content" header-text="Text">
                <tbeui-block-text slot="body">
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse facere soluta! Accusamus, et excepturi in incidunt nulla quae ullam! Alias atque culpa esse hic numquam, recusandae repellat rerum voluptatibus.</p>
                </tbeui-block-text>
            </tbeui-page-ce-element>

            <tbeui-new-content-button slot="content"></tbeui-new-content-button>

            <tbeui-page-ce-element
                class="element"
                .elementSettings="${textWithMediaLeftSettings}"
                header-text="Text with media left"
                column-layout="33-66"
                slot="content"
            >
                <tbeui-block-media
                    slot="body"
                    image-aspect-ratio="16-9"
                    no-padding="true"
                    .figureSettings="${figurePreviewSettings}"
                ></tbeui-block-media>

                <tbeui-block-text
                    slot="body"
                    .blockSettings="${textPreviewSettings}"
                >
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor ex omnis? Fugiat, ipsum iste magni natus nisi nostrum officiis recusandae repellendus. Aliquid, ea eius magni omnis reprehenderit sapiente tempore?</p>
                </tbeui-block-text>
            </tbeui-page-ce-element>

        </tbeui-page-column>
    `;
};

export const Column = Template.bind({});
