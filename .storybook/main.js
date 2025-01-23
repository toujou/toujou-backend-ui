import { mergeConfig } from 'vite';

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    staticDirs: [{
        from: "../assets/icons",
        to: "assets/icons",
    }],
};
export default config;
