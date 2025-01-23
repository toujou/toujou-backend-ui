import{x as e}from"./lit-element-B4HGITLH.js";const l={title:"Atoms/Headline",argTypes:{text:{name:"Text",control:"text"},tag:{name:"Tag",control:{type:"inline-radio"},options:["h1","h2","h3","h4","h5","h6"]}}},s=t=>{switch(t.tag){case"h1":return e`<h1>${t.text}</h1>`;case"h2":return e`<h2>${t.text}</h2>`;case"h3":return e`<h3>${t.text}</h3>`;case"h4":return e`<h4>${t.text}</h4>`;case"h5":return e`<h5>${t.text}</h5>`;case"h6":return e`<h6>${t.text}</h6>`;default:return e`<h1>${t.text}</h1>`}},h=s.bind({});h.args={text:"This is a headline",tag:"h1"};var r,n,a;h.parameters={...h.parameters,docs:{...(r=h.parameters)==null?void 0:r.docs,source:{originalSource:"(args: HeadlineProps) => {\n  switch (args.tag) {\n    case 'h1':\n      return html`<h1>${args.text}</h1>`;\n    case 'h2':\n      return html`<h2>${args.text}</h2>`;\n    case 'h3':\n      return html`<h3>${args.text}</h3>`;\n    case 'h4':\n      return html`<h4>${args.text}</h4>`;\n    case 'h5':\n      return html`<h5>${args.text}</h5>`;\n    case 'h6':\n      return html`<h6>${args.text}</h6>`;\n    default:\n      return html`<h1>${args.text}</h1>`;\n    // Default to h1 if level is invalid\n  }\n}",...(a=(n=h.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const o=["Headline"];export{h as Headline,o as __namedExportsOrder,l as default};