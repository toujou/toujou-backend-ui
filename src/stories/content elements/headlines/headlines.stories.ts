import { html } from 'lit';
import { Meta } from "@storybook/web-components";
import { TbeuiSettingsGroupItem } from "../../../components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Headlines / Headline',
    component: 'text',
} as Meta;

const headlineSettings: TbeuiSettingsGroupItem[] = [
    {
        title: 'headline-h1',
        value: 'h1 headline',
    },
]

const Template = () => {
    return html`
            <tbeui-page-column header-name="Content area">
                <tbeui-page-ce-element slot="content" header-text="Headline">
                    <tbeui-block-headline slot="body" .headlineSettings="${headlineSettings}">
                        <h3 slot="content">This is a beautiful headline</h3>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

                <tbeui-page-ce-element slot="content" header-text="Headline">
                    <tbeui-block-headline slot="body" .headlineSettings="${headlineSettings}">
                        <p slot="content">This is a beautiful headline</p>
                    </tbeui-block-headline>
                </tbeui-page-ce-element>

            </tbeui-page-column>
    `;
}

export const Headline = Template.bind({});
