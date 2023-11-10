import{av as Se,s as x,r as o,i as oe,d as ve,f as we,ag as re,h as ie,b as se,W as Ne,a as e,Y as Fe,j as n,$ as V,E as ee,D as ke,a8 as Ee,a7 as W,a0 as X,ab as Te,B as Z,aw as De,an as Le,M as Pe,ai as Ae,ah as E,ay as Q,az as ze,aD as _e,aB as Ie,aC as Me,ak as ae,aE as Re,aF as Oe,aG as Ue}from"./index-7cffcf74.js";import{a as le}from"./caixasService-88bc5f93.js";import{E as Be,T as $e,O as je}from"./ExtratoDialog-a03ec9cb.js";import"./divider.esm-73291a01.js";import"./finaceiroService-9884a8b3.js";import"./radiobutton.esm-a7b2007b.js";import"./storeService-325e002b.js";const Ve=Se`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,We=x.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${Ve} 0.3s linear alternate;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,Xe=x.article`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (min-width: 1024px) and (max-width: 1366px) {
    button {
      height: 25px;
      font-size: 8px !important;
      pi {
        font-size: 10px;
      }
    }
  }
`;x.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`;const qe=x.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Ge=x.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;x.label`
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
`;x.div`
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
`;x.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const te=x.section`
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
    background: ${d=>d.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
`;x.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function He({resetField:d,selecionedCaixa:f,setValue:s,closeModal:T,refreshList:y}){const[S,v]=o.useState(!1),[D,q]=o.useState(!1),[w,P]=o.useState([]),{openNotification:p}=oe(),{createNewCaixaService:N,updateCaixaService:g}=le();ve(i=>i);const{getAllUserNoFilterService:L}=we();return{verifySelectedCaixa:()=>{const i=["caixa","nome","codigo_descricao","usuario_padrao","CodigoExterno","saldo_inicial"];f?setTimeout(()=>{i.forEach(t=>{d(t,{keepDirty:!0,defaultValue:f[t]}),s(t,f[t]),t==="CodigoExterno"&&s("CodigoExterno",f.CodigoExterno),t==="caixa"&&s("caixa",f.caixa)})},1e3):i.forEach(t=>{t==="caixa"&&d(t,{keepDirty:!0,defaultValue:0}),d(t,{keepDirty:!0,defaultValue:""})})},getUsers:()=>{L().then(i=>{P(i.data)}).catch(i=>{console.error(i),p("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},createCaixa:i=>{N(i).then(t=>{let h=t.data[0].msg,c=t.data[0].erro;if(c&&c=="true"){p("error","Falha ao Cadastrar",`${h||"Erro ao cadastrar"}`,1e4);return}c&&c=="false"&&p("success","Sucesso",`${h||"Cadastro realizado com sucesso"}`),y(),T()}).catch(t=>{console.warn(t),p("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)})},updateCaixa:i=>{g(i).then(t=>{let h=t.data[0].msg,c=t.data[0].erro;if(c&&c=="true"){p("error","Falha ao Cadastrar",`${h||"Erro ao cadastrar"}`,1e4);return}c&&c=="false"&&p("success","Sucesso",`${h||"Cadastro realizado com sucesso"}`),y(),T()}).catch(t=>{console.error(t),p("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)})},state:{listUsers:w,loadingContaPagar:S,openContaPagar:D}}}function Ke({visible:d,toggleOpenCaixa:f,selecionedCaixa:s,refreshList:T,setSelectedCaixaInList:y}){o.useContext(re);const S=o.useRef(null),{havePermission:v}=ie(),{tokenSignature:D,storeUser:q}=se(r=>r),{register:w,handleSubmit:P,watch:p,formState:{errors:N},reset:g,setError:L,resetField:I,control:C,setValue:M}=Ne({defaultValues:{saldo_inicial:0}}),A=()=>{g(),f(),y(null)},{verifySelectedCaixa:i,createCaixa:t,updateCaixa:h,getUsers:c,state:R}=He({resetField:I,selecionedCaixa:s,setValue:M,closeModal:A,refreshList:T}),G=async r=>{t(r)},H=async r=>{h(r)},K=n("div",{style:{display:"flex",justifyContent:"space-between"},children:[e("h5",{style:{display:"flex",gap:"10px"},children:s?"Informações do Caixa":"Novo Caixa"}),e("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>A()})]}),z=()=>f();return o.useEffect(()=>{i()},[s]),o.useEffect(()=>(D&&c(),window.addEventListener("keydown",r=>{var l;r.key==="Enter"&&(r.preventDefault(),S.current!==null&&((l=S.current)==null||l.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[D,q]),e(Fe,{visible:d,position:"center",onHide:z,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:K,children:n(qe,{onSubmit:P(s?H:G),children:[n(te,{style:{paddingTop:"15px"},children:[s&&e(V,{render:({field:{onChange:r,onBlur:F,value:l,name:u,ref:O},fieldState:{invalid:U,isTouched:B,isDirty:k,error:$}})=>{var b;return n("span",{className:"p-float-label",style:{width:"10%"},children:[e(ee,{id:"id",value:String(l),style:{width:"100%"},...w("caixa"),disabled:!0,className:((b=N.caixa)==null?void 0:b.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"id",children:"Código"})]})},name:"caixa",control:C,rules:{required:!1}}),e(V,{render:({field:{onChange:r,onBlur:F,value:l,name:u,ref:O},fieldState:{invalid:U,isTouched:B,isDirty:k,error:$}})=>{var b;return n("span",{className:"p-float-label",style:{flex:1},children:[e(ee,{value:l,onChange:Y=>r(Y.target.value),style:{width:"100%",height:"36px"},maxLength:30,className:((b=N.nome)==null?void 0:b.type)==="required"?"p-invalid":""}),n("label",{htmlFor:"nome",children:["Nome",e("span",{children:"*"})]})]})},name:"nome",control:C,rules:{required:!0}}),e(V,{name:"usuario_padrao",control:C,rules:{required:!0},render:({field:r,fieldState:F})=>{var l;return n("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(ke,{id:"usuario_padrao",value:r.value,optionLabel:"usuario",optionValue:"guid",placeholder:"Selecione o Usuário",name:"usuario_padrao",options:R.listUsers.map(u=>({...u,filterBy:u.id+u.cpf_cnpj+u.usuario})),onChange:u=>{r.onChange(u.value)},filter:!0,filterBy:"filterBy",emptyFilterMessage:"Nenhum resultado encontrado!",className:((l=N.usuario_padrao)==null?void 0:l.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"}}),n("label",{htmlFor:"usuario_padrao",children:["Usuário",e("span",{children:"*"})]})]})}})]}),!s&&e(te,{children:e(V,{render:({field:{onChange:r,onBlur:F,value:l,name:u,ref:O},fieldState:{invalid:U,isTouched:B,isDirty:k,error:$}})=>n("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(Ee,{style:{width:"40%"},value:l||0,mode:"currency",currency:"BRL",locale:"pt-BR",name:"saldo_inicial",onChange:b=>r(b.value),"aria-describedby":"valor-help"}),e("label",{htmlFor:"saldo_inicial",children:"Saldo Inicial"})]}),name:"saldo_inicial",control:C,rules:{required:!0}})}),e(Ge,{children:v(W.CAIXA,X.INCLUIR)&&e(Te,{children:e(Z,{label:"Salvar",ref:S,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(N),disabled:s?s&&!v(6020,5):!1})})})]})})}function ra(){const{colors:d}=o.useContext(re),[f,s]=o.useState(),[T,y]=o.useState(""),[S,v]=o.useState(!1),[D,q]=o.useState(10),[w,P]=o.useState([]),[p,N]=o.useState([]),[g,L]=o.useState(null),[I,C]=o.useState(!1),[M,A]=o.useState(!1),[i,t]=o.useState(!1),[h,c]=o.useState(!1),{tokenSignature:R,storeUser:G}=se(a=>a),{getAllCaixaService:H,deleteCaixaService:K}=le(),{havePermission:z}=ie(),{openNotification:r}=oe(),F=()=>{C(a=>!a)},l=()=>{A(a=>!a)},u=()=>{c(a=>!a)},O=()=>{t(a=>!a)},U=a=>{const m=a.target.value;let _={...f};_.global.value=m,s(_),y(m)},B=()=>{s({global:{value:null,matchMode:Q.CONTAINS},caixa:{operator:ze.AND,constraints:[{value:null,matchMode:Q.STARTS_WITH}]},nome:{value:null,matchMode:Q.IN}}),y("")};o.useEffect(()=>{B(),R&&k()},[R,G]);const k=()=>{v(!0),H().then(a=>{P(a.data),v(!1)}).catch(a=>{r("warn","Falha ao obter lista de caixas disponíveis"),console.error(a)}).finally(()=>v(!1))},{listModuleFilters:$,operatorsFilters:b,createFilter:Y,loading:ne,clearFilter:ce,haveApplyFilters:de}=De({module:W.CAIXA,refreshList:k}),pe=a=>{_e({message:`Você está certo que deseja apagar o${p.length>1?"s":""} registro${p.length>1?"s":""} selecionado${p.length>1?"s":""}?`,header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>ue(a),reject:()=>null})},ue=a=>{K(a).then(m=>{let _=m.data[0].msg;r("success","Sucesso",`${_||""}`),k();const Ce=document.getElementsByTagName("input");for(let ye of Ce)ye.checked=!1}).catch(m=>{console.error(m),r("error","Falha na execução",`${m.response.data.msg}`,1e4)})},J=o.useRef(null);let fe=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:a=>F()},{label:"Extrato",icon:"pi pi-fw pi-list",command:a=>l()},{label:"Transferência",icon:"pi pi-fw pi-dollar",command:a=>u(),disabled:!z(W.CAIXA,X.TRASNFERIR)},{label:"Excluir",icon:"pi pi-fw pi-trash",command:a=>{pe(Number(g==null?void 0:g.caixa))},disabled:!z(6020,X.EXCLUIR)}]}];const he=()=>n(Re,{children:[e(Oe,{listModuleFilters:$,operatorsFilters:b,setFilters:Y,loading:ne,clearFilter:ce,haveApplyFilters:de}),n("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(Ue,{value:T,onChange:U,placeholder:"Buscar"})]})]}),me=()=>w.length?w.reduce((a,m)=>a+(m.saldo_atual||0),0):0,ge=e(Ie,{children:n(Me,{children:[e(E,{footer:"Total:",colSpan:2,footerStyle:{textAlign:"right",fontWeight:"bold"}}),e(E,{footer:()=>e("div",{style:{fontSize:"13px"},children:ae(me())}),footerStyle:{fontWeight:"bold",textAlign:"right"},bodyStyle:{fontSize:"20px"}}),e(E,{footer:""})]})}),xe=a=>e("div",{className:"cell-num",children:ae(a.saldo_atual)}),be=he(),j={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:d.backgroundColor,color:d.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:d.backgroundColor,color:d.textColor}};return n(We,{children:[e(Le,{}),e(Xe,{children:e(Z,{label:"Novo Caixa",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!z(W.CAIXA,X.INCLUIR),onClick:()=>{L(null),C(!0)}})}),e(Pe,{model:fe,popup:!0,ref:J}),n(Ae,{value:w,className:"p-datatable-customers",showGridlines:!0,dataKey:"conta_corrente",filters:f,filterDisplay:"menu",loading:S,globalFilterFields:["caixa","nome"],header:be,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {last} de {totalRecords}",rows:D,footerColumnGroup:ge,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(E,{field:"caixa",header:"Código",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"1rem"},...j,sortable:!0}),e(E,{field:"nome",header:"Nome Caixa",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",...j,sortable:!0}),e(E,{sortable:!0,field:"saldo_atual",header:"Saldo",body:xe,style:{maxWidth:"4rem",textAlign:"center"},headerClassName:"header-table header-table-num",bodyClassName:"cell-table",...j}),e(E,{header:"Ações",headerClassName:"header-table",body:a=>e(Z,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:m=>{J.current!=null&&J.current.toggle(m),L(a)}}),style:{width:"1rem"},...j})]}),e(Ke,{visible:I,selecionedCaixa:g,toggleOpenCaixa:F,refreshList:k,setSelectedCaixaInList:L}),e(Be,{conta:g,toggleOpen:l,open:M,tipoConta:"CX"}),e($e,{conta:g,open:h,toggleOpen:u,tipoConta:"CX"}),e(je,{open:i,toggleOpen:O})]})}export{ra as default};
