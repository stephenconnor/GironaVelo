import{$ as Qn,A as Wt,B as Ut,C as Qt,D as ze,E as zn,F as qt,G as Vn,H as Ke,I as Je,J as $n,K as Gt,L as Hn,M as et,N as Ue,O as Be,P as Rn,Q as vt,R as jn,S as Zt,T as Xt,U as Wn,V as Un,W as tt,X as Ve,Y as yt,Z as _t,_ as Qe,aa as qn,ba as Yt,ca as Gn,da as Zn,ea as Ct,fa as Me,g as Bn,ga as $,h as ke,ha as Kt,i as bt,ia as Jt,j as Ce,ja as en,k as Pn,ka as $e,l as Y,la as qe,ma as z,na as Xn,p as be,pa as Jn,q as Rt,r as Fn,t as jt,u as Ae,v as Ln,w as xe,x as Nn,y as On,z as An}from"./chunk-7FGS7R2W.js";import{$a as oe,Aa as Z,Ab as Dn,Ba as he,Bb as Sn,Cb as Ee,D as Ye,Da as X,E as N,Ea as w,Eb as Vt,F as G,Fa as _,Fb as F,Gb as ue,H,Hb as f,Ib as $t,J as c,Jb as ht,Lb as kn,Ma as S,Na as re,O as R,Oa as se,Ob as D,P as j,Pa as ut,Pb as Se,Q as O,Qa as mt,Qb as Ht,R as xn,Ra as s,S as He,Sa as m,Ta as g,Ua as k,V as me,Va as ve,W as dt,Wa as ye,Xa as te,Ya as ce,Z as de,Za as pe,_a as J,aa as ge,ab as _e,ba as Tn,bb as Q,ca as v,cb as u,da as De,db as ne,eb as W,fb as we,gb as je,h as vn,ha as Re,hb as M,ib as I,jb as Ot,kb as At,l as yn,la as ct,lb as ft,ma as l,mb as We,ob as Ne,pb as y,qb as A,r as _n,rb as ee,sb as Oe,ta as pt,tb as wn,ua as Nt,ub as En,vb as Mn,wb as In,x as Cn,xb as V,yb as gt,za as E,zb as zt}from"./chunk-ETTDL5G5.js";import{a as Kn}from"./chunk-WNQ4N7RJ.js";import{a as Yn,b as xt}from"./chunk-UWEXHFWI.js";import{a as T,b as lt,c as bn,d as Le}from"./chunk-4CLCTAJ7.js";function Pe(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let i=t[e];if(!i)continue;let n=typeof i;if(n==="string"||n==="number")r.push(i);else if(n==="object"){let o=Array.isArray(i)?[Pe(...i)]:Object.entries(i).map(([a,d])=>d?a:void 0);r=o.length?r.concat(o.filter(a=>!!a)):r}}return r.join(" ").trim()}}var Co=Object.defineProperty,ei=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,To=Object.prototype.propertyIsEnumerable,ti=(t,r,e)=>r in t?Co(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,ni=(t,r)=>{for(var e in r||(r={}))xo.call(r,e)&&ti(t,e,r[e]);if(ei)for(var e of ei(r))To.call(r,e)&&ti(t,e,r[e]);return t};function ii(...t){if(t){let r=[];for(let e=0;e<t.length;e++){let i=t[e];if(!i)continue;let n=typeof i;if(n==="string"||n==="number")r.push(i);else if(n==="object"){let o=Array.isArray(i)?[ii(...i)]:Object.entries(i).map(([a,d])=>d?a:void 0);r=o.length?r.concat(o.filter(a=>!!a)):r}}return r.join(" ").trim()}}function wo(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Eo({skipUndefined:t=!1},...r){return r?.reduce((e,i={})=>{for(let n in i){let o=i[n];if(!(t&&o===void 0))if(n==="style")e.style=ni(ni({},e.style),i.style);else if(n==="class"||n==="className")e[n]=ii(e[n],i[n]);else if(wo(o)){let a=e[n];e[n]=a?(...d)=>{a(...d),o(...d)}:o}else e[n]=o}return e},{})}function tn(...t){return Eo({skipUndefined:!1},...t)}var Tt={};function le(t="pui_id_"){return Object.hasOwn(Tt,t)||(Tt[t]=0),Tt[t]++,`${t}${Tt[t]}`}var oi=(()=>{class t extends z{name="common";static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),q=new H("PARENT_INSTANCE"),L=(()=>{class t{document=c(He);platformId=c(Re);el=c(De);injector=c(xn);cd=c(kn);renderer=c(pt);config=c(Xn);$parentInstance=c(q,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=c(oi);baseStyle=c(z);scopedStyleEl;parent=this.$params.parent;cn=Pe;_themeScopedListener;themeChangeListenerMap=new Map;dt=f();unstyled=f();pt=f();ptOptions=f();$attrSelector=le("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=de(void 0);directiveUnstyled=de(void 0);$unstyled=F(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=F(()=>yt(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>yt(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||yt(e,this.$params))}get $style(){return T(T({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ge(e=>{this.document&&!Rt(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),ge(e=>{this.document&&!Rt(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...i){return Un(e)?e(...i):tn(...i)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,i="",n={}){return Qn(e,i,n)}_hook(e,...i){if(!this.$hostName){let n=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),o=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);n?.(...i),o?.(...i)}}_load(){qe.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),qe.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);tt(e)&&this.baseStyle.load(e,T({name:"global"},this.$styleOptions))}_loadCoreStyles(){!qe.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),qe.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!$e.isStyleNameLoaded("common")){let{primitive:e,semantic:i,global:n,style:o}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,T({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,T({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,T({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(T({name:"global-style"},this.$styleOptions),o),$e.setLoadedStyleName("common")}if(!$e.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:i}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,T({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(T({name:`${this.$style?.name}-style`},this.$styleOptions),i),$e.setLoadedStyleName(this.$style?.name)}if(!$e.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,T({name:"layer-order",first:!0},this.$styleOptions)),$e.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:i}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},n=this.$style?.load(i,T({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,i=()=>{}){this._offThemeChangeListener(e),qe.clearLoadedStyleNames();let n=i.bind(this);this.themeChangeListenerMap.set(e,n),Jt.on("theme:change",n)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Jt.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},i="",n={},o=!0){let a=/./g.test(i)&&!!n[i.split(".")[0]],{mergeSections:d=!0,mergeProps:p=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},h=o?a?this._useGlobalPT(this._getPTClassValue,i,n):this._useDefaultPT(this._getPTClassValue,i,n):void 0,b=a?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,i,lt(T({},n),{global:h||{}})),C=this._getPTDatasets(i);return d||!d&&b?p?this._mergeProps(p,h,b,C):T(T(T({},h),b),C):T(T({},b),C)}_getPTDatasets(e=""){let i="data-pc-",n=e==="root"&&tt(this.$pt()?.["data-pc-section"]);return e!=="transition"&&lt(T({},e==="root"&&lt(T({[`${i}name`]:Qe(n?this.$pt()?.["data-pc-section"]:this.$name)},n&&{[`${i}extend`]:Qe(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${i}section`]:Qe(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,i,n){let o=this._getOptionValue(e,i,n);return _t(o)||qn(o)?{class:o}:o}_getPT(e,i="",n){let o=(a,d=!1)=>{let p=n?n(a):a,h=Qe(i),b=Qe(this.$hostName||this.$name);return(d?h!==b?p?.[h]:void 0:p?.[h])??p};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)}_usePT(e,i,n,o){let a=d=>i?.call(this,d,n,o);if(e?.hasOwnProperty("_usept")){let{mergeSections:d=!0,mergeProps:p=!1}=e._usept||this.config?.ptOptions()||{},h=a(e.originalValue),b=a(e.value);return h===void 0&&b===void 0?void 0:_t(b)?b:_t(h)?h:d||!d&&b?p?this._mergeProps(p,h,b):T(T({},h),b):b}return a(e)}_useGlobalPT(e,i,n){return this._usePT(this.$globalPT,e,i,n)}_useDefaultPT(e,i,n){return this._usePT(this.$defaultPT,e,i,n)}ptm(e="",i={}){return this._getPTValue(this.$pt(),e,T(T({},this.$params),i))}ptms(e,i={}){return e.reduce((n,o)=>(n=tn(n,this.ptm(o,i))||{},n),{})}ptmo(e={},i="",n={}){return this._getPTValue(e,i,T({instance:this},n),!1)}cx(e,i={}){return this.$unstyled()?void 0:Pe(this._getOptionValue(this.$style.classes,e,T(T({},this.$params),i)))}sx(e="",i=!0,n={}){if(i){let o=this._getOptionValue(this.$style.inlineStyles,e,T(T({},this.$params),n)),a=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,T(T({},this.$params),n));return T(T({},a),o)}}static \u0275fac=function(i){return new(i||t)};static \u0275dir=he({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[V([oi,z]),Tn]})}return t})();var x=(()=>{class t{el;renderer;pBind=f(void 0);_attrs=de(void 0);attrs=F(()=>this._attrs()||this.pBind());styles=F(()=>this.attrs()?.style);classes=F(()=>Pe(this.attrs()?.class));listeners=[];constructor(e,i){this.el=e,this.renderer=i,ge(()=>{let d=this.attrs()||{},{style:n,class:o}=d,a=bn(d,["style","class"]);for(let[p,h]of Object.entries(a))if(p.startsWith("on")&&typeof h=="function"){let b=p.slice(2).toLowerCase();if(!this.listeners.some(C=>C.eventName===b)){let C=this.renderer.listen(this.el.nativeElement,b,h);this.listeners.push({eventName:b,unlisten:C})}}else h==null?this.renderer.removeAttribute(this.el.nativeElement,p):(this.renderer.setAttribute(this.el.nativeElement,p,h.toString()),p in this.el.nativeElement&&(this.el.nativeElement[p]=h))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){Ve(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(i){return new(i||t)(Nt(De),Nt(pt))};static \u0275dir=he({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(i,n){i&2&&(Ne(n.styles()),y(n.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({})}return t})();var ai=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
        background: dt('tabs.tablist.background');
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var ri=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Mo=`
    ${ri}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,Io={root:"p-ink"},si=(()=>{class t extends z{name="ripple";style=Mo;classes=Io;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var nt=(()=>{class t extends L{componentName="Ripple";zone=c(dt);_componentStyle=c(si);animationListener;mouseDownListener;timeout;constructor(){super(),ge(()=>{be(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(!this.$unstyled()&&xe(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!Gt(i)&&!Be(i)){let d=Math.max(ze(this.el.nativeElement),Ue(this.el.nativeElement));i.style.height=d+"px",i.style.width=d+"px"}let n=et(this.el.nativeElement),o=e.pageX-n.left+this.document.body.scrollTop-Be(i)/2,a=e.pageY-n.top+this.document.body.scrollLeft-Gt(i)/2;this.renderer.setStyle(i,"top",a+"px"),this.renderer.setStyle(i,"left",o+"px"),!this.$unstyled()&&Ae(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let d=this.getInk();d&&(!this.$unstyled()&&xe(d,"p-ink-active"),d.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let i=0;i<e.length;i++)if(typeof e[i].className=="string"&&e[i].className.indexOf("p-ink")!==-1)return e[i];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&xe(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&xe(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,jn(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=he({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[V([si]),w]})}return t})(),li=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({})}return t})();var So=["*"],ko=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,di=(()=>{class t extends z{name="baseicon";css=ko;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fe=(()=>{class t extends L{spin=!1;_componentStyle=c(di);getClassNames(){return Pe("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(i,n){i&2&&y(n.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[V([di]),w],ngContentSelectors:So,decls:1,vars:0,template:function(i,n){i&1&&(ne(),W(0))},encapsulation:2,changeDetection:0})}return t})();var Bo=["data-p-icon","chevron-left"],ci=(()=>{class t extends fe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","chevron-left"]],features:[w],attrs:Bo,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(O(),te(0,"path",0))},encapsulation:2})}return t})();var Po=["data-p-icon","chevron-right"],pi=(()=>{class t extends fe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","chevron-right"]],features:[w],attrs:Po,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(O(),te(0,"path",0))},encapsulation:2})}return t})();var Fo=["data-p-icon","minus"],ui=(()=>{class t extends fe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","minus"]],features:[w],attrs:Fo,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,n){i&1&&(O(),te(0,"path",0))},encapsulation:2})}return t})();var Lo=["data-p-icon","plus"],mi=(()=>{class t extends fe{pathId;onInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","plus"]],features:[w],attrs:Lo,decls:5,vars:2,consts:[["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(O(),ve(0,"g"),te(1,"path",0),ye(),ve(2,"defs")(3,"clipPath",1),te(4,"rect",2),ye()()),i&2&&(S("clip-path",n.pathId),l(3),_e("id",n.pathId))},encapsulation:2})}return t})();var No=["data-p-icon","spinner"],fi=(()=>{class t extends fe{pathId;onInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","spinner"]],features:[w],attrs:No,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(O(),ve(0,"g"),te(1,"path",0),ye(),ve(2,"defs")(3,"clipPath",1),te(4,"rect",2),ye()()),i&2&&(S("clip-path",n.pathId),l(3),_e("id",n.pathId))},encapsulation:2})}return t})();var Oo=["data-p-icon","times"],gi=(()=>{class t extends fe{static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","times"]],features:[w],attrs:Oo,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,n){i&1&&(O(),te(0,"path",0))},encapsulation:2})}return t})();var Ao=["data-p-icon","window-maximize"],hi=(()=>{class t extends fe{pathId;onInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","window-maximize"]],features:[w],attrs:Ao,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14ZM9.77805 7.42192C9.89013 7.534 10.0415 7.59788 10.2 7.59995C10.3585 7.59788 10.5099 7.534 10.622 7.42192C10.7341 7.30985 10.798 7.15844 10.8 6.99995V3.94242C10.8066 3.90505 10.8096 3.86689 10.8089 3.82843C10.8079 3.77159 10.7988 3.7157 10.7824 3.6623C10.756 3.55552 10.701 3.45698 10.622 3.37798C10.5099 3.2659 10.3585 3.20202 10.2 3.19995H7.00002C6.84089 3.19995 6.68828 3.26317 6.57576 3.37569C6.46324 3.48821 6.40002 3.64082 6.40002 3.79995C6.40002 3.95908 6.46324 4.11169 6.57576 4.22422C6.68828 4.33674 6.84089 4.39995 7.00002 4.39995H8.80006L6.19997 7.00005C6.10158 7.11005 6.04718 7.25246 6.04718 7.40005C6.04718 7.54763 6.10158 7.69004 6.19997 7.80005C6.30202 7.91645 6.44561 7.98824 6.59997 8.00005C6.75432 7.98824 6.89791 7.91645 6.99997 7.80005L9.60002 5.26841V6.99995C9.6021 7.15844 9.66598 7.30985 9.77805 7.42192ZM1.4 14H3.8C4.17066 13.9979 4.52553 13.8498 4.78763 13.5877C5.04973 13.3256 5.1979 12.9707 5.2 12.6V10.2C5.1979 9.82939 5.04973 9.47452 4.78763 9.21242C4.52553 8.95032 4.17066 8.80215 3.8 8.80005H1.4C1.02934 8.80215 0.674468 8.95032 0.412371 9.21242C0.150274 9.47452 0.00210008 9.82939 0 10.2V12.6C0.00210008 12.9707 0.150274 13.3256 0.412371 13.5877C0.674468 13.8498 1.02934 13.9979 1.4 14ZM1.25858 10.0586C1.29609 10.0211 1.34696 10 1.4 10H3.8C3.85304 10 3.90391 10.0211 3.94142 10.0586C3.97893 10.0961 4 10.147 4 10.2V12.6C4 12.6531 3.97893 12.704 3.94142 12.7415C3.90391 12.779 3.85304 12.8 3.8 12.8H1.4C1.34696 12.8 1.29609 12.779 1.25858 12.7415C1.22107 12.704 1.2 12.6531 1.2 12.6V10.2C1.2 10.147 1.22107 10.0961 1.25858 10.0586Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(O(),ve(0,"g"),te(1,"path",0),ye(),ve(2,"defs")(3,"clipPath",1),te(4,"rect",2),ye()()),i&2&&(S("clip-path",n.pathId),l(3),_e("id",n.pathId))},encapsulation:2})}return t})();var zo=["data-p-icon","window-minimize"],bi=(()=>{class t extends fe{pathId;onInit(){this.pathId="url(#"+le()+")"}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["","data-p-icon","window-minimize"]],features:[w],attrs:zo,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M11.8 0H2.2C1.61652 0 1.05694 0.231785 0.644365 0.644365C0.231785 1.05694 0 1.61652 0 2.2V7C0 7.15913 0.063214 7.31174 0.175736 7.42426C0.288258 7.53679 0.44087 7.6 0.6 7.6C0.75913 7.6 0.911742 7.53679 1.02426 7.42426C1.13679 7.31174 1.2 7.15913 1.2 7V2.2C1.2 1.93478 1.30536 1.68043 1.49289 1.49289C1.68043 1.30536 1.93478 1.2 2.2 1.2H11.8C12.0652 1.2 12.3196 1.30536 12.5071 1.49289C12.6946 1.68043 12.8 1.93478 12.8 2.2V11.8C12.8 12.0652 12.6946 12.3196 12.5071 12.5071C12.3196 12.6946 12.0652 12.8 11.8 12.8H7C6.84087 12.8 6.68826 12.8632 6.57574 12.9757C6.46321 13.0883 6.4 13.2409 6.4 13.4C6.4 13.5591 6.46321 13.7117 6.57574 13.8243C6.68826 13.9368 6.84087 14 7 14H11.8C12.3835 14 12.9431 13.7682 13.3556 13.3556C13.7682 12.9431 14 12.3835 14 11.8V2.2C14 1.61652 13.7682 1.05694 13.3556 0.644365C12.9431 0.231785 12.3835 0 11.8 0ZM6.368 7.952C6.44137 7.98326 6.52025 7.99958 6.6 8H9.8C9.95913 8 10.1117 7.93678 10.2243 7.82426C10.3368 7.71174 10.4 7.55913 10.4 7.4C10.4 7.24087 10.3368 7.08826 10.2243 6.97574C10.1117 6.86321 9.95913 6.8 9.8 6.8H8.048L10.624 4.224C10.73 4.11026 10.7877 3.95982 10.7849 3.80438C10.7822 3.64894 10.7192 3.50063 10.6093 3.3907C10.4994 3.28077 10.3511 3.2178 10.1956 3.21506C10.0402 3.21232 9.88974 3.27002 9.776 3.376L7.2 5.952V4.2C7.2 4.04087 7.13679 3.88826 7.02426 3.77574C6.91174 3.66321 6.75913 3.6 6.6 3.6C6.44087 3.6 6.28826 3.66321 6.17574 3.77574C6.06321 3.88826 6 4.04087 6 4.2V7.4C6.00042 7.47975 6.01674 7.55862 6.048 7.632C6.07656 7.70442 6.11971 7.7702 6.17475 7.82524C6.2298 7.88029 6.29558 7.92344 6.368 7.952ZM1.4 8.80005H3.8C4.17066 8.80215 4.52553 8.95032 4.78763 9.21242C5.04973 9.47452 5.1979 9.82939 5.2 10.2V12.6C5.1979 12.9707 5.04973 13.3256 4.78763 13.5877C4.52553 13.8498 4.17066 13.9979 3.8 14H1.4C1.02934 13.9979 0.674468 13.8498 0.412371 13.5877C0.150274 13.3256 0.00210008 12.9707 0 12.6V10.2C0.00210008 9.82939 0.150274 9.47452 0.412371 9.21242C0.674468 8.95032 1.02934 8.80215 1.4 8.80005ZM3.94142 12.7415C3.97893 12.704 4 12.6531 4 12.6V10.2C4 10.147 3.97893 10.0961 3.94142 10.0586C3.90391 10.0211 3.85304 10 3.8 10H1.4C1.34696 10 1.29609 10.0211 1.25858 10.0586C1.22107 10.0961 1.2 10.147 1.2 10.2V12.6C1.2 12.6531 1.22107 12.704 1.25858 12.7415C1.29609 12.779 1.34696 12.8 1.4 12.8H3.8C3.85304 12.8 3.90391 12.779 3.94142 12.7415Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(O(),ve(0,"g"),te(1,"path",0),ye(),ve(2,"defs")(3,"clipPath",1),te(4,"rect",2),ye()()),i&2&&(S("clip-path",n.pathId),l(3),_e("id",n.pathId))},encapsulation:2})}return t})();var it=["*"],Vo=["previcon"],$o=["nexticon"],Di=["content"],Ho=["prevButton"],Ro=["nextButton"],jo=["inkbar"],Wo=["tabs"];function Uo(t,r){t&1&&J(0)}function Qo(t,r){if(t&1&&_(0,Uo,1,0,"ng-container",11),t&2){let e=u(2);s("ngTemplateOutlet",e.prevIconTemplate||e._prevIconTemplate)}}function qo(t,r){t&1&&(O(),k(0,"svg",10))}function Go(t,r){if(t&1){let e=oe();m(0,"button",9,3),Q("click",function(){R(e);let n=u();return j(n.onPrevButtonClick())}),re(2,Qo,1,1,"ng-container")(3,qo,1,0,":svg:svg",10),g()}if(t&2){let e=u();y(e.cx("prevButton")),s("pBind",e.ptm("prevButton")),S("aria-label",e.prevButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),l(2),se(e.prevIconTemplate||e._prevIconTemplate?2:3)}}function Zo(t,r){t&1&&J(0)}function Xo(t,r){if(t&1&&_(0,Zo,1,0,"ng-container",11),t&2){let e=u(2);s("ngTemplateOutlet",e.nextIconTemplate||e._nextIconTemplate)}}function Yo(t,r){t&1&&(O(),k(0,"svg",12))}function Ko(t,r){if(t&1){let e=oe();m(0,"button",9,4),Q("click",function(){R(e);let n=u();return j(n.onNextButtonClick())}),re(2,Xo,1,1,"ng-container")(3,Yo,1,0,":svg:svg",12),g()}if(t&2){let e=u();y(e.cx("nextButton")),s("pBind",e.ptm("nextButton")),S("aria-label",e.nextButtonAriaLabel)("tabindex",e.tabindex())("data-pc-group-section","navigator"),l(2),se(e.nextIconTemplate||e._nextIconTemplate?2:3)}}function Jo(t,r){t&1&&W(0)}function ea(t,r){t&1&&J(0)}function ta(t,r){if(t&1&&_(0,ea,1,0,"ng-container",1),t&2){let e=u(),i=ft(1);s("ngTemplateOutlet",e.content()?e.content():i)}}var na={root:({instance:t})=>["p-tabs p-component",{"p-tabs-scrollable":t.scrollable()}]},vi=(()=>{class t extends z{name="tabs";style=ai;classes=na;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var yi=new H("TABS_INSTANCE"),Ge=(()=>{class t extends L{componentName="Tabs";$pcTabs=c(yi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ht(void 0);scrollable=f(!1,{transform:D});lazy=f(!1,{transform:D});selectOnFocus=f(!1,{transform:D});showNavigators=f(!0,{transform:D});tabindex=f(0,{transform:Se});id=de(le("pn_id_"));_componentStyle=c(vi);updateValue(e){this.value.update(()=>e)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-tabs"]],hostVars:3,hostBindings:function(i,n){i&2&&(S("id",n.id()),y(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[V([vi,{provide:yi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:it,decls:1,vars:0,template:function(i,n){i&1&&(ne(),W(0))},dependencies:[Y,ie],encapsulation:2,changeDetection:0})}return t})(),ia={root:({instance:t})=>["p-tab",{"p-tab-active":t.active(),"p-disabled":t.disabled()}]},_i=(()=>{class t extends z{name="tab";classes=ia;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var oa={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ci=(()=>{class t extends z{name="tablist";classes=oa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var xi=new H("TABLIST_INSTANCE"),Et=(()=>{class t extends L{componentName="TabList";$pcTabList=c(xi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=c(Ye(()=>Ge));isPrevButtonEnabled=de(!1);isNextButtonEnabled=de(!1);resizeObserver;showNavigators=F(()=>this.pcTabs.showNavigators());tabindex=F(()=>this.pcTabs.tabindex());scrollable=F(()=>this.pcTabs.scrollable());_componentStyle=c(Ci);constructor(){super(),ge(()=>{this.pcTabs.value(),be(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config?.translation?.aria?.previous}get nextButtonAriaLabel(){return this.config?.translation?.aria?.next}onAfterViewInit(){this.showNavigators()&&be(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"previcon":this._prevIconTemplate=e.template;break;case"nexticon":this._nextIconTemplate=e.template;break}})}onDestroy(){this.unbindResizeObserver()}onScroll(e){this.showNavigators()&&this.updateButtonState(),e.preventDefault()}onPrevButtonClick(){let e=this.content.nativeElement,i=Be(e),n=Math.abs(e.scrollLeft)-i,o=n<=0?0:n;e.scrollLeft=Ut(e)?-1*o:o}onNextButtonClick(){let e=this.content.nativeElement,i=Be(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+i,o=e.scrollWidth-i,a=n>=o?o:n;e.scrollLeft=Ut(e)?-1*a:a}updateButtonState(){let e=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:o}=e,a=Math.abs(e.scrollLeft),d=Be(e);this.isPrevButtonEnabled.set(a!==0),this.isNextButtonEnabled.set(i.offsetWidth>=o&&Math.abs(a-n+d)>1)}updateInkBar(){let e=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,o=Vn(e,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=ze(o)+"px",i.style.left=et(o).left-et(n).left+"px")}getVisibleButtonWidths(){let e=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[e,i].reduce((n,o)=>o?n+Be(o):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["p-tablist"]],contentQueries:function(i,n,o){if(i&1&&we(o,Vo,4)(o,$o,4)(o,Me,4),i&2){let a;M(a=I())&&(n.prevIconTemplate=a.first),M(a=I())&&(n.nextIconTemplate=a.first),M(a=I())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&je(Di,5)(Ho,5)(Ro,5)(jo,5)(Wo,5),i&2){let o;M(o=I())&&(n.content=o.first),M(o=I())&&(n.prevButton=o.first),M(o=I())&&(n.nextButton=o.first),M(o=I())&&(n.inkbar=o.first),M(o=I())&&(n.tabs=o.first)}},hostVars:2,hostBindings:function(i,n){i&2&&y(n.cx("root"))},features:[V([Ci,{provide:xi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:it,decls:9,vars:11,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"pBind","class"],[3,"scroll","pBind"],["role","tablist",3,"pBind"],["role","presentation",3,"pBind"],["type","button","pRipple","",3,"click","pBind"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){i&1&&(ne(),re(0,Go,4,7,"button",5),m(1,"div",6,0),Q("scroll",function(a){return n.onScroll(a)}),m(3,"div",7,1),W(5),k(6,"span",8,2),g()(),re(8,Ko,4,7,"button",5)),i&2&&(se(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),l(),y(n.cx("content")),s("pBind",n.ptm("content")),l(2),y(n.cx("tabList")),s("pBind",n.ptm("tabList")),l(3),y(n.cx("activeBar")),s("pBind",n.ptm("activeBar")),l(2),se(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[Y,Ce,ci,pi,li,nt,$,ie,x],encapsulation:2,changeDetection:0})}return t})(),Ti=new H("TAB_INSTANCE"),nn=(()=>{class t extends L{componentName="Tab";$pcTab=c(Ti,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value=ht();disabled=f(!1,{transform:D});pcTabs=c(Ye(()=>Ge));pcTabList=c(Ye(()=>Et));el=c(De);_componentStyle=c(_i);ripple=F(()=>this.config.ripple());id=F(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=F(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=F(()=>Ve(this.pcTabs.value(),this.value()));tabindex=F(()=>this.disabled()?-1:this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(e){this.disabled()||this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(e){this.disabled()||this.changeActiveValue()}onKeyDown(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;default:break}e.stopPropagation()}onAfterViewInit(){this.bindMutationObserver()}onArrowRightKey(e){let i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()}onArrowLeftKey(e){let i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()}onPageDownKey(e){this.scrollInView(this.findLastTab()),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.findFirstTab()),e.preventDefault()}onEnterKey(e){this.disabled()||this.changeActiveValue(),e.preventDefault()}findNextTab(e,i=!1){let n=i?e:e.nextElementSibling;return n?Je(n,"data-p-disabled")||Je(n,"data-pc-section")==="activebar"?this.findNextTab(n):n:null}findPrevTab(e,i=!1){let n=i?e:e.previousElementSibling;return n?Je(n,"data-p-disabled")||Je(n,"data-pc-section")==="activebar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(e,i){Ke(i),this.scrollInView(i)}scrollInView(e){e?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){be(this.platformId)&&(this.mutationObserver=new MutationObserver(e=>{e.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver?.disconnect()}onDestroy(){this.mutationObserver&&this.unbindMutationObserver()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&Q("focus",function(a){return n.onFocus(a)})("click",function(a){return n.onClick(a)})("keydown",function(a){return n.onKeyDown(a)}),i&2&&(S("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("aria-disabled",n.disabled())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),y(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[V([_i,{provide:Ti,useExisting:t},{provide:q,useExisting:t}]),X([nt,x]),w],ngContentSelectors:it,decls:1,vars:0,template:function(i,n){i&1&&(ne(),W(0))},dependencies:[Y,$,ie],encapsulation:2,changeDetection:0})}return t})(),aa={root:({instance:t})=>["p-tabpanel",{"p-tabpanel-active":t.active()}]},wi=(()=>{class t extends z{name="tabpanel";classes=aa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ei=new H("TABPANEL_INSTANCE"),on=(()=>{class t extends L{componentName="TabPanel";$pcTabPanel=c(Ei,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});pcTabs=c(Ye(()=>Ge));onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}lazy=f(!1,{transform:D});value=ht(void 0);content=$t("content");id=F(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=F(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=F(()=>Ve(this.pcTabs.value(),this.value()));isLazyEnabled=F(()=>this.pcTabs.lazy()||this.lazy());hasBeenRendered=!1;shouldRender=F(()=>!this.isLazyEnabled()||this.hasBeenRendered?!0:this.active()?(this.hasBeenRendered=!0,!0):!1);_componentStyle=c(wi);static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-tabpanel"]],contentQueries:function(i,n,o){i&1&&Ot(o,n.content,Di,5),i&2&&At()},hostVars:7,hostBindings:function(i,n){i&2&&(_e("hidden",!n.active()),S("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),y(n.cx("root")))},inputs:{lazy:[1,"lazy"],value:[1,"value"]},outputs:{value:"valueChange"},features:[V([wi,{provide:Ei,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:it,decls:3,vars:1,consts:[["defaultContent",""],[4,"ngTemplateOutlet"]],template:function(i,n){i&1&&(ne(),_(0,Jo,1,0,"ng-template",null,0,Ee),re(2,ta,1,1,"ng-container")),i&2&&(l(2),se(n.shouldRender()?2:-1))},dependencies:[Ce,ie],encapsulation:2,changeDetection:0})}return t})(),ra={root:"p-tabpanels"},Mi=(()=>{class t extends z{name="tabpanels";classes=ra;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Ii=new H("TABPANELS_INSTANCE"),an=(()=>{class t extends L{componentName="TabPanels";$pcTabPanels=c(Ii,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});_componentStyle=c(Mi);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-tabpanels"]],hostVars:3,hostBindings:function(i,n){i&2&&(S("role","presentation"),y(n.cx("root")))},features:[V([Mi,{provide:Ii,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:it,decls:1,vars:0,template:function(i,n){i&1&&(ne(),W(0))},dependencies:[Y,ie],encapsulation:2,changeDetection:0})}return t})(),Si=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[Ge,an,on,Et,nn,ie,ie]})}return t})();var ki=`
    .p-progressspinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progressspinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progressspinner-spin {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        animation: p-progressspinner-rotate 2s linear infinite;
    }

    .p-progressspinner-circle {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: 0;
        stroke: dt('progressspinner.colorOne');
        animation:
            p-progressspinner-dash 1.5s ease-in-out infinite,
            p-progressspinner-color 6s ease-in-out infinite;
        stroke-linecap: round;
    }

    @keyframes p-progressspinner-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes p-progressspinner-dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35px;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124px;
        }
    }
    @keyframes p-progressspinner-color {
        100%,
        0% {
            stroke: dt('progressspinner.color.one');
        }
        40% {
            stroke: dt('progressspinner.color.two');
        }
        66% {
            stroke: dt('progressspinner.color.three');
        }
        80%,
        90% {
            stroke: dt('progressspinner.color.four');
        }
    }
`;var la={root:()=>["p-progressspinner"],spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Bi=(()=>{class t extends z{name="progressspinner";style=ki;classes=la;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Pi=new H("PROGRESSSPINNER_INSTANCE"),rn=(()=>{class t extends L{componentName="ProgressSpinner";$pcProgressSpinner=c(Pi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});styleClass;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(Bi);static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],hostVars:5,hostBindings:function(i,n){i&2&&(S("aria-label",n.ariaLabel)("role","progressbar")("aria-busy",!0),y(n.cn(n.cx("root"),n.styleClass)))},inputs:{styleClass:"styleClass",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[V([Bi,{provide:Pi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],decls:2,vars:10,consts:[["viewBox","25 25 50 50",3,"pBind"],["cx","50","cy","50","r","20","stroke-miterlimit","10",3,"pBind"]],template:function(i,n){i&1&&(O(),m(0,"svg",0),k(1,"circle",1),g()),i&2&&(y(n.cx("spin")),We("animation-duration",n.animationDuration),s("pBind",n.ptm("spin")),l(),y(n.cx("circle")),s("pBind",n.ptm("circle")),S("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[Y,$,x],encapsulation:2,changeDetection:0})}return t})(),Fi=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[rn,$,$]})}return t})();var Mt=class t{http=c(Fn);getRoutes(){return this.http.get("routes.json")}static \u0275fac=function(e){return new(e||t)};static \u0275prov=N({token:t,factory:t.\u0275fac,providedIn:"root"})};function ca(t){t.CapacitorUtils.Synapse=new Proxy({},{get(r,e){return new Proxy({},{get(i,n){return(o,a,d)=>{let p=t.Capacitor.Plugins[e];if(p===void 0){d(new Error(`Capacitor plugin ${e} not found`));return}if(typeof p[n]!="function"){d(new Error(`Method ${n} not found in Capacitor plugin ${e}`));return}Le(null,null,function*(){try{let h=yield p[n](o);a(h)}catch(h){d(h)}})}}})}})}function pa(t){t.CapacitorUtils.Synapse=new Proxy({},{get(r,e){return t.cordova.plugins[e]}})}function Li(t=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!t?ca(window):window.cordova!==void 0&&pa(window))}var Ni=xt("Filesystem",{web:()=>import("./chunk-56OKZORN.js").then(t=>new t.FilesystemWeb)});Li();var Oi=xt("Share",{web:()=>import("./chunk-VLNT3Z3B.js").then(t=>new t.ShareWeb)});var Ai=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ua=["header"],ma=["title"],fa=["subtitle"],ga=["content"],ha=["footer"],ba=["*",[["p-header"]],[["p-footer"]]],va=["*","p-header","p-footer"];function ya(t,r){t&1&&J(0)}function _a(t,r){if(t&1&&(m(0,"div",1),W(1,1),_(2,ya,1,0,"ng-container",2),g()),t&2){let e=u();y(e.cx("header")),s("pBind",e.ptm("header")),l(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Ca(t,r){if(t&1&&(ce(0),A(1),pe()),t&2){let e=u(2);l(),ee(e.header)}}function xa(t,r){t&1&&J(0)}function Ta(t,r){if(t&1&&(m(0,"div",1),_(1,Ca,2,1,"ng-container",3)(2,xa,1,0,"ng-container",2),g()),t&2){let e=u();y(e.cx("title")),s("pBind",e.ptm("title")),l(),s("ngIf",e.header&&!e._titleTemplate&&!e.titleTemplate),l(),s("ngTemplateOutlet",e.titleTemplate||e._titleTemplate)}}function wa(t,r){if(t&1&&(ce(0),A(1),pe()),t&2){let e=u(2);l(),ee(e.subheader)}}function Ea(t,r){t&1&&J(0)}function Ma(t,r){if(t&1&&(m(0,"div",1),_(1,wa,2,1,"ng-container",3)(2,Ea,1,0,"ng-container",2),g()),t&2){let e=u();y(e.cx("subtitle")),s("pBind",e.ptm("subtitle")),l(),s("ngIf",e.subheader&&!e._subtitleTemplate&&!e.subtitleTemplate),l(),s("ngTemplateOutlet",e.subtitleTemplate||e._subtitleTemplate)}}function Ia(t,r){t&1&&J(0)}function Da(t,r){t&1&&J(0)}function Sa(t,r){if(t&1&&(m(0,"div",1),W(1,2),_(2,Da,1,0,"ng-container",2),g()),t&2){let e=u();y(e.cx("footer")),s("pBind",e.ptm("footer")),l(2),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var ka=`
    ${Ai}

    .p-card {
        display: block;
    }
`,Ba={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},zi=(()=>{class t extends z{name="card";style=ka;classes=Ba;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Vi=new H("CARD_INSTANCE"),sn=(()=>{class t extends L{componentName="Card";$pcCard=c(Vi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});_componentStyle=c(zi);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(e){Ve(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=de(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"title":this._titleTemplate=e.template;break;case"subtitle":this._subtitleTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-card"]],contentQueries:function(i,n,o){if(i&1&&we(o,Zn,5)(o,Ct,5)(o,ua,4)(o,ma,4)(o,fa,4)(o,ga,4)(o,ha,4)(o,Me,4),i&2){let a;M(a=I())&&(n.headerFacet=a.first),M(a=I())&&(n.footerFacet=a.first),M(a=I())&&(n.headerTemplate=a.first),M(a=I())&&(n.titleTemplate=a.first),M(a=I())&&(n.subtitleTemplate=a.first),M(a=I())&&(n.contentTemplate=a.first),M(a=I())&&(n.footerTemplate=a.first),M(a=I())&&(n.templates=a)}},hostVars:4,hostBindings:function(i,n){i&2&&(Ne(n._style()),y(n.cn(n.cx("root"),n.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[V([zi,{provide:Vi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:va,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(i,n){i&1&&(ne(ba),_(0,_a,3,4,"div",0),m(1,"div",1),_(2,Ta,3,5,"div",0)(3,Ma,3,5,"div",0),m(4,"div",1),W(5),_(6,Ia,1,0,"ng-container",2),g(),_(7,Sa,3,4,"div",0),g()),i&2&&(s("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),l(),y(n.cx("body")),s("pBind",n.ptm("body")),l(),s("ngIf",n.header||n.titleTemplate||n._titleTemplate),l(),s("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),l(),y(n.cx("content")),s("pBind",n.ptm("content")),l(2),s("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),s("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[Y,ke,Ce,$,ie,x],encapsulation:2,changeDetection:0})}return t})(),$i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[sn,$,ie,$,ie]})}return t})();var It=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,i){e&&i&&(e.classList?e.classList.add(i):e.className+=" "+i)}static addMultipleClasses(e,i){if(e&&i)if(e.classList){let n=i.trim().split(" ");for(let o=0;o<n.length;o++)e.classList.add(n[o])}else{let n=i.split(" ");for(let o=0;o<n.length;o++)e.className+=" "+n[o]}}static removeClass(e,i){e&&i&&(e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,i){e&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,i){return e&&i?e.classList?e.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(i){return i!==e})}static find(e,i){return Array.from(e.querySelectorAll(i))}static findSingle(e,i){return this.isElement(e)?e.querySelector(i):null}static index(e){let i=e.parentNode.childNodes,n=0;for(var o=0;o<i.length;o++){if(i[o]==e)return n;i[o].nodeType==1&&n++}return-1}static indexWithinGroup(e,i){let n=e.parentNode?e.parentNode.childNodes:[],o=0;for(var a=0;a<n.length;a++){if(n[a]==e)return o;n[a].attributes&&n[a].attributes[i]&&n[a].nodeType==1&&o++}return-1}static appendOverlay(e,i,n="self"){n!=="self"&&e&&i&&this.appendChild(e,i)}static alignOverlay(e,i,n="self",o=!0){e&&i&&(o&&(e.style.minWidth=`${t.getOuterWidth(i)}px`),n==="self"?this.relativePosition(e,i):this.absolutePosition(e,i))}static relativePosition(e,i,n=!0){let o=Te=>{if(Te)return getComputedStyle(Te).getPropertyValue("position")==="relative"?Te:o(Te.parentElement)},a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),d=i.offsetHeight,p=i.getBoundingClientRect(),h=this.getWindowScrollTop(),b=this.getWindowScrollLeft(),C=this.getViewport(),B=o(e)?.getBoundingClientRect()||{top:-1*h,left:-1*b},K,ae,Fe="top";p.top+d+a.height>C.height?(K=p.top-B.top-a.height,Fe="bottom",p.top+K<0&&(K=-1*p.top)):(K=d+p.top-B.top,Fe="top");let Xe=p.left+a.width-C.width,st=p.left-B.left;if(a.width>C.width?ae=(p.left-B.left)*-1:Xe>0?ae=st-Xe:ae=p.left-B.left,e.style.top=K+"px",e.style.left=ae+"px",e.style.transformOrigin=Fe,n){let Te=On(/-anchor-gutter$/)?.value;e.style.marginTop=Fe==="bottom"?`calc(${Te??"2px"} * -1)`:Te??""}}static absolutePosition(e,i,n=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=o.height,d=o.width,p=i.offsetHeight,h=i.offsetWidth,b=i.getBoundingClientRect(),C=this.getWindowScrollTop(),P=this.getWindowScrollLeft(),B=this.getViewport(),K,ae;b.top+p+a>B.height?(K=b.top+C-a,e.style.transformOrigin="bottom",K<0&&(K=C)):(K=p+b.top+C,e.style.transformOrigin="top"),b.left+d>B.width?ae=Math.max(0,b.left+P+h-d):ae=b.left+P,e.style.top=K+"px",e.style.left=ae+"px",n&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,i=[]){return e.parentNode===null?i:this.getParents(e.parentNode,i.concat([e.parentNode]))}static getScrollableParents(e){let i=[];if(e){let n=this.getParents(e),o=/(auto|scroll)/,a=d=>{let p=window.getComputedStyle(d,null);return o.test(p.getPropertyValue("overflow"))||o.test(p.getPropertyValue("overflowX"))||o.test(p.getPropertyValue("overflowY"))};for(let d of n){let p=d.nodeType===1&&d.dataset.scrollselectors;if(p){let h=p.split(",");for(let b of h){let C=this.findSingle(d,b);C&&a(C)&&i.push(C)}}d.nodeType!==9&&a(d)&&i.push(d)}}return i}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let i=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",i}static getHiddenElementDimensions(e){let i={};return e.style.visibility="hidden",e.style.display="block",i.width=e.offsetWidth,i.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",i}static scrollInView(e,i){let n=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=n?parseFloat(n):0,a=getComputedStyle(e).getPropertyValue("paddingTop"),d=a?parseFloat(a):0,p=e.getBoundingClientRect(),b=i.getBoundingClientRect().top+document.body.scrollTop-(p.top+document.body.scrollTop)-o-d,C=e.scrollTop,P=e.clientHeight,B=this.getOuterHeight(i);b<0?e.scrollTop=C+b:b+B>P&&(e.scrollTop=C+b-P+B)}static fadeIn(e,i){e.style.opacity=0;let n=+new Date,o=0,a=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,e.style.opacity=o,n=+new Date,+o<1&&(window.requestAnimationFrame?window.requestAnimationFrame(a):setTimeout(a,16))};a()}static fadeOut(e,i){var n=1,o=50,a=i,d=o/a;let p=setInterval(()=>{n=n-d,n<=0&&(n=0,clearInterval(p)),e.style.opacity=n},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,i){var n=Element.prototype,o=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return o.call(e,i)}static getOuterWidth(e,i){let n=e.offsetWidth;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return n}static getHorizontalPadding(e){let i=getComputedStyle(e);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(e){let i=getComputedStyle(e);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(e,i){let n=e.offsetHeight;if(i){let o=getComputedStyle(e);n+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return n}static getHeight(e){let i=e.offsetHeight,n=getComputedStyle(e);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(e){let i=e.offsetWidth,n=getComputedStyle(e);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let e=window,i=document,n=i.documentElement,o=i.getElementsByTagName("body")[0],a=e.innerWidth||n.clientWidth||o.clientWidth,d=e.innerHeight||n.clientHeight||o.clientHeight;return{width:a,height:d}}static getOffset(e){var i=e.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,i){let n=e.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,i=e.indexOf("MSIE ");if(i>0)return!0;var n=e.indexOf("Trident/");if(n>0){var o=e.indexOf("rv:");return!0}var a=e.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,i){if(this.isElement(i))i.appendChild(e);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(e);else throw"Cannot append "+i+" to "+e}static removeChild(e,i){if(this.isElement(i))i.removeChild(e);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+i}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let i=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let i=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(e,i,n){e[i].apply(e,n)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,i){e&&document.activeElement!==e&&e.focus(i)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,i=""){let n=this.find(e,this.getFocusableSelectorString(i)),o=[];for(let a of n){let d=getComputedStyle(a);this.isVisible(a)&&d.display!="none"&&d.visibility!="hidden"&&o.push(a)}return o}static getFocusableElement(e,i=""){let n=this.findSingle(e,this.getFocusableSelectorString(i));if(n){let o=getComputedStyle(n);if(this.isVisible(n)&&o.display!="none"&&o.visibility!="hidden")return n}return null}static getFirstFocusableElement(e,i=""){let n=this.getFocusableElements(e,i);return n.length>0?n[0]:null}static getLastFocusableElement(e,i){let n=this.getFocusableElements(e,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(e,i=!1){let n=t.getFocusableElements(e),o=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);i?a==-1||a===0?o=n.length-1:o=a-1:a!=-1&&a!==n.length-1&&(o=a+1)}return n[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,i){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement?.parentElement;default:let n=typeof e;if(n==="string")return document.querySelector(e);if(n==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let a=(d=>!!(d&&d.constructor&&d.call&&d.apply))(e)?e():e;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,i){if(e){let n=e.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,i={},...n){if(e){let o=document.createElement(e);return this.setAttributes(o,i),o.append(...n),o}}static setAttribute(e,i="",n){this.isElement(e)&&n!==null&&n!==void 0&&e.setAttribute(i,n)}static setAttributes(e,i={}){if(this.isElement(e)){let n=(o,a)=>{let d=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[a].flat().reduce((p,h)=>{if(h!=null){let b=typeof h;if(b==="string"||b==="number")p.push(h);else if(b==="object"){let C=Array.isArray(h)?n(o,h):Object.entries(h).map(([P,B])=>o==="style"&&(B||B===0)?`${P.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${B}`:B?P:void 0);p=C.length?p.concat(C.filter(P=>!!P)):p}}return p},d)};Object.entries(i).forEach(([o,a])=>{if(a!=null){let d=o.match(/^on(.+)/);d?e.addEventListener(d[1].toLowerCase(),a):o==="pBind"?this.setAttributes(e,a):(a=o==="class"?[...new Set(n("class",a))].join(" ").trim():o==="style"?n("style",a).join(";").trim():a,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=a),e.setAttribute(o,a))}})}}static isFocusableElement(e,i=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return t})();function ln(){Ln({variableName:en("scrollbar.width").name})}function dn(){Nn({variableName:en("scrollbar.width").name})}var Hi=(()=>{class t extends L{autofocus=!1;focused=!1;platformId=c(Re);document=c(He);host=c(De);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){be(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=It.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275dir=he({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[w]})}return t})();var Ri=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Fa=`
    ${Ri}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,La={root:({instance:t})=>{let r=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,i=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,n=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":tt(r)&&String(r).length===1,"p-badge-dot":Wn(r),"p-badge-sm":e==="small"||i==="small","p-badge-lg":e==="large"||i==="large","p-badge-xl":e==="xlarge"||i==="xlarge","p-badge-info":n==="info","p-badge-success":n==="success","p-badge-warn":n==="warn","p-badge-danger":n==="danger","p-badge-secondary":n==="secondary","p-badge-contrast":n==="contrast"}]}},ji=(()=>{class t extends z{name="badge";style=Fa;classes=La;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Wi=new H("BADGE_INSTANCE");var cn=(()=>{class t extends L{componentName="Badge";$pcBadge=c(Wi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=f();badgeSize=f();size=f();severity=f();value=f();badgeDisabled=f(!1,{transform:D});_componentStyle=c(ji);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(i,n){i&2&&(S("data-p",n.dataP),y(n.cn(n.cx("root"),n.styleClass())),We("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[V([ji,{provide:Wi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],decls:1,vars:1,template:function(i,n){i&1&&A(0),i&2&&ee(n.value())},dependencies:[Y,$,ie],encapsulation:2,changeDetection:0})}return t})(),Ui=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[cn,$,$]})}return t})();var Oa=["*"],Aa={root:"p-fluid"},Qi=(()=>{class t extends z{name="fluid";classes=Aa;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var qi=new H("FLUID_INSTANCE"),Gi=(()=>{class t extends L{componentName="Fluid";$pcFluid=c(qi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=c(Qi);static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(i,n){i&2&&y(n.cx("root"))},features:[V([Qi,{provide:qi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:Oa,decls:1,vars:0,template:function(i,n){i&1&&(ne(),W(0))},dependencies:[Y],encapsulation:2,changeDetection:0})}return t})();var Zi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var za=["content"],Va=["loadingicon"],$a=["icon"],Ha=["*"],Ki=(t,r)=>({class:t,pt:r});function Ra(t,r){t&1&&J(0)}function ja(t,r){if(t&1&&k(0,"span",7),t&2){let e=u(3);y(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),s("pBind",e.ptm("loadingIcon")),S("aria-hidden",!0)}}function Wa(t,r){if(t&1&&(O(),k(0,"svg",8)),t&2){let e=u(3);y(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),s("pBind",e.ptm("loadingIcon"))("spin",!0),S("aria-hidden",!0)}}function Ua(t,r){if(t&1&&(ce(0),_(1,ja,1,4,"span",3)(2,Wa,1,5,"svg",6),pe()),t&2){let e=u(2);l(),s("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),l(),s("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function Qa(t,r){}function qa(t,r){if(t&1&&_(0,Qa,0,0,"ng-template",9),t&2){let e=u(2);s("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Ga(t,r){if(t&1&&(ce(0),_(1,Ua,3,2,"ng-container",2)(2,qa,1,1,null,5),pe()),t&2){let e=u();l(),s("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),l(),s("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",zt(3,Ki,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function Za(t,r){if(t&1&&k(0,"span",7),t&2){let e=u(2);y(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),s("pBind",e.ptm("icon")),S("data-p",e.dataIconP)}}function Xa(t,r){}function Ya(t,r){if(t&1&&_(0,Xa,0,0,"ng-template",9),t&2){let e=u(2);s("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Ka(t,r){if(t&1&&(ce(0),_(1,Za,1,4,"span",3)(2,Ya,1,1,null,5),pe()),t&2){let e=u();l(),s("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),l(),s("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",zt(3,Ki,e.cx("icon"),e.ptm("icon")))}}function Ja(t,r){if(t&1&&(m(0,"span",7),A(1),g()),t&2){let e=u();y(e.cx("label")),s("pBind",e.ptm("label")),S("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),l(),ee(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function er(t,r){if(t&1&&k(0,"p-badge",10),t&2){let e=u();s("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var tr={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,r])=>!!r).reduce((r,[e])=>r+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Xi=(()=>{class t extends z{name="button";style=Zi;classes=tr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var Yi=new H("BUTTON_INSTANCE");var ot=(()=>{class t extends L{componentName="Button";hostName="";$pcButton=c(Yi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});_componentStyle=c(Xi);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=f(void 0,{transform:D});onClick=new me;onFocus=new me;onBlur=new me;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=c(Gi,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-button"]],contentQueries:function(i,n,o){if(i&1&&we(o,za,5)(o,Va,5)(o,$a,5)(o,Me,4),i&2){let a;M(a=I())&&(n.contentTemplate=a.first),M(a=I())&&(n.loadingIconTemplate=a.first),M(a=I())&&(n.iconTemplate=a.first),M(a=I())&&(n.templates=a)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",D],raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",Se],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",D],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[V([Xi,{provide:Yi,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:Ha,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(i,n){i&1&&(ne(),m(0,"button",0),Q("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),W(1),_(2,Ra,1,0,"ng-container",1)(3,Ga,3,6,"ng-container",2)(4,Ka,3,6,"ng-container",2)(5,Ja,2,6,"span",3)(6,er,1,4,"p-badge",4),g()),i&2&&(y(n.cn(n.cx("root"),n.styleClass,n.buttonProps==null?null:n.buttonProps.styleClass)),s("ngStyle",n.style||(n.buttonProps==null?null:n.buttonProps.style))("disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("pAutoFocus",n.autofocus||(n.buttonProps==null?null:n.buttonProps.autofocus))("pBind",n.ptm("root")),S("type",n.type||(n.buttonProps==null?null:n.buttonProps.type))("aria-label",n.ariaLabel||(n.buttonProps==null?null:n.buttonProps.ariaLabel))("tabindex",n.tabindex||(n.buttonProps==null?null:n.buttonProps.tabindex))("data-p",n.dataP)("data-p-disabled",n.disabled||n.loading||(n.buttonProps==null?null:n.buttonProps.disabled))("data-p-severity",n.severity||(n.buttonProps==null?null:n.buttonProps.severity)),l(2),s("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),s("ngIf",n.loading||(n.buttonProps==null?null:n.buttonProps.loading)),l(),s("ngIf",!(n.loading||n.buttonProps!=null&&n.buttonProps.loading)),l(),s("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.label||(n.buttonProps==null?null:n.buttonProps.label))),l(),s("ngIf",!n.contentTemplate&&!n._contentTemplate&&(n.badge||(n.buttonProps==null?null:n.buttonProps.badge))))},dependencies:[Y,ke,Ce,bt,nt,Hi,fi,Ui,cn,$,x],encapsulation:2,changeDetection:0})}return t})(),Ji=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[Y,ot,$,$]})}return t})();var eo=(()=>{class t extends L{pFocusTrapDisabled=!1;platformId=c(Re);document=c(He);firstHiddenFocusableElement;lastHiddenFocusableElement;onInit(){be(this.platformId)&&!this.pFocusTrapDisabled&&!this.firstHiddenFocusableElement&&!this.lastHiddenFocusableElement&&this.createHiddenFocusableElements()}onChanges(e){e.pFocusTrapDisabled&&be(this.platformId)&&(e.pFocusTrapDisabled.currentValue?this.removeHiddenFocusableElements():this.createHiddenFocusableElements())}removeHiddenFocusableElements(){this.firstHiddenFocusableElement&&this.firstHiddenFocusableElement.parentNode&&this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement),this.lastHiddenFocusableElement&&this.lastHiddenFocusableElement.parentNode&&this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement)}getComputedSelector(e){return`:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${e??""}`}createHiddenFocusableElements(){let i=n=>qt("span",{class:"p-hidden-accessible p-hidden-focusable",tabindex:"0",role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:n?.bind(this)});this.firstHiddenFocusableElement=i(this.onFirstHiddenElementFocus),this.lastHiddenFocusableElement=i(this.onLastHiddenElementFocus),this.firstHiddenFocusableElement.setAttribute("data-pc-section","firstfocusableelement"),this.lastHiddenFocusableElement.setAttribute("data-pc-section","lastfocusableelement"),this.el.nativeElement.prepend(this.firstHiddenFocusableElement),this.el.nativeElement.append(this.lastHiddenFocusableElement)}onFirstHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.lastHiddenFocusableElement||!this.el.nativeElement?.contains(n)?$n(i.parentElement,":not(.p-hidden-focusable)"):this.lastHiddenFocusableElement;Ke(o)}onLastHiddenElementFocus(e){let{currentTarget:i,relatedTarget:n}=e,o=n===this.firstHiddenFocusableElement||!this.el.nativeElement?.contains(n)?Hn(i.parentElement,":not(.p-hidden-focusable)"):this.firstHiddenFocusableElement;Ke(o)}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275dir=he({type:t,selectors:[["","pFocusTrap",""]],inputs:{pFocusTrapDisabled:[2,"pFocusTrapDisabled","pFocusTrapDisabled",D]},features:[w]})}return t})();var ir=Object.defineProperty,to=Object.getOwnPropertySymbols,or=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable,no=(t,r,e)=>r in t?ir(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,io=(t,r)=>{for(var e in r||(r={}))or.call(r,e)&&no(t,e,r[e]);if(to)for(var e of to(r))ar.call(r,e)&&no(t,e,r[e]);return t},rr=(t,r,e)=>new Promise((i,n)=>{var o=p=>{try{d(e.next(p))}catch(h){n(h)}},a=p=>{try{d(e.throw(p))}catch(h){n(h)}},d=p=>p.done?i(p.value):Promise.resolve(p.value).then(o,a);d((e=e.apply(t,r)).next())}),Dt="animation",at="transition";function sr(t){return t?t.disabled||!!(t.safe&&Rn()):!1}function lr(t,r){return t?io(io({},t),Object.entries(r).reduce((e,[i,n])=>{var o;return e[i]=(o=t[i])!=null?o:n,e},{})):r}function dr(t){let{name:r,enterClass:e,leaveClass:i}=t||{};return{enter:{from:e?.from||`${r}-enter-from`,to:e?.to||`${r}-enter-to`,active:e?.active||`${r}-enter-active`},leave:{from:i?.from||`${r}-leave-from`,to:i?.to||`${r}-leave-to`,active:i?.active||`${r}-leave-active`}}}function cr(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function pr(t,r){let e=window.getComputedStyle(t),i=B=>{let K=e[`${B}Delay`],ae=e[`${B}Duration`];return[K.split(", ").map(Yt),ae.split(", ").map(Yt)]},[n,o]=i(at),[a,d]=i(Dt),p=Math.max(...o.map((B,K)=>B+n[K])),h=Math.max(...d.map((B,K)=>B+a[K])),b,C=0,P=0;return r===at?p>0&&(b=at,C=p,P=o.length):r===Dt?h>0&&(b=Dt,C=h,P=d.length):(C=Math.max(p,h),b=C>0?p>h?at:Dt:void 0,P=b?b===at?o.length:d.length:0),{type:b,timeout:C,count:P}}function St(t,r){return typeof t=="number"?t:typeof t=="object"&&t[r]!=null?t[r]:null}function ur(t,r=!0,e=!1){if(!r&&!e)return;let i=An(t);r&&Xt(t,"--pui-motion-height",i.height+"px"),e&&Xt(t,"--pui-motion-width",i.width+"px")}var mr={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function pn(t,r){if(!t)throw new Error("Element is required.");let e={},i=!1,n={},o=null,a={},d=b=>{if(Object.assign(e,lr(b,mr)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");a=cr(e),i=sr(e),n=dr(e),o=null},p=b=>rr(null,null,function*(){o?.();let{onBefore:C,onStart:P,onAfter:B,onCancelled:K}=a[b]||{},ae={element:t};if(i){C?.(ae),P?.(ae),B?.(ae);return}let{from:Fe,active:Xe,to:st}=n[b]||{};return ur(t,e.autoHeight,e.autoWidth),C?.(ae),Ae(t,Fe),Ae(t,Xe),t.offsetHeight,xe(t,Fe),Ae(t,st),P?.(ae),new Promise(Te=>{let yo=St(e.duration,b),hn=()=>{xe(t,[st,Xe]),o=null},_o=()=>{hn(),B?.(ae),Te()};o=()=>{hn(),K?.(ae),Te()},gr(t,e.type,yo,_o)})});d(r);let h={enter:()=>e.enter?p("enter"):Promise.resolve(),leave:()=>e.leave?p("leave"):Promise.resolve(),cancel:()=>{o?.(),o=null},update:(b,C)=>{if(!b)throw new Error("Element is required.");t=b,h.cancel(),d(C)}};return e.appear&&h.enter(),h}var fr=0;function gr(t,r,e,i){let n=t._motionEndId=++fr,o=()=>{n===t._motionEndId&&i()};if(e!=null)return setTimeout(o,e);let{type:a,timeout:d,count:p}=pr(t,r);if(!a){i();return}let h=a+"end",b=0,C=()=>{t.removeEventListener(h,P,!0),o()},P=B=>{B.target===t&&++b>=p&&C()};t.addEventListener(h,P,{capture:!0,once:!0}),setTimeout(()=>{b<p&&C()},d+1)}var hr=["*"];function br(t,r){t&1&&W(0)}var kt=new WeakMap;function rt(t,r){if(t)switch(kt.has(t)||kt.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),r){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function Bt(t,r){if(!t)return;let e=kt.get(t)??t.style;switch(r){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}kt.delete(t)}var vr=`
    .p-motion {
        display: block;
    }
`,yr={root:"p-motion"},un=(()=>{class t extends z{name="motion";style=vr;classes=yr;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var oo=new H("MOTION_INSTANCE"),_r=(()=>{class t extends L{$pcMotion=c(oo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){let i=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(T(T({},this.ptms(["host","root"])),i))}_componentStyle=c(un);visible=f(!1);mountOnEnter=f(!0);unmountOnLeave=f(!0);name=f(void 0);type=f(void 0);safe=f(void 0);disabled=f(!1);appear=f(!1);enter=f(!0);leave=f(!0);duration=f(void 0);hideStrategy=f("display");enterFromClass=f(void 0);enterToClass=f(void 0);enterActiveClass=f(void 0);leaveFromClass=f(void 0);leaveToClass=f(void 0);leaveActiveClass=f(void 0);options=f({});onBeforeEnter=ue();onEnter=ue();onAfterEnter=ue();onEnterCancelled=ue();onBeforeLeave=ue();onLeave=ue();onAfterLeave=ue();onLeaveCancelled=ue();motionOptions=F(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=de(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ge(()=>{let e=this.hideStrategy();this.isInitialMount?(rt(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(rt(this.$el,e),this.rendered.set(!0))}),ge(()=>{this.motion||(this.motion=pn(this.$el,this.motionOptions()))}),Ht(()=>Le(this,null,function*(){if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),i=this.hideStrategy();this.visible()?(yield vt(),Bt(this.$el,i),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(yield vt(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>Le(this,null,function*(){this.$el&&!this.cancelled&&!this.visible()&&(rt(this.$el,i),this.unmountOnLeave()&&(yield vt(),this.cancelled||this.rendered.set(!1)))}))),this.isInitialMount=!1}))}applyMotionDuration(e){let i=Vt(this.motionOptions),n=St(i.duration,e);if(n==null||!this.$el)return;let o=this.$el,a=`${n}ms`;i.type==="transition"?o.style.transitionDuration=a:o.style.animationDuration=a}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Bt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=E({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(i,n){i&2&&y(n.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[V([un,{provide:oo,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:hr,decls:1,vars:1,template:function(i,n){i&1&&(ne(),re(0,br,1,0)),i&2&&se(n.rendered()?0:-1)},dependencies:[Y,ie],encapsulation:2})}return t})(),ao=new H("MOTION_DIRECTIVE_INSTANCE"),Pt=(()=>{class t extends L{$pcMotionDirective=c(ao,{optional:!0,skipSelf:!0})??void 0;visible=f(!1,{alias:"pMotion"});name=f(void 0,{alias:"pMotionName"});type=f(void 0,{alias:"pMotionType"});safe=f(void 0,{alias:"pMotionSafe"});disabled=f(!1,{alias:"pMotionDisabled"});appear=f(!1,{alias:"pMotionAppear"});enter=f(!0,{alias:"pMotionEnter"});leave=f(!0,{alias:"pMotionLeave"});duration=f(void 0,{alias:"pMotionDuration"});hideStrategy=f("display",{alias:"pMotionHideStrategy"});enterFromClass=f(void 0,{alias:"pMotionEnterFromClass"});enterToClass=f(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=f(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=f(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=f(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=f(void 0,{alias:"pMotionLeaveActiveClass"});options=f({},{alias:"pMotionOptions"});onBeforeEnter=ue({alias:"pMotionOnBeforeEnter"});onEnter=ue({alias:"pMotionOnEnter"});onAfterEnter=ue({alias:"pMotionOnAfterEnter"});onEnterCancelled=ue({alias:"pMotionOnEnterCancelled"});onBeforeLeave=ue({alias:"pMotionOnBeforeLeave"});onLeave=ue({alias:"pMotionOnLeave"});onAfterLeave=ue({alias:"pMotionOnAfterLeave"});onLeaveCancelled=ue({alias:"pMotionOnLeaveCancelled"});motionOptions=F(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ge(()=>{this.motion||(this.motion=pn(this.$el,this.motionOptions()))}),Ht(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),i=this.hideStrategy();this.visible()?(Bt(this.$el,i),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount?rt(this.$el,i):(this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&rt(this.$el,i)})),this.isInitialMount=!1})}applyMotionDuration(e){let i=Vt(this.motionOptions),n=St(i.duration,e);if(n==null||!this.$el)return;let o=this.$el,a=`${n}ms`;i.type==="transition"?o.style.transitionDuration=a:o.style.animationDuration=a}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,Bt(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(i){return new(i||t)};static \u0275dir=he({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[V([un,{provide:ao,useExisting:t},{provide:q,useExisting:t}]),w]})}return t})(),Ft=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[_r]})}return t})();function Cr(){let t=[],r=(o,a)=>{let d=t.length>0?t[t.length-1]:{key:o,value:a},p=d.value+(d.key===o?0:a)+2;return t.push({key:o,value:p}),p},e=o=>{t=t.filter(a=>a.value!==o)},i=()=>t.length>0?t[t.length-1].value:0,n=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:n,set:(o,a,d)=>{a&&(a.style.zIndex=String(r(o,d)))},clear:o=>{o&&(e(n(o)),o.style.zIndex="")},getCurrent:()=>i(),generateZIndex:r,revertZIndex:e}}var Ze=Cr();var so=`
    .p-dialog {
        max-height: 90%;
        transform: scale(1);
        border-radius: dt('dialog.border.radius');
        box-shadow: dt('dialog.shadow');
        background: dt('dialog.background');
        border: 1px solid dt('dialog.border.color');
        color: dt('dialog.color');
        will-change: transform;
    }

    .p-dialog-content {
        overflow-y: auto;
        padding: dt('dialog.content.padding');
        flex-grow: 1;
    }

    .p-dialog-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('dialog.header.padding');
    }

    .p-dialog-title {
        font-weight: dt('dialog.title.font.weight');
        font-size: dt('dialog.title.font.size');
    }

    .p-dialog-footer {
        flex-shrink: 0;
        padding: dt('dialog.footer.padding');
        display: flex;
        justify-content: flex-end;
        gap: dt('dialog.footer.gap');
    }

    .p-dialog-header-actions {
        display: flex;
        align-items: center;
        gap: dt('dialog.header.gap');
    }

    .p-dialog-top .p-dialog,
    .p-dialog-bottom .p-dialog,
    .p-dialog-left .p-dialog,
    .p-dialog-right .p-dialog,
    .p-dialog-topleft .p-dialog,
    .p-dialog-topright .p-dialog,
    .p-dialog-bottomleft .p-dialog,
    .p-dialog-bottomright .p-dialog {
        margin: 1rem;
    }

    .p-dialog-maximized {
        width: 100vw !important;
        height: 100vh !important;
        top: 0px !important;
        left: 0px !important;
        max-height: 100%;
        height: 100%;
        border-radius: 0;
    }

    .p-dialog .p-resizable-handle {
        position: absolute;
        font-size: 0.1px;
        display: block;
        cursor: se-resize;
        width: 12px;
        height: 12px;
        right: 1px;
        bottom: 1px;
    }

    .p-dialog-enter-active {
        animation: p-animate-dialog-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-dialog-leave-active {
        animation: p-animate-dialog-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-dialog-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-dialog-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var xr=["header"],lo=["content"],co=["footer"],Tr=["closeicon"],wr=["maximizeicon"],Er=["minimizeicon"],Mr=["headless"],Ir=["titlebar"],Dr=["*",[["p-footer"]]],Sr=["*","p-footer"],kr=t=>({ariaLabelledBy:t});function Br(t,r){t&1&&J(0)}function Pr(t,r){if(t&1&&(ce(0),_(1,Br,1,0,"ng-container",11),pe()),t&2){let e=u(3);l(),s("ngTemplateOutlet",e._headlessTemplate||e.headlessTemplate||e.headlessT)}}function Fr(t,r){if(t&1){let e=oe();m(0,"div",16),Q("mousedown",function(n){R(e);let o=u(4);return j(o.initResize(n))}),g()}if(t&2){let e=u(4);y(e.cx("resizeHandle")),We("z-index",90),s("pBind",e.ptm("resizeHandle"))}}function Lr(t,r){if(t&1&&(m(0,"span",21),A(1),g()),t&2){let e=u(5);y(e.cx("title")),s("id",e.ariaLabelledBy)("pBind",e.ptm("title")),l(),ee(e.header)}}function Nr(t,r){t&1&&J(0)}function Or(t,r){if(t&1&&k(0,"span",25),t&2){let e=u(7);s("ngClass",e.maximized?e.minimizeIcon:e.maximizeIcon)}}function Ar(t,r){t&1&&(O(),k(0,"svg",28))}function zr(t,r){t&1&&(O(),k(0,"svg",29))}function Vr(t,r){if(t&1&&(ce(0),_(1,Ar,1,0,"svg",26)(2,zr,1,0,"svg",27),pe()),t&2){let e=u(7);l(),s("ngIf",!e.maximized&&!e._maximizeiconTemplate&&!e.maximizeIconTemplate&&!e.maximizeIconT),l(),s("ngIf",e.maximized&&!e._minimizeiconTemplate&&!e.minimizeIconTemplate&&!e.minimizeIconT)}}function $r(t,r){}function Hr(t,r){t&1&&_(0,$r,0,0,"ng-template")}function Rr(t,r){if(t&1&&(ce(0),_(1,Hr,1,0,null,11),pe()),t&2){let e=u(7);l(),s("ngTemplateOutlet",e._maximizeiconTemplate||e.maximizeIconTemplate||e.maximizeIconT)}}function jr(t,r){}function Wr(t,r){t&1&&_(0,jr,0,0,"ng-template")}function Ur(t,r){if(t&1&&(ce(0),_(1,Wr,1,0,null,11),pe()),t&2){let e=u(7);l(),s("ngTemplateOutlet",e._minimizeiconTemplate||e.minimizeIconTemplate||e.minimizeIconT)}}function Qr(t,r){if(t&1&&_(0,Or,1,1,"span",23)(1,Vr,3,2,"ng-container",24)(2,Rr,2,1,"ng-container",24)(3,Ur,2,1,"ng-container",24),t&2){let e=u(6);s("ngIf",e.maximizeIcon&&!e._maximizeiconTemplate&&!e._minimizeiconTemplate),l(),s("ngIf",!e.maximizeIcon&&!(e.maximizeButtonProps!=null&&e.maximizeButtonProps.icon)),l(),s("ngIf",!e.maximized),l(),s("ngIf",e.maximized)}}function qr(t,r){if(t&1){let e=oe();m(0,"p-button",22),Q("onClick",function(){R(e);let n=u(5);return j(n.maximize())})("keydown.enter",function(){R(e);let n=u(5);return j(n.maximize())}),_(1,Qr,4,4,"ng-template",null,4,Ee),g()}if(t&2){let e=u(5);s("pt",e.ptm("pcMaximizeButton"))("styleClass",e.cx("pcMaximizeButton"))("ariaLabel",e.maximized?e.minimizeLabel:e.maximizeLabel)("tabindex",e.maximizable?"0":"-1")("buttonProps",e.maximizeButtonProps)("unstyled",e.unstyled()),S("data-pc-group-section","headericon")}}function Gr(t,r){if(t&1&&k(0,"span"),t&2){let e=u(8);y(e.closeIcon)}}function Zr(t,r){t&1&&(O(),k(0,"svg",32))}function Xr(t,r){if(t&1&&(ce(0),_(1,Gr,1,2,"span",30)(2,Zr,1,0,"svg",31),pe()),t&2){let e=u(7);l(),s("ngIf",e.closeIcon),l(),s("ngIf",!e.closeIcon)}}function Yr(t,r){}function Kr(t,r){t&1&&_(0,Yr,0,0,"ng-template")}function Jr(t,r){if(t&1&&(m(0,"span"),_(1,Kr,1,0,null,11),g()),t&2){let e=u(7);l(),s("ngTemplateOutlet",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function es(t,r){if(t&1&&_(0,Xr,3,2,"ng-container",24)(1,Jr,2,1,"span",24),t&2){let e=u(6);s("ngIf",!e._closeiconTemplate&&!e.closeIconTemplate&&!e.closeIconT&&!(e.closeButtonProps!=null&&e.closeButtonProps.icon)),l(),s("ngIf",e._closeiconTemplate||e.closeIconTemplate||e.closeIconT)}}function ts(t,r){if(t&1){let e=oe();m(0,"p-button",22),Q("onClick",function(n){R(e);let o=u(5);return j(o.close(n))})("keydown.enter",function(n){R(e);let o=u(5);return j(o.close(n))}),_(1,es,2,2,"ng-template",null,4,Ee),g()}if(t&2){let e=u(5);s("pt",e.ptm("pcCloseButton"))("styleClass",e.cx("pcCloseButton"))("ariaLabel",e.closeAriaLabel)("tabindex",e.closeTabindex)("buttonProps",e.closeButtonProps)("unstyled",e.unstyled()),S("data-pc-group-section","headericon")}}function ns(t,r){if(t&1){let e=oe();m(0,"div",16,3),Q("mousedown",function(n){R(e);let o=u(4);return j(o.initDrag(n))}),_(2,Lr,2,5,"span",17)(3,Nr,1,0,"ng-container",18),m(4,"div",19),_(5,qr,3,7,"p-button",20)(6,ts,3,7,"p-button",20),g()()}if(t&2){let e=u(4);y(e.cx("header")),s("pBind",e.ptm("header")),l(2),s("ngIf",!e._headerTemplate&&!e.headerTemplate&&!e.headerT),l(),s("ngTemplateOutlet",e._headerTemplate||e.headerTemplate||e.headerT)("ngTemplateOutletContext",gt(11,kr,e.ariaLabelledBy)),l(),y(e.cx("headerActions")),s("pBind",e.ptm("headerActions")),l(),s("ngIf",e.maximizable),l(),s("ngIf",e.closable)}}function is(t,r){t&1&&J(0)}function os(t,r){t&1&&J(0)}function as(t,r){if(t&1&&(m(0,"div",19,5),W(2,1),_(3,os,1,0,"ng-container",11),g()),t&2){let e=u(4);y(e.cx("footer")),s("pBind",e.ptm("footer")),l(3),s("ngTemplateOutlet",e._footerTemplate||e.footerTemplate||e.footerT)}}function rs(t,r){if(t&1&&(_(0,Fr,1,5,"div",12)(1,ns,7,13,"div",13),m(2,"div",14,2),W(4),_(5,is,1,0,"ng-container",11),g(),_(6,as,4,4,"div",15)),t&2){let e=u(3);s("ngIf",e.resizable),l(),s("ngIf",e.showHeader),l(),y(e.cn(e.cx("content"),e.contentStyleClass)),s("ngStyle",e.contentStyle)("pBind",e.ptm("content")),l(3),s("ngTemplateOutlet",e._contentTemplate||e.contentTemplate||e.contentT),l(),s("ngIf",e._footerTemplate||e.footerTemplate||e.footerT)}}function ss(t,r){if(t&1){let e=oe();m(0,"div",9,0),Q("pMotionOnBeforeEnter",function(n){R(e);let o=u(2);return j(o.onBeforeEnter(n))})("pMotionOnAfterEnter",function(n){R(e);let o=u(2);return j(o.onAfterEnter(n))})("pMotionOnBeforeLeave",function(n){R(e);let o=u(2);return j(o.onBeforeLeave(n))})("pMotionOnAfterLeave",function(n){R(e);let o=u(2);return j(o.onAfterLeave(n))}),_(2,Pr,2,1,"ng-container",10)(3,rs,7,8,"ng-template",null,1,Ee),g()}if(t&2){let e=ft(4),i=u(2);Ne(i.sx("root")),y(i.cn(i.cx("root"),i.styleClass)),s("ngStyle",i.style)("pBind",i.ptm("root"))("pFocusTrapDisabled",i.focusTrap===!1)("pMotion",i.visible)("pMotionAppear",!0)("pMotionName","p-dialog")("pMotionOptions",i.computedMotionOptions()),S("role",i.role)("aria-labelledby",i.ariaLabelledBy)("aria-modal",!0)("data-p",i.dataP),l(2),s("ngIf",i._headlessTemplate||i.headlessTemplate||i.headlessT)("ngIfElse",e)}}function ls(t,r){if(t&1){let e=oe();m(0,"div",7),Q("pMotionOnAfterLeave",function(){R(e);let n=u();return j(n.onMaskAfterLeave())}),re(1,ss,5,17,"div",8),g()}if(t&2){let e=u();Ne(e.sx("mask")),y(e.cn(e.cx("mask"),e.maskStyleClass)),s("ngStyle",e.maskStyle)("pBind",e.ptm("mask"))("pMotion",e.maskVisible)("pMotionAppear",!0)("pMotionEnterActiveClass",e.modal?"p-overlay-mask-enter-active":"")("pMotionLeaveActiveClass",e.modal?"p-overlay-mask-leave-active":"")("pMotionOptions",e.computedMaskMotionOptions()),S("data-p-scrollblocker-active",e.modal||e.blockScroll)("data-p",e.dataP),l(),se(e.renderDialog()?1:-1)}}var ds={mask:({instance:t})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:t.position==="left"||t.position==="topleft"||t.position==="bottomleft"?"flex-start":t.position==="right"||t.position==="topright"||t.position==="bottomright"?"flex-end":"center",alignItems:t.position==="top"||t.position==="topleft"||t.position==="topright"?"flex-start":t.position==="bottom"||t.position==="bottomleft"||t.position==="bottomright"?"flex-end":"center",pointerEvents:t.modal?"auto":"none"}),root:{display:"flex",flexDirection:"column",pointerEvents:"auto"}},cs={mask:({instance:t})=>{let e=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(i=>i===t.position);return["p-dialog-mask",{"p-overlay-mask":t.modal},e?`p-dialog-${e}`:""]},root:({instance:t})=>["p-dialog p-component",{"p-dialog-maximized":t.maximizable&&t.maximized}],header:"p-dialog-header",title:"p-dialog-title",resizeHandle:"p-resizable-handle",headerActions:"p-dialog-header-actions",pcMaximizeButton:"p-dialog-maximize-button",pcCloseButton:"p-dialog-close-button",content:()=>["p-dialog-content"],footer:"p-dialog-footer"},po=(()=>{class t extends z{name="dialog";style=so;classes=cs;inlineStyles=ds;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var uo=new H("DIALOG_INSTANCE"),mn=(()=>{class t extends L{componentName="Dialog";hostName="";$pcDialog=c(uo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}header;draggable=!0;resizable=!0;contentStyle;contentStyleClass;modal=!1;closeOnEscape=!0;dismissableMask=!1;rtl=!1;closable=!0;breakpoints;styleClass;maskStyleClass;maskStyle;showHeader=!0;blockScroll=!1;autoZIndex=!0;baseZIndex=0;minX=0;minY=0;focusOnShow=!0;maximizable=!1;keepInViewport=!0;focusTrap=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";maskMotionOptions=f(void 0);computedMaskMotionOptions=F(()=>T(T({},this.ptm("maskMotion")),this.maskMotionOptions()));motionOptions=f(void 0);computedMotionOptions=F(()=>T(T({},this.ptm("motion")),this.motionOptions()));closeIcon;closeAriaLabel;closeTabindex="0";minimizeIcon;maximizeIcon;closeButtonProps={severity:"secondary",variant:"text",rounded:!0};maximizeButtonProps={severity:"secondary",variant:"text",rounded:!0};get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.maskVisible&&(this.maskVisible=!0,this.renderMask.set(!0),this.renderDialog.set(!0))}get style(){return this._style}set style(e){e&&(this._style=T({},e),this.originalStyle=e)}position;role="dialog";appendTo=f(void 0);onShow=new me;onHide=new me;visibleChange=new me;onResizeInit=new me;onResizeEnd=new me;onDragEnd=new me;onMaximize=new me;headerViewChild;contentViewChild;footerViewChild;headerTemplate;contentTemplate;footerTemplate;closeIconTemplate;maximizeIconTemplate;minimizeIconTemplate;headlessTemplate;_headerTemplate;_contentTemplate;_footerTemplate;_closeiconTemplate;_maximizeiconTemplate;_minimizeiconTemplate;_headlessTemplate;$appendTo=F(()=>this.appendTo()||this.config.overlayAppendTo());renderMask=de(!1);renderDialog=de(!1);_visible=!1;maskVisible;container=de(null);wrapper;dragging;ariaLabelledBy=this.getAriaLabelledBy();documentDragListener;documentDragEndListener;resizing;documentResizeListener;documentResizeEndListener;documentEscapeListener;maskClickListener;lastPageX;lastPageY;preventVisibleChangePropagation;maximized;preMaximizeContentHeight;preMaximizeContainerWidth;preMaximizeContainerHeight;preMaximizePageX;preMaximizePageY;id=le("pn_id_");_style={};originalStyle;transformOptions="scale(0.7)";styleElement;window;_componentStyle=c(po);headerT;contentT;footerT;closeIconT;maximizeIconT;minimizeIconT;headlessT;zIndexForLayering;get maximizeLabel(){return this.config.getTranslation(Kt.ARIA).maximizeLabel}get minimizeLabel(){return this.config.getTranslation(Kt.ARIA).minimizeLabel}zone=c(dt);overlayService=c(Gn);get maskClass(){let i=["left","right","top","topleft","topright","bottom","bottomleft","bottomright"].find(n=>n===this.position);return{"p-dialog-mask":!0,"p-overlay-mask":this.modal||this.dismissableMask,[`p-dialog-${i}`]:i}}onInit(){this.breakpoints&&this.createStyle()}templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"header":this.headerT=e.template;break;case"content":this.contentT=e.template;break;case"footer":this.footerT=e.template;break;case"closeicon":this.closeIconT=e.template;break;case"maximizeicon":this.maximizeIconT=e.template;break;case"minimizeicon":this.minimizeIconT=e.template;break;case"headless":this.headlessT=e.template;break;default:this.contentT=e.template;break}})}getAriaLabelledBy(){return this.header!==null?le("pn_id_")+"_header":null}parseDurationToMilliseconds(e){let i=/([\d\.]+)(ms|s)\b/g,n=0,o;for(;(o=i.exec(e))!==null;){let a=parseFloat(o[1]),d=o[2];d==="ms"?n+=a:d==="s"&&(n+=a*1e3)}if(n!==0)return n}_focus(e){if(e){let i=this.parseDurationToMilliseconds(this.transitionOptions),n=It.getFocusableElements(e);if(n&&n.length>0)return this.zone.runOutsideAngular(()=>{setTimeout(()=>n[0].focus(),i||5)}),!0}return!1}focus(e=this.contentViewChild?.nativeElement){let i=this._focus(e);i||(i=this._focus(this.footerViewChild?.nativeElement),i||(i=this._focus(this.headerViewChild?.nativeElement),i||this._focus(this.contentViewChild?.nativeElement)))}close(e){this.visible=!1,this.visibleChange.emit(this.visible),e.preventDefault()}enableModality(){this.closable&&this.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",e=>{this.wrapper&&this.wrapper.isSameNode(e.target)&&this.close(e)})),this.modal&&ln()}disableModality(){if(this.wrapper){this.dismissableMask&&this.unbindMaskClickListener();let e=document.querySelectorAll('[data-p-scrollblocker-active="true"]');this.modal&&e&&e.length==1&&dn(),this.cd.destroyed||this.cd.detectChanges()}}maximize(){this.maximized=!this.maximized,!this.modal&&!this.blockScroll&&(this.maximized?ln():dn()),this.onMaximize.emit({maximized:this.maximized})}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}moveOnTop(){this.autoZIndex?(Ze.set("modal",this.container(),this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container().style.zIndex,10)-1)):this.zIndexForLayering=Ze.generateZIndex("modal",(this.baseZIndex??0)+this.config.zIndex.modal)}createStyle(){if(be(this.platformId)&&!this.styleElement&&!this.$unstyled()){this.styleElement=this.renderer.createElement("style"),this.styleElement.type="text/css",Zt(this.styleElement,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.styleElement);let e="";for(let i in this.breakpoints)e+=`
                        @media screen and (max-width: ${i}) {
                            .p-dialog[${this.id}]:not(.p-dialog-maximized) {
                                width: ${this.breakpoints[i]} !important;
                            }
                        }
                    `;this.renderer.setProperty(this.styleElement,"innerHTML",e),Zt(this.styleElement,"nonce",this.config?.csp()?.nonce)}}initDrag(e){e.target.closest("div")?.getAttribute("data-pc-section")!=="headeractions"&&this.draggable&&(this.dragging=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.container().style.margin="0",this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&Qt(this.document.body,{"user-select":"none"}))}onDrag(e){if(this.dragging&&this.container()){let i=ze(this.container()),n=Ue(this.container()),o=e.pageX-this.lastPageX,a=e.pageY-this.lastPageY,d=this.container().getBoundingClientRect(),p=getComputedStyle(this.container()),h=parseFloat(p.marginLeft),b=parseFloat(p.marginTop),C=d.left+o-h,P=d.top+a-b,B=Wt();this.container().style.position="fixed",this.keepInViewport?(C>=this.minX&&C+i<B.width&&(this._style.left=`${C}px`,this.lastPageX=e.pageX,this.container().style.left=`${C}px`),P>=this.minY&&P+n<B.height&&(this._style.top=`${P}px`,this.lastPageY=e.pageY,this.container().style.top=`${P}px`)):(this.lastPageX=e.pageX,this.container().style.left=`${C}px`,this.lastPageY=e.pageY,this.container().style.top=`${P}px`),this.overlayService.emitParentDrag(this.container())}}endDrag(e){this.dragging&&(this.dragging=!1,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.cd.detectChanges(),this.onDragEnd.emit(e))}resetPosition(){this.container().style.position="",this.container().style.left="",this.container().style.top="",this.container().style.margin=""}center(){this.resetPosition()}initResize(e){this.resizable&&(this.resizing=!0,this.lastPageX=e.pageX,this.lastPageY=e.pageY,this.document.body.setAttribute("data-p-unselectable-text","true"),!this.$unstyled()&&Qt(this.document.body,{"user-select":"none"}),this.onResizeInit.emit(e))}onResize(e){if(this.resizing){let i=e.pageX-this.lastPageX,n=e.pageY-this.lastPageY,o=ze(this.container()),a=Ue(this.container()),d=Ue(this.contentViewChild?.nativeElement),p=o+i,h=a+n,b=this.container().style.minWidth,C=this.container().style.minHeight,P=this.container().getBoundingClientRect(),B=Wt();(!parseInt(this.container().style.top)||!parseInt(this.container().style.left))&&(p+=i,h+=n),(!b||p>parseInt(b))&&P.left+p<B.width&&(this._style.width=p+"px",this.container().style.width=this._style.width),(!C||h>parseInt(C))&&P.top+h<B.height&&(this.contentViewChild.nativeElement.style.height=d+h-a+"px",this._style.height&&(this._style.height=h+"px",this.container().style.height=this._style.height)),this.lastPageX=e.pageX,this.lastPageY=e.pageY}}resizeEnd(e){this.resizing&&(this.resizing=!1,this.document.body.removeAttribute("data-p-unselectable-text"),!this.$unstyled()&&(this.document.body.style["user-select"]=""),this.onResizeEnd.emit(e))}bindGlobalListeners(){this.draggable&&(this.bindDocumentDragListener(),this.bindDocumentDragEndListener()),this.resizable&&this.bindDocumentResizeListeners(),this.closeOnEscape&&this.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentDragListener(),this.unbindDocumentDragEndListener(),this.unbindDocumentResizeListeners(),this.unbindDocumentEscapeListener()}bindDocumentDragListener(){this.documentDragListener||this.zone.runOutsideAngular(()=>{this.documentDragListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onDrag.bind(this))})}unbindDocumentDragListener(){this.documentDragListener&&(this.documentDragListener(),this.documentDragListener=null)}bindDocumentDragEndListener(){this.documentDragEndListener||this.zone.runOutsideAngular(()=>{this.documentDragEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.endDrag.bind(this))})}unbindDocumentDragEndListener(){this.documentDragEndListener&&(this.documentDragEndListener(),this.documentDragEndListener=null)}bindDocumentResizeListeners(){!this.documentResizeListener&&!this.documentResizeEndListener&&this.zone.runOutsideAngular(()=>{this.documentResizeListener=this.renderer.listen(this.document.defaultView,"mousemove",this.onResize.bind(this)),this.documentResizeEndListener=this.renderer.listen(this.document.defaultView,"mouseup",this.resizeEnd.bind(this))})}unbindDocumentResizeListeners(){this.documentResizeListener&&this.documentResizeEndListener&&(this.documentResizeListener(),this.documentResizeEndListener(),this.documentResizeListener=null,this.documentResizeEndListener=null)}bindDocumentEscapeListener(){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentEscapeListener=this.renderer.listen(e,"keydown",i=>{if(i.key=="Escape"){let n=this.container();if(!n)return;let o=Ze.getCurrent();(parseInt(n.style.zIndex)==o||this.zIndexForLayering==o)&&this.close(i)}})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}appendContainer(){this.$appendTo()!=="self"&&zn(this.document.body,this.wrapper)}restoreAppend(){this.container()&&this.$appendTo()!=="self"&&this.renderer.appendChild(this.el.nativeElement,this.wrapper)}onBeforeEnter(e){this.container.set(e.element),this.wrapper=this.container()?.parentElement,this.$attrSelector&&this.container()?.setAttribute(this.$attrSelector,""),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.container()?.setAttribute(this.id,""),this.modal&&this.enableModality()}onAfterEnter(){this.focusOnShow&&this.focus(),this.onShow.emit({})}onBeforeLeave(){this.modal&&(this.maskVisible=!1)}onAfterLeave(){this.onContainerDestroy(),this.renderDialog.set(!1),this.modal?this.renderMask.set(!1):this.maskVisible=!1,this.onHide.emit({}),this.cd.markForCheck()}onMaskAfterLeave(){this.renderDialog()||this.renderMask.set(!1)}onContainerDestroy(){this.unbindGlobalListeners(),this.dragging=!1,this.maximized&&(xe(this.document.body,"p-overflow-hidden"),this.document.body.style.removeProperty("--scrollbar-width"),this.maximized=!1),this.modal&&this.disableModality(),jt(this.document.body,"p-overflow-hidden")&&xe(this.document.body,"p-overflow-hidden"),this.container()&&this.autoZIndex&&Ze.clear(this.container()),this.zIndexForLayering&&Ze.revertZIndex(this.zIndexForLayering),this.container.set(null),this.wrapper=null,this._style=this.originalStyle?T({},this.originalStyle):{}}destroyStyle(){this.styleElement&&(this.renderer.removeChild(this.document.head,this.styleElement),this.styleElement=null)}onDestroy(){this.container()&&(this.restoreAppend(),this.onContainerDestroy()),this.destroyStyle()}get dataP(){return this.cn({maximized:this.maximized,modal:this.modal})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-dialog"]],contentQueries:function(i,n,o){if(i&1&&we(o,xr,4)(o,lo,4)(o,co,4)(o,Tr,4)(o,wr,4)(o,Er,4)(o,Mr,4)(o,Me,4),i&2){let a;M(a=I())&&(n._headerTemplate=a.first),M(a=I())&&(n._contentTemplate=a.first),M(a=I())&&(n._footerTemplate=a.first),M(a=I())&&(n._closeiconTemplate=a.first),M(a=I())&&(n._maximizeiconTemplate=a.first),M(a=I())&&(n._minimizeiconTemplate=a.first),M(a=I())&&(n._headlessTemplate=a.first),M(a=I())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&je(Ir,5)(lo,5)(co,5),i&2){let o;M(o=I())&&(n.headerViewChild=o.first),M(o=I())&&(n.contentViewChild=o.first),M(o=I())&&(n.footerViewChild=o.first)}},inputs:{hostName:"hostName",header:"header",draggable:[2,"draggable","draggable",D],resizable:[2,"resizable","resizable",D],contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",modal:[2,"modal","modal",D],closeOnEscape:[2,"closeOnEscape","closeOnEscape",D],dismissableMask:[2,"dismissableMask","dismissableMask",D],rtl:[2,"rtl","rtl",D],closable:[2,"closable","closable",D],breakpoints:"breakpoints",styleClass:"styleClass",maskStyleClass:"maskStyleClass",maskStyle:"maskStyle",showHeader:[2,"showHeader","showHeader",D],blockScroll:[2,"blockScroll","blockScroll",D],autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",Se],minX:[2,"minX","minX",Se],minY:[2,"minY","minY",Se],focusOnShow:[2,"focusOnShow","focusOnShow",D],maximizable:[2,"maximizable","maximizable",D],keepInViewport:[2,"keepInViewport","keepInViewport",D],focusTrap:[2,"focusTrap","focusTrap",D],transitionOptions:"transitionOptions",maskMotionOptions:[1,"maskMotionOptions"],motionOptions:[1,"motionOptions"],closeIcon:"closeIcon",closeAriaLabel:"closeAriaLabel",closeTabindex:"closeTabindex",minimizeIcon:"minimizeIcon",maximizeIcon:"maximizeIcon",closeButtonProps:"closeButtonProps",maximizeButtonProps:"maximizeButtonProps",visible:"visible",style:"style",position:"position",role:"role",appendTo:[1,"appendTo"],headerTemplate:[0,"content","headerTemplate"],contentTemplate:"contentTemplate",footerTemplate:"footerTemplate",closeIconTemplate:"closeIconTemplate",maximizeIconTemplate:"maximizeIconTemplate",minimizeIconTemplate:"minimizeIconTemplate",headlessTemplate:"headlessTemplate"},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange",onResizeInit:"onResizeInit",onResizeEnd:"onResizeEnd",onDragEnd:"onDragEnd",onMaximize:"onMaximize"},features:[V([po,{provide:uo,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:Sr,decls:1,vars:1,consts:[["container",""],["notHeadless",""],["content",""],["titlebar",""],["icon",""],["footer",""],[3,"class","style","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],[3,"pMotionOnAfterLeave","ngStyle","pBind","pMotion","pMotionAppear","pMotionEnterActiveClass","pMotionLeaveActiveClass","pMotionOptions"],["pFocusTrap","",3,"class","style","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],["pFocusTrap","",3,"pMotionOnBeforeEnter","pMotionOnAfterEnter","pMotionOnBeforeLeave","pMotionOnAfterLeave","ngStyle","pBind","pFocusTrapDisabled","pMotion","pMotionAppear","pMotionName","pMotionOptions"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],[3,"class","pBind","z-index","mousedown",4,"ngIf"],[3,"class","pBind","mousedown",4,"ngIf"],[3,"ngStyle","pBind"],[3,"class","pBind",4,"ngIf"],[3,"mousedown","pBind"],[3,"id","class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[3,"pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled","onClick","keydown.enter",4,"ngIf"],[3,"id","pBind"],[3,"onClick","keydown.enter","pt","styleClass","ariaLabel","tabindex","buttonProps","unstyled"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["data-p-icon","window-maximize",4,"ngIf"],["data-p-icon","window-minimize",4,"ngIf"],["data-p-icon","window-maximize"],["data-p-icon","window-minimize"],[3,"class",4,"ngIf"],["data-p-icon","times",4,"ngIf"],["data-p-icon","times"]],template:function(i,n){i&1&&(ne(Dr),re(0,ls,2,14,"div",6)),i&2&&se(n.renderMask()?0:-1)},dependencies:[Y,Bn,ke,Ce,bt,ot,eo,gi,hi,bi,$,x,Ft,Pt],encapsulation:2,changeDetection:0})}return t})(),mo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[mn,$,$]})}return t})();var fo=`
    .p-panel {
        display: block;
        border: 1px solid dt('panel.border.color');
        border-radius: dt('panel.border.radius');
        background: dt('panel.background');
        color: dt('panel.color');
    }

    .p-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: dt('panel.header.padding');
        background: dt('panel.header.background');
        color: dt('panel.header.color');
        border-style: solid;
        border-width: dt('panel.header.border.width');
        border-color: dt('panel.header.border.color');
        border-radius: dt('panel.header.border.radius');
    }

    .p-panel-toggleable .p-panel-header {
        padding: dt('panel.toggleable.header.padding');
    }

    .p-panel-title {
        line-height: 1;
        font-weight: dt('panel.title.font.weight');
    }

    .p-panel-content-container {
        display: grid;
        grid-template-rows: 1fr;
    }

    .p-panel-content-wrapper {
        min-height: 0;
    }

    .p-panel-content {
        padding: dt('panel.content.padding');
    }

    .p-panel-footer {
        padding: dt('panel.footer.padding');
    }
`;var us=["header"],ms=["icons"],fs=["content"],gs=["footer"],hs=["headericons"],bs=["contentWrapper"],vs=["*",[["p-header"]],[["p-footer"]]],ys=["*","p-header","p-footer"],_s=t=>({$implicit:t});function Cs(t,r){if(t&1&&(m(0,"span",4),A(1),g()),t&2){let e=u(2);y(e.cx("title")),s("pBind",e.ptm("title")),S("id",e.id+"_header"),l(),ee(e._header)}}function xs(t,r){t&1&&J(0)}function Ts(t,r){}function ws(t,r){t&1&&_(0,Ts,0,0,"ng-template")}function Es(t,r){if(t&1&&(ce(0),O(),k(1,"svg",12),pe()),t&2){let e=u(5);l(),s("pBind",e.ptm("pcToggleButton.icon"))}}function Ms(t,r){if(t&1&&(ce(0),O(),k(1,"svg",13),pe()),t&2){let e=u(5);l(),s("pBind",e.ptm("pcToggleButton.icon"))}}function Is(t,r){if(t&1&&(ce(0),_(1,Es,2,1,"ng-container",10)(2,Ms,2,1,"ng-container",10),pe()),t&2){let e=u(4);l(),s("ngIf",!e.collapsed),l(),s("ngIf",e.collapsed)}}function Ds(t,r){}function Ss(t,r){t&1&&_(0,Ds,0,0,"ng-template")}function ks(t,r){if(t&1&&_(0,Is,3,2,"ng-container",10)(1,Ss,1,0,null,11),t&2){let e=u(3);s("ngIf",!e.headerIconsTemplate&&!e._headerIconsTemplate&&!(e.toggleButtonProps!=null&&e.toggleButtonProps.icon)),l(),s("ngTemplateOutlet",e.headerIconsTemplate||e._headerIconsTemplate)("ngTemplateOutletContext",gt(3,_s,e.collapsed))}}function Bs(t,r){if(t&1){let e=oe();m(0,"p-button",9),Q("click",function(n){R(e);let o=u(2);return j(o.onIconClick(n))})("keydown",function(n){R(e);let o=u(2);return j(o.onKeyDown(n))}),_(1,ks,2,5,"ng-template",null,1,Ee),g()}if(t&2){let e=u(2);s("text",!0)("rounded",!0)("styleClass",e.cx("pcToggleButton"))("buttonProps",e.toggleButtonProps)("pt",e.ptm("pcToggleButton"))("unstyled",e.unstyled()),S("id",e.id+"_header")("aria-label",e.buttonAriaLabel)("aria-controls",e.id+"_content")("aria-expanded",!e.collapsed)}}function Ps(t,r){if(t&1){let e=oe();m(0,"div",7),Q("click",function(n){R(e);let o=u();return j(o.onHeaderClick(n))}),_(1,Cs,2,5,"span",6),W(2,1),_(3,xs,1,0,"ng-container",5),m(4,"div",4),_(5,ws,1,0,null,5)(6,Bs,3,10,"p-button",8),g()()}if(t&2){let e=u();y(e.cx("header")),s("pBind",e.ptm("header")),S("id",e.id+"-titlebar")("data-p",e.dataP),l(),s("ngIf",e._header),l(2),s("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),l(),y(e.cx("headerActions")),s("pBind",e.ptm("headerActions")),l(),s("ngTemplateOutlet",e.iconsTemplate||e._iconsTemplate),l(),s("ngIf",e.toggleable)}}function Fs(t,r){t&1&&J(0)}function Ls(t,r){t&1&&J(0)}function Ns(t,r){if(t&1&&(m(0,"div",4),W(1,2),_(2,Ls,1,0,"ng-container",5),g()),t&2){let e=u();y(e.cx("footer")),s("pBind",e.ptm("footer")),l(2),s("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)}}var Os={root:({instance:t})=>["p-panel p-component",{"p-panel-toggleable":t.toggleable,"p-panel-expanded":!t._collapsed&&t.toggleable,"p-panel-collapsed":t._collapsed&&t.toggleable}],header:"p-panel-header",title:"p-panel-title",headerActions:({instance:t})=>["p-panel-header-actions",{"p-panel-icons-start":t.iconPos==="start","p-panel-icons-end":t.iconPos==="end","p-panel-icons-center":t.iconPos==="center"}],pcToggleButton:"p-panel-toggle-button",contentContainer:"p-panel-content-container",contentWrapper:"p-panel-content-wrapper",content:"p-panel-content",footer:"p-panel-footer"},go=(()=>{class t extends z{name="panel";style=fo;classes=Os;static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275prov=N({token:t,factory:t.\u0275fac})}return t})();var ho=new H("PANEL_INSTANCE"),fn=(()=>{class t extends L{componentName="Panel";$pcPanel=c(ho,{optional:!0,skipSelf:!0})??void 0;_componentStyle=c(go);bindDirectiveInstance=c(x,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}id=le("pn_id_");toggleable;_header;_collapsed;get collapsed(){return this._collapsed}set collapsed(e){this._collapsed=e}styleClass;iconPos="end";showHeader=!0;toggler="icon";transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";toggleButtonProps;motionOptions=f(void 0);computedMotionOptions=F(()=>T(T({},this.ptm("motion")),this.motionOptions()));collapsedChange=new me;onBeforeToggle=new me;onAfterToggle=new me;footerFacet;headerTemplate;iconsTemplate;contentTemplate;footerTemplate;headerIconsTemplate;_headerTemplate;_iconsTemplate;_contentTemplate;_footerTemplate;_headerIconsTemplate;contentWrapperViewChild;get buttonAriaLabel(){return this._header}onHeaderClick(e){this.toggler==="header"&&this.toggle(e)}onIconClick(e){this.toggler==="icon"&&this.toggle(e)}toggle(e){this.onBeforeToggle.emit({originalEvent:e,collapsed:this.collapsed}),this.collapsed?this.expand():this.collapse(),e.preventDefault()}expand(){this._collapsed=!1,this.collapsedChange.emit(!1),this.updateTabIndex()}collapse(){this._collapsed=!0,this.collapsedChange.emit(!0),this.updateTabIndex()}getBlockableElement(){return this.el.nativeElement}updateTabIndex(){this.contentWrapperViewChild&&this.contentWrapperViewChild.nativeElement.querySelectorAll("input, button, select, a, textarea, [tabindex]").forEach(i=>{this.collapsed?i.setAttribute("tabindex","-1"):i.removeAttribute("tabindex")})}onKeyDown(e){(e.code==="Enter"||e.code==="Space")&&(this.toggle(e),e.preventDefault())}onToggleDone(e){this.onAfterToggle.emit({originalEvent:e,collapsed:this.collapsed})}templates;onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"header":this._headerTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"icons":this._iconsTemplate=e.template;break;case"headericons":this._headerIconsTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({toggleable:this.toggleable})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=v(t)))(n||t)}})();static \u0275cmp=E({type:t,selectors:[["p-panel"]],contentQueries:function(i,n,o){if(i&1&&we(o,Ct,5)(o,us,4)(o,ms,4)(o,fs,4)(o,gs,4)(o,hs,4)(o,Me,4),i&2){let a;M(a=I())&&(n.footerFacet=a.first),M(a=I())&&(n.headerTemplate=a.first),M(a=I())&&(n.iconsTemplate=a.first),M(a=I())&&(n.contentTemplate=a.first),M(a=I())&&(n.footerTemplate=a.first),M(a=I())&&(n.headerIconsTemplate=a.first),M(a=I())&&(n.templates=a)}},viewQuery:function(i,n){if(i&1&&je(bs,5),i&2){let o;M(o=I())&&(n.contentWrapperViewChild=o.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(_e("id",n.id),S("data-p",n.dataP),y(n.cn(n.cx("root"),n.styleClass)))},inputs:{id:"id",toggleable:[2,"toggleable","toggleable",D],_header:[0,"header","_header"],collapsed:[2,"collapsed","collapsed",D],styleClass:"styleClass",iconPos:"iconPos",showHeader:[2,"showHeader","showHeader",D],toggler:"toggler",transitionOptions:"transitionOptions",toggleButtonProps:"toggleButtonProps",motionOptions:[1,"motionOptions"]},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},features:[V([go,{provide:ho,useExisting:t},{provide:q,useExisting:t}]),X([x]),w],ngContentSelectors:ys,decls:8,vars:18,consts:[["contentWrapper",""],["icon",""],[3,"pBind","class","click",4,"ngIf"],["pMotionName","p-collapsible","role","region",3,"pMotionOnAfterEnter","pBind","pMotion","pMotionOptions","id"],[3,"pBind"],[4,"ngTemplateOutlet"],[3,"pBind","class",4,"ngIf"],[3,"click","pBind"],["severity","secondary","type","button","role","button",3,"text","rounded","styleClass","buttonProps","pt","unstyled","click","keydown",4,"ngIf"],["severity","secondary","type","button","role","button",3,"click","keydown","text","rounded","styleClass","buttonProps","pt","unstyled"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"pBind"],["data-p-icon","plus",3,"pBind"]],template:function(i,n){i&1&&(ne(vs),_(0,Ps,7,12,"div",2),m(1,"div",3),Q("pMotionOnAfterEnter",function(a){return n.onToggleDone(a)}),m(2,"div",4)(3,"div",4,0),W(5),_(6,Fs,1,0,"ng-container",5),g(),_(7,Ns,3,4,"div",6),g()()),i&2&&(s("ngIf",n.showHeader),l(),y(n.cx("contentContainer")),s("pBind",n.ptm("contentContainer"))("pMotion",!n.toggleable||n.toggleable&&!n.collapsed)("pMotionOptions",n.computedMotionOptions())("id",n.id+"_content"),S("aria-labelledby",n.id+"_header")("aria-hidden",n.collapsed)("tabindex",n.collapsed?"-1":void 0),l(),y(n.cx("contentWrapper")),s("pBind",n.ptm("contentWrapper")),l(),y(n.cx("content")),s("pBind",n.ptm("content")),l(3),s("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),l(),s("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[Y,ke,Ce,mi,ui,Ji,ot,$,ie,x,Ft,Pt],encapsulation:2,changeDetection:0})}return t})(),bo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=Z({type:t});static \u0275inj=G({imports:[fn,$,ie,$,ie]})}return t})();function Vs(t,r){if(t&1){let e=oe();m(0,"button",23),Q("click",function(){R(e);let n=u();return j(n.openImagePreview(n.route.image,n.route.title+" map",n.route.title+" Map"))}),k(1,"img",24),m(2,"span",25),k(3,"i",18),g(),m(4,"div",26)(5,"h2",27),A(6),g()()()}if(t&2){let e=u();S("aria-label","Open map image for "+e.route.title),l(),s("src",e.route.image,ct)("alt",e.route.title),l(5),ee(e.route.title)}}function $s(t,r){if(t&1){let e=oe();m(0,"button",28),Q("click",function(){R(e);let n=u();return j(n.downloadGpx(n.route.gpxFile,n.route.title))}),m(1,"div",29),k(2,"i",30),g(),m(3,"div",31)(4,"span",32),A(5),g(),m(6,"span",33),A(7),g()()()}if(t&2){let e=u();s("disabled",e.gpxDownloading),l(5),ee(e.gpxDownloading?"Preparing GPX\u2026":"Download GPX"),l(2),ee(e.gpxDownloading?"Choose an app or save location":e.route.title)}}var Lt=class t{route;previewVisible=!1;previewImage="";previewAlt="";previewTitle="";gpxDownloading=!1;openImagePreview(r,e,i){this.previewImage=r,this.previewAlt=e,this.previewTitle=i,this.previewVisible=!0}downloadGpx(r,e){return Le(this,null,function*(){this.gpxDownloading=!0;let i=`${e.replace(/[^a-z0-9]+/gi,"_").replace(/^_|_$/g,"")}.gpx`;try{let n=yield fetch(r);if(!n.ok)throw new Error(`Could not load GPX file (${n.status})`);let o=yield n.blob();if(Yn.isNativePlatform()){let a=yield Ni.writeFile({path:i,data:yield this.blobToBase64(o),directory:Kn.Documents,recursive:!0});yield Oi.share({title:"Save or open GPX route",text:e,url:a.uri,dialogTitle:"Download GPX"})}else{let a=URL.createObjectURL(o),d=document.createElement("a");d.href=a,d.download=i,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(a)}}catch(n){console.error("GPX download failed",n);let o=n instanceof Error?`

${n.message}`:"";window.alert(`The GPX file could not be downloaded. Please try again.${o}`)}finally{this.gpxDownloading=!1}})}blobToBase64(r){return new Promise((e,i)=>{let n=new FileReader;n.onerror=()=>i(n.error??new Error("Could not read GPX file")),n.onload=()=>{if(typeof n.result!="string"){i(new Error("Could not encode GPX file"));return}e(n.result.substring(n.result.indexOf(",")+1))},n.readAsDataURL(r)})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-route-card"]],inputs:{route:"route"},decls:41,vars:19,consts:[["header",""],[1,"route-card"],[1,"stats-row"],[1,"stat-item"],[1,"stat-icon-wrapper"],[1,"pi","pi-map","stat-icon"],[1,"stat-value"],[1,"stat-label"],[1,"stat-divider"],[1,"pi","pi-arrow-up","stat-icon"],[1,"pi","pi-cloud","stat-icon"],[1,"route-description"],["header","Route Details","expandIcon","pi pi-chevron-up","collapseIcon","pi pi-chevron-down",1,"route-detail-panel",3,"toggleable","collapsed"],[1,"detail-content"],[1,"detail-text"],["type","button",1,"detail-image-wrapper","image-preview-trigger",3,"click"],[1,"detail-image",3,"src","alt"],["aria-hidden","true",1,"image-preview-icon","image-preview-icon--detail"],[1,"pi","pi-search-plus"],["type","button",1,"gpx-download",3,"disabled"],["styleClass","image-preview-dialog","appendTo","body",3,"visibleChange","visible","modal","dismissableMask","draggable","resizable","header"],[1,"image-preview-content"],[1,"image-preview-full",3,"src","alt"],["type","button",1,"card-image-wrapper","image-preview-trigger",3,"click"],[1,"card-hero-image",3,"src","alt"],["aria-hidden","true",1,"image-preview-icon"],[1,"card-title-overlay"],[1,"route-title"],["type","button",1,"gpx-download",3,"click","disabled"],[1,"gpx-icon-wrapper"],[1,"pi","pi-download"],[1,"gpx-text"],[1,"gpx-label"],[1,"gpx-sub"]],template:function(e,i){if(e&1){let n=oe();m(0,"p-card",1),_(1,Vs,7,4,"ng-template",null,0,Ee),m(3,"div",2)(4,"div",3)(5,"div",4),k(6,"i",5),g(),m(7,"span",6),A(8),g(),m(9,"span",7),A(10,"Distance"),g()(),k(11,"div",8),m(12,"div",3)(13,"div",4),k(14,"i",9),g(),m(15,"span",6),A(16),g(),m(17,"span",7),A(18,"Ascent"),g()(),k(19,"div",8),m(20,"div",3)(21,"div",4),k(22,"i",10),g(),m(23,"span",6),A(24),g(),m(25,"span",7),A(26,"Max Altitude"),g()()(),m(27,"p",11),A(28),g(),m(29,"p-panel",12)(30,"div",13)(31,"p",14),A(32),g(),m(33,"button",15),Q("click",function(){return i.openImagePreview(i.route.extraImage,i.route.title+" elevation profile",i.route.title+" Elevation Profile")}),k(34,"img",16),m(35,"span",17),k(36,"i",18),g()(),re(37,$s,8,3,"button",19),g()()(),m(38,"p-dialog",20),Mn("visibleChange",function(a){return R(n),En(i.previewVisible,a)||(i.previewVisible=a),j(a)}),m(39,"div",21),k(40,"img",22),g()()}e&2&&(l(8),Oe("",i.route.distance," km"),l(8),Oe("",i.route.ascent," m"),l(8),Oe("",i.route.maxAltitude," m"),l(4),ee(i.route.description),l(),s("toggleable",!0)("collapsed",!0),l(3),ee(i.route.detailedDescription),l(),S("aria-label","Open elevation profile for "+i.route.title),l(),s("src",i.route.extraImage,ct)("alt",i.route.title+" detail"),l(3),se(i.route.gpxFile?37:-1),l(),wn("visible",i.previewVisible),s("modal",!0)("dismissableMask",!0)("draggable",!1)("resizable",!1)("header",i.previewTitle),l(2),s("src",i.previewImage,ct)("alt",i.previewAlt))},dependencies:[$i,sn,mo,mn,bo,fn],styles:["[_nghost-%COMP%]{display:block;height:100%}.route-card[_ngcontent-%COMP%]{height:100%;border-radius:16px;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease}.route-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px)}.card-image-wrapper[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:220px}.image-preview-trigger[_ngcontent-%COMP%]{width:100%;padding:0;border:0;background:transparent;cursor:zoom-in;display:block;text-align:inherit}.image-preview-trigger[_ngcontent-%COMP%]:focus-visible{outline:3px solid rgba(46,125,50,.75);outline-offset:-3px}.image-preview-icon[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;width:38px;height:38px;border-radius:50%;background:#ffffffeb;color:#1b5e20;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(-4px);transition:opacity .2s ease,transform .2s ease;z-index:2}.image-preview-icon[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:1rem}.image-preview-trigger[_ngcontent-%COMP%]:hover   .image-preview-icon[_ngcontent-%COMP%], .image-preview-trigger[_ngcontent-%COMP%]:focus-visible   .image-preview-icon[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.card-hero-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .5s ease;display:block}.route-card[_ngcontent-%COMP%]:hover   .card-hero-image[_ngcontent-%COMP%]{transform:scale(1.04)}.card-title-overlay[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:40px 20px 16px;background:linear-gradient(to top,rgba(0,0,0,.75) 0%,transparent 100%)}.route-title[_ngcontent-%COMP%]{margin:0;font-family:Playfair Display,Georgia,serif;font-size:1.35rem;font-weight:700;color:#fff;letter-spacing:.01em;text-shadow:0 1px 4px rgba(0,0,0,.4)}.stats-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around;padding:20px 8px 16px;border-bottom:1px solid rgba(0,0,0,.08);margin-bottom:16px}.stat-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1}.stat-divider[_ngcontent-%COMP%]{width:1px;height:48px;background:#00000014}.stat-icon-wrapper[_ngcontent-%COMP%]{width:44px;height:44px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center}.stat-icon[_ngcontent-%COMP%]{font-size:1.1rem;color:#2e7d32}.stat-value[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,serif;font-size:1rem;font-weight:700;color:#1a2e1a;line-height:1}.stat-label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:500;text-transform:uppercase;letter-spacing:.08em;color:#7a8c7a}.route-description[_ngcontent-%COMP%]{font-size:.9rem;line-height:1.7;color:#3a4a3a;margin:0 0 20px}.route-detail-panel[_ngcontent-%COMP%]{border-radius:10px;overflow:hidden}.detail-content[_ngcontent-%COMP%]{padding:4px 0}.detail-text[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.75;color:#455845;margin:0 0 16px}.detail-image-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:10px;overflow:hidden}.image-preview-icon--detail[_ngcontent-%COMP%]{top:10px;right:10px;box-shadow:0 4px 14px #0000001f}.detail-image[_ngcontent-%COMP%]{width:100%;height:180px;object-fit:contain;background:#fff;display:block}.gpx-download[_ngcontent-%COMP%]{width:100%;border:1px dashed #2e7d32;display:flex;align-items:center;gap:12px;margin-top:16px;padding:12px 16px;background:#f0f7f0;border-radius:10px;text-decoration:none;text-align:left;font:inherit;cursor:pointer;transition:background .2s ease,border-style .2s ease}.gpx-download[_ngcontent-%COMP%]:hover{background:#e0f2e0;border-style:solid}.gpx-download[_ngcontent-%COMP%]:hover   .gpx-icon-wrapper[_ngcontent-%COMP%]{background:#2e7d32}.gpx-download[_ngcontent-%COMP%]:hover   .gpx-icon-wrapper[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{color:#fff}.gpx-download[_ngcontent-%COMP%]:disabled{cursor:wait;opacity:.72}.gpx-icon-wrapper[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .2s ease}.gpx-icon-wrapper[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:1rem;color:#2e7d32;transition:color .2s ease}.gpx-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.gpx-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:#1b5e20}.gpx-sub[_ngcontent-%COMP%]{font-size:.78rem;color:#7a8c7a}[_nghost-%COMP%]     .image-preview-dialog{width:min(94vw,1180px)}[_nghost-%COMP%]     .image-preview-dialog .p-dialog-content{padding:0;background:#111;overflow:hidden}.image-preview-content[_ngcontent-%COMP%]{width:100%;max-height:82vh;background:#111;display:flex;align-items:center;justify-content:center}.image-preview-full[_ngcontent-%COMP%]{width:100%;max-height:82vh;object-fit:contain;display:block}"]})};var gn=(t,r)=>r.id;function Hs(t,r){t&1&&(m(0,"div",0),k(1,"p-progressSpinner",3),m(2,"p"),A(3,"Loading routes..."),g()())}function Rs(t,r){if(t&1&&(m(0,"div",1),k(1,"i",4),m(2,"p"),A(3),g()()),t&2){let e=u();l(3),ee(e.error)}}function js(t,r){if(t&1&&(m(0,"p-tab",6),k(1,"i"),A(2),m(3,"span",7),A(4),g()()),t&2){let e=r.$implicit;s("value",e.id),l(),y(In("pi ",e.id==="long"?"pi-flag":"pi-star"," tab-icon")),l(),Oe(" ",e.label," "),l(2),ee(e.routes.length)}}function Ws(t,r){if(t&1&&(m(0,"div",12),k(1,"app-route-card",13),g()),t&2){let e=r.$implicit;l(),s("route",e)}}function Us(t,r){if(t&1&&(m(0,"p-tabpanel",6)(1,"div",8)(2,"h2",9),A(3),g(),m(4,"p",10),A(5),g()(),m(6,"div",11),ut(7,Ws,2,1,"div",12,gn),g()()),t&2){let e=r.$implicit;s("value",e.id),l(3),ee(e.label),l(2),Oe("",e.routes.length," routes available"),l(2),mt(e.routes)}}function Qs(t,r){if(t&1){let e=oe();m(0,"p-tabs",5),Q("valueChange",function(n){R(e);let o=u(2);return j(o.selectCategory(n))}),m(1,"p-tablist"),ut(2,js,5,6,"p-tab",6,gn),g(),m(4,"p-tabpanels"),ut(5,Us,9,3,"p-tabpanel",6,gn),g()()}if(t&2){let e=u(),i=u();s("value",i.navigation.activeCategory()),l(2),mt(e.categories),l(3),mt(e.categories)}}function qs(t,r){if(t&1&&(re(0,Hs,4,0,"div",0),re(1,Rs,4,1,"div",1),re(2,Qs,7,1,"p-tabs",2)),t&2){let e=r;se(e.loading?0:-1),l(),se(e.error?1:-1),l(),se(!e.loading&&!e.error&&e.categories.length?2:-1)}}var vo=class t{routesService=c(Mt);navigation=c(Jn);selectCategory(r){(r==="long"||r==="short")&&this.navigation.selectCategory(r)}viewModel$=this.routesService.getRoutes().pipe(yn(r=>({categories:r.categories,loading:!1,error:null})),Cn({categories:[],loading:!0,error:null}),_n(()=>vn({categories:[],loading:!1,error:"Failed to load routes. Please try refreshing."})));static \u0275fac=function(e){return new(e||t)};static \u0275cmp=E({type:t,selectors:[["app-home"]],decls:2,vars:3,consts:[[1,"loading-state"],[1,"error-state"],[1,"routes-tabs",3,"value"],["strokeWidth","3","animationDuration","1s"],[1,"pi","pi-exclamation-triangle"],[1,"routes-tabs",3,"valueChange","value"],[3,"value"],[1,"tab-count"],[1,"panel-header"],[1,"panel-title"],[1,"panel-subtitle"],[1,"routes-grid"],[1,"route-col"],[3,"route"]],template:function(e,i){if(e&1&&(re(0,qs,3,3),Dn(1,"async")),e&2){let n;se((n=Sn(1,1,i.viewModel$))?0:-1,n)}},dependencies:[Si,Ge,an,on,Et,nn,Fi,rn,Lt,Pn],styles:[".loading-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:80px 20px;color:#7a8c7a}.loading-state[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%]   .pi[_ngcontent-%COMP%]{font-size:2.5rem;color:#e53e3e}.tab-icon[_ngcontent-%COMP%]{margin-right:6px;font-size:.85rem}.tab-count[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;background:#2e7d32;color:#fff;border-radius:20px;font-size:.7rem;font-weight:700;min-width:20px;height:20px;padding:0 6px;margin-left:8px}.panel-header[_ngcontent-%COMP%]{padding:24px 0 20px;border-bottom:2px solid rgba(0,0,0,.09);margin-bottom:32px}.panel-title[_ngcontent-%COMP%]{font-family:Playfair Display,Georgia,serif;font-size:1.75rem;font-weight:800;color:#1a2e1a;margin:0 0 4px}.panel-subtitle[_ngcontent-%COMP%]{font-size:.875rem;color:#7a8c7a;margin:0}.routes-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:28px;align-items:start}.route-col[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media(max-width:600px){.routes-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"]})};export{vo as HomeComponent};
