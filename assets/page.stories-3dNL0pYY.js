import{x as s}from"./lit-element-B4HGITLH.js";import{c as o}from"./text-block.molecule-DQAp0WAw.js";import{c as m}from"./media-block.molecule-CU4WOO-T.js";const d={title:"Pages/ Text Elements",component:"text"};function n(){return s`
        <toujou-be-button
            icon-name="plus"
            button-size="s"
            is-centered
        >Create new content</toujou-be-button>
    `}const g=e=>{const t=[{title:"Some settings",value:"Some value"},{title:"Another setting"}],r=[{title:"crop",label:"Cropped image",iconName:"crop"},{title:"lightbox",label:"Click to enlarge",iconName:"eye"},{title:"link",label:"Image has a link",iconName:"link"},{title:"a11y-error",label:"Image has some accessibility errors",iconName:"a11y",isWarning:!0}],l=[{title:"Publish date",value:"01.01.2025"},{title:"Primary divider"}];return s`
        <toujou-be-page-column class="page-column">
            <toujou-be-page-column-header class="page-column__header">
                <p class="page-column__header-name">Content area</p>
            </toujou-be-page-column-header>
            <toujou-bg-page-column-content class="page-column__content">
                ${n()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${l}"
                    header-text="Four text blocks"
                    column-layout="25-25-25-25"
                >
                    ${o(e.text,t)}
                    ${o(e.text,t)}
                    ${o(e.text,t)}
                    ${o(e.text,t)}
                </toujou-be-page-ce-element>

                ${n()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${l}"
                    header-text="Text element"
                >
                    ${o(e.text,t)}
                </toujou-be-page-ce-element>

                ${n()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${l}"
                    header-text="Two text blocks"
                    column-layout="50-50"
                >
                    ${o(e.text,t)}
                    ${o(e.text,t)}
                </toujou-be-page-ce-element>

                ${n()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="${l}"
                    header-text="Text with media left"
                    column-layout="33-66"
                >
                    ${m("16-9",r)}
                    ${o(e.text,t)}
                </toujou-be-page-ce-element>

                ${n()}
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    `},a=g.bind({});a.args={text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(args: PageProps) => {
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
                \${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="\${elementSettings}"
                    header-text="Four text blocks"
                    column-layout="25-25-25-25"
                >
                    \${createTextBlock(args.text, textSettings)}
                    \${createTextBlock(args.text, textSettings)}
                    \${createTextBlock(args.text, textSettings)}
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>

                \${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="\${elementSettings}"
                    header-text="Text element"
                >
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>

                \${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="\${elementSettings}"
                    header-text="Two text blocks"
                    column-layout="50-50"
                >
                    \${createTextBlock(args.text, textSettings)}
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>

                \${createNewContentButton()}

                <toujou-be-page-ce-element
                    class="page-ce-element"
                    .elementSettings="\${elementSettings}"
                    header-text="Text with media left"
                    column-layout="33-66"
                >
                    \${createMediaBlock('16-9', figureSettings)}
                    \${createTextBlock(args.text, textSettings)}
                </toujou-be-page-ce-element>

                \${createNewContentButton()}
            </toujou-bg-page-column-content>
        </toujou-be-page-column>
    \`;
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const $=["TextElements"];export{a as TextElements,$ as __namedExportsOrder,d as default};
