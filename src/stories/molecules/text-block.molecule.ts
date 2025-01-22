import { html } from 'lit';
import { CeBlockSettingsBarItem } from "@components/ce-block-settings-bar/ce-block-settings-bar.ts";

export const createTextBlock = (
    text: string,
    textSettings: CeBlockSettingsBarItem[],
) => {
    return html`
        <toujou-be-page-ce-block class="ce-block" slot="body">
            <slot name="content" slot="content">
                <p>${text}</p>
            </slot>
            <toujou-be-ce-block-settings-bar
                slot="settings-bar"
                class="ce-block-settings-bar"
                .items="${textSettings}"
            ></toujou-be-ce-block-settings-bar>
        </toujou-be-page-ce-block>
    `;
}
