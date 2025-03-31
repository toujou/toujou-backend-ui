import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import {
    TbeuiPageCeSettingsHeaderItem
} from "@components/tbeui-page-ce-settings-header/tbeui-page-ce-settings-header";

export default {
    title: 'Elements / Column',
    argTypes: {},
} as Meta;

const testCeHeaderSettings: TbeuiPageCeSettingsHeaderItem[] = [
    { title: "Divider" },
    { title: "Start", value: "01. 01. 2025" },
    { title: "Test", value: "Has icon", iconName: 'a11y'}
]

const Template: StoryFn = () => {
    return html`
        <tbeui-page-columns>
            <tbeui-page-column header-name="Content area">

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element
                    slot="content"
                    ctype-name="Text"
                    element-name="Simple text"
                    id="col-1"
                    .settingsHeaderItems="${testCeHeaderSettings}"
                >
                    <tbeui-block-text slot="body">
                        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse facere soluta! Accusamus, et excepturi in incidunt nulla quae ullam! Alias atque culpa esse hic numquam, recusandae repellat rerum voluptatibus.</p>
                    </tbeui-block-text>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element slot="content" ctype-name="Text" element-name="Another great text" id="col-2">
                    <tbeui-block-text slot="body">
                        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse facere soluta! Accusamus, et excepturi in incidunt nulla quae ullam! Alias atque culpa esse hic numquam, recusandae repellat rerum voluptatibus.</p>
                    </tbeui-block-text>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

            </tbeui-page-column>
        </tbeui-page-columns>
    `;
};

export const Column = Template.bind({});
