import { css } from "lit";

export const TbeuiPageColumnsStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: var(--tbeui-spacing-normal);
        border: none;
        padding: 0 var(--tbeui-spacing-normal);
        border-radius: var(--tbeui-border-radius-s);
    }
`;
