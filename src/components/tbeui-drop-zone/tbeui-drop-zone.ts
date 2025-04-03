import { html, LitElement } from 'lit'
import { customElement} from 'lit/decorators.js'
import { TbeuiDropZoneStyles } from "@components/tbeui-drop-zone/tbeui-drop-zone.styles.ts";

@customElement('tbeui-drop-zone')
export class TbeuiDropZone extends LitElement {
    static styles = [TbeuiDropZoneStyles];

    render() {
        return html`
            <div class="drop-zone"></div>
        `
    }
}
