import { css } from 'lit';

export const PageCeBlockStyles = css`
    :host {
        --ce-block-border: 1px solid var(--tbeui-color-middle-grey);
        --ce-block-content-padding: var(--spacing-s);

        display: block;
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        border: var(--ce-block-border);
        border-radius: var(--border-radius-s);
        overflow: hidden;
    }

    :host([no-padding]) {
        --ce-block-content-padding: 0;
    }

    .ce-block__content {
        display: block;
        padding: var(--ce-block-content-padding);
    }

    .ce-block__content > *:first-child {
        margin-top: 0;
    }

    .ce-block__content > *:last-child {
        margin-bottom: 0;
    }
`;
