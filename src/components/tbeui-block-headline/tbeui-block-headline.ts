import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-block-headline')
export class TbeuiBlockHeadline extends LitElement {
    static styles = [];

    @property({ type: Array, attribute: 'block-settings' })
    headlineSettings: TbeuiSettingsGroupItem[] = [];

    render() {
        return html`
            <tbeui-preview class="preview" .settings="${this.headlineSettings}">
                <slot name="content" slot="content"></slot>
            </tbeui-preview>
        `
    }
}
