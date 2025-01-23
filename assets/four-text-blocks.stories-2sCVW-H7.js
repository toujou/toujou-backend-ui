import{x as s}from"./lit-element-B4HGITLH.js";import{c as a}from"./text-block.molecule-DQAp0WAw.js";const p={title:"Content Elements/Text Elements/Four Text Blocks",component:"text",argTypes:{textOne:{control:"text"},textTwo:{control:"text"},textThree:{control:"text"},layout:{name:"Layout",control:{type:"inline-radio"},options:["25-25-25-25"]}}},l=e=>{const o=[{title:"Some settings",value:"Some value"},{title:"Another setting"}];return s`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${[{title:"Publish date",value:"01.01.2025"},{title:"Primary divider"}]}"
                    header-text="Four text blocks"
                    column-layout="${e.layout}"
                >
                    ${a(e.textOne,o)}
                    ${a(e.textTwo,o)}
                    ${a(e.textThree,o)}
                    ${a(e.textFour,o)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `},t=l.bind({});t.args={textOne:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",textTwo:"Tempus accumsan lobortis donec nostra tortor justo. Dapibus eget sed augue ac nunc ornare luctus. Malesuada interdum in phasellus dapibus purus orci. Sem pulvinar cubilia lacinia lobortis; penatibus aptent mattis elementum. Euismod quam dolor tempor velit, imperdiet metus. Nec justo facilisis est mattis posuere felis. Faucibus nec quis nisl ligula nibh pharetra aptent nullam.",textThree:"Lacinia tempor himenaeos consectetur hendrerit integer malesuada hendrerit rhoncus. Volutpat vulputate potenti erat non tellus feugiat rutrum tristique. Magnis hendrerit justo enim, rutrum himenaeos ornare augue. Odio sapien blandit vel vel hendrerit erat. Non vestibulum iaculis cras sollicitudin quis nibh platea risus ad. Vel tincidunt sit condimentum senectus habitant hac. Hendrerit sem eros nullam blandit sociosqu cubilia.",textFour:"Mauris ornare cursus tempus metus, consequat dui consequat. Porttitor nostra venenatis varius sapien sollicitudin sodales tincidunt. Gravida primis elementum vivamus inceptos fames. Aliquet hendrerit blandit rutrum volutpat turpis per. Iaculis platea sociosqu facilisis potenti interdum hendrerit sem. Finibus lobortis magnis ut dictum luctus. Vel tincidunt sit condimentum senectu. dui erat himenaeos.",layout:"25-25-25-25"};var n,u,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`(args: FourTextBlocksProps) => {
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
                    header-text="Four text blocks"
                    column-layout="\${args.layout}"
                >
                    \${createTextBlock(args.textOne, textSettings)}
                    \${createTextBlock(args.textTwo, textSettings)}
                    \${createTextBlock(args.textThree, textSettings)}
                    \${createTextBlock(args.textFour, textSettings)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    \`;
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const d=["FourTextBlocks"];export{t as FourTextBlocks,d as __namedExportsOrder,p as default};
