import{u as d,_ as u}from"./useFetchAllNews.063e341f.js";import{u as g,_ as f}from"./pagination.vue.2bccee0f.js";import{d as h,a as k,w,o as t,j as o,l as n,F as r,m as x,b as i,k as B,e as P}from"./entry.e63a48cf.js";import"./image.vue.316cf01f.js";import"./content-helpers.dcdddb83.js";import"./utils.fa833de9.js";import"./helpers.44798cb7.js";const y={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"},A={class:"mt-16"},j=h({__name:"index",async setup(C){let e,s;k({title:"LES ACTUS"});const{currentPage:c}=g(),{news:l,totalPages:_}=([e,s]=w(()=>d(c,6)),e=await e,s(),e);return(F,N)=>{const m=u,p=f;return t(),o(r,null,[n("div",y,[(t(!0),o(r,null,x(i(l),a=>(t(),P(m,{key:a.id,item:a},null,8,["item"]))),128))]),n("div",A,[B(p,{"total-pages":i(_)},null,8,["total-pages"])])],64)}}});export{j as default};
