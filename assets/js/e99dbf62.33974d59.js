"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[7242],{8165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=n(5893),s=n(1151);const r={},c=void 0,l={id:"Core/Modules/Foact/Space",title:"Space",description:"Properties",source:"@site/docs/Core/Modules/Foact/Space.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Space",permalink:"/docs/Core/Modules/Foact/Space",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Foact/Space.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slider",permalink:"/docs/Core/Modules/Foact/Slider"},next:{title:"Text",permalink:"/docs/Core/Modules/Foact/Text"}},d={},o=[{value:"Properties",id:"properties",level:3},{value:"Children",id:"children",level:3},{value:"Example",id:"example",level:3},{value:"Direction",id:"direction",level:4},{value:"Size",id:"size",level:4},{value:"Align",id:"align",level:4},{value:"Wrap",id:"wrap",level:4}];function a(e){const t={code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"direction"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"horizontal"}),", ",(0,i.jsx)(t.code,{children:"vertical"})]}),(0,i.jsx)(t.td,{children:"Direction of the spacing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"size"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"small"}),", ",(0,i.jsx)(t.code,{children:"middle"}),", ",(0,i.jsx)(t.code,{children:"large"}),", number"]}),(0,i.jsx)(t.td,{children:"Amount of spacing between elements"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"align"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"center"}),", ",(0,i.jsx)(t.code,{children:"start"}),", ",(0,i.jsx)(t.code,{children:"end"}),", ",(0,i.jsx)(t.code,{children:"baseline"})]}),(0,i.jsx)(t.td,{children:"Alignment of elements"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"wrap"}),(0,i.jsx)(t.td,{children:"boolean"}),(0,i.jsx)(t.td,{children:"Auto wrap line"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All properties are optional."}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"children",children:"Children"}),"\n",(0,i.jsx)(t.p,{children:"Can have children."}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-lua",children:'local space = myUI:createElement("Space", {\n    width = "100%",\n    height = "100%",\n}, {\n    myUI:createElement("Button", {text = "1"}),\n    myUI:createElement("Button", {text = "2"}),\n    myUI:createElement("Button", {text = "3"})\n})\n'})}),"\n",(0,i.jsxs)(t.p,{children:["This is how it looks in-game:",(0,i.jsx)("p",{}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/MWSX07p.png",alt:"In-Game"})]}),"\n",(0,i.jsx)(t.h4,{id:"direction",children:"Direction"}),"\n",(0,i.jsxs)(t.p,{children:["Sets the direction of the spacing.",(0,i.jsx)("p",{}),"\nThis is how it looks with ",(0,i.jsx)(t.code,{children:"vertical"})," direction:",(0,i.jsx)("p",{}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/RUgWOdD.png",alt:"Direction"})]}),"\n",(0,i.jsx)(t.h4,{id:"size",children:"Size"}),"\n",(0,i.jsxs)(t.p,{children:["Sets the size of the spacing between elements.",(0,i.jsx)("p",{}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/CqhdsP9.png",alt:"Size"})]}),"\n",(0,i.jsx)(t.h4,{id:"align",children:"Align"}),"\n",(0,i.jsxs)(t.p,{children:["Sets the alignment of child elements. y-axis.",(0,i.jsx)("p",{}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/3gks0EZ.png",alt:"Start"}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/qeS08jy.png",alt:"Center"}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/DtylrY8.png",alt:"End"}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/d6emVz2.png",alt:"Baseline"})]}),"\n",(0,i.jsx)(t.h4,{id:"wrap",children:"Wrap"}),"\n",(0,i.jsxs)(t.p,{children:["Auto wraps the child elements within the parent element.",(0,i.jsx)("p",{}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/y2pbPva.png",alt:"Wrap"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>c});var i=n(7294);const s={},r=i.createContext(s);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);