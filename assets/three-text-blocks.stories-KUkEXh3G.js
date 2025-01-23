import{x as l}from"./lit-element-B4HGITLH.js";import{c as a}from"./text-block.molecule-DQAp0WAw.js";const p={title:"Content Elements/Text Elements/Three Text Blocks",component:"text",argTypes:{textOne:{control:"text"},textTwo:{control:"text"},textThree:{control:"text"},layout:{name:"Layout",control:{type:"inline-radio"},options:["33-33-33"]}}},s=t=>{const o=[{title:"Some settings",value:"Some value"},{title:"Another setting"}];return l`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${[{title:"Publish date",value:"01.01.2025"},{title:"Primary divider"}]}"
                    header-text="Three text blocks"
                    column-layout="${t.layout}"
                >
                    ${a(t.textOne,o)}
                    ${a(t.textTwo,o)}
                    ${a(t.textThree,o)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `},e=s.bind({});e.args={textOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",textTwo:"Tempus accumsan lobortis donec nostra tortor justo. Dapibus eget sed augue ac nunc ornare luctus. Malesuada interdum in phasellus dapibus purus orci. Sem pulvinar cubilia lacinia lobortis; penatibus aptent mattis elementum. Euismod quam dolor tempor velit, imperdiet metus. Nec justo facilisis est mattis posuere felis. Faucibus nec quis nisl ligula nibh pharetra aptent nullam.",textThree:"Lacinia tempor himenaeos consectetur hendrerit integer malesuada hendrerit rhoncus. Volutpat vulputate potenti erat non tellus feugiat rutrum tristique. Magnis hendrerit justo enim, rutrum himenaeos ornare augue. Odio sapien blandit vel vel hendrerit erat. Non vestibulum iaculis cras sollicitudin quis nibh platea risus ad. Vel tincidunt sit condimentum senectus habitant hac. Hendrerit sem eros nullam blandit sociosqu cubilia.",layout:"33-33-33"};var n,u,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`(args: ThreeTextBlocksProps) => {
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
                    header-text="Three text blocks"
                    column-layout="\${args.layout}"
                >
                    \${createTextBlock(args.textOne, textSettings)}
                    \${createTextBlock(args.textTwo, textSettings)}
                    \${createTextBlock(args.textThree, textSettings)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    \`;
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const d=["ThreeTextBlocks"];export{e as ThreeTextBlocks,d as __namedExportsOrder,p as default};
