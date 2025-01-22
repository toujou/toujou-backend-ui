import { css } from 'lit';

export const CeBlockSettingsBarStyles = css`
    :host {
        --ce-block-settings-bar-separator: '|';

        font-family: var(--font-family-text);
        font-size: var(--font-size-s);
        container-name: CeBlockSettingsBar;
        container-type: inline-size;
        display: flex;
        flex-flow: row wrap;
        gap: var(--spacing-s);
        background-color: var(--tbeui-color-light-grey);
    }

    .ce-block-settings-bar__list {
        list-style: none;
        margin: 0;
        padding: var(--spacing-s) var(--spacing-normal);
        display: flex;
        flex-flow: row wrap;
        gap: var(--spacing-s);
        width: 100%;
    }

    .ce-block-settings-bar__item-separator {
        display: block;
        font-weight: var(--font-weight-text-bold);
        margin-inline: var(--spacing-xs) var(--spacing-xxs);
    }

    .ce-block-settings-bar__item-title {
        font-weight: var(--font-weight-text-bold);
    }

    @container CeBlockSettingsBar (width < 340px) {
        .ce-block-settings-bar__list {
            flex-flow: column nowrap;
            gap: var(--spacing-s);
        }

        .ce-block-settings-bar__item:has(.ce-block-settings-bar__item-separator) {
            display: none;
        }
    }
`;
