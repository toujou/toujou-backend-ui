import { LitElement, html } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { PageCeElementStyles } from "./page-ce-element.styles.ts";
import { CeBlockSettingsBarItem } from "@components/ce-block-settings-bar/ce-block-settings-bar.ts";

@customElement('toujou-be-page-ce-element')
export class PageCeElement extends LitElement {
    static styles = [PageCeElementStyles];

    @property({ type: String, attribute: 'header-text' })
    headerText: string = '';

    @property({ type: Array })
    elementSettings: CeBlockSettingsBarItem[] = [];

    render() {
        return html`
            <toujou-be-page-ce-element-header class="page-ce-element-header" header-text="${this.headerText}"></toujou-be-page-ce-element-header>
            <toujou-be-page-ce-element-body class="page-ce-element-body">
                <slot name="body"></slot>
            </toujou-be-page-ce-element-body>
            <toujou-be-ce-block-settings-bar class="ce-block-settings-bar" .items="${this.elementSettings}"></toujou-be-ce-block-settings-bar>
        `;
    }
}
