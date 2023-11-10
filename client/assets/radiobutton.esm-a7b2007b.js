import{C as z,r as o,P as G,O as S,v as J,m,p as C,q as b,T as Q}from"./index-7cffcf74.js";function E(){return E=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},E.apply(this,arguments)}function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},y(t)}function V(t,r){if(y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var e=n.call(t,r||"default");if(y(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function X(t){var r=V(t,"string");return y(r)==="symbol"?r:String(r)}function Z(t,r,n){return r=X(r),r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function ee(t){if(Array.isArray(t))return t}function te(t,r){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var e,s,d,c,f=[],i=!0,a=!1;try{if(d=(n=n.call(t)).next,r===0){if(Object(n)!==n)return;i=!1}else for(;!(i=(e=d.call(n)).done)&&(f.push(e.value),f.length!==r);i=!0);}catch(g){a=!0,s=g}finally{try{if(!i&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(a)throw s}}return f}}function I(t,r){(r==null||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function re(t,r){if(t){if(typeof t=="string")return I(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,r)}}function ne(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,r){return ee(t)||te(t,r)||re(t,r)||ne()}var h=z.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0}});function j(t,r){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);r&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,e)}return n}function ae(t){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?j(Object(n),!0).forEach(function(e){Z(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ue=o.memo(o.forwardRef(function(t,r){var n=o.useContext(G),e=h.getProps(t,n),s=o.useState(!1),d=oe(s,2),c=d[0],f=d[1],i=o.useRef(null),a=o.useRef(e.inputRef),g=h.setMetaData({props:e,state:{focused:c}}),p=g.ptm,k=function(u){P(u)},P=function(u){if(!e.disabled&&(e.onChange||e.onClick)){var v=e.checked,W=u.target instanceof HTMLDivElement,L=u.target===a.current,U=L&&u.target.checked!==v,R=W&&(m.hasClass(i.current,"p-radiobutton-checked")===v?!v:!1);if(U||R){var O=!v,w={originalEvent:u,value:e.value,checked:O,stopPropagation:function(){u.stopPropagation()},preventDefault:function(){u.preventDefault()},target:{type:"radio",name:e.name,id:e.id,value:e.value,checked:O}};if(e.onClick&&e.onClick(w),u.defaultPrevented)return;e.onChange&&e.onChange(w),R&&(a.current.checked=O)}m.focus(a.current),u.preventDefault()}},D=function(){f(!0)},x=function(){f(!1)},A=function(u){(u.code==="Space"||u.key===" ")&&P(u)};o.useEffect(function(){a.current&&(a.current.checked=e.checked)},[e.checked]),o.useEffect(function(){S.combinedRefs(a,e.inputRef)},[a,e.inputRef]),J(function(){e.autoFocus&&m.focus(a.current,e.autoFocus)}),o.useImperativeHandle(r,function(){return{props:e,select:k,focus:function(){return m.focus(a.current)},getElement:function(){return i.current},getInput:function(){return a.current}}});var N=S.isNotEmpty(e.tooltip),B=h.getOtherProps(e),T=S.reduceKeys(B,m.ARIA_PROPS),F=C("p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-radiobutton-disabled":e.disabled,"p-radiobutton-focused":c},e.className),_=C("p-radiobutton-box",{"p-highlight":e.checked,"p-disabled":e.disabled,"p-focus":c}),K=b({ref:i,id:e.id,className:F,style:e.style,onClick:P},h.getOtherProps(e),p("root")),M=b({className:"p-hidden-accessible"},p("hiddenInputWrapper")),q=b(ae({ref:a,id:e.inputId,type:"radio",name:e.name,defaultChecked:e.checked,onFocus:D,onBlur:x,onKeyDown:A,disabled:e.disabled,required:e.required,tabIndex:e.tabIndex},T),p("hiddenInput")),H=b({className:_},p("input")),$=b({className:"p-radiobutton-icon"},p("icon"));return o.createElement(o.Fragment,null,o.createElement("div",K,o.createElement("div",M,o.createElement("input",q)),o.createElement("div",H,o.createElement("div",$))),N&&o.createElement(Q,E({target:i,content:e.tooltip},e.tooltipOptions,{pt:p("tooltip")})))}));ue.displayName="RadioButton";export{ue as R};