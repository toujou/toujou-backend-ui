import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiButtonStyles } from "./tbeui-button.styles.ts";

@customElement('tbeui-button')
export class TbeuiButton extends LitElement {
    static styles = [TbeuiButtonStyles];

    @property({ type: String, attribute: 'icon-name' })
    iconName = 'default';

    @property({ type: String, attribute: 'button-size' })
    buttonSize = 'normal';

    render() {
        return html`
            <button class="button">
                ${this.iconName ? html`<tbeui-icon icon-name="${this.iconName}"></tbeui-icon>` : ''}
                <slot></slot>
            </button>
        `
    }
}
