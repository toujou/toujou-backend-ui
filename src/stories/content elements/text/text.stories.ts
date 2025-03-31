import { html } from 'lit';
import { Meta } from "@storybook/web-components";
import { TbeuiSettingsGroupItem } from "../../../components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Text / Text',
} as Meta;

const textSettings: TbeuiSettingsGroupItem[] = [
    { iconName: 'p', value: 'Paragraph' },
];

const listSettings: TbeuiSettingsGroupItem[] = [
    { iconName: 'ul', value: 'Unordered list' },
];

const Template = () => {
    return html`
        <tbeui-page-column header-name="Content area">

            <tbeui-page-ce-element
                slot="content"
                ctype-name="Text"
                element-name="Simple text"
                id="col-1"
            >
                <tbeui-block-text slot="body" .blockSettings="${textSettings}">
                    <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </tbeui-block-text>

                <tbeui-block-text slot="body" .blockSettings="${textSettings}">
                    <p slot="content">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
                </tbeui-block-text>

                <tbeui-block-text slot="body" .blockSettings="${listSettings}">
                    <ul class="list" slot="content">
                        <li>Item one</li>
                        <li>Item two</li>
                        <li>Item three</li>
                    </ul>
                </tbeui-block-text>
            </tbeui-page-ce-element>

        </tbeui-page-column>
    `;
}

export const Text = Template.bind({});
