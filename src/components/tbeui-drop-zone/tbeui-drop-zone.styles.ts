import { css } from 'lit';

export const TbeuiDropZoneStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host {
        --tbeui-drop-zone-color: var(--tbeui-color-warning-o-20);
        --tbeui-drop-zone-border-color: var(--tbeui-color-warning-o-50);
        --tbeui-drop-zone-height: var(--tbeui-spacing-l);

        display: block;
        margin: 0;
        padding: var(--tbeui-spacing-normal) 0;
        position: relative;
        z-index: 1;
    }

    :host(:is(:hover, :focus-visible)) {
        --tbeui-drop-zone-color: var(--tbeui-color-info-o-20);
        --tbeui-drop-zone-border-color: var(--tbeui-color-info-o-50);
    }

    :host::before {
        content: '';
        width: var(--tbeui-border-width-default);
        height: calc(100% + 2px);
        position: absolute;
        top: 50%;
        left: calc(var(--tbeui-spacing-normal) * -1);
        transform: translate(1px, -50%);
        background-color: var(--tbeui-color-primary);
    }

    .drop-zone {
        display: block;
        width: 100%;
        height: var(--tbeui-drop-zone-height);
        background-color: var(--tbeui-drop-zone-color);
        border: var(--tbeui-border-width-default) solid var(--tbeui-drop-zone-border-color);
        border-radius: var(--tbeui-border-radius-normal);
    }
`;
