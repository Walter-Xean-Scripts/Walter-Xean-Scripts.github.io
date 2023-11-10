"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[83],{6194:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var t=s(5893),n=s(1151);const r={},o=void 0,d={id:"Core/Modules/Pools/Objects",title:"Objects",description:"All the pool object related functions.",source:"@site/docs/Core/Modules/Pools/Objects.md",sourceDirName:"Core/Modules/Pools",slug:"/Core/Modules/Pools/Objects",permalink:"/docs/Core/Modules/Pools/Objects",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Pools/Objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pools",permalink:"/docs/Core/Modules/Pools/"},next:{title:"Peds",permalink:"/docs/Core/Modules/Pools/Peds"}},c={},i=[{value:"GetAll",id:"getall",level:2},{value:"Function",id:"function",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"GetInArea",id:"getinarea",level:2},{value:"Function",id:"function-1",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"GetClosest",id:"getclosest",level:2},{value:"Function",id:"function-2",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3}];function a(e){const l={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.p,{children:"All the pool object related functions."}),"\n",(0,t.jsx)(l.h2,{id:"getall",children:"GetAll"}),"\n",(0,t.jsx)(l.h3,{id:"function",children:"Function"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Objects:GetAll()\n"})}),"\n",(0,t.jsx)(l.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Type"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"objects"}),(0,t.jsx)(l.td,{children:"number[]"}),(0,t.jsx)(l.td,{children:"A table of all the object handles."})]})})]}),"\n",(0,t.jsx)(l.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal objects = Pools.Objects:GetAll()\n"})}),"\n",(0,t.jsx)(l.h2,{id:"getinarea",children:"GetInArea"}),"\n",(0,t.jsx)(l.h3,{id:"function-1",children:"Function"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Objects:GetInArea(coords, radius)\n"})}),"\n",(0,t.jsx)(l.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Type"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"coords"}),(0,t.jsx)(l.td,{children:"vector3"}),(0,t.jsx)(l.td,{children:"The coordinates of the area."})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"radius"}),(0,t.jsx)(l.td,{children:"float"}),(0,t.jsx)(l.td,{children:"The radius of the area."})]})]})]}),"\n",(0,t.jsx)(l.h3,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Type"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"objects"}),(0,t.jsx)(l.td,{children:"number[]"}),(0,t.jsx)(l.td,{children:"A table of all the object handles in the area."})]})})]}),"\n",(0,t.jsx)(l.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal objects = Pools.Objects:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)\n"})}),"\n",(0,t.jsx)(l.h2,{id:"getclosest",children:"GetClosest"}),"\n",(0,t.jsx)(l.h3,{id:"function-2",children:"Function"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Objects:GetClosest(coords)\n"})}),"\n",(0,t.jsx)(l.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Type"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsx)(l.tbody,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"coords"}),(0,t.jsx)(l.td,{children:"vector3"}),(0,t.jsx)(l.td,{children:"The coordinates of the area."})]})})]}),"\n",(0,t.jsx)(l.h3,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsxs)(l.table,{children:[(0,t.jsx)(l.thead,{children:(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.th,{children:"Name"}),(0,t.jsx)(l.th,{children:"Type"}),(0,t.jsx)(l.th,{children:"Description"})]})}),(0,t.jsxs)(l.tbody,{children:[(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"object"}),(0,t.jsx)(l.td,{children:"number"}),(0,t.jsx)(l.td,{children:"The object handle of the closest object."})]}),(0,t.jsxs)(l.tr,{children:[(0,t.jsx)(l.td,{children:"distance"}),(0,t.jsx)(l.td,{children:"float"}),(0,t.jsx)(l.td,{children:"The distance between the object and the coordinates."})]})]})]}),"\n",(0,t.jsx)(l.h3,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal object, distance = Pools.Objects:GetClosest(vector3(0.0, 0.0, 0.0))\n"})})]})}function h(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,l,s)=>{s.d(l,{Z:()=>d,a:()=>o});var t=s(7294);const n={},r=t.createContext(n);function o(e){const l=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(r.Provider,{value:l},e.children)}}}]);