import { html } from 'lit';
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group";

export default {
    title: 'Content Elements / Text / Four Text Blocks',
    component: 'text',
};

const headlineOneSettings: TbeuiSettingsGroupItem[] = [
    { iconName: 'h3', value: 'Headline 3' },
];

const textOneSettings: TbeuiSettingsGroupItem[] = [
    { iconName: 'p', value: 'Paragraph' },
];

const Template = () => {
    return html`
        <tbeui-page-column header-name="Content area">

            <tbeui-page-ce-element
                slot="content"
                ctype-name="Four text block"
                id="col-1"
                column-layout="25-25-25-25"
            >
                <tbeui-page-ce-element-column slot="body">
                    <tbeui-block-headline .blockSettings="${headlineOneSettings}">
                        <h3 slot="content">Text one Headline</h3>
                    </tbeui-block-headline>

                    <tbeui-block-text .blockSettings="${textOneSettings}">
                        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </tbeui-block-text>

                </tbeui-page-ce-element-column>

                <tbeui-page-ce-element-column slot="body">
                    <tbeui-block-headline .blockSettings="${headlineOneSettings}">
                        <h3 slot="content">Text two Headline</h3>
                    </tbeui-block-headline>

                    <tbeui-block-text .blockSettings="${textOneSettings}">
                        <p slot="content">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                    </tbeui-block-text>

                </tbeui-page-ce-element-column>

                <tbeui-page-ce-element-column slot="body">
                    <tbeui-block-headline .blockSettings="${headlineOneSettings}">
                        <h3 slot="content">Text three Headline</h3>
                    </tbeui-block-headline>

                    <tbeui-block-text .blockSettings="${textOneSettings}">
                        <p slot="content">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    </tbeui-block-text>

                </tbeui-page-ce-element-column>

                <tbeui-page-ce-element-column slot="body">
                    <tbeui-block-headline .blockSettings="${headlineOneSettings}">
                        <h3 slot="content">Text four Headline</h3>
                    </tbeui-block-headline>

                    <tbeui-block-text .blockSettings="${textOneSettings}">
                        <p slot="content">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                    </tbeui-block-text>

                </tbeui-page-ce-element-column>

            </tbeui-page-ce-element>

        </tbeui-page-column>

        </toujou-be-page-column>
    `;
}

export const FourTextBlocks = Template.bind({});
