import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiSettingsGroupItem } from "@components/tbeui-settings-group/tbeui-settings-group.ts";
import { TbeuiBlockMediaStyles } from "@components/tbeui-block-media/tbeui-block-media.styles.ts";

@customElement('tbeui-block-media')
export class TbeuiBlockMedia extends LitElement {
    static styles = [TbeuiBlockMediaStyles];

    @property({ type: String, attribute: 'image-aspect-ratio' })
    imageAspectRatio = 'auto';

    @property({ type: String, attribute: 'no-padding' })
    noPadding = false;

    @property({ type: Array, attribute: 'block-settings' })
    blockSettings: TbeuiSettingsGroupItem[] = [];

    render() {
        return html`
            <tbeui-preview
                class="preview"
                no-border
                ?no-padding="${this.noPadding}"
                .settings="${this.blockSettings}"
            >

                <figure class="figure" slot="content">
                    <img class="image" src="https://picsum.photos/600" alt=""/>
                </figure>

            </tbeui-preview>
        `
    }
}
