import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'

@customElement('toujou-be-text-block')
export class TextBlock extends LitElement {
    static styles = [];

    @property({ type: String })
    text = 'auto';

    @property({ type: Array, attribute: 'text-settings' })
    textSettings = [];

    render() {
        return html`
            <toujou-be-page-ce-block class="ce-block">
                <slot name="content" slot="content">
                    <p>${this.text}</p>
                </slot>
                <toujou-be-ce-block-settings-bar
                    slot="settings-bar"
                    class="ce-block-settings-bar"
                    .items="${this.textSettings}"
                ></toujou-be-ce-block-settings-bar>
            </toujou-be-page-ce-block>
        `
    }
}
