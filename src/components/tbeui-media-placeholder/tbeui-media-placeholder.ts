import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import {
    TbeuiMediaPlaceholderStyles
} from "@components/tbeui-media-placeholder/tbeui-media-placeholder.styles.ts";

@customElement('tbeui-media-placeholder')
export class TbeuiMediaPlaceholder extends LitElement {
    static styles = [TbeuiMediaPlaceholderStyles];

    render() {
        return html`
            <figure class="figure" slot="content" aria-hidden="true">
                <tbeui-icon class="icon" icon-name="placeholder-image" icon-size="l"></tbeui-icon>
            </figure>
        `
    }
}
