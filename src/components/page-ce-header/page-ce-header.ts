import { LitElement, html } from 'lit';

export class ToujouBEPageCEHeader extends LitElement {
    constructor() {
        super();
        console.log('1111111');
    }

    render() {
        return html`
            <h1>This is a test</h1>
            <slot name="left"></slot>
            <slot name="title"></slot>
            <slot name="right"></slot>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'toujou-be-page-ce-header': ToujouBEPageCEHeader
    }
}

customElements.define('toujou-be-page-ce-header', ToujouBEPageCEHeader);
