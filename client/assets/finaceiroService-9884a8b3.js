import{K as _,g as s,b as u}from"./index-7cffcf74.js";function $(){const{service:c}=_(),{getDataUser:i}=s(),{tokenSignature:t,storeUser:n}=u(e=>e);return{getAllBankService:()=>{var e;return c(t).get(`/banco?usuario=${(e=i())==null?void 0:e.guid}`)},getAllBankNoFilterService:()=>c(t).get("/banco"),getExtratoService:(e,o)=>{var r,a;return c(t).get(`/extratoresumo?organizacao=${(r=i())==null?void 0:r.idOrganizacao}&empresa=${n}&tipo=${e}&sequencial=${o}&usuario=${(a=i())==null?void 0:a.guid}`)},createNewOperation:e=>{var r,a;const o={organizacao:(r=i())==null?void 0:r.idOrganizacao,empresa:n,list:[{tipo_operacao:e.tipo_operacao,tipo_transacao:e.tipo_transacao,tipo_movimentacao:e.tipo_movimentacao,tipo_origem:e.tipo_origem,id_origem:e.id_origem||0,loja_destino:e.loja_destino,tipo_destino:e.tipo_destino,id_destino:e.id_destino,data:e.data,valor:e.valor,identificador:e.identificador}],usuario:(a=i())==null?void 0:a.guid};return c(t).post("/operacaofinanceira",o)},cancellationBaixa:e=>{var r,a;const o={organizacao:(r=i())==null?void 0:r.idOrganizacao,empresa:n,list:[{tipo_operacao:e.tipo_operacao,tipo_transacao:e.tipo_transacao,tipo_movimentacao:e.tipo_movimentacao,tipo_origem:e.tipo_origem,id_origem:e.id_origem||0,loja_destino:e.loja_destino,tipo_destino:e.tipo_destino,id_destino:e.id_destino,data:e.data,valor:e.valor,identificador:e.identificador}],usuario:(a=i())==null?void 0:a.guid};return c(t).post("/cancelarbaixa",o)},getAllTaxasNoFilterService:e=>c(t).get(`/taxa?empresa=${e||n}`),getAllTaxasService:()=>{var e;return c(t).get(`/taxa?empresa=${n}&usuario=${(e=i())==null?void 0:e.guid}`)},createNewTaxaService:e=>{var r;const o={empresa:n,list:[{sequencial:0,adiquirente:e.adiquirente,bandeira:e.bandeira,deb:e.deb,cre_1:e.cre_1,cre_2:e.cre_2,cre_3:e.cre_3,cre_4:e.cre_4,cre_5:e.cre_5,cre_6:e.cre_6,cre_7:e.cre_7,cre_8:e.cre_8,cre_9:e.cre_9,cre_10:e.cre_10,cre_11:e.cre_11,cre_12:e.cre_12}],usuario:(r=i())==null?void 0:r.guid};return c(t).post("/taxa",o)},updateTaxaService:e=>{var r;const o={empresa:n,list:[{sequencial:0,adiquirente:e.adiquirente,bandeira:e.bandeira,deb:e.deb,cre_1:e.cre_1,cre_2:e.cre_2,cre_3:e.cre_3,cre_4:e.cre_4,cre_5:e.cre_5,cre_6:e.cre_6,cre_7:e.cre_7,cre_8:e.cre_8,cre_9:e.cre_9,cre_10:e.cre_10,cre_11:e.cre_11,cre_12:e.cre_12}],usuario:(r=i())==null?void 0:r.guid};return c(t).put("/taxa",o)},deleteTaxaService:e=>{var r;const o={empresa:n,list:[{sequencial:e}],usuario:(r=i())==null?void 0:r.guid};return c(t).delete("/taxa",{data:o})}}}export{$ as u};
