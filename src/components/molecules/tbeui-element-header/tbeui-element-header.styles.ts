import { css } from 'lit';

export const TbeuiElementHeaderStyles = css`
    :host {
        grid-area: header;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--tbeui-spacing-s);
    }

    .left {
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

    .right {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--tbeui-spacing-normal);
    }
`;
