import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiIconStyles } from "./tbeui-icon.styles.ts";

@customElement('tbeui-icon')
export class TbeuiIcon extends LitElement {
    static styles = [TbeuiIconStyles];

    @property({ type: String, attribute: 'icon-size' })
    iconSize = 'default';

    @property({ type: String, attribute: 'icon-name' })
    iconName = 'default';

    connectedCallback() {
        super.connectedCallback();
        this.setIconVariable();
    }

    private setIconVariable() {
        this.style.setProperty('--tbeui-icon-image', `var(--tbeui-icon-${this.iconName})`);
    }

    render() {
        return html`
            <span class="icon"></span>
        `
    }
}
