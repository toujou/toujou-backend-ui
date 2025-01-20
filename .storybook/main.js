/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
};
export default config;
