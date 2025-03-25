import { css } from 'lit';

export const TbeuiColumnStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        border-radius: var(--tbeui-border-radius-s);
        background-color: var(--tbeui-color-light-grey);
        padding: var(--tbeui-spacing-normal);
    }

    .header {
        grid-area: header;
        display: flex;
        flex-direction: row;
        margin-bottom: var(--tbeui-spacing-normal);
    }

    .header__name {
        font-family: var(--tbeui-font-family-headline);
        font-weight: var(--tbeui-font-weight-headline);
        margin: 0;
        flex-grow: 1;
    }

    .actions {
        display: flex;
        flex-direction: row;
        gap: var(--tbeui-spacing-s);
    }

    .action {
        border: none;
        background-color: transparent;
        margin: 0;
        padding: 0;
        opacity: .5;
        cursor: pointer;
    }

    .action:is(:hover, :focus-visible) {
        opacity: 1;
    }

    .content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: var(--tbeui-spacing-normal);
    }
`;
