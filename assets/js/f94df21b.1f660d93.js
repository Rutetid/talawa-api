"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31985],{80280:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"docs/auto-schema/plugins/minioClient/functions/minioClient","title":"minioClient","description":"Admin Docs","source":"@site/docs/docs/auto-schema/plugins/minioClient/functions/minioClient.md","sourceDirName":"docs/auto-schema/plugins/minioClient/functions","slug":"/docs/auto-schema/plugins/minioClient/functions/minioClient","permalink":"/docs/docs/auto-schema/plugins/minioClient/functions/minioClient","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/auto-schema/plugins/minioClient/functions/minioClient.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"plugins","permalink":"/docs/docs/auto-schema/plugins/functions/plugins"},"next":{"title":"default","permalink":"/docs/docs/auto-schema/plugins/seedInitialData/functions/default"}}');var t=i(86070),o=i(55288);const c={},l=void 0,a={},r=[{value:"Parameters",id:"parameters",level:2},{value:"fastify",id:"fastify",level:3},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/",children:"Admin Docs"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h1,{id:"function-minioclient",children:"Function: minioClient()"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"minioClient"}),"(",(0,t.jsx)(n.code,{children:"fastify"}),"): ",(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Defined in: ",(0,t.jsx)(n.a,{href:"https://github.com/PalisadoesFoundation/talawa-api/blob/1251c45d69620e1317cb8632c6decbdb7edbdb06/src/plugins/minioClient.ts#L26",children:"src/plugins/minioClient.ts:26"})]}),"\n",(0,t.jsxs)(n.p,{children:["Integrates the talawa minio bucket name and a minio client instance on the namespaces ",(0,t.jsx)(n.code,{children:"minio.bucketName"})," and ",(0,t.jsx)(n.code,{children:"minio.client"})," respectively on the global fastify instance."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(n.h3,{id:"fastify",children:"fastify"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FastifyInstance"}),"<",(0,t.jsx)(n.code,{children:"RawServerDefault"}),", ",(0,t.jsx)(n.code,{children:"IncomingMessage"}),", ",(0,t.jsx)(n.code,{children:"ServerResponse"}),"<",(0,t.jsx)(n.code,{children:"IncomingMessage"}),">, ",(0,t.jsx)(n.code,{children:"FastifyBaseLogger"}),", ",(0,t.jsx)(n.code,{children:"FastifyTypeProviderDefault"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Promise"}),"<",(0,t.jsx)(n.code,{children:"void"}),">"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'import minioClientPlugin from "~src/plugins/minioClient";\n\nfastify.register(minioClientPlugin, {});\nconst buckets = await fastify.minio.client.listBuckets();\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},55288:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>l});var s=i(30758);const t={},o=s.createContext(t);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);