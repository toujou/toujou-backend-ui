import { css } from "lit";

export const TbeuiPageColumnsStyles = css`
    :host {
        display: flex;
        flex-direction: column;
        gap: var(--tbeui-spacing-normal);
        border: var(--tbeui-border-default);
        padding: var(--tbeui-spacing-normal);
        border-radius: var(--tbeui-border-radius-s);
    }
`;
