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
