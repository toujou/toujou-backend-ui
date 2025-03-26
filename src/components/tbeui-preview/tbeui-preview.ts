import { LitElement, html } from 'lit'
import { customElement, } from 'lit/decorators.js'
import { TbeuiPreviewStyles } from "./tbeui-preview.styles.ts";

@customElement('tbeui-preview')
export class TbeuiPreview extends LitElement {
    static styles = [TbeuiPreviewStyles];

    render() {
        return html`
            <div class="content">
                <slot name="content"></slot>
            </div>

            <div class="settings-bar">
                <slot name="settings-bar"></slot>
            </div>
        `;
    }
}
