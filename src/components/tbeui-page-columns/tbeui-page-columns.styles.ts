import { css } from "lit";

export const TbeuiPageColumnsStyles = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    :host {
        display: flex;
        flex-direction: column;
        gap: 0;
        border: none;
        padding: 0 var(--tbeui-spacing-normal);
        border-radius: var(--tbeui-border-radius-s);
    }
`;
