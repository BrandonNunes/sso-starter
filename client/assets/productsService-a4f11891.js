import{K as d,b as g,g as m}from"./index-7cffcf74.js";function E(){const{service:i}=d(),{tokenSignature:t,storeUser:u}=g(e=>e),{getDataUser:o}=m();return{getListAllProductsService:()=>{var e;return i(t).get(`/produto?organizacao=${o().idOrganizacao}&empresa=${u}&sequencial=0&produto=TODOS&usuario=${(e=o())==null?void 0:e.guid}`)},deleteProductsService:e=>{var r;const c={organizacao:o().idOrganizacao,empresa:u,list:e,usuario:(r=o())==null?void 0:r.guid};return i(t).delete("/produto",{data:c})},getMedidaBaseService:()=>i(t).get(`/catalogoItem/?organizacao=${o().idOrganizacao}/&sequencial=0&filtro=MDB`),getGrupoProdutoService:()=>i(t).get(`/catalogoItem/?organizacao=${o().idOrganizacao}/&sequencial=0&filtro=GRU`),getTipoItemProdutoService:()=>i(t).get(`/catalogoItem/?organizacao=${o().idOrganizacao}/&sequencial=0&filtro=TPP`),getMarcaProdutoService:()=>i(t).get(`/catalogoItem/?organizacao=${o().idOrganizacao}/&sequencial=0&filtro=MAR`),createProductsService:e=>{var r;const c={organizacao:o().idOrganizacao,list:[{empresa:u,produto:e.produto,descricao:e.descricao,medida_base:String(e.medida_base),tipo_item:e.tipo_item,situacao:e.situacao,venda_padrao:e.venda_padrao,venda_minima:e.venda_minima,venda_maxima:e.venda_maxima,obrigar_rastreamento:e.obrigar_rastreamento,tamanho_numero_serie:e.tamanho_numero_serie||null,eh_recarga:e.eh_recarga,eh_sem_estoque:e.eh_sem_estoque,eh_assinatura:e.eh_assinatura,marca:e.marca,grupo:e.grupo,id:0,venda_varejo:e.venda_varejo,venda_atacado:e.venda_atacado,codigoSAP:e.codigoSAP,descricaoSAP:e.descricaoSAP,CodigoExterno:Math.round(Math.random()*9e3),codigoEAN:e.codigoEAN||null,eh_alfanumerico:e.eh_alfanumerico,validade:e.validade||null}],usuario:(r=o())==null?void 0:r.guid};return i(t).post("/produto",c)},updateProductsService:e=>{var r;const c={organizacao:o().idOrganizacao,list:[{empresa:u,produto:e.produto,descricao:e.descricao,medida_base:e.medida_base,tipo_item:e.tipo_item,situacao:e.situacao,venda_padrao:e.venda_padrao,venda_minima:e.venda_minima,venda_maxima:e.venda_maxima,obrigar_rastreamento:e.obrigar_rastreamento,tamanho_numero_serie:e.tamanho_numero_serie,eh_recarga:e.eh_recarga,eh_sem_estoque:e.eh_sem_estoque,eh_assinatura:e.eh_assinatura,marca:e.marca,grupo:e.grupo,id:e.id,venda_varejo:e.venda_varejo,venda_atacado:e.venda_atacado,codigoSAP:e.codigoSAP,descricaoSAP:e.descricaoSAP,CodigoExterno:e.CodigoExterno,codigoEAN:e.codigoEAN||null,eh_alfanumerico:e.eh_alfanumerico,validade:e.validade||null}],usuario:(r=o())==null?void 0:r.guid};return i(t).put("/produto",c)},getTypeAttributListService:e=>i(t).get(`/atributolista?tipo=${e}`),getAttributListByProductService:e=>i(t).get(`/produtoatributo?organizacao=${o().idOrganizacao}&loja=${u}&guid_produto=${e}`),createAttributService:(e,c)=>{var n;const r={organizacao:o().idOrganizacao,list:[{id:0,loja:u,guid_produto:c,ordem:1,nome_campo:e.nome_campo,tipo_campo:e.tipo_campo,origem_tipo:e.origem_tipo||null,mascara:e.mascara||null,obrigatorio:e.obrigatorio,ativo:!0}],usuario:(n=o())==null?void 0:n.guid};return i(t).post("/produtoatributo",r)},updateAttributService:(e,c,r)=>{var s;const n={organizacao:o().idOrganizacao,list:[{id:e.id,loja:u,guid_produto:c,ordem:r||e.ordem,nome_campo:e.nome_campo,tipo_campo:e.tipo_campo,origem_tipo:e.origem_tipo||null,mascara:e.mascara||null,obrigatorio:e.obrigatorio,ativo:e.ativo}],usuario:(s=o())==null?void 0:s.guid};return i(t).put("/produtoatributo",n)},deleteAtributService:e=>{var r;const c={organizacao:o().idOrganizacao,loja:u,list:e,usuario:(r=o())==null?void 0:r.guid};return i(t).delete("/produtoatributo",{data:c})},duplicateProductsService:(e,c)=>{var s;const r=e.map(a=>({empresa:c,produto:a.produto,descricao:a.descricao,medida_base:String(a.medida_base),tipo_item:a.tipo_item,situacao:a.situacao,venda_padrao:a.venda_padrao,venda_minima:a.venda_minima,venda_maxima:a.venda_maxima,obrigar_rastreamento:a.obrigar_rastreamento,tamanho_numero_serie:a.tamanho_numero_serie||null,eh_recarga:a.eh_recarga,eh_sem_estoque:a.eh_sem_estoque,eh_assinatura:a.eh_assinatura,marca:a.marca,grupo:a.grupo,id:0,venda_varejo:a.venda_varejo,venda_atacado:a.venda_atacado,codigoSAP:a.codigoSAP,descricaoSAP:a.descricaoSAP,CodigoExterno:c+Math.round(Math.random()*9e3),codigoEAN:a.codigoEAN||null,eh_alfanumerico:a.eh_alfanumerico||!1,validade:a.validade||null})),n={organizacao:o().idOrganizacao,list:r,usuario:(s=o())==null?void 0:s.guid};return i(t).post("/produto",n)},getAttributListTabelaService:e=>{var c;return i(t).get(`/atributolista?tipo=tabela&sequencial=${e}&organizacao=${(c=o())==null?void 0:c.idOrganizacao}&empresa=${u}`)},getCreatedAttributListByProductService:e=>i(t).get(`/pedidoitematributo?empresa=${u}&sequencial=${e}`),getListAllProductsNoFilterService:()=>i(t).get(`/produto?organizacao=${o().idOrganizacao}&empresa=${u}&sequencial=0&produto=TODOS`)}}export{E as u};
