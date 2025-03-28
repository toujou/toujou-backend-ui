import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiPageCeHeaderStyles } from "./tbeui-page-ce-header.styles.ts";

@customElement('tbeui-page-ce-header')
export class TbeuiPageCeHeader extends LitElement {
    static styles = [TbeuiPageCeHeaderStyles];

    @property({ type: String, attribute: 'ctype-name' })
    cTypeName: string = '';

    @property({ type: String, attribute: 'element-name' })
    elementName: string = '';

    @property({ type: String })
    private readonly ceBodyId: string = '';

    @property({ type: Boolean })
    private readonly ceBodyState: boolean = true;

    render() {
        return html`
            <div class="grab-area">
                <tbeui-icon
                    class="grab-area__icon"
                    icon-name="grip"
                    icon-size="normal"
                ></tbeui-icon>
            </div>

            <ul class="icons">
                <li class="icons__item">
                    <tbeui-icon icon-name="content" icon-color="font"></tbeui-icon>
                </li>
            </ul>

            <p class="title">
                <span class="title__ctype">${this.cTypeName}</span>
                ${this.elementName ? html`
                    <span class="title__name">${this.elementName}</span>
                ` : ''}
            </p>

            <ul class="actions">
                <li class="actions__action">
                    <button class="actions__button" title="edit" aria-label="edit">
                        <tbeui-icon icon-name="pencil"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button" title="toggle" aria-label="toggle">
                        <tbeui-icon icon-name="toggle-switch"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button" title="delete" aria-label="delete">
                        <tbeui-icon icon-name="trash"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button
                        class="actions__button"
                        title="open / close"
                        aria-label="open / close"
                        aria-controls="${this.ceBodyId}"
                        aria-expanded="${this.ceBodyState}"
                        @click="${this._onAccordionToggleClick}"
                    >
                        <tbeui-icon icon-name="triangle-down""></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button" title="more settings" aria-label="more settings">
                        <tbeui-icon icon-name="dots-vertical"></tbeui-icon>
                    </button>
                </li>
            </ul>
        `;
    }

    _onAccordionToggleClick = () => {
        this.dispatchEvent(new CustomEvent('tbeui-element-toggle-click', {
            bubbles: true,
            composed: true,
            detail: {
                headerEl: this
            }
        }));
    }
}
