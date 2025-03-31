import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import {
    TbeuiSettingsGroupItem,
    TbeuiSettingsGroupItemType
} from '../../../components/tbeui-settings-group/tbeui-settings-group';

export default {
    title: 'Elements / Settings Group',
    argTypes: {},
} as Meta;

const Template: StoryFn = () => {
    const testSettings: TbeuiSettingsGroupItem[] = [
        { iconName: 'eye', value: 'Eye icon' },
        { iconName: 'crop', value: 'Image has been cropped' },
        { iconName: 'link', value: 'Image has link' },
        { iconName: 'a11y', value: 'Image has accessibility problems', type: TbeuiSettingsGroupItemType.Warning },
    ];

    return html`<tbeui-settings-group .items="${testSettings}"></tbeui-settings-group>`;
};

export const SettingsGroup = Template.bind({});
