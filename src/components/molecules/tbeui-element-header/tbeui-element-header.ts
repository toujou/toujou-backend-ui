import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiElementHeaderStyles } from "./tbeui-element-header.styles.ts";

@customElement('tbeui-element-header')
export class TbeuiElementHeader extends LitElement {
    static styles = [TbeuiElementHeaderStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    render() {
        return html`
            <ul class="icons">
                <li class="left__item">
                    <tbeui-icon icon-name="content" icon-color="font-light"></tbeui-icon>
                </li>
                <li class="left__item">
                    <tbeui-icon icon-name="flag-de" is-color-icon></tbeui-icon>
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
