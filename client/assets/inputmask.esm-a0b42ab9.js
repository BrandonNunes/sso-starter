import{C as ue,r as o,P as ae,m as y,O as le,v as ce,n as Z,p as ie,E as oe}from"./index-7cffcf74.js";function D(){return D=Object.assign?Object.assign.bind():function(P){for(var d=1;d<arguments.length;d++){var x=arguments[d];for(var n in x)Object.prototype.hasOwnProperty.call(x,n)&&(P[n]=x[n])}return P},D.apply(this,arguments)}var Y=ue.extend({defaultProps:{__TYPE:"InputMask",autoClear:!0,autoFocus:!1,className:null,disabled:!1,id:null,mask:null,maxLength:null,name:null,onBlur:null,onChange:null,onComplete:null,onFocus:null,placeholder:null,readOnly:!1,required:!1,size:null,slotChar:"_",style:null,tabIndex:null,tooltip:null,tooltipOptions:null,type:"text",unmask:!1,value:null,children:void 0}}),se=o.memo(o.forwardRef(function(P,d){var x=o.useContext(ae),n=Y.getProps(P,x),a=o.useRef(d),b=o.useRef(null),B=o.useRef(0),s=o.useRef([]),f=o.useRef([]),v=o.useRef(0),M=o.useRef(null),N=o.useRef(!1),I=o.useRef(null),G=o.useRef(null),R=o.useRef(null),E=o.useRef(null),S=o.useRef(null),K=o.useRef(!1),p=function(e,t){var r,u,l,i=a.current;if(!(!i||!i.offsetParent||i!==document.activeElement))if(typeof e=="number")u=e,l=typeof t=="number"?t:u,i.setSelectionRange?i.setSelectionRange(u,l):i.createTextRange&&(r=i.createTextRange(),r.collapse(!0),r.moveEnd("character",l),r.moveStart("character",u),r.select());else return i.setSelectionRange?(u=i.selectionStart,l=i.selectionEnd):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),u=0-r.duplicate().moveStart("character",-1e5),l=u+r.text.length),{begin:u,end:l}},F=function(){for(var e=b.current;e<=B.current;e++)if(s.current[e]&&f.current[e]===g(e))return!1;return!0},g=o.useCallback(function(c){return c<n.slotChar.length?n.slotChar.charAt(c):n.slotChar.charAt(0)},[n.slotChar]),V=function(){return n.unmask?w():a.current&&a.current.value},C=function(e){for(;++e<v.current&&!s.current[e];);return e},J=function(e){for(;--e>=0&&!s.current[e];);return e},T=function(e,t){var r,u;if(!(e<0)){for(r=e,u=C(t);r<v.current;r++)if(s.current[r]){if(u<v.current&&s.current[r].test(f.current[u]))f.current[r]=f.current[u],f.current[u]=g(u);else break;u=C(u)}k(),p(Math.max(b.current,e))}},Q=function(e){var t,r,u,l;for(t=e,r=g(e);t<v.current;t++)if(s.current[t])if(u=C(t),l=f.current[t],f.current[t]=r,u<v.current&&s.current[u].test(l))r=l;else break},W=function(e){var t=a.current.value,r=p();if(M.current.length&&M.current.length>t.length){for(h(!0);r.begin>0&&!s.current[r.begin-1];)r.begin--;if(r.begin===0)for(;r.begin<b.current&&!s.current[r.begin];)r.begin++;p(r.begin,r.begin)}else{for(h(!0);r.begin<v.current&&!s.current[r.begin];)r.begin++;p(r.begin,r.begin)}n.onComplete&&F()&&n.onComplete({originalEvent:e,value:V()}),m(e)},L=function(e){if(N.current=!1,h(),m(e),j(),n.onBlur&&n.onBlur(e),a.current.value!==I.current){var t=document.createEvent("HTMLEvents");t.initEvent("change",!0,!1),a.current.dispatchEvent(t)}},X=function(e){if(!n.readOnly){var t=e.which||e.keyCode,r,u,l;M.current=a.current.value,t===8||t===46||y.isIOS()&&t===127?(r=p(),u=r.begin,l=r.end,l-u===0&&(u=t!==46?J(u):l=C(u-1),l=t===46?C(l):l),O(u,l),T(u,l-1),m(e),e.preventDefault()):t===13?(L(e),m(e)):t===27&&(a.current.value=I.current,p(0,h()),m(e),e.preventDefault())}},$=function(e){if(!n.readOnly){var t=e.which||e.keyCode,r=p(),u,l,i,H;if(!(e.ctrlKey||e.altKey||e.metaKey||t<32)){if(t&&t!==13){if(r.end-r.begin!==0&&(O(r.begin,r.end),T(r.begin,r.end-1)),u=C(r.begin-1),u<v.current&&(l=String.fromCharCode(t),s.current[u].test(l))){if(Q(u),f.current[u]=l,k(),i=C(u),y.isAndroid()){var te=function(){p(i)};setTimeout(te,0)}else p(i);r.begin<=B.current&&(H=F())}e.preventDefault()}m(e),n.onComplete&&H&&n.onComplete({originalEvent:e,value:V()})}}},O=function(e,t){var r;for(r=e;r<t&&r<v.current;r++)s.current[r]&&(f.current[r]=g(r))},k=function(){a.current.value=f.current.join("")},h=function(e){G.current=!0;var t=a.current.value,r=-1,u,l,i;for(u=0,i=0;u<v.current;u++)if(s.current[u]){for(f.current[u]=g(u);i++<t.length;)if(l=t.charAt(i-1),s.current[u].test(l)){f.current[u]=l,r=u;break}if(i>t.length){O(u+1,v.current);break}}else f.current[u]===t.charAt(i)&&i++,u<R.current&&(r=u);return e?k():r+1<R.current?n.autoClear||f.current.join("")===E.current?(a.current.value&&(a.current.value=""),O(0,v.current)):k():(k(),a.current.value=a.current.value.substring(0,r+1)),R.current?u:b.current},_=function(e){if(!n.readOnly){N.current=!0,clearTimeout(S.current);var t;I.current=a.current.value,t=h(),S.current=setTimeout(function(){a.current===document.activeElement&&(k(),t===n.mask.replace("?","").length?p(0,t):p(t),j())},10),n.onFocus&&n.onFocus(e)}},ee=function(e){K.current?W(e):z(e)},z=function(e){if(!n.readOnly){var t=h(!0);p(t),m(e),n.onComplete&&F()&&n.onComplete({originalEvent:e,value:V()})}},w=o.useCallback(function(){for(var c=[],e=0;e<f.current.length;e++){var t=f.current[e];s.current[e]&&t!==g(e)&&c.push(t)}return c.join("")},[g]),m=function(e){if(n.onChange){var t=n.unmask?w():e&&e.target.value;n.onChange({originalEvent:e,value:E.current!==t?t:"",stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},target:{name:n.name,id:n.id,value:E.current!==t?t:""}})}},j=function(){a.current&&a.current.value&&a.current.value.length>0?y.addClass(a.current,"p-filled"):y.removeClass(a.current,"p-filled")},A=function(e){var t;return a.current&&(n.value==null?a.current.value="":(a.current.value=n.value,t=h(e),setTimeout(function(){if(a.current)return k(),h(e)},10)),I.current=a.current.value),j(),t},q=o.useCallback(function(){return n.unmask?n.value!==w():E.current!==a.current.value&&a.current.value!==n.value},[n.unmask,n.value,w]),U=function(){if(n.mask){s.current=[],R.current=n.mask.length,v.current=n.mask.length,b.current=null;var e={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};K.current=y.isChrome()&&y.isAndroid();for(var t=n.mask.split(""),r=0;r<t.length;r++){var u=t[r];u==="?"?(v.current--,R.current=r):e[u]?(s.current.push(new RegExp(e[u])),b.current===null&&(b.current=s.current.length-1),r<R.current&&(B.current=s.current.length-1)):s.current.push(null)}f.current=[];for(var l=0;l<t.length;l++){var i=t[l];i!=="?"&&(e[i]?f.current.push(g(l)):f.current.push(i))}E.current=f.current.join("")}};o.useImperativeHandle(d,function(){return{props:n,focus:function(){return y.focus(a.current)},getElement:function(){return a.current}}}),o.useEffect(function(){le.combinedRefs(a,d)},[a,d]),ce(function(){U(),A()}),Z(function(){U(),p(A(!0)),n.unmask&&m()},[n.mask]),Z(function(){q()&&A()},[q]);var re=Y.getOtherProps(n),ne=ie("p-inputmask",n.className);return o.createElement(oe,D({ref:a,autoFocus:n.autoFocus,id:n.id,type:n.type,name:n.name,style:n.style,className:ne},re,{placeholder:n.placeholder,size:n.size,maxLength:n.maxLength,tabIndex:n.tabIndex,disabled:n.disabled,readOnly:n.readOnly,onFocus:_,onBlur:L,onKeyDown:X,onKeyPress:$,onInput:ee,onPaste:z,required:n.required,tooltip:n.tooltip,tooltipOptions:n.tooltipOptions,pt:n.pt}))}));se.displayName="InputMask";export{se as I};
