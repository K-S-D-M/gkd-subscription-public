import{$t as e,A as t,D as n,E as r,F as i,Ft as a,G as o,Kt as s,L as c,M as l,Mt as u,N as d,Pt as f,R as p,Rt as m,T as h,Tt as g,W as _,Xt as v,Zt as y,en as b,k as x,nn as S,ot as C,st as w,tt as T,vt as E,wt as D,x as O}from"./dist-XEDp5Bio.js";import{C as k,D as A,I as j,M,Tt as ee,Y as te,a as N,dt as P,i as F,it as I,l as L,nt as R,q as ne,v as z,x as B}from"./runtime-core.esm-bundler-a08HMgVk.js";import{C as V,D as H,E as U,M as W,O as G,T as K,_ as re,a as ie,c as ae,f as oe,g as se,j as ce,k as le,l as ue,m as de,o as fe,p as pe,r as me,s as he,t as ge,u as _e,v as ve,w as ye,y as be}from"./light-B7F9SyNv.js";function q(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}var{cubicBezierEaseInOut:J,cubicBezierEaseOut:xe,cubicBezierEaseIn:Se}=c;function Ce({overflow:e=`hidden`,duration:t=`.3s`,originalTransition:n=``,leavingDelay:r=`0s`,foldPadding:i=!1,enterToProps:a=void 0,leaveToProps:o=void 0,reverse:s=!1}={}){let c=s?`leave`:`enter`,l=s?`enter`:`leave`;return[v(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,Object.assign(Object.assign({},a),{opacity:1})),v(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,Object.assign(Object.assign({},o),{opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:i?`0 !important`:void 0,paddingBottom:i?`0 !important`:void 0})),v(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${J} ${r},
 opacity ${t} ${xe} ${r},
 margin-top ${t} ${J} ${r},
 margin-bottom ${t} ${J} ${r},
 padding-top ${t} ${J} ${r},
 padding-bottom ${t} ${J} ${r}
 ${n?`,${n}`:``}
 `),v(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${J},
 opacity ${t} ${Se},
 margin-top ${t} ${J},
 margin-bottom ${t} ${J},
 padding-top ${t} ${J},
 padding-bottom ${t} ${J}
 ${n?`,${n}`:``}
 `)]}function we(){let e=k(se,null);return e===null&&C(`use-dialog`,`No outer <n-dialog-provider /> founded.`),e}var Te=Object.assign(Object.assign({},de),{onAfterEnter:Function,onAfterLeave:Function,transformOrigin:String,blockScroll:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},internalStyle:[String,Object],maskClosable:{type:Boolean,default:!0},zIndex:Number,onPositiveClick:Function,onNegativeClick:Function,onClose:Function,onMaskClick:Function,draggable:[Boolean,Object]}),Ee=z({name:`DialogEnvironment`,props:Object.assign(Object.assign({},Te),{internalKey:{type:String,required:!0},to:[String,Object],onInternalAfterLeave:{type:Function,required:!0}}),setup(e){let t=I(!0);function n(){let{onInternalAfterLeave:t,internalKey:n,onAfterLeave:r}=e;t&&t(n),r&&r()}function r(t){let{onPositiveClick:n}=e;n?Promise.resolve(n(t)).then(e=>{e!==!1&&c()}):c()}function i(t){let{onNegativeClick:n}=e;n?Promise.resolve(n(t)).then(e=>{e!==!1&&c()}):c()}function a(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&c()}):c()}function o(t){let{onMaskClick:n,maskClosable:r}=e;n&&(n(t),r&&c())}function s(){let{onEsc:t}=e;t&&t()}function c(){t.value=!1}function l(e){t.value=e}return{show:t,hide:c,handleUpdateShow:l,handleAfterLeave:n,handleCloseClick:a,handleNegativeClick:i,handlePositiveClick:r,handleMaskClick:o,handleEsc:s}},render(){let{handlePositiveClick:e,handleUpdateShow:t,handleNegativeClick:n,handleCloseClick:r,handleAfterLeave:i,handleMaskClick:a,handleEsc:o,to:s,zIndex:c,maskClosable:l,show:u}=this;return B(ie,{show:u,onUpdateShow:t,onMaskClick:a,onEsc:o,to:s,zIndex:c,maskClosable:l,onAfterEnter:this.onAfterEnter,onAfterLeave:i,closeOnEsc:this.closeOnEsc,blockScroll:this.blockScroll,autoFocus:this.autoFocus,transformOrigin:this.transformOrigin,draggable:this.draggable,internalAppear:!0,internalDialog:!0},{default:({draggableClass:t})=>B(oe,Object.assign({},T(this.$props,pe),{titleClass:ee([this.titleClass,t]),style:this.internalStyle,onClose:r,onNegativeClick:n,onPositiveClick:e}))})}}),De=z({name:`DialogProvider`,props:{injectionKey:String,to:[String,Object]},setup(){let e=I([]),t={};function n(n={}){let r=m(),i=R(Object.assign(Object.assign({},n),{key:r,destroy:()=>{var e;(e=t[`n-dialog-${r}`])==null||e.hide()}}));return e.value.push(i),i}let r=[`info`,`success`,`warning`,`error`].map(e=>t=>n(Object.assign(Object.assign({},t),{type:e})));function i(t){let{value:n}=e;n.splice(n.findIndex(e=>e.key===t),1)}function a(){Object.values(t).forEach(e=>{e?.hide()})}let o={create:n,destroyAll:a,info:r[0],success:r[1],warning:r[2],error:r[3]};return j(se,o),j(re,{clickedRef:ce(64),clickedPositionRef:W()}),j(ve,e),Object.assign(Object.assign({},o),{dialogList:e,dialogInstRefs:t,handleAfterLeave:i})},render(){var e;return B(F,null,[this.dialogList.map(e=>B(Ee,q(e,[`destroy`,`style`],{internalStyle:e.style,to:this.to,ref:t=>{t===null?delete this.dialogInstRefs[`n-dialog-${e.key}`]:this.dialogInstRefs[`n-dialog-${e.key}`]=t},internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave}))),(e=this.$slots).default?.call(e)])}}),Oe=D(`n-loading-bar`),ke=D(`n-loading-bar-api`);function Ae(e){let{primaryColor:t,errorColor:n}=e;return{colorError:n,colorLoading:t,height:`2px`}}var je={name:`LoadingBar`,common:h,self:Ae},Me=y(`loading-bar-container`,`
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`,[r({enterDuration:`0.3s`,leaveDuration:`0.8s`}),y(`loading-bar`,`
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `,[b(`starting`,`
 background: var(--n-color-loading);
 `),b(`finishing`,`
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `),b(`error`,`
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]),Y=function(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})};function X(e,t){return`${t}-loading-bar ${t}-loading-bar--${e}`}var Ne=z({name:`LoadingBar`,props:{containerClass:String,containerStyle:[String,Object]},setup(){let{inlineThemeDisabled:e}=o(),{props:t,mergedClsPrefixRef:n}=k(Oe),r=I(null),a=I(!1),s=I(!1),c=I(!1),l=I(!1),u=!1,d=I(!1),f=L(()=>{let{loadingBarStyle:e}=t;return e?e[d.value?`error`:`loading`]:``});function p(){return Y(this,void 0,void 0,function*(){a.value=!1,c.value=!1,u=!1,d.value=!1,l.value=!0,yield A(),l.value=!1})}function m(){return Y(this,arguments,void 0,function*(e=0,t=80,i=`starting`){if(s.value=!0,yield p(),u)return;c.value=!0,yield A();let a=r.value;a&&(a.style.maxWidth=`${e}%`,a.style.transition=`none`,a.offsetWidth,a.className=X(i,n.value),a.style.transition=``,a.style.maxWidth=`${t}%`)})}function h(){return Y(this,void 0,void 0,function*(){if(u||d.value)return;s.value&&(yield A()),u=!0;let e=r.value;e&&(e.className=X(`finishing`,n.value),e.style.maxWidth=`100%`,e.offsetWidth,c.value=!1)})}function g(){if(!(u||d.value))if(!c.value)m(100,100,`error`).then(()=>{d.value=!0;let e=r.value;e&&(e.className=X(`error`,n.value),e.offsetWidth,c.value=!1)});else{d.value=!0;let e=r.value;if(!e)return;e.className=X(`error`,n.value),e.style.maxWidth=`100%`,e.offsetWidth,c.value=!1}}function v(){a.value=!0}function y(){a.value=!1}function b(){return Y(this,void 0,void 0,function*(){yield p()})}let x=i(`LoadingBar`,`-loading-bar`,Me,je,t,n),S=L(()=>{let{self:{height:e,colorError:t,colorLoading:n}}=x.value;return{"--n-height":e,"--n-color-loading":n,"--n-color-error":t}}),C=e?_(`loading-bar`,void 0,S,t):void 0;return{mergedClsPrefix:n,loadingBarRef:r,started:s,loading:c,entering:a,transitionDisabled:l,start:m,error:g,finish:h,handleEnter:v,handleAfterEnter:y,handleAfterLeave:b,mergedLoadingBarStyle:f,cssVars:e?void 0:S,themeClass:C?.themeClass,onRender:C?.onRender}},render(){if(!this.started)return null;let{mergedClsPrefix:e}=this;return B(u,{name:`fade-in-transition`,appear:!0,onEnter:this.handleEnter,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave,css:!this.transitionDisabled},{default:()=>{var t;return(t=this.onRender)==null||t.call(this),te(B(`div`,{class:[`${e}-loading-bar-container`,this.themeClass,this.containerClass],style:this.containerStyle},B(`div`,{ref:`loadingBarRef`,class:[`${e}-loading-bar`],style:[this.cssVars,this.mergedLoadingBarStyle]})),[[a,this.loading||!this.loading&&this.entering]])}})}}),Pe=z({name:`LoadingBarProvider`,props:Object.assign(Object.assign({},i.props),{to:{type:[String,Object,Boolean],default:void 0},containerClass:String,containerStyle:[String,Object],loadingBarStyle:{type:Object}}),setup(e){let t=g(),n=I(null),r={start(){var e;t.value?(e=n.value)==null||e.start():A(()=>{var e;(e=n.value)==null||e.start()})},error(){var e;t.value?(e=n.value)==null||e.error():A(()=>{var e;(e=n.value)==null||e.error()})},finish(){var e;t.value?(e=n.value)==null||e.finish():A(()=>{var e;(e=n.value)==null||e.finish()})}},{mergedClsPrefixRef:i}=o(e);return j(ke,r),j(Oe,{props:e,mergedClsPrefixRef:i}),Object.assign(r,{loadingBarRef:n})},render(){var e;return B(F,null,B(N,{disabled:this.to===!1,to:this.to||`body`},B(Ne,{ref:`loadingBarRef`,containerStyle:this.containerStyle,containerClass:this.containerClass})),(e=this.$slots).default?.call(e))}});function Fe(){let e=k(ke,null);return e===null&&C(`use-loading-bar`,`No outer <n-loading-bar-provider /> founded.`),e}var Ie=D(`n-message-api`),Le=D(`n-message-provider`),Re={icon:Function,type:{type:String,default:`info`},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,spinProps:Object,onClose:Function,onMouseenter:Function,onMouseleave:Function},ze=v([y(`message-wrapper`,`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Ce({overflow:`visible`,originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.85)`}})]),y(`message`,`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[e(`content`,`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),e(`icon`,`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[[`default`,`info`,`success`,`warning`,`error`,`loading`].map(e=>b(`${e}-type`,[v(`> *`,`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),v(`> *`,`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[t()])]),e(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[v(`&:hover`,`
 color: var(--n-close-icon-color-hover);
 `),v(`&:active`,`
 color: var(--n-close-icon-color-pressed);
 `)])]),y(`message-container`,`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[b(`top`,`
 top: 12px;
 left: 0;
 right: 0;
 `),b(`top-left`,`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),b(`top-right`,`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),b(`bottom`,`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),b(`bottom-left`,`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),b(`bottom-right`,`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),Be={info:()=>B(U,null),success:()=>B(K,null),warning:()=>B(ye,null),error:()=>B(H,null),default:()=>null},Ve=z({name:`Message`,props:Object.assign(Object.assign({},Re),{render:Function}),setup(e){let{inlineThemeDisabled:t,mergedRtlRef:n}=o(e),{props:r,mergedClsPrefixRef:a}=k(Le),s=p(`Message`,n,a),c=i(`Message`,`-message`,ze,me,r,a),l=L(()=>{let{type:t}=e,{common:{cubicBezierEaseInOut:n},self:{padding:r,margin:i,maxWidth:a,iconMargin:o,closeMargin:s,closeSize:l,iconSize:u,fontSize:d,lineHeight:f,borderRadius:p,border:m,iconColorInfo:h,iconColorSuccess:g,iconColorWarning:_,iconColorError:v,iconColorLoading:y,closeIconSize:b,closeBorderRadius:x,[S(`textColor`,t)]:C,[S(`boxShadow`,t)]:w,[S(`color`,t)]:T,[S(`closeColorHover`,t)]:E,[S(`closeColorPressed`,t)]:D,[S(`closeIconColor`,t)]:O,[S(`closeIconColorPressed`,t)]:k,[S(`closeIconColorHover`,t)]:A}}=c.value;return{"--n-bezier":n,"--n-margin":i,"--n-padding":r,"--n-max-width":a,"--n-font-size":d,"--n-icon-margin":o,"--n-icon-size":u,"--n-close-icon-size":b,"--n-close-border-radius":x,"--n-close-size":l,"--n-close-margin":s,"--n-text-color":C,"--n-color":T,"--n-box-shadow":w,"--n-icon-color-info":h,"--n-icon-color-success":g,"--n-icon-color-warning":_,"--n-icon-color-error":v,"--n-icon-color-loading":y,"--n-close-color-hover":E,"--n-close-color-pressed":D,"--n-close-icon-color":O,"--n-close-icon-color-pressed":k,"--n-close-icon-color-hover":A,"--n-line-height":f,"--n-border-radius":p,"--n-border":m}}),u=t?_(`message`,L(()=>e.type[0]),l,{}):void 0;return{mergedClsPrefix:a,rtlEnabled:s,messageProviderProps:r,handleClose(){var t;(t=e.onClose)==null||t.call(e)},cssVars:t?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender,placement:r.placement}},render(){let{render:e,type:t,closable:n,content:r,mergedClsPrefix:i,cssVars:a,themeClass:o,onRender:s,icon:c,handleClose:u,showIcon:d}=this;s?.();let f;return B(`div`,{class:[`${i}-message-wrapper`,o],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith(`top`)?`flex-start`:`flex-end`},a]},e?e(this.$props):B(`div`,{class:[`${i}-message ${i}-message--${t}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(f=He(c,t,i,this.spinProps))&&d?B(`div`,{class:`${i}-message__icon ${i}-message__icon--${t}-type`},B(l,null,{default:()=>f})):null,B(`div`,{class:`${i}-message__content`},G(r)),n?B(V,{clsPrefix:i,class:`${i}-message__close`,onClick:u,absolute:!0}):null))}});function He(e,t,r,i){if(typeof e==`function`)return e();{let e=t===`loading`?B(n,Object.assign({clsPrefix:r,strokeWidth:24,scale:.85},i)):Be[t]();return e?B(d,{clsPrefix:r,key:t},{default:()=>e}):null}}var Ue=z({name:`MessageEnvironment`,props:Object.assign(Object.assign({},Re),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null,n=I(!0);M(()=>{r()});function r(){let{duration:n}=e;n&&(t=window.setTimeout(o,n))}function i(e){e.currentTarget===e.target&&t!==null&&(window.clearTimeout(t),t=null)}function a(e){e.currentTarget===e.target&&r()}function o(){let{onHide:r}=e;n.value=!1,t&&=(window.clearTimeout(t),null),r&&r()}function s(){let{onClose:t}=e;t&&t(),o()}function c(){let{onAfterLeave:t,onInternalAfterLeave:n,onAfterHide:r,internalKey:i}=e;t&&t(),n&&n(i),r&&r()}function l(){o()}return{show:n,hide:o,handleClose:s,handleAfterLeave:c,handleMouseleave:a,handleMouseenter:i,deactivate:l}},render(){return B(x,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?B(Ve,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,spinProps:this.spinProps,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),We=z({name:`MessageProvider`,props:Object.assign(Object.assign({},i.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:`top`},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),setup(e){let{mergedClsPrefixRef:t}=o(e),n=I([]),r=I({}),i={create(e,t){return a(e,Object.assign({type:`default`},t))},info(e,t){return a(e,Object.assign(Object.assign({},t),{type:`info`}))},success(e,t){return a(e,Object.assign(Object.assign({},t),{type:`success`}))},warning(e,t){return a(e,Object.assign(Object.assign({},t),{type:`warning`}))},error(e,t){return a(e,Object.assign(Object.assign({},t),{type:`error`}))},loading(e,t){return a(e,Object.assign(Object.assign({},t),{type:`loading`}))},destroyAll:c};j(Le,{props:e,mergedClsPrefixRef:t}),j(Ie,i);function a(t,i){let a=m(),o=R(Object.assign(Object.assign({},i),{content:t,key:a,destroy:()=>{var e;(e=r.value[a])==null||e.hide()}})),{max:s}=e;return s&&n.value.length>=s&&n.value.shift(),n.value.push(o),o}function s(e){n.value.splice(n.value.findIndex(t=>t.key===e),1),delete r.value[e]}function c(){Object.values(r.value).forEach(e=>{e.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:s},i)},render(){var e;return B(F,null,(e=this.$slots).default?.call(e),this.messageList.length?B(N,{to:this.to??`body`},B(`div`,{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:`message-container`,style:this.containerStyle},this.messageList.map(e=>B(Ue,Object.assign({ref:t=>{t&&(this.messageRefs[e.key]=t)},internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave},q(e,[`destroy`],void 0),{duration:e.duration===void 0?this.duration:e.duration,keepAliveOnHover:e.keepAliveOnHover===void 0?this.keepAliveOnHover:e.keepAliveOnHover,closable:e.closable===void 0?this.closable:e.closable}))))):null)}});function Ge(){let e=k(Ie,null);return e===null&&C(`use-message`,"No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."),e}var Ke=z({name:`ModalEnvironment`,props:Object.assign(Object.assign({},fe),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){let t=I(!0);function n(){let{onInternalAfterLeave:t,internalKey:n,onAfterLeave:r}=e;t&&t(n),r&&r()}function r(){let{onPositiveClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&c()}):c()}function i(){let{onNegativeClick:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&c()}):c()}function a(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&c()}):c()}function o(t){let{onMaskClick:n,maskClosable:r}=e;n&&(n(t),r&&c())}function s(){let{onEsc:t}=e;t&&t()}function c(){t.value=!1}function l(e){t.value=e}return{show:t,hide:c,handleUpdateShow:l,handleAfterLeave:n,handleCloseClick:a,handleNegativeClick:i,handlePositiveClick:r,handleMaskClick:o,handleEsc:s}},render(){let{handleUpdateShow:e,handleAfterLeave:t,handleMaskClick:n,handleEsc:r,show:i}=this;return B(ie,Object.assign({},this.$props,{show:i,onUpdateShow:e,onMaskClick:n,onEsc:r,onAfterLeave:t,internalAppear:!0,internalModal:!0}),this.$slots)}}),qe=z({name:`ModalProvider`,props:{to:[String,Object]},setup(){let e=I([]),t={};function n(n={}){let r=m(),i=R(Object.assign(Object.assign({},n),{key:r,destroy:()=>{var e;(e=t[`n-modal-${r}`])==null||e.hide()}}));return e.value.push(i),i}function r(t){let{value:n}=e;n.splice(n.findIndex(e=>e.key===t),1)}function i(){Object.values(t).forEach(e=>{e?.hide()})}let a={create:n,destroyAll:i};return j(ae,a),j(ue,{clickedRef:ce(64),clickedPositionRef:W()}),j(_e,e),Object.assign(Object.assign({},a),{modalList:e,modalInstRefs:t,handleAfterLeave:r})},render(){var e;return B(F,null,[this.modalList.map(e=>B(Ke,q(e,[`destroy`,`render`],{to:e.to??this.to,ref:t=>{t===null?delete this.modalInstRefs[`n-modal-${e.key}`]:this.modalInstRefs[`n-modal-${e.key}`]=t},internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave}),{default:e.render})),(e=this.$slots).default?.call(e)])}}),Z=D(`n-notification-provider`),Je=z({name:`NotificationContainer`,props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){let{mergedThemeRef:e,mergedClsPrefixRef:t,wipTransitionCountRef:n}=k(Z),r=I(null);return ne(()=>{var e,t;n.value>0?(e=r?.value)==null||e.classList.add(`transitioning`):(t=r?.value)==null||t.classList.remove(`transitioning`)}),{selfRef:r,mergedTheme:e,mergedClsPrefix:t,transitioning:n}},render(){let{$slots:e,scrollable:t,mergedClsPrefix:n,mergedTheme:r,placement:i}=this;return B(`div`,{ref:`selfRef`,class:[`${n}-notification-container`,t&&`${n}-notification-container--scrollable`,`${n}-notification-container--${i}`]},t?B(O,{theme:r.peers.Scrollbar,themeOverrides:r.peerOverrides.Scrollbar,contentStyle:{overflow:`hidden`}},e):e)}}),Ye={info:()=>B(U,null),success:()=>B(K,null),warning:()=>B(ye,null),error:()=>B(H,null),default:()=>null},Q={closable:{type:Boolean,default:!0},type:{type:String,default:`default`},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},Xe=le(Q),Ze=z({name:`Notification`,props:Q,setup(e){let{mergedClsPrefixRef:t,mergedThemeRef:n,props:r}=k(Z),{inlineThemeDisabled:i,mergedRtlRef:a}=o(),c=p(`Notification`,a,t),l=L(()=>{let{type:t}=e,{self:{color:r,textColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:c,headerTextColor:l,descriptionTextColor:u,actionTextColor:d,borderRadius:f,headerFontWeight:p,boxShadow:m,lineHeight:h,fontSize:g,closeMargin:_,closeSize:v,width:y,padding:b,closeIconSize:x,closeBorderRadius:C,closeColorHover:w,closeColorPressed:T,titleFontSize:E,metaFontSize:D,descriptionFontSize:O,[S(`iconColor`,t)]:k},common:{cubicBezierEaseOut:A,cubicBezierEaseIn:j,cubicBezierEaseInOut:M}}=n.value,{left:ee,right:te,top:N,bottom:P}=s(b);return{"--n-color":r,"--n-font-size":g,"--n-text-color":i,"--n-description-text-color":u,"--n-action-text-color":d,"--n-title-text-color":l,"--n-title-font-weight":p,"--n-bezier":M,"--n-bezier-ease-out":A,"--n-bezier-ease-in":j,"--n-border-radius":f,"--n-box-shadow":m,"--n-close-border-radius":C,"--n-close-color-hover":w,"--n-close-color-pressed":T,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":c,"--n-line-height":h,"--n-icon-color":k,"--n-close-margin":_,"--n-close-size":v,"--n-close-icon-size":x,"--n-width":y,"--n-padding-left":ee,"--n-padding-right":te,"--n-padding-top":N,"--n-padding-bottom":P,"--n-title-font-size":E,"--n-meta-font-size":D,"--n-description-font-size":O}}),u=i?_(`notification`,L(()=>e.type[0]),l,r):void 0;return{mergedClsPrefix:t,showAvatar:L(()=>e.avatar||e.type!==`default`),handleCloseClick(){e.onClose()},rtlEnabled:c,cssVars:i?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),B(`div`,{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},B(`div`,{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?B(`div`,{class:`${t}-notification__avatar`},this.avatar?G(this.avatar):this.type===`default`?null:B(d,{clsPrefix:t},{default:()=>Ye[this.type]()})):null,this.closable?B(V,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,B(`div`,{ref:`bodyRef`,class:`${t}-notification-main`},this.title?B(`div`,{class:`${t}-notification-main__header`},G(this.title)):null,this.description?B(`div`,{class:`${t}-notification-main__description`},G(this.description)):null,this.content?B(`pre`,{class:`${t}-notification-main__content`},G(this.content)):null,this.meta||this.action?B(`div`,{class:`${t}-notification-main-footer`},this.meta?B(`div`,{class:`${t}-notification-main-footer__meta`},G(this.meta)):null,this.action?B(`div`,{class:`${t}-notification-main-footer__action`},G(this.action)):null):null)))}}),Qe=Object.assign(Object.assign({},Q),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),$e=z({name:`NotificationEnvironment`,props:Object.assign(Object.assign({},Qe),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){let{wipTransitionCountRef:t}=k(Z),n=I(!0),r=null;function i(){n.value=!1,r&&window.clearTimeout(r)}function a(e){t.value++,A(()=>{e.style.height=`${e.offsetHeight}px`,e.style.maxHeight=`0`,e.style.transition=`none`,e.offsetHeight,e.style.transition=``,e.style.maxHeight=e.style.height})}function o(n){t.value--,n.style.height=``,n.style.maxHeight=``;let{onAfterEnter:r,onAfterShow:i}=e;r&&r(),i&&i()}function s(e){t.value++,e.style.maxHeight=`${e.offsetHeight}px`,e.style.height=`${e.offsetHeight}px`,e.offsetHeight}function c(t){let{onHide:n}=e;n&&n(),t.style.maxHeight=`0`,t.offsetHeight}function l(){t.value--;let{onAfterLeave:n,onInternalAfterLeave:r,onAfterHide:i,internalKey:a}=e;n&&n(),r(a),i&&i()}function u(){let{duration:t}=e;t&&(r=window.setTimeout(i,t))}function d(e){e.currentTarget===e.target&&r!==null&&(window.clearTimeout(r),r=null)}function f(e){e.currentTarget===e.target&&u()}function p(){let{onClose:t}=e;t?Promise.resolve(t()).then(e=>{e!==!1&&i()}):i()}return M(()=>{e.duration&&(r=window.setTimeout(i,e.duration))}),{show:n,hide:i,handleClose:p,handleAfterLeave:l,handleLeave:c,handleBeforeLeave:s,handleAfterEnter:o,handleBeforeEnter:a,handleMouseenter:d,handleMouseleave:f}},render(){return B(u,{name:`notification-transition`,appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?B(Ze,Object.assign({},T(this.$props,Xe),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),et=v([y(`notification-container`,`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[v(`>`,[y(`scrollbar`,`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[v(`>`,[y(`scrollbar-container`,`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[y(`scrollbar-content`,`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),b(`top, top-right, top-left`,`
 top: 12px;
 `,[v(`&.transitioning >`,[y(`scrollbar`,[v(`>`,[y(`scrollbar-container`,`
 min-height: 100vh !important;
 `)])])])]),b(`bottom, bottom-right, bottom-left`,`
 bottom: 12px;
 `,[v(`>`,[y(`scrollbar`,[v(`>`,[y(`scrollbar-container`,[y(`scrollbar-content`,`
 padding-bottom: 12px;
 `)])])])]),y(`notification-wrapper`,`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),b(`top, bottom`,`
 left: 50%;
 transform: translateX(-50%);
 `,[y(`notification-wrapper`,[v(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 transform: scale(0.85);
 `),v(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 transform: scale(1);
 `)])]),b(`top`,[y(`notification-wrapper`,`
 transform-origin: top center;
 `)]),b(`bottom`,[y(`notification-wrapper`,`
 transform-origin: bottom center;
 `)]),b(`top-right, bottom-right`,[y(`notification`,`
 margin-left: 28px;
 margin-right: 16px;
 `)]),b(`top-left, bottom-left`,[y(`notification`,`
 margin-left: 16px;
 margin-right: 28px;
 `)]),b(`top-right`,`
 right: 0;
 `,[$(`top-right`)]),b(`top-left`,`
 left: 0;
 `,[$(`top-left`)]),b(`bottom-right`,`
 right: 0;
 `,[$(`bottom-right`)]),b(`bottom-left`,`
 left: 0;
 `,[$(`bottom-left`)]),b(`scrollable`,[b(`top-right`,`
 top: 0;
 `),b(`top-left`,`
 top: 0;
 `),b(`bottom-right`,`
 bottom: 0;
 `),b(`bottom-left`,`
 bottom: 0;
 `)]),y(`notification-wrapper`,`
 margin-bottom: 12px;
 `,[v(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),v(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 opacity: 1;
 `),v(`&.notification-transition-leave-active`,`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),v(`&.notification-transition-enter-active`,`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),y(`notification`,`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[e(`avatar`,[y(`icon`,`
 color: var(--n-icon-color);
 `),y(`base-icon`,`
 color: var(--n-icon-color);
 `)]),b(`show-avatar`,[y(`notification-main`,`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),b(`closable`,[y(`notification-main`,[v(`> *:first-child`,`
 padding-right: 20px;
 `)]),e(`close`,`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),e(`avatar`,`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[y(`icon`,`transition: color .3s var(--n-bezier);`)]),y(`notification-main`,`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[y(`notification-main-footer`,`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[e(`meta`,`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),e(`action`,`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),e(`header`,`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),e(`description`,`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),e(`content`,`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[v(`&:first-child`,`margin: 0;`)])])])])]);function $(e){return y(`notification-wrapper`,[v(`&.notification-transition-enter-from, &.notification-transition-leave-to`,`
 transform: translate(${e.split(`-`)[1]===`left`?`calc(-100%)`:`calc(100%)`}, 0);
 `),v(`&.notification-transition-leave-from, &.notification-transition-enter-to`,`
 transform: translate(0, 0);
 `)])}var tt=D(`n-notification-api`),nt=z({name:`NotificationProvider`,props:Object.assign(Object.assign({},i.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:`top-right`},keepAliveOnHover:Boolean}),setup(e){let{mergedClsPrefixRef:t}=o(e),n=I([]),r={},a=new Set;function s(t){let i=m(),o=()=>{a.add(i),r[i]&&r[i].hide()},s=R(Object.assign(Object.assign({},t),{key:i,destroy:o,hide:o,deactivate:o})),{max:c}=e;if(c&&n.value.length-a.size>=c){let e=!1,t=0;for(let i of n.value){if(!a.has(i.key)){r[i.key]&&(i.destroy(),e=!0);break}t++}e||n.value.splice(t,1)}return n.value.push(s),s}let c=[`info`,`success`,`warning`,`error`].map(e=>t=>s(Object.assign(Object.assign({},t),{type:e})));function l(e){a.delete(e),n.value.splice(n.value.findIndex(t=>t.key===e),1)}let u=i(`Notification`,`-notification`,et,ge,e,t),d={create:s,info:c[0],success:c[1],warning:c[2],error:c[3],open:p,destroyAll:h},f=I(0);j(tt,d),j(Z,{props:e,mergedClsPrefixRef:t,mergedThemeRef:u,wipTransitionCountRef:f});function p(e){return s(e)}function h(){Object.values(n.value).forEach(e=>{e.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:n,notificationRefs:r,handleAfterLeave:l},d)},render(){var e;let{placement:t}=this;return B(F,null,(e=this.$slots).default?.call(e),this.notificationList.length?B(N,{to:this.to??`body`},B(Je,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&t!==`top`&&t!==`bottom`,placement:t},{default:()=>this.notificationList.map(e=>B($e,Object.assign({ref:t=>{let n=e.key;t===null?delete this.notificationRefs[n]:this.notificationRefs[n]=t}},q(e,[`destroy`,`hide`,`deactivate`]),{internalKey:e.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:e.keepAliveOnHover===void 0?this.keepAliveOnHover:e.keepAliveOnHover})))})):null)}});function rt(){let e=k(tt,null);return e===null&&C(`use-notification`,"No outer `n-notification-provider` found."),e}var it=z({name:`InjectionExtractor`,props:{onSetup:Function},setup(e,{slots:t}){var n;return(n=e.onSetup)==null||n.call(e),()=>t.default?.call(t)}}),at={message:Ge,notification:rt,loadingBar:Fe,dialog:we,modal:he};function ot({providersAndProps:e,configProviderProps:t}){let n=f(i),r={app:n};function i(){return B(be,P(t),{default:()=>e.map(({type:e,Provider:t,props:n})=>B(t,P(n),{default:()=>B(it,{onSetup:()=>r[e]=at[e]()})}))})}let a;return E&&(a=document.createElement(`div`),document.body.appendChild(a),n.mount(a)),Object.assign({unmount:()=>{var e;if(n===null||a===null){w(`discrete`,`unmount call no need because discrete app has been unmounted`);return}n.unmount(),(e=a.parentNode)==null||e.removeChild(a),a=null,n=null}},r)}function st(e,{configProviderProps:t,messageProviderProps:n,dialogProviderProps:r,notificationProviderProps:i,loadingBarProviderProps:a,modalProviderProps:o}={}){let s=[];return e.forEach(e=>{switch(e){case`message`:s.push({type:e,Provider:We,props:n});break;case`notification`:s.push({type:e,Provider:nt,props:i});break;case`dialog`:s.push({type:e,Provider:De,props:r});break;case`loadingBar`:s.push({type:e,Provider:Pe,props:a});break;case`modal`:s.push({type:e,Provider:qe,props:o})}}),ot({providersAndProps:s,configProviderProps:t})}var{message:ct,dialog:lt,loadingBar:ut}=st([`message`,`dialog`,`loadingBar`]);export{q as a,Ce as i,ut as n,ct as r,lt as t};