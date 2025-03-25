import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiElementStyles } from "./tbeui-element.styles.ts";
import { TbeuiSettingsBarItem } from "@components/molecules/tbeui-settings-bar/tbeui-settings-bar.ts";

@customElement('tbeui-element')
export class TbeuiElement extends LitElement {
    static styles = [TbeuiElementStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    @property({ type: Array })
    elementSettings: TbeuiSettingsBarItem[] = [];

    render() {
        return html`
            <tbeui-element-header class="header" header-text="${this.headerText}"></tbeui-element-header>
            <tbeui-element-body class="body">
                <slot name="body"></slot>
            </tbeui-element-body>
            <tbeui-settings-bar class="settings-bar" .items="${this.elementSettings}"></tbeui-settings-bar>
        `;
    }
}
