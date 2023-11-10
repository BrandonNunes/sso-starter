import{s as n}from"./index-7cffcf74.js";const p=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,u=n.span`
  color: ${t=>t.theme.colors.primary};
  font-weight: bold;
`,m=n.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-width: 100%;
  gap: 10px;
  & .p-inputtext {
    height: 35px;
  }
  & h6 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & .container-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }
  //& .p-inputswitch .p-inputswitch-slider {
  //  background: rgba(63, 81, 181, 0.5);
  //}
  //& .p-inputswitch .p-inputswitch-slider:before {
  //  background: #3f51b5;
  //}
`,f=n.span`
  display: flex;
  color: ${t=>t.theme.colors.primary};
  font-weight: bold;
`,b=(t,i,e,d,c,a)=>[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:l=>{c&&c()},disabled:(i==null?void 0:i.situacao)!=="PENDENTE"},{label:"Excluir",icon:"pi pi-fw pi-trash",command:l=>{console.log(i),t(i==null?void 0:i.pedido)},disabled:(i==null?void 0:i.situacao)!=="PENDENTE"||e&&!e(2010,6)},{label:"Visualizar itens",icon:"pi pi-fw pi-eye",command:l=>{d&&d()},disabled:e&&!e(2010,1)},{label:"Processar",icon:"pi pi-cog",command:l=>{a&&a(Number(i==null?void 0:i.pedido),"PEDIDO","P")},disabled:(i==null?void 0:i.situacao)!=="PENDENTE"||e&&!e(2010,7)},{label:"Cancelar",icon:"pi pi-times",command:l=>{a&&a(Number(i==null?void 0:i.pedido),"PEDIDO","C")},disabled:(i==null?void 0:i.situacao)!=="PROCESSADO"||e&&!e(2010,9)},{label:"Emitir NF-e",icon:"pi pi-file",command:l=>{a&&a(Number(i==null?void 0:i.pedido),"PEDIDO","P")},disabled:!0}]}],h=t=>{switch(t){case 22:return"";case 8:return"999.999.999-99";case 9:return"99.999.999/9999-99";case 10:return"(99) 9999-9999";case 11:return"99999-999";default:return""}};export{p as C,u as D,m as a,f as b,b as i,h as m};
