"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26200],{24398:(e,c,r)=>{r.r(c),r.d(c,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/auto-schema/createServer/functions/createServer","title":"createServer","description":"Admin Docs","source":"@site/docs/docs/auto-schema/createServer/functions/createServer.md","sourceDirName":"docs/auto-schema/createServer/functions","slug":"/docs/auto-schema/createServer/functions/createServer","permalink":"/docs/docs/auto-schema/createServer/functions/createServer","draft":false,"unlisted":false,"editUrl":"https://github.com/PalisadoesFoundation/talawa-api/edit/develop/docs/docs/docs/auto-schema/createServer/functions/createServer.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"isNotNullish","permalink":"/docs/auto-docs/utilities/isNotNullish/functions/isNotNullish"},"next":{"title":"advertisementAttachmentMimeTypeEnum","permalink":"/docs/docs/auto-schema/drizzle/enums/advertisementAttachmentMimeType/variables/advertisementAttachmentMimeTypeEnum"}}');var s=r(86070),d=r(55288);const i={},o=void 0,t={},l=[{value:"Parameters",id:"parameters",level:2},{value:"options?",id:"options",level:3},{value:"envConfig?",id:"envconfig",level:4},{value:"Returns",id:"returns",level:2}];function h(e){const c={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.p,{children:(0,s.jsx)(c.a,{href:"/",children:"Admin Docs"})}),"\n",(0,s.jsx)(c.hr,{}),"\n",(0,s.jsx)(c.h1,{id:"function-createserver",children:"Function: createServer()"}),"\n",(0,s.jsxs)(c.blockquote,{children:["\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.strong,{children:"createServer"}),"(",(0,s.jsx)(c.code,{children:"options"}),"?): ",(0,s.jsx)(c.code,{children:"Promise"}),"<",(0,s.jsx)(c.code,{children:"FastifyInstance"}),"<",(0,s.jsx)(c.code,{children:"Server"}),"<",(0,s.jsx)(c.em,{children:"typeof"})," ",(0,s.jsx)(c.code,{children:"IncomingMessage"}),", ",(0,s.jsx)(c.em,{children:"typeof"})," ",(0,s.jsx)(c.code,{children:"ServerResponse"}),">, ",(0,s.jsx)(c.code,{children:"IncomingMessage"}),", ",(0,s.jsx)(c.code,{children:"ServerResponse"}),"<",(0,s.jsx)(c.code,{children:"IncomingMessage"}),">, ",(0,s.jsx)(c.code,{children:"FastifyBaseLogger"}),", ",(0,s.jsx)(c.code,{children:"TypeBoxTypeProvider"}),">>"]}),"\n"]}),"\n",(0,s.jsxs)(c.p,{children:["Defined in: ",(0,s.jsx)(c.a,{href:"https://github.com/Suyash878/talawa-api/blob/2164956a3cfab8e53ec86349b53a841816d69cde/src/createServer.ts#L29",children:"src/createServer.ts:29"})]}),"\n",(0,s.jsx)(c.p,{children:"This function is used to set up the fastify server."}),"\n",(0,s.jsx)(c.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(c.h3,{id:"options",children:"options?"}),"\n",(0,s.jsx)(c.h4,{id:"envconfig",children:"envConfig?"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:"Partial"}),"<{ ",(0,s.jsx)(c.code,{children:"API_ADMINISTRATOR_USER_EMAIL_ADDRESS"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_ADMINISTRATOR_USER_NAME"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_ADMINISTRATOR_USER_PASSWORD"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_BASE_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_FACEBOOK_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_GITHUB_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_INACTIVITY_TIMEOUT_DURATION"}),": ",(0,s.jsx)(c.code,{children:"number"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_INSTAGRAM_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_LINKEDIN_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_NAME"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_REDDIT_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_SLACK_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_WEBSITE_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_X_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_COMMUNITY_YOUTUBE_URL"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_HOST"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_IS_APPLY_DRIZZLE_MIGRATIONS"}),": ",(0,s.jsx)(c.code,{children:"boolean"}),"; ",(0,s.jsx)(c.code,{children:"API_IS_GRAPHIQL"}),": ",(0,s.jsx)(c.code,{children:"boolean"}),"; ",(0,s.jsx)(c.code,{children:"API_IS_PINO_PRETTY"}),": ",(0,s.jsx)(c.code,{children:"boolean"}),"; ",(0,s.jsx)(c.code,{children:"API_JWT_EXPIRES_IN"}),": ",(0,s.jsx)(c.code,{children:"number"}),"; ",(0,s.jsx)(c.code,{children:"API_JWT_SECRET"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_LOG_LEVEL"}),": ",(0,s.jsx)(c.code,{children:'"debug"'})," | ",(0,s.jsx)(c.code,{children:'"error"'})," | ",(0,s.jsx)(c.code,{children:'"fatal"'})," | ",(0,s.jsx)(c.code,{children:'"info"'})," | ",(0,s.jsx)(c.code,{children:'"trace"'})," | ",(0,s.jsx)(c.code,{children:'"warn"'}),"; ",(0,s.jsx)(c.code,{children:"API_MINIO_ACCESS_KEY"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_MINIO_END_POINT"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_MINIO_PORT"}),": ",(0,s.jsx)(c.code,{children:"number"}),"; ",(0,s.jsx)(c.code,{children:"API_MINIO_SECRET_KEY"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_MINIO_USE_SSL"}),": ",(0,s.jsx)(c.code,{children:"boolean"}),"; ",(0,s.jsx)(c.code,{children:"API_PORT"}),": ",(0,s.jsx)(c.code,{children:"number"}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_DATABASE"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_HOST"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_PASSWORD"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_PORT"}),": ",(0,s.jsx)(c.code,{children:"number"}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_SSL_MODE"}),": ",(0,s.jsx)(c.code,{children:"boolean"})," | ",(0,s.jsx)(c.code,{children:'"allow"'})," | ",(0,s.jsx)(c.code,{children:'"prefer"'})," | ",(0,s.jsx)(c.code,{children:'"require"'})," | ",(0,s.jsx)(c.code,{children:'"verify-full"'}),"; ",(0,s.jsx)(c.code,{children:"API_POSTGRES_USER"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; ",(0,s.jsx)(c.code,{children:"MINIO_ROOT_USER"}),": ",(0,s.jsx)(c.code,{children:"string"}),"; }>"]}),"\n",(0,s.jsx)(c.p,{children:"Optional custom configuration environment variables that would merge or override the default configuration environment variables used by talawa api."}),"\n",(0,s.jsx)(c.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(c.p,{children:[(0,s.jsx)(c.code,{children:"Promise"}),"<",(0,s.jsx)(c.code,{children:"FastifyInstance"}),"<",(0,s.jsx)(c.code,{children:"Server"}),"<",(0,s.jsx)(c.em,{children:"typeof"})," ",(0,s.jsx)(c.code,{children:"IncomingMessage"}),", ",(0,s.jsx)(c.em,{children:"typeof"})," ",(0,s.jsx)(c.code,{children:"ServerResponse"}),">, ",(0,s.jsx)(c.code,{children:"IncomingMessage"}),", ",(0,s.jsx)(c.code,{children:"ServerResponse"}),"<",(0,s.jsx)(c.code,{children:"IncomingMessage"}),">, ",(0,s.jsx)(c.code,{children:"FastifyBaseLogger"}),", ",(0,s.jsx)(c.code,{children:"TypeBoxTypeProvider"}),">>"]})]})}function a(e={}){const{wrapper:c}={...(0,d.R)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},55288:(e,c,r)=>{r.d(c,{R:()=>i,x:()=>o});var n=r(30758);const s={},d=n.createContext(s);function i(e){const c=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:c},e.children)}}}]);