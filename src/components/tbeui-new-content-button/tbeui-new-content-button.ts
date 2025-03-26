import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('tbeui-new-content-button')
export class TbeuiNewContentButton extends LitElement {
    render() {
        return html`
            <tbeui-button
                icon-name="plus"
                button-size="s"
                is-centered
            >Create new content</tbeui-button>
        `
    }
}
