import { css } from 'lit';

export const TbeuiBlockFigureGroupStyles = css`
    :host {
        --image-aspect-ratio: auto;

        display: block;
        padding: 0;
        margin: 0;
        position: relative;
        width: fit-content;
        height: fit-content;
        border-radius: var(--tbeui-border-radius-s);
        overflow: hidden;
    }

    :host([image-aspect-ratio="16-9"]) {
        --image-aspect-ratio: 16 / 9;
    }

    :host([image-aspect-ratio="4-3"]) {
        --image-aspect-ratio: 4 / 3;
    }

    :host([image-aspect-ratio="1-1"]) {
        --image-aspect-ratio: 1 / 1;
    }

    .figure-group__figure {
        margin: 0;
        padding: 0;
        height: fit-content;
        width: fit-content;
    }

    .figure-group__image {
        width: 100%;
        height: auto;
        aspect-ratio: var(--tbeui-image-aspect-ratio);
        object-fit: cover;
        vertical-align: middle;
    }

    .figure-group__settings {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: var(--tbeui-spacing-s);
        left: var(--tbeui-spacing-s);
        display: flex;
        flex-flow: row nowrap;
        gap: var(--tbeui-spacing-s);
    }

    .figure-group__settings-item {
        margin: 0;
        background-color: var(--tbeui-color-white);
        border-radius: var(--tbeui-border-radius-xs);
        padding: var(--tbeui-spacing-xxs);
    }

    .figure-group__settings-item[is-warning] {
        background-color: var(--tbeui-color-warning);
    }
`;
