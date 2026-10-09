import{$ as e,$t as t,A as n,Bt as r,D as i,F as a,G as o,M as s,T as c,U as l,W as u,Wt as d,X as f,Xt as p,Zt as m,at as h,en as g,nn as _,qt as v,tn as y}from"./dist-C-C5Q4Qf.js";import{t as b}from"./Select-iFxD_x64.js";import{D as x,M as S,v as C}from"./reactivity.esm-bundler-C_UYjkVY.js";import{F as w,J as T,d as E,g as D,l as O,u as k,v as A,x as j}from"./runtime-core.esm-bundler-SR4pGycj.js";import{a as M}from"./light-DMFUHPcY.js";import{o as N}from"./GkSvg-C_HkdGVM.js";import{r as P,t as F}from"./useTheme-C8tanlDc.js";import{n as I,t as L}from"./store-DpjMZgtR.js";function R(e){let{primaryColor:t,opacityDisabled:n,borderRadius:i,textColor3:a}=e;return Object.assign(Object.assign({},P),{iconColor:a,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${r(t,{alpha:.2})}`})}var z={name:`Switch`,common:c,self:R},B=m(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[t(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),t(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),t(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),m(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[n({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),t(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),t(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),t(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),p(`&:focus`,[t(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),g(`round`,[t(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[t(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),y(`disabled`,[y(`icon`,[g(`rubber-band`,[g(`pressed`,[t(`rail`,[t(`button`,`max-width: var(--n-button-width-pressed);`)])]),t(`rail`,[p(`&:active`,[t(`button`,`max-width: var(--n-button-width-pressed);`)])]),g(`active`,[g(`pressed`,[t(`rail`,[t(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),t(`rail`,[p(`&:active`,[t(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),g(`active`,[t(`rail`,[t(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),t(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[t(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[n()]),t(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),g(`active`,[t(`rail`,`background-color: var(--n-rail-color-active);`)]),g(`loading`,[t(`rail`,`
 cursor: wait;
 `)]),g(`disabled`,[t(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),V=Object.assign(Object.assign({},a.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),H,U=A({name:`Switch`,props:V,slots:Object,setup(e){H===void 0&&(H=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=o(e),i=a(`Switch`,`-switch`,B,z,e,t),s=l(e,{mergedSize(t){return e.size===void 0?t?t.mergedSize.value:r?.value?.Switch?.size||`medium`:e.size}}),{mergedSizeRef:c,mergedDisabledRef:f}=s,p=C(e.defaultValue),m=N(x(e,`value`),p),g=O(()=>m.value===e.checkedValue),y=C(!1),b=C(!1),S=O(()=>{let{railStyle:t}=e;if(t)return t({focused:b.value,checked:g.value})});function w(t){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=s;n&&h(n,t),i&&h(i,t),r&&h(r,t),p.value=t,a(),o()}function T(){let{nTriggerFormFocus:e}=s;e()}function E(){let{nTriggerFormBlur:e}=s;e()}function D(){e.loading||f.value||(m.value===e.checkedValue?w(e.uncheckedValue):w(e.checkedValue))}function k(){b.value=!0,T()}function A(){b.value=!1,E(),y.value=!1}function j(t){e.loading||f.value||t.key===` `&&(m.value===e.checkedValue?w(e.uncheckedValue):w(e.checkedValue),y.value=!1)}function M(t){e.loading||f.value||t.key===` `&&(t.preventDefault(),y.value=!0)}let P=O(()=>{let{value:e}=c,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:a,buttonColor:o,boxShadowFocus:s,loadingColor:l,textColor:u,iconColor:f,[_(`buttonHeight`,e)]:p,[_(`buttonWidth`,e)]:m,[_(`buttonWidthPressed`,e)]:h,[_(`railHeight`,e)]:g,[_(`railWidth`,e)]:y,[_(`railBorderRadius`,e)]:b,[_(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=i.value,C,w,T;return H?(C=`calc((${g} - ${p}) / 2)`,w=`max(${g}, ${p})`,T=`max(${y}, calc(${y} + ${p} - ${g}))`):(C=v((d(g)-d(p))/2),w=v(Math.max(d(g),d(p))),T=d(g)>d(p)?y:v(d(y)+d(p)-d(g))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":a,"--n-button-color":o,"--n-button-width":m,"--n-button-width-pressed":h,"--n-button-height":p,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":g,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":s,"--n-loading-color":l,"--n-text-color":u,"--n-icon-color":f}}),F=n?u(`switch`,O(()=>c.value[0]),P,e):void 0;return{handleClick:D,handleBlur:A,handleFocus:k,handleKeyup:j,handleKeydown:M,mergedRailStyle:S,pressed:y,mergedClsPrefix:t,mergedValue:m,checked:g,mergedDisabled:f,cssVars:n?void 0:P,themeClass:F?.themeClass,onRender:F?.onRender}},render(){let{mergedClsPrefix:t,mergedDisabled:n,checked:r,mergedRailStyle:a,onRender:o,$slots:c}=this;o?.();let{checked:l,unchecked:u,icon:d,"checked-icon":p,"unchecked-icon":m}=c,h=!(f(d)&&f(p)&&f(m));return j(`div`,{role:`switch`,"aria-checked":r,class:[`${t}-switch`,this.themeClass,h&&`${t}-switch--icon`,r&&`${t}-switch--active`,n&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},j(`div`,{class:`${t}-switch__rail`,"aria-hidden":`true`,style:a},e(l,n=>e(u,e=>n||e?j(`div`,{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},j(`div`,{class:`${t}-switch__rail-placeholder`},j(`div`,{class:`${t}-switch__button-placeholder`}),n),j(`div`,{class:`${t}-switch__rail-placeholder`},j(`div`,{class:`${t}-switch__button-placeholder`}),e)):null)),j(`div`,{class:`${t}-switch__button`},e(d,n=>e(p,r=>e(m,e=>j(s,null,{default:()=>this.loading?j(i,Object.assign({key:`loading`,clsPrefix:t,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?j(`div`,{class:`${t}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(e||n)?j(`div`,{class:`${t}-switch__button-icon`,key:e?`unchecked-icon`:`icon`},e||n):null})))),e(l,e=>e&&j(`div`,{key:`checked`,class:`${t}-switch__checked`},e)),e(u,e=>e&&j(`div`,{key:`unchecked`,class:`${t}-switch__unchecked`},e)))))}}),W={flex:``,"items-center":``,"justify-between":``,"gap-24px":``},G={flex:``,"items-center":``,"justify-between":``,"gap-24px":``},K={flex:``,"items-center":``,"justify-between":``,"gap-24px":``},q=A({__name:`SettingsModal`,props:{show:{type:Boolean}},emits:[`update:show`],setup(e,{emit:t}){let n=t,{setThemeMode:r,themeMode:i}=F(),a=[{label:`跟随系统`,value:`system`},{label:`浅色`,value:`light`},{label:`深色`,value:`dark`}],o=()=>n(`update:show`,!1);return(t,s)=>{let c=b,l=U,u=M;return w(),E(u,{show:e.show,preset:`dialog`,title:`设置`,maskClosable:!1,showIcon:!1,positiveText:`关闭`,style:{width:`600px`},onPositiveClick:o,onClose:o,onEsc:o,"onUpdate:show":s[2]||=e=>n(`update:show`,e)},{default:T(()=>[k(`div`,W,[s[3]||=k(`span`,null,`外观主题`,-1),D(c,{value:S(i),options:a,class:`w-140px shrink-0`,"onUpdate:value":S(r)},null,8,[`value`,`onUpdate:value`])]),s[6]||=k(`div`,{class:`app-divider`},null,-1),k(`div`,G,[s[4]||=k(`span`,null,`关闭生成分享链接弹窗提醒`,-1),D(l,{value:S(I).ignoreUploadWarn,"aria-label":`关闭生成分享链接弹窗提醒`,class:`shrink-0`,"onUpdate:value":s[0]||=e=>S(L).update({ignoreUploadWarn:e})},null,8,[`value`])]),s[7]||=k(`div`,{class:`app-divider`},null,-1),k(`div`,K,[s[5]||=k(`span`,null,`打开快照页面自动生成分享链接（请确保不含隐私）`,-1),D(l,{value:S(I).autoUploadImport,"aria-label":`打开快照页面自动生成分享链接`,class:`shrink-0`,"onUpdate:value":s[1]||=e=>S(L).update({autoUploadImport:e})},null,8,[`value`])])]),_:1},8,[`show`])}}});export{U as n,q as t};
//# sourceMappingURL=SettingsModal-CnmDv0Yx.js.map