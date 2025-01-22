import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { CeBlockIconStyles } from "./ce-block-icon.styles.ts";

@customElement('toujou-be-ce-block-icon')
export class CeBlockIcon extends LitElement {
    static styles = [CeBlockIconStyles];

    @property({ type: String, attribute: 'icon-size' })
    iconSize = 'default';

    @property({ type: String, attribute: 'icon-name' })
    iconName = 'default';

    connectedCallback() {
        super.connectedCallback();
        this.setIconVariable();
    }

    private setIconVariable() {
        this.style.setProperty('--icon-image', `var(--tbeui-icon-${this.iconName})`);
    }

    render() {
        return html`
            <span class="icon"></span>
        `
    }
}
