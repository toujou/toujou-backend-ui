import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CeBlockSettingsBarStyles } from "./ce-block-settings-bar.styles.ts";

export interface CeBlockSettingsBarItem {
    title: string;
    value?: string;
}

@customElement('toujou-be-ce-block-settings-bar')
export class CeBlockSettingsBar extends LitElement {
    static styles = [ CeBlockSettingsBarStyles ];

    @property({ type: Array })
    items: CeBlockSettingsBarItem[] = [];

    render() {
        if (!this.items.length) return;

        return html`
            <ul class="ce-block-settings-bar__list">
                ${this.items.map((item, index) => html`
                    <li class="ce-block-settings-bar__item">
                        <span class="ce-block-settings-bar__item-title">
                            ${item.title}${item.value ? ':' : ''}
                        </span>
                        ${item.value ? html`
                            <span class="ce-block-settings-bar__item-value">${item.value}</span>
                        ` : ''}
                    </li>
                    ${index < this.items.length - 1 ? html`
                        <li class="ce-block-settings-bar__item">
                            <span class="ce-block-settings-bar__item-separator">|</span>
                        </li>
                    ` : ''}
                `)}
            </ul>
        `;
    }
}
