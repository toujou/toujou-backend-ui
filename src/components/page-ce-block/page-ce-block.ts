import { LitElement, html } from 'lit'
import { customElement, } from 'lit/decorators.js'
import { PageCeBlockStyles } from "./page-ce-block.styles.ts";


@customElement('toujou-be-page-ce-block')
export class PageCeBlock extends LitElement {
    static styles = [PageCeBlockStyles];

    render() {
        return html`
            <toujou-be-page-ce-block-content class="ce-block__content">
                <slot name="content"></slot>
            </toujou-be-page-ce-block-content>

            <slot name="settings-bar"></slot>
        `;
    }
}
