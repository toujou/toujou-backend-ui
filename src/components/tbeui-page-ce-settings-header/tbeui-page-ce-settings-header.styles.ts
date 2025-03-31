import { css } from 'lit';

export const TbeuiPageCeSettingsHeaderStyles = css`
    :host {
        display: flex;
    }

    .list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: row wrap;
        gap: 0;
        width: 100%;
        height: calc(100% - 5px);
        border-top: var(--tbeui-border-width-default) solid var(--tbeui-border-color-default);
        position: relative;
    }

    .list::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: calc(100% - 1px);
        width: 100%;
        height: var(--tbeui-border-width-default);
        background-color: var(--tbeui-border-color-default);
    }

    .list__item {
        font-family: var(--tbeui-font-family-text);
        font-size: var(--tbeui-font-size-normal);
        font-weight: var(--tbeui-font-weight-text-normal);
        color: var(--tbeui-color-font);
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--tbeui-spacing-s);
        width: fit-content;
        border: var(--tbeui-border-width-default) solid var(--tbeui-border-color-default);
        padding: var(--tbeui-spacing-s);
        position: relative;
        margin-top: -1px;
        margin-left: -1px;
    }

    .list__item-title {
        font-weight: var(--tbeui-font-weight-text-bold);
    }

    .list__item-content {
        display: flex;
    }
`;
