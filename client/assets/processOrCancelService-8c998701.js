import{K as i,b as R,r as S,g as f}from"./index-7cffcf74.js";var P=(r=>(r[r.Entrada=1]="Entrada",r[r.Transferencia=2]="Transferencia",r[r.Venda=3]="Venda",r[r.OutrasSaidas=4]="OutrasSaidas",r[r.TransferenciaOutraUnidade=5]="TransferenciaOutraUnidade",r[r.OutrasEntradas=6]="OutrasEntradas",r[r.TransferenciaMercadoriaVirtual=7]="TransferenciaMercadoriaVirtual",r[r.Consignacao=8]="Consignacao",r[r.ConsignacaoRetorno=9]="ConsignacaoRetorno",r[r.Devolucao=10]="Devolucao",r[r.ProdutoMontagem=11]="ProdutoMontagem",r[r.ProdutoDesmontagem=12]="ProdutoDesmontagem",r[r.ManutencaoSeriais=13]="ManutencaoSeriais",r[r.PrestacaoContas=14]="PrestacaoContas",r[r.ProdutoMontagemItem=15]="ProdutoMontagemItem",r[r.RepassePOS=16]="RepassePOS",r[r.AuditoriaSerial=17]="AuditoriaSerial",r[r.ConsignacaoV2=18]="ConsignacaoV2",r[r.LoteTroca=19]="LoteTroca",r))(P||{});function C(){const{service:r}=i(),{tokenSignature:s,storeUser:t}=R(e=>e);return{getRastreioProductService:(e,a,d)=>r(s).get(`/Rastrear?empresa=${t}&idTipoMovimentacao=${e}&sequencial=${a}&produto=${d}`),deleteRastreioProductService:e=>{const a={empresa:t,list:e};return r(s).delete("/Rastrear",{data:a})},createRastreioProductService:e=>{const a={empresa:t,list:[{id:0,tipo_movimentacao:e.tipoMovimentacao,id_movimentacao:e.idMovimentacao,produto:e.produto,serial_inicial:e.serial_inicial,serial_final:e.serial_final?e.serial_final:e.serial_inicial}]};return r(s).post("/Rastrear",a)}}}function o({tipoMovimentacao:r,codMovimentacao:s,codProduto:t}){const{getRastreioProductService:l}=C(),[g,c]=S.useState(0);return S.useEffect(()=>{r&&s&&t&&l(r,Number(s),t).then(e=>{const d=e.data.reduce((u,n)=>u+n.quantidade,0);console.log(d),c(d)}).catch(e=>{console.log(e)})},[r,s,t]),{qtdRastreios:g}}function _(){const{service:r}=i(),{tokenSignature:s,storeUser:t}=R(c=>c),{getDataUser:l}=f();return{processOrCancelService:(c,e,a)=>{var u,n;const d={empresa:+t,list:[{sequencial:c,entidade:e,tipo:a}],usuario:(u=l())==null?void 0:u.guid};return r(s).post(`/Executar?usuario=${(n=l())==null?void 0:n.guid}`,d)}}}export{P as E,o as a,_ as b,C as u};
