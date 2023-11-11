"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[488],{3071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var s=n(5893),i=n(1151);const l={},r=void 0,c={id:"Core/Modules/Foact/Flex",title:"Flex",description:"Properties",source:"@site/docs/Core/Modules/Foact/Flex.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Flex",permalink:"/docs/Core/Modules/Foact/Flex",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Foact/Flex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Divider",permalink:"/docs/Core/Modules/Foact/Divider"},next:{title:"Properties",permalink:"/docs/Core/Modules/Foact/Properties"}},d={},a=[{value:"Properties",id:"properties",level:3},{value:"Children",id:"children",level:3},{value:"Exmaple",id:"exmaple",level:3},{value:"Vertical",id:"vertical",level:4},{value:"Wrap",id:"wrap",level:4},{value:"Justify",id:"justify",level:4},{value:"Align",id:"align",level:4},{value:"Gap",id:"gap",level:4}];function o(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vertical"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"The direction of the flex"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wrap"}),(0,s.jsx)(t.td,{children:"boolean"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"Auto wrap line"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"justify"}),(0,s.jsx)(t.td,{children:"flex-start, center, flex-end, space-between, space-around, space-evenly"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"The alignment of the elements, x axis"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"align"}),(0,s.jsx)(t.td,{children:"flex-start, center, flex-end"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"The alignment of the elements, y axis"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"gap"}),(0,s.jsx)(t.td,{children:"small, middle, large, string, number"}),(0,s.jsx)(t.td,{children:"yes"}),(0,s.jsx)(t.td,{children:"The gap between grips"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://ant.design/components/flex",children:"Examples can be seen here"})}),"\n",(0,s.jsx)(t.h3,{id:"children",children:"Children"}),"\n",(0,s.jsx)(t.p,{children:"Can have children."}),"\n",(0,s.jsx)(t.h3,{id:"exmaple",children:"Exmaple"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'local b1 = AM:createElement("Button", {\n    text = "Hello, World!",\n    icon = "AimOutlined",\n})\n\nlocal b2 = AM:createElement("Button", {\n    type = "link",\n    text = "Hello, World!",\n})\n\nlocal f1 = AM:createElement("Flex", {\n    width = "100%",\n    height = "100%",\n}, {\n    b1,\n    b2\n})\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This is how it looks in-game:",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/4AVsc5n.png",alt:"Showcase"})]}),"\n",(0,s.jsx)(t.h4,{id:"vertical",children:"Vertical"}),"\n",(0,s.jsxs)(t.p,{children:["When true the direction of the flex changes to vertical display instead of horizontal.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/RiOCua7.png",alt:"Showcase"})]}),"\n",(0,s.jsx)(t.h4,{id:"wrap",children:"Wrap"}),"\n",(0,s.jsxs)(t.p,{children:["When true, the content will automaticly be wrapped.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/T53UlsO.png",alt:"Showcase"})]}),"\n",(0,s.jsx)(t.h4,{id:"justify",children:"Justify"}),"\n",(0,s.jsxs)(t.p,{children:["Sets the alignment of elements in the x-axis.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/OXYSaEz.png",alt:"flex-start"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/Jmji3wV.png",alt:"center"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/XmIHbaW.png",alt:"flex-end"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/GeE2ZJA.png",alt:"space-between"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/ORmRTWl.png",alt:"space-around"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/jgJTgq5.png",alt:"space-evenly"})]}),"\n",(0,s.jsx)(t.h4,{id:"align",children:"Align"}),"\n",(0,s.jsxs)(t.p,{children:["Sets the alignment of elements in the y-axis.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/luBsoQW.png",alt:"flex-start"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/3zHGFWu.png",alt:"center"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/YFpDGsJ.png",alt:"flex-end"})]}),"\n",(0,s.jsx)(t.h4,{id:"gap",children:"Gap"}),"\n",(0,s.jsxs)(t.p,{children:["Sets the gap between elements.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.code,{children:"small"}),", ",(0,s.jsx)(t.code,{children:"middle"}),", ",(0,s.jsx)(t.code,{children:"large"})," are preset that can be used.",(0,s.jsx)("p",{}),"\nBut can be any css, and when its a number its defaulting to pixels.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/SLIQ9xO.png",alt:"small"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/7cLYEVQ.png",alt:"middle"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/NP2CoIV.png",alt:"large"}),"\n",(0,s.jsx)(t.img,{src:"https://i.imgur.com/D6UUkRV.png",alt:"100px"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(7294);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);