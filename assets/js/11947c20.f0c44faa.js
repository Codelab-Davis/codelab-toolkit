"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[494],{1591:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var t=i(1527),o=i(7463),s=i(6533);const l={title:"Default Theming with Tailwind",description:"Another Way to Style CSS"},a="Default Theming With Tailwind",d={id:"guide/tailwind",title:"Default Theming with Tailwind",description:"Another Way to Style CSS",source:"@site/docs/guide/tailwind.mdx",sourceDirName:"guide",slug:"/guide/tailwind",permalink:"/docs/guide/tailwind",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Default Theming with Tailwind",description:"Another Way to Style CSS"},sidebar:"guideSidebar",previous:{title:"Conditional Rendering",permalink:"/docs/guide/conditional"},next:{title:"Custom Hooks",permalink:"/docs/guide/customHooks"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Preflight",id:"preflight",level:2},{value:"Disabling Preflight",id:"disabling-preflight",level:3},{value:"Colors",id:"colors",level:2},{value:"Extending The Theme",id:"extending-the-theme",level:3},{value:"Example: Custom Colors",id:"example-custom-colors",level:3},{value:"Fonts",id:"fonts",level:2},{value:"External Fonts",id:"external-fonts",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"default-theming-with-tailwind",children:"Default Theming With Tailwind"}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Tailwind is a fantastic way to handle CSS styling. It allows developers to dynamically apply styles to their components without having to mess with external CSS files."}),"\n",(0,t.jsx)(n.p,{children:"However, there are some styles that would be better if they had a global scope, therefore this guide contains examples on how to configure default styles on your Tailwind project."}),"\n",(0,t.jsx)(n.h2,{id:"preflight",children:"Preflight"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Before we talk about making our own default styles, let\u2019s talk about the Tailwind styles that come out of the box"})}),"\n",(0,t.jsx)(n.p,{children:"Tailwind Preflight is a premade set of base styles that was implemented with the motivation of smoothing out cross-browser inconsistencies. When you install Tailwind into a project, preflight is automatically configured out of the box."}),"\n",(0,t.jsx)(n.h3,{id:"disabling-preflight",children:"Disabling Preflight"}),"\n",(0,t.jsx)(n.p,{children:"While it is recommended to keep Preflight enabled, especially if Tailwind is your sole CSS solution, there are times where it would be necessary to disable the base styles."}),"\n",(0,t.jsxs)(n.p,{children:["To disable preflight, add the following to the ",(0,t.jsx)(n.code,{children:"module.exports"})," found in your ",(0,t.jsx)(n.code,{children:"tailwind.config.js"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"corePlugins: {\n    preflight: false,\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["So, for example, your ",(0,t.jsx)(n.code,{children:"tailwind.config.js"})," file will looking something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"module.exports = {\n\t...,\n  corePlugins: {\n    preflight: false,\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"colors",children:"Colors"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Tailwind comes with a multitude of colors for developers to use, where you can find ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/customizing-colors",children:"here"}),". However, there will be times where you will want to define your own colors for your app."]}),"\n",(0,t.jsxs)(n.p,{children:["To do this, add a ",(0,t.jsx)(n.code,{children:"theme"})," object to your ",(0,t.jsx)(n.code,{children:"tailwind.config.js"}),", and within that object, define a ",(0,t.jsx)(n.code,{children:"colors"})," object. For example, if you wanted to define ",(0,t.jsx)(n.code,{children:"tahiti"})," as specifically the color ",(0,t.jsx)(n.code,{children:"3ab7bf"}),", you can achieve this like so:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'module.exports = {\n    theme: {\n        colors: {\n            tahiti: "#3ab7bf",\n        },\n    },\n};\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you wanted to add shade variants of your colors, similar to the default Tailwind colors, you can achieve it like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'module.exports = {\n    theme: {\n        colors: {\n            tahiti: {\n                100: "#cffafe",\n                200: "#a5f3fc",\n                300: "#67e8f9",\n                400: "#22d3ee",\n                500: "#06b6d4",\n                600: "#0891b2",\n                700: "#0e7490",\n                800: "#155e75",\n                900: "#164e63",\n            },\n        },\n    },\n};\n'})}),"\n",(0,t.jsx)(n.h3,{id:"extending-the-theme",children:"Extending The Theme"}),"\n",(0,t.jsxs)(n.p,{children:["If you added the colors in the way we did above, you will notice that Tailwind will no longer have access to its usual base colors. If you would like to keep the original color palate, while adding or replacing certain colors, you can do so by wrapping ",(0,t.jsx)(n.code,{children:"colors"})," inside an ",(0,t.jsx)(n.code,{children:"extend"})," object, which will tell Tailwind to \u201cextend\u201d its theme instead of redefining it."]}),"\n",(0,t.jsx)(n.h3,{id:"example-custom-colors",children:"Example: Custom Colors"}),"\n",(0,t.jsx)(s.Z,{src:"https://codelab-davis.github.io/codelab-toolkit-sandboxes/#/tailwind/color"}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we have added two new colors to the ",(0,t.jsx)(n.code,{children:"tailwind.config.js"}),", the ",(0,t.jsx)(n.code,{children:"tahiti"})," palate we defined above, as well as a new single color ",(0,t.jsx)(n.code,{children:"gray-dark"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["As you can see in ",(0,t.jsx)(n.code,{children:"src/App.tsx"}),", we define a background color for the app using the new ",(0,t.jsx)(n.code,{children:"gray-dark"})," color, and create three containers, each showcasing different shades of the ",(0,t.jsx)(n.code,{children:"tahiti"})," swatch."]}),"\n",(0,t.jsx)(n.h2,{id:"fonts",children:"Fonts"}),"\n",(0,t.jsxs)(n.p,{children:["Another thing that developers will most likely want to customize are the fonts used by their application. To customize your font in Tailwind, add a ",(0,t.jsx)(n.code,{children:"fontFamily"})," object to your ",(0,t.jsx)(n.code,{children:"theme"})," object:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'module.exports = {\n    theme: {\n        extend: {\n            fontFamily: {\n                display: "Oswald, ui-serif", // Adds a new `font-display` class\n                sans: ["Graphik", "sans-serif"],\n                serif: ["Merriweather", "serif"],\n            },\n        },\n    },\n};\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above defines 3 new fonts, ",(0,t.jsx)(n.code,{children:"display"})," , ",(0,t.jsx)(n.code,{children:"sans"}),", and ",(0,t.jsx)(n.code,{children:"serif"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"external-fonts",children:"External Fonts"}),"\n",(0,t.jsx)(n.p,{children:"We would also need to import whatever external font that you would like to use as well. Let\u2019s say we wanted to use the CodeLab logo\u2019s font, \u201cPoppins\u201d."}),"\n",(0,t.jsxs)(n.p,{children:["Find the global CSS file in your App, and add the proper ",(0,t.jsx)(n.code,{children:"@import"})," statement:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Similarly to above, add the font to your ",(0,t.jsx)(n.code,{children:"tailwind.config.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'fontFamily: {\n    poppins: "Poppins", sans - serif;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Then, we can use this font wherever we want in the app:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'<span className="font-poppins text-7xl text-white">CodeLab</span>\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here it is in action:"}),"\n",(0,t.jsx)(s.Z,{src:"https://codelab-davis.github.io/codelab-toolkit-sandboxes/#/tailwind/font"}),"\n",(0,t.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about setting default styles in Tailwind, please check out the official ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/theme",children:"Tailwind Documentation"})," on theme configuration."]}),"\n",(0,t.jsxs)(n.p,{children:["To learn more about Preflight and what the default styles are, please check out the official ",(0,t.jsx)(n.a,{href:"https://tailwindcss.com/docs/preflight",children:"Tailwind Documentation"})," on Preflight."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6533:(e,n,i)=>{i.d(n,{Z:()=>o});i(959);var t=i(1527);const o=e=>{let{src:n}=e;return(0,t.jsx)("div",{className:"flex h-[500px] rounded border",children:(0,t.jsx)("iframe",{src:n,className:"h-full w-full",frameborder:"0"})})}},7463:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>l});var t=i(959);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);