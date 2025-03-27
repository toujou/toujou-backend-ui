import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TbeuiPageColumnsStyles } from "./tbeui-page-columns.styles.ts";

@customElement('tbeui-page-columns')
export class TbeuiPageColumns extends LitElement {
    static styles = [TbeuiPageColumnsStyles];

    render() {
        return html`
            <slot></slot>
        `
    }
}
