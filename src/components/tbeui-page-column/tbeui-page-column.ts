import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiPageColumnStyles } from "@components/tbeui-page-column/tbeui-page-column.styles.ts";

@customElement('tbeui-page-column')
export class TbeuiPageColumn extends LitElement {
    static styles = [ TbeuiPageColumnStyles ];

    @property({ type: String, attribute: 'header-name' })
    headerName: string = 'Header Name missing!'

    render() {
        return html`
            <div class="column-line"></div>

            <div class="column-header">
                <p class="column-header__name">${this.headerName}</p>

                <div class="column-actions">
                    <button class="column-action">
                        <tbeui-icon
                            icon-size="normal"
                            icon-name="edit-column"
                        ></tbeui-icon>
                    </button>
                </div>
            </div>

            <div class="column-content">
                <slot name="content"></slot>
            </div>
        `;
    }
}
