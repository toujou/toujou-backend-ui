import { LitElement, html } from 'lit';

export class ToujouBEPageCEElement extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <slot name="header"></slot>
            <slot name="body"></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-be-page-ce-element': ToujouBEPageCEElement
    }
}

customElements.define('toujou-be-page-ce-element', ToujouBEPageCEElement);
