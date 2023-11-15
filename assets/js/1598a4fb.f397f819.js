"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[3120],{6264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var s=t(5893),r=t(1151);const c={},o=void 0,l={id:"Core/Modules/Scenes/Create",title:"Create",description:"Creating a scene from scene data given by our powershell script.",source:"@site/docs/Core/Modules/Scenes/Create.md",sourceDirName:"Core/Modules/Scenes",slug:"/Core/Modules/Scenes/Create",permalink:"/docs/Core/Modules/Scenes/Create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scenes",permalink:"/docs/Core/Modules/Scenes/"},next:{title:"AwaitCompletion",permalink:"/docs/Core/Modules/Scenes/SceneHandler/AwaitCompletion"}},d={},a=[{value:"Function",id:"function",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3}];function i(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Creating a scene from scene data given by our powershell script."}),"\n",(0,s.jsx)(n.h3,{id:"function",children:"Function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local Scene = WXS.Scene\nScene:Create(sceneData, sceneLocation, sceneRotation, actors, looped, useDelaZ, addCamera, manualSpawn)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sceneData"}),(0,s.jsx)(n.td,{children:"table"}),(0,s.jsx)(n.td,{children:"The scene data given by our powershell script."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sceneLocation"}),(0,s.jsx)(n.td,{children:"vector3"}),(0,s.jsx)(n.td,{children:"The location of the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sceneRotation"}),(0,s.jsx)(n.td,{children:"vector3"}),(0,s.jsx)(n.td,{children:"The rotation of the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"actors"}),(0,s.jsx)(n.td,{children:"table"}),(0,s.jsx)(n.td,{children:"A table of actors to use in the scene."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"looped"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether or not the scene should loop."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"useDelaZ"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether or not the scene should use the deltaZ value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"addCamera"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether or not the scene should add a scene camera."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"manualSpawn"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Whether or not the scene should auto spawn scene objects."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"SceneHandler object."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local Scene = WXS.Scene\n\nlocal sceneData = {\n    ['title'] = 'Store hold up cash',\n    ['actorsAligned'] = true,\n    ['deltaZ'] = 0,\n    ['actorAnims'] = {\n        {\n            ['id'] = 13107,\n            ['dir'] = 'mp_am_hold_up',\n            ['name'] = 'holdup_victim_20s',\n            ['animIndex'] = 24133\n        },\n    },\n    ['objectAnims'] = {\n        {\n            ['id'] = 13108,\n            ['dir'] = 'mp_am_hold_up',\n            ['name'] = 'holdup_victim_20s_bag',\n            ['animIndex'] = 21566\n        },\n        {\n            ['id'] = 13109,\n            ['dir'] = 'mp_am_hold_up',\n            ['name'] = 'holdup_victim_20s_till',\n            ['animIndex'] = 24133\n        },\n    },\n    ['objects'] = {\n        `p_poly_bag_01_s`,\n        `p_till_01_s`,\n    },\n}\n\nlocal sceneLocation = vector3(0.0, 0.0, 0.0)\nlocal sceneRotation = vector3(0.0, 0.0, 0.0)\n\nScene:Create(sceneData, sceneLocation, sceneRotation, {}, false, false, false, false)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(7294);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);