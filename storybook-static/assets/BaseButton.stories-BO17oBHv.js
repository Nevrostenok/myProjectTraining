import{d as l,c as d,r as i,m,o as p}from"./iframe-DekjyLsg.js";const u=["disabled"],t=l({__name:"BaseButton",props:{variant:{},disabled:{type:Boolean}},setup(c){return(e,n)=>(p(),d("button",m({class:["py-2 px-4 rounded font-semibold",e.variant==="primary"?"bg-blue-500 text-white":e.variant==="secondary"?"bg-gray-300 text-black":e.variant==="danger"?"bg-red-500 text-white":"",e.disabled&&"opacity-50 cursor-not-allowed"],disabled:e.disabled},e.$attrs,{onClick:n[0]||(n[0]=B=>e.$emit("click"))}),[i(e.$slots,"default")],16,u))}});t.__docgenInfo={exportName:"default",displayName:"BaseButton",description:"",tags:{},props:[{name:"variant",required:!1,type:{name:"union",elements:[{name:'"primary"'},{name:'"secondary"'},{name:'"danger"'}]}},{name:"disabled",required:!1,type:{name:"boolean"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/Users/elinatkalenko/Desktop/taskforge/src/ui/BaseButton.vue"]};const f={title:"UI/BaseButton",component:t},a={render:()=>({components:{BaseButton:t},template:`<BaseButton @click="alert('Клик!')">Нажми меня</BaseButton>`})};var s,o,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseButton
    },
    template: \`<BaseButton @click="alert('Клик!')">Нажми меня</BaseButton>\`
  })
}`,...(r=(o=a.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const k=["Default"];export{a as Default,k as __namedExportsOrder,f as default};
