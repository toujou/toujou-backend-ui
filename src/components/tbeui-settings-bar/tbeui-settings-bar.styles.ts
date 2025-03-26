import { css } from 'lit';

export const TbeuiSettingsBarStyles = css`
    :host {
        --tbeui-settings-bar-separator: '|';

        font-family: var(--tbeui-font-family-text);
        font-size: var(--tbeui-font-size-s);
        container-name: CeBlockSettingsBar;
        container-type: inline-size;
        display: flex;
        flex-flow: row wrap;
        gap: var(--tbeui-spacing-s);
        background-color: var(--tbeui-color-light-grey);
    }

    .settings-bar__list {
        list-style: none;
        margin: 0;
        padding: var(--tbeui-spacing-s) var(--tbeui-spacing-normal);
        display: flex;
        flex-flow: row wrap;
        gap: var(--tbeui-spacing-s);
        width: 100%;
    }

    .settings-bar__item-separator {
        display: block;
        font-weight: var(--tbeui-font-weight-text-bold);
        margin-inline: var(--tbeui-spacing-xs) var(--tbeui-spacing-xxs);
    }

    .settings-bar__item-title {
        font-weight: var(--tbeui-font-weight-text-bold);
    }

    @container CeBlockSettingsBar (width < 340px) {
        .settings-bar__list {
            flex-flow: column nowrap;
            gap: var(--tbeui-spacing-s);
        }

        .settings-bar__item:has(.settings-bar__item-separator) {
            display: none;
        }
    }
`;
