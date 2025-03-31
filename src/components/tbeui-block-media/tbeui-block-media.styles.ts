import { css } from 'lit';

export const TbeuiBlockMediaStyles = css`
    :host {
        --tbeui-block-media-aspect-ratio: auto;

        display: block;
        margin: 0;
        padding: 0;
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
        max-width: var(--tbeui-block-media-max-width);
        height: auto;
        aspect-ratio: var(--tbeui-block-media-aspect-ratio);
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 1rem;
    }
`;
