import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";
import { CeBlockSettingsBarItem } from '@components/ce-block-settings-bar/ce-block-settings-bar';

export default {
    title: 'Atoms/Settings Bar',
    argTypes: {},
} as Meta;

// Template for the story
const Template: StoryFn = () => {
    const testSettings: CeBlockSettingsBarItem[] = [
        { title: 'Item One', value: 'Value One' },
        { title: 'Item Two', value: 'Value Two' },
        { title: 'Item Three' },
    ];

    return html`<toujou-be-ce-block-settings-bar .items="${testSettings}"></toujou-be-ce-block-settings-bar>`;
};

// Export the default story
export const Default = Template.bind({});
Default.storyName = 'Default Settings Bar';
