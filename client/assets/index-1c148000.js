import{av as le,s as A,b as oe,r as s,ag as re,d as ne,h as ie,aw as ce,j as d,a as t,_ as de,an as ue,B as S,a7 as P,a0 as M,M as pe,ai as he,ah as n,ax as me,aD as ge,ay as u,az as N,aA as fe,aM as be,aE as Ce,aF as xe,aG as ye}from"./index-7cffcf74.js";import{u as Se}from"./clientsService-2a86ca6d.js";const Ne=le`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,ve=A.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${Ne} 0.3s linear alternate;
  .p-datatable .p-datatable-header {
    background-color: ${p=>p.theme.colors.backgroundColor};
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,Te=A.article`
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
`;function Pe(){const{tokenSignature:p,storeUser:I}=oe(e=>e),[v,T]=s.useState(),[j,w]=s.useState(""),[E,F]=s.useState(!1),[R,we]=s.useState(10),[D,W]=s.useState([]),[i,f]=s.useState([]),{colors:h}=s.useContext(re),{formClientes:k,setRefreshListClients:_}=ne(e=>e),[$,z]=s.useState(null),{getListAllClientesService:H,deleteClientsService:B}=Se(),{havePermission:L}=ie(),b=s.useRef(null),m=(e,a,r="",c=4e3)=>{b.current!=null&&b.current.show({severity:e,summary:a,detail:r,life:c,contentStyle:{display:"flex",gap:"20px"}})},g=()=>{F(!0),H().then(e=>W(e.data)).catch(e=>{console.error(e),m("warn","Falha ao obter lista de clientes disponíveis")}).finally(()=>F(!1))},{listModuleFilters:q,operatorsFilters:G,createFilter:O,loading:U,clearFilter:V,haveApplyFilters:X}=ce({module:1025,refreshList:g}),J=()=>{ge({message:`Você está certo que deseja apagar o${i.length>1?"s":""} registro${i.length>1?"s":""} selecionado${i.length>1?"s":""}?`,header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>K(),reject:()=>null})},K=()=>{B(i).then(e=>{let a=e.data[0].msg;if(e.data[0].erro==="true"){m("warn","Falha",`${a||""}`);return}m("success","Sucesso",`${a||""}`),f([]),g();const c=document.getElementsByTagName("input");for(let l of c)l.checked=!1}).catch(e=>{console.error(e),m("error","Falha na execução",`${e.response.data.msg}`)})};s.useEffect(()=>{setTimeout(()=>{p&&g()},500),_(g)},[p,I]);const Q=e=>{const a=e.target.value;let r={...v};r.global.value=a,T(r),w(a)},Y=(()=>d(Ce,{children:[t(xe,{listModuleFilters:q,operatorsFilters:G,setFilters:O,clearFilter:V,loading:U,haveApplyFilters:X}),d("span",{className:"p-input-icon-left",style:{height:"30px"},children:[t("i",{className:"pi pi-search"}),t(ye,{value:j,onChange:Q,placeholder:"Buscar"})]})]}))(),Z=()=>{T({global:{value:null,matchMode:u.CONTAINS},nome:{operator:N.AND,constraints:[{value:null,matchMode:u.STARTS_WITH}]},cliente:{operator:N.AND,constraints:[{value:null,matchMode:u.STARTS_WITH}]},cpf_cnpj:{value:null,matchMode:u.IN},situacao:{operator:N.AND,constraints:[{value:null,matchMode:u.STARTS_WITH}]}}),w("")};s.useEffect(()=>{Z()},[]);const ee=e=>fe(e.datacadastro),te=(e,a)=>{const r=a.target.checked;let c=e.cliente,l=i;if(r){l==null||l.push({sequencial:c});let x=l.filter(y=>y.sequencial!=0);f(x)}else{let x=l==null?void 0:l.filter(y=>y.sequencial!=c);f(x)}},C=s.useRef(null);let ae=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:e=>k($)}]}];const se=e=>t("div",{children:be(e.cpf_cnpj)}),o={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:h.backgroundColor,color:h.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:h.backgroundColor,color:h.textColor}};return d(ve,{children:[t(de,{ref:b,position:"top-right"}),t(ue,{}),d(Te,{children:[t(S,{label:"Novo Cliente",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-danger new-btn",disabled:!L(P.CLIENTE,M.INCLUIR),onClick:()=>k()}),t(S,{label:"Excluir",className:"p-button-danger",icon:"pi pi-trash",iconPos:"left",onClick:()=>J(),disabled:!i.length||!L(P.CLIENTE,M.EXCLUIR),style:{gap:"10px",borderColor:"#c1c1c1",fontSize:"12px",backgroundColor:"var(--color-in-menu)"}})]}),t(pe,{model:ae,popup:!0,ref:C}),d(he,{value:D,className:"p-datatable-customers",showGridlines:!0,dataKey:"cpf_cnpj",filters:v,filterDisplay:"menu",loading:E,globalFilterFields:["nome","status","codigo","cpf_cnpj","cadastro"],header:Y,emptyMessage:"Nenhum dado encontrado.",paginator:!0,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:R,rowsPerPageOptions:[10,20,50],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[t(n,{headerClassName:"header-table",...o,body:e=>t("input",{type:"checkbox",onChange:a=>te(e,a)})}),t(n,{field:"cliente",header:"Cliente",style:{minWidth:"2rem"},headerClassName:"header-table",headerStyle:o.headerStyle,bodyStyle:o.bodyStyle,sortable:!0}),t(n,{field:"nome",header:"Nome",showFilterMatchModes:!1,style:{maxWidth:"12rem"},headerClassName:"header-table",...o,sortable:!0}),t(n,{field:"cpf_cnpj",header:"CPF/CNPJ",bodyClassName:"text-center",headerClassName:"header-table",style:{maxWidth:"8rem"},...o,body:se}),t(n,{field:"datacadastro",header:"Cadastro",dataType:"date",body:ee,headerClassName:"header-table",style:{maxWidth:"8rem"},...o,sortable:!0}),t(n,{field:"situacao",header:"Situação",body:e=>t(me,{value:e.situacao}),headerClassName:"header-table",style:{width:"3rem"},...o,sortable:!0}),t(n,{header:"Ações",headerClassName:"header-table",body:e=>t(S,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:a=>{C.current!=null&&C.current.toggle(a),z(e)}}),style:{width:"1rem"},...o})]})]})}export{Pe as default};
