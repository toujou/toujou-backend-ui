import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

interface HeadlineProps {
    text: string;
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default {
    title: 'Atoms/Headline',
    argTypes: {
        text: {
            name: 'Text',
            control: 'text',
        },
        tag: {
            name: 'Tag',
            control: { type: 'inline-radio' },
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        },
    }
} as Meta<HeadlineProps>;

const Template: StoryFn<HeadlineProps> = (args: HeadlineProps) => {
    switch (args.tag) {
        case 'h1':
            return html`<h1>${args.text}</h1>`;
        case 'h2':
            return html`<h2>${args.text}</h2>`;
        case 'h3':
            return html`<h3>${args.text}</h3>`;
        case 'h4':
            return html`<h4>${args.text}</h4>`;
        case 'h5':
            return html`<h5>${args.text}</h5>`;
        case 'h6':
            return html`<h6>${args.text}</h6>`;
        default:
            return html`<h1>${args.text}</h1>`;
    }
};

export const Headline = Template.bind({});
Headline.args = {
    text: 'This is a headline',
    tag: 'h1',
};
