import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

export default {
    title: 'Elements / Drag Drop',
    argTypes: {},
} as Meta;


const Template: StoryFn = () => {
    return html`
        <tbeui-page-columns>
            <tbeui-page-column header-name="Content area">

                <tbeui-drop-zone slot="content"></tbeui-drop-zone>

                <tbeui-page-ce-element
                    slot="content"
                    ctype-name="Text"
                    element-name="Simple text"
                    id="col-1"
                >
                    <tbeui-block-text slot="body">
                        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse facere soluta! Accusamus, et excepturi in incidunt nulla quae ullam! Alias atque culpa esse hic numquam, recusandae repellat rerum voluptatibus.</p>
                    </tbeui-block-text>
                </tbeui-page-ce-element>

                <tbeui-drop-zone slot="content"></tbeui-drop-zone>

            </tbeui-page-column>

        </tbeui-page-columns>
    `;
};

export const DragDrop = Template.bind({});
