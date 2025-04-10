import { css } from 'lit';

export const TbeuiPageCeElementStyles = css`
    :host {
        --tbeui-element-padding: var(--tbeui-spacing-s);
        --tbeui-element-border-radius: var(--tbeui-border-radius-normal);
        --tbeui-element-spacing-between-columns: var(--tbeui-spacing-l);
        --tbeui-element-body-number-of-columns: 1;
        --tbeui-element-body-number-of-column-gaps: calc(var(--tbeui-element-body-number-of-columns) - 1);
        --tbeui-element-body-grid-template-columns: repeat(var(--tbeui-element-body-number-of-columns), calc(calc(100% - calc(var(--tbeui-element-spacing-between-columns) * var(--tbeui-element-body-number-of-column-gaps))) / var(--tbeui-element-body-number-of-columns)));

        display: flex;
        flex-direction: column;
        gap: 0;
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--tbeui-element-border-radius);
        box-shadow: none;
        border: var(--tbeui-border-default);
        position: relative;
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
        grid-template-columns: var(--tbeui-element-body-grid-template-columns);
        grid-gap: var(--tbeui-spacing-normal) var(--tbeui-element-spacing-between-columns);
        padding: 0 var(--tbeui-element-padding);
        margin-top: var(--tbeui-spacing-s);
    }

    .body[hidden] {
        display: none;
    }

    @container (width > 640px) {
        :host([column-layout="50-50"]) {
            --tbeui-element-body-number-of-columns: 2;
        }

        :host([column-layout="33-66"]) {
            --tbeui-element-body-grid-template-columns: 1fr 2fr;
        }

        :host([column-layout="66-33"]) {
            --tbeui-element-body-grid-template-columns: 2fr 1fr;
        }

        :host([column-layout="33-33-33"]) {
            --tbeui-element-body-number-of-columns: 3;
        }

        :host([column-layout="25-25-25-25"]) {
            --tbeui-element-body-number-of-columns: 2;
        }
    }

    @container (width > 840px) {
        :host([column-layout="25-25-25-25"]) {
            --tbeui-element-body-number-of-columns: 4;
        }
    }
`;
