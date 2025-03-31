import { css } from 'lit';

export const TbeuiMediaPlaceholderStyles = css`
    :host {
        --tbeui-media-aspect-ratio: 1;

        display: block;
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        max-width: var(--tbeui-block-media-max-width);
        aspect-ratio: var(--tbeui-media-aspect-ratio);
        background-color: var(--tbeui-color-font-o-10);
        border-radius: var(--tbeui-border-radius-normal);
        overflow: hidden;
        box-sizing: border-box;
    }

    .figure {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon {
        opacity: .5;
    }
`;
