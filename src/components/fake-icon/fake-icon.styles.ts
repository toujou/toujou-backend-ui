import { css } from 'lit';

export const FakeIconStyles = css`
    :host {
        --fake-icon-color: var(--tbeui-color-middle-grey);
        --fake-icon-size: var(--spacing-normal);
        --fake-icon-border-color: var(--fake-icon-color);

        display: block;
        height: var(--fake-icon-size);
        width: var(--fake-icon-size);
        background-color: var(--fake-icon-color);
        border-radius: var(--border-radius-s);
        border: 1px solid var(--fake-icon-border-color);
    }

`;
