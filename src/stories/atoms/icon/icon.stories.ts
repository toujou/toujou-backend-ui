import { html } from 'lit';
import { Meta, StoryFn } from "@storybook/web-components";

interface IconProps {
    size: 'xl' | 'l' | 'm' | 'default' | 's';
}

export default {
    title: 'Atoms/Icon',
    argTypes: {
        size: {
            name: 'Size',
            control: { type: 'inline-radio' },
            options: ['xl', 'l', 'm', 'default', 's'],
        },
    }
} as Meta<IconProps>;

function getIconVariables() {
    const iconVariables = [];

    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];

        try {
            const rules = styleSheet.cssRules || styleSheet.rules;

            for (let j = 0; j < rules.length; j++) {
                const rule = rules[j];

                if (rule instanceof CSSStyleRule) {
                    const style = rule.style;

                    for (let k = 0; k < style.length; k++) {
                        const propertyName = style[k];

                        if (propertyName.startsWith('--tbeui-icon-')) {
                            const propertyValue = style.getPropertyValue(propertyName);
                            iconVariables.push({ name: propertyName.replace('--tbeui-icon-', ''), value: propertyValue });
                        }
                    }
                }
            }
        } catch (error) {
            console.error('Error accessing stylesheet:', error);
        }
    }

    return iconVariables;
}

const Template: StoryFn<IconProps> = (args: IconProps) => {
    const iconVariables = getIconVariables();

    return html`
        <div class="icons-grid" style="display: flex; flex-flow: row wrap; gap: var(--spacing-xl);">
            ${iconVariables.map((variable) => {
                return html`
                    <toujou-be-ce-block-icon
                        icon-size="${args.size}"
                        icon-name="${variable.name}"
                        ?is-color-icon="${variable.name.startsWith('flag-')}"
                    ></toujou-be-ce-block-icon>
                `;
            })}
        </div>
    `
};

export const Icon = Template.bind({});
Icon.args = {
    size: 'l',
}
