import{av as Ke,s as P,K as Je,g as Qe,b as ye,r as i,i as we,ag as Fe,c as Ye,h as Ae,u as Ze,j as a,a as e,M as Ve,ai as Be,ah as I,a7 as ve,a0 as qe,B as pe,aA as Le,ak as de,aH as Te,aD as We,al as Oe,d as Ne,W as ze,Y as Ie,$ as N,D as he,a2 as Se,a8 as be,E as Pe,aw as et,an as tt,ax as at,ay as ce,az as me,aB as ot,aC as rt,aE as nt,aF as it,aG as lt}from"./index-7cffcf74.js";import{I as st}from"./inputtextarea.esm-a186b3b2.js";import{u as ct}from"./clientsService-2a86ca6d.js";import{D as xe}from"./divider.esm-73291a01.js";import{u as Me,a as je}from"./caixasService-88bc5f93.js";import{C as dt}from"./CancellationDialog-f0bfaa37.js";import{F as ut}from"./FinanceiroCards-f3722aec.js";import"./finaceiroService-9884a8b3.js";const pt=Ke`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`,ht=P.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 20px;
  gap: 20px;
  animation: ${pt} 0.3s linear alternate;
  @media (min-width: 1024px) and (max-width: 1366px) {
    padding: 10px;
    gap: 10px;
  }
`,mt=P.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,gt=P.article`
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
`;function De(){const{service:n}=Je(),{getDataUser:p}=Qe(),{tokenSignature:r,storeUser:F}=ye(o=>o);return{getAllContasReceberService:()=>{var o;return n(r).get(`/contasreceber?empresa=${F}&usuario=${(o=p())==null?void 0:o.guid}`)},deleteContasReceberService:o=>{const b={empresa:F,list:o};return n(r).delete("/contasreceber",{data:b})},createNewContasReceberService:o=>{const b=Math.round(Math.random()*1e4),M={empresa:F,list:[{sequencial:0,cliente:o.cliente,data_vencimento:o.data_vencimento,valor_total:o.valor_total,categoria:o.categoria,centro_de_custo:o.centro_de_custo,competencia:o.competencia,observacao:o.observacao,CodigoExterno:b}]};return n(r).post("/contasreceber",M)},updateContasReceberService:o=>{const b={empresa:F,list:[{sequencial:o.sequencial,cliente:o.cliente,data_vencimento:o.data_vencimento,valor_total:o.valor_total,categoria:o.categoria,centro_de_custo:o.centro_de_custo,competencia:o.competencia,observacao:o.observacao,CodigoExterno:o.CodigoExterno}]};return n(r).put("/contasreceber",b)},getCategoriaContaReceberService:()=>n(r).get(`/catalogoItem/?organizacao=${p().idOrganizacao}/&sequencial=0&filtro=CAT`),getCentrodeCustoContaReceberService:()=>n(r).get(`/catalogoItem/?organizacao=${p().idOrganizacao}/&sequencial=0&filtro=CEC`),newBaixaContaReceberService:(o,b)=>{var j;const M=b==null?void 0:b.map(l=>({sequencial:l.sequencial,valor_pago:l.valor_documento,valor_multa:o.valor_multa||0,valor_juros:o.valor_juros||0,valor_desconto:o.valor_desconto||0,data_pagamento:o.data_pagamento,tipo:o.tipo,tipo_id:o.tipo_id,tipo_recebimento:o.tipo_recebimento,identificador:o.identificador})),Q={empresa:F,list:b!=null&&b.length?M:[{sequencial:o.sequencial,valor_pago:o.valor_pago,valor_multa:o.valor_multa||0,valor_juros:o.valor_juros||0,valor_desconto:o.valor_desconto||0,data_pagamento:o.data_pagamento,tipo:o.tipo,tipo_id:o.tipo_id,tipo_recebimento:o.tipo_recebimento,identificador:o.identificador}],usuario:(j=p())==null?void 0:j.guid};return n(r).post("/contasreceberbaixa",Q)},getBaixaContaReceberService:o=>n(r).get(`/contasreceberbaixa?empresa=${F}&sequencial=${o}`)}}function ft({resetField:n,setValue:p,closeModal:r,refreshListContasReceber:F}){const[te,W]=i.useState([]),[H,G]=i.useState([]),[R,ae]=i.useState([]),[O,T]=i.useState(null),[o,b]=i.useState(null),[M,Q]=i.useState(!1),[j,l]=i.useState(!1),{createNewContasReceberService:U,updateContasReceberService:$,getCategoriaContaReceberService:E,getCentrodeCustoContaReceberService:Y}=De(),{getListAllClientesNoFilterService:ie}=ct(),{openNotification:h}=we();return{verifySelectedConta:s=>{const u=["empresa","cliente","sequencial","nome","vencimento","valor_documento","categoria","centro_de_custo","competencia","observacao","CodigoExterno"];s?setTimeout(()=>{u.forEach(y=>{n(y,{keepDirty:!0,defaultValue:s[y]}),y==="vencimento"&&(n("data_vencimento",{keepDirty:!0,defaultValue:s.vencimento}),T(new Date(s.vencimento))),y==="vencimento"&&(n("data_vencimento",{keepDirty:!0,defaultValue:s.vencimento}),T(new Date(s.vencimento))),y==="competencia"&&(n("competencia",{keepDirty:!0,defaultValue:s.vencimento}),b(new Date(s.competencia))),y==="valor_documento"&&n("valor_total",{keepDirty:!0,defaultValue:s.valor_documento}),y==="observacao"&&(n("observacao",{keepDirty:!0,defaultValue:s.observacao}),p("observacao",s.observacao)),n("sequencial",{keepDirty:!0,defaultValue:s.sequencial}),p("sequencial",s.sequencial),p("CodigoExterno",s.CodigoExterno)})},1e3):u.forEach(y=>{y==="sequencial"&&n(y,{keepDirty:!0,defaultValue:0}),b(null),T(null),n(y,{keepDirty:!0,defaultValue:""})})},setDataCompetencia:b,setDataVencimento:T,getListAllClientes:()=>{ie().then(s=>W(s.data)).catch(s=>{console.error(s),h("warn","Falha ao obter lista de clientes disponíveis")})},getCategorias:()=>{E().then(s=>{G(s.data)}).catch(s=>{console.error(s),h("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},getCentroDeCusto:()=>{Y().then(s=>{ae(s.data)}).catch(s=>{console.error(s),h("warn","Falha ao obter catálogo de orgão expeditor disponíveis")})},createNewContaReceber:s=>{j||(l(!0),U(s).then(u=>{l(!1);let y=u.data[0].msg,z=u.data[0].erro;if(z&&z=="true"){h("error","Falha ao Cadastrar",`${y||"Erro ao cadastrar"}`,1e4);return}z&&z=="false"&&h("success","Sucesso",`${y||"Cadastro realizado com sucesso"}`),r(),F()}).catch(u=>{l(!1),console.warn(u),h("error","Falha ao Cadastrar",`${u.response.data.msg}`,1e4)}))},updateContaReceber:s=>{$(s).then(u=>{let y=u.data[0].msg,z=u.data[0].erro;if(z&&z=="true"){h("error","Falha ao Cadastrar",`${y||"Erro ao cadastrar"}`,1e4);return}z&&z=="false"&&h("success","Sucesso",`${y||"Cadastro realizado com sucesso"}`),r(),F()}).catch(u=>{console.error(u),h("error","Falha ao Cadastrar",`${u.response.data.msg}`,1e4)})},toggleContaReceberDialog:()=>{Q(s=>!s)},state:{dataCompetencia:o,dataVencimento:O,listCategorias:H,listClientes:te,listCentroCusto:R,openContaReceber:M}}}P.h4`
  font-weight: 700;
  font-size: 1em;
  line-height: 29px;
  color: var(--cor-tema);
`;const Ct=P.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`,bt=P.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: flex-end;
`;P.label`
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
`;P.div`
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
`;P.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  border-radius: 50%;
`;const Ee=P.section`
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
    background: ${n=>n.theme.colors.primary} !important;
    .p-button-icon {
      color: #ffffff;
    }
  }
`;P.p`
  color: #d00;
  font-size: 8px;
  width: 100%;
  text-align: right;
  padding: 3px;
`;const $e=P.form`
  display: flex;
  flex: 1;
  padding-top: 15px;
  flex-direction: column;
`,He=P.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`,Ge=P.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`,vt=P.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  & span {
    text-align: center;
    strong {
      display: block;
    }
    @media (max-width: 820px) {
      font-size: 12px;
    }
  }
  & span:nth-child(2) {
    color: #828181;
  }
  & span:nth-child(3) {
    color: #dd0000;
  }
  & span:nth-child(4) {
    color: #015405;
  }
`,_e=P.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding-top: 15px;
  flex-wrap: wrap;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`,Xe=P.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  justify-content: flex-start;
  height: 50px;
  & input[type='radio'] {
    cursor: pointer;
  }
  & input[type='radio']:checked {
    -webkit-appearance: none;
    background-color: #ffffff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 4px solid ${n=>n.theme.colors.primary};
  }
`;function xt({listHistory:n=[],setListHistory:p}){const{colors:r}=i.useContext(Fe),[F,te]=i.useState([]),{getDocument:W,loading:H}=Ye(),{havePermission:G}=Ae(),{listPhotosView:R,setListPhotosView:ae}=Ze(h=>h),[O,T]=i.useState(null),[o,b]=i.useState(!1),M=h=>a("div",{children:[Le(h.data.split("T")[0])," - ",h.data.split("T")[1]]}),Q=h=>e("div",{children:de(h.valor)}),j=h=>{const v=h.situacao;return e("div",{children:v==="PAGO"?e(Te,{severity:"success",value:"Pago"}):e(Te,{severity:"warning",value:"Pendente"})})},l=()=>{b(!0)},U=()=>{We({message:"Esta certo que deseja cancelar esta movimentação?",header:"Confirmar",icon:"pi pi-exclamation-triangle",accept:l,reject:()=>{}})};i.useEffect(()=>{n!=null&&n.length&&$(n)},[n]);const $=h=>{const v=h.map(D=>D.guid_foto),Z=new Set(v);for(let D of Z)W(D).then(oe=>{const ee={[D]:oe[0].documento},re=[...F],S=[...R];S.find(u=>u[D])||(re.push(ee),S.push(ee),te(re),ae(S))})},E=h=>{const v=h.guid_foto;F.filter(D=>D[v]);const Z=R.filter(D=>D[v]);return H?e("div",{children:"Carregando..."}):Z[0]?a(St,{children:[e("img",{width:40,height:40,src:Z[0][v],title:h.nome_usuario})," "]}):e("div",{children:h.nome_usuario})},Y=i.useRef(null);return a(yt,{children:[e(Ve,{model:[{label:"Opções",items:[{label:"Cancelar",icon:"pi pi-fw pi-times",command:h=>U()}]}],popup:!0,ref:Y}),e(dt,{openDialog:o,setOpenDialog:b,historySelected:O}),n!=null&&n.length?a(Be,{value:n||[],tableStyle:{minWidth:"50rem"},scrollable:!0,scrollHeight:"300px",showGridlines:!0,emptyMessage:"Não há histórico disponível",children:[e(I,{field:"tipo",header:"Tipo",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"}}),e(I,{field:"descricao_tipo",header:"Descrição",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"}}),e(I,{field:"data",header:"Data",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"},body:M}),e(I,{field:"identificador",header:"Identificador",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"}}),e(I,{field:"valor",header:"Valor",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"},body:Q}),e(I,{field:"situacao",header:"Situação",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"},body:j}),e(I,{field:"nome_usuario",header:"Usuário",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"},body:E}),G(ve.CONTAS_A_RECEBER,qe.CANCELAR)&&e(I,{header:"Ações",headerClassName:"header-table",body:h=>e(pe,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:v=>{console.log(h),T(h),Y.current!=null&&Y.current.toggle(v)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:r.backgroundColor,color:r.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:r.backgroundColor,color:r.textColor,height:"20px"}})]}):null]})}const yt=P.section`
  width: 100%;
  min-heigth: 100px;
  max-heigth: 250px;
  overflow-y: auto;
`,St=P.div`
  width: 100%;
  display: flex;
  justifycontent: center;
  cursor: pointer;
  & img {
    border-radius: 50%;
    object-fit: contain;
  }
`;function Ue({visible:n,contaReceber:p,toggleReceberDialog:r}){const{tokenSignature:F,storeUser:te}=ye(t=>t),[W,H]=i.useState(new Date),[G,R]=i.useState("CAIXA"),[ae,O]=i.useState(!1),[T,o]=i.useState([]),[b,M]=i.useState([]),[Q,j]=i.useState([]),[l,U]=i.useState(),[$,E]=i.useState([]),{getAllContaCorrenteService:Y}=Me(),{getFormaPagamentoService:ie}=Oe(),{getAllCaixaService:h}=je(),{openNotification:v}=we(),{getBaixaContaReceberService:Z,newBaixaContaReceberService:D}=De(),{setRefreshListContasPagar:oe,refreshListContasPagar:ee}=Ne(t=>t),{register:re,formState:{errors:S},handleSubmit:s,control:u,setValue:y,reset:z,watch:f}=ze({defaultValues:{sequencial:p.sequencial,tipo:"CAIXA",tipo_recebimento:"DIN",data_pagamento:W==null?void 0:W.toISOString()},reValidateMode:"onChange"}),K=()=>{z(),E([]),r(),ee()},C=f("valor_pago"),k=async t=>{O(!0);const g=new Date(t.data_pagamento).setHours(new Date().getHours()-3,new Date().getMinutes());if((l==null?void 0:l.valor_em_aberto)<C){O(!1),v("warn","Valor inválido","O Valor informado deve ser menor ou igual ao Valor em Aberto.");return}D({...t,data_pagamento:new Date(g).toISOString()}).then(m=>{let _=m.data[0].msg,B=m.data[0].erro;if(B&&B=="true"){v("error","Falha ao Cadastrar",`${_||"Erro ao cadastrar"}`,1e4);return}B&&B=="false"&&v("success","Sucesso",`${_||"Cadastro realizado com sucesso"}`),z(),y("identificador",""),R("CAIXA"),ne()}).catch(m=>{console.warn(m),v("error","Falha ao Cadastrar","",1e4)}).finally(()=>O(!1))},ne=()=>{Z(p.sequencial).then(t=>{if(t.data[0].historico){const g=JSON.parse(t.data[0].historico);E([]),setTimeout(()=>{E(g)},1e3)}U(t.data[0])}).catch(t=>{console.warn(t),v("warn","Falha","Não foi possivel obter informações desta movimentação")})},le=()=>{h().then(t=>{M(t.data)}).catch(t=>{console.warn(t),v("warn","Falha","Não foi possivel obter lista de caixas disponíveis")})},c=()=>{Y().then(t=>{o(t.data)}).catch(t=>{console.warn(t),v("warn","Falha","Não foi possivel obter lista de contas disponíveis")})},V=()=>{ie().then(t=>{j(t.data)}).catch(()=>{v("warn","Falha","Não foi possivel obter lista de formas de pagamento disponíveis")})};i.useEffect(()=>{F&&n&&(le(),c(),V())},[F,n]),i.useEffect(()=>{p&&(ne(),y("sequencial",p.sequencial))},[p]);const x=a(Ge,{children:["Receber - ",p.sequencial," ",e("span",{children:e(Te,{severity:"info",value:(l==null?void 0:l.situacao)||p.situacao,style:{padding:"10px"}})})]});return a(Ie,{visible:n,onHide:K,header:x,style:{minWidth:"70vw",minHeight:"50vh"},maximizable:!0,children:[a(vt,{children:[a("span",{children:[e("strong",{children:"Vencimento: "}),e("strong",{children:Le(p.vencimento.split("T")[0])})]}),a("span",{children:[e("strong",{children:"Valor Total: "}),e("strong",{children:de(p.valor_documento)})]}),a("span",{children:[e("strong",{children:"Valor em Aberto:"}),e("strong",{children:isNaN(l==null?void 0:l.valor_em_aberto)?de(0):de(l==null?void 0:l.valor_em_aberto)})]}),a("span",{children:[e("strong",{children:"Valor Pago: "}),e("strong",{children:isNaN(l==null?void 0:l.valor_pago)?de(0):de(l==null?void 0:l.valor_pago)})]}),l!=null&&l.valor_desconto?a("span",{children:[e("strong",{children:"Valor Desconto: "}),e("strong",{children:de(l==null?void 0:l.valor_desconto)})]}):null]}),a($e,{onSubmit:s(k),children:[e(xe,{align:"left",children:"Tipo de Conta"}),e(N,{name:"tipo",control:u,rules:{required:!0},render:({field:{value:t,onChange:g}})=>a(Xe,{children:[e("input",{type:"radio",value:"CAIXA",name:"tipo",id:"caixa",onChange:m=>{R(m.target.value),g(m.target.value)},checked:t==="CAIXA"}),e("label",{htmlFor:"caixa",children:"Caixa"}),e("input",{type:"radio",value:"CONTA-CORRENTE",name:"tipo",id:"conta",onChange:m=>{R(m.target.value),g(m.target.value)},checked:t==="CONTA-CORRENTE"}),e("label",{htmlFor:"conta",children:"Conta Corrente"})]})}),e(xe,{align:"left",children:"Recebimento"}),a(_e,{children:[G==="CAIXA"?e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(he,{id:"caixa",value:m,filter:!0,optionLabel:"codigo_descricao",optionValue:"caixa",options:b,style:{width:"100%",height:"35px"},placeholder:"Caixa",onChange:q=>t(q.value),emptyMessage:"Nenhum resultado disponível",className:((w=S.tipo_id)==null?void 0:w.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"caixa",children:["Caixa",e("span",{children:"*"})]})]})},name:"tipo_id",control:u,rules:{required:!0}}):e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"150px",fontSize:"12px"},children:[e(he,{id:"conta_corrente",value:m,filter:!0,optionLabel:"nome",optionValue:"conta_corrente",options:T,style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Conta Corrente",onChange:q=>t(q.value),emptyMessage:"Nenhum resultado disponível",className:((w=S.tipo_id)==null?void 0:w.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"conta_corrente",children:["Conta Corrente",e("span",{children:"*"})]})]})},name:"tipo_id",control:u,rules:{required:!0}}),e(N,{name:"data_pagamento",control:u,rules:{required:!0},render:({field:t,fieldState:g})=>{var m;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"120px",fontSize:"12px"},children:[e(Se,{...re("data_pagamento",{required:!0}),value:W,mask:"99/99/9999",onChange:_=>{t.onChange(new Date(_.value).toISOString()),H(_.value)},dateFormat:"dd/mm/yy",view:"date",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},maxDate:new Date,placeholder:"Data Pagamento",inputId:"data_pagamento",className:((m=S.data_pagamento)==null?void 0:m.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data_pagamento",children:"Data"})]})}}),e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"200px",fontSize:"12px"},children:[e(he,{id:"tipo_recebimento",value:m,optionLabel:"descricao",optionValue:"tipo",options:Q.map(q=>({...q,descricao:`${q.tipo} - ${q.descricao}`})),style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Forma de Pagamento",onChange:q=>t(q.value),emptyMessage:"Nenhum resultado disponível",className:((w=S.tipo_recebimento)==null?void 0:w.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"tipo_recebimento",children:["Forma de Pagamento",e("span",{children:"*"})]})]})},name:"tipo_recebimento",control:u,rules:{required:!0}}),e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(be,{value:m,onChange:q=>t(q.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px",fontSize:"12px"},className:((w=S.valor_pago)==null?void 0:w.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"valor_pago",children:["Valor",e("span",{children:"*"})]})]})},name:"valor_pago",control:u,rules:{required:!0}})]}),a(_e,{children:[e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(be,{value:m,onChange:q=>t(q.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((w=S.valor_multa)==null?void 0:w.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_multa",children:"Multa"})]})},name:"valor_multa",control:u,rules:{required:!1}}),e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(be,{value:m,onChange:q=>t(q.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((w=S.valor_juros)==null?void 0:w.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_juros",children:"Juros"})]})},name:"valor_juros",control:u,rules:{required:!1}}),e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(be,{value:m,onChange:q=>t(q.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((w=S.valor_desconto)==null?void 0:w.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_desconto",children:"Desconto"})]})},name:"valor_desconto",control:u,rules:{required:!1}}),e(N,{render:({field:{onChange:t,onBlur:g,value:m,name:_,ref:B},fieldState:{invalid:J,isTouched:A,isDirty:L,error:ue}})=>{var w;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(Pe,{value:m,onChange:q=>t(q.target.value),style:{width:"100%",height:"35px"},className:((w=S.identificador)==null?void 0:w.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"identificador",children:["Identificador",e("span",{children:"*"})]})]})},name:"identificador",control:u,rules:{required:!0}})]}),e(He,{children:e(pe,{label:"Baixa",loading:ae,icon:"pi pi-dollar",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.warn(S),disabled:p.situacao==="PAGO"||(l==null?void 0:l.situacao)==="PAGO"})})]}),e(xe,{align:"left",children:"Histórico de Recebimentos"}),e(xt,{listHistory:$,setListHistory:E})]})}function _t({visible:n,selecionedConta:p,toggleContasReceber:r,refreshListContasReceber:F,setSelecionedConta:te}){const{colors:W}=i.useContext(Fe),{register:H,handleSubmit:G,formState:{errors:R},reset:ae,resetField:O,control:T,setValue:o}=ze(),b=i.useRef(null),{tokenSignature:M,storeUser:Q}=ye(f=>f),j=()=>{$(null),U(null),te(null),ae(),r()},{verifySelectedConta:l,setDataVencimento:U,setDataCompetencia:$,getListAllClientes:E,getCentroDeCusto:Y,getCategorias:ie,createNewContaReceber:h,updateContaReceber:v,toggleContaReceberDialog:Z,state:D}=ft({resetField:O,setValue:o,closeModal:j,refreshListContasReceber:F}),{havePermission:oe}=Ae(),{formClientes:ee,setRefreshListClients:re}=Ne(f=>f),S=async f=>{h(f)},s=async f=>{v(f)},u=a("div",{style:{display:"flex",justifyContent:"space-between"},children:[e("h5",{style:{display:"flex",gap:"10px"},children:p?"Informações Conta a Receber":"Nova Conta a Receber"}),e("i",{className:"pi pi-times",style:{cursor:"pointer"},onClick:()=>j()})]}),y=()=>j(),z=f=>a("div",{children:[e("p",{children:"Nenhum resultado encontrado"}),oe(ve.CLIENTE,qe.INCLUIR)&&e(pe,{label:"Cadastrar Novo",icon:"pi pi-plus",style:{display:"flex",gap:"5px",backgroundColor:W.primary},onClick:()=>ee()})]});return i.useLayoutEffect(()=>{l(p)},[p,n]),i.useEffect(()=>(M&&(E(),ie(),Y(),re(E)),window.addEventListener("keydown",f=>{var C;f.key==="Enter"&&(f.preventDefault(),b.current!==null&&((C=b.current)==null||C.click()))}),()=>{window.removeEventListener("keydown",()=>{})}),[M,Q]),a(Ie,{visible:n,position:"center",onHide:y,closable:!1,breakpoints:{"960px":"75vw","640px":"100vw"},header:u,children:[a(Ct,{onSubmit:G(p?s:S),children:[a(Ee,{style:{paddingTop:"15px"},children:[p&&e(N,{render:({field:{onChange:f,onBlur:K,value:C,name:k,ref:ne},fieldState:{invalid:le,isTouched:c,isDirty:V,error:x}})=>{var t;return a("span",{className:"p-float-label",style:{width:"10%"},children:[e(Pe,{id:"id",style:{width:"100%"},value:String(C),...H("sequencial"),disabled:!0,className:((t=R.sequencial)==null?void 0:t.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"sequencial",children:"Código"})]})},name:"sequencial",control:T,rules:{required:!1}}),e(N,{name:"cliente",control:T,rules:{required:!0},render:({field:f,fieldState:K})=>{var C;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px",minWidth:"100px"},children:[e(he,{autoFocus:!0,value:f.value,optionLabel:"nome",optionValue:"cliente",placeholder:"Selecione o Cliente",name:"cliente",options:D.listClientes.map(k=>({...k,filterBy:k.cliente+k.cpf_cnpj+k.nome})),filter:!0,filterBy:"filterBy",emptyFilterMessage:z,onChange:k=>{f.onChange(k.value)},className:((C=R.cliente)==null?void 0:C.type)==="required"?"p-invalid":"",style:{fontSize:"12px",height:"35px",width:"100%"}}),a("label",{htmlFor:"uf",children:["Cliente",e("span",{children:"*"})]})]})}}),e(N,{name:"data_vencimento",control:T,rules:{required:!0},render:({field:f,fieldState:K})=>{var C;return a("span",{className:"p-float-label",style:{flex:1},children:[e(Se,{value:D.dataVencimento,mask:"99/99/9999",onChange:k=>{f.onChange(new Date(k.value).toISOString()),U(k.value)},dateFormat:"dd/mm/yy",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Data de Nascimento",inputId:"data_nascimento",className:((C=R.data_vencimento)==null?void 0:C.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data_vencimento",children:"Data de Vencimento"})]})}}),e(N,{render:({field:{onChange:f,onBlur:K,value:C,name:k,ref:ne},fieldState:{invalid:le,isTouched:c,isDirty:V,error:x}})=>{var t;return a("span",{className:"p-float-label",style:{flex:1},children:[e(be,{value:C,onChange:g=>f(g.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"36px"},className:((t=R.valor_total)==null?void 0:t.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"venda_minima",children:["Valor Total (R$)",e("span",{children:"*"})]})]})},name:"valor_total",control:T,rules:{required:!0}})]}),a(Ee,{children:[e(N,{render:({field:{onChange:f,onBlur:K,value:C,name:k,ref:ne},fieldState:{invalid:le,isTouched:c,isDirty:V,error:x}})=>{var t;return a("span",{className:"p-float-label",style:{flex:1},children:[e(he,{id:"categoria",value:C,optionLabel:"descricao",optionValue:"id",options:D.listCategorias,style:{width:"100%"},placeholder:"Categoria",onChange:g=>f(g.value),className:((t=R.categoria)==null?void 0:t.type)==="required"?"p-invalid":"",optionDisabled:g=>!g.ativo}),a("label",{htmlFor:"categoria",children:["Categoria",e("span",{children:"*"})]})]})},name:"categoria",control:T,rules:{required:!0}}),e(N,{render:({field:{onChange:f,onBlur:K,value:C,name:k,ref:ne},fieldState:{invalid:le,isTouched:c,isDirty:V,error:x}})=>{var t;return a("span",{className:"p-float-label",style:{flex:1},children:[e(he,{id:"centro_de_custo",value:C,optionLabel:"descricao",optionValue:"id",options:D.listCentroCusto,style:{width:"100%"},placeholder:"Medida Base",onChange:g=>f(g.value),className:((t=R.centro_de_custo)==null?void 0:t.type)==="required"?"p-invalid":"",optionDisabled:g=>!g.ativo}),a("label",{htmlFor:"centro_de_custo",children:["Centro de Custo",e("span",{children:"*"})]})]})},name:"centro_de_custo",control:T,rules:{required:!0}}),e(N,{name:"competencia",control:T,rules:{required:!0},render:({field:f,fieldState:K})=>{var C;return a("span",{className:"p-float-label",style:{flex:1},children:[e(Se,{...H("competencia",{required:!0}),value:D.dataCompetencia,mask:"99/9999",onChange:k=>{f.onChange(new Date(k.value).toISOString()),$(k.value)},dateFormat:"mm/yy",view:"month",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},placeholder:"Competência",inputId:"competencia",className:((C=R.competencia)==null?void 0:C.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"competencia",children:["Competência",e("span",{children:"*"})]})]})}}),e(N,{render:({field:{onChange:f,onBlur:K,value:C,name:k,ref:ne},fieldState:{invalid:le,isTouched:c,isDirty:V,error:x}})=>{var t;return a("span",{className:"p-float-label",style:{width:"100%"},children:[e(st,{id:"observacao",maxLength:255,style:{width:"100%",fontSize:"12px"},...H("observacao"),value:C,onChange:f,className:((t=R.observacao)==null?void 0:t.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"observacao",children:"Observações"})]})},name:"observacao",control:T,rules:{required:!1}})]}),a(bt,{children:[p&&e(pe,{type:"button",label:"Baixa",icon:"pi pi-dollar",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},onClick:Z}),e(pe,{label:"Salvar",ref:b,icon:"pi pi-check",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(R),disabled:p?p&&!oe(1015,5):!1})]})]}),p&&e(Ue,{contaReceber:p,visible:D.openContaReceber,toggleReceberDialog:Z})]})}function wt({visible:n,contasReceber:p,toggleContaPagarLoteDialog:r,refreshList:F,setListContas:te}){const{tokenSignature:W,storeUser:H}=ye(c=>c),[G,R]=i.useState(new Date),[ae,O]=i.useState("CAIXA"),[T,o]=i.useState(!1),[b,M]=i.useState([]),[Q,j]=i.useState([]),[l,U]=i.useState([]);i.useState();const[$,E]=i.useState([]),{getAllContaCorrenteService:Y}=Me(),{getFormaPagamentoService:ie}=Oe(),{getAllCaixaService:h}=je(),{openNotification:v}=we(),{getBaixaContaReceberService:Z,newBaixaContaReceberService:D}=De(),{setRefreshListContasPagar:oe,refreshListContasPagar:ee}=Ne(c=>c),{register:re,formState:{errors:S},handleSubmit:s,control:u,setValue:y,reset:z}=ze({defaultValues:{sequencial:0,tipo:"CAIXA",tipo_recebimento:"DIN",valor_multa:0,valor_desconto:0,data_pagamento:G==null?void 0:G.toISOString(),valor_juros:0,identificador:""},reValidateMode:"onChange"}),f=()=>{z(),E([]),r(),ee()},K=async c=>{o(!0);const V=new Date(c.data_pagamento).setHours(new Date().getHours()-3,new Date().getMinutes());D({...c,data_pagamento:new Date(V).toISOString()},p).then(x=>{let t=x.data[0].msg,g=x.data[0].erro;if(g&&g=="true"){v("error","Falha ao Cadastrar",`${t||"Erro ao cadastrar"}`,1e4);return}g&&g=="false"&&v("success","Sucesso",`${t||"Cadastro realizado com sucesso"}`),z(),y("valor_juros",0),y("identificador",""),O("CAIXA"),F();const m=document.getElementsByTagName("input");for(let _ of m)_.checked=!1;te([]),setTimeout(()=>{r()},1500)}).catch(x=>{console.warn(x),v("error","Falha ao Cadastrar","",1e4)}).finally(()=>o(!1))},C=()=>{h().then(c=>{console.log(c.data),j(c.data)}).catch(c=>{console.warn(c),v("warn","Falha","Não foi possivel obter lista de caixas disponíveis")})},k=()=>{Y().then(c=>{console.log(c.data),M(c.data)}).catch(c=>{console.warn(c),v("warn","Falha","Não foi possivel obter lista de contas disponíveis")})},ne=()=>{ie().then(c=>{U(c.data)}).catch(()=>{v("warn","Falha","Não foi possivel obter lista de formas de pagamento disponíveis")})};i.useEffect(()=>{W&&n&&(C(),k(),ne())},[W,n]);const le=a(Ge,{children:["Receber -"," ",p.map(c=>c.sequencial).sort().join(", ")]});return e(Ie,{visible:n,onHide:f,header:le,style:{minWidth:"70vw",minHeight:"50vh"},maximizable:!0,children:a($e,{onSubmit:s(K),children:[e(xe,{align:"left",children:"Tipo de Conta"}),e(N,{name:"tipo",control:u,rules:{required:!0},render:({field:{value:c,onChange:V}})=>a(Xe,{children:[e("input",{type:"radio",value:"CAIXA",name:"tipo",id:"caixa",onChange:x=>{O(x.target.value),V(x.target.value)},checked:c==="CAIXA"}),e("label",{htmlFor:"caixa",children:"Caixa"}),e("input",{type:"radio",value:"CONTA-CORRENTE",name:"tipo",id:"conta",onChange:x=>{O(x.target.value),V(x.target.value)},checked:c==="CONTA-CORRENTE"}),e("label",{htmlFor:"conta",children:"Conta Corrente"})]})}),e(xe,{align:"left",children:"Recebimento"}),a(_e,{children:[ae==="CAIXA"?e(N,{render:({field:{onChange:c,onBlur:V,value:x,name:t,ref:g},fieldState:{invalid:m,isTouched:_,isDirty:B,error:J}})=>{var A;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(he,{id:"caixa",value:x,filter:!0,optionLabel:"codigo_descricao",optionValue:"caixa",options:Q,style:{width:"100%",height:"35px"},placeholder:"Caixa",onChange:L=>c(L.value),emptyMessage:"Nenhum resultado disponível",className:((A=S.tipo_id)==null?void 0:A.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"caixa",children:["Caixa",e("span",{children:"*"})]})]})},name:"tipo_id",control:u,rules:{required:!0}}):e(N,{render:({field:{onChange:c,onBlur:V,value:x,name:t,ref:g},fieldState:{invalid:m,isTouched:_,isDirty:B,error:J}})=>{var A;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"150px",fontSize:"12px"},children:[e(he,{id:"conta_corrente",value:x,filter:!0,optionLabel:"nome",optionValue:"conta_corrente",options:b,style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Conta Corrente",onChange:L=>c(L.value),emptyMessage:"Nenhum resultado disponível",className:((A=S.tipo_id)==null?void 0:A.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"conta_corrente",children:["Conta Corrente",e("span",{children:"*"})]})]})},name:"tipo_id",control:u,rules:{required:!0}}),e(N,{name:"data_pagamento",control:u,rules:{required:!0},render:({field:c,fieldState:V})=>{var x;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"120px",fontSize:"12px"},children:[e(Se,{...re("data_pagamento",{required:!0}),value:G,mask:"99/99/9999",onChange:t=>{c.onChange(new Date(t.value).toISOString()),R(t.value)},dateFormat:"dd/mm/yy",view:"date",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},maxDate:new Date,placeholder:"Data Pagamento",inputId:"data_pagamento",className:((x=S.data_pagamento)==null?void 0:x.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data_pagamento",children:"Data"})]})}}),e(N,{render:({field:{onChange:c,onBlur:V,value:x,name:t,ref:g},fieldState:{invalid:m,isTouched:_,isDirty:B,error:J}})=>{var A;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"200px",fontSize:"12px"},children:[e(he,{id:"tipo_recebimento",value:x,optionLabel:"descricao",optionValue:"tipo",options:l.map(L=>({...L,descricao:`${L.tipo} - ${L.descricao}`})),style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Forma de Pagamento",onChange:L=>c(L.value),emptyMessage:"Nenhum resultado disponível",className:((A=S.tipo_recebimento)==null?void 0:A.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"tipo_recebimento",children:["Forma de Pagamento",e("span",{children:"*"})]})]})},name:"tipo_recebimento",control:u,rules:{required:!0}})]}),e(_e,{children:e(N,{render:({field:{onChange:c,onBlur:V,value:x,name:t,ref:g},fieldState:{invalid:m,isTouched:_,isDirty:B,error:J}})=>{var A;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(Pe,{value:x||"",onChange:L=>c(L.target.value),style:{width:"100%",height:"35px"},className:((A=S.identificador)==null?void 0:A.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"identificador",children:["Identificador",e("span",{children:"*"})]})]})},name:"identificador",control:u,rules:{required:!0}})}),e(He,{children:e(pe,{label:"Baixa",loading:T,icon:"pi pi-dollar",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(S)})})]})})}function Lt(){const{colors:n}=i.useContext(Fe),[p,r]=i.useState(),[F,te]=i.useState(""),[W,H]=i.useState(!1),[G,R]=i.useState(10),[ae,O]=i.useState(!1),[T,o]=i.useState(!1),[b,M]=i.useState([]),[Q,j]=i.useState({valor_total:0}),[l,U]=i.useState([]),[$,E]=i.useState(null),[Y,ie]=i.useState(!1),{tokenSignature:h,storeUser:v}=ye(d=>d),{getAllContasReceberService:Z,deleteContasReceberService:D}=De(),{havePermission:oe}=Ae(),{openNotification:ee}=we(),{setRefreshListContasPagar:re}=Ne(d=>d),S=()=>O(d=>!d),s=()=>{o(d=>!d)},u=()=>{ie(d=>!d)},y=d=>{const X=d.target.value;let se={...p};se.global.value=X,r(se),te(X)},z=()=>{r({global:{value:null,matchMode:ce.CONTAINS},empresa:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},sequencial:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},razao_social:{value:null,matchMode:ce.IN},ativo:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},vencimento:{operator:me.AND,constraints:[{value:null,matchMode:ce.CONTAINS}]},valor_documento:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},situacao:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},entrada:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]},nota_fiscal:{operator:me.AND,constraints:[{value:null,matchMode:ce.STARTS_WITH}]}}),te("")};i.useEffect(()=>{z(),re(C),h&&C()},[h,v]);const f=d=>Le(d.vencimento.split("T")[0]),K=d=>e("div",{className:"cell-num",children:de(d.valor_documento)}),C=()=>{H(!0),Z().then(d=>{M(d.data),J(d.data),H(!1)}).catch(d=>{ee("warn","Falha ao obter lista de contas a receber disponíveis"),console.error(d)}).finally(()=>H(!1))},{listModuleFilters:k,operatorsFilters:ne,createFilter:le,loading:c,clearFilter:V,haveApplyFilters:x}=et({module:ve.CONTAS_A_RECEBER,refreshList:C}),t=()=>{We({message:"Você está certo que deseja apagar o registro selecionado ?",header:"Confirmar",icon:"pi pi-exclamation-triangle",rejectLabel:"Cancelar",acceptLabel:"Sim",acceptClassName:"red",accept:()=>g(),reject:()=>null})},g=()=>{D([{sequencial:$==null?void 0:$.sequencial}]).then(d=>{let X=d.data[0].msg;ee("success","Sucesso",`${X||""}`),E(null),C();const se=document.getElementsByTagName("input");for(let Ce of se)Ce.checked=!1}).catch(d=>{console.error(d),ee("error","Falha na execução",`${d.response.data.msg}`,1e4)})},m=(d,X)=>{const se=X.target.checked;let Ce=d.sequencial,ge=l;if(se){ge==null||ge.push({sequencial:+Ce,valor_documento:d.valor_documento});let ke=ge.filter(Re=>Re.sequencial!=0);U(ke)}else{let ke=ge==null?void 0:ge.filter(Re=>Re.sequencial!=+Ce);U(ke)}},_=i.useRef(null),B=[{label:"Opções",items:[{label:"Visualizar",icon:"pi pi-fw pi-eye",command:d=>S()},{label:"Excluir",icon:"pi pi-fw pi-trash",command:d=>t(),disabled:!oe(6010,6)},{label:"Baixa",icon:"pi pi-fw pi-dollar",command:d=>s()}]}],J=d=>{const X=d.reduce((se,Ce)=>se+(Ce.valor_documento||0),0);j(se=>({...se,valor_total:X}))},A=()=>b.length?b.reduce((d,X)=>d+(X.valor_documento||0),0):0,ue=e(ot,{children:a(rt,{children:[e(I,{footer:"Total:",colSpan:4,footerStyle:{textAlign:"right",fontWeight:"bold"}}),e(I,{footer:()=>e("div",{children:de(Q.valor_total)}),footerStyle:{fontWeight:"bold",textAlign:"right"}}),e(I,{footer:""}),e(I,{footer:""})]})}),q=(()=>a(nt,{children:[e(it,{listModuleFilters:k,operatorsFilters:ne,setFilters:le,loading:c,clearFilter:V,haveApplyFilters:x}),a("span",{className:"p-input-icon-left",style:{height:"30px"},children:[e("i",{className:"pi pi-search"}),e(lt,{value:F,onChange:y,placeholder:"Buscar"})]})]}))(),fe={headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:n.backgroundColor,color:n.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:n.backgroundColor,color:n.textColor}};return a(ht,{children:[e(tt,{}),e(_t,{visible:ae,toggleContasReceber:S,refreshListContasReceber:C,selecionedConta:$,setSelecionedConta:E}),a(mt,{children:[a(gt,{children:[e(pe,{label:"Nova Conta a Receber",icon:"pi pi-plus-circle",iconPos:"left",className:"p-button-primary new-btn",disabled:!oe(ve.CONTAS_A_RECEBER,qe.INCLUIR),onClick:()=>{E(null),S()}}),e(pe,{label:"Baixa em Lote",className:"p-button-danger",icon:"pi pi-dollar",iconPos:"left",onClick:()=>u(),disabled:!l.length||!oe(ve.CONTAS_A_RECEBER,4),style:{gap:"10px",borderColor:"#c1c1c1",fontSize:"12px",backgroundColor:"var(--color-in-menu)"}})]}),e(ut,{label:"Total Geral",value:de(A())})]}),e(Ve,{model:B,popup:!0,ref:_}),a(Be,{value:b,className:"p-datatable-customers",showGridlines:!0,dataKey:"id",filters:p,filterDisplay:"menu",loading:W,globalFilterFields:["empresa","sequencial","razao_social","vencimento","valor_documento","situacao","entrada","nota_fiscal"],header:q,emptyMessage:"Nenhum dado encontrado.",paginator:!0,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",currentPageReportTemplate:"Mostrando {first} / {last} de {totalRecords}",rows:G,rowsPerPageOptions:[10,20,50],footerColumnGroup:ue,onValueChange:J,scrollable:!0,scrollHeight:"58vh",removableSort:!0,children:[e(I,{headerClassName:"header-table",bodyClassName:"cell-table",headerStyle:{width:"2em",backgroundColor:n.backgroundColor,color:n.textColor},bodyStyle:{backgroundColor:n.backgroundColor,color:n.textColor,height:"20px"},body:d=>e("input",{type:"checkbox",onChange:X=>m(d,X),disabled:d.situacao==="LIQUIDADO"})}),e(I,{field:"sequencial",header:"Código",showFilterMatchModes:!1,headerClassName:"header-table",bodyClassName:"cell-table",...fe,sortable:!0}),e(I,{field:"nome",header:"Nome",filterMenuStyle:{width:"14rem"},headerClassName:"header-table",bodyClassName:"cell-table",style:{maxWidth:"200px"},...fe,sortable:!0}),e(I,{field:"vencimento",header:"Vencimento",dataType:"date",body:f,headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"50px"},...fe,sortable:!0}),e(I,{field:"valor_documento",header:"Valor",body:K,bodyClassName:"text-center cell-table",headerClassName:"header-table header-table-num",style:{width:"3rem"},...fe,sortable:!0}),e(I,{field:"situacao",header:"Situação",dataType:"text",body:d=>e(at,{value:d.situacao}),headerClassName:"header-table",bodyClassName:"cell-table",style:{width:"50px"},...fe,sortable:!0}),e(I,{header:"Ações",headerClassName:"header-table",body:d=>e(pe,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:X=>{_.current!=null&&_.current.toggle(X),E(d)}}),style:{width:"1rem"},...fe})]}),$&&e(Ue,{contaReceber:$,visible:T,toggleReceberDialog:s}),l&&e(wt,{contasReceber:l,visible:Y,toggleContaPagarLoteDialog:u,refreshList:C,setListContas:U})]})}export{Lt as default};
