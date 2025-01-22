import { css } from 'lit';

export const PageCeElementStyles = css`
    :host {
        --page-ce-element-padding: var(--spacing-normal);
        --page-ce-element-grid-template-columns: 1fr;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "header"
            "body"
            "settings-bar";
        grid-gap: var(--page-ce-element-padding);
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--border-radius-s);
        box-shadow: var(--box-shadow-xs);
        border: 1px solid var(--tbeui-color-middle-grey);
    }

    :host([column-layout="50-50"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr;
    }

    :host([column-layout="33-66"]) {
        --page-ce-element-grid-template-columns: 1fr 2fr;
    }

    :host([column-layout="66-33"]) {
        --page-ce-element-grid-template-columns: 2fr 1fr;
    }

    :host([column-layout="33-33-33"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr 1fr;
    }

    :host([column-layout="25-25-25-25"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .page-ce-element-header {
        grid-area: header;
        padding: var(--page-ce-element-padding) var(--page-ce-element-padding) 0;
    }

    .page-ce-element-body {
        grid-area: body;
        display: grid;
        grid-template-columns: var(--page-ce-element-grid-template-columns);
        grid-gap: var(--page-ce-element-padding);
        padding: 0 var(--page-ce-element-padding);
    }


    :host > .ce-block-settings-bar {
        grid-area: settings-bar
    }
`;
