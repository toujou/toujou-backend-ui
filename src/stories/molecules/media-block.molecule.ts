import { html } from 'lit';
import { CeBlockFigureGroupSetting } from "@components/ce-block-figure-group/ce-block-figure-group.ts";

export const createMediaBlock = (
    imageAspectRatio: string,
    figureSettings: CeBlockFigureGroupSetting[],
) => {
    return html`
        <toujou-be-page-ce-block class="ce-block" slot="body" no-padding>
            <toujou-be-ce-block-figure-group
                slot="content"
                image-aspect-ratio="${imageAspectRatio}"
                .figureSettings="${figureSettings}"
            "></toujou-be-ce-block-figure-group>
        </toujou-be-page-ce-block>
    `;
}
