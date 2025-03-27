import { css } from 'lit';

export const TbeuiPageColumnStyles = css`
    :host {
        --tbeui-column-line-width: 3px;
        --tbeui-column-line-dot-size: var(--tbeui-spacing-s);
        --tbeui-column-line-dot-color: var(--tbeui-border-color-default);
        --tbeui-column-line-dot-border: var(--tbeui-column-line-width) solid var(--tbeui-color-bg);

        display: flex;
        flex-direction: column;
        border-radius: var(--tbeui-border-radius-s);
        background-color: transparent;
        padding: 0 0 0 var(--tbeui-spacing-normal);
        position: relative;
        container-name: PageColumn;
        container-type: inline-size;
        width: 100%;
        max-width: var(--tbeui-column-max-width);
        margin-inline: auto;
    }

    :host(:not(:last-child)) {
        margin-bottom: var(--tbeui-spacing-l);
    }

    :host::before {
        content: '';
        display: block;
        height: var(--tbeui-column-line-dot-size);
        width: var(--tbeui-column-line-dot-size);
        background-color: var(--tbeui-column-line-dot-color);
        position: absolute;
        top: 2px;
        left: 0;
        border-radius: 50%;
        transform: translateX(-50%);
        border: var(--tbeui-column-line-dot-border);
        z-index: 2;
    }

    .column-line {
        width: var(--tbeui-column-line-width);
        height: calc(100% - var(--tbeui-spacing-normal));
        position: absolute;
        top: var(--tbeui-spacing-s);
        left: 0;
        transform: translateX(-50%);
        background-color: var(--tbeui-border-color-default);
    }

    .column-header {
        grid-area: header;
        display: flex;
        flex-direction: row;
        margin-bottom: var(--tbeui-spacing-normal);
    }

    .column-header__name {
        font-family: var(--tbeui-font-family-headline);
        font-weight: var(--tbeui-font-weight-headline);
        margin: 0;
        flex-grow: 1;
    }

    .column-actions {
        display: flex;
        flex-direction: row;
        gap: var(--tbeui-spacing-s);
    }

    .column-action {
        border: none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        opacity: .5;
        cursor: pointer;
    }

    .column-action:is(:hover, :focus-visible) {
        opacity: 1;
    }

    .column-content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: var(--tbeui-spacing-normal);
    }
`;
