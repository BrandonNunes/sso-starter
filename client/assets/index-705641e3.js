import{av as ne,s as h,r as l,i as ee,d as se,f as de,ag as ae,h as te,b as oe,W as ce,a as e,Y as ue,j as s,$ as O,E as G,a8 as pe,a7 as D,a0 as K,ab as he,B as Y,aw as fe,an as ge,M as me,ai as xe,ah as L,ay as V,az as be,aD as ye,aH as Q,aE as Se,aF as Ce,aG as ve}from"./index-7cffcf74.js";import{u as re}from"./finaceiroService-9884a8b3.js";const Te=ne`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,we=h.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${Te} 0.3s linear alternate;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,ke=h.article`
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
`;h.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`;const Fe=h.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Ne=h.div`
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: flex-end;
`;h.label`
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
`;h.div`
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
`;h.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Z=h.section`
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
`;h.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Ae({resetField:a,selectedTaxa:f,setValue:d,closeModal:T,refreshList:x}){const[b,y]=l.useState(!1),[A,$]=l.useState(!1),{openNotification:p}=ee(),{createNewTaxaService:E,updateTaxaService:S}=re();return se(n=>n),de(),{verifySelectedTaxa:()=>{const n=["sequencial","adiquirente"];f?setTimeout(()=>{n.forEach(t=>{a(t,{keepDirty:!0,defaultValue:f[t]}),t==="sequencial"&&d("sequencial",f.sequencial)})},1e3):n.forEach(t=>{t==="sequencial"&&a(t,{keepDirty:!0,defaultValue:0}),a(t,{keepDirty:!0,defaultValue:""})})},createTaxa:n=>{E(n).then(t=>{let c=t.data[0].msg,i=t.data[0].erro;if(i&&i=="true"){p("error","Falha ao Cadastrar",`${c||"Erro ao cadastrar"}`,1e4);return}i&&i=="false"&&p("success","Sucesso",`${c||"Cadastro realizado com sucesso"}`),x(),T()}).catch(t=>{console.warn(t),p("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)})},updateTaxa:n=>{S(n).then(t=>{let c=t.data[0].msg,i=t.data[0].erro;if(i&&i=="true"){p("error","Falha ao Cadastrar",`${c||"Erro ao cadastrar"}`,1e4);return}i&&i=="false"&&p("success","Sucesso",`${c||"Cadastro realizado com sucesso"}`),x(),T()}).catch(t=>{console.error(t),p("error","Falha ao Cadastrar",`${t.response.data.msg}`,1e4)})},state:{loadingTaxa:b,openTaxa:A}}}function Ee({visible:a,toggleOpenTaxa:f,selectedTaxa:d,refreshList:T,setSelectedTaxaInList:x}){l.useContext(ae);const b=l.useRef(null),{havePermission:y}=te(),{tokenSignature:A,storeUser:$}=oe(r=>r),{register:p,handleSubmit:E,watch:S,formState:{errors:m},reset:R,setError:P,resetField:n,control:t,setValue:c}=ce({defaultValues:{sequencial:0}}),i=()=>{R(),f(),x(null)},{verifySelectedTaxa:W,createTaxa:q,updateTaxa:M,state:J}=Ae({resetField:n,selectedTaxa:d,setValue:c,closeModal:i,refreshList:T}),j=async r=>{q(r)},w=async r=>{M(r)},H=s("div",{style:{display:"flex",justifyContent:"space-between"},children:[e("h5",{style:{display:"flex",gap:"10px"},children:d?"Informações da Taxa":"Nova Taxa"}),e("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>i()})]}),X=()=>f();return l.useEffect(()=>{W()},[d]),l.useEffect(()=>(window.addEventListener("keydown",r=>{var u;r.key==="Enter"&&(r.preventDefault(),b.current!==null&&((u=b.current)==null||u.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[A,$]),e(ue,{visible:a,position:"center",onHide:X,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:H,children:s(Fe,{onSubmit:E(d?w:j),children:[s(Z,{style:{paddingTop:"15px"},children:[d&&e(O,{render:({field:{onChange:r,onBlur:C,value:u,name:v,ref:k},fieldState:{invalid:_,isTouched:F,isDirty:I,error:B}})=>s("span",{className:"p-float-label",style:{width:"10%"},children:[e(G,{id:"id",value:String(u),style:{width:"100%"},...p("sequencial"),disabled:!0}),e("label",{htmlFor:"id",children:"Código"})]}),name:"sequencial",control:t,rules:{required:!1}}),e(O,{render:({field:{onChange:r,onBlur:C,value:u,name:v,ref:k},fieldState:{invalid:_,isTouched:F,isDirty:I,error:B}})=>{var N;return s("span",{className:"p-float-label",style:{flex:1},children:[e(G,{value:u,onChange:U=>r(U.target.value),style:{width:"100%",height:"36px"},maxLength:30,className:((N=m.adiquirente)==null?void 0:N.type)==="required"?"p-invalid":""}),s("label",{htmlFor:"adiquirente",children:["Adiquirente",e("span",{children:"*"})]})]})},name:"adiquirente",control:t,rules:{required:!0}}),e(O,{name:"bandeira",control:t,rules:{required:!0},render:({field:{onChange:r,value:C},fieldState:u})=>{var v;return s("span",{className:"p-float-label",style:{flex:1},children:[e(G,{value:C,onChange:k=>r(k.target.value),style:{width:"100%",height:"36px"},maxLength:30,className:((v=m.bandeira)==null?void 0:v.type)==="required"?"p-invalid":""}),s("label",{htmlFor:"bandeira",children:["Bandeira",e("span",{children:"*"})]})]})}})]}),e(Z,{children:e(O,{render:({field:{onChange:r,onBlur:C,value:u,name:v,ref:k},fieldState:{invalid:_,isTouched:F,isDirty:I,error:B}})=>s("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(pe,{style:{width:"40%"},value:u||0,mode:"currency",currency:"BRL",locale:"pt-BR",name:"saldo_inicial",onChange:N=>r(N.value),"aria-describedby":"valor-help"}),e("label",{htmlFor:"saldo_inicial",children:"Débito"})]}),name:"deb",control:t,rules:{required:!0}})}),e(Ne,{children:y(D.TAXAS_DE_CARTOES,K.INCLUIR)&&e(he,{children:e(Y,{label:"Salvar",ref:b,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(m),disabled:d?d&&!y(D.TAXAS_DE_CARTOES,5):!1})})})]})})}function Le(){const{colors:a}=l.useContext(ae),[f,d]=l.useState(),[T,x]=l.useState(""),[b,y]=l.useState(!1),[A,$]=l.useState(10),[p,E]=l.useState([]),[S,m]=l.useState(null),[R,P]=l.useState(!1),{tokenSignature:n,storeUser:t}=oe(o=>o),{getAllTaxasService:c,deleteTaxaService:i}=re(),{havePermission:W}=te(),{openNotification:q}=ee(),M=()=>{P(o=>!o)},J=o=>{const g=o.target.value;let z={...f};z.global.value=g,d(z),x(g)},j=()=>{d({global:{value:null,matchMode:V.CONTAINS},sequencial:{operator:be.AND,constraints:[{value:null,matchMode:V.STARTS_WITH}]},adiquirente:{value:null,matchMode:V.STARTS_WITH},bandeira:{value:null,matchMode:V.STARTS_WITH}}),x("")};l.useEffect(()=>{j(),n&&w()},[n,t]);const w=()=>{y(!0),c().then(o=>{E(o.data),y(!1)}).catch(o=>{q("warn","Falha ao obter lista de taxas disponíveis"),console.error(o)}).finally(()=>y(!1))},{listModuleFilters:H,operatorsFilters:X,createFilter:r,loading:C,clearFilter:u,haveApplyFilters:v}=fe({module:D.TAXAS_DE_CARTOES,refreshList:w}),k=o=>{ye({message:"Você está certo que deseja apagar o registro selecionado?",header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>_(o),reject:()=>null})},_=o=>{i(o).then(g=>{let z=g.data[0].msg;q("success","Sucesso",`${z||""}`),w();const le=document.getElementsByTagName("input");for(let ie of le)ie.checked=!1}).catch(g=>{console.error(g),q("error","Falha na execução",`${g.response.data.msg}`,1e4)})},F=l.useRef(null);let I=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:o=>M()},{label:"Excluir",icon:"pi pi-fw pi-trash",command:o=>{k(Number(S==null?void 0:S.sequencial))},disabled:!W(D.TAXAS_DE_CARTOES,K.EXCLUIR)}]}];const B=()=>s(Se,{children:[e(Ce,{listModuleFilters:H,operatorsFilters:X,setFilters:r,loading:C,clearFilter:u,haveApplyFilters:v}),s("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(ve,{value:T,onChange:J,placeholder:"Buscar"})]})]}),N=o=>o.situacao==="ATIVO"?e(Q,{icon:"pi pi-check",severity:"success",value:o.situacao,rounded:!0,style:{display:"flex",gap:"5px",fontSize:"8px",maxWidth:"90px"}}):e(Q,{icon:"pi pi-times",severity:"danger",value:o.situacao,rounded:!0,style:{display:"flex",gap:"5px",fontSize:"8px",maxWidth:"90px"}}),U=B();return s(we,{children:[e(ge,{}),e(ke,{children:e(Y,{label:"Nova Taxa",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!W(D.TAXAS_DE_CARTOES,K.INCLUIR),onClick:()=>{m(null),P(!0)}})}),e(me,{model:I,popup:!0,ref:F}),s(xe,{value:p,className:"p-datatable-customers",showGridlines:!0,dataKey:"sequencial",filters:f,filterDisplay:"menu",loading:b,globalFilterFields:["adiquirente","bandeira"],header:U,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {last} de {totalRecords}",rows:A,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(L,{field:"sequencial",header:"Código",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:a.backgroundColor,color:a.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:a.backgroundColor,color:a.textColor,height:"20px"},sortable:!0}),e(L,{field:"adiquirente",header:"Adiquirente",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:a.backgroundColor,color:a.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:a.backgroundColor,color:a.textColor,height:"20px"},sortable:!0}),e(L,{sortable:!0,field:"bandeira",header:"Bandeira",style:{maxWidth:"4rem",textAlign:"center"},headerClassName:"header-table header-table-num",bodyClassName:"cell-table",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:a.backgroundColor,color:a.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:a.backgroundColor,color:a.textColor,height:"20px",textAlign:"right"}}),e(L,{field:"situacao",header:"Situação",body:N,headerClassName:"header-table",style:{width:"3rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:a.backgroundColor,color:a.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:a.backgroundColor,color:a.textColor},sortable:!0}),e(L,{header:"Ações",headerClassName:"header-table",body:o=>e(Y,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:g=>{F.current!=null&&F.current.toggle(g),m(o)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:a.backgroundColor,color:a.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:a.backgroundColor,color:a.textColor,height:"20px"}})]}),e(Ee,{visible:R,selectedTaxa:S,toggleOpenTaxa:M,refreshList:w,setSelectedTaxaInList:m})]})}export{Le as default};
