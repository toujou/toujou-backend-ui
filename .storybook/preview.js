import '../src/styles/storybook-styles.css';

import '../src/components/ce-block-settings-bar/ce-block-settings-bar';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
    parameters: {
        backgrounds: {
            default: 'be-column-bg',
            values: [
                {
                    name: 'be-column-bg',
                    value: 'var(--tbeui-color-white)'
                }
            ]
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
