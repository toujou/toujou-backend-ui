import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiSettingsBarItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-block-text')
export class TbeuiBlockText extends LitElement {
    static styles = [];

    @property({ type: Array, attribute: 'block-settings' })
    blockSettings: TbeuiSettingsBarItem[] = [];

    render() {
        return html`
            <tbeui-preview class="preview">
                <slot name="content" slot="content"></slot>
                <tbeui-settings-bar
                    slot="settings-bar"
                    class="ce-block-settings-bar"
                    .items="${this.blockSettings}"
                ></tbeui-settings-bar>
            </tbeui-preview>
        `
    }
}
