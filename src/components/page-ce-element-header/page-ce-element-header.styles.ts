import { css } from 'lit';

export const PageCeElementHeaderStyles = css`
    :host {
        grid-area: header;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--spacing-normal);
    }

    .page-ce-element-header__left {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--spacing-xs);
    }

    .page-ce-element-header__title {
        font-family: var(--font-family-headline);
        font-weight: var(--font-weight-headline);
        line-height: 1;
        margin: 0;
        padding: 0;
        flex-grow: 1;
    }

    .page-ce-element-header__right {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--spacing-xs);
    }

`;
