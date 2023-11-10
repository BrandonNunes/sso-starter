import{av as we,s as y,r,i as oe,d as Ne,ag as re,h as ne,W as Te,b as le,a as e,Y as ke,j as l,$ as R,E as G,D as Fe,aJ as _e,a8 as Ee,a7 as ee,a0 as se,ab as De,B as ae,aw as Le,an as Ae,M as Pe,ai as Oe,ah as x,ay as z,az as U,aD as Be,ak as te,aB as Me,aC as Re,aE as ze,aF as Ie,aG as We}from"./index-7cffcf74.js";import{u as ie}from"./caixasService-88bc5f93.js";import{u as $e}from"./finaceiroService-9884a8b3.js";import{E as qe,T as Ve,O as je}from"./ExtratoDialog-a03ec9cb.js";import"./divider.esm-73291a01.js";import"./radiobutton.esm-a7b2007b.js";import"./storeService-325e002b.js";const He=we`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,Ge=y.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${He} 0.3s linear alternate;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,Ue=y.article`
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
`;y.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`;const Ke=y.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Xe=y.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;y.label`
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
`;y.div`
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
`;y.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Z=y.section`
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
    background: ${u=>u.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
`;y.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Je({resetField:u,selecionedContaCorrente:g,setValue:c,closeModal:A,refreshList:N}){const[T,k]=r.useState(!1),[I,K]=r.useState(!1),[P,b]=r.useState([]),{openNotification:d}=oe(),{createNewContasCorrenteService:X,updateContasCorrenteService:C}=ie();Ne(s=>s);const[h,F]=r.useState(!1),{getAllBankNoFilterService:_}=$e();return{verifySelectedConta:()=>{const s=["conta_corrente","nome","banco","agencia","num_conta_corrente","valor_alinea1","valor_alinea2","CodigoExterno","saldo_inicial"];g?setTimeout(()=>{s.forEach(t=>{u(t,{keepDirty:!0,defaultValue:g[t]}),c(t,g[t]),t==="CodigoExterno"&&c("CodigoExterno",g.CodigoExterno)})},500):s.forEach(t=>{t==="conta_corrente"&&u(t,{keepDirty:!0,defaultValue:0}),u(t,{keepDirty:!0,defaultValue:""})})},getBanks:()=>{_().then(s=>{b(s.data)}).catch(s=>{console.error(s),d("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},createContaCorrente:s=>{h||(F(!0),X(s).then(t=>{F(!1);let m=t.data[0].msg,p=t.data[0].erro;if(p&&p=="true"){d("error","Falha ao Cadastrar",`${m||"Erro ao cadastrar"}`,1e4);return}p&&p=="false"&&d("success","Sucesso",`${m||"Cadastro realizado com sucesso"}`),N(),A()}).catch(t=>{F(!1),console.warn(t),d("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)}))},updateContaCorrente:s=>{C(s).then(t=>{let m=t.data[0].msg,p=t.data[0].erro;if(p&&p=="true"){d("error","Falha ao Cadastrar",`${m||"Erro ao cadastrar"}`,1e4);return}p&&p=="false"&&d("success","Sucesso",`${m||"Cadastro realizado com sucesso"}`),N(),A()}).catch(t=>{console.error(t),d("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)})},state:{listBanks:P,loadingContaPagar:T,openContaPagar:I}}}function Ye({visible:u,toggleOpenConta:g,selecionedContaCorrente:c,refreshList:A,setSelectedContaInList:N}){r.useContext(re);const T=r.useRef(null),{havePermission:k}=ne(),{register:I,handleSubmit:K,watch:P,formState:{errors:b},reset:d,setError:X,resetField:C,control:h,setValue:F}=Te({defaultValues:{saldo_inicial:0}}),{tokenSignature:_,storeUser:q}=le(o=>o),W=()=>{d(),g(),N(null)},{verifySelectedConta:V,createContaCorrente:j,updateContaCorrente:s,getBanks:t,state:m}=Je({resetField:C,selecionedContaCorrente:c,setValue:F,closeModal:W,refreshList:A}),p=async o=>{j(o)},J=async o=>{s(o)},Y=l("div",{style:{display:"flex",justifyContent:"space-between"},children:[e("h5",{style:{display:"flex",gap:"10px"},children:c?"Informações da Conta Corrente":"Nova Conta Corrente"}),e("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>W()})]}),H=()=>g();return r.useEffect(()=>{V()},[c]),r.useEffect(()=>(_&&t(),window.addEventListener("keydown",o=>{var n;o.key==="Enter"&&(o.preventDefault(),T.current!==null&&((n=T.current)==null||n.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[_,q]),e(ke,{visible:u,position:"center",onHide:H,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:Y,children:l(Ke,{onSubmit:K(c?J:p),children:[l(Z,{style:{paddingTop:"15px"},children:[c&&e(R,{render:({field:{onChange:o,onBlur:S,value:n,name:w,ref:E},fieldState:{invalid:O,isTouched:B,isDirty:v,error:M}})=>{var i;return l("span",{className:"p-float-label",style:{width:"10%"},children:[e(G,{id:"id",value:String(n),style:{width:"100%"},...I("conta_corrente"),disabled:!0,className:((i=b.conta_corrente)==null?void 0:i.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"id",children:"Código"})]})},name:"conta_corrente",control:h,rules:{required:!1}}),e(R,{render:({field:{onChange:o,onBlur:S,value:n,name:w,ref:E},fieldState:{invalid:O,isTouched:B,isDirty:v,error:M}})=>{var i;return l("span",{className:"p-float-label",style:{flex:1},children:[e(G,{value:n,onChange:D=>o(D.target.value),style:{width:"100%",height:"36px"},maxLength:100,className:((i=b.nome)==null?void 0:i.type)==="required"?"p-invalid":""}),l("label",{htmlFor:"nome",children:["Nome",e("span",{children:"*"})]})]})},name:"nome",control:h,rules:{required:!0}}),e(R,{name:"banco",control:h,rules:{required:!0},render:({field:o,fieldState:S})=>{var n;return l("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(Fe,{id:"banco",value:o.value,optionLabel:"descricao",optionValue:"codigo",placeholder:"Selecione o Banco",name:"banco",options:m.listBanks,onChange:w=>{o.onChange(w.value)},filter:!0,emptyFilterMessage:"Nenhum resultado encontrado!",className:((n=b.banco)==null?void 0:n.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"}}),l("label",{htmlFor:"banco",children:["Banco",e("span",{children:"*"})]})]})}}),e(R,{render:({field:{onChange:o,onBlur:S,value:n,name:w,ref:E},fieldState:{invalid:O,isTouched:B,isDirty:v,error:M}})=>{var i;return l("span",{className:"p-float-label",style:{flex:1},children:[e(G,{value:n,onChange:D=>o(D.target.value),maxLength:6,style:{width:"100%",height:"36px"},className:((i=b.agencia)==null?void 0:i.type)==="required"?"p-invalid":""}),l("label",{htmlFor:"agencia",children:["Agência",e("span",{children:"*"})]})]})},name:"agencia",control:h,rules:{required:!0}})]}),e(Z,{children:e(R,{render:({field:{onChange:o,onBlur:S,value:n,name:w,ref:E},fieldState:{invalid:O,isTouched:B,isDirty:v,error:M}})=>{var i;return l("span",{className:"p-float-label",style:{flex:1},children:[e(G,{value:n,onChange:D=>o(_e(D.target.value)),maxLength:14,style:{width:"100%",height:"36px"},className:((i=b.num_conta_corrente)==null?void 0:i.type)==="required"?"p-invalid":""}),l("label",{htmlFor:"num_conta_corrente",children:["N° Conta Corrente",e("span",{children:"*"})]})]})},name:"num_conta_corrente",control:h,rules:{required:!0}})}),!c&&e(Z,{children:e(R,{render:({field:{onChange:o,onBlur:S,value:n,name:w,ref:E},fieldState:{invalid:O,isTouched:B,isDirty:v,error:M}})=>l("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(Ee,{style:{width:"40%"},value:n||0,mode:"currency",currency:"BRL",locale:"pt-BR",name:"saldo_inicial",onChange:i=>o(i.value),"aria-describedby":"valor-help"}),e("label",{htmlFor:"saldo_inicial",children:"Saldo Inicial"})]}),name:"saldo_inicial",control:h,rules:{required:!0}})}),e(Xe,{children:k(ee.CONTA_CORRENTE,se.INCLUIR)&&e(De,{children:e(ae,{label:"Salvar",ref:T,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(b),disabled:c?c&&!k(6020,5):!1})})})]})})}function na(){const{colors:u}=r.useContext(re),[g,c]=r.useState(),[A,N]=r.useState(""),[T,k]=r.useState(!1),[I,K]=r.useState(10),[P,b]=r.useState([]),[d,X]=r.useState([]),[C,h]=r.useState(null),[F,_]=r.useState(!1),[q,W]=r.useState(!1),[V,j]=r.useState(!1),[s,t]=r.useState(!1),{tokenSignature:m,storeUser:p}=le(a=>a),{getAllContaCorrenteService:J,deleteContaCorrenteService:Y}=ie(),{havePermission:H}=ne(),{openNotification:o}=oe(),S=()=>{_(a=>!a)},n=()=>{j(a=>!a)},w=()=>{W(a=>!a)},E=()=>{t(a=>!a)},O=a=>{const f=a.target.value;let $={...g};$.global.value=f,c($),N(f)},B=()=>{c({global:{value:null,matchMode:z.CONTAINS},nome:{operator:U.AND,constraints:[{value:null,matchMode:z.STARTS_WITH}]},conta_corrente:{operator:U.AND,constraints:[{value:null,matchMode:z.STARTS_WITH}]},banco:{value:null,matchMode:z.STARTS_WITH},agencia:{operator:U.AND,constraints:[{value:null,matchMode:z.STARTS_WITH}]},num_conta_corrente:{operator:U.AND,constraints:[{value:null,matchMode:z.CONTAINS}]}}),N("")};r.useEffect(()=>{B(),m&&v()},[m,p]);const v=()=>{k(!0),J().then(a=>{b(a.data),k(!1)}).catch(a=>{o("warn","Falha ao obter lista de contas correntes disponíveis"),console.error(a)}).finally(()=>k(!1))},{listModuleFilters:M,operatorsFilters:i,createFilter:D,loading:ce,clearFilter:de,haveApplyFilters:pe}=Le({module:ee.CONTA_CORRENTE,refreshList:v}),ue=a=>{Be({message:`Você está certo que deseja apagar o${d.length>1?"s":""} registro${d.length>1?"s":""} selecionado${d.length>1?"s":""}?`,header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>he(a),reject:()=>null})},he=a=>{Y(a).then(f=>{let $=f.data[0].msg;o("success","Sucesso",`${$||""}`),v();const Se=document.getElementsByTagName("input");for(let ve of Se)ve.checked=!1}).catch(f=>{console.error(f),o("error","Falha na execução",`${f.response.data.msg}`,1e4)})},Q=r.useRef(null);let me=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:a=>S()},{label:"Extrato",icon:"pi pi-fw pi-list",command:a=>n()},{label:"Transferência",icon:"pi pi-fw pi-dollar",command:a=>E()},{label:"Excluir",icon:"pi pi-fw pi-trash",command:a=>{ue(Number(C==null?void 0:C.conta_corrente))},disabled:!H(6020,6)}]}];const fe=()=>l(ze,{children:[e(Ie,{listModuleFilters:M,operatorsFilters:i,setFilters:D,loading:ce,clearFilter:de,haveApplyFilters:pe}),l("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(We,{value:A,onChange:O,placeholder:"Buscar"})]})]}),ge=a=>e("div",{className:"cell-num",children:te(a.saldo_atual)}),be=()=>P.length?P.reduce((a,f)=>a+(f.saldo_atual||0),0):0,Ce=()=>e("div",{style:{fontSize:"13px"},children:te(be())}),xe=fe(),ye=e(Me,{children:l(Re,{children:[e(x,{footer:"Total:",colSpan:5,footerStyle:{textAlign:"right",fontWeight:"bold"}}),e(x,{footer:Ce,footerStyle:{fontWeight:"bold",textAlign:"right"},bodyStyle:{fontSize:"20px"}}),e(x,{footer:""})]})}),L={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:u.backgroundColor,color:u.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:u.backgroundColor,color:u.textColor}};return l(Ge,{children:[e(Ae,{}),e(Ue,{children:e(ae,{label:"Nova Conta Corrente",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!H(ee.CONTA_CORRENTE,se.INCLUIR),onClick:()=>{h(null),_(!0)}})}),e(Pe,{model:me,popup:!0,ref:Q}),l(Oe,{value:P,className:"p-datatable-customers",showGridlines:!0,dataKey:"conta_corrente",filters:g,filterDisplay:"menu",loading:T,globalFilterFields:["conta_corrente","nome","banco","agencia","num_conta_corrente","saldo_atual"],header:xe,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {last} de {totalRecords}",rows:I,footerColumnGroup:ye,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(x,{field:"conta_corrente",header:"Código",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"1rem"},...L,sortable:!0}),e(x,{field:"num_conta_corrente",header:"Conta Corrente",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"2.5rem"},...L,sortable:!0}),e(x,{field:"nome",header:"Nome",filterMenuStyle:{width:"14rem"},headerClassName:"header-table",bodyClassName:"cell-table",style:{maxWidth:"200px"},...L,sortable:!0}),e(x,{field:"banco",header:"Banco",filterMenuStyle:{width:"14rem"},headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"120px"},...L,sortable:!0}),e(x,{field:"agencia",header:"Agência",dataType:"text",headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"40px"},...L,sortable:!0}),e(x,{sortable:!0,field:"saldo_atual",header:"Saldo",body:ge,style:{maxWidth:"4rem",textAlign:"center"},headerClassName:"header-table header-table-num",bodyClassName:"cell-table",...L}),e(x,{header:"Ações",headerClassName:"header-table",body:a=>e(ae,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:f=>{Q.current!=null&&Q.current.toggle(f),h(a)}}),style:{width:"1rem"},...L})]}),e(Ye,{visible:F,selecionedContaCorrente:C,toggleOpenConta:S,refreshList:v,setSelectedContaInList:h}),e(qe,{conta:C,open:V,toggleOpen:n,tipoConta:"CC"}),e(Ve,{conta:C,open:s,toggleOpen:E,tipoConta:"CC"}),e(je,{open:q,toggleOpen:w})]})}export{na as default};
