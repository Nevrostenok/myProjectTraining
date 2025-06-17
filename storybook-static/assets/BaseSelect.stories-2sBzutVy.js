import{d as f,c as t,o as n,e as p,a as y,t as s,F as B,k as S}from"./iframe-DekjyLsg.js";const h={class:"block"},_={key:0,class:"mb-1 block text-sm font-medium text-gray-700"},k=["value"],V={key:0,disabled:"",value:""},q=["value"],C={key:1,class:"mt-1 text-sm text-red-600"},l=f({__name:"BaseSelect",props:{modelValue:{},options:{},label:{},placeholder:{},error:{}},emits:["update:modelValue"],setup(D){return(e,u)=>(n(),t("label",h,[e.label?(n(),t("span",_,s(e.label),1)):p("",!0),y("select",{value:e.modelValue,onChange:u[0]||(u[0]=a=>e.$emit("update:modelValue",a.target.value)),class:"w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring"},[e.placeholder?(n(),t("option",V,s(e.placeholder),1)):p("",!0),(n(!0),t(B,null,S(e.options,a=>(n(),t("option",{key:a.value,value:a.value},s(a.label),9,q))),128))],40,k),e.error?(n(),t("p",C,s(e.error),1)):p("",!0)]))}});l.__docgenInfo={exportName:"default",displayName:"BaseSelect",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"string"}},{name:"options",required:!0,type:{name:"Array",elements:[{name:"{ value: string; label: string }"}]}},{name:"label",required:!1,type:{name:"string"}},{name:"placeholder",required:!1,type:{name:"string"}},{name:"error",required:!1,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["string"]}}],sourceFiles:["/Users/elinatkalenko/Desktop/taskforge/src/ui/BaseSelect.vue"]};const N={title:"Components/BaseSelect",component:l},v=[{value:"apple",label:"Яблоко"},{value:"banana",label:"Банан"},{value:"cherry",label:"Вишня"}],r=()=>({components:{BaseSelect:l},data(){return{selected:""}},template:`
    <BaseSelect
      v-model="selected"
      label="Выберите фрукт"
      :options="options"
      placeholder="Не выбрано"
    />
  `,setup(){return{options:v}}}),o=()=>({components:{BaseSelect:l},data(){return{selected:""}},template:`
    <BaseSelect
      v-model="selected"
      label="Фрукт"
      :options="options"
      error="Это поле обязательно"
    />
  `,setup(){return{options:v}}});var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => ({
  components: {
    BaseSelect
  },
  data() {
    return {
      selected: ''
    };
  },
  template: \`
    <BaseSelect
      v-model="selected"
      label="Выберите фрукт"
      :options="options"
      placeholder="Не выбрано"
    />
  \`,
  setup() {
    return {
      options
    };
  }
})`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,b,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`() => ({
  components: {
    BaseSelect
  },
  data() {
    return {
      selected: ''
    };
  },
  template: \`
    <BaseSelect
      v-model="selected"
      label="Фрукт"
      :options="options"
      error="Это поле обязательно"
    />
  \`,
  setup() {
    return {
      options
    };
  }
})`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const F=["Default","WithError"];export{r as Default,o as WithError,F as __namedExportsOrder,N as default};
