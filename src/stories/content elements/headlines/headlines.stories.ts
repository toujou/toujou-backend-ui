import { html } from 'lit';
import { Meta } from "@storybook/web-components";
import { TbeuiSettingsGroupItem } from "../../../components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Headlines / Headline',
    component: 'text',
} as Meta;

const h1Settings: TbeuiSettingsGroupItem[] = [
    { title: 'h1', value: 'h1 headline' },
];

const h2Settings: TbeuiSettingsGroupItem[] = [
    { title: 'h2', value: 'h2 headline' },
];

const h3Settings: TbeuiSettingsGroupItem[] = [
    { title: 'h3', value: 'h3 headline' },
];

const Template = () => {
    return html`
            <tbeui-page-column header-name="Content area">
                <tbeui-page-ce-element slot="content" header-text="Headline">
                    <tbeui-block-headline slot="body" .headlineSettings="${h1Settings}">
                        <h1 slot="content">This is a beautiful H1 headline</h1>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-page-ce-element slot="content" header-text="Headline">
                    <tbeui-block-headline slot="body" .headlineSettings="${h2Settings}">
                        <h2 slot="content">This is a beautiful H2 headline</h2>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-page-ce-element slot="content" header-text="Headline">
                    <tbeui-block-headline slot="body" .headlineSettings="${h3Settings}">
                        <h3 slot="content">This is a beautiful H3 headline</h3>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

            </tbeui-page-column>
    `;
}

export const Headline = Template.bind({});
