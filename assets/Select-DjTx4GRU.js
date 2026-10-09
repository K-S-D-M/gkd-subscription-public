import{$ as e,$t as t,A as n,Bt as r,D as i,F as a,Ft as o,G as s,J as c,Jt as l,Kt as u,M as d,Mt as f,N as p,Ot as m,R as h,Rt as g,T as _,Tt as v,U as y,W as b,Wt as x,Xt as S,Z as C,Zt as w,at as T,ct as E,dt as D,en as O,ht as k,in as A,jt as ee,nn as j,pt as M,qt as N,rn as P,tn as F,ut as I,wt as L,x as R}from"./dist-XEDp5Bio.js";import{c as z,d as te,f as B,g as V,l as H,m as ne,n as re,o as ie,p as ae,s as oe,u as se}from"./Tooltip-BtVB4Qq3.js";import{A as U,C as W,D as G,E as K,I as ce,K as le,M as q,O as ue,R as de,Y as fe,i as pe,it as J,j as me,l as Y,lt as X,q as he,v as Z,x as Q}from"./runtime-core.esm-bundler-a08HMgVk.js";import{A as ge,C as _e,O as ve,S as ye}from"./light-B7F9SyNv.js";import{a as be,o as xe,r as Se}from"./GkSvg-DD3mtt6W.js";import{a as Ce,c as we,r as Te,s as Ee,t as De,u as Oe}from"./light-CyFi9Vk9.js";function ke(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}function Ae(e){return e&-e}var je=class{constructor(e,t){this.l=e,this.min=t;let n=Array(e+1);for(let t=0;t<e+1;++t)n[t]=0;this.ft=n}add(e,t){if(t===0)return;let{l:n,ft:r}=this;for(e+=1;e<=n;)r[e]+=t,e+=Ae(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===void 0&&(e=this.l),e<=0)return 0;let{ft:t,min:n,l:r}=this;if(e>r)throw Error("[FinweckTree.sum]: `i` is larger than length.");let i=e*n;for(;e>0;)i+=t[e],e-=Ae(e);return i}getBound(e){let t=0,n=this.l;for(;n>t;){let r=Math.floor((t+n)/2),i=this.sum(r);if(i>e){n=r;continue}else if(i<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}},Me;function Ne(){return typeof document>`u`?!1:(Me===void 0&&(Me=`matchMedia`in window?window.matchMedia(`(pointer:coarse)`).matches:!1),Me)}var Pe;function Fe(){return typeof document>`u`?1:(Pe===void 0&&(Pe=`chrome`in window?window.devicePixelRatio:1),Pe)}var Ie=`VVirtualListXScroll`;function Le({columnsRef:e,renderColRef:t,renderItemWithColsRef:n}){let r=J(0),i=J(0),a=Y(()=>{let t=e.value;if(t.length===0)return null;let n=new je(t.length,0);return t.forEach((e,t)=>{n.add(t,e.width)}),n});return ce(Ie,{startIndexRef:m(()=>{let e=a.value;return e===null?0:Math.max(e.getBound(i.value)-1,0)}),endIndexRef:m(()=>{let t=a.value;return t===null?0:Math.min(t.getBound(i.value+r.value)+1,e.value.length-1)}),columnsRef:e,renderColRef:t,renderItemWithColsRef:n,getLeft:e=>{let t=a.value;return t===null?0:t.sum(e)}}),{listWidthRef:r,scrollLeftRef:i}}var Re=Z({name:`VirtualListRow`,props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){let{startIndexRef:e,endIndexRef:t,columnsRef:n,getLeft:r,renderColRef:i,renderItemWithColsRef:a}=W(Ie);return{startIndex:e,endIndex:t,columns:n,renderCol:i,renderItemWithCols:a,getLeft:r}},render(){let{startIndex:e,endIndex:t,columns:n,renderCol:r,renderItemWithCols:i,getLeft:a,item:o}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:t,allColumns:n,item:o,getLeft:a});if(r!=null){let i=[];for(let s=e;s<=t;++s){let e=n[s];i.push(r({column:e,left:a(s),item:o}))}return i}return null}}),ze=oe(`.v-vl`,{maxHeight:`inherit`,height:`100%`,overflow:`auto`,minWidth:`1px`},[oe(`&:not(.v-vl--show-scrollbar)`,{scrollbarWidth:`none`},[oe(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,{width:0,height:0,display:`none`})])]),Be=Z({name:`VirtualList`,inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:`div`},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:`key`},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){let t=M();ze.mount({id:`vueuc/virtual-list`,head:!0,anchorMetaName:z,ssr:t}),q(()=>{let{defaultScrollIndex:t,defaultScrollKey:n}=e;t==null?n!=null&&_({key:n}):_({index:t})});let n=!1,r=!1;ue(()=>{if(n=!1,!r){r=!0;return}_({top:p.value,left:o.value})}),me(()=>{n=!0,r||=!0});let i=m(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let t=0;return e.columns.forEach(e=>{t+=e.width}),t}),a=Y(()=>{let t=new Map,{keyField:n}=e;return e.items.forEach((e,r)=>{t.set(e[n],r)}),t}),{scrollLeftRef:o,listWidthRef:s}=Le({columnsRef:X(e,`columns`),renderColRef:X(e,`renderCol`),renderItemWithColsRef:X(e,`renderItemWithCols`)}),c=J(null),l=J(void 0),u=new Map,d=Y(()=>{let{items:t,itemSize:n,keyField:r}=e,i=new je(t.length,n);return t.forEach((e,t)=>{let n=e[r],a=u.get(n);a!==void 0&&i.add(t,a)}),i}),f=J(0),p=J(0),h=m(()=>Math.max(d.value.getBound(p.value-x(e.paddingTop))-1,0)),g=Y(()=>{let{value:t}=l;if(t===void 0)return[];let{items:n,itemSize:r}=e,i=h.value,a=Math.min(i+Math.ceil(t/r+1),n.length-1),o=[];for(let e=i;e<=a;++e)o.push(n[e]);return o}),_=(e,t)=>{if(typeof e==`number`){S(e,t,`auto`);return}let{left:n,top:r,index:i,key:o,position:s,behavior:c,debounce:l=!0}=e;if(n!==void 0||r!==void 0)S(n,r,c);else if(i!==void 0)b(i,c,l);else if(o!==void 0){let e=a.value.get(o);e!==void 0&&b(e,c,l)}else s===`bottom`?S(0,2**53-1,c):s===`top`&&S(0,0,c)},v,y=null;function b(t,n,r){let{value:i}=d,a=i.sum(t)+x(e.paddingTop);if(!r)c.value.scrollTo({left:0,top:a,behavior:n});else{v=t,y!==null&&window.clearTimeout(y),y=window.setTimeout(()=>{v=void 0,y=null},16);let{scrollTop:e,offsetHeight:r}=c.value;if(a>e){let o=i.get(t);a+o<=e+r||c.value.scrollTo({left:0,top:a+o-r,behavior:n})}else c.value.scrollTo({left:0,top:a,behavior:n})}}function S(e,t,n){c.value.scrollTo({left:e,top:t,behavior:n})}function C(t,r){if(n||e.ignoreItemResize||A(r.target))return;let{value:i}=d,o=a.value.get(t),s=i.get(o),l=r.borderBoxSize?.[0]?.blockSize??r.contentRect.height;if(l===s)return;l-e.itemSize===0?u.delete(t):u.set(t,l-e.itemSize);let p=l-s;if(p===0)return;i.add(o,p);let m=c.value;if(m!=null){if(v===void 0){let e=i.sum(o);m.scrollTop>e&&m.scrollBy(0,p)}else (o<v||o===v&&l+i.sum(o)>m.scrollTop+m.offsetHeight)&&m.scrollBy(0,p);k()}f.value++}let w=!Ne(),T=!1;function E(t){var n;(n=e.onScroll)==null||n.call(e,t),(!w||!T)&&k()}function D(t){var n;if((n=e.onWheel)==null||n.call(e,t),w){let e=c.value;if(e!=null){if(t.deltaX===0&&(e.scrollTop===0&&t.deltaY<=0||e.scrollTop+e.offsetHeight>=e.scrollHeight&&t.deltaY>=0))return;t.preventDefault(),e.scrollTop+=t.deltaY/Fe(),e.scrollLeft+=t.deltaX/Fe(),k(),T=!0,V(()=>{T=!1})}}}function O(t){if(n||A(t.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(t.contentRect.height===l.value)return}else if(t.contentRect.height===l.value&&t.contentRect.width===s.value)return;l.value=t.contentRect.height,s.value=t.contentRect.width;let{onResize:r}=e;r!==void 0&&r(t)}function k(){let{value:e}=c;e!=null&&(p.value=e.scrollTop,o.value=e.scrollLeft)}function A(e){let t=e;for(;t!==null;){if(t.style.display===`none`)return!0;t=t.parentElement}return!1}return{listHeight:l,listStyle:{overflow:`auto`},keyToIndex:a,itemsStyle:Y(()=>{let{itemResizable:t}=e,n=N(d.value.sum());return f.value,[e.itemsStyle,{boxSizing:`content-box`,width:N(i.value),height:t?``:n,minHeight:t?n:``,paddingTop:N(e.paddingTop),paddingBottom:N(e.paddingBottom)}]}),visibleItemsStyle:Y(()=>(f.value,{transform:`translateY(${N(d.value.sum(h.value))})`})),viewportItems:g,listElRef:c,itemsElRef:J(null),scrollTo:_,handleListResize:O,handleListScroll:E,handleListWheel:D,handleItemResize:C}},render(){let{itemResizable:e,keyField:t,keyToIndex:n,visibleItemsTag:r}=this;return Q(I,{onResize:this.handleListResize},{default:()=>{var i;return Q(`div`,K(this.$attrs,{class:[`v-vl`,this.showScrollbar&&`v-vl--show-scrollbar`],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:`listElRef`}),[this.items.length===0?(i=this.$slots).empty?.call(i):Q(`div`,{ref:`itemsElRef`,class:`v-vl-items`,style:this.itemsStyle},[Q(r,Object.assign({class:`v-vl-visible-items`,style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{let{renderCol:r,renderItemWithCols:i}=this;return this.viewportItems.map(a=>{let o=a[t],s=n.get(o),c=r==null?void 0:Q(Re,{index:s,item:a}),l=i==null?void 0:Q(Re,{index:s,item:a}),u=this.$slots.default({item:a,renderedCols:c,renderedItemWithCols:l,index:s})[0];return e?Q(I,{key:o,onResize:e=>this.handleItemResize(o,e)},{default:()=>u}):(u.key=o,u)})}})])])}})}}),$=`v-hidden`,Ve=oe(`[v-hidden]`,{display:`none!important`}),He=Z({name:`Overflow`,props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:t}){let n=J(null),r=J(null);function i(i){let{value:a}=n,{getCounter:o,getTail:s}=e,c;if(c=o===void 0?r.value:o(),!a||!c)return;c.hasAttribute($)&&c.removeAttribute($);let{children:l}=a;if(i.showAllItemsBeforeCalculate)for(let e of l)e.hasAttribute($)&&e.removeAttribute($);let u=a.offsetWidth,d=[],f=t.tail?s?.():null,p=f?f.offsetWidth:0,m=!1,h=a.children.length-+!!t.tail;for(let t=0;t<h-1;++t){if(t<0)continue;let n=l[t];if(m){n.hasAttribute($)||n.setAttribute($,``);continue}else n.hasAttribute($)&&n.removeAttribute($);let r=n.offsetWidth;if(p+=r,d[t]=r,p>u){let{updateCounter:n}=e;for(let r=t;r>=0;--r){let i=h-1-r;n===void 0?c.textContent=`${i}`:n(i);let a=c.offsetWidth;if(p-=d[r],p+a<=u||r===0){m=!0,t=r-1,f&&(t===-1?(f.style.maxWidth=`${u-a}px`,f.style.boxSizing=`border-box`):f.style.maxWidth=``);let{onUpdateCount:n}=e;n&&n(i);break}}}}let{onUpdateOverflow:g}=e;m?g!==void 0&&g(!0):(g!==void 0&&g(!1),c.setAttribute($,``))}let a=M();return Ve.mount({id:`vueuc/overflow`,head:!0,anchorMetaName:z,ssr:a}),q(()=>i({showAllItemsBeforeCalculate:!1})),{selfRef:n,counterRef:r,sync:i}},render(){let{$slots:e}=this;return G(()=>this.sync({showAllItemsBeforeCalculate:!1})),Q(`div`,{class:`v-overflow`,ref:`selfRef`},[de(e,`default`),e.counter?e.counter():Q(`span`,{style:{display:`inline-block`},ref:`counterRef`}),e.tail?e.tail():null])}});function Ue(e,t){t&&(q(()=>{let{value:n}=e;n&&D.registerHandler(n,t)}),le(e,(e,t)=>{t&&D.unregisterHandler(t)},{deep:!1}),U(()=>{let{value:t}=e;t&&D.unregisterHandler(t)}))}function We(e){switch(typeof e){case`string`:return e||void 0;case`number`:return String(e);default:return}}function Ge(e){let t=e.filter(e=>e!==void 0);if(t.length!==0)return t.length===1?t[0]:t=>{e.forEach(e=>{e&&e(t)})}}var Ke=Z({name:`Checkmark`,render(){return Q(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 16 16`},Q(`g`,{fill:`none`},Q(`path`,{d:`M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z`,fill:`currentColor`})))}}),qe=Z({name:`Empty`,render(){return Q(`svg`,{viewBox:`0 0 28 28`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},Q(`path`,{d:`M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z`,fill:`currentColor`}),Q(`path`,{d:`M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z`,fill:`currentColor`}))}}),Je=Z({props:{onFocus:Function,onBlur:Function},setup(e){return()=>Q(`div`,{style:`width: 0; height: 0`,tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Ye(e){return Array.isArray(e)?e:[e]}var Xe={STOP:`STOP`};function Ze(e,t){let n=t(e);e.children!==void 0&&n!==Xe.STOP&&e.children.forEach(e=>Ze(e,t))}function Qe(e,t={}){let{preserveGroup:n=!1}=t,r=[],i=n?e=>{e.isLeaf||(r.push(e.key),a(e.children))}:e=>{e.isLeaf||(e.isGroup||r.push(e.key),a(e.children))};function a(e){e.forEach(i)}return a(e),r}function $e(e,t){let{isLeaf:n}=e;return n===void 0?!t(e):n}function et(e){return e.children}function tt(e){return e.key}function nt(){return!1}function rt(e,t){let{isLeaf:n}=e;return!(n===!1&&!Array.isArray(t(e)))}function it(e){return e.disabled===!0}function at(e,t){return e.isLeaf===!1&&!Array.isArray(t(e))}function ot(e){return e==null?[]:Array.isArray(e)?e:e.checkedKeys??[]}function st(e){return e==null||Array.isArray(e)?[]:e.indeterminateKeys??[]}function ct(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)||n.add(e)}),Array.from(n)}function lt(e,t){let n=new Set(e);return t.forEach(e=>{n.has(e)&&n.delete(e)}),Array.from(n)}function ut(e){return e?.type===`group`}function dt(e){let t=new Map;return e.forEach((e,n)=>{t.set(e.key,n)}),e=>t.get(e)??null}var ft=class extends Error{constructor(){super(),this.message=`SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.`}};function pt(e,t,n,r){return _t(t.concat(e),n,r,!1)}function mt(e,t){let n=new Set;return e.forEach(e=>{let r=t.treeNodeMap.get(e);if(r!==void 0){let e=r.parent;for(;e!==null&&!(e.disabled||n.has(e.key));)n.add(e.key),e=e.parent}}),n}function ht(e,t,n,r){let i=_t(t,n,r,!1),a=_t(e,n,r,!0),o=mt(e,n),s=[];return i.forEach(e=>{(a.has(e)||o.has(e))&&s.push(e)}),s.forEach(e=>i.delete(e)),i}function gt(e,t){let{checkedKeys:n,keysToCheck:r,keysToUncheck:i,indeterminateKeys:a,cascade:o,leafOnly:s,checkStrategy:c,allowNotLoaded:l}=e;if(!o)return r===void 0?i===void 0?{checkedKeys:Array.from(n),indeterminateKeys:Array.from(a)}:{checkedKeys:lt(n,i),indeterminateKeys:Array.from(a)}:{checkedKeys:ct(n,r),indeterminateKeys:Array.from(a)};let{levelTreeNodeMap:u}=t,d;d=i===void 0?r===void 0?_t(n,t,l,!1):pt(r,n,t,l):ht(i,n,t,l);let f=c===`parent`,p=c===`child`||s,m=d,h=new Set,g=Math.max.apply(null,Array.from(u.keys()));for(let e=g;e>=0;--e){let t=e===0,n=u.get(e);for(let e of n){if(e.isLeaf)continue;let{key:n,shallowLoaded:r}=e;if(p&&r&&e.children.forEach(e=>{!e.disabled&&!e.isLeaf&&e.shallowLoaded&&m.has(e.key)&&m.delete(e.key)}),e.disabled||!r)continue;let i=!0,a=!1,o=!0;for(let t of e.children){let e=t.key;if(!t.disabled){if(o&&=!1,m.has(e))a=!0;else if(h.has(e)){a=!0,i=!1;break}else if(i=!1,a)break}}i&&!o?(f&&e.children.forEach(e=>{!e.disabled&&m.has(e.key)&&m.delete(e.key)}),m.add(n)):a&&h.add(n),t&&p&&m.has(n)&&m.delete(n)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(h)}}function _t(e,t,n,r){let{treeNodeMap:i,getChildren:a}=t,o=new Set,s=new Set(e);return e.forEach(e=>{let t=i.get(e);t!==void 0&&Ze(t,e=>{if(e.disabled)return Xe.STOP;let{key:t}=e;if(!o.has(t)&&(o.add(t),s.add(t),at(e.rawNode,a))){if(r)return Xe.STOP;if(!n)throw new ft}})}),s}function vt(e,{includeGroup:t=!1,includeSelf:n=!0},r){let i=r.treeNodeMap,a=e==null?null:i.get(e)??null,o={keyPath:[],treeNodePath:[],treeNode:a};if(a?.ignored)return o.treeNode=null,o;for(;a;)!a.ignored&&(t||!a.isGroup)&&o.treeNodePath.push(a),a=a.parent;return o.treeNodePath.reverse(),n||o.treeNodePath.pop(),o.keyPath=o.treeNodePath.map(e=>e.key),o}function yt(e){if(e.length===0)return null;let t=e[0];return t.isGroup||t.ignored||t.disabled?t.getNext():t}function bt(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i+1)%r]:i===n.length-1?null:n[i+1]}function xt(e,t,{loop:n=!1,includeDisabled:r=!1}={}){let i=t===`prev`?St:bt,a={reverse:t===`prev`},o=!1,s=null;function c(t){if(t!==null){if(t===e){if(!o)o=!0;else if(!e.disabled&&!e.isGroup){s=e;return}}else if((!t.disabled||r)&&!t.ignored&&!t.isGroup){s=t;return}if(t.isGroup){let e=wt(t,a);e===null?c(i(t,n)):s=e}else{let e=i(t,!1);if(e!==null)c(e);else{let e=Ct(t);e?.isGroup?c(i(e,n)):n&&c(i(t,!0))}}}}return c(e),s}function St(e,t){let n=e.siblings,r=n.length,{index:i}=e;return t?n[(i-1+r)%r]:i===0?null:n[i-1]}function Ct(e){return e.parent}function wt(e,t={}){let{reverse:n=!1}=t,{children:r}=e;if(r){let{length:e}=r,i=n?e-1:0,a=n?-1:e,o=n?-1:1;for(let e=i;e!==a;e+=o){let n=r[e];if(!n.disabled&&!n.ignored)if(n.isGroup){let e=wt(n,t);if(e!==null)return e}else return n}}return null}var Tt={getChild(){return this.ignored?null:wt(this)},getParent(){let{parent:e}=this;return e?.isGroup?e.getParent():e},getNext(e={}){return xt(this,`next`,e)},getPrev(e={}){return xt(this,`prev`,e)}};function Et(e,t){let n=t?new Set(t):void 0,r=[];function i(e){e.forEach(e=>{r.push(e),!(e.isLeaf||!e.children||e.ignored)&&(e.isGroup||n===void 0||n.has(e.key))&&i(e.children)})}return i(e),r}function Dt(e,t){let n=e.key;for(;t;){if(t.key===n)return!0;t=t.parent}return!1}function Ot(e,t,n,r,i,a=null,o=0){let s=[];return e.forEach((c,l)=>{var u;let d=Object.create(r);if(d.rawNode=c,d.siblings=s,d.level=o,d.index=l,d.isFirstChild=l===0,d.isLastChild=l+1===e.length,d.parent=a,!d.ignored){let e=i(c);Array.isArray(e)&&(d.children=Ot(e,t,n,r,i,d,o+1))}s.push(d),t.set(d.key,d),n.has(o)||n.set(o,[]),(u=n.get(o))==null||u.push(d)}),s}function kt(e,t={}){let n=new Map,r=new Map,{getDisabled:i=it,getIgnored:a=nt,getIsGroup:o=ut,getKey:s=tt}=t,c=t.getChildren??et,l=t.ignoreEmptyChildren?e=>{let t=c(e);return Array.isArray(t)?t.length?t:null:t}:c,u=Ot(e,n,r,Object.assign({get key(){return s(this.rawNode)},get disabled(){return i(this.rawNode)},get isGroup(){return o(this.rawNode)},get isLeaf(){return $e(this.rawNode,l)},get shallowLoaded(){return rt(this.rawNode,l)},get ignored(){return a(this.rawNode)},contains(e){return Dt(this,e)}},Tt),l);function d(e){if(e==null)return null;let t=n.get(e);return t&&!t.isGroup&&!t.ignored?t:null}function f(e){if(e==null)return null;let t=n.get(e);return t&&!t.ignored?t:null}function p(e,t){let n=f(e);return n?n.getPrev(t):null}function m(e,t){let n=f(e);return n?n.getNext(t):null}function h(e){let t=f(e);return t?t.getParent():null}function g(e){let t=f(e);return t?t.getChild():null}let _={treeNodes:u,treeNodeMap:n,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:l,getFlattenedNodes(e){return Et(u,e)},getNode:d,getPrev:p,getNext:m,getParent:h,getChild:g,getFirstAvailableNode(){return yt(u)},getPath(e,t={}){return vt(e,t,_)},getCheckedKeys(e,t={}){let{cascade:n=!0,leafOnly:r=!1,checkStrategy:i=`all`,allowNotLoaded:a=!1}=t;return gt({checkedKeys:ot(e),indeterminateKeys:st(e),cascade:n,leafOnly:r,checkStrategy:i,allowNotLoaded:a},_)},check(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return gt({checkedKeys:ot(t),indeterminateKeys:st(t),keysToCheck:e==null?[]:Ye(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},uncheck(e,t,n={}){let{cascade:r=!0,leafOnly:i=!1,checkStrategy:a=`all`,allowNotLoaded:o=!1}=n;return gt({checkedKeys:ot(t),indeterminateKeys:st(t),keysToUncheck:e==null?[]:Ye(e),cascade:r,leafOnly:i,checkStrategy:a,allowNotLoaded:o},_)},getNonLeafKeys(e={}){return Qe(u,e)}};return _}var At=w(`empty`,`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[t(`icon`,`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[S(`+`,[t(`description`,`
 margin-top: 8px;
 `)])]),t(`description`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),t(`extra`,`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),jt=Z({name:`Empty`,props:Object.assign(Object.assign({},a.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:`medium`},renderIcon:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n,mergedComponentPropsRef:r}=s(e),i=a(`Empty`,`-empty`,At,Oe,e,t),{localeRef:o}=be(`Empty`),c=Y(()=>e.description??r?.value?.Empty?.description),l=Y(()=>r?.value?.Empty?.renderIcon||(()=>Q(qe,null))),u=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{[j(`iconSize`,t)]:r,[j(`fontSize`,t)]:a,textColor:o,iconColor:s,extraTextColor:c}}=i.value;return{"--n-icon-size":r,"--n-font-size":a,"--n-bezier":n,"--n-text-color":o,"--n-icon-color":s,"--n-extra-text-color":c}}),d=n?b(`empty`,Y(()=>{let t=``,{size:n}=e;return t+=n[0],t}),u,e):void 0;return{mergedClsPrefix:t,mergedRenderIcon:l,localizedDescription:Y(()=>c.value||o.value.description),cssVars:n?void 0:u,themeClass:d?.themeClass,onRender:d?.onRender}},render(){let{$slots:e,mergedClsPrefix:t,onRender:n}=this;return n?.(),Q(`div`,{class:[`${t}-empty`,this.themeClass],style:this.cssVars},this.showIcon?Q(`div`,{class:`${t}-empty__icon`},e.icon?e.icon():Q(p,{clsPrefix:t},{default:this.mergedRenderIcon})):null,this.showDescription?Q(`div`,{class:`${t}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?Q(`div`,{class:`${t}-empty__extra`},e.extra()):null)}}),Mt=Z({name:`NBaseSelectGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{renderLabelRef:e,renderOptionRef:t,labelFieldRef:n,nodePropsRef:r}=W(ae);return{labelField:n,nodeProps:r,renderLabel:e,renderOption:t}},render(){let{clsPrefix:e,renderLabel:t,renderOption:n,nodeProps:r,tmNode:{rawNode:i}}=this,a=r?.(i),o=t?t(i,!1):ve(i[this.labelField],i,!1),s=Q(`div`,Object.assign({},a,{class:[`${e}-base-select-group-header`,a?.class]}),o);return i.render?i.render({node:s,option:i}):n?n({node:s,option:i,selected:!1}):s}});function Nt(e,t){return Q(f,{name:`fade-in-scale-up-transition`},{default:()=>e?Q(p,{clsPrefix:t,class:`${t}-base-select-option__check`},{default:()=>Q(Ke)}):null})}var Pt=Z({name:`NBaseSelectOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){let{valueRef:t,pendingTmNodeRef:n,multipleRef:r,valueSetRef:i,renderLabelRef:a,renderOptionRef:o,labelFieldRef:s,valueFieldRef:c,showCheckmarkRef:l,nodePropsRef:u,handleOptionClick:d,handleOptionMouseEnter:f}=W(ae),p=m(()=>{let{value:t}=n;return t?e.tmNode.key===t.key:!1});function h(t){let{tmNode:n}=e;n.disabled||d(t,n)}function g(t){let{tmNode:n}=e;n.disabled||f(t,n)}function _(t){let{tmNode:n}=e,{value:r}=p;n.disabled||r||f(t,n)}return{multiple:r,isGrouped:m(()=>{let{tmNode:t}=e,{parent:n}=t;return n&&n.rawNode.type===`group`}),showCheckmark:l,nodeProps:u,isPending:p,isSelected:m(()=>{let{value:n}=t,{value:a}=r;if(n===null)return!1;let o=e.tmNode.rawNode[c.value];if(a){let{value:e}=i;return e.has(o)}else return n===o}),labelField:s,renderLabel:a,renderOption:o,handleMouseMove:_,handleMouseEnter:g,handleClick:h}},render(){let{clsPrefix:e,tmNode:{rawNode:t},isSelected:n,isPending:r,isGrouped:i,showCheckmark:a,nodeProps:o,renderOption:s,renderLabel:c,handleClick:l,handleMouseEnter:u,handleMouseMove:d}=this,f=Nt(n,e),p=c?[c(t,n),a&&f]:[ve(t[this.labelField],t,n),a&&f],m=o?.(t),h=Q(`div`,Object.assign({},m,{class:[`${e}-base-select-option`,t.class,m?.class,{[`${e}-base-select-option--disabled`]:t.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:r,[`${e}-base-select-option--show-checkmark`]:a}],style:[m?.style||``,t.style||``],onClick:Ge([l,m?.onClick]),onMouseenter:Ge([u,m?.onMouseenter]),onMousemove:Ge([d,m?.onMousemove])}),Q(`div`,{class:`${e}-base-select-option__content`},p));return t.render?t.render({node:h,option:t,selected:n}):s?s({node:h,option:t,selected:n}):h}}),Ft=w(`base-select-menu`,`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[w(`scrollbar`,`
 max-height: var(--n-height);
 `),w(`virtual-list`,`
 max-height: var(--n-height);
 `),w(`base-select-option`,`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[t(`content`,`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),w(`base-select-group-header`,`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),w(`base-select-menu-option-wrapper`,`
 position: relative;
 width: 100%;
 `),t(`loading, empty`,`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),t(`loading`,`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),t(`header`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),t(`action`,`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),w(`base-select-group-header`,`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),w(`base-select-option`,`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[O(`show-checkmark`,`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),S(`&::before`,`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),S(`&:active`,`
 color: var(--n-option-text-color-pressed);
 `),O(`grouped`,`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),O(`pending`,[S(`&::before`,`
 background-color: var(--n-option-color-pending);
 `)]),O(`selected`,`
 color: var(--n-option-text-color-active);
 `,[S(`&::before`,`
 background-color: var(--n-option-color-active);
 `),O(`pending`,[S(`&::before`,`
 background-color: var(--n-option-color-active-pending);
 `)])]),O(`disabled`,`
 cursor: not-allowed;
 `,[F(`selected`,`
 color: var(--n-option-text-color-disabled);
 `),O(`selected`,`
 opacity: var(--n-option-opacity-disabled);
 `)]),t(`check`,`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[ye({enterScale:`0.5`})])])]),It=Z({name:`InternalSelectMenu`,props:Object.assign(Object.assign({},a.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:`medium`},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,scrollbarProps:Object,onToggle:Function}),setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n,mergedComponentPropsRef:r}=s(e),i=h(`InternalSelectMenu`,n,t),o=a(`InternalSelectMenu`,`-internal-select-menu`,Ft,we,e,X(e,`clsPrefix`)),c=J(null),l=J(null),d=J(null),f=Y(()=>e.treeMate.getFlattenedNodes()),p=Y(()=>dt(f.value)),m=J(null);function g(){let{treeMate:t}=e,n=null,{value:r}=e;r===null?n=t.getFirstAvailableNode():(n=e.multiple?t.getNode((r||[])[(r||[]).length-1]):t.getNode(r),(!n||n.disabled)&&(n=t.getFirstAvailableNode())),R(n||null)}function _(){let{value:t}=m;t&&!e.treeMate.getNode(t.key)&&(m.value=null)}let v;le(()=>e.show,t=>{t?v=le(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?g():_(),G(z)):_()},{immediate:!0}):v?.()},{immediate:!0}),U(()=>{v?.()});let y=Y(()=>x(o.value.self[j(`optionHeight`,e.size)])),S=Y(()=>u(o.value.self[j(`padding`,e.size)])),C=Y(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),w=Y(()=>{let e=f.value;return e&&e.length===0}),T=Y(()=>r?.value?.Select?.renderEmpty);function E(t){let{onToggle:n}=e;n&&n(t)}function D(t){let{onScroll:n}=e;n&&n(t)}function O(e){var t;(t=d.value)==null||t.sync(),D(e)}function k(){var e;(e=d.value)==null||e.sync()}function A(){let{value:e}=m;return e||null}function ee(e,t){t.disabled||R(t,!1)}function M(e,t){t.disabled||E(t)}function N(t){var n;ke(t,`action`)||(n=e.onKeyup)==null||n.call(e,t)}function P(t){var n;ke(t,`action`)||(n=e.onKeydown)==null||n.call(e,t)}function F(t){var n;(n=e.onMousedown)==null||n.call(e,t),!e.focusable&&t.preventDefault()}function I(){let{value:e}=m;e&&R(e.getNext({loop:!0}),!0)}function L(){let{value:e}=m;e&&R(e.getPrev({loop:!0}),!0)}function R(e,t=!1){m.value=e,t&&z()}function z(){var t,n;let r=m.value;if(!r)return;let i=p.value(r.key);i!==null&&(e.virtualScroll?(t=l.value)==null||t.scrollTo({index:i}):(n=d.value)==null||n.scrollTo({index:i,elSize:y.value}))}function te(t){var n;c.value?.contains(t.target)&&((n=e.onFocus)==null||n.call(e,t))}function V(t){var n;c.value?.contains(t.relatedTarget)||(n=e.onBlur)==null||n.call(e,t)}ce(ae,{handleOptionMouseEnter:ee,handleOptionClick:M,valueSetRef:C,pendingTmNodeRef:m,nodePropsRef:X(e,`nodeProps`),showCheckmarkRef:X(e,`showCheckmark`),multipleRef:X(e,`multiple`),valueRef:X(e,`value`),renderLabelRef:X(e,`renderLabel`),renderOptionRef:X(e,`renderOption`),labelFieldRef:X(e,`labelField`),valueFieldRef:X(e,`valueField`)}),ce(B,c),q(()=>{let{value:e}=d;e&&e.sync()});let H=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{height:r,borderRadius:i,color:a,groupHeaderTextColor:s,actionDividerColor:c,optionTextColorPressed:l,optionTextColor:d,optionTextColorDisabled:f,optionTextColorActive:p,optionOpacityDisabled:m,optionCheckColor:h,actionTextColor:g,optionColorPending:_,optionColorActive:v,loadingColor:y,loadingSize:b,optionColorActivePending:x,[j(`optionFontSize`,t)]:S,[j(`optionHeight`,t)]:C,[j(`optionPadding`,t)]:w}}=o.value;return{"--n-height":r,"--n-action-divider-color":c,"--n-action-text-color":g,"--n-bezier":n,"--n-border-radius":i,"--n-color":a,"--n-option-font-size":S,"--n-group-header-text-color":s,"--n-option-check-color":h,"--n-option-color-pending":_,"--n-option-color-active":v,"--n-option-color-active-pending":x,"--n-option-height":C,"--n-option-opacity-disabled":m,"--n-option-text-color":d,"--n-option-text-color-active":p,"--n-option-text-color-disabled":f,"--n-option-text-color-pressed":l,"--n-option-padding":w,"--n-option-padding-left":u(w,`left`),"--n-option-padding-right":u(w,`right`),"--n-loading-color":y,"--n-loading-size":b}}),{inlineThemeDisabled:ne}=e,re=ne?b(`internal-select-menu`,Y(()=>e.size[0]),H,e):void 0,ie={selfRef:c,next:I,prev:L,getPendingTmNode:A};return Ue(c,e.onResize),Object.assign({mergedTheme:o,mergedClsPrefix:t,rtlEnabled:i,virtualListRef:l,scrollbarRef:d,itemSize:y,padding:S,flattenedNodes:f,empty:w,mergedRenderEmpty:T,virtualListContainer(){let{value:e}=l;return e?.listElRef},virtualListContent(){let{value:e}=l;return e?.itemsElRef},doScroll:D,handleFocusin:te,handleFocusout:V,handleKeyUp:N,handleKeyDown:P,handleMouseDown:F,handleVirtualListResize:k,handleVirtualListScroll:O,cssVars:ne?void 0:H,themeClass:re?.themeClass,onRender:re?.onRender},ie)},render(){let{$slots:t,virtualScroll:n,clsPrefix:r,mergedTheme:a,themeClass:o,onRender:s}=this;return s?.(),Q(`div`,{ref:`selfRef`,tabindex:this.focusable?0:-1,class:[`${r}-base-select-menu`,`${r}-base-select-menu--${this.size}-size`,this.rtlEnabled&&`${r}-base-select-menu--rtl`,o,this.multiple&&`${r}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},e(t.header,e=>e&&Q(`div`,{class:`${r}-base-select-menu__header`,"data-header":!0,key:`header`},e)),this.loading?Q(`div`,{class:`${r}-base-select-menu__loading`},Q(i,{clsPrefix:r,strokeWidth:20})):this.empty?Q(`div`,{class:`${r}-base-select-menu__empty`,"data-empty":!0},C(t.empty,()=>[this.mergedRenderEmpty?.call(this)||Q(jt,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty,size:this.size})])):Q(R,Object.assign({ref:`scrollbarRef`,theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},this.scrollbarProps),{default:()=>n?Q(Be,{ref:`virtualListRef`,class:`${r}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:e})=>e.isGroup?Q(Mt,{key:e.key,clsPrefix:r,tmNode:e}):e.ignored?null:Q(Pt,{clsPrefix:r,key:e.key,tmNode:e})}):Q(`div`,{class:`${r}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(e=>e.isGroup?Q(Mt,{key:e.key,clsPrefix:r,tmNode:e}):Q(Pt,{clsPrefix:r,key:e.key,tmNode:e})))}),e(t.action,e=>e&&[Q(`div`,{class:`${r}-base-select-menu__action`,"data-action":!0,key:`action`},e),Q(Je,{onFocus:this.onTabOut,key:`focus-detector`})]))}});function Lt(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:i,primaryColor:a,infoColor:o,successColor:s,warningColor:c,errorColor:l,baseColor:u,borderColor:d,opacityDisabled:f,tagColor:p,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,borderRadiusSmall:_,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:b,fontSizeMedium:x,heightMini:S,heightTiny:C,heightSmall:w,heightMedium:T,closeColorHover:E,closeColorPressed:D,buttonColor2Hover:O,buttonColor2Pressed:k,fontWeightStrong:A}=e;return Object.assign(Object.assign({},Ee),{closeBorderRadius:_,heightTiny:S,heightSmall:C,heightMedium:w,heightLarge:T,borderRadius:_,opacityDisabled:f,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,fontSizeLarge:x,fontWeightStrong:A,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:u,colorCheckable:`#0000`,colorHoverCheckable:O,colorPressedCheckable:k,colorChecked:a,colorCheckedHover:n,colorCheckedPressed:i,border:`1px solid ${d}`,textColor:t,color:p,colorBordered:`rgb(250, 250, 252)`,closeIconColor:m,closeIconColorHover:h,closeIconColorPressed:g,closeColorHover:E,closeColorPressed:D,borderPrimary:`1px solid ${r(a,{alpha:.3})}`,textColorPrimary:a,colorPrimary:r(a,{alpha:.12}),colorBorderedPrimary:r(a,{alpha:.1}),closeIconColorPrimary:a,closeIconColorHoverPrimary:a,closeIconColorPressedPrimary:a,closeColorHoverPrimary:r(a,{alpha:.12}),closeColorPressedPrimary:r(a,{alpha:.18}),borderInfo:`1px solid ${r(o,{alpha:.3})}`,textColorInfo:o,colorInfo:r(o,{alpha:.12}),colorBorderedInfo:r(o,{alpha:.1}),closeIconColorInfo:o,closeIconColorHoverInfo:o,closeIconColorPressedInfo:o,closeColorHoverInfo:r(o,{alpha:.12}),closeColorPressedInfo:r(o,{alpha:.18}),borderSuccess:`1px solid ${r(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:r(s,{alpha:.12}),colorBorderedSuccess:r(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:r(s,{alpha:.12}),closeColorPressedSuccess:r(s,{alpha:.18}),borderWarning:`1px solid ${r(c,{alpha:.35})}`,textColorWarning:c,colorWarning:r(c,{alpha:.15}),colorBorderedWarning:r(c,{alpha:.12}),closeIconColorWarning:c,closeIconColorHoverWarning:c,closeIconColorPressedWarning:c,closeColorHoverWarning:r(c,{alpha:.12}),closeColorPressedWarning:r(c,{alpha:.18}),borderError:`1px solid ${r(l,{alpha:.23})}`,textColorError:l,colorError:r(l,{alpha:.1}),colorBorderedError:r(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:r(l,{alpha:.12}),closeColorPressedError:r(l,{alpha:.18})})}var Rt={name:`Tag`,common:_,self:Lt},zt={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},Bt=w(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[O(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),t(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),t(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),t(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),t(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),O(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[t(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),t(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),O(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),O(`icon, avatar`,[O(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),O(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),O(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[F(`disabled`,[S(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[F(`checked`,`color: var(--n-text-color-hover-checkable);`)]),S(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[F(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),O(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[F(`disabled`,[S(`&:hover`,`background-color: var(--n-color-checked-hover);`),S(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),Vt=Object.assign(Object.assign(Object.assign({},a.props),zt),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Ht=L(`n-tag`),Ut=Z({name:`Tag`,props:Vt,slots:Object,setup(e){let t=J(null),{mergedBorderedRef:n,mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o,mergedComponentPropsRef:c}=s(e),l=Y(()=>e.size||c?.value?.Tag?.size||`medium`),d=a(`Tag`,`-tag`,Bt,Rt,e,r);ce(Ht,{roundRef:X(e,`round`)});function f(){if(!e.disabled&&e.checkable){let{checked:t,onCheckedChange:n,onUpdateChecked:r,"onUpdate:checked":i}=e;r&&r(!t),i&&i(!t),n&&n(!t)}}function p(t){if(e.triggerClickOnClose||t.stopPropagation(),!e.disabled){let{onClose:n}=e;n&&T(n,t)}}let m={setTextContent(e){let{value:n}=t;n&&(n.textContent=e)}},g=h(`Tag`,o,r),_=Y(()=>{let{type:t,color:{color:r,textColor:i}={}}=e,a=l.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:c,borderRadius:f,opacityDisabled:p,textColorCheckable:m,textColorHoverCheckable:h,textColorPressedCheckable:g,textColorChecked:_,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:S,colorCheckedPressed:C,closeBorderRadius:w,fontWeightStrong:T,[j(`colorBordered`,t)]:E,[j(`closeSize`,a)]:D,[j(`closeIconSize`,a)]:O,[j(`fontSize`,a)]:k,[j(`height`,a)]:A,[j(`color`,t)]:ee,[j(`textColor`,t)]:M,[j(`border`,t)]:N,[j(`closeIconColor`,t)]:P,[j(`closeIconColorHover`,t)]:F,[j(`closeIconColorPressed`,t)]:I,[j(`closeColorHover`,t)]:L,[j(`closeColorPressed`,t)]:R}}=d.value,z=u(c);return{"--n-font-weight-strong":T,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":o,"--n-border-radius":f,"--n-border":N,"--n-close-icon-size":O,"--n-close-color-pressed":R,"--n-close-color-hover":L,"--n-close-border-radius":w,"--n-close-icon-color":P,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":I,"--n-close-icon-color-disabled":P,"--n-close-margin-top":z.top,"--n-close-margin-right":z.right,"--n-close-margin-bottom":z.bottom,"--n-close-margin-left":z.left,"--n-close-size":D,"--n-color":r||(n.value?E:ee),"--n-color-checkable":v,"--n-color-checked":x,"--n-color-checked-hover":S,"--n-color-checked-pressed":C,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":b,"--n-font-size":k,"--n-height":A,"--n-opacity-disabled":p,"--n-padding":s,"--n-text-color":i||M,"--n-text-color-checkable":m,"--n-text-color-checked":_,"--n-text-color-hover-checkable":h,"--n-text-color-pressed-checkable":g}}),v=i?b(`tag`,Y(()=>{let t=``,{type:r,color:{color:i,textColor:a}={}}=e;return t+=r[0],t+=l.value[0],i&&(t+=`a${E(i)}`),a&&(t+=`b${E(a)}`),n.value&&(t+=`c`),t}),_,e):void 0;return Object.assign(Object.assign({},m),{rtlEnabled:g,mergedClsPrefix:r,contentRef:t,mergedBordered:n,handleClick:f,handleCloseClick:p,cssVars:i?void 0:_,themeClass:v?.themeClass,onRender:v?.onRender})},render(){var t;let{mergedClsPrefix:n,rtlEnabled:r,closable:i,color:{borderColor:a}={},round:o,onRender:s,$slots:c}=this;s?.();let l=e(c.avatar,e=>e&&Q(`div`,{class:`${n}-tag__avatar`},e)),u=e(c.icon,e=>e&&Q(`div`,{class:`${n}-tag__icon`},e));return Q(`div`,{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:r,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:o,[`${n}-tag--avatar`]:l,[`${n}-tag--icon`]:u,[`${n}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||l,Q(`span`,{class:`${n}-tag__content`,ref:`contentRef`},(t=this.$slots).default?.call(t)),!this.checkable&&i?Q(_e,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:o,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?Q(`div`,{class:`${n}-tag__border`,style:{borderColor:a}}):null)}}),Wt=S([w(`base-selection`,`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[w(`base-loading`,`
 color: var(--n-loading-color);
 `),w(`base-selection-tags`,`min-height: var(--n-height);`),t(`border, state-border`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t(`state-border`,`
 z-index: 1;
 border-color: #0000;
 `),w(`base-suffix`,`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[t(`arrow`,`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),w(`base-selection-overlay`,`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[t(`wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),w(`base-selection-placeholder`,`
 color: var(--n-placeholder-color);
 `,[t(`inner`,`
 max-width: 100%;
 overflow: hidden;
 `)]),w(`base-selection-tags`,`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),w(`base-selection-label`,`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[w(`base-selection-input`,`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[t(`content`,`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),t(`render-label`,`
 color: var(--n-text-color);
 `)]),F(`disabled`,[S(`&:hover`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),O(`focus`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),O(`active`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),w(`base-selection-label`,`background-color: var(--n-color-active);`),w(`base-selection-tags`,`background-color: var(--n-color-active);`)])]),O(`disabled`,`cursor: not-allowed;`,[t(`arrow`,`
 color: var(--n-arrow-color-disabled);
 `),w(`base-selection-label`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[w(`base-selection-input`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),t(`render-label`,`
 color: var(--n-text-color-disabled);
 `)]),w(`base-selection-tags`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),w(`base-selection-placeholder`,`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),w(`base-selection-input-tag`,`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[t(`input`,`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),t(`mirror`,`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),[`warning`,`error`].map(e=>O(`${e}-status`,[t(`state-border`,`border: var(--n-border-${e});`),F(`disabled`,[S(`&:hover`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),O(`active`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),w(`base-selection-label`,`background-color: var(--n-color-active-${e});`),w(`base-selection-tags`,`background-color: var(--n-color-active-${e});`)]),O(`focus`,[t(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),w(`base-selection-popover`,`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),w(`base-selection-tag-wrapper`,`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[S(`&:last-child`,`padding-right: 0;`),w(`tag`,`
 font-size: 14px;
 max-width: 100%;
 `,[t(`content`,`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Gt=Z({name:`InternalSelection`,props:Object.assign(Object.assign({},a.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:``},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:`medium`},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){let{mergedClsPrefixRef:t,mergedRtlRef:n}=s(e),r=h(`InternalSelection`,n,t),i=J(null),o=J(null),c=J(null),l=J(null),d=J(null),f=J(null),p=J(null),m=J(null),g=J(null),_=J(null),v=J(!1),y=J(!1),x=J(!1),S=a(`InternalSelection`,`-internal-selection`,Wt,Ce,e,X(e,`clsPrefix`)),C=Y(()=>e.clearable&&!e.disabled&&(x.value||e.active)),w=Y(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):ve(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),T=Y(()=>{let t=e.selectedOption;if(t)return t[e.labelField]}),E=Y(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function D(){var t;let{value:n}=i;if(n){let{value:r}=o;r&&(r.style.width=`${n.offsetWidth}px`,e.maxTagCount!==`responsive`&&((t=g.value)==null||t.sync({showAllItemsBeforeCalculate:!1})))}}function O(){let{value:e}=_;e&&(e.style.display=`none`)}function k(){let{value:e}=_;e&&(e.style.display=`inline-block`)}le(X(e,`active`),e=>{e||O()}),le(X(e,`pattern`),()=>{e.multiple&&G(D)});function A(t){let{onFocus:n}=e;n&&n(t)}function ee(t){let{onBlur:n}=e;n&&n(t)}function M(t){let{onDeleteOption:n}=e;n&&n(t)}function N(t){let{onClear:n}=e;n&&n(t)}function P(t){let{onPatternInput:n}=e;n&&n(t)}function F(e){(!e.relatedTarget||!c.value?.contains(e.relatedTarget))&&A(e)}function I(e){c.value?.contains(e.relatedTarget)||ee(e)}function L(e){N(e)}function R(){x.value=!0}function z(){x.value=!1}function te(t){!e.active||!e.filterable||t.target!==o.value&&t.preventDefault()}function B(e){M(e)}let V=J(!1);function H(t){if(t.key===`Backspace`&&!V.value&&!e.pattern.length){let{selectedOptions:t}=e;t?.length&&B(t[t.length-1])}}let ne=null;function re(t){let{value:n}=i;n&&(n.textContent=t.target.value,D()),e.ignoreComposition&&V.value?ne=t:P(t)}function ie(){V.value=!0}function ae(){V.value=!1,e.ignoreComposition&&P(ne),ne=null}function oe(t){var n;y.value=!0,(n=e.onPatternFocus)==null||n.call(e,t)}function se(t){var n;y.value=!1,(n=e.onPatternBlur)==null||n.call(e,t)}function U(){var t,n;if(e.filterable)y.value=!1,(t=f.value)==null||t.blur(),(n=o.value)==null||n.blur();else if(e.multiple){let{value:e}=l;e?.blur()}else{let{value:e}=d;e?.blur()}}function W(){var t,n,r;e.filterable?(y.value=!1,(t=f.value)==null||t.focus()):e.multiple?(n=l.value)==null||n.focus():(r=d.value)==null||r.focus()}function K(){let{value:e}=o;e&&(k(),e.focus())}function ce(){let{value:e}=o;e&&e.blur()}function ue(e){let{value:t}=p;t&&t.setTextContent(`+${e}`)}function de(){let{value:e}=m;return e}function fe(){return o.value}let pe=null;function me(){pe!==null&&window.clearTimeout(pe)}function Z(){e.active||(me(),pe=window.setTimeout(()=>{E.value&&(v.value=!0)},100))}function Q(){me()}function ge(e){e||(me(),v.value=!1)}le(E,e=>{e||(v.value=!1)}),q(()=>{he(()=>{let t=f.value;t&&(e.disabled?t.removeAttribute(`tabindex`):t.tabIndex=y.value?-1:0)})}),Ue(c,e.onResize);let{inlineThemeDisabled:_e}=e,ye=Y(()=>{let{size:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontWeight:r,borderRadius:i,color:a,placeholderColor:o,textColor:s,paddingSingle:c,paddingMultiple:l,caretColor:d,colorDisabled:f,textColorDisabled:p,placeholderColorDisabled:m,colorActive:h,boxShadowFocus:g,boxShadowActive:_,boxShadowHover:v,border:y,borderFocus:b,borderHover:x,borderActive:C,arrowColor:w,arrowColorDisabled:T,loadingColor:E,colorActiveWarning:D,boxShadowFocusWarning:O,boxShadowActiveWarning:k,boxShadowHoverWarning:A,borderWarning:ee,borderFocusWarning:M,borderHoverWarning:N,borderActiveWarning:P,colorActiveError:F,boxShadowFocusError:I,boxShadowActiveError:L,boxShadowHoverError:R,borderError:z,borderFocusError:te,borderHoverError:B,borderActiveError:V,clearColor:H,clearColorHover:ne,clearColorPressed:re,clearSize:ie,arrowSize:ae,[j(`height`,t)]:oe,[j(`fontSize`,t)]:se}}=S.value,U=u(c),W=u(l);return{"--n-bezier":n,"--n-border":y,"--n-border-active":C,"--n-border-focus":b,"--n-border-hover":x,"--n-border-radius":i,"--n-box-shadow-active":_,"--n-box-shadow-focus":g,"--n-box-shadow-hover":v,"--n-caret-color":d,"--n-color":a,"--n-color-active":h,"--n-color-disabled":f,"--n-font-size":se,"--n-height":oe,"--n-padding-single-top":U.top,"--n-padding-multiple-top":W.top,"--n-padding-single-right":U.right,"--n-padding-multiple-right":W.right,"--n-padding-single-left":U.left,"--n-padding-multiple-left":W.left,"--n-padding-single-bottom":U.bottom,"--n-padding-multiple-bottom":W.bottom,"--n-placeholder-color":o,"--n-placeholder-color-disabled":m,"--n-text-color":s,"--n-text-color-disabled":p,"--n-arrow-color":w,"--n-arrow-color-disabled":T,"--n-loading-color":E,"--n-color-active-warning":D,"--n-box-shadow-focus-warning":O,"--n-box-shadow-active-warning":k,"--n-box-shadow-hover-warning":A,"--n-border-warning":ee,"--n-border-focus-warning":M,"--n-border-hover-warning":N,"--n-border-active-warning":P,"--n-color-active-error":F,"--n-box-shadow-focus-error":I,"--n-box-shadow-active-error":L,"--n-box-shadow-hover-error":R,"--n-border-error":z,"--n-border-focus-error":te,"--n-border-hover-error":B,"--n-border-active-error":V,"--n-clear-size":ie,"--n-clear-color":H,"--n-clear-color-hover":ne,"--n-clear-color-pressed":re,"--n-arrow-size":ae,"--n-font-weight":r}}),be=_e?b(`internal-selection`,Y(()=>e.size[0]),ye,e):void 0;return{mergedTheme:S,mergedClearable:C,mergedClsPrefix:t,rtlEnabled:r,patternInputFocused:y,filterablePlaceholder:w,label:T,selected:E,showTagsPanel:v,isComposing:V,counterRef:p,counterWrapperRef:m,patternInputMirrorRef:i,patternInputRef:o,selfRef:c,multipleElRef:l,singleElRef:d,patternInputWrapperRef:f,overflowRef:g,inputTagElRef:_,handleMouseDown:te,handleFocusin:F,handleClear:L,handleMouseEnter:R,handleMouseLeave:z,handleDeleteOption:B,handlePatternKeyDown:H,handlePatternInputInput:re,handlePatternInputBlur:se,handlePatternInputFocus:oe,handleMouseEnterCounter:Z,handleMouseLeaveCounter:Q,handleFocusout:I,handleCompositionEnd:ae,handleCompositionStart:ie,onPopoverUpdateShow:ge,focus:W,focusInput:K,blur:U,blurInput:ce,updateCounter:ue,getCounter:de,getTail:fe,renderLabel:e.renderLabel,cssVars:_e?void 0:ye,themeClass:be?.themeClass,onRender:be?.onRender}},render(){let{status:e,multiple:t,size:n,disabled:r,filterable:i,maxTagCount:a,bordered:o,clsPrefix:s,ellipsisTagPopoverProps:l,onRender:u,renderTag:d,renderLabel:f}=this;u?.();let p=a===`responsive`,m=typeof a==`number`,h=p||m,g=Q(c,null,{default:()=>Q(Se,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var e;return(e=this.$slots).arrow?.call(e)}})}),_;if(t){let{labelField:e}=this,t=t=>Q(`div`,{class:`${s}-base-selection-tag-wrapper`,key:t.value},d?d({option:t,handleClose:()=>{this.handleDeleteOption(t)}}):Q(Ut,{size:n,closable:!t.disabled,disabled:r,onClose:()=>{this.handleDeleteOption(t)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>f?f(t,!0):ve(t[e],t,!0)})),o=()=>(m?this.selectedOptions.slice(0,a):this.selectedOptions).map(t),c=i?Q(`div`,{class:`${s}-base-selection-input-tag`,ref:`inputTagElRef`,key:`__input-tag__`},Q(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,tabindex:-1,disabled:r,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),Q(`span`,{ref:`patternInputMirrorRef`,class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,u=p?()=>Q(`div`,{class:`${s}-base-selection-tag-wrapper`,ref:`counterWrapperRef`},Q(Ut,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:r})):void 0,v;if(m){let e=this.selectedOptions.length-a;e>0&&(v=Q(`div`,{class:`${s}-base-selection-tag-wrapper`,key:`__counter__`},Q(Ut,{size:n,ref:`counterRef`,onMouseenter:this.handleMouseEnterCounter,disabled:r},{default:()=>`+${e}`})))}let y=p?i?Q(He,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:u,tail:()=>c}):Q(He,{ref:`overflowRef`,updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:o,counter:u}):m&&v?o().concat(v):o(),b=h?()=>Q(`div`,{class:`${s}-base-selection-popover`},p?o():this.selectedOptions.map(t)):void 0,x=h?Object.assign({show:this.showTagsPanel,trigger:`hover`,overlap:!0,placement:`top`,width:`trigger`,onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},l):null,S=!this.selected&&(!this.active||!this.pattern&&!this.isComposing)?Q(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},Q(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,C=i?Q(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-tags`},y,p?null:c,g):Q(`div`,{ref:`multipleElRef`,class:`${s}-base-selection-tags`,tabindex:r?void 0:0},y,g);_=Q(pe,null,h?Q(re,Object.assign({},x,{scrollable:!0,style:`max-height: calc(var(--v-target-height) * 6.6);`}),{trigger:()=>C,default:b}):C,S)}else if(i){let e=this.pattern||this.isComposing,t=this.active?!e:!this.selected,n=this.active?!1:this.selected;_=Q(`div`,{ref:`patternInputWrapperRef`,class:`${s}-base-selection-label`,title:this.patternInputFocused?void 0:We(this.label)},Q(`input`,Object.assign({},this.inputProps,{ref:`patternInputRef`,class:`${s}-base-selection-input`,value:this.active?this.pattern:``,placeholder:``,readonly:r,disabled:r,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),n?Q(`div`,{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:`input`},Q(`div`,{class:`${s}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):ve(this.label,this.selectedOption,!0))):null,t?Q(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},Q(`div`,{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else _=Q(`div`,{ref:`singleElRef`,class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label===void 0?Q(`div`,{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:`placeholder`},Q(`div`,{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):Q(`div`,{class:`${s}-base-selection-input`,title:We(this.label),key:`input`},Q(`div`,{class:`${s}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):f?f(this.selectedOption,!0):ve(this.label,this.selectedOption,!0))),g);return Q(`div`,{ref:`selfRef`,class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},_,o?Q(`div`,{class:`${s}-base-selection__border`}):null,o?Q(`div`,{class:`${s}-base-selection__state-border`}):null)}});function Kt(e){return e.type===`group`}function qt(e){return e.type===`ignored`}function Jt(e,t){try{return!!(1+t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Yt(e,t){return{getIsGroup:Kt,getIgnored:qt,getKey(t){return Kt(t)?t.name||t.key||`key-required`:t[e]},getChildren(e){return e[t]}}}function Xt(e,t,n,r){if(!t)return e;function i(e){if(!Array.isArray(e))return[];let a=[];for(let o of e)if(Kt(o)){let e=i(o[r]);e.length&&a.push(Object.assign({},o,{[r]:e}))}else if(qt(o))continue;else t(n,o)&&a.push(o);return a}return i(e)}function Zt(e,t,n){let r=new Map;return e.forEach(e=>{Kt(e)?e[n].forEach(e=>{r.set(e[t],e)}):r.set(e[t],e)}),r}var Qt=L(`n-checkbox-group`),$t=Z({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){let{mergedClsPrefixRef:t}=s(e),n=y(e),{mergedSizeRef:r,mergedDisabledRef:i}=n,a=J(e.defaultValue),o=xe(Y(()=>e.value),a),c=Y(()=>o.value?.length||0),l=Y(()=>Array.isArray(o.value)?new Set(o.value):new Set);function u(t,r){let{nTriggerFormInput:i,nTriggerFormChange:s}=n,{onChange:c,"onUpdate:value":l,onUpdateValue:u}=e;if(Array.isArray(o.value)){let e=Array.from(o.value),n=e.findIndex(e=>e===r);t?~n||(e.push(r),u&&T(u,e,{actionType:`check`,value:r}),l&&T(l,e,{actionType:`check`,value:r}),i(),s(),a.value=e,c&&T(c,e)):~n&&(e.splice(n,1),u&&T(u,e,{actionType:`uncheck`,value:r}),l&&T(l,e,{actionType:`uncheck`,value:r}),c&&T(c,e),a.value=e,i(),s())}else t?(u&&T(u,[r],{actionType:`check`,value:r}),l&&T(l,[r],{actionType:`check`,value:r}),c&&T(c,[r]),a.value=[r],i(),s()):(u&&T(u,[],{actionType:`uncheck`,value:r}),l&&T(l,[],{actionType:`uncheck`,value:r}),c&&T(c,[]),a.value=[],i(),s())}return ce(Qt,{checkedCountRef:c,maxRef:X(e,`max`),minRef:X(e,`min`),valueSetRef:l,disabledRef:i,mergedSizeRef:r,toggleCheckbox:u}),{mergedClsPrefix:t}},render(){return Q(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}}),en=()=>Q(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},Q(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})),tn=()=>Q(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},Q(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),nn=S([w(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[O(`show-label`,`line-height: var(--n-label-line-height);`),S(`&:hover`,[w(`checkbox-box`,[t(`border`,`border: var(--n-border-checked);`)])]),S(`&:focus:not(:active)`,[w(`checkbox-box`,[t(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),O(`inside-table`,[w(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),O(`checked`,[w(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[w(`checkbox-icon`,[S(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),O(`indeterminate`,[w(`checkbox-box`,[w(`checkbox-icon`,[S(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),S(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),O(`checked, indeterminate`,[S(`&:focus:not(:active)`,[w(`checkbox-box`,[t(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),w(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[t(`border`,{border:`var(--n-border-checked)`})])]),O(`disabled`,{cursor:`not-allowed`},[O(`checked`,[w(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[t(`border`,{border:`var(--n-border-disabled-checked)`}),w(`checkbox-icon`,[S(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),w(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[t(`border`,`
 border: var(--n-border-disabled);
 `),w(`checkbox-icon`,[S(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),t(`label`,`
 color: var(--n-text-color-disabled);
 `)]),w(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),w(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[t(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),w(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[S(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),n({left:`1px`,top:`1px`})])]),t(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[S(`&:empty`,{display:`none`})])]),P(w(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),A(w(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),rn=Z({name:`Checkbox`,props:Object.assign(Object.assign({},a.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(e){let t=W(Qt,null),n=J(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:o,mergedComponentPropsRef:c}=s(e),l=J(e.defaultChecked),u=xe(X(e,`checked`),l),d=m(()=>{if(t){let n=t.valueSetRef.value;return n&&e.value!==void 0?n.has(e.value):!1}else return u.value===e.checkedValue}),f=y(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{value:e}=t.mergedSizeRef;if(e!==void 0)return e}if(n){let{mergedSize:e}=n;if(e!==void 0)return e.value}return c?.value?.Checkbox?.size||`medium`},mergedDisabled(n){let{disabled:r}=e;if(r!==void 0)return r;if(t){if(t.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:n}=t;if(e!==void 0&&n.value>=e&&!d.value)return!0;let{minRef:{value:r}}=t;if(r!==void 0&&n.value<=r&&d.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:p,mergedSizeRef:_}=f,v=a(`Checkbox`,`-checkbox`,nn,Te,e,r);function x(n){if(t&&e.value!==void 0)t.toggleCheckbox(!d.value,e.value);else{let{onChange:t,"onUpdate:checked":r,onUpdateChecked:i}=e,{nTriggerFormInput:a,nTriggerFormChange:o}=f,s=d.value?e.uncheckedValue:e.checkedValue;r&&T(r,s,n),i&&T(i,s,n),t&&T(t,s,n),a(),o(),l.value=s}}function S(e){p.value||x(e)}function C(e){if(!p.value)switch(e.key){case` `:case`Enter`:x(e)}}function w(e){switch(e.key){case` `:e.preventDefault()}}let E={focus:()=>{var e;(e=n.value)==null||e.focus()},blur:()=>{var e;(e=n.value)==null||e.blur()}},D=h(`Checkbox`,o,r),O=Y(()=>{let{value:e}=_,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:p,borderChecked:m,boxShadowFocus:h,textColor:g,textColorDisabled:y,checkMarkColorDisabledChecked:b,colorDisabledChecked:x,borderDisabledChecked:S,labelPadding:C,labelLineHeight:w,labelFontWeight:T,[j(`fontSize`,e)]:E,[j(`size`,e)]:D}}=v.value;return{"--n-label-line-height":w,"--n-label-font-weight":T,"--n-size":D,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":m,"--n-border-focus":f,"--n-border-disabled":p,"--n-border-disabled-checked":S,"--n-box-shadow-focus":h,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":x,"--n-text-color":g,"--n-text-color-disabled":y,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":b,"--n-font-size":E,"--n-label-padding":C}}),k=i?b(`checkbox`,Y(()=>_.value[0]),O,e):void 0;return Object.assign(f,E,{rtlEnabled:D,selfRef:n,mergedClsPrefix:r,mergedDisabled:p,renderedChecked:d,mergedTheme:v,labelId:g(),handleClick:S,handleKeyUp:C,handleKeyDown:w,cssVars:i?void 0:O,themeClass:k?.themeClass,onRender:k?.onRender})},render(){var t;let{$slots:n,renderedChecked:r,mergedDisabled:i,indeterminate:a,privateInsideTable:o,cssVars:s,labelId:c,label:l,mergedClsPrefix:u,focusable:f,handleKeyUp:p,handleKeyDown:m,handleClick:h}=this;(t=this.onRender)==null||t.call(this);let g=e(n.default,e=>l||e?Q(`span`,{class:`${u}-checkbox__label`,id:c},l||e):null);return Q(`div`,{ref:`selfRef`,class:[`${u}-checkbox`,this.themeClass,this.rtlEnabled&&`${u}-checkbox--rtl`,r&&`${u}-checkbox--checked`,i&&`${u}-checkbox--disabled`,a&&`${u}-checkbox--indeterminate`,o&&`${u}-checkbox--inside-table`,g&&`${u}-checkbox--show-label`],tabindex:i||!f?void 0:0,role:`checkbox`,"aria-checked":a?`mixed`:r,"aria-labelledby":c,style:s,onKeyup:p,onKeydown:m,onClick:h,onMousedown:()=>{ee(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},Q(`div`,{class:`${u}-checkbox-box-wrapper`},`\xA0`,Q(`div`,{class:`${u}-checkbox-box`},Q(d,null,{default:()=>this.indeterminate?Q(`div`,{key:`indeterminate`,class:`${u}-checkbox-icon`},tn()):Q(`div`,{key:`check`,class:`${u}-checkbox-icon`},en())}),Q(`div`,{class:`${u}-checkbox-box__border`}))),g)}}),an=S([w(`select`,`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),w(`select-menu`,`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[ye({originalTransition:`background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)`})])]),on=Z({name:`Select`,props:Object.assign(Object.assign({},a.props),{to:te.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearCreatedOptionsOnClear:{type:Boolean,default:!0},clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:`bottom-start`},widthMode:{type:String,default:`trigger`},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:`label`},valueField:{type:String,default:`value`},childrenField:{type:String,default:`children`},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:`show`},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},scrollbarProps:Object,onChange:[Function,Array],items:Array}),slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,namespaceRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:o}=s(e),c=a(`Select`,`-select`,an,De,e,t),u=J(e.defaultValue),d=xe(X(e,`value`),u),f=J(!1),p=J(``),m=ne(e,[`items`,`options`]),h=J([]),g=J([]),_=Y(()=>g.value.concat(h.value).concat(m.value)),x=Y(()=>{let{filter:t}=e;if(t)return t;let{labelField:n,valueField:r}=e;return(e,t)=>{if(!t)return!1;let i=t[n];if(typeof i==`string`)return Jt(e,i);let a=t[r];return typeof a==`string`?Jt(e,a):typeof a==`number`?Jt(e,String(a)):!1}}),S=Y(()=>{if(e.remote)return m.value;{let{value:t}=_,{value:n}=p;return!n.length||!e.filterable?t:Xt(t,x.value,n,e.childrenField)}}),C=Y(()=>{let{valueField:t,childrenField:n}=e,r=Yt(t,n);return kt(S.value,r)}),w=Y(()=>Zt(_.value,e.valueField,e.childrenField)),E=J(!1),D=xe(X(e,`show`),E),O=J(null),k=J(null),A=J(null),{localeRef:ee}=be(`Select`),j=Y(()=>e.placeholder??ee.value.placeholder),M=[],N=J(new Map),P=Y(()=>{let{fallbackOption:t}=e;if(t===void 0){let{labelField:t,valueField:n}=e;return e=>({[t]:String(e),[n]:e})}return t===!1?!1:e=>Object.assign(t(e),{value:e})});function F(t){let n=e.remote,{value:r}=N,{value:i}=w,{value:a}=P,o=[];return t.forEach(e=>{if(i.has(e))o.push(i.get(e));else if(n&&r.has(e))o.push(r.get(e));else if(a){let t=a(e);t&&o.push(t)}}),o}let I=Y(()=>{if(e.multiple){let{value:e}=d;return Array.isArray(e)?F(e):[]}return null}),L=Y(()=>{let{value:t}=d;return!e.multiple&&!Array.isArray(t)?t===null?null:F([t])[0]||null:null}),R=y(e,{mergedSize:t=>{let{size:n}=e;if(n)return n;let{mergedSize:r}=t||{};return r?.value?r.value:o?.value?.Select?.size||`medium`}}),{mergedSizeRef:z,mergedDisabledRef:B,mergedStatusRef:V}=R;function H(t,n){let{onChange:r,"onUpdate:value":i,onUpdateValue:a}=e,{nTriggerFormChange:o,nTriggerFormInput:s}=R;r&&T(r,t,n),a&&T(a,t,n),i&&T(i,t,n),u.value=t,o(),s()}function re(t){let{onBlur:n}=e,{nTriggerFormBlur:r}=R;n&&T(n,t),r()}function ie(){let{onClear:t}=e;t&&T(t)}function ae(t){let{onFocus:n,showOnFocus:r}=e,{nTriggerFormFocus:i}=R;n&&T(n,t),i(),r&&G()}function oe(t){let{onSearch:n}=e;n&&T(n,t)}function se(t){let{onScroll:n}=e;n&&T(n,t)}function U(){var t;let{remote:n,multiple:r}=e;if(n){let{value:n}=N;if(r){let{valueField:r}=e;(t=I.value)==null||t.forEach(e=>{n.set(e[r],e)})}else{let t=L.value;t&&n.set(t[e.valueField],t)}}}function W(t){let{onUpdateShow:n,"onUpdate:show":r}=e;n&&T(n,t),r&&T(r,t),E.value=t}function G(){B.value||(W(!0),E.value=!0,e.filterable&&Me())}function K(){W(!1)}function ce(){p.value=``,g.value=M}let q=J(!1);function ue(){e.filterable&&(q.value=!0)}function de(){e.filterable&&(q.value=!1,D.value||ce())}function fe(){B.value||(D.value?e.filterable?Me():K():G())}function pe(e){(A.value?.selfRef)?.contains(e.relatedTarget)||(f.value=!1,re(e),K())}function me(e){ae(e),f.value=!0}function he(){f.value=!0}function Z(e){O.value?.$el.contains(e.relatedTarget)||(f.value=!1,re(e),K())}function Q(){var e;(e=O.value)==null||e.focus(),K()}function _e(e){D.value&&(O.value?.$el.contains(l(e))||K())}function ve(t){if(!Array.isArray(t))return[];if(P.value)return Array.from(t);{let{remote:n}=e,{value:r}=w;if(n){let{value:e}=N;return t.filter(t=>r.has(t)||e.has(t))}else return t.filter(e=>r.has(e))}}function ye(e){Se(e.rawNode)}function Se(t){if(B.value)return;let{tag:n,remote:r,clearFilterAfterSelect:i,valueField:a}=e;if(n&&!r){let{value:e}=g,t=e[0]||null;if(t){let e=h.value;e.length?e.push(t):h.value=[t],g.value=M}}if(r&&N.value.set(t[a],t),e.multiple){let e=ve(d.value),o=e.findIndex(e=>e===t[a]);if(~o){if(e.splice(o,1),n&&!r){let e=Ce(t[a]);~e&&(h.value.splice(e,1),i&&(p.value=``))}}else e.push(t[a]),i&&(p.value=``);H(e,F(e))}else{if(n&&!r){let e=Ce(t[a]);~e?h.value=[h.value[e]]:h.value=M}je(),K(),H(t[a],t)}}function Ce(t){return h.value.findIndex(n=>n[e.valueField]===t)}function we(t){D.value||G();let{value:n}=t.target;p.value=n;let{tag:r,remote:i}=e;if(oe(n),r&&!i){if(!n){g.value=M;return}let{onCreate:t}=e,r=t?t(n):{[e.labelField]:n,[e.valueField]:n},{valueField:i,labelField:a}=e;m.value.some(e=>e[i]===r[i]||e[a]===r[a])||h.value.some(e=>e[i]===r[i]||e[a]===r[a])?g.value=M:g.value=[r]}}function Te(t){t.stopPropagation();let{multiple:n,tag:r,remote:i,clearCreatedOptionsOnClear:a}=e;!n&&e.filterable&&K(),r&&!i&&a&&(h.value=M),ie(),n?H([],[]):H(null,null)}function Ee(e){!ke(e,`action`)&&!ke(e,`empty`)&&!ke(e,`header`)&&e.preventDefault()}function Oe(e){se(e)}function Ae(t){var n,r,i;if(!e.keyboard){t.preventDefault();return}switch(t.key){case` `:if(e.filterable)break;t.preventDefault();case`Enter`:if(!O.value?.isComposing){if(D.value){let t=A.value?.getPendingTmNode();t?ye(t):e.filterable||(K(),je())}else if(G(),e.tag&&q.value){let t=g.value[0];if(t){let n=t[e.valueField],{value:r}=d;e.multiple&&Array.isArray(r)&&r.includes(n)||Se(t)}}}t.preventDefault();break;case`ArrowUp`:if(t.preventDefault(),e.loading)return;D.value&&((n=A.value)==null||n.prev());break;case`ArrowDown`:if(t.preventDefault(),e.loading)return;D.value?(r=A.value)==null||r.next():G();break;case`Escape`:D.value&&(ge(t),K()),(i=O.value)==null||i.focus();break}}function je(){var e;(e=O.value)==null||e.focus()}function Me(){var e;(e=O.value)==null||e.focusInput()}function Ne(){var e;D.value&&((e=k.value)==null||e.syncPosition())}U(),le(X(e,`options`),U);let Pe={focus:()=>{var e;(e=O.value)==null||e.focus()},focusInput:()=>{var e;(e=O.value)==null||e.focusInput()},blur:()=>{var e;(e=O.value)==null||e.blur()},blurInput:()=>{var e;(e=O.value)==null||e.blurInput()}},Fe=Y(()=>{let{self:{menuBoxShadow:e}}=c.value;return{"--n-menu-box-shadow":e}}),Ie=i?b(`select`,void 0,Fe,e):void 0;return Object.assign(Object.assign({},Pe),{mergedStatus:V,mergedClsPrefix:t,mergedBordered:n,namespace:r,treeMate:C,isMounted:v(),triggerRef:O,menuRef:A,pattern:p,uncontrolledShow:E,mergedShow:D,adjustedTo:te(e),uncontrolledValue:u,mergedValue:d,followerRef:k,localizedPlaceholder:j,selectedOption:L,selectedOptions:I,mergedSize:z,mergedDisabled:B,focused:f,activeWithoutMenuOpen:q,inlineThemeDisabled:i,onTriggerInputFocus:ue,onTriggerInputBlur:de,handleTriggerOrMenuResize:Ne,handleMenuFocus:he,handleMenuBlur:Z,handleMenuTabOut:Q,handleTriggerClick:fe,handleToggle:ye,handleDeleteOption:Se,handlePatternInput:we,handleClear:Te,handleTriggerBlur:pe,handleTriggerFocus:me,handleKeydown:Ae,handleMenuAfterLeave:ce,handleMenuClickOutside:_e,handleMenuScroll:Oe,handleMenuKeydown:Ae,handleMenuMousedown:Ee,mergedTheme:c,cssVars:i?void 0:Fe,themeClass:Ie?.themeClass,onRender:Ie?.onRender})},render(){return Q(`div`,{class:`${this.mergedClsPrefix}-select`},Q(se,null,{default:()=>[Q(H,null,{default:()=>Q(Gt,{ref:`triggerRef`,inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e;return[(e=this.$slots).arrow?.call(e)]}})}),Q(ie,{ref:`followerRef`,show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===te.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?`target`:void 0,minWidth:`target`,placement:this.placement},{default:()=>Q(f,{name:`fade-in-scale-up-transition`,appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e;return this.mergedShow||this.displayDirective===`show`?((e=this.onRender)==null||e.call(this),fe(Q(It,Object.assign({},this.menuProps,{ref:`menuRef`,onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,this.menuProps?.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[this.menuProps?.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange,scrollbarProps:this.scrollbarProps}),{empty:()=>{var e;return[(e=this.$slots).empty?.call(e)]},header:()=>{var e;return[(e=this.$slots).header?.call(e)]},action:()=>{var e;return[(e=this.$slots).action?.call(e)]}}),this.displayDirective===`show`?[[o,this.mergedShow],[k,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[k,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Ut as a,kt as c,Ge as d,Be as f,Yt as i,Et as l,rn as n,It as o,ke as p,$t as r,jt as s,on as t,dt as u};
//# sourceMappingURL=Select-DjTx4GRU.js.map