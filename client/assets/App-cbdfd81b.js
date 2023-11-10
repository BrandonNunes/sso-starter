import{s as G,r as d,j as s,a as r,M as hr,B as xe,b as We,u as zt,c as $t,D as me,d as we,e as gr,f as Pa,g as Ct,h as Ae,i as Ne,k as Hr,N as Kr,C as ka,P as Vt,O as ve,l as Jr,m as Pe,n as yr,o as vr,Z as st,p as Ue,q as ce,I as Ie,t as Xr,T as br,v as Yr,w as La,x as Fa,y as Da,R as xr,z as Cr,A as nt,F as _a,S as Zr,E as te,G as Sr,H as Qr,J as en,V as tn,K as wr,L as St,Q as et,U as an,W as ze,X as ke,Y as De,_ as Er,$ as V,a0 as oe,a1 as Oa,a2 as dt,a3 as wt,a4 as Te,a5 as Et,a6 as rn,a7 as fe,a8 as Fe,a9 as Bt,aa as Mt,ab as Qe,ac as Nr,ad as nn,ae as Aa,af as Rt,ag as ut,ah as Ee,ai as jt,aj as on,ak as qe,al as Pr,am as ln,an as sn,ao as dn,ap as cn,aq as un,ar as pn,as as fn,at as mn,au as hn}from"./index-7cffcf74.js";import{u as kr}from"./storeService-325e002b.js";import{u as Nt}from"./productsService-a4f11891.js";import{u as Lr}from"./groupService-ac41a1ff.js";import{u as Fr}from"./clientsService-2a86ca6d.js";import{u as Dr}from"./plansService-3c238d2c.js";import{R as da}from"./radiobutton.esm-a7b2007b.js";import{u as Or}from"./fornecedorService-a740cee1.js";import{u as gn}from"./transportadorService-0d67e348.js";import{I as Ir}from"./inputtextarea.esm-a186b3b2.js";import{u as yn}from"./contasPagarService-ecf87c9d.js";import{P as vn}from"./PaymentDialog-67fcf84e.js";import{D as bn}from"./divider.esm-73291a01.js";import{u as Ia,E as qt,a as xn,b as Cn}from"./processOrCancelService-8c998701.js";import{C as Sn,D as wn,a as En,b as Nn,m as Ra}from"./utils-260be428.js";import{I as qa}from"./inputmask.esm-a0b42ab9.js";import"./caixasService-88bc5f93.js";import"./CancellationDialog-f0bfaa37.js";import"./finaceiroService-9884a8b3.js";function Pn(){const a=d.useRef(null),n=[{label:"Update",icon:"pi pi-refresh",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}},{label:"Delete",icon:"pi pi-times",command:()=>{}}],e=t=>{a.current!==null&&a.current.toggle(t)};return s("div",{children:[r(hr,{model:n,popup:!0,ref:a}),r(kn,{icon:"pi pi-bars",rounded:!0,text:!0,"aria-label":"Menu",onClick:t=>e(t)})]})}const kn=G(xe)`
  display: none;
  .p-button-icon {
    color: ${a=>a.theme.colors.primary};
  }
`;function Ln({listStoresUser:a,storeUser:n}){const[e,t]=d.useState(n),{setStoreUser:o,setStoreNameUser:l}=We(O=>O),{storeDataUserSelected:i,setDataStoreUserSelected:u,setLogoStore:h}=zt(O=>O),{getOnlyStoreService:g}=kr(),{getDocument:C,document:S,loading:p}=$t();d.useEffect(()=>{setTimeout(()=>{t(Number(n));const O=a.filter(j=>j.loja==n)[0].nome_fantasia;l(O),T(+n)},500)},[n]),d.useEffect(()=>{S&&h(S)},[S]);const m=async O=>{O&&await C(O)},T=O=>{g(O).then(j=>{const M=j.data[0];M&&(u(M),M.guid_logo&&m(M.guid_logo))}).catch(j=>console.warn(j))};return r(me,{value:e,onChange:O=>{o(O.value),t(O.value),sessionStorage.setItem("store",O.value);const j=a.filter(M=>M.loja==O.value)[0].nome_fantasia;l(j),T(O.value)},options:a.map(O=>({...O,labelStore:`${O.loja} - ${O.nome_fantasia.substring(0,22).toUpperCase()}`})),style:{width:"100%"},optionValue:"loja",optionLabel:"labelStore",placeholder:"Selecione uma loja",className:"w-full md:w-14rem",emptyMessage:"Nenhuma loja disponível"})}function Fn({onChangeTheme:a,theme:n,storeUser:e}){var j;d.useState("");const{expandBar:t,changeBar:o}=we(M=>M),l=gr(),[i,u]=d.useState([]),{getAllStoresByUserService:h}=Pa(),{setStoreUser:g,tokenSignature:C}=We(M=>M),{getDataUser:S}=Ct(),{getAllDataPermissions:p}=Ae(),{openNotification:m}=Ne(),T=()=>{var M;h((M=S())==null?void 0:M.guid).then(J=>{const R=J==null?void 0:J.data;R&&(u(R),O(R),setTimeout(()=>{R.length===0&&m("info","USUÁRIO SEM LOJA ATRIBUÍDA","Sem ter uma loja definida pode afetar o funcionamento correto do sistema, favor consultar o administrador para solucionar este problema",1e4)},2e3))}).catch(J=>console.warn(J))},O=M=>{var J,R;e||(g((J=M[0])==null?void 0:J.loja),sessionStorage.setItem("store",String((R=M[0])==null?void 0:R.loja)))};return d.useEffect(()=>{setTimeout(()=>{C&&!i.length&&T()},1e3)},[C]),d.useLayoutEffect(()=>{C&&p()},[(j=S())==null?void 0:j.id,C]),s(Dn,{children:[r(In,{expandbar:t,onClick:()=>l("/"),children:r(Hr,{color:n.colors.primary})}),r(On,{onClick:o,children:t?r("i",{className:"pi pi-angle-left",style:{fontSize:"10px"}}):r("i",{className:"pi pi-angle-right",style:{fontSize:"10px"}})}),r(Pn,{}),!1,r(Tn,{children:i.length&&e?r(Ln,{listStoresUser:i,storeUser:e}):""})]})}const Dn=G.header`
  width: 100vw;
  height: 80px;
  position: relative;
  background-color: ${a=>a.theme.colors.backgroundColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  //margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media (min-width: 1024px) and (max-width: 1366px) {
    height: 55px;
  }
`,On=G.button`
  background-color: ${a=>a.theme.colors.backgroundColor};
  cursor: pointer;
  //padding: 4px;
  width: 24px;
  height: 24px;
  box-shadow: 0px 4px 4px ${a=>a.theme.colors.secondary}; // rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  i {
    color: ${a=>a.theme.colors.textColor};
  }
`,In=G.div`
  cursor: pointer;
  display: flex;
  padding-left: 30px;
  transition: 0.5s;
  width: ${a=>a.expandbar?"150px":"70px"};
  padding-right: ${a=>a.expandbar?"30px":"5px"};
  overflow: hidden;
  @media (min-width: 1024px) and (max-width: 1366px) {
    max-height: 40px;
  }
`,Tn=G.div`
  position: absolute;
  right: 10px;
  min-width: 150px;
  // width: 200px;
  padding-right: 15px;
`;function _n(){var u,h;const a=gr();Ne();const{getDataUser:n,logoutUser:e}=Ct(),{adminMode:t,changeMode:o}=we(),l=[{label:((u=n())==null?void 0:u.nome)||"Opções",items:[{label:"Perfil",icon:"pi pi-user",command:()=>a("/perfil")},{label:t?"Modo Usuário":"Modo Adminstrador",icon:"pi pi-key",command:()=>o(),visible:(h=n())==null?void 0:h.super_usuario},{label:"Sair",icon:"pi pi-sign-out",command:()=>{e()}}]}];return{items:[{name:"Início",icon:"pi pi-home",route:"/"},{name:"Cadastro",icon:"pi pi-folder",route:"cadastros"},{name:"Movimentações",icon:"pi pi-arrow-right-arrow-left",route:"movimentacoes"},{name:"Financeiro",icon:"pi pi-dollar",route:"financeiro"},{name:"Fiscal",icon:"pi pi-file",route:"fiscal"},{name:"Relatórios",icon:"pi pi-chart-line",route:"relatorios"}],options:l}}const An=G.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${a=>a.expandBar?"11rem":"5rem"};
  height: calc(100vh - 82px);
  background-color: ${a=>a.theme.colors.backgroundColor};
  padding-top: 1rem;
  padding-left: ${a=>a.expandBar?"15px":"20px"};
  padding-right: ${a=>a.expandBar?"15px":"30px"};
  padding-bottom: 1rem;
  gap: 0.8rem;
  transition: 0.5s;
  position: relative;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding-top: 1rem;
    width: ${a=>a.expandBar?"9rem":"5rem"};
  }
  .active {
    background-color: ${a=>a.theme.colors.primary};
    color: #fff;
    i {
      color: #fff;
    }
  }
`,ca=G.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${a=>a.theme.colors.textColor}; //var(--cor-tema);
  font-size: 0.8rem;
  cursor: pointer;
  padding: ${a=>a.expandBar?"1rem 0.8rem":"1rem 0.4rem"};
  transition: 0.2s;
  border-radius: 8px;
  text-decoration: none;
  i {
    color: #c4c4c4;
  }
  &:hover {
    background-color: ${a=>a.theme.colors.primary};
    opacity: 70%;
    color: #fff;
    i {
      color: #fff;
    }
  }
  //@media (min-width: 1024px) and (max-width: 1366px) {
  //  padding: 0.5rem 0.3rem;
  //  gap: 0.3rem;
  //  font-size: 0.7rem;
  //}
  @media (max-width: 1366px) {
    padding: ${a=>a.expandBar?"0.5rem 0.5rem":"0.5rem 0.4rem"};
    font-size: 0.7rem;
    gap: 0.3rem;
  }
`,Rn=G(Kr)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  color: ${a=>a.theme.colors.textColor}; //var(--cor-tema);
  font-size: 0.8rem;
  cursor: pointer;
  padding: ${a=>a.expandBar?"1rem 0.8rem":"1rem 0.4rem"};
  transition: 0.2s;
  border-radius: 8px;
  text-decoration: none;
  i {
    color: #c4c4c4;
  }
  &:hover {
    background-color: ${a=>a.theme.colors.primary};
    opacity: 70%;
    color: #fff;
    i {
      color: #fff;
    }
  }
  @media (max-width: 1366px) {
    padding: ${a=>a.expandBar?"0.5rem 0.5rem":"0.5rem 0.4rem"};
    font-size: 0.7rem;
    gap: 0.3rem;
  }
`,qn=G.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (min-width: 1366px) {
    gap: 2px;
  }
`,zn=G.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${a=>a.theme.colors.backgroundColor};
  padding-top: 0.8rem;
  gap: 3px;
`,$n=G.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  justify-content: space-between;
  & img {
    border-radius: 50%;
  }
`,Vn=G.p`
  color: ${a=>a.theme.colors.textColor};
  font-size: 0.6rem;
  font-weight: bold;
  // max-width: 70px;
  word-wrap: break-word;
`,Bn="https://img2.gratispng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg";function Mn(){var M,J,R;const{expandBar:a}=we(_=>_),{getDataUser:n,logoutUser:e}=Ct(),t=d.useRef(null),{formChangePass:o,openChangePass:l}=we(),{openNotification:i}=Ne(),{items:u,options:h}=_n(),[g,C]=d.useState(Bn),{tokenSignature:S}=We(_=>_),{getDocument:p,guidDocument:m,getGuidDocument:T}=$t(),O=async _=>{const P=await p(_);P?C(P[0].documento):console.log("falha ao obter foto")};d.useEffect(()=>{var _,P;(_=n())!=null&&_.guid&&S&&T((P=n())==null?void 0:P.guid,"USUARIO",1)},[(M=n())==null?void 0:M.guid,S]),d.useEffect(()=>{m&&O(m)},[m]),window.addEventListener("changePhotoProfile",_=>{C(_.detail)});const j=()=>{var P;((P=n())==null?void 0:P.alterar_senha_proximo_logon)&&!l&&(console.log(l),setTimeout(()=>{o()},500))};return d.useEffect(()=>{j()},[l]),s(An,{expandBar:a,children:[r(qn,{children:u.map(_=>_.command?s(ca,{expandBar:a,onClick:_.command,children:[r("i",{className:_.icon}),a?r("span",{children:_.name}):""]},_.name):s(Rn,{to:_.route||"",expandBar:a,children:[r("i",{className:_.icon}),a?r("span",{children:_.name}):""]},_.name))}),s(zn,{children:[s(ca,{expandBar:a,children:[r("i",{className:"pi pi-cog"}),a?r("span",{onClick:()=>i("info","Oops","Serviço indisponível"),children:"Configurações"}):""]}),s(ca,{expandBar:a,children:[r("i",{className:"pi pi-question-circle"}),a?r("span",{onClick:()=>i("info","Oops","Serviço indisponível"),children:"Ajuda"}):""]}),s($n,{onClick:_=>{t.current!=null&&t.current.toggle(_)},title:(J=n())==null?void 0:J.nome,children:[r("img",{width:"28px",src:g,alt:"foto usuário"}),r(hr,{model:h,popup:!0,ref:t}),a&&r(Vn,{children:(R=n())==null?void 0:R.nome.substring(0,20)}),r("i",{className:"pi pi-ellipsis-v",style:{color:"var(--cor-tema)",fontSize:"12px"}})]})]})]})}const jn=G.main`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${a=>a.theme.colors.backgroundColor};
`,Un=G.div`
  min-width: 100%;
  min-height: 100vh;
  background-color: ${a=>a.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 2px;
  box-sizing: border-box;
`,Wn=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Gn=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 20px;
`;G.label`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  width: 100%;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid ${a=>a.theme.colors.primary};
  }
`;G.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 50%;
`;const mt=G.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  line-height: 5px;
  flex-wrap: wrap;

  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: ${a=>a.theme.colors.primary};
    background: ${a=>a.theme.colors.primary};
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
    }
    label {
      font-size: 12px;
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .p-calendar .p-button {
    background: ${a=>a.theme.colors.primary} !important;
  }
  .container-numero {
    display: flex;
    gap: 15px;
    flex: 1;
  }

  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`,za=G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`,ct=[{title:"Acre",id:"AC"},{title:"Alagoas",id:"AL"},{title:"Amapá",id:"AP"},{title:"Amazonas",id:"AM"},{title:"Bahia",id:"BA"},{title:"Ceará",id:"CE"},{title:"Distrito Federal",id:"DF"},{title:"Espírito Santo",id:"ES"},{title:"Goiás",id:"GO"},{title:"Maranhão",id:"MA"},{title:"Mato Grosso",id:"MT"},{title:"Mato Grosso do Sul",id:"MS"},{title:"Minas Gerais",id:"MG"},{title:"Paraná",id:"PR"},{title:"Paraíba",id:"PB"},{title:"Pará",id:"PA"},{title:"Pernambuco",id:"PE"},{title:"Piauí",id:"PI"},{title:"Rio Grande do Norte",id:"RN"},{title:"Rio Grande do Sul",id:"RS"},{title:"Rio de Janeiro",id:"RJ"},{title:"Rondônia",id:"RO"},{title:"Roraima",id:"RR"},{title:"Santa Catarina",id:"SC"},{title:"Sergipe",id:"SE"},{title:"São Paulo",id:"SP"},{title:"Tocantins",id:"TO"}];function Ze(){return Ze=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},Ze.apply(this,arguments)}function bt(a){"@babel/helpers - typeof";return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},bt(a)}function Hn(a,n){if(bt(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(bt(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Kn(a){var n=Hn(a,"string");return bt(n)==="symbol"?n:String(n)}function pt(a,n,e){return n=Kn(n),n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function xa(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function Jn(a){if(Array.isArray(a))return xa(a)}function Xn(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Tr(a,n){if(a){if(typeof a=="string")return xa(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return xa(a,n)}}function Yn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ua(a){return Jn(a)||Xn(a)||Tr(a)||Yn()}function Zn(a){if(Array.isArray(a))return a}function Qn(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function eo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yt(a,n){return Zn(a)||Qn(a,n)||Tr(a,n)||eo()}var It=ka.extend({defaultProps:{__TYPE:"MultiSelect",appendTo:null,ariaLabelledBy:null,className:null,closeIcon:null,checkboxIcon:null,dataKey:null,disabled:!1,display:"comma",dropdownIcon:null,emptyFilterMessage:null,filter:!1,filterBy:null,filterInputAutoFocus:!0,filterLocale:void 0,filterMatchMode:"contains",filterPlaceholder:null,filterTemplate:null,fixedPlaceholder:!1,flex:!1,id:null,itemCheckboxIcon:null,inline:!1,inputId:null,inputRef:null,itemClassName:null,itemTemplate:null,maxSelectedLabels:null,name:null,onClick:null,onBlur:null,onChange:null,onFilter:null,onFocus:null,onHide:null,onSelectAll:null,onShow:null,optionDisabled:null,optionGroupChildren:null,optionGroupLabel:null,optionGroupTemplate:null,optionLabel:null,optionValue:null,options:null,overlayVisible:!1,panelClassName:null,panelFooterTemplate:null,panelHeaderTemplate:null,panelStyle:null,placeholder:null,removeIcon:null,resetFilterOnHide:!1,scrollHeight:"200px",selectAll:!1,selectedItemTemplate:null,selectedItemsLabel:"{0} items selected",selectionLimit:null,showClear:!1,showSelectAll:!0,style:null,tabIndex:0,tooltip:null,tooltipOptions:null,transitionOptions:null,useOptionAsValue:!1,value:null,virtualScrollerOptions:null,children:void 0}}),pa=ka.extend({defaultProps:{__TYPE:"Checkbox",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,icon:null,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,onContextMenu:null,onMouseDown:null,readOnly:!1,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,value:null,children:void 0}});function $a(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Va(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?$a(Object(e),!0).forEach(function(t){pt(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):$a(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var _r=d.memo(d.forwardRef(function(a,n){var e=d.useContext(Vt),t=pa.getProps(a,e),o=d.useState(!1),l=yt(o,2),i=l[0],u=l[1],h=pa.setMetaData({props:t,state:{focused:i}}),g=h.ptm,C=d.useRef(null),S=d.useRef(t.inputRef),p=function(X){if(!(t.disabled||t.readOnly)&&(t.onChange||t.onClick)){var I=j(),k=X.target instanceof HTMLDivElement||X.target instanceof HTMLSpanElement||X.target instanceof Object,x=X.target===S.current,L=k&&X.target.checked!==I;if(x||L){var b=I?t.falseValue:t.trueValue,F={originalEvent:X,value:t.value,checked:b,stopPropagation:function(){X.stopPropagation()},preventDefault:function(){X.preventDefault()},target:{type:"checkbox",name:t.name,id:t.id,value:t.value,checked:b}};if(t.onClick&&t.onClick(F),X.defaultPrevented)return;t.onChange&&t.onChange(F)}Pe.focus(S.current),X.preventDefault()}},m=function(){u(!0)},T=function(){u(!1)},O=function(X){(X.code==="Space"||X.key===" ")&&p(X)},j=function(){return t.checked===t.trueValue};d.useImperativeHandle(n,function(){return{props:t,focus:function(){return Pe.focus(S.current)},getElement:function(){return C.current},getInput:function(){return S.current}}}),d.useEffect(function(){ve.combinedRefs(S,t.inputRef)},[S,t.inputRef]),yr(function(){S.current.checked=j()},[t.checked,t.trueValue]),Yr(function(){t.autoFocus&&Pe.focus(S.current,t.autoFocus)});var M=j(),J=ve.isNotEmpty(t.tooltip),R=pa.getOtherProps(t),_=ve.reduceKeys(R,Pe.ARIA_PROPS),P=Ue("p-checkbox p-component",{"p-checkbox-checked":M,"p-checkbox-disabled":t.disabled,"p-checkbox-focused":i},t.className),D=Ue("p-checkbox-box",{"p-highlight":M,"p-disabled":t.disabled,"p-focus":i}),B="p-checkbox-icon p-c",q=ce({className:B},g("icon")),A=M?t.icon||d.createElement(La,q):null,N=Ie.getJSXIcon(A,Va({},q),{props:t,checked:M}),z=ce({ref:C,id:t.id,className:P,style:t.style,onClick:function(X){return p(X)},onContextMenu:t.onContextMenu,onMouseDown:t.onMouseDown},R,g("root")),Q=ce({className:"p-hidden-accessible"},g("hiddenInputWrapper")),K=ce(Va({id:t.inputId,ref:S,type:"checkbox",name:t.name,tabIndex:t.tabIndex,defaultChecked:M,onFocus:function(X){return m()},onBlur:function(X){return T()},onKeyDown:function(X){return O(X)},disabled:t.disabled,readOnly:t.readOnly,required:t.required},_),g("hiddenInput")),ie=ce({className:D},g("input"));return d.createElement(d.Fragment,null,d.createElement("div",z,d.createElement("div",Q,d.createElement("input",K)),d.createElement("div",ie,N)),J&&d.createElement(br,Ze({target:C,content:t.tooltip},t.tooltipOptions,{pt:g("tooltip")})))}));_r.displayName="Checkbox";function Ba(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function fa(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ba(Object(e),!0).forEach(function(t){pt(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Ba(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Ar=d.memo(function(a){var n={filter:function(R){return e(R)},reset:function(){return a.resetFilter()}},e=function(R){a.onFilter&&a.onFilter({originalEvent:R,query:R.target.value})},t=function(R){a.onSelectAll&&a.onSelectAll({originalEvent:R,checked:a.selectAll}),R.preventDefault()},o=function(){var R="p-multiselect-filter-icon",_=ce({className:R},a.ptm("filterIcon")),P=a.filterIcon||d.createElement(Zr,_),D=Ie.getJSXIcon(P,fa({},_),{props:a});if(a.filter){var B=Ue("p-multiselect-filter-container"),q=ce({className:B},a.ptm("filterContainer")),A=d.createElement("div",q,d.createElement(te,{ref:a.filterRef,type:"text",role:"textbox",value:a.filterValue,onChange:e,className:"p-multiselect-filter",placeholder:a.filterPlaceholder,pt:a.ptm("filterInput")}),D);if(a.filterTemplate){var N={className:B,element:A,filterOptions:n,onFilter:e,filterIconClassName:R,props:a};A=ve.getJSXElement(a.filterTemplate,N)}return d.createElement(d.Fragment,null,A)}return null},l=o(),i=ce({className:"p-checkbox-icon p-c"},a.ptm("headerCheckbox")),u=a.itemCheckboxIcon||d.createElement(La,i),h=Ie.getJSXIcon(u,fa({},i),{selected:a.selected}),g=a.showSelectAll?d.createElement(_r,{checked:a.selectAll,onChange:t,role:"checkbox","aria-checked":a.selectAll,icon:h}):null,C=ce({className:"p-multiselect-close-icon","aria-hidden":!0},a.ptm("closeIcon")),S=a.closeIcon||d.createElement(Fa,C),p=Ie.getJSXIcon(S,fa({},C),{props:a}),m=ce({className:"p-multiselect-header"},a.ptm("header")),T=ce({type:"button",className:"p-multiselect-close p-link","aria-label":Da("close"),onClick:a.onClose},a.ptm("closeButton")),O=d.createElement("button",T,p,d.createElement(xr,null)),j=d.createElement("div",m,g,l,O);if(a.template){var M={className:"p-multiselect-header",checkboxElement:g,checked:a.selectAll,onChange:t,filterElement:l,closeElement:O,closeElementClassName:"p-multiselect-close p-link",closeIconClassName:"p-multiselect-close-icon",onCloseClick:a.onClose,element:j,itemCheckboxIcon:h,props:a};return ve.getJSXElement(a.template,M)}return j});Ar.displayName="MultiSelectHeader";function Ma(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function to(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ma(Object(e),!0).forEach(function(t){pt(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Ma(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Ca=d.memo(function(a){var n=function(O){return a.ptm(O,{context:{selected:a.selected}})},e=function(O){a.onClick&&a.onClick({originalEvent:O,option:a.option}),O.preventDefault()},t=function(O){a.onKeyDown&&a.onKeyDown({originalEvent:O,option:a.option})},o=Ue("p-multiselect-item",{"p-highlight":a.selected,"p-disabled":a.disabled},a.className,a.option.className),l=Ue("p-checkbox-box",{"p-highlight":a.selected}),i=ce({className:"p-checkbox-icon p-c"},n("checkboxIcon")),u=a.checkboxIcon||d.createElement(La,i),h=a.selected?Ie.getJSXIcon(u,to({},i),{selected:a.selected}):null,g=a.template?ve.getJSXElement(a.template,a.option):a.label,C=a.disabled?null:a.tabIndex||0,S=ce({className:"p-checkbox p-component"},n("checkboxContainer")),p=ce({className:l},n("checkbox")),m=ce({className:o,style:a.style,onClick:e,tabIndex:C,onKeyDown:t,role:"option","aria-selected":a.selected},n("item"));return d.createElement("li",m,d.createElement("div",S,d.createElement("div",p,h)),d.createElement("span",null,g),d.createElement(xr,null))});Ca.displayName="MultiSelectItem";function ja(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function it(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?ja(Object(e),!0).forEach(function(t){pt(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):ja(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Rr=d.memo(d.forwardRef(function(a,n){var e=d.useRef(null),t=d.useRef(null),o=d.useContext(Vt),l=function(){a.onEnter(function(){if(e.current){var R=a.getSelectedOptionIndex();R!==-1&&setTimeout(function(){return e.current.scrollToIndex(R)},0)}})},i=function(){a.onEntered(function(){a.filter&&a.filterInputAutoFocus&&t.current&&Pe.focus(t.current,!1)})},u=function(R){e.current&&e.current.scrollToIndex(0),a.onFilterInputChange&&a.onFilterInputChange(R)},h=function(){return!(a.visibleOptions&&a.visibleOptions.length)&&a.hasFilter},g=function(){return d.createElement(Ar,{filter:a.filter,filterRef:t,filterValue:a.filterValue,filterTemplate:a.filterTemplate,onFilter:u,filterPlaceholder:a.filterPlaceholder,onClose:a.onCloseClick,showSelectAll:a.showSelectAll,selectAll:a.isAllSelected(),onSelectAll:a.onSelectAll,template:a.panelHeaderTemplate,resetFilter:a.resetFilter,closeIcon:a.closeIcon,filterIcon:a.filterIcon,itemCheckboxIcon:a.itemCheckboxIcon,ptm:a.ptm})},C=function(){if(a.panelFooterTemplate){var R=ve.getJSXElement(a.panelFooterTemplate,a,a.onOverlayHide);return d.createElement("div",{className:"p-multiselect-footer"},R)}return null},S=function(R,_){var P=a.getOptionGroupChildren(R);return P.map(function(D,B){var q=a.getOptionLabel(D),A=B+"_"+a.getOptionRenderKey(D),N=a.isOptionDisabled(D),z=N?null:a.tabIndex||0,Q=a.isSelected(D);return d.createElement(Ca,{key:A,label:q,option:D,style:_,template:a.itemTemplate,selected:Q,onClick:a.onOptionSelect,onKeyDown:a.onOptionKeyDown,tabIndex:z,disabled:N,className:a.itemClassName,checkboxIcon:a.checkboxIcon,ptm:a.ptm})})},p=function(){var R=ve.getJSXElement(a.emptyFilterMessage,a)||Da("emptyFilterMessage"),_=ce({className:"p-multiselect-empty-message"},a.ptm("emptyMessage"));return d.createElement("li",_,R)},m=function(R,_){var P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},D={height:P.props?P.props.itemSize:void 0};if(a.optionGroupLabel){var B=a.optionGroupTemplate?ve.getJSXElement(a.optionGroupTemplate,R,_):a.getOptionGroupLabel(R),q=S(R,D),A=_+"_"+a.getOptionGroupRenderKey(R),N=ce({className:"p-multiselect-item-group",style:D},a.ptm("itemGroup"));return d.createElement(d.Fragment,{key:A},d.createElement("li",N,B),q)}else{var z=a.getOptionLabel(R),Q=_+"_"+a.getOptionRenderKey(R),K=a.isOptionDisabled(R),ie=K?null:a.tabIndex||0,W=a.isSelected(R);return d.createElement(Ca,{key:Q,label:z,option:R,style:D,template:a.itemTemplate,selected:W,onClick:a.onOptionSelect,onKeyDown:a.onOptionKeyDown,tabIndex:ie,disabled:K,className:a.itemClassName,checkboxIcon:a.checkboxIcon,ptm:a.ptm})}},T=function(){return ve.isNotEmpty(a.visibleOptions)?a.visibleOptions.map(m):a.hasFilter?p():null},O=function(){if(a.virtualScrollerOptions){var R=it(it({},a.virtualScrollerOptions),{style:it(it({},a.virtualScrollerOptions.style),{height:a.scrollHeight}),className:Ue("p-multiselect-items-wrapper",a.virtualScrollerOptions.className),items:a.visibleOptions,autoSize:!0,onLazyLoad:function(q){return a.virtualScrollerOptions.onLazyLoad(it(it({},q),{filter:a.filterValue}))},itemTemplate:function(q,A){return q&&m(q,A.index,A)},contentTemplate:function(q){var A=Ue("p-multiselect-items p-component",q.className),N=h()?p():q.children,z=ce({ref:q.contentRef,style:q.style,className:A,role:"listbox","aria-multiselectable":!0},a.ptm("list"));return d.createElement("ul",z,N)}});return d.createElement(tn,Ze({ref:e},R,{pt:a.ptm("virtualScroller")}))}else{var _=T(),P=ce({className:"p-multiselect-items-wrapper",style:{maxHeight:a.scrollHeight}},a.ptm("wrapper")),D=ce({className:"p-multiselect-items p-component",role:"listbox","aria-multiselectable":!0},a.ptm("list"));return d.createElement("div",P,d.createElement("ul",D,_))}},j=function(){var R=a.allowOptionSelect(),_=Ue("p-multiselect-panel p-component",{"p-multiselect-inline":a.inline,"p-multiselect-flex":a.flex,"p-multiselect-limited":!R,"p-input-filled":o&&o.inputStyle==="filled"||nt.inputStyle==="filled","p-ripple-disabled":o&&o.ripple===!1||nt.ripple===!1},a.panelClassName),P=g(),D=O(),B=C(),q=ce({ref:n,className:_,style:a.panelStyle,onClick:a.onClick},a.ptm("panel"));return a.inline?d.createElement("div",q,D,B):d.createElement(Sr,{nodeRef:n,classNames:"p-connected-overlay",in:a.in,timeout:{enter:120,exit:100},options:a.transitionOptions,unmountOnExit:!0,onEnter:l,onEntered:i,onExit:a.onExit,onExited:a.onExited},d.createElement("div",q,P,D,B))},M=j();return a.inline?M:d.createElement(Cr,{element:M,appendTo:a.appendTo})}));Rr.displayName="MultiSelectPanel";function Ua(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function Ye(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Ua(Object(e),!0).forEach(function(t){pt(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):Ua(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}function ma(a,n){var e=typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(!e){if(Array.isArray(a)||(e=ao(a))||n&&a&&typeof a.length=="number"){e&&(a=e);var t=0,o=function(){};return{s:o,n:function(){return t>=a.length?{done:!0}:{done:!1,value:a[t++]}},e:function(g){throw g},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l=!0,i=!1,u;return{s:function(){e=e.call(a)},n:function(){var g=e.next();return l=g.done,g},e:function(g){i=!0,u=g},f:function(){try{!l&&e.return!=null&&e.return()}finally{if(i)throw u}}}}function ao(a,n){if(a){if(typeof a=="string")return Wa(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Wa(a,n)}}function Wa(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}var qr=d.memo(d.forwardRef(function(a,n){var e=d.useContext(Vt),t=It.getProps(a,e),o=d.useState(""),l=yt(o,2),i=l[0],u=l[1],h=d.useState(!1),g=yt(h,2),C=g[0],S=g[1],p=d.useState(t.inline),m=yt(p,2),T=m[0],O=m[1],j=d.useRef(null),M=d.useRef(t.inputRef),J=d.useRef(null),R=d.useRef(null),_=i&&i.trim().length>0,P=ve.isEmpty(t.value),D=t.optionValue?null:t.dataKey,B=It.setMetaData({props:t,state:{filterState:i,focused:C,overlayVisible:T}}),q=B.ptm,A=Jr({target:j,overlay:R,listener:function(U,ae){var pe=ae.type,he=ae.valid;he&&(pe==="outside"?!Y(U)&&E():E())},when:T}),N=yt(A,2),z=N[0],Q=N[1],K=function(U){Qr.emit("overlay-click",{originalEvent:U,target:j.current})},ie=function(){return!t.selectionLimit||!t.value||t.value&&t.value.length<t.selectionLimit},W=function(U){var ae=U.originalEvent,pe=U.option;if(!(t.disabled||He(pe))){var he=ne(pe),Se=Lt(pe),_e=Re(pe),Le=ie();_e?F(ae,t.value.filter(function(ot){return!ve.equals(Se?ot:ne(ot),he,D)}),pe):Le&&F(ae,[].concat(ua(t.value||[]),[he]),pe)}},X=function(U){var ae=U.originalEvent,pe=ae.currentTarget;switch(ae.which){case 40:var he=I(pe);he&&he.focus(),ae.preventDefault();break;case 38:var Se=k(pe);Se&&Se.focus(),ae.preventDefault();break;case 13:case 32:W(U),ae.preventDefault();break;case 27:E(),Pe.focus(M.current);break}},I=function de(U){var ae=U.nextElementSibling;return ae?Pe.hasClass(ae,"p-disabled")||Pe.hasClass(ae,"p-multiselect-item-group")?de(ae):ae:null},k=function de(U){var ae=U.previousElementSibling;return ae?Pe.hasClass(ae,"p-disabled")||Pe.hasClass(ae,"p-multiselect-item-group")?de(ae):ae:null},x=function(U){!t.inline&&!t.disabled&&!se(U)&&!Pe.hasClass(U.target,"p-multiselect-token-icon")&&!Y(U)&&(T?E():f(),Pe.focus(M.current),U.preventDefault())},L=function(U){switch(U.which){case 40:if(t.inline)break;!T&&U.altKey&&(f(),U.preventDefault());break;case 32:if(t.inline)break;T?E():f(),U.preventDefault();break;case 27:if(t.inline)break;E();break;case 9:if(T){var ae=Pe.getFirstFocusableElement(R.current);ae&&(ae.focus(),U.preventDefault())}break}},b=function(U){if(t.onSelectAll)t.onSelectAll(U);else{var ae=null;if(U.checked){if(ae=[],Ke){var pe=Ke.filter(function(Se){return He(Se)&&Re(Se)});ae=pe.map(function(Se){return ne(Se)})}}else if(Ke){var he=Ke.filter(function(Se){return!He(Se)});t.optionGroupLabel?(ae=[],he.forEach(function(Se){return ae=[].concat(ua(ae),ua(Ge(Se).filter(function(_e){return!He(_e)}).map(function(_e){return ne(_e)})))})):ae=he.map(function(Se){return ne(Se)})}F(U.originalEvent,ae,ae)}},F=function(U,ae,pe){t.onChange&&t.onChange({originalEvent:U,value:ae,selectedOption:pe,stopPropagation:function(){U.stopPropagation()},preventDefault:function(){U.preventDefault()},target:{name:t.name,id:t.id,value:ae}})},c=function(U){var ae=U.query;u(ae),t.onFilter&&t.onFilter({originalEvent:U,filter:ae})},y=function(){u(""),t.onFilter&&t.onFilter({filter:""})},v=function(){var U=Pe.findSingle(R.current,"li.p-highlight");U&&U.scrollIntoView&&U.scrollIntoView({block:"nearest",inline:"nearest"})},f=function(){O(!0)},E=function(){O(!1)},w=function(U){st.set("overlay",R.current,e&&e.autoZIndex||nt.autoZIndex,e&&e.zIndex.overlay||nt.zIndex.overlay),H(),v(),U&&U()},$=function(U){U&&U(),z(),t.onShow&&t.onShow()},ee=function(){Q()},le=function(){t.filter&&t.resetFilterOnHide&&y(),st.clear(R.current),t.onHide&&t.onHide()},H=function(){Pe.alignOverlay(R.current,J.current.parentElement,t.appendTo||e&&e.appendTo||nt.appendTo)},Y=function(U){return Pe.hasClass(U.target,"p-multiselect-clear-icon")},se=function(U){return R.current&&R.current.contains(U.target)},Z=function(U){E(),Pe.focus(M.current),U.preventDefault(),U.stopPropagation()},Ce=function(){if(t.value!=null&&t.options)if(t.optionGroupLabel){var U=0,ae=t.options.findIndex(function(pe,he){return(U=he)&&Oe(t.value,Ge(pe))!==-1});return ae!==-1?{group:U,option:ae}:-1}else return Oe(t.value,t.options);return-1},Oe=function(U,ae){return ae.findIndex(function(pe){return U.some(function(he){return ve.equals(he,ne(pe),D)})})},Re=function(U){if(t.value){var ae=ne(U),pe=Lt(U);return t.value.some(function(he){return ve.equals(pe?he:ne(he),ae,D)})}return!1},Xe=function(U){var ae;if(t.options)if(t.optionGroupLabel){var pe=ma(t.options),he;try{for(pe.s();!(he=pe.n()).done;){var Se=he.value;if(ae=ft(U,Ge(Se)),ae)break}}catch(_e){pe.e(_e)}finally{pe.f()}}else ae=ft(U,t.options);return ae?ye(ae):null},ft=function(U,ae){return ae.find(function(pe){return ve.equals(ne(pe),U,D)})},kt=function(U){S(!0),t.onFocus&&t.onFocus(U)},ue=function(U){S(!1),t.onBlur&&t.onBlur(U)},re=function(){if(t.onSelectAll)return t.selectAll;if(ve.isEmpty(Ke))return!1;var U=Ke.filter(function(Le){return!He(Le)});if(t.optionGroupLabel){var ae=!0,pe=ma(U),he;try{for(pe.s();!(he=pe.n()).done;){var Se=he.value,_e=Ge(Se).filter(function(Le){return!He(Le)});_e.some(function(Le){return!Re(Le)})===!0&&(ae=!1)}}catch(Le){pe.e(Le)}finally{pe.f()}return ae}else return!U.some(function(Le){return!Re(Le)})},ye=function(U){return t.optionLabel?ve.resolveFieldData(U,t.optionLabel):U&&U.label!==void 0?U.label:U},ne=function(U){if(t.useOptionAsValue)return U;if(t.optionValue){var ae=ve.resolveFieldData(U,t.optionValue);return ae!==null?ae:U}return U&&U.value!==void 0?U.value:U},ge=function(U){return t.dataKey?ve.resolveFieldData(U,t.dataKey):ye(U)},be=function(U){return ve.resolveFieldData(U,t.optionGroupLabel)},tt=function(U){return ve.resolveFieldData(U,t.optionGroupLabel)},Ge=function(U){return ve.resolveFieldData(U,t.optionGroupChildren)},He=function(U){return t.optionDisabled?ve.isFunction(t.optionDisabled)?t.optionDisabled(U):ve.resolveFieldData(U,t.optionDisabled):U&&U.disabled!==void 0?U.disabled:!1},Lt=function(U){return!t.useOptionAsValue&&t.optionValue||U&&U.value!==void 0},Gt=function(U,ae){var pe=t.value.filter(function(he){return!ve.equals(he,ae,D)});F(U,pe,ae)},Ft=function(){var U=/{(.*?)}/;return U.test(t.selectedItemsLabel)?t.selectedItemsLabel.replace(t.selectedItemsLabel.match(U)[0],t.value.length+""):t.selectedItemsLabel},Ht=function(){var U;return!P&&!t.fixedPlaceholder?ve.isNotEmpty(t.maxSelectedLabels)&&t.value.length>t.maxSelectedLabels?Ft():t.value.reduce(function(ae,pe,he){return ae+(he!==0?",":"")+Xe(pe)},""):U},Kt=function(){if(t.selectedItemTemplate)return P?ve.getJSXElement(t.selectedItemTemplate):ve.isNotEmpty(t.maxSelectedLabels)&&t.value.length>t.maxSelectedLabels?Ft():t.value.map(function(ae,pe){var he=ve.getJSXElement(t.selectedItemTemplate,ae);return d.createElement(d.Fragment,{key:pe},he)});if(t.display==="chip"&&!P){var U=t.value.slice(0,t.maxSelectedLabels||t.value.length);return U.map(function(ae,pe){var he=Xe(ae),Se=ce({key:pe,className:"p-multiselect-token-icon",onClick:function(Gr){return Gt(Gr,ae)}},q("removeTokenIcon")),_e=!t.disabled&&(t.removeIcon?Ie.getJSXIcon(t.removeIcon,Ye({},Se),{props:t}):d.createElement(en,Se)),Le=ce({className:"p-multiselect-token"},q("token")),ot=ce({key:he+pe,className:"p-multiselect-token-label"},q("tokenLabel"));return d.createElement("div",Ze({},Le,{key:he}),d.createElement("span",ot,he),_e)})}return Ht()},Jt=function(){if(_){var U=i.trim().toLocaleLowerCase(t.filterLocale),ae=t.filterBy?t.filterBy.split(","):[t.optionLabel||"label"];if(t.optionGroupLabel){var pe=[],he=ma(t.options),Se;try{for(he.s();!(Se=he.n()).done;){var _e=Se.value,Le=_a.filter(Ge(_e),ae,U,t.filterMatchMode,t.filterLocale);Le&&Le.length&&pe.push(Ye(Ye({},_e),pt({},t.optionGroupChildren,Le)))}}catch(ot){he.e(ot)}finally{he.f()}return pe}else return _a.filter(t.options,ae,U,t.filterMatchMode,t.filterLocale)}else return t.options};d.useImperativeHandle(n,function(){return{props:t,show:f,hide:E,focus:function(){return Pe.focus(M.current)},getElement:function(){return j.current},getOverlay:function(){return R.current},getInput:function(){return M.current}}}),d.useEffect(function(){ve.combinedRefs(M,t.inputRef)},[M,t.inputRef]),d.useEffect(function(){setTimeout(function(){t.overlayVisible?f():E()},100)},[t.overlayVisible]),yr(function(){T&&_&&H()},[T,_]),vr(function(){st.clear(R.current)});var Xt=function(){var U=ce({className:"p-multiselect-clear-icon",onClick:function(Se){return F(Se,null,null)}},q("clearIcon")),ae=t.clearIcon||d.createElement(Fa,U),pe=Ie.getJSXIcon(ae,Ye({},U),{props:t});return!P&&t.showClear&&!t.disabled?pe:null},Yt=function(){var U=Kt(),ae=Ue("p-multiselect-label",{"p-placeholder":P&&t.placeholder,"p-multiselect-label-empty":P&&!t.placeholder&&!t.selectedItemTemplate,"p-multiselect-items-label":!P&&t.display!=="chip"&&t.value.length>t.maxSelectedLabels}),pe=ce({ref:J,className:"p-multiselect-label-container"},q("labelContainer")),he=ce({className:ae},q("label"));return d.createElement("div",pe,d.createElement("div",he,U||t.placeholder||"empty"))},Ke=Jt(),Zt=ve.isNotEmpty(t.tooltip),Dt=It.getOtherProps(t),Qt=ve.reduceKeys(Dt,Pe.ARIA_PROPS),ea=Ue("p-multiselect p-component p-inputwrapper",{"p-multiselect-chip":t.display==="chip","p-disabled":t.disabled,"p-multiselect-clearable":t.showClear&&!t.disabled,"p-focus":C,"p-inputwrapper-filled":ve.isNotEmpty(t.value),"p-inputwrapper-focus":C||T},t.className),ta="p-multiselect-trigger-icon p-c",Ot=ce({className:ta},q("triggerIcon")),aa=ce({className:"p-multiselect-trigger"},q("trigger")),ra=d.createElement("div",aa,t.dropdownIcon?Ie.getJSXIcon(t.dropdownIcon,Ye({},Ot),{props:t}):d.createElement(Xr,Ot)),na=!t.inline&&Yt(),oa=!t.inline&&Xt(),ia=ce(Ye(Ye({ref:j,id:t.id,style:t.style,className:ea},Dt),{},{onClick:x}),It.getOtherProps(t),q("root")),la=ce({className:"p-hidden-accessible"},q("hiddenInputWrapper")),sa=ce(Ye({ref:M,id:t.inputId,name:t.name,type:"text",onFocus:kt,onBlur:ue,onKeyDown:L,role:"listbox","aria-expanded":T,disabled:t.disabled,tabIndex:t.tabIndex},Qt),q("input"));return d.createElement(d.Fragment,null,d.createElement("div",ia,d.createElement("div",la,d.createElement("input",Ze({},sa,{readOnly:!0}))),!t.inline&&d.createElement(d.Fragment,null,na,oa,ra),d.createElement(Rr,Ze({ref:R,visibleOptions:Ke},t,{onClick:K,onOverlayHide:E,filterValue:i,hasFilter:_,onFilterInputChange:c,resetFilter:y,onCloseClick:Z,onSelectAll:b,getOptionLabel:ye,getOptionRenderKey:ge,isOptionDisabled:He,getOptionGroupChildren:Ge,getOptionGroupLabel:tt,getOptionGroupRenderKey:be,isSelected:Re,getSelectedOptionIndex:Ce,isAllSelected:re,onOptionSelect:W,allowOptionSelect:ie,onOptionKeyDown:X,in:T,onEnter:w,onEntered:$,onExit:ee,onExited:le,ptm:q}))),Zt&&d.createElement(br,Ze({target:j,content:t.tooltip},t.tooltipOptions,{pt:q("tooltip")})))}));qr.displayName="MultiSelect";function Pt(){const{service:a}=wr(),{tokenSignature:n}=We(i=>i);return{getCepCodesInfoService:i=>a(n).get(`/cep?cep=${i}`),getListCidadesService:i=>a(n).get(`/cidade?uf=${i}`),getListHeighborhoodService:i=>a(n).get(`/bairro?cidade=${i}`),getTipoLogradouroService:async()=>a(n).get("/TipoLogradouro?tipo=TODOS")}}function ro({resetField:a,setValue:n,closeModal:e}){const[t,o]=d.useState(null),[l,i]=d.useState(!1),[u,h]=d.useState([]),[g,C]=d.useState([]),[S,p]=d.useState(null),[m,T]=d.useState(!1),[O,j]=d.useState([]),[M,J]=d.useState([]),[R,_]=d.useState(!1),[P,D]=St.useState([]),[B,q]=d.useState([]);d.useState(void 0);const{openUsuarios:A,formUsuarios:N,selecionedUsers:z,refreshListUsers:Q}=we(Y=>Y),{getGroupUserService:K,createUserService:ie,getOrgaoExpeditorService:W,updateUserService:X,getListThemes:I}=Pa(),{getCepCodesInfoService:k,getListCidadesService:x,getListHeighborhoodService:L,getTipoLogradouroService:b}=Pt(),{openNotification:F}=Ne(),c=Y=>{_(!0),ie(Y,m).then(se=>{let Z=se.data[0].msg;if(se.data[0].erro==="true"){F("warn","Falha",`${Z||""}`);return}F("success","Sucesso",`${Z||""}`,1e4),setTimeout(()=>e(),1e4)}).catch(se=>{console.error(se),F("error","Falha ao Cadastrar",`${se.response.data.msg}`,1e4)}).finally(()=>_(!1))},y=Y=>{_(!0),X(Y,m).then(se=>{let Z=se.data[0].msg;if(se.data[0].erro==="true"){F("warn","Falha",`${Z||""}`);return}F("success","Sucesso",`${Z||""}`),setTimeout(()=>e(),1e3)}).catch(se=>{console.error(se),F("error","Falha ao Cadastrar",`${se.response.data.msg}`,1e4)}).finally(()=>_(!1))},v=async Y=>{x(Y).then(se=>{h(se.data),setTimeout(()=>{S!=null&&S.codcidade&&(n("cidade",S==null?void 0:S.codcidade),E(S==null?void 0:S.codcidade))},500)}).catch(se=>{console.error(se),F("warn","Falha ao obter lista de cidades disponíveis")})},f=()=>{I().then(Y=>{J(Y.data)}).catch(()=>F("warn","Falha","Falha ao obter lista de temas!"))},E=async Y=>{L(Y).then(se=>{q(se.data),S!=null&&S.codbairro&&n("bairro",S==null?void 0:S.codbairro)}).catch(se=>{console.error(se),F("warn","Falha ao obter lista de bairros disponíveis")})};return{createNewUser:c,updateUser:y,getListCidades:v,getListHeighborhood:E,getOrgaosExp:()=>{W().then(Y=>{C(Y.data)}).catch(Y=>{console.error(Y),F("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getThemes:f,verifySelecteduser:Y=>{const se=["id","usuario","cpf_cnpj","rg_ie","orgao_expeditor","data_nascimento","telefone","ativo","email","cep","grupos","logradouro","complemento","endereco","CodigoExterno","tema"];z?setTimeout(()=>{se.forEach(Z=>{if(Z==="data_nascimento"){if(z.data_nascimento){let Ce=z.data_nascimento.split("T")[0].replaceAll("-","/");o(new Date(Ce))}a("data_nascimento",{keepDirty:!0,defaultValue:t==null?void 0:t.toISOString()})}a(Z,{keepDirty:!0,defaultValue:`${z[Z]}`}),Z==="telefone"&&a("telefone",{keepDirty:!0,defaultValue:`${z.fone_ddd}${z.telefone}`}),Z==="ativo"&&a("ativo",{keepDirty:!0,defaultValue:z[Z]}),Z==="cep"&&a("cep",{keepDirty:!0,defaultValue:et(String(z[Z]))}),Z==="tema"&&a("tema",{keepDirty:!0,defaultValue:z[Z]}),Z==="grupos"&&a("grupos",{keepDirty:!0,defaultValue:an(z[Z])}),Z==="CodigoExterno"&&(a("CodigoExterno",{keepDirty:!0,defaultValue:String(z[Z])}),n("CodigoExterno",String(z[Z]))),Z==="orgao_expeditor"&&(a("orgao_expeditor",{keepDirty:!0,defaultValue:Number(z[Z])}),n("orgao_expeditor",Number(z[Z]))),z.logradouro==="S/N"&&T(!0)})},800):(se.forEach(Z=>{a(Z,{keepDirty:!0,defaultValue:""})}),h([]),q([]),o(null))},getTipoLogradouro:()=>{b().then(Y=>{D(Y.data)}).catch(Y=>console.log(Y))},getGroupsUserList:()=>{K().then(Y=>{j(Y.data)}).catch(Y=>console.log(Y))},getCepCodesInfo:async Y=>{k(Y).then(se=>{let Z=se.data[0];se.data.length||F("warn","Falha","CEP não encontrado!"),p(Z),n("uf",Z.uf),v(Z.uf),Z.siglatipologradouro&&n("tipo_logradouro",Z.siglatipologradouro.toUpperCase()),Z.codcidade&&(n("cidade",Z.codcidade),E(Z.codcidade)),Z.codbairro&&n("bairro",Z.codbairro),Z.logradouro&&n("endereco",Z.logradouro)}).catch(se=>console.log(se)).finally(()=>i(!1))},state:{snState:m,setSN:T,loadingSaveBtn:R,loadingCep:l,setLoadingCep:i,listOrgaoExp:g,date:t,setDate:o,listOfCities:u,listThemes:M,listGroupUsers:O,listOfNeighborhood:B,tipoLogradouroLista:P}}}function no(){d.useRef(null);const a=d.useRef(null),[n,e]=d.useState(""),{havePermission:t}=Ae();new Date().toISOString();const{openUsuarios:o,formUsuarios:l,selecionedUsers:i,refreshListUsers:u}=we(x=>x),{register:h,handleSubmit:g,watch:C,formState:{errors:S},reset:p,setValue:m,control:T,resetField:O}=ze({defaultValues:{id:0,ativo:!0,complemento:"",CodigoExterno:"",tema:1}}),j=()=>{l(),u(),p(),e("")},{createNewUser:M,updateUser:J,verifySelecteduser:R,getListCidades:_,getListHeighborhood:P,getThemes:D,getOrgaosExp:B,getTipoLogradouro:q,getGroupsUserList:A,getCepCodesInfo:N,state:z}=ro({resetField:O,setValue:m,closeModal:j}),Q=x=>{M(x)},K=x=>{J(x)};d.useEffect(()=>(R(),B(),window.addEventListener("keydown",x=>{var b;x.key==="Enter"&&(x.preventDefault(),a.current!==null&&((b=a.current)==null||b.click()))}),()=>{window.removeEventListener("keydown",()=>{}),p()}),[i]);const ie=s("div",{style:{display:"flex",justifyContent:"space-between",height:"10%"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:i?"Informações do Usuário":"Novo Usuário"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>j()})]}),W=[{label:"Ativo",value:!0},{label:"Inativo",value:!1}],X=C("cep"),I=C("rg_ie"),k=d.useRef(null);return d.useEffect(()=>{let x=X?ke(X):"";m("cep",et(x)),x.length>=8&&(z.setLoadingCep(!0),N(x))},[X]),d.useEffect(()=>{q(),A(),B(),D()},[]),s(De,{visible:o,position:"center",onHide:j,closable:!1,breakpoints:{"820px":"95vw","821px":"100vw"},header:ie,children:[r(Er,{ref:k,position:"bottom-center"}),s(Wn,{onSubmit:g(i?K:Q),children:[s(mt,{style:{paddingTop:"10px"},children:[i&&r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{maxWidth:"10%"},children:[r(te,{tabIndex:1,id:"id",style:{width:"100%"},...h("id"),disabled:!0,value:String(b),className:((w=S.id)==null?void 0:w.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"cliente",children:"Código"})]})},name:"id",control:T,rules:{required:!1}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"usuario",autoFocus:!0,style:{width:"100%"},...h("usuario"),maxLength:50,value:b,disabled:i?i&&!t(1005,oe.ALTERAR):!1,className:((w=S.usuario)==null?void 0:w.type)==="required"?"p-invalid":""}),s("label",{htmlFor:"nome",children:["Nome Completo",r("span",{children:"*"})]})]})},name:"usuario",control:T,rules:{required:!0}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"email",style:{width:"100%"},...h("email"),maxLength:50,value:b,disabled:i?i&&!t(1005,oe.ALTERAR):!1,className:((w=S.email)==null?void 0:w.type)==="required"?"p-invalid":""}),s("label",{htmlFor:"email",children:["E-mail ",r("span",{children:"*"})]})]})},name:"email",control:T,rules:{required:!0}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"cpf_cnpj",style:{width:"100%"},...h("cpf_cnpj"),value:b,maxLength:14,onChange:$=>x(Oa($.target.value)),disabled:i?i&&!t(1005,oe.ALTERAR):!1,className:((w=S.cpf_cnpj)==null?void 0:w.type)==="required"?"p-invalid":""}),s("label",{htmlFor:"cpf_cnpj",children:["CPF",r("span",{children:"*"})]})]})},name:"cpf_cnpj",control:T,rules:{required:!0}})]}),s(mt,{children:[r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"rg_ie",style:{width:"100%"},...h("rg_ie"),maxLength:20,value:b,onChange:$=>x($.target.value),className:((w=S.rg_ie)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,oe.ALTERAR):!1}),r("label",{htmlFor:"rg_ie",children:"RG"})]})},name:"rg_ie",control:T,rules:{required:!1}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:b,optionLabel:"descricao",optionValue:"id",placeholder:"Orgão Emissor",name:"orgao_expeditor",options:z.listOrgaoExp,filter:!0,onChange:$=>x($.value),className:((w=S.orgao_expeditor)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,oe.ALTERAR):!1,optionDisabled:$=>!$.ativo,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"orgao_expeditor",children:["Orgão Emissor",(I==null?void 0:I.length)>0&&r("span",{children:"*"})]})]})},name:"orgao_expeditor",control:T,rules:{required:(I==null?void 0:I.length)>0}}),r(V,{name:"data_nascimento",control:T,rules:{required:!0},render:({field:x,fieldState:L})=>{var b;return s("span",{className:"p-float-label",style:{flex:1},children:[r(dt,{value:z.date,mask:"99/99/9999",onChange:F=>{x.onChange(new Date(F.value).toISOString()),z.setDate(F.value),console.log(new Date(F.value).toISOString())},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",translate:"0px 1px",minWidth:"200px",width:"100%"},placeholder:"Data de Nascimento",inputId:"data_nascimento",className:((b=S.data_nascimento)==null?void 0:b.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,oe.ALTERAR):!1}),s("label",{htmlFor:"data_nascimento",children:["Data de Nascimento",r("span",{children:"*"})]})]})}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{minWidth:"115px",flex:1},children:[r(te,{id:"telefone",style:{width:"100%"},value:b,...h("telefone"),className:((w=S.telefone)==null?void 0:w.type)==="required"?"p-invalid":"",maxLength:14,onChange:$=>x(wt($.target.value)),disabled:i?i&&!t(1005,oe.ALTERAR):!1}),r("label",{htmlFor:"telefone",children:"DDD + Telefone"})]})},name:"telefone",control:T,rules:{required:!1}})]}),s(mt,{children:[r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w,$,ee,le,H;return s("span",{className:"p-float-label p-input-icon-right",style:{minWidth:"150px",flex:1},children:[((w=S.cep)==null?void 0:w.type)==="maxLength"&&r(za,{children:"maximo de 8 caracteres!"}),(($=S.cep)==null?void 0:$.type)==="minLength"&&r(za,{children:"minimo de 8 caracteres!"}),z.loadingCep&&r("i",{className:"pi pi-spin pi-spinner",style:{top:"10px"}}),r(te,{id:"cep",style:{width:"100%"},value:b,maxLength:9,...h("cep",{required:!0,maxLength:9,minLength:9}),className:((ee=S.cep)==null?void 0:ee.type)==="required"||((le=S.cep)==null?void 0:le.type)==="maxLength"||((H=S.cep)==null?void 0:H.type)==="minLength"?"p-invalid":"",disabled:i?i&&!t(1005,oe.ALTERAR):!1}),s("label",{htmlFor:"cep",children:["CEP",r("span",{children:"*"})]})]})},name:"cep",control:T,rules:{required:!0}}),r(V,{name:"uf",control:T,rules:{required:!0},render:({field:x,fieldState:L})=>{var b;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:x.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:F=>{x.onChange(F.value),_(F.value)},className:((b=S.bairro)==null?void 0:b.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},disabled:i?i&&!t(1005,oe.ALTERAR):!1}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"cidade",control:T,rules:{required:!0},render:({field:x,fieldState:L})=>{var b,F,c;return((b=z.listOfCities)==null?void 0:b.length)===0?s("span",{className:"p-float-label",style:{minWidth:";150px",flex:1},children:[r(te,{id:"cidade",style:{width:"100%"},...h("cidade",{required:!0}),className:((F=S.cidade)==null?void 0:F.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,5):!1}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]}):s("span",{className:"p-float-label",style:{minWidth:"150px",flex:1,fontSize:"12px"},children:[r(me,{value:x.value,optionLabel:"nome",optionValue:"cidade",placeholder:"Cidade",name:"cidade",options:z.listOfCities,onChange:y=>{x.onChange(y.value),P(y.value)},className:((c=S.cidade)==null?void 0:c.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},disabled:i?i&&!t(1005,5):!1}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]})}}),r(V,{name:"tipo_logradouro",control:T,rules:{required:!0},render:({field:x,fieldState:L})=>{var b;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:x.value,optionLabel:"descricao",optionValue:"tipo",placeholder:"Tipo de logradouro",name:"tipo_logradouro",options:z.tipoLogradouroLista,onChange:F=>x.onChange(F.value),className:((b=S.tipo_logradouro)==null?void 0:b.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},disabled:i?i&&!t(1005,5):!1}),s("label",{htmlFor:"tipo_logradouro",children:["Tipo de Logradouro",r("span",{children:"*"})]})]})}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{minWidth:"150px",flex:1},children:[r(te,{id:"endereco",style:{width:"100%"},value:b,...h("endereco"),className:((w=S.endereco)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,5):!1}),s("label",{htmlFor:"endereco",children:["Endereço",r("span",{children:"*"})]})]})},name:"endereco",control:T,rules:{required:!0}})]}),s(mt,{children:[s("div",{className:"container-numero",children:[r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w;return s("span",{className:"p-float-label",style:{minWidth:"80px",flex:1},children:[r(te,{id:"logradouro",style:{width:"100%"},value:b,...h("logradouro"),className:((w=S.logradouro)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:z.snState||i?i&&!t(1005,5):!1}),s("label",{htmlFor:"logradouro",children:["N°",z.snState?"":r("span",{children:"*"})]})]})},name:"logradouro",control:T,rules:{required:!z.snState}}),s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"sn",name:"sn",value:z.snState,onChange:x=>z.setSN(x.checked),checked:z.snState,disabled:i?i&&!t(1005,5):!1}),r("label",{htmlFor:"sn",className:"ml-1",children:"S/N"})]})]}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>{var w,$;return z.listOfNeighborhood.length===0?s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"bairro",style:{width:"100%"},className:((w=S.bairro)==null?void 0:w.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"bairro",children:"Bairro"})]}):s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[r(me,{value:b,optionLabel:"nome",optionValue:"bairro",placeholder:"Bairro",name:"bairro",options:z.listOfNeighborhood,onChange:ee=>{x(ee.value)},className:(($=S.bairro)==null?void 0:$.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},disabled:i?i&&!t(1005,5):!1}),s("label",{htmlFor:"bairro",children:["Bairro",r("span",{children:"*"})]})]})},name:"bairro",control:T,rules:{required:!0}}),r(V,{render:({field:{onChange:x,onBlur:L,value:b,name:F,ref:c},fieldState:{invalid:y,isTouched:v,isDirty:f,error:E}})=>s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{...h("complemento"),id:"complemento",value:b,style:{width:"100%"},maxLength:100,disabled:i?i&&!t(1005,5):!1}),r("label",{htmlFor:"complemento",children:"Complemento"})]}),name:"complemento",control:T,rules:{required:!1}}),r(V,{name:"uf",control:T,rules:{required:!0},render:({field:x,fieldState:L})=>{var b;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:x.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:F=>{x.onChange(F.value),_(F.value)},className:((b=S.bairro)==null?void 0:b.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"ativo",control:T,rules:{required:!1},render:({field:x,fieldState:L})=>{var b;return s("span",{className:"p-float-label",style:{minWidth:"80px",flex:1},children:[r(me,{value:x.value,optionLabel:"label",optionValue:"value",style:{width:"100%",height:"36px"},placeholder:"Status",name:"ativo",options:W,onChange:F=>x.onChange(F.value),className:((b=S.ativo)==null?void 0:b.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,5):!1}),r("label",{htmlFor:"ativo",children:"Status"})]})}})]}),s(mt,{children:[r(V,{name:"grupos",control:T,rules:{required:!0},render:({field:x})=>{var L;return s("span",{className:"p-float-label",style:{minWidth:"200px",width:"max-content"},children:[r(qr,{style:{width:"100%",fontSize:"12px"},id:x.name,filter:!0,name:"grupos",value:x.value,options:z.listGroupUsers,onChange:b=>{x.onChange(b.value),console.log(x.value)},optionLabel:"nome",optionValue:"id",placeholder:"Selecionar Grupos",maxSelectedLabels:10,className:((L=S.grupos)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:i?i&&!t(1005,5):!1}),r("label",{htmlFor:"grupos",children:"Grupos"})]})}}),r(V,{name:"tema",control:T,rules:{required:!1},render:({field:{value:x,onChange:L,name:b},fieldState:F})=>{var c;return s("span",{className:"p-float-label",style:{minWidth:"80px",width:"max-content"},children:[r(me,{id:b,options:z.listThemes,value:x,optionLabel:"nome",optionValue:"id",style:{width:"100%",height:"36px"},name:"tema",onChange:y=>L(y.value),className:((c=S.tema)==null?void 0:c.type)==="required"?"p-invalid":"",emptyMessage:"Nenhum tema encontrado",disabled:i?i&&!t(1005,5):!1}),r("label",{htmlFor:"tema",children:"Tema"})]})}})]}),r(Gn,{children:r(xe,{label:"Salvar",ref:a,loading:z.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(S),disabled:i?i&&!t(1005,5):!1})})]})]})}function Sa(){return Sa=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},Sa.apply(this,arguments)}function oo(a){if(Array.isArray(a))return a}function io(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function Ga(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function lo(a,n){if(a){if(typeof a=="string")return Ga(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ga(a,n)}}function so(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function co(a,n){return oo(a)||io(a,n)||lo(a,n)||so()}function $e(a){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$e(a)}function uo(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function po(a,n){if($e(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if($e(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function fo(a){var n=po(a,"string");return $e(n)==="symbol"?n:String(n)}function Ha(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,fo(t.key),t)}}function mo(a,n,e){return n&&Ha(a.prototype,n),e&&Ha(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}var ho=function(){function a(){uo(this,a)}return mo(a,null,[{key:"equals",value:function(e,t,o){return o&&e&&$e(e)==="object"&&t&&$e(t)==="object"?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&$e(e)=="object"&&$e(t)=="object"){var o=Array.isArray(e),l=Array.isArray(t),i,u,h;if(o&&l){if(u=e.length,u!==t.length)return!1;for(i=u;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(o!==l)return!1;var g=e instanceof Date,C=t instanceof Date;if(g!==C)return!1;if(g&&C)return e.getTime()===t.getTime();var S=e instanceof RegExp,p=t instanceof RegExp;if(S!==p)return!1;if(S&&p)return e.toString()===t.toString();var m=Object.keys(e);if(u=m.length,u!==Object.keys(t).length)return!1;for(i=u;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[i]))return!1;for(i=u;i--!==0;)if(h=m[i],!this.deepEquals(e[h],t[h]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(a.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),l=e,i=0,u=o.length;i<u;++i){if(l==null)return null;l=l[o[i]]}return l}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(o){return!t.hasOwnProperty(o)}).reduce(function(o,l){return o[l]=e[l],o},{})}},{key:"reduceKeys",value:function(e,t){var o={};return!e||!t||t.length===0||Object.keys(e).filter(function(l){return t.some(function(i){return l.startsWith(i)})}).forEach(function(l){o[l]=e[l],delete e[l]}),o}},{key:"reorderArray",value:function(e,t,o){e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,o){var l=this;return t?o?t.findIndex(function(i){return l.equals(i,e,o)}):t.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e?e[t]:void 0;return l===void 0?o[t]:l}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,o):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,o){if(e){var l=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),i=l===t;try{var u}catch{}return i}return!1}},{key:"getRefElement",value:function(e){return e?$e(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&typeof e=="string"?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&$e(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,u=a.compare(e,t,l,o),h=o;return(a.isEmpty(e)||a.isEmpty(t))&&(h=i===1?o:i),h*u}},{key:"compare",value:function(e,t,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,u=a.isEmpty(e),h=a.isEmpty(t);return u&&h?i=0:u?i=l:h?i=-l:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,o,{numeric:!0}):i=e<t?-1:e>t?1:0,i}}]),a}(),Ka=0;function go(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return Ka++,"".concat(a).concat(Ka)}var zr=d.memo(d.forwardRef(function(a,n){var e=Et.getPTI(a),t=d.useState(a.id),o=co(t,2),l=o[0],i=o[1];return d.useEffect(function(){ho.isEmpty(l)&&i(go("pr_icon_clip_"))},[l]),d.createElement("svg",Sa({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("g",{clipPath:"url(#".concat(l,")")},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.77051 5.96336C6.84324 5.99355 6.92127 6.00891 7.00002 6.00854C7.07877 6.00891 7.1568 5.99355 7.22953 5.96336C7.30226 5.93317 7.36823 5.88876 7.42357 5.83273L9.82101 3.43529C9.93325 3.32291 9.99629 3.17058 9.99629 3.01175C9.99629 2.85292 9.93325 2.70058 9.82101 2.5882L7.42357 0.190763C7.3687 0.131876 7.30253 0.0846451 7.22901 0.0518865C7.15549 0.019128 7.07612 0.00151319 6.99564 9.32772e-05C6.91517 -0.00132663 6.83523 0.0134773 6.7606 0.0436218C6.68597 0.0737664 6.61817 0.118634 6.56126 0.175548C6.50435 0.232462 6.45948 0.300257 6.42933 0.374888C6.39919 0.449519 6.38439 0.529456 6.38581 0.609933C6.38722 0.690409 6.40484 0.769775 6.4376 0.843296C6.47036 0.916817 6.51759 0.982986 6.57647 1.03786L7.95103 2.41241H6.99998C5.46337 2.41241 3.98969 3.02283 2.90314 4.10938C1.81659 5.19593 1.20618 6.66961 1.20618 8.20622C1.20618 9.74283 1.81659 11.2165 2.90314 12.3031C3.98969 13.3896 5.46337 14 6.99998 14C8.53595 13.9979 10.0084 13.3868 11.0945 12.3007C12.1806 11.2146 12.7917 9.74218 12.7938 8.20622C12.7938 8.04726 12.7306 7.89481 12.6182 7.78241C12.5058 7.67001 12.3534 7.60686 12.1944 7.60686C12.0355 7.60686 11.883 7.67001 11.7706 7.78241C11.6582 7.89481 11.5951 8.04726 11.5951 8.20622C11.5951 9.11504 11.3256 10.0035 10.8207 10.7591C10.3157 11.5148 9.59809 12.1037 8.75845 12.4515C7.9188 12.7993 6.99489 12.8903 6.10353 12.713C5.21217 12.5357 4.3934 12.0981 3.75077 11.4554C3.10813 10.8128 2.67049 9.99404 2.49319 9.10268C2.31589 8.21132 2.40688 7.2874 2.75468 6.44776C3.10247 5.60811 3.69143 4.89046 4.44709 4.38554C5.20275 3.88063 6.09116 3.61113 6.99998 3.61113H7.95098L6.57647 4.98564C6.46423 5.09802 6.40119 5.25035 6.40119 5.40918C6.40119 5.56801 6.46423 5.72035 6.57647 5.83273C6.63181 5.88876 6.69778 5.93317 6.77051 5.96336Z",fill:"currentColor"})),d.createElement("defs",null,d.createElement("clipPath",{id:l},d.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));zr.displayName="RefreshIcon";function wa(){return wa=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},wa.apply(this,arguments)}function yo(a){if(Array.isArray(a))return a}function vo(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function Ja(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function bo(a,n){if(a){if(typeof a=="string")return Ja(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ja(a,n)}}function xo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Co(a,n){return yo(a)||vo(a,n)||bo(a,n)||xo()}function Ve(a){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ve(a)}function So(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function wo(a,n){if(Ve(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(Ve(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Eo(a){var n=wo(a,"string");return Ve(n)==="symbol"?n:String(n)}function Xa(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,Eo(t.key),t)}}function No(a,n,e){return n&&Xa(a.prototype,n),e&&Xa(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}var Po=function(){function a(){So(this,a)}return No(a,null,[{key:"equals",value:function(e,t,o){return o&&e&&Ve(e)==="object"&&t&&Ve(t)==="object"?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&Ve(e)=="object"&&Ve(t)=="object"){var o=Array.isArray(e),l=Array.isArray(t),i,u,h;if(o&&l){if(u=e.length,u!==t.length)return!1;for(i=u;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(o!==l)return!1;var g=e instanceof Date,C=t instanceof Date;if(g!==C)return!1;if(g&&C)return e.getTime()===t.getTime();var S=e instanceof RegExp,p=t instanceof RegExp;if(S!==p)return!1;if(S&&p)return e.toString()===t.toString();var m=Object.keys(e);if(u=m.length,u!==Object.keys(t).length)return!1;for(i=u;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[i]))return!1;for(i=u;i--!==0;)if(h=m[i],!this.deepEquals(e[h],t[h]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(a.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),l=e,i=0,u=o.length;i<u;++i){if(l==null)return null;l=l[o[i]]}return l}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(o){return!t.hasOwnProperty(o)}).reduce(function(o,l){return o[l]=e[l],o},{})}},{key:"reduceKeys",value:function(e,t){var o={};return!e||!t||t.length===0||Object.keys(e).filter(function(l){return t.some(function(i){return l.startsWith(i)})}).forEach(function(l){o[l]=e[l],delete e[l]}),o}},{key:"reorderArray",value:function(e,t,o){e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,o){var l=this;return t?o?t.findIndex(function(i){return l.equals(i,e,o)}):t.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e?e[t]:void 0;return l===void 0?o[t]:l}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,o):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,o){if(e){var l=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),i=l===t;try{var u}catch{}return i}return!1}},{key:"getRefElement",value:function(e){return e?Ve(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&typeof e=="string"?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Ve(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,u=a.compare(e,t,l,o),h=o;return(a.isEmpty(e)||a.isEmpty(t))&&(h=i===1?o:i),h*u}},{key:"compare",value:function(e,t,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,u=a.isEmpty(e),h=a.isEmpty(t);return u&&h?i=0:u?i=l:h?i=-l:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,o,{numeric:!0}):i=e<t?-1:e>t?1:0,i}}]),a}(),Ya=0;function ko(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return Ya++,"".concat(a).concat(Ya)}var $r=d.memo(d.forwardRef(function(a,n){var e=Et.getPTI(a),t=d.useState(a.id),o=Co(t,2),l=o[0],i=o[1];return d.useEffect(function(){Po.isEmpty(l)&&i(ko("pr_icon_clip_"))},[l]),d.createElement("svg",wa({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("g",{clipPath:"url(#".concat(l,")")},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.0208 12.0411C4.83005 12.0411 3.66604 11.688 2.67596 11.0265C1.68589 10.3649 0.914216 9.42464 0.458534 8.32452C0.00285271 7.22441 -0.116374 6.01388 0.11593 4.84601C0.348235 3.67813 0.921637 2.60537 1.76363 1.76338C2.60562 0.921393 3.67838 0.34799 4.84625 0.115686C6.01412 -0.116618 7.22466 0.00260857 8.32477 0.45829C9.42488 0.913972 10.3652 1.68564 11.0267 2.67572C11.6883 3.66579 12.0414 4.8298 12.0414 6.02056C12.0395 7.41563 11.5542 8.76029 10.6783 9.8305L13.8244 12.9765C13.9367 13.089 13.9997 13.2414 13.9997 13.4003C13.9997 13.5592 13.9367 13.7116 13.8244 13.8241C13.769 13.8801 13.703 13.9245 13.6302 13.9548C13.5575 13.985 13.4794 14.0003 13.4006 14C13.3218 14.0003 13.2437 13.985 13.171 13.9548C13.0982 13.9245 13.0322 13.8801 12.9768 13.8241L9.83082 10.678C8.76059 11.5539 7.4159 12.0393 6.0208 12.0411ZM6.0208 1.20731C5.07199 1.20731 4.14449 1.48867 3.35559 2.0158C2.56669 2.54292 1.95181 3.29215 1.58872 4.16874C1.22562 5.04532 1.13062 6.00989 1.31572 6.94046C1.50083 7.87104 1.95772 8.72583 2.62863 9.39674C3.29954 10.0676 4.15433 10.5245 5.0849 10.7096C6.01548 10.8947 6.98005 10.7997 7.85663 10.4367C8.73322 10.0736 9.48244 9.45868 10.0096 8.66978C10.5367 7.88088 10.8181 6.95337 10.8181 6.00457C10.8181 4.73226 10.3126 3.51206 9.41297 2.6124C8.51331 1.71274 7.29311 1.20731 6.0208 1.20731ZM4.00591 6.60422H8.00362C8.16266 6.60422 8.31518 6.54104 8.42764 6.42859C8.5401 6.31613 8.60328 6.1636 8.60328 6.00456C8.60328 5.84553 8.5401 5.693 8.42764 5.58054C8.31518 5.46809 8.16266 5.40491 8.00362 5.40491H4.00591C3.84687 5.40491 3.69434 5.46809 3.58189 5.58054C3.46943 5.693 3.40625 5.84553 3.40625 6.00456C3.40625 6.1636 3.46943 6.31613 3.58189 6.42859C3.69434 6.54104 3.84687 6.60422 4.00591 6.60422Z",fill:"currentColor"})),d.createElement("defs",null,d.createElement("clipPath",{id:l},d.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));$r.displayName="SearchMinusIcon";function Ea(){return Ea=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},Ea.apply(this,arguments)}function Lo(a){if(Array.isArray(a))return a}function Fo(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function Za(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function Do(a,n){if(a){if(typeof a=="string")return Za(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Za(a,n)}}function Oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Io(a,n){return Lo(a)||Fo(a,n)||Do(a,n)||Oo()}function Be(a){"@babel/helpers - typeof";return Be=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Be(a)}function To(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function _o(a,n){if(Be(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(Be(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Ao(a){var n=_o(a,"string");return Be(n)==="symbol"?n:String(n)}function Qa(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,Ao(t.key),t)}}function Ro(a,n,e){return n&&Qa(a.prototype,n),e&&Qa(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}var qo=function(){function a(){To(this,a)}return Ro(a,null,[{key:"equals",value:function(e,t,o){return o&&e&&Be(e)==="object"&&t&&Be(t)==="object"?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&Be(e)=="object"&&Be(t)=="object"){var o=Array.isArray(e),l=Array.isArray(t),i,u,h;if(o&&l){if(u=e.length,u!==t.length)return!1;for(i=u;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(o!==l)return!1;var g=e instanceof Date,C=t instanceof Date;if(g!==C)return!1;if(g&&C)return e.getTime()===t.getTime();var S=e instanceof RegExp,p=t instanceof RegExp;if(S!==p)return!1;if(S&&p)return e.toString()===t.toString();var m=Object.keys(e);if(u=m.length,u!==Object.keys(t).length)return!1;for(i=u;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[i]))return!1;for(i=u;i--!==0;)if(h=m[i],!this.deepEquals(e[h],t[h]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(a.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),l=e,i=0,u=o.length;i<u;++i){if(l==null)return null;l=l[o[i]]}return l}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(o){return!t.hasOwnProperty(o)}).reduce(function(o,l){return o[l]=e[l],o},{})}},{key:"reduceKeys",value:function(e,t){var o={};return!e||!t||t.length===0||Object.keys(e).filter(function(l){return t.some(function(i){return l.startsWith(i)})}).forEach(function(l){o[l]=e[l],delete e[l]}),o}},{key:"reorderArray",value:function(e,t,o){e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,o){var l=this;return t?o?t.findIndex(function(i){return l.equals(i,e,o)}):t.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e?e[t]:void 0;return l===void 0?o[t]:l}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,o):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,o){if(e){var l=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),i=l===t;try{var u}catch{}return i}return!1}},{key:"getRefElement",value:function(e){return e?Be(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&typeof e=="string"?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Be(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,u=a.compare(e,t,l,o),h=o;return(a.isEmpty(e)||a.isEmpty(t))&&(h=i===1?o:i),h*u}},{key:"compare",value:function(e,t,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,u=a.isEmpty(e),h=a.isEmpty(t);return u&&h?i=0:u?i=l:h?i=-l:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,o,{numeric:!0}):i=e<t?-1:e>t?1:0,i}}]),a}(),er=0;function zo(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return er++,"".concat(a).concat(er)}var Vr=d.memo(d.forwardRef(function(a,n){var e=Et.getPTI(a),t=d.useState(a.id),o=Io(t,2),l=o[0],i=o[1];return d.useEffect(function(){qo.isEmpty(l)&&i(zo("pr_icon_clip_"))},[l]),d.createElement("svg",Ea({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("g",{clipPath:"url(#".concat(l,")")},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.67596 11.0265C3.66604 11.688 4.83005 12.0411 6.0208 12.0411C6.81143 12.0411 7.59432 11.8854 8.32477 11.5828C8.86999 11.357 9.37802 11.0526 9.83311 10.6803L12.9768 13.8241C13.0322 13.8801 13.0982 13.9245 13.171 13.9548C13.2437 13.985 13.3218 14.0003 13.4006 14C13.4794 14.0003 13.5575 13.985 13.6302 13.9548C13.703 13.9245 13.769 13.8801 13.8244 13.8241C13.9367 13.7116 13.9997 13.5592 13.9997 13.4003C13.9997 13.2414 13.9367 13.089 13.8244 12.9765L10.6806 9.8328C11.0529 9.37773 11.3572 8.86972 11.5831 8.32452C11.8856 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0267 2.67572C10.3652 1.68564 9.42488 0.913972 8.32477 0.45829C7.22466 0.00260857 6.01412 -0.116618 4.84625 0.115686C3.67838 0.34799 2.60562 0.921393 1.76363 1.76338C0.921637 2.60537 0.348235 3.67813 0.11593 4.84601C-0.116374 6.01388 0.00285271 7.22441 0.458534 8.32452C0.914216 9.42464 1.68589 10.3649 2.67596 11.0265ZM3.35559 2.0158C4.14449 1.48867 5.07199 1.20731 6.0208 1.20731C7.29311 1.20731 8.51331 1.71274 9.41297 2.6124C10.3126 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5367 7.88088 10.0096 8.66978C9.48244 9.45868 8.73322 10.0736 7.85663 10.4367C6.98005 10.7997 6.01548 10.8947 5.0849 10.7096C4.15433 10.5245 3.29954 10.0676 2.62863 9.39674C1.95772 8.72583 1.50083 7.87104 1.31572 6.94046C1.13062 6.00989 1.22562 5.04532 1.58872 4.16874C1.95181 3.29215 2.56669 2.54292 3.35559 2.0158ZM6.00481 8.60309C5.84641 8.60102 5.69509 8.53718 5.58308 8.42517C5.47107 8.31316 5.40722 8.16183 5.40515 8.00344V6.60422H4.00591C3.84687 6.60422 3.69434 6.54104 3.58189 6.42859C3.46943 6.31613 3.40625 6.1636 3.40625 6.00456C3.40625 5.84553 3.46943 5.693 3.58189 5.58054C3.69434 5.46809 3.84687 5.40491 4.00591 5.40491H5.40515V4.00572C5.40515 3.84668 5.46833 3.69416 5.58079 3.5817C5.69324 3.46924 5.84577 3.40607 6.00481 3.40607C6.16385 3.40607 6.31637 3.46924 6.42883 3.5817C6.54129 3.69416 6.60447 3.84668 6.60447 4.00572V5.40491H8.00362C8.16266 5.40491 8.31518 5.46809 8.42764 5.58054C8.5401 5.693 8.60328 5.84553 8.60328 6.00456C8.60328 6.1636 8.5401 6.31613 8.42764 6.42859C8.31518 6.54104 8.16266 6.60422 8.00362 6.60422H6.60447V8.00344C6.60239 8.16183 6.53855 8.31316 6.42654 8.42517C6.31453 8.53718 6.1632 8.60102 6.00481 8.60309Z",fill:"currentColor"})),d.createElement("defs",null,d.createElement("clipPath",{id:l},d.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));Vr.displayName="SearchPlusIcon";function Na(){return Na=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},Na.apply(this,arguments)}function $o(a){if(Array.isArray(a))return a}function Vo(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function tr(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function Bo(a,n){if(a){if(typeof a=="string")return tr(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return tr(a,n)}}function Mo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(a,n){return $o(a)||Vo(a,n)||Bo(a,n)||Mo()}function Me(a){"@babel/helpers - typeof";return Me=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Me(a)}function Uo(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function Wo(a,n){if(Me(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(Me(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Go(a){var n=Wo(a,"string");return Me(n)==="symbol"?n:String(n)}function ar(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,Go(t.key),t)}}function Ho(a,n,e){return n&&ar(a.prototype,n),e&&ar(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}var Ko=function(){function a(){Uo(this,a)}return Ho(a,null,[{key:"equals",value:function(e,t,o){return o&&e&&Me(e)==="object"&&t&&Me(t)==="object"?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&Me(e)=="object"&&Me(t)=="object"){var o=Array.isArray(e),l=Array.isArray(t),i,u,h;if(o&&l){if(u=e.length,u!==t.length)return!1;for(i=u;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(o!==l)return!1;var g=e instanceof Date,C=t instanceof Date;if(g!==C)return!1;if(g&&C)return e.getTime()===t.getTime();var S=e instanceof RegExp,p=t instanceof RegExp;if(S!==p)return!1;if(S&&p)return e.toString()===t.toString();var m=Object.keys(e);if(u=m.length,u!==Object.keys(t).length)return!1;for(i=u;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[i]))return!1;for(i=u;i--!==0;)if(h=m[i],!this.deepEquals(e[h],t[h]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(a.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),l=e,i=0,u=o.length;i<u;++i){if(l==null)return null;l=l[o[i]]}return l}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(o){return!t.hasOwnProperty(o)}).reduce(function(o,l){return o[l]=e[l],o},{})}},{key:"reduceKeys",value:function(e,t){var o={};return!e||!t||t.length===0||Object.keys(e).filter(function(l){return t.some(function(i){return l.startsWith(i)})}).forEach(function(l){o[l]=e[l],delete e[l]}),o}},{key:"reorderArray",value:function(e,t,o){e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,o){var l=this;return t?o?t.findIndex(function(i){return l.equals(i,e,o)}):t.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e?e[t]:void 0;return l===void 0?o[t]:l}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,o):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,o){if(e){var l=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),i=l===t;try{var u}catch{}return i}return!1}},{key:"getRefElement",value:function(e){return e?Me(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&typeof e=="string"?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Me(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,u=a.compare(e,t,l,o),h=o;return(a.isEmpty(e)||a.isEmpty(t))&&(h=i===1?o:i),h*u}},{key:"compare",value:function(e,t,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,u=a.isEmpty(e),h=a.isEmpty(t);return u&&h?i=0:u?i=l:h?i=-l:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,o,{numeric:!0}):i=e<t?-1:e>t?1:0,i}}]),a}(),rr=0;function Jo(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return rr++,"".concat(a).concat(rr)}var Br=d.memo(d.forwardRef(function(a,n){var e=Et.getPTI(a),t=d.useState(a.id),o=jo(t,2),l=o[0],i=o[1];return d.useEffect(function(){Ko.isEmpty(l)&&i(Jo("pr_icon_clip_"))},[l]),d.createElement("svg",Na({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("g",{clipPath:"url(#".concat(l,")")},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.77042 5.96336C6.84315 5.99355 6.92118 6.00891 6.99993 6.00854C7.07868 6.00891 7.15671 5.99355 7.22944 5.96336C7.30217 5.93317 7.36814 5.88876 7.42348 5.83273C7.53572 5.72035 7.59876 5.56801 7.59876 5.40918C7.59876 5.25035 7.53572 5.09802 7.42348 4.98564L6.04897 3.61113H6.99998C7.9088 3.61113 8.79722 3.88063 9.55288 4.38554C10.3085 4.89046 10.8975 5.60811 11.2453 6.44776C11.5931 7.2874 11.6841 8.21132 11.5068 9.10268C11.3295 9.99404 10.8918 10.8128 10.2492 11.4554C9.60657 12.0981 8.7878 12.5357 7.89644 12.713C7.00508 12.8903 6.08116 12.7993 5.24152 12.4515C4.40188 12.1037 3.68422 11.5148 3.17931 10.7591C2.67439 10.0035 2.4049 9.11504 2.4049 8.20622C2.4049 8.04726 2.34175 7.89481 2.22935 7.78241C2.11695 7.67001 1.9645 7.60686 1.80554 7.60686C1.64658 7.60686 1.49413 7.67001 1.38172 7.78241C1.26932 7.89481 1.20618 8.04726 1.20618 8.20622C1.20829 9.74218 1.81939 11.2146 2.90548 12.3007C3.99157 13.3868 5.46402 13.9979 6.99998 14C8.5366 14 10.0103 13.3896 11.0968 12.3031C12.1834 11.2165 12.7938 9.74283 12.7938 8.20622C12.7938 6.66961 12.1834 5.19593 11.0968 4.10938C10.0103 3.02283 8.5366 2.41241 6.99998 2.41241H6.04892L7.42348 1.03786C7.48236 0.982986 7.5296 0.916817 7.56235 0.843296C7.59511 0.769775 7.61273 0.690409 7.61415 0.609933C7.61557 0.529456 7.60076 0.449519 7.57062 0.374888C7.54047 0.300257 7.49561 0.232462 7.43869 0.175548C7.38178 0.118634 7.31398 0.0737664 7.23935 0.0436218C7.16472 0.0134773 7.08478 -0.00132663 7.00431 9.32772e-05C6.92383 0.00151319 6.84447 0.019128 6.77095 0.0518865C6.69742 0.0846451 6.63126 0.131876 6.57638 0.190763L4.17895 2.5882C4.06671 2.70058 4.00366 2.85292 4.00366 3.01175C4.00366 3.17058 4.06671 3.32291 4.17895 3.43529L6.57638 5.83273C6.63172 5.88876 6.69769 5.93317 6.77042 5.96336Z",fill:"currentColor"})),d.createElement("defs",null,d.createElement("clipPath",{id:l},d.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));Br.displayName="UndoIcon";function xt(){return xt=Object.assign?Object.assign.bind():function(a){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},xt.apply(this,arguments)}function je(a){"@babel/helpers - typeof";return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},je(a)}function Xo(a,n){if(je(a)!=="object"||a===null)return a;var e=a[Symbol.toPrimitive];if(e!==void 0){var t=e.call(a,n||"default");if(je(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(a)}function Mr(a){var n=Xo(a,"string");return je(n)==="symbol"?n:String(n)}function Yo(a,n,e){return n=Mr(n),n in a?Object.defineProperty(a,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[n]=e,a}function Zo(a){if(Array.isArray(a))return a}function Qo(a,n){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t,o,l,i,u=[],h=!0,g=!1;try{if(l=(e=e.call(a)).next,n===0){if(Object(e)!==e)return;h=!1}else for(;!(h=(t=l.call(e)).done)&&(u.push(t.value),u.length!==n);h=!0);}catch(C){g=!0,o=C}finally{try{if(!h&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(g)throw o}}return u}}function nr(a,n){(n==null||n>a.length)&&(n=a.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=a[e];return t}function ei(a,n){if(a){if(typeof a=="string")return nr(a,n);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return nr(a,n)}}function ti(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(a,n){return Zo(a)||Qo(a,n)||ei(a,n)||ti()}function ai(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function or(a,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,Mr(t.key),t)}}function ri(a,n,e){return n&&or(a.prototype,n),e&&or(a,e),Object.defineProperty(a,"prototype",{writable:!1}),a}var ni=function(){function a(){ai(this,a)}return ri(a,null,[{key:"equals",value:function(e,t,o){return o&&e&&je(e)==="object"&&t&&je(t)==="object"?this.resolveFieldData(e,o)===this.resolveFieldData(t,o):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&je(e)=="object"&&je(t)=="object"){var o=Array.isArray(e),l=Array.isArray(t),i,u,h;if(o&&l){if(u=e.length,u!==t.length)return!1;for(i=u;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(o!==l)return!1;var g=e instanceof Date,C=t instanceof Date;if(g!==C)return!1;if(g&&C)return e.getTime()===t.getTime();var S=e instanceof RegExp,p=t instanceof RegExp;if(S!==p)return!1;if(S&&p)return e.toString()===t.toString();var m=Object.keys(e);if(u=m.length,u!==Object.keys(t).length)return!1;for(i=u;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,m[i]))return!1;for(i=u;i--!==0;)if(h=m[i],!this.deepEquals(e[h],t[h]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(e&&Object.keys(e).length&&t){if(this.isFunction(t))return t(e);if(a.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var o=t.split("."),l=e,i=0,u=o.length;i<u;++i){if(l==null)return null;l=l[o[i]]}return l}else return null}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(o){return!t.hasOwnProperty(o)}).reduce(function(o,l){return o[l]=e[l],o},{})}},{key:"reduceKeys",value:function(e,t){var o={};return!e||!t||t.length===0||Object.keys(e).filter(function(l){return t.some(function(i){return l.startsWith(i)})}).forEach(function(l){o[l]=e[l],delete e[l]}),o}},{key:"reorderArray",value:function(e,t,o){e&&t!==o&&(o>=e.length&&(o%=e.length,t%=e.length),e.splice(o,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,o){var l=this;return t?o?t.findIndex(function(i){return l.equals(i,e,o)}):t.findIndex(function(i){return i===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=e?e[t]:void 0;return l===void 0?o[t]:l}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];return this.isFunction(e)?e.apply(void 0,o):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,o):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,o){if(e){var l=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),i=l===t;try{var u}catch{}return i}return!1}},{key:"getRefElement",value:function(e){return e?je(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"convertToFlatCase",value:function(e){return this.isNotEmpty(e)&&typeof e=="string"?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&je(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"sort",value:function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,l=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,u=a.compare(e,t,l,o),h=o;return(a.isEmpty(e)||a.isEmpty(t))&&(h=i===1?o:i),h*u}},{key:"compare",value:function(e,t,o){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,i=-1,u=a.isEmpty(e),h=a.isEmpty(t);return u&&h?i=0:u?i=l:h?i=-l:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,o,{numeric:!0}):i=e<t?-1:e>t?1:0,i}}]),a}(),ir=0;function oi(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return ir++,"".concat(a).concat(ir)}var jr=d.memo(d.forwardRef(function(a,n){var e=Et.getPTI(a),t=d.useState(a.id),o=vt(t,2),l=o[0],i=o[1];return d.useEffect(function(){ni.isEmpty(l)&&i(oi("pr_icon_clip_"))},[l]),d.createElement("svg",xt({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("g",{clipPath:"url(#".concat(l,")")},d.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.0118 10C6.93296 10.0003 6.85484 9.98495 6.78202 9.95477C6.7091 9.92454 6.64297 9.88008 6.58749 9.82399L3.38288 6.62399C3.27675 6.51025 3.21897 6.35982 3.22171 6.20438C3.22446 6.04893 3.28752 5.90063 3.39761 5.7907C3.5077 5.68077 3.65622 5.6178 3.81188 5.61505C3.96755 5.61231 4.1182 5.67001 4.23211 5.77599L6.41125 7.95201V0.6C6.41125 0.44087 6.47456 0.288258 6.58724 0.175736C6.69993 0.063214 6.85276 0 7.01212 0C7.17148 0 7.32431 0.063214 7.43699 0.175736C7.54968 0.288258 7.61298 0.44087 7.61298 0.6V7.95198L9.7921 5.77599C9.90601 5.67001 10.0567 5.61231 10.2123 5.61505C10.368 5.6178 10.5165 5.68077 10.6266 5.7907C10.7367 5.90063 10.7997 6.04893 10.8025 6.20438C10.8052 6.35982 10.7475 6.51025 10.6413 6.62399L7.43671 9.82399C7.38124 9.88008 7.3151 9.92454 7.24219 9.95477C7.16938 9.98495 7.09127 10.0003 7.01244 10C7.01233 10 7.01223 10 7.01212 10C7.01201 10 7.0119 10 7.0118 10ZM13.45 13.3115C13.0749 13.7235 12.5521 13.971 11.9952 14H2.02889C1.75106 13.9887 1.47819 13.9228 1.2259 13.806C0.973606 13.6893 0.74684 13.524 0.558578 13.3197C0.370316 13.1153 0.224251 12.8759 0.128742 12.6152C0.0332333 12.3544 -0.00984502 12.0774 0.00197194 11.8V9.39999C0.00197194 9.24086 0.065277 9.08825 0.177961 8.97572C0.290645 8.8632 0.443477 8.79999 0.602836 8.79999C0.762195 8.79999 0.915027 8.8632 1.02771 8.97572C1.1404 9.08825 1.2037 9.24086 1.2037 9.39999V11.8C1.18301 12.0375 1.25469 12.2739 1.40385 12.4601C1.55302 12.6463 1.76823 12.768 2.00485 12.8H11.9952C12.2318 12.768 12.4471 12.6463 12.5962 12.4601C12.7454 12.2739 12.8171 12.0375 12.7964 11.8V9.39999C12.7964 9.24086 12.8597 9.08825 12.9724 8.97572C13.085 8.8632 13.2379 8.79999 13.3972 8.79999C13.5566 8.79999 13.7094 8.8632 13.8221 8.97572C13.9348 9.08825 13.9981 9.24086 13.9981 9.39999V11.8C14.0221 12.3563 13.8251 12.8995 13.45 13.3115Z",fill:"currentColor"})),d.createElement("defs",null,d.createElement("clipPath",{id:l},d.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));jr.displayName="DownloadIcon";var ha=ka.extend({defaultProps:{__TYPE:"Image",alt:null,className:null,closeIcon:null,crossOrigin:null,decoding:null,downloadIcon:null,downloadable:!1,height:null,imageClassName:null,imageStyle:null,indicatorIcon:null,loading:null,onError:null,onHide:null,onShow:null,preview:!1,referrerPolicy:null,rotateLeftIcon:null,rotateRightIcon:null,src:null,template:null,useMap:null,width:null,zoomInIcon:null,zoomOutIcon:null,zoomSrc:null,children:void 0}});function lr(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),e.push.apply(e,t)}return e}function at(a){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?lr(Object(e),!0).forEach(function(t){Yo(a,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):lr(Object(e)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))})}return a}var Ta=d.memo(d.forwardRef(function(a,n){var e=d.useContext(Vt),t=ha.getProps(a,e),o=d.useState(!1),l=vt(o,2),i=l[0],u=l[1],h=d.useState(!1),g=vt(h,2),C=g[0],S=g[1],p=d.useState(0),m=vt(p,2),T=m[0],O=m[1],j=d.useState(1),M=vt(j,2),J=M[0],R=M[1],_=d.useRef(null),P=d.useRef(null),D=d.useRef(null),B=d.useRef(null),q=d.useRef(!1),A=ha.setMetaData({props:t,state:{maskVisible:i,previewVisible:C,rotate:T,scale:J}}),N=A.ptm,z=function(){t.preview&&(u(!0),setTimeout(function(){S(!0)},25))},Q=function(){q.current||(S(!1),O(0),R(1)),q.current=!1},K=function(){q.current=!0},ie=function(){var ge=t.alt,be=t.src;Pe.saveAs({name:ge,src:be}),q.current=!0},W=function(){O(function(ge){return ge+90}),q.current=!0},X=function(){O(function(ge){return ge-90}),q.current=!0},I=function(){R(function(ge){return ge+.1}),q.current=!0},k=function(){R(function(ge){return ge-.1}),q.current=!0},x=function(){st.set("modal",D.current,e&&e.autoZIndex||nt.autoZIndex,e&&e.zIndex.modal||nt.zIndex.modal)},L=function(){t.onShow&&t.onShow()},b=function(){Pe.addClass(D.current,"p-component-overlay-leave")},F=function(){t.onHide&&t.onHide()},c=function(){st.clear(D.current),u(!1)};vr(function(){D.current&&st.clear(D.current)});var y=function(){var ge=ce({className:"p-image-preview-indicator",onClick:z},N("button"));return t.preview?d.createElement("div",ge,ft):null},v=function(){var ge=t.downloadable,be=t.alt,tt=t.crossOrigin,Ge=t.referrerPolicy,He=t.useMap,Lt=t.loading,Gt={transform:"rotate("+T+"deg) scale("+J+")"},Ft=J<=.5,Ht=J>=1.5,Kt=ce(N("downloadIcon")),Jt=ce(N("rotateRightIcon")),Xt=ce(N("rotateLeftIcon")),Yt=ce(N("zoomOutIcon")),Ke=ce(N("zoomInIcon")),Zt=ce(N("closeIcon")),Dt=Ie.getJSXIcon(t.downloadIcon||d.createElement(jr,null),at({},Kt),{props:t}),Qt=Ie.getJSXIcon(t.rotateRightIcon||d.createElement(zr,null),at({},Jt),{props:t}),ea=Ie.getJSXIcon(t.rotateLeftIcon||d.createElement(Br,null),at({},Xt),{props:t}),ta=Ie.getJSXIcon(t.zoomOutIcon||d.createElement($r,null),at({},Yt),{props:t}),Ot=Ie.getJSXIcon(t.zoomInIcon||d.createElement(Vr,null),at({},Ke),{props:t}),aa=Ie.getJSXIcon(t.closeIcon||d.createElement(Fa,null),at({},Zt),{props:t}),ra=ce({ref:D,className:"p-image-mask p-component-overlay p-component-overlay-enter",onPointerUp:Q},N("mask")),na=ce({className:"p-image-toolbar"},N("toolbar")),oa=ce({className:"p-image-action p-link",onPointerUp:ie,type:"button"},N("downloadButton")),ia=ce({className:"p-image-action p-link",onPointerUp:W,type:"button"},N("rotateRightButton")),la=ce({className:"p-image-action p-link",onPointerUp:X,type:"button"},N("rotateLeftButton")),sa=ce({className:"p-image-action p-link",onPointerUp:k,type:"button",disabled:Ft},N("zoomOutButton")),de=ce({className:"p-image-action p-link",onPointerUp:I,type:"button",disabled:Ht},N("zoomInButton")),U=ce({className:"p-image-action p-link",type:"button","aria-label":Da("close")},N("closeButton")),ae=ce({src:t.zoomSrc||t.src,className:"p-image-preview",style:Gt,onPointerUp:K,crossOrigin:tt,referrerPolicy:Ge,useMap:He,loading:Lt},N("preview")),pe=ce({ref:B},N("previewContainer"));return d.createElement("div",ra,d.createElement("div",na,ge&&d.createElement("button",oa,Dt),d.createElement("button",ia,Qt),d.createElement("button",la,ea),d.createElement("button",sa,ta),d.createElement("button",de,Ot),d.createElement("button",U,aa)),d.createElement(Sr,{nodeRef:B,classNames:"p-image-preview",in:C,timeout:{enter:150,exit:150},unmountOnExit:!0,onEntering:x,onEntered:L,onExit:b,onExiting:F,onExited:c},d.createElement("div",pe,d.createElement("img",xt({alt:be},ae)))))};d.useImperativeHandle(n,function(){return{props:t,show:z,hide:Q,getElement:function(){return _.current},getImage:function(){return P.current}}});var f=t.src,E=t.alt,w=t.width,$=t.height,ee=t.crossOrigin,le=t.referrerPolicy,H=t.useMap,Y=t.loading,se=Ue("p-image p-component",t.className,{"p-image-preview-container":t.preview}),Z=v(),Ce="p-image-preview-icon",Oe=ce({className:Ce},N("icon")),Re=t.indicatorIcon||d.createElement(rn,Oe),Xe=Ie.getJSXIcon(Re,at({},Oe),{props:t}),ft=t.template?ve.getJSXElement(t.template,t):Xe,kt=y(),ue=ce({ref:P,src:f,className:t.imageClassName,width:w,height:$,crossOrigin:ee,referrerPolicy:le,useMap:H,loading:Y,style:t.imageStyle,onError:t.onError},N("image")),re=t.src&&d.createElement("img",xt({},ue,{alt:E})),ye=ce({ref:_,className:se},ha.getOtherProps(t),N("root"));return d.createElement("span",ye,re,kt,i&&d.createElement(Cr,{element:Z,appendTo:document.body}))}));Ta.displayName="Image";function ii({resetField:a,setValue:n,closeModal:e}){const[t,o]=d.useState(!1),[l,i]=d.useState([]),[u,h]=d.useState([]),[g,C]=d.useState([]),[S,p]=d.useState([]),[m,T]=d.useState(""),[O,j]=d.useState(!1),[M,J]=d.useState(!1),{getAllGroupService:R}=Lr(),{openNotification:_}=Ne(),{selecionedProducts:P}=we(v=>v),{getMedidaBaseService:D,getTipoItemProdutoService:B,getMarcaProdutoService:q,createProductsService:A,updateProductsService:N}=Nt(),{getDocument:z,loading:Q,guidDocument:K,getGuidDocument:ie,createOrUpdateDoc:W}=$t();return{verifySelectedproduct:v=>{const f=["Id","produto","descricao","medida_base","tipo_item","situacao","venda_padrao","venda_minima","venda_maxima","obrigar_rastreamento","tamanho_numero_serie","eh_recarga","eh_sem_estoque","eh_assinatura","marca","grupo","venda_varejo","venda_atacado","codigoSAP","descricaoSAP","situacao","CodigoExterno","codigoEAN","eh_alfanumerico","validade"];v?(setTimeout(()=>{f.forEach(E=>{a(E,{keepDirty:!0,defaultValue:v[E]}),E==="Id"&&(a("id",{keepDirty:!0,defaultValue:v[E]}),n("id",v[E])),E==="CodigoExterno"&&(a("CodigoExterno",{keepDirty:!0,defaultValue:v[E]}),n("CodigoExterno",v[E]))})},800),v.validade&&J(!0)):f.forEach(E=>{a(E,{keepDirty:!0,defaultValue:""})})},getMarcaProduto:()=>{q().then(v=>{v.data.filter(f=>f.ativo),p(v.data)}).catch(v=>{console.error(v),_("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getTipoItemProduto:()=>{B().then(v=>{C(v.data)}).catch(v=>{console.error(v),_("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getGrupoProduto:()=>{R().then(v=>{const f=v.data.filter(E=>E.ativo);h(f)}).catch(v=>{console.error(v),_("warn","Falha ao obter grupos disponíveis")})},getMedidaBase:()=>{D().then(v=>{const f=v.data.filter(E=>E.ativo);i(f)}).catch(v=>{console.error(v),_("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},createProduct:v=>{o(!0),A(v).then(f=>{let E=f.data[0].msg,w=f.data[0].erro,$=f.data[0].Id;if(w==="true"){_("warn","Falha",`${E||""}`);return}$&&m&&W(!1,{documento:m,nomearquivo:"product -"+$,documentothumb:"",tipo:"image/png",extensao:".png",origem:2},"produto",$),_("success","Sucesso",`${E||""}`),setTimeout(()=>e(),1e3)}).catch(f=>{console.error(f),_("error","Falha ao Cadastrar",`${f.response.data.msg}`,1e4)}).finally(()=>o(!1))},updateProduct:v=>{o(!0),N(v).then(f=>{let E=f.data[0].msg;if(f.data[0].erro==="true"){_("warn","Falha",`${E||""}`);return}_("success","Sucesso",`${E||""}`),setTimeout(()=>e(),1e3)}).catch(f=>{console.error(f),_("error","Falha ao Cadastrar",`${f.response.data.msg}`,1e4)}).finally(()=>o(!1))},selectImage:v=>{const f=new FileReader;let E=v.target.files[0];const w=E.name,$=E.type,ee="."+E.type.split("/")[1];f.readAsDataURL(E),f.onload=()=>{T(f.result),P&&W(O,{id:K?String(K):void 0,documento:String(f.result),nomearquivo:w,documentothumb:"",tipo:$,extensao:ee,origem:2},"produto",P==null?void 0:P.guid)}},getGuidDocument:ie,getPhoto:async v=>{const f=await z(v);f?(j(!0),T(f[0].documento)):console.log("falha ao obter foto")},getDocument:z,state:{loadingSaveBtn:t,listMedidas:l,listGrupoProduto:u,listTipoItemProduto:g,listMarcaProduto:S,imgBase64:m,setImgBase64:T,setExistPhoto:j,guidDocument:K,loading:Q,setHaveValidate:J,haveValidate:M}}}const li=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,si=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 15px;
`,Ur=G.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: max-content;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`,di=G.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`,ci=G.label`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  // transform: translateY(15px);
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type='checkbox'] {
    cursor: pointer;
  }
  & input[type='checkbox']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: 4px solid #d00;
  }
`;const ui=G.div`
  width: 120px;
  height: 140px;
  max-height: 145px;
  cursor: pointer;
  position: relative;
  & .pi-pencil {
    position: absolute;
    z-index: 99999;
    top: 45%;
    left: 25%;
    color: #ffffff;
    display: none;
    :hover {
      color: var(--cor-tema);
    }
  }
  &:hover {
    & .pi-pencil {
      display: block;
    }
  }
`,rt=G.section`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
    }
    label {
      font-size: 12px;
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`,pi=G.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  width: 100%;
  isolation: isolate;
  background: #6b7280;
  border-radius: 4px;
  & p {
    width: 186px;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
  }
`;G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;const lt=G.div`
  display: flex;
  align-items: center;
  height: 36px;
  gap: 5px;
  label {
    font-size: 14px;
  }
`;function fi(){const a=d.useRef(null),n=d.useRef(null),{openProdutos:e,formProdutos:t,selecionedProducts:o,refreshListProducts:l}=we(c=>c),{havePermission:i}=Ae(),{register:u,handleSubmit:h,watch:g,formState:{errors:C},reset:S,setValue:p,control:m,resetField:T,getValues:O}=ze({defaultValues:{id:0,situacao:"ATIVO",obrigar_rastreamento:!1,eh_recarga:!1,eh_sem_estoque:!1,eh_assinatura:!1,codigoSAP:"",descricaoSAP:"",CodigoExterno:"",codigoEAN:"",eh_alfanumerico:!1,validade:null}}),j=()=>{t(),S(),l(),Q.setImgBase64("")},{verifySelectedproduct:M,getMarcaProduto:J,getTipoItemProduto:R,getMedidaBase:_,getGrupoProduto:P,createProduct:D,updateProduct:B,selectImage:q,getDocument:A,getGuidDocument:N,getPhoto:z,state:Q}=ii({resetField:T,setValue:p,closeModal:j}),K=c=>{D(c)},ie=c=>{B(c)},W=s("div",{style:{display:"flex",justifyContent:"space-between",height:"10%"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:o?"Informações do produto":"Novo Produto"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>j()})]}),X=()=>j(),I=[{label:"Ativo",value:"ATIVO"},{label:"Inativo",value:"INATIVO"}],k=[{descricao:"30 Dias",valor:30},{descricao:"60 Dias",valor:60},{descricao:"90 Dias",valor:90}];d.useEffect(()=>(o!=null&&o.guid&&N(o==null?void 0:o.guid,"PRODUTO",1),()=>{Q.setExistPhoto(!1)}),[o==null?void 0:o.guid]),d.useEffect(()=>{Q.guidDocument?z(Q.guidDocument):console.log("não tem guid de foto")},[Q.guidDocument]),d.useEffect(()=>{_(),R(),J(),P()},[]),d.useEffect(()=>(M(o),window.addEventListener("keydown",c=>{var v;c.key==="Enter"&&(c.preventDefault(),a.current!==null&&((v=a.current)==null||v.click()))}),()=>{window.removeEventListener("keydown",()=>{}),S()}),[o]);const x=c=>c.click(),L=c=>c.replaceAll(" ","").toUpperCase(),b=g("obrigar_rastreamento"),F=r("div",{style:{paddingLeft:"20px"},children:r("i",{className:"pi pi-eye"})});return r(De,{visible:e,position:"center",onHide:X,closable:!1,breakpoints:{"820px":"100vw"},header:W,children:s(li,{onSubmit:h(o?ie:K),children:[r("input",{ref:n,type:"file",id:"foto",style:{display:"none"},onChange:q}),s(Ur,{children:[Q.loading?r("div",{style:{width:"100px",height:"100px"},children:r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}):Q.imgBase64?s(ui,{children:[r("i",{className:"pi pi-pencil",onClick:()=>{x(n.current)}}),r(Ta,{src:Q.imgBase64,template:F,alt:"foto selecionada",preview:!0,width:"120",height:"140",downloadable:!0})]}):s(ci,{htmlFor:o&&o&&!i(fe.PRODUTO,oe.ALTERAR)?"txt":"foto",children:[r("i",{className:"pi pi-camera"}),r("span",{children:"Escolher Foto"})]}),s(di,{children:[s(rt,{style:{paddingTop:"10px"},children:[o&&r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>s("span",{className:"p-float-label",style:{width:"15%",cursor:"not-allowed"},children:[r(te,{id:"id",style:{width:"100%"},value:String(v),disabled:!0,...u("id",{required:!0})}),r("label",{htmlFor:"id",children:"Código"})]}),name:"id",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"produto",style:{width:"100%"},value:v,maxLength:18,...u("produto",{required:!0}),onChange:Y=>c(L(Y.target.value)),className:((H=C.produto)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:!!o}),s("label",{htmlFor:"produto",children:["Cód. Produto",r("span",{children:"*"})]})]})},name:"produto",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"descricao",style:{width:"100%"},value:v,...u("descricao",{required:!0}),className:((H=C.descricao)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(fe.PRODUTO,oe.ALTERAR):!1}),s("label",{htmlFor:"descricao",children:["Descrição",r("span",{children:"*"})]})]})},name:"descricao",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"medida_base",value:v,optionLabel:"descricao",optionValue:"id",options:Q.listMedidas,style:{width:"100%"},placeholder:"Medida Base",onChange:Y=>c(Y.value),className:((H=C.medida_base)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(fe.PRODUTO,oe.ALTERAR):!1,optionDisabled:Y=>!Y.ativo}),s("label",{htmlFor:"medida_base",children:["Medida",r("span",{children:"*"})]})]})},name:"medida_base",control:m,rules:{required:!0}})]}),s(rt,{children:[r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"tipo_item",value:v,optionLabel:"descricao",optionValue:"id",options:Q.listTipoItemProduto,filter:!0,style:{width:"100%"},placeholder:"Tipo",onChange:Y=>{c(Y.value),Y.value===Q.listTipoItemProduto.find(se=>se.recarga).id?(p("eh_recarga",!0),p("eh_sem_estoque",!0)):p("eh_recarga",!1)},className:((H=C.tipo_item)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(fe.PRODUTO,oe.ALTERAR):!1,optionDisabled:Y=>!Y.ativo}),s("label",{htmlFor:"tipo_item",children:["Tipo",r("span",{children:"*"})]})]})},name:"tipo_item",control:m,rules:{required:!0}}),r(V,{name:"situacao",control:m,rules:{required:!0},render:({field:c,fieldState:y})=>{var v;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"150px"},children:[r(me,{value:c.value,optionLabel:"label",optionValue:"value",style:{width:"100%",height:"36px"},placeholder:"Status",name:"situacao",options:I,onChange:f=>c.onChange(f.value),className:((v=C.situacao)==null?void 0:v.type)==="required"?"p-invalid":"",disabled:o?o&&!i(fe.PRODUTO,oe.ALTERAR):!1}),r("label",{htmlFor:"situacao",children:"Status"})]})}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{value:v,onChange:Y=>c(Y.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"36px"},className:((H=C.venda_minima)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1010,oe.ALTERAR):!1}),s("label",{htmlFor:"venda_minima",children:["Valor Minimo (R$)",r("span",{children:"*"})]})]})},name:"venda_minima",control:m,rules:{required:!0}}),r(V,{name:"venda_maxima",control:m,rules:{required:!0},render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{className:((H=C.venda_maxima)==null?void 0:H.type)==="required"?"p-invalid":"",value:v,onChange:Y=>c(Y.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"36px"},disabled:o?o&&!i(1010,oe.ALTERAR):!1}),s("label",{htmlFor:"venda_maxima",children:["Valor Máximo (R$)",r("span",{children:"*"})]})]})}}),r(V,{name:"venda_padrao",control:m,rules:{required:!0},render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{className:((H=C.venda_padrao)==null?void 0:H.type)==="required"?"p-invalid":"",value:v,onChange:Y=>c(Y.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"36px"},disabled:o?o&&!i(1010,oe.ALTERAR):!1}),s("label",{htmlFor:"venda_padrao",children:["Valor Padrão (R$)",r("span",{children:"*"})]})]})}})]})]})]}),r(rt,{children:r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"codigoEAN",style:{width:"100%"},value:v,maxLength:13,...u("codigoEAN",{required:!1}),onChange:Y=>c(L(Y.target.value)),className:((H=C.codigoEAN)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1010,oe.ALTERAR):!1}),r("label",{htmlFor:"codigoEAN",children:"Código EAN"})]})},name:"codigoEAN",control:m,rules:{required:!1}})}),s(rt,{children:[s(rt,{style:{paddingTop:"10px",gap:"25px"},children:[r(V,{name:"obrigar_rastreamento",control:m,rules:{required:!1},render:({field:c,fieldState:y})=>s(lt,{children:[r(Te,{inputId:c.name,checked:c.value,inputRef:c.ref,onChange:v=>c.onChange(v.checked),disabled:o?o&&!i(1010,oe.ALTERAR):!1}),r("label",{htmlFor:c.name,children:"Obrigar Rastreamento"})]})}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1,maxWidth:"150px"},children:[r(Fe,{className:((H=C.tamanho_numero_serie)==null?void 0:H.type)==="required"?"p-invalid":"",value:v,onChange:Y=>c(Y.value),useGrouping:!1,style:{width:"100%"},disabled:o?o&&!i(1010,oe.ALTERAR):!1}),s("label",{htmlFor:"tamanho_numero_serie",children:["Tamanho Nº Série",b&&r("span",{children:"*"})]})]})},name:"tamanho_numero_serie",control:m,rules:{required:b}}),r(V,{name:"eh_alfanumerico",control:m,rules:{required:!1},render:({field:c,fieldState:y})=>s(lt,{style:{paddingLeft:"15px"},children:[r(Te,{inputId:c.name,checked:c.value,inputRef:c.ref,onChange:v=>c.onChange(v.checked),disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:c.name,children:"Alfanumérico"})]})})]}),r(pi,{children:r("p",{children:"Dados Complementares"})}),r(V,{name:"eh_recarga",control:m,rules:{required:!1},render:({field:c,fieldState:y})=>s(lt,{children:[r(Te,{inputId:c.name,checked:c.value,inputRef:c.ref,onChange:v=>{c.onChange(v.checked),v.checked===!0?(p("eh_sem_estoque",!0),p("tipo_item",Q.listTipoItemProduto.find(f=>f.recarga).id)):p("tipo_item",0)},disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:c.name,children:"Recarga Online"})]})}),r(V,{name:"eh_sem_estoque",control:m,rules:{required:!1},render:({field:c,fieldState:y})=>s(lt,{children:[r(Te,{inputId:c.name,checked:c.value,inputRef:c.ref,onChange:v=>{c.onChange(v.checked),v.checked===!1&&(p("eh_recarga",!1),O("tipo_item")===Q.listTipoItemProduto.find(f=>f.recarga).id&&p("tipo_item",0))},disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:c.name,children:"Não Movimenta Estoque"})]})}),r(V,{name:"eh_assinatura",control:m,rules:{required:!1},render:({field:c,fieldState:y})=>s(lt,{children:[r(Te,{inputId:c.name,checked:c.value,inputRef:c.ref,onChange:v=>c.onChange(v.checked),disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:c.name,children:"Assinatura"})]})}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"marca",value:v,optionLabel:"descricao",optionValue:"id",options:Q.listMarcaProduto,filter:!0,style:{width:"100%"},placeholder:"Marca",onChange:Y=>c(Y.value),className:((H=C.marca)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1010,5):!1,optionDisabled:Y=>!Y.ativo}),s("label",{htmlFor:"marca",children:["Marca",r("span",{children:"*"})]})]})},name:"marca",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"grupo",value:v,optionLabel:"descricao",optionValue:"grupo",options:Q.listGrupoProduto,filter:!0,style:{width:"100%"},placeholder:"Grupo",onChange:Y=>c(Y.value),className:((H=C.grupo)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1010,5):!1}),s("label",{htmlFor:"grupo",children:["Grupo",r("span",{children:"*"})]})]})},name:"grupo",control:m,rules:{required:!0}})]}),s(rt,{children:[r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{className:((H=C.venda_varejo)==null?void 0:H.type)==="required"?"p-invalid":"",value:v,onChange:Y=>c(Y.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%"},disabled:o?o&&!i(1010,5):!1}),s("label",{htmlFor:"venda_varejo",children:["Preco Venda Varejo",r("span",{children:"*"})]})]})},name:"venda_varejo",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{className:((H=C.venda_atacado)==null?void 0:H.type)==="required"?"p-invalid":"",value:v,onChange:Y=>c(Y.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%"},disabled:o?o&&!i(1010,5):!1}),s("label",{htmlFor:"venda_atacado",children:["Preço Venda Atacado",r("span",{children:"*"})]})]})},name:"venda_atacado",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"codigoSAP",value:v,style:{width:"100%"},...u("codigoSAP",{required:!1}),disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:"codigoSAP",children:"Código SAP"})]}),name:"codigoSAP",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"descricaoSAP",value:v,style:{width:"100%"},...u("descricaoSAP",{required:!1}),disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:"descricaoSAP",children:"Descrição SAP"})]}),name:"descricaoSAP",control:m,rules:{required:!1}})]}),s(rt,{children:[s(lt,{children:[r(Te,{inputId:"tem_validade",checked:Q.haveValidate,onChange:c=>{Q.setHaveValidate(c.checked),c.checked?p("validade",90):p("validade",null)},disabled:o?o&&!i(1010,5):!1}),r("label",{htmlFor:"tem_validade",children:"Possui Validade"})]}),r(V,{render:({field:{onChange:c,onBlur:y,value:v,name:f,ref:E},fieldState:{invalid:w,isTouched:$,isDirty:ee,error:le}})=>{var H;return s("span",{className:"p-float-label",style:{flex:1,maxWidth:300},children:[r(me,{id:"validade",value:v,optionLabel:"descricao",optionValue:"valor",options:k,style:{width:"100%"},placeholder:"Validade",onChange:Y=>c(Y.value),className:((H=C.validade)==null?void 0:H.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1010,5):!Q.haveValidate}),r("label",{htmlFor:"validade",children:"Validade"})]})},name:"validade",control:m,rules:{required:!1}})]}),r(si,{children:r(xe,{label:"Salvar",ref:a,loading:Q.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(C),disabled:o?o&&!i(1010,5):!1})})]})})}const mi=G(De)`
  max-height: 80vh;
  @media screen and (max-width: 820px) {
    font-size: 0.7em;
  }
`,hi=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  overflow-y: auto;
`,gi=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 5px;
  padding-right: 20px;
`;G.label`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  transform: translateY(15px);
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`;const Wr=G.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid ${a=>a.theme.colors.primary};
  }
`;G.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 50%;
`;const ht=G.section`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .p-calendar .p-button {
    background: ${a=>a.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
  .p-dropdown .p-dropdown-label {
    font-size: 12px;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    font-size: 12px;
  }
  .container-numero {
    display: flex;
    gap: 15px;
    flex: 1;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`;G.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  isolation: isolate;
  background: #6b7280;
  border-radius: 4px;
  & p {
    width: 186px;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
  }
`;const sr=G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Ut(a){if(a=a.replace(/[^\d]+/g,""),a==""||a.length!=14||a=="00000000000000"||a=="11111111111111"||a=="22222222222222"||a=="33333333333333"||a=="44444444444444"||a=="55555555555555"||a=="66666666666666"||a=="77777777777777"||a=="88888888888888"||a=="99999999999999")return!1;let n=a.length-2,e=a.substring(0,n),t=a.substring(n),o=0,l=n-7;for(let u=n;u>=1;u--)o+=e.charAt(n-u)*l--,l<2&&(l=9);let i=o%11<2?0:11-o%11;if(i!=t.charAt(0))return!1;n=n+1,e=a.substring(0,n),o=0,l=n-7;for(let u=n;u>=1;u--)o+=e.charAt(n-u)*l--,l<2&&(l=9);return i=o%11<2?0:11-o%11,i==t.charAt(1)}function Wt(a){if(a=a.replace(/[^\d]+/g,""),a==""||a.length!=11||a=="00000000000"||a=="11111111111"||a=="22222222222"||a=="33333333333"||a=="44444444444"||a=="55555555555"||a=="66666666666"||a=="77777777777"||a=="88888888888"||a=="99999999999")return!1;let n=0;for(let t=0;t<9;t++)n+=parseInt(a.charAt(t))*(10-t);let e=11-n%11;if((e==10||e==11)&&(e=0),e!=parseInt(a.charAt(9)))return!1;n=0;for(let t=0;t<10;t++)n+=parseInt(a.charAt(t))*(11-t);return e=11-n%11,(e==10||e==11)&&(e=0),e==parseInt(a.charAt(10))}function yi(){const[a,n]=d.useState(!1),[e,t]=d.useState([]),[o,l]=St.useState([]),[i,u]=d.useState([]),[h,g]=d.useState(null),[C,S]=d.useState([]),[p,m]=d.useState([]),[T,O]=d.useState(!1),[j,M]=d.useState("CPF"),[J,R]=d.useState(!1),{service:_}=wr(),{openNotification:P}=Ne(),{getOrgaoExpeditorService:D}=Pa(),{tokenSignature:B,storeUser:q}=We(v=>v),{getCepCodesInfoService:A,getListCidadesService:N,getListHeighborhoodService:z,getTipoLogradouroService:Q}=Pt(),{createNewClientService:K,editClientService:ie}=Fr(),W=(v,f,E,w,$,ee,le)=>{f?setTimeout(()=>{f.cpf_cnpj.length>11&&!v&&M("CNPJ"),f.cpf_cnpj.length<=11&&!v&&M("CPF"),["nome","cliente","cpf_cnpj","razao_social","rg_ie","data_nascimento","telefone1","email","cep","logradouro","complemento","endereco","situacao","orgao_expeditor"].forEach(Y=>{if(Y==="data_nascimento"){if(f.data_nascimento){let se=String(f.data_nascimento).split("T")[0].replaceAll("-","/");E(new Date(se))}w("data_nascimento",{keepDirty:!0,defaultValue:$==null?void 0:$.toISOString()})}w(Y,{keepDirty:!0,defaultValue:f[Y]}),Y==="telefone1"&&w("telefone1",{keepDirty:!0,defaultValue:`${f.fone_ddd1}${f.telefone1}`}),Y==="cep"&&w("cep",{keepDirty:!0,defaultValue:et(f[Y])}),Y==="orgao_expeditor"&&(w("orgao_expeditor",{keepDirty:!0,defaultValue:f.orgao_expeditor}),le("orgao_expeditor",Number(f[Y]))),Y==="razao_social"&&(w("razao_social",{keepDirty:!0,defaultValue:f.razao_social}),le("razao_social",String(f[Y]))),f.rg_ie==="ISENTO"&&ee(!0),f.logradouro==="S/N"&&R(!0)})},800):(["nome","cpf_cnpj","razao_social","rg_ie","orgao_expeditor","data_nascimento","telefone1","email","cep","tipo_logradouro","logradouro","complemento","endereco","cidade","bairro","uf"].forEach(Y=>{w(Y,{keepDirty:!0,defaultValue:""})}),t([]),u([]),E(null))},X=()=>{D().then(v=>{m(v.data)}).catch(v=>{console.error(v),P("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},I=async(v,f)=>{N(v).then(E=>{t(E.data),setTimeout(()=>{h!=null&&h.codcidade&&(f("cidade",h==null?void 0:h.codcidade),k(h==null?void 0:h.codcidade,f))},500)}).catch(E=>{console.error(E),P("warn","Falha ao obter lista de cidades disponíveis")})},k=async(v,f)=>{z(v).then(E=>{u(E.data),h!=null&&h.codbairro&&f("bairro",h==null?void 0:h.codbairro)}).catch(E=>{console.error(E),P("warn","Falha ao obter lista de bairros disponíveis")})},x=async(v,f)=>{A(v).then(E=>{let w=E.data[0];E.data.length||P("warn","Falha","CEP não encontrado!"),g(w),f("uf",w.uf),I(w.uf,f),w.siglatipologradouro&&f("tipo_logradouro",w.siglatipologradouro.toUpperCase()),w.codcidade&&(f("cidade",w.codcidade),k(w.codcidade,f)),w.codbairro&&f("bairro",w.codbairro),w.logradouro&&f("endereco",w.logradouro)}).catch(E=>console.log(E)).finally(()=>n(!1))},L=async()=>{try{const v=await _(B).get(`/segmento?empresa=${q}`);S(v.data)}catch(v){console.error(v),P("warn","Falha ao obter lista de segmentos disponíveis")}},b=()=>{Q().then(v=>{l(v.data)}).catch(v=>console.log(v))};function F(v){if(v.length<=11){if(!Wt(v))return P("warn","CPF inválido."),!1}else if(!Ut(v))return P("warn","CNPJ inválido."),!1;return!0}return{verifySelectedClient:W,getOrgaosExp:X,getCepCodesInfo:x,getListHeighborhood:k,getListCidades:I,getListSegmentos:L,getTipoLogradouro:b,updateClient:(v,f)=>{F(ke(v.cpf_cnpj))&&(O(!0),ie(v,j,J).then(E=>{let w=E.data[0].msg;if(E.data[0].erro==="true"){P("warn","Falha",`${w||""}`);return}P("success","Sucesso",`${w||""}`),setTimeout(()=>{f()},800)}).catch(E=>{console.error(E),P("error","Falha ao Cadastrar",`${E.response.data.msg}`,1e4)}).finally(()=>O(!1)))},createClient:(v,f)=>{F(ke(v.cpf_cnpj))&&(O(!0),K(v,j,J).then(E=>{let w=E.data[0].msg;if(E.data[0].erro==="true"){P("warn","Falha",`${w||""}`);return}P("success","Sucesso",`${w||""}`),setTimeout(()=>f(),1e3)}).catch(E=>{console.error(E),P("error","Falha ao Cadastrar",`${E.response.data.msg}`,1e4)}).finally(()=>O(!1)))},state:{loadingCep:a,setLoadingCep:n,listOfCities:e,tipoLogradouroLista:o,listOfNeighborhood:i,resultSearchCep:h,setResultSearchCep:g,listSegmentos:C,listOrgaoExp:p,loadingSaveBtn:T,tipoCadastro:j,setTipocadastro:M,snState:J,setSN:R}}}function vi(){const{tokenSignature:a}=We(f=>f);d.useRef(null);const n=d.useRef(null),[e,t]=d.useState(""),[o,l]=d.useState(null),{openClientes:i,formClientes:u,refreshListClients:h,selecionedClient:g}=we(f=>f),[C,S]=d.useState(""),[p,m]=d.useState(!1),T=new Date().toISOString(),{havePermission:O}=Ae(),{verifySelectedClient:j,getOrgaosExp:M,getCepCodesInfo:J,getListHeighborhood:R,getListCidades:_,getTipoLogradouro:P,getListSegmentos:D,updateClient:B,createClient:q,state:A}=yi(),{register:N,handleSubmit:z,watch:Q,formState:{errors:K},reset:ie,setValue:W,control:X,resetField:I}=ze({defaultValues:{cliente:0,situacao:"ATIVO",datacadastro:T,razao_social:"",complemento:"",segmento:1,orgao_expeditor:null,rg_ie:""}}),k=async f=>{q(f,b)},x=async f=>{B(f,b)},L=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:g?"Informações do Cliente":"Novo Cliente"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>b()})]}),b=()=>{ie(),u(),t(""),m(!1),A.setSN(!1),h()},F=Q("cep");function c(f){const E=Date.now()-f.getTime(),w=new Date(E),$=Math.abs(w.getUTCFullYear()-1970);return S(String($)),$}d.useEffect(()=>{let f=F?ke(F):"";W("cep",et(f)),f.length>=8&&(A.setLoadingCep(!0),J(f,W))},[F]),d.useEffect(()=>{p?W("rg_ie","ISENTO"):A.tipoCadastro!="CPF"&&W("rg_ie","")},[p]),d.useEffect(()=>{a&&(M(),D(),P())},[a]),d.useEffect(()=>(j(!1,g,l,I,o,m,W),window.addEventListener("keydown",f=>{var w;f.key==="Enter"&&(f.preventDefault(),n.current!==null&&((w=n.current)==null||w.click()))}),()=>{window.removeEventListener("keydown",()=>{}),ie(),A.setResultSearchCep(null)}),[g]);const y=Q("rg_ie"),v=[{label:"Ativo",value:"ATIVO"},{label:"Inativo",value:"INATIVO"}];return r(mi,{visible:i,position:"center",onHide:b,closable:!1,breakpoints:{"940px":"75vw","820px":"100vw"},header:L,children:s(hi,{onSubmit:z(g?x:k),children:[s(ht,{style:{paddingTop:"10px"},children:[s(Wr,{children:[r("input",{type:"radio",value:"CPF",name:"tipo",id:"cpf",onChange:f=>{A.setTipocadastro(f.target.value),j(!0,g,l,I,o,m,W)},checked:A.tipoCadastro==="CPF",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"cpf",children:"CPF"}),r("input",{type:"radio",value:"CNPJ",name:"tipo",id:"cnpj",onChange:f=>{A.setTipocadastro(f.target.value),j(!0,g,l,I,o,m,W)},checked:A.tipoCadastro==="CNPJ",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"cnpj",children:"CNPJ"})]}),g&&r(V,{render:({fieldState:{invalid:f,isTouched:E,isDirty:w,error:$},field:ee})=>{var le;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{tabIndex:1,id:"cliente",value:String(ee.value),style:{width:"100%"},...N("cliente"),disabled:!0,className:((le=K.cliente)==null?void 0:le.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"cliente",children:"Código"})]})},name:"cliente",control:X,rules:{required:!1}}),A.tipoCadastro==="CPF"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:g?"70%":"80%",flex:1},children:[r(te,{id:"nome",autoFocus:!0,value:w,maxLength:100,style:{width:"100%"},...N("nome"),className:((Z=K.nome)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"nome",children:["Nome Completo",r("span",{children:"*"})]})]})},name:"nome",control:X,rules:{required:A.tipoCadastro==="CPF"}}),A.tipoCadastro==="CNPJ"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"40%",flex:1},children:[r(te,{id:"razao_social",style:{width:"100%"},value:w,autoFocus:!0,...N("razao_social"),maxLength:100,className:((Z=K.razao_social)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"razao_social",children:["Razão Social",r("span",{children:"*"})]})]})},name:"razao_social",control:X,rules:{required:A.tipoCadastro==="CNPJ"}}),A.tipoCadastro==="CNPJ"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"30%",flex:1},children:[r(te,{id:"nome",style:{width:"100%"},...N("nome"),value:w,maxLength:75,className:((Z=K.nome)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"nome",children:["Nome Fantasia",r("span",{children:"*"})]})]})},name:"nome",control:X,rules:{required:A.tipoCadastro==="CNPJ"}})]}),s(ht,{children:[A.tipoCadastro==="CPF"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"40%",flex:1},children:[r(te,{id:"cpf",style:{width:"100%"},...N("cpf_cnpj"),maxLength:14,value:w,onChange:Ce=>f(Oa(Ce.target.value)),className:((Z=K.cpf_cnpj)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"cpf_cnpj",children:["CPF",r("span",{children:"*"})]})]})},name:"cpf_cnpj",control:X,rules:{required:A.tipoCadastro==="CPF"}}),A.tipoCadastro==="CNPJ"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"35%",flex:1},children:[r(te,{id:"cnpj",style:{width:"100%"},...N("cpf_cnpj"),value:w,maxLength:18,onChange:Ce=>f(Bt(Ce.target.value)),className:((Z=K.cpf_cnpj)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"cpf_cnpj",children:["CNPJ",r("span",{children:"*"})]})]})},name:"cpf_cnpj",control:X,rules:{required:A.tipoCadastro==="CNPJ"}}),s("div",{className:"container-numero",children:[A.tipoCadastro==="CNPJ"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"120px",flex:1},children:[r(te,{id:$,style:{width:"100%"},...N("rg_ie"),value:w,maxLength:20,className:((Z=K.rg_ie)==null?void 0:Z.type)==="required"?"p-invalid":"",onChange:Ce=>{const Oe=Ce.target.value.replace(/\D/g,"");f(Oe)},disabled:p||(g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1)}),s("label",{htmlFor:"rg_ie",children:["Inscrição Estadual",r("span",{children:"*"})]})]})},name:"rg_ie",control:X,rules:{required:!0}}),A.tipoCadastro==="CNPJ"&&s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"isento",name:"isento",value:p,onChange:f=>m(f.checked),checked:p,disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"isento",className:"ml-1",children:"Isento"})]})]}),A.tipoCadastro==="CNPJ"&&r(V,{name:"segmento",control:X,rules:{required:!1},render:({field:f,fieldState:E})=>{var w;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"120px"},children:[r(me,{value:f.value,optionLabel:"descricao",optionValue:"segmento",placeholder:"Segmento",options:A.listSegmentos,onChange:$=>f.onChange(Number($.value)),className:((w=K.segmento)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),r("label",{htmlFor:"segmento",children:"Segmento"})]})}}),A.tipoCadastro==="CPF"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"31%",flex:1},children:[r(te,{id:"rg_ie",style:{width:"100%"},...N("rg_ie"),maxLength:20,value:w,onChange:Ce=>f(Ce.target.value),className:((Z=K.rg_ie)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"rg_ie",children:"RG"})]})},name:"rg_ie",control:X,rules:{required:!1}}),A.tipoCadastro==="CPF"&&r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:w,optionLabel:"descricao",optionValue:"id",placeholder:"Orgão Emissor",name:"orgao_expeditor",options:A.listOrgaoExp,filter:!0,onChange:Ce=>f(Ce.value),className:((Z=K.orgao_expeditor)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1,optionDisabled:Ce=>!Ce.ativo,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"orgao_expeditor",children:["Orgão Emissor",A.tipoCadastro==="CPF"&&(y==null?void 0:y.length)>0&&r("span",{children:"*"})]})]})},name:"orgao_expeditor",control:X,rules:{required:A.tipoCadastro==="CPF"&&(y==null?void 0:y.length)>0}})]}),s(ht,{children:[r(V,{name:"data_nascimento",control:X,rules:{required:!1},render:({field:f,fieldState:E})=>{var w;return s("span",{className:"p-float-label",style:{flex:1},children:[r(dt,{value:o,mask:"99/99/9999",onChange:$=>{f.onChange(new Date($.value).toISOString()),S(String(c($.value))),l($.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:A.tipoCadastro==="CPF"?"Data de Nascimento":"Data de Abertura",inputId:"data_nascimento",className:((w=K.data_nascimento)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"data_nascimento",children:A.tipoCadastro==="CPF"?"Data de Nascimento":"Data de Abertura"})]})}}),r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"115px"},children:[r(te,{id:"telefone",style:{width:"100%"},value:w,...N("telefone1"),className:((Z=K.telefone1)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1,maxLength:14,onChange:Ce=>f(wt(Ce.target.value))}),r("label",{htmlFor:"telefone1",children:"DDD + Telefone"})]})},name:"telefone1",control:X,rules:{required:!1}}),r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"35%",flex:1},children:[r(te,{id:"email",style:{width:"100%"},value:w,maxLength:50,...N("email",{required:!1}),className:((Z=K.email)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),r("label",{htmlFor:"email",children:"E-mail"})]})},name:"email",control:X,rules:{required:!1}})]}),s(ht,{children:[r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z,Ce,Oe,Re,Xe;return s("span",{className:"p-float-label p-input-icon-right",style:{minWidth:"15%",flex:1},children:[((Z=K.cep)==null?void 0:Z.type)==="maxLength"&&r(sr,{children:"maximo de 8 caracteres!"}),((Ce=K.cep)==null?void 0:Ce.type)==="minLength"&&r(sr,{children:"minimo de 8 caracteres!"}),A.loadingCep&&r("i",{className:"pi pi-spin pi-spinner",style:{top:"10px"}}),r(te,{id:"cep",style:{width:"100%"},maxLength:9,...N("cep",{required:!0,maxLength:9,minLength:9}),value:w,className:((Oe=K.cep)==null?void 0:Oe.type)==="required"||((Re=K.cep)==null?void 0:Re.type)==="maxLength"||((Xe=K.cep)==null?void 0:Xe.type)==="minLength"?"p-invalid":"",disabled:g?g&&!O(fe.CLIENTE,oe.ALTERAR):!1}),s("label",{htmlFor:"cep",children:["CEP",r("span",{children:"*"})]})]})},name:"cep",control:X,rules:{required:!0}}),r(V,{name:"uf",control:X,rules:{required:!0},render:({field:f,fieldState:E})=>{var w;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:f.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:$=>{f.onChange($.value),_($.value,W)},className:((w=K.uf)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"cidade",control:X,rules:{required:!0},render:({field:f,fieldState:E})=>{var w,$,ee;return((w=A.listOfCities)==null?void 0:w.length)===0?s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"cidade",style:{width:"100%"},...N("cidade",{required:!0}),className:(($=K.cidade)==null?void 0:$.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]}):s("span",{className:"p-float-label",style:{minWidth:"20%",fontSize:"12px",flex:1},children:[r(me,{value:f.value,optionLabel:"nome",optionValue:"cidade",placeholder:"Cidade",name:"cidade",options:A.listOfCities,onChange:le=>{f.onChange(le.value),R(le.value,W)},className:((ee=K.cidade)==null?void 0:ee.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]})}}),r(V,{name:"tipo_logradouro",control:X,rules:{required:!0},render:({field:f,fieldState:E})=>{var w;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:f.value,optionLabel:"descricao",optionValue:"tipo",placeholder:"Tipo de logradouro",name:"tipo_logradouro",options:A.tipoLogradouroLista,onChange:$=>f.onChange($.value),className:((w=K.tipo_logradouro)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"tipo_logradouro",children:["Tipo de Logradouro",r("span",{children:"*"})]})]})}}),r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"endereco",value:w,style:{width:"100%"},...N("endereco"),className:((Z=K.endereco)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1}),s("label",{htmlFor:"endereco",children:["Endereço",r("span",{children:"*"})]})]})},name:"endereco",control:X,rules:{required:!0}})]}),s(ht,{children:[s("div",{className:"container-numero",children:[r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z;return s("span",{className:"p-float-label",style:{minWidth:"10%",flex:1},children:[r(te,{id:"logradouro",style:{width:"100%"},...N("logradouro"),value:w,maxLength:10,className:((Z=K.logradouro)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:A.snState||g?g&&!O(1025,5):!1}),s("label",{htmlFor:"logradouro",children:["N°",A.snState?"":r("span",{children:"*"})]})]})},name:"logradouro",control:X,rules:{required:!A.snState}}),s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"sn",name:"sn",value:A.snState,onChange:f=>A.setSN(f.checked),checked:A.snState||g?g&&!O(1025,5):!1}),r("label",{htmlFor:"sn",className:"ml-1",children:"S/N"})]})]}),r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>{var Z,Ce;return A.listOfNeighborhood.length===0?s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"bairro",...N("bairro"),style:{width:"100%"},className:((Z=K.bairro)==null?void 0:Z.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1}),r("label",{htmlFor:"bairro",children:"Bairro"})]}):s("span",{className:"p-float-label",style:{minWidth:"20%",fontSize:"12px",flex:1},children:[r(me,{value:w,optionLabel:"nome",optionValue:"bairro",placeholder:"Bairro",name:"bairro",options:A.listOfNeighborhood,onChange:Oe=>{f(Oe.value)},className:((Ce=K.bairro)==null?void 0:Ce.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"bairro",children:["Bairro",r("span",{children:"*"})]})]})},name:"bairro",control:X,rules:{required:!0}}),r(V,{render:({field:{onChange:f,onBlur:E,value:w,name:$,ref:ee},fieldState:{invalid:le,isTouched:H,isDirty:Y,error:se}})=>s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"complemento",value:w,maxLength:100,...N("complemento"),style:{width:"100%"},disabled:g?g&&!O(1025,5):!1}),r("label",{htmlFor:"complemento",children:"Complemento"})]}),name:"complemento",control:X,rules:{required:!1}}),r(V,{name:"situacao",control:X,rules:{required:!0},render:({field:f,fieldState:E})=>{var w;return s("span",{className:"p-float-label",style:{minWidth:"15%",flex:1},children:[r(me,{value:f.value,optionLabel:"label",optionValue:"value",style:{width:"100%",height:"36px"},placeholder:"Status",name:"situacao",options:v,onChange:$=>f.onChange($.value),className:((w=K.situacao)==null?void 0:w.type)==="required"?"p-invalid":"",disabled:g?g&&!O(1025,5):!1}),r("label",{htmlFor:"situacao",children:"Status"})]})}})]}),r(gi,{children:r(xe,{label:"Salvar",ref:n,loading:A.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(K),disabled:g?g&&!O(1025,5):!1})})]})})}function bi({resetField:a,selecionedGroup:n,closeModal:e}){const[t,o]=d.useState(!1),{createGroupService:l,editGroupService:i}=Lr(),{openNotification:u}=Ne();return{verifySelectedPlan:()=>{n?setTimeout(()=>{["grupo","descricao","ativo"].forEach(p=>{a(p,{keepDirty:!0,defaultValue:n[p]})})},800):["grupo","descricao","ativo"].forEach(p=>{p==="grupo"&&a(p,{keepDirty:!0,defaultValue:0}),p==="ativo"&&a(p,{keepDirty:!0,defaultValue:!1}),a(p,{keepDirty:!0,defaultValue:""})})},createGroup:S=>{o(!0),l(S).then(p=>{let m=p.data[0].msg,T=p.data[0].erro;if(T&&T=="true"){u("error","Falha ao Cadastrar",`${m||"Erro ao cadastrar"}`,1e4);return}T&&T=="false"&&u("success","Sucesso",`${m||"Cadastro realizado com sucesso"}`),setTimeout(()=>{e()},1e3)}).catch(p=>{console.error(p),u("error","Falha ao Cadastrar",`${p.response.data.msg}`,1e4)}).finally(()=>o(!1))},updateGroup:S=>{o(!0),i(S).then(p=>{let m=p.data[0].msg,T=p.data[0].erro;if(T&&T=="true"){u("error","Falha",`${m||"Erro ao atualizar"}`,1e4);return}T&&T=="false"&&u("success","Sucesso",`${m||"Processo realizado com sucesso"}`),e()}).catch(p=>{console.error(p),u("error","Falha ao Processar",`${p.response.data.msg}`,1e4)}).finally(()=>o(!1))},state:{loadingBtn:t}}}const xi=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Ci=G.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`,Si=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;G.label`
  width: 120px;
  height: 120px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  width: 100%;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #d00;
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const wi=G.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
`;G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Ei(){const a=d.useRef(null),{openGrupos:n,formGrupos:e,refreshListGrupos:t,selecionedGroup:o}=we(P=>P),{havePermission:l}=Ae(),{register:i,handleSubmit:u,formState:{errors:h},reset:g,control:C,setValue:S,resetField:p}=ze({defaultValues:{grupo:0,ativo:!0,CodigoExterno:""}}),m=()=>{g(),S("descricao",""),e(),t()},{verifySelectedPlan:T,createGroup:O,updateGroup:j,state:M}=bi({resetField:p,selecionedGroup:o,closeModal:m}),J=P=>{O(P)},R=async P=>{j(P)},_=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:o?"Informações do Grupo de Produto":"Novo Grupo"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>m()})]});return d.useEffect(()=>(T(),window.addEventListener("keydown",P=>{var B;P.key==="Enter"&&(P.preventDefault(),a.current!==null&&((B=a.current)==null||B.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[o]),r(De,{visible:n,position:"center",onHide:m,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},style:{minWidth:"40vw"},header:_,children:s(xi,{onSubmit:u(o?R:J),children:[r(Ci,{children:"Dados do Grupo de Produto"}),s(wi,{style:{paddingTop:"15px"},children:[o&&r(V,{name:"grupo",control:C,rules:{required:!1},render:({field:P,fieldState:D})=>{var B;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"descricao",value:String(P.value),style:{width:"100%"},disabled:!0,...i("grupo"),className:((B=h.grupo)==null?void 0:B.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"grupo",children:"Código"})]})}}),r(V,{name:"descricao",control:C,rules:{required:!0},render:({field:P,fieldState:D})=>{var B;return s("span",{className:"p-float-label",style:{width:"80%"},children:[r(te,{autoFocus:!0,id:"descricao",maxLength:30,value:P.value,style:{width:"100%"},...i("descricao"),className:((B=h.descricao)==null?void 0:B.type)==="required"?"p-invalid":"",disabled:o?o&&!l(1030,oe.ALTERAR):!1}),s("label",{htmlFor:"descricao",children:["Descrição",r("span",{children:"*"})]})]})}}),r(V,{name:"ativo",control:C,rules:{required:!1},render:({field:P,fieldState:D})=>s("div",{style:{display:"flex",gap:"5px"},children:[r("label",{htmlFor:P.name,style:{fontSize:"0.9em"},children:"Ativo"}),r(Mt,{inputId:P.name,checked:P.value,inputRef:P.ref,onChange:B=>P.onChange(B.value),disabled:o?o&&!l(1030,oe.ALTERAR):!1})]})})]}),r(Si,{style:{paddingTop:"20px"},children:r(xe,{label:"Salvar",ref:a,loading:M.loadingBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(h),disabled:o?o&&!l(1030,oe.ALTERAR):!1})})]})})}const Ni=G.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`,Pi=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,ki=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;G.label`
  width: 120px;
  height: 120px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  width: 100%;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #d00;
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Li=G.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .p-calendar .p-button {
    background: ${a=>a.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
`;G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Fi({resetField:a,closeModal:n}){const[e,t]=d.useState(!1),{createNewPlanService:o,editPlanService:l}=Dr(),{openNotification:i}=Ne();return{createNewPlan:C=>{t(!0),o(C).then(S=>{let p=S.data[0].msg,m=S.data[0].erro;if(m&&m=="true"){i("error","Falha ao Cadastrar",`${p||"Erro ao cadastrar"}`,1e4);return}m&&m=="false"&&i("success","Sucesso",`${p||"Cadastro realizado com sucesso"}`),setTimeout(()=>{n()},1e3)}).catch(S=>{console.warn(S),i("error","Falha ao Cadastrar",`${S.response.data.msg}`,1e4)}).finally(()=>t(!1))},updatePlan:C=>{t(!0),l(C).then(S=>{let p=S.data[0].msg,m=S.data[0].erro;if(m&&m=="true"){i("error","Falha ao Cadastrar",`${p||"Erro ao cadastrar"}`,1e4);return}m&&m=="false"&&i("success","Sucesso",`${p||"Cadastro realizado com sucesso"}`),n()}).catch(S=>{console.error(S),i("error","Falha ao Cadastrar",`${S.response.data.msg}`,1e4)}).finally(()=>t(!1))},verifySelectedPlan:C=>{C?setTimeout(()=>{["id","nome","descricao","ativo"].forEach(p=>{a(p,{keepDirty:!0,defaultValue:C[p]})})},800):["id","nome","descricao","ativo"].forEach(p=>{p==="id"&&a(p,{keepDirty:!0,defaultValue:0}),p==="ativo"&&a(p,{keepDirty:!0,defaultValue:!1}),a(p,{keepDirty:!0,defaultValue:""})})},state:{loadingBtn:e}}}function Di(){const a=d.useRef(null),{openPlanos:n,formPlanos:e,refreshListPlanos:t,selecionedPlan:o}=we(D=>D);Dr();const{havePermission:l}=Ae();Ne();const{register:i,handleSubmit:u,formState:{errors:h},reset:g,resetField:C,control:S,setValue:p}=ze({defaultValues:{ativo:!0,descricao:"",CodigoExterno:"",id:0}}),m=()=>{g(),p("nome",""),e(),t()},{createNewPlan:T,updatePlan:O,verifySelectedPlan:j,state:M}=Fi({resetField:C,closeModal:m}),J=async D=>{T(D)},R=async D=>{O(D)},_=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:o?"Informações do Plano":"Novo Plano"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>m()})]}),P=()=>console.log("action");return d.useEffect(()=>(j(o),window.addEventListener("keydown",D=>{var q;D.key==="Enter"&&(D.preventDefault(),a.current!==null&&((q=a.current)==null||q.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[o]),r(De,{visible:n,position:"center",onHide:P,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:_,children:s(Pi,{onSubmit:u(o?R:J),children:[r(Ni,{children:"Dados do plano"}),s(Li,{style:{paddingTop:"15px"},children:[o&&r(V,{render:({field:{onChange:D,onBlur:B,value:q,name:A,ref:N},fieldState:{invalid:z,isTouched:Q,isDirty:K,error:ie}})=>{var W;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"id",style:{width:"100%"},value:String(q),...i("id"),disabled:!0,className:((W=h.id)==null?void 0:W.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"id",children:"Código"})]})},name:"id",control:S,rules:{required:!1}}),r(V,{render:({field:{onChange:D,onBlur:B,value:q,name:A,ref:N},fieldState:{invalid:z,isTouched:Q,isDirty:K,error:ie}})=>{var W;return s("span",{className:"p-float-label",style:{width:"60%"},children:[r(te,{id:"nome",value:q,autoFocus:!0,style:{width:"100%"},...i("nome"),maxLength:20,className:((W=h.nome)==null?void 0:W.type)==="required"?"p-invalid":"",disabled:o?o&&!l(fe.PLANO,oe.ALTERAR):!1}),s("label",{htmlFor:"nome",children:["Nome",r("span",{children:"*"})]})]})},name:"nome",control:S,rules:{required:!0}}),r(V,{name:"ativo",control:S,rules:{required:!1},render:({field:D,fieldState:B})=>s("div",{style:{display:"flex",gap:"5px"},children:[r("label",{htmlFor:D.name,style:{fontSize:"0.9em"},children:"Ativo"}),r(Mt,{inputId:D.name,checked:D.value,inputRef:D.ref,onChange:q=>D.onChange(q.value),disabled:o?o&&!l(fe.PLANO,oe.ALTERAR):!1})]})}),r(V,{name:"descricao",control:S,rules:{required:!1},render:({field:D,fieldState:B})=>{var q;return s("span",{className:"p-float-label",style:{width:"100%"},children:[r(te,{id:"descricao",style:{width:"100%"},value:D.value,...i("descricao"),maxLength:100,className:((q=h.descricao)==null?void 0:q.type)==="required"?"p-invalid":"",disabled:o?o&&!l(fe.PLANO,oe.ALTERAR):!1}),r("label",{htmlFor:"descricao",children:"Descrição"})]})}})]}),r(ki,{children:r(xe,{label:"Salvar",ref:a,loading:M.loadingBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(h),disabled:o?o&&!l(fe.PLANO,oe.ALTERAR):!1})})]})})}function Oi({resetField:a,setValue:n,closeModal:e}){const[t,o]=d.useState(!1),[l,i]=d.useState(!1),[u,h]=d.useState([]),[g,C]=d.useState(!1),[S,p]=d.useState(null),[m,T]=St.useState([]),[O,j]=d.useState([]),{createNewStoreService:M,editStoreService:J}=kr(),[R,_]=d.useState(""),[P,D]=d.useState(!1),{selecionedLoja:B}=we(w=>w),{loading:q,guidDocument:A,getDocument:N,createOrUpdateDoc:z,getGuidDocument:Q}=$t(),{getCepCodesInfoService:K,getListCidadesService:ie,getListHeighborhoodService:W,getTipoLogradouroService:X}=Pt(),{openNotification:I}=Ne(),k=()=>{const w=["empresa","cnpj_cpf","razao_social","contribuinte_ipi","id_regime_tributario","fone_ddd1","telefone1","cep","logradouro","complemento","endereco","tipo_logradouro","situacao","nome_fantasia"];B?setTimeout(()=>{w.forEach($=>{a($,{keepDirty:!0,defaultValue:B[$]}),$==="telefone1"&&(a("telefone1",{keepDirty:!0,defaultValue:`${B.fone_ddd1}${B.telefone1}`}),!B.fone_ddd1&&!B.telefone1&&n("telefone1","")),$==="cep"&&a("cep",{keepDirty:!0,defaultValue:et(B[$])}),B.endereco==="S/N"&&o(!0)})},800):(w.forEach($=>{a($,{keepDirty:!0,defaultValue:""})}),j([]),h([]))};function x(w){if(w.length<=11){if(!Wt(w))return I("warn","CPF inválido."),!1}else if(!Ut(w))return I("warn","CNPJ inválido."),!1;return!0}const L=w=>{x(ke(w.cnpj_cpf))&&(i(!0),M(w,t).then($=>{const ee=$.data[0].msg,le=$.data[0].erro;let H=$.data[0].Id;if(le==="true"){I("error","Falha",`${ee||""}`);return}H&&R&&z(!1,{documento:R,nomearquivo:"loja -"+H,documentothumb:"",tipo:"image/png",extensao:".png",origem:2},"loja",H),I("success","Sucesso",`${ee||""}`),setTimeout(()=>e(),1e3)}).catch($=>{console.error($),I("error","Falha ao Cadastrar",`${$.response.data.msg}`,1e4)}).finally(()=>i(!1)))},b=w=>{x(ke(w.cnpj_cpf))&&(i(!0),J(w,t).then($=>{let ee=$.data[0].msg;if($.data[0].erro==="true"){I("error","Falha",`${ee||""}`);return}I("success","Sucesso",`${ee||""}`),setTimeout(()=>e(),1e3)}).catch($=>{console.error($),I("error","Falha",`${$.response.data.msg}`,1e4)}).finally(()=>i(!1)))},F=async w=>{ie(w).then($=>{j($.data),setTimeout(()=>{S!=null&&S.codcidade},500)}).catch($=>{console.error($),I("warn","Falha ao obter lista de cidades disponíveis")})},c=async w=>{W(w).then($=>{h($.data),S!=null&&S.codbairro}).catch($=>{console.error($),I("warn","Falha ao obter lista de bairros disponíveis")})};return{verifySelectedStore:k,createStore:L,updateStore:b,getListCidades:F,getListHeighborhood:c,getTipoLogradouro:()=>{X().then(w=>T(w.data)).catch(w=>console.log(w))},getCepCodesInfo:async w=>{p(null),h([]),K(w).then(async $=>{let ee=$.data[0];$.data.length||I("warn","Falha","CEP não encontrado!"),p(ee),n("uf",ee.uf),n("cidade",ee.codcidade),n("bairro",ee.codbairro),await F(ee.uf),ee.siglatipologradouro&&n("tipo_logradouro",ee.siglatipologradouro.toUpperCase()),ee.codcidade&&await c(ee.codcidade),ee.codbairro&&n("bairro",ee.codbairro),ee.logradouro&&n("endereco",ee.logradouro)}).catch($=>console.log($)).finally(()=>C(!1))},selectImage:w=>{const $=new FileReader;let ee=w.target.files[0];const le=ee.name,H=ee.type,Y="."+ee.type.split("/")[1];$.readAsDataURL(ee),$.onload=()=>{_($.result),B&&z(P,{id:A?String(A):void 0,documento:String($.result),nomearquivo:le,documentothumb:"",tipo:H,extensao:Y,origem:2},"loja",B==null?void 0:B.guid)}},getPhoto:async w=>{const $=await N(w);$?(D(!0),_($[0].documento)):console.log("falha ao obter foto")},getDocument:N,getGuidDocument:Q,state:{listOfCities:O,loadingCep:g,loadingSaveBtn:l,tipoLogradouroLista:m,listOfNeighborhood:u,snState:t,setSN:o,setLoadingCep:C,setResultSearchCep:p,imgBase64:R,setImgBase64:_,setExistPhoto:D,loading:q,guidDocument:A}}}const Ii=G(De)`
  max-width: 100%;
  max-height: 80vh;
  @media screen and (max-width: 1000px) {
    max-width: 65vw;
  }
  @media screen and (max-width: 700px) {
    max-width: 95vw;
    max-height: 95vh;
    font-size: 0.7em;
  }
`,Ti=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,_i=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 15px;
`,Ai=G.label`
  width: 80px;
  height: 80px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  transform: translateY(15px);
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`,Ri=G.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type="checkbox"] {
    cursor: pointer;
    border-radius: 50%;
    &:hover {
      border: 4px solid #d00;
    }
  }
  & input[type="checkbox"]:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #d00;
  }
  & .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 10px;
    height: 10px;
    transition-duration: 0.2s;
    background-color: #fff;
    &:hover {
      background-color: #d00;
    }
  }
  @media (max-width: 820px) {
    font-size: 10px;
  }
`,qi=G.div`
  width: 120px;
  height: 140px;
  max-height: 145px;
  cursor: pointer;
  position: relative;
  & .pi-pencil {
    position: absolute;
    z-index: 99999;
    top: 45%;
    left: 25%;
    color: #ffffff;
    display: none;
    :hover {
      color: var(--cor-tema);
    }
  }
  &:hover {
    & .pi-pencil {
      display: block;
    }
  }
`,gt=G.section`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 0.75em;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .p-dropdown .p-dropdown-label {
    font-size: 12px;
  }
  .p-calendar .p-button {
    background: ${a=>a.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    font-size: 12px;
  }
  .container-numero {
    display: flex;
    gap: 15px;
    flex: 1;
    max-width: 140px;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`;G.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  isolation: isolate;
  background: #6b7280;
  border-radius: 4px;
  & p {
    width: 186px;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
  }
`;const dr=G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`,zi=a=>a.click();function $i(){const a=d.useRef(null),{openLojas:n,formLojas:e,selecionedLoja:t,refreshListLojas:o}=we(k=>k),{tokenSignature:l}=We(k=>k),{havePermission:i}=Ae(),{register:u,handleSubmit:h,watch:g,formState:{errors:C},reset:S,setValue:p,control:m,resetField:T}=ze({defaultValues:{contribuinte_ipi:!1,id_regime_tributario:2,complemento:"",situacao:"ATIVO",logradouro:""}}),O=()=>{e(),o(),S()},{verifySelectedStore:j,createStore:M,updateStore:J,getTipoLogradouro:R,getListHeighborhood:_,getListCidades:P,getCepCodesInfo:D,selectImage:B,getPhoto:q,getGuidDocument:A,state:N}=Oi({resetField:T,setValue:p,closeModal:O}),z=k=>{M(k)},Q=k=>{J(k)},K=d.useRef(null),ie=r("div",{style:{paddingLeft:"20px"},children:r("i",{className:"pi pi-eye"})}),W=s("div",{style:{display:"flex",justifyContent:"space-between",height:"10%"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:t?"Informações da Loja":"Nova Loja"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>O()})]}),X=g("cep");d.useEffect(()=>{let k=X?ke(X):"";p("cep",et(k)),k.length>=8&&(N.setLoadingCep(!0),D(k))},[X]),d.useEffect(()=>{l&&R()},[l]),d.useEffect(()=>(j(),window.addEventListener("keydown",k=>{var L;k.key==="Enter"&&(k.preventDefault(),a.current!==null&&((L=a.current)==null||L.click()))}),setTimeout(()=>{S()},1e3),()=>{window.removeEventListener("keydown",()=>{}),S(),N.setResultSearchCep(null)}),[t]),d.useEffect(()=>(t!=null&&t.guid&&A(t==null?void 0:t.guid,"LOJA",1),()=>{N.setExistPhoto(!1)}),[t==null?void 0:t.guid]),d.useEffect(()=>{N.guidDocument?q(N.guidDocument):console.log("não tem guid de foto")},[N.guidDocument]);const I=[{label:"Ativo",value:"ATIVO"},{label:"Inativo",value:"INATIVO"}];return r(Ii,{visible:n,position:"center",onHide:O,closable:!1,breakpoints:{"820px":"100vw"},style:{minWidth:"65vw"},header:W,children:r(Ti,{onSubmit:h(t?Q:z),children:s("div",{className:"grid",children:[s("div",{className:"lg:col-1 col-12",children:[r("input",{ref:K,type:"file",id:"foto",style:{display:"none"},onChange:B}),r(Ur,{children:N.loading?r("div",{style:{width:"80px",height:"80px"},children:r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}):N.imgBase64?s(qi,{children:[r("i",{className:"pi pi-pencil",onClick:()=>{zi(K.current)}}),r(Ta,{src:N.imgBase64,template:ie,alt:"foto selecionada",preview:!0,width:"80",height:"100",downloadable:!0})]}):s(Ai,{htmlFor:t&&t&&!i(fe.LOJA,oe.ALTERAR)?"txt":"foto",children:[r("i",{className:"pi pi-camera"}),r("span",{children:"Escolher Foto"})]})})]}),s("div",{className:"lg:col-11 col-12",children:[s(gt,{style:{paddingTop:"20px"},children:[t&&r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"cliente",value:String(L),style:{width:"100%"},...u("empresa"),disabled:!0,className:((E=C.empresa)==null?void 0:E.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"cliente",children:"Código"})]})},name:"empresa",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"razao_social",value:L,autoFocus:!0,style:{width:"100%"},...u("razao_social"),maxLength:50,className:((E=C.razao_social)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),s("label",{htmlFor:"razao_social",children:["Razão Social",r("span",{children:"*"})]})]})},name:"razao_social",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{id:"nome_fantasia",value:L,style:{width:"100%"},...u("nome_fantasia"),maxLength:100,className:((E=C.nome_fantasia)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),s("label",{htmlFor:"nome_fantasia",children:["Nome Fantasia",r("span",{children:"*"})]})]})},name:"nome_fantasia",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(te,{value:L,id:"cpf",style:{width:"100%"},...u("cnpj_cpf"),onChange:w=>k(Bt(w.target.value)),maxLength:18,className:((E=C.cnpj_cpf)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),s("label",{htmlFor:"cpf_cnpj",children:["CNPJ",r("span",{children:"*"})]})]})},name:"cnpj_cpf",control:m,rules:{required:!0}})]}),s(gt,{children:[r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{minWidth:"115px",flex:1},children:[r(te,{value:L,id:"telefone",style:{width:"100%"},...u("telefone1"),maxLength:14,onChange:w=>k(wt(w.target.value)),className:((E=C.telefone1)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),r("label",{htmlFor:"telefone1",children:"DDD + Telefone"})]})},name:"telefone1",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E,w,$,ee,le;return s("span",{className:"p-float-label p-input-icon-right",style:{minWidth:"80px",flex:1},children:[((E=C.cep)==null?void 0:E.type)==="maxLength"&&r(dr,{children:"maximo de 8 caracteres!"}),((w=C.cep)==null?void 0:w.type)==="minLength"&&r(dr,{children:"minimo de 8 caracteres!"}),N.loadingCep&&r("i",{className:"pi pi-spin pi-spinner",style:{top:"10px"}}),r(te,{id:"cep",style:{width:"100%"},autoComplete:"off",value:L,maxLength:9,...u("cep",{required:!0,maxLength:9,minLength:9}),className:(($=C.cep)==null?void 0:$.type)==="required"||((ee=C.cep)==null?void 0:ee.type)==="maxLength"||((le=C.cep)==null?void 0:le.type)==="minLength"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),s("label",{htmlFor:"cep",children:["CEP",r("span",{children:"*"})]})]})},name:"cep",control:m,rules:{required:!0}}),r(V,{name:"uf",control:m,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:k.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:b=>{k.onChange(b.value),P(b.value)},className:((L=C.bairro)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"cidade",control:m,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{width:"20%",fontSize:"12px"},children:[r(me,{value:k.value,optionLabel:"nome",optionValue:"cidade",placeholder:"Cidade",name:"cidade",emptyMessage:"Sem dados de cidades disponíveis",options:N.listOfCities,onChange:b=>{k.onChange(b.value),_(b.value)},className:((L=C.cidade)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]})}}),r(V,{name:"tipo_logradouro",control:m,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"150px",fontSize:"12px"},children:[r(me,{value:k.value,optionLabel:"descricao",optionValue:"tipo",placeholder:"Tipo de logradouro",name:"tipo_logradouro",options:N.tipoLogradouroLista,onChange:b=>k.onChange(b.value),className:((L=C.tipo_logradouro)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"tipo_logradouro",children:["Tipo de Logradouro",r("span",{children:"*"})]})]})}})]}),s(gt,{children:[r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"endereco",value:L,style:{width:"100%"},...u("endereco"),className:((E=C.endereco)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,5):!1}),s("label",{htmlFor:"endereco",children:["Endereço",r("span",{children:"*"})]})]})},name:"endereco",control:m,rules:{required:!0}}),s("div",{className:"container-numero",children:[r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{minWidth:"80px"},children:[r(te,{id:"logradouro",style:{width:"100%"},className:((E=C.logradouro)==null?void 0:E.type)==="required"?"p-invalid":"",...u("logradouro"),maxLength:15,onChange:w=>k(w.target.value.replace(/\D/,"")),value:String(L),disabled:N.snState||t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),s("label",{htmlFor:"logradouro",children:["N°",N.snState?"":r("span",{children:"*"})]})]})},name:"logradouro",control:m,rules:{required:!N.snState}}),s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"sn",name:"sn",value:N.snState,onChange:k=>N.setSN(k.checked),checked:N.snState,disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1}),r("label",{htmlFor:"sn",className:"ml-1",children:"S/N"})]})]}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{minWidth:"80px",fontSize:"12px",flex:1},children:[r(me,{value:L,optionLabel:"nome",optionValue:"bairro",placeholder:"Bairro",name:"bairro",options:N.listOfNeighborhood,emptyMessage:"Sem listas de bairros disponíveis",onChange:w=>{k(w.value)},className:((E=C.bairro)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:t?t&&!i(fe.LOJA,oe.ALTERAR):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"bairro",children:["Bairro",r("span",{children:"*"})]})]})},name:"bairro",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>s("span",{className:"p-float-label",style:{flex:1,minWidth:"300px"},children:[r(te,{id:"complemento",value:L,style:{width:"100%"},onChange:E=>k(E.target.value),disabled:t?t&&!i(1020,oe.ALTERAR):!1}),r("label",{htmlFor:"complemento",children:"Complemento"})]}),name:"complemento",control:m,rules:{required:!1}})]}),s(gt,{children:[r("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:r(V,{name:"contribuinte_ipi",control:m,rules:{required:!1},render:({field:k,fieldState:x})=>s(Qe,{children:[r(Te,{inputId:k.name,checked:k.value,inputRef:k.ref,onChange:L=>k.onChange(L.checked),disabled:t?t&&!i(1020,5):!1}),r("label",{htmlFor:"contribuinte_ipi",className:"ml-1",children:"Contribuinte de IPI"})]})})}),r(V,{name:"situacao",control:m,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{maxWidth:"200px"},children:[r(me,{value:k.value,optionLabel:"label",optionValue:"value",style:{width:"100%",height:"36px"},placeholder:"Status",name:"situacao",options:I,onChange:b=>k.onChange(b.value),className:((L=C.situacao)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:t?t&&!i(1020,5):!1}),r("label",{htmlFor:"situacao",children:"Status"})]})}})]}),r("h4",{className:"mt-3",children:"Regime Tributário"}),r(gt,{children:r(Ri,{style:{height:"25px"},children:r(V,{name:"id_regime_tributario",control:m,rules:{required:!0},render:({field:k})=>s(Qe,{children:[r(da,{inputId:"f5",...k,inputRef:k.ref,value:1,checked:k.value===1,disabled:t?t&&!i(1020,5):!1}),r("label",{htmlFor:"f5",className:"ml-1 mr-3",children:"Simples Nacional"}),r(da,{inputId:"f6",...k,value:2,checked:k.value===2,disabled:t?t&&!i(1020,5):!1}),r("label",{htmlFor:"f6",className:"ml-1 mr-3",children:"Regime Normal"}),r(da,{inputId:"f7",...k,value:3,checked:k.value===3,disabled:t?t&&!i(1020,5):!1}),r("label",{htmlFor:"f7",className:"ml-1 mr-3",children:"Simples Nacional-excesso de sublimite da receita bruta"})]})})})}),r(_i,{children:r(xe,{label:"Salvar",ref:a,loading:N.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",disabled:t?t&&!i(1020,5):!1})})]})]})})})}function Vi({resetField:a,setValue:n,reset:e,closeModal:t}){const[o,l]=d.useState(!1),[i,u]=d.useState(!1),[h,g]=d.useState([]),[C,S]=St.useState([]),[p,m]=d.useState([]),[T,O]=d.useState(void 0),[j,M]=d.useState(null),[J,R]=d.useState(!1),[_,P]=d.useState("CNPJ"),{getCepCodesInfoService:D,getListCidadesService:B,getListHeighborhoodService:q,getTipoLogradouroService:A}=Pt(),{createNewFornecedorService:N,editFornecedorService:z,getAllFornecedorNoFilterService:Q}=Or(),{openNotification:K}=Ne(),ie=c=>{const y=["fornecedor","nome_fantasia","cnpj","razao_social","fone_ddd1","telefone1","cgf","email","cep","tipo_logradouro","endereco","logradouro","complemento","situacao"];c?(c.cnpj.length&&P("CNPJ"),c.cnpj.length<=11&&P("CPF"),setTimeout(()=>{y.forEach(v=>{a(v,{keepDirty:!0,defaultValue:c[v]}),v==="telefone1"&&a("telefone1",{keepDirty:!0,defaultValue:`${c.fone_ddd1}${c.telefone1}`}),v==="cnpj"&&n("cnpj",c.cnpj),c.logradouro==="S/N"&&l(!0)})},800)):(y.forEach(v=>{a(v,{keepDirty:!0,defaultValue:""})}),g([]),m([]),n("situacao","ATIVO"),l(!1))},W=c=>{Q().then(y=>{console.log("dados: ",y)}).catch(y=>{console.log("error: ",y)}),console.log("dados data: ",c)};function X(c){if(c.length<=11){if(!Wt(ke(c)))return K("warn","CPF inválido."),!1}else if(!Ut(ke(c)))return K("warn","CNPJ inválido."),!1;return!0}const I=c=>{X(ke(c.cnpj))&&(R(!0),N(c,o).then(y=>{let v=y.data[0].msg;if(y.data[0].erro==="true"){K("warn","Falha ao cadastrar",`${v||""}`,5e3);return}K("success","Sucesso",`${v||""}`),e(),l(!1),g([]),m([]),setTimeout(()=>{t()},2e3)}).catch(y=>{console.error(y),K("error","Falha ao Cadastrar",`${y.response.data.msg}`,1e4)}).finally(()=>R(!1)))},k=c=>{X(ke(c.cnpj))&&(R(!0),z(c,o).then(y=>{let v=y.data[0].msg;if(y.data[0].erro==="true"){K("warn","Falha ao cadastrar",`${v||""}`,5e3);return}K("success","Sucesso",`${v||""}`),e(),l(!1),g([]),m([]),setTimeout(()=>{t()},2e3)}).catch(y=>{console.error(y),K("error","Falha ao Cadastrar",`${y.response.data.msg}`,1e4)}).finally(()=>R(!1)))},x=c=>{B(c).then(y=>{g(y.data),setTimeout(()=>{j!=null&&j.codcidade&&(n("cidade",j==null?void 0:j.codcidade),L(j==null?void 0:j.codcidade))},500)}).catch(y=>{console.error(y),K("warn","Falha ao obter lista de cidades disponíveis")})},L=async c=>{q(c).then(y=>{m(y.data),j!=null&&j.codbairro&&n("bairro",j==null?void 0:j.codbairro)}).catch(y=>{console.error(y),K("warn","Falha ao obter lista de bairros disponíveis")})};return{verifySelectedFornecedor:ie,createFornecedor:I,updateFornecedor:k,getListCidades:x,getTipoLogradouro:()=>{A().then(c=>S(c.data)).catch(c=>console.log(c))},getCepCodesInfo:async c=>{D(c).then(y=>{let v=y.data[0];y.data.length||K("warn","Falha","CEP não encontrado!"),M(v),n("uf",v.uf),x(v.uf),v.siglatipologradouro&&n("tipo_logradouro",v.siglatipologradouro.toUpperCase()),v.codcidade&&(n("cidade",v.codcidade),L(v.codcidade)),v.codbairro&&n("bairro",v.codbairro),v.logradouro&&n("endereco",v.logradouro)}).catch(y=>console.log(y)).finally(()=>u(!1))},getListHeighborhood:L,getFornecedorList:W,state:{setTipocadastro:P,snState:o,setSN:l,loadingCep:i,setLoadingCep:u,listOfCities:h,tipoLogradouroLista:C,listOfNeighborhood:p,resultCepValues:T,resultSearchCep:j,loadingSaveBtn:J,tipoCadastro:_,setResultCepValues:O,setResultSearchCep:M}}}const Bi=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Mi=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 15px;
`;G.label`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  transform: translateY(15px);
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type="radio"] {
    cursor: pointer;
  }
  & input[type="radio"]:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid ${a=>a.theme.colors.primary};
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 8px;
`;const Tt=G.section`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .container-numero {
    display: flex;
    gap: 15px;
    flex: 1;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`;G.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  isolation: isolate;
  background: #6b7280;
  border-radius: 4px;
  & p {
    width: 186px;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
  }
`;const cr=G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function ji({externalVisible:a}){const n=d.useRef(null),{openFornecedores:e,formFornecedores:t,selecionedFornecedor:o,refreshListFornecedor:l}=we(I=>I),{havePermission:i}=Ae(),{tokenSignature:u}=We(I=>I),h=()=>{t(),m(),l()},{register:g,handleSubmit:C,watch:S,formState:{errors:p},reset:m,setError:T,setValue:O,clearErrors:j,control:M,resetField:J}=ze({defaultValues:{fornecedor:0,fone_ddd2:"",telefone2:"",situacao:"ATIVO",complemento:""}}),{verifySelectedFornecedor:R,createFornecedor:_,updateFornecedor:P,getListCidades:D,getTipoLogradouro:B,getCepCodesInfo:q,getListHeighborhood:A,state:N}=Vi({resetField:J,setValue:O,reset:m,closeModal:h}),z=I=>{_(I)},Q=I=>{P(I)},K=s("div",{style:{display:"flex",justifyContent:"space-between",height:"10%"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:o?"Informações do Fornecedor":"Novo Fornecedor"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>h()})]}),ie=()=>h(),W=[{label:"Ativo",value:"ATIVO"},{label:"Inativo",value:"INATIVO"}],X=S("cep");return d.useEffect(()=>{let I=X?ke(X):"";O("cep",et(I)),I.length>=8&&(N.setLoadingCep(!0),q(I))},[X]),d.useEffect(()=>{u&&B()},[u]),d.useEffect(()=>(R(o),window.addEventListener("keydown",I=>{var x;I.key==="Enter"&&(I.preventDefault(),n.current!==null&&((x=n.current)==null||x.click()))}),()=>{window.removeEventListener("keydown",()=>{}),m(),N.setResultCepValues(void 0),N.setResultSearchCep(null)}),[o]),r(De,{visible:e||a,position:"center",onHide:ie,closable:!1,breakpoints:{"960px":"75vw","820px":"100vw"},header:K,modal:!1,children:s(Bi,{onSubmit:C(o?Q:z),children:[s(Tt,{style:{paddingTop:"20px"},children:[s(Wr,{children:[r("input",{type:"radio",value:"CPF",name:"tipo",id:"cpf",onChange:I=>{N.setTipocadastro(I.target.value),R(o)},checked:N.tipoCadastro==="CPF",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),r("label",{htmlFor:"cpf",children:"CPF"}),r("input",{type:"radio",value:"CNPJ",name:"tipo",id:"cnpj",onChange:I=>{N.setTipocadastro(I.target.value),R(o)},checked:N.tipoCadastro==="CNPJ",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),r("label",{htmlFor:"cnpj",children:"CNPJ"})]}),o&&r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"fornecedor",style:{width:"100%"},value:String(x),...g("fornecedor"),disabled:!0,className:((f=p.fornecedor)==null?void 0:f.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"fornecedor",children:"Código"})]})},name:"fornecedor",control:M,rules:{required:!1}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"50%",flex:1},children:[r(te,{id:"nome_fantasia",value:x,autoFocus:!0,style:{width:"100%"},...g("nome_fantasia"),maxLength:50,className:((f=p.nome_fantasia)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),s("label",{htmlFor:"nome_fantasia",children:["Nome ",N.tipoCadastro==="CNPJ"?"Fantasia":"Completo",r("span",{children:"*"})]})]})},name:"nome_fantasia",control:M,rules:{required:!0}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"80px",flex:1},children:[r(te,{value:x,id:"cnpj",style:{width:"100%"},...g("cnpj"),maxLength:N.tipoCadastro==="CNPJ"?18:14,onChange:E=>{N.tipoCadastro==="CNPJ"?I(Bt(E.target.value)):I(Oa(E.target.value))},className:((f=p.cnpj)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),s("label",{htmlFor:"cnpj",children:[N.tipoCadastro==="CNPJ"?"CNPJ":"CPF",r("span",{children:"*"})]})]})},name:"cnpj",control:M,rules:{required:!0}}),N.tipoCadastro==="CNPJ"?r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"40%",flex:1},children:[r(te,{id:"razao_social",style:{width:"100%"},value:x,...g("razao_social"),maxLength:50,className:((f=p.razao_social)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),s("label",{htmlFor:"razao_social",children:["Razão Social",r("span",{children:"*"})]})]})},name:"razao_social",control:M,rules:{required:!0}}):""]}),s(Tt,{children:[r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"115px"},children:[r(te,{id:"telefone",value:x,style:{width:"100%"},...g("telefone1"),className:((f=p.telefone1)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,oe.ALTERAR):!1,maxLength:14,onChange:E=>I(wt(E.target.value))}),r("label",{htmlFor:"telefone1",children:"DDD + Telefone"})]})},name:"telefone1",control:M,rules:{required:!0}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"35%",flex:1},children:[r(te,{id:"email",style:{width:"100%"},value:x,...g("email",{required:!0}),className:((f=p.email)==null?void 0:f.type)==="required"?"p-invalid":"",maxLength:49,disabled:o?o&&!i(1035,oe.ALTERAR):!1}),r("label",{htmlFor:"email",children:"E-mail"})]})},name:"email",control:M,rules:{required:!1}}),N.tipoCadastro==="CNPJ"&&r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"150px",flex:1},children:[r(te,{id:"cgf",style:{width:"100%"},value:x||"",...g("cgf",{required:!1}),className:((f=p.cgf)==null?void 0:f.type)==="required"?"p-invalid":"",maxLength:20,disabled:o?o&&!i(1035,oe.ALTERAR):!1}),r("label",{htmlFor:"cgf",children:"Inscrição Estadual"})]})},name:"cgf",control:M,rules:{required:!1}})]}),s(Tt,{children:[r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f,E,w,$,ee;return s("span",{className:"p-float-label p-input-icon-right",style:{minWidth:"15%",flex:1},children:[((f=p.cep)==null?void 0:f.type)==="maxLength"&&r(cr,{children:"maximo de 8 caracteres!"}),((E=p.cep)==null?void 0:E.type)==="minLength"&&r(cr,{children:"minimo de 8 caracteres!"}),N.loadingCep&&r("i",{className:"pi pi-spin pi-spinner",style:{top:"10px"}}),r(te,{id:"cep",value:x,style:{width:"100%"},autoComplete:"off",maxLength:9,...g("cep",{required:!0,maxLength:9,minLength:9}),className:((w=p.cep)==null?void 0:w.type)==="required"||(($=p.cep)==null?void 0:$.type)==="maxLength"||((ee=p.cep)==null?void 0:ee.type)==="minLength"?"p-invalid":"",disabled:o?o&&!i(1035,oe.ALTERAR):!1}),s("label",{htmlFor:"cep",children:["CEP",r("span",{children:"*"})]})]})},name:"cep",control:M,rules:{required:!0}}),r(V,{name:"uf",control:M,rules:{required:!0},render:({field:I,fieldState:k})=>{var x;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:I.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:L=>{I.onChange(L.value),D(L.value)},className:((x=p.bairro)==null?void 0:x.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"cidade",control:M,rules:{required:!0},render:({field:I,fieldState:k})=>{var x;return s("span",{className:"p-float-label",style:{minWidth:"20%",fontSize:"12px",flex:1},children:[r(me,{value:I.value,optionLabel:"nome",optionValue:"cidade",placeholder:"Cidade",options:N.listOfCities,onChange:L=>{I.onChange(L.value),A(L.value)},className:((x=p.cidade)==null?void 0:x.type)==="required"?"p-invalid":"",emptyMessage:`Sem listas de cidades disponíveis
                      `,disabled:o?o&&!i(1035,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]})}}),r(V,{name:"tipo_logradouro",control:M,rules:{required:!0},render:({field:I,fieldState:k})=>{var x;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:I.value,optionLabel:"descricao",optionValue:"tipo",placeholder:"Tipo de logradouro",name:"tipo_logradouro",options:N.tipoLogradouroLista,onChange:L=>I.onChange(L.value),className:((x=p.tipo_logradouro)==null?void 0:x.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"tipo_logradouro",children:["Tipo de Logradouro",r("span",{children:"*"})]})]})}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"endereco",value:x,style:{width:"100%"},...g("endereco"),className:((f=p.endereco)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,5):!1}),s("label",{htmlFor:"endereco",children:["Endereço",r("span",{children:"*"})]})]})},name:"endereco",control:M,rules:{required:!0}})]}),s(Tt,{children:[s("div",{className:"container-numero",children:[r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f;return s("span",{className:"p-float-label",style:{minWidth:"10%",flex:1},children:[r(te,{id:"logradouro",value:x,style:{width:"100%"},maxLength:10,...g("logradouro"),className:((f=p.logradouro)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:N.snState||o?o&&!i(1035,5):!1}),s("label",{htmlFor:"logradouro",children:["N°",N.snState?"":r("span",{children:"*"})]})]})},name:"logradouro",control:M,rules:{required:!N.snState}}),s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"sn",name:"sn",value:N.snState,onChange:I=>N.setSN(I.checked),checked:N.snState,disabled:o?o&&!i(1035,5):!1}),r("label",{htmlFor:"sn",className:"ml-1",children:"S/N"})]})]}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>{var f,E;return N.listOfNeighborhood.length===0?s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"bairro",style:{width:"100%"},className:((f=p.bairro)==null?void 0:f.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,5):!1}),r("label",{htmlFor:"bairro",children:"Bairro"})]}):s("span",{className:"p-float-label",style:{minWidth:"20%",fontSize:"12px",flex:1},children:[r(me,{value:x,optionLabel:"nome",optionValue:"bairro",placeholder:"Bairro",name:"bairro",options:N.listOfNeighborhood,onChange:w=>{I(w.value)},className:((E=p.bairro)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:o?o&&!i(1035,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"bairro",children:["Bairro",r("span",{children:"*"})]})]})},name:"bairro",control:M,rules:{required:!0}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>s("span",{className:"p-float-label",style:{minWidth:"50%",flex:1},children:[r(te,{id:"complemento",value:x||"",style:{width:"100%"},...g("complemento"),onChange:f=>I(f.target.value),maxLength:90,disabled:o?o&&!i(1035,5):!1}),r("label",{htmlFor:"complemento",children:"Complemento"})]}),name:"complemento",control:M,rules:{required:!1}}),r(V,{render:({field:{onChange:I,onBlur:k,value:x,name:L,ref:b},fieldState:{invalid:F,isTouched:c,isDirty:y,error:v}})=>s("span",{className:"p-float-label",style:{minWidth:"30%",width:"max-content"},children:[r(me,{id:"situacao",options:W,value:x,optionLabel:"label",optionValue:"value",onChange:f=>I(f.value),style:{width:"100%",height:"36px"},placeholder:"Status",disabled:o?o&&!i(1035,5):!1}),r("label",{htmlFor:"situacao",children:"Status"})]}),name:"situacao",control:M,rules:{required:!0}})]}),r(Mi,{children:r(xe,{label:"Salvar",ref:n,loading:N.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(p),disabled:o?o&&!i(1035,5):!1})})]})})}const Ui=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Wi=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-bottom: 15px;
`;G.label`
  width: 100px;
  height: 100px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  transform: translateY(15px);
  & span {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type='checkbox'] {
    cursor: pointer;
  }
  & input[type='checkbox']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 2px;
    border: 4px solid #d00;
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 8px;
`;const _t=G.section`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-wrap: wrap;

  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;

    input {
      height: 35px;
      font-size: 12px;

      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }

    label {
      font-size: 12px;

      span {
        color: #dd0000;
      }

      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .container-numero {
    display: flex;
    gap: 15px;
    flex: 1;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    .container-numero {
      width: 100%;
    }
  }
`;G.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  gap: 10px;
  isolation: isolate;
  background: #6b7280;
  border-radius: 4px;
  & p {
    width: 186px;
    height: 20px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: #ffffff;
  }
`;const ur=G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Gi({resetField:a,setValue:n,closeModal:e}){const[t,o]=d.useState([]),[l,i]=St.useState([]),[u,h]=d.useState([]),[g,C]=d.useState(null),[S,p]=d.useState(!1),[m,T]=d.useState(!1),[O,j]=d.useState(!1),{getCepCodesInfoService:M,getListCidadesService:J,getListHeighborhoodService:R,getTipoLogradouroService:_}=Pt(),{createNewTransportadorService:P,editTransportadorService:D}=gn(),{selecionedTransportador:B,refreshListTransportadores:q}=we(k=>k),{openNotification:A}=Ne(),N=()=>{const k=["sequencial","cnpj","razao_social","nome_fantasia","inscricao_estadual","tipo_logradouro","situacao","cep","telefone","email","logradouro","complemento","fone_ddd","contato","endereco","CodigoExterno"];B?setTimeout(()=>{k.forEach(x=>{a(x,{keepDirty:!0,defaultValue:B[x]}),x==="telefone"&&a("telefone",{keepDirty:!0,defaultValue:`${B.fone_ddd}${B.telefone}`}),B.logradouro==="S/N"&&p(!0)})},800):(k.forEach(x=>{a(x,{keepDirty:!0,defaultValue:""})}),o([]),h([]))};function z(k){if(k.length<=11){if(!Wt(ke(k)))return A("warn","CPF inválido."),!1}else if(!Ut(ke(k)))return A("warn","CNPJ inválido."),!1;return!0}const Q=k=>{z(ke(k.cnpj))&&(T(!0),P(k,S).then(x=>{let L=x.data[0].msg;if(x.data[0].erro==="true"){A("warn","Falha",`${L||""}`);return}A("success","Sucesso",`${L||""}`),q(),setTimeout(()=>e(),1e3)}).catch(x=>{console.error(x),A("error","Falha ao Cadastrar",`${x.response.data.msg}`,1e4)}).finally(()=>T(!1)))},K=k=>{z(ke(k.cnpj))&&(T(!0),D(k,S).then(x=>{let L=x.data[0].msg;if(x.data[0].erro==="true"){A("warn","Falha",`${L||""}`);return}A("success","Sucesso",`${L||""}`),q(),setTimeout(()=>{e()},800)}).catch(x=>{console.error(x),A("error","Falha ao Cadastrar",`${x.response.data.msg}`,1e4)}).finally(()=>T(!1)))},ie=async k=>{M(k).then(x=>{let L=x.data[0];x.data.length||A("warn","Falha","CEP não encontrado!"),C(L),n("uf",L.uf),W(L.uf),L.siglatipologradouro&&n("tipo_logradouro",L.siglatipologradouro.toUpperCase()),L.codcidade&&(n("cidade",L.codcidade),X(L.codcidade)),L.codbairro&&n("bairro",L.codbairro),L.logradouro&&n("endereco",L.logradouro)}).catch(x=>console.log(x)).finally(()=>j(!1))},W=async k=>{J(k).then(x=>{o(x.data),setTimeout(()=>{g!=null&&g.codcidade&&(n("cidade",g==null?void 0:g.codcidade),X(g==null?void 0:g.codcidade))},500)}).catch(x=>{console.error(x),A("warn","Falha ao obter lista de cidades disponíveis")})},X=async k=>{R(k).then(x=>{h(x.data),g!=null&&g.codbairro&&n("bairro",g==null?void 0:g.codbairro)}).catch(x=>{console.error(x),A("warn","Falha ao obter lista de bairros disponíveis")})};return{verifySelectedTransportador:N,createTransportador:Q,updateTransportador:K,getCepCodesInfo:ie,getListCidades:W,getListHeighborhood:X,getTipoLogradouro:()=>{_().then(k=>i(k.data)).catch(k=>console.log(k))},state:{loadingSaveBtn:m,setLoadingCep:j,loadingCep:O,snState:S,setSN:p,listOfCities:t,listOfNeighborhood:u,tipoLogradouroLista:l,setResultSearchCep:C}}}function Hi(){const a=d.useRef(null),{havePermission:n}=Ae();Ne();const{tokenSignature:e}=We(W=>W),{openTransportadores:t,formTransportadores:o,selecionedTransportador:l,refreshListTransportadores:i}=we(W=>W),{register:u,handleSubmit:h,watch:g,formState:{errors:C,dirtyFields:S},reset:p,control:m,setValue:T,resetField:O}=ze({defaultValues:{sequencial:0,situacao:"ATIVO",inscricao_estadual:"",complemento:"",contato:""}}),j=()=>{o(),p()},{verifySelectedTransportador:M,createTransportador:J,updateTransportador:R,getListCidades:_,getListHeighborhood:P,getTipoLogradouro:D,getCepCodesInfo:B,state:q}=Gi({resetField:O,setValue:T,closeModal:j}),A=async W=>{J(W)},N=async W=>{R(W)},z=s("div",{style:{display:"flex",justifyContent:"space-between",height:"10%"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:l?"Informações do Transportador":"Novo Transportador"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>j()})]}),Q=()=>console.log("action"),K=[{label:"Ativo",value:"ATIVO"},{label:"Inativo",value:"INATIVO"}],ie=g("cep");return d.useEffect(()=>(M(),window.addEventListener("keydown",W=>{var I;W.key==="Enter"&&(W.preventDefault(),a.current!==null&&((I=a.current)==null||I.click()))}),()=>{window.removeEventListener("keydown",()=>{}),p(),q.setResultSearchCep(null)}),[l]),d.useEffect(()=>{let W=ie?ke(ie):"";T("cep",et(W)),W.length>=8&&(q.setLoadingCep(!0),B(W))},[ie]),d.useEffect(()=>{e&&D()},[e]),r(De,{visible:t,position:"center",onHide:Q,closable:!1,breakpoints:{"960px":"75vw","820px":"100vw"},header:z,children:s(Ui,{onSubmit:h(l?N:A),children:[s(_t,{style:{paddingTop:"10px"},children:[l&&r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"sequencial",value:String(I),style:{width:"100%"},...u("sequencial"),disabled:!0,className:((y=C.sequencial)==null?void 0:y.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"sequencial",children:"Código"})]})},name:"sequencial",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"30%",flex:1},children:[r(te,{value:I,id:"nome",autoFocus:!0,style:{width:"100%"},...u("nome_fantasia"),maxLength:50,className:((y=C.nome_fantasia)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1}),s("label",{htmlFor:"nome_fantasia",children:["Nome Fantasia",r("span",{children:"*"})]})]})},name:"nome_fantasia",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y,v,f;return s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"cpf",style:{width:"100%"},...u("cnpj",{minLength:14,maxLength:18}),maxLength:18,className:((y=C.cnpj)==null?void 0:y.type)==="required"||((v=C.cnpj)==null?void 0:v.type)==="minLength"||((f=C.cnpj)==null?void 0:f.type)==="maxLength"?"p-invalid":"",onChange:E=>W(Bt(E.target.value)),value:I,disabled:l?l&&!n(1040,5):!1}),s("label",{htmlFor:"cpf",children:["CNPJ",r("span",{children:"*"})]})]})},name:"cnpj",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"40%",flex:1},children:[r(te,{id:"razao_social",value:I,style:{width:"100%"},...u("razao_social"),maxLength:75,className:((y=C.razao_social)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1}),s("label",{htmlFor:"razao_social",children:["Razão Social",r("span",{children:"*"})]})]})},name:"razao_social",control:m,rules:{required:!0}})]}),s(_t,{children:[r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"115px"},children:[r(te,{id:"telefone",value:I,style:{width:"100%"},...u("telefone"),className:((y=C.telefone)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1,maxLength:14,onChange:v=>W(wt(v.target.value))}),r("label",{htmlFor:"telefone",children:"DDD + Telefone"})]})},name:"telefone",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"115px"},children:[r(te,{id:"telefone",value:I,style:{width:"100%"},...u("contato"),className:((y=C.contato)==null?void 0:y.type)==="required"?"p-invalid":"",maxLength:50,disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"contato",children:"Contato"})]})},name:"contato",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>s("span",{className:"p-float-label",style:{flex:1,minWidth:"130px"},children:[r(te,{value:String(I),maxLength:20,id:"inscricao_estadual",style:{width:"100%"},...u("inscricao_estadual",{required:!1}),disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"inscricao_estadual",children:"Inscrição Estadual"})]}),name:"inscricao_estadual",control:m,rules:{required:!1}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"30%",flex:1},children:[r(te,{value:I,id:"email",style:{width:"100%"},...u("email",{required:!0}),className:((y=C.email)==null?void 0:y.type)==="required"?"p-invalid":"",maxLength:100,disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"email",children:"E-mail"})]})},name:"email",control:m,rules:{required:!1}})]}),s(_t,{children:[r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y,v,f,E,w;return s("span",{className:"p-float-label p-input-icon-right",style:{minWidth:"110px",flex:1},children:[((y=C.cep)==null?void 0:y.type)==="maxLength"&&r(ur,{children:"maximo de 8 caracteres!"}),((v=C.cep)==null?void 0:v.type)==="minLength"&&r(ur,{children:"minimo de 8 caracteres!"}),q.loadingCep&&r("i",{className:"pi pi-spin pi-spinner",style:{top:"10px"}}),r(te,{id:"cep",value:I,style:{width:"100%"},autoComplete:"off",maxLength:9,...u("cep",{required:!0,maxLength:9,minLength:9}),className:((f=C.cep)==null?void 0:f.type)==="required"||((E=C.cep)==null?void 0:E.type)==="maxLength"||((w=C.cep)==null?void 0:w.type)==="minLength"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1}),s("label",{htmlFor:"cep",children:["CEP",r("span",{children:"*"})]})]})},name:"cep",control:m,rules:{required:!0}}),r(V,{name:"uf",control:m,rules:{required:!0},render:({field:W,fieldState:X})=>{var I;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{value:W.value,optionLabel:"id",optionValue:"id",placeholder:"UF",name:"uf",options:ct,onChange:k=>{W.onChange(k.value),_(k.value)},className:((I=C.bairro)==null?void 0:I.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"uf",children:["UF",r("span",{children:"*"})]})]})}}),r(V,{name:"cidade",control:m,rules:{required:!0},render:({field:W,fieldState:X})=>{var I;return s("span",{className:"p-float-label",style:{width:"20%",fontSize:"12px"},children:[r(me,{value:W.value,optionLabel:"nome",optionValue:"cidade",placeholder:"Cidade",name:"cidade",options:q.listOfCities,onChange:k=>{W.onChange(k.value),P(k.value)},emptyMessage:"Sem resultados disponíveis",className:((I=C.cidade)==null?void 0:I.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"cidade",children:["Cidade",r("span",{children:"*"})]})]})}}),r(V,{name:"tipo_logradouro",control:m,rules:{required:!0},render:({field:W,fieldState:X})=>{var I;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"150px"},children:[r(me,{value:W.value,optionLabel:"descricao",optionValue:"tipo",placeholder:"Tipo de logradouro",name:"tipo_logradouro",options:q.tipoLogradouroLista,onChange:k=>W.onChange(k.value),className:((I=C.tipo_logradouro)==null?void 0:I.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"tipo_logradouro",children:["Tipo de Logradouro",r("span",{children:"*"})]})]})}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"20%",flex:1},children:[r(te,{id:"endereco",value:I,style:{width:"100%"},...u("endereco"),className:((y=C.endereco)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1}),s("label",{htmlFor:"endereco",children:["Endereço",r("span",{children:"*"})]})]})},name:"endereco",control:m,rules:{required:!0}}),s("div",{className:"container-numero",children:[r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"15%",flex:1},children:[r(te,{id:"logradouro",value:I,style:{width:"100%"},maxLength:10,...u("logradouro"),className:((y=C.logradouro)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:q.snState||l?l&&!n(1040,5):!1}),s("label",{htmlFor:"logradouro",children:["N°",q.snState?"":r("span",{children:"*"})]})]})},name:"logradouro",control:m,rules:{required:!q.snState}}),s("div",{style:{fontSize:"12px",height:"35px",display:"flex",alignItems:"center",gap:"5px"},children:[r(Te,{inputId:"sn",name:"sn",value:q.snState,onChange:W=>q.setSN(W.checked),checked:q.snState,disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"sn",className:"ml-1",children:"S/N"})]})]})]}),s(_t,{children:[r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>{var y;return s("span",{className:"p-float-label",style:{minWidth:"120px",fontSize:"12px",flex:1},children:[r(me,{value:I,optionLabel:"nome",optionValue:"bairro",placeholder:"Bairro",name:"bairro",emptyMessage:"Sem resultados disponíveis",options:q.listOfNeighborhood,onChange:v=>{W(v.value)},className:((y=C.bairro)==null?void 0:y.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1,style:{fontSize:"12px",height:"35px",width:"100%"}}),s("label",{htmlFor:"bairro",children:["Bairro",r("span",{children:"*"})]})]})},name:"bairro",control:m,rules:{required:!0}}),r(V,{render:({field:{onChange:W,onBlur:X,value:I,name:k,ref:x},fieldState:{invalid:L,isTouched:b,isDirty:F,error:c}})=>s("span",{className:"p-float-label",style:{minWidth:"50%",flex:1},children:[r(te,{id:"complemento",value:I||"",style:{width:"100%"},maxLength:100,...u("complemento"),disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"complemento",children:"Complemento"})]}),name:"complemento",control:m,rules:{required:!1}}),r(V,{name:"situacao",control:m,rules:{required:"City is required."},render:({field:W,fieldState:X})=>{var I;return s("span",{className:"p-float-label",style:{minWidth:"100px",flex:1},children:[r(me,{value:W.value,optionLabel:"label",optionValue:"value",style:{width:"100%",height:"36px"},placeholder:"Status",name:"situacao",options:K,onChange:k=>W.onChange(k.value),className:((I=C.situacao)==null?void 0:I.type)==="required"?"p-invalid":"",disabled:l?l&&!n(1040,5):!1}),r("label",{htmlFor:"situacao",children:"Status"})]})}})]}),r(Wi,{children:r(xe,{label:"Salvar",ref:a,loading:q.loadingSaveBtn,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(C),disabled:l?l&&!n(1040,5):!1})})]})})}const Ki=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Ji=G.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`,Xi=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  
`;G.label`
  width: 120px;
  height: 120px;
  background: #D9D9D9;
  color: #6B7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  width: 100%;
  & input[type="radio"] {
    cursor: pointer;
  }
  & input[type="radio"]:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #d00;
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Yi=G.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input{
    font-size: 12px;
  }
  
`;G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Zi({resetField:a,selecionedCatalogo:n,reset:e,closeModal:t}){const{createNewCatalogoService:o,editCatalogoService:l}=Nr(),[i,u]=d.useState(!1),{openNotification:h}=Ne();return{verifySelectedCatalogo:()=>{n?setTimeout(()=>{["id","descricao","ativo","sigla"].forEach(m=>{a(m,{keepDirty:!0,defaultValue:n[m]})})},800):["id","descricao","ativo","sigla"].forEach(m=>{a(m,{keepDirty:!0,defaultValue:""}),m==="id"&&a(m,{keepDirty:!0,defaultValue:0}),m==="ativo"&&a(m,{keepDirty:!0,defaultValue:!1})})},createCatalogo:p=>{i||(u(!0),o(p).then(m=>{u(!1);let T=m.data[0].msg,O=m.data[0].erro;if(O&&O=="true"){h("error","Falha ao Cadastrar",`${T||"Erro ao cadastrar"}`,1e4);return}O&&O=="false"&&h("success","Sucesso",`${T||"Cadastro realizado com sucesso"}`),t()}).catch(m=>{u(!1),console.error(m),h("error","Falha ao Cadastrar",`${m.response.data.msg}`,1e4)}))},updateCatalogo:p=>{l(p).then(m=>{let T=m.data[0].msg,O=m.data[0].erro;if(O&&O=="true"){h("error","Falha",`${T||"Erro ao atualizar"}`,1e4);return}O&&O=="false"&&h("success","Sucesso",`${T||"Processo realizado com sucesso"}`),e(),setTimeout(()=>t(),1e3)}).catch(m=>{console.error(m),h("error","Falha ao Processar",`${m.response.data.msg}`,1e4)})}}}function Qi(){const{openCatalogos:a,formCatalogos:n,refreshListCatalogos:e,selecionedCatalogo:t}=we(_=>_),{havePermission:o}=Ae(),{register:l,handleSubmit:i,formState:{errors:u},reset:h,control:g,setValue:C,resetField:S}=ze({defaultValues:{id:0,ativo:!0,descricao:""}}),p=()=>{h(),C("descricao",""),n(),e()},{verifySelectedCatalogo:m,createCatalogo:T,updateCatalogo:O}=Zi({resetField:S,selecionedCatalogo:t,reset:h,closeModal:p}),j=d.useRef(null),M=_=>{T(_)},J=async _=>{O(_)},R=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:t?"Informações do Catálogo":"Novo Catálogo"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>p()})]});return d.useEffect(()=>(m(),window.addEventListener("keydown",_=>{var D;_.key==="Enter"&&(_.preventDefault(),j.current!==null&&((D=j.current)==null||D.click()))}),()=>{window.removeEventListener("keydown",()=>{}),h()}),[t]),r(De,{visible:a,position:"center",onHide:p,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},style:{minWidth:"40vw"},header:R,children:s(Ki,{onSubmit:i(t?J:M),children:[r(Ji,{children:"Dados do Catálogo"}),s(Yi,{style:{paddingTop:"15px"},children:[t&&r(V,{name:"id",control:g,rules:{required:!1},render:({field:_,fieldState:P})=>{var D;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"id",value:String(_.value),style:{width:"100%"},disabled:!0,...l("id"),className:((D=u.id)==null?void 0:D.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"id",children:"Código"})]})}}),r(V,{name:"descricao",control:g,rules:{required:!0},render:({field:_,fieldState:P})=>{var D;return s("span",{className:"p-float-label",style:{width:"80%"},children:[r(te,{id:"descricao",value:_.value,autoFocus:!0,style:{width:"100%"},...l("descricao"),className:((D=u.descricao)==null?void 0:D.type)==="required"?"p-invalid":"",maxLength:80,disabled:t?t&&!o(fe.CATALOGO,oe.ALTERAR):!1}),s("label",{htmlFor:"descricao",children:["Descrição",r("span",{children:"*"})]})]})}}),r(V,{name:"sigla",control:g,rules:{required:!0},render:({field:_,fieldState:P})=>{var D;return s("span",{className:"p-float-label",style:{width:"20%"},children:[r(te,{id:"sigla",style:{width:"100%"},...l("sigla"),value:_.value?_.value.toUpperCase():"",maxLength:3,onChange:B=>_.onChange(B.target.value.toUpperCase()),className:((D=u.sigla)==null?void 0:D.type)==="required"?"p-invalid":"",readOnly:!!(t!=null&&t.privado),tooltip:t!=null&&t.privado?"Alteração indisponível":"",disabled:t?t&&!o(fe.CATALOGO,oe.ALTERAR):!1}),s("label",{htmlFor:"sigla",children:["Sigla",r("span",{children:"*"})]})]})}}),r(V,{name:"ativo",control:g,rules:{required:!1},render:({field:_,fieldState:P})=>s("div",{style:{display:"flex",gap:"5px"},children:[r("label",{htmlFor:_.name,style:{fontSize:"0.9em"},children:"Ativo"}),r(Mt,{inputId:_.name,checked:_.value,inputRef:_.ref,onChange:D=>_.onChange(D.value),disabled:t?t&&!o(fe.CATALOGO,oe.ALTERAR):!1})]})})]}),r(Xi,{style:{paddingTop:"20px"},children:r(xe,{label:"Salvar",ref:j,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(u),disabled:t?t&&!o(fe.CATALOGO,oe.ALTERAR):!1})})]})})}const pr=G.p`
  font-size: 10px;
  color: #dd0000;
`,el=G.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 45px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
`,tl=G.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`,fr=G.div`
  display: flex;
  & > p {
    font-weight: bold;
    word-break: break-word;
    width: 150px;
  }
`;function al(){var R,_,P;const[a,n]=d.useState(""),{getDataUser:e,logoutUser:t}=Ct(),{changePasswordUserService:o}=nn(),{openChangePass:l,formChangePass:i}=we(),{register:u,handleSubmit:h,formState:{errors:g},reset:C,watch:S,control:p}=ze({defaultValues:{id_usuario:(R=e())==null?void 0:R.id,usuario:(_=e())==null?void 0:_.nome,senha:""}}),m=()=>{C(),i()},T=d.useRef(null),O=(D,B,q="",A=4e3)=>{T.current!=null&&T.current.show({severity:D,summary:B,detail:q,life:A,contentStyle:{display:"flex",gap:"20px"}})},j=D=>{console.log(D),o(D).then(B=>{let q=B.data[0].msg,A=B.data[0].erro;if(A=="true"){O("error","Falha ao Cadastrar",`${q||"Erro ao cadastrar"}`,1e4);return}if(A==!0){O("error","Falha ao Cadastrar",`${q||"Erro ao cadastrar"}`,1e4);return}O("success","Sucesso",`${q||"Processado com sucesso"}`),setTimeout(()=>{m(),t()},2e3)}).catch(B=>{O("error","Rrro","Falha no processamento!"),console.log(B)}).finally(()=>{})},M=()=>{var D;return r("div",{style:{fontWeight:"bold"},children:(D=e())!=null&&D.alterar_senha_proximo_logon?"Alteração de senha nescessária":"Alterar senha de usuário"})},J=S("senha");return s(De,{header:M,visible:l,style:{minWidth:"50vw"},breakpoints:{"960px":"75vw","820px":"100vw"},onHide:()=>m(),closable:!((P=e())!=null&&P.alterar_senha_proximo_logon),children:[r(Er,{ref:T,position:"top-right"}),s(el,{onSubmit:h(j),children:[s(fr,{children:[r("p",{children:"Nova Senha"}),r(V,{name:"senha",control:p,rules:{required:!0},render:({field:D,fieldState:B})=>{var q;return r(Qe,{children:s("span",{className:"p-float-label",style:{width:"80%"},children:[r(Aa,{...u("senha"),id:"senha",value:D.value,feedback:!1,toggleMask:!0,style:{width:"100%"},onChange:A=>D.onChange(A.target.value),className:((q=g.senha)==null?void 0:q.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"senha",children:"Nova Senha"})]})})}})]}),s(fr,{children:[r("p",{children:"Confirmar Nova Senha"}),s("span",{className:"p-float-label",style:{width:"80%"},children:[r(Aa,{id:"repete",feedback:!1,toggleMask:!0,style:{width:"100%"},className:a!==J||a===""&&J?"p-invalid":"",onChange:D=>n(D.target.value)}),a!==J&&r(pr,{children:"As senhas devem ser iguais"}),a==""&&J&&r(pr,{children:"Este campo é obrigatório!"}),r("label",{htmlFor:"repete",children:"Confirmar Nova Senha"})]})]}),r(tl,{children:r(xe,{label:"Salvar Nova Senha",severity:"info"})})]})]})}function rl(){return{factoryListPermissionsForSending:e=>{const t=[];return e.forEach(o=>{Rt.forEach(l=>{if(o[l].valor){let i={id_modulo:o.id_modulo,id_permissao:o[l].id_permissao,id_grupo:o.id_grupo};t.push(i)}})}),t},createRenderList:(e,t)=>{let o=[];for(let l of e){let i=t.filter(C=>C.id_grupo===l),u=new Object({});Rt.map(C=>{var S,p,m;return{[C]:{valor:!!((S=i.find(T=>T.permissao===C))!=null&&S.valor)||0,exibir:((p=i.find(T=>T.permissao===C))==null?void 0:p.exibir)||0,id_permissao:((m=i.find(T=>T.permissao===C))==null?void 0:m.id_permissao)||0}}}).forEach((C,S)=>{Rt.forEach(p=>{C[p]&&(u={...u,[p]:C[p]})})});let g={id_modulo:i[0].id_modulo,grupo:i[0].grupo,id_grupo:i[0].id_grupo,...u};o.push(g)}return o}}}function nl(){const{colors:a}=d.useContext(ut),{idModule:n,nameModule:e,openPermissions:t,togglePermissions:o,setModule:l}=zt(),{getPermissionsByModule:i,updatePermissionsByModule:u}=Ae(),[h,g]=d.useState(!1),[C,S]=d.useState([]),[p,m]=d.useState([]),{factoryListPermissionsForSending:T,createRenderList:O}=rl(),{openNotification:j}=Ne(),M=()=>{i(String(n)).then(z=>{const Q=[...new Set(z.data.map(W=>W.id_grupo))];let K=z.data;S(K);let ie=O(Q,K);m(ie)}).catch(z=>console.warn(z))},J=()=>{const z=T(p);u(z).then(Q=>{let K=Q.data[0].msg,ie=Q.data[0].erro;if(ie&&ie=="true"){j("error","Falha",`${K||"Erro ao cadastrar"}`,1e4);return}ie&&ie=="false"&&j("success","Sucesso",`${K||"Cadastro realizado com sucesso"}`),M()}).catch(Q=>{console.error(Q),j("error","Falha ao Cadastrar",`${Q.response.data.msg}`,1e4)}).finally(()=>g(!1))},R=()=>{o(),l(null,null),g(!1)};d.useEffect(()=>{n&&M()},[]);const _=Rt.map(z=>({field:`${z}.valor`,header:z})),P=z=>{const Q=z.exibir;return r("div",{style:{display:"flex",justifyContent:"center"},children:Q?r(Te,{checked:z.valor,tooltip:"Favor habilitar edição",disabled:!0}):r("div",{"aria-readonly":!0,"aria-disabled":!0,children:r("i",{className:"pi pi-ban",style:{fontSize:"1rem"}})})})},D=z=>{const Q=z.column.props.header;return z.rowData[Q].exibir?r("div",{style:{display:"flex",justifyContent:"center"},children:r(Te,{checked:z.value,value:z.value,onChange:ie=>{z&&z.editorCallback(!ie.value)},tooltip:"Click para alterar"})}):r("div",{style:{display:"flex",justifyContent:"center"},children:r("div",{"aria-readonly":!0,"aria-disabled":!0,children:r("i",{className:"pi pi-ban",style:{fontSize:"1rem"}})})})},B=z=>{let Q=[...p],{newData:K,index:ie,field:W}=z;Object.keys(K).map(I=>{if(typeof K[I]=="boolean")return{[I.split(".")[0]]:K[I]}}).filter(I=>I).forEach((I,k,x)=>{Object.keys(I).forEach(L=>{delete K[`${L}.valor`],K[L].valor=I[L]})}),Q[ie]=K,m(Q),g(!0)},q=z=>!!p.find(Q=>Q[z].exibir)||!1,A=_.map((z,Q)=>n!==fe.VENDA&&z.header==="Desconto"?r(Ee,{field:"",header:""},z.field):q(z.header)?r(Ee,{field:z.field,header:z.header,body:K=>P(K[z.header]),editor:K=>D(K),headerStyle:{fontWeight:"bold",fontSize:"12px"}},z.field):r(Ee,{field:"",header:"",style:{display:"none"}},z.field)),N=r("div",{style:{display:"flex",width:"100%",justifyContent:"flex-end"},children:h&&r(xe,{label:"Salvar alterações",icon:"pi pi-save",className:"p-button-danger",style:{display:"flex",gap:"10px",backgroundColor:a.primary},onClick:J})});return s(De,{header:"Permissões",visible:t,onHide:R,style:{minWidth:"50vw",minHeight:"40vh"},breakpoints:{"960px":"75vw","820px":"100vw"},maximizable:!0,resizable:!0,closeOnEscape:!0,footer:N,children:[s("p",{className:"m-0",children:["Módulo - ",e==null?void 0:e.toUpperCase()]}),s(jt,{value:p,tableStyle:{minWidth:"90%",zIndex:999999999},editMode:"row",onRowEditComplete:B,emptyMessage:"Sem dados a exibir",children:[r(Ee,{header:"Grupo",field:"grupo",headerStyle:{fontWeight:"bold",fontSize:"12px"}}),A,r(Ee,{rowEditor:!0,header:"Ações",headerStyle:{fontWeight:"bold",fontSize:"12px"},bodyStyle:{textAlign:"center"}})]})]})}function ol({resetField:a,selecionedContasPagar:n,setValue:e,closeModal:t,refreshListContasPagar:o}){const[l,i]=d.useState([]),[u,h]=d.useState([]),[g,C]=d.useState([]),[S,p]=d.useState(null),[m,T]=d.useState(null),[O,j]=d.useState(!1),[M,J]=d.useState(!1),{openNotification:R}=Ne(),[_,P]=d.useState(!1),{createNewContasPagarService:D,updateContasPagarService:B,getCategoriaContaPagarService:q,getCentrodeCustoContaPagarService:A,getOnlyContaPagarByEntradaService:N}=yn(),{setSelecionedContaPagar:z,formContasPagar:Q}=we(F=>F),{getAllFornecedorNoFilterService:K}=Or();return{verifySelectedConta:()=>{const F=["fornecedor","sequencial","razao_social","vencimento","valor_documento","categoria","centro_de_custo","competencia","observacao","CodigoExterno"];n?setTimeout(()=>{F.forEach(c=>{a(c,{keepDirty:!0,defaultValue:n[c]}),c==="vencimento"&&(a("data_vencimento",{keepDirty:!0,defaultValue:n.vencimento}),p(new Date(n.vencimento))),c==="vencimento"&&(a("data_vencimento",{keepDirty:!0,defaultValue:n.vencimento}),p(new Date(n.vencimento))),c==="competencia"&&(a("competencia",{keepDirty:!0,defaultValue:n.vencimento}),T(new Date(n.competencia))),c==="valor_documento"&&a("valor_total",{keepDirty:!0,defaultValue:n.valor_documento}),c==="entrada"&&a("entrada",{keepDirty:!0,defaultValue:Number(n.entrada)}),a("sequencial",{keepDirty:!0,defaultValue:n.sequencial}),e("sequencial",n.sequencial),e("CodigoExterno",n.CodigoExterno)})},1e3):F.forEach(c=>{c==="sequencial"&&a(c,{keepDirty:!0,defaultValue:0}),T(null),p(null),a(c,{keepDirty:!0,defaultValue:""})})},createContasPagar:F=>{_||(P(!0),D(F).then(c=>{P(!1);let y=c.data[0].msg,v=c.data[0].erro;if(v&&v=="true"){R("error","Falha ao Cadastrar",`${y||"Erro ao cadastrar"}`,1e4);return}v&&v=="false"&&R("success","Sucesso",`${y||"Cadastro realizado com sucesso"}`),o(),setTimeout(()=>{t()})}).catch(c=>{P(!1),console.warn(c),R("error","Falha ao Cadastrar",`${c.response.data.msg}`,1e4)}))},updateContasPagar:F=>{B(F).then(c=>{let y=c.data[0].msg,v=c.data[0].erro;if(v&&v=="true"){R("error","Falha ao Cadastrar",`${y||"Erro ao cadastrar"}`,1e4);return}v&&v=="false"&&R("success","Sucesso",`${y||"Cadastro realizado com sucesso"}`),o(),setTimeout(()=>{t()},1500)}).catch(c=>{console.error(c),R("error","Falha ao Cadastrar",`${c.response.data.msg}`,1e4)})},getCentroDeCusto:()=>{A().then(F=>{C(F.data)}).catch(F=>{console.error(F),R("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getCategorias:()=>{q().then(F=>{const c=F.data.filter(y=>y.ativo);h(c)}).catch(F=>{console.error(F),R("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getListAllFornecedor:()=>{K().then(F=>i(F.data)).catch(F=>{console.error(F),R("warn","Falha ao obter lista de clientes disponíveis")})},getContaByEntrada:F=>{j(!0),N(F).then(c=>{if(!c.data.length){R("warn","Nenhuma conta  apagar encontrada!"),setTimeout(()=>{Q(null,void 0)},4e3);return}z(c.data[0])}).catch(c=>{console.error(c),R("warn","Falha ao obter dados de contas a pagar")}).finally(()=>j(!1))},toggleContaPagarDialog:()=>{J(F=>!F)},state:{listCategorias:u,listFornecedores:l,listCentroCusto:g,setDataCompetencia:T,setDataVencimento:p,dataCompetencia:m,dataVencimento:S,loadingContaPagar:O,openContaPagar:M}}}G.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`;const il=G.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,ll=G.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;G.label`
  width: 120px;
  height: 120px;
  background: #d9d9d9;
  color: #6b7280;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 50%;
  & span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
  }
`;G.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  width: 100%;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid #d00;
  }
`;G.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const ga=G.section`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  & .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: var(--cor-tema);
    background: var(--cor-tema);
  }
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  .p-calendar input {
    font-size: 12px;
  }
  .p-calendar .p-button {
    background: ${a=>a.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
`;G.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function sl(){const{colors:a}=d.useContext(ut),n=d.useRef(null),{havePermission:e}=Ae(),{formFornecedores:t,setRefreshListFornecedor:o}=we(k=>k),{openContasPagar:l,selecionedContasPagar:i,formContasPagar:u,refreshListContasPagar:h,idEntrada:g}=we(k=>k),{register:C,handleSubmit:S,watch:p,formState:{errors:m},reset:T,setError:O,resetField:j,control:M,setValue:J}=ze({defaultValues:{entrada:0}}),R=()=>{T(),Q.setDataCompetencia(null),Q.setDataVencimento(null),u(null,void 0)},{verifySelectedConta:_,createContasPagar:P,updateContasPagar:D,getCentroDeCusto:B,getCategorias:q,getListAllFornecedor:A,getContaByEntrada:N,toggleContaPagarDialog:z,state:Q}=ol({resetField:j,selecionedContasPagar:i,setValue:J,closeModal:R,refreshListContasPagar:h}),K=async k=>{P(k)},ie=async k=>{D(k)},W=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[r("h5",{style:{display:"flex",gap:"10px"},children:i?"Informações da Conta a Pagar":"Nova Conta a Pagar"}),r("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>R()})]}),X=()=>R(),I=k=>s("div",{children:[r("p",{children:"Nenhum resultado encontrado"}),e(fe.FORNECEDOR,oe.INCLUIR)&&r(xe,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:a.primary},onClick:()=>t()})]});return d.useEffect(()=>{g&&N(String(g))},[g]),d.useEffect(()=>{_()},[i]),d.useEffect(()=>(A(),q(),B(),o(A),window.addEventListener("keydown",k=>{var L;k.key==="Enter"&&(k.preventDefault(),n.current!==null&&((L=n.current)==null||L.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[]),s(De,{visible:l,position:"center",onHide:X,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:W,children:[Q.loadingContaPagar?r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}}):s(il,{onSubmit:S(i?ie:K),children:[s(ga,{style:{paddingTop:"15px"},children:[i&&r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{width:"10%"},children:[r(te,{id:"id",value:String(L),style:{width:"100%"},...C("sequencial"),disabled:!0,className:((E=m.sequencial)==null?void 0:E.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"sequencial",children:"Código"})]})},name:"sequencial",control:M,rules:{required:!1}}),r(V,{name:"fornecedor",control:M,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(me,{autoFocus:!0,value:k.value,optionLabel:"razao_social",optionValue:"fornecedor",placeholder:"Selecione o Fornecedor",name:"fornecedor",options:Q.listFornecedores.map(b=>({...b,filterBy:b.fornecedor+b.cnpj+b.razao_social})),onChange:b=>{k.onChange(b.value)},filter:!0,filterBy:"filterBy",emptyFilterMessage:I,className:((L=m.fornecedor)==null?void 0:L.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},disabled:(i==null?void 0:i.situacao)==="PAGO"}),s("label",{htmlFor:"uf",children:["Fornecedor",r("span",{children:"*"})]})]})}}),r(V,{name:"data_vencimento",control:M,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{flex:1},children:[r(dt,{value:Q.dataVencimento,mask:"99/99/9999",onChange:b=>{k.onChange(new Date(b.value).toISOString()),Q.setDataVencimento(b.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Data de Nascimento",inputId:"data_nascimento",className:((L=m.data_vencimento)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:(i==null?void 0:i.situacao)==="PAGO"}),r("label",{htmlFor:"data_vencimento",children:"Data de Vencimento"})]})}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(Fe,{value:L,onChange:w=>k(w.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"36px"},className:((E=m.valor_total)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:(i==null?void 0:i.situacao)==="PAGO"}),s("label",{htmlFor:"venda_minima",children:["Valor Total (R$)",r("span",{children:"*"})]})]})},name:"valor_total",control:M,rules:{required:!0}})]}),s(ga,{children:[r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"categoria",value:L,optionLabel:"descricao",optionValue:"id",options:Q.listCategorias,style:{width:"100%"},placeholder:"Categoria",onChange:w=>k(w.value),className:((E=m.categoria)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:(i==null?void 0:i.situacao)==="PAGO"}),s("label",{htmlFor:"categoria",children:["Categoria",r("span",{children:"*"})]})]})},name:"categoria",control:M,rules:{required:!0}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{flex:1},children:[r(me,{id:"centro_de_custo",value:L,optionLabel:"descricao",optionValue:"id",options:Q.listCentroCusto,style:{width:"100%"},placeholder:"Centro de Custo",onChange:w=>k(w.value),className:((E=m.centro_de_custo)==null?void 0:E.type)==="required"?"p-invalid":"",disabled:(i==null?void 0:i.situacao)==="PAGO"}),s("label",{htmlFor:"centro_de_custo",children:["Centro de Custo",r("span",{children:"*"})]})]})},name:"centro_de_custo",control:M,rules:{required:!0}}),r(V,{name:"competencia",control:M,rules:{required:!0},render:({field:k,fieldState:x})=>{var L;return s("span",{className:"p-float-label",style:{flex:1},children:[r(dt,{...C("competencia",{required:!0}),value:Q.dataCompetencia,mask:"99/9999",onChange:b=>{k.onChange(new Date(b.value).toISOString()),Q.setDataCompetencia(b.value)},dateFormat:"mm/yy",view:"month",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Competencia",inputId:"competencia",className:((L=m.competencia)==null?void 0:L.type)==="required"?"p-invalid":"",disabled:(i==null?void 0:i.situacao)==="PAGO"}),r("label",{htmlFor:"competencia",children:"Competência"})]})}}),r(V,{render:({field:{onChange:k,onBlur:x,value:L,name:b,ref:F},fieldState:{invalid:c,isTouched:y,isDirty:v,error:f}})=>{var E;return s("span",{className:"p-float-label",style:{width:"100%"},children:[r(Ir,{id:"observacao",value:L,maxLength:255,style:{width:"100%",fontSize:"12px"},...C("observacao"),className:((E=m.observacao)==null?void 0:E.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"observacao",children:"Observações"})]})},name:"observacao",control:M,rules:{required:!1}})]}),i&&s(ga,{children:[s("span",{className:"p-float-label",style:{width:"20%",minWidth:"150px"},children:[r(te,{id:"codentrada",style:{width:"100%"},value:i.entrada?String(i.entrada):"",disabled:!0}),r("label",{htmlFor:"sequencial",children:"Cód. Entrada"})]}),s("span",{className:"p-float-label",style:{width:"20%",minWidth:"150px"},children:[r(te,{id:"codentrada",style:{width:"100%"},value:i.nota_fiscal?String(i.nota_fiscal):"",disabled:!0}),r("label",{htmlFor:"sequencial",children:"Nota Fiscal"})]})]}),r(ll,{children:e(fe.CONTAS_A_PAGAR,oe.INCLUIR)&&s(Qe,{children:[i&&r(xe,{type:"button",label:"Baixa",icon:"pi pi-dollar",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},onClick:z}),r(xe,{label:"Salvar",ref:n,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(m),disabled:i?i&&!e(6020,5)||i.situacao==="PAGO":!1})]})})]}),i&&r(vn,{contaPagar:i,visible:Q.openContaPagar,togglePagarDialog:z,refreshList:h})]})}function dl({listRastreios:a,refreshListRastreio:n,refreshProducts:e}){const[t,o]=d.useState(!1),{deleteRastreioProductService:l}=Ia(),{openNotification:i}=Ne(),u=S=>{o(!0),l(S).then(p=>{console.log(p.data);const m=p.data[0].erro,T=p.data[0].msg;if(m&&m==="true"){i("warn","Falha",`${T||"Falha na execução!"}`,5e3);return}n(),e&&e(a[0].id_movimentacao),i("success","Sucesso",`${T||"Ação concluída com sucesso!"}`)}).catch(p=>{var m;console.warn(p),i("error","Falha",`${((m=p.response)==null?void 0:m.data.msg)||"Falha no Processamento!"}`)}).finally(()=>o(!1))},h=S=>r(xe,{icon:"pi pi-trash",className:"p-button-text",severity:"danger",title:"Excluir item rastreado",onClick:()=>u([{sequencial:S.id}])}),C=(()=>{const S=a.map(p=>({sequencial:p.id}));return r("div",{style:{display:"flex",width:"100%",justifyContent:"flex-end"},children:a.length>1?r(xe,{icon:"pi pi-trash",badge:String(a.length),size:"small",label:"Excluir todos",className:"p-button-text",severity:"danger",style:{fontSize:"12px",display:"flex",gap:"10px"},onClick:()=>u(S)}):""})})();return r("div",{style:{width:"100%",maxHeight:"55%",overflowY:"auto"},children:s(jt,{header:C,value:a,loading:t,scrollable:!0,scrollHeight:"400px",style:{minWidth:"50rem"},emptyMessage:"Sem itens encontrados",children:[r(Ee,{header:"Código",field:"id"}),r(Ee,{header:"Serial Inicial",field:"serial_inicial"}),r(Ee,{header:"Serial Final",field:"serial_final"}),r(Ee,{header:"",body:h})]})})}function cl({open:a,idMovimentacao:n,setOpen:e,product:t,isFinally:o,refreshProducts:l}){const[i,u]=d.useState(""),[h,g]=d.useState(""),[C,S]=d.useState(!1),[p,m]=d.useState([]),[T,O]=d.useState(!1),j=d.useRef(null),M=d.useRef(null),{getRastreioProductService:J,createRastreioProductService:R}=Ia(),{openNotification:_}=Ne(),P=()=>{O(!0),R({tipoMovimentacao:qt.Venda,idMovimentacao:n,produto:t.produto,serial_inicial:i,serial_final:h}).then(A=>{let N=A.data[0].msg,z=A.data[0].erro;if(z&&z=="true"){_("error","Falha ao cadastrar",`${N||"Erro ao cadastrar"}`,1e4);return}if(z&&z=="false"){_("success","Sucesso",`${N||"Sucesso"}`,1e4),u(""),g(""),D();return}}).catch(A=>{console.error(A),_("error","Falha",`${A.response.data.msg}`,1e4)}).finally(()=>O(!1))},D=()=>{J(qt.Venda,n,t.produto).then(A=>{m(A.data),console.log(A.data)}).catch(A=>{console.log(A)})};d.useLayoutEffect(()=>{t&&D()},[t]);const B=()=>{if(p.length){const A=p.reduce((N,z)=>N+z.quantidade,0);return o(A),A}return 0};return d.useEffect(()=>{if(t){if(o(B()),i.length===t.tamanho_numero_serie&&h.length===t.tamanho_numero_serie){P();return}if(i&&i.length===t.tamanho_numero_serie)if(C){if(M.current!==null){M.current.focus();return}}else{P();return}}return()=>{o(B())}},[i,h]),r(De,{visible:a,onHide:()=>{e(!1),S(!1),u(""),g("")},header:"Rastreio",maximizable:!0,style:{minWidth:"60vw",minHeight:"40vh"},children:s(Sn,{children:[s(wn,{children:["Movimentação - ",n," / Produto ",t&&t.produto]}),T?r("div",{className:"card",style:{height:"15px",width:"100%"},children:r(on,{mode:"indeterminate",style:{height:"6px"}})}):s(En,{children:[t&&!t.eh_alfanumerico&&s("h6",{children:["Rastreamento por Intervalo"," ",r(Mt,{checked:C,onChange:A=>{S(!!A.value),j!=null&&setTimeout(()=>{var N;(N=j.current)==null||N.focus()},100)}})]}),s("div",{className:"container-inputs",children:[r("i",{className:"pi pi-qrcode",style:{fontSize:"2.5rem"}}),r(te,{ref:j,placeholder:C?"Serial Inicial":"Serial",value:i,autoFocus:!0,disabled:t?B()>=t.quantidade:!1,onChange:A=>u(A.target.value)}),C&&r(te,{ref:M,placeholder:"Serial Final",value:h,disabled:t?B()>=t.quantidade:!1,onChange:A=>g(A.target.value)})]})]}),s(Nn,{children:["Rastreados: ",B()," de ",t?t.quantidade:""]}),r(dl,{listRastreios:p,refreshListRastreio:D,refreshProducts:l})]})})}function ul({sigla:a}){const{getListItensCatalogoService:n}=Nr(),[e,t]=d.useState([]);return d.useEffect(()=>(a&&!e.length&&n(a).then(o=>{t(o.data)}),()=>{t([])}),[a]),{listOptionsCatalogo:e}}function pl({attrs:a,updateListAttributs:n}){const e=a.origem_tipo,{listOptionsCatalogo:t}=ul({sigla:e});return t.length?r(me,{id:String(a.id),optionLabel:"descricao",optionValue:"id",value:a.valor,options:t,onChange:o=>n(+a.id,o.value),placeholder:"Selecionar opção",style:{height:"35px",width:"50%"}}):r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}function fl({idTabela:a}){const{getAttributListTabelaService:n}=Nt(),[e,t]=d.useState([]);return d.useEffect(()=>(a&&!e.length&&n(a).then(o=>{t(o.data)}),()=>{t([])}),[a]),{listOptionsTabela:e}}function ml({attrs:a,updateListAttributs:n}){const e=+a.origem_tipo,{listOptionsTabela:t}=fl({idTabela:e});return t.length?r(me,{id:String(a.id),optionLabel:"descricao",optionValue:"id",value:a.valor,options:t,onChange:o=>n(+a.id,o.value),placeholder:"Selecionar opção",style:{height:"35px",width:"50%"}}):r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}function hl({definedList:a,codProduto:n}){const[e,t]=d.useState(a);return d.useEffect(()=>{t(a)},[a,n]),{filteredList:()=>e.filter(l=>l.produto===n)}}function gl({visible:a,product:n,toggleOpenAtributs:e,setDefinedAttributsList:t,definedAttributsList:o,selectedVenda:l}){const{colors:i}=d.useContext(ut),[u,h]=d.useState([]),[g,C]=d.useState([]),{getAttributListByProductService:S,getCreatedAttributListByProductService:p}=Nt(),{openNotification:m}=Ne(),T=P=>{S(P).then(D=>{const B=D.data[0].erro,q=D.data[0].msg;if(B==="true"){m("warn","Falha ao obter lista de atributos",`${q||""}`);return}const A=D.data.map(K=>{const ie=o==null?void 0:o.find(W=>Number(W.id)===Number(K.id));return ie?{...K,produto:n.produto,valor:ie.valor}:{produto:n.produto,...K,valor:K.valor||null}}),N=[...o,...A];function z(K,ie){const W=[],X=new Set;for(const I of K){const k=I[ie];X.has(k)||(X.add(k),W.push(I))}return W}const Q=z(N,"id");h(Q),t(Q)}).catch(D=>{var q;console.log(D.response);const B=(q=D.response)==null?void 0:q.data.msg;m("error","Falha ao obter lista de atributos",`${B||""}`)})},O=P=>{p(P).then(D=>D.data).then(D=>{S(n.guid).then(B=>{const q=B.data.map(A=>{const N=D==null?void 0:D.find(z=>Number(z.atributo)===Number(A.id));return N?{...A,produto:n.produto,valor:N.valor}:{produto:n.produto,...A,valor:A.valor||null}});h(q),t(q)})}).catch(D=>{console.log(D),m("warn","Falha","Falha ao obter lista de atributos definidos deste pedido")})};d.useLayoutEffect(()=>{const P=o.find(D=>D.produto===n.produto);if(a&&n.guid&&!P&&!l&&T(n.guid),a&&n.produto)for(let D of o){const B=[];String(D.produto)===String(n.produto)&&B.push(D),C(B)}},[a,n.guid]),d.useLayoutEffect(()=>{l&&n.guid&&O(l.pedido)},[n.guid]);const j=()=>{e()},M=(P,D)=>{const B=o.map(N=>N.id===P?{...N,valor:D,produto:n.produto,atributo:N.id}:{...N,produto:N.produto,atributo:N.id}),A=g.map(N=>N.id===P?{...N,valor:D,produto:n.produto,atributo:N.id}:{...N,valor:N.valor,produto:n.produto,atributo:N.id}).filter(N=>N.produto===n.produto);h(B),t(B),C(A)},J=()=>r(vl,{children:r(xe,{label:"OK",onClick:j,style:{backgroundColor:i.primary}})}),R=()=>s("h5",{children:["Definir Atributos do Produto - ",n.produto]}),{filteredList:_}=hl({definedList:o,codProduto:n.produto});return r(De,{onHide:j,visible:a,style:{minWidth:"50vw",minHeight:"50vh"},header:R,footer:J,children:r(yl,{children:_().map((P,D)=>{if(P.tipo_campo===1)return s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(pl,{attrs:P,updateListAttributs:M})]},D);if(P.tipo_campo===2)return s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(ml,{attrs:P,updateListAttributs:M})]},D);if(P.tipo_campo===4){const B=[{label:"Sim",value:!0},{label:"Não",value:!1}];return s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(me,{id:String(P.id),optionLabel:"label",optionValue:"value",value:P.valor,options:B,onChange:q=>M(P.id,q.value),placeholder:"Selecionar opção",style:{height:"35px",width:"50%"}})]},D)}if(P.tipo_campo===3){const B=P.mascara;return B&&String(B)!==String(22)?s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(qa,{value:P.valor||"",mask:Ra(+B),onChange:q=>M(P.id,q.value),style:{height:"35px",width:"50%"}})]},D):s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(te,{id:String(P.id),value:P.valor||"",onChange:q=>M(P.id,q.target.value),style:{height:"35px",width:"50%"}})]},D)}if(P.tipo_campo===5||P.tipo_campo===6){const B=P.mascara;return B&&Number(B)<15?s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(qa,{value:P.valor||"",mask:Ra(+B),onChange:q=>M(P.id,q.target.value),style:{height:"35px",width:"50%"}})]},D):s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(Fe,{id:String(P.id),value:P.valor||"",onChange:q=>M(P.id,q.value),style:{height:"35px",width:"50%"}})]},D)}return P.tipo_campo===7?s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(dt,{id:String(P.id),value:P.valor,mask:"99/99/9999",onChange:B=>M(P.id,B.value),dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"50%",translate:"0px 1px"},placeholder:"Selecione a data",inputId:"data"})]},D):s(Je,{children:[s("p",{children:[P.nome_campo,P.obrigatorio?r("span",{children:"*"}):""]}),r(te,{id:String(P.id),type:"text",value:P.valor||"",onChange:B=>{M(P.id,B.target.value)},style:{height:"35px",width:"50%",translate:"0px 1px"}})]},D)})})})}const yl=G.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`,Je=G.div`
  display: flex;
  gap: 20px;
  align-items: center;
  & p {
    min-width: 150px;
    text-align: right;
    span {
      color: #d00;
    }
  }
`,vl=G.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: flex-end;
`;function bl({products:a,removeItemInList:n,updateItemInList:e,entrada:t,selectedVenda:o,setListAttibuts:l,definedListAttibuts:i,refreshProducts:u}){d.useContext(ut);const[h,g]=d.useState(!1),[C,S]=d.useState(0),[p,m]=d.useState(null),[T,O]=d.useState([]),[j,M]=d.useState(!1),[J,R]=d.useState(null),{getRastreioProductService:_}=Ia(),{havePermission:P}=Ae(),{getCreatedAttributListByProductService:D}=Nt(),{openNotification:B}=Ne(),q=()=>M(b=>!b),A=async()=>{for(let b of a)if(b.obrigar_rastreamento){const F=await N(b.produto);if(F){O([]);const c=a.map(y=>y.produto===b.produto?{...y,rastreados:F}:{...y});O(c)}}};d.useLayoutEffect(()=>{O(a),setTimeout(()=>{a&&A()},500)},[C,a,t,n]);const N=b=>_(qt.Venda,Number(o==null?void 0:o.pedido),b).then(F=>F.data.reduce((v,f)=>v+f.quantidade,0)).catch(F=>(console.log(F),0)),z=[{field:"produto",header:"Cod. Produto"},{field:"descricao",header:"Descrição"},{field:"quantidade",header:"Quantidade"},{field:"valor_unitario",header:"Valor Unidade"},{field:"valor_desconto",header:"Desconto"},{field:"total",header:"Valor Total"},{field:"edit",header:""},{field:"acoes",header:""}],Q=b=>{let F=[...a],{newData:c,index:y}=b;const v=c.valor_unitario,f=F[y].venda_minima,E=F[y].venda_maxima;if(v>E){B("warn","Valor Inválido!","O valor atribuído está acima do valor máximo permitido para este produto.",3e3);return}if(v<f){B("warn","Valor Inválido!","O valor atribuído está abaixo do valor mínimo permitido para este produto.",3e3);return}F[y]=c,e(F)},K=b=>r(Fe,{maxLength:4,value:b.value,onChange:F=>{const c=F.value||1;b==null||b.editorCallback(c)},useGrouping:!1,max:9999}),ie=b=>r(Fe,{disabled:!P(fe.VENDA,oe.DESCONTO),mode:"currency",currency:"BRL",locale:"pt-BR",value:b.value,onChange:F=>{b==null||b.editorCallback(F.value)}}),W=b=>r(Fe,{value:b.value,mode:"currency",currency:"BRL",locale:"pt-BR",onChange:F=>{b==null||b.editorCallback(F.value)}}),X=b=>{const F=b.valor_unitario,c=b.quantidade,y=b.valor_desconto||0,v=Number(F)*c;return r("div",{children:qe(v-Number(y))})},I=b=>{const F=b.valor_unitario;return r("div",{children:qe(F)})},k=b=>{const F=b.valor_desconto;return r("div",{children:qe(F)})},x=b=>{const{qtdRastreios:F}=xn({tipoMovimentacao:qt.Venda,codMovimentacao:b.pedido,codProduto:b.produto});return s("div",{style:{display:"flex",gap:"5px",justifyContent:"flex-end",maxWidth:"80px"},children:[b.tem_atributos&&r(xe,{label:"",icon:"pi pi-file-edit",size:"small",severity:"info",title:"Atributos",className:"p-button-text p-button-sm",style:{fontSize:"12px"},onClick:()=>{R(b),q()},type:"button"}),r(xe,{label:"",icon:"pi pi-trash",size:"small",severity:"danger",title:"Excluir item",className:"p-button-text p-button-sm",style:{fontSize:"12px"},onClick:()=>n(b.CodigoExterno,F),type:"button"}),o&&b.obrigar_rastreamento||t&&b.obrigar_rastreamento?r(Qe,{children:r(xe,{type:"button",label:"",icon:"pi pi-qrcode",size:"small",severity:"danger",title:"Rastrear",className:"p-button-text p-button-sm",style:{fontSize:"12px",color:Number(F)>=Number(b.quantidade)?"blue":"#d00"},onClick:()=>{g(c=>!c),m(b)}})}):""]})},L=b=>{D(b).then(F=>{const c=F.data;l(c)}).catch(F=>{console.log(F),B("warn","Falha","Falha ao obter lista de atributos definidos deste pedido")})};return d.useLayoutEffect(()=>{o&&!i.length&&L(o.pedido)},[o]),s(Qe,{children:[r(cl,{open:h,idMovimentacao:Number(o==null?void 0:o.pedido)||Number(t),setOpen:g,product:p,isFinally:S,refreshProducts:u}),(J==null?void 0:J.produto)&&j&&r(gl,{visible:j,toggleOpenAtributs:q,setDefinedAttributsList:l,product:J,definedAttributsList:i,selectedVenda:o}),r(jt,{value:T,tableStyle:{minWidth:"50rem"},editMode:"row",dataKey:"produto",onRowEditComplete:Q,emptyMessage:"Nenhum item adicionado!",scrollable:!0,scrollHeight:"400px",style:{minWidth:"10rem"},children:z.map((b,F)=>b.field==="edit"?r(Ee,{header:b.header,rowEditor:!0,headerStyle:{width:"10%",minWidth:"8rem"},bodyStyle:{textAlign:"center"}},b.header):b.field==="acoes"?r(Ee,{body:x,header:b.header},b.header):b.field==="valor_desconto"?r(Ee,{field:b.field,header:b.header,body:k,editor:c=>ie(c),bodyStyle:{textAlign:"center"}},b.header):b.field==="valor_unitario"?r(Ee,{field:b.field,header:b.header,body:I,editor:c=>W(c),bodyStyle:{textAlign:"center"}},b.header):b.field==="total"?r(Ee,{body:X,header:b.header,bodyStyle:{textAlign:"center"}},b.header):b.field!="produto"&&b.field!="descricao"?r(Ee,{field:b.field,header:b.header,editor:c=>K(c),bodyStyle:{textAlign:"center"}},b.header):r(Ee,{field:b.field,header:b.header},b.header))})]})}function xl({refreshVendas:a,selectedVenda:n,setValue:e}){const t=()=>({pedido:n?n.pedido:0,descricao:"",produto:"",guid:"",quantidade:"",valor_unitario:0,valor_total:0,venda_minima:0,venda_maxima:0,valor_desconto:null,desconto_aliq:0,medida:0,obrigar_rastreamento:!1,tamanho_numero_serie:0,eh_alfanumerico:!1,tem_atributos:!1,CodigoExterno:""}),[o,l]=d.useState(t()),[i,u]=d.useState(null),[h,g]=d.useState(new Date(new Date().toISOString())),[C,S]=d.useState(!1),[p,m]=d.useState([]),[T,O]=d.useState(0),[j,M]=d.useState(null),[J,R]=d.useState(!1),[_,P]=d.useState(!1),[D,B]=d.useState([]),[q,A]=d.useState([]),[N,z]=d.useState(null),[Q,K]=d.useState([]),[ie,W]=d.useState([]);d.useState(0);const{createNewVendaService:X,getOnlyVendaService:I,getListItemVendaService:k,updateVendaService:x}=Pr(),{getListAllClientesNoFilterService:L}=Fr(),{getListAllProductsNoFilterService:b}=Nt(),{processOrCancelService:F}=Cn(),{openNotification:c}=Ne(),y=ue=>{let re=ue.target?{...o,[ue.target.name]:ke(ue.target.value)}:{...o,[ue.originalEvent.target.name]:ke(ue.originalEvent.target.value)};l(re)},v=()=>!!(_||J),f=(ue,re,ye,ne)=>{const ge=["cliente","situacao","observacao","CodigoExterno","data_pedido","pedido"];setTimeout(()=>{ne?(ue&&E(ne==null?void 0:ne.pedido),ge.forEach(be=>{if(re(be,{keepDirty:!0,defaultValue:ne[be]}),be==="data_pedido"){if(ne.data_pedido){let tt=String(ne.data_pedido).split("T")[0].replaceAll("-","/");g(new Date(tt))}re("data_pedido",{keepDirty:!0,defaultValue:h==null?void 0:h.toISOString()})}be==="pedido"&&(re(be,{keepDirty:!0,defaultValue:ne[be]}),ye("pedido",ne.pedido)),be==="CodigoExterno"&&(re(be,{keepDirty:!0,defaultValue:ne[be]}),ye("CodigoExterno",ne.CodigoExterno)),be==="situacao"&&(re(be,{keepDirty:!0,defaultValue:ne[be]}),ye("situacao",ne.situacao))})):ge.forEach(be=>{re(be,{keepDirty:!0,defaultValue:""}),re("data_pedido",{keepDirty:!0,defaultValue:h==null?void 0:h.toISOString()})})},500)},E=ue=>{k(+ue).then(re=>{console.log(re.data),m(re.data)}).catch(re=>{console.log(re)}).finally(()=>null)},w=ue=>{R(!0),X(ue,p,Q,ie).then(re=>{let ye=re.data[0].msg,ne=re.data[0].erro,ge=re.data[0].pedido;if(ne&&ne=="true"){c("error","Falha ao Cadastrar",`${ye||"Erro ao cadastrar"}`,1e4);return}ne&&ne=="false"&&(O(ge),ee(ge),E(ge),a(),c("success","Sucesso",`${ye||"Cadastro realizado com sucesso"}`))}).catch(re=>{console.error(re),c("error","Falha ao Cadastrar",`${re.response.data.msg}`,1e4)}).finally(()=>R(!1))},$=ue=>{R(!0),x(ue,p,Q,ie).then(re=>{let ye=re.data[0].msg,ne=re.data[0].erro;if(ne&&ne=="true"){c("error","Falha ao Cadastrar",`${ye||"Erro ao cadastrar"}`,1e4);return}ne&&ne=="false"&&(a(),c("success","Sucesso",`${ye||"Cadastro realizado com sucesso"}`))}).catch(re=>{console.error(re),c("error","Falha ao Cadastrar",`${re.response.data.msg}`,1e4)}).finally(()=>R(!1))},ee=ue=>{S(!0),I(ue).then(re=>{let ye=re.data[0].msg,ne=re.data[0].erro;if(ne&&ne=="true"){c("error","Falha ao obter venda",`${ye||"Erro ao cadastrar"}`,1e4);return}M(re.data[0]),e("cliente",re.data[0].cliente),e("situacao",re.data[0].situacao),e("observacao",re.data[0].observacao)}).catch(re=>{console.error(re),c("error","Falha",`${re.response.data.msg}`,1e4)}).finally(()=>S(!1))},le=()=>{L().then(ue=>{B(ue.data)}).catch(ue=>{console.error(ue),c("warn","Falha ao obter lista de clientes disponíveis")})},H=()=>{b().then(ue=>{A(ue.data)}).catch(ue=>{console.error(ue),c("warn","Falha ao obter lista de produtos disponíveis")})},Y=()=>{S(!0);const ue={...o,produto:o.produto,quantidade:+o.quantidade||0,obrigar_rastreamento:o.obrigar_rastreamento,valor_desconto:o.valor_desconto||0,eh_alfanumerico:N==null?void 0:N.eh_alfanumerico,eh_qrcode:N==null?void 0:N.eh_qrcode,tamanho_numero_serie:N==null?void 0:N.tamanho_numero_serie,valor_total:o.valor_unitario*(+o.quantidade||0)-(o.valor_desconto||0),venda_minima:N==null?void 0:N.venda_minima,venda_maxima:N==null?void 0:N.venda_maxima};if(p.find(be=>be.produto===ue.produto)){c("warn","Produto ja adicionado!","Selecione um outro produto disponível.",3e3),S(!1);return}if(ue.valor_unitario>(N==null?void 0:N.venda_maxima)){c("warn","Valor Inválido!","O valor atribuído está acima do valor máximo permitido para este produto.",3e3),S(!1);return}if(ue.valor_unitario<(N==null?void 0:N.venda_minima)){c("warn","Valor Inválido!","O valor atribuído está abaixo do valor mínimo permitido para este produto.",3e3),S(!1);return}if((ue.quantidade||0)>(N==null?void 0:N.estoque_atual)&&!(N!=null&&N.eh_sem_estoque)){c("warn","Quantidade Inválida!","A quantidade informada ultrapassa a quantidade do estoque disponível deste produto.",3e3),S(!1);return}let ye=p;ye.push(ue),m(ye),setTimeout(()=>{S(!1)},500),l(t()),z(null);const ne=Re(),ge=Oe();e("valor_total",+ge),e("valor_desconto",+ne)},se=(ue,re)=>{S(!0);let ne=p.filter(ge=>ge.CodigoExterno!=ue);if(re){c("warn","Falha","Produto já rastreado! Exclua o rastreamento primeiro.",3e3),S(!1);return}m(ne),setTimeout(()=>{S(!1)},500)},Z=ue=>{S(!0),m(ue),setTimeout(()=>{S(!1)},500)},Ce=ue=>{let re=q.find(ne=>ne.produto===ue);z(re);let ye={...o,pedido:n?n.pedido:0,descricao:re==null?void 0:re.descricao,produto:ue,medida:(re==null?void 0:re.medida_base)||0,guid:re==null?void 0:re.guid,obrigar_rastreamento:re==null?void 0:re.obrigar_rastreamento,tem_atributos:re==null?void 0:re.tem_atributos,CodigoExterno:n?String(n.CodigoExterno):ue+Math.round(Math.random()*1e4),valor_unitario:re==null?void 0:re.venda_padrao,venda_minima:re==null?void 0:re.venda_minima,venda_maxima:re==null?void 0:re.venda_maxima};l(ye)},Oe=()=>{const ue=p.reduce((ye,ne,ge,be)=>ye+Number(ne.valor_unitario)*ne.quantidade,0);p.reduce((ye,ne)=>ye+Number(ne.quantidade),0);const re=p.reduce((ye,ne)=>ye+Number(ne.valor_desconto),0);return qe(ue-re)},Re=()=>{const ue=p.reduce((re,ye)=>re+Number(ye.valor_desconto),0);return qe(ue)};return{verifyVenda:f,getItens:E,createVenda:w,updateVenda:$,addItemInList:Y,removeItemInList:se,updateItemInList:Z,setValuesInputs:y,getAllClientes:le,getAllProducts:H,calculateValues:Oe,setProductData:Ce,calculatePgtoValues:()=>{const ue=ie.reduce((re,ye)=>re+Number(ye.valor_total),0);return qe(ue)},calculateReceberValues:()=>{const ue=p.reduce((ge,be,tt,Ge)=>ge+Number(be.valor_unitario)*be.quantidade,0),re=p.reduce((ge,be)=>ge+Number(be.valor_desconto),0),ye=ue-re,ne=ie.reduce((ge,be)=>ge+Number(be.valor_total),0);return ye-ne},processOrCancel:(ue,re,ye)=>{P(!0),F(ue,re,ye).then(ne=>{let ge=ne.data[0].msg,be=ne.data[0].erro;if(ne.data===void 0){c("warn","Falha",`${ge||""}`);return}if(be==="true"){c("warn","Falha",`${ge||""}`);return}c("success","Sucesso",`${ge||""}`),H()}).catch(ne=>{console.error(ne),c("error","Falha na execução",`${ne.response.data.msg}`,1e4)}).finally(()=>P(!1))},state:{date:i,dateVenda:h,setDate:u,setDateVenda:g,productsList:p,setLoadingBtnVenda:R,loadingBtnVenda:J,setLoadingBtnProcess:P,loadingBtnProcess:_,refreshList:C,setCreatedVenda:O,setProductsList:m,createdVenda:T,createdVendaData:j,values:o,setValues:l,listProducts:q,setListProducts:A,listClientes:D,setListClientes:B,setProductSelected:z,productSelected:N,setListAttributs:K,listAttributs:Q,listFormPaymentsSelected:ie,setListFormPaymentsSelected:W,disableLoading:v}}}const Cl=G.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 15px;

  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
    }
  }
`,Sl=G.div`
  display: flex;
  gap: 10px;
  & .p-card .p-card-body {
    padding: 0 !important;
  }
  & .p-card .p-card-content {
    padding: 0 !important;
    height: 100px;
  }
`,mr=G.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  gap: 10px;
  position: relative;
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
      //padding-bottom: 10px;
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,wl=G.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap: 20px;
  }
`;G.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-end;
  & span.p-float-label {
    width: 100%;
    position: relative;
    input {
      height: 35px;
      font-size: 12px;
      &:disabled {
        background-color: #f1f1f1;
        cursor: not-allowed;
      }
    }
    label {
      font-size: 12px;
      span {
        color: #dd0000;
      }
    }
  }
`;const El=G.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 15px;
`,ya=G(ln)`
  width: 30%;
  height: 80px;
  // background-color: ${a=>a.theme.colors.primary};
  color: #ffffff;
  border-radius: 8px;
  @media screen and (max-width: 820px) {
    width: 100%;
    height: 50px;
  }
`,va=G.div`
  background-color: ${a=>a.colorCard?a.colorCard:a.theme.colors.primary};
  opacity: 0.7;
  height: 30px;
  width: 100%;
  position: relative;
  @media screen and (max-width: 820px) {
    height: 15px;
    display: none;
  }
`,ba=G.div`
  background-color: ${a=>a.colorCard?a.colorCard:a.theme.colors.primary};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  & div {
    background: ${a=>a.colorCard?a.colorCard:a.theme.colors.primary};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 999;
    opacity: 1;
    top: -20%;
    left: calc(50% - 15px);
    box-shadow: 1px 1px 1px #c4c4c4;
  }
  @media screen and (max-width: 820px) {
    height: 60px;
    & div {
      display: none;
    }
  }
`,Nl=G.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;
`,Pl=G.div`
  display: flex;
  gap: 15px;
  width: 80%;
`,kl=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,Ll=G.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;function Fl({paymentsList:a,typeFormsList:n,setListPayment:e,setListFormPaymentsSelecteds:t}){const o=[{field:"id_forma_pgto",header:"Código"},{field:"descricao",header:"Descrição"},{field:"valor_total",header:"Valor"},{field:"qtd_parcelas",header:"N° Parcelas"},{field:"valor_parcela",header:"Valor da Parcela"},{field:"dia_vencimento_parcela",header:"Vencimento da Parcela"},{field:"edit",header:""},{field:"acoes",header:""}],l=p=>p.reduce((T,O)=>T+O.valor_total,0).toFixed(2),i=p=>{let m=a;e([]);let T=m.filter(O=>O.id_forma_pgto!=p);e(T),t(T)},u=p=>{var m;return r("div",{children:(m=n.find(T=>T.id===p.id_forma_pgto))==null?void 0:m.descricao})},h=p=>r("div",{children:qe(p.valor_total)}),g=p=>r("div",{children:qe(p.valor_parcela)}),C=p=>r("div",{style:{display:"flex",gap:"5px"},children:r(xe,{label:"",icon:"pi pi-trash",size:"small",severity:"danger",title:"Excluir item",className:"p-button-text p-button-sm",style:{fontSize:"12px"},onClick:()=>i(p.id_forma_pgto)})}),S=s(kl,{children:["Total Recebido: ",qe(l(a))]});return r(jt,{value:a,tableStyle:{minWidth:"50rem"},editMode:"row",dataKey:"id",emptyMessage:"Nenhum item adicionado!",scrollable:!0,scrollHeight:"400px",style:{minWidth:"10rem"},footer:S,children:o.map(p=>p.field==="descricao"?r(Ee,{field:p.field,header:p.header,body:u},p.header):p.field==="valor_total"?r(Ee,{field:p.field,header:p.header,body:h,bodyStyle:{textAlign:"center"}},p.header):p.field==="valor_parcela"?r(Ee,{field:p.field,header:p.header,body:g,bodyStyle:{textAlign:"center"}},p.header):p.field==="dia_vencimento_parcela"?r(Ee,{field:p.field,header:p.header,bodyStyle:{textAlign:"center"}},p.header):p.field==="qtd_parcelas"?r(Ee,{field:p.field,header:p.header,bodyStyle:{textAlign:"center"}},p.header):p.field==="acoes"?r(Ee,{body:C,header:p.header},p.header):r(Ee,{field:p.field,header:p.header},p.header))})}function Dl({visible:a,toggleVisible:n,setListFormPaymentsSelecteds:e,calculateReceberValues:t,selectedVenda:o}){const{getFormaPagamentoService:l,getCreatedFormaPagamentoService:i}=Pr(),{openNotification:u}=Ne(),{colors:h}=d.useContext(ut),[g,C]=d.useState([]),[S,p]=d.useState(1),[m,T]=d.useState(0),[O,j]=d.useState(1),[M,J]=d.useState(0),[R,_]=d.useState(0),[P,D]=d.useState([]),[B,q]=d.useState(0),[A,N]=d.useState(!1),[z,Q]=d.useState(),K=()=>{D([]),e([]),D([]),n()},ie=()=>{l().then(x=>{C(x.data)}).catch(()=>{})},W=x=>{i(x).then(L=>{e(L.data),D(L.data)}).catch(()=>{u("warn","Falha","Falha ao obter lista de pagamentos do pedido")})};d.useEffect(()=>{o&&W(o.pedido)},[o]),d.useEffect(()=>{q(t()),T(t()),O===1&&J(t()),g.length||ie()},[t,D]);const X=(x,L,b)=>{D([]),e([]);const F=x.filter(c=>c.id_forma_pgto!==(b==null?void 0:b.id_forma_pgto));F.push(L),setTimeout(()=>{D(F),e(F),T(0),p(1),J(0),j(1),_(0)},500)},I=()=>{const x={id_forma_pgto:Number(S),valor_total:Number(m),qtd_parcelas:O,valor_parcela:M,dia_vencimento_parcela:R||0};if(m>B){u("warn","Valor inválido!","O valor do pagamento é maior que o valor a ser Recebido!",8e3);return}const L=[...P],b=L.find(F=>F.id_forma_pgto===x.id_forma_pgto);if(b&&b.id_forma_pgto!==8&&b&&b.id_forma_pgto!==7){N(!0),Q({executableAcceptFn:X,data:{currentPayments:L,newPayment:x,existPagment:b}});return}L.push(x),D([]),e([]),setTimeout(()=>{D(L),e(L),T(0),p(1),J(0),j(1),_(0)},500)};return s(De,{header:"Formas de Pagamanto",footer:()=>r(Ll,{children:r(xe,{label:"OK",style:{backgroundColor:h.primary},disabled:!P.length,onClick:n})}),visible:a,onHide:K,style:{minWidth:"50vw",minHeight:"50vh"},children:[r(sn,{visible:A,onHide:()=>N(!1),accept:()=>z==null?void 0:z.executableAcceptFn(z==null?void 0:z.data.currentPayments,z==null?void 0:z.data.newPayment,z==null?void 0:z.data.existPagment),reject:()=>null,message:"Forma de pagamento já informada, deseja substituir o valor?",header:"Confirmar"}),s(Nl,{children:[s(Pl,{children:[s("span",{className:"p-float-label",children:[r(me,{id:"pgto",optionLabel:"descricao",optionValue:"id",value:S,placeholder:"Defina a Forma de Pagamento",options:g,onChange:x=>p(x.value),style:{minWidth:"150px"}}),r("label",{htmlFor:"pgto",children:"Forma Pagamento"})]}),s("span",{className:"p-float-label",children:[r(Fe,{id:"valorpgto",value:m,onChange:x=>{T(x.value),J(Number(x.value)/O)},mode:"currency",currency:"BRL",locale:"pt-BR",placeholder:"Valor Pagamento",style:{height:"40px",textAlign:"right"}}),r("label",{htmlFor:"valorpgto",children:"Valor Pagamento"})]}),(S===8||S===2)&&s(Qe,{children:[s("span",{className:"p-float-label",children:[r(me,{id:"qtdParc",optionLabel:"label",optionValue:"value",value:O,placeholder:"Defina a quantidade de parcelas",options:dn,onChange:x=>{j(x.value),m&&J(m/Number(x.value))},style:{minWidth:"150px"}}),r("label",{htmlFor:"qtdParc",children:"N° de Parcelas"})]}),s("span",{className:"p-float-label",children:[r(Fe,{id:"valorParc",value:M,onChange:x=>J(x.value),mode:"currency",currency:"BRL",locale:"pt-BR",placeholder:"Valor da Parcela",style:{height:"40px"},disabled:!0}),r("label",{htmlFor:"valorParc",children:"Valor da Parcela"})]}),s("span",{className:"p-float-label",children:[r(Fe,{id:"venParc",value:R,onChange:x=>_(x.value),placeholder:"Vencimento da Parcela",style:{height:"40px"}}),r("label",{htmlFor:"venParc",children:"Vencimento da Parcela"})]})]}),r(xe,{label:"Adicionar",style:{backgroundColor:h.primary,minWidth:"150px"},disabled:!m||!B,onClick:I})]}),P.length>0&&r(Fl,{paymentsList:P,typeFormsList:g,setListPayment:D,setListFormPaymentsSelecteds:e})]})]})}function Ol(){var le;const{colors:a}=d.useContext(ut),{tokenSignature:n,storeUser:e}=We(H=>H),{formProdutos:t,setRefreshListProducts:o,openClientes:l,openProdutos:i,formClientes:u,setRefreshListClients:h,formVenda:g,selecionedVenda:C,openVenda:S,refreshListVenda:p,setSelecionedVenda:m}=we(),[T,O]=d.useState(!1),j=()=>{O(H=>!H)},{havePermission:M}=Ae(),{handleSubmit:J,control:R,formState:{errors:_},register:P,reset:D,resetField:B,setValue:q}=ze({defaultValues:{data_pedido:new Date().toISOString(),CodigoExterno:"",pedido:0,valor_total:0,valor_desconto:0}}),{verifyVenda:A,createVenda:N,updateVenda:z,getItens:Q,addItemInList:K,removeItemInList:ie,updateItemInList:W,setValuesInputs:X,getAllClientes:I,getAllProducts:k,calculateValues:x,setProductData:L,calculatePgtoValues:b,calculateReceberValues:F,processOrCancel:c,state:y}=xl({refreshVendas:p,selectedVenda:C,setValue:q}),v=H=>N(H),f=H=>z({...H,pedido:y.createdVenda?y.createdVenda:H.pedido,CodigoExterno:y.createdVendaData?y.createdVendaData.CodigoExterno:H.CodigoExterno}),E=()=>{m(null),g(),q("pedido",0),q("cliente",0),y.setDate(null),y.setCreatedVenda(0),D(),y.setProductsList([]),y.setListAttributs([]),y.setListFormPaymentsSelected([]),p()};d.useEffect(()=>{o(k),h(I),A(S,B,q,C),n&&!y.listProducts.length&&!y.listClientes.length&&(I(),k()),S&&C&&Q(C.pedido)},[n,S,C,e,l,i]);const w=r(va,{}),$=H=>s("div",{children:[r("p",{children:"Nenhum resultado encontrado"}),M(fe.PRODUTO,oe.INCLUIR)&&r(xe,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:a.primary},onClick:()=>t()})]}),ee=H=>s("div",{children:[r("p",{children:"Nenhum resultado encontrado"}),r(xe,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:a.primary},onClick:()=>u()})]});return s(De,{header:"Venda",visible:S,maximizable:!0,style:{width:"90vw",minHeight:"70%"},onHide:E,closeOnEscape:!1,children:[r(Dl,{visible:T,toggleVisible:j,setListFormPaymentsSelecteds:y.setListFormPaymentsSelected,calculateReceberValues:F,selectedVenda:C}),s(Cl,{onSubmit:C||y.createdVenda?J(f):J(v),children:[s(Sl,{children:[s(mr,{children:[y.createdVenda?s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[r(te,{style:{width:"100%"},disabled:!0,value:String(y.createdVenda),className:((le=_.pedido)==null?void 0:le.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"pedido",children:"Código"})]}):"",C?r(V,{name:"pedido",control:R,rules:{required:!1},render:({field:H})=>{var Y;return s("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px"},children:[r(te,{style:{width:"100%"},id:H.name,disabled:!0,value:String(C==null?void 0:C.pedido),...P("pedido"),autoFocus:!0,className:((Y=_.pedido)==null?void 0:Y.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"pedido",children:"Código"})]})}}):"",r(V,{name:"data_pedido",control:R,rules:{required:!1},render:({field:H,fieldState:Y})=>{var se;return s("span",{className:"p-float-label",style:{flex:1,minWidth:"180px"},children:[r(dt,{value:y.dateVenda,mask:"99/99/9999",onChange:Z=>{H.onChange(new Date(Z.value).toISOString()),y.setDateVenda(Z.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px"},placeholder:"Data da Venda",inputId:"data_pedido",className:((se=_.data_pedido)==null?void 0:se.type)==="required"?"p-invalid":""}),r("label",{htmlFor:"data_pedido",children:"Data da Venda"})]})}}),r(V,{name:"cliente",control:R,rules:{required:!0},render:({field:H,fieldState:Y})=>{var se;return s("span",{className:"p-float-label",style:{minWidth:"20%",fontSize:"12px",flex:1},children:[r(me,{value:H.value,id:"cliente",optionLabel:"nome",optionValue:"cliente",placeholder:"Cliente",name:"cliente",filter:!0,filterBy:"filterBy",filterMatchMode:"contains",options:y.listClientes.map(Z=>({...Z,filterBy:Z.cliente+Z.cpf_cnpj+Z.nome})),onChange:Z=>H.onChange(Z.value),className:((se=_.cliente)==null?void 0:se.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},emptyFilterMessage:ee,emptyMessage:ee}),s("label",{htmlFor:"cliente",children:["Cliente",r("span",{children:"*"})]})]})}}),r(V,{name:"observacao",control:R,rules:{required:!1},render:({field:H})=>{var Y;return s("span",{className:"p-float-label",style:{width:"100%",fontSize:"12px"},children:[r(Ir,{style:{width:"100%",fontSize:"12px"},id:H.name,value:H.value,...P("observacao"),className:((Y=_.observacao)==null?void 0:Y.type)==="required"?"p-invalid":"",onChange:se=>H.onChange(se.target.value)}),r("label",{htmlFor:"observacao",children:"Observações"})]})}})]}),s(wl,{children:[r(ya,{header:w,children:s(ba,{children:[r("div",{children:r("i",{className:"pi pi-dollar"})}),r("h5",{children:"Total Geral:"}),r("h3",{children:x()})]})}),r(ya,{header:r(va,{colorCard:"#6366F1"}),children:s(ba,{colorCard:"#6366F1",children:[r("div",{children:r("i",{className:"pi pi-dollar"})}),r("h5",{children:"Pago:"}),r("h3",{children:b()})]})}),r(ya,{header:r(va,{colorCard:"#F59E0B"}),children:s(ba,{colorCard:"#F59E0B",children:[r("div",{children:r("i",{className:"pi pi-dollar"})}),r("h5",{children:"A Receber:"}),r("h3",{children:qe(F())})]})})]})]}),r(bn,{align:"left",children:r("div",{className:"inline-flex align-items-center",children:r("b",{children:"Itens"})})}),s(mr,{children:[s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"180px"},children:[r(me,{value:y.values.produto,optionLabel:"label",optionValue:"produto",placeholder:"Produto",name:"produto",filter:!0,emptyFilterMessage:$,options:y.listProducts.map(H=>({...H,label:`${H.produto} - ${H.descricao}`})),onChange:H=>{X(H),L(H.value)},style:{fontSize:"12px",height:"35px",width:"100%"},emptyMessage:$,"aria-describedby":"estoque-help"}),s("label",{htmlFor:"produto",children:["Produto",r("span",{children:"*"})]}),r("small",{id:"estoque-help",children:y.productSelected&&y.productSelected.movimenta_estoque==="SIM"?s("span",{children:["Estoque Atual"," ",r("strong",{children:y.productSelected.estoque_atual})]}):""})]}),s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"180px"},children:[r(te,{maxLength:4,id:"quantidade",value:String(y.values.quantidade),style:{width:"100%"},name:"quantidade",onChange:H=>X(H)}),r("label",{htmlFor:"quantidade",children:"Quantidade"})]}),s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[r(Fe,{style:{width:"100%"},value:y.values.valor_unitario,mode:"currency",currency:"BRL",locale:"pt-BR",name:"valor_unitario",onChange:H=>{y.setValues({...y.values,valor_unitario:H.value||0})},"aria-describedby":"valor-help"}),r("label",{htmlFor:"valor_unitario",children:"Valor Unitário"}),r("small",{id:"valor-help",children:y.productSelected?s("span",{children:["Valor mínimo"," ",r("strong",{children:qe(y.productSelected.venda_minima)}),", Valor máximo"," ",r("strong",{children:qe(y.productSelected.venda_maxima)})]}):""})]}),s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[r(Fe,{disabled:!0,style:{width:"100%"},value:y.values.valor_unitario*+y.values.quantidade,mode:"currency",currency:"BRL",locale:"pt-BR",name:"valor_unitario","aria-describedby":"valor-help"}),r("label",{htmlFor:"valor_unitario",children:"Valor Total"})]}),s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[r(Fe,{style:{width:"100%"},value:y.values.valor_desconto,mode:"currency",currency:"BRL",locale:"pt-BR",name:"desconto_valor",onChange:H=>{y.setValues({...y.values,valor_desconto:H.value||0})}}),r("label",{htmlFor:"desconto_valor",children:"Desconto"})]}),r(xe,{label:"Adicionar item",type:"button",style:{backgroundColor:a.primary,maxWidth:"150px",maxHeight:"35px",fontSize:"12px"},disabled:!y.productSelected||!+y.values.quantidade,onClick:K})]}),y.refreshList?r("div",{children:r("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}):r(bl,{products:y.productsList,removeItemInList:ie,updateItemInList:W,entrada:y.createdVenda,selectedVenda:C,setListAttibuts:y.setListAttributs,definedListAttibuts:y.listAttributs,refreshProducts:Q}),s(El,{children:[r(xe,{type:"button",icon:"pi pi-dollar",label:"Forma de Pagamento",style:{backgroundColor:a.primary,maxWidth:"180px",fontSize:"12px",display:"flex",gap:"10px"},disabled:y.productsList.length===0||y.disableLoading(),onClick:j}),r(xe,{type:"button",icon:"pi pi-cog",loading:y.loadingBtnProcess,label:"Processar",style:{backgroundColor:a.primary,maxWidth:"150px",fontSize:"12px",display:"flex",gap:"10px"},disabled:y.productsList.length===0||!y.createdVenda&&!C||y.listFormPaymentsSelected.length===0||y.disableLoading(),onClick:()=>{var H;return c((C==null?void 0:C.pedido)||y.createdVenda||((H=y.createdVendaData)==null?void 0:H.pedido),"PEDIDO","P")}}),r(xe,{loading:y.loadingBtnVenda,icon:"pi pi-check",label:"Salvar",style:{backgroundColor:a.primary,maxWidth:"150px",fontSize:"12px",display:"flex",gap:"10px"},disabled:y.productsList.length===0||y.disableLoading(),onClick:()=>console.log(_)})]})]})]})}function Il(){const{openUsuarios:a,openProdutos:n,openClientes:e,openGrupos:t,openPlanos:o,openLojas:l,openFornecedores:i,openTransportadores:u,openCatalogos:h,openContasPagar:g,openVenda:C}=we(),{openPermissions:S}=zt();return s(Qe,{children:[a&&r(no,{}),n&&r(fi,{}),e&&r(vi,{}),t&&r(Ei,{}),o&&r(Di,{}),l&&r($i,{}),i&&r(ji,{}),u&&r(Hi,{}),h&&r(Qi,{}),r(al,{}),g&&r(sl,{}),C&&r(Ol,{}),S&&r(nl,{})]})}const Tl={startsWith:"Começa com",contains:"Contém",notContains:"Não contém",endsWith:"Termina com",equals:"Igual",notEquals:"Diferente",noFilter:"Sem filtro",filter:"Filtro",lt:"Menor que",lte:"Menor que ou igual a",gt:"Maior que",gte:"Maior que ou igual a",dateIs:"Data é",dateIsNot:"Data não é",dateBefore:"Date é anterior",dateAfter:"Data é posterior",custom:"Customizado",clear:"Limpar",close:"Fechar",apply:"Aplicar",matchAll:"Match All",matchAny:"Match Any",addRule:"Adicionar Regra",removeRule:"Remover Regra",accept:"Sim",reject:"Não",choose:"Escolha",upload:"Upload",cancel:"Cancelar",completed:"Concluído",pending:"Pendente",dayNames:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["Do","Se","Te","Qa","Qi","Sx","Sa"],monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],chooseYear:"Escolha Ano",chooseMonth:"Escolha Mês",chooseDate:"Escolha Data",prevDecade:"Década Anterior",nextDecade:"Década Seguinte",prevYear:"Ano Anterior",nextYear:"Ano Seguinte",prevMonth:"Mês Anterior",nextMonth:"Mês Seguinte",prevHour:"Hora Anterior",nextHour:"Hora Seguinte",prevMinute:"Minuto Anterior",nextMinute:"Minuto Seguinte",prevSecond:"Segundo Anterior",nextSecond:"Segundo Seguinte",am:"am",pm:"pm",today:"Hoje",weekHeader:"Sem",firstDayOfWeek:0,dateFormat:"dd/mm/yy",weak:"Fraco",medium:"Médio",strong:"Forte",passwordPrompt:"Digite uma senha",emptyFilterMessage:"Nenhum resultado encontrado",searchMessage:"{0} resultados disponíveis",selectionMessage:"{0} itens selecionados",emptySelectionMessage:"Nenhum item selecionado",emptySearchMessage:"Nenhum resultado encontrado",emptyMessage:"Nenhuma opção disponível",aria:{trueLabel:"Verdadeiro",falseLabel:"Falso",nullLabel:"Não selecionado",star:"1 estrela",stars:"{star} estrelas",selectAll:"Todos itens selecionados",unselectAll:"Nenhum item selecionado",close:"Fechar",previous:"Anterior",next:"Seguinte",navigation:"Navegação",scrollTop:"Rolar para Topo",moveTop:"Mover para Topo",moveUp:"Mover para Cima",moveDown:"Mover para Baixo",moveBottom:"Mover para Final",moveToTarget:"Mover para Alvo",moveToSource:"Mover para Fonte",moveAllToTarget:"Mover Todos para Alvo",moveAllToSource:"Mover Todos para Fonte",pageLabel:"{page}",firstPageLabel:"Primeira Página",lastPageLabel:"Última Página",nextPageLabel:"Página Seguinte",previousPageLabel:"Página Anterior",rowsPerPageLabel:"Linhas por página",jumpToPageDropdownLabel:"Pular para Menu da Página",jumpToPageInputLabel:"Pular para Campo da Página",selectRow:"Linha Selecionada",unselectRow:"Linha Não Selecionada",expandRow:"Linha Expandida",collapseRow:"Linha Recolhida",showFilterMenu:"Mostrar Menu de Filtro",hideFilterMenu:"Esconder Menu de Filtro",filterOperator:"Operador de Filtro",filterConstraint:"Restrição de Filtro",editRow:"Editar Linha",saveEdit:"Salvar Editar",cancelEdit:"Cancelar Editar",listView:"Exibição em Lista",gridView:"Exibição em Grade",slide:"Deslizar",slideNumber:"{slideNumber}",zoomImage:"Ampliar Imagem",zoomIn:"Mais Zoom",zoomOut:"Menos Zoom",rotateRight:"Girar à Direita",rotateLeft:"Girar à Esquerda"}},_l=cn`
 * {
   :root {
     --cor-tema: ${a=>{var n;return(n=a.theme)==null?void 0:n.colors.primary}};
     --hover-color: #F8C7C7;
     --color-in-menu: #6B7280;
     --verde-mira: #005148;
   }
   font-family: 'Inter';
   box-sizing: border-box;
 }
 body {
   font-size: 16px;
   .p-checkbox .p-checkbox-box.p-highlight {
     border-color: ${a=>{var n;return(n=a.theme)==null?void 0:n.colors.primary}};
     background: ${a=>{var n;return(n=a.theme)==null?void 0:n.colors.primary}};
   }
   .red {
     background: #dd0000;
   }
   .save-btn-form {
     background: ${a=>{var n;return(n=a.theme)==null?void 0:n.colors.primary}}!important;
   }
   .new-btn {
     gap: 10px;
     font-size: 12px;
     background-color: ${a=>{var n;return(n=a.theme)==null?void 0:n.colors.primary}}!important;
   }
   // Input de busca nas telas de listagem principais de cadastro
   .p-input-icon-left > i:first-of-type, .p-input-icon-left > svg:first-of-type, .p-input-icon-left > .p-input-prefix {
     left: 0.75rem;
     color: rgba(0, 0, 0, 0.6);
     font-size: 12px;
   }
   .p-dropdown .p-dropdown-label {
     font-size: 12px;
   }
   .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
     font-size: 12px;
   }
   .p-dropdown .p-dropdown-trigger {
     width: 25px;
    // padding: 0 10px 0 15px
   }
   .p-paginator-bottom  {
     & .p-dropdown .p-dropdown-trigger {
       width: 25px;
      // padding: 0 10px 0 15px
       padding-bottom: 10px;
     }
   }
   
   // Calendar 
   .p-calendar input{
     font-size: 12px;
   }
   .p-calendar .p-button {
     background: ${a=>a.theme.colors.primary}!important;
     .p-button-icon {
       color: #ffffff;
     }
   }
   .p-datepicker table td {
     padding: 5px!important;
   }
   .p-datepicker table td > span {
     width: 1.5rem;
     height: 1rem;
     font-size: 10px;
   }
   .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
     padding: 5px;
     font-size: 10px;
   }
   .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
     padding: 5px;
     font-size: 10px;
   }
   .p-datepicker .p-datepicker-header .p-datepicker-title {
     font-size: 10px;
   }
   .p-datepicker .p-yearpicker .p-yearpicker-year {
     font-size: 10px;
   }
   .p-datepicker .p-monthpicker-month {
     font-size: 10px;
   }
   // menus
   .p-menu .p-menuitem-link {
     gap: 10px;
   }
   // Menu suspenso
   .p-menu.p-menu-overlay {
     min-width: 230px;
   }
    // Alinhamento da label dentro do input
   .p-float-label label {
     top: 35%;
     margin-top: -0.5rem;
   }
   
   //  Altura/padding das rows das tabelas
   .p-datatable .p-datatable-tbody > tr > td {
     text-align: left;
     border: 1px solid #e4e4e4;
     border-width: 0 0 1px 0;
     padding: 0.2rem 0.4rem;
   }
   input:-webkit-autofill,
   input:-webkit-autofill:hover,
   input:-webkit-autofill:focus,
   textarea:-webkit-autofill,
   textarea:-webkit-autofill:hover,
   textarea:-webkit-autofill:focus,
   select:-webkit-autofill,
   select:-webkit-autofill:hover,
   select:-webkit-autofill:focus {
     -webkit-text-fill-color: inherit;
     -webkit-box-shadow: 0 0 0px 1000px #fff inset;
     transition: background-color 5000s ease-in-out 0s;
   }
   // ${a=>a.theme.colors.primary} !important;
   .p-checkbox .p-checkbox-box.p-highlight {
     border-color: ${a=>a.theme.colors.primary}!important;
     background: ${a=>a.theme.colors.primary}!important;
   }
   .p-radiobutton .p-radiobutton-box.p-highlight {
     border-color: ${a=>a.theme.colors.primary}!important;
   }
   .p-multiselect-panel .p-multiselect-header {
     padding: 0.2rem 0.75rem;
     display: flex;
     gap: 10px
   }
   .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
     padding-right: 0.75rem;
     height: 35px;
   }
   .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
     display: flex;
     gap: 10px;
     @media (min-width: 1024px) and (max-width: 1366px) {
       font-size: 12px!important;
       padding: 5px 10px!important;
     }
   }
   .header-table-num .p-column-header-content {
     display: flex;
     justify-content: flex-end;
   }
   .header-table, .cell-table {
     @media (min-width: 1024px) and (max-width: 1366px) {
       font-size: 12px!important;
       padding: 5px 10px!important;
     }
     @media screen and (max-width: 820px) {
       font-size: 11px!important;
       padding: 5px 5px!important;
     }
   }
   .cell-table, td {
     font-size: 12px!important;
    line-height: 30px;
     word-wrap: break-word;
     .cell-num {
       display: flex;
       justify-content: flex-end;
     }
     @media (min-width: 1024px) and (max-width: 1366px) {
       font-size: 11px!important;
       padding: 5px 10px!important;
     }
     @media screen and (max-width: 820px) {
       font-size: 11px!important;
       padding: 5px 5px!important;
     }
   }
   .p-datatable .p-datatable-header {
     @media (min-width: 1024px) and (max-width: 1366px) {
       padding: 0.2rem 0.75rem;
     }
   }
   .p-datatable.p-datatable-gridlines .p-paginator-bottom {
     @media (min-width: 1024px) and (max-width: 1366px) {
       padding: 0.2rem 0.75rem;
       font-size: 12px;
       button {
         font-size: 12px;
         padding: 5px;
       }
     }
   }
   .p-input-icon-left>i, .p-input-icon-right>i {
     top: 40%
   }
   span.p-float-label {
     label {
       span {
         color: #dd0000;
       }
     }
   }
   .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
     right: 0.75rem;
     top: 1rem;
     color: rgba(0, 0, 0, 0.6);
   }
   .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
     top: 0.7rem;
     right: 0.75rem;
     color: rgba(0, 0, 0, 0.6);
   }
   .p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a {
     border-top-right-radius: 4px;
     border-top-left-radius: 4px;
     display: flex !important;
     gap: 15px;
   }
   .p-image-preview-container>img {
      object-fit: contain !important;
   }
   .p-inputtext {
     font-size: 12px;
    }
  }

  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    max-width: 100% !important;
  }
  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left !important;
    font-size: 12px !important;
  }
  // Itens na listagem do muitselect
 .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
   margin: 0;
   padding: 0.2rem 0.5rem;
   border: 0 none;
   color: rgba(0, 0, 0, 0.87);
   background: transparent;
   transition: none;
   border-radius: 0;
   font-size: 12px;
 }
`,At={name:"miraTheme",colors:{primary:"#005148",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},Al={name:"verdeClaroTheme",colors:{primary:"#43A047",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},Rl={name:"darkTheme",colors:{primary:"#1e1e1e",secondary:"#383838",textColor:"#fff",backgroundColor:"#121212",backgroundMain:"#383838",activeMenu:"#c1c1c1"}},ql={name:"vermelhoClaroTheme",colors:{primary:"#E42525",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},zl={name:"vermelhoEscuroTheme",colors:{primary:"#890202",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},$l={name:"azulClaroTheme",colors:{primary:"#1E88E5",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},Vl={name:"azulEscuroTheme",colors:{primary:"#3F51B5",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},Bl={name:"cinzaClaroTheme",colors:{primary:"#607D8B",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}},Ml={name:"cinzaEscuroTheme",colors:{primary:"#757575",secondary:"#676767",textColor:"#333",backgroundColor:"#fff",backgroundMain:"#f1f1f1",activeMenu:"#F8C7C7"}};function ds(){var T;un("en",Tl);const a=d.useRef(null),{getDataUser:n,setDataUser:e}=Ct();we();const t=At,[o,l]=d.useState(At),i=()=>{l(o.name==="darkTheme"?t:Rl)},u=O=>{switch(O){case 1:l($l);break;case 2:l(Vl);break;case 3:l(Bl);break;case 4:l(Ml);break;case 5:l(ql);break;case 6:l(zl);break;case 7:l(Al);break;case 8:l(At);break;default:l(At)}},{setToastRef:h}=zt(O=>O),{Notification:g}=Ne(),{setTokenSignature:C,storeUser:S,setStoreUser:p,tokenSignature:m}=We(O=>O);return d.useEffect(()=>{console.log("ENV: ","development"),h(a),pn("en"),(async()=>{const O=sessionStorage.getItem("@signature");if(O)C(O);else{console.log("Não tem signature");const j=await fn();if(j){C(j);const M=new Date().toISOString();let J=new Date,R=J.getHours()-3,_=J.getMinutes();J.setDate(new Date(M).getDate()+1),J.setHours(R),J.setMinutes(_),sessionStorage.setItem("@signature",j)}else console.log(j)}})()},[]),d.useEffect(()=>{var O;return u((O=n())==null?void 0:O.tema),window.addEventListener("changed-theme",j=>{u(j.detail)}),()=>window.removeEventListener("changed-theme",j=>{})},[(T=n())==null?void 0:T.tema]),s(mn,{theme:o,children:[s(Un,{children:[r(Fn,{onChangeTheme:i,theme:o,storeUser:S}),s(jn,{children:[r(Mn,{}),r(hn,{}),r(Il,{})]})]}),r(g,{}),r(_l,{})]})}export{ds as default};
