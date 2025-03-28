import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-block-text')
export class TbeuiBlockText extends LitElement {
    @property({ type: Array, attribute: 'text-settings' })
    textSettings: TbeuiSettingsGroupItem[] = [];

    render() {
        return html`
            <tbeui-preview
                class="preview"
                preview-type="text"
                .settings="${this.textSettings}"
            >
                <slot name="content" slot="content"></slot>
            </tbeui-preview>
        `
    }
}
