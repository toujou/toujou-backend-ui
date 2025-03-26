import { css } from 'lit';

export const TbeuiPreviewStyles = css`
    :host {
        --tbeui-preview-border: none;
        --tbeui-preview-content-padding: 0;

        display: block;
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        border: var(--tbeui-preview-border);
        border-radius: var(--tbeui-border-radius-xs);
        overflow: hidden;
    }

    :host([no-padding]) {
        --tbeui-preview-content-padding: 0;
    }

    :host([no-border]) {
        --tbeui-preview-border: 0;
    }

    .content {
        display: block;
        padding: var(--tbeui-preview-content-padding);
    }

    .content > *:first-child {
        margin-top: 0;
    }

    .content > *:last-child {
        margin-bottom: 0;
    }
`;
