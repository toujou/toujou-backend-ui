import { css } from 'lit';

export const CeBlockIconStyles = css`
    :host {
        --icon-size: var(--font-size-m);
        --icon-color: var(--tbeui-color-font);
        --flag-aspect-ratio: 4 / 3;

        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--icon-size);
        width: var(--icon-size);
    }

    :host([icon-size="xl"]) {
        --icon-size: var(--font-size-xxl);
    }

    :host([icon-size="l"]) {
        --icon-size: var(--font-size-xl);
    }

    :host([icon-size="m"]) {
        --icon-size: var(--font-size-l);
    }

    :host([icon-size="s"]) {
        --icon-size: var(--font-size-normal);
    }

    .icon {
        display: block;
        height: 100%;
        width: 100%;
        background-color: var(--icon-color);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-image: var(--icon-image);
    }

    :host([is-color-icon]) .icon {
        mask-image: unset;
        background-image: var(--icon-image);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: auto;
        aspect-ratio: var(--flag-aspect-ratio);
    }
`;
