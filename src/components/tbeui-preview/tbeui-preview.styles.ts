import { css } from 'lit';

export const TbeuiPreviewStyles = css`
    :host {
        --tbeui-preview-border: none;
        --tbeui-preview-content-padding: 0;
        --tbeui-preview-settings-group-padding-top: 0;

        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: var(--tbeui-spacing-xs);
        height: fit-content;
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

    :host([preview-type="headline"]) {
        --tbeui-preview-settings-group-padding-top: var(--tbeui-spacing-xs);
    }

    :host([preview-type="text"]) {
        --tbeui-preview-settings-group-padding-top: var(--tbeui-spacing-xxs);
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

    .settings-group {
        padding-top: var(--tbeui-preview-settings-group-padding-top);
    }
`;
