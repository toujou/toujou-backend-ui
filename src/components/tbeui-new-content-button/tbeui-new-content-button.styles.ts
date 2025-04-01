import { css } from 'lit';

export const TbeuiNewContentButtonStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host {
        --tbeui-new-content-button-button-color: var(--tbeui-color-primary);

        display: block;
        width: 100%;
        position: relative;
        padding: var(--tbeui-spacing-normal) 0;
        z-index: 1;
    }

    :host::before {
        content: '';
        width: var(--tbeui-border-width-default);
        height: calc(100% + 2px);
        position: absolute;
        top: -1px;
        left: calc(var(--tbeui-spacing-normal) * -1 + 1px);
        background-color: var(--tbeui-color-primary);
    }

    :host::after {
        content: '';
        width: var(--tbeui-spacing-normal);
        height: 0;
        position: absolute;
        top: 50%;
        right: calc(100% - 2px);
        border-top: var(--tbeui-border-width-default) dashed var(--tbeui-border-color-primary);
        z-index: 1;
    }

    .button {
        position: relative;
        left: 0;
        border-radius: var(--tbeui-border-radius-normal);
        border: var(--tbeui-border-default);
        border-color: var(--tbeui-border-color-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: var(--tbeui-spacing-xs) var(--tbeui-spacing-s);
        margin: 0;
        cursor: pointer;
        color: var(--tbeui-new-content-button-button-color);
        background-color: var(--tbeui-color-bg);
        font-weight: var(--tbeui-font-weight-text-bold);
        z-index: 2;
    }

    .button:is(:hover, :focus-visible) {
        background-color: var(--tbeui-new-content-button-button-color);
        color: var(--tbeui-color-bg);
    }

    .button .icon {
        --tbeui-icon-color: var(--tbeui-new-content-button-button-color);
    }

    .button:is(:hover, :focus-visible) .icon {
        --tbeui-icon-color: var(--tbeui-color-primary);
    }
`;
