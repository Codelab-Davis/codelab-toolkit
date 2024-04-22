"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[3407],{5230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=n(1527),o=n(7463),c=n(6533);const r={title:"useContext Hook",description:"Another Way to Share Data"},i="useContext Hook: Another Way to Share Data",a={id:"guide/useContext",title:"useContext Hook",description:"Another Way to Share Data",source:"@site/docs/guide/useContext.mdx",sourceDirName:"guide",slug:"/guide/useContext",permalink:"/docs/guide/useContext",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useContext Hook",description:"Another Way to Share Data"},sidebar:"guideSidebar",previous:{title:"useEffect Hook",permalink:"/docs/guide/useEffect"},next:{title:"useReducer Hook",permalink:"/docs/guide/useReducer"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How to use <code>useContext</code>",id:"how-to-use-usecontext",level:2},{value:"Changing the Context",id:"changing-the-context",level:3},{value:"<code>useContext</code> uses the closest context in the tree",id:"usecontext-uses-the-closest-context-in-the-tree",level:3},{value:"When to use <code>useContext</code>",id:"when-to-use-usecontext",level:2},{value:"Example: A Page of Posts",id:"example-a-page-of-posts",level:2},{value:"Important Parts",id:"important-parts",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usecontext-hook-another-way-to-share-data",children:"useContext Hook: Another Way to Share Data"}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useContext"}),"\xa0is a hook in React that allows components to share data between components in React. Context provides a way to share data between components without having to pass props down through every level of the component tree."]}),"\n",(0,s.jsxs)(t.p,{children:["To understand why this is useful, let's consider a simple example. Suppose we have a component that needs to know the current user's name. We could pass the user's name as a prop to the component, but this would mean that we would have to pass the prop down through every level of the component tree, all the way to the component that needs it. This is known as ",(0,s.jsx)(t.strong,{children:"prop drilling"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useContext"})," solves this problem by allowing us to create a context object that contains the user's name. We can then use the ",(0,s.jsx)(t.code,{children:"useContext"})," hook to access the user's name from any component in the application, without having to pass it down as a prop."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useContext"}),"\xa0is useful because it simplifies the process of accessing shared data and makes the code more efficient. It eliminates the need for prop drilling, which can become cumbersome and difficult to manage as the component tree grows larger and more complex."]}),"\n",(0,s.jsxs)(t.p,{children:["By using\xa0",(0,s.jsx)(t.code,{children:"useContext"}),", components can access shared data directly from the context object, regardless of their position in the component tree. This makes it easier to manage and update the shared data."]}),"\n",(0,s.jsxs)(t.h2,{id:"how-to-use-usecontext",children:["How to use ",(0,s.jsx)(t.code,{children:"useContext"})]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Initialize a context using\xa0",(0,s.jsx)(t.code,{children:"createContext()"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Create a component that uses the context value using\xa0",(0,s.jsx)(t.code,{children:"useContext(MyContext)"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Create a parent component that provides the context value using\xa0",(0,s.jsx)(t.code,{children:"<MyContext.Provider>"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Render the component inside the parent component."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'import { createContext, useContext } from "react";\n\n// Create a context\nconst MyContext = createContext();\n\n// Create a component that uses the context\nfunction MyComponent() {\n    const value = useContext(MyContext);\n    return <div>{value}</div>;\n}\n\n// Create a parent component that provides the context value\nfunction ParentComponent() {\n    return (\n        <MyContext.Provider value="Hello from context!">\n            <MyComponent />\n        </MyContext.Provider>\n    );\n}\n'})}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usecontext/usage"}),"\n",(0,s.jsx)(t.h3,{id:"changing-the-context",children:"Changing the Context"}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usecontext/change"}),"\n",(0,s.jsx)(t.p,{children:"This example has several important components:"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MyContext"})," is a context that returns two things:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"text"})," a string"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"setText"})," a function to change said string"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MyContextProvider"}),", a React component that provides its ",(0,s.jsx)(t.code,{children:"children"})," with the ",(0,s.jsx)(t.code,{children:"MyContext"})," context"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"MyComponent"}),", a React component that displays the text from the ",(0,s.jsx)(t.code,{children:"MyContext"})," context"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Buttons"}),", a React component that displays two buttons, which when clicked, sets the ",(0,s.jsx)(t.code,{children:"text"})," in the ",(0,s.jsx)(t.code,{children:"MyContext"})," context to different strings"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["It does this by using ",(0,s.jsx)(t.code,{children:"setText"})," which we defined before"]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"usecontext-uses-the-closest-context-in-the-tree",children:[(0,s.jsx)(t.code,{children:"useContext"})," uses the closest context in the tree"]}),"\n",(0,s.jsxs)(t.p,{children:["When you use\xa0",(0,s.jsx)(t.code,{children:"useContext"}),", React will look up the component tree to find the closest context provider and use the data from that context. This means that if you have multiple context providers in your app,\xa0",(0,s.jsx)(t.code,{children:"useContext"}),"\xa0will use the data from the closest one in the tree."]}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usecontext/parent"}),"\n",(0,s.jsxs)(t.h2,{id:"when-to-use-usecontext",children:["When to use ",(0,s.jsx)(t.code,{children:"useContext"})]}),"\n",(0,s.jsxs)(t.p,{children:["You should use\xa0",(0,s.jsx)(t.code,{children:"useContext"}),"\xa0when you have data or functionality that needs to be shared across multiple components in your application. By using a context, you can avoid the need to pass props down through multiple levels of components, which can make your code more concise and easier to manage."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"useContext"}),"\xa0is particularly useful when you have a complex component hierarchy and need to share data or functionality between components that are not directly related. However, it's important to note that overusing context can make your code harder to understand and maintain, so it's important to use it judiciously and only when it makes sense for your specific use case."]}),"\n",(0,s.jsxs)(t.p,{children:["Let\u2019s take a look at an example of how ",(0,s.jsx)(t.code,{children:"useContext"})," should NOT be used:"]}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usecontext/bad"}),"\n",(0,s.jsxs)(t.p,{children:["In this example, we have a ",(0,s.jsx)(t.code,{children:"Card"})," component that takes the text from a context:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'function Card() {\n    const text = useContext(TextContext);\n\n    return (\n        <div className="flex h-48 w-36 place-content-center place-items-center justify-center rounded border-2 border-solid border-slate-100 bg-sky-700 p-10 text-slate-100 ">\n            <p>{text}</p>\n        </div>\n    );\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["And in the ",(0,s.jsx)(t.code,{children:"App"}),", we create two cards using two different contexts to pass in two different texts"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'function App() {\n    return (\n        <>\n            <div className="place flex h-full min-h-screen w-full flex-wrap items-center justify-center gap-5 bg-zinc-800">\n                <TextContextProvider defaultText="Hello">\n                    <Card />\n                </TextContextProvider>\n                <TextContextProvider defaultText="World">\n                    <Card />\n                </TextContextProvider>\n            </div>\n        </>\n    );\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["In this case, it would actually be better to rely on props, since ",(0,s.jsx)(t.code,{children:"text"})," is a property that isn\u2019t really global in context:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'function Card({ text }) {\n    return (\n        <div className="flex h-48 w-36 place-content-center place-items-center justify-center rounded border-2 border-solid border-slate-100 bg-sky-700 p-10 text-slate-100 ">\n            <p>{text}</p>\n        </div>\n}\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'function App() {\n    return (\n        <>\n            <div className="place flex h-full min-h-screen w-full flex-wrap items-center justify-center gap-5 bg-zinc-800">\n                <Card text="Hello" />\n                <Card text="World" />\n            </div>\n        </>\n    );\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["While it is a useful tool for data that is used on a wider scale, it is important not to overuse ",(0,s.jsx)(t.code,{children:"useContext"})," as it might add unneeded complexity."]}),"\n",(0,s.jsx)(t.h2,{id:"example-a-page-of-posts",children:"Example: A Page of Posts"}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usecontext/posts"}),"\n",(0,s.jsx)(t.h3,{id:"important-parts",children:"Important Parts"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"PostsContext"})," defines the context being used to display/change the posts, as well as a provider for this context."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Found in ",(0,s.jsx)(t.code,{children:"src/lib/store"})]}),"\n",(0,s.jsxs)(t.li,{children:["Defines ",(0,s.jsx)(t.code,{children:"posts"})," which contains all the posts"]}),"\n",(0,s.jsxs)(t.li,{children:["Defines ",(0,s.jsx)(t.code,{children:"setPosts"})," which allows the changing of the posts"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Posts"})," maps all the ",(0,s.jsx)(t.code,{children:"posts"})," in the context and display them in a ",(0,s.jsx)(t.code,{children:"PostCard"})," component"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Extracts ",(0,s.jsx)(t.code,{children:"post"})," from the context using ",(0,s.jsx)(t.code,{children:"useContext"})]}),"\n",(0,s.jsxs)(t.li,{children:["Found in ",(0,s.jsx)(t.code,{children:"src/components"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"PostCard"})," a component that displays the post, and allows the user to delete the post from the context"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Extracts ",(0,s.jsx)(t.code,{children:"setPosts"})," from the context using ",(0,s.jsx)(t.code,{children:"useContext"})]}),"\n",(0,s.jsxs)(t.li,{children:["Uses ",(0,s.jsx)(t.code,{children:"setPosts"})," to remove the post from the context when the delete button is pressed"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"main.tsx"})," has been changed to wrap ",(0,s.jsx)(t.code,{children:"App"})," in a ",(0,s.jsx)(t.code,{children:"PostsProvider"})," to allow for the internal components to use the context"]}),"\n",(0,s.jsx)(t.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsxs)(t.p,{children:["To learn more about ",(0,s.jsx)(t.code,{children:"useContext"})," please refer to ",(0,s.jsx)(t.a,{href:"https://react.dev/reference/react/useContext",children:"the React Docs"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},6533:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var s=n(1527);const o=e=>{let{src:t}=e;return(0,s.jsx)("div",{className:"flex h-[500px] rounded border",children:(0,s.jsx)("iframe",{src:t,className:"h-full w-full",frameborder:"0"})})}},7463:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(959);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);