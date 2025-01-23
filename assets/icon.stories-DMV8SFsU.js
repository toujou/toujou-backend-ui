import{x as p}from"./lit-element-B4HGITLH.js";const v={title:"Atoms/Icon",argTypes:{size:{name:"Size",control:{type:"inline-radio"},options:["xl","l","m","default","s"]}}};function d(){const n=[],s=document.styleSheets;for(let e=0;e<s.length;e++){const i=s[e];try{const t=i.cssRules||i.rules;for(let a=0;a<t.length;a++){const u=t[a];if(u instanceof CSSStyleRule){const r=u.style;for(let l=0;l<r.length;l++){const c=r[l];if(c.startsWith("--tbeui-icon-")){const f=r.getPropertyValue(c);n.push({name:c.replace("--tbeui-icon-",""),value:f})}}}}}catch(t){console.error("Error accessing stylesheet:",t)}}return n}const y=n=>{const s=d();return p`
        <div class="icons-grid" style="display: flex; flex-flow: row wrap; gap: var(--spacing-xl);">
            ${s.map(e=>(console.log("v, variable",e),console.log("aaa",e.name.startsWith("flag-")),p`
                    <toujou-be-ce-block-icon
                        icon-size="${n.size}"
                        icon-name="${e.name}"
                        ?is-color-icon="${e.name.startsWith("flag-")}"
                    ></toujou-be-ce-block-icon>
                `))}
        </div>
    `},o=y.bind({});o.args={size:"l"};var g,m,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: IconProps) => {
  const iconVariables = getIconVariables();
  return html\`
        <div class="icons-grid" style="display: flex; flex-flow: row wrap; gap: var(--spacing-xl);">
            \${iconVariables.map(variable => {
    console.log('v, variable', variable);
    console.log('aaa', variable.name.startsWith('flag-'));
    return html\`
                    <toujou-be-ce-block-icon
                        icon-size="\${args.size}"
                        icon-name="\${variable.name}"
                        ?is-color-icon="\${variable.name.startsWith('flag-')}"
                    ></toujou-be-ce-block-icon>
                \`;
  })}
        </div>
    \`;
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const x=["Icon"];export{o as Icon,x as __namedExportsOrder,v as default};
