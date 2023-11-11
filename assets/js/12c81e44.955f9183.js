"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[7022],{3138:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var r=s(5893),n=s(1151);const t={},d=void 0,a={id:"Core/Modules/Pools/Players",title:"Players",description:"All the pool functions for players.",source:"@site/docs/Core/Modules/Pools/Players.md",sourceDirName:"Core/Modules/Pools",slug:"/Core/Modules/Pools/Players",permalink:"/docs/Core/Modules/Pools/Players",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Pools/Players.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peds",permalink:"/docs/Core/Modules/Pools/Peds"},next:{title:"Vehicles",permalink:"/docs/Core/Modules/Pools/Vehicles"}},i={},o=[{value:"PlayersArray type",id:"playersarray-type",level:3},{value:"GetPlayerPeds",id:"getplayerpeds",level:2},{value:"Function",id:"function",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"GetInArea",id:"getinarea",level:2},{value:"Function",id:"function-1",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3},{value:"GetClosestPlayer",id:"getclosestplayer",level:2},{value:"Function",id:"function-2",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Returns",id:"returns-2",level:3},{value:"Example",id:"example-2",level:3}];function c(e){const l={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.p,{children:"All the pool functions for players."}),"\n",(0,r.jsx)(l.h3,{id:"playersarray-type",children:"PlayersArray type"}),"\n",(0,r.jsx)(l.p,{children:"A type that is returned from multiple of the functions on the page."}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"ped"}),(0,r.jsx)(l.td,{children:"integer"}),(0,r.jsx)(l.td,{children:"The ped handle."})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"id"}),(0,r.jsx)(l.td,{children:"integer"}),(0,r.jsx)(l.td,{children:"The player id."})]})]})]}),"\n",(0,r.jsx)(l.h2,{id:"getplayerpeds",children:"GetPlayerPeds"}),"\n",(0,r.jsx)(l.h3,{id:"function",children:"Function"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Players:GetPlayerPeds()\n"})}),"\n",(0,r.jsx)(l.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsx)(l.tbody,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"peds"}),(0,r.jsx)(l.td,{children:"PlayersArray"}),(0,r.jsx)(l.td,{children:"A table of all the player peds."})]})})]}),"\n",(0,r.jsx)(l.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal players = Pools.Players:GetPlayerPeds()\n"})}),"\n",(0,r.jsx)(l.h2,{id:"getinarea",children:"GetInArea"}),"\n",(0,r.jsx)(l.h3,{id:"function-1",children:"Function"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Players:GetInArea(coords, radius)\n"})}),"\n",(0,r.jsx)(l.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"coords"}),(0,r.jsx)(l.td,{children:"vector3"}),(0,r.jsx)(l.td,{children:"The coordinates of the area."})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"radius"}),(0,r.jsx)(l.td,{children:"float"}),(0,r.jsx)(l.td,{children:"The radius of the area."})]})]})]}),"\n",(0,r.jsx)(l.h3,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsx)(l.tbody,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"peds"}),(0,r.jsx)(l.td,{children:"PlayersArray"}),(0,r.jsx)(l.td,{children:"A table of all the player peds in the area."})]})})]}),"\n",(0,r.jsx)(l.h3,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal players = Pools.Players:GetInArea(vector3(0.0, 0.0, 0.0), 100.0)\n"})}),"\n",(0,r.jsx)(l.h2,{id:"getclosestplayer",children:"GetClosestPlayer"}),"\n",(0,r.jsx)(l.h3,{id:"function-2",children:"Function"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nPools.Players:GetClosestPlayer(coords)\n"})}),"\n",(0,r.jsx)(l.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsx)(l.tbody,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"coords"}),(0,r.jsx)(l.td,{children:"vector3"}),(0,r.jsx)(l.td,{children:"The coordinates of the area."})]})})]}),"\n",(0,r.jsx)(l.h3,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(l.table,{children:[(0,r.jsx)(l.thead,{children:(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.th,{children:"Name"}),(0,r.jsx)(l.th,{children:"Type"}),(0,r.jsx)(l.th,{children:"Description"})]})}),(0,r.jsxs)(l.tbody,{children:[(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"player"}),(0,r.jsx)(l.td,{children:"integer"}),(0,r.jsx)(l.td,{children:"The player handle of the closest player."})]}),(0,r.jsxs)(l.tr,{children:[(0,r.jsx)(l.td,{children:"distance"}),(0,r.jsx)(l.td,{children:"float"}),(0,r.jsx)(l.td,{children:"The distance to the closest player."})]})]})]}),"\n",(0,r.jsx)(l.h3,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-lua",children:"local Pools = WXSCore.Pools\nlocal player, distance = Pools.Players:GetClosestPlayer(vector3(0.0, 0.0, 0.0))\n"})})]})}function h(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,l,s)=>{s.d(l,{Z:()=>a,a:()=>d});var r=s(7294);const n={},t=r.createContext(n);function d(e){const l=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function a(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(t.Provider,{value:l},e.children)}}}]);