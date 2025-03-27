import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiPageCeHeaderStyles } from "./tbeui-page-ce-header.styles.ts";

@customElement('tbeui-page-ce-header')
export class TbeuiPageCeHeader extends LitElement {
    static styles = [TbeuiPageCeHeaderStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    render() {
        return html`
            <ul class="icons">
                <li class="left__item">
                    <tbeui-icon icon-name="content" icon-color="font"></tbeui-icon>
                </li>
            </ul>

            <p class="title">${this.headerText}</p>

            <ul class="actions">
                <li class="actions__action">
                    <button class="actions__button">
                        <tbeui-icon icon-name="pencil"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button">
                        <tbeui-icon icon-name="toggle-switch"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button">
                        <tbeui-icon icon-name="trash"></tbeui-icon>
                    </button>
                </li>
                <li class="actions__action">
                    <button class="actions__button">
                        <tbeui-icon icon-name="dots-vertical"></tbeui-icon>
                    </button>
                </li>
            </ul>
        `;
    }
}
