import { css } from 'lit';

export const TbeuiSettingsGroupStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host {
        display: flex;
    }

    .list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: column;
        gap: var(--tbeui-spacing-s);
        width: 100%;
    }
`;
