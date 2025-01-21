import '../src/styles/storybook-styles.css';

import '../src/components/fake-icon/fake-icon';

import '../src/components/ce-block-settings-bar/ce-block-settings-bar';
import '../src/components/page-ce-block/page-ce-block';
import '../src/components/page-ce-element/page-ce-element';
import '../src/components/page-ce-element-header/page-ce-element-header';

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
