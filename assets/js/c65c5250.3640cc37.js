"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[9372],{9246:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=t(5893),d=t(1151);const s={},a=void 0,l={id:"Core/Modules/Markers/RegisterMarker",title:"RegisterMarker",description:"The primary function for creating markers.",source:"@site/docs/Core/Modules/Markers/RegisterMarker.md",sourceDirName:"Core/Modules/Markers",slug:"/Core/Modules/Markers/RegisterMarker",permalink:"/docs/Core/Modules/Markers/RegisterMarker",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Markers/RegisterMarker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DeleteMarker",permalink:"/docs/Core/Modules/Markers/DeleteMarker"},next:{title:"UpdateMarker",permalink:"/docs/Core/Modules/Markers/UpdateMarker"}},c={},i=[{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}];function o(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The primary function for creating markers."}),"\n",(0,n.jsx)(r.h3,{id:"function",children:"Function"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:"local Markers = WXSCore.Markers\nMarkers:RegisterMarker(type, pos, dir, rot, scale, color, bobUpAndDown, faceCamera, range, markerCallback, addBlip, blipData)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"type"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"The type of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pos"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The position of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dir"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The direction of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"rot"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The rotation of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"scale"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The scale of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"color"}),(0,n.jsx)(r.td,{children:"table"}),(0,n.jsx)(r.td,{children:"a table containing the r, g, b and a colors"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bobUpAndDown"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"Whether or not the marker should bob up and down."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"faceCamera"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"Whether or not the marker should face the camera."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"range"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"The range of when the marker should draw"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"markerCallback"}),(0,n.jsx)(r.td,{children:"function"}),(0,n.jsx)(r.td,{children:"The function to call when the marker is interacted with."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"addBlip"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"Whether or not a blip should be added."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"blipData"}),(0,n.jsx)(r.td,{children:"table"}),(0,n.jsx)(r.td,{children:"A table containing the blip data."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"markerId"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"The ID of the marker."})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:'local Markers = WXSCore.Markers\n\nlocal markerId = Markers:RegisterMarker(\n    1,                                      -- type\n    vector3(0.0, 0.0, 0.0),                 -- pos\n    vector3(0.0, 0.0, 0.0),                 -- dir\n    vector3(0.0, 0.0, 0.0),                 -- rot\n    vector3(0.0, 0.0, 0.0),                 -- scale\n    { r = 255, g = 255, b = 255, a = 255 }, -- color\n    true,                                   -- bobUpAndDown\n    true,                                   -- faceCamera\n    25.0,                                   -- range\n    function(markerId, didEnter)            -- markerCallback\n        print(markerId, didEnter)\n    end,\n    true,                                   -- addBlip\n    {                                       -- blipData\n        name = "Test",\n        sprite = 1,\n        color = 1,\n        scale = 1.0,\n        alpha = 255,\n        shortRange = true\n    }\n)```\n'})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>a});var n=t(7294);const d={},s=n.createContext(d);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);