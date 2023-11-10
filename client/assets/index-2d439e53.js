import{av as ie,s as g,i as _,f as I,r as i,h as X,W as ne,a as o,Y as ce,j as p,$ as V,E as q,a0 as A,B as D,ag as de,d as ue,b as pe,aw as he,an as ge,a7 as H,M as fe,ai as me,ah as z,ay as B,az as K,aD as be,aE as xe,aF as ye,aG as Ce}from"./index-7cffcf74.js";const Se=ie`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,ve=g.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${Se} 0.3s linear alternate;
`,ke=g.article`
  display: flex;
  align-items: center;
  gap: 16px;
`;function we({resetField:t,setValue:y,selectedGroupInList:r,closeModal:C,refreshList:x}){const{openNotification:c}=_(),{createGroupUserService:m,updateGroupUserService:S}=I(),[E,b]=i.useState(!1);return{verifySelectedPlan:()=>{r?setTimeout(()=>{["id","nome","CodigoExterno"].forEach(e=>{t(e,{keepDirty:!0,defaultValue:r[e]}),e==="CodigoExterno"&&(t("CodigoExterno",{keepDirty:!0,defaultValue:r.CodigoExterno}),y("CodigoExterno",r.CodigoExterno))})},800):["id","nome","CodigoExterno"].forEach(e=>{t(e,{keepDirty:!0,defaultValue:""}),e==="id"&&t(e,{keepDirty:!0,defaultValue:0})})},createGroupUser:s=>{b(!0),m(s).then(e=>{let u=e.data[0].msg,n=e.data[0].erro;if(n&&n=="true"){c("error","Falha ao Cadastrar",`${u||"Erro ao cadastrar"}`,1e4);return}n&&n=="false"&&(c("success","Sucesso",`${u||"Cadastro realizado com sucesso"}`),x()),setTimeout(()=>{C()},1500)}).catch(e=>{console.error(e),c("error","Falha ao Cadastrar",`${e.response.data.msg}`,1e4)}).finally(()=>b(!1))},updateGroupUser:s=>{S(s).then(e=>{let u=e.data[0].msg,n=e.data[0].erro;if(n&&n=="true"){c("error","Falha",`${u||"Erro ao atualizar"}`,1e4);return}n&&n=="false"&&(c("success","Sucesso",`${u||"Processo realizado com sucesso"}`),x()),setTimeout(()=>{C()},1500)}).catch(e=>{console.error(e),c("error","Falha ao Processar",`${e.response.data.msg}`,1e4)})},state:{loadingBtn:E}}}const Fe=g.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,Ne=g.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`,Ee=g.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  
`;g.label`
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
`;g.div`
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
`;g.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Ge=g.section`
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
  
`;g.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;function Pe({openForm:t=!1,setOpenForm:y,selectedGroupInList:r=null,setSelectedGroupInList:C,refreshList:x}){const c=i.useRef(null),{havePermission:m}=X(),{register:S,handleSubmit:E,formState:{errors:b},reset:G,control:k,setValue:v,resetField:s}=ne({defaultValues:{id:0,nome:"",CodigoExterno:""}}),e=()=>{G(),y(!1),C(null)},{verifySelectedPlan:u,createGroupUser:n,updateGroupUser:O,state:M}=we({resetField:s,setValue:v,selectedGroupInList:r,closeModal:e,refreshList:x}),P=l=>{n(l)},L=async l=>{O(l)},$=p("div",{style:{display:"flex",justifyContent:"space-between"},children:[o("h5",{style:{display:"flex",gap:"10px"},children:r?"Informações do Grupo":"Novo Grupo"}),o("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>e()})]}),U=()=>e();return i.useEffect(()=>(u(),window.addEventListener("keydown",l=>{var h;l.key==="Enter"&&(l.preventDefault(),c.current!==null&&((h=c.current)==null||h.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[r,t]),o(ce,{visible:t,position:"center",onHide:U,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},style:{minWidth:"40vw"},header:$,children:p(Fe,{onSubmit:E(r?L:P),children:[o(Ne,{children:"Dados do Grupo"}),p(Ge,{style:{paddingTop:"15px"},children:[r&&o(V,{name:"id",control:k,rules:{required:!1},render:({field:l,fieldState:T})=>{var h;return p("span",{className:"p-float-label",style:{width:"15%"},children:[o(q,{id:"id",style:{width:"100%"},disabled:!0,value:String(l.value),...S("id"),className:((h=b.id)==null?void 0:h.type)==="required"?"p-invalid":""}),o("label",{htmlFor:"id",children:"Código"})]})}}),o(V,{name:"nome",control:k,rules:{required:!0},render:({field:l,fieldState:T})=>{var h;return p("span",{className:"p-float-label",style:{width:"80%"},children:[o(q,{autoFocus:!0,id:"nome",maxLength:30,value:l.value,style:{width:"100%"},...S("nome"),className:((h=b.nome)==null?void 0:h.type)==="required"?"p-invalid":"",disabled:r?r&&!m(1050,A.ALTERAR):!1}),p("label",{htmlFor:"nome",children:["Nome do Grupo",o("span",{children:"*"})]})]})}})]}),o(Ee,{style:{paddingTop:"20px"},children:o(D,{label:"Salvar",loading:M.loadingBtn,ref:c,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(b),disabled:r?r&&!m(1050,A.ALTERAR):!1})})]})})}function Re(){const{colors:t}=i.useContext(de),[y,r]=i.useState(),[C,x]=i.useState(""),[c,m]=i.useState(!1),[S,E]=i.useState(10),[b,G]=i.useState([]),[k,v]=i.useState(!1),[s,e]=i.useState([]),[u,n]=i.useState(null),{formGrupos:O,setRefreshListGrupos:M}=ue(a=>a),{tokenSignature:P}=pe(a=>a),{getGroupUserService:L,deleteGroupUserService:$}=I(),{havePermission:U}=X(),{openNotification:l}=_(),T=a=>{const d=a.target.value;let F={...y};F.global.value=d,r(F),x(d)},h=()=>{r({global:{value:null,matchMode:B.CONTAINS},grupo:{operator:K.AND,constraints:[{value:null,matchMode:B.STARTS_WITH}]},descricao:{operator:K.AND,constraints:[{value:null,matchMode:B.STARTS_WITH}]}}),x("")};i.useEffect(()=>{h()},[]);const Y=(a,d)=>{const F=d.target.checked;let R=a.id,f=s;if(F){f==null||f.push({sequencial:+R});let N=f.filter(j=>j.sequencial!=0);e(N),console.log(N),console.log(s.length)}else{let N=f==null?void 0:f.filter(j=>j.sequencial!=+R);e(N),console.log(N),console.log(s.length)}},w=async()=>{m(!0),L().then(a=>{G(a.data),m(!1)}).catch(a=>{m(!1),console.error(a),l("warn","Falha ao obter lista de grupos disponíveis","")})},{listModuleFilters:J,operatorsFilters:Q,createFilter:Z,loading:ee,clearFilter:oe,haveApplyFilters:te}=he({module:1050,refreshList:w}),ae=()=>{be({message:`Você está certo que deseja apagar o${s.length>1?"s":""} registro${s.length>1?"s":""} selecionado${s.length>1?"s":""}?`,header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>re(),reject:()=>null})},re=async()=>{$(s).then(a=>{let d=a.data[0].msg;if(a.data[0].erro=="true"){l("error","Falha na execução",`${d}`,1e4);return}l("success","Sucesso",`${d||""}`),e([]),w();const R=document.getElementsByTagName("input");for(let f of R)f.checked=!1}).catch(a=>{console.error(a),l("error","Falha na execução",`${a.response.data.msg}`,1e4)})};i.useEffect(()=>{setTimeout(()=>{P&&w()},500),M(w)},[P]);const W=i.useRef(null);let se=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:a=>v(!0)}]}];const le=(()=>p(xe,{children:[o(ye,{listModuleFilters:J,operatorsFilters:Q,setFilters:Z,loading:ee,clearFilter:oe,haveApplyFilters:te}),p("span",{className:"p-input-icon-left",style:{height:"30px"},children:[o("i",{className:"pi pi-search"}),o(Ce,{value:C,onChange:T,placeholder:"Buscar"})]})]}))();return p(ve,{children:[o(ge,{}),o(Pe,{openForm:k,setOpenForm:v,selectedGroupInList:u,setSelectedGroupInList:n,refreshList:w}),p(ke,{children:[o(D,{label:"Novo Grupo de Usuário",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-danger new-btn",disabled:!U(H.GRUPO_USUARIO,A.INCLUIR),onClick:()=>v(!0)}),o(D,{label:"Excluir",className:"p-button-danger",icon:"pi pi-trash",iconPos:"left",disabled:!s.length||!U(H.GRUPO_USUARIO,A.EXCLUIR),onClick:()=>ae(),style:{gap:"10px",borderColor:"#c1c1c1",fontSize:"12px",backgroundColor:"var(--color-in-menu)"}})]}),o(fe,{model:se,popup:!0,ref:W}),p(me,{value:b,className:"p-datatable-customers",showGridlines:!0,dataKey:"id",filters:y,filterDisplay:"menu",loading:c,globalFilterFields:["grupo","descricao","ativo"],header:le,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:S,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[o(z,{headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{width:"2em",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},body:a=>o("input",{type:"checkbox",onChange:d=>Y(a,d)})}),o(z,{field:"id",header:"Código",style:{width:"0.5rem"},headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},sortable:!0}),o(z,{field:"nome",header:"Nome do Grupo",showFilterMatchModes:!1,style:{maxWidth:"6rem"},headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},sortable:!0}),o(z,{header:"Ações",headerClassName:"header-table",body:a=>o(D,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",onClick:d=>{W.current!=null&&W.current.toggle(d),n(a)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"}})]})]})}export{Re as default};
