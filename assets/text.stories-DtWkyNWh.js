import{x as l}from"./lit-element-B4HGITLH.js";import{c as s}from"./text-block.molecule-DQAp0WAw.js";const g={title:"Content Elements/Text Elements/Text",component:"text",argTypes:{text:{control:"text"}}},c=n=>{const u=[{title:"Some settings",value:"Some value"},{title:"Another setting"}];return l`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${[{title:"Publish date",value:"01.01.2025"},{title:"Primary divider"}]}"
                    header-text="Text element"
                >
                    ${s(n.text,u)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `},e=c.bind({});e.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: TextProps) => {
  const textSettings: CeBlockSettingsBarItem[] = [{
    title: 'Some settings',
    value: 'Some value'
  }, {
    title: 'Another setting'
  }];
  const elementSettings: CeBlockSettingsBarItem[] = [{
    title: 'Publish date',
    value: '01.01.2025'
  }, {
    title: 'Primary divider'
  }];
  return html\`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="\${elementSettings}"
                    header-text="Text element"
                >
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Text"];export{e as Text,p as __namedExportsOrder,g as default};
