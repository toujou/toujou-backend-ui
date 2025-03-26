import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

export default {
    title: 'Elements / Column',
    argTypes: {},
} as Meta;

const Template: StoryFn = () => {
    return html`
        <tbeui-page-columns>
            <tbeui-page-column header-name="Content area">

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element slot="content" header-text="Text">
                    <tbeui-block-text slot="body">
                        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse facere soluta! Accusamus, et excepturi in incidunt nulla quae ullam! Alias atque culpa esse hic numquam, recusandae repellat rerum voluptatibus.</p>
                    </tbeui-block-text>
                </tbeui-page-ce-element>

                <tbeui-new-content-button slot="content"></tbeui-new-content-button>

                <tbeui-page-ce-element slot="content" header-text="Text">
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
