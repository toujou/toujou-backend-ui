import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { CeBlockSettingsBarItem } from "@components/ce-block-settings-bar/ce-block-settings-bar.ts";

@customElement('toujou-be-text-block')
export class TextBlock extends LitElement {
    static styles = [];

    @property({ type: Array, attribute: 'block-settings' })
    blockSettings: CeBlockSettingsBarItem[] = [];

    render() {
        return html`
            <toujou-be-page-ce-block class="ce-block">
                <slot name="content" slot="content"></slot>
                <toujou-be-ce-block-settings-bar
                    slot="settings-bar"
                    class="ce-block-settings-bar"
                    .items="${this.blockSettings}"
                ></toujou-be-ce-block-settings-bar>
            </toujou-be-page-ce-block>
        `
    }
}
