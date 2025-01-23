import{x as l}from"./lit-element-B4HGITLH.js";import{c}from"./text-block.molecule-DQAp0WAw.js";import{c as r}from"./media-block.molecule-CU4WOO-T.js";const b={title:"Content Elements/Text Elements/Text With Media Left",component:"text",argTypes:{text:{control:"text"}}},s=i=>{const n=[{title:"Some settings",value:"Some value"},{title:"Another setting"}];return l`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${[{title:"Lightbox"},{title:"Autoslide",value:"6s"},{title:"Secondary divider"}]}"
                    header-text="Text with media left"
                    column-layout="33-66"
                >
                    ${r("16-9",[{title:"crop",label:"Cropped image",iconName:"crop"},{title:"lightbox",label:"Click to enlarge",iconName:"eye"},{title:"link",label:"Image has a link",iconName:"link"},{title:"a11y-error",label:"Image has some accessibility errors",iconName:"a11y",isWarning:!0}])}
                    ${c(i.text,n)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `},e=s.bind({});e.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: TextWithMediaLeftProps) => {
  const textSettings: CeBlockSettingsBarItem[] = [{
    title: 'Some settings',
    value: 'Some value'
  }, {
    title: 'Another setting'
  }];
  const figureSettings: CeBlockFigureGroupSetting[] = [{
    title: 'crop',
    label: 'Cropped image',
    iconName: 'crop'
  }, {
    title: 'lightbox',
    label: 'Click to enlarge',
    iconName: 'eye'
  }, {
    title: 'link',
    label: 'Image has a link',
    iconName: 'link'
  }, {
    title: 'a11y-error',
    label: 'Image has some accessibility errors',
    iconName: 'a11y',
    isWarning: true
  }];
  const elementSettings: CeBlockSettingsBarItem[] = [{
    title: 'Lightbox'
  }, {
    title: 'Autoslide',
    value: '6s'
  }, {
    title: 'Secondary divider'
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
                    header-text="Text with media left"
                    column-layout="33-66"
                >
                    \${createMediaBlock('16-9', figureSettings)}
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    \`;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["TextWithMediaLeft"];export{e as TextWithMediaLeft,x as __namedExportsOrder,b as default};
