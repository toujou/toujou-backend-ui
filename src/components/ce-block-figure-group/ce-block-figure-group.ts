import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { CeBlockFigureGroupStyles } from "./ce-block-figure-group.styles.ts";

export interface CeBlockFigureGroupSetting {
    title: string;
    label: string,
    iconName: string,
    isWarning?: boolean;
}

@customElement('toujou-be-ce-block-figure-group')
export class CeBlockFigureGroup extends LitElement {
    static styles = [ CeBlockFigureGroupStyles ];

    @property({ type: Array })
    figureSettings: CeBlockFigureGroupSetting[] = [];

    render() {
       return html`
        <figure class="figure-group__figure">
            <img class="figure-group__image" src="https://picsum.photos/600" alt=""/>
            <ul class="figure-group__settings">
                ${this.figureSettings.map((setting: CeBlockFigureGroupSetting) => {
                   if (setting.label && setting.iconName) {
                       return html`
                           <li class="figure-group__settings-item" ?is-warning=${setting.isWarning}>
                               <toujou-be-ce-block-icon
                                   icon-name="${setting.iconName}"
                                   icon-size="s"
                                   title="${setting.label}"
                               ></toujou-be-ce-block-icon>
                           </li>
                       `
                   }
                   return null;
                })}
            </ul>
        </figure>
       `
    }
}
