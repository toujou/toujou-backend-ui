import { css } from "lit";

export const TbeuiButtonStyles = css`
    :host {
        --tbeui-button-padding: var(--tbeui-spacing-s);
        --tbeui-button-font-size: var(--ftbeui-ont-size-normal);
        --tbeui-button-color: var(--tbeui-color-font);
        --tbeui-button-background-color: transparent;
        --tbeui-button-border-color: var(--tbeui-color-middle-grey);

        height: fit-content;
        width: fit-content;
    }

    :host([button-size="s"]) {
        --tbeui-button-padding: var(--tbeui-spacing-xs);
        --tbeui-button-font-size: var(--tbeui-font-size-s);
    }

    :host([is-centered]) {
        margin-inline: auto;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--tbeui-spacing-s);
        padding: var(--tbeui-button-padding) calc(var(--tbeui-button-padding) * 2);
        height: fit-content;
        width: fit-content;
        font-family: var(--tbeui-font-family-text);
        font-size: var(--tbeui-button-font-size);
        color: var(--tbeui-button-color);
        background-color: var(--tbeui-button-background-color);
        border: 1px solid var(--tbeui-button-border-color);
        border-radius: var(--tbeui-border-radius-xs);
        cursor: pointer;
    }

    .button:is(:hover, :focus-visible) {
        --tbeui-button-color: var(--tbeui-color-font-dark);
        --tbeui-button-background-color: var(--tbeui-color-primary);
        --tbeui-button-border-color: var(--tbeui-color-primary);
    }
`;
