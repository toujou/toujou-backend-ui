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
                    <fake-icon class="fake-icon"></fake-icon>
                </li>
                <li class="page-ce-element-header__left-item">
                    <fake-icon class="fake-icon"></fake-icon>
                </li>
            </ul>
            <p class="page-ce-element-header__title">${this.headerText}</p>
            <ul class="page-ce-element-header__right">
                <li class="page-ce-element-header__right-item">
                    <fake-icon class="fake-icon"></fake-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <fake-icon class="fake-icon"></fake-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <fake-icon class="fake-icon"></fake-icon>
                </li>
            </ul>
        `;
    }
}
