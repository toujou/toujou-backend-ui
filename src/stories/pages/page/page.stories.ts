import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from "../../../components/ce-block-settings-bar/ce-block-settings-bar";
import { CeBlockFigureGroupSetting } from "../../../components/ce-block-figure-group/ce-block-figure-group";

interface PageProps {
    text: string;
}

export default {
    title: 'Pages/ Text Elements',
    component: 'text',
} as Meta<PageProps>;

function createNewContentButton() {
    return html`
        <toujou-be-button
            icon-name="plus"
            button-size="s"
            is-centered
        >Create new content</toujou-be-button>
    `;
}

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
]

const elementSettings: CeBlockSettingsBarItem[] = [
    { title: 'Publish date', value: '01.01.2025' },
    { title: 'Primary divider' },
];

const Template:StoryFn<PageProps> = (args: PageProps) => {
    return html`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                ${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${elementSettings}"
                    header-text="Four text blocks"
                    column-layout="25-25-25-25"
                >
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                </toujou-be-page-ce-element>

                ${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${elementSettings}"
                    header-text="Text element"
                >
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                </toujou-be-page-ce-element>

                ${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${elementSettings}"
                    header-text="Two text blocks"
                    column-layout="50-50"
                >
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                </toujou-be-page-ce-element>

                ${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${elementSettings}"
                    header-text="Text with media left"
                    column-layout="33-66"
                >
                    <toujou-be-media-block
                        slot="body"
                        image-aspect-ratio="16-9"
                        no-padding="true"
                        .figureSettings="${figureSettings}"
                    ></toujou-be-media-block>

                    <toujou-be-text-block
                        slot="body"
                        text="${args.text}"
                        .blockSettings="${textSettings}"
                    ></toujou-be-text-block>
                </toujou-be-page-ce-element>

                ${createNewContentButton()}
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `;
}

export const TextElements = Template.bind({});
TextElements.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
