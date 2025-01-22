import { css } from 'lit';

export const CeBlockFigureGroupStyles = css`
    :host {
        display: block;
        padding: 0;
        margin: 0;
        position: relative;
        width: fit-content;
        height: fit-content;
        border-radius: var(--border-radius-s);
        overflow: hidden;
    }

    .figure-group__figure {
        margin: 0;
        padding: 0;
        height: fit-content;
        width: fit-content;
    }

    .figure-group__image {
        width: 100%;
        height: 10%;
        object-fit: cover;
        vertical-align: middle;
    }

    .figure-group__settings {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: var(--spacing-s);
        left: var(--spacing-s);
        display: flex;
        flex-flow: row nowrap;
        gap: var(--spacing-s);
    }

    .figure-group__settings-item {
        margin: 0;
        padding: 0;
    }
`;
