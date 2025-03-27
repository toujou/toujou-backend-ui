import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiPreviewStyles } from "./tbeui-preview.styles.ts";
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-preview')
export class TbeuiPreview extends LitElement {
    static styles = [TbeuiPreviewStyles];

    @property({ type: Array, attribute: 'settings', reflect: false })
    settings: TbeuiSettingsGroupItem[] = [];

    render() {
        return html`
            ${this.settings.length ? html`
                <tbeui-settings-group class="settings-group" .items="${this.settings}"></tbeui-settings-group>
            ` : ''}

            <div class="content">
                <slot name="content"></slot>
            </div>
        `;
    }
}
