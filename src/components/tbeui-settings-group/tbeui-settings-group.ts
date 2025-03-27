import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiSettingsGroupStyles } from "./tbeui-settings-group.styles.ts";

export enum TbeuiSettingsGroupItemType {
    Default = 'default',
    Warning = 'warning',
}

export interface TbeuiSettingsGroupItem {
    title: string;
    value: string;
    type?: TbeuiSettingsGroupItemType
}

@customElement('tbeui-settings-group')
export class TbeuiSettingsGroup extends LitElement {
    static styles = [ TbeuiSettingsGroupStyles ];

    @property({ type: Array })
    items: TbeuiSettingsGroupItem[] = [];

    render() {
        if (!this.items.length) return;

        return html`
            <ul class="list">
                ${this.items.map((item: TbeuiSettingsGroupItem) => html`
                    ${console.log('ttt', item.type)}
                    <li class="list__item">
                        <tbeui-icon
                            title="${item.value}"
                            icon-name="${item.title}"
                            icon-color="${item.type ? String(item.type) : TbeuiSettingsGroupItemType.Default}"
                        ></tbeui-icon>
                    </li>
                `)}
            </ul>
        `;
    }
}
