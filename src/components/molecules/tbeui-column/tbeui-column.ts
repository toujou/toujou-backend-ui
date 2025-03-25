import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiColumnStyles } from "@components/molecules/tbeui-column/tbeui-column.styles.ts";

@customElement('tbeui-column')
export class TbeuiColumn extends LitElement {
    static styles = [ TbeuiColumnStyles ];

    @property({ type: String, attribute: 'header-name' })
    headerName: string = 'Header Name missing!'

    render() {
        return html`
            <div class="header">
                <p class="header__name">${this.headerName}</p>

                <div class="actions">
                    <button class="action">
                        <tbeui-icon
                            icon-size="normal"
                            icon-name="edit-column"
                        ></tbeui-icon>
                    </button>
                </div>
            </div>

            <div class="content">
                <slot name="content"></slot>
            </div>
        `;
    }
}
