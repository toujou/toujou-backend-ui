import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiSettingsBarStyles } from "./tbeui-settings-bar.styles.ts";

export interface TbeuiSettingsBarItem {
    title: string;
    value?: string;
}

@customElement('tbeui-settings-bar')
export class TbeuiSettingsBar extends LitElement {
    static styles = [ TbeuiSettingsBarStyles ];

    @property({ type: Array })
    items: TbeuiSettingsBarItem[] = [];

    render() {
        if (!this.items.length) return;

        return html`
            <ul class="settings-bar__list">
                ${this.items.map((item, index) => html`
                    <li class="settings-bar__item">
                        <span class="settings-bar__item-title">
                            ${item.title}${item.value ? ':' : ''}
                        </span>
                        ${item.value ? html`
                            <span class="settings-bar__item-value">${item.value}</span>
                        ` : ''}
                    </li>
                    ${index < this.items.length - 1 ? html`
                        <li class="settings-bar__item">
                            <span class="settings-bar__item-separator">|</span>
                        </li>
                    ` : ''}
                `)}
            </ul>
        `;
    }
}
