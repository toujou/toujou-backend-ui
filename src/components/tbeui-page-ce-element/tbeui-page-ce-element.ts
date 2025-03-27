import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiPageCeElementStyles } from "./tbeui-page-ce-element.styles.ts";
import { TbeuiSettingsBarItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";

@customElement('tbeui-page-ce-element')
export class TbeuiPageCeElement extends LitElement {
    static styles = [TbeuiPageCeElementStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    @property({ type: Array })
    elementSettings: TbeuiSettingsBarItem[] = [];

    render() {
        return html`
            <tbeui-page-ce-header class="header" header-text="${this.headerText}"></tbeui-page-ce-header>
            <tbeui-page-ce-body class="body">
                <slot name="body"></slot>
            </tbeui-page-ce-body>
            <tbeui-settings-bar class="settings-bar" .items="${this.elementSettings}"></tbeui-settings-bar>
        `;
    }
}
