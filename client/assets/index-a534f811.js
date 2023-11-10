import{av as T,s as f,r as t,d as P,j as l,a as e,B as i,ai as v,ah as s,ay as o,az as n,E as w}from"./index-7cffcf74.js";const z=T`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,A=f.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${z} 0.3s linear alternate;
`,M=f.article`
  display: flex;
  align-items: center;
  gap: 16px;
`;function k(){const[g,F]=t.useState([{nome:"teste",codigo:"123",status:"teste",cargo:"teste",cadastro:"2022-01-07"},{nome:"teste2",codigo:"456",status:"teste",cargo:"teste",cadastro:"2022-01-07"},{nome:"teste3",codigo:"789",status:"teste",cargo:"teste",cadastro:"2022-01-07"},{nome:"teste4",codigo:"101",status:"teste",cargo:"teste",cadastro:"2022-01-08"}]),[d,c]=t.useState(),[m,u]=t.useState(""),[h,D]=t.useState(!1);t.useState(0);const[S,L]=t.useState(10);t.useState(1),t.useState("Pressione 'Enter' para ir a está página."),P(a=>a);const y=a=>{const r=a.target.value;let p={...d};p.global.value=r,c(p),u(r)},x=(()=>e("div",{className:"flex justify-content-between",children:l("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(w,{value:m,onChange:y,placeholder:"Buscar"})]})}))(),b=()=>{c({global:{value:null,matchMode:o.CONTAINS},nome:{operator:n.AND,constraints:[{value:null,matchMode:o.STARTS_WITH}]},codigo:{operator:n.AND,constraints:[{value:null,matchMode:o.STARTS_WITH}]},cargo:{value:null,matchMode:o.IN},status:{operator:n.AND,constraints:[{value:null,matchMode:o.STARTS_WITH}]},cadastro:{operator:n.AND,constraints:[{value:null,matchMode:o.CONTAINS}]}}),u("")};t.useEffect(()=>{b()},[]);const N=a=>C(a.cadastro),C=a=>{if(!a)return"";let r=a.replaceAll(/-/g,"/");return new Date(r).toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",timeZone:"America/Sao_Paulo"})};return l(A,{children:[l(M,{children:[e(i,{label:"Nova Saída",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-danger new-btn",onClick:()=>null}),e(i,{label:"editar",icon:"pi pi-pencil",iconPos:"left",style:{gap:"10px",backgroundColor:"#ffffff",color:"#000000",borderColor:"#c1c1c1",fontSize:"10px"}}),e(i,{label:"excluir",icon:"pi pi-trash",iconPos:"left",style:{gap:"10px",backgroundColor:"#ffffff",color:"#000000",borderColor:"#c1c1c1",fontSize:"10px"}})]}),l(v,{value:g,className:"p-datatable-customers",showGridlines:!0,dataKey:"id",filters:d,filterDisplay:"menu",loading:h,globalFilterFields:["nome","status","codigo","cargo","cadastro"],header:x,emptyMessage:"Nenhum dado encontrado.",paginator:!0,responsiveLayout:"scroll",paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:S,rowsPerPageOptions:[10,20,50],children:[e(s,{field:"codigo",header:"Código",style:{minWidth:"8rem"},headerStyle:{fontSize:"12px"},bodyStyle:{fontSize:"12px"}}),e(s,{field:"nome",header:"Nome",showFilterMatchModes:!1,style:{maxWidth:"12rem"},headerStyle:{fontSize:"12px"},bodyStyle:{fontSize:"12px"}}),e(s,{field:"status",header:"Situação",filterMenuStyle:{width:"14rem"},style:{maxWidth:"12rem"},headerStyle:{fontSize:"12px"},bodyStyle:{fontSize:"12px"}}),e(s,{field:"cargo",header:"Cargo",bodyClassName:"text-center",style:{maxWidth:"8rem"},headerStyle:{fontSize:"12px"},bodyStyle:{fontSize:"12px"}}),e(s,{field:"cadastro",header:"Cadastro",dataType:"date",body:N,style:{maxWidth:"8rem"},headerStyle:{fontSize:"12px"},bodyStyle:{fontSize:"12px"}})]})]})}export{k as default};
