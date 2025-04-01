import { css } from 'lit';

export const TbeuiBlockMediaStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host {
        --tbeui-block-media-aspect-ratio: auto;

        display: block;
        margin: 0;
        padding: 0;
        max-width: var(--tbeui-block-media-max-width);
    }

    :host([image-aspect-ratio="1"]),
    :host([image-aspect-ratio="1-1"]) {
        --tbeui-block-media-aspect-ratio: 1;
    }

    :host([image-aspect-ratio="16-9"]) {
        --tbeui-block-media-aspect-ratio: 16 / 9;
    }

    :host([image-aspect-ratio="4-3"]) {
        --tbeui-block-media-aspect-ratio: 4 / 3;
    }

    :host([image-aspect-ratio="3-2"]) {
        --tbeui-block-media-aspect-ratio: 3 / 2;
    }

    :host([image-aspect-ratio="3-1"]) {
        --tbeui-block-media-aspect-ratio: 3 / 1;
    }

    .figure {
        margin: 0;
        padding: 0;
        width: fit-content;
        height: fit-content;
        border-radius: var(--tbeui-border-radius-normal);
        overflow: hidden;
    }

    .image {
        max-width: 100%;
        height: auto;
        aspect-ratio: var(--tbeui-block-media-aspect-ratio);
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 1rem;
        object-fit: cover;
    }
`;
