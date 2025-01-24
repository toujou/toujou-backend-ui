import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'

@customElement('toujou-be-media-block')
export class MediaBlock extends LitElement {
    @property({ type: String, attribute: 'image-aspect-ratio' })
    imageAspectRatio = 'auto';

    @property({ type: Array, attribute: 'figure-settings' })
    figureSettings = [];

    @property({ type: String, attribute: 'no-padding' })
    noPadding = false;

    render() {
        return html`
            <toujou-be-page-ce-block
                class="ce-block"
                ?no-padding="${this.noPadding}"
            >
                <toujou-be-ce-block-figure-group
                    slot="content"
                    image-aspect-ratio="${this.imageAspectRatio}"
                    .figureSettings="${this.figureSettings}"
                "></toujou-be-ce-block-figure-group>
            </toujou-be-page-ce-block>
        `
    }
}
