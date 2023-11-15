"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[2205],{6795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(5893),s=t(1151);const i={},r=void 0,a={id:"Core/Modules/Foact/Images",title:"Images",description:"Images is another thing we quickly need to discuss, this works quite straigt forwardly, but it's worth quickly mentioning.",source:"@site/docs/Core/Modules/Foact/3 - Images.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Images",permalink:"/docs/Core/Modules/Foact/Images",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Properties",permalink:"/docs/Core/Modules/Foact/Properties"},next:{title:"AutoComplete",permalink:"/docs/Core/Modules/Foact/AutoComplete"}},l={},c=[{value:"Supported image props",id:"supported-image-props",level:3},{value:"How to do it",id:"how-to-do-it",level:3},{value:"URL",id:"url",level:4},{value:"Local image",id:"local-image",level:4},{value:"URL to another resource&#39;s image(s)",id:"url-to-another-resources-images",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Images is another thing we quickly need to discuss, this works quite straigt forwardly, but it's worth quickly mentioning."}),"\n",(0,o.jsx)(n.h3,{id:"supported-image-props",children:"Supported image props"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"src"})," in the ",(0,o.jsx)(n.a,{href:"Image",children:"Image"})," element."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"backgroundImage"})," everywhere you can normally use it in CSS."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"how-to-do-it",children:"How to do it"}),"\n",(0,o.jsx)(n.p,{children:"When using images with Foact, you currently have two options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"A URL with the image"}),"\n",(0,o.jsx)(n.li,{children:"A local image"}),"\n",(0,o.jsx)(n.li,{children:"A URL to another resource's image(s)"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"url",children:"URL"}),"\n",(0,o.jsx)(n.p,{children:"With a URL you just put the one of the supported image properties, and you're good to go. For example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local image = fObj:createElement("Image", {\n    src = "https://i.imgur.com/0jXQ0QH.png"\n})\n'})}),"\n",(0,o.jsx)(n.h4,{id:"local-image",children:"Local image"}),"\n",(0,o.jsxs)(n.p,{children:["First you're going to need to create an ",(0,o.jsx)(n.code,{children:"images"})," folder (called exactly this!) in the root of your resource.\nThen you need to include everything in that folder in your FXManifest, like so:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"files {\n  ..., -- your other files goes here\n  'images/**/*'\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:'Then let say I put an image in there, called "fortnite.jpg", I can then use it like this:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local image = fObj:createElement("Image", {\n    width = "500px",\n    height = "500px",\n    src = "fortnite.jpg"\n})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Which would turn out something like this:\n",(0,o.jsx)(n.img,{src:"https://i.imgur.com/QekSePz.png",alt:"Showcase"})]}),"\n",(0,o.jsx)(n.h4,{id:"url-to-another-resources-images",children:"URL to another resource's image(s)"}),"\n",(0,o.jsx)(n.p,{children:"This works just as simple as using normal URLs, and URLs to other resource images in normal FiveM.\nYou just put this prefixed on your image path:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local image = fObj:createElement("Image", {\n    src = "https://cfx-nui-RESOURCENAMEHERE/the/path/to/the/image.png"\n})\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(7294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);