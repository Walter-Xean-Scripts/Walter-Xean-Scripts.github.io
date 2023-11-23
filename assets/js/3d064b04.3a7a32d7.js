"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[8234],{6448:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=r(5893),o=r(1151);const s={},i=void 0,d={id:"Core/Modules/Foact/Popover",title:"Popover",description:"Properties",source:"@site/docs/Core/Modules/Foact/Popover.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Popover",permalink:"/docs/Core/Modules/Foact/Popover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Popconfirm",permalink:"/docs/Core/Modules/Foact/Popconfirm"},next:{title:"Sidebar",permalink:"/docs/Core/Modules/Foact/Sidebar"}},l={},c=[{value:"Properties",id:"properties",level:3},{value:"Children",id:"children",level:3},{value:"Example",id:"example",level:3},{value:"title",id:"title",level:4},{value:"content",id:"content",level:4},{value:"trigger",id:"trigger",level:4},{value:"placement",id:"placement",level:4},{value:"open",id:"open",level:4},{value:"defaultOpen",id:"defaultopen",level:4},{value:"arrow",id:"arrow",level:4},{value:"color",id:"color",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Title shown"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string[]"}),(0,t.jsxs)(n.td,{children:["Content shown under ",(0,t.jsx)(n.code,{children:"title"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trigger"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"hover"}),", ",(0,t.jsx)(n.code,{children:"focus"}),", ",(0,t.jsx)(n.code,{children:"click"})]}),(0,t.jsx)(n.td,{children:"How the popover is opened by the user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"placement"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Where the popover is located  ",(0,t.jsx)(n.a,{href:"#placement",children:"See Placement"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"open"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Weather the popover is opened  ",(0,t.jsx)(n.a,{href:"#open",children:"Note"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"defaultOpen"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"Weather the popover is opened by default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrow"}),(0,t.jsx)(n.td,{children:"boolean, table"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#arrow",children:"See Arrow"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"color"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"Color of the popover"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["All properties are optional!",(0,t.jsx)("p",{})]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://ant.design/components/tooltip#api",children:"You can see more options here"}),"."]}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"children",children:"Children"}),"\n",(0,t.jsxs)(n.p,{children:["Popover ",(0,t.jsx)(n.em,{children:"has"})," to have children, it is the children (when hovered) that displays the popover."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'local a = AM:createElement("Popover", {\n    title = "Title",\n    content = {\n        "Line 1",\n        "Line 2",\n    },\n    onOpenChange = function(id, name, open)\n        print("Popover: ", open)\n    end,\n}, {\n    AM:createElement("Button", {\n        text = "Hover Me"\n    }),\n})\n'})}),"\n",(0,t.jsxs)(n.p,{children:["How it looks:",(0,t.jsx)("p",{}),"\n",(0,t.jsx)(n.img,{src:"https://i.imgur.com/p1vgZax.png",alt:"Showcase"})]}),"\n",(0,t.jsx)(n.h4,{id:"title",children:"title"}),"\n",(0,t.jsxs)(n.p,{children:["The title displayed for the popover, is bigger in size and has ",(0,t.jsx)(n.strong,{children:"bold"})," font."]}),"\n",(0,t.jsx)(n.h4,{id:"content",children:"content"}),"\n",(0,t.jsxs)(n.p,{children:["Text displayed in the popover, entries have to be strings ",(0,t.jsx)(n.em,{children:"(for now)"})," and each entry is a new line."]}),"\n",(0,t.jsx)(n.h4,{id:"trigger",children:"trigger"}),"\n",(0,t.jsxs)(n.p,{children:["Can be ",(0,t.jsx)(n.code,{children:"hover"}),", ",(0,t.jsx)(n.code,{children:"focus"})," or ",(0,t.jsx)(n.code,{children:"click"}),(0,t.jsx)("p",{}),"\nWhen ",(0,t.jsx)(n.code,{children:"hover"})," the popover is displayed when a ",(0,t.jsx)(n.a,{href:"#children",children:"child"})," is hovered.",(0,t.jsx)("p",{}),"\nWhen ",(0,t.jsx)(n.code,{children:"focus"})," the popover is displayed when a ",(0,t.jsx)(n.a,{href:"#children",children:"child"})," is focused.",(0,t.jsx)("p",{}),"\nWhen ",(0,t.jsx)(n.code,{children:"click"})," the popover is displayed when a ",(0,t.jsx)(n.a,{href:"#children",children:"child"})," is clicked.",(0,t.jsx)("p",{})]}),"\n",(0,t.jsx)(n.h4,{id:"placement",children:"placement"}),"\n",(0,t.jsxs)(n.p,{children:["Can be any of the following: ",(0,t.jsx)(n.code,{children:"top"}),", ",(0,t.jsx)(n.code,{children:"left"}),", ",(0,t.jsx)(n.code,{children:"right"}),", ",(0,t.jsx)(n.code,{children:"bottom"}),", ",(0,t.jsx)(n.code,{children:"topLeft"}),", ",(0,t.jsx)(n.code,{children:"topRight"}),", ",(0,t.jsx)(n.code,{children:"bottomLeft"}),", ",(0,t.jsx)(n.code,{children:"bottomRight"}),", ",(0,t.jsx)(n.code,{children:"leftTop"}),", ",(0,t.jsx)(n.code,{children:"leftBottom"}),", ",(0,t.jsx)(n.code,{children:"rightTop"})," or ",(0,t.jsx)(n.code,{children:"rightBottom"}),".",(0,t.jsx)("p",{}),"\nChanges the position of the popover."]}),"\n",(0,t.jsx)(n.h4,{id:"open",children:"open"}),"\n",(0,t.jsxs)(n.p,{children:["Use if you want to overwrite how the popover is opened/closed.",(0,t.jsx)("p",{}),"\nWhen set the popover will not open or close by itself."]}),"\n",(0,t.jsx)(n.h4,{id:"defaultopen",children:"defaultOpen"}),"\n",(0,t.jsxs)(n.p,{children:["Weather the popover should be opened by default/when initialized.",(0,t.jsx)("p",{}),"\nSo when ",(0,t.jsx)(n.code,{children:"true"})," it will start opened."]}),"\n",(0,t.jsx)(n.h4,{id:"arrow",children:"arrow"}),"\n",(0,t.jsxs)(n.p,{children:["Default is ",(0,t.jsx)(n.code,{children:"false/undefined"}),".",(0,t.jsx)("p",{}),"\n",(0,t.jsx)(n.img,{src:"https://i.imgur.com/4A8Gvdi.png",alt:"1"}),(0,t.jsx)("p",{}),"\n",(0,t.jsx)(n.img,{src:"https://i.imgur.com/mOirsbP.png",alt:"2"}),(0,t.jsx)("p",{}),"\n",(0,t.jsx)(n.img,{src:"https://i.imgur.com/j3uv2hV.png",alt:"3"})]}),"\n",(0,t.jsx)(n.h4,{id:"color",children:"color"}),"\n",(0,t.jsxs)(n.p,{children:["Color of the popover.",(0,t.jsx)("p",{})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:'color = "red"\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://i.imgur.com/zW6mIzm.png",alt:"color"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var t=r(7294);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);