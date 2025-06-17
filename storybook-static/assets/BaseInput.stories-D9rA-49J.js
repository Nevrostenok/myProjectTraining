import{d as V,h as k,c as s,e as u,w as _,t as d,v as q,a as D,m as x,o,j as g}from"./iframe-DekjyLsg.js";const E={class:"flex flex-col gap-1"},N={key:0,class:"text-sm font-medium text-gray-700"},S=["type","placeholder","disabled"],U={key:1,class:"text-sm text-red-500"},t=V({__name:"BaseInput",props:{modelValue:{},label:{},placeholder:{},type:{},disabled:{type:Boolean},error:{}},emits:["update:modelValue"],setup(n,{emit:b}){const h=n,B=b,l=k({get:()=>h.modelValue,set:e=>B("update:modelValue",e)});return(e,p)=>(o(),s("div",E,[e.label?(o(),s("label",N,d(e.label),1)):u("",!0),_(D("input",x({"onUpdate:modelValue":p[0]||(p[0]=I=>l.value=I)},e.$attrs,{type:e.type,placeholder:e.placeholder,disabled:e.disabled,class:"border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"}),null,16,S),[[q,l.value]]),e.error?(o(),s("p",U,d(e.error),1)):u("",!0)]))}});t.__docgenInfo={exportName:"default",displayName:"BaseInput",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"type",required:!1,type:{name:"string"}},{name:"disabled",required:!1,type:{name:"boolean"}},{name:"error",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/elinatkalenko/Desktop/taskforge/src/ui/BaseInput.vue"]};const C={title:"UI/BaseInput",component:t},a={render:()=>({components:{BaseInput:t},setup(){return{value:g("")}},template:'<BaseInput v-model="value" label="Имя" placeholder="Введите имя" />'})},r={render:()=>({components:{BaseInput:t},setup(){return{value:g("")}},template:'<BaseInput v-model="value" label="Имя" placeholder="Введите имя" error="Обязательное поле" />'})};var m,c,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`<BaseInput v-model="value" label="Имя" placeholder="Введите имя" />\`
  })
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var v,f,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      BaseInput
    },
    setup() {
      const value = ref('');
      return {
        value
      };
    },
    template: \`<BaseInput v-model="value" label="Имя" placeholder="Введите имя" error="Обязательное поле" />\`
  })
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const P=["Default","WithError"];export{a as Default,r as WithError,P as __namedExportsOrder,C as default};
