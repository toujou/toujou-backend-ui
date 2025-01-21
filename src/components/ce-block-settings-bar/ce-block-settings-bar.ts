import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CeBlockSettingsBarStyles } from "./ce-block-settings-bar.styles.ts";

export interface CeBlockSettingsBarItem {
    title: string; // Required
    value?: string; // Optional
}

@customElement('toujou-be-ce-block-settings-bar')
export class CeBlockSettingsBar extends LitElement {
    static styles = [ CeBlockSettingsBarStyles ];

    // The `items` property will be passed as an attribute and will be an array of SettingsBarItem objects.
    @property({ type: Array })
    items: CeBlockSettingsBarItem[] = [];

    // Render the component
    render() {
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
