import{s as v,r as d,ag as ge,c as xe,h as Ce,u as be,j as a,a as e,M as ye,ai as ve,ah as y,a7 as Se,a0 as _e,B as ne,aA as ie,ak as T,aH as K,aD as we,b as ke,al as Ne,i as De,d as ze,W as Ae,Y as Fe,$ as C,D as J,a2 as Te,a8 as I,E as qe}from"./index-7cffcf74.js";import{D as Y}from"./divider.esm-73291a01.js";import{u as We,a as Pe}from"./caixasService-88bc5f93.js";import{C as Ie}from"./CancellationDialog-f0bfaa37.js";import{u as Le}from"./contasPagarService-ecf87c9d.js";const Ve=v.form`
  display: flex;
  flex: 1;
  padding-top: 15px;
  flex-direction: column;
`,Re=v.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`,Oe=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
`,Ee=v.section`
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
`,re=v.div`
  display: flex;
  width: 100%;
  gap: 10px;
  padding-top: 15px;
  flex-wrap: wrap;
  @media (max-width: 820px) {
    flex-direction: column;
  }
`,je=v.div`
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
    border: 4px solid ${c=>c.theme.colors.primary};
  }
`;function Me({listHistory:c=[]}){const{colors:t}=d.useContext(ge),[L,q]=d.useState({}),[Q,D]=d.useState(null),[V,W]=d.useState(!1),{getDocument:z,loading:R}=xe(),{havePermission:A}=Ce(),{listPhotosView:P,setListPhotosView:O}=be(l=>l),E=l=>a("div",{children:[ie(l.data.split("T")[0])," - ",l.data.split("T")[1]]}),j=l=>e("div",{children:T(l.valor)}),M=l=>{const g=l.situacao;return e("div",{children:g==="PAGO"?e(K,{severity:"success",value:"Pago"}):e(K,{severity:"warning",value:"Pendente"})})};d.useEffect(()=>{c!=null&&c.length&&B(c)},[c]);const B=l=>{const g=l.map(b=>b.guid_foto),h=new Set(g);for(let b of h)z(b).then($=>{const H={[b]:$[0].documento},U=[...L],F=[...P];F.find(f=>f[b])||(U.push(H),F.push(H),q(U),O(F))})},n=l=>{const g=l.guid_foto,h=P.filter(b=>b[g]);return R?e("div",{children:"Carregando..."}):h[0]?a(Ge,{style:{width:"100%"},children:[e("img",{width:40,height:40,src:h[0][g],title:l.nome_usuario})," "]}):e("div",{children:l.nome_usuario})},G=()=>{W(!0)},X=()=>{we({message:"Esta certo que deseja cancelar esta movimentação?",header:"Confirmar",icon:"pi pi-exclamation-triangle",accept:G,reject:()=>{}})},S=d.useRef(null);return a(Be,{children:[e(ye,{model:[{label:"Opções",items:[{label:"Cancelar",icon:"pi pi-fw pi-times",command:l=>X()}]}],popup:!0,ref:S}),e(Ie,{openDialog:V,setOpenDialog:W,historySelected:Q}),c!=null&&c.length?a(ve,{value:c||[],tableStyle:{minWidth:"50rem"},scrollable:!0,scrollHeight:"300px",showGridlines:!0,emptyMessage:"Não há histórico disponível",children:[e(y,{field:"tipo",header:"Tipo",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"}}),e(y,{field:"descricao_tipo",header:"Descrição",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"}}),e(y,{field:"data",header:"Data",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},body:E}),e(y,{field:"identificador",header:"Identificador",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"}}),e(y,{field:"valor",header:"Valor",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},body:j}),e(y,{field:"situacao",header:"Situação",headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},body:M}),e(y,{field:"nome_usuario",header:"Usuário",style:{minWidth:"80px"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"},body:n}),A(Se.CONTAS_A_PAGAR,_e.CANCELAR)&&e(y,{header:"Ações",headerClassName:"header-table",body:l=>e(ne,{label:"",icon:"pi pi-ellipsis-v",className:"p-button-text",style:{padding:0},onClick:g=>{console.log(l),D(l),S.current!=null&&S.current.toggle(g)}}),style:{width:"1rem"},headerStyle:{fontSize:"14px",fontWeight:"bold",backgroundColor:t.backgroundColor,color:t.textColor},bodyStyle:{fontSize:"12px",fontWeight:600,backgroundColor:t.backgroundColor,color:t.textColor,height:"20px"}})]}):null]})}const Be=v.section`
  width: 100%;
  min-heigth: 100px;
  max-heigth: 250px;
  overflow-y: auto;
`,Ge=v.div`
  display: flex;
  justifycontent: center;
  padding-left: 20px;
  cursor: pointer;
  & img {
    border-radius: 50%;
    object-fit: contain;
  }
`;function Ye({visible:c,contaPagar:t,togglePagarDialog:L}){const{tokenSignature:q,storeUser:Q}=ke(o=>o),[D,V]=d.useState(new Date),[W,z]=d.useState("CAIXA"),[R,A]=d.useState(!1),[P,O]=d.useState([]),[E,j]=d.useState([]),[M,B]=d.useState([]),[n,G]=d.useState(),[X,S]=d.useState([]),{getAllContaCorrenteService:Z}=We(),{getFormaPagamentoService:l}=Ne(),{getAllCaixaService:g}=Pe(),{openNotification:h}=De(),{getBaixaContaPagarService:b,newBaixaContaPagarService:$}=Le(),{formContasPagar:H,setRefreshListContasPagar:U,refreshListContasPagar:F}=ze(o=>o),{register:ee,formState:{errors:f},handleSubmit:le,control:x,setValue:oe,reset:te,watch:se}=Ae({defaultValues:{sequencial:t.sequencial,tipo:"CAIXA",tipo_recebimento:"DIN",data_pagamento:D==null?void 0:D.toISOString()},reValidateMode:"onChange"}),de=()=>{te(),L(),S([]),F()},ce=se("valor_pago"),ue=async o=>{A(!0);const u=new Date(o.data_pagamento).setHours(new Date().getHours()-3,new Date().getMinutes());if((n==null?void 0:n.valor_em_aberto)<ce){A(!1),h("warn","Valor inválido","O Valor informado deve ser menor ou igual ao Valor em Aberto.");return}$({...o,data_pagamento:new Date(u).toISOString()}).then(r=>{let p=r.data[0].msg,m=r.data[0].erro;if(m&&m=="true"){h("error","Falha ao Cadastrar",`${p||"Erro ao cadastrar"}`,1e4);return}m&&m=="false"&&h("success","Sucesso",`${p||"Cadastro realizado com sucesso"}`),te(),oe("identificador",""),z("CAIXA"),ae()}).catch(r=>{console.warn(r),h("error","Falha ao Cadastrar","",1e4)}).finally(()=>A(!1))},ae=()=>{b(t.sequencial).then(o=>{if(o.data[0].historico){const u=JSON.parse(o.data[0].historico);S([]),setTimeout(()=>{S(u)},1e3)}G(o.data[0])}).catch(o=>{console.warn(o),h("warn","Falha","Não foi possivel obter lista de caixas disponíveis")})},pe=()=>{g().then(o=>{console.log(o.data),j(o.data)}).catch(o=>{console.warn(o),h("warn","Falha","Não foi possivel obter lista de caixas disponíveis")})},he=()=>{Z().then(o=>{console.log(o.data),O(o.data)}).catch(o=>{console.warn(o),h("warn","Falha","Não foi possivel obter lista de bancos disponíveis")})},fe=()=>{l().then(o=>{B(o.data)}).catch(()=>{h("warn","Falha","Não foi possivel obter lista de bancos disponíveis")})};d.useEffect(()=>{q&&c&&(pe(),he(),fe())},[q,c]),d.useEffect(()=>{t&&(ae(),oe("sequencial",t.sequencial))},[t]);const me=a(Oe,{children:["Pagar - ",t.sequencial," ",e("span",{children:e(K,{severity:"info",value:(n==null?void 0:n.situacao)||t.situacao,style:{padding:"10px"}})})]});return a(Fe,{visible:c,onHide:de,header:me,style:{minWidth:"70vw",minHeight:"50vh"},maximizable:!0,children:[a(Ee,{children:[a("span",{children:[e("strong",{children:"Vencimento: "}),e("strong",{children:ie(t.vencimento.split("T")[0])})]}),a("span",{children:[e("strong",{children:"Valor Total: "}),e("strong",{children:T(t.valor_documento)})]}),a("span",{children:[e("strong",{children:"Valor em Aberto:"}),e("strong",{children:T(n==null?void 0:n.valor_em_aberto)})]}),a("span",{children:[e("strong",{children:"Valor Pago: "}),e("strong",{children:T(n==null?void 0:n.valor_pago)})]}),n!=null&&n.valor_desconto?a("span",{children:[e("strong",{children:"Valor Desconto: "}),e("strong",{children:T(n==null?void 0:n.valor_desconto)})]}):null]}),a(Ve,{onSubmit:le(ue),children:[e(Y,{align:"left",children:"Tipo de Conta"}),e(C,{name:"tipo",control:x,rules:{required:!0},render:({field:{value:o,onChange:u}})=>a(je,{children:[e("input",{type:"radio",value:"CAIXA",name:"tipo",id:"caixa",onChange:r=>{z(r.target.value),u(r.target.value)},checked:o==="CAIXA"}),e("label",{htmlFor:"caixa",children:"Caixa"}),e("input",{type:"radio",value:"CONTA-CORRENTE",name:"tipo",id:"conta",onChange:r=>{z(r.target.value),u(r.target.value)},checked:o==="CONTA-CORRENTE"}),e("label",{htmlFor:"conta",children:"Conta Corrente"})]})}),e(Y,{align:"left",children:"Pagamento"}),a(re,{children:[W==="CAIXA"?e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(J,{id:"caixa",value:r,filter:!0,optionLabel:"codigo_descricao",optionValue:"caixa",options:E,style:{width:"100%",height:"35px"},placeholder:"Caixa",onChange:s=>o(s.value),emptyMessage:"Nenhum resultado disponível",className:((i=f.tipo_id)==null?void 0:i.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"caixa",children:["Caixa",e("span",{children:"*"})]})]})},name:"tipo_id",control:x,rules:{required:!0}}):e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"150px",fontSize:"12px"},children:[e(J,{id:"conta_corrente",value:r,filter:!0,optionLabel:"nome",optionValue:"conta_corrente",options:P,style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Conta Corrente",onChange:s=>o(s.value),emptyMessage:"Nenhum resultado disponível",className:((i=f.tipo_id)==null?void 0:i.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"conta_corrente",children:["Conta Corrente",e("span",{children:"*"})]})]})},name:"tipo_id",control:x,rules:{required:!0}}),e(C,{name:"data_pagamento",control:x,rules:{required:!0},render:({field:o,fieldState:u})=>{var r;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"120px",fontSize:"12px"},children:[e(Te,{...ee("data_pagamento",{required:!0}),value:D,mask:"99/99/9999",onChange:p=>{o.onChange(new Date(p.value).toISOString()),V(p.value)},dateFormat:"dd/mm/yy",view:"date",showIcon:!0,style:{height:"35px",width:"100%",translate:"0px 1px",minWidth:"200px",flex:1},maxDate:new Date,placeholder:"Data Pagamento",inputId:"data_pagamento",className:((r=f.data_pagamento)==null?void 0:r.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"data_pagamento",children:"Data"})]})}}),e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,minWidth:"200px",fontSize:"12px"},children:[e(J,{id:"tipo_recebimento",value:r,optionLabel:"descricao",optionValue:"tipo",options:M.map(s=>({...s,descricao:`${s.tipo} - ${s.descricao}`})),style:{width:"100%",height:"35px",fontSize:"12px"},placeholder:"Forma de Pagamento",onChange:s=>o(s.value),emptyMessage:"Nenhum resultado disponível",className:((i=f.tipo_recebimento)==null?void 0:i.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"tipo_recebimento",children:["Forma de Pagamento",e("span",{children:"*"})]})]})},name:"tipo_recebimento",control:x,rules:{required:!0}}),e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(I,{value:r,onChange:s=>o(s.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px",fontSize:"12px"},className:((i=f.valor_pago)==null?void 0:i.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"valor_pago",children:["Valor",e("span",{children:"*"})]})]})},name:"valor_pago",control:x,rules:{required:!0}})]}),a(re,{children:[e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(I,{value:r,onChange:s=>o(s.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((i=f.valor_multa)==null?void 0:i.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_multa",children:"Multa"})]})},name:"valor_multa",control:x,rules:{required:!1}}),e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(I,{value:r,onChange:s=>o(s.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((i=f.valor_juros)==null?void 0:i.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_juros",children:"Juros"})]})},name:"valor_juros",control:x,rules:{required:!1}}),e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(I,{value:r,onChange:s=>o(s.value),mode:"currency",currency:"BRL",locale:"pt-BR",style:{width:"100%",height:"35px"},className:((i=f.valor_desconto)==null?void 0:i.type)==="required"?"p-invalid":""}),e("label",{htmlFor:"valor_desconto",children:"Desconto"})]})},name:"valor_desconto",control:x,rules:{required:!1}}),e(C,{render:({field:{onChange:o,onBlur:u,value:r,name:p,ref:m},fieldState:{invalid:_,isTouched:w,isDirty:k,error:N}})=>{var i;return a("span",{className:"p-float-label",style:{flex:1,fontSize:"12px"},children:[e(qe,{value:r,onChange:s=>o(s.target.value),style:{width:"100%",height:"35px"},className:((i=f.identificador)==null?void 0:i.type)==="required"?"p-invalid":""}),a("label",{htmlFor:"identificador",children:["Identificador",e("span",{children:"*"})]})]})},name:"identificador",control:x,rules:{required:!0}})]}),e(Re,{children:e(ne,{label:"Baixa",loading:R,icon:"pi pi-dollar",className:"p-button-danger save-btn-form",iconPos:"left",style:{gap:"10px",height:"35px",fontSize:"10px"},type:"submit",onClick:()=>console.log(f),disabled:t.situacao==="PAGO"||(n==null?void 0:n.situacao)==="PAGO"})})]}),e(Y,{align:"left",children:"Histórico de Pagamentos"}),e(Me,{listHistory:X})]})}export{je as C,Ve as F,Oe as H,Ye as P,re as S,Re as a};
