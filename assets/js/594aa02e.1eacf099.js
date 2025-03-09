"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76232],{37773:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformGraphQLConnectionArgumentsWithWhere","title":"transformGraphQLConnectionArgumentsWithWhere","description":"Admin Docs","source":"@site/docs/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformGraphQLConnectionArgumentsWithWhere.md","sourceDirName":"docs/auto-schema/utilities/defaultGraphQLConnection/functions","slug":"/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformGraphQLConnectionArgumentsWithWhere","permalink":"/docs/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformGraphQLConnectionArgumentsWithWhere","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformGraphQLConnectionArgumentsWithWhere.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"transformDefaultGraphQLConnectionArguments","permalink":"/docs/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformDefaultGraphQLConnectionArguments"},"next":{"title":"transformToDefaultGraphQLConnection","permalink":"/docs/docs/auto-schema/utilities/defaultGraphQLConnection/functions/transformToDefaultGraphQLConnection"}}');var o=t(86070),s=t(55288);const c={},i=void 0,a={},d=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"arg",id:"arg",level:3},{value:"ctx",id:"ctx",level:3},{value:"Returns",id:"returns",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/",children:"Admin Docs"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h1,{id:"function-transformgraphqlconnectionargumentswithwhere",children:"Function: transformGraphQLConnectionArgumentsWithWhere()"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"transformGraphQLConnectionArgumentsWithWhere"}),"<",(0,o.jsx)(n.code,{children:"Arg"}),", ",(0,o.jsx)(n.code,{children:"Where"}),">(",(0,o.jsx)(n.code,{children:"arg"}),", ",(0,o.jsx)(n.code,{children:"ctx"}),"): ",(0,o.jsx)(n.code,{children:"object"})," & ",(0,o.jsx)(n.code,{children:"Omit"}),"<",(0,o.jsx)(n.code,{children:"Arg"}),", ",(0,o.jsx)(n.code,{children:'"first"'})," | ",(0,o.jsx)(n.code,{children:'"last"'})," | ",(0,o.jsx)(n.code,{children:'"before"'})," | ",(0,o.jsx)(n.code,{children:'"after"'}),"> & ",(0,o.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Defined in: ",(0,o.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/1251c45d69620e1317cb8632c6decbdb7edbdb06/src/utilities/defaultGraphQLConnection.ts#L163",children:"src/utilities/defaultGraphQLConnection.ts:163"})]}),"\n",(0,o.jsx)(n.p,{children:"Transform function for connection arguments with a where clause.\nExtends the base transformation with where handling."}),"\n",(0,o.jsx)(n.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"Arg"})," ",(0,o.jsx)(n.em,{children:"extends"})," ",(0,o.jsx)(n.code,{children:"object"})," & ",(0,o.jsx)(n.code,{children:"object"})]}),"\n",(0,o.jsxs)(n.p,{children:["\u2022 ",(0,o.jsx)(n.strong,{children:"Where"})," = ",(0,o.jsx)(n.code,{children:"Arg"}),"[",(0,o.jsx)(n.code,{children:'"where"'}),"]"]}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(n.h3,{id:"arg",children:"arg"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"Arg"})}),"\n",(0,o.jsx)(n.p,{children:"The arguments to transform"}),"\n",(0,o.jsx)(n.h3,{id:"ctx",children:"ctx"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"RefinementCtx"})}),"\n",(0,o.jsx)(n.p,{children:"The Zod refinement context"}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"object"})," & ",(0,o.jsx)(n.code,{children:"Omit"}),"<",(0,o.jsx)(n.code,{children:"Arg"}),", ",(0,o.jsx)(n.code,{children:'"first"'})," | ",(0,o.jsx)(n.code,{children:'"last"'})," | ",(0,o.jsx)(n.code,{children:'"before"'})," | ",(0,o.jsx)(n.code,{children:'"after"'}),"> & ",(0,o.jsx)(n.code,{children:"object"})]}),"\n",(0,o.jsx)(n.p,{children:"The transformed arguments with where clause"})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},55288:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var r=t(30758);const o={},s=r.createContext(o);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);