import{av as Ke,s as D,am as Xe,r as i,i as ce,a as e,j as m,ai as ie,ah as x,B as j,Y as ue,aa as Ye,E as oe,aj as Je,ag as Fe,ab as Te,X as Ee,ak as X,K as Ze,b as Ie,g as et,d as tt,h as ke,W as at,a7 as qe,a0 as Ve,$ as Ne,a2 as rt,D as we,a8 as ot,aw as it,an as nt,M as st,ax as lt,ay as K,az as re,aA as dt,aB as ct,aC as ut,aD as pt,aE as ht,aF as mt,aG as ft}from"./index-7cffcf74.js";import{D as gt}from"./divider.esm-73291a01.js";import{u as pe,E as Z,a as De,b as bt}from"./processOrCancelService-8c998701.js";import{u as yt}from"./productsService-a4f11891.js";import{u as vt}from"./storeService-325e002b.js";import{F as xt}from"./FinanceiroCards-f3722aec.js";const St=Ke`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,Ct=D.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${St} 0.3s linear alternate;
  .p-datatable .p-datatable-header {
    background-color: ${r=>r.theme.colors.backgroundColor};
  }
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,_t=D.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Nt=D.article`
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
`,Tt=(r,n,o,u,s,_)=>[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:b=>{s&&s()},disabled:(n==null?void 0:n.situacao)!=="PENDENTE"},{label:"Excluir",icon:"pi pi-fw pi-trash",command:b=>{console.log(n),r(n==null?void 0:n.sequencial)},disabled:(n==null?void 0:n.situacao)!=="PENDENTE"||o&&!o(2020,6)},{label:"Aceite",icon:"pi pi-fw pi-check",command:b=>{console.log(n)},disabled:!0},{label:"Visualizar itens",icon:"pi pi-fw pi-eye",command:b=>{u&&u()},disabled:o&&!o(2020,1)},{label:"Processar",icon:"pi pi-cog",command:b=>{_&&_(Number(n==null?void 0:n.sequencial),"TRANSFERENCIAEMPRESA","P")},disabled:(n==null?void 0:n.situacao)!=="PENDENTE"||o&&!o(2020,7)},{label:"Cancelar",icon:"pi pi-times",command:b=>{_&&_(Number(n==null?void 0:n.sequencial),"TRANSFERENCIAEMPRESA","C")},disabled:(n==null?void 0:n.situacao)!=="PROCESSADA"||o&&!o(2020,9)}]}],Et=D.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 45px;
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
`,qt=D.div`
  display: flex;
  gap: 10px;
  & .p-card .p-card-body {
    padding: 0 !important;
  }
  & .p-card .p-card-content {
    padding: 0 !important;
    height: 100px;
  }
`,Ae=D.div`
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
`;D.div`
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
`;const Ft=D.div`
  width: 100%;
  display: flex;
  justify-content: right;
`,It=D(Xe)`
  width: 40%;
  height: 80px;
  // background-color: ${r=>r.theme.colors.primary};
  color: #ffffff;
  border-radius: 8px;
`,Rt=D.div`
  background-color: ${r=>r.theme.colors.primary};
  opacity: 0.7;
  height: 30px;
  width: 100%;
  position: relative;
`,Lt=D.div`
  background-color: ${r=>r.theme.colors.primary};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  & div {
    background: ${r=>r.theme.colors.primary};
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
`,$e=D.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,Me=D.span`
  color: ${r=>r.theme.colors.primary};
  font-weight: bold;
`,Pt=D.div`
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
`,ze=D.span`
  display: flex;
  color: ${r=>r.theme.colors.primary};
  font-weight: bold;
`;function wt({listRastreios:r,refreshListRastreio:n,refreshProducts:o}){const[u,s]=i.useState(!1),{deleteRastreioProductService:_}=pe(),{openNotification:b}=ce(),N=y=>{s(!0),_(y).then(f=>{console.log(f.data);const v=f.data[0].erro,I=f.data[0].msg;if(v&&v==="true"){b("warn","Falha",`${I||"Falha na execução!"}`,5e3);return}n(),o&&o(r[0].id_movimentacao),b("success","Sucesso",`${I||"Ação concluída com sucesso!"}`)}).catch(f=>{var v;console.warn(f),b("error","Falha",`${((v=f.response)==null?void 0:v.data.msg)||"Falha no Processamento!"}`)}).finally(()=>s(!1))},F=y=>e(j,{icon:"pi pi-trash",className:"p-button-text",severity:"danger",title:"Excluir item rastreado",onClick:()=>N([{sequencial:y.id}])}),c=(()=>{const y=r.map(f=>({sequencial:f.id}));return e("div",{style:{display:"flex",width:"100%",justifyContent:"flex-end"},children:r.length>1?e(j,{icon:"pi pi-trash",badge:String(r.length),size:"small",label:"Excluir todos",className:"p-button-text",severity:"danger",style:{fontSize:"12px",display:"flex",gap:"10px"},onClick:()=>N(y)}):""})})();return e("div",{style:{width:"100%",maxHeight:"400px"},children:m(ie,{header:c,value:r,loading:u,scrollable:!0,scrollHeight:"400px",style:{minWidth:"50rem"},emptyMessage:"Sem itens encontrados",children:[e(x,{header:"Código",field:"id"}),e(x,{header:"Serial Inicial",field:"serial_inicial"}),e(x,{header:"Serial Final",field:"serial_final"}),e(x,{header:"",body:F})]})})}function At({open:r,idMovimentacao:n,setOpen:o,product:u,isFinally:s,refreshProducts:_}){const[b,N]=i.useState(""),[F,A]=i.useState(""),[c,y]=i.useState(!1),[f,v]=i.useState([]),[I,T]=i.useState(!1),$=i.useRef(null),M=i.useRef(null),{getRastreioProductService:R,createRastreioProductService:l}=pe(),{openNotification:z}=ce(),S=()=>{T(!0),l({tipoMovimentacao:Z.TransferenciaOutraUnidade,idMovimentacao:n,produto:u.produto_origem,serial_inicial:b,serial_final:F}).then(h=>{let E=h.data[0].msg,L=h.data[0].erro;if(L&&L=="true"){z("error","Falha ao cadastrar",`${E||"Erro ao cadastrar"}`,1e4);return}if(L&&L=="false"){z("success","Sucesso",`${E||"Sucesso"}`,1e4),N(""),A(""),k();return}}).catch(h=>{console.error(h),z("error","Falha",`${h.response.data.msg}`,1e4)}).finally(()=>T(!1))},k=()=>{R(Z.TransferenciaOutraUnidade,n,u.produto).then(h=>{v(h.data),console.log(h.data)}).catch(h=>{console.log(h)})};i.useLayoutEffect(()=>{u&&k()},[u]);const t=()=>{if(f.length){const h=f.reduce((E,L)=>E+L.quantidade,0);return s(h),h}return 0};return i.useEffect(()=>{if(u){if(s(t()),b.length===u.tamanho_numero_serie&&F.length===u.tamanho_numero_serie){S();return}if(b&&b.length===u.tamanho_numero_serie)if(c){if(M.current!==null){M.current.focus();return}}else{S();return}}return()=>{s(t())}},[b,F]),e(ue,{visible:r,onHide:()=>{o(!1),y(!1),N(""),A("")},header:"Rastreio",maximizable:!0,style:{minWidth:"60vw",minHeight:"50vh"},children:m($e,{children:[m(Me,{children:["Movimentação - ",n," /",u&&"Produto - "+u.produto_origem]}),I?e("div",{className:"card",style:{height:"15px",width:"100%"},children:e(Je,{mode:"indeterminate",style:{height:"6px"}})}):m(Pt,{children:[u&&!u.eh_alfanumerico&&m("h6",{children:["Rastreamento por Intervalo"," ",e(Ye,{checked:c,onChange:h=>{y(!!h.value),$!=null&&setTimeout(()=>{var E;(E=$.current)==null||E.focus()},100)}})]}),m("div",{className:"container-inputs",children:[e("i",{className:"pi pi-qrcode",style:{fontSize:"2.5rem"}}),e(oe,{ref:$,placeholder:c?"Serial Inicial":"Serial",value:b,autoFocus:!0,onChange:h=>N(h.target.value)}),c&&e(oe,{ref:M,placeholder:"Serial Final",value:F,onChange:h=>A(h.target.value)})]})]}),m(ze,{children:["Rastreados: ",t()," de ",u?u.quantidade:""]}),e(wt,{listRastreios:f,refreshListRastreio:k,refreshProducts:_})]})})}function kt({products:r,removeItemInList:n,updateItemInList:o,transferencia:u,selectedTransferencia:s,refreshProducts:_}){i.useContext(Fe);const[b,N]=i.useState(!1),[F,A]=i.useState(0),[c,y]=i.useState(null),[f,v]=i.useState([]),{getRastreioProductService:I}=pe(),T=async()=>{for(let t of r)if(t.obrigar_rastreamento){const p=await $(t.produto);if(p){v([]);const h=r.map(E=>E.produto===t.produto?{...E,rastreados:p}:{...E});v(h)}}};i.useLayoutEffect(()=>{v(r),setTimeout(()=>{r&&T()},500)},[F,r,u,n]);const $=t=>I(Z.Transferencia,Number(s==null?void 0:s.sequencial),t).then(p=>p.data.reduce((L,ee)=>L+ee.quantidade,0)).catch(p=>(console.log(p),0)),M=s?[{field:"produto_origem",header:"Cod. Produto"},{field:"quantidade",header:"Quantidade"},{field:"valor_unitario",header:"Valor Unidade"},{field:"total",header:"Valor Total"},{field:"edit",header:""},{field:"acoes",header:""}]:[{field:"produto",header:"Cod. Produto"},{field:"descricao",header:"Descrição"},{field:"quantidade",header:"Quantidade"},{field:"valor_unitario",header:"Valor Unidade"},{field:"total",header:"Valor Total"},{field:"edit",header:""},{field:"acoes",header:""}],R=t=>{let p=[...r],{newData:h,index:E}=t;p[E]=h,o(p)},l=t=>e(oe,{type:"text",value:t.value,onChange:p=>{t==null||t.editorCallback(Ee(p.target.value||String(1)))}}),z=t=>{const p=t.valor_unitario,h=t.quantidade,E=t.desconto_valor||0,L=Number(p)*h-Number(E)*h;return e("div",{children:X(L)})},S=t=>{const p=t.valor_unitario;return e("div",{children:X(p)})},k=t=>{const{qtdRastreios:p}=De({tipoMovimentacao:Z.Transferencia,codMovimentacao:t.sequencial,codProduto:t.produto_origem});return m("div",{style:{display:"flex",gap:"5px"},children:[e(j,{label:"",icon:"pi pi-trash",size:"small",severity:"danger",title:"Excluir item",className:"p-button-text p-button-sm",style:{fontSize:"12px"},onClick:()=>n(t.CodigoExterno,p)}),s&&t.obrigar_rastreamento||u&&t.obrigar_rastreamento?e(Te,{children:e(j,{type:"button",label:"",icon:"pi pi-qrcode",size:"small",severity:"danger",title:"Rastrear",className:"p-button-text p-button-sm",style:{fontSize:"12px",color:Number(p)>=Number(t.quantidade)?"blue":"#d00"},onClick:()=>{N(h=>!h),y(t)}})}):""]})};return m(Te,{children:[e(At,{open:b,idMovimentacao:Number(s==null?void 0:s.sequencial)||Number(u),setOpen:N,product:c,isFinally:A,refreshProducts:_}),e(ie,{value:f,tableStyle:{minWidth:"50rem"},editMode:"row",dataKey:"id",onRowEditComplete:R,emptyMessage:"Nenhum item adicionado!",children:M.map((t,p)=>t.field==="edit"?e(x,{header:t.header,rowEditor:!0,headerStyle:{width:"10%",minWidth:"8rem"},bodyStyle:{textAlign:"center"}},t.header):t.field==="acoes"?e(x,{body:k,header:t.header},t.header):t.field==="total"?e(x,{body:z,header:t.header},t.header):t.field==="valor_unitario"?e(x,{body:S,header:t.header,bodyStyle:{textAlign:"center"}},t.header):t.field!="produto"&&t.field!="descricao"&&t.field!="produto_origem"?e(x,{field:t.field,header:t.header,bodyStyle:{textAlign:"center"},editor:h=>l(h)},t.header):e(x,{field:t.field,header:t.header},t.header))})]})}function Re(){const{service:r}=Ze(),{tokenSignature:n,storeUser:o}=Ie(c=>c),{getDataUser:u}=et();return{getAllTransferenciasService:()=>{var c;return r(n).get(`/transferenciaempresa?empresa=${o}&limite=500&usuario=${(c=u())==null?void 0:c.guid}`)},createNewTransferenciaService:(c,y)=>{const f=Math.round(Math.random()*1e4),v={empresa:o,listTransferenciaEmpresa:[{sequencial:c.sequencial,data:c.data,almoxarifado_origem:1,empresa_destino:c.empresa_destino,almoxarifado_destino:1,CodigoExterno:f}],listItem:y.map(I=>({sequencial:c.sequencial,produto_origem:I.produto,produto_destino:I.produto,quantidade:I.quantidade,valor_unitario:I.valor_unitario,CodigoExterno:f}))};return r(n).post(`/transferenciaempresa?empresa=${o}`,v)},deleteTransferenciaService:c=>{const y={empresa:o,list:[{sequencial:c}]};return r(n).delete("/transferenciaempresa",{data:y})},updateTransferenciaService:(c,y)=>{const f={empresa:o,listTransferenciaEmpresa:[{sequencial:c.sequencial,data:c.data,almoxarifado_origem:1,empresa_destino:c.empresa_destino,almoxarifado_destino:1,CodigoExterno:c.CodigoExterno}],listItem:y.map(v=>({sequencial:v.entrada,produto_origem:v.produto,produto_destino:v.produto,quantidade:v.quantidade,valor_unitario:v.valor_unitario,CodigoExterno:v.CodigoExterno}))};return r(n).put(`/transferenciaempresa?empresa=${o}`,f)},getListItemTransferenciaService:(c,y="TRANSFERENCIAEMPRESA")=>r(n).get(`/item?empresa=${o}&entidade=${y}&sequencial=${c}`),getOnlyTransferenciaService:c=>r(n).get(`/transferenciaempresa?empresa=${o}&sequencial=${c}`)}}function Vt({visible:r,setVisible:n,refreshTransferencias:o,viewItens:u,selectedTransferencia:s,setSelected:_}){const{colors:b}=i.useContext(Fe),{tokenSignature:N,storeUser:F}=Ie(d=>d),{getListAllStoreNoFilterService:A}=vt(),{getListAllProductsNoFilterService:c}=yt(),{createNewTransferenciaService:y,updateTransferenciaService:f,getListItemTransferenciaService:v,getOnlyTransferenciaService:I}=Re(),{openNotification:T}=ce(),{formProdutos:$,setRefreshListProducts:M,setRefreshListLojas:R,formLojas:l,openProdutos:z,openLojas:S}=tt(),{havePermission:k}=ke(),[t,p]=i.useState(!1),[h,E]=i.useState(new Date),[L,ee]=i.useState([]),[U,he]=i.useState([]),[V,G]=i.useState([]),[W,me]=i.useState(null),[fe,H]=i.useState(!1),[te,ge]=i.useState(0),[ne,se]=i.useState(null),{handleSubmit:be,control:Le,formState:{errors:ye},register:ve,reset:xe,resetField:Q,setValue:Y}=at({defaultValues:{data:new Date().toISOString(),CodigoExterno:"",sequencial:0,empresa_destino:0}}),Se=d=>{p(!0),y(d,V).then(a=>{let C=a.data[0].msg,w=a.data[0].erro,ae=a.data[0].transferencia;if(w&&w=="true"){T("error","Falha ao Cadastrar",`${C||"Erro ao cadastrar"}`,1e4);return}w&&w=="false"&&(ge(ae),g(ae),B(ae),o(),T("success","Sucesso",`${C||"Cadastro realizado com sucesso"}`))}).catch(a=>{console.error(a),T("error","Falha ao Cadastrar",`${a.response.data.msg}`,1e4)}).finally(()=>p(!1))},le=d=>{p(!0),f({...d,sequencial:te||d.sequencial,CodigoExterno:ne?ne.CodigoExterno:d.CodigoExterno},V).then(a=>{let C=a.data[0].msg,w=a.data[0].erro;if(w&&w=="true"){T("error","Falha ao Cadastrar",`${C||"Erro ao cadastrar"}`,1e4);return}w&&w=="false"&&(o(),T("success","Sucesso",`${C||"Cadastro realizado com sucesso"}`))}).catch(a=>{console.error(a),T("error","Falha ao Cadastrar",`${a.response.data.msg}`,1e4)}).finally(()=>p(!1))},Ce=()=>{_&&_(null),n(!1),Y("empresa_destino",0),Y("sequencial",0),E(new Date(new Date().toISOString())),se(null),xe(),G([])},B=d=>{v(+d).then(a=>{console.log(a.data),G(a.data)}).catch(a=>{console.log(a)}).finally(()=>null)},g=d=>{H(!0),I(d).then(a=>{let C=a.data[0].msg,w=a.data[0].erro;if(w&&w=="true"){T("error","Falha ao obter entrada",`${C||"Erro ao cadastrar"}`,1e4);return}se(a.data[0])}).catch(a=>{console.error(a),T("error","Falha",`${a.response.data.msg}`,1e4)}).finally(()=>H(!1))},P=()=>({sequencial:s?s.sequencial:0,descricao:"",produto:"",quantidade:0,valor_unitario:0,desconto_valor:0,desconto_aliq:0,medida:0,obrigar_rastreamento:!1,tamanho_numero_serie:0,eh_alfanumerico:!1,CodigoExterno:""}),[q,O]=i.useState(P()),J=d=>{let a=d.target?{...q,[d.target.name]:Ee(d.target.value)}:{...q,[d.originalEvent.target.name]:Ee(d.originalEvent.target.value)};O(a)},de=()=>{A().then(d=>{ee(d.data)}).catch(d=>{console.error(d),T("warn","Falha ao obter lista de empresas disponíveis")})},_e=()=>{c().then(d=>{he(d.data)}).catch(d=>{console.error(d),T("warn","Falha ao obter lista de produtos disponíveis")})},We=()=>{H(!0);const d={...q,produto:q.produto,quantidade:q.quantidade,obrigar_rastreamento:q.obrigar_rastreamento,eh_alfanumerico:W==null?void 0:W.eh_alfanumerico,eh_qrcode:W==null?void 0:W.eh_qrcode,tamanho_numero_serie:W==null?void 0:W.tamanho_numero_serie,desconto_valor:q.desconto_valor};if(V.find(w=>w.produto===d.produto)){T("warn","Produto ja adicionado!","Selecione um outro produto disponível.",3e3),H(!1);return}let C=V;C.push(d),G(C),setTimeout(()=>{H(!1)},500),O(P())},He=(d,a)=>{H(!0);let w=V.filter(ae=>ae.CodigoExterno!=d);if(a){T("warn","Falha","Produto já rastreado! Exclua o rastreamento primeiro.",3e3),H(!1);return}G(w),setTimeout(()=>{H(!1)},500)},Oe=d=>{H(!0),G(d),setTimeout(()=>{H(!1)},500)},je=d=>{let a=U.find(w=>w.produto===d);me(a);let C={...q,sequencial:s?s.sequencial:0,descricao:a==null?void 0:a.descricao,produto:d,medida:(a==null?void 0:a.medida_base)||0,obrigar_rastreamento:a==null?void 0:a.obrigar_rastreamento,CodigoExterno:s?String(s.CodigoExterno):d+Math.round(Math.random()*1e4),valor_unitario:a==null?void 0:a.venda_padrao};O(C)},Pe=()=>{const d=["empresa_destino","CodigoExterno","data","sequencial"];s?(r&&B(s==null?void 0:s.sequencial),setTimeout(()=>{d.forEach(a=>{if(Q(a,{keepDirty:!0,defaultValue:s[a]}),a==="data"){if(s.data){let C=String(s.data).split("T")[0].replaceAll("-","/");E(new Date(C))}Q("data",{keepDirty:!0,defaultValue:h==null?void 0:h.toISOString()})}a==="sequencial"&&(Q(a,{keepDirty:!0,defaultValue:s[a]}),Y("sequencial",s.sequencial)),a==="CodigoExterno"&&(Q(a,{keepDirty:!0,defaultValue:s[a]}),Y("CodigoExterno",s.CodigoExterno))})},1e3)):d.forEach(a=>{Q(a,{keepDirty:!0,defaultValue:""})})};i.useEffect(()=>{M(_e),R(de),Pe(),N&&!U.length&&!L.length&&(de(),_e())},[N,r,s,F,z,S]);const Be=()=>{const d=V.reduce((a,C)=>a+Number(C.valor_unitario)*C.quantidade,0);return V.reduce((a,C)=>a+Number(C.quantidade),0),V.reduce((a,C)=>a+Number(C.desconto_valor),0),X(d)},Ue=e(Rt,{}),Ge=d=>m("div",{children:[e("p",{children:"Nenhum resultado encontrado"}),k(qe.PRODUTO,Ve.INCLUIR)&&e(j,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:b.primary},onClick:()=>$()})]}),Qe=d=>m("div",{children:[e("p",{children:"Nenhum resultado encontrado"}),e(j,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px"},onClick:()=>l()})]});return{handleSubmit:be,onSubmit:Se,onSubmitEdit:le,onHide:Ce,getItens:B,getCreatedtransferencia:g,setInitialValues:P,setValuesInputs:J,getAllStores:de,getAllProducts:_e,addItemInList:We,removeItemInList:He,updateItemInList:Oe,setProductData:je,verifyTransferencia:Pe,useEffect:i.useEffect,calculateValues:Be,emptyFilterProductBody:Ge,emptyFilterEmpresasBody:Qe,state:{colors:b,values:q,headerCard:Ue,visible:r,setVisible:n,refreshTransferencias:o,viewItens:u,selectedTransferencia:s,setSelected:_,createdTransferencia:te,control:Le,register:ve,errors:ye,setDate:E,date:h,listEmpresas:L,storeUser:F,listProducts:U,productsList:V,refreshList:fe,productSelected:W,loadingBtn:t}}}function Dt({visible:r,setVisible:n,refreshTransferencias:o,viewItens:u,selectedTransferencia:s,setSelected:_}){var z;const{handleSubmit:b,onSubmit:N,onSubmitEdit:F,onHide:A,getItens:c,setValuesInputs:y,addItemInList:f,removeItemInList:v,updateItemInList:I,setProductData:T,calculateValues:$,emptyFilterProductBody:M,emptyFilterEmpresasBody:R,state:l}=Vt({visible:r,setVisible:n,refreshTransferencias:o,viewItens:u,selectedTransferencia:s,setSelected:_});return e(ue,{header:"Transferência",visible:l.visible,style:{width:"90vw",minHeight:"70%"},onHide:A,children:m(Et,{onSubmit:l.selectedTransferencia?b(F):b(N),children:[m(qt,{children:[m(Ae,{children:[l.createdTransferencia?m("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px"},children:[e(oe,{style:{width:"100%"},disabled:!0,value:String(l.createdTransferencia),className:((z=l.errors.sequencial)==null?void 0:z.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"sequencial",children:"Código"})]}):"",l.selectedTransferencia?e(Ne,{name:"sequencial",control:l.control,rules:{required:!1},render:({field:S})=>{var k,t;return m("span",{className:"p-float-label",style:{width:"10%",fontSize:"12px"},children:[e(oe,{style:{width:"100%"},id:S.name,disabled:!0,value:String((k=l.selectedTransferencia)==null?void 0:k.sequencial),...l.register("sequencial"),autoFocus:!0,className:((t=l.errors.sequencial)==null?void 0:t.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"sequencial",children:"Código"})]})}}):"",e(Ne,{name:"data",control:l.control,rules:{required:!0},render:({field:S,fieldState:k})=>{var t;return m("span",{className:"p-float-label",style:{width:"15%",minWidth:"180px"},children:[e(rt,{value:l.date,mask:"99/99/9999",onChange:p=>{S.onChange(new Date(p.value).toISOString()),l.setDate(p.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px"},placeholder:"Data da Transferência",inputId:"data",className:((t=l.errors.data)==null?void 0:t.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data",children:"Data da Transferência"})]})}}),e(Ne,{name:"empresa_destino",control:l.control,rules:{required:!0},render:({field:S,fieldState:k})=>{var t;return m("span",{className:"p-float-label",style:{width:"30%",fontSize:"12px"},children:[e(we,{value:S.value,optionLabel:"razao_social",optionValue:"empresa",placeholder:"Loja de Destino",name:"empresa_destino",filter:!0,filterBy:"filterBy",options:l.listEmpresas.filter(p=>p.empresa!==l.storeUser).map(p=>({...p,filterBy:p.empresa+p.cnpj_cpf+p.razao_social})),onChange:p=>S.onChange(p.value),className:((t=l.errors.empresa_destino)==null?void 0:t.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"},emptyFilterMessage:R,emptyMessage:R}),m("label",{htmlFor:"empresa_destino",children:["Empresa de Destino",e("span",{children:"*"})]})]})}})]}),e(It,{header:l.headerCard,children:m(Lt,{children:[e("div",{children:e("i",{className:"pi pi-dollar"})}),e("h5",{children:"Total Geral:"}),e("h3",{children:$()})]})})]}),e(gt,{align:"left",children:e("div",{className:"inline-flex align-items-center",children:e("b",{children:"Itens"})})}),m(Ae,{children:[m("span",{className:"p-float-label",style:{width:"25%",fontSize:"12px"},children:[e(we,{value:l.values.produto,optionLabel:"label",optionValue:"produto",placeholder:"Produto",name:"produto",filter:!0,emptyFilterMessage:M,options:l.listProducts.map(S=>({...S,label:`${S.produto} - ${S.descricao}`})),onChange:S=>{y(S),T(S.value)},style:{fontSize:"12px",height:"35px",width:"100%"},emptyMessage:M}),m("label",{htmlFor:"produto",children:["Produto",e("span",{children:"*"})]})]}),m("span",{className:"p-float-label",style:{width:"25%",fontSize:"12px"},children:[e(ot,{id:"quantidade",value:l.values.quantidade,style:{width:"100%"},name:"quantidade",onChange:S=>y(S)}),e("label",{htmlFor:"quantidade",children:"Quantidade"})]}),e(j,{label:"Adicionar item",type:"button",style:{backgroundColor:l.colors.primary,maxWidth:"150px",fontSize:"12px"},disabled:!l.productSelected||!+l.values.quantidade,onClick:f})]}),l.refreshList?e("div",{children:e("i",{className:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}})}):e(kt,{products:l.productsList,removeItemInList:v,updateItemInList:I,transferencia:l.createdTransferencia,selectedTransferencia:l.selectedTransferencia,refreshProducts:c}),e(Ft,{children:!l.createdTransferencia&&e(j,{loading:l.loadingBtn,icon:"pi pi-check",label:"Salvar",style:{backgroundColor:l.colors.primary,maxWidth:l.selectedTransferencia?"150px":"250px",fontSize:"12px",display:"flex",gap:"10px"},disabled:l.productsList.length===0,onClick:()=>console.log(l.errors)})})]})})}function $t({open:r,setOpen:n,product:o,idMovimentacao:u}){const[s,_]=i.useState([]),[b,N]=i.useState(!1),{getRastreioProductService:F}=pe(),A=()=>{F(Z.Transferencia,u,o.produto_origem).then(f=>{_(f.data)}).catch(f=>{console.log(f)})},c=()=>s.length?s.reduce((v,I)=>v+I.quantidade,0):0,y=()=>{n(!1)};return i.useLayoutEffect(()=>{o&&u&&A()},[o,u]),e(ue,{visible:r,header:"Itens do Rastreio",maximizable:!0,style:{minWidth:"60vw",minHeight:"40vh"},onHide:y,children:m($e,{children:[m(Me,{children:["Movimentação - ",u," / Produto ",o&&o.produto," ",o.descricao_produto_origem?`- ${o.descricao_produto_origem}`:""]}),m(ze,{children:["Rastreados: ",c()," de ",o?o.quantidade:""]}),m(ie,{value:s,loading:b,scrollable:!0,scrollHeight:"50vh",style:{minWidth:"50rem"},emptyMessage:"Sem itens encontrados",children:[e(x,{header:"Código",field:"id"}),e(x,{header:"Serial Inicial",field:"serial_inicial"}),e(x,{header:"Serial Final",field:"serial_final"})]})]})})}function Mt({open:r,toggleOpen:n,transferencia:o}){const[u,s]=i.useState([]),[_,b]=i.useState(!1),[N,F]=i.useState(null),[A,c]=i.useState(!1),[y,f]=i.useState(null),{getListItemTransferenciaService:v}=Re(),I=()=>{b(!0),v(o==null?void 0:o.sequencial).then(R=>{console.log(R.data),s(R.data)}).catch(R=>{console.log(R)}).finally(()=>b(!1))};i.useLayoutEffect(()=>{o&&F(o)},[o]),i.useEffect(()=>{o!=null&&o.sequencial&&I()},[o,r]);const T=()=>{n()},$=()=>m("div",{children:["Itens da Transferência - ",N==null?void 0:N.sequencial]}),M=R=>{const{qtdRastreios:l}=De({tipoMovimentacao:Z.Transferencia,codMovimentacao:R.sequencial,codProduto:R.produto_origem});return e("div",{style:{display:"flex",gap:"5px"},children:R.obrigar_rastreamento||o&&R.obrigar_rastreamento?e(Te,{children:e(j,{type:"button",label:"",icon:"pi pi-qrcode",size:"small",severity:"danger",title:"Rastrear",className:"p-button-text p-button-sm",style:{fontSize:"12px",color:Number(l)>=Number(R.quantidade)?"blue":"#d00"},onClick:()=>{c(z=>!z),f(R)}})}):""})};return m(ue,{header:$,visible:r,onHide:T,style:{minWidth:"50vw",minHeight:"50vh"},closeOnEscape:!0,children:[y&&e($t,{product:y,open:A,setOpen:c,idMovimentacao:y.sequencial}),m(ie,{value:u,loading:_,emptyMessage:"Nenhum item encontrado",children:[e(x,{header:"Cód.Transferência",field:"sequencial"}),e(x,{header:"Produto",field:"produto_origem"}),e(x,{header:"Descrição",field:"descricao_produto_origem"}),e(x,{header:"Quantidade",field:"quantidade"}),e(x,{header:"Valor Unitário",field:"valor_unitario",body:zt}),e(x,{body:M,header:""})]})]})}const zt=r=>e("div",{children:X(r.valor_unitario)});function Gt(){const{colors:r}=i.useContext(Fe),{getAllTransferenciasService:n,deleteTransferenciaService:o}=Re(),[u,s]=i.useState([]),[_,b]=i.useState({valor_total:0}),[N,F]=i.useState(),[A,c]=i.useState(!1),[y,f]=i.useState(null);i.useState([]);const{tokenSignature:v,storeUser:I}=Ie(g=>g),[T,$]=i.useState(""),[M,R]=i.useState(10),[l,z]=i.useState(),[S,k]=i.useState(!1),[t,p]=i.useState(!1),h=()=>{p(g=>!g),f(null)},{havePermission:E}=ke(),{openNotification:L}=ce(),{processOrCancelService:ee}=bt(),U=i.useRef(null),he=()=>{k(!0)},V=()=>{c(!0),n().then(g=>{s(g.data.reverse()),le(g.data)}).catch(g=>{console.error(g),L("warn","Falha ao obter lista de transferencias disponíveis",`${g.response.data.msg}`)}).finally(()=>c(!1))},{listModuleFilters:G,operatorsFilters:W,createFilter:me,loading:fe,clearFilter:H,haveApplyFilters:te}=it({module:qe.TRANSFERENCIAS,refreshList:V}),ge=(g,P,q)=>{ee(g,P,q).then(O=>{let J=O.data[0].msg;if(O.data[0].erro==="true"){L("warn","Falha",`${J||""}`);return}L("success","Sucesso",`${J||""}`),V()}).catch(O=>{console.error(O),L("error","Falha na execução",`${O.response.data.msg}`,1e4)})},ne=g=>{o(g).then(P=>{let q=P.data[0].msg;if(P.data[0].erro==="true"){L("warn","Falha",`${q||""}`);return}L("success","Sucesso",`${q||""}`),V()}).catch(P=>{console.error(P),L("error","Falha na execução",`${P.response.data.msg}`,1e4)})},se=g=>{const P=g.target.value;let q={...N};q.global.value=P,F(q),$(P)},be=g=>{pt({message:"Você está certo que deseja apagar este registro?",header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>ne(g),reject:()=>null})},ye=(()=>m(ht,{children:[e(mt,{listModuleFilters:G,operatorsFilters:W,setFilters:me,loading:fe,clearFilter:H,haveApplyFilters:te}),m("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(ft,{value:T,onChange:se,placeholder:"Buscar"})]})]}))(),ve=()=>{F({global:{value:null,matchMode:K.CONTAINS},entrada:{operator:re.AND,constraints:[{value:null,matchMode:K.STARTS_WITH}]},valor_total:{operator:re.AND,constraints:[{value:null,matchMode:K.STARTS_WITH}]},nome_fornecedor:{operator:re.AND,constraints:[{value:null,matchMode:K.STARTS_WITH}]},data:{value:null,matchMode:K.CONTAINS},situacao:{operator:re.AND,constraints:[{value:null,matchMode:K.STARTS_WITH}]},nota_fiscal:{operator:re.AND,constraints:[{value:null,matchMode:K.STARTS_WITH}]}}),$("")},xe=g=>dt(g.data),Q=g=>e("div",{className:"cell-num",children:X(g.valor_total)}),Y=()=>u.length?u.reduce((g,P)=>g+(P.valor_total||0),0):0,Se=()=>e("div",{children:X(_.valor_total)}),le=g=>{const P=g.reduce((q,O)=>q+(O.valor_total||0),0);b(q=>({...q,valor_total:P}))},Ce=e(ct,{children:m(ut,{children:[e(x,{footer:"Total:",colSpan:4,footerStyle:{textAlign:"right",fontWeight:"bold"}}),e(x,{footer:Se,footerStyle:{fontWeight:"bold",textAlign:"right"}}),e(x,{footer:""}),e(x,{footer:""})]})});i.useEffect(()=>{ve(),v&&V()},[v,I]);const B={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor}};return m(Ct,{children:[S&&e(Dt,{visible:S,setVisible:k,refreshTransferencias:V,viewItens:t,selectedTransferencia:y,setSelected:f}),e(Mt,{open:t,toggleOpen:h,transferencia:y}),e(nt,{}),m(_t,{children:[e(Nt,{children:e(j,{label:"Nova Transferência",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!E(qe.TRANSFERENCIAS,Ve.INCLUIR),onClick:()=>k(!0)})}),e(xt,{label:"Total Geral",value:X(Y())})]}),e(st,{model:Tt(be,l,E,h,he,ge),popup:!0,ref:U}),m(ie,{value:u,className:"p-datatable-customers",showGridlines:!0,dataKey:"sequencial",filters:N,filterDisplay:"menu",loading:A,globalFilterFields:["sequencial","empresa","data","empresa_destino","situacao","data","valor_total"],header:ye,emptyMessage:"Nenhum dado encontrado.",paginator:!0,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:M,rowsPerPageOptions:[10,20,50],footerColumnGroup:Ce,onValueChange:le,scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(x,{field:"sequencial",header:"Código",showFilterMatchModes:!1,style:{maxWidth:"6rem"},headerClassName:"header-table",bodyClassName:"cell-table",...B,sortable:!0}),e(x,{field:"empresa",header:"Loja Origem",filterMenuStyle:{width:"14rem"},style:{maxWidth:"12rem"},headerClassName:"header-table",bodyClassName:"cell-table",...B,sortable:!0}),e(x,{field:"empresa_destino",header:"Loja Destino",filterMenuStyle:{width:"14rem"},style:{maxWidth:"12rem"},headerClassName:"header-table",bodyClassName:"cell-table",...B,sortable:!0}),e(x,{field:"data",header:"Data",dataType:"date",body:xe,style:{maxWidth:"8rem"},headerClassName:"header-table",bodyClassName:"cell-table",...B,sortable:!0}),e(x,{field:"valor_total",header:"Valor",body:Q,style:{maxWidth:"4rem"},bodyClassName:"text-center",headerClassName:"header-table header-table-num",...B,sortable:!0}),e(x,{field:"situacao",header:"Situação",body:g=>e(lt,{value:g.situacao}),style:{width:"4rem"},bodyClassName:"text-center",headerClassName:"header-table",...B,sortable:!0}),e(x,{header:"Ações",headerClassName:"header-table",body:g=>e(j,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",onClick:P=>{U.current!=null&&(U.current.toggle(P),z(g)),f(g)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold"},bodyStyle:{fontSize:"12px",fontWeight:600}})]})]})}export{Gt as default};
