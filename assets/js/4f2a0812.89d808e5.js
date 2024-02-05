"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[376],{1305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=t(1527),r=t(7463),c=t(6533);const o={title:"useReducer Hook",description:"A Safe Way to Interact with Data"},i="useReducer Hook: A Safe Way to Interact with Data",a={id:"guide/useReducer",title:"useReducer Hook",description:"A Safe Way to Interact with Data",source:"@site/docs/guide/useReducer.mdx",sourceDirName:"guide",slug:"/guide/useReducer",permalink:"/codelab-toolkit/docs/guide/useReducer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useReducer Hook",description:"A Safe Way to Interact with Data"},sidebar:"guideSidebar",previous:{title:"useContext Hook",permalink:"/codelab-toolkit/docs/guide/useContext"},next:{title:"Conditional Rendering",permalink:"/codelab-toolkit/docs/guide/conditional"}},d={},u=[{value:"Introduction",id:"introduction",level:2},{value:"How to use <code>useReducer</code>",id:"how-to-use-usereducer",level:2},{value:"Defining a Reducer",id:"defining-a-reducer",level:3},{value:"Using a Reducer",id:"using-a-reducer",level:2},{value:"Example: Counter using a Reducer",id:"example-counter-using-a-reducer",level:2},{value:"Using a Context with <code>useReducer</code>",id:"using-a-context-with-usereducer",level:2},{value:"Example: Counter using a Reducer Context",id:"example-counter-using-a-reducer-context",level:2},{value:"Example: Using Reducer in the Page of Posts",id:"example-using-reducer-in-the-page-of-posts",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usereducer-hook-a-safe-way-to-interact-with-data",children:"useReducer Hook: A Safe Way to Interact with Data"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useReducer"})," is a React hook that allows you to manage complex state in your components. It is similar to ",(0,s.jsx)(n.code,{children:"useState"}),", but it offers a few advantages, such as the ability to manage complex state and improve performance."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useReducer"})," allows you to control how your data or state can be interacted with. For example, if you have a reducer function that only allows the user to increment or decrement a counter, then you can make it so that the developer cannot accidentally set the counter to a negative number."]}),"\n",(0,s.jsxs)(n.h2,{id:"how-to-use-usereducer",children:["How to use ",(0,s.jsx)(n.code,{children:"useReducer"})]}),"\n",(0,s.jsx)(n.h3,{id:"defining-a-reducer",children:"Defining a Reducer"}),"\n",(0,s.jsxs)(n.p,{children:["First, we need to define a reducer, which is a function that takes two arguments, ",(0,s.jsx)(n.code,{children:"state"})," and ",(0,s.jsx)(n.code,{children:"action"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function reducer(state, action) {\n    // ...\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s define the functionality of this reducer now. Let\u2019s say we wanted to build a reducer for a counter, where the user is allowed to increment, decrement, or reset the counter. In this case, the state is just an integer."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function countReducer(state, action) {\n    switch (action.type) {\n        case "increment":\n            return state + 1;\n        case "decrement":\n            return state > 0 ? state - 1 : state;\n        case "reset":\n            return 0;\n        default:\n            throw new Error("Invalid action type");\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see there is a switch statement for the action\u2019s ",(0,s.jsx)(n.code,{children:"type"}),", and depending on its value, the reducer does different actions. Notice that the reducer always returns what the state should be after the action."]}),"\n",(0,s.jsx)(n.p,{children:"Now, let\u2019s take a look at how to use this reducer."}),"\n",(0,s.jsx)(n.h2,{id:"using-a-reducer",children:"Using a Reducer"}),"\n",(0,s.jsxs)(n.p,{children:["To use a reducer in a component, we can use the ",(0,s.jsx)(n.code,{children:"useReducer"})," hook:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const [count, dispatch] = useReducer(countReducer, 0);\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["The ",(0,s.jsx)(n.code,{children:"0"})," here is the initial value of the reducer\u2019s state."]})}),"\n",(0,s.jsx)(n.p,{children:"Then, we can use the dispatch to change the state as such:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'const onIncrementPress = () => {\n        dispatch({ type: "increment" });\n    };\n\n...\n\n<Button onClick={onIncrementPress}>+</Button>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-counter-using-a-reducer",children:"Example: Counter using a Reducer"}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usereducer/counter"}),"\n",(0,s.jsxs)(n.h2,{id:"using-a-context-with-usereducer",children:["Using a Context with ",(0,s.jsx)(n.code,{children:"useReducer"})]}),"\n",(0,s.jsxs)(n.p,{children:["Much like ",(0,s.jsx)(n.code,{children:"useState"}),", ",(0,s.jsx)(n.code,{children:"useReducer"}),"'s state and dispatch functions are confined to the component that they are defined in. Because of this, if you created two components that use the same reducer\u2026"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function Component1() {\n  const [state, dispatch] = useReducer(reducer, 0)\n  ...\n}\n\nfunction Component2() {\n  const [state, dispatch] = useReducer(reducer, 0)\n  ...\n}\n\nfunction App() {\n  return (\n    <Component1 />\n    <Component2 />\n  )\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u2026these components will not share the same state, since there are two separate instances of the same reducer."}),"\n",(0,s.jsxs)(n.p,{children:["So, what do we do if we have a state that needs to be accessed by many components within a certain scope? We can use a React Context! To learn more about ",(0,s.jsx)(n.code,{children:"useContext"})," please take a look at ",(0,s.jsx)(n.a,{href:"https://www.notion.so/useContext-Hook-Another-Way-to-Share-Data-d67de2df40fb4669ab547e1a52f6f7a3?pvs=21",children:"useContext Hook: Another Way to Share Data"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s do this for the counter example from the previous section, starting with creating the context:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"const CounterContext = createContext({\n    count: 0,\n    dispatch: () => {},\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s create a provider to provide a certain scope with this context. Here, we can define our reducer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function CounterProvider({ children }) {\n    const [count, dispatch] = useReducer(countReducer, 0);\n\n    return (\n        <CounterContext.Provider\n            value={{\n                count,\n                dispatch,\n            }}\n        >\n            {children}\n        </CounterContext.Provider>\n    );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"After wrapping the relevant code with the context, we can use this in components within the scope, ex:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function CounterDisplay() {\n    const { count } = useContext(CounterContext);\n\n    return (\n        <span className="flex w-full justify-center text-xl font-bold">\n            {count}\n        </span>\n    );\n}\n\nfunction IncrementButton() {\n    const { dispatch } = useContext(CounterContext);\n\n    const onIncrementPress = () => {\n        dispatch({ type: "increment" });\n    };\n\n    return <Button onClick={onIncrementPress}>+</Button>;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-counter-using-a-reducer-context",children:"Example: Counter using a Reducer Context"}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usereducer/context"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/lib/store/Counter.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defines the reducer"}),"\n",(0,s.jsx)(n.li,{children:"Defines the context"}),"\n",(0,s.jsx)(n.li,{children:"Defines the provider"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/App.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defines the components that use the reducer/context"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/main.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Wraps the app with the provider"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-using-reducer-in-the-page-of-posts",children:"Example: Using Reducer in the Page of Posts"}),"\n",(0,s.jsx)(c.Z,{src:"https://keith-loww.github.io/sandpack-test/#/usereducer/posts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/lib/store/Posts.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Defines the reducer"}),"\n",(0,s.jsx)(n.li,{children:"Defines the context"}),"\n",(0,s.jsx)(n.li,{children:"Defines a provider for the context"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/lib/hooks/usePosts.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Defines a custom hook for the ",(0,s.jsx)(n.code,{children:"PostsContext"})," for error handling"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/main.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Wraps the ",(0,s.jsx)(n.code,{children:"App"})," in the ",(0,s.jsx)(n.code,{children:"PostsProvider"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"src/App.tsx"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Makes functions that use the ",(0,s.jsx)(n.code,{children:"dispatch"})," function from the reducer to:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Like a post"}),"\n",(0,s.jsx)(n.li,{children:"Add a post"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,s.jsxs)(n.p,{children:["If you would like to learn more about ",(0,s.jsx)(n.code,{children:"useReducer"}),", please refer to the ",(0,s.jsx)(n.a,{href:"https://react.dev/reference/react/useReducer",children:"official React documentation"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},6533:(e,n,t)=>{t.d(n,{Z:()=>r});t(959);var s=t(1527);const r=e=>{let{src:n}=e;return(0,s.jsx)("div",{className:"flex h-[500px] rounded border",children:(0,s.jsx)("iframe",{src:n,className:"h-full w-full",frameborder:"0"})})}},7463:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(959);const r={},c=s.createContext(r);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);