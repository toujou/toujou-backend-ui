import { html } from 'lit';
import { Meta } from "@storybook/web-components";

export default {
    title: 'Pages / Page With Three Columns',
    component: 'text',
} as Meta;

const Template = () => {
    return html`
        <tbeui-page-columns>

            <tbeui-page-column header-name="Header area">
                <tbeui-new-content-button slot="content"></tbeui-new-content-button>
            </tbeui-page-column>

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

            </tbeui-page-column>

            <tbeui-page-column header-name="Bottom area">
                <tbeui-new-content-button slot="content"></tbeui-new-content-button>
            </tbeui-page-column>
        </tbeui-page-columns>
    `;
}

export const PageWithThreeColumns = Template.bind({});
