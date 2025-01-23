import{u as z,f as O,i as l,r as u,x as s}from"./lit-element-B4HGITLH.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=o=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:O},C=(o=S,t,n)=>{const{kind:r,metadata:e}=n;let i=globalThis.litPropertyMetadata.get(e);if(i===void 0&&globalThis.litPropertyMetadata.set(e,i=new Map),i.set(n.name,o),r==="accessor"){const{name:a}=n;return{set(p){const _=t.get.call(this);t.set.call(this,p),this.requestUpdate(a,_,o)},init(p){return p!==void 0&&this.P(a,void 0,o),p}}}if(r==="setter"){const{name:a}=n;return function(p){const _=this[a];t.call(this,p),this.requestUpdate(a,_,o)}}throw Error("Unsupported decorator location: "+r)};function c(o){return(t,n)=>typeof n=="object"?C(o,t,n):((r,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,a?{...r,wrapped:!0}:r),a?Object.getOwnPropertyDescriptor(e,i):void 0})(o,t,n)}const B=l`
    :host {
        --button-padding: var(--spacing-s);
        --button-font-size: var(--font-size-normal);
        --button-color: var(--tbeui-color-font);
        --button-background-color: transparent;
        --button-border-color: var(--tbeui-color-middle-grey);


        height: fit-content;
        width: fit-content;
    }

    :host([button-size="s"]) {
        --button-padding: var(--spacing-xs);
        --button-font-size: var(--font-size-s);
    }

    :host([is-centered]) {
        margin-inline: auto;
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-s);
        padding: var(--button-padding) calc(var(--button-padding) * 2);
        height: fit-content;
        width: fit-content;
        font-family: var(--font-family-text);
        font-size: var(--button-font-size);
        color: var(--button-color);
        background-color: var(--button-background-color);
        border: 1px solid var(--button-border-color);
        border-radius: var(--border-radius-xs);
        cursor: pointer;
    }

    .button:is(:hover, :focus-visible) {
        --button-color: var(--tbeui-color-font-dark);
        --button-background-color: var(--tbeui-color-middle-grey);
        --button-border-color: var(--tbeui-color-font-dark);
    }

`;var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,w=(o,t,n,r)=>{for(var e=r>1?void 0:r?T(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&D(t,n,e),e};let d=class extends u{constructor(){super(...arguments),this.iconName="default",this.buttonSize="normal"}render(){return s`
            <button class="button">
                ${this.iconName?s`<toujou-be-ce-block-icon icon-name="${this.iconName}"></toujou-be-ce-block-icon>`:""}
                <slot></slot>
            </button>
        `}};d.styles=[B];w([c({type:String,attribute:"icon-name"})],d.prototype,"iconName",2);w([c({type:String,attribute:"button-size"})],d.prototype,"buttonSize",2);d=w([g("toujou-be-button")],d);const E=l`
    :host {
        --image-aspect-ratio: auto;

        display: block;
        padding: 0;
        margin: 0;
        position: relative;
        width: fit-content;
        height: fit-content;
        border-radius: var(--border-radius-s);
        overflow: hidden;
    }

    :host([image-aspect-ratio="16-9"]) {
        --image-aspect-ratio: 16 / 9;
    }

    :host([image-aspect-ratio="4-3"]) {
        --image-aspect-ratio: 4 / 3;
    }

    :host([image-aspect-ratio="1-1"]) {
        --image-aspect-ratio: 1 / 1;
    }

    .figure-group__figure {
        margin: 0;
        padding: 0;
        height: fit-content;
        width: fit-content;
    }

    .figure-group__image {
        width: 100%;
        height: auto;
        aspect-ratio: var(--image-aspect-ratio);
        object-fit: cover;
        vertical-align: middle;
    }

    .figure-group__settings {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: var(--spacing-s);
        left: var(--spacing-s);
        display: flex;
        flex-flow: row nowrap;
        gap: var(--spacing-s);
    }

    .figure-group__settings-item {
        margin: 0;
        background-color: var(--tbeui-color-white);
        border-radius: var(--border-radius-xs);
        padding: var(--spacing-xxs);
    }

    .figure-group__settings-item[is-warning] {
        background-color: var(--tbeui-color-warning);
    }
`;var N=Object.defineProperty,I=Object.getOwnPropertyDescriptor,j=(o,t,n,r)=>{for(var e=r>1?void 0:r?I(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&N(t,n,e),e};let f=class extends u{constructor(){super(...arguments),this.figureSettings=[]}render(){return s`
        <figure class="figure-group__figure">
            <img class="figure-group__image" src="https://picsum.photos/600" alt=""/>
            <ul class="figure-group__settings">
                ${this.figureSettings.map(o=>o.label&&o.iconName?s`
                           <li class="figure-group__settings-item" ?is-warning=${o.isWarning}>
                               <toujou-be-ce-block-icon
                                   icon-name="${o.iconName}"
                                   icon-size="s"
                                   title="${o.label}"
                               ></toujou-be-ce-block-icon>
                           </li>
                       `:null)}
            </ul>
        </figure>
       `}};f.styles=[E];j([c({type:Array})],f.prototype,"figureSettings",2);f=j([g("toujou-be-ce-block-figure-group")],f);const A=l`
    :host {
        --icon-size: var(--font-size-m);
        --icon-color: var(--tbeui-color-font);
        --flag-aspect-ratio: 4 / 3;

        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--icon-size);
        width: var(--icon-size);
    }

    :host([icon-size="xl"]) {
        --icon-size: var(--font-size-xxl);
    }

    :host([icon-size="l"]) {
        --icon-size: var(--font-size-xl);
    }

    :host([icon-size="m"]) {
        --icon-size: var(--font-size-l);
    }

    :host([icon-size="s"]) {
        --icon-size: var(--font-size-normal);
    }

    :host([icon-color="background"]) {
        --icon-color: var(--tbeui-color-white);
    }

    :host([icon-color="font-light"]) {
        --icon-color: var(--tbeui-color-font-light);
    }

    .icon {
        display: block;
        height: 100%;
        width: 100%;
        background-color: var(--icon-color);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-image: var(--icon-image);
    }

    :host([is-color-icon]) .icon {
        mask-image: unset;
        background-image: var(--icon-image);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: auto;
        aspect-ratio: var(--flag-aspect-ratio);
    }
`;var F=Object.defineProperty,M=Object.getOwnPropertyDescriptor,x=(o,t,n,r)=>{for(var e=r>1?void 0:r?M(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&F(t,n,e),e};let b=class extends u{constructor(){super(...arguments),this.iconSize="default",this.iconName="default"}connectedCallback(){super.connectedCallback(),this.setIconVariable()}setIconVariable(){this.style.setProperty("--icon-image",`var(--tbeui-icon-${this.iconName})`)}render(){return s`
            <span class="icon"></span>
        `}};b.styles=[A];x([c({type:String,attribute:"icon-size"})],b.prototype,"iconSize",2);x([c({type:String,attribute:"icon-name"})],b.prototype,"iconName",2);b=x([g("toujou-be-ce-block-icon")],b);const U=l`
    :host {
        --ce-block-settings-bar-separator: '|';

        font-family: var(--font-family-text);
        font-size: var(--font-size-s);
        container-name: CeBlockSettingsBar;
        container-type: inline-size;
        display: flex;
        flex-flow: row wrap;
        gap: var(--spacing-s);
        background-color: var(--tbeui-color-light-grey);
    }

    .ce-block-settings-bar__list {
        list-style: none;
        margin: 0;
        padding: var(--spacing-s) var(--spacing-normal);
        display: flex;
        flex-flow: row wrap;
        gap: var(--spacing-s);
        width: 100%;
    }

    .ce-block-settings-bar__item-separator {
        display: block;
        font-weight: var(--font-weight-text-bold);
        margin-inline: var(--spacing-xs) var(--spacing-xxs);
    }

    .ce-block-settings-bar__item-title {
        font-weight: var(--font-weight-text-bold);
    }

    @container CeBlockSettingsBar (width < 340px) {
        .ce-block-settings-bar__list {
            flex-flow: column nowrap;
            gap: var(--spacing-s);
        }

        .ce-block-settings-bar__item:has(.ce-block-settings-bar__item-separator) {
            display: none;
        }
    }
`;var q=Object.defineProperty,G=Object.getOwnPropertyDescriptor,P=(o,t,n,r)=>{for(var e=r>1?void 0:r?G(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&q(t,n,e),e};let h=class extends u{constructor(){super(...arguments),this.items=[]}render(){if(this.items.length)return s`
            <ul class="ce-block-settings-bar__list">
                ${this.items.map((o,t)=>s`
                    <li class="ce-block-settings-bar__item">
                        <span class="ce-block-settings-bar__item-title">
                            ${o.title}${o.value?":":""}
                        </span>
                        ${o.value?s`
                            <span class="ce-block-settings-bar__item-value">${o.value}</span>
                        `:""}
                    </li>
                    ${t<this.items.length-1?s`
                        <li class="ce-block-settings-bar__item">
                            <span class="ce-block-settings-bar__item-separator">|</span>
                        </li>
                    `:""}
                `)}
            </ul>
        `}};h.styles=[U];P([c({type:Array})],h.prototype,"items",2);h=P([g("toujou-be-ce-block-settings-bar")],h);const H=l`
    :host {
        --ce-block-border: 1px solid var(--tbeui-color-middle-grey);
        --ce-block-content-padding: var(--spacing-s);

        display: block;
        height: fit-content;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        border: var(--ce-block-border);
        border-radius: var(--border-radius-s);
        overflow: hidden;
    }

    :host([no-padding]) {
        --ce-block-content-padding: 0;
    }

    .ce-block__content {
        display: block;
        padding: var(--ce-block-content-padding);
    }

    .ce-block__content > *:first-child {
        margin-top: 0;
    }

    .ce-block__content > *:last-child {
        margin-bottom: 0;
    }
`;var V=Object.defineProperty,W=Object.getOwnPropertyDescriptor,J=(o,t,n,r)=>{for(var e=r>1?void 0:r?W(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&V(t,n,e),e};let y=class extends u{render(){return s`
            <toujou-be-page-ce-block-content class="ce-block__content">
                <slot name="content"></slot>
            </toujou-be-page-ce-block-content>

            <slot name="settings-bar"></slot>
        `}};y.styles=[H];y=J([g("toujou-be-page-ce-block")],y);const K=l`
    :host {
        --page-ce-element-padding: var(--spacing-normal);
        --page-ce-element-grid-template-columns: 1fr;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas:
            "header"
            "body"
            "settings-bar";
        grid-gap: var(--page-ce-element-padding);
        height: fit-content;
        background-color: var(--tbeui-color-white);
        padding: 0;
        border-radius: var(--border-radius-s);
        box-shadow: var(--box-shadow-xs);
        border: 1px solid var(--tbeui-color-middle-grey);
    }

    :host([column-layout="50-50"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr;
    }

    :host([column-layout="33-66"]) {
        --page-ce-element-grid-template-columns: 1fr 2fr;
    }

    :host([column-layout="66-33"]) {
        --page-ce-element-grid-template-columns: 2fr 1fr;
    }

    :host([column-layout="33-33-33"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr 1fr;
    }

    :host([column-layout="25-25-25-25"]) {
        --page-ce-element-grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .page-ce-element-header {
        grid-area: header;
        padding: var(--page-ce-element-padding) var(--page-ce-element-padding) 0;
    }

    .page-ce-element-body {
        grid-area: body;
        display: grid;
        grid-template-columns: var(--page-ce-element-grid-template-columns);
        grid-gap: var(--page-ce-element-padding);
        padding: 0 var(--page-ce-element-padding);
    }


    :host > .ce-block-settings-bar {
        grid-area: settings-bar
    }
`;var L=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,k=(o,t,n,r)=>{for(var e=r>1?void 0:r?Q(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&L(t,n,e),e};let m=class extends u{constructor(){super(...arguments),this.headerText="",this.elementSettings=[]}render(){return s`
            <toujou-be-page-ce-element-header class="page-ce-element-header" header-text="${this.headerText}"></toujou-be-page-ce-element-header>
            <toujou-be-page-ce-element-body class="page-ce-element-body">
                <slot name="body"></slot>
            </toujou-be-page-ce-element-body>
            <toujou-be-ce-block-settings-bar class="ce-block-settings-bar" .items="${this.elementSettings}"></toujou-be-ce-block-settings-bar>
        `}};m.styles=[K];k([c({type:String,attribute:"header-text"})],m.prototype,"headerText",2);k([c({type:Array})],m.prototype,"elementSettings",2);m=k([g("toujou-be-page-ce-element")],m);const R=l`
    :host {
        grid-area: header;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: var(--spacing-s);
    }

    .page-ce-element-header__left {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--spacing-xs);
    }

    .page-ce-element-header__title {
        font-family: var(--font-family-headline);
        font-weight: var(--font-weight-headline);
        line-height: 1;
        margin: 0;
        padding: 0;
        flex-grow: 1;
    }

    .page-ce-element-header__right {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        grid-gap: var(--spacing-normal);
    }

`;var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,$=(o,t,n,r)=>{for(var e=r>1?void 0:r?Y(t,n):t,i=o.length-1,a;i>=0;i--)(a=o[i])&&(e=(r?a(t,n,e):a(e))||e);return r&&e&&X(t,n,e),e};let v=class extends u{constructor(){super(...arguments),this.headerText=""}render(){return s`
            <ul class="page-ce-element-header__left">
                <li class="page-ce-element-header__left-item">
                    <toujou-be-ce-block-icon icon-name="content" icon-color="font-light"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__left-item">
                    <toujou-be-ce-block-icon icon-name="flag-de" is-color-icon></toujou-be-ce-block-icon>
                </li>
            </ul>
            <p class="page-ce-element-header__title">${this.headerText}</p>
            <ul class="page-ce-element-header__right">
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="pencil"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="toggle-switch"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="trash"></toujou-be-ce-block-icon>
                </li>
                <li class="page-ce-element-header__right-item">
                    <toujou-be-ce-block-icon icon-name="dots-vertical"></toujou-be-ce-block-icon>
                </li>
            </ul>
        `}};v.styles=[R];$([c({type:String,attribute:"header-text"})],v.prototype,"headerText",2);v=$([g("toujou-be-page-ce-element-header")],v);const ee={backgrounds:{default:"be-column-bg",values:[{name:"be-column-bg",value:"var(--tbeui-color-white)"}]},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},options:{storySort:{order:["Content Elements",["Text Elements",["Text","Two Text Blocks","Three Text Blocks","Four Text Blocks"]]]}}};export{ee as parameters};
