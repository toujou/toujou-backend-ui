import { LitElement } from 'lit'
import { customElement} from 'lit/decorators.js'
import { FakeIconStyles } from "./fake-icon.styles.ts";

@customElement('fake-icon')
export class FakeIcon extends LitElement {
    static styles = [FakeIconStyles];
}
