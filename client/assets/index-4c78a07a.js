import{av as Xe,s as $,r as i,i as be,a as e,j as c,ai as _e,ah as _,B as K,Y as Re,aa as Me,E as oe,aj as Ye,ag as we,ab as Le,X as ke,a8 as de,ak as te,K as Je,b as Ve,g as Ze,am as ea,d as $e,h as We,W as aa,$ as le,a2 as Ie,D as De,a7 as Ae,a0 as Oe,aw as ta,an as ra,M as oa,ax as na,ay as se,az as Ce,aA as ia,aB as la,aC as sa,aD as da,aE as ca,aF as ua,aG as ha}from"./index-7cffcf74.js";import{I as ma}from"./inputtextarea.esm-a186b3b2.js";import{D as pa}from"./divider.esm-73291a01.js";import{u as Pe,E as ve,a as Be,b as He}from"./processOrCancelService-8c998701.js";import{u as fa}from"./fornecedorService-a740cee1.js";import{u as je}from"./productsService-a4f11891.js";import{u as ga}from"./contasPagarService-ecf87c9d.js";import{F as va}from"./FinanceiroCards-f3722aec.js";const ba=Xe`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,ya=$.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${ba} 0.3s linear alternate;
  .p-datatable .p-datatable-header {
    background-color: ${l=>l.theme.colors.backgroundColor};
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,xa=$.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Sa=$.article`
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
`,Ca=(l,o,u,r,v,S,C)=>[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:L=>{v&&v()},disabled:(o==null?void 0:o.situacao)!=="PENDENTE"},{label:"Excluir",icon:"pi pi-fw pi-trash",command:L=>{console.log(o),l(o==null?void 0:o.entrada)},disabled:(o==null?void 0:o.situacao)!=="PENDENTE"||u&&!u(2010,6)},{label:"Visualizar itens",icon:"pi pi-fw pi-eye",command:L=>{r&&r()},disabled:u&&!u(2010,1)},{label:"Processar",icon:"pi pi-cog",command:L=>{S&&S(Number(o==null?void 0:o.entrada),"ENTRADA","P")},disabled:(o==null?void 0:o.situacao)!=="PENDENTE"||u&&!u(2010,7)},{label:"Cancelar",icon:"pi pi-times",command:L=>{S&&S(Number(o==null?void 0:o.entrada),"ENTRADA","C")},disabled:(o==null?void 0:o.situacao)!=="PROCESSADA"||u&&!u(2010,9)},{label:"Contas a Pagar",icon:"pi pi-dollar",command:L=>{C&&C(null,String(o==null?void 0:o.entrada))},disabled:(o==null?void 0:o.situacao)==="CANCELADA"||(o==null?void 0:o.situacao)==="PENDENTE"||(o==null?void 0:o.situacao)==="PROCESSADA"&&!(o!=null&&o.gerar_financeiro)}]}],Ge=$.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,Ue=$.span`
  color: ${l=>l.theme.colors.primary};
  font-weight: bold;
`,_a=$.div`
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
`,Qe=$.span`
  display: flex;
  color: ${l=>l.theme.colors.primary};
  font-weight: bold;
`;function Na({listRastreios:l,refreshListRastreio:o,refreshProducts:u}){const[r,v]=i.useState(!1),{deleteRastreioProductService:S}=Pe(),{openNotification:C}=be(),L=y=>{v(!0),S(y).then(f=>{console.log(f.data);const x=f.data[0].erro,P=f.data[0].msg;if(x&&x==="true"){C("warn","Falha",`${P||"Falha na execução!"}`,5e3);return}o(),u&&u(l[0].id_movimentacao),C("success","Sucesso",`${P||"Ação concluída com sucesso!"}`)}).catch(f=>{var x;console.warn(f),C("error","Falha",`${((x=f.response)==null?void 0:x.data.msg)||"Falha no Processamento!"}`)}).finally(()=>v(!1))},R=y=>e(K,{icon:"pi pi-trash",className:"p-button-text",severity:"danger",title:"Excluir item rastreado",onClick:()=>L([{sequencial:y.id}])}),h=(()=>{const y=l.map(f=>({sequencial:f.id}));return e("div",{style:{display:"flex",width:"100%",justifyContent:"flex-end"},children:l.length>1?e(K,{icon:"pi pi-trash",badge:String(l.length),size:"small",label:"Excluir todos",className:"p-button-text",severity:"danger",style:{fontSize:"12px",display:"flex",gap:"10px"},onClick:()=>L(y)}):""})})();return e("div",{style:{width:"100%",maxHeight:"55%",overflowY:"auto"},children:c(_e,{header:h,value:l,loading:r,scrollable:!0,scrollHeight:"400px",style:{minWidth:"50rem"},emptyMessage:"Sem itens encontrados",children:[e(_,{header:"Código",field:"id"}),e(_,{header:"Serial Inicial",field:"serial_inicial"}),e(_,{header:"Serial Final",field:"serial_final"}),e(_,{header:"",body:R})]})})}function Fa({open:l,idMovimentacao:o,setOpen:u,product:r,isFinally:v,refreshProducts:S}){const[C,L]=i.useState(""),[R,w]=i.useState(""),[h,y]=i.useState(!1),[f,x]=i.useState([]),[P,k]=i.useState(!1),O=i.useRef(null),B=i.useRef(null),[X,V]=i.useState(20),{getRastreioProductService:Y,createRastreioProductService:J}=Pe(),{openNotification:W}=be(),j=()=>{k(!0),J({tipoMovimentacao:ve.Entrada,idMovimentacao:o,produto:r.produto,serial_inicial:C,serial_final:R}).then(E=>{let a=E.data[0].msg,g=E.data[0].erro;if(g&&g=="true"){W("error","Falha ao cadastrar",`${a||"Erro ao cadastrar"}`,1e4);return}if(E.data.erro&&E.data.erro==="true"){W("error","Falha ao cadastrar",`${E.data.msg||"Erro ao cadastrar"}`,1e4);return}if(g&&g=="false"){W("success","Sucesso",`${a||"Sucesso"}`,1e4),L(""),w(""),b();return}}).catch(E=>{var a;console.error(E),W("error","Falha ao rastrear",`${((a=E.response)==null?void 0:a.statusText)||"Erro desconhecido, consulte o administrador"}`,1e4)}).finally(()=>k(!1))},b=()=>{Y(ve.Entrada,o,r.produto).then(E=>{x(E.data),V(r.tamanho_numero_serie)}).catch(E=>{console.log(E)})};i.useLayoutEffect(()=>{r&&(console.log("prod entrada",r),b(),V(r.tamanho_numero_serie))},[r]);const T=()=>{if(f.length){const E=f.reduce((a,g)=>a+g.quantidade,0);return v(E),E}return 0};return i.useEffect(()=>{if(r){if(v(T()),C.length===r.tamanho_numero_serie&&R.length===r.tamanho_numero_serie){j();return}if(C&&C.length===r.tamanho_numero_serie)if(h){if(B.current!==null){B.current.focus();return}}else{j();return}}return()=>{v(T())}},[C,R]),e(Re,{visible:l,onHide:()=>{u(!1),y(!1),L(""),w("")},header:"Rastreio",maximizable:!0,style:{minWidth:"60vw",minHeight:"40vh"},children:c(Ge,{children:[c(Ue,{children:["Movimentação - ",o," / Produto ",r&&r.produto," ","- ",r&&r.descricao]}),P?e("div",{className:"card",style:{height:"15px",width:"100%"},children:e(Ye,{mode:"indeterminate",style:{height:"6px"}})}):c(_a,{children:[r&&!r.eh_alfanumerico&&!r.eh_qrcode&&c("h6",{children:["Rastreamento por Intervalo"," ",e(Me,{checked:h,onChange:E=>{y(!!E.value),O!=null&&setTimeout(()=>{var a;(a=O.current)==null||a.focus()},100)},disabled:r&&r.eh_alfanumerico})]}),c("div",{className:"container-inputs",children:[e("i",{className:"pi pi-qrcode",style:{fontSize:"2.5rem"}}),e(oe,{ref:O,placeholder:h?"Serial Inicial":"Serial",value:C,autoFocus:!0,maxLength:X,disabled:r?T()>=r.quantidade:!1,onChange:E=>L(E.target.value)}),h&&e(oe,{ref:B,placeholder:"Serial Final",value:R,maxLength:X,disabled:r?T()>=r.quantidade:!1,onChange:E=>w(E.target.value)})]})]}),c(Qe,{children:["Rastreados: ",T()," de ",r?r.quantidade:""]}),e(Na,{listRastreios:f,refreshListRastreio:b,refreshProducts:S})]})})}function Ea({products:l,removeItemInList:o,updateItemInList:u,entrada:r,selectedEntrada:v,refreshProducts:S}){i.useContext(we);const[C,L]=i.useState(!1),[R,w]=i.useState(0),[h,y]=i.useState(null),[f,x]=i.useState([]),{getRastreioProductService:P}=Pe(),{openNotification:k}=be(),O=async()=>{x([]);for(let a of l){if(a.obrigar_rastreamento){const g=await B(a.produto);if(g){x([]);const N=l.map(q=>q.produto===a.produto&&!q.rastreados?{...q,quantidade:q.quantidade>2e4?2e4:q.quantidade,rastreados:g}:{...q,quantidade:q.quantidade>2e4?2e4:q.quantidade,rastreados:q.rasteados});x(N)}}x(l)}};i.useLayoutEffect(()=>{x(l),setTimeout(()=>{l&&O()},500)},[R,l,r,o]);const B=a=>P(ve.Entrada,Number(v==null?void 0:v.entrada),a).then(g=>g.data.reduce((t,ee)=>t+ee.quantidade,0)).catch(g=>(console.log(g),0)),X=[{field:"produto",header:"Cod. Produto"},{field:"descricao",header:"Descrição"},{field:"quantidade",header:"Quantidade"},{field:"valor_unitario",header:"Valor Unidade"},{field:"desconto_valor",header:"Desconto"},{field:"total",header:"Valor Total"},{field:"edit",header:""},{field:"acoes",header:""}],V=a=>{let g=[...l],{newData:N,index:q}=a;if(g[q]=N,!N.quantidade){k("warn","Atenção","Valor de quantidade não é um valor válido.");return}u(g)},Y=a=>e(oe,{type:"text",value:a.value,onChange:g=>{a==null||a.editorCallback(ke(g.target.value||String(1)))}}),J=a=>e(de,{value:a.value,mode:"currency",currency:"BRL",locale:"pt-BR",onChange:g=>{a==null||a.editorCallback(g.value||0)}}),W=a=>e(de,{value:a.value,mode:"currency",currency:"BRL",locale:"pt-BR",onChange:g=>{a==null||a.editorCallback(g.value||1)}}),j=a=>e(de,{maxLength:5,value:a.value,onChange:g=>{g.value&&g.value>2e4&&(g.value=2e4),a==null||a.editorCallback(g.value||1)},max:2e4,useGrouping:!1}),b=a=>{const g=a.valor_unitario,N=a.quantidade,q=a.desconto_valor,t=Number(g)*N-Number(q);return e("div",{children:te(t)})},T=a=>{const g=a.valor_unitario;return e("div",{children:te(g)})},G=a=>{const g=a.desconto_valor;return e("div",{children:te(g)})},E=a=>{const{qtdRastreios:g}=Be({tipoMovimentacao:ve.Entrada,codMovimentacao:a.entrada,codProduto:a.produto});return c("div",{style:{display:"flex",gap:"5px"},children:[e(K,{type:"button",label:"",icon:"pi pi-trash",size:"small",severity:"danger",title:"Excluir item",className:"p-button-text p-button-sm",style:{fontSize:"12px"},onClick:()=>o(a.produto,g)}),v&&a.obrigar_rastreamento||r&&a.obrigar_rastreamento?e(Le,{children:e(K,{type:"button",label:"",tooltip:`${g}/${a.quantidade}`,icon:"pi pi-qrcode",size:"small",severity:"danger",title:"Rastrear",className:"p-button-text p-button-sm",style:{fontSize:"12px",color:Number(g)>=Number(a.quantidade)?"blue":"#d00"},onClick:()=>{L(N=>!N),y(a)}})}):""]})};return c(Le,{children:[e(Fa,{open:C,idMovimentacao:Number(v==null?void 0:v.entrada)||Number(r),setOpen:L,product:h,isFinally:w,refreshProducts:S}),e(_e,{value:f,tableStyle:{minWidth:"50rem"},editMode:"row",dataKey:"id",onRowEditComplete:V,emptyMessage:"Nenhum item adicionado!",scrollable:!0,scrollHeight:"400px",style:{minWidth:"10rem"},children:X.map((a,g)=>a.field==="edit"?e(_,{header:a.header,rowEditor:!0,headerStyle:{width:"10%",minWidth:"8rem"},bodyStyle:{textAlign:"center"}},a.header):a.field==="acoes"?e(_,{body:E,header:a.header},a.header):a.field==="total"?e(_,{body:b,header:a.header,bodyStyle:{textAlign:"center"}},a.header):a.field==="quantidade"?e(_,{header:a.header,field:a.field,bodyStyle:{textAlign:"center"},editor:N=>j(N)},a.header):a.field==="valor_unitario"?e(_,{body:T,header:a.header,field:a.field,bodyStyle:{textAlign:"center"},editor:N=>W(N)},a.header):a.field==="desconto_valor"?e(_,{body:G,header:a.header,field:a.field,bodyStyle:{textAlign:"center"},editor:N=>J(N)},a.header):a.field!="produto"&&a.field!="descricao"?e(_,{field:a.field,header:a.header,editor:N=>Y(N),bodyStyle:{textAlign:"center"}},a.header):e(_,{field:a.field,header:a.header},a.header))})]})}function ze(){const{service:l}=Je(),{tokenSignature:o,storeUser:u}=Ve(h=>h),{getDataUser:r}=Ze();return{getAllEntradasService:()=>{var h;return l(o).get(`/entrada?empresa=${u}&limite=500&usuario=${(h=r())==null?void 0:h.guid}`)},createNewEntradasService:(h,y,f)=>{const x=Math.round(Math.random()*1e4),P={empresa:u,listEntrada:[{entrada:0,fornecedor:h.fornecedor,data:h.data,nota_fiscal:h.nota_fiscal,observacao:h.observacao,CodigoExterno:x,data_nota_fiscal:h.data_nota_fiscal,gerar_financeiro:h.gerar_financeiro}],listItem:y.map(k=>({...k,descricao:void 0,obrigar_rastreamento:void 0,eh_alfanumerico:void 0,eh_qrcode:void 0,CodigoExterno:x,tamanho_numero_serie:void 0,rastreados:void 0,descricao_medida:void 0})),listContasPagar:h.gerar_financeiro?[{entrada:0,data_vencimento:f.data_vencimento,categoria:f.categoria,centro_de_custo:f.centro_de_custo,competencia:f.competencia,CodigoExterno:x}]:[{entrada:0,data_vencimento:null,categoria:null,centro_de_custo:null,competencia:null,CodigoExterno:x}]};return l(o).post(`/entrada?empresa=${u}`,P)},updateEntradasService:(h,y,f)=>{const x={empresa:u,listEntrada:[{entrada:h.entrada,fornecedor:h.fornecedor,data:h.data,nota_fiscal:h.nota_fiscal,observacao:h.observacao,CodigoExterno:h.CodigoExterno,data_nota_fiscal:h.data_nota_fiscal,gerar_financeiro:h.gerar_financeiro}],listItem:y.map(P=>({entrada:h.entrada,produto:P.produto,quantidade:P.quantidade,valor_unitario:P.valor_unitario,desconto_valor:P.desconto_valor,desconto_aliq:0,medida:P.medida,CodigoExterno:h.CodigoExterno})),listContasPagar:h.gerar_financeiro?[{entrada:0,data_vencimento:f.data_vencimento,categoria:f.categoria,centro_de_custo:f.centro_de_custo,competencia:f.competencia,CodigoExterno:h.CodigoExterno}]:[{entrada:0,data_vencimento:null,categoria:null,centro_de_custo:null,competencia:null,CodigoExterno:h.CodigoExterno}]};return console.log("update",x),l(o).put(`/entrada?empresa=${u}`,x)},getOnlyEntradaService:h=>l(o).get(`/entrada?empresa=${u}&sequencial=${h}`),deleteEntradaService:h=>{const y={empresa:u,list:[{sequencial:h}]};return l(o).delete("/entrada",{data:y})},getListItemEntradaService:(h,y="ENTRADA")=>l(o).get(`/item?empresa=${u}&entidade=${y}&sequencial=${h}`)}}function Ia({refreshEntradas:l,selectedEntrada:o,onHide:u}){const r=()=>({entrada:o?o.entrada:0,descricao:"",produto:"",quantidade:0,valor_unitario:0,desconto_valor:null,desconto_aliq:0,medida:0,obrigar_rastreamento:!1,eh_alfanumerico:!1,tamanho_numero_serie:0,eh_qrcode:!1,CodigoExterno:""}),[v,S]=i.useState(r()),[C,L]=i.useState(null),[R,w]=i.useState(new Date(new Date().toISOString())),[h,y]=i.useState(!1),[f,x]=i.useState([]),[P,k]=i.useState(0),[O,B]=i.useState(null),[X,V]=i.useState(!1),[Y,J]=i.useState([]),[W,j]=i.useState([]),[b,T]=i.useState(null),[G,E]=i.useState([]),[a,g]=i.useState([]),[N,q]=i.useState(null),[t,ee]=i.useState(null),[H,z]=i.useState(),[Z,ce]=i.useState(),{createNewEntradasService:ye,getOnlyEntradaService:ne,getListItemEntradaService:ue,updateEntradasService:Ne}=ze(),{getAllFornecedorNoFilterService:xe}=fa(),{getListAllProductsNoFilterService:Fe}=je(),{createNewContasPagarService:Ee,getCategoriaContaPagarService:he,getCentrodeCustoContaPagarService:me}=ga(),{processOrCancelService:pe}=He(),{openNotification:A}=be(),fe=p=>{console.log(p);let n=p.target?{...v,[p.target.name]:ke(p.target.value)}:{...v,[p.originalEvent.target.name]:isNaN(p.originalEvent.target.value)?0:p.originalEvent.target.value};S(n)},ge=(p,n,I,m)=>{const U=["nota_fiscal","fornecedor","observacao","CodigoExterno","data","entrada","data_nota_fiscal","data","gerar_financeiro"];setTimeout(()=>{m?(p&&re(m==null?void 0:m.entrada),m.gerar_financeiro&&(q(new Date(m.data_vencimento)),z(m.categoria),ce(m.centro_de_custo),ee(new Date(m.competencia))),U.forEach(Q=>{if(n(Q,{keepDirty:!0,defaultValue:m[Q]}),Q==="data_nota_fiscal"){if(m.data_nota_fiscal){let Te=String(m.data_nota_fiscal).split("T")[0].replaceAll("-","/");L(new Date(Te))}n("data_nota_fiscal",{keepDirty:!0,defaultValue:C==null?void 0:C.toISOString()})}if(Q==="data"){if(m.data){let Te=String(m.data).split("T")[0].replaceAll("-","/");w(new Date(Te))}n("data",{keepDirty:!0,defaultValue:R==null?void 0:R.toISOString()})}Q==="entrada"&&(n(Q,{keepDirty:!0,defaultValue:m[Q]}),I("entrada",m.entrada)),Q==="CodigoExterno"&&(n(Q,{keepDirty:!0,defaultValue:m[Q]}),I("CodigoExterno",m.CodigoExterno))})):U.forEach(Q=>{n(Q,{keepDirty:!0,defaultValue:""}),n("gerar_financeiro",{keepDirty:!0,defaultValue:!0}),n("data",{keepDirty:!0,defaultValue:R==null?void 0:R.toISOString()})})},500)},re=p=>{ue(+p).then(n=>{x(n.data)}).catch(n=>{console.log(n)}).finally(()=>null)},ie=p=>{V(!0),ye(p,f,{competencia:String(t==null?void 0:t.toISOString()),centro_de_custo:Z||null,data_vencimento:(N==null?void 0:N.toISOString())||null,categoria:H||null}).then(n=>{let I=n.data[0].msg,m=n.data[0].erro,U=n.data[0].entrada;if(m&&m=="true"){A("error","Falha ao Cadastrar",`${I||"Erro ao cadastrar"}`,1e4);return}m&&m=="false"&&(k(U),s(U),re(U),l(),A("success","Sucesso","Entrada criada com sucesso"))}).catch(n=>{console.error(n),A("error","Falha ao Cadastrar",`${n.response.data.msg}`,1e4)}).finally(()=>V(!1))},d=p=>{V(!0),Ne(p,f,{competencia:String(t==null?void 0:t.toISOString()),centro_de_custo:Z||null,data_vencimento:(N==null?void 0:N.toISOString())||null,categoria:H||null}).then(n=>{let I=n.data[0].msg,m=n.data[0].erro;if(m&&m=="true"){A("error","Falha ao Cadastrar",`${I||"Erro ao cadastrar"}`,1e4);return}m&&m=="false"&&(l(),A("success","Sucesso",`${I||"Cadastro atualizado com sucesso"}`))}).catch(n=>{console.error(n),A("error","Falha ao Cadastrar",`${n.response.data.msg}`,1e4)}).finally(()=>V(!1))},D=()=>t&&N&&Z&&H,s=p=>{y(!0),ne(p).then(n=>{let I=n.data[0].msg,m=n.data[0].erro;if(m&&m=="true"){A("error","Falha ao obter entrada",`${I||"Erro ao cadastrar"}`,1e4);return}B(n.data[0])}).catch(n=>{console.error(n),A("error","Falha",`${n.response.data.msg}`,1e4)}).finally(()=>y(!1))};return{verifyEntrada:ge,getItens:re,createEntrada:ie,updateEntrada:d,addItemInList:()=>{y(!0);const p={...v,produto:v.produto,quantidade:v.quantidade>2e4?2e4:v.quantidade,obrigar_rastreamento:v.obrigar_rastreamento,eh_alfanumerico:b==null?void 0:b.eh_alfanumerico,eh_qrcode:b==null?void 0:b.eh_qrcode,tamanho_numero_serie:b==null?void 0:b.tamanho_numero_serie,desconto_valor:v.desconto_valor,valor_unitario:v.valor_unitario};if(f.find(m=>m.produto===p.produto)){A("warn","Produto ja adicionado!","Selecione um outro produto disponível.",3e3),y(!1);return}let I=f;I.push(p),console.log(I),x(I),setTimeout(()=>{y(!1)},500),S(r()),T(null)},removeItemInList:(p,n)=>{y(!0);let m=f.filter(U=>U.produto!=p);if(n){A("warn","Falha","Produto já rastreado! Exclua o rastreamento primeiro.",3e3),y(!1);return}x(m),setTimeout(()=>{y(!1)},500)},updateItemInList:p=>{y(!0),x(p),setTimeout(()=>{y(!1)},500)},setValuesInputs:fe,getAllFornecedor:()=>{xe().then(p=>{const n=p.data.filter(I=>I.situacao==="ATIVO");J(n)}).catch(p=>{console.error(p),A("warn","Falha ao obter lista de fornecedores disponíveis")})},getAllProducts:()=>{Fe().then(p=>{const n=p.data.filter(I=>I.situacao==="ATIVO");j(n)}).catch(p=>{console.error(p),A("warn","Falha ao obter lista de produtos disponíveis")})},calculateValues:()=>{const p=f.reduce((I,m)=>I+Number(m.valor_unitario)*m.quantidade,0);f.reduce((I,m)=>I+Number(m.quantidade),0);const n=f.reduce((I,m)=>I+Number(m.desconto_valor),0);return te(p-n)},setProductData:p=>{let n=W.find(m=>m.produto===p);T(n);let I={...v,entrada:o?o.entrada:0,descricao:n==null?void 0:n.descricao,produto:p,medida:(n==null?void 0:n.medida_base)||0,obrigar_rastreamento:n==null?void 0:n.obrigar_rastreamento,CodigoExterno:o?String(o.CodigoExterno):p+Math.round(Math.random()*1e4),valor_unitario:n==null?void 0:n.venda_padrao,eh_alfanumerico:n==null?void 0:n.eh_alfanumerico,tamanho_numero_serie:(n==null?void 0:n.tamanho_numero_serie)||0,eh_qrcode:n==null?void 0:n.eh_qrcode};S(I)},validContaApagar:D,getCategorias:()=>{he().then(p=>{E(p.data)}).catch(p=>{console.error(p),A("warn","Falha ao obter categorias disponíveis")})},getCentroDeCusto:()=>{me().then(p=>{g(p.data)}).catch(p=>{console.error(p),A("warn","Falha ao obter lista de centro de custos disponíveis")})},processOrCancel:(p,n,I)=>{V(!0),pe(p,n,I).then(m=>{let U=m.data[0].msg;if(m.data[0].erro==="true"){A("warn","Falha",`${U||""}`);return}A("success","Sucesso",`${U||""}`),setTimeout(()=>{u()},4e3)}).catch(m=>{console.error(m),A("error","Falha na execução",`${m.response.data.msg}`,1e4)}).finally(()=>V(!1))},state:{date:C,dateEntrada:R,setDate:L,setDateEntrada:w,productsList:f,setLoadingBtn:V,loadingBtn:X,refreshList:h,setCreatedEntrada:k,setProductsList:x,createdEntrada:P,values:v,setValues:S,listProducts:W,setListProducts:j,listFornecedores:Y,setListFornecedores:J,setProductSelected:T,productSelected:b,listCategorias:G,listCentroCusto:a,dataVencimento:N,dataCompetencia:t,setDataVencimento:q,setDataCompetencia:ee,selectedCategoria:H,selectedCentroCusto:Z,setSelectedCategoria:z,setSelectedCentroCusto:ce,createdEntradaData:O,setCreatedEntradaData:B}}}const Da=$.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & h3 {
    display: none;
  }
  @media screen and (max-width: 820px) {
    & h3 {
      display: block;
    }
  }
`,La=$.form`
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
`,Ra=$.div`
  display: flex;
  gap: 10px;
  & .p-card .p-card-body {
    padding: 0 !important;
  }
  & .p-card .p-card-content {
    padding: 0 !important;
    height: 100px;
  }
`,qe=$.div`
  display: flex;
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
  & .gerar-financeiro-area {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    & .gerar-financeiro-area {
      flex-direction: column;
    }
  }
`;$.div`
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
`;const Pa=$.div`
  width: 100%;
  display: flex;
  justify-content: right;
  gap: 15px;
`,Ta=$(ea)`
  width: 30%;
  height: 80px;
  // background-color: ${l=>l.theme.colors.primary};
  color: #ffffff;
  border-radius: 8px;
  @media screen and (max-width: 820px) {
    display: none;
  }
`,qa=$.div`
  background-color: ${l=>l.theme.colors.primary};
  opacity: 0.7;
  height: 30px;
  width: 100%;
  position: relative;
`,Aa=$.div`
  background-color: ${l=>l.theme.colors.primary};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  & div {
    background: ${l=>l.theme.colors.primary};
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
`;function wa({visible:l,setVisible:o,refreshEntradas:u,selectedEntrada:r,setSelected:v}){var fe,ge,re,ie;const{colors:S}=i.useContext(we),{tokenSignature:C,storeUser:L}=Ve(d=>d),{formProdutos:R,openProdutos:w,openFornecedores:h,setRefreshListProducts:y,formFornecedores:f,setRefreshListFornecedor:x}=$e(),{havePermission:P}=We(),k=()=>{v&&v(null),o(!1),ne("nota_fiscal",""),ne("fornecedor",0),t.setDate(null),t.setCreatedEntrada(0),t.setCreatedEntradaData(null),ce(),u(),t.setProductsList([]),t.setDataVencimento(null),t.setSelectedCategoria(void 0),t.setSelectedCentroCusto(void 0),t.setDataCompetencia(null)},{verifyEntrada:O,getItens:B,createEntrada:X,updateEntrada:V,addItemInList:Y,removeItemInList:J,updateItemInList:W,setValuesInputs:j,getAllFornecedor:b,getAllProducts:T,calculateValues:G,setProductData:E,validContaApagar:a,getCentroDeCusto:g,getCategorias:N,processOrCancel:q,state:t}=Ia({refreshEntradas:u,selectedEntrada:r,onHide:k}),{handleSubmit:ee,control:H,formState:{errors:z},register:Z,reset:ce,resetField:ye,setValue:ne,watch:ue,getValues:Ne}=aa({defaultValues:{gerar_financeiro:!1,data:new Date().toISOString(),nota_fiscal:"",CodigoExterno:"",entrada:0}}),xe=d=>X(d),Fe=d=>V({...d,entrada:t.createdEntrada?t.createdEntrada:d.entrada,CodigoExterno:t.createdEntradaData?t.createdEntradaData.CodigoExterno:d.CodigoExterno});i.useEffect(()=>{y(T),x(b),O(l,ye,ne,r),C&&(N(),g())},[C,l,r,L]),i.useLayoutEffect(()=>{C&&(b(),T())},[w,h]);const Ee=e(qa,{}),he=d=>c("div",{children:[e("p",{children:"Nenhum resultado encontrado"}),P(Ae.PRODUTO,Oe.INCLUIR)&&e(K,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:S.primary},onClick:D=>{D.preventDefault(),D.stopPropagation(),R()}})]}),me=d=>c("div",{children:[e("p",{children:"Nenhum resultado encontrado"}),e(K,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:S.primary,zIndex:9999},type:"button",onClick:D=>{f(),D.preventDefault(),D.stopPropagation()}})]}),pe=ue("gerar_financeiro");ue("nota_fiscal");const A=c(Da,{children:["Entrada"," ",e("h3",{children:G()?" Total Geral "+G():""})]});return e(Re,{header:A,visible:l,style:{width:"90vw",minHeight:"70%"},onHide:k,modal:!1,children:c(La,{onSubmit:r||t.createdEntrada?ee(Fe):ee(xe),children:[c(Ra,{children:[c(qe,{children:[t.createdEntrada?c("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px",minWidth:"100px"},children:[e(oe,{style:{width:"100%"},disabled:!0,value:String(t.createdEntrada),className:((fe=z.entrada)==null?void 0:fe.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"entrada",children:"Código"})]}):"",r?e(le,{name:"entrada",control:H,rules:{required:!1},render:({field:d})=>{var D;return c("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px",minWidth:"100px"},children:[e(oe,{style:{width:"100%"},id:d.name,disabled:!0,value:String(r==null?void 0:r.entrada),...Z("entrada"),autoFocus:!0,className:((D=z.entrada)==null?void 0:D.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"entrada",children:"Código"})]})}}):"",e(le,{name:"nota_fiscal",control:H,rules:{required:!1},render:({field:d})=>{var D;return c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(oe,{style:{width:"100%"},id:d.name,value:String(d.value),...Z("nota_fiscal"),maxLength:9,autoFocus:!0,className:((D=z.nota_fiscal)==null?void 0:D.type)==="required"?"p-invalid":"",onChange:s=>d.onChange(ke(s.target.value))}),e("label",{htmlFor:"nota_fiscal",children:"Nota fiscal"})]})}}),e(le,{name:"data_nota_fiscal",control:H,rules:{required:!1},render:({field:d,fieldState:D})=>{var s;return c("span",{className:"p-float-label",style:{flex:1,minWidth:"180px"},children:[e(Ie,{value:t.date,mask:"99/99/9999",onChange:F=>{d.onChange(new Date(F.value).toISOString()),t.setDate(F.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px"},placeholder:"Data da Nota Fiscal",inputId:"data_nota_fiscal",className:((s=z.data_nota_fiscal)==null?void 0:s.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data_nota_fiscal",children:"Data da Nota Fiscal"})]})}}),e(le,{name:"data",control:H,rules:{required:!1},render:({field:d,fieldState:D})=>{var s;return c("span",{className:"p-float-label",style:{flex:1,minWidth:"180px"},children:[e(Ie,{value:t.dateEntrada,mask:"99/99/9999",onChange:F=>{d.onChange(new Date(F.value).toISOString()),t.setDateEntrada(F.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px"},placeholder:"Data da Entradal",inputId:"data",className:((s=z.data)==null?void 0:s.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data",children:"Data da Entrada"})]})}}),e(le,{name:"fornecedor",control:H,rules:{required:!0},render:({field:d,fieldState:D})=>{var s;return c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"180px"},children:[e(De,{value:d.value,optionLabel:"nome_fantasia",optionValue:"fornecedor",placeholder:"Fornecedor",name:"fornecedor",filter:!0,filterBy:"filterBy",options:t.listFornecedores.map(F=>({...F,filterBy:F.fornecedor+F.cnpj+F.razao_social})),onChange:F=>d.onChange(F.value),className:((s=z.fornecedor)==null?void 0:s.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},emptyFilterMessage:me,emptyMessage:me}),c("label",{htmlFor:"fornecedor",children:["Fornecedor",e("span",{children:"*"})]})]})}}),((ge=t.createdEntradaData)==null?void 0:ge.situacao)&&c("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px"},children:[e(oe,{style:{width:"100%"},disabled:!0,value:t.createdEntradaData.situacao,className:((re=z.entrada)==null?void 0:re.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"entrada",children:"Situação"})]}),(r==null?void 0:r.situacao)&&c("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px"},children:[e(oe,{style:{width:"100%"},disabled:!0,value:r.situacao,className:((ie=z.entrada)==null?void 0:ie.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"entrada",children:"Situação"})]}),e(le,{name:"observacao",control:H,rules:{required:!1},render:({field:d})=>{var D;return c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"50%"},children:[e(ma,{style:{width:"100%",fontSize:"12px"},id:d.name,value:d.value,...Z("observacao"),className:((D=z.observacao)==null?void 0:D.type)==="required"?"p-invalid":"",onChange:s=>d.onChange(s.target.value)}),e("label",{htmlFor:"observacao",children:"Observações"})]})}})]}),e(Ta,{header:Ee,children:c(Aa,{children:[e("div",{children:e("i",{className:"pi pi-dollar"})}),e("h5",{children:"Total Geral:"}),e("h3",{children:G()})]})})]}),c(qe,{children:[e(le,{name:"gerar_financeiro",control:H,rules:{required:!1},render:({field:{onChange:d,value:D,name:s},fieldState:F})=>c("div",{style:{display:"flex",gap:"5px",width:"100%"},children:[e("label",{htmlFor:s,style:{fontSize:"0.9em"},children:"Gerar Financeiro"}),e(Me,{...Z("gerar_financeiro"),inputId:s,checked:D,onChange:M=>d(M.value)})]})}),pe&&c("div",{className:"gerar-financeiro-area",children:[c("span",{className:"p-float-label",style:{flex:1},children:[e(Ie,{value:t.dataVencimento,mask:"99/99/9999",onChange:d=>{t.setDataVencimento(d.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Data de Nascimento",inputId:"data_nascimento"}),e("label",{htmlFor:"data_vencimento",children:"Data de Vencimento"})]}),c("span",{className:"p-float-label",style:{flex:1},children:[e(De,{id:"categoria",value:t.selectedCategoria,optionLabel:"descricao",optionValue:"id",options:t.listCategorias,style:{width:"100%",height:"35px"},placeholder:"Categoria",onChange:d=>t.setSelectedCategoria(d.value),emptyMessage:"Sem itens disponíveis",optionDisabled:d=>!d.ativo}),c("label",{htmlFor:"categoria",children:["Categoria",e("span",{children:"*"})]})]}),c("span",{className:"p-float-label",style:{flex:1},children:[e(De,{id:"centro_de_custo",value:t.selectedCentroCusto,optionLabel:"descricao",optionValue:"id",options:t.listCentroCusto,style:{width:"100%",height:"35px"},placeholder:"Centro de Custo",onChange:d=>t.setSelectedCentroCusto(d.value),emptyMessage:"Sem itens disponíveis",optionDisabled:d=>!d.ativo}),c("label",{htmlFor:"centro_de_custo",children:["Centro de Custo",e("span",{children:"*"})]})]}),c("span",{className:"p-float-label",style:{flex:1},children:[e(Ie,{value:t.dataCompetencia,mask:"99/9999",onChange:d=>{t.setDataCompetencia(d.value)},dateFormat:"mm/yy",view:"month",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Competência",inputId:"competencia"}),e("label",{htmlFor:"competencia",children:"Competência"})]})]})]}),e(pa,{align:"left",children:e("div",{className:"inline-flex align-items-center",children:e("b",{children:"Itens"})})}),c(qe,{children:[c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"180px"},children:[e(De,{value:t.values.produto,optionLabel:"label",optionValue:"produto",placeholder:"Produto",name:"produto",filter:!0,filterBy:"label",emptyFilterMessage:he,options:t.listProducts.map(d=>({...d,label:`${d.produto} - ${d.descricao}`})),onChange:d=>{j(d),E(d.value)},style:{fontSize:"12px",height:"35px",width:"100%"},emptyMessage:he}),c("label",{htmlFor:"produto",children:["Produto",e("span",{children:"*"})]})]}),c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(de,{id:"quantidade",maxLength:5,value:+t.values.quantidade,style:{width:"100%"},name:"quantidade",onChange:d=>{t.setValues({...t.values,quantidade:d.value||0})},max:2e4,useGrouping:!1}),e("label",{htmlFor:"quantidade",children:"Quantidade"})]}),c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(de,{style:{width:"100%"},value:t.values.valor_unitario,mode:"currency",currency:"BRL",locale:"pt-BR",name:"valor_unitario",onChange:d=>{t.setValues({...t.values,valor_unitario:d.value||0})},"aria-describedby":"valor-help"}),e("label",{htmlFor:"valor_unitario",children:"Valor Unitário"})]}),c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(de,{disabled:!0,style:{width:"100%"},value:t.values.valor_unitario*t.values.quantidade,mode:"currency",currency:"BRL",locale:"pt-BR",name:"valor_total","aria-describedby":"valor-help"}),e("label",{htmlFor:"valor_unitario",children:"Valor Total"})]}),c("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(de,{style:{width:"100%"},value:t.values.desconto_valor,mode:"currency",currency:"BRL",locale:"pt-BR",name:"desconto_valor",onChange:d=>{t.setValues({...t.values,desconto_valor:d.value||0})}}),e("label",{htmlFor:"desconto_valor",children:"Desconto"})]}),e(K,{label:"Adicionar item",type:"button",style:{backgroundColor:S.primary,maxWidth:"150px",fontSize:"12px"},disabled:!t.productSelected||!t.values.quantidade||!+t.values.valor_unitario,onClick:Y})]}),t.refreshList?e("div",{children:e("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}):e(Ea,{products:t.productsList,removeItemInList:J,updateItemInList:W,entrada:t.createdEntrada,selectedEntrada:r,refreshProducts:B}),e(Pa,{children:c(Le,{children:[(t.createdEntrada||r)&&e(K,{loading:t.loadingBtn,type:"button",icon:"pi pi-cog",label:"Processar",style:{backgroundColor:S.primary,maxWidth:"150px",fontSize:"12px",display:"flex",gap:"10px"},onClick:()=>{q((r==null?void 0:r.entrada)||t.createdEntrada,"ENTRADA","P")},disabled:r&&(r==null?void 0:r.situacao)!=="PENDENTE"||t.productsList.length===0}),r||t.createdEntrada?e(K,{loading:t.loadingBtn,icon:"pi pi-check",label:"Salvar",style:{backgroundColor:S.primary,maxWidth:"150px",fontSize:"12px",display:"flex",gap:"10px"},disabled:t.productsList.length===0,onClick:()=>console.log(z)}):e(K,{loading:t.loadingBtn,icon:"pi pi-check",label:"Salvar",style:{backgroundColor:S.primary,maxWidth:"150px",fontSize:"12px",display:"flex",gap:"10px"},disabled:t.productsList.length===0||pe&&!a(),onClick:()=>console.log(z)})]})})]})})}function ka({open:l,setOpen:o,product:u,idMovimentacao:r}){const[v,S]=i.useState([]),[C,L]=i.useState(!1),{getRastreioProductService:R}=Pe(),w=()=>{R(ve.Entrada,r,u.produto).then(f=>{S(f.data)}).catch(f=>{console.log(f)})},h=()=>v.length?v.reduce((x,P)=>x+P.quantidade,0):0,y=()=>{o(!1)};return i.useLayoutEffect(()=>{u&&r&&w()},[u,r]),e(Re,{visible:l,header:"Itens do Rastreio",maximizable:!0,style:{minWidth:"40vw",minHeight:"40vh"},onHide:y,children:c(Ge,{children:[c(Ue,{children:["Movimentação - ",r," / Produto ",u&&u.produto," ",u.descricao?`- ${u.descricao}`:""]}),c(Qe,{children:["Rastreados: ",h()," de ",u?u.quantidade:""]}),c(_e,{value:v,loading:C,scrollable:!0,scrollHeight:"50vh",style:{minWidth:"50rem"},emptyMessage:"Sem itens encontrados",children:[e(_,{header:"Código",field:"id"}),e(_,{header:"Serial Inicial",field:"serial_inicial"}),e(_,{header:"Serial Final",field:"serial_final"})]})]})})}function Va({open:l,toggleOpen:o,entrada:u}){const[r,v]=i.useState([]),[S,C]=i.useState([]),[L,R]=i.useState(!1),[w,h]=i.useState(null),[y,f]=i.useState(!1),[x,P]=i.useState(null);i.useState(0);const{getListItemEntradaService:k}=ze(),{openNotification:O}=be(),{getMedidaBaseService:B}=je(),X=()=>{R(!0),k(u==null?void 0:u.entrada).then(b=>{console.log(b.data),v(b.data)}).catch(b=>{console.log(b)}).finally(()=>R(!1))};i.useLayoutEffect(()=>{u&&h(u)},[u]),i.useEffect(()=>{u!=null&&u.entrada&&(X(),S.length||V())},[u,l]);const V=()=>{B().then(b=>{C(b.data)}).catch(b=>{console.error(b),O("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},Y=()=>{o()};let J=()=>c("div",{children:["Itens da Entrada - ",w==null?void 0:w.entrada," "]});const W=b=>{const{qtdRastreios:T}=Be({tipoMovimentacao:ve.Entrada,codMovimentacao:b.entrada,codProduto:b.produto});return e("div",{style:{display:"flex",gap:"5px"},children:b.obrigar_rastreamento||u&&b.obrigar_rastreamento?e(Le,{children:e(K,{type:"button",label:"",icon:"pi pi-qrcode",size:"small",severity:"danger",title:"Rastrear",className:"p-button-text p-button-sm",style:{fontSize:"12px",color:Number(T)>=Number(b.quantidade)?"blue":"#d00"},onClick:()=>{f(G=>!G),P(b)}})}):""})},j=b=>S.length&&b.medida?S.filter(T=>T.id===b.medida)[0].descricao:b.medida||"";return c(Re,{header:J,visible:l,onHide:Y,style:{minWidth:"50vw",minHeight:"50vh"},closeOnEscape:!0,children:[x&&e(ka,{product:x,open:y,setOpen:f,idMovimentacao:x.entrada}),c(_e,{value:r,loading:L,emptyMessage:"Nenhum item encontrado",children:[e(_,{header:"Produto",field:"produto"}),e(_,{header:"Descrição",field:"descricao"}),e(_,{header:"Quantidade",field:"quantidade"}),e(_,{header:"Medida",field:"medida",body:j}),e(_,{header:"Valor Unitário",field:"valor_unitario",body:za}),e(_,{header:"Valor Total",field:"valor_total",body:Ma}),e(_,{body:W,header:""})]})]})}const za=l=>e("div",{children:te(l.valor_unitario)}),Ma=l=>e("div",{children:te(l.valor_total)});function Za(){const{colors:l}=i.useContext(we),{getAllEntradasService:o,deleteEntradaService:u}=ze(),{processOrCancelService:r}=He(),{havePermission:v}=We(),{openNotification:S}=be(),[C,L]=i.useState([]),[R,w]=i.useState({valor_total:0}),[h,y]=i.useState(),[f,x]=i.useState(!1),[P,k]=i.useState(null);i.useState([]);const{tokenSignature:O,storeUser:B}=Ve(s=>s),[X,V]=i.useState(""),[Y,J]=i.useState(10),[W,j]=i.useState(),[b,T]=i.useState(!1),[G,E]=i.useState(!1),{formContasPagar:a}=$e(s=>s),g=()=>{E(s=>!s),k(null)},N=i.useRef(null),q=()=>{T(!0)},t=()=>{x(!0),o().then(s=>{L(s.data.reverse()),ie(s.data)}).catch(s=>{console.error(s),S("warn","Falha ao obter lista de entradas disponíveis",`${s.response.data.msg}`)}).finally(()=>x(!1))},{listModuleFilters:ee,operatorsFilters:H,createFilter:z,loading:Z,clearFilter:ce,haveApplyFilters:ye}=ta({module:Ae.ENTRADAS,refreshList:t}),ne=(s,F,M)=>{r(s,F,M).then(ae=>{let Se=ae.data[0].msg;if(ae.data[0].erro==="true"){S("warn","Falha",`${Se||""}`);return}S("success","Sucesso",`${Se||""}`),t()}).catch(ae=>{console.error(ae),S("error","Falha na execução",`${ae.response.data.msg}`,1e4)})},ue=s=>{u(s).then(F=>{let M=F.data[0].msg;if(F.data[0].erro==="true"){S("warn","Falha",`${M||""}`);return}S("success","Sucesso",`${M||""}`),t()}).catch(F=>{console.error(F),S("error","Falha na execução",`${F.response.data.msg}`,1e4)})},Ne=s=>{const F=s.target.value;let M={...h};M.global.value=F,y(M),V(F)},xe=s=>{da({message:"Você está certo que deseja apagar este registro?",header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>ue(s),reject:()=>null})},Ee=(()=>c(ca,{children:[e(ua,{listModuleFilters:ee,operatorsFilters:H,setFilters:z,loading:Z,clearFilter:ce,haveApplyFilters:ye}),c("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(ha,{value:X,onChange:Ne,placeholder:"Buscar"})]})]}))(),he=()=>{y({global:{value:null,matchMode:se.CONTAINS},entrada:{operator:Ce.AND,constraints:[{value:null,matchMode:se.STARTS_WITH}]},valor_total:{operator:Ce.AND,constraints:[{value:null,matchMode:se.STARTS_WITH}]},nome_fornecedor:{operator:Ce.AND,constraints:[{value:null,matchMode:se.STARTS_WITH}]},data:{value:null,matchMode:se.CONTAINS},situacao:{operator:Ce.AND,constraints:[{value:null,matchMode:se.STARTS_WITH}]},nota_fiscal:{operator:Ce.AND,constraints:[{value:null,matchMode:se.STARTS_WITH}]}}),V("")},me=s=>ia(s.data),pe=s=>s.nota_fiscal?e("p",{children:s.nota_fiscal}):"- - -",A=s=>s.nome_fornecedor?e("p",{children:s.nome_fornecedor}):"- - -",fe=s=>e("div",{className:"cell-num",children:te(s.valor_total)}),ge=()=>C.length?C.filter(s=>s.situacao==="PROCESSADA").reduce((s,F)=>s+(F.valor_total||0),0):0,re=()=>e("div",{style:{fontSize:"13px"},children:te(R.valor_total)}),ie=s=>{const F=s.reduce((M,ae)=>M+(ae.valor_total||0),0);w(M=>({...M,valor_total:F}))},d=e(la,{children:c(sa,{children:[e(_,{footer:"Total:",colSpan:4,footerStyle:{textAlign:"right",fontWeight:"bold"}}),e(_,{footer:re,footerStyle:{fontWeight:"bold",textAlign:"right"},bodyStyle:{fontSize:"20px"}}),e(_,{footer:""}),e(_,{footer:""})]})});i.useEffect(()=>{he(),O&&t()},[O,B]);const D={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:l.backgroundColor,color:l.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:l.backgroundColor,color:l.textColor}};return c(ya,{children:[e(wa,{visible:b,setVisible:T,refreshEntradas:t,viewItens:G,selectedEntrada:P,setSelected:k}),e(Va,{open:G,toggleOpen:g,entrada:P}),e(ra,{}),c(xa,{children:[e(Sa,{children:e(K,{label:"Nova Entrada",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!v(Ae.ENTRADAS,Oe.INCLUIR),onClick:()=>{T(!0),k(null)}})}),e(va,{label:"Total Geral",value:te(ge())})]}),e(oa,{model:Ca(xe,W,v,g,q,ne,a),popup:!0,ref:N}),c(_e,{value:C,className:"p-datatable-customers",showGridlines:!0,dataKey:"entrada",filters:h,filterDisplay:"menu",loading:f,globalFilterFields:["entrada","nome_fornecedor","nota_fiscal","situacao","data","valor_total"],selectionPageOnly:!0,header:Ee,emptyMessage:"Nenhum dado encontrado.",paginator:!0,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {last} de {totalRecords}",rows:Y,footerColumnGroup:d,onValueChange:ie,rowsPerPageOptions:[10,20,50,100],scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(_,{field:"entrada",header:"Código",showFilterMatchModes:!1,style:{maxWidth:"6rem"},headerClassName:"header-table",bodyClassName:"cell-table",...D,sortable:!0}),e(_,{field:"nota_fiscal",header:"Nota fiscal",filterMenuStyle:{width:"14rem"},style:{maxWidth:"12rem"},headerClassName:"header-table",bodyClassName:"cell-table",...D,body:pe,sortable:!0}),e(_,{sortable:!0,field:"nome_fornecedor",header:"Fornecedor",filterMenuStyle:{width:"14rem"},style:{maxWidth:"12rem"},headerClassName:"header-table",bodyClassName:"cell-table",...D,body:A}),e(_,{field:"data",header:"Data",dataType:"date",body:me,style:{maxWidth:"8rem"},headerClassName:"header-table",bodyClassName:"cell-table",...D,sortable:!0}),e(_,{sortable:!0,field:"valor_total",header:"Valor Total",body:fe,style:{maxWidth:"4rem",textAlign:"center"},headerClassName:"header-table header-table-num",bodyClassName:"cell-table",...D}),e(_,{field:"situacao",header:"Situação",body:s=>e(na,{value:s.situacao}),style:{width:"4rem"},headerClassName:"header-table",bodyClassName:"cell-table",...D,sortable:!0}),e(_,{header:"Ações",headerClassName:"header-table",body:s=>e(K,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",onClick:F=>{N.current!=null&&(N.current.toggle(F),j(s)),k(s)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold"},bodyStyle:{fontSize:"12px",fontWeight:600}})]})]})}export{Za as default};
