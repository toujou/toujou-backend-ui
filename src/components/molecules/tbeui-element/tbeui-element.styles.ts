import { css } from 'lit';

export const TbeuiElementStyles = css`
    :host {
        --tbeui-element-padding: var(--tbeui-spacing-s);
        --tbeui-element-grid-template-columns: 1fr;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "header"
            "body"
            "settings-bar";
        grid-gap: var(--tbeui-element-padding);
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--tbeui-border-radius-xs);
        box-shadow: none;
        border: 1px solid var(--tbeui-color-middle-grey);
    }

    :host([column-layout="50-50"]) {
        --tbeui-element-grid-template-columns: 1fr 1fr;
    }

    :host([column-layout="33-66"]) {
        --tbeui-element-grid-template-columns: 1fr 2fr;
    }

    :host([column-layout="66-33"]) {
        --tbeui-element-grid-template-columns: 2fr 1fr;
    }

    :host([column-layout="33-33-33"]) {
        --tbeui-element-grid-template-columns: 1fr 1fr 1fr;
    }

    :host([column-layout="25-25-25-25"]) {
        --tbeui-element-grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .header {
        grid-area: header;
        padding: var(--tbeui-element-padding) var(--tbeui-element-padding) 0;
    }

    .body {
        grid-area: body;
        display: grid;
        grid-template-columns: var(--tbeui-element-grid-template-columns);
        grid-gap: var(--tbeui-element-padding);
        padding: 0 var(--tbeui-element-padding);
    }


    :host > .settings-bar {
        grid-area: settings-bar;
    }
`;
