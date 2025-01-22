import { css } from "lit";

export const BeButtonStyles = css`
    :host {
        --button-padding: var(--spacing-s);
        --button-font-size: var(--font-size-normal);
        --button-color: var(--tbeui-color-font);
        --button-background-color: transparent;
        --button-border-color: var(--tbeui-color-middle-grey);


        height: fit-content;
        width: fit-content;
    }

    :host([button-size="s"]) {
        --button-padding: var(--spacing-xs);
        --button-font-size: var(--font-size-s);
    }

    :host([is-centered]) {
        margin-inline: auto;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-s);
        padding: var(--button-padding) calc(var(--button-padding) * 2);
        height: fit-content;
        width: fit-content;
        font-family: var(--font-family-text);
        font-size: var(--button-font-size);
        color: var(--button-color);
        background-color: var(--button-background-color);
        border: 1px solid var(--button-border-color);
        border-radius: var(--border-radius-xs);
        cursor: pointer;
    }

    .button:is(:hover, :focus-visible) {
        --button-color: var(--tbeui-color-font-dark);
        --button-background-color: var(--tbeui-color-middle-grey);
        --button-border-color: var(--tbeui-color-font-dark);
    }

`;
