import { css } from 'lit';

export const PageCeBlockStyles = css`
    :host {
        --ce-block-border: 1px solid var(--tbeui-color-middle-grey);

        display: block;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        border: var(--ce-block-border);
        border-radius: var(--border-radius-s);
        overflow: hidden;
    }

    .ce-block__content {
        display: block;
        padding: var(--spacing-s);
    }

    .ce-block__content > *:first-child {
        margin-top: 0;
    }

    .ce-block__content > *:last-child {
        margin-bottom: 0;
    }
`;
