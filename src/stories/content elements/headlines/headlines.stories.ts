import { html } from 'lit';
import { Meta } from "@storybook/web-components";
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Headlines / Headline',
} as Meta;

const h1Settings: TbeuiSettingsGroupItem[] = [
    { iconName: 'h1', value: 'h1 headline' },
];

const h2Settings: TbeuiSettingsGroupItem[] = [
    { iconName: 'h2', value: 'h2 headline' },
];

const h3Settings: TbeuiSettingsGroupItem[] = [
    { iconName: 'h3', value: 'h3 headline' },
];

const Template = () => {
    return html`
            <tbeui-page-column header-name="Content area">
                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element
                    slot="content"
                    ctype-name="Headline"
                    element-name="Nice headline"
                    id="col-1"
                >
                    <tbeui-block-headline slot="body" .blockSettings="${h1Settings}">
                        <h1 slot="content">This is a beautiful H1 headline</h1>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element
                    slot="content"
                    ctype-name="Headline"
                    element-name="Another nice headline"
                    id="col-2"
                >
                    <tbeui-block-headline slot="body" .blockSettings="${h2Settings}">
                        <h2 slot="content">This is a beautiful H2 headline</h2>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element
                    slot="content"
                    ctype-name="Headline"
                    element-name="This is a H3"
                    id="col-1"
                >
                    <tbeui-block-headline slot="body" .blockSettings="${h3Settings}">
                        <h3 slot="content">This is a beautiful H3 headline</h3>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>
            </tbeui-page-column>
    `;
}

export const Headline = Template.bind({});
