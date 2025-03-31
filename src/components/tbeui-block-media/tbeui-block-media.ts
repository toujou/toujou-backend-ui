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

    @property({ type: Array })
    blockSettings: TbeuiSettingsGroupItem[] = [];

    @property({ type: String, attribute: 'media-url' })
    mediaURL: string = '';

    @property({ type: String, attribute: 'media-alt' })
    mediaAlt: string = '';

    render() {
        return html`
            <tbeui-preview
                class="preview"
                no-border
                ?no-padding="${this.noPadding}"
                .settings="${this.blockSettings}"
            >

                ${this.mediaURL
                    ? html`
                        <figure class="figure" slot="content">
                            <img class="image" src="${this.mediaURL}" alt="${this.mediaAlt}"/>
                        </figure>
                    ` : html`
                        <tbeui-media-placeholder slot="content"></tbeui-media-placeholder>
                    `}

            </tbeui-preview>
        `
    }
}
