import { css } from 'lit';

export const TbeuiPageCeHeaderStyles = css`
    :host {
        grid-area: header;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--tbeui-spacing-s);
        background-color: var(--tbeui-color-font-o-05);
        padding: var(--tbeui-element-padding);
        border-radius: var(--tbeui-border-radius-s) var(--tbeui-border-radius-s) 0 0;
    }

    .icons {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--tbeui-spacing-xs);
    }

    .title {
        font-family: var(--tbeui-font-family-headline);
        font-weight: var(--tbeui-font-weight-headline);
        font-size: var(--tbeui-font-size-normal);
        line-height: 1;
        margin: 0;
        padding: 0;
        flex-grow: 1;
    }

    .actions {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: 0;
    }

    .actions__button {
        border: none;
        background-color: transparent;
        margin: 0;
        padding: var(--tbeui-spacing-xs) var(--tbeui-spacing-s);
        border-radius: var(--tbeui-border-radius-xs);
        cursor: pointer;
    }

    .actions__button:is(:hover, :focus) {
        background-color: var(--tbeui-color-font-o-10);
    }
`;
