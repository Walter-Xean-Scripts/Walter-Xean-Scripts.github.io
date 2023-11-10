"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[213],{4959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var s=a(5893),l=a(1151);const n={},r=void 0,c={id:"Core/Modules/Callbacks/Await",title:"Await",description:"This just waits for the callback to execute the code after it.",source:"@site/docs/Core/Modules/Callbacks/Await.md",sourceDirName:"Core/Modules/Callbacks",slug:"/Core/Modules/Callbacks/Await",permalink:"/docs/Core/Modules/Callbacks/Await",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Callbacks/Await.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/docs/Core/Modules/Callbacks/"},next:{title:"Register",permalink:"/docs/Core/Modules/Callbacks/Register"}},o={},i=[{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function d(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This just waits for the callback to execute the code after it.\nLook at it like using ",(0,s.jsx)(t.code,{children:"Wait()"}),", that also blocks the thread until it's done.\nThis can be used on both the client and server."]}),"\n",(0,s.jsx)(t.h3,{id:"function",children:"Function"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:"local Callbacks = WXSCore.Callbacks\nCallbacks.Await(event, ...)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"event"}),(0,s.jsx)(t.td,{children:"string"}),(0,s.jsx)(t.td,{children:"The name of the callback."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"..."}),(0,s.jsx)(t.td,{children:"any"}),(0,s.jsx)(t.td,{children:"Any additional arguments to be passed to the callback."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-lua",children:'local Callbacks = WXSCore.Callbacks\n\nlocal response = Callbacks.Await("TestCallback", "Some data")\nprint("Test callback returned with data: " .. response)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var s=a(7294);const l={},n=s.createContext(l);function r(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);