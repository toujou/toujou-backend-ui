import '../src/styles/storybook-styles.css';

import '../src/components/be-button/be-button';
import '../src/components/ce-block-icon/ce-block-icon';
import '../src/components/ce-block-figure-group/ce-block-figure-group';
import '../src/components/ce-block-settings-bar/ce-block-settings-bar';
import '../src/components/page-ce-block/page-ce-block';
import '../src/components/page-ce-element/page-ce-element';
import '../src/components/page-ce-element-header/page-ce-element-header';

export const parameters = {
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
    options: {
        storySort: {
            order: [
                'Content Elements', // First level of grouping
                ['Text Elements',
                    ['Text', 'Two Text Blocks', 'Three Text Blocks', 'Four Text Blocks']
                ],
            ],
        },
    }
}
