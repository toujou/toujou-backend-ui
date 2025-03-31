import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiPageCeElementStyles } from "./tbeui-page-ce-element.styles.ts";
import { TBEUI_PAGE_CE_HEADER_CHEVRON_CLICK } from "@constants//events.ts";

@customElement('tbeui-page-ce-element')
export class TbeuiPageCeElement extends LitElement {
    static styles = [TbeuiPageCeElementStyles];

    @property({ type: String, attribute: 'ctype-name' })
    cTypeName: string = '';

    @property({ type: String, attribute: 'element-name' })
    elementName: string = '';

    @property({ type: Boolean, attribute: 'body-is-visible', reflect: true })
    private _isBodyVisible = true;

    private _bodyId = `ce-element-body-${this.id}`

    connectedCallback() {
        super.connectedCallback();

        this.addEventListener(TBEUI_PAGE_CE_HEADER_CHEVRON_CLICK, this._handleToggleClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener(TBEUI_PAGE_CE_HEADER_CHEVRON_CLICK, this._handleToggleClick);
    }

    render() {
        return html`
            <tbeui-page-ce-header
                class="header"
                ctype-name="${this.cTypeName}"
                element-name="${this.elementName}"
                .ceBodyId="${this._bodyId}"
                .ceBodyState="${this._isBodyVisible}"
            ></tbeui-page-ce-header>

            <tbeui-page-ce-body
                class="body"
                ?hidden="${!this._isBodyVisible}"
                aria-hidden="${!this._isBodyVisible}"
                id="${this._bodyId}"
            >
                <slot name="body"></slot>
            </tbeui-page-ce-body>
        `;
    }

    private _handleToggleClick = () => {
        this._isBodyVisible = !this._isBodyVisible;
        this.requestUpdate();
    };
}
