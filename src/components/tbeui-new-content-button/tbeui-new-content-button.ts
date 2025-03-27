import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { TbeuiNewContentButtonStyles} from "@components/tbeui-new-content-button/tbeui-new-content-button.styles.ts";

@customElement('tbeui-new-content-button')
export class TbeuiNewContentButton extends LitElement {
    static styles = [ TbeuiNewContentButtonStyles ];

    render() {
        return html`
            <button class="button">
                <tbeui-icon icon-size="normal" icon-name="plus" class="icon"></tbeui-icon>
                New content element
            </button>
        `
    }
}
