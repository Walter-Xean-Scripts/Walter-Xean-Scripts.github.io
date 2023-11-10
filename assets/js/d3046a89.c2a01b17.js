"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[218],{8088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(5893),o=t(1151);const i={},l=void 0,r={id:"Core/Modules/Foact/Foact",title:"Foact",description:"You might be thinking, what the flip is Foact?",source:"@site/docs/Core/Modules/Foact/Foact.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/",permalink:"/docs/Core/Modules/Foact/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Core/Modules/Foact/Foact.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Trigger",permalink:"/docs/Core/Modules/Callbacks/Trigger"},next:{title:"Box",permalink:"/docs/Core/Modules/Foact/Box"}},s={},d=[{value:"What can it do?",id:"what-can-it-do",level:2},{value:"List of supported elements",id:"list-of-supported-elements",level:2},{value:"Creating a new UI",id:"creating-a-new-ui",level:2},{value:"Rendering my UI",id:"rendering-my-ui",level:2},{value:"Displaying your UI",id:"displaying-your-ui",level:2},{value:"Creating elements",id:"creating-elements",level:2},{value:"Chaning properties after creation",id:"chaning-properties-after-creation",level:2},{value:"Adding/Removing children",id:"addingremoving-children",level:2},{value:"An example",id:"an-example",level:2},{value:"End note",id:"end-note",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"You might be thinking, what the flip is Foact?\nCurrently it's a UI library for writing UIs in LUA, without the need for HTML or JavaScript.\nThe name started of as being FiveM and React mashed together, but at this point it's got little incommon with React, other than it's a UI library."}),"\n",(0,a.jsxs)(n.p,{children:["Foact is currently based on ",(0,a.jsx)(n.a,{href:"https://ant.design/",children:"Ant Design"})," but plans to support other libraries in the future. We're also going to add an option to not have any default style ",(0,a.jsx)(n.em,{children:"soon"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"what-can-it-do",children:"What can it do?"}),"\n",(0,a.jsx)(n.p,{children:"I'm glad you asked! It's basic idea is it'll allow you to create web UIs, without leaving LUA.\nThis you can do in a way that feels a little similar to Roblox's Roact. You can create components, and nest them inside each other.\nYou can also create components that are just a single element, like a button, or a text input."}),"\n",(0,a.jsx)(n.p,{children:"Now what's cool with Foact, is that you can change it's variables on the fly, and it'll update the UI accordingly.\nLet me give you an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local myUI = Foact.new("mycoolui")\n\nlocal box = myUI:createElement("Box", {\n    width = "400px",\n    height = "200px",\n    backgroundColor = "rgba(0, 0, 0, 0.95)",\n    borderRadius = "10px",\n})\n\nmyUI:initialize(box)\n\nmyUI:SetActive(true, true)\n'})}),"\n",(0,a.jsx)(n.p,{children:"This will create a box, with a width of 400px, a height of 200px, a black background, and a border radius of 10px."}),"\n",(0,a.jsx)(n.p,{children:"Now let's say we want to change the background color to red, we can do that like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'box.backgroundColor = "rgba(255, 0, 0, 0.95)"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["And now the background color will be red. It's that simple.\nThis doesn't just work with CSS variables, any property can be adjusted. And it doesn't end there either.\nYou can also add or remove children as you wish, just by calling ",(0,a.jsx)(n.code,{children:".add"})," or ",(0,a.jsx)(n.code,{children:".remove"})," on the box."]}),"\n",(0,a.jsx)(n.p,{children:"We'll cover it more in detail on this page."}),"\n",(0,a.jsx)(n.h2,{id:"list-of-supported-elements",children:"List of supported elements"}),"\n",(0,a.jsxs)(n.p,{children:["Below's a list of currently supported elements in Foact. These are made from ",(0,a.jsx)(n.a,{href:"https://ant.design/components/overview/",children:"Ant Design's components"}),", and are therefore pre-styled if you don't override it."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"Elements/Box",children:"Box"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"Elements/Button",children:"Button"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"Elements/Slider",children:"Slider"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Are we missing something from Ant Design you want added? Let us know on Discord!"}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-new-ui",children:"Creating a new UI"}),"\n",(0,a.jsxs)(n.p,{children:["To create a new UI, you'll need to call ",(0,a.jsx)(n.code,{children:"Foact.new"}),", and pass it the name of the UI you want to create.\nWe use this name to identify the UI, so it's important that it's unique to your ui."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local Foact = WXSCore.Foact\n\nlocal myUI = Foact.new("mycoolui")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"rendering-my-ui",children:"Rendering my UI"}),"\n",(0,a.jsxs)(n.p,{children:["To render your UI, you'll need to call ",(0,a.jsx)(n.code,{children:"Foact:initialize"}),", and pass it the root element of your UI."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local box = myUI:createElement("Box", {\n    width = "400px",\n    height = "200px",\n    backgroundColor = "rgba(0, 0, 0, 0.95)",\n    borderRadius = "10px",\n})\n\nmyUI:initialize(box)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"displaying-your-ui",children:"Displaying your UI"}),"\n",(0,a.jsxs)(n.p,{children:["To display your UI, you'll need to call ",(0,a.jsx)(n.code,{children:"Foact:SetActive"}),", and pass it a boolean value.\nThe first variable will be used to determine if the UI should be displayed or not, and the second variable is wether to capture input or not."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"myUI:SetActive(true, true)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"creating-elements",children:"Creating elements"}),"\n",(0,a.jsxs)(n.p,{children:["To create an element, you'll need to call ",(0,a.jsx)(n.code,{children:"Foact:createElement"}),", and pass it the name of the element you want to create, a table of properties, and optionally a table of children."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local button = myUI:createElement("Button", {\n    text = "Hello, World!",\n    onClick = function()\n        print("Hello, World!")\n    end\n})\n\nlocal box = myUI:createElement("Box", {\n    width = "400px",\n    height = "200px",\n    backgroundColor = "rgba(0, 0, 0, 0.95)",\n    borderRadius = "10px",\n}, {\n    button\n})\n'})}),"\n",(0,a.jsx)(n.h2,{id:"chaning-properties-after-creation",children:"Chaning properties after creation"}),"\n",(0,a.jsx)(n.p,{children:"I explained this earlier. But we'll just go over it again, in case you skipped the text above \ud83d\ude09\nYou can change any property on any element, and it'll update the UI automatically."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'box.backgroundColor = "rgba(255, 0, 0, 0.95)"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"addingremoving-children",children:"Adding/Removing children"}),"\n",(0,a.jsx)(n.p,{children:"You can add or remove children from any element, and it'll update the UI automatically."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:"-- adding\nbox:add(button)\n\n-- removing\nbox:remove(button)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"an-example",children:"An example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-lua",children:'local Foact = WXSCore.Foact\n\n-- we have instanciate a new Foact object with the name of our UI.\n---@class Foact\nlocal fObj = Foact.new("charactercreator")\n\n-- we can now create elements on our Foact object.\nlocal btn = fObj:createElement("Button", {\n    text = "Hello, World!",\n    onClick = function()\n        print("Hello, World!")\n    end\n})\n\nlocal slider = fObj:createElement("Slider", {\n    min = 0,\n    max = 100,\n    defaultValue = 50,\n    width = "200px"\n})\n\n-- we can also create a box, and add the button to it.\nlocal box = fObj:createElement("Box", {\n    width = "400px",\n    height = "200px",\n    position = "absolute",\n    top = "50%",\n    left = "50%",\n    transform = "translate(-50%, -50%)",\n    backgroundColor = "rgba(0, 0, 0, 0.95)",\n    borderRadius = "10px",\n    display = "flex",\n    flexDirection = "column",\n    alignItems = "center",\n    justifyContent = "center",\n    transition = "all 0.25s ease"\n}, {\n    btn,\n    slider\n})\n\n-- we can now load our UI, and set it to active.\nfObj:initialize(box)\n\n-- this command will display our UI\nRegisterCommand("testUI", function()\n    fObj:SetActive(true, true)\nend, false)\n\n-- this command will periodically change the background color and size of the box.\nRegisterCommand("danceShow", function ()\n    CreateThread(function()\n        while true do\n            Wait(500)\n\n            box.width = math.random(200, 400) .. "px"\n            box.height = math.random(200, 400) .. "px"\n            box.backgroundColor = "rgba(" .. math.random(0, 255) .. ", " .. math.random(0, 255) .. ", " .. math.random(0, 255) .. ", 0.95)"\n        end\n    end)\nend, false)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"end-note",children:"End note"}),"\n",(0,a.jsxs)(n.p,{children:["That about sums it up ",(0,a.jsx)(n.em,{children:"for now"}),", Foact is still early in development, and we'll be adding more features as we go along.\nRemember to check out the different elements in the side bar, they'll explain what extra properties you can pass onto the elements."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var a=t(7294);const o={},i=a.createContext(o);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);