import{d,c as p,a as n,t as m,o as u}from"./iframe-DekjyLsg.js";const i={class:"inline-flex items-center space-x-2 text-sm"},k=["checked"],o=d({__name:"BaseCheckbox",props:{modelValue:{type:Boolean},label:{}},emits:["update:modelValue"],setup(b){return(a,t)=>(u(),p("label",i,[n("input",{type:"checkbox",checked:a.modelValue,onChange:t[0]||(t[0]=c=>a.$emit("update:modelValue",c.target.checked)),class:"h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"},null,40,k),n("span",null,m(a.label),1)]))}});o.__docgenInfo={exportName:"default",displayName:"BaseCheckbox",description:"",tags:{},props:[{name:"modelValue",required:!0,type:{name:"boolean"}},{name:"label",required:!0,type:{name:"string"}}],events:[{name:"update:modelValue",type:{names:["boolean"]}}],sourceFiles:["/Users/elinatkalenko/Desktop/taskforge/src/ui/BaseCheckbox.vue"]};const x={title:"Components/BaseCheckbox",component:o},e=()=>({components:{BaseCheckbox:o},data(){return{checked:!1}},template:`
    <BaseCheckbox
      v-model="checked"
      label="Согласен с условиями"
    />
  `});var s,l,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => ({
  components: {
    BaseCheckbox
  },
  data() {
    return {
      checked: false
    };
  },
  template: \`
    <BaseCheckbox
      v-model="checked"
      label="Согласен с условиями"
    />
  \`
})`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,x as default};
