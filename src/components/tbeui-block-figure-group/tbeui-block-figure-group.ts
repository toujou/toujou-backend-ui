import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { TbeuiBlockFigureGroupStyles } from "./tbeui-block-figure-group.styles.ts";

export interface TbeuiBlockFigureGroupSetting {
    title: string;
    label: string,
    iconName: string,
    isWarning?: boolean;
}

@customElement('tbeui-block-figure-group')
export class TbeuiBlockFigureGroup extends LitElement {
    static styles = [TbeuiBlockFigureGroupStyles];

    @property({ type: Array })
    figureSettings: TbeuiBlockFigureGroupSetting[] = [];

    render() {
        return html`
            <figure class="figure-group__figure">
                <img class="figure-group__image" src="https://picsum.photos/600" alt=""/>

                <ul class="figure-group__settings">
                    ${this.figureSettings.map((setting: TbeuiBlockFigureGroupSetting) => {
                        if (setting.label && setting.iconName) {
                            return html`
                                <li class="figure-group__settings-item" ?is-warning=${setting.isWarning}>
                                    <tbeui-icon
                                        icon-name="${setting.iconName}"
                                        icon-size="s"
                                        title="${setting.label}"
                                    ></tbeui-icon>
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
