import '../src/styles/storybook-styles.css';

// Atoms
import '../src/components/atoms/tbeui-button/tbeui-button';
import '../src/components/atoms/tbeui-icon/tbeui-icon';
import '../src/components/atoms/tbeui-preview/tbeui-preview';

// Molecules
import '../src/components/molecules/tbeui-settings-bar/tbeui-settings-bar';
import '../src/components/molecules/tbeui-column/tbeui-column';
import '../src/components/molecules/tbeui-element/tbeui-element';
import '../src/components/molecules/tbeui-element-header/tbeui-element-header';
import '../src/components/molecules/tbeui-block-text/tbeui-block-text';
import '../src/components/molecules/tbeui-block-media/tbeui-block-media';
import '../src/components/molecules/tbeui-block-figure-group/tbeui-block-figure-group';

// import '../src/components/molecules/xxx_media-block/media-block.molecule';
// import '../src/components/molecules/xxx_text-block/text-block.molecule';
// import '../src/components/xxx_ce-block-figure-group/ce-block-figure-group';
// import '../src/components/xxx_ce-block-figure-group/ce-block-figure-group';
// import '../src/components/xxx_page-ce-block/page-ce-block';
// import '../src/components/xxx_page-ce-element/page-ce-element';
// import '../src/components/xxx_page-ce-element-header/page-ce-element-header';

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
                'Atoms',
                'Molecules',
                'Content Elements',
                'Pages'
            ],
        },
    }
}
