import { html, LitElement } from 'lit'
import { customElement, property} from 'lit/decorators.js'
import { TbeuiBlockFigureGroupSetting } from "@components/tbeui-block-figure-group/tbeui-block-figure-group.ts";

@customElement('tbeui-block-media')
export class TbeuiBlockMedia extends LitElement {
    @property({ type: String, attribute: 'image-aspect-ratio' })
    imageAspectRatio = 'auto';

    @property({ type: Array, attribute: 'figure-settings' })
    figureSettings: TbeuiBlockFigureGroupSetting[] = [];

    @property({ type: String, attribute: 'no-padding' })
    noPadding = false;

    render() {
        return html`
            <tbeui-preview
                class="preview"
                no-border
                ?no-padding="${this.noPadding}"
            >
                <tbeui-block-figure-group
                    slot="content"
                    image-aspect-ratio="${this.imageAspectRatio}"
                    .figureSettings="${this.figureSettings}"
                "></toujou-be-ce-block-figure-group>
            </tbeui-preview>
        `
    }
}
