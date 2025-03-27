import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiPageCeElementStyles } from "./tbeui-page-ce-element.styles.ts";

@customElement('tbeui-page-ce-element')
export class TbeuiPageCeElement extends LitElement {
    static styles = [TbeuiPageCeElementStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    render() {
        return html`
            <div class="grab-area">
                <tbeui-icon
                    class="grab-area__icon"
                    icon-name="grip"
                    icon-size="normal"
                ></tbeui-icon>
            </div>
            <tbeui-page-ce-header class="header" header-text="${this.headerText}"></tbeui-page-ce-header>
            <tbeui-page-ce-body class="body">
                <slot name="body"></slot>
            </tbeui-page-ce-body>
        `;
    }
}
