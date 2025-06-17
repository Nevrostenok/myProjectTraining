import{_ as o}from"./Header-D1YGkEZe.js";import"./iframe-DekjyLsg.js";import"./Button-BK44HBPI.js";const{fn:a}=__STORYBOOK_MODULE_TEST__,_={title:"Example/Header",component:o,render:g=>({components:{MyHeader:o},setup(){return{args:g}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:a(),onLogout:a(),onCreateAccount:a()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const i=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,i as __namedExportsOrder,_ as default};
