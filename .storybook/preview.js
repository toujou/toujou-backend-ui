import '../src/styles/storybook-styles.css';

import '../src/components/tbeui-block-headline/tbeui-block-headline';
import '../src/components/tbeui-block-media/tbeui-block-media';
import '../src/components/tbeui-block-text/tbeui-block-text';
import '../src/components/tbeui-icon/tbeui-icon';
import '../src/components/tbeui-new-content-button/tbeui-new-content-button';
import '../src/components/tbeui-page-ce-element/tbeui-page-ce-element';
import '../src/components/tbeui-page-ce-header/tbeui-page-ce-header';
import '../src/components/tbeui-page-column/tbeui-page-column';
import '../src/components/tbeui-page-columns/tbeui-page-columns';
import '../src/components/tbeui-preview/tbeui-preview';
import '../src/components/tbeui-settings-group/tbeui-settings-group';
import '../src/components/tbeui-page-ce-settings-header/tbeui-page-ce-settings-header';

export const parameters = {
    backgrounds: {
        default: 'be-column-bg',
        values: [
            {
                name: 'be-column-bg',
                value: 'var(--tbeui-color-bg)'
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
                'Elements',
                'Content Elements',
                'Pages'
            ],
        },
    },
}

// console.clear();
