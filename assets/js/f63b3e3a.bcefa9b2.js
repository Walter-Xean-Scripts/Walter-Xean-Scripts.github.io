"use strict";(self.webpackChunkwxdocs=self.webpackChunkwxdocs||[]).push([[2740],{7420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>r,toc:()=>h});var s=t(5893),c=t(1151);const d={},l=void 0,r={id:"Core/Modules/Foact/Checkbox",title:"Checkbox",description:"Properties",source:"@site/docs/Core/Modules/Foact/Checkbox.md",sourceDirName:"Core/Modules/Foact",slug:"/Core/Modules/Foact/Checkbox",permalink:"/docs/Core/Modules/Foact/Checkbox",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Button",permalink:"/docs/Core/Modules/Foact/Button"},next:{title:"DatePicker",permalink:"/docs/Core/Modules/Foact/DatePicker"}},i={},h=[{value:"Properties",id:"properties",level:3},{value:"Children",id:"children",level:3},{value:"Example",id:"example",level:3},{value:"Text",id:"text",level:4},{value:"AutoFocus",id:"autofocus",level:4},{value:"Checked",id:"checked",level:4},{value:"DefaultChecked",id:"defaultchecked",level:4},{value:"Disabled",id:"disabled",level:4},{value:"Indeterminate",id:"indeterminate",level:4},{value:"OnChange",id:"onchange",level:4},{value:"IsGroup",id:"isgroup",level:4},{value:"Example",id:"example-1",level:4},{value:"Options Properties",id:"options-properties",level:5}];function o(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Text displayed next to the checkbox"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autoFocus"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"When true, checkbox will be foxused when shown"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"checked"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Weather the checkbox is checked"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defaultChecked"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Weather the checkbox is checked from the start"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disabled"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Weather the checkbox is disabled"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"indeterminate"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:'"The indeterminate checked state of checkbox"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"onChange"}),(0,s.jsx)(n.td,{children:"function(event)"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Fires when the user changes the checkbox"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isGroup"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#isgroup",children:"See IsGroup"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"options"}),(0,s.jsx)(n.td,{children:"table"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#options-properties",children:"See IsGroup"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"defaultValue"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"number[]"}),(0,s.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ant.design/components/checkbox",children:"See more properties here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"children",children:"Children"}),"\n",(0,s.jsx)(n.p,{children:"Checkbox does not support children."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local checkbox = myUI:createElement("Checkbox", {\n    text = "Awesome",\n    defaultChecked = true,\n    onChange = function(id, name, event)\n        local target = event.target\n        local checked = target.checked\n        print("Checkbox Changed: Checked: " .. tostring(checked))\n    end,\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["How it looks:",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/fbRNp2K.png",alt:"How it Looks"}),(0,s.jsx)("p",{}),"\nWhen the checkbox is clicked the ",(0,s.jsx)(n.code,{children:"onChange"})," will print ",(0,s.jsx)(n.code,{children:"Checkbox Changed: Checked: true/false"})]}),"\n",(0,s.jsx)(n.h4,{id:"text",children:"Text"}),"\n",(0,s.jsxs)(n.p,{children:["The text displayed besides the checkbox.",(0,s.jsx)("p",{}),'\nFrom the example the text is "Awesome"']}),"\n",(0,s.jsx)(n.h4,{id:"autofocus",children:"AutoFocus"}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"true"})," the checkbox is focused when shown to the user."]}),"\n",(0,s.jsx)(n.h4,{id:"checked",children:"Checked"}),"\n",(0,s.jsxs)(n.p,{children:["Weather the checkbox is checked.",(0,s.jsx)("p",{}),"\nNote when set, you will have to overwrite the ",(0,s.jsx)(n.code,{children:"onChange"})," functionality otherwise the checkbox\nwill stay checked or unchecked.",(0,s.jsx)("p",{})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"onChange = function(id, name, event)\n    local target = event.target\n    local checked = target.checked\n    checkbox.checked = checked\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["onChange runs with what the value ",(0,s.jsx)(n.em,{children:"should"})," actually be."]}),"\n",(0,s.jsx)(n.h4,{id:"defaultchecked",children:"DefaultChecked"}),"\n",(0,s.jsx)(n.p,{children:"Weather the checkbox is checked by default."}),"\n",(0,s.jsx)(n.h4,{id:"disabled",children:"Disabled"}),"\n",(0,s.jsxs)(n.p,{children:["Weather the checkbox is disabled.",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/0BOER2D.png",alt:"Disabled Checkbox"})]}),"\n",(0,s.jsx)(n.h4,{id:"indeterminate",children:"Indeterminate"}),"\n",(0,s.jsxs)(n.p,{children:['"The indeterminate checked state of checkbox"',(0,s.jsx)("p",{}),"\n???"]}),"\n",(0,s.jsx)(n.h4,{id:"onchange",children:"OnChange"}),"\n",(0,s.jsxs)(n.p,{children:["Event is fired when the user checks/unchecks the checkbox.",(0,s.jsx)("p",{}),"\nNote when ",(0,s.jsx)(n.a,{href:"#isgroup",children:"IsGroup"})," is ",(0,s.jsx)(n.code,{children:"true"})," the functionality changes!",(0,s.jsx)("p",{}),"\nHeres what it looks like normally:",(0,s.jsx)("p",{}),"\n",(0,s.jsx)(n.img,{src:"https://i.imgur.com/MHg3Uxi.png",alt:"Print Example"})]}),"\n",(0,s.jsx)(n.h4,{id:"isgroup",children:"IsGroup"}),"\n",(0,s.jsxs)(n.p,{children:["When ",(0,s.jsx)(n.code,{children:"true"})," ",(0,s.jsx)(n.code,{children:"options"})," is required!",(0,s.jsx)("p",{})]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local plainOptions = {\"Apple\", \"Pear\", \"Orange\"}\nlocal options = {\n    { label = 'Apple', value = '_apple' },\n    { label = 'Pear', value = '_pear' },\n    { label = 'Orange', value = '_orange' },\n}\nlocal optionsWithDisabled = {\n    { label= 'Apple', value= '_apple' },\n    { label= 'Pear', value= '_pear', disabled = true },\n    { label= 'Orange', value= '_orange', disabled = false },\n}\n\nlocal checkbox1 = myUI:createElement(\"Checkbox\", {\n    isGroup = true,\n    options = plainOptions,\n    onChange = function(id, name, checkedValues)\n        print(\"Checked Values: \", json.encode(checkedValues))\n    end,\n})\nlocal checkbox2 = myUI:createElement(\"Checkbox\", {\n    isGroup = true,\n    options = options,\n    onChange = function(id, name, checkedValues)\n        print(\"Checked Values: \", json.encode(checkedValues))\n    end,\n})\nlocal checkbox3 = myUI:createElement(\"Checkbox\", {\n    isGroup = true,\n    options = optionsWithDisabled,\n    defaultValue = {\"Apple\", \"Orange\"},\n    onChange = function(id, name, checkedValues)\n        print(\"Checked Values: \", json.encode(checkedValues))\n    end,\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://i.imgur.com/HzwvtYP.png",alt:"Showcase"})}),"\n",(0,s.jsx)(n.h5,{id:"options-properties",children:"Options Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"label"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Label of the entry/option"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsxs)(n.td,{children:["Value of the entry, what comes with ",(0,s.jsx)(n.code,{children:"onChange"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"disabled"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsx)(n.td,{children:"Yes"}),(0,s.jsx)(n.td,{children:"Weather the entry is disabled"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(7294);const c={},d=s.createContext(c);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);