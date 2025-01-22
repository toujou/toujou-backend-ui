import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { BeButtonStyles } from "./be-button.styles.ts";

@customElement('toujou-be-button')
export class BeButton extends LitElement {
    static styles = [BeButtonStyles];

    @property({ type: String, attribute: 'icon-name' })
    iconName = 'default';

    @property({ type: String, attribute: 'button-size' })
    buttonSize = 'normal';

    render() {
        return html`
            <button class="button">
                ${this.iconName ? html`<toujou-be-ce-block-icon icon-name="${this.iconName}"></toujou-be-ce-block-icon>` : ''}
                <slot></slot>
            </button>
        `
    }
}
