import{K as d,b as m,g as _,X as t}from"./index-7cffcf74.js";function N(){const{service:n}=d(),{tokenSignature:c,storeUser:s}=m(e=>e),{getDataUser:l}=_(),u=()=>{var e;return n(c).get(`/fornecedor?empresa=${s}&usuario=${(e=l())==null?void 0:e.guid}`)};return{getAllFornecedorService:u,deleteFornecedoresService:e=>{var o;const i={empresa:s,list:e,usuario:(o=l())==null?void 0:o.guid};return n(c).delete("/fornecedor",{data:i})},createNewFornecedorService:async(e,i)=>{var o;try{const r=await u(),f=e.cnpj.replace(/\D/g,""),g=Math.round(Math.random()*1e4),p={empresa:s,list:[{fornecedor:0,nome_fantasia:e.nome_fantasia,cnpj:f,razao_social:e.razao_social?e.razao_social:e.nome_fantasia,fone_ddd1:e.telefone1?String(t(e.telefone1)).substring(0,2):"",fone_ddd2:e.fone_ddd2,telefone1:e.telefone1?String(t(e.telefone1)).substring(2):"",telefone2:e.telefone2,situacao:e.situacao,email:e.email,cgf:e.cgf||"",cep:e.cep.replace(/\D/g,""),tipo_logradouro:e.tipo_logradouro,endereco:e.endereco,logradouro:i?"S/N":e.logradouro,complemento:e.complemento,bairro:e.bairro,cidade:e.cidade,uf:e.uf,CodigoExterno:g}],usuario:(o=l())==null?void 0:o.guid};return await n(c).post("/fornecedor",p)}catch(r){throw console.error(r),r}},editFornecedorService:(e,i)=>{var r;const o={empresa:s,list:[{fornecedor:e.fornecedor,nome_fantasia:e.nome_fantasia,cnpj:e.cnpj.replace(/\D/g,""),razao_social:e.razao_social?e.razao_social:e.nome_fantasia,fone_ddd1:e.telefone1?String(t(e.telefone1)).substring(0,2):"",fone_ddd2:e.fone_ddd2,telefone1:e.telefone1?String(t(e.telefone1)).substring(2):"",telefone2:e.telefone2,situacao:e.situacao,email:e.email,cgf:e.cgf||"",cep:e.cep.replace(/\D/g,""),tipo_logradouro:e.tipo_logradouro,endereco:e.endereco,logradouro:i?"S/N":e.logradouro,complemento:e.complemento,bairro:e.bairro,cidade:e.cidade,uf:e.uf,CodigoExterno:e.cnpj.replace(/\D/g,"")}],usuario:(r=l())==null?void 0:r.guid};return n(c).put("/fornecedor",o)},getAllFornecedorNoFilterService:()=>n(c).get(`/fornecedor?empresa=${s}`)}}export{N as u};
