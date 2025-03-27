import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { TbeuiSettingsBarItem } from '../../../components/tbeui-settings-group/tbeui-settings-group';

export default {
    title: 'Elements / Settings Bar',
    argTypes: {},
} as Meta;

const Template: StoryFn = () => {
    const testSettings: TbeuiSettingsBarItem[] = [
        { title: 'Item One', value: 'Value One' },
        { title: 'Item Two', value: 'Value Two' },
        { title: 'Item Three' },
    ];

    return html`<tbeui-settings-bar .items="${testSettings}"></tbeui-settings-bar>`;
};

export const SettingsBar = Template.bind({});
