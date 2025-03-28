import { css } from 'lit';

export const TbeuiPageCeElementStyles = css`
    :host {
        --tbeui-element-padding: var(--tbeui-spacing-s);
        --tbeui-element-grid-template-columns: 1fr;
        --tbeui-element-border-radius: var(--tbeui-border-radius-normal);

        display: flex;
        flex-direction: column;
        gap: var(--tbeui-element-padding) 0;
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--tbeui-element-border-radius);
        box-shadow: none;
        border: var(--tbeui-border-default);
        position: relative;
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

    :host::before {
        content: '';
        width: var(--tbeui-border-width-default);
        height: 100%;
        position: absolute;
        top: 0;
        left: calc(var(--tbeui-spacing-normal) * -1);
        background-color: var(--tbeui-color-primary);
    }

    .header {
        grid-area: header;
    }

    .body {
        grid-area: body;
        display: grid;
        grid-template-columns: var(--tbeui-element-grid-template-columns);
        grid-gap: var(--tbeui-element-padding);
        padding: 0 var(--tbeui-element-padding);
    }

    .body[hidden] {
        display: none;
    }
`;
