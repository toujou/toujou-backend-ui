import { html } from 'lit';
import { Meta } from "@storybook/web-components";
import {
    TbeuiSettingsGroupItem,
    TbeuiSettingsGroupItemType
} from "@components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Media / Single Media',
} as Meta;

const mediaSettings: TbeuiSettingsGroupItem[] = [
    { iconName: 'link', value: 'Image has a link' },
    { iconName: 'eye', value: 'Lightbox is on' },
    { iconName: 'crop', value: 'Image is cropped' },
    { iconName: 'a11y', value: 'Alt text is missing', type: TbeuiSettingsGroupItemType.Warning },
];

const Template = () => {
    return html`
        <tbeui-page-column header-name="Content area">
            <tbeui-new-content-button slot="content"></tbeui-new-content-button>

            <tbeui-page-ce-element
                slot="content"
                ctype-name="Single Media"
                element-name="Test image"
                id="col-1"
            >
                <tbeui-block-media slot="body" .blockSettings="${mediaSettings}"></tbeui-block-media>

            </tbeui-page-ce-element>

            <tbeui-new-content-button slot="content"></tbeui-new-content-button>
        </tbeui-page-column>
    `;
}

export const SingleMedia = Template.bind({});
