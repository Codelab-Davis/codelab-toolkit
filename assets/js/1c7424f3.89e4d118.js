"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[7e3],{7291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(1527),s=n(7463),o=n(6533);const i={title:"useState Hook",description:"A Simple Way to Handle Data"},r="useState Hook: A Simple Way to Handle Data",c={id:"guide/useState",title:"useState Hook",description:"A Simple Way to Handle Data",source:"@site/docs/guide/useState.mdx",sourceDirName:"guide",slug:"/guide/useState",permalink:"/docs/guide/useState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useState Hook",description:"A Simple Way to Handle Data"},sidebar:"guideSidebar",previous:{title:"async/await",permalink:"/docs/guide/async"},next:{title:"useEffect Hook",permalink:"/docs/guide/useEffect"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"How to use <code>useState</code>",id:"how-to-use-usestate",level:2},{value:"Examples:",id:"examples",level:2},{value:"Basic Example",id:"basic-example",level:3},{value:"Why a regular variable isn\u2019t enough",id:"why-a-regular-variable-isnt-enough",level:3},{value:"Using a state variable",id:"using-a-state-variable",level:3},{value:"Updating arrays in state",id:"updating-arrays-in-state",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"usestate-hook-a-simple-way-to-handle-data",children:"useState Hook: A Simple Way to Handle Data"}),"\n",(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"useState"}),"\xa0is a fundamental hook in React that allows developers to manage and manipulate ",(0,a.jsx)(t.strong,{children:"state"})," in ",(0,a.jsx)(t.em,{children:"functional"})," components. In React, ",(0,a.jsx)(t.strong,{children:"state"})," refers to any data that can change over time and impacts how a component behaves. Using ",(0,a.jsx)(t.strong,{children:"state"})," to store your data allows it to persist between renders and trigger new renders when the data is updated."]}),"\n",(0,a.jsx)(t.p,{children:"To understand how this works, let's delve into an example. Imagine you\u2019re building a simple counter component that increments a number when a user interacts with it. This component needs to keep track of its current value. One approach could be to use a regular JavaScript variable, but this won't trigger re-renders when the value changes, and React components rely on re-renders to update the user interface."}),"\n",(0,a.jsxs)(t.p,{children:["This is where ",(0,a.jsx)(t.code,{children:"useState"})," comes into play. It offers a React-friendly way to handle this type of dynamic data. By using ",(0,a.jsx)(t.code,{children:"useState"}),", you can declare a ",(0,a.jsx)(t.strong,{children:"state"})," variable that keeps track of your counter and triggers a re-render when the counter is incremented."]}),"\n",(0,a.jsxs)(t.h2,{id:"how-to-use-usestate",children:["How to use ",(0,a.jsx)(t.code,{children:"useState"})]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Import React at the top of your JSX or TSX file."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Call ",(0,a.jsx)(t.code,{children:"useState"})," at the top level of your component to declare a state variable."]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Note: Since ",(0,a.jsx)(t.code,{children:"useState"})," is a hook, you ",(0,a.jsx)(t.strong,{children:"cannot"})," call it inside loops or conditions. If necessary, you can extract a new component and move the state into it."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"function MyComponent() {\n  const [age, setAge] = React.useState(42);\n  const [name, setName] = React.useState('Taylor');\n  // ...\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"useState"})," will return an array with two items:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The current state of your state variable, initially set to the state you provided."}),"\n",(0,a.jsx)(t.li,{children:"The set function that lets you change the value of your state."}),"\n",(0,a.jsxs)(t.li,{children:["Note: The convention is to name state variables like ",(0,a.jsx)(t.code,{children:"[something, setSomething]"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["To update what\u2019s on the screen, call the ",(0,a.jsx)(t.em,{children:"set"})," function with some next state:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'function handleClick() {\n    setName("Robin");\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples:"}),"\n",(0,a.jsx)(t.h3,{id:"basic-example",children:"Basic Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'import { useState } from "react";\n\n// Create a component that uses the context\nfunction MyComponent() {\n    const [clickCount, setClickCount] = useState(0);\n\n    return (\n        <Button onClick={() => setClickCount(clickCount + 1)}>\n            {clickCount}\n        </Button>\n    );\n}\n'})}),"\n",(0,a.jsx)(o.Z,{src:"https://codesandbox.io/embed/morning-bash-6wz9ly?fontsize=14&hidenavigation=1&theme=dark"}),"\n",(0,a.jsx)(t.h3,{id:"why-a-regular-variable-isnt-enough",children:"Why a regular variable isn\u2019t enough"}),"\n",(0,a.jsxs)(t.p,{children:["Notice in the below example that clicking the ",(0,a.jsx)(t.code,{children:"Next"})," button doesn\u2019t update our view. Behind the scenes, the ",(0,a.jsx)(t.code,{children:"index"})," variable is actually being incremented every time the ",(0,a.jsx)(t.code,{children:"Next"})," button is pressed. However, since there is no call for a re-render on our view, our component is not being updated to reflect the new value of ",(0,a.jsx)(t.code,{children:"index"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Before moving on to the next example, try to update the code below to include a ",(0,a.jsx)(t.code,{children:"useState"})," hook to call a re-render on our view!"]}),"\n",(0,a.jsx)(o.Z,{src:"https://codesandbox.io/embed/usestate-nostate-2cwxsf?fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark"}),"\n",(0,a.jsx)(t.h3,{id:"using-a-state-variable",children:"Using a state variable"}),"\n",(0,a.jsxs)(t.p,{children:["The below example builds off of the previous component, but instead uses a ",(0,a.jsx)(t.code,{children:"useState"})," hook to re-render our component when the ",(0,a.jsx)(t.code,{children:"Next"})," button is clicked. Now when we click the ",(0,a.jsx)(t.code,{children:"Next"})," button, our component is re-rendered to reflect the updated value of ",(0,a.jsx)(t.code,{children:"index"})," and the ",(0,a.jsx)(t.code,{children:"sculpture"})," object."]}),"\n",(0,a.jsx)(o.Z,{src:"https://codesandbox.io/embed/fast-mountain-s32q2s?fontsize=14&hidenavigation=1&module=%2FApp.js&theme=dark"}),"\n",(0,a.jsx)(t.h3,{id:"updating-arrays-in-state",children:"Updating arrays in state"}),"\n",(0,a.jsxs)(t.p,{children:["When using an array or an object in state variables, we cannot mutate the existing state directly. Since ",(0,a.jsx)(t.code,{children:"state"})," in React is considered read-only, we must replace our object or array with an entirely new object or array."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// \ud83d\udea9 Don\'t mutate an object in state like this:\nform.firstName = "Taylor";\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:'// \u2705 Replace state with a new object\nsetForm({\n    ...form,\n    firstName: "Taylor",\n});\n'})}),"\n",(0,a.jsx)(o.Z,{src:"https://codesandbox.io/embed/usestate-arrayexample-f4r6gs?fontsize=14&hidenavigation=1&theme=dark"}),"\n",(0,a.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,a.jsxs)(t.p,{children:["To learn more about ",(0,a.jsx)(t.code,{children:"useState"})," please refer to ",(0,a.jsx)(t.a,{href:"https://react.dev/reference/react/useState",children:"the React Docs"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6533:(e,t,n)=>{n.d(t,{Z:()=>s});n(959);var a=n(1527);const s=e=>{let{src:t}=e;return(0,a.jsx)("div",{className:"flex h-[500px] rounded border",children:(0,a.jsx)("iframe",{src:t,className:"h-full w-full",frameborder:"0"})})}},7463:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var a=n(959);const s={},o=a.createContext(s);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);