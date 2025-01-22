import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { CeBlockFigureGroupStyles } from "./ce-block-figure-group.styles.ts";

@customElement('toujou-be-ce-block-figure-group')
export class CeBlockFigureGroup extends LitElement {
    static styles = [ CeBlockFigureGroupStyles ];

    render() {
       return html`
        <figure class="figure-group__figure">
            <img class="figure-group__image" src="https://picsum.photos/600" alt=""/>
            <ul class="figure-group__settings">
                <li class="figure-group__settings-item">
                    <toujou-be-ce-block-button></toujou-be-ce-block-button>
                </li>
                <li class="figure-group__settings-item">
                    <toujou-be-ce-block-button></toujou-be-ce-block-button>
                </li>
                <li class="figure-group__settings-item">
                    <toujou-be-ce-block-button></toujou-be-ce-block-button>
                </li>
                <li class="figure-group__settings-item">
                    <toujou-be-ce-block-button></toujou-be-ce-block-button>
                </li>
            </ul>
        </figure>
       `
    }
}
