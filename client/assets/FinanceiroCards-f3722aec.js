import{r as c,ag as d,j as e,s as i}from"./index-7cffcf74.js";function x(o){const{colors:r}=c.useContext(d),{label:a="Total",value:n,color:s=r.primary}=o;return e(t,{color:s,children:[a,": ",n]})}const t=i.div`
  min-width: 150px;
  background-color: ${o=>o.color};
  border-radius: 5px;
  font-weight: bold;
  color: #ffffff;
  padding: 15px;
  box-shadow: 2px 2px 2px 2px #c1c1c1;

  @media screen and (max-width: 820px) {
    padding: 10px;
    font-size: 12px;
  }
`;export{x as F};
