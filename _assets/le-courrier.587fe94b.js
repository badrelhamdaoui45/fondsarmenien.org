import{_ as E}from"./les-medias-menu.vue.90debe61.js";import{_ as D}from"./image.vue.316cf01f.js";import{x as R,b as c,h as _,y as A,s as N,d as O,a as T,w as U,o as d,j as m,k as w,F as b,m as V,f as z,l as h,z as B,t as M}from"./entry.e63a48cf.js";import{f as j}from"./content-helpers.dcdddb83.js";import"./utils.fa833de9.js";function q(o,s,u){const[t={},i]=typeof s=="string"?[{},s]:[s,u],e=t.key||R([i,c(t.baseURL),typeof o=="string"?o:"",c(t.params||t.query)]);if(!e||typeof e!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+e);if(!o)throw new Error("[nuxt] [useFetch] request is missing.");const f=e===i?"$f"+e:e,a=_(()=>{let l=o;return typeof l=="function"&&(l=l()),c(l)});if(!t.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:p,lazy:r,default:k,transform:x,pick:C,watch:y,immediate:F,...L}=t,g=A({...L,cache:typeof t.cache=="boolean"?void 0:t.cache}),$={server:p,lazy:r,default:k,transform:x,pick:C,immediate:F,watch:y===!1?[]:[g,a,...y||[]]};let n;return N(f,()=>{var v;return(v=n==null?void 0:n.abort)==null||v.call(n),n=typeof AbortController<"u"?new AbortController:{},typeof a.value=="string"&&a.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(a.value,{signal:n.signal,...g})},$)}const I=async()=>{const{data:o}=await q("https://d.calameo.com/pinwheel/public/account/book/get?account=2754140&subscription=2763097&output=json","$EfLfYGafM3");return{courriers:_(()=>o.value)}},W=h("div",{class:"text-center my-10"},[h("strong",null,"Cliquez sur l'image"),B(" pour accéder à la version interactive. ")],-1),G={key:0,class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"},H={class:"mx-auto text-center"},K={class:"italic font-bold"},P=["href"],tt=O({__name:"le-courrier",async setup(o){let s,u;T({title:"LE COURRIER"});const{courriers:t}=([s,u]=U(()=>I()),s=await s,u(),s),i=_(()=>{var e;return(e=t.value)==null?void 0:e.content.list.filter(f=>f.name.toLowerCase().includes("courrier"))});return(e,f)=>{const a=E,p=D;return d(),m(b,null,[w(a),W,c(i)?(d(),m("div",G,[(d(!0),m(b,null,V(c(i),r=>(d(),m("div",H,[h("div",K,M(c(j)(r.date)),1),h("a",{href:r.url.read,target:"_blank"},[w(p,{alt:r.name,src:r.image.large,icon:"fa-solid fa-file-lines"},null,8,["alt","src"])],8,P)]))),256))])):z("",!0)],64)}}});export{tt as default};
