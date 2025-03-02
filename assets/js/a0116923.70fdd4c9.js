"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75068],{85650:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"docs/developer-resources/introduction","title":"Introduction","description":"Welcome to the Talawa-API developer resources.","source":"@site/docs/docs/developer-resources/introduction.md","sourceDirName":"docs/developer-resources","slug":"/developer-resources/introduction","permalink":"/docs/developer-resources/introduction","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/developer-resources/introduction.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"introduction","title":"Introduction","slug":"/developer-resources/introduction","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Environment Variables","permalink":"/docs/installation/environment-variables"},"next":{"title":"PNPM Scripts","permalink":"/docs/developer-resources/pnpm-scripts"}}');var i=s(86070),r=s(55288);const o={id:"introduction",title:"Introduction",slug:"/developer-resources/introduction",sidebar_position:1},d=void 0,a={},c=[{value:"Design Philosophy",id:"design-philosophy",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Important Directories",id:"important-directories",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Welcome to the Talawa-API developer resources."}),"\n",(0,i.jsx)(t.h2,{id:"design-philosophy",children:"Design Philosophy"}),"\n",(0,i.jsx)(t.p,{children:"Coming Soon"}),"\n",(0,i.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsx)(t.p,{children:"We have kept the authentication system very minimal so that a proper authentication system can be put in place later on. We feel that some kind of typescript based authentication library that can integrate with the current database schema or a self hosted service with its own database is needed."}),"\n",(0,i.jsxs)(t.p,{children:["For this reason, the authentication system needs to be detached from the GraphQL schema and be handled using REST APIs using something like Better Auth: ",(0,i.jsx)(t.a,{href:"https://github.com/better-auth/better-auth",children:"https://github.com/better-auth/better-auth"})]}),"\n",(0,i.jsx)(t.h2,{id:"important-directories",children:"Important Directories"}),"\n",(0,i.jsx)(t.p,{children:"Review these important locations before you start your coding journey."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Directory"})}),(0,i.jsx)(t.th,{children:(0,i.jsx)(t.strong,{children:"Description"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"devcontainer"})}),(0,i.jsx)(t.td,{children:"Contains the devcontainer configuration file."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"docker/"})}),(0,i.jsx)(t.td,{children:"Contains Docker configuration files."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"drizzle_migrations/"})}),(0,i.jsx)(t.td,{children:"Definitions that allow the the Drizzle ORM to modify the structure of a database schema by adding, removing, or changing columns in tables, essentially allowing you to update your database schema programmatically without writing raw SQL commands, ensuring that changes are tracked and can be applied consistently across different environments."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"envFiles/"})}),(0,i.jsxs)(t.td,{children:["Contains ",(0,i.jsx)(t.code,{children:".env"})," files for production, development and CI/CD pipelines"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/drizzle"})}),(0,i.jsx)(t.td,{children:"Contains drizzle-orm schema definitions for the postgres database."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql"})}),(0,i.jsx)(t.td,{children:"Used for storing all pothos schema definitions used for Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/enums"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql inputs used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/inputs"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql inputs used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/interfaces"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql interfaces used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/scalars"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql scalars used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/types"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql types used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/graphql/unions"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql unions used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/plugins"})}),(0,i.jsx)(t.td,{children:"Contains the fastify plugins used to extend the base functionality of the fastify instance either for usage in other plugins or for usage in the route plugins."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"src/routes"})}),(0,i.jsx)(t.td,{children:"Used for storing the schema definitions for the graphql enums used in the Talawa-API's graphql implementation."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"test"})}),(0,i.jsx)(t.td,{children:"Contains the code for performing api tests against Talawa-API. The tests in this directory must follow the practices of black box testing and most of them should be written to be able to run concurrently."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"test/routes/graphql"})}),(0,i.jsx)(t.td,{children:"Contains the code for performing api tests against Talawa-API. The tests in this directory must follow the practices of black box testing and most of them should be written to be able to run concurrently."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},55288:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(30758);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);