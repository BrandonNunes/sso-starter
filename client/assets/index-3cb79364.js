import{av as te,s as M,r as l,ag as le,d as oe,b as se,h as re,aw as ne,j as p,a,_ as ie,an as ce,B as N,a7 as L,a0 as A,M as de,ai as ue,ah as c,ax as pe,ay as d,az as m,aA as he,aD as me,aE as ge,aF as be,aG as fe}from"./index-7cffcf74.js";import{u as xe}from"./plansService-3c238d2c.js";const Ce=te`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,ye=M.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${Ce} 0.3s linear alternate;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,Se=M.article`
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
`;function Te(){const{colors:o}=l.useContext(le),[P,v]=l.useState(),[D,w]=l.useState(""),[I,g]=l.useState(!1),[R,Ne]=l.useState(10),[E,W]=l.useState([]),[n,b]=l.useState([]),[z,H]=l.useState(null),{formPlanos:T,setRefreshListPlanos:O}=oe(e=>e),{tokenSignature:k}=se(e=>e),{deletePlansService:j,getListAllPlansService:B}=xe(),{havePermission:F}=re(),$=e=>{const t=e.target.value;let s={...P};s.global.value=t,v(s),w(t)},_=()=>{v({global:{value:null,matchMode:d.CONTAINS},nome:{operator:m.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},descricao:{operator:m.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},cargo:{value:null,matchMode:d.IN},ativo:{operator:m.AND,constraints:[{value:null,matchMode:d.STARTS_WITH}]},cadastro:{operator:m.AND,constraints:[{value:null,matchMode:d.CONTAINS}]}}),w("")};l.useEffect(()=>{_(),k&&h(),O(h)},[k]);const q=e=>he(e.datacadastro),G=(e,t)=>{const s=t.target.checked;let i=e.id,r=n;if(s){r==null||r.push({sequencial:+i});let y=r.filter(S=>S.sequencial!=0);b(y)}else{let y=r==null?void 0:r.filter(S=>S.sequencial!=+i);b(y)}},f=l.useRef(null),x=(e,t,s="",i=4e3)=>{f.current!=null&&f.current.show({severity:e,summary:t,detail:s,life:i,contentStyle:{display:"flex",gap:"20px"}})},h=()=>{g(!0),B().then(e=>{W(e.data),g(!1)}).catch(e=>{x("warn","Falha ao obter lista de planos disponíveis"),console.error(e)}).finally(()=>g(!1))},{listModuleFilters:V,operatorsFilters:X,createFilter:U,loading:K,clearFilter:J,haveApplyFilters:Q}=ne({module:1015,refreshList:h}),Y=()=>{me({message:`Você está certo que deseja apagar o${n.length>1?"s":""} registro${n.length>1?"s":""} selecionado${n.length>1?"s":""}?`,header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>Z(),reject:()=>null})},Z=()=>{j(n).then(e=>{let t=e.data[0].msg;x("success","Sucesso",`${t||""}`),b([]),h();const s=document.getElementsByTagName("input");for(let i of s)i.checked=!1}).catch(e=>{console.error(e),x("error","Falha na execução",`${e.response.data.msg}`,1e4)})},C=l.useRef(null);let ee=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:e=>T(z)}]}];const ae=(()=>p(ge,{children:[a(be,{listModuleFilters:V,operatorsFilters:X,setFilters:U,loading:K,clearFilter:J,haveApplyFilters:Q}),p("span",{className:"p-input-icon-left",style:{height:"30px"},children:[a("i",{className:"pi pi-search"}),a(fe,{value:D,onChange:$,placeholder:"Buscar"})]})]}))(),u={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:o.backgroundColor,color:o.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:o.backgroundColor,color:o.textColor}};return p(ye,{children:[a(ie,{ref:f,position:"top-right"}),a(ce,{}),p(Se,{children:[a(N,{label:"Novo Plano",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!F(L.PLANO,A.INCLUIR),onClick:()=>T()}),a(N,{label:"Excluir",className:"p-button-danger",icon:"pi pi-trash",iconPos:"left",disabled:!n.length||!F(L.PLANO,A.EXCLUIR),onClick:()=>Y(),style:{gap:"10px",borderColor:"#c1c1c1",fontSize:"12px",backgroundColor:"var(--color-in-menu)"}})]}),a(de,{model:ee,popup:!0,ref:C}),p(ue,{value:E,className:"p-datatable-customers",showGridlines:!0,dataKey:"id",filters:P,filterDisplay:"menu",loading:I,globalFilterFields:["nome","descricao"],header:ae,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:R,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[a(c,{headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{width:"2em",backgroundColor:o.backgroundColor,color:o.textColor},bodyStyle:{backgroundColor:o.backgroundColor,color:o.textColor,height:"20px"},body:e=>a("input",{type:"checkbox",onChange:t=>G(e,t)})}),a(c,{field:"nome",header:"Nome",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",...u,sortable:!0}),a(c,{field:"descricao",header:"Descrição",filterMenuStyle:{width:"14rem"},headerClassName:"header-table",bodyClassName:"cell-table",style:{maxWidth:"200px"},...u,sortable:!0}),a(c,{field:"datacadastro",header:"Cadastro",dataType:"date",body:q,headerClassName:"header-table",bodyClassName:"cell-table",style:{minWidth:"50px"},...u,sortable:!0}),a(c,{field:"ativo",header:"Situação",body:e=>a(pe,{value:e.ativo}),bodyClassName:"text-center cell-table",headerClassName:"header-table",style:{width:"3rem"},...u,sortable:!0}),a(c,{header:"Ações",headerClassName:"header-table",body:e=>a(N,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:t=>{C.current!=null&&C.current.toggle(t),H(e)}}),style:{width:"1rem"},...u})]})]})}export{Te as default};
