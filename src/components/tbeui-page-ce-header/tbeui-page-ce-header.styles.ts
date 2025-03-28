import { css } from 'lit';

export const TbeuiPageCeHeaderStyles = css`
    :host {
        --tbeui-header-grab-area-width: var(--tbeui-spacing-normal);
        --tbeui-header-grab-area-icon-color: var(--tbeui-color-font-light);
        --tbeui-header-grab-area-icon-color-active: var(--tbeui-color-font);

        grid-area: header;
        display: grid;
        grid-template-columns: auto auto 1fr auto;
        gap: var(--tbeui-spacing-s);
        background-color: var(--tbeui-color-font-o-05);
        padding: 0;
        border-radius: var(--tbeui-element-border-radius) var(--tbeui-element-border-radius) 0 0;
        overflow: hidden;
    }

    :host:has(.actions__button[aria-expanded="false"]) {
        border-radius: var(--tbeui-element-border-radius);
    }

    .icons {
        margin: 0;
        padding: var(--tbeui-element-padding) 0 var(--tbeui-element-padding) var(--tbeui-element-padding);
        list-style: none;
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        grid-gap: var(--tbeui-spacing-xs);
    }

    .icons__item {
        height: fit-content;
    }

    .title {
        font-family: var(--tbeui-font-family-headline);
        font-weight: var(--tbeui-font-weight-headline);
        font-size: var(--tbeui-font-size-normal);
        line-height: 1;
        margin: 0;
        padding: var(--tbeui-element-padding) var(--tbeui-element-padding) var(--tbeui-element-padding) 0;
        flex-grow: 1;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
        gap: var(--tbeui-spacing-xs) var(--tbeui-spacing-s);
    }

    .title__name {
        font-family: var(--tbeui-font-family-text);
        font-weight: var(--tbeui-font-weight-text-normal);
        font-size: var(--tbeui-font-size-normal);
    }

    .actions {
        margin: 0;
        padding: var(--tbeui-element-padding) 0;
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

    .actions__button[aria-expanded="false"] tbeui-icon {
        rotate: 180deg;
    }

    .actions__button:is(:hover, :focus-visible) {
        background-color: var(--tbeui-color-font-o-10);
    }

    .grab-area {
        background-color: var(--tbeui-color-font-o-10);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: grab;
        height: 100%;
    }

    .grab-area .grab-area__icon {
        --tbeui-icon-color: var(--tbeui-header-grab-area-icon-color);
    }

    .grab-area:is(:hover, :focus-visible) .grab-area__icon {
        --tbeui-icon-color: var(--tbeui-header-grab-area-icon-color-active);
    }
`;
