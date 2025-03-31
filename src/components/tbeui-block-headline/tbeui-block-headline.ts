import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-block-headline')
export class TbeuiBlockHeadline extends LitElement {
    @property({ type: Array, attribute: 'block-settings' })
    blockSettings: TbeuiSettingsGroupItem[] = [];

    render() {
        return html`
            <tbeui-preview
                class="preview"
                preview-type="headline"
                .settings="${this.blockSettings}"
            >
                <slot name="content" slot="content"></slot>
            </tbeui-preview>
        `
    }
}
