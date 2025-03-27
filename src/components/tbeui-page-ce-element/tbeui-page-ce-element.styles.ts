import { css } from 'lit';

export const TbeuiPageCeElementStyles = css`
    :host {
        --tbeui-element-padding: var(--tbeui-spacing-s);
        --tbeui-element-grid-template-columns: 1fr;
        --tbeui-element-grab-area-width: var(--tbeui-spacing-normal);
        --tbeui-element-grab-area-icon-color: var(--tbeui-color-font-light);
        --tbeui-element-grab-area-icon-color-active: var(--tbeui-color-font);

        display: grid;
        grid-template-columns: var(--tbeui-element-grab-area-width) 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "grab-area header"
            "grab-area body";
        grid-gap: var(--tbeui-element-padding) 0;
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--tbeui-border-radius-s);
        box-shadow: none;
        border: var(--tbeui-border-default);
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
    }

    .body {
        grid-area: body;
        display: grid;
        grid-template-columns: var(--tbeui-element-grid-template-columns);
        grid-gap: var(--tbeui-element-padding);
        padding: 0 var(--tbeui-element-padding);
    }

    .grab-area {
        grid-area: grab-area;
        background-color: var(--tbeui-color-font-o-10);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
    }

    .grab-area .grab-area__icon {
        --tbeui-icon-color: var(--tbeui-element-grab-area-icon-color);
    }

    .grab-area:is(:hover, :focus-visible) .grab-area__icon {
        --tbeui-icon-color: var(--tbeui-element-grab-area-icon-color-active);
    }
`;
