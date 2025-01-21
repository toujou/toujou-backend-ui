import { css } from 'lit';

export const PageCeElementStyles = css`
    :host {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
        "header"
        "body";
        grid-gap: var(--spacing-s);
        background-color: var(--tbeui-color-white);
        padding: var(--spacing-s);
        border-radius: var(--border-radius-s);
        box-shadow: var(--box-shadow-xs);
    }

    .page-ce-element-body {
        grid-area: body;
    }
`;
