import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { PageCeElementHeaderStyles } from "./page-ce-element-header.styles.ts";

@customElement('toujou-be-page-ce-element-header')
export class PageCeElementHeader extends LitElement {
    static styles = [PageCeElementHeaderStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    render() {
        return html`
            <ul class="page-ce-element-header__left">
                <li class="page-ce-element-header__left-item">
                    <toujou-be-ce-block-icon icon-name="content" icon-color="font-light"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__left-item">
                    <toujou-be-ce-block-icon icon-name="flag-de" is-color-icon></toujou-be-ce-block-icon>
                </li>
            </ul>
            <p class="page-ce-element-header__title">${this.headerText}</p>
            <ul class="page-ce-element-header__right">
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="pencil"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="toggle-switch"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="trash"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="dots-vertical"></toujou-be-ce-block-icon>
                </li>
            </ul>
        `;
    }
}
