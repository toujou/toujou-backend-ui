import { css } from 'lit';

export const TbeuiIconStyles = css`
    :host {
        --tbeui-icon-size: var(--tbeui-font-size-m);
        --tbeui-icon-color: var(--tbeui-color-font);
        --tbeui-flag-aspect-ratio: 4 / 3;

        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--tbeui-icon-size);
        width: var(--tbeui-icon-size);
    }

    :host([icon-size="xl"]) {
        --tbeui-icon-size: var(--tbeui-font-size-xxl);
    }

    :host([icon-size="l"]) {
        --tbeui-icon-size: var(--tbeui-font-size-xl);
    }

    :host([icon-size="m"]) {
        --tbeui-icon-size: var(--tbeui-font-size-l);
    }

    :host([icon-size="s"]) {
        --tbeui-icon-size: var(--tbeui-font-size-normal);
    }

    :host([icon-color="background"]) {
        --tbeui-icon-color: var(--tbeui-color-white);
    }

    :host([icon-color="font-light"]) {
        --tbeui-icon-color: var(--tbeui-color-font-light);
    }

    :host([icon-color="warning"]) {
        --tbeui-icon-color: var(--tbeui-color-warning);
    }

    .icon {
        display: block;
        height: 100%;
        width: 100%;
        background-color: var(--tbeui-icon-color);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-image: var(--tbeui-icon-image);
    }
`;
