import{K as l,b as u,g as p,i as g,X as a}from"./index-7cffcf74.js";function v(){const{service:s}=l(),{tokenSignature:i,storeUser:c}=u(e=>e),{getDataUser:t}=p();return g(),{getListAllTransportadoresService:()=>{var e;return s(i).get(`/transportadora?empresa=${c}&limite=100&usuario=${(e=t())==null?void 0:e.guid}`)},deleteTransportadoresService:e=>{var o;const r={empresa:c,list:e,usuario:(o=t())==null?void 0:o.guid};return s(i).delete("/transportadora",{data:r})},createNewTransportadorService:(e,r)=>{var n;const o={empresa:c,list:[{sequencial:0,razao_social:e.razao_social,cnpj:e.cnpj.replace(/\D/g,""),nome_fantasia:e.nome_fantasia,inscricao_estadual:e.inscricao_estadual,tipo_logradouro:e.tipo_logradouro,situacao:e.situacao,cep:e.cep.replace(/\D/g,""),uf:e.uf,endereco:e.endereco,logradouro:r?"S/N":e.logradouro,complemento:e.complemento,cidade:e.cidade,bairro:e.bairro,fone_ddd1:e.telefone?String(a(e.telefone)).substring(0,2):"",telefone:e.telefone?String(a(e.telefone)).substring(2):"",email:e.email,contato:e.contato,CodigoExterno:e.cnpj.replace(/\D/g,"")}],usuario:(n=t())==null?void 0:n.guid};return s(i).post("/transportadora",o)},editTransportadorService:(e,r)=>{var n;const o={empresa:c,list:[{sequencial:e.sequencial,razao_social:e.razao_social,cnpj:e.cnpj.replace(/\D/g,""),nome_fantasia:e.nome_fantasia,inscricao_estadual:e.inscricao_estadual,tipo_logradouro:e.tipo_logradouro,situacao:e.situacao,cep:e.cep.replace(/\D/g,""),uf:e.uf,endereco:e.endereco,logradouro:r?"S/N":e.logradouro,complemento:e.complemento,cidade:e.cidade,bairro:e.bairro,fone_ddd1:e.telefone?String(a(e.telefone)).substring(0,2):"",telefone:e.telefone?String(a(e.telefone)).substring(2):"",email:e.email,contato:e.contato,CodigoExterno:e.cnpj.replace(/\D/g,"")}],usuario:(n=t())==null?void 0:n.guid};return s(i).put("/transportadora",o)}}}export{v as u};
