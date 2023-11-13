"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[8617],{2715:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=o(5893),s=o(1151);const a={},r=void 0,d={id:"Core/Modules/Foact/Events",title:"Events",description:"By now you might've wondered, what about events does Foact support, how do you do stuff like onClick, onChange etc. This page is here to hopefully answer that.",source:"@site/docs/Core/Modules/Foact/1 - Events.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Events",permalink:"/docs/Core/Modules/Foact/Events",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Foact/1 - Events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Foact",permalink:"/docs/Core/Modules/Foact/"},next:{title:"Properties",permalink:"/docs/Core/Modules/Foact/Properties"}},i={},c=[{value:"Added parameters",id:"added-parameters",level:3},{value:"How to do it",id:"how-to-do-it",level:3},{value:"Gotchas",id:"gotchas",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"By now you might've wondered, what about events does Foact support, how do you do stuff like onClick, onChange etc. This page is here to hopefully answer that."}),"\n",(0,n.jsxs)(t.p,{children:["Foact ",(0,n.jsx)(t.em,{children:"should"})," support all the events you can find on the ",(0,n.jsx)(t.a,{href:"https://reactjs.org/docs/events.html#supported-events",children:"React documentation"})," and what you can find on the ",(0,n.jsx)(t.a,{href:"https://ant.design/components/overview/",children:"Ant Design documentation"})," however there are some differences which we will go over."]}),"\n",(0,n.jsx)(t.h3,{id:"added-parameters",children:"Added parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Before the data you'd normally expect from the event, we're passing ",(0,n.jsx)(t.code,{children:"elementId"})," of the element, and ",(0,n.jsx)(t.code,{children:"uiName"})," of the UI. This is to make it easier for you to identify what element was clicked, and what UI it belongs to, if you want to do a more generelized event handler."]}),"\n",(0,n.jsx)(t.h3,{id:"how-to-do-it",children:"How to do it"}),"\n",(0,n.jsx)(t.p,{children:"This is the simple part - just add onClick or any other event to your foact element and it should work. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:'local button = fObj:createElement("Button", {\n    text = "My button",\n    ..., -- all your css properties here\n    onClick = function(elementId, uiName, event)\n        print("You clicked my super cool button!!")\n    end\n})\n'})}),"\n",(0,n.jsxs)(t.p,{children:["There's also loads of events that supplies you with some data, this is where Foact slightly differs. Normally you'd have the entire event object passed to you, but in Foact we cherry pick what we've believed to be nessesary. This means that some stuff ",(0,n.jsx)(t.em,{children:"might"})," be missing, so if you find something that you need, just let us know and we'll add it."]}),"\n",(0,n.jsx)(t.h3,{id:"gotchas",children:"Gotchas"}),"\n",(0,n.jsx)(t.p,{children:"There's a few things you should be aware of when using events in Foact. Mostly just make sure you're receiving the data you're expecting, and if not, let us know."}),"\n",(0,n.jsx)(t.p,{children:"There's some stuff that'd need our attention to be translated correctly to lua, and therefore if you encounter any of these, please let us know!"})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>r});var n=o(7294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);