import{d as w,r as x,o as H,b as h,w as e,e as t,a as d,f as o,u as n,g as r,m as k,i as f}from"./index.47e85a36.js";var _="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",p="M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12",v="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",L="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z";const M=d("h1",null,"This is a testing Page",-1),T={style:{"background-color":"white",color:"blueviolet"}},B={style:{"background-color":"red",color:"black"}},D=w({__name:"TestView",setup(N){let a=x(!1);return(Z,u)=>{const s=t("v-icon"),l=t("v-btn"),c=t("v-col"),m=t("v-row"),C=t("v-alert"),g=t("v-card-text"),V=t("v-card-actions"),b=t("v-card"),y=t("v-dialog"),A=t("v-container");return H(),h(A,null,{default:e(()=>[M,d("span",T,[o(s,{icon:n(_)},null,8,["icon"])]),d("span",B,[o(s,{icon:n(_)},null,8,["icon"])]),o(m,{justify:"space-between",class:"text-center"},{default:e(()=>[o(c,null,{default:e(()=>[o(l,{icon:n(_),color:"primary"},null,8,["icon"])]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:n(v),color:"secondary"},null,8,["icon"])]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:n(p),color:"info"},null,8,["icon"])]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:n(L),color:"success"},null,8,["icon"])]),_:1})]),_:1}),o(m,{justify:"space-between",class:"text-center"},{default:e(()=>[o(c,null,{default:e(()=>[o(l,{icon:"",color:"primary"},{default:e(()=>[o(s,{icon:n(_)},null,8,["icon"])]),_:1})]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:"",color:"secondary"},{default:e(()=>[o(s,{icon:n(v)},null,8,["icon"])]),_:1})]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:"",color:"info"},{default:e(()=>[o(s,{icon:n(p)},null,8,["icon"])]),_:1})]),_:1}),o(c,null,{default:e(()=>[o(l,{icon:"",color:"success"},{default:e(()=>[o(s,{icon:n(L)},null,8,["icon"])]),_:1})]),_:1})]),_:1}),o(C,{type:"success"},{default:e(()=>[r("I'm a success alert.")]),_:1}),o(y,{modelValue:n(a),"onUpdate:modelValue":u[1]||(u[1]=i=>f(a)?a.value=i:a=i),"max-width":"500"},{activator:e(({props:i})=>[o(l,k({color:"primary"},i),{default:e(()=>[r(" Open Dialog ")]),_:2},1040)]),default:e(()=>[o(b,null,{default:e(()=>[o(g,null,{default:e(()=>[r(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]),_:1}),o(V,null,{default:e(()=>[o(l,{color:"primary",block:"",onClick:u[0]||(u[0]=i=>f(a)?a.value=!1:a=!1)},{default:e(()=>[r("Close Dialog")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}});export{D as default};