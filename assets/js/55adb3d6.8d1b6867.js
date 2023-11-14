"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[4887],{3336:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(5893),d=t(1151);const a={},s=void 0,c={id:"Core/Modules/Markers/UpdateMarker",title:"UpdateMarker",description:"The primary function for creating markers.",source:"@site/docs/Core/Modules/Markers/UpdateMarker.md",sourceDirName:"Core/Modules/Markers",slug:"/Core/Modules/Markers/UpdateMarker",permalink:"/docs/Core/Modules/Markers/UpdateMarker",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RegisterMarker",permalink:"/docs/Core/Modules/Markers/RegisterMarker"},next:{title:"Pools",permalink:"/docs/Core/Modules/Pools/"}},l={},i=[{value:"Function",id:"function",level:3},{value:"changeableMarkerData",id:"changeablemarkerdata",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3}];function o(e){const r={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"The primary function for creating markers."}),"\n",(0,n.jsx)(r.h3,{id:"function",children:"Function"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:"local Markers = WXSCore.Markers\nMarkers:UpdateMarker(id, newValues)\n"})}),"\n",(0,n.jsx)(r.h3,{id:"changeablemarkerdata",children:"changeableMarkerData"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"type"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"The type of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"pos"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The position of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"dir"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The direction of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"rot"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The rotation of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"scale"}),(0,n.jsx)(r.td,{children:"vector3"}),(0,n.jsx)(r.td,{children:"The scale of the marker."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"color"}),(0,n.jsx)(r.td,{children:"table"}),(0,n.jsx)(r.td,{children:"a table containing the r, g, b and a colors"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bobUpAndDown"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"Whether or not the marker should bob up and down."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"faceCamera"}),(0,n.jsx)(r.td,{children:"boolean"}),(0,n.jsx)(r.td,{children:"Whether or not the marker should face the camera."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"range"}),(0,n.jsx)(r.td,{children:"number"}),(0,n.jsx)(r.td,{children:"The range of when the marker should draw"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"markerCallback"}),(0,n.jsx)(r.td,{children:"function"}),(0,n.jsx)(r.td,{children:"The function to call when the marker is interacted with."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"id"}),(0,n.jsx)(r.td,{children:"integer"}),(0,n.jsx)(r.td,{children:"The marker ID returned from the functions."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"newValues"}),(0,n.jsx)(r.td,{children:"changeableMarkerData"}),(0,n.jsx)(r.td,{children:"The new values to update the marker with."})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-lua",children:"local Markers = WXSCore.Marker\n\nMarkers:UpdateMarker(\n    markerId,\n    {\n        type = 1,\n        pos = vector3(0.0, 0.0, 0.0),\n        dir = vector3(0.0, 0.0, 0.0),\n        rot = vector3(0.0, 0.0, 0.0),\n        scale = vector3(0.0, 0.0, 0.0),\n        color = { r = 255, g = 255, b = 255, a = 255 },\n        bobUpAndDown = true,\n        faceCamera = true,\n        range = 25.0,\n        markerCallback = function(markerId, didEnter)\n            print(markerId, didEnter)\n        end\n    }\n)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>s});var n=t(7294);const d={},a=n.createContext(d);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);