import { LitElement, html, nothing } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined} from 'lit/directives/if-defined.js';
import { TbeuiPageCeSettingsHeaderStyles } from "./tbeui-page-ce-settings-header.styles.ts";

export interface TbeuiPageCeSettingsHeaderItem {
    title: string;
    value?: string;
    iconName?: string;
}

@customElement('tbeui-page-ce-settings-header')
export class TbeuiPageCeSettingsHeader extends LitElement {
    static styles = [TbeuiPageCeSettingsHeaderStyles];

    @property({ type: Array })
    items: TbeuiPageCeSettingsHeaderItem[] = [];

    render() {
        return html`
            <ul class="list">
                ${this.items.map(item => html`
                    <li class="list__item">
                        ${this._renderIcon(item)}
                        <div class="list__item-content">
                            ${this._renderTitle(item)}
                            ${this._renderValue(item)}
                        </div>
                    </li>
                `)}
            </ul>
        `;
    }

    _renderIcon(item: TbeuiPageCeSettingsHeaderItem) {
        if (item.iconName !== undefined && item.iconName !== null && item.iconName !== '') {
            return html`
                <tbeui-icon
                    aria-hidden="true"
                    title="${ifDefined(item.title)}"
                    icon-name="${ifDefined(item.iconName)}"
                ></tbeui-icon>
            `;
        }
        return nothing;
    }

    _renderTitle(item: TbeuiPageCeSettingsHeaderItem) {
        return html`
            <span class="list__item-title">${item.title}</span>
        `;
    }

    _renderValue(item: TbeuiPageCeSettingsHeaderItem) {
        if (item.value !== undefined && item.value !== null && item.value !== '') {
            return html`<span class="list__item-value">: ${item.value}</span>`;
        }
        return nothing;
    }
}
