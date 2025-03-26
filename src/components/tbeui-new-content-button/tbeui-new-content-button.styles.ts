import { css } from 'lit';

export const TbeuiNewContentButtonStyles = css`
    :host {
        --tbeui-new-content-button-height: var(--tbeui-spacing-normal);
        --tbeui-new-content-button-button-size: var(--tbeui-spacing-l);
        --tbeui-new-content-button-button-color: var(--tbeui-border-color-default);
        --tbeui-new-content-button-button-color-active: var(--tbeui-color-font);

        display: block;
        width: 100%;
        height: var(--tbeui-new-content-button-height);
        position: relative;
    }

    .button {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(calc(-50% - var(--tbeui-spacing-normal)), -50%);
        height: var(--tbeui-new-content-button-button-size);
        width: var(--tbeui-new-content-button-button-size);
        border-radius: 50%;
        background-color: var(--tbeui-color-bg);
        border: var(--tbeui-border-m);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .button:is(:hover, :focus-visible) {
        border-color: var(--tbeui-new-content-button-button-color-active);
    }

    .button .icon {
        --tbeui-icon-color: var(--tbeui-new-content-button-button-color);
    }

    .button:is(:hover, :focus-visible) .icon {
        --tbeui-icon-color: var(--tbeui-new-content-button-button-color-active);
    }
`;
