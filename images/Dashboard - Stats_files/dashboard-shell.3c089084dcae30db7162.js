(function(){var oh=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpdashboard=window.webpackJsonpdashboard||[]).push([[29],{"+7hy":function(a,o,t){"use strict";var e=t("k4gB"),r=t("Ty5D"),i=t("obdN"),s=t("9iID"),c=t("2i9H"),f=t("nKUr"),b=t.n(f);const{bool:h,func:v,node:O,string:p}=e.b;class m extends e.a{constructor(u){super(u);this.handleBeforeNavigation=n=>{var x;const{onConfirm:y,onCancel:j,title:I,content:C,cancelText:S,confirmText:T}=this.props,{isConfirmed:R}=this.state;return R||(x=n.state)!==null&&x!==void 0&&x.forceNavigate?!0:(Object(i.a)({title:I,content:C,cancelText:S,confirmText:T,onConfirm:()=>{this.setState({isConfirmed:!0},()=>{y(n)})},onCancel:()=>{Object(c.b)(),j&&j()}}),!1)},this.state={isConfirmed:!1}}render(){const{when:u}=this.props;return s.a.get("feature.flag.router.unsavedChanges.popup")?Object(f.jsx)(r.a,{when:u,message:this.handleBeforeNavigation}):null}}m.displayName="UnsavedChangesRouteGuard",m.propTypes={when:h.isRequired,onConfirm:v.isRequired,onCancel:v,title:p,content:O,cancelText:p,confirmText:p},o.a=m},"+Ewk":function(a,o,t){"use strict";(function(e){var r=t("P7XM"),i=t("96lO"),s=t("+fXv"),c=t("v0om");function f(b){if(!f.enabled())throw new Error("Transport created when disabled");i.call(this,b,"/jsonp",c,s)}r(f,i),f.enabled=function(){return!!e.document},f.transportName="jsonp-polling",f.roundTrips=1,f.needBody=!0,a.exports=f}).call(this,t("yLpj"))},"+R4f":function(a,o,t){"use strict";var e=t("P7XM"),r=t("raCH").EventEmitter,i=t("yjSe"),s=function(){};function c(f){s(f),r.call(this);var b=this,h=this.es=new i(f);h.onmessage=function(v){s("message",v.data),b.emit("message",decodeURI(v.data))},h.onerror=function(v){s("error",h.readyState,v);var O=h.readyState!==2?"network":"permanent";b._cleanup(),b._close(O)}}e(c,r),c.prototype.abort=function(){s("abort"),this._cleanup(),this._close("user")},c.prototype._cleanup=function(){s("cleanup");var f=this.es;f&&(f.onmessage=f.onerror=null,f.close(),this.es=null)},c.prototype._close=function(f){s("close",f);var b=this;setTimeout(function(){b.emit("close",null,f),b.removeAllListeners()},200)},a.exports=c},"+eeU":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.adminActionsStyle-admin-actions-popup-1d3b {
  height: 100%; }
  .adminActionsStyle-admin-actions-popup-1d3b *,
  .adminActionsStyle-admin-actions-popup-1d3b *::before,
  .adminActionsStyle-admin-actions-popup-1d3b *::after {
    box-sizing: border-box; }
`,""]),o.locals={"admin-actions-popup":"adminActionsStyle-admin-actions-popup-1d3b"}},"+fXv":function(a,o,t){"use strict";(function(e){var r=t("8fj+"),i=t("JYLm"),s=t("JqAl"),c=t("Yh+D"),f=t("P7XM"),b=t("raCH").EventEmitter,h=function(){};function v(O){h(O);var p=this;b.call(this),r.polluteGlobalNamespace(),this.id="a"+i.string(6);var m=c.addQuery(O,"c="+encodeURIComponent(r.WPrefix+"."+this.id));e[r.WPrefix][this.id]=this._callback.bind(this),this._createScript(m),this.timeoutId=setTimeout(function(){h("timeout"),p._abort(new Error("JSONP script loaded abnormally (timeout)"))},v.timeout)}f(v,b),v.prototype.abort=function(){if(h("abort"),e[r.WPrefix][this.id]){var O=new Error("JSONP user aborted read");O.code=1e3,this._abort(O)}},v.timeout=35e3,v.scriptErrorTimeout=1e3,v.prototype._callback=function(O){h("_callback",O),this._cleanup(),!this.aborting&&(O&&(h("message",O),this.emit("message",O)),this.emit("close",null,"network"),this.removeAllListeners())},v.prototype._abort=function(O){h("_abort",O),this._cleanup(),this.aborting=!0,this.emit("close",O.code,O.message),this.removeAllListeners()},v.prototype._cleanup=function(){if(h("_cleanup"),clearTimeout(this.timeoutId),this.script2&&(this.script2.parentNode.removeChild(this.script2),this.script2=null),this.script){var O=this.script;O.parentNode.removeChild(O),O.onreadystatechange=O.onerror=O.onload=O.onclick=null,this.script=null}delete e[r.WPrefix][this.id]},v.prototype._scriptError=function(){h("_scriptError");var O=this;this.errorTimer||(this.errorTimer=setTimeout(function(){O.loadedOkay||O._abort(new Error("JSONP script loaded abnormally (onerror)"))},v.scriptErrorTimeout))},v.prototype._createScript=function(O){h("_createScript",O);var p=this,m=this.script=e.document.createElement("script"),l;if(m.id="a"+i.string(8),m.src=O,m.type="text/javascript",m.charset="UTF-8",m.onerror=this._scriptError.bind(this),m.onload=function(){h("onload"),p._abort(new Error("JSONP script loaded abnormally (onload)"))},m.onreadystatechange=function(){if(h("onreadystatechange",m.readyState),/loaded|closed/.test(m.readyState)){if(m&&m.htmlFor&&m.onclick){p.loadedOkay=!0;try{m.onclick()}catch(n){}}m&&p._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))}},typeof m.async=="undefined"&&e.document.attachEvent)if(s.isOpera())l=this.script2=e.document.createElement("script"),l.text="try{var a = document.getElementById('"+m.id+"'); if(a)a.onerror();}catch(x){};",m.async=l.async=!1;else{try{m.htmlFor=m.id,m.event="onclick"}catch(n){}m.async=!0}typeof m.async!="undefined"&&(m.async=!0);var u=e.document.getElementsByTagName("head")[0];u.insertBefore(m,u.firstChild),l&&u.insertBefore(l,u.firstChild)},a.exports=v}).call(this,t("yLpj"))},"+vYJ":function(a,o,t){"use strict";o.__esModule=!0,o.createNewLookupObject=r;var e=t("sTlx");function r(){for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return e.extend.apply(void 0,[Object.create(null)].concat(s))}},"/D2C":function(a,o,t){var e=t("srKl");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"/E5Q":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavBarSubNav-container-L-3b {
  position: relative;
  display: flex;
  border-left: 1px solid var(--header-border-color);
  width: 120px;
  font-size: 15px;
  cursor: default; }
  .NavBarSubNav-container-L-3b:hover .NavBarSubNav-text-3c3b {
    color: var(--button-color); }
  .NavBarSubNav-container-L-3b .NavBarSubNav-icon-Rj3b {
    fill: var(--header-text-color);
    margin-inline-end: 15px; }
  .NavBarSubNav-container-L-3b:hover .NavBarSubNav-icon-Rj3b {
    fill: var(--button-color); }
  .NavBarSubNav-container-L-3b .NavBarSubNav-children-3T3b {
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    width: 210px;
    position: absolute;
    top: 100%;
    left: -1px;
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--header-border-color);
    border-left: 1px solid var(--header-border-color); }
  .NavBarSubNav-container-L-3b:hover .NavBarSubNav-children-3T3b {
    opacity: 1;
    visibility: visible; }

.NavBarSubNav-sub-nav-is-active-Di3b .NavBarSubNav-text-3c3b {
  color: var(--button-color); }

.NavBarSubNav-sub-nav-is-active-Di3b .NavBarSubNav-icon-Rj3b {
  fill: var(--button-color); }

.NavBarSubNav-new-label-Lr3b::after {
  content: '';
  width: 8px;
  height: 8px;
  background-color: var(--button-color);
  display: inline-block;
  border-radius: 50%;
  margin-block-end: 24px; }
`,""]),o.locals={container:"NavBarSubNav-container-L-3b",text:"NavBarSubNav-text-3c3b",icon:"NavBarSubNav-icon-Rj3b",children:"NavBarSubNav-children-3T3b","sub-nav-is-active":"NavBarSubNav-sub-nav-is-active-Di3b","new-label":"NavBarSubNav-new-label-Lr3b"}},"/QOC":function(a,o,t){var e=t("GTEb");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"/VSt":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`#trial-notification,
#trial-notification * {
  box-sizing: content-box; }
`,""])},"/clg":function(a,o,t){var e=t("l/8K");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"/eu3":function(a,o,t){"use strict";t.d(o,"b",function(){return s}),t.d(o,"a",function(){return c});var e=t("z+qG"),r=t("LyWx");function i(b,{op:h="and"}={}){return e.a(b,{op:h})}function s(b){return e.c(b)}function c(){return s(r.D.D_AWARE)}function f(){return e.b()}},"/lRL":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.StatusCellRenderer-module-status-cell-2O3b {
  line-height: normal; }
`,""]),o.locals={"status-cell":"StatusCellRenderer-module-status-cell-2O3b"}},"/nT+":function(a,o,t){"use strict";t.d(o,"b",function(){return k}),t.d(o,"d",function(){return Y}),t.d(o,"c",function(){return at}),t.d(o,"e",function(){return z}),t.d(o,"a",function(){return T});var e=t("yXPU"),r=t.n(e),i=t("k4gB"),s=t("2i9H"),c=t("E/eW"),f=t.n(c),b=t("9Mi+"),h=t("ddYX"),v=t("FfLZ"),O=t("MjcL"),p=t("LyWx"),m=t("nKUr"),l=t.n(m);const u="us",n="FREELANCER",x="DIGITAL_MARKETING",y="SASS",j="SMB",I=[{label:Object(i.m)("dashboard.formRegistration.field.yourRole.webDesigner"),value:"DESIGNER"},{label:Object(i.m)("dashboard.formRegistration.field.yourRole.webDeveloper"),value:"WEB_DEV"}],C=[{label:Object(i.m)("dashboard.formRegistration.field.yourRole.both"),value:"WEB_DESIGNER_DEV"}],S=[{label:Object(i.m)("dashboard.formRegistration.field.yourRole.productManager"),value:"PRODUCT"},{label:Object(i.m)("dashboard.formRegistration.field.yourRole.operationsManager"),value:"OP_MANAGER"},{label:Object(i.m)("dashboard.formRegistration.field.yourRole.marketer"),value:"MARKETER"},{label:Object(i.m)("dashboard.formRegistration.field.yourRole.executiveOrOwner"),value:"EXECUTIVE_OR_OWNER"}],T=[{value:n,label:Object(i.m)("dashboard.formRegistration.descriptionOption.freelance")},{value:x,label:Object(i.m)("dashboard.formRegistration.descriptionOption.webAgency")},{value:y,label:Object(i.m)("dashboard.formRegistration.descriptionOption.saas")},{value:j,label:Object(i.m)("dashboard.formRegistration.descriptionOption.myBusiness")}],R={ONE_TO_THREE:{label:"1 - 3",value:"ONE_TO_THREE",isAboveThreeSites:!1},FOUR_TO_TEN:{label:"4 - 10",value:"FOUR_TO_TEN",isAboveThreeSites:!0},TEN_PLUS:{label:"10 +",value:"TEN_PLUS",isAboveThreeSites:!0},NONE:{label:"None",value:"NONE",isAboveThreeSites:!1}},M=[{label:"<100",value:"LESS_THAN_HUNDRED"},{label:"100 - 1,000",value:"HUNDRED_TO_THOUSAND"},{label:"1,000 - 10,000",value:"THOUSAND_TO_TEN_THOUSAND"},{label:"10,000 +",value:"MORE_THAN_TEN_THOUSAND"}],A=[{label:Object(i.m)("dashboard.formRegistration.field.buildSitesForClient.yes"),value:"YES"},{label:Object(i.m)("dashboard.formRegistration.field.buildSitesForClient.no"),value:"NO"}];function W(){return P.apply(this,arguments)}function P(){return P=r()(function*(){const ct=(yield Promise.all([t.e(36),t.e(38)]).then(t.bind(null,"KZ+W"))).default;yield Object(s.f)(s.a.FREESTYLE,Object.assign({key:"registration-form",content:Object(m.jsx)(ct,{})},L(),{maxHeight:"100vh",zIndex:103,hideCloseButton:!0,closeOnEsc:!1,className:f.a["registration-form-freestyle-popup"],contentClassName:f.a["registration-form-popup-content"],contentInnerClassName:f.a["registration-form-popup-content"]}))}),P.apply(this,arguments)}function L(){return p.l.isMobileDevice?{width:"343px",height:"553px"}:{width:"480px",height:"580px"}}function k(){return G.apply(this,arguments)}function G(){return G=r()(function*(){const rt=yield fetch("https://ipapi.co/json/");if(!rt.ok)return u;const ct=yield rt.json();return ct==null?void 0:ct.country_code.toLowerCase()}),G.apply(this,arguments)}function Y({registrationFormCompleted:rt,shouldFillRegistrationForm:ct,accountDesc:dt,lastLoginDate:vt}){J({registrationFormCompleted:rt,shouldFillRegistrationForm:ct})?W():X(ct,vt)&&Object(v.g)({accountDesc:dt})}function J({registrationFormCompleted:rt,shouldFillRegistrationForm:ct}){return!rt&&ct}function X(rt,ct){return!rt&&!ct}function at(rt){const ct={radioTitle:Object(i.m)("dashboard.formRegistration.field.sitesPerMonth"),radioOptions:Object.values(R),radioValue:rt.sitesPerMonth,radioName:"sitesPerMonth",yourRoleDisabled:!rt.sitesPerMonth};switch(rt.description){case n:{const dt=rt.sitesPerMonth&&R[rt.sitesPerMonth].isAboveThreeSites?S:C;return Object.assign({},ct,{yourRoleOptions:[...I,...dt]})}case x:return Object.assign({},ct,{yourRoleOptions:[...I,...S]});case y:return{radioTitle:Object(i.m)("dashboard.formRegistration.field.customersDoYouHave"),radioOptions:M,radioValue:rt.customerCountOptions,radioName:"customerCountOptions",yourRoleOptions:[...I,...S],yourRoleDisabled:!rt.customerCountOptions};case j:return{radioTitle:Object(i.m)("dashboard.formRegistration.field.buildSitesForClient"),radioOptions:A,radioValue:rt.isSitesForClient,radioName:"isSitesForClient",yourRoleOptions:[...I,...C],yourRoleDisabled:!rt.isSitesForClient};default:return{}}}function z(rt){return F.apply(this,arguments)}function F(){return F=r()(function*({event:rt,form:ct}){rt.preventDefault();const dt=Object.fromEntries(new FormData(ct));(dt.proDesc===y||dt.proDesc===x)&&Object(O.a)("agency_or_saas_description"),yield Object(b.postToServer)({url:"/account/registration",data:dt}).catch(vt=>Object(h.b)({logLevel:h.a.ERROR,dataString:`REGISTRATION_FORM ERROR: ${JSON.stringify(vt)}, data: ${JSON.stringify(dt)}`})),Object(v.i)({accountDesc:"data.proDesc"}),Object(s.b)()}),F.apply(this,arguments)}},"/oeM":function(a,o,t){"use strict";t.d(o,"a",function(){return O}),t.d(o,"c",function(){return p}),t.d(o,"b",function(){return l}),t.d(o,"d",function(){return n});var e=t("yXPU"),r=t.n(e),i=t("m6dJ"),s=t("ddYX"),c=t("ph46"),f=t("+7hy"),b=t("FfLZ"),h=t("m6zX"),v=t("EAKQ");const O="client-billing";function p(I,C){return m.apply(this,arguments)}function m(){return m=r()(function*(I,C){return yield y(I,C,"initClientPaymentRequestsScreen")}),m.apply(this,arguments)}function l(I,C){return u.apply(this,arguments)}function u(){return u=r()(function*(I,C){return yield y(I,C,"initClientBillingDashboardScreen")}),u.apply(this,arguments)}function n(I,C){return x.apply(this,arguments)}function x(){return x=r()(function*(I,C){return yield y(I,C,"initCustomerPaymentRequestsScreen")}),x.apply(this,arguments)}function y(I,C,S){return j.apply(this,arguments)}function j(){return j=r()(function*(I,C,S){const T=Object.assign({},C,{getAuthToken:c.b,log:s.b,LogLevel:s.a,UnsavedChangesRouteGuard:f.a,mixpanel:b.a,openHelpPopup:v.a,clientManagementApi:{getViewAsClientUrl:h.o}});if(window[O])return window[O][S](T);try{return yield Object(i.c)(I),window[O][S](T)}catch(R){return Object(s.b)({logLevel:s.a.ERROR,dataString:`Failed loading client billing script from path ${I}, error: ${R}`}),!1}}),j.apply(this,arguments)}},"0tPZ":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-double-bounce {
  width: 27px;
  height: 27px;
  position: relative; }

.sk-double-bounce > div {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-bounce 2.0s infinite ease-in-out; }

.sk-double-bounce > div:last-child {
  animation-delay: -1.0s; }

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0); }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1); } }
`,""])},"0zN9":function(a,o,t){var e=t("TvPR");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},1:function(a,o){},"1FgX":function(a,o,t){var e=t("cDAH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"1JWa":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ConnectDomain-module-container-1U3b {
  display: flex;
  align-items: center;
  justify-content: space-between; }
  .ConnectDomain-module-container-1U3b .ConnectDomain-module-title-PH3b {
    font-family: Roboto;
    font-weight: 500;
    margin-block-end: 8px;
    padding-block-start: 0;
    padding-block-end: 0; }
  .ConnectDomain-module-container-1U3b .ConnectDomain-module-subtitle-1A3b {
    color: #828894;
    padding-block-end: 0; }
`,""]),o.locals={container:"ConnectDomain-module-container-1U3b",title:"ConnectDomain-module-title-PH3b",subtitle:"ConnectDomain-module-subtitle-1A3b"}},"1MhX":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ValidationStatus-module-validation-status-aY3b {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: Source Sans Pro; }
  .ValidationStatus-module-validation-status-aY3b.ValidationStatus-module-success-RI3b {
    color: #3ac280; }
  .ValidationStatus-module-validation-status-aY3b.ValidationStatus-module-pending-bI3b {
    color: #7a3600; }
  .ValidationStatus-module-validation-status-aY3b.ValidationStatus-module-error-163b {
    color: #e7463a; }
  .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b {
    width: 16px;
    height: 16px;
    margin-inline-end: 4px;
    border-radius: 50%; }
    .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-success-2F3b {
      background-color: #5bc89c; }
    .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-error-203b {
      background-color: #e43e3b; }
    .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-success-2F3b, .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-error-203b {
      color: #fff; }
      .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-success-2F3b .ValidationStatus-module-iconSVG--g3b, .ValidationStatus-module-validation-status-aY3b .ValidationStatus-module-icon-373b.ValidationStatus-module-icon-error-203b .ValidationStatus-module-iconSVG--g3b {
        width: 10px;
        height: 10px; }
`,""]),o.locals={"validation-status":"ValidationStatus-module-validation-status-aY3b",success:"ValidationStatus-module-success-RI3b",pending:"ValidationStatus-module-pending-bI3b",error:"ValidationStatus-module-error-163b",icon:"ValidationStatus-module-icon-373b","icon-success":"ValidationStatus-module-icon-success-2F3b","icon-error":"ValidationStatus-module-icon-error-203b",iconSVG:"ValidationStatus-module-iconSVG--g3b"}},"1ONn":function(a,o,t){"use strict";t.d(o,"a",function(){return s}),t.d(o,"b",function(){return h});var e=t("DaUp"),r=t.n(e),i=t("JzJd");const s=r()({CLIENTS:"clients",TEAM_SECTIONS:"teamSections",WHITE_LABEL:"white-label",ADD_USER_TEAM:"add-user-team",API:"api",SITE_EXPORT:"siteExport",ADD_USER_AGENCY:"add-user-agency",FREE_SITES:"free-sites",WIDGET_BUILDER:"widget-builder",CLIENTS_COMMENTS:"CLIENTS_COMMENTS",CUSTOM_CSS:"custom-css"});function c(){return Object(i.a)("pricing.plans.team")}const f=[{id:s.CLIENTS,text:Object(i.a)("pricing.lock.client.management"),plan:c(),prefix:Object(i.a)("pricing.lock.team.assets.prefix")},{id:s.TEAM_SECTIONS,text:Object(i.a)("pricing.lock.team.assets"),plan:c(),prefix:Object(i.a)("pricing.lock.team.assets.prefix")},{id:s.WHITE_LABEL,text:Object(i.a)("pricing.lock.white.label"),plan:c(),prefix:Object(i.a)("pricing.lock.white.label.prefix")},{id:s.ADD_USER_TEAM,text:Object(i.a)("pricing.lock.users.team"),plan:c(),prefix:Object(i.a)("pricing.lock.users.prefix")},{id:s.API,text:Object(i.a)("pricing.lock.feature.api"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.api.prefix")},{id:s.SITE_EXPORT,text:Object(i.a)("pricing.lock.feature.export"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.export.prefix")},{id:s.ADD_USER_AGENCY,text:Object(i.a)("pricing.lock.users.agency"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.users.prefix")},{id:s.FREE_SITES,text:Object(i.a)("pricing.lock.free.sites.agency"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.api.prefix")},{id:s.WIDGET_BUILDER,text:Object(i.a)("pricing.lock.widget.builder"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.widget.builder.prefix")},{id:s.CLIENTS_COMMENTS,text:Object(i.a)("pricing.lock.clientsComments"),plan:Object(i.a)("pricing.plans.agency"),prefix:Object(i.a)("pricing.lock.clientsComments.prefix")},{id:s.CUSTOM_CSS,text:"",plan:Object(i.a)("pricing.plans.custom"),prefix:""}];function b(){return f}function h({featureId:v,planNameOverride:O}){let p,m=b();if(m=m.filter(l=>l.id!==s.CLIENTS_COMMENTS),window.isStaffMember)p={upgradeTitle:Object(i.a)("pricing.lock.staff.contact.admin"),bulletsTitle:"",bullets:[]};else{const l=m.find(x=>x.id===v),u=m.reduce((x,y)=>(y.id!==s.API&&l.id!==y.id&&l.plan===y.plan&&x.push(y.text),x),[]),n=O||l.plan;p={upgradeTitle:`${Object(i.a)("pricing.lock.title",{planType:n})}<br/> ${l.prefix} <b>${l.text}</b>`,bulletsTitle:Object(i.a)("pricing.lock.bullets.title"),bullets:u}}return p}},"1PY+":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainSetupCardContent-module-description-3z3b mark {
  color: #828894;
  background: none; }

.DomainSetupCardContent-module-message-213b {
  margin-block-start: -56px;
  margin-block-end: 11px;
  display: flex; }
`,""]),o.locals={description:"DomainSetupCardContent-module-description-3z3b",message:"DomainSetupCardContent-module-message-213b"}},"1eVo":function(a,o,t){"use strict";a.exports={isObject:function(e){var r=typeof e;return r==="function"||r==="object"&&!!e},extend:function(e){if(!this.isObject(e))return e;for(var r,i,s=1,c=arguments.length;s<c;s++){r=arguments[s];for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}}},"1ilc":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Logo-logo-hm3b {
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: contain;
  width: 227px;
  height: 32px; }
`,""]),o.locals={logo:"Logo-logo-hm3b"}},"1qLv":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`::-webkit-scrollbar-thumb {
  -webkit-box-shadow: none !important;
  min-height: 30px; }

.country-list.country-list.country-list {
  width: 200px; }

.form-registration-dropdown__control.form-registration-dropdown__control {
  height: 35px;
  box-shadow: none;
  font-family: Source Sans Pro;
  font-size: 14px; }

.form-registration-dropdown__placeholder.form-registration-dropdown__placeholder {
  font-style: italic;
  color: #828894; }

.form-registration-dropdown__menu {
  font-family: Source Sans Pro;
  font-size: 14px; }

.RegistrationForm-registration-form-freestyle-popup-3x3b {
  border-radius: 6px; }

.RegistrationForm-registration-form-popup-content-NI3b {
  height: 100%; }

.RegistrationForm-container-3R3b {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  background-color: white;
  border-radius: 6px; }
  .RegistrationForm-container-3R3b .RegistrationForm-gradient-line-1v3b {
    height: 8px;
    width: 100%;
    background: linear-gradient(to right, #f56135, #fdc28c);
    border-top-right-radius: 2px;
    border-top-left-radius: 2px; }
  .RegistrationForm-container-3R3b .RegistrationForm-cta-button-1-3b {
    height: 33px;
    width: 117px;
    align-self: center;
    margin-block-end: 30px; }
  .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b {
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    padding-inline-start: 30px;
    padding-inline-end: 30px; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-bicycle-registration-2s3b {
      min-height: 112px;
      max-height: 112px;
      margin-block-start: 31px;
      margin-block-end: 10px; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-welcome-label-t93b {
      font-family: Roboto;
      font-size: 11px;
      font-weight: 500;
      text-align: center;
      color: #616c79;
      letter-spacing: 0.5px;
      padding: 0; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-welcome-title-oE3b {
      font-family: Roboto;
      font-size: 20px;
      font-weight: 500;
      color: #2f373a;
      text-align: center;
      margin-inline: 0;
      margin-block-start: 6px;
      margin-block-end: 20px; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-textbox-input-zf3b {
      width: 200px;
      height: 35px;
      text-align: initial;
      box-shadow: none;
      padding-inline-start: 9px;
      padding-inline-end: 9px; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-family: Source Sans Pro;
      font-size: 14px;
      color: #313131;
      padding-block-end: 0; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-phone-number-container-uG3b {
        position: relative; }
        .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-phone-number-container-uG3b .RegistrationForm-phone-number-2G3b {
          width: 200px; }
        .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-phone-number-container-uG3b .RegistrationForm-error-3r3b {
          top: calc(100% + 1px); }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-error-input-phone-number-3l3b {
        border: 1px solid #e7463a; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-error-button-phone-number-1T3b {
        border-inline-start: 1px solid #e7463a;
        border-block-start: 1px solid #e7463a;
        border-block-end: 1px solid #e7463a; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b {
        font-family: Source Sans Pro;
        font-size: 14px;
        color: #313131;
        margin-inline-end: 30px;
        padding: 0; }
        .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b .RegistrationForm-radio-button-2D3b.RegistrationForm-radio-button-2D3b {
          margin-inline-end: 10px; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b.RegistrationForm-option-1Q3b:last-child {
        margin-inline-end: 0; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-radio-buttons-173b {
        height: 20px; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b .RegistrationForm-error-border-1B3b .form-registration-dropdown__control {
        border: 1px solid #e7463a; }
    .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b {
      display: flex; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-field-3m3b {
        margin-block-start: 0; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-field-3m3b:first-child {
        margin-inline-end: 10px; }
      .RegistrationForm-container-3R3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-field-3m3b:last-child {
        margin-inline-start: 10px; }

.RegistrationForm-mobile-container-3G3b {
  overflow-y: auto;
  max-height: 80vh; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-gradient-line-1v3b {
    flex-shrink: 0; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-welcome-title-oE3b {
    margin-block-end: 12px; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b {
    flex-direction: column;
    flex-shrink: 0; }
    .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-textbox-container-2U3b {
      width: 100%;
      display: flex; }
    .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-textbox-input-zf3b {
      width: 100%;
      padding-block-start: 0;
      padding-block-end: 0; }
    .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-phone-number-container-uG3b {
      width: 100%; }
      .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-phone-number-container-uG3b .RegistrationForm-phone-number-2G3b {
        width: 100%;
        height: 35px; }
    .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-field-3m3b:first-child {
      margin-inline-end: 0;
      padding-block-start: 0; }
    .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-row-183b .RegistrationForm-field-3m3b:last-child {
      margin-inline-start: 0; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-field-3m3b {
    flex-shrink: 0; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-content-2R3b .RegistrationForm-radio-buttons-173b.RegistrationForm-radio-buttons-173b {
    height: auto;
    flex-wrap: wrap;
    justify-content: flex-start; }
  .RegistrationForm-mobile-container-3G3b .RegistrationForm-cta-button-1-3b {
    margin-block-start: 24px;
    margin-block-end: 24px; }
`,""]),o.locals={"registration-form-freestyle-popup":"RegistrationForm-registration-form-freestyle-popup-3x3b","registration-form-popup-content":"RegistrationForm-registration-form-popup-content-NI3b",container:"RegistrationForm-container-3R3b","gradient-line":"RegistrationForm-gradient-line-1v3b","cta-button":"RegistrationForm-cta-button-1-3b",content:"RegistrationForm-content-2R3b","bicycle-registration":"RegistrationForm-bicycle-registration-2s3b","welcome-label":"RegistrationForm-welcome-label-t93b","welcome-title":"RegistrationForm-welcome-title-oE3b","textbox-input":"RegistrationForm-textbox-input-zf3b",field:"RegistrationForm-field-3m3b","phone-number-container":"RegistrationForm-phone-number-container-uG3b","phone-number":"RegistrationForm-phone-number-2G3b",error:"RegistrationForm-error-3r3b","error-input-phone-number":"RegistrationForm-error-input-phone-number-3l3b","error-button-phone-number":"RegistrationForm-error-button-phone-number-1T3b",option:"RegistrationForm-option-1Q3b","radio-button":"RegistrationForm-radio-button-2D3b","radio-buttons":"RegistrationForm-radio-buttons-173b","error-border":"RegistrationForm-error-border-1B3b",row:"RegistrationForm-row-183b","mobile-container":"RegistrationForm-mobile-container-3G3b","textbox-container":"RegistrationForm-textbox-container-2U3b"}},"1tzA":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DownloadInvoiceLink-module-download-invoice-1q3b .DownloadInvoiceLink-module-link-343b {
  color: inherit;
  font-family: Roboto;
  font-size: 13px;
  text-decoration: none; }
  .DownloadInvoiceLink-module-download-invoice-1q3b .DownloadInvoiceLink-module-link-343b .DownloadInvoiceLink-module-icon-2_3b {
    display: inline-flex;
    margin-inline-start: 6px; }
`,""]),o.locals={"download-invoice":"DownloadInvoiceLink-module-download-invoice-1q3b",link:"DownloadInvoiceLink-module-link-343b",icon:"DownloadInvoiceLink-module-icon-2_3b"}},"1vdF":function(a,o,t){var e=t("RZ8x");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"1z8J":function(a,o,t){"use strict";var e=Object.assign||function(C){for(var S=1;S<arguments.length;S++){var T=arguments[S];for(var R in T)Object.prototype.hasOwnProperty.call(T,R)&&(C[R]=T[R])}return C},r=function(){function C(S,T){for(var R=0;R<T.length;R++){var M=T[R];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(S,M.key,M)}}return function(S,T,R){return T&&C(S.prototype,T),R&&C(S,R),S}}(),i=t("rf6O"),s=m(i),c=t("cDcd"),f=m(c),b=t("TSYQ"),h=m(b),v=t("MgzW"),O=m(v),p=t("dnV1");function m(C){return C&&C.__esModule?C:{default:C}}function l(C){if(Array.isArray(C)){for(var S=0,T=Array(C.length);S<C.length;S++)T[S]=C[S];return T}else return Array.from(C)}function u(C,S,T){return S in C?Object.defineProperty(C,S,{value:T,enumerable:!0,configurable:!0,writable:!0}):C[S]=T,C}function n(C,S){if(!(C instanceof S))throw new TypeError("Cannot call a class as a function")}function x(C,S){if(!C)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:C}function y(C,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);C.prototype=Object.create(S&&S.prototype,{constructor:{value:C,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(C,S):C.__proto__=S)}Object({NODE_ENV:"production",TEST_ENV:!1,BUILD_ENV:"PROD"}).REACT_SPINKIT_NO_STYLES||(t("SnpG"),t("9xji"),t("4sg8"),t("2HEg"),t("4ei+"),t("jj1x"),t("BxbG"),t("uTZF"),t("5LqS"),t("qSQR"),t("5kE2"),t("ucTV"),t("fKeY"),t("99Y8"),t("qZaT"));var j="Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'",I=function(C){y(S,C);function S(T){n(this,S),T.noFadeIn&&console.warn(j);var R=x(this,(S.__proto__||Object.getPrototypeOf(S)).call(this,T));return R.displayName="SpinKit",R}return r(S,[{key:"render",value:function(){var R,M=p.allSpinners[this.props.name]||p.allSpinners["three-bounce"],A=(0,h.default)((R={"sk-fade-in":this.props.fadeIn==="full"&&!this.props.noFadeIn,"sk-fade-in-half-second":this.props.fadeIn==="half"&&!this.props.noFadeIn,"sk-fade-in-quarter-second":this.props.fadeIn==="quarter"&&!this.props.noFadeIn,"sk-spinner":!this.props.overrideSpinnerClassName},u(R,this.props.overrideSpinnerClassName,!!this.props.overrideSpinnerClassName),u(R,this.props.className,!!this.props.className),u(R,M.className||this.props.name,!0),R)),W=(0,O.default)({},this.props);return delete W.name,delete W.fadeIn,delete W.noFadeIn,delete W.overrideSpinnerClassName,delete W.className,this.props.color&&(W.style=W.style?e({},W.style,{color:this.props.color}):{color:this.props.color}),f.default.createElement("div",e({},W,{className:A}),[].concat(l(Array(M.divCount))).map(function(P,L){return f.default.createElement("div",{key:L})}))}}]),S}(f.default.Component);I.propTypes={name:s.default.string.isRequired,noFadeIn:s.default.bool,fadeIn:s.default.oneOf(["full","half","quarter","none"]),overrideSpinnerClassName:s.default.string,className:s.default.string,color:s.default.string},I.defaultProps={name:"three-bounce",noFadeIn:!1,fadeIn:"full",overrideSpinnerClassName:""},a.exports=I},2:function(a,o){},"2DvP":function(a,o,t){var e=t("30AV");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"2G/j":function(a,o,t){"use strict";var e=t("J2iB"),r=t.n(e),i=t("sEfC"),s=t.n(i),c=t("k4gB"),f=t("cDcd"),b=t("PkVi"),h=t("D0BC"),v=t.n(h),O=t("VeD8"),p=t("pQ8y"),m=t("FfLZ"),l=t("nKUr");const{func:u}=c.b;function n(at){const z=at.prototype.getChildContext||(()=>({})),F=at.prototype.UNSAFE_componentWillMount||(()=>({})),rt=at.childContextTypes||{},ct=at.contextTypes||{};at.prototype.getChildContext=function(){const dt=this;return Object.assign({},{closeContextMenu(){dt.closeContextMenu()}},z.call(this))},at.contextTypes=Object.assign({getContextMenu:u},ct),at.prototype.UNSAFE_componentWillMount=function(...dt){F.apply(this,dt),this.closeContextMenu=this.closeContextMenu.bind(this),this.toggleContextMenu=this.toggleContextMenu.bind(this),this.contextMenuId=v()(1e7),this.setContextMenuState(!1)},at.prototype.contextMenuTrigger=function(){return{"data-context-menu":this.contextMenuId,domAttrs:{"data-context-menu":this.contextMenuId},onClick:this.toggleContextMenu}},at.prototype.hasContextMenu=function(){return this.props.getContextMenu||this.context.getContextMenu},at.prototype.closeContextMenu=function(){this.hideContextMenu()},at.prototype.renderContextMenu=function(dt,vt){let Ot=null;const Mt=this.props.contextMenuProps||{};if(this.state.showContextMenu){const Rt=this.props.getContextMenu||this.context.getContextMenu||this.generateContextMenu,Yt=vt||Rt(dt,Object.assign({top:this.getContextMenuTop(),scroll:this.getContextMenuScroll()},Mt));Ot=Object(l.jsx)(O.a,{className:"context-menu",children:Object(l.jsx)(p.a,{appear:!0,timeout:0,children:Yt})})}return Object(l.jsx)("div",{id:"contextMenuWrapper",ref:"contextMenuWrapper",children:Ot})},at.prototype.getContextMenuTop=function(){return $(this.refs.contextMenuWrapper).offset().top},at.prototype.getContextMenuScroll=function(){const dt=$(this.refs.contextMenuWrapper).parents(".scrollableInner");return dt.length?dt.scrollTop():0},at.prototype.toggleContextMenu=function(dt){return this.props.preventDefaultOnClick&&dt.stopPropagation(),this.state.showContextMenu?(this.hideContextMenu(),!1):(m.a("page-settings-open",{}),this.showContextMenu(),!0)},at.prototype.showContextMenu=function({noAutoHide:dt}={}){const vt=`removeMenu.${this.contextMenuId}`;if(!dt){const Ot=this;x(),$(document).off(`click.${vt} mousedown.${vt}`).on(`click.${vt} mousedown.${vt}`,Rt=>{const Yt=Rt.target,re=$(Yt).is("#contextMenuWrapper, #contextMenuWrapper *, .contextMenuExtendedWrapper *"),Xt=$(Yt).closest(`[data-context-menu="${this.contextMenuId}"]`).length;!re&&!Xt&&Ot.hideContextMenu()});const Mt=$(this.refs.contextMenuWrapper).parents(".scrollableInner");Mt.off(`scroll.${vt}`).on(`scroll.${vt}`,Mt,()=>{Ot.hideContextMenu()})}this.setContextMenuState(!0)},at.prototype.hideContextMenu=function({noAutoHide:dt}={}){const vt=`removeMenu.${this.contextMenuId}`;dt||(y(),$(document).off(`click.${vt} mousedown.${vt}`),$(this.refs.contextMenuWrapper).parents(".scrollableInner").off(`scroll.${vt}`)),this.setContextMenuState(!1)},at.childContextTypes=Object.assign({closeContextMenu:c.b.func},rt),at.prototype.setContextMenuState=function(dt){this.setState({showContextMenu:dt}),this.onContextMenuChanged&&this.onContextMenuChanged({contextMenuOpen:dt})}}function x(){document.querySelectorAll("iframe").forEach(at=>{at.style.pointerEvents="none"})}function y(){document.querySelectorAll("iframe").forEach(at=>{at.style.pointerEvents=""})}var j=t("ALhs"),I=t.n(j),C=t("ZiIQ"),S=t("SW6J"),T=t.n(S),R=t("av65"),M,A,W,P;const{string:L,func:k,bool:G,number:Y}=c.b;let J=(M=Object(c.f)({styles:T.a}),Object(b.a)(A=M(A=(P=W=class extends c.a{constructor(z){super(z);this.onChange=F=>{this.setState({value:F}),this.onSearch(F,!1),this.onChangeHandler(F)},this.onChangeHandler=s()(F=>{this.onSearch(F,!0)},this.props.debounceDelay),this.onFocus=()=>{this.setState({focus:!0})},this.onBlur=()=>{this.setState({focus:!1}),this.props.onBlur&&this.props.onBlur()},this.onSearch=(F,rt)=>{this.setState({value:F}),this.props.onSearch&&this.props.onSearch(F,rt)},this.focus=()=>{this.setState({focus:!0}),this.textBoxRef.current.focus()},this.clear=()=>{this.setState({value:""}),this.onSearch("",!0),this.focus()},this.checkFocus=F=>{this.props.focusOnSearchHotkey&&(F.keyCode===114||(F.ctrlKey||F.metaKey)&&F.keyCode===70)&&(this.focus(),F.preventDefault())},this.state={value:z.defaultValue||"",focus:this.props.autofocus},this.textBoxRef=Object(f.createRef)()}render(){const z=Object(c.h)(this.props.className,T.a.main,{[T.a.square]:this.props.square,[T.a.mobile]:R.a.isMobileDevice,[T.a.collapsed]:this.props.collapsed&&!this.state.focus});return Object(l.jsxs)("div",{className:z,onMouseEnter:this.props.onMouseEnter,children:[Object(l.jsx)(C.a,{className:Object(c.h)(T.a.searchIcon,this.props.iconClassName),name:"search",iconType:C.a.Type.FONT_AWESOME,size:15,onClick:this.focus}),Object(l.jsx)(I.a,Object.assign({className:Object(c.h)(T.a.textbox,this.props.textboxClassName),inputClassName:this.props.textboxInputClassName,onInput:this.onChange,layout:"full",mobileAutofocus:this.props.mobileAutofocus,cancelable:!0,autofocus:this.props.autofocus,whiteBackground:this.props.white},this.passProps(),{value:this.state.value,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.props.onClick,maxLength:0,ref:this.textBoxRef,placeholder:this.props.placeholder,inputDomAttributes:{autoComplete:"disabled"}})),this.state.value&&!this.state.focus?Object(l.jsx)(C.a,{className:T.a.clearIcon,name:"close_popup",iconType:C.a.Type.SVG,size:14,onClick:this.clear,color:"#617379",addSvgIdPrefix:!1}):null]})}UNSAFE_componentWillReceiveProps(z){r()(z.overrideValue)||this.setState({value:z.overrideValue})}componentDidMount(){document.body.addEventListener("keydown",this.checkFocus)}componentWillUnmount(){document.body.removeEventListener("keydown",this.checkFocus)}},W.displayName="SearchTextBox",W.propTypes={className:L,textboxClassName:L,textboxInputClassName:L,iconClassName:L,onSearch:k.isRequired,defaultValue:L,square:G,onClick:k,onBlur:k,onMouseEnter:k,white:G,overrideValue:L,collapsed:G,autofocus:G,mobileAutofocus:G,placeholder:L,debounceDelay:Y,focusOnSearchHotkey:G},W.defaultProps={autofocus:!0,debounceDelay:300,focusOnSearchHotkey:!1},P))||A)||A);var X=o.a=J},"2HEg":function(a,o,t){var e=t("AY/r");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"2Naf":function(a,o,t){"use strict";(function(e){var r=t("raCH").EventEmitter,i=t("P7XM"),s=t("woL0"),c=t("Yh+D"),f=e.XMLHttpRequest,b=function(){};function h(p,m,l,u){b(p,m);var n=this;r.call(this),setTimeout(function(){n._start(p,m,l,u)},0)}i(h,r),h.prototype._start=function(p,m,l,u){var n=this;try{this.xhr=new f}catch(y){}if(!this.xhr){b("no xhr"),this.emit("finish",0,"no xhr support"),this._cleanup();return}m=c.addQuery(m,"t="+ +new Date),this.unloadRef=s.unloadAdd(function(){b("unload cleanup"),n._cleanup(!0)});try{this.xhr.open(p,m,!0),this.timeout&&"timeout"in this.xhr&&(this.xhr.timeout=this.timeout,this.xhr.ontimeout=function(){b("xhr timeout"),n.emit("finish",0,""),n._cleanup(!1)})}catch(y){b("exception",y),this.emit("finish",0,""),this._cleanup(!1);return}if((!u||!u.noCredentials)&&h.supportsCORS&&(b("withCredentials"),this.xhr.withCredentials=!0),u&&u.headers)for(var x in u.headers)this.xhr.setRequestHeader(x,u.headers[x]);this.xhr.onreadystatechange=function(){if(n.xhr){var y=n.xhr,j,I;switch(b("readyState",y.readyState),y.readyState){case 3:try{I=y.status,j=y.responseText}catch(C){}b("status",I),I===1223&&(I=204),I===200&&j&&j.length>0&&(b("chunk"),n.emit("chunk",I,j));break;case 4:I=y.status,b("status",I),I===1223&&(I=204),(I===12005||I===12029)&&(I=0),b("finish",I,y.responseText),n.emit("finish",I,y.responseText),n._cleanup(!1);break}}};try{n.xhr.send(l)}catch(y){n.emit("finish",0,""),n._cleanup(!1)}},h.prototype._cleanup=function(p){if(b("cleanup"),!!this.xhr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xhr.onreadystatechange=function(){},this.xhr.ontimeout&&(this.xhr.ontimeout=null),p)try{this.xhr.abort()}catch(m){}this.unloadRef=this.xhr=null}},h.prototype.close=function(){b("close"),this._cleanup(!0)},h.enabled=!!f;var v=["Active"].concat("Object").join("X");!h.enabled&&v in e&&(b("overriding xmlhttprequest"),f=function(){try{return new e[v]("Microsoft.XMLHTTP")}catch(p){return null}},h.enabled=!!new f);var O=!1;try{O="withCredentials"in new f}catch(p){}h.supportsCORS=O,a.exports=h}).call(this,t("yLpj"))},"2XFg":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.RadioButtons-module-container-2_3b {
  /* Hide the browser's default radio button */ }
  .RadioButtons-module-container-2_3b input {
    position: absolute;
    opacity: 0; }
  .RadioButtons-module-container-2_3b label {
    color: #313131; }
  .RadioButtons-module-container-2_3b .RadioButtons-module-checkmark-2t3b {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    margin-inline-end: 8px;
    width: 18px;
    height: 18px;
    border: 1px solid #ced6d9;
    border-radius: 50%;
    background: var(--text-on-button);
    box-sizing: border-box;
    /* Create the indicator (the dot/circle - hidden when not checked) */ }
    .RadioButtons-module-container-2_3b .RadioButtons-module-checkmark-2t3b:after {
      content: '';
      display: block;
      opacity: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--button-color); }
    .RadioButtons-module-container-2_3b .RadioButtons-module-checkmark-2t3b.RadioButtons-module-checked-1Q3b::after {
      opacity: 1; }

.RadioButtons-module-disabled-1S3b {
  opacity: 0.5; }
`,""]),o.locals={container:"RadioButtons-module-container-2_3b",checkmark:"RadioButtons-module-checkmark-2t3b",checked:"RadioButtons-module-checked-1Q3b",disabled:"RadioButtons-module-disabled-1S3b"}},"2ir5":function(a,o,t){var e=t("JcDD");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"2jxq":function(a,o,t){var e=t("VFrO");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"2xqg":function(a,o,t){var e=t("UNi/"),r=t("EwQA"),i=t("Sxd8"),s=9007199254740991,c=4294967295,f=Math.min;function b(h,v){if(h=i(h),h<1||h>s)return[];var O=c,p=f(h,c);v=r(v),h-=c;for(var m=e(p,v);++O<h;)v(O);return m}a.exports=b},"30AV":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,"@import url(//fonts.googleapis.com/css?family=Source+Sans+Pro:500,400,200,200italic,300,300italic,400italic,600,600italic,700,700italic|Lobster|Roboto:300,400,400italic,500,700|Roboto+Condensed:300);",""]),o.push([a.i,`.Root-container-2P3b {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  font-size: small; }

.Root-dashboard-notifications-container-jO3b.Root-dashboard-notifications-container-jO3b {
  z-index: 104;
  top: 77px;
  right: 20px; }

.Root-dashboard-notifications-3g3b.Root-dashboard-notifications-3g3b {
  padding-block-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  padding-inline-start: 0; }

.automation-no-animation {
  transition-delay: 0s !important;
  transition-duration: 0s !important; }
  .automation-no-animation * {
    transition-delay: 0s !important;
    transition-duration: 0s !important; }
`,""]),o.locals={container:"Root-container-2P3b","dashboard-notifications-container":"Root-dashboard-notifications-container-jO3b","dashboard-notifications":"Root-dashboard-notifications-3g3b"}},"31X/":function(a,o,t){"use strict";o.__esModule=!0;var e=t("sTlx");o.default=function(r){r.registerDecorator("inline",function(i,s,c,f){var b=i;return s.partials||(s.partials={},b=function(h,v){var O=c.partials;c.partials=e.extend({},O,s.partials);var p=i(h,v);return c.partials=O,p}),s.partials[f.args[0]]=f.fn,b})},a.exports=o.default},"33qY":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SitePage-container-1U3b {
  background-color: #f7f7f7;
  overflow: auto;
  z-index: 1;
  width: 100%;
  height: 100%; }
  .SitePage-container-1U3b .SitePage-site-page-container-3i3b {
    font-family: 'Source Sans Pro';
    overflow: hidden;
    min-height: calc(100vh - 120px); }
    .SitePage-container-1U3b .SitePage-site-page-container-3i3b *,
    .SitePage-container-1U3b .SitePage-site-page-container-3i3b *::before,
    .SitePage-container-1U3b .SitePage-site-page-container-3i3b *::after {
      box-sizing: border-box;
      text-decoration-skip-ink: none; }

.SitePage-show-last-child-3Y3b > * {
  display: none; }
  .SitePage-show-last-child-3Y3b > *:last-child {
    display: block; }
`,""]),o.locals={container:"SitePage-container-1U3b","site-page-container":"SitePage-site-page-container-3i3b","show-last-child":"SitePage-show-last-child-3Y3b"}},"3Ent":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SystemNotifications-main-2w3b {
  position: fixed;
  top: 60px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 40px; }
  [dir='rtl'] .SystemNotifications-main-2w3b {
    right: auto;
    left: 40px; }
`,""]),o.locals={main:"SystemNotifications-main-2w3b"}},"3L3I":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=t("cDcd"),c=e(t("TSYQ")),f=t("rf6O"),b=e(t("Cc2C")),h=t("nKUr");function v(u,n){var x=Object.keys(u);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(u);n&&(y=y.filter(function(j){return Object.getOwnPropertyDescriptor(u,j).enumerable})),x.push.apply(x,y)}return x}function O(u){for(var n=1;n<arguments.length;n++){var x=arguments[n]!=null?arguments[n]:{};n%2?v(Object(x),!0).forEach(function(y){(0,r.default)(u,y,x[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(x)):v(Object(x)).forEach(function(y){Object.defineProperty(u,y,Object.getOwnPropertyDescriptor(x,y))})}return u}const p=()=>{};function m({className:u,optionsGroupClassName:n,label:x,onSelect:y=p,selected:j,hideLabels:I,multi:C=!1,omitLabel:S=!1,children:T}){const R=C&&!Array.isArray(j)?[j]:j;return(0,h.jsxs)("div",{className:(0,c.default)(u,b.default.main),children:[!S&&x?(0,h.jsx)("span",{className:b.default["main-label"],children:x}):null,(0,h.jsx)("span",{className:(0,c.default)(b.default["options-group"],{[b.default["no-label"]]:!x},n),children:s.Children.map(T,M=>{const A=M.props,W=A.value,P=(0,i.default)(A,["value"]),L=C?R.includes(W):j===W;return(0,s.cloneElement)(M,O(O({label:x,selected:L,checked:L,onChange:()=>y(W),hideLabel:I,isCheckbox:C},P),{},{className:(0,c.default)(b.default.option,P.className)}))})})]})}m.propTypes={label:f.string,selected:(0,f.oneOfType)([f.string,f.object,(0,f.arrayOf)(f.string)]),onSelect:f.func,hideLabels:f.bool,multi:f.bool,omitLabel:f.bool,optionsGroupClassName:f.string};var l=m;o.default=l},"3fuR":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.InitialCard-status-3O3b.InitialCard-status-3O3b {
  margin-inline-start: 8px; }

.InitialCard-or-text-1G3b {
  color: #828894;
  padding-block-end: 8px; }

.InitialCard-button-iI3b.InitialCard-button-iI3b {
  display: inline-flex;
  height: 25px;
  padding-inline-end: 25px;
  padding-inline-start: 25px;
  font-weight: 500; }

.InitialCard-label-1g3b {
  padding-block-start: 8px;
  padding-block-end: 8px; }

.InitialCard-content1-wrapper-6b3b {
  display: flex;
  justify-content: flex-start;
  align-items: center; }

.InitialCard-feature-lock-3s3b {
  width: 250px; }
`,""]),o.locals={status:"InitialCard-status-3O3b","or-text":"InitialCard-or-text-1G3b",button:"InitialCard-button-iI3b",label:"InitialCard-label-1g3b","content1-wrapper":"InitialCard-content1-wrapper-6b3b","feature-lock":"InitialCard-feature-lock-3s3b"}},"3jCY":function(a,o,t){"use strict";t.d(o,"a",function(){return it}),t.d(o,"b",function(){return gt});var e=t("cDcd"),r=t.n(e),i=t("rf6O");/*! @license Rematrix v0.2.2

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function s(H){if(H.constructor!==Array)throw new TypeError("Expected array.");if(H.length===16)return H;if(H.length===6){var N=c();return N[0]=H[0],N[1]=H[1],N[4]=H[2],N[5]=H[3],N[12]=H[4],N[13]=H[5],N}throw new RangeError("Expected array with either 6 or 16 values.")}function c(){for(var H=[],N=0;N<16;N++)N%5==0?H.push(1):H.push(0);return H}function f(H){var N=s(H),U=N[0]*N[5]-N[4]*N[1],q=N[0]*N[6]-N[4]*N[2],w=N[0]*N[7]-N[4]*N[3],Z=N[1]*N[6]-N[5]*N[2],mt=N[1]*N[7]-N[5]*N[3],Et=N[2]*N[7]-N[6]*N[3],It=N[10]*N[15]-N[14]*N[11],lt=N[9]*N[15]-N[13]*N[11],et=N[9]*N[14]-N[13]*N[10],kt=N[8]*N[15]-N[12]*N[11],Bt=N[8]*N[14]-N[12]*N[10],At=N[8]*N[13]-N[12]*N[9],jt=1/(U*It-q*lt+w*et+Z*kt-mt*Bt+Et*At);if(isNaN(jt)||jt===Infinity)throw new Error("Inverse determinant attempted to divide by zero.");return[(N[5]*It-N[6]*lt+N[7]*et)*jt,(-N[1]*It+N[2]*lt-N[3]*et)*jt,(N[13]*Et-N[14]*mt+N[15]*Z)*jt,(-N[9]*Et+N[10]*mt-N[11]*Z)*jt,(-N[4]*It+N[6]*kt-N[7]*Bt)*jt,(N[0]*It-N[2]*kt+N[3]*Bt)*jt,(-N[12]*Et+N[14]*w-N[15]*q)*jt,(N[8]*Et-N[10]*w+N[11]*q)*jt,(N[4]*lt-N[5]*kt+N[7]*At)*jt,(-N[0]*lt+N[1]*kt-N[3]*At)*jt,(N[12]*mt-N[13]*w+N[15]*U)*jt,(-N[8]*mt+N[9]*w-N[11]*U)*jt,(-N[4]*et+N[5]*Bt-N[6]*At)*jt,(N[0]*et-N[1]*Bt+N[2]*At)*jt,(-N[12]*Z+N[13]*q-N[14]*U)*jt,(N[8]*Z-N[9]*q+N[10]*U)*jt]}function b(H,N){for(var U=s(H),q=s(N),w=[],Z=0;Z<4;Z++)for(var mt=[U[Z],U[Z+4],U[Z+8],U[Z+12]],Et=0;Et<4;Et++){var It=Et*4,lt=[q[It],q[It+1],q[It+2],q[It+3]],et=mt[0]*lt[0]+mt[1]*lt[1]+mt[2]*lt[2]+mt[3]*lt[3];w[Z+It]=et}return w}function h(H){if(typeof H=="string"){var N=H.match(/matrix(3d)?\(([^)]+)\)/);if(N){var U=N[2].split(", ").map(parseFloat);return s(U)}}return c()}function v(H){return m(H)}function O(H){var N=Math.PI/180*H,U=c();return U[5]=U[10]=Math.cos(N),U[6]=U[9]=Math.sin(N),U[9]*=-1,U}function p(H){var N=Math.PI/180*H,U=c();return U[0]=U[10]=Math.cos(N),U[2]=U[8]=Math.sin(N),U[2]*=-1,U}function m(H){var N=Math.PI/180*H,U=c();return U[0]=U[5]=Math.cos(N),U[1]=U[4]=Math.sin(N),U[4]*=-1,U}function l(H,N){var U=c();return U[0]=H,U[5]=typeof N=="number"?N:H,U}function u(H){var N=c();return N[0]=H,N}function n(H){var N=c();return N[5]=H,N}function x(H){var N=c();return N[10]=H,N}function y(H,N){var U=Math.PI/180*H,q=c();if(q[4]=Math.tan(U),N){var w=Math.PI/180*N;q[1]=Math.tan(w)}return q}function j(H){var N=Math.PI/180*H,U=c();return U[4]=Math.tan(N),U}function I(H){var N=Math.PI/180*H,U=c();return U[1]=Math.tan(N),U}function C(H,N){var U=c();return U[12]=H,N&&(U[13]=N),U}function S(H){var N=c();return N[12]=H,N}function T(H){var N=c();return N[13]=H,N}function R(H){var N=c();return N[14]=H,N}var M=function(H){return typeof H=="number"},A=function(H){return typeof H=="function"},W=function(H){return Object.prototype.toString.call(H)==="[object Object]"},P=function(H){return Array.prototype.slice.apply(H)},L=function(H){var N=H.reduce(function(U,q){return U[q]=(U[q]||0)+1,U},{});return Object.keys(N).filter(function(U){return N[U]>1})};function k(H){return[].slice.call(arguments,1).forEach(function(N){if(N)for(var U in N)Object.prototype.hasOwnProperty.call(N,U)&&(H[U]=N[U])}),H}var G,Y=function(H,N,U){return H+(N-H)*U},J={__proto__:null,isNumber:M,isFunction:A,isObject:W,toArray:P,getDuplicateValsAsStrings:L,assign:k,tweenProp:Y},X={__proto__:null,DATA_FLIP_ID:"data-flip-id",DATA_INVERSE_FLIP_ID:"data-inverse-flip-id",DATA_FLIP_COMPONENT_ID:"data-flip-component-id",DATA_FLIP_CONFIG:"data-flip-config",DATA_PORTAL_KEY:"data-portal-key",DATA_EXIT_CONTAINER:"data-exit-container"},at={noWobble:{stiffness:200,damping:26},gentle:{stiffness:120,damping:14},veryGentle:{stiffness:130,damping:17},wobbly:{stiffness:180,damping:12},stiff:{stiffness:260,damping:26}},z=function(H){return W(H)?H:Object.keys(at).indexOf(H)>-1?at[H]:{}};typeof window!="undefined"&&(G=window.requestAnimationFrame);var F=G=G||function(H){window.setTimeout(H,1e3/60)},rt=Date.now(),ct=typeof performance=="object"&&typeof performance.now=="function"?function(){return performance.now()}:function(){return Date.now()-rt};function dt(H,N){var U=H.indexOf(N);U!==-1&&H.splice(U,1)}var vt=function(){function H(){}return H.prototype.run=function(){var N=this;F(function(){N.springSystem.loop(ct())})},H}(),Ot=function(){this.position=0,this.velocity=0},Mt=0,Rt=function(){function H(U){this._id="s"+Mt++,this._springSystem=U,this.listeners=[],this._startValue=0,this._currentState=new Ot,this._displacementFromRestThreshold=.001,this._endValue=0,this._overshootClampingEnabled=!1,this._previousState=new Ot,this._restSpeedThreshold=.001,this._tempState=new Ot,this._timeAccumulator=0,this._wasAtRest=!0,this._cachedSpringConfig={}}var N=H.prototype;return N.getId=function(){return this._id},N.destroy=function(){this.listeners=[],this._springSystem.deregisterSpring(this)},N.setSpringConfig=function(U){return this._springConfig=U,this},N.getCurrentValue=function(){return this._currentState.position},N.getDisplacementDistanceForState=function(U){return Math.abs(this._endValue-U.position)},N.setEndValue=function(U){if(U===this._endValue)return this;if(this.prevEndValue=U,this._endValue===U&&this.isAtRest())return this;this._startValue=this.getCurrentValue(),this._endValue=U,this._springSystem.activateSpring(this.getId());for(var q=0,w=this.listeners.length;q<w;q++){var Z=this.listeners[q].onSpringEndStateChange;Z&&Z(this)}return this},N.setVelocity=function(U){return U===this._currentState.velocity||(this._currentState.velocity=U,this._springSystem.activateSpring(this.getId())),this},N.setCurrentValue=function(U){this._startValue=U,this._currentState.position=U;for(var q=0,w=this.listeners.length;q<w;q++){var Z=this.listeners[q];Z.onSpringUpdate&&Z.onSpringUpdate(this)}return this},N.setAtRest=function(){return this._endValue=this._currentState.position,this._tempState.position=this._currentState.position,this._currentState.velocity=0,this},N.setOvershootClampingEnabled=function(U){return this._overshootClampingEnabled=U,this},N.isOvershooting=function(){var U=this._startValue,q=this._endValue;return this._springConfig.tension>0&&(U<q&&this.getCurrentValue()>q||U>q&&this.getCurrentValue()<q)},N.advance=function(U,q){var w=this.isAtRest();if(!w||!this._wasAtRest){var Z=q;q>.064&&(Z=.064),this._timeAccumulator+=Z;for(var mt,Et,It,lt,et,kt,Bt=this._springConfig.tension,At=this._springConfig.friction,jt=this._currentState.position,wt=this._currentState.velocity,Zt=this._tempState.position,Oe=this._tempState.velocity;this._timeAccumulator>=.001;)this._timeAccumulator-=.001,this._timeAccumulator<.001&&(this._previousState.position=jt,this._previousState.velocity=wt),Et=Bt*(this._endValue-Zt)-At*wt,lt=Bt*(this._endValue-(Zt=jt+.001*(mt=wt)*.5))-At*(Oe=wt+.001*Et*.5),kt=Bt*(this._endValue-(Zt=jt+.001*(It=Oe)*.5))-At*(Oe=wt+.001*lt*.5),Zt=jt+.001*(et=Oe),jt+=1/6*(mt+2*(It+et)+(Oe=wt+.001*kt))*.001,wt+=1/6*(Et+2*(lt+kt)+(Bt*(this._endValue-Zt)-At*Oe))*.001;this._tempState.position=Zt,this._tempState.velocity=Oe,this._currentState.position=jt,this._currentState.velocity=wt,this._timeAccumulator>0&&this._interpolate(this._timeAccumulator/.001),(this.isAtRest()||this._overshootClampingEnabled&&this.isOvershooting())&&(this._springConfig.tension>0?(this._startValue=this._endValue,this._currentState.position=this._endValue):(this._endValue=this._currentState.position,this._startValue=this._endValue),this.setVelocity(0),w=!0);var Se=!1;this._wasAtRest&&(this._wasAtRest=!1,Se=!0);var He=!1;w&&(this._wasAtRest=!0,He=!0),this.notifyPositionUpdated(Se,He)}},N.notifyPositionUpdated=function(U,q){var w=this;this.listeners.filter(Boolean).forEach(function(Z){U&&Z.onSpringActivate&&!w._onActivateCalled&&(Z.onSpringActivate(w),w._onActivateCalled=!0),Z.onSpringUpdate&&Z.onSpringUpdate(w),q&&Z.onSpringAtRest&&Z.onSpringAtRest(w)})},N.systemShouldAdvance=function(){return!this.isAtRest()||!this.wasAtRest()},N.wasAtRest=function(){return this._wasAtRest},N.isAtRest=function(){return Math.abs(this._currentState.velocity)<this._restSpeedThreshold&&(this.getDisplacementDistanceForState(this._currentState)<=this._displacementFromRestThreshold||this._springConfig.tension===0)},N._interpolate=function(U){this._currentState.position=this._currentState.position*U+this._previousState.position*(1-U),this._currentState.velocity=this._currentState.velocity*U+this._previousState.velocity*(1-U)},N.addListener=function(U){return this.listeners.push(U),this},N.addOneTimeListener=function(U){var q=this;return Object.keys(U).forEach(function(w){var Z;U[w]=(Z=U[w],function(){Z.apply(void 0,[].slice.call(arguments)),q.removeListener(U)})}),this.listeners.push(U),this},N.removeListener=function(U){return dt(this.listeners,U),this},H}(),Yt=function(){function H(U){this.looper=U||new vt,this.looper.springSystem=this,this.listeners=[],this._activeSprings=[],this._idleSpringIndices=[],this._isIdle=!0,this._lastTimeMillis=-1,this._springRegistry={}}var N=H.prototype;return N.createSpring=function(U,q){return this.createSpringWithConfig({tension:U,friction:q})},N.createSpringWithConfig=function(U){var q=new Rt(this);return this.registerSpring(q),q.setSpringConfig(U),q},N.getIsIdle=function(){return this._isIdle},N.registerSpring=function(U){this._springRegistry[U.getId()]=U},N.deregisterSpring=function(U){dt(this._activeSprings,U),delete this._springRegistry[U.getId()]},N.advance=function(U,q){for(var w=this;this._idleSpringIndices.length>0;)this._idleSpringIndices.pop();for(this._activeSprings.filter(Boolean).forEach(function(mt){mt.systemShouldAdvance()?mt.advance(U/1e3,q/1e3):w._idleSpringIndices.push(w._activeSprings.indexOf(mt))});this._idleSpringIndices.length>0;){var Z=this._idleSpringIndices.pop();Z>=0&&this._activeSprings.splice(Z,1)}},N.loop=function(U){var q;this._lastTimeMillis===-1&&(this._lastTimeMillis=U-1);var w=U-this._lastTimeMillis;this._lastTimeMillis=U;var Z=0,mt=this.listeners.length;for(Z=0;Z<mt;Z++)(q=this.listeners[Z]).onBeforeIntegrate&&q.onBeforeIntegrate(this);for(this.advance(U,w),this._activeSprings.length===0&&(this._isIdle=!0,this._lastTimeMillis=-1),Z=0;Z<mt;Z++)(q=this.listeners[Z]).onAfterIntegrate&&q.onAfterIntegrate(this);this._isIdle||this.looper.run()},N.activateSpring=function(U){var q=this._springRegistry[U];this._activeSprings.indexOf(q)===-1&&this._activeSprings.push(q),this.getIsIdle()&&(this._isIdle=!1,this.looper.run())},H}(),re=new Yt,Xt=function(H){var N=H.springConfig,U=N.overshootClamping,q=H.getOnUpdateFunc,w=H.onAnimationEnd,Z=H.onSpringActivate,mt=re.createSpring(N.stiffness,N.damping);mt.setOvershootClampingEnabled(!!U);var Et={onSpringActivate:Z,onSpringAtRest:function(){mt.destroy(),w()},onSpringUpdate:q({spring:mt,onAnimationEnd:w})};return mt.addListener(Et),mt},pe=function(H){var N=Xt(H);return N.setEndValue(1),N},de=function(H,N){if(N===void 0&&(N={}),H&&H.length){N.reverse&&H.reverse();var U,q=typeof(U=N.speed)!="number"?1.1:1+Math.min(Math.max(5*U,0),5),w=1/Math.max(Math.min(H.length,100),10),Z=H.map(function(mt,Et){var It=mt.getOnUpdateFunc;return mt.getOnUpdateFunc=function(lt){var et=It(lt);return function(kt){var Bt=kt.getCurrentValue();(Bt=Bt<.01?0:Bt>.99?1:Bt)>=w&&Z[Et+1]&&Z[Et+1](Math.max(Math.min(Bt*q,1),0)),et(kt)}},mt}).map(function(mt){var Et=Xt(mt);if(Et)return Et.setEndValue.bind(Et)}).filter(Boolean);Z[0]&&Z[0](1)}},se=function(H){return[0,1,4,5,12,13].map(function(N){return H[N]})},Qt=function(H){return H.top<window.innerHeight&&H.bottom>0&&H.left<window.innerWidth&&H.right>0};function St(H){return JSON.parse(H.dataset.flipConfig||"{}")}var Ut=function(H,N){var U;return k(H,((U={})[N[0]]=N[1],U))},zt=function(H,N){return P(N?document.querySelectorAll('[data-portal-key="'+N+'"]'):H.querySelectorAll("[data-flip-id]"))},Jt=function(H){return H.map(function(N){return[N,N.getBoundingClientRect()]})},ge=function(H){var N,U=H.cachedOrderedFlipIds,q=U===void 0?[]:U,w=H.inProgressAnimations,Z=w===void 0?{}:w,mt=H.flippedElementPositionsBeforeUpdate,Et=mt===void 0?{}:mt,It=H.flipCallbacks,lt=It===void 0?{}:It,et=H.containerEl,kt=H.applyTransformOrigin,Bt=H.spring,At=H.debug,jt=H.portalKey,wt=H.staggerConfig,Zt=wt===void 0?{}:wt,Oe=H.decisionData,Se=Oe===void 0?{}:Oe,He=H.handleEnterUpdateDelete,to=H.onComplete,wn=H.onStart,$e=Jt(zt((N={element:et,portalKey:jt}).element,N.portalKey)).map(function(Wt){var Ee=Wt[0],ke=Wt[1],qt=window.getComputedStyle(Ee);return[Ee.dataset.flipId,{element:Ee,rect:ke,opacity:parseFloat(qt.opacity),transform:qt.transform}]}).reduce(Ut,{}),Dn=function(Wt){var Ee=Wt.containerEl,ke=Wt.portalKey;return ke?function(qt){return function(Fe){return P(document.querySelectorAll('[data-portal-key="'+qt+'"]'+Fe))}}(ke):Ee?function(qt){var Fe=Math.random().toFixed(5);return qt.dataset.flipperId=Fe,function(_t){return P(qt.querySelectorAll('[data-flipper-id="'+Fe+'"] '+_t))}}(Ee):function(){return[]}}({containerEl:et,portalKey:jt}),ze=function(Wt){return function(Ee){return Wt('[data-flip-id="'+Ee+'"]')[0]}}(Dn),Me=function(Wt){return Et[Wt]&&$e[Wt]},Fn=Object.keys(Et).concat(Object.keys($e)).filter(function(Wt){return!Me(Wt)}),we={flipCallbacks:lt,getElement:ze,flippedElementPositionsBeforeUpdate:Et,flippedElementPositionsAfterUpdate:$e,inProgressAnimations:Z,decisionData:Se},In=function(Wt){var Ee,ke=Wt.unflippedIds,qt=Wt.flipCallbacks,Fe=Wt.getElement,_t=Wt.flippedElementPositionsBeforeUpdate,on=Wt.flippedElementPositionsAfterUpdate,_e=Wt.inProgressAnimations,On=Wt.decisionData,mn=ke.filter(function(te){return on[te]}).filter(function(te){return qt[te]&&qt[te].onAppear}),kn=ke.filter(function(te){return _t[te]&&qt[te]&&qt[te].onExit}),yn=new Promise(function(te){Ee=te}),Ke=[],an=0,Ie=kn.map(function(te,Re){var Nt=_t[te].domDataForExitAnimations,Ue=Nt.element,Ct=Nt.parent,ut=Nt.childPosition,Ft=ut.top,Ht=ut.left,ne=ut.width,oe=ut.height;getComputedStyle(Ct).position==="static"&&(Ct.style.position="relative"),Ue.style.transform="matrix(1, 0, 0, 1, 0, 0)",Ue.style.position="absolute",Ue.style.top=Ft+"px",Ue.style.left=Ht+"px",Ue.style.height=oe+"px",Ue.style.width=ne+"px";var le=Ke.filter(function(yt){return yt[0]===Ct})[0];le||(le=[Ct,document.createDocumentFragment()],Ke.push(le)),le[1].appendChild(Ue),an+=1;var ft=function(){try{Ct.removeChild(Ue)}catch(yt){}finally{(an-=1)==0&&Ee()}};return _e[te]={stop:ft},function(){return qt[te].onExit(Ue,Re,ft,On)}});return Ke.forEach(function(te){te[0].appendChild(te[1])}),Ie.length||Ee(),{hideEnteringElements:function(){mn.forEach(function(te){var Re=Fe(te);Re&&(Re.style.opacity="0")})},animateEnteringElements:function(){mn.forEach(function(te,Re){var Nt=Fe(te);Nt&&qt[te].onAppear(Nt,Re,On)})},animateExitingElements:function(){return Ie.forEach(function(te){return te()}),yn}}}(k({},we,{unflippedIds:Fn})),zn=In.hideEnteringElements,qe=In.animateEnteringElements,xn=In.animateExitingElements,Un=k({},we,{containerEl:et,flippedIds:q.filter(Me),applyTransformOrigin:kt,spring:Bt,debug:At,staggerConfig:Zt,scopedSelector:Dn,onComplete:to});wn&&wn(et,Se);var nn=function(Wt){var Ee,ke=Wt.flippedIds,qt=Wt.flipCallbacks,Fe=Wt.inProgressAnimations,_t=Wt.flippedElementPositionsBeforeUpdate,on=Wt.flippedElementPositionsAfterUpdate,_e=Wt.applyTransformOrigin,On=Wt.spring,mn=Wt.getElement,kn=Wt.debug,yn=Wt.staggerConfig,Ke=yn===void 0?{}:yn,an=Wt.decisionData,Ie=an===void 0?{}:an,te=Wt.onComplete,Re=Wt.containerEl,Nt=new Promise(function(Q){Ee=Q});if(te&&Nt.then(function(){return te(Re,Ie)}),!ke.length)return function(){return Ee([]),Nt};var Ue=[],Ct=mn(ke[0]),ut=Ct?Ct.ownerDocument.querySelector("body"):document.querySelector("body"),Ft=(L(ke),ke.map(function(Q){var xt=_t[Q].rect,Gt=on[Q].rect,ae=_t[Q].opacity,be=on[Q].opacity,Ce=Gt.width<1||Gt.height<1,ue=on[Q].element;if(!Qt(xt)&&!Qt(Gt)||!ue)return!1;var Ne,rn,Nn,Ye=St(ue),Kn=(Nn=(rn=(Ne={flipperSpring:On,flippedSpring:Ye.spring})===void 0?{}:Ne).flippedSpring,k({},at.noWobble,z(rn.flipperSpring),z(Nn))),Yn=Ye.stagger===!0?"default":Ye.stagger,eo={element:ue,id:Q,stagger:Yn,springConfig:Kn};if(qt[Q]&&qt[Q].shouldFlip&&!qt[Q].shouldFlip(Ie.previous,Ie.current))return!1;var Rn=Math.abs(xt.left-Gt.left)+Math.abs(xt.top-Gt.top),no=Math.abs(xt.width-Gt.width)+Math.abs(xt.height-Gt.height),An=Math.abs(be-ae);if(xt.height===0&&Gt.height===0||xt.width===0&&Gt.width===0||Rn<.5&&no<.5&&An<.01)return!1;var Qn=h(on[Q].transform),fn={matrix:Qn},hn={matrix:[]},Sn=[Qn];Ye.translate&&(Sn.push(S(xt.left-Gt.left)),Sn.push(T(xt.top-Gt.top))),Ye.scale&&(Sn.push(u(Math.max(xt.width,1)/Math.max(Gt.width,1))),Sn.push(n(Math.max(xt.height,1)/Math.max(Gt.height,1)))),Ye.opacity&&(hn.opacity=ae,fn.opacity=be);var Mn=[];if(!qt[Q]||!qt[Q].shouldInvert||qt[Q].shouldInvert(Ie.previous,Ie.current)){var Ho=function(We,Be){return P(We.querySelectorAll('[data-inverse-flip-id="'+Be+'"]'))}(ue,Q);Mn=Ho.map(function(We){return[We,St(We)]})}hn.matrix=se(Sn.reduce(b)),fn.matrix=se(fn.matrix);var Ae,je=function(We){var Be=We.element,En=We.invertedChildren,Wn=We.body;return function(ye){var Cn=ye.matrix,oo=ye.opacity,Oo=ye.forceMinVals;if(M(oo)&&(Be.style.opacity=oo+""),Oo&&(Be.style.minHeight="1px",Be.style.minWidth="1px"),Cn){var Ca=function(ao){return"matrix("+ao.join(", ")+")"}(Cn);Be.style.transform=Ca,En&&function(ao){var io=ao.matrix,Ko=ao.body;ao.invertedChildren.forEach(function(Yo){var Qo=Yo[0],Ln=Yo[1];if(Ko.contains(Qo)){var Xo=io[0],Jo=io[3],bn=io[5],Bn={translateX:0,translateY:0,scaleX:1,scaleY:1},jn="";Ln.translate&&(Bn.translateX=-io[4]/Xo,Bn.translateY=-bn/Jo,jn+="translate("+Bn.translateX+"px, "+Bn.translateY+"px)"),Ln.scale&&(Bn.scaleX=1/Xo,Bn.scaleY=1/Jo,jn+=" scale("+Bn.scaleX+", "+Bn.scaleY+")"),Qo.style.transform=jn}})}({invertedChildren:En,matrix:Cn,body:Wn})}}}({element:ue,invertedChildren:Mn,body:ut});if(qt[Q]&&qt[Q].onComplete){var Le=qt[Q].onComplete;Ae=function(){return Le(ue,Ie)}}var Go=M(hn.opacity)&&M(fn.opacity)&&hn.opacity!==fn.opacity,zo=!1;return k({},eo,{stagger:Yn,springConfig:Kn,getOnUpdateFunc:function(We){var Be=We.spring,En=We.onAnimationEnd;return Fe[Q]={destroy:Be.destroy.bind(Be),onAnimationEnd:En},function(Wn){qt[Q]&&qt[Q].onSpringUpdate&&qt[Q].onSpringUpdate(Wn.getCurrentValue()),zo||(zo=!0,qt[Q]&&qt[Q].onStart&&qt[Q].onStart(ue,Ie));var ye=Wn.getCurrentValue();if(ut.contains(ue)){var Cn={matrix:[]};Cn.matrix=hn.matrix.map(function(oo,Oo){return Y(oo,fn.matrix[Oo],ye)}),Go&&(Cn.opacity=Y(hn.opacity,fn.opacity,ye)),je(Cn)}else Wn.destroy()}},initializeFlip:function(){je({matrix:hn.matrix,opacity:Go?hn.opacity:void 0,forceMinVals:Ce}),qt[Q]&&qt[Q].onStartImmediate&&qt[Q].onStartImmediate(ue,Ie),Ye.transformOrigin?ue.style.transformOrigin=Ye.transformOrigin:_e&&(ue.style.transformOrigin="0 0"),Mn.forEach(function(We){var Be=We[0],En=We[1];En.transformOrigin?Be.style.transformOrigin=En.transformOrigin:_e&&(Be.style.transformOrigin="0 0")})},onAnimationEnd:function(We){delete Fe[Q],A(Ae)&&Ae(),ue.style.transform="",Mn.forEach(function(Be){Be[0].style.transform=""}),Ce&&ue&&(ue.style.minHeight="",ue.style.minWidth=""),We||(Ue.push(Q),Ue.length>=Ft.length&&Ee(Ue))},delayUntil:Ye.delayUntil})}).filter(Boolean));if(Ft.forEach(function(Q){return(0,Q.initializeFlip)()}),kn)return function(){};var Ht=Ft.filter(function(Q){return Q.delayUntil&&(xt=Q.delayUntil,Ft.filter(function(Gt){return Gt.id===xt}).length);var xt}),ne={},oe={},le={};Ht.forEach(function(Q){Q.stagger?(le[Q.stagger]=!0,oe[Q.delayUntil]?oe[Q.delayUntil].push(Q.stagger):oe[Q.delayUntil]=[Q.stagger]):ne[Q.delayUntil]?ne[Q.delayUntil].push(Q):ne[Q.delayUntil]=[Q]});var ft=Ft.filter(function(Q){return Q.stagger}).reduce(function(Q,xt){return Q[xt.stagger]?Q[xt.stagger].push(xt):Q[xt.stagger]=[xt],Q},{}),yt=Ft.filter(function(Q){return Ht.indexOf(Q)===-1});return yt.forEach(function(Q){Q.onSpringActivate=function(){ne[Q.id]&&ne[Q.id].forEach(pe),oe[Q.id]&&Object.keys(oe[Q.id].reduce(function(xt,Gt){var ae;return k(xt,((ae={})[Gt]=!0,ae))},{})).forEach(function(xt){de(ft[xt],Ke[xt])})}}),function(){return Ft.length||Ee([]),yt.filter(function(Q){return!Q.stagger}).forEach(pe),Object.keys(ft).forEach(function(Q){le[Q]||de(ft[Q],Ke[Q])}),Nt}}(Un);He?He({hideEnteringElements:zn,animateEnteringElements:qe,animateExitingElements:xn,animateFlippedElements:nn}):(zn(),xn().then(qe),nn())},fe=function(H){var N=H.element,U=H.flipCallbacks,q=U===void 0?{}:U,w=H.inProgressAnimations,Z=w===void 0?{}:w,mt=zt(N,H.portalKey),Et=P(N.querySelectorAll("[data-inverse-flip-id]")),It={},lt=[],et={};mt.filter(function(At){return q&&q[At.dataset.flipId]&&q[At.dataset.flipId].onExit}).forEach(function(At){var jt=At.parentNode;if(At.closest){var wt=At.closest("[data-exit-container]");wt&&(jt=wt)}var Zt=lt.findIndex(function(Oe){return Oe[0]===jt});Zt===-1&&(lt.push([jt,jt.getBoundingClientRect()]),Zt=lt.length-1),It[At.dataset.flipId]=lt[Zt][1],et[At.dataset.flipId]=jt});var kt=Jt(mt),Bt=kt.map(function(At){var jt=At[0],wt=At[1],Zt={};if(q&&q[jt.dataset.flipId]&&q[jt.dataset.flipId].onExit){var Oe=It[jt.dataset.flipId];k(Zt,{element:jt,parent:et[jt.dataset.flipId],childPosition:{top:wt.top-Oe.top,left:wt.left-Oe.left,width:wt.width,height:wt.height}})}return[jt.dataset.flipId,{rect:wt,opacity:parseFloat(window.getComputedStyle(jt).opacity||"1"),domDataForExitAnimations:Zt}]}).reduce(Ut,{});return function(At,jt){Object.keys(At).forEach(function(wt){At[wt].destroy&&At[wt].destroy(),At[wt].onAnimationEnd&&At[wt].onAnimationEnd(!0),delete At[wt]}),jt.forEach(function(wt){wt.style.transform="",wt.style.opacity=""})}(Z,mt.concat(Et)),{flippedElementPositions:Bt,cachedOrderedFlipIds:kt.map(function(At){return At[0].dataset.flipId})}},ce=function(){function H(U){this.applyTransformOrigin=!0,k(this,U),this.inProgressAnimations={},this.flipCallbacks={},this.recordBeforeUpdate=this.recordBeforeUpdate.bind(this),this.update=this.update.bind(this),this.addFlipped=this.addFlipped.bind(this),this.addInverted=this.addInverted.bind(this)}var N=H.prototype;return N.recordBeforeUpdate=function(){this.snapshot=fe({element:this.element,flipCallbacks:this.flipCallbacks,inProgressAnimations:this.inProgressAnimations})},N.update=function(U,q){this.snapshot&&(ge({flippedElementPositionsBeforeUpdate:this.snapshot.flippedElementPositions,cachedOrderedFlipIds:this.snapshot.cachedOrderedFlipIds,containerEl:this.element,inProgressAnimations:this.inProgressAnimations,flipCallbacks:this.flipCallbacks,applyTransformOrigin:this.applyTransformOrigin,spring:this.spring,debug:this.debug,staggerConfig:this.staggerConfig,handleEnterUpdateDelete:this.handleEnterUpdateDelete,decisionData:{previous:U,current:q},onComplete:this.onComplete,onStart:this.onStart}),delete this.snapshot)},N.addFlipped=function(U){var q=U.element,w=U.flipId,Z=U.opacity,mt=U.translate,Et=U.scale,It=U.transformOrigin,lt=U.spring,et=U.stagger,kt=U.delayUntil,Bt=U.onAppear,At=U.onStart,jt=U.onSpringUpdate,wt=U.onComplete,Zt=U.onExit,Oe=U.shouldFlip,Se=U.shouldInvert;if(!q)throw new Error("no element provided");if(!w)throw new Error("No flipId provided");var He={scale:Et,translate:mt,opacity:Z,transformOrigin:It,spring:lt,stagger:et,delayUntil:kt};He.scale||He.translate||He.opacity||k(He,{translate:!0,scale:!0,opacity:!0}),w&&(q.dataset.flipId=String(w)),q.dataset.flipConfig=JSON.stringify(He),this.flipCallbacks[w]={shouldFlip:Oe,shouldInvert:Se,onAppear:Bt,onStart:At,onSpringUpdate:jt,onComplete:wt,onExit:Zt}},N.addInverted=function(U){var q=U.element,w=U.parent,Z=U.opacity,mt=U.translate,Et=U.scale,It=U.transformOrigin;if(!q)throw new Error("no element provided");if(!w)throw new Error("parent must be provided");var lt=w.dataset.flipId,et={scale:Et,translate:mt,opacity:Z,transformOrigin:It};et.scale||et.translate||et.opacity||k(et,{translate:!0,scale:!0,opacity:!0}),q.dataset.inverseFlipId=lt,q.dataset.flipConfig=JSON.stringify(et)},H}(),Vt=new Yt,nt=function(H){var N=H.values,U=H.onUpdate,q=H.delay,w=q===void 0?0:q,Z=H.onComplete,mt=k({},at.noWobble,z(H.config)),Et=mt.overshootClamping,It=Vt.createSpring(mt.stiffness,mt.damping);return It.setOvershootClampingEnabled(!!Et),It.addListener({onSpringAtRest:function(lt){Z&&Z(),lt.destroy()},onSpringUpdate:function(lt){var et=lt.getCurrentValue();if(!N)return U(et);var kt=Object.keys(N).map(function(Bt){return[Bt,Y(N[Bt][0],N[Bt][1],et)]}).reduce(function(Bt,At){var jt;return Object.assign(Bt,((jt={})[At[0]]=At[1],jt))},{});U(kt)}}),w?setTimeout(function(){It.setEndValue(1)},w):It.setEndValue(1),It};function st(H,N){if(H==null)return{};var U,q,w={},Z=Object.keys(H);for(q=0;q<Z.length;q++)N.indexOf(U=Z[q])>=0||(w[U]=H[U]);return w}var ot=Object(e.createContext)({}),pt=Object(e.createContext)("portal"),gt=function(H){var N,U;function q(){var Z;return(Z=H.apply(this,arguments)||this).inProgressAnimations={},Z.flipCallbacks={},Z.el=void 0,Z}U=H,(N=q).prototype=Object.create(U.prototype),N.prototype.constructor=N,N.__proto__=U;var w=q.prototype;return w.getSnapshotBeforeUpdate=function(Z){return Z.flipKey!==this.props.flipKey&&this.el?fe({element:this.el,flipCallbacks:this.flipCallbacks,inProgressAnimations:this.inProgressAnimations,portalKey:this.props.portalKey}):null},w.componentDidUpdate=function(Z,mt,Et){this.props.flipKey!==Z.flipKey&&this.el&&ge({flippedElementPositionsBeforeUpdate:Et.flippedElementPositions,cachedOrderedFlipIds:Et.cachedOrderedFlipIds,containerEl:this.el,inProgressAnimations:this.inProgressAnimations,flipCallbacks:this.flipCallbacks,applyTransformOrigin:this.props.applyTransformOrigin,spring:this.props.spring,debug:this.props.debug,portalKey:this.props.portalKey,staggerConfig:this.props.staggerConfig,handleEnterUpdateDelete:this.props.handleEnterUpdateDelete,decisionData:{previous:Z.decisionData,current:this.props.decisionData},onComplete:this.props.onComplete,onStart:this.props.onStart})},w.render=function(){var Z=this,mt=this.props,Et=mt.portalKey,It=r.a.createElement(ot.Provider,{value:this.flipCallbacks},r.a.createElement(mt.element,{className:mt.className,ref:function(lt){return Z.el=lt}},this.props.children));return Et&&(It=r.a.createElement(pt.Provider,{value:Et},It)),It},q}(e.Component);gt.defaultProps={applyTransformOrigin:!0,element:"div"};var Lt=function(H){var N,U=H.children,q=H.flipId,w=H.inverseFlipId,Z=H.portalKey,mt=st(H,["children","flipId","inverseFlipId","portalKey"]),Et=U,It=function(et){return typeof et=="function"}(Et);if(!It)try{Et=e.Children.only(U)}catch(et){throw new Error("Each Flipped component must wrap a single child")}mt.scale||mt.translate||mt.opacity||J.assign(mt,{translate:!0,scale:!0,opacity:!0});var lt=((N={})[X.DATA_FLIP_CONFIG]=JSON.stringify(mt),N);return q!==void 0?lt[X.DATA_FLIP_ID]=String(q):w&&(lt[X.DATA_INVERSE_FLIP_ID]=String(w)),Z!==void 0&&(lt[X.DATA_PORTAL_KEY]=Z),It?Et(lt):Object(e.cloneElement)(Et,lt)},it=function(H){var N=H.children,U=H.flipId,q=H.shouldFlip,w=H.shouldInvert,Z=H.onAppear,mt=H.onStart,Et=H.onStartImmediate,It=H.onComplete,lt=H.onExit,et=H.onSpringUpdate,kt=st(H,["children","flipId","shouldFlip","shouldInvert","onAppear","onStart","onStartImmediate","onComplete","onExit","onSpringUpdate"]);return N?kt.inverseFlipId?r.a.createElement(Lt,Object.assign({},kt),N):r.a.createElement(pt.Consumer,null,function(Bt){return r.a.createElement(ot.Consumer,null,function(At){return J.isObject(At)&&U&&(At[U]={shouldFlip:q,shouldInvert:w,onAppear:Z,onStart:mt,onStartImmediate:Et,onComplete:It,onExit:lt,onSpringUpdate:et}),r.a.createElement(Lt,Object.assign({flipId:U},kt,{portalKey:Bt}),N)})}):null};it.displayName="Flipped";var ht=function(H){var N;return Object(e.cloneElement)(H.children,((N={})[X.DATA_EXIT_CONTAINER]=!0,N))}},"3kDS":function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("lSNA")),s=e(t("J4zp")),c=l(t("cDcd")),f=e(t("hSE2")),b=e(t("+QRC")),h=e(t("QSPI")),v=e(t("RWaG")),O=l(t("2imF")),p=e(t("nbdK"));function m(x){if(typeof WeakMap!="function")return null;var y=new WeakMap,j=new WeakMap;return(m=function(C){return C?j:y})(x)}function l(x,y){if(!y&&x&&x.__esModule)return x;if(x===null||r(x)!=="object"&&typeof x!="function")return{default:x};var j=m(y);if(j&&j.has(x))return j.get(x);var I={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in x)if(S!=="default"&&Object.prototype.hasOwnProperty.call(x,S)){var T=C?Object.getOwnPropertyDescriptor(x,S):null;T&&(T.get||T.set)?Object.defineProperty(I,S,T):I[S]=x[S]}return I.default=x,j&&j.set(x,I),I}var u=function(y){var j,I=y.tooltip,C=y.stringToCopy,S=y.successText,T=y.successTextPosition,R=T===void 0?"right":T,M=y.iconClass,A=y.onCopy,W=(0,c.useState)(!1),P=(0,s.default)(W,2),L=P[0],k=P[1],G=function(){(0,b.default)(C),S&&(k(!0),setTimeout(function(){k(!1)},3e3)),A&&A()};return c.default.createElement("div",{className:p.default["clipboard-copy"]},c.default.createElement(h.default,{toolTip:I,toolTipDelayShow:300,toolTipPosition:"bottom"},c.default.createElement(O.default,{clickable:!0,onClick:G,iconType:O.Type.SVG,name:"duplicate",size:15,"data-auto":"copy-button",className:(0,f.default)(M)})),S&&c.default.createElement(v.default,{theme:"light",className:(0,f.default)(p.default.toast,(j={},(0,i.default)(j,p.default.visible,L),(0,i.default)(j,p.default.left,R==="left"),j))},S))},n=u;o.default=n},"3nnA":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=t("rf6O"),c=e(t("TSYQ")),f=e(t("gXwF")),b=e(t("5rKk")),h=t("nKUr");function v(u,n){var x=Object.keys(u);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(u);n&&(y=y.filter(function(j){return Object.getOwnPropertyDescriptor(u,j).enumerable})),x.push.apply(x,y)}return x}function O(u){for(var n=1;n<arguments.length;n++){var x=arguments[n]!=null?arguments[n]:{};n%2?v(Object(x),!0).forEach(function(y){(0,r.default)(u,y,x[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(x)):v(Object(x)).forEach(function(y){Object.defineProperty(u,y,Object.getOwnPropertyDescriptor(x,y))})}return u}const p=()=>{};function m(u){let n=u.className,x=u.label,y=u.value,j=u.selected,I=u.selectedClassName,C=u.iconName,S=u.onChange,T=S===void 0?p:S,R=u.isCheckbox,M=u.omitBorder,A=u.disabled,W=u.hideLabel,P=u.hideInput,L=u.iconSize,k=L===void 0?16:L,G=u.children,Y=u.containerProps,J=u.inputLabel,X=u.iconClassName,at=u["data-auto"],z=(0,i.default)(u,["className","label","value","selected","selectedClassName","iconName","onChange","isCheckbox","omitBorder","disabled","hideLabel","hideInput","iconSize","children","containerProps","inputLabel","iconClassName","data-auto"]);return(0,h.jsxs)("label",O(O({className:(0,c.default)(n,f.default.main,{[f.default.selected]:j,[I]:j,[f.default.text]:!W,[f.default["omit-border"]]:M}),"data-auto":at},Y),{},{children:[(0,h.jsx)("input",O(O({},z),{},{"aria-label":`${x} ${y}`,className:(0,c.default)({[f.default.hidden]:P||C||G,[f.default.capturing]:!G}),type:R?"checkbox":"radio",name:x,value:y,onChange:()=>T(y),checked:j,disabled:A})),!G&&C?(0,h.jsx)("div",{className:(0,c.default)(X,f.default["icon-wrapper"],{[f.default.padded]:!W}),children:(0,h.jsx)(b.default,{name:C,size:k})}):G,!W&&(0,h.jsx)("span",{children:J||y})]}))}m.propTypes={label:s.string.isRequired,value:s.string.isRequired,selected:s.bool,selectedClassName:s.string,iconName:s.string,iconSize:s.number,isCheckbox:s.bool,omitBorder:s.bool,disabled:s.bool,hideLabel:s.bool,hideInput:s.bool,onChange:s.func,inputLabel:s.string,containerProps:s.object,iconClassName:s.string};var l=m;o.default=l},"3o9B":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.OptionButtonsGroup-module-main-1c3b {
  display: flex;
  justify-content: flex-start;
  align-items: center; }
  .OptionButtonsGroup-module-main-1c3b .OptionButtonsGroup-module-main-label-1c3b {
    margin-inline-end: .3em; }

.OptionButtonsGroup-module-options-group-2O3b {
  display: flex;
  justify-content: center;
  align-items: center; }
  .OptionButtonsGroup-module-options-group-2O3b.OptionButtonsGroup-module-no-label-1O3b {
    width: 100%; }
    .OptionButtonsGroup-module-options-group-2O3b.OptionButtonsGroup-module-no-label-1O3b .OptionButtonsGroup-module-option-2W3b {
      flex: 1 0 auto; }
  .OptionButtonsGroup-module-options-group-2O3b .OptionButtonsGroup-module-option-2W3b {
    border-radius: 0; }
    .OptionButtonsGroup-module-options-group-2O3b .OptionButtonsGroup-module-option-2W3b:first-of-type {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px; }
    .OptionButtonsGroup-module-options-group-2O3b .OptionButtonsGroup-module-option-2W3b:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px; }
    .OptionButtonsGroup-module-options-group-2O3b .OptionButtonsGroup-module-option-2W3b:not(:last-of-type) {
      border-inline-end: 0; }
`,""]),o.locals={dudaFont:"Source Sans Pro",dudaGray:"#ced6d9",lightBorder:"#e8e8e8",main:"OptionButtonsGroup-module-main-1c3b","main-label":"OptionButtonsGroup-module-main-label-1c3b","options-group":"OptionButtonsGroup-module-options-group-2O3b","no-label":"OptionButtonsGroup-module-no-label-1O3b",option:"OptionButtonsGroup-module-option-2W3b"}},"3wkl":function(a,o,t){"use strict";var e=t("P7XM"),r=t("2Naf");function i(s,c,f,b){r.call(this,s,c,f,b)}e(i,r),i.enabled=r.enabled&&r.supportsCORS,a.exports=i},"3z+Z":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SubNavItem-container-3U3b {
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--header-border-color);
  height: 42px;
  background-color: var(--header-color); }
  .SubNavItem-container-3U3b .SubNavItem-link-1B3b {
    justify-content: flex-start;
    margin-inline-start: 15px; }
  .SubNavItem-container-3U3b .SubNavItem-label-_M3b {
    font-size: 13px; }
`,""]),o.locals={container:"SubNavItem-container-3U3b",link:"SubNavItem-link-1B3b",label:"SubNavItem-label-_M3b"}},"42Jg":function(a,o,t){"use strict";var e=t("P7XM"),r=t("moM4");function i(){r.call(this),this.initEvent("close",!1,!1),this.wasClean=!1,this.code=0,this.reason=""}e(i,r),a.exports=i},"48yj":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.WithSitesChangeDomainPopup-module-message-line-3E3b {
  margin-bottom: 16px; }

.WithSitesChangeDomainPopup-module-current-domain-2B3b {
  color: #828894; }

.WithSitesChangeDomainPopup-module-radio-buttons-3g3b {
  flex-direction: column;
  align-items: flex-start; }
  .WithSitesChangeDomainPopup-module-radio-buttons-3g3b .WithSitesChangeDomainPopup-module-label-2V3b {
    font-size: 14px; }
`,""]),o.locals={"message-line":"WithSitesChangeDomainPopup-module-message-line-3E3b","current-domain":"WithSitesChangeDomainPopup-module-current-domain-2B3b","radio-buttons":"WithSitesChangeDomainPopup-module-radio-buttons-3g3b",label:"WithSitesChangeDomainPopup-module-label-2V3b"}},"4Bd7":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PaymentTabs-module-container-3r3b {
  height: 100%;
  padding-inline-start: 266px;
  overflow-x: hidden;
  background-color: #f7f7f7;
  z-index: 10; }
  .PaymentTabs-module-container-3r3b .PaymentTabs-module-tabs-container-3t3b.PaymentTabs-module-tabs-container-3t3b {
    width: 266px;
    background-color: #ffffff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    height: calc(100vh - 61px);
    position: fixed;
    left: 0;
    z-index: 1; }
    .PaymentTabs-module-container-3r3b .PaymentTabs-module-tabs-container-3t3b.PaymentTabs-module-tabs-container-3t3b .PaymentTabs-module-tab-name-3L3b:first-of-type {
      margin-block-start: 40px; }
  .PaymentTabs-module-container-3r3b .PaymentTabs-module-active-panel-HL3b {
    width: 100%;
    margin-inline-start: auto;
    margin-inline-end: auto; }
`,""]),o.locals={container:"PaymentTabs-module-container-3r3b","tabs-container":"PaymentTabs-module-tabs-container-3t3b","tab-name":"PaymentTabs-module-tab-name-3L3b","active-panel":"PaymentTabs-module-active-panel-HL3b"}},"4dZ6":function(a,o,t){var e=t("MHSY");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"4ei+":function(a,o,t){var e=t("cFI4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"4rNY":function(a,o,t){"use strict";var e=t("P7XM"),r=t("dXd4"),i=t("FUii"),s=t("3wkl"),c=t("c6pU");function f(b){if(!c.enabled&&!s.enabled)throw new Error("Transport created when disabled");r.call(this,b,"/xhr",i,s)}e(f,r),f.enabled=function(b){return b.nullOrigin?!1:c.enabled&&b.sameOrigin?!0:s.enabled},f.transportName="xhr-polling",f.roundTrips=2,a.exports=f},"4sg8":function(a,o,t){var e=t("KLUv");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"55Ip":function(a,o,t){"use strict";t.d(o,"a",function(){return p}),t.d(o,"b",function(){return A});var e=t("Ty5D"),r=t("dI71"),i=t("cDcd"),s=t.n(i),c=t("LhCv"),f=t("rf6O"),b=t.n(f),h=t("wx14"),v=t("zLVn"),O=t("9R94"),p=function(P){Object(r.a)(L,P);function L(){for(var G,Y=arguments.length,J=new Array(Y),X=0;X<Y;X++)J[X]=arguments[X];return G=P.call.apply(P,[this].concat(J))||this,G.history=Object(c.a)(G.props),G}var k=L.prototype;return k.render=function(){return s.a.createElement(e.d,{history:this.history,children:this.props.children})},L}(s.a.Component),m=function(P){Object(r.a)(L,P);function L(){for(var G,Y=arguments.length,J=new Array(Y),X=0;X<Y;X++)J[X]=arguments[X];return G=P.call.apply(P,[this].concat(J))||this,G.history=Object(c.b)(G.props),G}var k=L.prototype;return k.render=function(){return s.a.createElement(e.d,{history:this.history,children:this.props.children})},L}(s.a.Component),l=function(L,k){return typeof L=="function"?L(k):L},u=function(L,k){return typeof L=="string"?Object(c.c)(L,null,null,k):L},n=function(L){return L},x=s.a.forwardRef;typeof x=="undefined"&&(x=n);function y(P){return!!(P.metaKey||P.altKey||P.ctrlKey||P.shiftKey)}var j=x(function(P,L){var k=P.innerRef,G=P.navigate,Y=P.onClick,J=Object(v.a)(P,["innerRef","navigate","onClick"]),X=J.target,at=Object(h.a)({},J,{onClick:function(F){try{Y&&Y(F)}catch(rt){throw F.preventDefault(),rt}!F.defaultPrevented&&F.button===0&&(!X||X==="_self")&&!y(F)&&(F.preventDefault(),G())}});return n!==x?at.ref=L||k:at.ref=k,s.a.createElement("a",at)}),I=x(function(P,L){var k=P.component,G=k===void 0?j:k,Y=P.replace,J=P.to,X=P.innerRef,at=Object(v.a)(P,["component","replace","to","innerRef"]);return s.a.createElement(e.f.Consumer,null,function(z){z||Object(O.a)(!1);var F=z.history,rt=u(l(J,z.location),z.location),ct=rt?F.createHref(rt):"",dt=Object(h.a)({},at,{href:ct,navigate:function(){var Ot=l(J,z.location),Mt=Y?F.replace:F.push;Mt(Ot)}});return n!==x?dt.ref=L||X:dt.innerRef=X,s.a.createElement(G,dt)})});if(!1)var C,S;var T=function(L){return L},R=s.a.forwardRef;typeof R=="undefined"&&(R=T);function M(){for(var P=arguments.length,L=new Array(P),k=0;k<P;k++)L[k]=arguments[k];return L.filter(function(G){return G}).join(" ")}var A=R(function(P,L){var k=P["aria-current"],G=k===void 0?"page":k,Y=P.activeClassName,J=Y===void 0?"active":Y,X=P.activeStyle,at=P.className,z=P.exact,F=P.isActive,rt=P.location,ct=P.sensitive,dt=P.strict,vt=P.style,Ot=P.to,Mt=P.innerRef,Rt=Object(v.a)(P,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return s.a.createElement(e.f.Consumer,null,function(Yt){Yt||Object(O.a)(!1);var re=rt||Yt.location,Xt=u(l(Ot,re),re),pe=Xt.pathname,de=pe&&pe.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),se=de?Object(e.g)(re.pathname,{path:de,exact:z,sensitive:ct,strict:dt}):null,Qt=!!(F?F(se,re):se),St=Qt?M(at,J):at,Ut=Qt?Object(h.a)({},vt,{},X):vt,zt=Object(h.a)({"aria-current":Qt&&G||null,className:St,style:Ut,to:Xt},Rt);return T!==R?zt.ref=L||Mt:zt.innerRef=Mt,s.a.createElement(I,zt)})});if(!1)var W},"5Fiw":function(a,o,t){"use strict";t.d(o,"a",function(){return i});var e=t("P8Th");const r={year:"numeric",month:"long",day:"numeric"},i=s=>{const{account:{localeCode:c}}=Object(e.b)();let f;try{const b=c.replace("_","-");f=new Date(s).toLocaleDateString(b,r)}catch(b){f="- -"}return f}},"5LqS":function(a,o,t){var e=t("9E3j");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5Muu":function(a,o,t){var e=t("eLVs");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5S0r":function(a,o,t){"use strict";var e={};t.r(e),t.d(e,"notificationsState",function(){return c.a});var r=t("k4gB"),i=t("2vnA"),s=t("ohCu"),c=t("jz7X");Object(i.f)({isolateGlobalState:!0,enforceActions:Object(s.d)()?"never":"observed"});var f=t("N1n0"),b=t("So9d");const h=Object(f.b)(e),v=Object(b.a)(e);var O=t("INEn"),p=t("ZiIQ"),m=t("cDcd"),l=t("pPMm"),u=t.n(l),n=t("LyWx"),x=t("nKUr");const{string:y,func:j,bool:I}=r.b,C=({className:J,id:X,onClose:at,children:z,showCloseIcon:F=!0})=>{const rt=Object(m.useCallback)(()=>{at(X)},[X,at]);return Object(x.jsxs)("section",{className:Object(r.h)(u.a.main,J),"data-auto":"notification-container",children:[z,F&&Object(x.jsx)(p.a,{noflex:!0,name:"close_popup",className:u.a.icon,addSvgIdPrefix:!1,size:15,color:"#617379",iconType:n.m.SVG,onClick:rt,clickable:!0})]})};C.propTypes={className:y,id:y,onClose:j,showCloseIcon:I};var S=C,T=t("IRsh"),R=t.n(T),M=t("3jCY"),A,W,P,L;const{string:k}=r.b;let G=(A=h(["notificationsState"]),A(W=(L=P=class extends r.a{constructor(...X){super(...X);this.onChange=at=>{O.b.deleteNotification(at)}}render(){return this.stores.notificationsState.notifications.length?Object(x.jsx)("div",{className:Object(r.h)(R.a.main,this.props.className),children:Object(x.jsx)(M.b,{flipKey:`this.stores.notificationsState.notifications.length- ${Date.now()}`,decisionData:this.stores.notificationsState,children:this.stores.notificationsState.notifications.map(X=>{const at=X.component;return Object(x.jsx)(M.a,{flipId:X.id,children:Object(x.jsx)("div",{children:Object(x.jsx)(S,{id:X.id,onClose:this.onChange,className:Object(r.h)(X.className,this.props.notificationClassName),showCloseIcon:X.showCloseIcon,children:at})})},X.id)})})}):null}},P.displayName="SystemNotifications",P.propTypes={className:k,notificationClassName:k},L))||W);var Y=o.a=G},"5Uqf":function(a,o,t){var e=t("eVVs");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5Vaj":function(a,o,t){"use strict";var e=t("P7XM"),r=t("dXd4"),i=t("sYUk"),s=t("FUii"),c=t("nX0T");function f(b){if(!c.enabled)throw new Error("Transport created when disabled");r.call(this,b,"/xhr",s,c)}e(f,r),f.enabled=i.enabled,f.transportName="xdr-polling",f.roundTrips=2,a.exports=f},"5ax+":function(a,o,t){var e=t("fJM5");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5cYt":function(a,o,t){var e=t("PvYm");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5kE2":function(a,o,t){var e=t("C9C+");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"5xxK":function(a,o,t){var e=t("33qY");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"6463":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Modal-module-small-3O3b {
  width: 480px; }

.Modal-module-medium-2O3b {
  width: 740px; }

.Modal-module-large-3d3b {
  width: 1000px; }

.Modal-module-overlay-213b {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(49, 49, 49, 0.5);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out; }
  .Modal-module-overlay-213b.Modal-module-shown-CJ3b {
    pointer-events: auto;
    opacity: 1; }
  .Modal-module-overlay-213b .Modal-module-main-2v3b {
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
    opacity: 1;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out; }
    .Modal-module-overlay-213b .Modal-module-main-2v3b[aria-hidden] {
      opacity: 0;
      transform: scale(0.6); }
    .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-header-2h3b {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #f5f7f7;
      padding-inline-start: 32px;
      padding-inline-end: 20px;
      padding-block-start: 16px;
      padding-block-end: 16px; }
      .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-header-2h3b .Modal-module-title-2L3b {
        padding: 0;
        font-family: Roboto;
        font-size: 20px;
        text-align: start; }
      .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-header-2h3b .Modal-module-close-button-3l3b {
        margin-inline-start: auto; }
    .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-body-3e3b {
      display: flex;
      flex-direction: column;
      padding-block-start: 24px;
      padding-block-end: 24px;
      padding-inline-start: 32px;
      padding-inline-end: 32px; }
    .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-divider-1Y3b {
      margin: 0; }
      .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-divider-1Y3b ~ .Modal-module-actions-2q3b {
        margin-block-end: 16px; }
    .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-actions-2q3b {
      margin-block-start: 16px;
      margin-block-end: 24px;
      padding-inline-start: 32px;
      padding-inline-end: 32px; }
      .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-actions-2q3b .Modal-module-confirmation-actions-1b3b {
        display: flex;
        justify-content: flex-end; }
        .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-actions-2q3b .Modal-module-confirmation-actions-1b3b .Modal-module-button-193b {
          margin-inline-start: 8px;
          min-width: 85px; }
    .Modal-module-overlay-213b .Modal-module-main-2v3b .Modal-module-footer-Yq3b {
      background-color: #f5f7f7;
      font-size: 12px;
      text-align: center;
      padding-block-start: 16px;
      padding-block-end: 16px;
      padding-inline-start: 32px;
      padding-inline-end: 32px; }
`,""]),o.locals={dudaFont:"Source Sans Pro",dudaGray:"#ced6d9",lightBorder:"#e8e8e8",small:"Modal-module-small-3O3b",medium:"Modal-module-medium-2O3b",large:"Modal-module-large-3d3b",overlay:"Modal-module-overlay-213b",shown:"Modal-module-shown-CJ3b",main:"Modal-module-main-2v3b",header:"Modal-module-header-2h3b",title:"Modal-module-title-2L3b","close-button":"Modal-module-close-button-3l3b",body:"Modal-module-body-3e3b",divider:"Modal-module-divider-1Y3b",actions:"Modal-module-actions-2q3b","confirmation-actions":"Modal-module-confirmation-actions-1b3b",button:"Modal-module-button-193b",footer:"Modal-module-footer-Yq3b"}},"68IQ":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardFooterLabels-container-1J3b {
  display: flex; }
  .CardFooterLabels-container-1J3b .CardFooterLabels-label-tag-container-313b {
    max-width: 90px;
    margin-inline-end: 10px;
    border-radius: 12px;
    white-space: nowrap;
    display: flex;
    align-items: center; }
    .CardFooterLabels-container-1J3b .CardFooterLabels-label-tag-container-313b .CardFooterLabels-label-tag-283b {
      color: white;
      font-family: 'Source Sans Pro';
      font-size: 12px;
      padding-block-start: 2px;
      padding-inline-end: 11px;
      padding-block-end: 2px;
      padding-inline-start: 11px;
      overflow: hidden;
      text-overflow: ellipsis; }
`,""]),o.locals={container:"CardFooterLabels-container-1J3b","label-tag-container":"CardFooterLabels-label-tag-container-313b","label-tag":"CardFooterLabels-label-tag-283b"}},"6JHZ":function(a,o,t){var e=t("oquz");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"6Zju":function(a,o,t){"use strict";var e=t("P7XM"),r=t("raCH").EventEmitter,i=function(){};function s(c,f){i(c),r.call(this),this.sendBuffer=[],this.sender=f,this.url=c}e(s,r),s.prototype.send=function(c){i("send",c),this.sendBuffer.push(c),this.sendStop||this.sendSchedule()},s.prototype.sendScheduleWait=function(){i("sendScheduleWait");var c=this,f;this.sendStop=function(){i("sendStop"),c.sendStop=null,clearTimeout(f)},f=setTimeout(function(){i("timeout"),c.sendStop=null,c.sendSchedule()},25)},s.prototype.sendSchedule=function(){i("sendSchedule",this.sendBuffer.length);var c=this;if(this.sendBuffer.length>0){var f="["+this.sendBuffer.join(",")+"]";this.sendStop=this.sender(this.url,f,function(b){c.sendStop=null,b?(i("error",b),c.emit("close",b.code||1006,"Sending error: "+b),c.close()):c.sendScheduleWait()}),this.sendBuffer=[]}},s.prototype._cleanup=function(){i("_cleanup"),this.removeAllListeners()},s.prototype.close=function(){i("close"),this._cleanup(),this.sendStop&&(this.sendStop(),this.sendStop=null)},a.exports=s},"6f8O":function(a,o,t){"use strict";o.__esModule=!0,o.registerDefaultHelpers=x,o.moveHelperToHooks=y;function e(j){return j&&j.__esModule?j:{default:j}}var r=t("TKWB"),i=e(r),s=t("YeZa"),c=e(s),f=t("WZHn"),b=e(f),h=t("dClt"),v=e(h),O=t("mIx/"),p=e(O),m=t("Gv6Q"),l=e(m),u=t("thkb"),n=e(u);function x(j){i.default(j),c.default(j),b.default(j),v.default(j),p.default(j),l.default(j),n.default(j)}function y(j,I,C){j.helpers[I]&&(j.hooks[I]=j.helpers[I],C||delete j.helpers[I])}},"6ojZ":function(a,o,t){var e=t("WXr4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"6wSL":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=c;var r=t("cDcd"),i=e(t("ryzx")),s=e(t("2W6z"));function c(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},b=f.controlPropValue,h=f.controlPropName,v=f.componentName,O=f.hasOnChange,p=f.onChangePropName,m=f.initialValuePropName,l=!i.default.isNil(b),u=(0,r.useRef)(l),n=u.current;(0,r.useEffect)(function(){(0,s.default)(!l||n,"`".concat(v,"` is changing from uncontrolled to be controlled. '").concat(v,"' component should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled `").concat(v,"` for the lifetime of the component. Check the `").concat(h,"` prop.")),(0,s.default)(l||!n,"`".concat(v,"` is changing from controlled to be uncontrolled. '").concat(v,"' component should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled `").concat(v,"` for the lifetime of the component. Check the `").concat(h,"` prop.")),(0,s.default)(O||!l,"A `".concat(h,"` prop was provided to `").concat(v,"` without an `").concat(p,"` handler. This will result in a read-only `").concat(h,"` value. If you want it to be mutable, use `").concat(m,"`. Otherwise, set `").concat(p,"`."))},[v,h,O,m,l,p,n])}},"75qQ":function(a,o,t){var e=t("8+bO");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"7Qtb":function(a,o,t){var e=t("By0W");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"7fIo":function(a,o,t){var e=t("OThS");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"7mRB":function(a,o,t){var e=t("3fuR");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"7nWi":function(a,o,t){var e=t("qORB");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"7nxj":function(a,o,t){var e=t("JWB+");a.exports=e.Stomp,a.exports.over=e.Stomp.over,a.exports.client=e.Stomp.client,typeof WebSocket!="function"&&(e.Stomp.WebSocketClass=t("fjyx").w3cwebsocket)},"7zqB":function(a,o,t){var e=t("CjgG");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"8+bO":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CustomBranding-main-7q3b {
  background-color: #f7f7f7;
  overflow: auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: visible;
  min-height: calc(100vh - 120px); }
`,""]),o.locals={main:"CustomBranding-main-7q3b"}},"8+zp":function(a,o,t){var e=t("inYN");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"83y6":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("QILm")),i=e(t("lSNA")),s=e(t("cDcd")),c=e(t("hSE2")),f=t("rf6O"),b=e(t("Uhfo")),h=["value"];function v(u,n){var x=Object.keys(u);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(u);n&&(y=y.filter(function(j){return Object.getOwnPropertyDescriptor(u,j).enumerable})),x.push.apply(x,y)}return x}function O(u){for(var n=1;n<arguments.length;n++){var x=arguments[n]!=null?arguments[n]:{};n%2?v(Object(x),!0).forEach(function(y){(0,i.default)(u,y,x[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(x)):v(Object(x)).forEach(function(y){Object.defineProperty(u,y,Object.getOwnPropertyDescriptor(x,y))})}return u}var p=function(){};function m(u){var n=u.className,x=u.optionsGroupClassName,y=u.label,j=u.onSelect,I=j===void 0?p:j,C=u.selected,S=u.hideLabels,T=u.multi,R=T===void 0?!1:T,M=u.omitLabel,A=M===void 0?!1:M,W=u.children,P=R&&!Array.isArray(C)?[C]:C;return s.default.createElement("div",{className:(0,c.default)(n,b.default.main)},!A&&y?s.default.createElement("span",{className:b.default["main-label"]},y):null,s.default.createElement("span",{className:(0,c.default)(b.default["options-group"],(0,i.default)({},b.default["no-label"],!y),x)},s.default.Children.map(W,function(L){var k=L.props,G=k.value,Y=(0,r.default)(k,h),J=R?P.includes(G):C===G;return s.default.cloneElement(L,O(O({label:y,selected:J,checked:J,onChange:function(){return I(G)},hideLabel:S,isCheckbox:R},Y),{},{className:(0,c.default)(b.default.option,Y.className)}))})))}m.propTypes={label:f.string,selected:(0,f.oneOfType)([f.string,f.object,(0,f.arrayOf)(f.string)]),onSelect:f.func,hideLabels:f.bool,multi:f.bool,omitLabel:f.bool,optionsGroupClassName:f.string};var l=m;o.default=l},"8K+W":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("cDcd")),i=e(t("vPBx")),s=e(t("hSE2")),c=e(t("C08I")),f=e(t("9RJa")),b=function(O){var p=O.navItems,m=p===void 0?[]:p,l=O.externalNavItems,u=l===void 0?[]:l,n=O.selectedItem,x=O.onItemSelected,y=O.dataAuto,j=y===void 0?"navigation-menu":y,I=O.className;return r.default.createElement("nav",{"data-auto":j},r.default.createElement("ul",{className:(0,s.default)(i.default.navList,I)},r.default.createElement(f.default,{navItems:m,onItemSelected:x,selectedItem:n}),r.default.createElement(c.default,{externalNavItems:u,onItemSelected:x})))},h=b;o.default=h},"8NGj":function(a,o,t){"use strict";var e=t("2imF"),r=t.n(e),i=t("lOfb"),s=t.n(i),c=t("rf6O"),f=t.n(c),b=t("TSYQ"),h=t.n(b),v=t("VRZk"),O=t.n(v),p=t("nKUr"),m=t.n(p);const l=({title:u,handleHelpIconClick:n,className:x,subTitle:y,handleVideoIconClick:j,showVideoIcon:I=!1,showHelpIcon:C=!1})=>Object(p.jsxs)("div",{className:h()(O.a.container,x),children:[Object(p.jsxs)("div",{className:O.a["title-container"],children:[Object(p.jsx)(s.a,{variant:"h3",children:u}),C&&Object(p.jsx)(r.a,{className:O.a.icon,name:"question-mark",size:16,iconType:e.Type.SVG,onClick:n}),I&&Object(p.jsx)(r.a,{className:O.a.icon,name:"video-round",size:16,iconType:e.Type.SVG,onClick:j})]}),y&&Object(p.jsx)(s.a,{variant:"pageDescription",className:O.a["sub-title"],children:y})]});l.propTypes={handleHelpIconClick:f.a.func,handleVideoIconClick:f.a.func,showHelpIcon:f.a.bool,showVideoIcon:f.a.bool,title:f.a.string.isRequired,subTitle:f.a.string,className:f.a.string},o.a=l},"8YjA":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Sites-empty-dashboard-container-Em3b {
  height: 100%;
  width: 100%;
  z-index: 1;
  background-color: #fafafa;
  flex: 1;
  overflow: auto; }
`,""]),o.locals={"empty-dashboard-container":"Sites-empty-dashboard-container-Em3b"}},"8d+t":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardFooter-module-footer-buttons-3U3b {
  display: flex;
  flex: 1;
  justify-content: space-between; }
  .CardFooter-module-footer-buttons-3U3b .CardFooter-module-left-group-3a3b,
  .CardFooter-module-footer-buttons-3U3b .CardFooter-module-right-group-223b {
    flex: 1;
    display: flex;
    align-items: center; }
  .CardFooter-module-footer-buttons-3U3b .CardFooter-module-right-group-223b {
    justify-content: flex-end; }
    .CardFooter-module-footer-buttons-3U3b .CardFooter-module-right-group-223b .CardFooter-module-primary-button-vM3b {
      height: 25px;
      padding-inline-start: 22px;
      padding-inline-end: 22px;
      margin-inline-start: 8px; }
`,""]),o.locals={"footer-buttons":"CardFooter-module-footer-buttons-3U3b","left-group":"CardFooter-module-left-group-3a3b","right-group":"CardFooter-module-right-group-223b","primary-button":"CardFooter-module-primary-button-vM3b"}},"8eRL":function(a,o,t){var e=t("48yj");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"8fj+":function(a,o,t){"use strict";(function(e){var r=t("woL0"),i=t("kwwM"),s=t("JqAl"),c=function(){};a.exports={WPrefix:"_jp",currentWindowId:null,polluteGlobalNamespace:function(){a.exports.WPrefix in e||(e[a.exports.WPrefix]={})},postMessage:function(f,b){e.parent!==e?e.parent.postMessage(i.stringify({windowId:a.exports.currentWindowId,type:f,data:b||""}),"*"):c("Cannot postMessage, no parent window.",f,b)},createIframe:function(f,b){var h=e.document.createElement("iframe"),v,O,p=function(){c("unattach"),clearTimeout(v);try{h.onload=null}catch(n){}h.onerror=null},m=function(){c("cleanup"),h&&(p(),setTimeout(function(){h&&h.parentNode.removeChild(h),h=null},0),r.unloadDel(O))},l=function(n){c("onerror",n),h&&(m(),b(n))},u=function(n,x){c("post",n,x),setTimeout(function(){try{h&&h.contentWindow&&h.contentWindow.postMessage(n,x)}catch(y){}},0)};return h.src=f,h.style.display="none",h.style.position="absolute",h.onerror=function(){l("onerror")},h.onload=function(){c("onload"),clearTimeout(v),v=setTimeout(function(){l("onload timeout")},2e3)},e.document.body.appendChild(h),v=setTimeout(function(){l("timeout")},15e3),O=r.unloadAdd(m),{post:u,cleanup:m,loaded:p}},createHtmlfile:function(f,b){var h=["Active"].concat("Object").join("X"),v=new e[h]("htmlfile"),O,p,m,l=function(){clearTimeout(O),m.onerror=null},u=function(){v&&(l(),r.unloadDel(p),m.parentNode.removeChild(m),m=v=null,CollectGarbage())},n=function(j){c("onerror",j),v&&(u(),b(j))},x=function(j,I){try{setTimeout(function(){m&&m.contentWindow&&m.contentWindow.postMessage(j,I)},0)}catch(C){}};v.open(),v.write('<html><script>document.domain="'+e.document.domain+'";</script></html>'),v.close(),v.parentWindow[a.exports.WPrefix]=e[a.exports.WPrefix];var y=v.createElement("div");return v.body.appendChild(y),m=v.createElement("iframe"),y.appendChild(m),m.src=f,m.onerror=function(){n("onerror")},O=setTimeout(function(){n("timeout")},15e3),p=r.unloadAdd(u),{post:x,cleanup:u,loaded:l}}},a.exports.iframeEnabled=!1,e.document&&(a.exports.iframeEnabled=(typeof e.postMessage=="function"||typeof e.postMessage=="object")&&!s.isKonqueror())}).call(this,t("yLpj"))},"8wFz":function(a,o,t){"use strict";o.__esModule=!0,o.Compiler=h,o.precompile=v,o.compile=O;function e(l){return l&&l.__esModule?l:{default:l}}var r=t("tpBh"),i=e(r),s=t("sTlx"),c=t("dVYT"),f=e(c),b=[].slice;function h(){}h.prototype={compiler:h,equals:function(u){var n=this.opcodes.length;if(u.opcodes.length!==n)return!1;for(var x=0;x<n;x++){var y=this.opcodes[x],j=u.opcodes[x];if(y.opcode!==j.opcode||!p(y.args,j.args))return!1}n=this.children.length;for(var x=0;x<n;x++)if(!this.children[x].equals(u.children[x]))return!1;return!0},guid:0,compile:function(u,n){return this.sourceNode=[],this.opcodes=[],this.children=[],this.options=n,this.stringParams=n.stringParams,this.trackIds=n.trackIds,n.blockParams=n.blockParams||[],n.knownHelpers=s.extend(Object.create(null),{helperMissing:!0,blockHelperMissing:!0,each:!0,if:!0,unless:!0,with:!0,log:!0,lookup:!0},n.knownHelpers),this.accept(u)},compileProgram:function(u){var n=new this.compiler,x=n.compile(u,this.options),y=this.guid++;return this.usePartial=this.usePartial||x.usePartial,this.children[y]=x,this.useDepths=this.useDepths||x.useDepths,y},accept:function(u){if(!this[u.type])throw new i.default("Unknown type: "+u.type,u);this.sourceNode.unshift(u);var n=this[u.type](u);return this.sourceNode.shift(),n},Program:function(u){this.options.blockParams.unshift(u.blockParams);for(var n=u.body,x=n.length,y=0;y<x;y++)this.accept(n[y]);return this.options.blockParams.shift(),this.isSimple=x===1,this.blockParams=u.blockParams?u.blockParams.length:0,this},BlockStatement:function(u){m(u);var n=u.program,x=u.inverse;n=n&&this.compileProgram(n),x=x&&this.compileProgram(x);var y=this.classifySexpr(u);y==="helper"?this.helperSexpr(u,n,x):y==="simple"?(this.simpleSexpr(u),this.opcode("pushProgram",n),this.opcode("pushProgram",x),this.opcode("emptyHash"),this.opcode("blockValue",u.path.original)):(this.ambiguousSexpr(u,n,x),this.opcode("pushProgram",n),this.opcode("pushProgram",x),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},DecoratorBlock:function(u){var n=u.program&&this.compileProgram(u.program),x=this.setupFullMustacheParams(u,n,void 0),y=u.path;this.useDecorators=!0,this.opcode("registerDecorator",x.length,y.original)},PartialStatement:function(u){this.usePartial=!0;var n=u.program;n&&(n=this.compileProgram(u.program));var x=u.params;if(x.length>1)throw new i.default("Unsupported number of partial arguments: "+x.length,u);x.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):x.push({type:"PathExpression",parts:[],depth:0}));var y=u.name.original,j=u.name.type==="SubExpression";j&&this.accept(u.name),this.setupFullMustacheParams(u,n,void 0,!0);var I=u.indent||"";this.options.preventIndent&&I&&(this.opcode("appendContent",I),I=""),this.opcode("invokePartial",j,y,I),this.opcode("append")},PartialBlockStatement:function(u){this.PartialStatement(u)},MustacheStatement:function(u){this.SubExpression(u),u.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},Decorator:function(u){this.DecoratorBlock(u)},ContentStatement:function(u){u.value&&this.opcode("appendContent",u.value)},CommentStatement:function(){},SubExpression:function(u){m(u);var n=this.classifySexpr(u);n==="simple"?this.simpleSexpr(u):n==="helper"?this.helperSexpr(u):this.ambiguousSexpr(u)},ambiguousSexpr:function(u,n,x){var y=u.path,j=y.parts[0],I=n!=null||x!=null;this.opcode("getContext",y.depth),this.opcode("pushProgram",n),this.opcode("pushProgram",x),y.strict=!0,this.accept(y),this.opcode("invokeAmbiguous",j,I)},simpleSexpr:function(u){var n=u.path;n.strict=!0,this.accept(n),this.opcode("resolvePossibleLambda")},helperSexpr:function(u,n,x){var y=this.setupFullMustacheParams(u,n,x),j=u.path,I=j.parts[0];if(this.options.knownHelpers[I])this.opcode("invokeKnownHelper",y.length,I);else{if(this.options.knownHelpersOnly)throw new i.default("You specified knownHelpersOnly, but used the unknown helper "+I,u);j.strict=!0,j.falsy=!0,this.accept(j),this.opcode("invokeHelper",y.length,j.original,f.default.helpers.simpleId(j))}},PathExpression:function(u){this.addDepth(u.depth),this.opcode("getContext",u.depth);var n=u.parts[0],x=f.default.helpers.scopedId(u),y=!u.depth&&!x&&this.blockParamIndex(n);y?this.opcode("lookupBlockParam",y,u.parts):n?u.data?(this.options.data=!0,this.opcode("lookupData",u.depth,u.parts,u.strict)):this.opcode("lookupOnContext",u.parts,u.falsy,u.strict,x):this.opcode("pushContext")},StringLiteral:function(u){this.opcode("pushString",u.value)},NumberLiteral:function(u){this.opcode("pushLiteral",u.value)},BooleanLiteral:function(u){this.opcode("pushLiteral",u.value)},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")},NullLiteral:function(){this.opcode("pushLiteral","null")},Hash:function(u){var n=u.pairs,x=0,y=n.length;for(this.opcode("pushHash");x<y;x++)this.pushParam(n[x].value);for(;x--;)this.opcode("assignToHash",n[x].key);this.opcode("popHash")},opcode:function(u){this.opcodes.push({opcode:u,args:b.call(arguments,1),loc:this.sourceNode[0].loc})},addDepth:function(u){!u||(this.useDepths=!0)},classifySexpr:function(u){var n=f.default.helpers.simpleId(u.path),x=n&&!!this.blockParamIndex(u.path.parts[0]),y=!x&&f.default.helpers.helperExpression(u),j=!x&&(y||n);if(j&&!y){var I=u.path.parts[0],C=this.options;C.knownHelpers[I]?y=!0:C.knownHelpersOnly&&(j=!1)}return y?"helper":j?"ambiguous":"simple"},pushParams:function(u){for(var n=0,x=u.length;n<x;n++)this.pushParam(u[n])},pushParam:function(u){var n=u.value!=null?u.value:u.original||"";if(this.stringParams)n.replace&&(n=n.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),u.depth&&this.addDepth(u.depth),this.opcode("getContext",u.depth||0),this.opcode("pushStringParam",n,u.type),u.type==="SubExpression"&&this.accept(u);else{if(this.trackIds){var x=void 0;if(u.parts&&!f.default.helpers.scopedId(u)&&!u.depth&&(x=this.blockParamIndex(u.parts[0])),x){var y=u.parts.slice(1).join(".");this.opcode("pushId","BlockParam",x,y)}else n=u.original||n,n.replace&&(n=n.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",u.type,n)}this.accept(u)}},setupFullMustacheParams:function(u,n,x,y){var j=u.params;return this.pushParams(j),this.opcode("pushProgram",n),this.opcode("pushProgram",x),u.hash?this.accept(u.hash):this.opcode("emptyHash",y),j},blockParamIndex:function(u){for(var n=0,x=this.options.blockParams.length;n<x;n++){var y=this.options.blockParams[n],j=y&&s.indexOf(y,u);if(y&&j>=0)return[n,j]}}};function v(l,u,n){if(l==null||typeof l!="string"&&l.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+l);u=u||{},"data"in u||(u.data=!0),u.compat&&(u.useDepths=!0);var x=n.parse(l,u),y=new n.Compiler().compile(x,u);return new n.JavaScriptCompiler().compile(y,u)}function O(l,u,n){if(u===void 0&&(u={}),l==null||typeof l!="string"&&l.type!=="Program")throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+l);u=s.extend({},u),"data"in u||(u.data=!0),u.compat&&(u.useDepths=!0);var x=void 0;function y(){var I=n.parse(l,u),C=new n.Compiler().compile(I,u),S=new n.JavaScriptCompiler().compile(C,u,void 0,!0);return n.template(S)}function j(I,C){return x||(x=y()),x.call(this,I,C)}return j._setup=function(I){return x||(x=y()),x._setup(I)},j._child=function(I,C,S,T){return x||(x=y()),x._child(I,C,S,T)},j}function p(l,u){if(l===u)return!0;if(s.isArray(l)&&s.isArray(u)&&l.length===u.length){for(var n=0;n<l.length;n++)if(!p(l[n],u[n]))return!1;return!0}}function m(l){if(!l.path.parts){var u=l.path;l.path={type:"PathExpression",data:!1,depth:0,parts:[u.original+""],original:u.original+"",loc:u.loc}}}},"8xT2":function(a,o,t){var e=t("wyZ4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"96lO":function(a,o,t){"use strict";var e=t("P7XM"),r=t("Yh+D"),i=t("6Zju"),s=t("Dohz"),c=function(){};function f(b,h,v,O,p){var m=r.addPath(b,h);c(m);var l=this;i.call(this,b,v),this.poll=new s(O,m,p),this.poll.on("message",function(u){c("poll message",u),l.emit("message",u)}),this.poll.once("close",function(u,n){c("poll close",u,n),l.poll=null,l.emit("close",u,n),l.close()})}e(f,i),f.prototype.close=function(){i.prototype.close.call(this),c("close"),this.removeAllListeners(),this.poll&&(this.poll.abort(),this.poll=null)},a.exports=f},"99Y8":function(a,o,t){var e=t("FqdI");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"9E3j":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-folding-cube {
  width: 27px;
  height: 27px;
  position: relative;
  -ms-transform: rotate(45deg);
      transform: rotateZ(45deg); }

.sk-folding-cube > div {
  background-color: initial;
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -ms-transform: scale(1.1);
  transform: scale(1.1); }

.sk-folding-cube > div::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: currentColor;
  animation: sk-foldCubeAngle 2.4s infinite linear both;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%; }

.sk-folding-cube > div:nth-child(2) {
  -ms-transform: scale(1.1) rotate(90deg);
      transform: scale(1.1) rotateZ(90deg); }

.sk-folding-cube > div:nth-child(4) {
  -ms-transform: scale(1.1) rotate(180deg);
      transform: scale(1.1) rotateZ(180deg); }

.sk-folding-cube > div:nth-child(3) {
  -ms-transform: scale(1.1) rotate(270deg);
      transform: scale(1.1) rotateZ(270deg); }

.sk-folding-cube > div:nth-child(2)::before {
  animation-delay: 0.3s; }

.sk-folding-cube > div:nth-child(4)::before {
  animation-delay: 0.6s; }

.sk-folding-cube > div:nth-child(3)::before {
  animation-delay: 0.9s; }

@keyframes sk-foldCubeAngle {
  0%, 10% {
    transform: perspective(140px) rotateX(-180deg);
    opacity: 0; }
  25%, 75% {
    transform: perspective(140px) rotateX(0deg);
    opacity: 1; }
  90%, 100% {
    transform: perspective(140px) rotateY(180deg);
    opacity: 0; } }
`,""])},"9KJ+":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DefaultDomain-module-container-2E3b {
  margin-block-start: -6px;
  margin-block-end: 2px; }
  .DefaultDomain-module-container-2E3b .DefaultDomain-module-divider-1w3b {
    border-color: #ced6d9;
    margin-block-start: 24px;
    margin-block-end: 24px;
    opacity: 0.5; }
`,""]),o.locals={container:"DefaultDomain-module-container-2E3b",divider:"DefaultDomain-module-divider-1w3b"}},"9NJp":function(a,o,t){var e=t("WclJ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"9Pyt":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("pVnL")),i=e(t("lSNA")),s=e(t("QILm")),c=e(t("cDcd")),f=e(t("rf6O")),b=e(t("hSE2")),h=e(t("6JHZ")),v=e(t("ml1U")),O=e(t("2imF")),p=e(t("ryzx")),m=t("etXo"),l=["fontAwesome","svgIcon","width","minWidth","height","fontSize","padding","position","bottom","layout","primary","secondary","destructive","disabled","noHover","filled","big","small","specialMobileMeasures","text","className","addSvgIdPrefix","iconSize","leftIcon","rightIcon","domAttrs"];function u(P,L){var k=Object.keys(P);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(P);L&&(G=G.filter(function(Y){return Object.getOwnPropertyDescriptor(P,Y).enumerable})),k.push.apply(k,G)}return k}function n(P){for(var L=1;L<arguments.length;L++){var k=arguments[L]!=null?arguments[L]:{};L%2?u(Object(k),!0).forEach(function(G){(0,i.default)(P,G,k[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(k)):u(Object(k)).forEach(function(G){Object.defineProperty(P,G,Object.getOwnPropertyDescriptor(k,G))})}return P}var x=f.default.string,y=f.default.func,j=f.default.bool,I=f.default.object,C=f.default.number,S=m.ICON_TYPE.FONT_AWESOME,T=m.ICON_TYPE.FONT_ICON,R=m.ICON_TYPE.SVG,M=c.default.forwardRef(function(P,L){var k,G,Y=P.fontAwesome,J=P.svgIcon,X=P.width,at=P.minWidth,z=P.height,F=P.fontSize,rt=P.padding,ct=P.position,dt=P.bottom,vt=P.layout,Ot=P.primary,Mt=P.secondary,Rt=P.destructive,Yt=P.disabled,re=P.noHover,Xt=P.filled,pe=P.big,de=P.small,se=P.specialMobileMeasures,Qt=P.text,St=P.className,Ut=P.addSvgIdPrefix,zt=P.iconSize,Jt=P.leftIcon,ge=P.rightIcon,fe=P.domAttrs,ce=(0,s.default)(P,l),Vt=T;J?Vt=R:Y&&(Vt=S);var nt={width:X||null,minWidth:X?"0px":at,height:z||null,fontSize:F||null,padding:rt,position:ct,bottom:dt},st=(0,b.default)(St,h.default.main,h.default[vt],(k={},(0,i.default)(k,h.default.primary,Ot&&!Mt&&!Rt),(0,i.default)(k,h.default.secondary,Mt),(0,i.default)(k,h.default.destructive,Rt),(0,i.default)(k,h.default.disabled,Yt),(0,i.default)(k,h.default.noHover,re),(0,i.default)(k,h.default.filled,Xt),(0,i.default)(k,h.default.big,pe),(0,i.default)(k,h.default.mobile,se),(0,i.default)(k,h.default.small,de),k)),ot=(0,b.default)(h.default["left-icon"],(0,i.default)({},h.default["icon-no-padding"],!Qt)),pt={leftIcon:Jt,leftIconStyles:ot,addSvgIdPrefix:Ut,iconType:Vt,iconSize:zt,className:(0,b.default)(h.default["left-icon"],(G={},(0,i.default)(G,h.default["icon-no-padding"],!Qt),(0,i.default)(G,Jt,!Y),G))},gt={addSvgIdPrefix:Ut,"data-auto":"right-icon",className:(0,b.default)(h.default["right-icon"],(0,i.default)({},ge,Y)),iconType:Vt,size:zt,name:ge};return c.default.createElement("div",(0,r.default)({ref:L,className:(0,b.default)(st),onClick:A(n({disabled:Yt},ce)),style:nt,"data-enabled":!Yt,"data-auto":ce["data-auto"],role:"button"},fe),c.default.createElement(v.default,pt),Qt,ge?c.default.createElement(O.default,gt):c.default.createElement("span",null))});M.propTypes={"data-auto":x,className:x,text:x,rightIcon:x,leftIcon:x,onClick:y,primary:j,noHover:j,secondary:j,destructive:j,big:j,small:j,layout:x,fontAwesome:j,disabled:j,fontSize:x,width:x,minWidth:x,height:x,position:x,bottom:x,padding:x,domAttrs:I,filled:j,svgIcon:j,iconSize:C,shouldStopPropagation:j,addSvgIdPrefix:j,href:x,newWindow:j,preventDoubleClick:j,debounce:C,specialMobileMeasures:j};function A(P){var L=P.disabled,k=P.href,G=P.newWindow,Y=P.shouldStopPropagation,J=P.onClick,X=P.preventDoubleClick,at=P.debounce,z=function(dt){Y&&dt.stopPropagation(),!L&&(J(dt),k&&(G?window.open(k,"_blank"):window.open(k,"_self")))};if(X||at){var F=at||500,rt=p.default.debounce(z,F,{leading:!0,trailing:!1});return function(ct){ct&&ct.stopPropagation();for(var dt=arguments.length,vt=new Array(dt>1?dt-1:0),Ot=1;Ot<dt;Ot++)vt[Ot-1]=arguments[Ot];return rt.apply(void 0,[ct].concat(vt))}}return z}M.defaultProps={"data-auto":"button",primary:!0,onClick:function(){},fontAwesome:!1,svgIcon:!1,shouldStopPropagation:!1,domAttrs:{},preventDoubleClick:!1,specialMobileMeasures:!1,minWidth:null,newWindow:!0};var W=c.default.memo(M);o.default=W},"9QEl":function(a,o,t){var e=t("HxU/");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"9RJa":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("2imF")),s=e(t("hSE2")),c=e(t("vPBx")),f=e(t("cDcd")),b=e(t("sqGa")),h=function(p){var m=p.navItems,l=p.selectedItem,u=p.onItemSelected,n=m.length;return f.default.createElement(f.default.Fragment,null,m.map(function(x){var y=x.itemId,j=x.title,I=x.icon,C=x.dataAuto,S=x.children,T=S===void 0?[]:S,R=T.length>0,M=y===l||T.some(function(P){return P.itemId===l}),A=R&&n>1?f.default.createElement(i.default,{name:"new-bird-arrow",className:(0,s.default)((0,r.default)({},c.default.rotate,M)),iconType:"svg",size:14,"data-auto":"top-item-arrow-icon"}):null,W=I?f.default.createElement(i.default,{name:I,iconType:"svg",className:(0,s.default)((0,r.default)({},c.default.elementSelected,M)),size:18,"data-auto":"top-item-left-icon"}):null;return f.default.createElement(f.default.Fragment,{key:y},f.default.createElement(b.default,{itemId:y,title:j,leftElement:W,rightElement:A,onClick:u,hasChildren:R,selected:M,dataAuto:C}),R&&M&&f.default.createElement("ul",{className:c.default.children},T.map(function(P){return f.default.createElement(b.default,{key:P.itemId,itemId:P.itemId,title:P.title,onClick:u,isChild:!0,dataAuto:P.dataAuto,selected:P.itemId===l})})))}))},v=h;o.default=v},"9dXR":function(a,o,t){var e=t("z8gy");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"9dab":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.RevertPopup-module-domain-1U3b {
  padding-block-start: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; }
`,""]),o.locals={domain:"RevertPopup-module-domain-1U3b"}},"9m2C":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavLock-container-1x3b {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(100, 114, 120, 0.75);
  z-index: 1; }
`,""]),o.locals={container:"NavLock-container-1x3b"}},"9uVA":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardFooter-module-footer-buttons-3u3b {
  display: flex;
  flex: 1;
  justify-content: space-between; }
  .CardFooter-module-footer-buttons-3u3b .CardFooter-module-left-group-2c3b,
  .CardFooter-module-footer-buttons-3u3b .CardFooter-module-right-group-3V3b {
    flex: 1;
    display: flex;
    align-items: center; }
  .CardFooter-module-footer-buttons-3u3b .CardFooter-module-right-group-3V3b {
    justify-content: flex-end; }
    .CardFooter-module-footer-buttons-3u3b .CardFooter-module-right-group-3V3b .CardFooter-module-primary-button-OG3b {
      height: 25px;
      padding-inline-start: 22px;
      padding-inline-end: 22px;
      margin-inline-start: 8px; }
`,""]),o.locals={"footer-buttons":"CardFooter-module-footer-buttons-3u3b","left-group":"CardFooter-module-left-group-2c3b","right-group":"CardFooter-module-right-group-3V3b","primary-button":"CardFooter-module-primary-button-OG3b"}},"9v4T":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.GroupCellRenderer-module-group-cell-2c3b {
  display: flex;
  align-items: center;
  height: 56px; }
  .GroupCellRenderer-module-group-cell-2c3b .GroupCellRenderer-module-icon-2C3b {
    cursor: pointer; }
  .GroupCellRenderer-module-group-cell-2c3b .GroupCellRenderer-module-header-1h3b {
    font-weight: 500;
    margin-inline-start: 15px; }
`,""]),o.locals={"group-cell":"GroupCellRenderer-module-group-cell-2c3b",icon:"GroupCellRenderer-module-icon-2C3b",header:"GroupCellRenderer-module-header-1h3b"}},"9wH6":function(a,o,t){"use strict";var e=t("raCH").EventEmitter,r=t("P7XM");function i(){var s=this;e.call(this),this.to=setTimeout(function(){s.emit("finish",200,"{}")},i.timeout)}r(i,e),i.prototype.close=function(){clearTimeout(this.to)},i.timeout=2e3,a.exports=i},"9xji":function(a,o,t){var e=t("ZMoh");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},A3El:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ActionCard-container-1m3b.ActionCard-container-1m3b {
  display: grid;
  grid-template-columns: 20px auto auto;
  grid-template-rows: auto 1fr auto;
  column-gap: 10px;
  row-gap: 12px;
  padding: 20px 20px 20px; }
  .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-icon-3O3b {
    height: 21px;
    align-self: center;
    color: var(--text-on-light); }
  .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-title-3T3b {
    grid-column: 2 / span 2;
    grid-row: 1;
    font-size: 16px;
    font-weight: bold;
    font-family: Roboto; }
  .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-text-1h3b {
    grid-column: 2 / span 2;
    grid-row: 2; }
  .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b {
    display: flex;
    align-items: center;
    margin-block-start: 4px;
    grid-column: 2;
    grid-row: 3; }
    .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b .ActionCard-button-container-2u3b {
      text-decoration: none; }
      .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b .ActionCard-button-container-2u3b .ActionCard-button-2M3b {
        min-width: 91px;
        height: 25px; }
    .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b .ActionCard-video-2T3b {
      display: flex;
      align-self: center;
      margin-inline-start: 8px;
      width: 21px;
      height: 21px; }
      .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b .ActionCard-video-2T3b .ActionCard-play-icon-3A3b {
        color: #617379; }
        .ActionCard-container-1m3b.ActionCard-container-1m3b .ActionCard-links-container-3L3b .ActionCard-video-2T3b .ActionCard-play-icon-3A3b:hover {
          color: var(--button-color); }
`,""]),o.locals={container:"ActionCard-container-1m3b",icon:"ActionCard-icon-3O3b",title:"ActionCard-title-3T3b",text:"ActionCard-text-1h3b","links-container":"ActionCard-links-container-3L3b","button-container":"ActionCard-button-container-2u3b",button:"ActionCard-button-2M3b",video:"ActionCard-video-2T3b","play-icon":"ActionCard-play-icon-3A3b"}},A77e:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.UserNavItem-username-item-Vn3b {
  width: 176px;
  font-size: 13px;
  justify-content: center; }

.UserNavItem-username-item-children-2F3b.UserNavItem-username-item-children-2F3b {
  width: 222px; }

.UserNavItem-username-item-text-container-3d3b {
  flex: 0 1 auto; }

.UserNavItem-username-item-text-2w3b {
  max-width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; }
`,""]),o.locals={"username-item":"UserNavItem-username-item-Vn3b","username-item-children":"UserNavItem-username-item-children-2F3b","username-item-text-container":"UserNavItem-username-item-text-container-3d3b","username-item-text":"UserNavItem-username-item-text-2w3b"}},AEAD:function(a,o,t){"use strict";var e=function(){};a.exports=function(r){return{filterToEnabled:function(i,s){var c={main:[],facade:[]};return i?typeof i=="string"&&(i=[i]):i=[],r.forEach(function(f){if(!!f){if(f.transportName==="websocket"&&s.websocket===!1){e("disabled from server","websocket");return}if(i.length&&i.indexOf(f.transportName)===-1){e("not in whitelist",f.transportName);return}f.enabled(s)?(e("enabled",f.transportName),c.main.push(f),f.facadeTransport&&c.facade.push(f.facadeTransport)):e("disabled",f.transportName)}}),c}}}},AEXz:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainInput-module-input-wrapper-Ov3b {
  margin-block-end: 79px;
  position: relative;
  display: flex; }
  .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-input-1m3b {
    font-size: 14px;
    width: 363px;
    height: 35px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    border: 1px solid #ced6d9; }
    .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-input-1m3b:focus {
      border-color: #a1abb0; }
    .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-input-1m3b.DomainInput-module-with-error-1J3b {
      border-color: #e7463a; }
  .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-disabled-input-3q3b {
    width: 107px;
    color: #828894; }
  .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-dot-divider-1u3b {
    margin-inline-start: 8px;
    margin-inline-end: 8px;
    margin-block-start: 8px; }
  .DomainInput-module-input-wrapper-Ov3b .DomainInput-module-error-message-2J3b {
    top: 36px;
    left: 126px; }
`,""]),o.locals={"input-wrapper":"DomainInput-module-input-wrapper-Ov3b",input:"DomainInput-module-input-1m3b","with-error":"DomainInput-module-with-error-1J3b","disabled-input":"DomainInput-module-disabled-input-3q3b","dot-divider":"DomainInput-module-dot-divider-1u3b","error-message":"DomainInput-module-error-message-2J3b"}},AMj6:function(a,o,t){var e=t("kHCg");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},AQP1:function(a,o,t){var e=t("/E5Q");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"AY/r":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`@keyframes sk-fade-in {
  0% {
    opacity: 0; }
  50% {
    opacity: 0; }
  100% {
    opacity: 1; } }

.sk-fade-in {
  animation: sk-fade-in 2s; }

.sk-fade-in-half-second {
  animation: sk-fade-in 1s; }

.sk-fade-in-quarter-second {
  animation: sk-fade-in 0.5s; }
`,""])},"B/qk":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,400italic,700,700italic,300italic|Roboto|Roboto+Condensed:300);",""]),o.push([a.i,`html {
  height: 100%;
  font-size: small;
  font-family: 'Source Sans Pro', sans-serif; }
  html *,
  html *::before,
  html *::after {
    box-sizing: border-box;
    text-decoration-skip-ink: none; }
  html ::-webkit-scrollbar {
    width: 14px;
    height: 18px;
    background-color: transparent;
    padding: 0; }
  html ::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid rgba(0, 0, 0, 0);
    width: 95%;
    background-clip: padding-box;
    -webkit-border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: -1px -1px 0px rgba(0, 0, 0, 0.05), inset 1px 1px 0px rgba(0, 0, 0, 0.05); }
  html ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none; }
  html ::-webkit-scrollbar-corner {
    background-color: transparent; }

body:dir(ltr){
  padding-right: 0; }

body:dir(rtl){
  padding-left: 0; }

body:dir(ltr){
  padding-left: 0; }

body:dir(rtl){
  padding-right: 0; }

body:dir(ltr){
  margin-right: 0; }

body:dir(rtl){
  margin-left: 0; }

body:dir(ltr){
  margin-left: 0; }

body:dir(rtl){
  margin-right: 0; }

body {
  height: 100%;
  padding-top: 0;
  padding-inline-end: 0;
  padding-bottom: 0;
  padding-inline-start: 0;
  margin-top: 0;
  margin-inline-end: 0;
  margin-bottom: 0;
  margin-inline-start: 0; }
`,""])},BEYS:function(a,o,t){"use strict";o.__esModule=!0,o.HandlebarsEnvironment=n;function e(y){return y&&y.__esModule?y:{default:y}}var r=t("sTlx"),i=t("tpBh"),s=e(i),c=t("6f8O"),f=t("TyMH"),b=t("HB8c"),h=e(b),v=t("k95Q"),O="4.7.6";o.VERSION=O;var p=8;o.COMPILER_REVISION=p;var m=7;o.LAST_COMPATIBLE_COMPILER_REVISION=m;var l={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};o.REVISION_CHANGES=l;var u="[object Object]";function n(y,j,I){this.helpers=y||{},this.partials=j||{},this.decorators=I||{},c.registerDefaultHelpers(this),f.registerDefaultDecorators(this)}n.prototype={constructor:n,logger:h.default,log:h.default.log,registerHelper:function(j,I){if(r.toString.call(j)===u){if(I)throw new s.default("Arg not supported with multiple helpers");r.extend(this.helpers,j)}else this.helpers[j]=I},unregisterHelper:function(j){delete this.helpers[j]},registerPartial:function(j,I){if(r.toString.call(j)===u)r.extend(this.partials,j);else{if(typeof I=="undefined")throw new s.default('Attempting to register a partial called "'+j+'" as undefined');this.partials[j]=I}},unregisterPartial:function(j){delete this.partials[j]},registerDecorator:function(j,I){if(r.toString.call(j)===u){if(I)throw new s.default("Arg not supported with multiple decorators");r.extend(this.decorators,j)}else this.decorators[j]=I},unregisterDecorator:function(j){delete this.decorators[j]},resetLoggedPropertyAccesses:function(){v.resetLoggedProperties()}};var x=h.default.log;o.log=x,o.createFrame=r.createFrame,o.logger=h.default},BIg8:function(a,o,t){var e=t("tvWm");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},BxbG:function(a,o,t){var e=t("mIIl");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},By0W:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PaymentRequestsNavItem-payment-requests-2H3b {
  width: initial;
  padding-inline-start: 40px;
  padding-inline-end: 40px; }
`,""]),o.locals={"payment-requests":"PaymentRequestsNavItem-payment-requests-2H3b"}},C08I:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("vPBx")),i=e(t("kyEO")),s=e(t("cDcd")),c=e(t("sqGa")),f=e(t("2imF")),b=function(O){var p=O.externalNavItems,m=p===void 0?[]:p,l=O.onItemSelected;return m.length?s.default.createElement(s.default.Fragment,null,s.default.createElement(i.default,{className:r.default.divider}),m.map(function(u){return s.default.createElement(c.default,{key:u.itemId,itemId:u.itemId,title:u.title,leftElement:u.icon?s.default.createElement(f.default,{name:u.icon,iconType:"svg",size:18,"data-auto":"external-link-left-icon"}):null,rightElement:s.default.createElement(f.default,{name:"go-to-external-link",iconType:"svg",size:14,"data-auto":"go-to-external-link-icon"}),onClick:l,dataAuto:u.dataAuto,isChild:!0})})):null},h=b;o.default=h},C5xZ:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("lSNA")),s=e(t("J4zp")),c=m(t("cDcd")),f=e(t("rf6O")),b=e(t("hSE2")),h=e(t("g6w0")),v=m(t("2imF")),O=e(t("TLlh"));function p(n){if(typeof WeakMap!="function")return null;var x=new WeakMap,y=new WeakMap;return(p=function(I){return I?y:x})(n)}function m(n,x){if(!x&&n&&n.__esModule)return n;if(n===null||r(n)!=="object"&&typeof n!="function")return{default:n};var y=p(x);if(y&&y.has(n))return y.get(n);var j={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in n)if(C!=="default"&&Object.prototype.hasOwnProperty.call(n,C)){var S=I?Object.getOwnPropertyDescriptor(n,C):null;S&&(S.get||S.set)?Object.defineProperty(j,C,S):j[C]=n[C]}return j.default=n,y&&y.set(n,j),j}var l=function(x){var y=x.steps,j=x.currentStep,I=x.className,C=x.onClick,S=x.isNumerical,T=S===void 0?!1:S,R=x.isDisabled,M=R===void 0?!1:R,A=(0,c.useState)(j),W=(0,s.default)(A,2),P=W[0],L=W[1];(0,c.useEffect)(function(){j>P&&L(j)},[j]);var k=function(Y){return function(){Y<=P&&!M&&C&&C(Y)}};return c.default.createElement("div",{className:(0,b.default)(h.default.stepper,I)},y.map(function(G,Y){var J,X=G.title;return c.default.createElement(c.Fragment,{key:X},c.default.createElement("div",{onClick:k(Y),className:(0,b.default)(h.default.step,(J={},(0,i.default)(J,h.default.clickable,Y<=P&&!M),(0,i.default)(J,h.default.current,j===Y),(0,i.default)(J,h.default.underline,j===Y&&!T),J))},T&&c.default.createElement(O.default,{isDone:Y<P,isActive:j===Y,isDisabled:M,stepNumber:Y+1}),X),Y!==y.length-1&&c.default.createElement(v.default,{name:"angle-right",size:15,iconType:v.Type.FONT_AWESOME,className:h.default.arrow}))}))};l.propTypes={currentStep:f.default.number.isRequired,className:f.default.string,onClick:f.default.func,steps:f.default.arrayOf(f.default.shape({title:f.default.string.isRequired}).isRequired).isRequired,isNumerical:f.default.bool,isDisabled:f.default.bool};var u=l;o.default=u},"C9C+":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-rotating-plane > div {
  width: 27px;
  height: 27px;
  background-color: currentColor;
  animation: sk-rotateplane 1.2s infinite ease-in-out; }

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }
`,""])},C9qb:function(a,o,t){var e=t("cfjV");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},CAM5:function(a,o,t){var e=t("XJPH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},CQBh:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.RecordsTable-module-table-3h3b {
  border: solid 1px rgba(206, 214, 217, 0.5);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  margin-block-end: 18px; }
  .RecordsTable-module-table-3h3b [class*='ag-header-container'] {
    border-bottom: solid 1px rgba(206, 214, 217, 0.5); }
  .RecordsTable-module-table-3h3b .RecordsTable-module-row-1r3b.RecordsTable-module-row-1r3b:last-child {
    border-bottom-style: none; }
  .RecordsTable-module-table-3h3b .RecordsTable-module-cell-ra3b {
    font-size: 14px; }
    .RecordsTable-module-table-3h3b .RecordsTable-module-cell-ra3b [class*='ag-react-container'] {
      flex: 1; }
`,""]),o.locals={table:"RecordsTable-module-table-3h3b",row:"RecordsTable-module-row-1r3b",cell:"RecordsTable-module-cell-ra3b"}},CVzT:function(a,o,t){var e=t("A77e");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Cc2C:function(a,o,t){var e=t("3o9B");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},CjgG:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.MySubscriptions-module-subscriptions-2O3b {
  padding-block-start: 56px;
  padding-inline-start: 117px;
  padding-inline-end: 117px; }
  .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b {
    border-radius: 2px;
    margin-block-start: 24px;
    margin-block-end: 24px;
    margin-inline-start: auto;
    margin-inline-end: auto;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }
    .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-header-333b {
      font-family: Roboto;
      font-size: 16px;
      font-weight: bold;
      margin-inline-start: 24px;
      padding-block-start: 18px;
      padding-block-end: 16px; }
    .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b {
      margin-block-start: 6px;
      padding: 0 24px;
      width: 100%; }
      .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-row-2G3b {
        border-top: 1px solid transparent; }
        .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-row-2G3b:last-of-type {
          border-bottom: none; }
        .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-row-2G3b:first-of-type .MySubscriptions-module-cell-2i3b {
          border-top: none; }
      .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-group-row-3d3b {
        border-top: 1px solid #dde2eb; }
      .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-cell-2i3b {
        border-top: 1px solid #e8e8e8;
        box-sizing: border-box;
        align-items: flex-start;
        padding-block-start: 19px;
        padding-inline-start: 15px; }
        .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-active-subscriptions-2T3b .MySubscriptions-module-table-container-9v3b .MySubscriptions-module-cell-2i3b.MySubscriptions-module-status-cell-243b {
          align-items: center;
          padding-block-end: 19px; }
  .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-subheader-213b {
    display: inline-flex;
    align-items: center; }
    .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-subheader-213b .MySubscriptions-module-feedbackIcon-3H3b {
      margin-inline-start: 24px;
      cursor: pointer;
      color: #617379; }
  .MySubscriptions-module-subscriptions-2O3b .MySubscriptions-module-header-193b {
    font-family: Roboto;
    font-size: 30px;
    font-weight: bold; }
`,""]),o.locals={subscriptions:"MySubscriptions-module-subscriptions-2O3b","active-subscriptions":"MySubscriptions-module-active-subscriptions-2T3b","table-header":"MySubscriptions-module-table-header-333b","table-container":"MySubscriptions-module-table-container-9v3b",row:"MySubscriptions-module-row-2G3b",cell:"MySubscriptions-module-cell-2i3b","group-row":"MySubscriptions-module-group-row-3d3b","status-cell":"MySubscriptions-module-status-cell-243b",subheader:"MySubscriptions-module-subheader-213b",feedbackIcon:"MySubscriptions-module-feedbackIcon-3H3b",header:"MySubscriptions-module-header-193b"}},Cm69:function(a,o,t){"use strict";(function(e){o.__esModule=!0,o.default=function(r){var i=typeof e!="undefined"?e:window,s=i.Handlebars;r.noConflict=function(){return i.Handlebars===r&&(i.Handlebars=s),r}},a.exports=o.default}).call(this,t("yLpj"))},DEEt:function(a,o,t){"use strict";var e=t("k4gB"),r=t("cDcd"),i=t.n(r),s=t("ddYX");class c extends r.Component{render(){return this.props.children}componentDidCatch(b,h){this.sendLogMessage(b,h),this.props.onError&&this.props.onError()}sendLogMessage(b,h){Object(s.b)({logLevel:s.a.ERROR,dataString:Object.assign({},this.props.errorData,{errorInfo:h,error:b})})}}c.displayName="ErrorBoundary",c.propTypes={onError:e.b.func,errorData:e.b.object},o.a=c},DSbB:function(a,o,t){var e=t("QZfG");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Dbio:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Status-module-status-tooltip-rQ3b {
  display: inline-flex;
  align-items: center;
  justify-content: center; }

.Status-module-status-1B3b {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 500;
  height: 22px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  padding-block-start: 0;
  padding-block-end: 0; }
  .Status-module-status-1B3b.Status-module-with-tooltip-3y3b {
    cursor: pointer; }
  .Status-module-status-1B3b.Status-module-positive-1V3b {
    background-color: #e2ffed;
    color: #004a26; }
  .Status-module-status-1B3b.Status-module-neutral-2I3b {
    background-color: #f4f4f4;
    color: #2a354b; }
  .Status-module-status-1B3b.Status-module-error-2D3b {
    background-color: #fff3f3;
    color: #9a0000; }
  .Status-module-status-1B3b.Status-module-pending-1W3b {
    background-color: #ffede3;
    color: #7a3600; }
  .Status-module-status-1B3b.Status-module-purple-2A3b {
    background-color: #f1e8fa;
    color: #6c259b; }
  .Status-module-status-1B3b.Status-module-turquoise-1I3b {
    background-color: #e9fafa;
    color: #085558; }
  .Status-module-status-1B3b.Status-module-darkgrey-2u3b {
    background-color: #f2eeee;
    color: #38212f; }
`,""]),o.locals={"status-tooltip":"Status-module-status-tooltip-rQ3b",status:"Status-module-status-1B3b","with-tooltip":"Status-module-with-tooltip-3y3b",positive:"Status-module-positive-1V3b",neutral:"Status-module-neutral-2I3b",error:"Status-module-error-2D3b",pending:"Status-module-pending-1W3b",purple:"Status-module-purple-2A3b",turquoise:"Status-module-turquoise-1I3b",darkgrey:"Status-module-darkgrey-2u3b"}},Dh16:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.TemplateIntentOption-main-3c3b {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-block-start: 0;
  padding-block-end: 0;
  padding-inline-start: 10px;
  padding-inline-end: 10px;
  word-break: break-word;
  border: 1px solid #ced6d9;
  border-radius: 4px;
  box-shadow: none; }
  .TemplateIntentOption-main-3c3b:hover {
    border-color: var(--text-on-light);
    box-shadow: 1px 1px 2px 0 rgba(75, 75, 85, 0.2); }
    .TemplateIntentOption-main-3c3b:hover .TemplateIntentOption-icon-2k3b,
    .TemplateIntentOption-main-3c3b:hover .TemplateIntentOption-description-2g3b {
      color: var(--text-on-light); }
  .TemplateIntentOption-main-3c3b .TemplateIntentOption-icon-2k3b.TemplateIntentOption-lifestyle-173b svg {
    width: 34px; }
  .TemplateIntentOption-main-3c3b .TemplateIntentOption-content-2P3b {
    display: flex;
    flex-direction: column;
    padding-block-start: 16px;
    padding-block-end: 16px; }
    .TemplateIntentOption-main-3c3b .TemplateIntentOption-content-2P3b .TemplateIntentOption-description-2g3b {
      margin-block-start: 13px; }
`,""]),o.locals={main:"TemplateIntentOption-main-3c3b",icon:"TemplateIntentOption-icon-2k3b",description:"TemplateIntentOption-description-2g3b",lifestyle:"TemplateIntentOption-lifestyle-173b",content:"TemplateIntentOption-content-2P3b"}},Diiz:function(a,o,t){var e=t("pNm2");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Do56:function(a,o,t){var e=t("cCUN");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Do6s:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ViewAsClientPopup-container-2k3b {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  padding-inline-start: 50px;
  padding-inline-end: 50px;
  padding-block-start: 15px;
  padding-block-end: 15px; }
  .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b {
    width: 100%;
    display: flex; }
    .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b .ViewAsClientPopup-textbox-2y3b {
      flex: 1; }
      .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b .ViewAsClientPopup-textbox-2y3b .ViewAsClientPopup-textbox-input-3x3b {
        height: 35px;
        box-shadow: none;
        border-radius: 3px 0 0 3px; }
    .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b .ViewAsClientPopup-copy-button-1s3b {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35px;
      border: solid 1px #617379;
      background-color: #617379;
      border-radius: 0 3px 3px 0;
      color: white;
      font-size: 14px;
      font-family: Source Sans Pro;
      user-select: none;
      cursor: pointer;
      padding-inline-start: 35px;
      padding-inline-end: 35px; }
    .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b .ViewAsClientPopup-copy-toast-293b {
      margin-inline-end: 16px; }
    .ViewAsClientPopup-container-2k3b .ViewAsClientPopup-textbox-with-button-1B3b .ViewAsClientPopup-text-3R3b {
      font-family: Roboto;
      text-align: center;
      padding-block-start: 7px;
      padding-inline-end: 0px;
      padding-block-end: 7px;
      padding-inline-start: 0px; }

.ViewAsClientPopup-view-as-client-popup-1H3b {
  height: 100%; }

.ViewAsClientPopup-view-as-client-popup-close-icon-2E3b.ViewAsClientPopup-view-as-client-popup-close-icon-2E3b {
  right: 15px;
  top: 15px; }
`,""]),o.locals={container:"ViewAsClientPopup-container-2k3b","textbox-with-button":"ViewAsClientPopup-textbox-with-button-1B3b",textbox:"ViewAsClientPopup-textbox-2y3b","textbox-input":"ViewAsClientPopup-textbox-input-3x3b","copy-button":"ViewAsClientPopup-copy-button-1s3b","copy-toast":"ViewAsClientPopup-copy-toast-293b",text:"ViewAsClientPopup-text-3R3b","view-as-client-popup":"ViewAsClientPopup-view-as-client-popup-1H3b","view-as-client-popup-close-icon":"ViewAsClientPopup-view-as-client-popup-close-icon-2E3b"}},Dohz:function(a,o,t){"use strict";var e=t("P7XM"),r=t("raCH").EventEmitter,i=function(){};function s(c,f,b){i(f),r.call(this),this.Receiver=c,this.receiveUrl=f,this.AjaxObject=b,this._scheduleReceiver()}e(s,r),s.prototype._scheduleReceiver=function(){i("_scheduleReceiver");var c=this,f=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);f.on("message",function(b){i("message",b),c.emit("message",b)}),f.once("close",function(b,h){i("close",b,h,c.pollIsClosing),c.poll=f=null,c.pollIsClosing||(h==="network"?c._scheduleReceiver():(c.emit("close",b||1006,h),c.removeAllListeners()))})},s.prototype.abort=function(){i("abort"),this.removeAllListeners(),this.pollIsClosing=!0,this.poll&&this.poll.abort()},a.exports=s},"E/eW":function(a,o,t){var e=t("1qLv");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},E7CR:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.AdminActionsPopup-container-2I3b {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  direction: ltr; }
  .AdminActionsPopup-container-2I3b .AdminActionsPopup-welcome-3F3b {
    margin-top: 20px;
    margin-left: 40px; }
  .AdminActionsPopup-container-2I3b .AdminActionsPopup-whats-new-143b {
    margin-top: 20px;
    margin-left: 40px; }
    .AdminActionsPopup-container-2I3b .AdminActionsPopup-whats-new-143b .AdminActionsPopup-whats-new-title-uQ3b {
      font-weight: 600; }
  .AdminActionsPopup-container-2I3b .AdminActionsPopup-search-textbox-173b {
    width: auto;
    margin-top: 20px;
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 20px; }
    .AdminActionsPopup-container-2I3b .AdminActionsPopup-search-textbox-173b input {
      background: white;
      box-shadow: none; }
  .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b {
    overflow: auto;
    padding-left: 40px;
    padding-right: 20px; }
    .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b .AdminActionsPopup-admin-action-item-3f3b {
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 6px;
      margin-right: 7px;
      cursor: pointer; }
      .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b .AdminActionsPopup-admin-action-item-3f3b:hover {
        background-color: #f2f2f2; }
      .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b .AdminActionsPopup-admin-action-item-3f3b .AdminActionsPopup-admin-action-item-text-2J3b {
        margin-left: 10px; }
    .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b .AdminActionsPopup-admin-action-item-selected-2W3b {
      background-color: #f2f2f2; }
    .AdminActionsPopup-container-2I3b .AdminActionsPopup-admin-actions-list-fE3b .AdminActionsPopup-duda-flex-action-item-text-3d3b {
      font-size: 21px;
      padding-left: 3px; }

.AdminActionsPopup-lang-override-text-2I3b {
  margin-left: 5px;
  margin-right: 4px; }

.AdminActionsPopup-strings-admin-element-before-text-1k3b {
  color: var(--button-color);
  margin-left: 5px;
  margin-right: 4px; }
`,""]),o.locals={container:"AdminActionsPopup-container-2I3b",welcome:"AdminActionsPopup-welcome-3F3b","whats-new":"AdminActionsPopup-whats-new-143b","whats-new-title":"AdminActionsPopup-whats-new-title-uQ3b","search-textbox":"AdminActionsPopup-search-textbox-173b","admin-actions-list":"AdminActionsPopup-admin-actions-list-fE3b","admin-action-item":"AdminActionsPopup-admin-action-item-3f3b","admin-action-item-text":"AdminActionsPopup-admin-action-item-text-2J3b","admin-action-item-selected":"AdminActionsPopup-admin-action-item-selected-2W3b","duda-flex-action-item-text":"AdminActionsPopup-duda-flex-action-item-text-3d3b","lang-override-text":"AdminActionsPopup-lang-override-text-2I3b","strings-admin-element-before-text":"AdminActionsPopup-strings-admin-element-before-text-1k3b"}},E8Ah:function(a,o,t){"use strict";(function(e){var r=e.WebSocket||e.MozWebSocket;r?a.exports=function(s){return new r(s)}:a.exports=void 0}).call(this,t("yLpj"))},EBWB:function(a,o){a.exports="1.5.0"},EDod:function(a,o,t){var e=t("RxVT");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},ESiP:function(a,o,t){"use strict";o.__esModule=!0,o.parseWithoutProcessing=p,o.parse=m;function e(l){if(l&&l.__esModule)return l;var u={};if(l!=null)for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(u[n]=l[n]);return u.default=l,u}function r(l){return l&&l.__esModule?l:{default:l}}var i=t("mgBO"),s=r(i),c=t("vdep"),f=r(c),b=t("l09l"),h=e(b),v=t("sTlx");o.parser=s.default;var O={};v.extend(O,h);function p(l,u){if(l.type==="Program")return l;s.default.yy=O,O.locInfo=function(x){return new O.SourceLocation(u&&u.srcName,x)};var n=s.default.parse(l);return n}function m(l,u){var n=p(l,u),x=new f.default(u);return x.accept(n)}},EWj0:function(a,o,t){a.exports=t("ugx8").version},EcLS:function(a,o,t){"use strict";var e=t("cDcd"),r=t.n(e),i=t("Eius"),s=t.n(i),c=t("rf6O"),f=t.n(c),b=t("TSYQ"),h=t.n(b),v=t("nKUr"),O=t.n(v);const p=Object(e.forwardRef)(({children:m,className:l},u)=>{const n=Object(e.useRef)(),[x,y]=Object(e.useState)(0);return Object(e.useLayoutEffect)(()=>{var j;y((j=n.current)===null||j===void 0?void 0:j.scrollHeight)}),Object(v.jsx)("div",{ref:u,className:h()(s.a.wrapper,l),style:{height:x||"auto"},children:Object(v.jsx)("div",{ref:n,children:m})})});p.propTypes={children:c.element,className:c.string},o.a=p},Eius:function(a,o,t){var e=t("iuxQ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"Eli+":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=t("cDcd"),c=e(t("TSYQ")),f=e(t("DSbB")),b=e(t("rf6O")),h=t("nKUr");function v(C,S){var T=Object.keys(C);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(C);S&&(R=R.filter(function(M){return Object.getOwnPropertyDescriptor(C,M).enumerable})),T.push.apply(T,R)}return T}function O(C){for(var S=1;S<arguments.length;S++){var T=arguments[S]!=null?arguments[S]:{};S%2?v(Object(T),!0).forEach(function(R){(0,r.default)(C,R,T[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(C,Object.getOwnPropertyDescriptors(T)):v(Object(T)).forEach(function(R){Object.defineProperty(C,R,Object.getOwnPropertyDescriptor(T,R))})}return C}const p=({tabId:C,titleText:S,titleElement:T,onClick:R,tabClassName:M,activeTabClassName:A,current:W,"data-auto":P})=>{const L=W===C,k=()=>{!L&&R(C)};return(0,h.jsx)("div",{className:(0,c.default)(f.default.tab,M,{[f.default.current]:L,[A]:L}),onClick:k,"data-auto":P,children:S?(0,h.jsx)("span",{children:S}):T})},m=({children:C})=>C,l=({current:C,className:S,onTabChange:T,tabClassName:R,disabledNavigation:M,activeTabClassName:A,navClassName:W,activePanelClassName:P,children:L,vertical:k})=>{const G=s.Children.toArray(L).find(X=>X.props.tabId===C||X.props.title===C),J=G.props.title||G.titleText?G:G.props.children;return(0,h.jsxs)("div",{className:(0,c.default)(f.default.container,{[f.default.vertical]:k},S),children:[(0,h.jsx)("nav",{className:(0,c.default)(f.default.tabs,W,{[f.default.disabled]:M}),children:s.Children.map(L.filter(Boolean),X=>{const at=X.props,z=at.tabId,F=(0,i.default)(at,["tabId"]);return X.type&&X.type.name===m.name?X:(0,h.jsx)(p,O({tabId:z||X.props.title,titleText:X.props.titleText||X.props.title,tabClassName:R,activeTabClassName:A,current:C,onClick:T},F),z||X.props.title)})}),(0,h.jsx)("section",{"data-auto":"tab-content",className:P,children:J})]})},u=b.default.string,n=b.default.node,x=b.default.any,y=b.default.bool,j=b.default.func;p.propTypes={tabId:u,className:u,tabClassName:u,activeTabClassName:u,onClick:j,current:u,titleText:u,titleElement:n,"data-auto":u},l.propTypes={current:u.isRequired,onTabChange:j,className:u,disabledNavigation:y,navClassName:u,children:x.isRequired,activeTabClassName:u,tabClassName:u,activePanelClassName:u,vertical:y},l.Tab=p,l.CustomComponent=m;var I=l;o.default=I},F2eV:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SitesDomain-module-sites-domain-1t3b {
  max-width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  box-shadow: none; }
  .SitesDomain-module-sites-domain-1t3b .SitesDomain-module-card-content-273b {
    padding-block-start: 30px;
    padding-block-end: 22px; }
`,""]),o.locals={"sites-domain":"SitesDomain-module-sites-domain-1t3b","card-content":"SitesDomain-module-card-content-273b"}},FJ83:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("pVnL")),i=e(t("QILm")),s=e(t("cDcd")),c=e(t("9Pyt")),f=e(t("lZio")),b=e(t("hSE2")),h=["className"],v=s.default.forwardRef(function(p,m){var l=p.className,u=(0,i.default)(p,h);return s.default.createElement(c.default,(0,r.default)({className:(0,b.default)(l,f.default.button),noHover:!0,ref:m},u))}),O=v;o.default=O},FUii:function(a,o,t){"use strict";var e=t("P7XM"),r=t("raCH").EventEmitter,i=function(){};function s(c,f){i(c),r.call(this);var b=this;this.bufferPosition=0,this.xo=new f("POST",c,null),this.xo.on("chunk",this._chunkHandler.bind(this)),this.xo.once("finish",function(h,v){i("finish",h,v),b._chunkHandler(h,v),b.xo=null;var O=h===200?"network":"permanent";i("close",O),b.emit("close",null,O),b._cleanup()})}e(s,r),s.prototype._chunkHandler=function(c,f){if(i("_chunkHandler",c),!(c!==200||!f))for(var b=-1;;this.bufferPosition+=b+1){var h=f.slice(this.bufferPosition);if(b=h.indexOf(`
`),b===-1)break;var v=h.slice(0,b);v&&(i("message",v),this.emit("message",v))}},s.prototype._cleanup=function(){i("_cleanup"),this.removeAllListeners()},s.prototype.abort=function(){i("abort"),this.xo&&(this.xo.close(),i("close"),this.emit("close",null,"user"),this.xo=null),this._cleanup()},a.exports=s},Fifm:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-wordpress > div {
  width: 27px;
  height: 27px;
  background-color: currentColor;
  display: inline-block;
  border-radius: 27px;
  position: relative;
  animation: sk-inner-circle 1s linear infinite; }

.sk-wordpress > div::after {
  content: '';
  display: block;
  background-color: #fff;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 8px;
  top: 5px;
  left: 5px; }

@keyframes sk-inner-circle {
  0% {
    transform: rotate(0);
    -webkit-transform: rotate(0); }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg); } }
`,""])},FqdI:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-wave {
  width: 30px;
  height: 27px; }

.sk-wave > div {
  background-color: currentColor;
  height: 100%;
  width: 6px;
  display: inline-block;
  animation: sk-stretchdelay 1.2s infinite ease-in-out; }

.sk-wave > div:nth-child(2) {
  animation-delay: -1.1s; }

.sk-wave > div:nth-child(3) {
  animation-delay: -1.0s; }

.sk-wave > div:nth-child(4) {
  animation-delay: -0.9s; }

.sk-wave > div:nth-child(5) {
  animation-delay: -0.8s; }

@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4); }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1); } }
`,""])},G8ce:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`@keyframes Spinner-module-rotate-Is3b {
  0% {
    transform: rotate(0deg) scale(1);
    -webkit-transform: rotate(0) scale(1); }
  50% {
    transform: rotate(180deg) scale(0.6);
    -webkit-transform: rotate(180deg) scale(0.6); }
  100% {
    transform: rotate(360deg) scale(1);
    -webkit-transform: rotate(360deg) scale(1); } }

.Spinner-module-ball-clip-rotate-2e3b > div {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  border: 2px solid #617379;
  border-bottom-color: transparent !important;
  display: inline-block;
  animation: Spinner-module-rotate-Is3b 0.75s 0s linear infinite; }
`,""]),o.locals={dudaFont:"Source Sans Pro",dudaGray:"#ced6d9",lightBorder:"#e8e8e8","ball-clip-rotate":"Spinner-module-ball-clip-rotate-2e3b",rotate:"Spinner-module-rotate-Is3b"}},GDbD:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Modals-pending-modal-2n3b.Modals-pending-modal-2n3b {
  width: auto;
  position: absolute;
  top: 95px;
  right: 32px;
  overflow: visible; }

.Modals-try-button-143b {
  display: inline-flex;
  padding-inline-start: 20px;
  padding-inline-end: 20px; }

.Modals-try-button-143b,
.Modals-progress-bar-3q3b {
  margin-block-start: 15px;
  margin-block-end: 10px; }

.Modals-close-button-1c3b {
  position: absolute;
  top: 12px;
  right: 12px;
  height: auto; }
`,""]),o.locals={"pending-modal":"Modals-pending-modal-2n3b","try-button":"Modals-try-button-143b","progress-bar":"Modals-progress-bar-3q3b","close-button":"Modals-close-button-1c3b"}},GTEb:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.OptionButton-module-duda-scroll-bar-3_3b::-webkit-scrollbar {
  width: 11px;
  display: block;
  background: none; }

.OptionButton-module-duda-scroll-bar-3_3b::-webkit-scrollbar-button {
  display: none; }

.OptionButton-module-duda-scroll-bar-3_3b::-webkit-scrollbar-track {
  background: none; }

.OptionButton-module-duda-scroll-bar-3_3b::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 3px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: transparent;
  transition: all 0.1s ease-in-out; }

.OptionButton-module-duda-scroll-bar-3_3b:hover::-webkit-scrollbar-thumb {
  background-color: #bfbfbf; }

.OptionButton-module-duda-scroll-bar-3_3b::-webkit-resizer {
  padding-block-start: 20px;
  padding-inline-end: 20px;
  padding-block-end: 20px;
  padding-inline-start: 20px; }

.OptionButton-module-small-button-3W3b {
  padding-block-start: 4px;
  padding-inline-end: 4px;
  padding-block-end: 4px;
  padding-inline-start: 4px;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 14px;
  outline: none;
  box-shadow: 1px 1px 2px 0 rgba(75, 75, 85, 0.2);
  border: 1px solid #ced6d9;
  color: #616c79;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center; }

.OptionButton-module-arrow-YB3b {
  border: 9px solid black;
  transform-origin: 0 0;
  position: absolute;
  z-index: 101;
  backface-visibility: hidden;
  width: 0; }

.OptionButton-module-duda-left-arrow-3l3b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);
  transform: rotate(59deg) skewY(-14deg) skewX(10deg); }

.OptionButton-module-duda-right-arrow-1O3b {
  transform: rotate(-17deg) skewY(-16deg) skewX(-18deg);
  box-shadow: -1px 3px 0px -1px rgba(0, 0, 0, 0.1);
  border-color: #f2f2f2 #f2f2f2 transparent transparent; }

.OptionButton-module-duda-top-arrow-1F3b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  transform: rotate(136deg) skewY(0deg) skewX(2deg);
  box-shadow: -1px 1px 0 0px #c5c3c3; }

.OptionButton-module-duda-bottom-arrow-233b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  transform: rotate(-60deg) skewY(20deg) skewX(-11deg);
  box-shadow: -1px 3px 2px -1px rgba(0, 0, 0, 0.24); }

.OptionButton-module-main-2G3b {
  position: relative; }
  .OptionButton-module-main-2G3b.OptionButton-module-disabled-3Z3b {
    opacity: 0.5;
    cursor: default;
    box-shadow: 1px 1px 2px 0 rgba(75, 75, 85, 0.4); }
  .OptionButton-module-main-2G3b.OptionButton-module-text-1l3b {
    min-width: 30px;
    width: auto;
    font-size: 12px;
    display: flex; }
  .OptionButton-module-main-2G3b.OptionButton-module-selected-3s3b {
    background-color: #f5f7f7;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15);
    color: var(--text-on-light);
    fill: var(--text-on-light); }
  .OptionButton-module-main-2G3b:not(.OptionButton-module-main-2G3b.OptionButton-module-disabled-3Z3b) > * {
    cursor: pointer; }
  .OptionButton-module-main-2G3b .OptionButton-module-icon-wrapper-2M3b {
    display: flex;
    justify-content: center;
    align-items: center; }
  .OptionButton-module-main-2G3b .OptionButton-module-padded-J43b {
    padding-inline-end: 0.3em; }
  .OptionButton-module-main-2G3b.OptionButton-module-selected-3s3b {
    color: var(--text-on-light);
    fill: var(--text-on-light); }
  .OptionButton-module-main-2G3b.OptionButton-module-omit-border-3q3b {
    border: 0;
    box-shadow: none; }
    .OptionButton-module-main-2G3b.OptionButton-module-omit-border-3q3b.OptionButton-module-selected-3s3b {
      background-color: initial; }
  .OptionButton-module-main-2G3b .OptionButton-module-hidden-173b {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; }
  .OptionButton-module-main-2G3b input[type='radio'],
  .OptionButton-module-main-2G3b input[type='checkbox'] {
    margin: 0;
    visibility: visible; }
    .OptionButton-module-main-2G3b input[type='radio'].OptionButton-module-capturing-1R3b,
    .OptionButton-module-main-2G3b input[type='checkbox'].OptionButton-module-capturing-1R3b {
      z-index: 1; }
`,""]),o.locals={"duda-scroll-bar":"OptionButton-module-duda-scroll-bar-3_3b","small-button":"OptionButton-module-small-button-3W3b",arrow:"OptionButton-module-arrow-YB3b","duda-left-arrow":"OptionButton-module-duda-left-arrow-3l3b OptionButton-module-arrow-YB3b","duda-right-arrow":"OptionButton-module-duda-right-arrow-1O3b OptionButton-module-arrow-YB3b","duda-top-arrow":"OptionButton-module-duda-top-arrow-1F3b OptionButton-module-arrow-YB3b","duda-bottom-arrow":"OptionButton-module-duda-bottom-arrow-233b OptionButton-module-arrow-YB3b",main:"OptionButton-module-main-2G3b OptionButton-module-small-button-3W3b",disabled:"OptionButton-module-disabled-3Z3b",text:"OptionButton-module-text-1l3b",selected:"OptionButton-module-selected-3s3b","icon-wrapper":"OptionButton-module-icon-wrapper-2M3b",padded:"OptionButton-module-padded-J43b","omit-border":"OptionButton-module-omit-border-3q3b",hidden:"OptionButton-module-hidden-173b",capturing:"OptionButton-module-capturing-1R3b"}},GUAn:function(a,o,t){var e=t("F2eV");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},GiZD:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavBarLinkContent-text-OC3b {
  color: inherit;
  cursor: pointer; }

.NavBarLinkContent-new-label-2e3b {
  color: var(--button-color);
  border: 1px solid var(--button-color);
  padding-inline-start: 6px;
  padding-inline-end: 6px;
  margin-inline-start: 16px;
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 10px;
  line-height: normal; }
`,""]),o.locals={text:"NavBarLinkContent-text-OC3b","new-label":"NavBarLinkContent-new-label-2e3b"}},GtI6:function(a,o,t){var e=t("da1W");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Gv6Q:function(a,o,t){"use strict";o.__esModule=!0,o.default=function(e){e.registerHelper("lookup",function(r,i,s){return r&&s.lookupProperty(r,i)})},a.exports=o.default},GvOo:function(a,o,t){var e=t("SJRE");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},HB8c:function(a,o,t){"use strict";o.__esModule=!0;var e=t("sTlx"),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(s){if(typeof s=="string"){var c=e.indexOf(r.methodMap,s.toLowerCase());c>=0?s=c:s=parseInt(s,10)}return s},log:function(s){if(s=r.lookupLevel(s),typeof console!="undefined"&&r.lookupLevel(r.level)<=s){var c=r.methodMap[s];console[c]||(c="log");for(var f=arguments.length,b=Array(f>1?f-1:0),h=1;h<f;h++)b[h-1]=arguments[h];console[c].apply(console,b)}}};o.default=r,a.exports=o.default},HUOM:function(a,o,t){var e=t("zBGt");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Hmni:function(a,o,t){var e=t("oRqH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"HxU/":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.OldDashboard-container-143b {
  display: flex;
  position: absolute;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px; }
  .OldDashboard-container-143b .OldDashboard-iframe-2n3b {
    width: 100%;
    border: none; }
`,""]),o.locals={container:"OldDashboard-container-143b",iframe:"OldDashboard-iframe-2n3b"}},I7VN:function(a,o,t){"use strict";t.r(o);var e=t("9P9J");t.d(o,"Popper",function(){return e.a});var r=t("KFoM");t.d(o,"Manager",function(){return r.a});var i=t("rJga");t.d(o,"Reference",function(){return i.a});var s=t("IwqK");t.d(o,"usePopper",function(){return s.a})},I7rT:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ValidationMessage-module-message-2c3b.ValidationMessage-module-message-2c3b {
  margin-block-start: 0;
  margin-block-end: 16px;
  padding-inline-end: 97px; }

.ValidationMessage-module-pending-icon-3i3b {
  margin-inline-end: 10px; }
`,""]),o.locals={message:"ValidationMessage-module-message-2c3b","pending-icon":"ValidationMessage-module-pending-icon-3i3b"}},ID16:function(a,o,t){"use strict";t.d(o,"a",function(){return c});var e=t("d8FT"),r=t.n(e);const i=/^(?:on[A-Z]|data-).*/,s=["className","children"];function c(v={},O=[]){return r()(v,(p,m)=>O.indexOf(m)!==-1?!1:s.indexOf(m)!==-1||i.test(m))}function f(v){return Object.keys(v).map(O=>`${O}=${v[O]}`).join("&")}function b(v,O,p=1){let m=O+p;return m<0&&(m=v.length+m%v.length),v[m%v.length]}function h({value:v,min:O=-Infinity,max:p=Infinity}){return Math.max(O,Math.min(v,p))}},IGE0:function(a,o,t){var e=t("8d+t");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},IIJs:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SetProductPropPopup-container--I3b {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px; }
  .SetProductPropPopup-container--I3b .SetProductPropPopup-title-container-lX3b {
    display: flex;
    align-self: center;
    margin-bottom: 20px; }
    .SetProductPropPopup-container--I3b .SetProductPropPopup-title-container-lX3b .SetProductPropPopup-title-3w3b {
      font-size: 28px;
      font-weight: bold; }
    .SetProductPropPopup-container--I3b .SetProductPropPopup-title-container-lX3b .SetProductPropPopup-count-2x3b {
      margin-top: 12px;
      font-size: 15px; }
  .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b {
    display: flex; }
    .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-dropdown-with-title-AS3b {
      display: flex;
      flex-direction: column; }
      .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-dropdown-with-title-AS3b .SetProductPropPopup-dropdown-2M3b {
        width: 400px; }
    .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-textbox-with-title-hb3b {
      display: flex;
      flex-direction: column; }
      .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-textbox-with-title-hb3b .SetProductPropPopup-textbox-title-2-3b {
        margin-left: 10px; }
      .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-textbox-with-title-hb3b .SetProductPropPopup-textbox-3u3b {
        margin-left: 10px; }
      .SetProductPropPopup-container--I3b .SetProductPropPopup-dropdown-and-textbox-2o3b .SetProductPropPopup-textbox-with-title-hb3b .SetProductPropPopup-textbox-input-au3b {
        width: 350px;
        height: 32px;
        box-shadow: none;
        text-align: initial; }
  .SetProductPropPopup-container--I3b .SetProductPropPopup-switch-bool-value-383b {
    margin-left: 412px;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
    user-select: none;
    visibility: hidden; }
  .SetProductPropPopup-container--I3b .SetProductPropPopup-switch-bool-value-visible-No3b {
    visibility: visible; }
  .SetProductPropPopup-container--I3b .SetProductPropPopup-save-button-1t3b {
    align-self: center;
    width: 130px;
    margin-top: 10px; }
`,""]),o.locals={container:"SetProductPropPopup-container--I3b","title-container":"SetProductPropPopup-title-container-lX3b",title:"SetProductPropPopup-title-3w3b",count:"SetProductPropPopup-count-2x3b","dropdown-and-textbox":"SetProductPropPopup-dropdown-and-textbox-2o3b","dropdown-with-title":"SetProductPropPopup-dropdown-with-title-AS3b",dropdown:"SetProductPropPopup-dropdown-2M3b","textbox-with-title":"SetProductPropPopup-textbox-with-title-hb3b","textbox-title":"SetProductPropPopup-textbox-title-2-3b",textbox:"SetProductPropPopup-textbox-3u3b","textbox-input":"SetProductPropPopup-textbox-input-au3b","switch-bool-value":"SetProductPropPopup-switch-bool-value-383b","switch-bool-value-visible":"SetProductPropPopup-switch-bool-value-visible-No3b","save-button":"SetProductPropPopup-save-button-1t3b"}},IKTb:function(a,o,t){var e=t("jnhf");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},IPUb:function(a,o,t){var e=t("68IQ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},IRsh:function(a,o,t){var e=t("3Ent");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},IyIJ:function(a,o,t){var e=t("nZZ8");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},JAN0:function(a,o,t){"use strict";o.__esModule=!0;function e(p){return p&&p.__esModule?p:{default:p}}var r=t("BEYS"),i=t("tpBh"),s=e(i),c=t("sTlx"),f=t("y22v"),b=e(f);function h(p){this.value=p}function v(){}v.prototype={nameLookup:function(m,l){return this.internalNameLookup(m,l)},depthedLookup:function(m){return[this.aliasable("container.lookup"),'(depths, "',m,'")']},compilerInfo:function(){var m=r.COMPILER_REVISION,l=r.REVISION_CHANGES[m];return[m,l]},appendToBuffer:function(m,l,u){return c.isArray(m)||(m=[m]),m=this.source.wrap(m,l),this.environment.isSimple?["return ",m,";"]:u?["buffer += ",m,";"]:(m.appendToBuffer=!0,m)},initializeBuffer:function(){return this.quotedString("")},internalNameLookup:function(m,l){return this.lookupPropertyFunctionIsUsed=!0,["lookupProperty(",m,",",JSON.stringify(l),")"]},lookupPropertyFunctionIsUsed:!1,compile:function(m,l,u,n){this.environment=m,this.options=l,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!n,this.name=this.environment.name,this.isChild=!!u,this.context=u||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(m,l),this.useDepths=this.useDepths||m.useDepths||m.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||m.useBlockParams;var x=m.opcodes,y=void 0,j=void 0,I=void 0,C=void 0;for(I=0,C=x.length;I<C;I++)y=x[I],this.source.currentLocation=y.loc,j=j||y.loc,this[y.opcode].apply(this,y.args);if(this.source.currentLocation=j,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new s.default("Compile completed with content left on stack");this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend(["var decorators = container.decorators, ",this.lookupPropertyFunctionVarDeclaration(),`;
`]),this.decorators.push("return fn;"),n?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`),this.decorators.push(`}
`),this.decorators=this.decorators.merge()));var S=this.createFunctionContext(n);if(this.isChild)return S;var T={compiler:this.compilerInfo(),main:S};this.decorators&&(T.main_d=this.decorators,T.useDecorators=!0);var R=this.context,M=R.programs,A=R.decorators;for(I=0,C=M.length;I<C;I++)M[I]&&(T[I]=M[I],A[I]&&(T[I+"_d"]=A[I],T.useDecorators=!0));return this.environment.usePartial&&(T.usePartial=!0),this.options.data&&(T.useData=!0),this.useDepths&&(T.useDepths=!0),this.useBlockParams&&(T.useBlockParams=!0),this.options.compat&&(T.compat=!0),n?T.compilerOptions=this.options:(T.compiler=JSON.stringify(T.compiler),this.source.currentLocation={start:{line:1,column:0}},T=this.objectLiteral(T),l.srcName?(T=T.toStringWithSourceMap({file:l.destName}),T.map=T.map&&T.map.toString()):T=T.toString()),T},preamble:function(){this.lastContext=0,this.source=new b.default(this.options.srcName),this.decorators=new b.default(this.options.srcName)},createFunctionContext:function(m){var l=this,u="",n=this.stackVars.concat(this.registers.list);n.length>0&&(u+=", "+n.join(", "));var x=0;Object.keys(this.aliases).forEach(function(I){var C=l.aliases[I];C.children&&C.referenceCount>1&&(u+=", alias"+ ++x+"="+I,C.children[0]="alias"+x)}),this.lookupPropertyFunctionIsUsed&&(u+=", "+this.lookupPropertyFunctionVarDeclaration());var y=["container","depth0","helpers","partials","data"];(this.useBlockParams||this.useDepths)&&y.push("blockParams"),this.useDepths&&y.push("depths");var j=this.mergeSource(u);return m?(y.push(j),Function.apply(this,y)):this.source.wrap(["function(",y.join(","),`) {
  `,j,"}"])},mergeSource:function(m){var l=this.environment.isSimple,u=!this.forceBuffer,n=void 0,x=void 0,y=void 0,j=void 0;return this.source.each(function(I){I.appendToBuffer?(y?I.prepend("  + "):y=I,j=I):(y&&(x?y.prepend("buffer += "):n=!0,j.add(";"),y=j=void 0),x=!0,l||(u=!1))}),u?y?(y.prepend("return "),j.add(";")):x||this.source.push('return "";'):(m+=", buffer = "+(n?"":this.initializeBuffer()),y?(y.prepend("return buffer + "),j.add(";")):this.source.push("return buffer;")),m&&this.source.prepend("var "+m.substring(2)+(n?"":`;
`)),this.source.merge()},lookupPropertyFunctionVarDeclaration:function(){return`
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim()},blockValue:function(m){var l=this.aliasable("container.hooks.blockHelperMissing"),u=[this.contextName(0)];this.setupHelperArgs(m,0,u);var n=this.popStack();u.splice(1,0,n),this.push(this.source.functionCall(l,"call",u))},ambiguousBlockValue:function(){var m=this.aliasable("container.hooks.blockHelperMissing"),l=[this.contextName(0)];this.setupHelperArgs("",0,l,!0),this.flushInline();var u=this.topStack();l.splice(1,0,u),this.pushSource(["if (!",this.lastHelper,") { ",u," = ",this.source.functionCall(m,"call",l),"}"])},appendContent:function(m){this.pendingContent?m=this.pendingContent+m:this.pendingLocation=this.source.currentLocation,this.pendingContent=m},append:function(){if(this.isInline())this.replaceStack(function(l){return[" != null ? ",l,' : ""']}),this.pushSource(this.appendToBuffer(this.popStack()));else{var m=this.popStack();this.pushSource(["if (",m," != null) { ",this.appendToBuffer(m,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))},getContext:function(m){this.lastContext=m},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(m,l,u,n){var x=0;!n&&this.options.compat&&!this.lastContext?this.push(this.depthedLookup(m[x++])):this.pushContext(),this.resolvePath("context",m,x,l,u)},lookupBlockParam:function(m,l){this.useBlockParams=!0,this.push(["blockParams[",m[0],"][",m[1],"]"]),this.resolvePath("context",l,1)},lookupData:function(m,l,u){m?this.pushStackLiteral("container.data(data, "+m+")"):this.pushStackLiteral("data"),this.resolvePath("data",l,0,!0,u)},resolvePath:function(m,l,u,n,x){var y=this;if(this.options.strict||this.options.assumeObjects){this.push(O(this.options.strict&&x,this,l,m));return}for(var j=l.length;u<j;u++)this.replaceStack(function(I){var C=y.nameLookup(I,l[u],m);return n?[" && ",C]:[" != null ? ",C," : ",I]})},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])},pushStringParam:function(m,l){this.pushContext(),this.pushString(l),l!=="SubExpression"&&(typeof m=="string"?this.pushString(m):this.pushStackLiteral(m))},emptyHash:function(m){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(m?"undefined":"{}")},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:{},types:[],contexts:[],ids:[]}},popHash:function(){var m=this.hash;this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(m.ids)),this.stringParams&&(this.push(this.objectLiteral(m.contexts)),this.push(this.objectLiteral(m.types))),this.push(this.objectLiteral(m.values))},pushString:function(m){this.pushStackLiteral(this.quotedString(m))},pushLiteral:function(m){this.pushStackLiteral(m)},pushProgram:function(m){m!=null?this.pushStackLiteral(this.programExpression(m)):this.pushStackLiteral(null)},registerDecorator:function(m,l){var u=this.nameLookup("decorators",l,"decorator"),n=this.setupHelperArgs(l,m);this.decorators.push(["fn = ",this.decorators.functionCall(u,"",["fn","props","container",n])," || fn;"])},invokeHelper:function(m,l,u){var n=this.popStack(),x=this.setupHelper(m,l),y=[];u&&y.push(x.name),y.push(n),this.options.strict||y.push(this.aliasable("container.hooks.helperMissing"));var j=["(",this.itemsSeparatedBy(y,"||"),")"],I=this.source.functionCall(j,"call",x.callParams);this.push(I)},itemsSeparatedBy:function(m,l){var u=[];u.push(m[0]);for(var n=1;n<m.length;n++)u.push(l,m[n]);return u},invokeKnownHelper:function(m,l){var u=this.setupHelper(m,l);this.push(this.source.functionCall(u.name,"call",u.callParams))},invokeAmbiguous:function(m,l){this.useRegister("helper");var u=this.popStack();this.emptyHash();var n=this.setupHelper(0,m,l),x=this.lastHelper=this.nameLookup("helpers",m,"helper"),y=["(","(helper = ",x," || ",u,")"];this.options.strict||(y[0]="(helper = ",y.push(" != null ? helper : ",this.aliasable("container.hooks.helperMissing"))),this.push(["(",y,n.paramsInit?["),(",n.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",n.callParams)," : helper))"])},invokePartial:function(m,l,u){var n=[],x=this.setupParams(l,1,n);m&&(l=this.popStack(),delete x.name),u&&(x.indent=JSON.stringify(u)),x.helpers="helpers",x.partials="partials",x.decorators="container.decorators",m?n.unshift(l):n.unshift(this.nameLookup("partials",l,"partial")),this.options.compat&&(x.depths="depths"),x=this.objectLiteral(x),n.push(x),this.push(this.source.functionCall("container.invokePartial","",n))},assignToHash:function(m){var l=this.popStack(),u=void 0,n=void 0,x=void 0;this.trackIds&&(x=this.popStack()),this.stringParams&&(n=this.popStack(),u=this.popStack());var y=this.hash;u&&(y.contexts[m]=u),n&&(y.types[m]=n),x&&(y.ids[m]=x),y.values[m]=l},pushId:function(m,l,u){m==="BlockParam"?this.pushStackLiteral("blockParams["+l[0]+"].path["+l[1]+"]"+(u?" + "+JSON.stringify("."+u):"")):m==="PathExpression"?this.pushString(l):m==="SubExpression"?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:v,compileChildren:function(m,l){for(var u=m.children,n=void 0,x=void 0,y=0,j=u.length;y<j;y++){n=u[y],x=new this.compiler;var I=this.matchExistingProgram(n);if(I==null){this.context.programs.push("");var C=this.context.programs.length;n.index=C,n.name="program"+C,this.context.programs[C]=x.compile(n,l,this.context,!this.precompile),this.context.decorators[C]=x.decorators,this.context.environments[C]=n,this.useDepths=this.useDepths||x.useDepths,this.useBlockParams=this.useBlockParams||x.useBlockParams,n.useDepths=this.useDepths,n.useBlockParams=this.useBlockParams}else n.index=I.index,n.name="program"+I.index,this.useDepths=this.useDepths||I.useDepths,this.useBlockParams=this.useBlockParams||I.useBlockParams}},matchExistingProgram:function(m){for(var l=0,u=this.context.environments.length;l<u;l++){var n=this.context.environments[l];if(n&&n.equals(m))return n}},programExpression:function(m){var l=this.environment.children[m],u=[l.index,"data",l.blockParams];return(this.useBlockParams||this.useDepths)&&u.push("blockParams"),this.useDepths&&u.push("depths"),"container.program("+u.join(", ")+")"},useRegister:function(m){this.registers[m]||(this.registers[m]=!0,this.registers.list.push(m))},push:function(m){return m instanceof h||(m=this.source.wrap(m)),this.inlineStack.push(m),m},pushStackLiteral:function(m){this.push(new h(m))},pushSource:function(m){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),m&&this.source.push(m)},replaceStack:function(m){var l=["("],u=void 0,n=void 0,x=void 0;if(!this.isInline())throw new s.default("replaceStack on non-inline");var y=this.popStack(!0);if(y instanceof h)u=[y.value],l=["(",u],x=!0;else{n=!0;var j=this.incrStack();l=["((",this.push(j)," = ",y,")"],u=this.topStack()}var I=m.call(this,u);x||this.popStack(),n&&this.stackSlot--,this.push(l.concat(I,")"))},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var m=this.inlineStack;this.inlineStack=[];for(var l=0,u=m.length;l<u;l++){var n=m[l];if(n instanceof h)this.compileStack.push(n);else{var x=this.incrStack();this.pushSource([x," = ",n,";"]),this.compileStack.push(x)}}},isInline:function(){return this.inlineStack.length},popStack:function(m){var l=this.isInline(),u=(l?this.inlineStack:this.compileStack).pop();if(!m&&u instanceof h)return u.value;if(!l){if(!this.stackSlot)throw new s.default("Invalid stack pop");this.stackSlot--}return u},topStack:function(){var m=this.isInline()?this.inlineStack:this.compileStack,l=m[m.length-1];return l instanceof h?l.value:l},contextName:function(m){return this.useDepths&&m?"depths["+m+"]":"depth"+m},quotedString:function(m){return this.source.quotedString(m)},objectLiteral:function(m){return this.source.objectLiteral(m)},aliasable:function(m){var l=this.aliases[m];return l?(l.referenceCount++,l):(l=this.aliases[m]=this.source.wrap(m),l.aliasable=!0,l.referenceCount=1,l)},setupHelper:function(m,l,u){var n=[],x=this.setupHelperArgs(l,m,n,u),y=this.nameLookup("helpers",l,"helper"),j=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : (container.nullContext || {})");return{params:n,paramsInit:x,name:y,callParams:[j].concat(n)}},setupParams:function(m,l,u){var n={},x=[],y=[],j=[],I=!u,C=void 0;I&&(u=[]),n.name=this.quotedString(m),n.hash=this.popStack(),this.trackIds&&(n.hashIds=this.popStack()),this.stringParams&&(n.hashTypes=this.popStack(),n.hashContexts=this.popStack());var S=this.popStack(),T=this.popStack();(T||S)&&(n.fn=T||"container.noop",n.inverse=S||"container.noop");for(var R=l;R--;)C=this.popStack(),u[R]=C,this.trackIds&&(j[R]=this.popStack()),this.stringParams&&(y[R]=this.popStack(),x[R]=this.popStack());return I&&(n.args=this.source.generateArray(u)),this.trackIds&&(n.ids=this.source.generateArray(j)),this.stringParams&&(n.types=this.source.generateArray(y),n.contexts=this.source.generateArray(x)),this.options.data&&(n.data="data"),this.useBlockParams&&(n.blockParams="blockParams"),n},setupHelperArgs:function(m,l,u,n){var x=this.setupParams(m,l,u);return x.loc=JSON.stringify(this.source.currentLocation),x=this.objectLiteral(x),n?(this.useRegister("options"),u.push("options"),["options=",x]):u?(u.push(x),""):x}},function(){for(var p="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),m=v.RESERVED_WORDS={},l=0,u=p.length;l<u;l++)m[p[l]]=!0}(),v.isValidJavaScriptVariableName=function(p){return!v.RESERVED_WORDS[p]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(p)};function O(p,m,l,u){var n=m.popStack(),x=0,y=l.length;for(p&&y--;x<y;x++)n=m.nameLookup(n,l[x],u);return p?[m.aliasable("container.strict"),"(",n,", ",m.quotedString(l[x]),", ",JSON.stringify(m.source.currentLocation)," )"]:n}o.default=v,a.exports=o.default},JQwD:function(a,o,t){var e=t("1JWa");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"JWB+":function(a,o,t){(function(){var e,r,i,s,c={}.hasOwnProperty,f=[].slice;e={LF:`
`,NULL:"\0"},i=function(){var b;function h(v,O,p,m){this.command=v,this.headers=O!=null?O:{},this.body=p!=null?p:"",this.escapeHeaderValues=m!=null?m:!1}return h.prototype.toString=function(){var v,O,p,m,l;v=[this.command],m=this.headers["content-length"]===!1,m&&delete this.headers["content-length"],p=this.headers;for(O in p)!c.call(p,O)||(l=p[O],this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?v.push(O+":"+h.frEscape(l)):v.push(O+":"+l));return this.body&&!m&&v.push("content-length:"+h.sizeOfUTF8(this.body)),v.push(e.LF+this.body),v.join(e.LF)},h.sizeOfUTF8=function(v){return v?encodeURI(v).match(/%..|./g).length:0},b=function(v,O){var p,m,l,u,n,x,y,j,I,C,S,T,R,M,A,W,P,L;for(O==null&&(O=!1),u=v.search(RegExp(""+e.LF+e.LF)),n=v.substring(0,u).split(e.LF),l=n.shift(),x={},L=function(k){return k.replace(/^\s+|\s+$/g,"")},M=n.reverse(),I=0,T=M.length;I<T;I++)R=M[I],j=R.indexOf(":"),O&&l!=="CONNECT"&&l!=="CONNECTED"?x[L(R.substring(0,j))]=h.frUnEscape(L(R.substring(j+1))):x[L(R.substring(0,j))]=L(R.substring(j+1));if(p="",P=u+2,x["content-length"])S=parseInt(x["content-length"]),p=(""+v).substring(P,P+S);else for(m=null,y=C=A=P,W=v.length;(A<=W?C<W:C>W)&&(m=v.charAt(y),m!==e.NULL);y=A<=W?++C:--C)p+=m;return new h(l,x,p,O)},h.unmarshall=function(v,O){var p,m,l,u;return O==null&&(O=!1),m=v.split(RegExp(""+e.NULL+e.LF+"*")),u={frames:[],partial:""},u.frames=function(){var n,x,y,j;for(y=m.slice(0,-1),j=[],n=0,x=y.length;n<x;n++)p=y[n],j.push(b(p,O));return j}(),l=m.slice(-1)[0],l===e.LF||l.search(RegExp(""+e.NULL+e.LF+"*$"))!==-1?u.frames.push(b(l,O)):u.partial=l,u},h.marshall=function(v,O,p,m){var l;return l=new h(v,O,p,m),l.toString()+e.NULL},h.frEscape=function(v){return(""+v).replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")},h.frUnEscape=function(v){return(""+v).replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")},h}(),r=function(){var b;function h(v){this.ws_fn=function(){var O;return O=v(),O.binaryType="arraybuffer",O},this.reconnect_delay=0,this.counter=0,this.connected=!1,this.heartbeat={outgoing:1e4,incoming:1e4},this.maxWebSocketFrameSize=16*1024,this.subscriptions={},this.partialData=""}return h.prototype.debug=function(v){var O;return typeof window!="undefined"&&window!==null&&(O=window.console)!=null?O.log(v):void 0},b=function(){return Date.now?Date.now():new Date().valueOf},h.prototype._transmit=function(v,O,p){var m;for(m=i.marshall(v,O,p,this.escapeHeaderValues),typeof this.debug=="function"&&this.debug(">>> "+m);;)if(m.length>this.maxWebSocketFrameSize)this.ws.send(m.substring(0,this.maxWebSocketFrameSize)),m=m.substring(this.maxWebSocketFrameSize),typeof this.debug=="function"&&this.debug("remaining = "+m.length);else return this.ws.send(m)},h.prototype._setupHeartbeat=function(v){var O,p,m,l,u,n;if(!((O=v.version)!==s.VERSIONS.V1_1&&O!==s.VERSIONS.V1_2)&&(p=function(){var x,y,j,I;for(j=v["heart-beat"].split(","),I=[],x=0,y=j.length;x<y;x++)n=j[x],I.push(parseInt(n));return I}(),l=p[0],m=p[1],this.heartbeat.outgoing===0||m===0||(u=Math.max(this.heartbeat.outgoing,m),typeof this.debug=="function"&&this.debug("send PING every "+u+"ms"),this.pinger=s.setInterval(u,function(x){return function(){return x.ws.send(e.LF),typeof x.debug=="function"?x.debug(">>> PING"):void 0}}(this))),!(this.heartbeat.incoming===0||l===0)))return u=Math.max(this.heartbeat.incoming,l),typeof this.debug=="function"&&this.debug("check PONG every "+u+"ms"),this.ponger=s.setInterval(u,function(x){return function(){var y;if(y=b()-x.serverActivity,y>u*2)return typeof x.debug=="function"&&x.debug("did not receive server activity for the last "+y+"ms"),x.ws.close()}}(this))},h.prototype._parseConnect=function(){var v,O,p,m,l;if(v=1<=arguments.length?f.call(arguments,0):[],l={},v.length<2)throw"Connect requires at least 2 arguments";if(typeof v[1]=="function")l=v[0],p=v[1],m=v[2],O=v[3];else switch(v.length){case 6:l.login=v[0],l.passcode=v[1],p=v[2],m=v[3],O=v[4],l.host=v[5];break;default:l.login=v[0],l.passcode=v[1],p=v[2],m=v[3],O=v[4]}return[l,p,m,O]},h.prototype.connect=function(){var v,O;return v=1<=arguments.length?f.call(arguments,0):[],this.escapeHeaderValues=!1,O=this._parseConnect.apply(this,v),this.headers=O[0],this.connectCallback=O[1],this.errorCallback=O[2],this.closeEventCallback=O[3],this._active=!0,this._connect()},h.prototype._connect=function(){var v,O,p,m;if(m=this.headers,p=this.errorCallback,O=this.closeEventCallback,!this._active){this.debug("Client has been marked inactive, will not attempt to connect");return}return typeof this.debug=="function"&&this.debug("Opening Web Socket..."),this.ws=this.ws_fn(),v=function(l){return function(u){var n,x,y,j,I,C;for(C="",I=u.length,j=0;j<I;)switch(n=u[j++],n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:C+=String.fromCharCode(n);break;case 12:case 13:x=u[j++],C+=String.fromCharCode((n&31)<<6|x&63);break;case 14:x=u[j++],y=u[j++],C+=String.fromCharCode((n&15)<<12|(x&63)<<6|(y&63)<<0)}return C}}(this),this.ws.onmessage=function(l){return function(u){var n,x,y,j,I,C,S,T,R,M,A;if(y=typeof ArrayBuffer!="undefined"&&u.data instanceof ArrayBuffer?(n=new Uint8Array(u.data),typeof l.debug=="function"&&l.debug("--- got data length: "+n.length),v(n)):u.data,l.serverActivity=b(),y===e.LF){typeof l.debug=="function"&&l.debug("<<< PONG");return}for(typeof l.debug=="function"&&l.debug("<<< "+y),A=i.unmarshall(l.partialData+y,l.escapeHeaderValues),l.partialData=A.partial,R=A.frames,I=0,C=R.length;I<C;I++)switch(j=R[I],j.command){case"CONNECTED":if(typeof l.debug=="function"&&l.debug("connected to server "+j.headers.server),l.connected=!0,l.version=j.headers.version,l.version===s.VERSIONS.V1_2&&(l.escapeHeaderValues=!0),!l._active){l.disconnect();return}l._setupHeartbeat(j.headers),typeof l.connectCallback=="function"&&l.connectCallback(j);break;case"MESSAGE":M=j.headers.subscription,T=l.subscriptions[M]||l.onreceive,T?(x=l,l.version===s.VERSIONS.V1_2?S=j.headers.ack:S=j.headers["message-id"],j.ack=function(W){return W==null&&(W={}),x.ack(S,M,W)},j.nack=function(W){return W==null&&(W={}),x.nack(S,M,W)},T(j)):typeof l.debug=="function"&&l.debug("Unhandled received MESSAGE: "+j);break;case"RECEIPT":j.headers["receipt-id"]===l.closeReceipt?(l.ws.onclose=null,l.ws.close(),l._cleanUp(),typeof l._disconnectCallback=="function"&&l._disconnectCallback()):typeof l.onreceipt=="function"&&l.onreceipt(j);break;case"ERROR":typeof p=="function"&&p(j);break;default:typeof l.debug=="function"&&l.debug("Unhandled frame: "+j)}}}(this),this.ws.onclose=function(l){return function(u){var n;return n="Whoops! Lost connection to "+l.ws.url,typeof l.debug=="function"&&l.debug(n),typeof O=="function"&&O(u),l._cleanUp(),typeof p=="function"&&p(n),l._schedule_reconnect()}}(this),this.ws.onopen=function(l){return function(){return typeof l.debug=="function"&&l.debug("Web Socket Opened..."),m["accept-version"]=s.VERSIONS.supportedVersions(),m["heart-beat"]=[l.heartbeat.outgoing,l.heartbeat.incoming].join(","),l._transmit("CONNECT",m)}}(this)},h.prototype._schedule_reconnect=function(){if(this.reconnect_delay>0)return typeof this.debug=="function"&&this.debug("STOMP: scheduling reconnection in "+this.reconnect_delay+"ms"),this._reconnector=setTimeout(function(v){return function(){return v.connected?typeof v.debug=="function"?v.debug("STOMP: already connected"):void 0:(typeof v.debug=="function"&&v.debug("STOMP: attempting to reconnect"),v._connect())}}(this),this.reconnect_delay)},h.prototype.disconnect=function(v,O){var p;if(O==null&&(O={}),this._disconnectCallback=v,this._active=!1,this.connected){O.receipt||(O.receipt="close-"+this.counter++),this.closeReceipt=O.receipt;try{return this._transmit("DISCONNECT",O)}catch(m){return p=m,typeof this.debug=="function"?this.debug("Ignoring error during disconnect",p):void 0}}},h.prototype._cleanUp=function(){if(this._reconnector&&clearTimeout(this._reconnector),this.connected=!1,this.subscriptions={},this.partial="",this.pinger&&s.clearInterval(this.pinger),this.ponger)return s.clearInterval(this.ponger)},h.prototype.send=function(v,O,p){return O==null&&(O={}),p==null&&(p=""),O.destination=v,this._transmit("SEND",O,p)},h.prototype.subscribe=function(v,O,p){var m;return p==null&&(p={}),p.id||(p.id="sub-"+this.counter++),p.destination=v,this.subscriptions[p.id]=O,this._transmit("SUBSCRIBE",p),m=this,{id:p.id,unsubscribe:function(l){return m.unsubscribe(p.id,l)}}},h.prototype.unsubscribe=function(v,O){return O==null&&(O={}),delete this.subscriptions[v],O.id=v,this._transmit("UNSUBSCRIBE",O)},h.prototype.begin=function(v){var O,p;return p=v||"tx-"+this.counter++,this._transmit("BEGIN",{transaction:p}),O=this,{id:p,commit:function(){return O.commit(p)},abort:function(){return O.abort(p)}}},h.prototype.commit=function(v){return this._transmit("COMMIT",{transaction:v})},h.prototype.abort=function(v){return this._transmit("ABORT",{transaction:v})},h.prototype.ack=function(v,O,p){return p==null&&(p={}),this.version===s.VERSIONS.V1_2?p.id=v:p["message-id"]=v,p.subscription=O,this._transmit("ACK",p)},h.prototype.nack=function(v,O,p){return p==null&&(p={}),this.version===s.VERSIONS.V1_2?p.id=v:p["message-id"]=v,p.subscription=O,this._transmit("NACK",p)},h}(),s={VERSIONS:{V1_0:"1.0",V1_1:"1.1",V1_2:"1.2",supportedVersions:function(){return"1.2,1.1,1.0"}},client:function(b,h){var v;return h==null&&(h=["v10.stomp","v11.stomp","v12.stomp"]),v=function(){var O;return O=s.WebSocketClass||WebSocket,new O(b,h)},new r(v)},over:function(b){var h;return h=typeof b=="function"?b:function(){return b},new r(h)},Frame:i},s.setInterval=function(b,h){return setInterval(h,b)},s.clearInterval=function(b){return clearInterval(b)},o!==null&&(o.Stomp=s),typeof window!="undefined"&&window!==null?window.Stomp=s:o||(self.Stomp=s)}).call(this)},JYLm:function(a,o,t){"use strict";var e=t("z+YZ"),r="abcdefghijklmnopqrstuvwxyz012345";a.exports={string:function(i){for(var s=r.length,c=e.randomBytes(i),f=[],b=0;b<i;b++)f.push(r.substr(c[b]%s,1));return f.join("")},number:function(i){return Math.floor(Math.random()*i)},numberString:function(i){var s=(""+(i-1)).length,c=new Array(s+1).join("0");return(c+this.number(i)).slice(-s)}}},JcDD:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Step1-title-1Z3b {
  text-align: left;
  font-weight: 500;
  padding-block-start: 0;
  margin-block-end: 8px; }

.Step1-content-213b {
  font-weight: 500;
  font-size: 14px;
  color: #313131;
  padding-block-end: 10px;
  max-width: 720px; }
  .Step1-content-213b mark {
    color: #828894;
    background: none; }

.Step1-fields-container-2V3b {
  display: flex;
  justify-content: flex-start;
  align-items: center; }

.Step1-domain-prefix-383b {
  width: 100px;
  height: 35px; }

.Step1-domain-affix-1i3b {
  width: 220px;
  height: 35px; }

.Step1-at-sign-2Z3b {
  margin-inline-end: 8px;
  margin-inline-start: 8px; }

.Step1-disclaimer-2Z3b {
  max-width: 720px;
  font-style: italic;
  color: #828894; }

.Step1-field-wrapper-Gn3b {
  position: relative; }

.Step1-input-error-1E3b {
  border-color: #e7463a; }

.Step1-error-message-1n3b.Step1-error-message-1n3b {
  top: 36px; }
`,""]),o.locals={title:"Step1-title-1Z3b",content:"Step1-content-213b","fields-container":"Step1-fields-container-2V3b","domain-prefix":"Step1-domain-prefix-383b","domain-affix":"Step1-domain-affix-1i3b","at-sign":"Step1-at-sign-2Z3b",disclaimer:"Step1-disclaimer-2Z3b","field-wrapper":"Step1-field-wrapper-Gn3b","input-error":"Step1-input-error-1E3b","error-message":"Step1-error-message-1n3b"}},Jjbe:function(a,o,t){var e=t("/VSt");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},JnYi:function(a,o,t){var e=t("LBIl");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},JqAl:function(a,o,t){"use strict";(function(e){a.exports={isOpera:function(){return e.navigator&&/opera/i.test(e.navigator.userAgent)},isKonqueror:function(){return e.navigator&&/konqueror/i.test(e.navigator.userAgent)},hasDomain:function(){if(!e.document)return!0;try{return!!e.document.domain}catch(r){return!1}}}}).call(this,t("yLpj"))},"JuP+":function(a,o,t){"use strict";(function(e){var r=t("P7XM"),i=t("nzop"),s=t("1eVo");a.exports=function(c){function f(b,h){i.call(this,c.transportName,b,h)}return r(f,i),f.enabled=function(b,h){if(!e.document)return!1;var v=s.extend({},h);return v.sameOrigin=!0,c.enabled(v)&&i.enabled()},f.transportName="iframe-"+c.transportName,f.needBody=!0,f.roundTrips=i.roundTrips+c.roundTrips-1,f.facadeTransport=c,f}}).call(this,t("yLpj"))},Jwdp:function(a,o,t){"use strict";var e=t("rf6O"),r=t.n(e),i=t("OlWo"),s=t.n(i),c=t("k4gB"),f=t("nKUr"),b=t.n(f);function h({onRefresh:v}){return Object(f.jsx)(s.a,{title:Object(c.m)("ui.ed.dashboard.customDomain.serverErrorCard.title"),description:Object(c.m)("ui.ed.dashboard.customDomain.serverErrorCard.description"),iconProps:{name:"warning-cone"},buttonProps:{text:Object(c.m)("ui.ed.dashboard.customDomain.serverErrorCard.buttonText"),onClick:v,startIconProps:{name:"new-refresh"}}})}h.propTypes={onRefresh:r.a.func.isRequired},o.a=h},KAEc:function(a,o,t){"use strict";o.__esModule=!0;function e(y){return y&&y.__esModule?y:{default:y}}var r=t("h9kl"),i=e(r),s=t("dVYT"),c=e(s),f=t("ESiP"),b=t("8wFz"),h=t("JAN0"),v=e(h),O=t("zLjz"),p=e(O),m=t("Cm69"),l=e(m),u=i.default.create;function n(){var y=u();return y.compile=function(j,I){return b.compile(j,I,y)},y.precompile=function(j,I){return b.precompile(j,I,y)},y.AST=c.default,y.Compiler=b.Compiler,y.JavaScriptCompiler=v.default,y.Parser=f.parser,y.parse=f.parse,y.parseWithoutProcessing=f.parseWithoutProcessing,y}var x=n();x.create=n,l.default(x),x.Visitor=p.default,x.default=x,o.default=x,a.exports=o.default},KLUv:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ball-triangle-path > div,
.ball-scale-ripple-multiple > div,
.ball-scale-ripple > div {
  background-color: initial;
  border-color: currentColor; }

.ball-clip-rotate > div {
  background-color: initial;
  border-top-color: currentColor;
  border-right-color: currentColor;
  border-left-color: currentColor; }

.ball-clip-rotate-pulse > div:first-child {
  background-color: currentColor; }

.ball-clip-rotate-pulse > div:last-child {
  background-color: initial;
  border-top-color: currentColor;
  border-bottom-color: currentColor; }

.ball-clip-rotate-multiple > div:first-child {
  background-color: initial;
  border-right-color: currentColor;
  border-left-color: currentColor; }

.ball-clip-rotate-multiple > div:last-child {
  background-color: initial;
  border-top-color: currentColor;
  border-bottom-color: currentColor; }

.triangle-skew-spin > div {
  background-color: initial;
  border-bottom-color: currentColor; }

.pacman > div:nth-child(1),
.pacman > div:nth-child(2) {
  background-color: initial;
  border-top-color: currentColor;
  border-left-color: currentColor;
  border-bottom-color: currentColor; }

.pacman > div:nth-child(3),
.pacman > div:nth-child(4),
.pacman > div:nth-child(5) {
  background-color: currentColor; }
`,""])},KRkA:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.EmptyData-module-container-1z3b {
  display: flex;
  flex-direction: column;
  align-items: center; }
  .EmptyData-module-container-1z3b .EmptyData-module-title-3c3b {
    color: #616c79;
    margin-block-start: 16px; }
  .EmptyData-module-container-1z3b .EmptyData-module-description-1e3b {
    color: #727e8c;
    margin-block-start: 8px;
    margin-block-end: 10px; }
`,""]),o.locals={container:"EmptyData-module-container-1z3b",title:"EmptyData-module-title-3c3b",description:"EmptyData-module-description-1e3b"}},KcJB:function(a,o,t){"use strict";t.d(o,"b",function(){return f});var e=t("faye"),r=t.n(e),i=t("6sMp"),s=t("nKUr"),c=t.n(s);t.d(o,"a",function(){return r.a});function f(v,O={},p,m){return new Promise((l,u)=>{r.a.render(b(v,O,m),p,function(){l(this)})})}function b(v,O={},p){return p?Object(s.jsx)(i.b,Object.assign({},p,{children:Object(s.jsx)(v,Object.assign({},O))})):Object(s.jsx)(v,Object.assign({},O))}function h(v){const O=document.createElement("span");return r.a.render(v,O),O.innerHTML}},KhK4:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.ValidationStatusType=void 0;var r=e(t("cDcd")),i=e(t("2imF")),s=t("etXo"),c=e(t("soQ7")),f=e(t("hSE2")),b=t("rf6O"),h;o.ValidationStatusType=h,function(m){m.SUCCESS="success",m.PENDING="pending",m.ERROR="error"}(h||(o.ValidationStatusType=h={}));var v={success:"message-success",pending:"pending",error:"message-error"},O=function(l){var u=l.status,n=u===void 0?h.SUCCESS:u,x=l.children,y=l.className;return r.default.createElement("div",{className:(0,f.default)(y,c.default["validation-status"],c.default[n])},r.default.createElement(i.default,{name:v[n],iconType:s.ICON_TYPE.SVG,className:(0,f.default)(c.default.icon,c.default["icon-".concat(n)]),innerElementClassName:c.default.iconSVG}),x)};O.propTypes={status:(0,b.oneOf)(["success","pending","error"]),className:b.string};var p=O;o.default=p},Kpqk:function(a,o,t){var e=t("h2Bd");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Kqhr:function(a,o,t){var e=t("YXSV");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},L2to:function(a,o,t){"use strict";t.d(o,"c",function(){return b}),t.d(o,"d",function(){return h}),t.d(o,"a",function(){return v}),t.d(o,"b",function(){return O});var e=t("k4gB");const r=new RegExp("^[a-zA-Z0-9.-]+$"),i=new RegExp("^[a-zA-Z0-9]+"),s=new RegExp("[a-zA-Z0-9]$"),c=new RegExp(".+[.][^.]{2,}$"),f=63,b=p=>p?p.length>f?Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.characterLimit").replace("{characterNumbers}",f):r.test(p)?null:Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainAvailableCharacters"):Object(e.m)("ui.ed.dashboard.clientManagement.clientDataValidation.mandatory"),h=p=>p?p.length>f?Object(e.m)("dashboard.customEmailDomain.connectingDomain.Step1.inputError.characterLimit").replace("{characterNumbers}",f):r.test(p)?!i.test(p)||!s.test(p)?Object(e.m)("dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainStartingEndingCharacters"):null:Object(e.m)("dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainAvailableCharacters"):Object(e.m)("ui.ed.dashboard.clientManagement.clientDataValidation.mandatory"),v=p=>p.length>f?Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.characterLimit").replace("{characterNumbers}",f):p&&!r.test(p)?Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainAvailableCharacters"):null,O=p=>p?!i.test(p)||!s.test(p)?Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainStartingEndingCharacters"):c.test(p)?null:Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.inputError.domainEnding"):Object(e.m)("ui.ed.dashboard.clientManagement.clientDataValidation.mandatory")},LBIl:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CopyTextBox-container-3x3b {
  display: flex;
  align-items: center;
  justify-content: space-between; }

.CopyTextBox-text-3c3b {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-inline-end: 4px;
  user-select: text; }

.CopyTextBox-icon-K13b:hover {
  color: var(--text-on-light) !important;
  opacity: 1; }
`,""]),o.locals={container:"CopyTextBox-container-3x3b",text:"CopyTextBox-text-3c3b",icon:"CopyTextBox-icon-K13b"}},LUOU:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.StatusType=void 0;var r=e(t("lSNA")),i=e(t("cDcd")),s=t("rf6O"),c=e(t("hSE2")),f=e(t("Lwqq")),b=e(t("QSPI")),h={POSITIVE:"positive",NEUTRAL:"neutral",ERROR:"error",PENDING:"pending",PURPLE:"purple",TURQUOISE:"turquoise",DARK_GREY:"darkgrey"};o.StatusType=h;var v=function(m){var l=m.className,u=m.text,n=m.type,x=n===void 0?h.NEUTRAL:n,y=m.toolTip,j=m.children,I=m.dataAuto,C=i.default.createElement("div",{className:(0,c.default)(l,f.default.status,f.default[x],(0,r.default)({},f.default["with-tooltip"],!!y)),"data-auto":I||"status"},u||j);return y?i.default.createElement(b.default,{toolTip:y,toolTipPosition:"top",className:f.default["status-tooltip"]},C):C};v.defaultProps={type:h.NEUTRAL},v.propTypes={text:s.string,type:s.string,className:s.string,toolTip:s.string,dataAuto:s.string};var O=v;o.default=O},Lg8R:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.BadgeIcon-module-circle-243b {
  box-sizing: border-box;
  background: #e33e3b;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  border: 1px solid #ffffff;
  color: #ffffff;
  font-size: 11px; }
`,""]),o.locals={circle:"BadgeIcon-module-circle-243b"}},Lwqq:function(a,o,t){var e=t("Dbio");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},MHSY:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PopoverHover-module-container-1X3b {
  display: inline-block;
  position: relative; }

.PopoverHover-module-arrow-Ke3b,
.PopoverHover-module-arrow-Ke3b::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
  z-index: 99; }

.PopoverHover-module-arrow-Ke3b {
  visibility: hidden;
  background: #ffffff; }

.PopoverHover-module-arrow-Ke3b::before {
  visibility: visible;
  content: '';
  transform: rotate(45deg); }

.PopoverHover-module-popper-1R3b[data-popper-placement^='top'] > .PopoverHover-module-arrow-Ke3b {
  bottom: calc(8px / -2); }
  .PopoverHover-module-popper-1R3b[data-popper-placement^='top'] > .PopoverHover-module-arrow-Ke3b::before {
    border-right: 1px solid #ced6d9;
    border-bottom: 1px solid #ced6d9; }

.PopoverHover-module-popper-1R3b[data-popper-placement^='bottom'] > .PopoverHover-module-arrow-Ke3b {
  top: calc(8px / -2); }
  .PopoverHover-module-popper-1R3b[data-popper-placement^='bottom'] > .PopoverHover-module-arrow-Ke3b::before {
    border-left: 1px solid #ced6d9;
    border-top: 1px solid #ced6d9; }

.PopoverHover-module-popper-1R3b[data-popper-placement^='left'] > .PopoverHover-module-arrow-Ke3b {
  right: calc(8px / -2); }
  .PopoverHover-module-popper-1R3b[data-popper-placement^='left'] > .PopoverHover-module-arrow-Ke3b::before {
    border-right: 1px solid #ced6d9;
    border-top: 1px solid #ced6d9; }

.PopoverHover-module-popper-1R3b[data-popper-placement^='right'] > .PopoverHover-module-arrow-Ke3b {
  left: calc(8px / -2); }
  .PopoverHover-module-popper-1R3b[data-popper-placement^='right'] > .PopoverHover-module-arrow-Ke3b::before {
    border-left: 1px solid #ced6d9;
    border-bottom: 1px solid #ced6d9; }
`,""]),o.locals={container:"PopoverHover-module-container-1X3b",arrow:"PopoverHover-module-arrow-Ke3b",popper:"PopoverHover-module-popper-1R3b"}},MJcu:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ValidateRecords-module-status-2G3b {
  margin-block-end: 16px; }

.ValidateRecords-module-title-3_3b {
  display: flex;
  align-items: center; }
`,""]),o.locals={status:"ValidateRecords-module-status-2G3b",title:"ValidateRecords-module-title-3_3b"}},MOm0:function(a,o,t){var e=t("xLgD");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Mjr1:function(a,o,t){"use strict";var e=t("hzps"),r=t.n(e),i=t("LUOU"),s=t.n(i),c=t("3kd8"),f=t.n(c),b=t("G6Oi"),h=t.n(b),v=t("zj6R"),O=t.n(v),p=t("rf6O"),m=t.n(p),l=t("k4gB"),u=t("TSYQ"),n=t.n(u),x=t("nKUr"),y=t.n(x);function j({success:I,onEditClick:C,domain:S,subtitle:T,inlineMessageText:R,errorMessageText:M,onCheckRecordsClick:A}){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:n()(O.a["title-wrapper"],{[O.a.row]:I}),children:[Object(x.jsx)(r.a,{noPadding:!0,className:O.a.title,text:Object(l.m)("dashboard.customDomain.currentDomainIs")}),Object(x.jsxs)("div",{className:O.a["status-wrapper"],children:[Object(x.jsx)(s.a,{className:O.a.status,text:S,type:I?i.StatusType.POSITIVE:i.StatusType.NEUTRAL,dataAuto:"connected-domain-text"}),!!C&&Object(x.jsx)(f.a,{onClick:C,className:O.a.link,text:Object(l.m)("dashboard.customDomain.edit")})]})]}),R&&Object(x.jsx)(h.a,{type:b.MESSAGE_TYPE.INLINE,alertType:b.ALERT_TYPE.NOTE,grayBackground:!0,shadow:!1,className:O.a["inline-message"],children:R}),M&&Object(x.jsxs)(h.a,{type:b.MESSAGE_TYPE.INLINE,alertType:b.ALERT_TYPE.ERROR,grayBackground:!0,shadow:!1,className:O.a["inline-message"],children:[M," ",A&&Object(x.jsx)(f.a,{className:O.a["message-link"],text:Object(l.m)("dashboard.customDomain.dashboardDomain.checkRecords"),onClick:A})]}),T&&Object(x.jsx)("div",{className:O.a.subtitle,children:T})]})}j.propTypes={success:p.bool,subtitle:p.string,domain:p.string.isRequired,onEditClick:p.func,onCheckRecordsClick:p.func,inlineMessageText:Object(p.oneOfType)([p.string,p.element]),errorMessageText:p.string},o.a=j},MoYz:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardFooterView-container-bj3b {
  display: flex;
  justify-content: space-between;
  padding-top: 23px; }
  .CardFooterView-container-bj3b .CardFooterView-footer-left-side-OV3b {
    display: flex; }
    .CardFooterView-container-bj3b .CardFooterView-footer-left-side-OV3b .CardFooterView-date-2l3b {
      font-family: 'Source Sans Pro';
      font-size: 14px;
      color: #9f9f9f;
      padding-top: 0px;
      padding-bottom: 0px;
      margin-inline-end: 13px; }
  .CardFooterView-container-bj3b .CardFooterView-read-more-ID3b {
    display: flex;
    cursor: pointer;
    margin-inline-start: 20px; }
    .CardFooterView-container-bj3b .CardFooterView-read-more-ID3b .CardFooterView-read-more-link-8n3b {
      font-family: 'Source Sans Pro';
      font-size: 14px;
      color: #226eaf;
      padding-inline-end: 7px; }
    .CardFooterView-container-bj3b .CardFooterView-read-more-ID3b .CardFooterView-read-more-icon-1e3b {
      border: 1px solid #226eaf;
      border-radius: 50%;
      transform: rotateY(180deg);
      height: auto; }

.whats-new-popup-mobile .CardFooterView-container-bj3b {
  padding-top: 15px; }
`,""]),o.locals={container:"CardFooterView-container-bj3b","footer-left-side":"CardFooterView-footer-left-side-OV3b",date:"CardFooterView-date-2l3b","read-more":"CardFooterView-read-more-ID3b","read-more-link":"CardFooterView-read-more-link-8n3b","read-more-icon":"CardFooterView-read-more-icon-1e3b"}},N1n0:function(a,o,t){"use strict";t.d(o,"b",function(){return p}),t.d(o,"a",function(){return l});var e=t("GoyQ"),r=t.n(e),i=t("6sMp"),s=t("2vnA"),c=t("289u"),f=t("rf6O"),b=t.n(f),h=t("cDcd"),v=t.n(h);const O=i.a.objectOrObservableObject;function p(u){return function(x=[]){return function(y){if(!Array.isArray(x)||!x.length)return Object(i.c)(y);const j=x.reduce((S,T)=>Object.assign({},S,{[T]:O}),{});y.propTypes=Object.assign({},y.propTypes||{},j),y.contextTypes=Object.assign({},y.contextTypes||{},{mobxStores:b.a.object}),y.prototype.getStore=function(S,T){const R=T||this.props,A=(R[S]?R:this.context.mobxStores||{})[S]||u[S];return A||Object(c.q)(`warning: store '${S}' wasn't supplied to <${y.displayName} />. Check that <Provider /> exists or that the store is passed as a prop.`),A};const I=y.prototype.UNSAFE_componentWillMount||(()=>({}));y.prototype.UNSAFE_componentWillMount=function(...S){const T=this.stores||{},R=x.reduce((M,A)=>Object.assign({},M,{[A]:this.getStore(A)}),{});return this.stores=Object.assign({},T,R),I.apply(this,S)};const C=y.prototype.UNSAFE_componentWillReceiveProps||(()=>({}));return y.prototype.UNSAFE_componentWillReceiveProps=function(S,T,R){const M=this.stores||{},A=x.reduce((W,P)=>Object.assign({},W,{[P]:this.getStore(P,S)}),{});return this.stores=Object.assign({},M,A),C.call(this,S,T,R)},Object(i.c)(y)}}}function m(u={},n=[]){Object(s.g)(u,{}),n.forEach(x=>{const y=u[x];r()(y)?Object(s.n)(u,x,s.m.map(y)):Object(s.n)(u,x,y)})}const l=Object(h.createContext)()},N5mZ:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PromoBanner-container-bk3b {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block-start: 10px;
  padding-block-end: 10px;
  box-shadow: 0 1px 2px 0 rgba(71, 64, 64, 0.18);
  background-color: white;
  width: 100%;
  margin: 0;
  top: 0; }
  .PromoBanner-container-bk3b .PromoBanner-content-2i3b {
    display: flex;
    align-items: center; }
    .PromoBanner-container-bk3b .PromoBanner-content-2i3b .PromoBanner-banner-title-373b {
      font-size: 16px;
      font-family: 'Source Sans Pro';
      font-weight: 600;
      padding: 0;
      margin-inline-end: 7px; }
    .PromoBanner-container-bk3b .PromoBanner-content-2i3b .PromoBanner-banner-text-353b {
      color: #617379;
      font-size: 14px;
      font-family: 'Source Sans Pro';
      padding: 0;
      margin-inline-end: 10px; }
    .PromoBanner-container-bk3b .PromoBanner-content-2i3b .PromoBanner-banner-button-1c3b {
      background-color: #3ac280;
      border-radius: 100px;
      color: #f7f7f7;
      font-weight: 600;
      font-size: 13px;
      padding: 3px 24px;
      cursor: pointer;
      height: 25px; }
`,""]),o.locals={container:"PromoBanner-container-bk3b",content:"PromoBanner-content-2i3b","banner-title":"PromoBanner-banner-title-373b","banner-text":"PromoBanner-banner-text-353b","banner-button":"PromoBanner-banner-button-1c3b"}},N6jy:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=t("cDcd"),i=e(t("rf6O")),s=t("faye");const c=i.default.string;function f({children:h,portalRootSelector:v="body"}){const O=(0,r.useRef)(document.createElement("div")),p=O.current;return(0,r.useEffect)(()=>{const m=document.querySelector(v);return m.appendChild(p),()=>{m.removeChild(p)}},[v,p]),(0,s.createPortal)(h,p)}f.propTypes={portalRootSelector:c};var b=f;o.default=b},N94O:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ManageStoreIframe-store-panel-3w3b {
  display: block;
  overflow: auto;
  min-height: calc(100vh - 120px);
  width: 100%; }
  .ManageStoreIframe-store-panel-3w3b .ManageStoreIframe-store-frame-2f3b {
    width: 100%;
    display: flex;
    min-height: calc(100vh - 145px); }
  .ManageStoreIframe-store-panel-3w3b .ManageStoreIframe-close-container-3U3b {
    display: flex;
    height: 25px;
    align-items: center;
    justify-content: space-between;
    padding-block-start: 0;
    padding-inline-end: 5px;
    padding-block-end: 0;
    padding-inline-start: 5px; }
    .ManageStoreIframe-store-panel-3w3b .ManageStoreIframe-close-container-3U3b .ManageStoreIframe-store-panel-title-1f3b {
      color: #5f5f5f;
      top: 6px;
      left: 51px;
      height: 20px;
      font-size: 16px; }
`,""]),o.locals={"store-panel":"ManageStoreIframe-store-panel-3w3b","store-frame":"ManageStoreIframe-store-frame-2f3b","close-container":"ManageStoreIframe-close-container-3U3b","store-panel-title":"ManageStoreIframe-store-panel-title-1f3b"}},Natf:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-pulse > div {
  width: 27px;
  height: 27px;
  background-color: currentColor;
  border-radius: 100%;
  animation: sk-scaleout 1.0s infinite ease-in-out; }

@keyframes sk-scaleout {
  0% {
    transform: scale(0);
    -webkit-transform: scale(0); }
  100% {
    transform: scale(1);
    -webkit-transform: scale(1);
    opacity: 0; } }
`,""])},Nr1Y:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Footer-footer-3M3b {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px; }
  .Footer-footer-3M3b .Footer-scroll-down-icon-container-1o3b {
    display: flex;
    align-self: stretch;
    flex-direction: inherit; }
    .Footer-footer-3M3b .Footer-scroll-down-icon-container-1o3b .Footer-scroll-down-icon-383b {
      cursor: pointer;
      height: auto;
      color: #607379;
      animation: Footer-bounce-2A3b 5s infinite; }

@keyframes Footer-bounce-2A3b {
  0%,
  8% {
    transform: translateY(0); }
  16% {
    transform: translateY(-10px); }
  20% {
    transform: translateY(0); }
  24% {
    transform: translateY(-5px); }
  32%,
  100% {
    transform: translateY(0); } }
  .Footer-footer-3M3b .Footer-view-all-button-1C3b {
    min-width: 121px;
    height: 29px;
    font-size: 13px;
    font-weight: bold;
    animation: Footer-fadeInUp-Yo3b 1s; }

@keyframes Footer-fadeInUp-Yo3b {
  from {
    opacity: 0;
    transform: translateY(20px); }
  to {
    transform: translateY(0px);
    opacity: 1; } }

.Footer-footer-with-checkbox-2y3b {
  min-height: 91px;
  flex-direction: column; }
  .Footer-footer-with-checkbox-2y3b .Footer-hide-checkbox-mU3b {
    margin-top: 11px; }
  .Footer-footer-with-checkbox-2y3b .Footer-hide-checkbox-inner-3Y3b.Footer-hide-checkbox-inner-3Y3b {
    padding-inline-start: 2.1em; }
  .Footer-footer-with-checkbox-2y3b .Footer-hide-checkbox-not-visible-1X3b {
    display: none; }
`,""]),o.locals={footer:"Footer-footer-3M3b","scroll-down-icon-container":"Footer-scroll-down-icon-container-1o3b","scroll-down-icon":"Footer-scroll-down-icon-383b",bounce:"Footer-bounce-2A3b","view-all-button":"Footer-view-all-button-1C3b",fadeInUp:"Footer-fadeInUp-Yo3b","footer-with-checkbox":"Footer-footer-with-checkbox-2y3b","hide-checkbox":"Footer-hide-checkbox-mU3b","hide-checkbox-inner":"Footer-hide-checkbox-inner-3Y3b","hide-checkbox-not-visible":"Footer-hide-checkbox-not-visible-1X3b"}},Nzke:function(a,o,t){var e=t("MJcu");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"O/yO":function(a,o,t){var e=t("1PY+");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},O0De:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ConnectedCustomDomain-text-wrapper-2j3b {
  font-size: 14px;
  line-height: 1.57;
  color: #313131;
  margin-block-end: 4px; }

.ConnectedCustomDomain-disclaimer-wrapper-1r3b {
  font-size: 14px;
  color: #828894;
  font-style: italic; }

.ConnectedCustomDomain-status-1c3b {
  margin-inline-start: 8px; }

.ConnectedCustomDomain-button-2k3b {
  text-decoration: underline;
  cursor: pointer; }

.ConnectedCustomDomain-message-133b.ConnectedCustomDomain-message-133b {
  width: 632px;
  padding-block-start: 13px;
  padding-block-end: 13px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  margin-block-start: 8px;
  margin-block-end: 8px; }
`,""]),o.locals={"text-wrapper":"ConnectedCustomDomain-text-wrapper-2j3b","disclaimer-wrapper":"ConnectedCustomDomain-disclaimer-wrapper-1r3b",status:"ConnectedCustomDomain-status-1c3b",button:"ConnectedCustomDomain-button-2k3b",message:"ConnectedCustomDomain-message-133b"}},O9di:function(a,o,t){var e=t("AEXz");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},OIi6:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("pVnL")),s=e(t("RIqP")),c=e(t("lSNA")),f=e(t("QILm")),b=e(t("J4zp")),h=I(t("cDcd")),v=e(t("hSE2")),O=e(t("9Pyt")),p=e(t("s/Ma")),m=t("I7VN"),l=e(t("XB9H")),u=e(t("ryzx")),n=e(t("6wSL")),x=t("SZaD"),y=["modifiers"];function j(M){if(typeof WeakMap!="function")return null;var A=new WeakMap,W=new WeakMap;return(j=function(L){return L?W:A})(M)}function I(M,A){if(!A&&M&&M.__esModule)return M;if(M===null||r(M)!=="object"&&typeof M!="function")return{default:M};var W=j(A);if(W&&W.has(M))return W.get(M);var P={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in M)if(k!=="default"&&Object.prototype.hasOwnProperty.call(M,k)){var G=L?Object.getOwnPropertyDescriptor(M,k):null;G&&(G.get||G.set)?Object.defineProperty(P,k,G):P[k]=M[k]}return P.default=M,W&&W.set(M,P),P}function C(M,A){var W=Object.keys(M);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(M);A&&(P=P.filter(function(L){return Object.getOwnPropertyDescriptor(M,L).enumerable})),W.push.apply(W,P)}return W}function S(M){for(var A=1;A<arguments.length;A++){var W=arguments[A]!=null?arguments[A]:{};A%2?C(Object(W),!0).forEach(function(P){(0,c.default)(M,P,W[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(W)):C(Object(W)).forEach(function(P){Object.defineProperty(M,P,Object.getOwnPropertyDescriptor(W,P))})}return M}var T=function(A){var W=A.text,P=A.icon,L=A.children,k=A.className,G=A.buttonClassName,Y=A.buttonProps,J=A.tipClassName,X=A.parentMenuSelector,at=A.position,z=at===void 0?"bottom-end":at,F=A.additionalPopperProps,rt=F===void 0?{}:F,ct=A.optionsWrapperClassName,dt=A.open,vt=A.defaultOpen,Ot=vt===void 0?!1:vt,Mt=A.onMouseLeave,Rt=A.onChange,Yt=A.closeOnScroll,re=Yt===void 0?!1:Yt,Xt=A.closeOnMouseLeave,pe=Xt===void 0?!0:Xt,de=A.menuDomAttrs,se=A["data-auto"];(0,n.default)({controlPropValue:dt,controlPropName:"open",componentName:"FloatingMenu",hasOnChange:!!Rt,onChangePropName:"onChange",initialValuePropName:"defaultOpen"});var Qt=(0,h.useRef)(null),St=(0,h.useState)(null),Ut=(0,b.default)(St,2),zt=Ut[0],Jt=Ut[1],ge=(0,h.useState)(null),fe=(0,b.default)(ge,2),ce=fe[0],Vt=fe[1],nt=(0,h.useState)(null),st=(0,b.default)(nt,2),ot=st[0],pt=st[1],gt=rt.modifiers,Lt=(0,f.default)(rt,y),it=(0,m.usePopper)(ce,zt,S({modifiers:[{name:"arrow",options:{element:ot,padding:4}},{name:"offset",options:{offset:[4,8]}}].concat((0,s.default)(gt||[])),placement:z},Lt)),ht=it.styles,H=it.attributes,N=it.forceUpdate,U=(0,h.useState)(Ot),q=(0,b.default)(U,2),w=q[0],Z=q[1],mt=!u.default.isNil(dt),Et=mt?dt:w,It=(0,h.useCallback)(function(jt){Rt&&Rt(!Et,jt),mt||Z(function(wt){return!wt})},[mt,Rt,Et]);(0,h.useEffect)(function(){Et&&N&&N()},[N,Et]);var lt=(0,v.default)("menu-options-wrapper",{"menu-options-wrapper--open":Et},ct),et=(0,h.useCallback)(function(){mt||Z(!1)},[mt]),kt=(0,h.useCallback)(function(){pe&&et(),Mt&&Mt()},[et,Mt,pe]),Bt=function(wt){return function(){var Zt;wt.props.onClick&&(Zt=wt.props).onClick.apply(Zt,arguments),et()}};(0,x.useCloseOnClickOutsideMenu)(Qt,et),(0,x.useCloseMenuOnScroll)(re,et);var At=h.default.createElement("div",(0,i.default)({ref:Jt,role:"menu",className:lt,"data-auto":"options-wrapper",onMouseLeave:kt,style:ht.popper,"aria-hidden":!Et},H.popper,de),h.default.createElement("div",(0,i.default)({id:"arrow",ref:pt,style:ht.arrow,className:J},H.arrow)),h.default.Children.toArray(L).filter(Boolean).map(function(jt,wt){return h.default.cloneElement(jt,{key:wt,onClick:Bt(jt),className:(0,v.default)(jt.props.className,"menu-options-wrapper__option")})}));return h.default.Children.toArray(L).length<=0?null:h.default.createElement("div",{ref:Qt},h.default.createElement("div",{className:(0,v.default)(p.default.main,k),"data-auto":se},h.default.createElement(O.default,(0,i.default)({className:(0,v.default)(p.default["menu-opener"],G),ref:Vt,"data-auto":"opener",secondary:!0,svgIcon:!0,iconSize:16,text:W,leftIcon:P,"aria-haspopup":!0,onClick:It,shouldStopPropagation:!0,domAttrs:{"aria-expanded":Et,"aria-label":W||"menu-opener"}},Y))),X?h.default.createElement(l.default,{portalRootSelector:X},At):At)},R=T;o.default=R},OOOG:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-wandering-cubes {
  width: 52px;
  height: 52px;
  position: relative; }

.sk-wandering-cubes > div {
  background-color: currentColor;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  animation: sk-cubemove 1.8s infinite ease-in-out; }

.sk-wandering-cubes > div:last-child {
  animation-delay: -0.9s; }

@keyframes sk-cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5); }
  50% {
    /* Hack to make FF rotate in the right direction */
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg); }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg); }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg); } }
`,""])},OP3k:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SearchTextBox-textbox-1_3b .textBox--input {
  border-radius: 30px;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  background: #f2f2f2;
  height: 32px;
  opacity: 1;
  transition: padding-inline-end 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease 0.1s;
  box-sizing: border-box; }

.SearchTextBox-square-2x3b .SearchTextBox-textbox-1_3b .textBox--input {
  border-radius: 3px; }

.SearchTextBox-searchIcon-X63b {
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  height: auto;
  margin-top: -1px;
  color: #617379;
  cursor: pointer;
  transition: left 0.3s ease; }
  [dir='rtl'] .SearchTextBox-searchIcon-X63b {
    right: 10px;
    left: auto; }

.SearchTextBox-clearIcon-3g3b {
  position: absolute;
  z-index: 10;
  top: calc(50% + 2px);
  transform: translateY(-50%);
  right: 10px;
  height: auto;
  margin-top: -1px;
  color: #617379;
  cursor: pointer; }
  [dir='rtl'] .SearchTextBox-clearIcon-3g3b {
    left: 10px;
    right: auto; }

.SearchTextBox-main-3y3b {
  position: relative;
  transition: width 0.3s linear;
  width: 100%; }
  .SearchTextBox-main-3y3b.SearchTextBox-collapsed-283b {
    width: 0 !important; }
    .SearchTextBox-main-3y3b.SearchTextBox-collapsed-283b .SearchTextBox-searchIcon-X63b {
      left: -5px; }
    .SearchTextBox-main-3y3b.SearchTextBox-collapsed-283b .textBox--input {
      padding-inline-end: 0;
      background-color: transparent;
      border: none;
      box-shadow: none;
      opacity: 0; }
    .SearchTextBox-main-3y3b.SearchTextBox-collapsed-283b .SearchTextBox-clearIcon-3g3b {
      display: none; }
  .SearchTextBox-main-3y3b.SearchTextBox-shrink-2L3b .SearchTextBox-textbox-1_3b .textBox--input {
    padding-inline-end: 0;
    color: transparent; }
  .SearchTextBox-main-3y3b.SearchTextBox-shrink-2L3b .SearchTextBox-clearIcon-3g3b {
    display: none; }
  .SearchTextBox-main-3y3b.SearchTextBox-mobile-293b .SearchTextBox-textbox-1_3b .textBox--input {
    border-radius: 6px;
    box-shadow: none;
    border: none;
    height: 39px; }
  .SearchTextBox-main-3y3b.SearchTextBox-mobile-293b input::placeholder {
    font-family: Source sans pro; }
  .SearchTextBox-main-3y3b.SearchTextBox-mobile-293b .SearchTextBox-searchIcon-X63b {
    color: #bfbfbf; }
`,""]),o.locals={textbox:"SearchTextBox-textbox-1_3b",square:"SearchTextBox-square-2x3b",searchIcon:"SearchTextBox-searchIcon-X63b",clearIcon:"SearchTextBox-clearIcon-3g3b",main:"SearchTextBox-main-3y3b",collapsed:"SearchTextBox-collapsed-283b",shrink:"SearchTextBox-shrink-2L3b",mobile:"SearchTextBox-mobile-293b"}},OThS:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.LanguageItemView-container-3d3b {
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--header-border-color);
  height: 42px;
  background-color: var(--header-color);
  color: var(--header-text-color);
  user-select: none; }
  .LanguageItemView-container-3d3b .LanguageItemView-used-language-Hr3b {
    margin-inline-start: 15px; }
  .LanguageItemView-container-3d3b .LanguageItemView-languages-2a3b {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
    position: absolute;
    right: 100%;
    top: calc(100% - 42px);
    background-color: var(--header-color);
    width: 170px;
    color: var(--header-text-color);
    border-right: 1px solid var(--header-border-color);
    border-bottom: 1px solid var(--header-border-color);
    border-left: 1px solid var(--header-border-color); }
    .LanguageItemView-container-3d3b .LanguageItemView-languages-2a3b .LanguageItemView-language-3m3b {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding-inline-start: 15px;
      height: 42px;
      border-top: 1px solid var(--header-border-color); }
      .LanguageItemView-container-3d3b .LanguageItemView-languages-2a3b .LanguageItemView-language-3m3b:hover {
        color: var(--button-color); }
  .LanguageItemView-container-3d3b:hover .LanguageItemView-languages-2a3b {
    opacity: 1;
    visibility: visible; }
  .LanguageItemView-container-3d3b:hover {
    color: var(--button-color); }
`,""]),o.locals={container:"LanguageItemView-container-3d3b","used-language":"LanguageItemView-used-language-Hr3b",languages:"LanguageItemView-languages-2a3b",language:"LanguageItemView-language-3m3b"}},OWPg:function(a,o,t){var e=t("avLR");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"OX/4":function(a,o,t){"use strict";var e=t("woL0"),r=t("Yh+D"),i=t("P7XM"),s=t("raCH").EventEmitter,c=t("E8Ah"),f=function(){};function b(h,v,O){if(!b.enabled())throw new Error("Transport created when disabled");s.call(this),f("constructor",h);var p=this,m=r.addPath(h,"/websocket");m.slice(0,5)==="https"?m="wss"+m.slice(5):m="ws"+m.slice(4),this.url=m,this.ws=new c(this.url,[],O),this.ws.onmessage=function(l){f("message event",l.data),p.emit("message",l.data)},this.unloadRef=e.unloadAdd(function(){f("unload"),p.ws.close()}),this.ws.onclose=function(l){f("close event",l.code,l.reason),p.emit("close",l.code,l.reason),p._cleanup()},this.ws.onerror=function(l){f("error event",l),p.emit("close",1006,"WebSocket connection broken"),p._cleanup()}}i(b,s),b.prototype.send=function(h){var v="["+h+"]";f("send",v),this.ws.send(v)},b.prototype.close=function(){f("close");var h=this.ws;this._cleanup(),h&&h.close()},b.prototype._cleanup=function(){f("_cleanup");var h=this.ws;h&&(h.onmessage=h.onclose=h.onerror=null),e.unloadDel(this.unloadRef),this.unloadRef=this.ws=null,this.removeAllListeners()},b.enabled=function(){return f("enabled"),!!c},b.transportName="websocket",b.roundTrips=2,a.exports=b},OXM4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.FeatureLock-module-main-1p3b {
  max-width: 300px;
  position: relative;
  border-radius: 3px;
  padding-block-start: 23px;
  padding-inline-end: 20px;
  padding-block-end: 25px;
  padding-inline-start: 20px;
  box-sizing: border-box;
  z-index: 2;
  box-shadow: 4px 4px 8px 0px rgba(64, 65, 71, 0.28);
  background-color: #ffffff;
  text-align: center; }
  .FeatureLock-module-main-1p3b:before {
    border-radius: 3px;
    content: ' ';
    border: 1px solid #ced6d9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; }
  .FeatureLock-module-main-1p3b:after {
    position: absolute;
    top: -25px;
    left: 50%;
    margin-inline-start: -25px;
    width: 50px;
    height: 50px;
    content: ' ';
    background-color: #3ac280;
    background-image: url("//dd-cdn.multiscreensite.com/editor/assets/svgs/upgrade_lock.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px 18px;
    border-radius: 50%;
    border: 5px solid white;
    box-sizing: border-box; }

.FeatureLock-module-feature-3C3b {
  font-family: 'Source Sans Pro';
  color: #313131;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  padding-block-start: 0;
  padding-inline-end: 0;
  padding-block-end: 10px;
  padding-inline-start: 20px;
  position: relative; }
  .FeatureLock-module-feature-3C3b:before {
    background-image: url("//dd-cdn.multiscreensite.com/editor/assets/svgs/v.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    content: ' ';
    width: 12px;
    height: 12px;
    left: 0;
    top: calc(50% - 9px); }

.FeatureLock-module-title-r63b {
  font-family: Roboto;
  font-weight: 400;
  font-size: 16px;
  padding-block-end: 5px;
  color: #313131; }

.FeatureLock-module-sub-title-_j3b {
  font-size: 14px;
  font-style: italic;
  color: #828894;
  font-family: 'Source Sans Pro';
  margin-block-start: 15px; }

.FeatureLock-module-featuresWrapper-2v3b {
  padding-block-start: 10px;
  padding-inline-end: 20px;
  padding-block-end: 10px;
  padding-inline-start: 20px; }

.FeatureLock-module-button-3p3b {
  width: 162px;
  box-sizing: border-box; }
`,""]),o.locals={main:"FeatureLock-module-main-1p3b",feature:"FeatureLock-module-feature-3C3b",title:"FeatureLock-module-title-r63b","sub-title":"FeatureLock-module-sub-title-_j3b",featuresWrapper:"FeatureLock-module-featuresWrapper-2v3b",button:"FeatureLock-module-button-3p3b"}},Of9q:function(a,o,t){var e=t("P2Hv");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},OhMr:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=e(t("rf6O")),c=e(t("TSYQ")),f=e(t("PTKC")),b=t("nKUr");function h(l,u){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(l);u&&(x=x.filter(function(y){return Object.getOwnPropertyDescriptor(l,y).enumerable})),n.push.apply(n,x)}return n}function v(l){for(var u=1;u<arguments.length;u++){var n=arguments[u]!=null?arguments[u]:{};u%2?h(Object(n),!0).forEach(function(x){(0,r.default)(l,x,n[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(x){Object.defineProperty(l,x,Object.getOwnPropertyDescriptor(n,x))})}return l}const O=l=>{let u=l.className,n=l.children,x=(0,i.default)(l,["className","children"]);return(0,b.jsx)("div",v(v({className:(0,c.default)(f.default.container,u),"data-auto":"card"},x),{},{children:n}))},p=s.default.string;O.propTypes={className:p};var m=O;o.default=m},OlWo:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("pVnL")),s=e(t("cDcd")),c=t("rf6O"),f=e(t("hSE2")),b=e(t("Vb+u")),h=m(t("2imF")),v=e(t("M4Wz")),O=e(t("lOfb"));function p(n){if(typeof WeakMap!="function")return null;var x=new WeakMap,y=new WeakMap;return(p=function(I){return I?y:x})(n)}function m(n,x){if(!x&&n&&n.__esModule)return n;if(n===null||r(n)!=="object"&&typeof n!="function")return{default:n};var y=p(x);if(y&&y.has(n))return y.get(n);var j={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in n)if(C!=="default"&&Object.prototype.hasOwnProperty.call(n,C)){var S=I?Object.getOwnPropertyDescriptor(n,C):null;S&&(S.get||S.set)?Object.defineProperty(j,C,S):j[C]=n[C]}return j.default=n,y&&y.set(n,j),j}function l(n){var x=n.title,y=n.description,j=n.className,I=n.iconProps,C=n.children,S=n.buttonProps;return s.default.createElement("div",{className:(0,f.default)(b.default.container,j)},I&&s.default.createElement(h.default,(0,i.default)({iconType:h.Type.SVG,size:85},I)),x&&s.default.createElement(O.default,{variant:"h6",className:b.default.title},x),y&&s.default.createElement(O.default,{variant:"body",className:b.default.description},y),S&&s.default.createElement(v.default,(0,i.default)({type:"text",size:"small"},S)),C)}l.propTypes={title:c.string,description:c.string,className:c.string,children:c.node,iconProps:c.object,buttonProps:c.object};var u=l;o.default=u},Ozdf:function(a,o,t){var e=t("n3cV");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},P2Hv:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DefaultDomainChangeCardContent-module-message-dW3b {
  margin-block-start: -63px;
  margin-block-end: 18px;
  display: flex; }
`,""]),o.locals={message:"DefaultDomainChangeCardContent-module-message-dW3b"}},P8Th:function(a,o,t){"use strict";t.d(o,"b",function(){return m});var e=t("cDcd"),r=t.n(e),i=t("Ty5D"),s=t("rf6O"),c=t.n(s),f=t("XYu/"),b=t("WArL"),h=t("LyWx"),v=t("nKUr"),O=t.n(v);function p({shellData:l,children:u}){const[n,x]=Object(e.useState)(Object.assign({},l,{spinnerOptions:{},isUIBlocked:!1,oldDashboardSrc:b.b,navigateOldDashboardTo:()=>{},isNewDashboard:!1})),[y,j]=Object(e.useState)(!1),[I,C]=Object(e.useState)(!1),S=Object(i.i)(),T=Y=>x(J=>Object.assign({},J,Y)),R=(Y={})=>{T({isUIBlocked:!0,spinnerOptions:Y})},M=()=>{T({isUIBlocked:!1,spinnerOptions:{}})},A=Object(e.useCallback)(()=>n.oldDashboardSrc!==b.b,[n.oldDashboardSrc]),W=Object(e.useCallback)(Y=>{A()||T({oldDashboardSrc:Y})},[A]),P=Y=>{T({navigateOldDashboardTo:Y})},L=Y=>{T({account:Object.assign({},n.account,{firstName:Y})})},k=Y=>{T({account:Object.assign({},n.account,{lastName:Y})})},G=Y=>{T({account:Object.assign({},n.account,{name:Y})})};return Object(e.useEffect)(()=>{const Y=b.d.some(J=>Object(i.g)(S.pathname,{path:J}));j(Y)},[S.pathname]),Object(v.jsx)(f.a.Provider,{value:Object.assign({},n,{blockUI:R,unblockUI:M,isOldDashboardInitialized:A,setOldDashboardInitialSrc:W,setNavigateOldDashboardTo:P,setFirstName:L,setLastName:k,setName:G,isNewDashboardPage:y,setIsNewDashboardPage:j,isTopBannerShown:I,setIsTopBannerShown:C,isWhiteLabel:n.environment.productType===h.u.RESELLER}),children:u})}p.propTypes={shellData:Object(s.shape)({account:Object(s.shape)({id:s.number.isRequired,name:s.string.isRequired,firstName:s.string,lastName:s.string,email:s.string.isRequired,localeId:s.number.isRequired,localeCode:s.string.isRequired,planType:s.string.isRequired,isCustomer:s.bool.isRequired,isStaffMember:s.bool.isRequired,isWLReseller:s.bool.isRequired,isProductOwner:s.bool.isRequired,productUniqueId:s.number,accountOwnerEmail:s.string.isRequired,isInTrial:s.bool.isRequired,trialDays:s.number.isRequired,daysBeforeTrialEnds:s.number.isRequired,isNewPricing:s.bool.isRequired,isEligibleForAutoBilling:s.bool.isRequired,isIVRAutomaticallydBilled:s.bool.isRequired,isEligibleForStripeAccount:s.bool.isRequired,hasPayments:s.bool.isRequired,creationDate:s.string.isRequired,permissions:Object(s.objectOf)(s.bool).isRequired,permissionsForAtLeastOneSite:Object(s.objectOf)(s.bool).isRequired,featuresInPlan:Object(s.objectOf)(s.bool).isRequired,isSuperAdmin:s.bool.isRequired,dudaHelpUrl:s.string.isRequired,wlHelpUrl:s.string.isRequired,logo:s.string.isRequired}).isRequired,environment:Object(s.shape)({productType:Object(s.oneOf)(Object.values(h.u)).isRequired}).isRequired,dashboard:Object(s.shape)({footerLinks:Object(s.shape)({privacy:s.string.isRequired,terms:s.string.isRequired,contact:s.string.isRequired}).isRequired}).isRequired}).isRequired};function m(){const l=Object(e.useContext)(f.a);if(l===void 0)throw new Error("useShell must be used within a ShellProvider");return l}o.a=p},PDX0:function(a,o){(function(t){a.exports=t}).call(this,{})},PTKC:function(a,o,t){var e=t("e64j");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"Pd+x":function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.FooterItem=v,o.default=void 0;var r=t("cDcd"),i=t("rf6O"),s=e(t("C9qb")),c=e(t("TSYQ")),f=e(t("RdXZ")),b=t("nKUr");function h({className:p,children:m,showDividers:l=!0}){const u=r.Children.count(m);return(0,b.jsx)("footer",{className:(0,c.default)(s.default.container,p),children:(0,b.jsx)("ul",{className:s.default.links,children:r.Children.map(m,(n,x)=>(0,b.jsxs)("li",{children:[n,l&&x!==u-1&&(0,b.jsx)("span",{className:s.default.divider,children:"|"})]}))})})}h.propTypes={className:i.string,showDividers:i.bool};function v({url:p,text:m}){return(0,b.jsx)(f.default,{className:s.default.link,href:p,children:m})}v.propTypes={url:i.string,text:i.string,children:(0,i.oneOfType)([(0,i.arrayOf)(i.node),i.node])},h.Item=v;var O=h;o.default=O},Ph6G:function(a,o,t){"use strict";(function(e){var r=t("P7XM"),i=t("dXd4"),s=t("FUii"),c=t("3wkl"),f=t("c6pU"),b=t("JqAl");function h(v){if(!f.enabled&&!c.enabled)throw new Error("Transport created when disabled");i.call(this,v,"/xhr_streaming",s,c)}r(h,i),h.enabled=function(v){return v.nullOrigin||b.isOpera()?!1:c.enabled},h.transportName="xhr-streaming",h.roundTrips=2,h.needBody=!!e.document,a.exports=h}).call(this,t("yLpj"))},PvYm:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardTitle-module-card-title--t3b {
  display: flex;
  align-items: center; }
  .CardTitle-module-card-title--t3b .CardTitle-module-tooltip-2g3b {
    font-family: Source Sans Pro;
    font-weight: normal; }
  .CardTitle-module-card-title--t3b .CardTitle-module-info-icon-3i3b {
    margin-inline-start: 8px; }
  .CardTitle-module-card-title--t3b .CardTitle-module-link-K23b {
    color: white;
    cursor: pointer;
    text-decoration: underline; }
`,""]),o.locals={"card-title":"CardTitle-module-card-title--t3b",tooltip:"CardTitle-module-tooltip-2g3b","info-icon":"CardTitle-module-info-icon-3i3b",link:"CardTitle-module-link-K23b"}},PxX9:function(a,o,t){var e=t("juLF");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},QLKV:function(a,o,t){"use strict";var e=t("P7XM"),r=t("VNbE"),i=t("c6pU"),s=t("dXd4");function c(f){if(!r.enabled)throw new Error("Transport created when disabled");s.call(this,f,"/htmlfile",r,i)}e(c,s),c.enabled=function(f){return r.enabled&&f.sameOrigin},c.transportName="htmlfile",c.roundTrips=2,a.exports=c},QZfG:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Tabs-module-container-1B3b {
  width: 100%; }
  .Tabs-module-container-1B3b .Tabs-module-tabs-1u3b {
    width: 100%;
    display: flex; }

.Tabs-module-disabled-1Z3b {
  opacity: 0.4;
  pointer-events: none; }

.Tabs-module-tab-3P3b {
  border-bottom: 2px solid #a0abaf;
  color: #617379;
  text-transform: uppercase;
  padding-block-end: 4px;
  cursor: pointer;
  -webkit-user-select: none;
  transition: color 0.2s ease, border-color 0.2s ease;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 300;
  flex: 1 1 auto; }
  .Tabs-module-tab-3P3b.Tabs-module-current-Sw3b {
    border-bottom-color: var(--text-on-light);
    color: var(--text-on-light); }

.Tabs-module-vertical-xS3b {
  display: flex; }
  .Tabs-module-vertical-xS3b > .Tabs-module-tabs-1u3b {
    flex-direction: column;
    width: initial; }
    .Tabs-module-vertical-xS3b > .Tabs-module-tabs-1u3b > .Tabs-module-tab-3P3b {
      flex: 0 auto;
      border-bottom: 1px solid #e4e4e4;
      padding: 19px 10px;
      margin: 0 23px;
      font-size: 14px;
      font-weight: 500;
      color: #2b2b2b;
      text-transform: none; }
      .Tabs-module-vertical-xS3b > .Tabs-module-tabs-1u3b > .Tabs-module-tab-3P3b:first-of-type {
        border-top: 1px solid #e4e4e4; }
      .Tabs-module-vertical-xS3b > .Tabs-module-tabs-1u3b > .Tabs-module-tab-3P3b.Tabs-module-current-Sw3b {
        border-bottom-color: #e4e4e4;
        color: #2b2b2b;
        position: relative; }
        .Tabs-module-vertical-xS3b > .Tabs-module-tabs-1u3b > .Tabs-module-tab-3P3b.Tabs-module-current-Sw3b::after {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -23px;
          margin: auto 0;
          content: '';
          width: 5px;
          height: 40px;
          border-bottom-right-radius: 100px;
          border-top-right-radius: 100px;
          background-color: var(--text-on-light); }
`,""]),o.locals={dudaFont:"Source Sans Pro",dudaGray:"#ced6d9",lightBorder:"#e8e8e8",container:"Tabs-module-container-1B3b",tabs:"Tabs-module-tabs-1u3b",disabled:"Tabs-module-disabled-1Z3b",tab:"Tabs-module-tab-3P3b",current:"Tabs-module-current-Sw3b",vertical:"Tabs-module-vertical-xS3b"}},Qej2:function(a,o,t){var e=t("lkrH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"R+Q3":function(a,o,t){"use strict";var e=t("P7XM"),r=t("moM4");function i(s){r.call(this),this.initEvent("message",!1,!1),this.data=s}e(i,r),a.exports=i},RHta:function(a,o,t){"use strict";t.d(o,"f",function(){return s}),t.d(o,"b",function(){return c}),t.d(o,"c",function(){return f}),t.d(o,"i",function(){return b}),t.d(o,"a",function(){return h}),t.d(o,"h",function(){return v}),t.d(o,"g",function(){return O}),t.d(o,"d",function(){return p}),t.d(o,"e",function(){return m});var e=t("k4gB"),r=t("rf6O"),i=t.n(r);const s={NON_CONNECTED:"non-connected",CONNECTING:"connecting",CONNECTED:"connected",FETCHING:"fetching",ERROR:"error"},c=[{title:Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.step1Title")},{title:Object(e.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.step2Title")}],f={PENDING:"PENDING",VALIDATED:"VALIDATED",FAILED:"FAILED"},b=i.a.shape({domain:i.a.string,localPart:i.a.string,validated:i.a.bool,timeLeftToValidationInMilliseconds:i.a.number,dnsRecordsList:i.a.arrayOf(i.a.shape({name:i.a.string,value:i.a.string,status:i.a.string}))}),h={ENTER_DOMAIN:0,VALIDATE_RECORDS:1},v={PENDING:"PENDING",NOT_VALIDATED:"NOT_VALIDATED",FAILED:"FAILED"},O={whiteLabelDomainEnter:"whiteLabelDomain-enter",emailDomainCustomStart:"emailDomain-custom-start",emailDomainCustomSubmitDomain:"emailDomain-custom-submitDomain",emailDomainCustomCopyRecord:"emailDomain-custom-copyRecord",emailDomainCustomValidate:"emailDomain-custom-validate",emailDomainCustomRevalidate:"emailDomain-custom-revalidate",emailDomainCustomRevertToDefault:"emailDomain-custom-revertToDefault",pricingOpenAccountPlanPopup:"pricing-open-account-plan-popup"},p={NONE:"NONE",EMAIL_DOMAIN_ALREADY_IN_USE:"EMAIL_DOMAIN_ALREADY_IN_USE",GENERAL_ERROR:"GENERAL_ERROR"},m="EmailDomainAlreadyInUse"},RZ8x:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DudaFlexPopup-container-243b {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px; }
  .DudaFlexPopup-container-243b .DudaFlexPopup-title-223b {
    font-size: 28px;
    font-weight: bold;
    align-self: center; }
  .DudaFlexPopup-container-243b .DudaFlexPopup-warnings-363b {
    height: 180px;
    overflow: auto;
    border-bottom: 1px dotted; }
    .DudaFlexPopup-container-243b .DudaFlexPopup-warnings-363b .DudaFlexPopup-warning-label-1Z3b {
      font-style: italic; }
  .DudaFlexPopup-container-243b .DudaFlexPopup-fix-model-button-3-3b {
    width: 100px;
    margin: 20px 0; }
  .DudaFlexPopup-container-243b .DudaFlexPopup-center-message-1E3b {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 210px; }
`,""]),o.locals={container:"DudaFlexPopup-container-243b",title:"DudaFlexPopup-title-223b",warnings:"DudaFlexPopup-warnings-363b","warning-label":"DudaFlexPopup-warning-label-1Z3b","fix-model-button":"DudaFlexPopup-fix-model-button-3-3b","center-message":"DudaFlexPopup-center-message-1E3b"}},RdXZ:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=t("cDcd"),c=e(t("rf6O")),f=e(t("TSYQ")),b=e(t("/V4F")),h=e(t("WWIy")),v=e(t("SGXX")),O=e(t("TogB")),p=e(t("tpdN")),m=t("nKUr");function l(S,T){var R=Object.keys(S);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(S);T&&(M=M.filter(function(A){return Object.getOwnPropertyDescriptor(S,A).enumerable})),R.push.apply(R,M)}return R}function u(S){for(var T=1;T<arguments.length;T++){var R=arguments[T]!=null?arguments[T]:{};T%2?l(Object(R),!0).forEach(function(M){(0,r.default)(S,M,R[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(S,Object.getOwnPropertyDescriptors(R)):l(Object(R)).forEach(function(M){Object.defineProperty(S,M,Object.getOwnPropertyDescriptor(R,M))})}return S}const n=c.default.string,x=c.default.func,y=c.default.bool,j=c.default.object,I=S=>{let T=S.className,R=S.onClick,M=S.href,A=S.text,W=S.icon,P=S.arrow,L=S.children,k=S.disabled,G=S.newWindow,Y=S.underlineOnHover,J=S.noOverflow,X=S.iconProps,at=S.styleName,z=S.blueLink,F=S.innerClassName,rt=S.noFlex,ct=S.justify,dt=S.styles,vt=S.inline,Ot=S.help,Mt=(0,i.default)(S,["className","onClick","href","text","icon","arrow","children","disabled","newWindow","underlineOnHover","noOverflow","iconProps","styleName","blueLink","innerClassName","noFlex","justify","styles","inline","help"]);const Rt=(0,f.default)(T,h.default.main,at,{[h.default.underlineOnHover]:Y,[h.default.noOverflow]:J,[h.default.blueLink]:z,[h.default.disabled]:k}),Yt=k?()=>{}:R;return M||vt?(0,m.jsxs)("a",u(u({className:Rt,href:M,target:G?"_blank":"",onClick:Yt},(0,b.default)(Mt)),{},{children:[A,L]})):(0,m.jsx)("div",u(u({className:Rt,onClick:Yt},(0,b.default)(Mt)),{},{style:P?{textDecoration:"none",fontSize:"14px"}:null,children:(0,m.jsxs)(O.default,{noFlex:rt,align:"center",justify:ct,className:(0,f.default)(F,h.default.innerContainer),children:[W&&(0,m.jsx)(v.default,u({className:h.default.icon,name:W},X)),A,P&&(0,m.jsx)(v.default,u({className:h.default.arrowIcon,name:"chevron-right",fontAwesome:!0},X)),Ot&&(0,m.jsx)(p.default,{toolTip:Ot,className:(0,f.default)(h.default.help,"helpIcon")}),L]})}))};I.propTypes={className:n,href:n,onClick:x,text:n,icon:n,arrow:y,disabled:y,newWindow:y,underlineOnHover:y,noOverflow:y,iconProps:j,styleName:n,blueLink:y,innerClassName:n,justify:n,noFlex:y,inline:y,help:n,"data-auto":n};var C=(0,s.memo)(I);o.default=C},Rr8H:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NewCustomDomain-container-2w3b {
  background-color: #f7f7f7;
  overflow: auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 120px); }
`,""]),o.locals={container:"NewCustomDomain-container-2w3b"}},RxVT:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DashboardFooter-main-2P3b {
  z-index: 2; }
`,""]),o.locals={main:"DashboardFooter-main-2P3b"}},"S/oH":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.HelpNavItem-item-NA3b {
  width: 45px; }

.HelpNavItem-container-Gz3b {
  width: 100px; }

.HelpNavItem-sub-1c3b {
  right: 0;
  left: unset !important; }
`,""]),o.locals={item:"HelpNavItem-item-NA3b",container:"HelpNavItem-container-Gz3b",sub:"HelpNavItem-sub-1c3b"}},SGzc:function(a,o,t){"use strict";(function(e){t("dyV1");var r=t("GBY4"),i=t("P7XM"),s=t("kwwM"),c=t("JYLm"),f=t("hPxs"),b=t("Yh+D"),h=t("woL0"),v=t("AEAD"),O=t("1eVo"),p=t("JqAl"),m=t("SM0v"),l=t("moM4"),u=t("l6Lj"),n=t("oOIF"),x=t("42Jg"),y=t("R+Q3"),j=t("uajq"),I=function(){},C;function S(R,M,A){if(!(this instanceof S))return new S(R,M,A);if(arguments.length<1)throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");u.call(this),this.readyState=S.CONNECTING,this.extensions="",this.protocol="",A=A||{},A.protocols_whitelist&&m.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."),this._transportsWhitelist=A.transports,this._transportOptions=A.transportOptions||{},this._timeout=A.timeout||0;var W=A.sessionId||8;if(typeof W=="function")this._generateSessionId=W;else if(typeof W=="number")this._generateSessionId=function(){return c.string(W)};else throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");this._server=A.server||c.numberString(1e3);var P=new r(R);if(!P.host||!P.protocol)throw new SyntaxError("The URL '"+R+"' is invalid");if(P.hash)throw new SyntaxError("The URL must not contain a fragment");if(P.protocol!=="http:"&&P.protocol!=="https:")throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '"+P.protocol+"' is not allowed.");var L=P.protocol==="https:";if(n.protocol==="https:"&&!L&&!b.isLoopbackAddr(P.hostname))throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");M?Array.isArray(M)||(M=[M]):M=[];var k=M.sort();k.forEach(function(Y,J){if(!Y)throw new SyntaxError("The protocols entry '"+Y+"' is invalid.");if(J<k.length-1&&Y===k[J+1])throw new SyntaxError("The protocols entry '"+Y+"' is duplicated.")});var G=b.getOrigin(n.href);this._origin=G?G.toLowerCase():null,P.set("pathname",P.pathname.replace(/\/+$/,"")),this.url=P.href,I("using url",this.url),this._urlInfo={nullOrigin:!p.hasDomain(),sameOrigin:b.isOriginEqual(this.url,n.href),sameScheme:b.isSchemeEqual(this.url,n.href)},this._ir=new j(this.url,this._urlInfo),this._ir.once("finish",this._receiveInfo.bind(this))}i(S,u);function T(R){return R===1e3||R>=3e3&&R<=4999}S.prototype.close=function(R,M){if(R&&!T(R))throw new Error("InvalidAccessError: Invalid code");if(M&&M.length>123)throw new SyntaxError("reason argument has an invalid length");if(!(this.readyState===S.CLOSING||this.readyState===S.CLOSED)){var A=!0;this._close(R||1e3,M||"Normal closure",A)}},S.prototype.send=function(R){if(typeof R!="string"&&(R=""+R),this.readyState===S.CONNECTING)throw new Error("InvalidStateError: The connection has not been established yet");this.readyState===S.OPEN&&this._transport.send(f.quote(R))},S.version=t("EBWB"),S.CONNECTING=0,S.OPEN=1,S.CLOSING=2,S.CLOSED=3,S.prototype._receiveInfo=function(R,M){if(I("_receiveInfo",M),this._ir=null,!R){this._close(1002,"Cannot connect to server");return}this._rto=this.countRTO(M),this._transUrl=R.base_url?R.base_url:this.url,R=O.extend(R,this._urlInfo),I("info",R);var A=C.filterToEnabled(this._transportsWhitelist,R);this._transports=A.main,I(this._transports.length+" enabled transports"),this._connect()},S.prototype._connect=function(){for(var R=this._transports.shift();R;R=this._transports.shift()){if(I("attempt",R.transportName),R.needBody&&(!e.document.body||typeof e.document.readyState!="undefined"&&e.document.readyState!=="complete"&&e.document.readyState!=="interactive")){I("waiting for body"),this._transports.unshift(R),h.attachEvent("load",this._connect.bind(this));return}var M=Math.max(this._timeout,this._rto*R.roundTrips||5e3);this._transportTimeoutId=setTimeout(this._transportTimeout.bind(this),M),I("using timeout",M);var A=b.addPath(this._transUrl,"/"+this._server+"/"+this._generateSessionId()),W=this._transportOptions[R.transportName];I("transport url",A);var P=new R(A,this._transUrl,W);P.on("message",this._transportMessage.bind(this)),P.once("close",this._transportClose.bind(this)),P.transportName=R.transportName,this._transport=P;return}this._close(2e3,"All transports failed",!1)},S.prototype._transportTimeout=function(){I("_transportTimeout"),this.readyState===S.CONNECTING&&(this._transport&&this._transport.close(),this._transportClose(2007,"Transport timed out"))},S.prototype._transportMessage=function(R){I("_transportMessage",R);var M=this,A=R.slice(0,1),W=R.slice(1),P;switch(A){case"o":this._open();return;case"h":this.dispatchEvent(new l("heartbeat")),I("heartbeat",this.transport);return}if(W)try{P=s.parse(W)}catch(L){I("bad json",W)}if(typeof P=="undefined"){I("empty payload",W);return}switch(A){case"a":Array.isArray(P)&&P.forEach(function(L){I("message",M.transport,L),M.dispatchEvent(new y(L))});break;case"m":I("message",this.transport,P),this.dispatchEvent(new y(P));break;case"c":Array.isArray(P)&&P.length===2&&this._close(P[0],P[1],!0);break}},S.prototype._transportClose=function(R,M){if(I("_transportClose",this.transport,R,M),this._transport&&(this._transport.removeAllListeners(),this._transport=null,this.transport=null),!T(R)&&R!==2e3&&this.readyState===S.CONNECTING){this._connect();return}this._close(R,M)},S.prototype._open=function(){I("_open",this._transport&&this._transport.transportName,this.readyState),this.readyState===S.CONNECTING?(this._transportTimeoutId&&(clearTimeout(this._transportTimeoutId),this._transportTimeoutId=null),this.readyState=S.OPEN,this.transport=this._transport.transportName,this.dispatchEvent(new l("open")),I("connected",this.transport)):this._close(1006,"Server lost session")},S.prototype._close=function(R,M,A){I("_close",this.transport,R,M,A,this.readyState);var W=!1;if(this._ir&&(W=!0,this._ir.close(),this._ir=null),this._transport&&(this._transport.close(),this._transport=null,this.transport=null),this.readyState===S.CLOSED)throw new Error("InvalidStateError: SockJS has already been closed");this.readyState=S.CLOSING,setTimeout(function(){this.readyState=S.CLOSED,W&&this.dispatchEvent(new l("error"));var P=new x("close");P.wasClean=A||!1,P.code=R||1e3,P.reason=M,this.dispatchEvent(P),this.onmessage=this.onclose=this.onerror=null,I("disconnected")}.bind(this),0)},S.prototype.countRTO=function(R){return R>100?4*R:300+R},a.exports=function(R){return C=v(R),t("n6ct")(S,R),S}}).call(this,t("yLpj"))},SJRE:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Checkbox-main-163b {
  cursor: pointer; }
  .Checkbox-main-163b.Checkbox-disabled-2p3b {
    opacity: 0.5;
    pointer-events: none;
    cursor: default; }

.Checkbox-checkbox-I83b {
  position: relative;
  user-select: none;
  color: #313131; }
  .Checkbox-checkbox-I83b.Checkbox-small-Aq3b {
    font-size: 12px;
    padding-inline-start: 1.5em; }
  .Checkbox-checkbox-I83b.Checkbox-large-d03b {
    font-size: 14px;
    padding-inline-start: 1.8em; }
  .Checkbox-checkbox-I83b:empty {
    padding-inline-start: 0;
    width: 1.15em;
    height: 1.25em;
    display: inline-block; }
  .Checkbox-checkbox-I83b:before {
    content: '';
    border: 0.1em solid #ced6d9;
    /*box-shadow: inset 0 0.05em 0.15em rgba(0,0,0,0.2);*/
    box-shadow: 1px 1px 0px 0px rgba(49, 49, 49, 0.18);
    background: #fff;
    border-radius: 0.15em;
    width: 1em;
    height: 1em;
    position: absolute;
    left: 0;
    top: 0.1em; }
    [dir='rtl'] .Checkbox-checkbox-I83b:before {
      left: auto;
      right: 0; }
  .Checkbox-checkbox-I83b:after {
    display: none;
    content: '';
    position: absolute;
    left: 0.4em;
    top: 0.25em;
    width: 0.185em;
    height: 0.505em;
    border-width: 0 0.185em 0.185em 0;
    border-style: solid;
    border-color: var(--text-on-light);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg); }
    [dir='rtl'] .Checkbox-checkbox-I83b:after {
      right: 0.4em;
      left: auto; }
  .Checkbox-checkbox-I83b.Checkbox-checked-1d3b:after {
    display: inline-block; }
  .Checkbox-checkbox-I83b.Checkbox-edge-313b:after {
    border-color: #313131; }

.Checkbox-descriptionLabel-393b {
  font-style: italic;
  font-size: 13px;
  color: #8a8a8a; }
  .Checkbox-descriptionLabel-393b .helpIcon {
    color: #8a8a8a; }
`,""]),o.locals={main:"Checkbox-main-163b",disabled:"Checkbox-disabled-2p3b",checkbox:"Checkbox-checkbox-I83b",small:"Checkbox-small-Aq3b",large:"Checkbox-large-d03b",checked:"Checkbox-checked-1d3b",edge:"Checkbox-edge-313b",descriptionLabel:"Checkbox-descriptionLabel-393b"}},SM0v:function(a,o,t){"use strict";(function(e){var r={};["log","debug","warn"].forEach(function(i){var s;try{s=e.console&&e.console[i]&&e.console[i].apply}catch(c){}r[i]=s?function(){return e.console[i].apply(e.console,arguments)}:i==="log"?function(){}:r.log}),a.exports=r}).call(this,t("yLpj"))},SRyj:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavBarItem-container-3j3b {
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid var(--header-border-color);
  width: 120px; }
  .NavBarItem-container-3j3b .NavBarItem-label-2v3b {
    font-size: 15px; }
`,""]),o.locals={container:"NavBarItem-container-3j3b",label:"NavBarItem-label-2v3b"}},SW6J:function(a,o,t){var e=t("OP3k");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},SZaD:function(a,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.useCloseMenuOnScroll=i,o.useCloseOnClickOutsideMenu=r;var e=t("cDcd");function r(s,c){(0,e.useEffect)(function(){var f=function(h){var v;s!=null&&(v=s.current)!==null&&v!==void 0&&v.contains(h.target)||c()};return document.documentElement.addEventListener("click",f,{capture:!0}),function(){document.documentElement.removeEventListener("click",f,{capture:!0})}},[s,c])}function i(s,c){(0,e.useEffect)(function(){return s&&window.addEventListener("scroll",c,{capture:!0}),function(){s&&window.removeEventListener("scroll",c,{capture:!0})}},[s,c])}},Sa5d:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.FloatingMenu-module-main-3a3b {
  position: relative; }
  .FloatingMenu-module-main-3a3b .FloatingMenu-module-menu-opener-3L3b {
    border: 0;
    padding-block-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    min-width: auto; }

.menu-options-wrapper {
  transition-property: opacity;
  transition-duration: 0.1s;
  transition-timing-function: ease-in-out;
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 3px;
  border: 1px solid #ced6d9;
  background-color: white;
  z-index: 2;
  pointer-events: none;
  min-width: 8em;
  box-shadow: 0 2px 4px rgba(71, 64, 64, 0.2);
  visibility: hidden; }
  .menu-options-wrapper #arrow,
  .menu-options-wrapper #arrow::before {
    border: 1px solid #ced6d9;
    position: absolute;
    background: inherit;
    height: 15px;
    width: 15px; }
  .menu-options-wrapper #arrow {
    visibility: hidden; }
  .menu-options-wrapper #arrow::before {
    content: '';
    transform: rotate(45deg); }
  .menu-options-wrapper[data-popper-placement^='top'] > #arrow {
    bottom: -4px; }
  .menu-options-wrapper[data-popper-placement^='bottom'] > #arrow {
    top: -4px; }
  .menu-options-wrapper[data-popper-placement^='left'] > #arrow {
    right: -4px; }
  .menu-options-wrapper[data-popper-placement^='right'] > #arrow {
    left: -4px; }
  .menu-options-wrapper--open {
    visibility: visible;
    pointer-events: unset; }
    .menu-options-wrapper--open #arrow::before {
      visibility: visible; }
  .menu-options-wrapper .menu-options-wrapper__option {
    padding: 0.6em 0.8em;
    background-color: white;
    position: relative; }
    .menu-options-wrapper .menu-options-wrapper__option:first-of-type {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px; }
    .menu-options-wrapper .menu-options-wrapper__option:last-of-type {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px; }
    .menu-options-wrapper .menu-options-wrapper__option:not(:last-of-type) {
      border-bottom: 1px solid #ced6d9; }
    .menu-options-wrapper .menu-options-wrapper__option:hover {
      background-color: #f5f7f7; }
`,""]),o.locals={main:"FloatingMenu-module-main-3a3b","menu-opener":"FloatingMenu-module-menu-opener-3L3b"}},SnpG:function(a,o,t){var e=t("jwYG");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},So9d:function(a,o,t){"use strict";t.d(o,"a",function(){return s});var e=t("N1n0"),r=t("cDcd"),i=t.n(r);function s(c){return function(b){const{stores:h={}}=Object(r.useContext)(e.a)||{};return h[b]||c[b]}}},TIZd:function(a,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=t("cDcd");function r({type:s,handler:c,options:f}){(0,e.useEffect)(()=>(window.addEventListener(s,c,f),()=>{window.removeEventListener(s,c,f)}),[c,f,s])}var i=r;o.default=i},TJSn:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.TopBar-container-1w3b {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto;
  background-color: var(--header-color);
  border-bottom: 1px solid var(--header-border-color);
  min-height: 61px;
  padding-inline-start: 15px;
  z-index: 3; }
`,""]),o.locals={container:"TopBar-container-1w3b"}},TKWB:function(a,o,t){"use strict";o.__esModule=!0;var e=t("sTlx");o.default=function(r){r.registerHelper("blockHelperMissing",function(i,s){var c=s.inverse,f=s.fn;if(i===!0)return f(this);if(i===!1||i==null)return c(this);if(e.isArray(i))return i.length>0?(s.ids&&(s.ids=[s.name]),r.helpers.each(i,s)):c(this);if(s.data&&s.ids){var b=e.createFrame(s.data);b.contextPath=e.appendContextPath(s.data.contextPath,s.name),s={data:b}}return f(i,s)})},a.exports=o.default},TLlh:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("lSNA")),s=e(t("cDcd")),c=e(t("hSE2")),f=e(t("g6w0")),b=e(t("edyS")),h=O(t("2imF"));function v(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(v=function(y){return y?n:u})(l)}function O(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||r(l)!=="object"&&typeof l!="function")return{default:l};var n=v(u);if(n&&n.has(l))return n.get(l);var x={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in l)if(j!=="default"&&Object.prototype.hasOwnProperty.call(l,j)){var I=y?Object.getOwnPropertyDescriptor(l,j):null;I&&(I.get||I.set)?Object.defineProperty(x,j,I):x[j]=l[j]}return x.default=l,n&&n.set(l,x),x}var p=function(u){var n,x=u.isDone,y=u.isActive,j=u.isDisabled,I=u.stepNumber;return s.default.createElement(b.default,{className:(0,c.default)(f.default["step-icon"],(n={},(0,i.default)(n,f.default["step-icon-done"],!y&&x),(0,i.default)(n,f.default["step-icon-inactive"],!(x||y||!j&&x)),n))},x?s.default.createElement(h.default,{name:"message-success",size:12,iconType:h.Type.SVG}):I)},m=p;o.default=m},TNeN:function(a,o,t){var e=t("Tlyu");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},TdM0:function(a,o,t){"use strict";o.__esModule=!0,o.wrapHelper=e;function e(r,i){if(typeof r!="function")return r;var s=function(){var f=arguments[arguments.length-1];return arguments[arguments.length-1]=i(f),r.apply(this,arguments)};return s}},TkXr:function(a,o,t){var e=t("MoYz");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},Tlyu:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavigationLock-main-353b {
  height: 100%;
  align-items: center; }
  .NavigationLock-main-353b.NavigationLock-right-2a3b {
    padding-inline-end: 15px;
    justify-content: flex-end; }
  .NavigationLock-main-353b.NavigationLock-center-2r3b {
    justify-content: center; }
`,""]),o.locals={main:"NavigationLock-main-353b",right:"NavigationLock-right-2a3b",center:"NavigationLock-center-2r3b"}},TpSx:function(a,o,t){var e=t("fRPY");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},TvPR:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NewsletterCard-container-2n3b {
  display: flex;
  background-color: white;
  border: solid 1px #f6f6f6;
  margin-bottom: 15px;
  position: relative;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.07); }
  .NewsletterCard-container-2n3b:last-child {
    margin-bottom: 0; }
  .NewsletterCard-container-2n3b .NewsletterCard-image-1_3b {
    cursor: pointer;
    min-width: 149px;
    max-width: 149px;
    height: 149px;
    object-fit: cover; }
  .NewsletterCard-container-2n3b .NewsletterCard-body-2O3b {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding-block-start: 20px;
    padding-inline-end: 20px;
    padding-block-end: 20px;
    padding-inline-start: 20px;
    overflow: hidden; }
    .NewsletterCard-container-2n3b .NewsletterCard-body-2O3b .NewsletterCard-title-2Y3b {
      cursor: pointer;
      font-family: 'Roboto';
      font-size: 15px;
      font-weight: bold;
      padding-top: 0px;
      padding-bottom: 3px;
      padding-inline-end: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis; }
    .NewsletterCard-container-2n3b .NewsletterCard-body-2O3b .NewsletterCard-description-1I3b {
      font-family: 'Source Sans Pro';
      font-size: 15px;
      color: #454545;
      padding-top: 0px;
      padding-bottom: 0px;
      height: 37px;
      overflow: hidden; }
`,""]),o.locals={container:"NewsletterCard-container-2n3b",image:"NewsletterCard-image-1_3b",body:"NewsletterCard-body-2O3b",title:"NewsletterCard-title-2Y3b",description:"NewsletterCard-description-1I3b"}},TyMH:function(a,o,t){"use strict";o.__esModule=!0,o.registerDefaultDecorators=s;function e(c){return c&&c.__esModule?c:{default:c}}var r=t("31X/"),i=e(r);function s(c){i.default(c)}},U13z:function(a,o,t){"use strict";(function(e){t.d(o,"f",function(){return c}),t.d(o,"a",function(){return b}),t.d(o,"b",function(){return v}),t.d(o,"h",function(){return O}),t.d(o,"g",function(){return p}),t.d(o,"i",function(){return m}),t.d(o,"c",function(){return l}),t.d(o,"d",function(){return u}),t.d(o,"e",function(){return n});var r=t("yXPU"),i=t.n(r),s=t("9Mi+");function c(){return f.apply(this,arguments)}function f(){return f=i()(function*(){return window.accountPlans||(window.accountPlans=yield Object(s.getFromServer)({url:"/payment/account/plans"})),window.accountPlans}),f.apply(this,arguments)}function b(){return h.apply(this,arguments)}function h(){return h=i()(function*(){if(!window.accountPlanType){const x=yield Object(s.getFromServer)({url:"/accounts/current"});window.accountPlanType=x.accountPlanTypeName}}),h.apply(this,arguments)}function v(){return window.accountPlanType}function O(x){window.accountPlanType=x}function p(){return e.isFreeTrialPro}function m(x){e.isFreeTrialPro=x}function l(){return window.trialEndDate}function u(){return window.trialStartDate}function n(){return new Date().getTime()}}).call(this,t("yLpj"))},U7fe:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PageLoader-container-2R3b {
  background-color: #f7f7f7;
  overflow: auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit; }
`,""]),o.locals={container:"PageLoader-container-2R3b"}},UN9y:function(a,o,t){"use strict";t.d(o,"c",function(){return Ke}),t.d(o,"a",function(){return an}),t.d(o,"b",function(){return te});var e=t("yXPU"),r=t.n(e),i=t("k4gB"),s=t("VIiT"),c=t.n(s),f=t("2i9H"),b=t("cDcd"),h=t("BIg8"),v=t.n(h),O=t("tZPy"),p=t.n(O);const m={CHANGELOG:"CHANGELOG",NEWSLETTER:"NEWSLETTER"};var l=t("LyWx"),u=t("OWPg"),n=t.n(u),x=t("ZiIQ"),y=t("nKUr");const j=({type:ft})=>Object(y.jsxs)("div",{className:Object(i.h)(n.a.announcement,{[n.a["announcement-for-newsletter"]]:ft===m.NEWSLETTER}),children:[Object(y.jsx)(x.a,{className:n.a["announcement-icon"],name:"announcement",size:20,iconType:l.m.SVG}),Object(y.jsx)(p.a,{className:n.a["announcement-text"],text:Object(i.m)("ui.ed.whatsNew.announcement"),flex:ft===m.CHANGELOG,"data-auto":"announcement-text"})]}),{oneOf:I}=i.b;j.propTypes={type:I(Object.values(m)).isRequired};var C=j,S=t("kAJf"),T=t.n(S),R=t("IKTb"),M=t.n(R),A=t("/clg"),W=t.n(A),P=t("IPUb"),L=t.n(P);const k=({className:ft,labels:yt})=>Object(y.jsx)("div",{className:Object(i.h)(ft,L.a.container),children:yt.map(Q=>Object(y.jsx)("div",{className:L.a["label-tag-container"],style:{backgroundColor:Q.bgColor},children:Object(y.jsx)(p.a,{className:L.a["label-tag"],text:Q.text})},Q.text))}),{string:G,arrayOf:Y,shape:J}=i.b;k.propTypes={className:G,labels:Y(J({text:G.isRequired,bgColor:G.isRequired})).isRequired};var X=k,at=t("TkXr"),z=t.n(at),F=t("nQG1"),rt=t("ubkq"),ct=t.n(rt);const dt=({date:ft,onLinkClick:yt,labels:Q})=>Object(y.jsxs)("div",{className:z.a.container,children:[Object(y.jsxs)("div",{className:z.a["footer-left-side"],children:[Object(y.jsx)(p.a,{className:z.a.date,text:ct()(ft,"dd mmm, yyyy")}),!l.l.isMobileDevice&&Object(y.jsx)(X,{labels:Q})]}),Object(y.jsxs)("div",{className:z.a["read-more"],onClick:yt,children:[Object(y.jsx)(F.a,{className:z.a["read-more-link"],text:Object(i.m)("ui.ed.whatsNew.card.readMoreLink")}),Object(y.jsx)(x.a,{className:z.a["read-more-icon"],name:"ar-arrow_drop_left",size:16,iconType:l.m.SVG,color:"#226eaf"})]})]}),{string:vt,func:Ot,arrayOf:Mt,shape:Rt}=i.b;dt.propTypes={date:vt.isRequired,onLinkClick:Ot.isRequired,labels:Mt(Rt({text:vt.isRequired,bgColor:vt.isRequired})).isRequired};var Yt=dt;const re=({date:ft,onLinkClick:yt,labels:Q})=>{const xt=Object(y.jsx)(Yt,{date:ft,onLinkClick:yt,labels:Q});return l.l.isMobileDevice?Object(y.jsxs)("div",{className:W.a["mobile-container"],"data-auto":"mobile-container",children:[Object(y.jsx)(X,{className:W.a["mobile-labels"],labels:Q}),xt]}):xt},{string:Xt,func:pe,arrayOf:de,shape:se}=i.b;re.propTypes={date:Xt.isRequired,onLinkClick:pe.isRequired,labels:de(se({text:Xt.isRequired,bgColor:Xt.isRequired})).isRequired};var Qt=re,St=t("E/IR"),Ut=t("FfLZ");const zt=({className:ft,title:yt,description:Q,date:xt,link:Gt,isNew:ae,labels:be})=>{const Ce=be.length>0?be[0].bgColor:Object(St.b)().BUTTON_COLOR;return Object(y.jsxs)("div",{className:Object(i.h)(M.a.container,ft),style:{"--card-hover-color":Ce},children:[Object(y.jsx)(p.a,{className:M.a.title,text:yt,onClick:l.l.isMobileDevice?null:Jt(Gt,ae),"data-auto":"title"}),Object(y.jsx)(p.a,{className:M.a.description,text:Q}),Object(y.jsx)(Qt,{date:xt,labels:be,onLinkClick:Jt(Gt,ae),"data-auto":"footer"})]})};function Jt(ft,yt){return()=>ge(ft,yt)}function ge(ft,yt){window.open(ft),Ut.a("d1-whatsnew-article-click",{link:ft,isNew:yt,popupType:m.CHANGELOG})}const{string:fe,bool:ce,arrayOf:Vt,shape:nt}=i.b;zt.propTypes={className:fe,title:fe.isRequired,description:fe.isRequired,date:fe.isRequired,link:fe.isRequired,isNew:ce.isRequired,labels:Vt(nt({text:fe.isRequired,bgColor:fe.isRequired}))};var st=zt,ot=t("0zN9"),pt=t.n(ot);const gt=({className:ft,imageUrl:yt,title:Q,description:xt,date:Gt,link:ae,isNew:be,labels:Ce})=>Object(y.jsxs)("div",{className:Object(i.h)(pt.a.container,ft),children:[Object(y.jsx)("img",{className:pt.a.image,src:yt,onClick:Lt(ae,be),"data-auto":"image"}),Object(y.jsxs)("div",{className:pt.a.body,children:[Object(y.jsx)(p.a,{className:pt.a.title,text:Q,onClick:Lt(ae,be),"data-auto":"title"}),Object(y.jsx)(p.a,{className:pt.a.description,text:xt}),Object(y.jsx)(Qt,{date:Gt,labels:Ce,onLinkClick:Lt(ae,be),"data-auto":"footer"})]})]});function Lt(ft,yt){return()=>it(ft,yt)}function it(ft,yt){window.open(ft),Ut.a("d1-whatsnew-article-click",{link:ft,isNew:yt,popupType:m.NEWSLETTER})}const{string:ht,bool:H,arrayOf:N,shape:U}=i.b;gt.propTypes={className:ht,imageUrl:ht.isRequired,title:ht.isRequired,description:ht.isRequired,date:ht.isRequired,link:ht.isRequired,isNew:H.isRequired,labels:N(U({text:ht.isRequired,bgColor:ht.isRequired}))};var q=gt,w=t("dO3r"),Z=t.n(w),Et=({children:ft})=>Object(y.jsx)("div",{className:Z.a.container,children:ft});const It=Object(b.forwardRef)(({feedItems:ft,earlierDividerPosition:yt,type:Q},xt)=>Object(y.jsx)("div",{className:T.a.container,ref:xt,children:ft.map((Gt,ae)=>Object(y.jsx)(b.Fragment,{children:ae===yt?Object(y.jsxs)(b.Fragment,{children:[Object(y.jsx)(Et,{children:Object(i.m)("ui.ed.whatsNew.earlier")}),lt({feedItem:Gt,type:Q})]}):lt({feedItem:Gt,type:Q})},Gt.guid))}));function lt({feedItem:ft,type:yt}){const Q=Object.assign({},ft,{className:Object(i.h)({[T.a["new-dot"]]:ft.isNew})});return yt===m.CHANGELOG?Object(y.jsx)(st,Object.assign({},Q)):Object(y.jsx)(q,Object.assign({},Q))}const{arrayOf:et,shape:kt,string:Bt,oneOf:At,number:jt,bool:wt}=i.b;It.propTypes={feedItems:et(kt({imageUrl:Bt.isRequired,guid:Bt.isRequired,title:Bt.isRequired,description:Bt.isRequired,date:Bt.isRequired,link:Bt.isRequired,isNew:wt.isRequired,labels:et(kt({text:Bt.isRequired,bgColor:Bt.isRequired})).isRequired})).isRequired,type:At(Object.values(m)).isRequired,earlierDividerPosition:jt.isRequired};var Zt=It,Oe=t("ecKV"),Se=t.n(Oe),He=t("g8Lk"),to=t("pORW");const wn=({shouldShowHidePoupCheckbox:ft,isHidePoupCheckboxVisible:yt,showScrollDownIcon:Q,showViewAllButton:xt,onScrollDownIconClick:Gt,onViewAllButtonClick:ae})=>{const[be,Ce]=Object(b.useState)(!1);return Object(y.jsxs)("div",{className:Object(i.h)(Se.a.footer,{[Se.a["footer-with-checkbox"]]:ft}),children:[Q&&Object(y.jsx)("div",{className:Se.a["scroll-down-icon-container"],onClick:Gt,"data-auto":"scroll-down-icon-container",children:Object(y.jsx)(x.a,{className:Se.a["scroll-down-icon"],name:"chevron-down",size:14,iconType:l.m.FONT_AWESOME})}),xt&&Object(y.jsx)(He.a,{className:Se.a["view-all-button"],text:Object(i.m)("ui.ed.whatsNew.seeAllUpdatesButton"),secondary:!0,onClick:ae}),ft&&Object(y.jsx)(to.a,{className:Object(i.h)(Se.a["hide-checkbox"],{[Se.a["hide-checkbox-not-visible"]]:!yt}),innerClassName:Object(i.h)(Se.a["hide-checkbox-inner"]),text:Object(i.m)("ui.ed.whatsNew.hideCheckbox"),size:"small",checked:be,onChange:()=>{te(!be),Ce(ue=>!ue)}})]})},{bool:$e,func:Dn}=i.b;wn.propTypes={shouldShowHidePoupCheckbox:$e.isRequired,isHidePoupCheckboxVisible:$e.isRequired,showScrollDownIcon:$e.isRequired,showViewAllButton:$e.isRequired,onScrollDownIconClick:Dn.isRequired,onViewAllButtonClick:Dn.isRequired};var ze=wn;const{arrayOf:Me,shape:Fn,string:we,oneOf:In,number:zn,bool:qe}=i.b;class xn extends i.a{constructor(yt){super(yt);this.getShouldShowHidePoupCheckbox=({accountLocale:Q})=>Q?Q!==l.c.ENGLISH&&Q!==l.c.UK:!1,this.handleContentScroll=Q=>{const{scrollTop:xt}=Q.currentTarget;this.setState({isScrolledToTop:xt<=5,isScrolledToBottom:this.content.current.scrollHeight-this.content.current.offsetHeight-xt<=5})},this.handleScrollDownIconClick=()=>{this.cards.current.scrollIntoView({behavior:"smooth",block:"end"})},this.handleViewAllButtonClick=()=>{window.open("//resources.duda.co/product-updates"),Ut.a("d1-whatsnew-view-all-articles-click",{popupType:this.props.type})},this.content=Object(b.createRef)(),this.cards=Object(b.createRef)(),this.state={isScrolledToTop:!0,isScrolledToBottom:!1}}render(){const{feedItems:yt,earlierDividerPosition:Q,type:xt,accountLocale:Gt}=this.props,{isScrolledToTop:ae,isScrolledToBottom:be}=this.state,Ce=this.getShouldShowHidePoupCheckbox({accountLocale:Gt});return Object(y.jsxs)("div",{className:v.a.container,children:[Object(y.jsx)(p.a,{className:Object(i.h)(v.a.title,{[v.a["title-mobile"]]:l.l.isMobileDevice}),text:Object(i.m)("ui.ed.whatsNew.popupTitle"),flex:!1,"data-auto":"title"}),Object(y.jsxs)("div",{ref:this.content,className:v.a.content,onScroll:this.handleContentScroll,children:[Object(y.jsx)(C,{type:xt}),Object(y.jsx)(Zt,{ref:this.cards,feedItems:yt,earlierDividerPosition:Q,type:xt})]}),Object(y.jsx)(ze,{shouldShowHidePoupCheckbox:Ce,isHidePoupCheckboxVisible:be,showScrollDownIcon:ae,showViewAllButton:be,onScrollDownIconClick:this.handleScrollDownIconClick,onViewAllButtonClick:this.handleViewAllButtonClick})]})}}xn.displayName="WhatsNewPopup",xn.propTypes={feedItems:Me(Fn({imageUrl:we.isRequired,guid:we.isRequired,title:we.isRequired,description:we.isRequired,date:we.isRequired,link:we.isRequired,isNew:qe.isRequired,labels:Me(Fn({text:we.isRequired,bgColor:we.isRequired})).isRequired})).isRequired,type:In(Object.values(m)).isRequired,earlierDividerPosition:zn.isRequired,accountLocale:we};var Un=xn,nn=t("9iID"),Wt=t("9Mi+"),Ee=t("CDzl"),ke=t.n(Ee);function qt(){return Fe.apply(this,arguments)}function Fe(){return Fe=r()(function*(){const ft=yield Object(Wt.getFromServer)({url:"/whatsnew/feed"});return new Promise((yt,Q)=>{ke.a.parseString(new XMLSerializer().serializeToString(ft),{explicitArray:!1},(xt,Gt)=>{if(xt){Q(xt);return}yt(Gt.rss.channel.item)})})}),Fe.apply(this,arguments)}var _t=t("oGBQ");const on="whatsNew_LastSeen",_e="whatsNew_WasSeen",On="whatsNew_Hide",mn="release notes",kn=864e5,yn={features:"#fb8d96",developers:"#f8a78a",design:"#74d3eb",templates:"#8da7fb",sections:"#8da7fb",widgets:"#cb8ce3",eCommerce:"#45d0ab",apps:"#7184a3",collaboration:"#61a3ff","content library":"#5fb1aa"};function Ke({accountCreationDate:ft,isDudaAware:yt}){return nn.a.get("feature.flag.showWhatsNewPopup")&&nn.a.getFlag("whatsNewPopup.show")&&yt&&Date.now()-new Date(ft)>kn&&!sessionStorage.getItem(_e)&&localStorage.getItem(On)!=="true"}function an(){return Ie.apply(this,arguments)}function Ie(){return Ie=r()(function*({referral:ft,accountLocale:yt,shouldOpenNoUnseenFeed:Q=!1}={}){let xt=yield Re();const Gt=new Date(xt[0].date),ae=localStorage.getItem(on),be=ae?new Date(parseInt(ae,10)):null;if(Q||Ct({newestFeedItemDate:Gt,lastSeenDate:be})){xt=ut({feedItems:xt,lastSeenDate:be});const Ce=Ft(),ue=Ht(xt);ne({feedItems:xt,type:Ce,earlierDividerPosition:ue,referral:ft,accountLocale:yt}),localStorage.setItem(on,Date.now()),sessionStorage.setItem(_e,!0)}}),Ie.apply(this,arguments)}function te(ft){localStorage.setItem(On,ft)}function Re(){return Nt.apply(this,arguments)}function Nt(){return Nt=r()(function*(){return(yield qt()).filter(({"g-custom:tags":xt})=>xt._&&xt._.split(",").includes(mn)).slice(0,l.l.isMobileDevice?parseInt(nn.a.get("whatsNew.mobile.numberOfCards"),10):parseInt(nn.a.get("whatsNew.numberOfCards"),10)).map(({"media:content":xt,guid:Gt,title:ae,description:be,pubDate:Ce,link:ue,"g-custom:tags":Ne})=>({imageUrl:xt?xt.$.url:"",guid:Gt._,title:ae,description:be,date:Ce,link:ue,productLabelsText:Ne._?Ue(Ne._.split(",")):[]}))}),Nt.apply(this,arguments)}function Ue(ft){return ft.filter(yt=>yn[yt]&&yt!==mn).slice(0,parseInt(nn.a.get("whatsNew.maxNumberOfLabelsInCard"),10))}function Ct({newestFeedItemDate:ft,lastSeenDate:yt}){return yt?ft-yt>0:!0}function ut({feedItems:ft,lastSeenDate:yt}){return ft.map(Q=>Object.assign({},Q,{isNew:new Date(Q.date)-yt>0,labels:Q.productLabelsText.map(xt=>({text:xt,bgColor:yn[xt]}))}))}function Ft(){return l.l.isMobileDevice?m.CHANGELOG:m.NEWSLETTER}function Ht(ft){return ft.findIndex(yt=>!yt.isNew)}function ne(ft){const yt=Object(_t.a)();Object(f.f)(f.a.FREESTYLE,Object.assign({key:"whats-new",content:Object(y.jsx)(Un,Object.assign({},ft))},oe(),{maxHeight:"100vh",zIndex:103,className:Object(i.h)({"whats-new-popup-mobile":l.l.isMobileDevice}),contentClassName:c.a["whats-new-popup"],contentInnerClassName:c.a["whats-new-popup"],closeIconClassName:c.a["whats-new-popup-close-icon"],closeOnClickOutside:!0,onClose:le.bind(null,{popupType:ft.type,referral:ft.referral,stopwatch:yt})})),yt.start(),Ut.a("d1-whatsnew-popup-opened",{popupType:ft.type,referral:ft.referral})}function oe(){return l.l.isMobileDevice?{width:"343px",height:"553px"}:{width:"678px",height:"679px"}}function le({popupType:ft,referral:yt,stopwatch:Q}){Ut.a("d1-whatsnew-popup-closed",{popupType:ft,referral:yt,displayDuration:Q.stop()})}},UNgE:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CopyToClipboardButton-module-clipboard-copy-2M3b {
  display: inline-flex;
  height: 27px;
  position: relative; }

.CopyToClipboardButton-module-toast-363b {
  position: absolute;
  font-family: Roboto;
  color: #313131;
  text-align: center;
  padding-block-start: 7px;
  padding-block-end: 7px;
  top: 0;
  bottom: 0;
  margin: auto;
  left: calc(100% + 15px);
  white-space: nowrap;
  font-size: 14px;
  visibility: hidden; }
  .CopyToClipboardButton-module-toast-363b.CopyToClipboardButton-module-left-1M3b {
    left: auto;
    right: calc(100% + 15px); }
  .CopyToClipboardButton-module-toast-363b.CopyToClipboardButton-module-visible-3_3b {
    visibility: visible; }
`,""]),o.locals={"clipboard-copy":"CopyToClipboardButton-module-clipboard-copy-2M3b",toast:"CopyToClipboardButton-module-toast-363b",left:"CopyToClipboardButton-module-left-1M3b",visible:"CopyToClipboardButton-module-visible-3_3b"}},Uhfo:function(a,o,t){var e=t("XmoN");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},UwEo:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Step2-title-wrapper-3v3b {
  display: flex;
  align-items: center;
  padding-block-start: 16px; }

.Step2-title-3o3b {
  font-weight: 500;
  font-size: 14px;
  flex-grow: 0;
  margin: 0;
  padding: 0; }

.Step2-help-icon-1q3b {
  margin-inline-start: 8px;
  cursor: pointer; }

.Step2-description-3B3b {
  padding-block-end: 8px;
  padding-block-start: 4px;
  max-width: 720px; }

.Step2-hint-tA3b {
  padding-block-end: 24px;
  font-style: italic;
  color: #828894;
  font-size: 14px; }
`,""]),o.locals={"title-wrapper":"Step2-title-wrapper-3v3b",title:"Step2-title-3o3b","help-icon":"Step2-help-icon-1q3b",description:"Step2-description-3B3b",hint:"Step2-hint-tA3b"}},VFrO:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.EmptySiteListActions-container-bm3b {
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: minmax(0, 405px) minmax(0, 405px) minmax(0, 405px);
  column-gap: 27px;
  row-gap: 18px;
  padding-inline-start: 40px;
  padding-inline-end: 40px;
  margin-block-end: 35px;
  justify-content: center; }

.EmptySiteListActions-divider-container-3K3b {
  display: flex;
  grid-column: 1 / span 3; }

.EmptySiteListActions-divider-label-2u3b {
  text-transform: uppercase;
  color: #a1abb0;
  white-space: nowrap;
  margin: 0 7px;
  letter-spacing: -0.38px; }

.EmptySiteListActions-divider-3w3b {
  border-color: #e8e8e8; }
`,""]),o.locals={container:"EmptySiteListActions-container-bm3b","divider-container":"EmptySiteListActions-divider-container-3K3b","divider-label":"EmptySiteListActions-divider-label-2u3b",divider:"EmptySiteListActions-divider-3w3b"}},VIiT:function(a,o,t){var e=t("dDsM");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},VNbE:function(a,o,t){"use strict";(function(e){var r=t("P7XM"),i=t("8fj+"),s=t("Yh+D"),c=t("raCH").EventEmitter,f=t("JYLm"),b=function(){};function h(O){b(O),c.call(this);var p=this;i.polluteGlobalNamespace(),this.id="a"+f.string(6),O=s.addQuery(O,"c="+decodeURIComponent(i.WPrefix+"."+this.id)),b("using htmlfile",h.htmlfileEnabled);var m=h.htmlfileEnabled?i.createHtmlfile:i.createIframe;e[i.WPrefix][this.id]={start:function(){b("start"),p.iframeObj.loaded()},message:function(l){b("message",l),p.emit("message",l)},stop:function(){b("stop"),p._cleanup(),p._close("network")}},this.iframeObj=m(O,function(){b("callback"),p._cleanup(),p._close("permanent")})}r(h,c),h.prototype.abort=function(){b("abort"),this._cleanup(),this._close("user")},h.prototype._cleanup=function(){b("_cleanup"),this.iframeObj&&(this.iframeObj.cleanup(),this.iframeObj=null),delete e[i.WPrefix][this.id]},h.prototype._close=function(O){b("_close",O),this.emit("close",null,O),this.removeAllListeners()},h.htmlfileEnabled=!1;var v=["Active"].concat("Object").join("X");if(v in e)try{h.htmlfileEnabled=!!new e[v]("htmlfile")}catch(O){}h.enabled=h.htmlfileEnabled||i.iframeEnabled,a.exports=h}).call(this,t("yLpj"))},VQpA:function(a,o,t){"use strict";var e=t("OIi6"),r=t.n(e),i=t("2imF"),s=t.n(i),c=t("hzps"),f=t.n(c),b=t("PxX9"),h=t.n(b),v=t("k4gB"),O=t("rf6O"),p=t.n(O),m=t("nKUr"),l=t.n(m);const u=[{action:"editAction",icon:"edit",label:Object(v.m)("dashboard.customDomain.changeDomain")},{action:"revertAction",icon:"refresh_bold",label:Object(v.m)("dashboard.customDomain.revertToDefault")}];function n(x){return Object(m.jsx)(r.a,{icon:"3dots",closeOnMouseLeave:!1,buttonProps:{["data-auto"]:"control-menu-button"},children:u.map(({icon:y,label:j,action:I})=>x[I]?Object(m.jsxs)("div",Object.assign({className:h.a.option},x[I]||{},{children:[Object(m.jsx)(s.a,{name:y,className:h.a.icon,iconType:i.Type.SVG,size:16}),Object(m.jsx)(f.a,{noPadding:!0,inline:!0,children:j})]}),j):null)})}n.propTypes={editAction:O.object,revertAction:O.object},o.a=n},VRZk:function(a,o,t){var e=t("aneH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},VYWo:function(a,o,t){var e=t("SRyj");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"Vb+u":function(a,o,t){var e=t("KRkA");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},W7aL:function(a,o,t){var e=t("N94O");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},WArL:function(a,o,t){"use strict";t.d(o,"f",function(){return e}),t.d(o,"g",function(){return r}),t.d(o,"d",function(){return i}),t.d(o,"e",function(){return s}),t.d(o,"b",function(){return c}),t.d(o,"a",function(){return f}),t.d(o,"c",function(){return b});const e={SITE_ALIAS:"site_alias",SITE_ID:"site_id",LOGOUT_REDIRECT_URL:"logout_redirect_url",SSO:"dm_sso",SUPPORT_OR_STAFF:"support_or_staff"},r={HOME:"/home",HALL:"/home/dashboard",TEMPLATES:"/home/dashboard/templates",UPDATE_PAYMENT_INFO:"/home/dashboard/update-payment-info",SITES:"/home/dashboard/sites",SITE_STATS:`/home/dashboard/stats/sites/:${e.SITE_ALIAS}`,SITE_PAGE:`/home/dashboard/overview/:${e.SITE_ALIAS}`,SITE_FORM_RESPONSES:`/home/dashboard/sites/:${e.SITE_ALIAS}/form-responses`,SITE_PAYMENT_INFO_FOR_OLD_PRICING:`/home/dashboard/sites/:${e.SITE_ALIAS}/payment-info-o`,SITE_PAYMENT_INFO_FOR_NEW_PRICING:`/home/dashboard/sites/:${e.SITE_ID}/payment-info`,WHITE_LABEL:"/home/dashboard/white-label",CUSTOM_DOMAIN:"/home/dashboard/white-label/custom-domain",CUSTOM_EMAIL_DOMAIN:"/home/dashboard/white-label/custom-email-domain",CUSTOM_BRANDING:"/home/dashboard/white-label/custom-branding",COMMUNICATIONS:"/home/dashboard/white-label/communications",API_ACCESS:"/home/dashboard/white-label/api-access",TEAM:"/home/dashboard/team",TEAM_PERMISSIONS:"/home/dashboard/team/team-permissions",TEAM_TEMPLATES:"/home/dashboard/team/team-templates",TEAM_SECTIONS:"/home/dashboard/team/team-sections",WIDGET_BUILDER:"/home/widgetBuilder",CLIENTS:"/home/dashboard/clients",CLIENT_MANAGEMENT_FOR_SITE:`/home/dashboard/clients/client-management/sites/:${e.SITE_ID}`,CLIENT_MANAGEMENT:"/home/dashboard/clients/client-management",CLIENT_BILLING:"/home/dashboard/clients/client-billing",PAYMENT_REQUESTS:"/home/dashboard/billing/payment-requests",STATS:"/home/dashboard/stats",RESOURCES:"//resources.duda.co",WHATS_NEW:"//resources.duda.co/product-updates",SALES_COLLATERAL:"//resources.duda.co/marketing-materials",PRODUCT_TRAINING:"//resources.duda.co/product-overview",DUDA_UNIVERSITY:"//university.duda.co",CASE_STUDIES:"//resources.duda.co/success-stories",WEBINARS:"//resources.duda.co/webinars",DEVELOPERS_PORTAL:"//www.duda.co/developers",USER:"/home/dashboard/user",ACCOUNT:"/home/dashboard/user/account",PAYMENT:"/home/dashboard/user/payment",SUBSCRIPTIONS:"/home/dashboard/user/subscriptions",BILLING:"/home/dashboard/user/billing",SIGN_OUT:`/logout?next=${e.LOGOUT_REDIRECT_URL}`,DEVELOPERS_PLAYGROUND:"/home/dashboard/developers-playground",DEBUG_PLAYGROUND:"/home/dashboard/debug-playground",DUDA_UNIVERSITY_SSO:"/skilljar/sso",DUDA_USERVOICE_SSO:"/uservoice/sso",SITE_TRANSFER:"/home/dashboard/site-transfer"},i=[r.TEMPLATES,r.SITE_PAGE,r.COMMUNICATIONS,r.API_ACCESS,r.TEAM_TEMPLATES,r.TEAM_SECTIONS,r.WIDGET_BUILDER,r.CLIENT_MANAGEMENT_FOR_SITE,r.CLIENT_MANAGEMENT,r.CLIENT_BILLING,r.ACCOUNT,r.DEBUG_PLAYGROUND],s={SITES:"SITES",CUSTOM_DOMAIN:"CUSTOM_DOMAIN",CUSTOM_EMAIL_DOMAIN:"CUSTOM_EMAIL_DOMAIN",CUSTOM_BRANDING:"CUSTOM_BRANDING",COMMUNICATIONS:"COMMUNICATIONS",API_ACCESS:"API_ACCESS",TEAM_PERMISSIONS:"TEAM_PERMISSIONS",TEAM_TEMPLATES:"TEAM_TEMPLATES",TEAM_SECTIONS:"TEAM_SECTIONS",CLIENT_MANAGEMENT:"CLIENT_MANAGEMENT",STATS:"STATS",ACCOUNT:"ACCOUNT",PAYMENT:"PAYMENT",BILLING:"BILLING"},c="about:blank",f="emptyDash",b={onCustomBrandingClicked:"custom-branding-enter"}},WWIy:function(a,o,t){var e=t("qok4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},WXr4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.AccountInfo-module-account-info-ny3b {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-start: 56px;
  margin-block-end: 68px;
  font-family: Roboto; }
  .AccountInfo-module-account-info-ny3b .AccountInfo-module-avatar-3j3b {
    border-radius: 50%;
    font-size: 35px;
    font-weight: bold;
    color: #ffffff;
    background-color: #4b4b4b;
    width: 77px;
    height: 77px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; }
  .AccountInfo-module-account-info-ny3b .AccountInfo-module-name-9d3b {
    color: #2b2b2b;
    font-size: 18px;
    font-weight: bold; }
  .AccountInfo-module-account-info-ny3b .AccountInfo-module-email-VC3b {
    color: #828894;
    padding-block-end: 0; }
`,""]),o.locals={"account-info":"AccountInfo-module-account-info-ny3b",avatar:"AccountInfo-module-avatar-3j3b",name:"AccountInfo-module-name-9d3b",email:"AccountInfo-module-email-VC3b"}},WZHn:function(a,o,t){"use strict";o.__esModule=!0;function e(s){return s&&s.__esModule?s:{default:s}}var r=t("tpBh"),i=e(r);o.default=function(s){s.registerHelper("helperMissing",function(){if(arguments.length!==1)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=o.default},WclJ:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.RevertDomainModal-text-1r3b {
  font-size: 14px;
  line-height: 1.43;
  color: #313131; }
  .RevertDomainModal-text-1r3b mark {
    font-family: Source Sans Pro;
    color: #313131;
    font-weight: bold;
    background: none; }

.RevertDomainModal-revert-button-sX3b.RevertDomainModal-revert-button-sX3b,
.RevertDomainModal-cancel-button-353b.RevertDomainModal-cancel-button-353b {
  height: 32px;
  padding-inline-end: 25px;
  padding-inline-start: 25px;
  font-weight: 500; }

.RevertDomainModal-revert-button-sX3b.RevertDomainModal-revert-button-sX3b {
  color: #ffffff; }
`,""]),o.locals={text:"RevertDomainModal-text-1r3b","revert-button":"RevertDomainModal-revert-button-sX3b","cancel-button":"RevertDomainModal-cancel-button-353b"}},WkgK:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("rf6O")),i=e(t("v0q/")),s=e(t("TSYQ")),c=t("nKUr");const f=r.default.number,b=r.default.string;function h({size:O,color:p,duration:m,className:l}){return(0,c.jsx)("div",{className:(0,s.default)(i.default["ball-clip-rotate"],l),children:(0,c.jsx)("div",{style:{width:O,height:O,borderColor:p,animationDuration:`${m}s`}})})}h.propTypes={size:f,duration:f,color:b,className:b},h.defaultProps={size:22,duration:.75};var v=h;o.default=v},X59v:function(a,o,t){var e=t("9m2C");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},XJPH:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Input-module-main-n93b {
  font-family: Source Sans Pro;
  padding-block-start: 5px;
  padding-inline-end: 5px;
  padding-block-end: 5px;
  padding-inline-start: 5px;
  border-radius: 3px;
  text-align: start;
  font-size: 13px;
  outline: none;
  border: 1px solid #ced6d9;
  width: 200px; }
`,""]),o.locals={main:"Input-module-main-n93b"}},"XYu/":function(a,o,t){"use strict";var e=t("k4gB");const r={},i=Object(e.g)(r);o.a=i},XfAf:function(a,o,t){var e=t("I7rT");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},XmoN:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.OptionButtonsGroup-module-main-3l3b {
  display: flex;
  justify-content: flex-start;
  align-items: center; }
  .OptionButtonsGroup-module-main-3l3b .OptionButtonsGroup-module-main-label-3y3b {
    margin-inline-end: 0.3em; }

.OptionButtonsGroup-module-options-group-2W3b {
  display: flex;
  justify-content: center;
  align-items: center; }
  .OptionButtonsGroup-module-options-group-2W3b.OptionButtonsGroup-module-no-label-3O3b {
    width: 100%; }
    .OptionButtonsGroup-module-options-group-2W3b.OptionButtonsGroup-module-no-label-3O3b .OptionButtonsGroup-module-option-1k3b {
      flex: 1 0 auto; }
  .OptionButtonsGroup-module-options-group-2W3b .OptionButtonsGroup-module-option-1k3b {
    border-radius: 0; }
    .OptionButtonsGroup-module-options-group-2W3b .OptionButtonsGroup-module-option-1k3b:first-of-type {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px; }
    .OptionButtonsGroup-module-options-group-2W3b .OptionButtonsGroup-module-option-1k3b:last-of-type {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px; }
    .OptionButtonsGroup-module-options-group-2W3b .OptionButtonsGroup-module-option-1k3b:not(:last-of-type) {
      border-inline-end: 0; }
`,""]),o.locals={main:"OptionButtonsGroup-module-main-3l3b","main-label":"OptionButtonsGroup-module-main-label-3y3b","options-group":"OptionButtonsGroup-module-options-group-2W3b","no-label":"OptionButtonsGroup-module-no-label-3O3b",option:"OptionButtonsGroup-module-option-1k3b"}},Xsag:function(a,o,t){var e=t("mtLA");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},YAtB:function(a,o,t){var e=t("9KJ+");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},YXSV:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SitePageTitle-container-2q3b {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-block-start: 4.8vh;
  margin-block-end: 20px;
  margin-inline-start: 8px;
  margin-inline-end: 0;
  inline-size: 100%; }
  @media only screen and (max-width: 1400px) {
    .SitePageTitle-container-2q3b {
      min-width: 1013px; } }
  @media only screen and (min-width: 1400px) {
    .SitePageTitle-container-2q3b {
      min-width: 1122px; } }
  .SitePageTitle-container-2q3b .SitePageTitle-title-2P3b {
    font-family: Roboto;
    font-weight: bold;
    font-size: 30px;
    padding: 0;
    display: flex;
    align-items: center; }
    .SitePageTitle-container-2q3b .SitePageTitle-title-2P3b .SitePageTitle-help-button-2m3b {
      cursor: pointer;
      margin-inline-start: 6px;
      color: #313131; }
  .SitePageTitle-container-2q3b .SitePageTitle-feedback-1_3b {
    margin-block-start: 10px; }
`,""]),o.locals={container:"SitePageTitle-container-2q3b",title:"SitePageTitle-title-2P3b","help-button":"SitePageTitle-help-button-2m3b",feedback:"SitePageTitle-feedback-1_3b"}},YeZa:function(a,o,t){"use strict";(function(e){o.__esModule=!0;function r(f){return f&&f.__esModule?f:{default:f}}var i=t("sTlx"),s=t("tpBh"),c=r(s);o.default=function(f){f.registerHelper("each",function(b,h){if(!h)throw new c.default("Must pass iterator to #each");var v=h.fn,O=h.inverse,p=0,m="",l=void 0,u=void 0;h.data&&h.ids&&(u=i.appendContextPath(h.data.contextPath,h.ids[0])+"."),i.isFunction(b)&&(b=b.call(this)),h.data&&(l=i.createFrame(h.data));function n(C,S,T){l&&(l.key=C,l.index=S,l.first=S===0,l.last=!!T,u&&(l.contextPath=u+C)),m=m+v(b[C],{data:l,blockParams:i.blockParams([b[C],C],[u+C,null])})}if(b&&typeof b=="object")if(i.isArray(b))for(var x=b.length;p<x;p++)p in b&&n(p,p,p===b.length-1);else if(e.Symbol&&b[e.Symbol.iterator]){for(var y=[],j=b[e.Symbol.iterator](),I=j.next();!I.done;I=j.next())y.push(I.value);b=y;for(var x=b.length;p<x;p++)n(p,p,p===b.length-1)}else(function(){var C=void 0;Object.keys(b).forEach(function(S){C!==void 0&&n(C,p-1),C=S,p++}),C!==void 0&&n(C,p-1,!0)})();return p===0&&(m=O(this)),m})},a.exports=o.default}).call(this,t("yLpj"))},"Yh+D":function(a,o,t){"use strict";var e=t("GBY4"),r=function(){};a.exports={getOrigin:function(i){if(!i)return null;var s=new e(i);if(s.protocol==="file:")return null;var c=s.port;return c||(c=s.protocol==="https:"?"443":"80"),s.protocol+"//"+s.hostname+":"+c},isOriginEqual:function(i,s){var c=this.getOrigin(i)===this.getOrigin(s);return r("same",i,s,c),c},isSchemeEqual:function(i,s){return i.split(":")[0]===s.split(":")[0]},addPath:function(i,s){var c=i.split("?");return c[0]+s+(c[1]?"?"+c[1]:"")},addQuery:function(i,s){return i+(i.indexOf("?")===-1?"?"+s:"&"+s)},isLoopbackAddr:function(i){return/^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(i)||/^\[::1\]$/.test(i)}}},YtDI:function(a,o,t){"use strict";t.d(o,"h",function(){return p}),t.d(o,"f",function(){return l}),t.d(o,"g",function(){return n}),t.d(o,"e",function(){return I}),t.d(o,"c",function(){return C}),t.d(o,"d",function(){return L}),t.d(o,"i",function(){return k}),t.d(o,"b",function(){return X}),t.d(o,"a",function(){return at});var e=t("yXPU"),r=t.n(e),i=t("k4gB"),s=t("9Mi+"),c=t("289u"),f=t("LyWx"),b=t("FfLZ"),h=t("wy3E"),v=t("lRKB"),O=t("o/li");function p(z){return m.apply(this,arguments)}function m(){return m=r()(function*({start:z=0,records:F,searchValue:rt,siteType:ct}){const dt=Object.assign({start:z},Object(c.g)(F)&&{records:F},{filter:Object.assign({},rt&&{name:rt}),searchFilter:Object.assign({},ct&&ct===f.A.DUDAONE&&{dudaone:!0},ct&&ct===f.A.MOBILE&&{mobile:!0})});return Object(s.postToServer)({url:"/dashboard/sites/searchsites",data:dt})}),m.apply(this,arguments)}function l(z){return u.apply(this,arguments)}function u(){return u=r()(function*({siteAlias:z}){return Object(s.getFromServer)({url:`/dashboard/sites/getdashboardsite/${z}`})}),u.apply(this,arguments)}function n(){return x.apply(this,arguments)}function x(){return x=r()(function*({searchValue:z}={}){const F=z?{filter:{name:z}}:{},rt=yield Object(s.postToServer)({url:"/dashboard/sites/totalsitesnum",data:F});return parseInt(rt.value,10)}),x.apply(this,arguments)}function y(){return j.apply(this,arguments)}function j(){return j=r()(function*(){return Object(s.getFromServer)({url:"/dashboard/sites/account-with-single-non-deleted-site/alias"})}),j.apply(this,arguments)}function I({siteList:z,isWLReseller:F}){return z.map(rt=>C({site:rt,isWLReseller:F}))}function C({site:z,isWLReseller:F}){return Object.assign({},z,{name:S(z),status:T(z),url:R(z),previewUrl:F?z.resellerPreviewUrl:z.sitePreviewUrl,permissions:JSON.parse(atob(z.permissions)),type:z.dudaOne?f.A.DUDAONE:f.A.MOBILE,lastPublishDate:z.publicationDate})}function S(z){let F;return z.dudaOne&&z.domain?z.isCustomTheme?F=z.customThemeName:z.defaultDomain&&z.domain.endsWith(z.defaultDomain)&&!z.duplicateSubdomainExists?F=z.defaultSubDomain:F=z.domain:F=z.alias,F}function T(z){let F;return z.needsRepublish?F=f.z.NEED_TO_REPUBLISH:z.isPublished?F=f.z.PUBLISHED:F=f.z.NOT_PUBLISHED,F}function R(z){let F;return z.isPublished?z.dudaOne?(F=z.displayDomain,z.sslStatus===f.w.DEPLOYED&&(F=`https://${F}`)):F=z.mobileUrl:F=Object(i.m)("ui.ed.dashboard.siteNotPublished.urlNotAvailable"),F}function M(z){return A.apply(this,arguments)}function A(){return A=r()(function*({siteAlias:z}){return Object(s.deleteToServer)({url:`/dashboard/sites/${z}`})}),A.apply(this,arguments)}function W(z){return P.apply(this,arguments)}function P(){return P=r()(function*(z){return Object(s.getFromServer)({url:`/dashboard/sites/${z}/reseller/getsubaccounts`})}),P.apply(this,arguments)}function L(z){return z.trimRight().replace(/\s+/g,"-")}function k(z){return G.apply(this,arguments)}function G(){return G=r()(function*({account:z,blockUI:F,unblockUI:rt}){const ct=yield Object(h.a)();yield O.a.waitForPlansLoad();const dt=yield ct.getDirectPaymentPlan();if(dt!=null&&dt.contract)Y({accountId:z.id,contract:dt.contract,referral:"direct-purchase-link",coupon:dt.coupon,blockUI:F,unblockUI:rt});else if(dt!=null&&dt.shouldOpenSelectAccount){const vt="direct-select-plan-link";ct.selectAccountPlan({account:z,referral:vt,popupTitle:Object(i.m)("ui.upgrade.title.2"),innerTitle:Object(i.m)("account.plan.upgrade.title"),onPlanSelected:Ot=>{const Mt=ct.getActiveCoupon(Ot.plan,Ot.recurrency,z);Y({accountId:z.id,contract:Ot,coupon:Mt,referral:vt,blockUI:F,unblockUI:rt})},height:"calc(100vh - 120px)"})}}),G.apply(this,arguments)}function Y(z){return J.apply(this,arguments)}function J(){return J=r()(function*({accountId:z,contract:F,referral:rt,coupon:ct,blockUI:dt,unblockUI:vt}){return(yield Object(v.a)("stripePopup")).openStripePopup({accountId:z,type:"account",backText:Object(i.m)("publish.payment.backToPlans"),noPaypal:!0,defaultAccountContract:F.contract,defaultRecurrency:F.recurrency,coupon:ct,blockUI:dt,unblockUI:vt,onClose:()=>{window.parent.location=window.location.pathname},success:()=>Object(b.a)("pricing-purchase-account-plan",{plan:F.plan,referral:rt})})}),J.apply(this,arguments)}const X="^[a-zA-Z0-9][a-zA-Z0-9\\s-]+[a-zA-Z0-9]$",at=64},Z4fQ:function(a,o){var t=function(){if(typeof self=="object"&&self)return self;if(typeof window=="object"&&window)return window;throw new Error("Unable to resolve global `this`")};a.exports=function(){if(this)return this;if(typeof globalThis=="object"&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return t()}try{return __global__||t()}finally{delete Object.prototype.__global__}}()},ZAv2:function(a,o,t){var e=t("UwEo");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},ZMoh:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-spinner {
  color: #333; }

.sk-spinner > div {
  background-color: currentColor; }
`,""])},ZO4W:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.OptionButton-module-duda-scroll-bar-Ez3b::-webkit-scrollbar {
  width: 11px;
  display: block;
  background: none; }

.OptionButton-module-duda-scroll-bar-Ez3b::-webkit-scrollbar-button {
  display: none; }

.OptionButton-module-duda-scroll-bar-Ez3b::-webkit-scrollbar-track {
  background: none; }

.OptionButton-module-duda-scroll-bar-Ez3b::-webkit-scrollbar-thumb {
  border-radius: 20px;
  border: 3px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  background-color: transparent;
  transition: all 0.1s ease-in-out; }

.OptionButton-module-duda-scroll-bar-Ez3b:hover::-webkit-scrollbar-thumb {
  background-color: #bfbfbf; }

.OptionButton-module-duda-scroll-bar-Ez3b::-webkit-resizer {
  padding-block-start: 20px;
  padding-inline-end: 20px;
  padding-block-end: 20px;
  padding-inline-start: 20px; }

.OptionButton-module-small-button-3y3b {
  padding-block-start: 4px;
  padding-inline-end: 4px;
  padding-block-end: 4px;
  padding-inline-start: 4px;
  border-radius: 3px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 14px;
  outline: none;
  box-shadow: 1px 1px 2px 0 rgba(75, 75, 85, 0.2);
  border: 1px solid #ced6d9;
  color: #617379;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center; }

.OptionButton-module-arrow-2P3b {
  border: 9px solid black;
  transform-origin: 0 0;
  position: absolute;
  z-index: 101;
  backface-visibility: hidden;
  width: 0; }

.OptionButton-module-duda-left-arrow-1f3b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  box-shadow: -1px 1px 1px 0px rgba(0, 0, 0, 0.1);
  transform: rotate(59deg) skewY(-14deg) skewX(10deg); }

.OptionButton-module-duda-right-arrow-1x3b {
  transform: rotate(-17deg) skewY(-16deg) skewX(-18deg);
  box-shadow: -1px 3px 0px -1px rgba(0, 0, 0, 0.1);
  border-color: #f2f2f2 #f2f2f2 transparent transparent; }

.OptionButton-module-duda-top-arrow-2n3b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  transform: rotate(136deg) skewY(0deg) skewX(2deg);
  box-shadow: -1px 1px 0 0px #c5c3c3; }

.OptionButton-module-duda-bottom-arrow-103b {
  border-color: transparent transparent #f2f2f2 #f2f2f2;
  transform: rotate(-60deg) skewY(20deg) skewX(-11deg);
  box-shadow: -1px 3px 2px -1px rgba(0, 0, 0, 0.24); }

.OptionButton-module-main-2W3b {
  position: relative; }
  .OptionButton-module-main-2W3b.OptionButton-module-disabled-1I3b {
    opacity: 0.5;
    cursor: default;
    box-shadow: 1px 1px 2px 0 rgba(75, 75, 85, 0.4); }
  .OptionButton-module-main-2W3b.OptionButton-module-text-wY3b {
    min-width: 30px;
    width: auto;
    font-size: 12px;
    display: flex; }
  .OptionButton-module-main-2W3b.OptionButton-module-selected-_X3b {
    background-color: #f2f2f2;
    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15);
    color: var(--text-on-light);
    fill: var(--text-on-light); }
  .OptionButton-module-main-2W3b > * {
    cursor: pointer; }
  .OptionButton-module-main-2W3b .OptionButton-module-icon-wrapper-XF3b {
    display: flex;
    justify-content: center;
    align-items: center; }
  .OptionButton-module-main-2W3b .OptionButton-module-padded-1X3b {
    padding-inline-end: .3em; }
  .OptionButton-module-main-2W3b.OptionButton-module-selected-_X3b {
    color: var(--text-on-light);
    fill: var(--text-on-light); }
  .OptionButton-module-main-2W3b.OptionButton-module-omit-border-BK3b {
    border: 0;
    box-shadow: none; }
    .OptionButton-module-main-2W3b.OptionButton-module-omit-border-BK3b.OptionButton-module-selected-_X3b {
      background-color: initial; }
  .OptionButton-module-main-2W3b .OptionButton-module-hidden-1k3b {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; }
  .OptionButton-module-main-2W3b input[type="radio"],
  .OptionButton-module-main-2W3b input[type="checkbox"] {
    margin: 0;
    visibility: visible; }
    .OptionButton-module-main-2W3b input[type="radio"].OptionButton-module-capturing-2I3b,
    .OptionButton-module-main-2W3b input[type="checkbox"].OptionButton-module-capturing-2I3b {
      z-index: 1; }
`,""]),o.locals={dudaFont:"Source Sans Pro",dudaGray:"#ced6d9",lightBorder:"#e8e8e8","duda-scroll-bar":"OptionButton-module-duda-scroll-bar-Ez3b","small-button":"OptionButton-module-small-button-3y3b",arrow:"OptionButton-module-arrow-2P3b","duda-left-arrow":"OptionButton-module-duda-left-arrow-1f3b OptionButton-module-arrow-2P3b","duda-right-arrow":"OptionButton-module-duda-right-arrow-1x3b OptionButton-module-arrow-2P3b","duda-top-arrow":"OptionButton-module-duda-top-arrow-2n3b OptionButton-module-arrow-2P3b","duda-bottom-arrow":"OptionButton-module-duda-bottom-arrow-103b OptionButton-module-arrow-2P3b",main:"OptionButton-module-main-2W3b OptionButton-module-small-button-3y3b",disabled:"OptionButton-module-disabled-1I3b",text:"OptionButton-module-text-wY3b",selected:"OptionButton-module-selected-_X3b","icon-wrapper":"OptionButton-module-icon-wrapper-XF3b",padded:"OptionButton-module-padded-1X3b","omit-border":"OptionButton-module-omit-border-BK3b",hidden:"OptionButton-module-hidden-1k3b",capturing:"OptionButton-module-capturing-2I3b"}},ZwNO:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainSetupSuccessCardContent-module-wrapper-3Z3b {
  margin-block-end: 8px; }
`,""]),o.locals={wrapper:"DomainSetupSuccessCardContent-module-wrapper-3Z3b"}},Zzv5:function(a,o,t){var e=t("jz2t");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},a0xs:function(a,o,t){var e=t("acWJ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},aUWK:function(a,o,t){"use strict";a.exports=[t("OX/4"),t("Ph6G"),t("sYUk"),t("e03l"),t("JuP+")(t("e03l")),t("QLKV"),t("JuP+")(t("QLKV")),t("4rNY"),t("5Vaj"),t("JuP+")(t("4rNY")),t("+Ewk")]},acWJ:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.TopBanners-container-333b {
  z-index: 2; }
`,""]),o.locals={container:"TopBanners-container-333b"}},aneH:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PageHeader-container-383b {
  padding-block-start: 40px;
  padding-block-end: 40px; }

.PageHeader-title-container-3C3b {
  display: flex;
  align-items: center; }

.PageHeader-icon-253b {
  margin-inline-start: 8px;
  cursor: pointer; }

.PageHeader-sub-title-3g3b {
  display: inline-block;
  margin-block-start: 10px; }
`,""]),o.locals={container:"PageHeader-container-383b","title-container":"PageHeader-title-container-3C3b",icon:"PageHeader-icon-253b","sub-title":"PageHeader-sub-title-3g3b"}},avLR:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Announcement-announcement-323b {
  display: flex;
  padding-top: 19px;
  padding-bottom: 19px; }
  .Announcement-announcement-323b .Announcement-announcement-icon-3o3b {
    justify-content: flex-start;
    height: auto;
    padding-inline-start: 2px;
    padding-inline-end: 8px;
    align-self: flex-start; }
  .Announcement-announcement-323b .Announcement-announcement-text-373b {
    font-family: 'Source Sans Pro';
    font-style: italic;
    padding-top: 0px;
    padding-bottom: 0px; }

.Announcement-announcement-for-newsletter-2y3b {
  justify-content: center; }
`,""]),o.locals={announcement:"Announcement-announcement-323b","announcement-icon":"Announcement-announcement-icon-3o3b","announcement-text":"Announcement-announcement-text-373b","announcement-for-newsletter":"Announcement-announcement-for-newsletter-2y3b"}},"b+XZ":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.BlockUI-container-1g3b {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 104; }
  .BlockUI-container-1g3b .BlockUI-spinner-b63b {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center; }
  .BlockUI-container-1g3b .BlockUI-spinner-b63b.BlockUI-with-overlay-6B3b {
    background-color: rgba(0, 0, 0, 0.5); }
`,""]),o.locals={container:"BlockUI-container-1g3b",spinner:"BlockUI-spinner-b63b","with-overlay":"BlockUI-with-overlay-6B3b"}},bdnp:function(a,o,t){var e=t("GDbD");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},c01f:function(a,o,t){"use strict";var e=t("YAtB"),r=t.n(e),i=t("kyEO"),s=t.n(i),c=t("Mjr1"),f=t("hzps"),b=t.n(f),h=t("M4Wz"),v=t.n(h),O=t("2imF"),p=t("JQwD"),m=t.n(p),l=t("rf6O"),u=t("k4gB"),n=t("nKUr");function x({onConnectClick:C,connectMessage:S,connectButton:T}){return Object(n.jsxs)("div",{className:m.a.container,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(b.a,{className:m.a.title,text:Object(u.m)("dashboard.customDomain.connectOwnDomain")}),Object(n.jsx)(b.a,{inactive:!0,className:m.a.subtitle,text:S})]}),T||Object(n.jsx)(v.a,{type:"text",size:"small",onClick:C,text:Object(u.m)("dashboard.customDomain.connect"),endIconProps:{name:"arrow-right-short",size:18,iconType:O.Type.SVG}})]})}x.propTypes={onConnectClick:l.func,connectMessage:l.string,connectButton:l.element};var y=x;function j({domain:C,onEditClick:S,onConnectClick:T,connectMessage:R,connectButton:M}){return Object(n.jsxs)("div",{className:r.a.container,children:[Object(n.jsx)(c.a,{domain:C,onEditClick:S}),Object(n.jsx)(s.a,{className:r.a.divider}),Object(n.jsx)(y,{onConnectClick:T,connectMessage:R,connectButton:M})]})}j.propTypes={domain:l.string.isRequired,onEditClick:l.func,onConnectClick:l.func,connectMessage:l.string,connectButton:l.element};var I=o.a=j},c6lS:function(a,o,t){var e=t("Do6s");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},c6pU:function(a,o,t){"use strict";var e=t("P7XM"),r=t("2Naf");function i(s,c,f){r.call(this,s,c,f,{noCredentials:!0})}e(i,r),i.enabled=r.enabled,a.exports=i},cCUN:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SitesFailedToUpdatePopup-module-icon-3X3b {
  margin-block-end: 32px; }

.SitesFailedToUpdatePopup-module-title-1a3b {
  margin-block-end: 8px; }

.SitesFailedToUpdatePopup-module-site-list-YZ3b {
  list-style: none;
  background-color: #f5f7f7;
  padding: 0;
  max-height: 216px;
  overflow-y: auto;
  margin-block-start: 25px; }
  .SitesFailedToUpdatePopup-module-site-list-YZ3b .SitesFailedToUpdatePopup-module-site-item-sl3b {
    height: 72px;
    margin-inline-start: 24px;
    margin-inline-end: 24px;
    padding-inline-start: 16px;
    padding-inline-end: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center; }
    .SitesFailedToUpdatePopup-module-site-list-YZ3b .SitesFailedToUpdatePopup-module-site-item-sl3b:not(:last-child) {
      border-bottom: 1px solid #ced6d9; }
    .SitesFailedToUpdatePopup-module-site-list-YZ3b .SitesFailedToUpdatePopup-module-site-item-sl3b .SitesFailedToUpdatePopup-module-site-item-name-1n3b {
      font-family: Roboto;
      margin-block-end: 3px; }
    .SitesFailedToUpdatePopup-module-site-list-YZ3b .SitesFailedToUpdatePopup-module-site-item-sl3b .SitesFailedToUpdatePopup-module-site-item-url-3d3b {
      font-family: Roboto;
      color: #828894;
      font-size: 13px; }
`,""]),o.locals={icon:"SitesFailedToUpdatePopup-module-icon-3X3b",title:"SitesFailedToUpdatePopup-module-title-1a3b","site-list":"SitesFailedToUpdatePopup-module-site-list-YZ3b","site-item":"SitesFailedToUpdatePopup-module-site-item-sl3b","site-item-name":"SitesFailedToUpdatePopup-module-site-item-name-1n3b","site-item-url":"SitesFailedToUpdatePopup-module-site-item-url-3d3b"}},cDAH:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainAlreadyTakenMessage-module-message-sR3b {
  margin-block-start: -56px;
  margin-block-end: 11px;
  display: flex; }
`,""]),o.locals={message:"DomainAlreadyTakenMessage-module-message-sR3b"}},cFI4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-chasing-dots {
  width: 27px;
  height: 27px;
  position: relative;
  animation: sk-rotate 2.0s infinite linear; }

.sk-chasing-dots > div {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: currentColor;
  border-radius: 100%;
  animation: sk-bounce 2.0s infinite ease-in-out; }

.sk-chasing-dots > div:last-child {
  top: auto;
  bottom: 0;
  animation-delay: -1.0s; }

@keyframes sk-rotate {
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg); } }

@keyframes sk-bounce {
  0%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0); }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1); } }
`,""])},cUkE:function(a,o,t){var e=t("p83S");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},cbSK:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.RadioButtons=h,o.default=void 0;var r=e(t("lSNA")),i=e(t("cDcd")),s=e(t("hSE2")),c=e(t("gZOy")),f=e(t("83y6")),b=e(t("crgN"));function h(O){var p=O.label,m=O.options,l=m===void 0?[]:m,u=O.onSelect,n=u===void 0?function(){}:u,x=O.selectedValue,y=O.className,j=O.optionsGroupClassName,I=O.optionClassName,C=O.radioClassName,S=O["data-auto"],T=S===void 0?"RadioButtons":S;return i.default.createElement(f.default,{label:p,onSelect:n,selected:x,className:(0,s.default)(y,c.default.container),optionsGroupClassName:j,omitLabel:!0},l.map(function(R){var M=R.value,A=R.label,W=R.disabled,P=M===x;return i.default.createElement(b.default,{key:M,label:p,inputLabel:A,value:M,className:(0,s.default)((0,r.default)({},c.default.disabled,W),I),selected:P,omitBorder:!0,"data-auto":"".concat(T,"-").concat(M),disabled:W},i.default.createElement("span",{className:(0,s.default)(c.default.checkmark,(0,r.default)({},c.default.checked,P),C)}))}))}var v=h;o.default=v},cfjV:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Footer-module-container-393b {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  border-top: 1px solid #ced6d9;
  min-height: 59px; }
  .Footer-module-container-393b .Footer-module-links-2C3b {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0; }
    .Footer-module-container-393b .Footer-module-links-2C3b .Footer-module-link-Ca3b {
      text-decoration: unset;
      color: #313131;
      font-family: Source Sans Pro;
      font-size: 14px; }
    .Footer-module-container-393b .Footer-module-links-2C3b .Footer-module-divider-1d3b {
      cursor: default;
      margin-inline-end: 5px;
      margin-inline-start: 5px; }
`,""]),o.locals={container:"Footer-module-container-393b",links:"Footer-module-links-2C3b",link:"Footer-module-link-Ca3b",divider:"Footer-module-divider-1d3b"}},crgN:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("pVnL")),i=e(t("lSNA")),s=e(t("QILm")),c=e(t("cDcd")),f=t("rf6O"),b=e(t("hSE2")),h=e(t("/QOC")),v=e(t("Qqwx")),O=["className","label","value","selected","selectedClassName","iconName","onChange","isCheckbox","omitBorder","disabled","hideLabel","hideInput","iconSize","children","containerProps","inputLabel","iconClassName","data-auto"],p=function(){};function m(u){var n,x,y=u.className,j=u.label,I=u.value,C=u.selected,S=u.selectedClassName,T=u.iconName,R=u.onChange,M=R===void 0?p:R,A=u.isCheckbox,W=u.omitBorder,P=u.disabled,L=u.hideLabel,k=u.hideInput,G=u.iconSize,Y=G===void 0?16:G,J=u.children,X=u.containerProps,at=u.inputLabel,z=u.iconClassName,F=u["data-auto"],rt=(0,s.default)(u,O);return c.default.createElement("label",(0,r.default)({className:(0,b.default)(y,h.default.main,(n={},(0,i.default)(n,h.default.selected,C),(0,i.default)(n,S,C),(0,i.default)(n,h.default.text,!L),(0,i.default)(n,h.default["omit-border"],W),(0,i.default)(n,h.default.disabled,P),n)),"data-auto":F},X),c.default.createElement("input",(0,r.default)({},rt,{"aria-label":"".concat(j," ").concat(I),className:(0,b.default)((x={},(0,i.default)(x,h.default.hidden,k||T||J),(0,i.default)(x,h.default.capturing,!J),x)),type:A?"checkbox":"radio",name:j,value:I,onChange:function(){return M(I)},checked:C,disabled:P})),!J&&T?c.default.createElement("div",{className:(0,b.default)(z,h.default["icon-wrapper"],(0,i.default)({},h.default.padded,!L))},c.default.createElement(v.default,{name:T,size:Y})):J,!L&&c.default.createElement("span",null,at||I))}m.propTypes={label:f.string.isRequired,value:f.string.isRequired,selected:f.bool,selectedClassName:f.string,iconName:f.string,iconSize:f.number,isCheckbox:f.bool,omitBorder:f.bool,disabled:f.bool,hideLabel:f.bool,hideInput:f.bool,onChange:f.func,inputLabel:f.string,containerProps:f.object,iconClassName:f.string};var l=m;o.default=l},dClt:function(a,o,t){"use strict";o.__esModule=!0;function e(c){return c&&c.__esModule?c:{default:c}}var r=t("sTlx"),i=t("tpBh"),s=e(i);o.default=function(c){c.registerHelper("if",function(f,b){if(arguments.length!=2)throw new s.default("#if requires exactly one argument");return r.isFunction(f)&&(f=f.call(this)),!b.hash.includeZero&&!f||r.isEmpty(f)?b.inverse(this):b.fn(this)}),c.registerHelper("unless",function(f,b){if(arguments.length!=2)throw new s.default("#unless requires exactly one argument");return c.helpers.if.call(this,f,{fn:b.inverse,inverse:b.fn,hash:b.hash})})},a.exports=o.default},dDsM:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.whats-new-popup-mobile {
  border-radius: 6px;
  overflow: hidden; }
  .whats-new-popup-mobile .whatsNewStyle-whats-new-popup-close-icon-253b {
    right: 11px;
    top: 11px; }

.whatsNewStyle-whats-new-popup-2v3b {
  height: 100%; }
`,""]),o.locals={"whats-new-popup-close-icon":"whatsNewStyle-whats-new-popup-close-icon-253b","whats-new-popup":"whatsNewStyle-whats-new-popup-2v3b"}},dO3r:function(a,o,t){var e=t("tFjy");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},dORE:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainSetupCardContent-module-label-2F3b {
  color: #313131;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  margin-block-end: 16px; }
`,""]),o.locals={label:"DomainSetupCardContent-module-label-2F3b"}},dSQ3:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"ReactTooltip",{enumerable:!0,get:function(){return c.default}}),o.default=void 0;var r=e(t("lSNA")),i=t("cDcd"),s=t("zdy7"),c=e(t("cpGi")),f=t("nKUr");class b extends i.Component{render(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(c.default,{"data-auto":"defaultTooltip",html:!0,place:"bottom",effect:"solid",className:"tooltip"}),(0,f.jsx)(c.default,{"data-auto":"rightTooltip",id:s.TOOLTIP_TYPE.RIGHT_HTML_TOOLTIP,html:!0,place:"right",effect:"solid",className:"tooltip"})]})}}(0,r.default)(b,"displayName","ReactTooltips");var h=b;o.default=h},dVYT:function(a,o,t){"use strict";o.__esModule=!0;var e={helpers:{helperExpression:function(i){return i.type==="SubExpression"||(i.type==="MustacheStatement"||i.type==="BlockStatement")&&!!(i.params&&i.params.length||i.hash)},scopedId:function(i){return/^\.|this\b/.test(i.original)},simpleId:function(i){return i.parts.length===1&&!e.helpers.scopedId(i)&&!i.depth}}};o.default=e,a.exports=o.default},dXd4:function(a,o,t){"use strict";var e=t("P7XM"),r=t("Yh+D"),i=t("96lO"),s=function(){};function c(b){return function(h,v,O){s("create ajax sender",h,v);var p={};typeof v=="string"&&(p.headers={"Content-type":"text/plain"});var m=r.addPath(h,"/xhr_send"),l=new b("POST",m,v,p);return l.once("finish",function(u){if(s("finish",u),l=null,u!==200&&u!==204)return O(new Error("http status "+u));O()}),function(){s("abort"),l.close(),l=null;var u=new Error("Aborted");u.code=1e3,O(u)}}}function f(b,h,v,O){i.call(this,b,h,c(O),v,O)}e(f,i),a.exports=f},da1W:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.TemplateIntentPopup-main-303b {
  padding-block-start: 16px;
  padding-block-end: 16px; }
  .TemplateIntentPopup-main-303b .TemplateIntentPopup-header-3z3b {
    position: absolute;
    right: 16px; }
  .TemplateIntentPopup-main-303b .TemplateIntentPopup-title-1L3b {
    font-family: Roboto;
    font-size: 24px;
    font-weight: 500;
    color: #313131;
    text-align: center;
    padding-block-start: 0;
    padding-block-end: 32px; }
  .TemplateIntentPopup-main-303b .TemplateIntentPopup-cards-container-kH3b {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 16px;
    grid-row-gap: 16px; }
`,""]),o.locals={main:"TemplateIntentPopup-main-303b",header:"TemplateIntentPopup-header-3z3b",title:"TemplateIntentPopup-title-1L3b","cards-container":"TemplateIntentPopup-cards-container-kH3b"}},ddYX:function(a,o,t){"use strict";t.d(o,"a",function(){return f}),t.d(o,"b",function(){return m});var e=t("yXPU"),r=t.n(e),i=t("sEfC"),s=t.n(i),c=t("9iID");const f={TRACE:"TRACE",DEBUG:"DEBUG",INFO:"INFO",WARN:"WARN",ERROR:"ERROR"};let b,h,v,O,p=!1;function m(x){return l.apply(this,arguments)}function l(){return l=r()(function*({logLevel:x,dataString:y}){u(),O.push({priority:x,log:JSON.stringify(y)}),v()}),l.apply(this,arguments)}function u(){p||(b=parseInt(c.a.get("common.log.batchLogLimit"),10),h=parseInt(c.a.get("common.log.debounceDelay"),10),v=s()(n,h),O=[],p=!0)}function n(){let x;O.length>b?x=[{priority:f.WARN,log:`There are too many logs, showing first ${b} out of ${O.length}`},...O.slice(0,b)]:x=O,fetch("/_dm/s/rt/actions/logs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({logs:x})}),O.length=0}},dg3h:function(a,o,t){var e=t("+eeU");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},dnV1:function(a,o,t){"use strict";var e=Object.assign||function(s){for(var c=1;c<arguments.length;c++){var f=arguments[c];for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(s[b]=f[b])}return s},r={circle:{className:"sk-circle",divCount:12},"cube-grid":{className:"sk-cube-grid",divCount:9},wave:{className:"sk-wave",divCount:5},"folding-cube":{className:"sk-folding-cube",divCount:4},"three-bounce":{className:"sk-three-bounce",divCount:3},"double-bounce":{className:"sk-double-bounce",divCount:2},"wandering-cubes":{className:"sk-wandering-cubes",divCount:2},"chasing-dots":{className:"sk-chasing-dots",divCount:2},"rotating-plane":{className:"sk-rotating-plane",divCount:1},pulse:{className:"sk-pulse",divCount:1},wordpress:{className:"sk-wordpress",divCount:1}},i={"ball-grid-beat":{divCount:9},"ball-grid-pulse":{divCount:9},"line-spin-fade-loader":{divCount:8},"ball-spin-fade-loader":{divCount:8},"ball-pulse-rise":{divCount:5},"line-scale":{divCount:5},"line-scale-pulse-out":{divCount:5},"line-scale-pulse-out-rapid":{divCount:5},pacman:{divCount:5},"line-scale-party":{divCount:4},"ball-triangle-path":{divCount:3},"ball-scale-multiple":{divCount:3},"ball-scale-ripple-multiple":{divCount:3},"ball-pulse-sync":{divCount:3},"ball-beat":{divCount:3},"ball-zig-zag":{divCount:2},"ball-zig-zag-deflect":{divCount:2},"ball-clip-rotate-pulse":{divCount:2},"ball-clip-rotate-multiple":{divCount:2},"ball-clip-rotate":{divCount:1},"ball-scale-ripple":{divCount:1},"triangle-skew-spin":{divCount:1}};a.exports={spinkitSpinners:r,loadersCssSpinners:i,allSpinners:e({},r,i)}},dyV1:function(a,o,t){"use strict";var e=Array.prototype,r=Object.prototype,i=Function.prototype,s=String.prototype,c=e.slice,f=r.toString,b=function(M){return r.toString.call(M)==="[object Function]"},h=function(A){return f.call(A)==="[object Array]"},v=function(A){return f.call(A)==="[object String]"},O=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(M){return!1}}(),p;O?p=function(M,A,W,P){!P&&A in M||Object.defineProperty(M,A,{configurable:!0,enumerable:!1,writable:!0,value:W})}:p=function(M,A,W,P){!P&&A in M||(M[A]=W)};var m=function(M,A,W){for(var P in A)r.hasOwnProperty.call(A,P)&&p(M,P,A[P],W)},l=function(M){if(M==null)throw new TypeError("can't convert "+M+" to object");return Object(M)};function u(M){var A=+M;return A!==A?A=0:A!==0&&A!==1/0&&A!==-(1/0)&&(A=(A>0||-1)*Math.floor(Math.abs(A))),A}function n(M){return M>>>0}function x(){}m(i,{bind:function(A){var W=this;if(!b(W))throw new TypeError("Function.prototype.bind called on incompatible "+W);for(var P=c.call(arguments,1),L=function(){if(this instanceof J){var X=W.apply(this,P.concat(c.call(arguments)));return Object(X)===X?X:this}else return W.apply(A,P.concat(c.call(arguments)))},k=Math.max(0,W.length-P.length),G=[],Y=0;Y<k;Y++)G.push("$"+Y);var J=Function("binder","return function ("+G.join(",")+"){ return binder.apply(this, arguments); }")(L);return W.prototype&&(x.prototype=W.prototype,J.prototype=new x,x.prototype=null),J}}),m(Array,{isArray:h});var y=Object("a"),j=y[0]!=="a"||!(0 in y),I=function(A){var W=!0,P=!0;return A&&(A.call("foo",function(L,k,G){typeof G!="object"&&(W=!1)}),A.call([1],function(){"use strict";P=typeof this=="string"},"x")),!!A&&W&&P};m(e,{forEach:function(A){var W=l(this),P=j&&v(this)?this.split(""):W,L=arguments[1],k=-1,G=P.length>>>0;if(!b(A))throw new TypeError;for(;++k<G;)k in P&&A.call(L,P[k],k,W)}},!I(e.forEach));var C=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;m(e,{indexOf:function(A){var W=j&&v(this)?this.split(""):l(this),P=W.length>>>0;if(!P)return-1;var L=0;for(arguments.length>1&&(L=u(arguments[1])),L=L>=0?L:Math.max(0,P+L);L<P;L++)if(L in W&&W[L]===A)return L;return-1}},C);var S=s.split;"ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1?function(){var M=/()??/.exec("")[1]===void 0;s.split=function(A,W){var P=this;if(A===void 0&&W===0)return[];if(f.call(A)!=="[object RegExp]")return S.call(this,A,W);var L=[],k=(A.ignoreCase?"i":"")+(A.multiline?"m":"")+(A.extended?"x":"")+(A.sticky?"y":""),G=0,Y,J,X,at;for(A=new RegExp(A.source,k+"g"),P+="",M||(Y=new RegExp("^"+A.source+"$(?!\\s)",k)),W=W===void 0?-1>>>0:n(W);(J=A.exec(P))&&(X=J.index+J[0].length,!(X>G&&(L.push(P.slice(G,J.index)),!M&&J.length>1&&J[0].replace(Y,function(){for(var z=1;z<arguments.length-2;z++)arguments[z]===void 0&&(J[z]=void 0)}),J.length>1&&J.index<P.length&&e.push.apply(L,J.slice(1)),at=J[0].length,G=X,L.length>=W)));)A.lastIndex===J.index&&A.lastIndex++;return G===P.length?(at||!A.test(""))&&L.push(""):L.push(P.slice(G)),L.length>W?L.slice(0,W):L}}():"0".split(void 0,0).length&&(s.split=function(A,W){return A===void 0&&W===0?[]:S.call(this,A,W)});var T=s.substr,R="".substr&&"0b".substr(-1)!=="b";m(s,{substr:function(A,W){return T.call(this,A<0&&(A=this.length+A)<0?0:A,W)}},R)},e03l:function(a,o,t){"use strict";var e=t("P7XM"),r=t("dXd4"),i=t("+R4f"),s=t("3wkl"),c=t("yjSe");function f(b){if(!f.enabled())throw new Error("Transport created when disabled");r.call(this,b,"/eventsource",i,s)}e(f,r),f.enabled=function(){return!!c},f.transportName="eventsource",f.roundTrips=2,a.exports=f},e64j:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Card-module-container-1_3b {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 2px; }
`,""]),o.locals={container:"Card-module-container-1_3b"}},eLVs:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DetailsCellRenderer-module-details-cell-1f3b {
  line-height: 20px;
  display: flex;
  flex-direction: column;
  font-family: Roboto; }
  .DetailsCellRenderer-module-details-cell-1f3b .DetailsCellRenderer-module-description-1W3b {
    color: #828894; }
  .DetailsCellRenderer-module-details-cell-1f3b .DetailsCellRenderer-module-detail-363b {
    display: inline-flex;
    align-items: center; }
    .DetailsCellRenderer-module-details-cell-1f3b .DetailsCellRenderer-module-detail-363b .DetailsCellRenderer-module-link-gE3b {
      font-size: 13px;
      color: inherit; }
    .DetailsCellRenderer-module-details-cell-1f3b .DetailsCellRenderer-module-detail-363b .DetailsCellRenderer-module-details-title-3O3b {
      font-size: 14px; }
    .DetailsCellRenderer-module-details-cell-1f3b .DetailsCellRenderer-module-detail-363b .DetailsCellRenderer-module-icon-3r3b {
      margin-inline-start: 3px;
      cursor: pointer; }
`,""]),o.locals={"details-cell":"DetailsCellRenderer-module-details-cell-1f3b",description:"DetailsCellRenderer-module-description-1W3b",detail:"DetailsCellRenderer-module-detail-363b",link:"DetailsCellRenderer-module-link-gE3b","details-title":"DetailsCellRenderer-module-details-title-3O3b",icon:"DetailsCellRenderer-module-icon-3r3b"}},eQ0C:function(a,o,t){var e=t("fojk");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},eVVs:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Root-container-1L3b {
  max-width: 990px;
  margin: auto; }

.Root-card-3h3b {
  margin-block-start: 0;
  margin-block-end: 0;
  max-width: 990px; }

.Root-content-card-2b3b.Root-content-card-2b3b {
  padding-block-start: 30px;
  padding-block-end: 40px;
  padding-inline-start: 40px; }
`,""]),o.locals={container:"Root-container-1L3b",card:"Root-card-3h3b","content-card":"Root-content-card-2b3b"}},ecKV:function(a,o,t){var e=t("Nr1Y");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},edyS:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("QILm")),i=e(t("cDcd")),s=e(t("rf6O")),c=e(t("hSE2")),f=e(t("kKBb")),b=e(t("VSAF")),h=["className","text","children"],v=s.default.string,O=s.default.oneOfType,p=s.default.number,m=function(n){var x=n.className,y=n.text,j=n.children,I=(0,r.default)(n,h);return i.default.createElement(b.default,{className:(0,c.default)(x,f.default.circle),center:!0,"data-auto":I["data-auto"]},y||j)};m.propTypes={"data-auto":v,className:v,text:O([v,p])},m.defaultProps={"data-auto":"badgeicon"};var l=i.default.memo(m);o.default=l},fCBv:function(a,o,t){"use strict";(function(e){var r=t("raCH").EventEmitter,i=t("P7XM"),s=t("kwwM"),c=t("woL0"),f=t("nzop"),b=t("xSnx"),h=function(){};function v(O,p){var m=this;r.call(this);var l=function(){var u=m.ifr=new f(b.transportName,p,O);u.once("message",function(n){if(n){var x;try{x=s.parse(n)}catch(I){h("bad json",n),m.emit("finish"),m.close();return}var y=x[0],j=x[1];m.emit("finish",y,j)}m.close()}),u.once("close",function(){m.emit("finish"),m.close()})};e.document.body?l():c.attachEvent("load",l)}i(v,r),v.enabled=function(){return f.enabled()},v.prototype.close=function(){this.ifr&&this.ifr.close(),this.removeAllListeners(),this.ifr=null},a.exports=v}).call(this,t("yLpj"))},fH3i:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainInput-module-domain-input-No3b {
  display: flex;
  position: relative;
  margin-block-end: 79px; }
  .DomainInput-module-domain-input-No3b .DomainInput-module-sub-domain-input-3Q3b {
    height: 35px;
    width: 270px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-inline-start: 10px;
    padding-inline-end: 10px;
    border: 1px solid #ced6d9; }
    .DomainInput-module-domain-input-No3b .DomainInput-module-sub-domain-input-3Q3b:focus {
      border-color: #a1abb0; }
    .DomainInput-module-domain-input-No3b .DomainInput-module-sub-domain-input-3Q3b.DomainInput-module-with-error-2J3b {
      border-color: #e7463a; }
  .DomainInput-module-domain-input-No3b .DomainInput-module-error-message-CV3b {
    top: 36px; }
  .DomainInput-module-domain-input-No3b .DomainInput-module-domain-part-1_3b {
    display: flex;
    height: 35px;
    align-items: center;
    font-size: 14px;
    padding-inline-start: 10px;
    padding-inline-end: 24px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #828894;
    background-color: #f5f7f7;
    border: 1px solid #ced6d9; }
`,""]),o.locals={"domain-input":"DomainInput-module-domain-input-No3b","sub-domain-input":"DomainInput-module-sub-domain-input-3Q3b","with-error":"DomainInput-module-with-error-2J3b","error-message":"DomainInput-module-error-message-CV3b","domain-part":"DomainInput-module-domain-part-1_3b"}},fJM5:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ContactSupportLock-main-1r3b {
  text-align: center;
  width: 200px; }

.ContactSupportLock-title-2F3b {
  font-family: 'Roboto';
  font-size: 16px; }

.ContactSupportLock-description-1z3b {
  margin-block-start: 0;
  margin-inline-end: 3px;
  margin-block-end: 10px;
  margin-inline-start: 3px;
  font-size: 14px;
  font-family: Source Sans Pro, sans-serif; }
`,""]),o.locals={main:"ContactSupportLock-main-1r3b",title:"ContactSupportLock-title-2F3b",description:"ContactSupportLock-description-1z3b"}},fKeY:function(a,o,t){var e=t("OOOG");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},fRPY:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SubNavText-link-DL3b {
  flex: 1;
  align-self: stretch;
  display: flex;
  text-decoration: none; }
  .SubNavText-link-DL3b .SubNavText-text-3b3b {
    cursor: pointer; }
`,""]),o.locals={link:"SubNavText-link-DL3b",text:"SubNavText-text-3b3b"}},fhYk:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavigationMenu-module-navList-2s3b {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }

.NavigationMenu-module-navList-2s3b,
.NavigationMenu-module-children-3T3b {
  list-style: none;
  padding-inline-start: 0; }

.NavigationMenu-module-divider-1e3b {
  margin-block-start: 7px;
  margin-block-end: 7px;
  width: auto;
  margin-inline-start: 24px;
  margin-inline-end: 24px; }

.NavigationMenu-module-elementSelected-9d3b {
  color: var(--button-color); }
  .NavigationMenu-module-elementSelected-9d3b [data-auto='icon'] {
    fill: var(--button-color); }

.NavigationMenu-module-rotate-3T3b {
  transform: rotate(90deg);
  transition: 0.2s transform; }
`,""]),o.locals={navList:"NavigationMenu-module-navList-2s3b",children:"NavigationMenu-module-children-3T3b",divider:"NavigationMenu-module-divider-1e3b",elementSelected:"NavigationMenu-module-elementSelected-9d3b",rotate:"NavigationMenu-module-rotate-3T3b"}},fjyx:function(a,o,t){var e;try{e=t("Z4fQ")}catch(c){}finally{if(!e&&typeof window!="undefined"&&(e=window),!e)throw new Error("Could not determine global this")}var r=e.WebSocket||e.MozWebSocket,i=t("EWj0");function s(c,f){var b;return f?b=new r(c,f):b=new r(c),b}r&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach(function(c){Object.defineProperty(s,c,{get:function(){return r[c]}})}),a.exports={w3cwebsocket:r?s:null,version:i}},fojk:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainSetupSuccessCardContent-module-success-card-2f3b {
  padding-block-end: 10px; }
  .DomainSetupSuccessCardContent-module-success-card-2f3b .DomainSetupSuccessCardContent-module-ssl-status-3Q3b {
    display: flex;
    margin-block-start: 25px; }
    .DomainSetupSuccessCardContent-module-success-card-2f3b .DomainSetupSuccessCardContent-module-ssl-status-3Q3b .DomainSetupSuccessCardContent-module-label-2M3b {
      margin-inline-end: 8px; }
`,""]),o.locals={"success-card":"DomainSetupSuccessCardContent-module-success-card-2f3b","ssl-status":"DomainSetupSuccessCardContent-module-ssl-status-3Q3b",label:"DomainSetupSuccessCardContent-module-label-2M3b"}},fyLq:function(a,o,t){var e=t("Dh16");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},g1OK:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.Divider=G,o.default=o.SIZE=void 0;var r=e(t("lSNA")),i=e(t("QILm")),s=e(t("cvCv")),c=t("cDcd"),f=e(t("rf6O")),b=e(t("TSYQ")),h=e(t("N6jy")),v=e(t("SGXX")),O=e(t("rJYc")),p=e(t("JXTY")),m=t("zdy7"),l=e(t("l2Rb")),u=e(t("tZPy")),n=e(t("TIZd")),x=t("nKUr");function y(z,F){var rt=Object.keys(z);if(Object.getOwnPropertySymbols){var ct=Object.getOwnPropertySymbols(z);F&&(ct=ct.filter(function(dt){return Object.getOwnPropertyDescriptor(z,dt).enumerable})),rt.push.apply(rt,ct)}return rt}function j(z){for(var F=1;F<arguments.length;F++){var rt=arguments[F]!=null?arguments[F]:{};F%2?y(Object(rt),!0).forEach(function(ct){(0,r.default)(z,ct,rt[ct])}):Object.getOwnPropertyDescriptors?Object.defineProperties(z,Object.getOwnPropertyDescriptors(rt)):y(Object(rt)).forEach(function(ct){Object.defineProperty(z,ct,Object.getOwnPropertyDescriptor(rt,ct))})}return z}const I=f.default.string,C=f.default.func,S=f.default.bool,T=f.default.oneOf,R={SMALL:l.default.small,MEDIUM:l.default.medium,LARGE:l.default.large};o.SIZE=R;function M(z){let F=z.show,rt=F===void 0?!1:F,ct=z.onClose,dt=z.children,vt=z.modalRootSelector,Ot=z.closeOnEscape,Mt=Ot===void 0?!0:Ot,Rt=z.closeOnClickOutside,Yt=Rt===void 0?!0:Rt,re=z.validateClickOnOutside,Xt=re===void 0?(0,s.default)(!0):re,pe=z.className,de=z.overlayClassName,se=z.predefinedSize,Qt=se===void 0?R.SMALL:se,St=(0,i.default)(z,["show","onClose","children","modalRootSelector","closeOnEscape","closeOnClickOutside","validateClickOnOutside","className","overlayClassName","predefinedSize"]);const Ut=(0,c.useRef)(null),zt=(0,c.useCallback)(Jt=>{Mt&&Jt.keyCode===m.KEY_CODES.ESCAPE&&(Jt.preventDefault(),ct())},[Mt,ct]);return(0,c.useEffect)(()=>{return rt?window.addEventListener("click",Jt):window.removeEventListener("click",Jt),()=>{window.removeEventListener("click",Jt)};function Jt(ge){Yt&&Ut.current&&!Ut.current.contains(ge.target)&&Xt(ge)&&ct()}},[Yt,Xt,ct,rt]),(0,n.default)({type:"keyup",handler:zt}),(0,x.jsx)(h.default,{modalRootSelector:vt,children:(0,x.jsx)("div",{className:(0,b.default)(l.default.overlay,de,{[l.default.shown]:rt}),tabIndex:"-1",children:(0,x.jsx)("div",j(j({ref:Ut,className:(0,b.default)(l.default.main,pe,Qt),"aria-modal":rt||null,"aria-hidden":!rt||null,role:"dialog"},St),{},{children:dt}))})})}M.propTypes={show:S,onClose:C,modalRootSelector:I,closeOnEscape:S,closeOnClickOutside:S,validateClickOnOutside:C,className:I,predefinedSize:T(Object.keys(R)),overlayClassName:I};var A=M;o.default=A;function W({children:z}){return(0,x.jsx)("div",{className:l.default.header,children:z})}M.Header=W;function P({children:z}){return(0,x.jsx)(u.default,{className:l.default.title,children:z})}M.Title=P;function L({onClick:z}){return(0,x.jsx)(v.default,{name:"close_popup",iconType:m.ICON_TYPE.SVG,size:15,onClick:z,className:(0,b.default)(l.default["close-button"]),addSvgIdPrefix:!1,touchFriendly:!0,clickable:!0,domAttrs:{role:"button"}})}L.propTypes={onClick:C},M.CloseButton=L;function k({children:z}){return(0,x.jsx)("div",{className:l.default.body,children:z})}M.Body=k;function G(){return(0,x.jsx)(p.default,{className:l.default.divider})}M.Divider=G;function Y({children:z}){return(0,x.jsx)("div",{className:l.default.actions,children:z})}M.Actions=Y;function J({children:z}){return(0,x.jsx)("div",{className:l.default["confirmation-actions"],children:z})}M.ConfirmationActions=J;function X(z){let F=z.children,rt=z.className,ct=(0,i.default)(z,["children","className"]);return(0,x.jsx)(O.default,j({big:!0,className:(0,b.default)(l.default.button,rt),text:F},ct))}M.ConfirmationActions.Button=X;function at({children:z}){return(0,x.jsx)(u.default,{className:l.default.footer,children:z})}M.Footer=at},g6w0:function(a,o,t){var e=t("jOdP");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},g8u4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SuccessButton-module-button-1A3b {
  background-color: #3ac280; }
  .SuccessButton-module-button-1A3b:hover {
    background-color: #3fcf89; }
`,""]),o.locals={button:"SuccessButton-module-button-1A3b"}},gXwF:function(a,o,t){var e=t("ZO4W");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},gZOy:function(a,o,t){var e=t("2XFg");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},gwAw:function(a,o,t){var e=t("4Bd7");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},h2Bd:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,"",""])},h9kl:function(a,o,t){"use strict";o.__esModule=!0;function e(y){return y&&y.__esModule?y:{default:y}}function r(y){if(y&&y.__esModule)return y;var j={};if(y!=null)for(var I in y)Object.prototype.hasOwnProperty.call(y,I)&&(j[I]=y[I]);return j.default=y,j}var i=t("BEYS"),s=r(i),c=t("scbj"),f=e(c),b=t("tpBh"),h=e(b),v=t("sTlx"),O=r(v),p=t("vRmd"),m=r(p),l=t("Cm69"),u=e(l);function n(){var y=new s.HandlebarsEnvironment;return O.extend(y,s),y.SafeString=f.default,y.Exception=h.default,y.Utils=O,y.escapeExpression=O.escapeExpression,y.VM=m,y.template=function(j){return m.template(j,y)},y}var x=n();x.create=n,u.default(x),x.default=x,o.default=x,a.exports=o.default},hPxs:function(a,o,t){"use strict";var e=t("kwwM"),r=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,i,s=function(c){var f,b={},h=[];for(f=0;f<65536;f++)h.push(String.fromCharCode(f));return c.lastIndex=0,h.join("").replace(c,function(v){return b[v]="\\u"+("0000"+v.charCodeAt(0).toString(16)).slice(-4),""}),c.lastIndex=0,b};a.exports={quote:function(c){var f=e.stringify(c);return r.lastIndex=0,r.test(f)?(i||(i=s(r)),f.replace(r,function(b){return i[b]})):f}}},i09R:function(a,o,t){var e=t("3z+Z");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},i7k0:function(a,o,t){var e=t("8YjA");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},iBH0:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-three-bounce {
  height: 18px; }

.sk-three-bounce > div {
  width: 18px;
  height: 18px;
  background-color: currentColor;
  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  animation-fill-mode: both; }

.sk-three-bounce > div:first-child {
  animation-delay: -0.32s; }

.sk-three-bounce > div:nth-child(2) {
  animation-delay: -0.16s; }

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
    -webkit-transform: scale(0); }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1); } }
`,""])},iCZy:function(a,o,t){var e=t("1tzA");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},iGgY:function(a,o,t){var e=t("dORE");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},iLAm:function(a,o,t){"use strict";var e=t("cDcd"),r=t.n(e),i=t("k4gB"),s=t("XYu/"),c=t("LyWx"),f=t("Pd+x"),b=t.n(f),h=t("EDod"),v=t.n(h),O=t("nKUr"),p=t.n(O);const m=()=>{const{environment:{productType:l},dashboard:{footerLinks:{privacy:u,terms:n,contact:x}}}=Object(e.useContext)(s.a);return l===c.u.RESELLER?null:Object(O.jsxs)(b.a,{className:v.a.main,children:[Object(O.jsx)(b.a.Item,{text:Object(i.m)("dashboard.footer.privacy"),url:u}),Object(O.jsx)(b.a.Item,{text:Object(i.m)("dashboard.footer.terms"),url:n}),Object(O.jsx)(b.a.Item,{text:Object(i.m)("dashboard.footer.contact"),url:x})]})};o.a=m},ibx3:function(a,o,t){"use strict";var e=t("raCH").EventEmitter,r=t("P7XM"),i=t("kwwM"),s=t("1eVo"),c=function(){};function f(b,h){e.call(this);var v=this,O=+new Date;this.xo=new h("GET",b),this.xo.once("finish",function(p,m){var l,u;if(p===200){if(u=+new Date-O,m)try{l=i.parse(m)}catch(n){c("bad json",m)}s.isObject(l)||(l={})}v.emit("finish",l,u),v.removeAllListeners()})}r(f,e),f.prototype.close=function(){this.removeAllListeners(),this.xo.close()},a.exports=f},inYN:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.EmptySiteListContainer-content-323b {
  justify-content: center;
  flex: 1 0 auto; }
`,""]),o.locals={content:"EmptySiteListContainer-content-323b"}},iuxQ:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.AnimatedCard-module-wrapper-2W3b {
  overflow-y: hidden;
  margin-block-end: 24px;
  background-color: #fff;
  transition: height 0.4s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }
`,""]),o.locals={wrapper:"AnimatedCard-module-wrapper-2W3b"}},jOdP:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Stepper-module-stepper-1J3b {
  height: 100%;
  display: flex;
  align-items: center; }
  .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b {
    font-size: 13px;
    box-sizing: border-box;
    height: 100%;
    padding-block-start: 8px;
    padding-block-end: 8px;
    display: flex;
    align-items: center;
    color: #828894;
    pointer-events: none;
    font-family: Roboto, Source Sans Pro; }
    .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b.Stepper-module-clickable-GP3b {
      cursor: pointer;
      pointer-events: auto; }
      .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b.Stepper-module-clickable-GP3b:hover {
        color: var(--text-on-light); }
    .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b.Stepper-module-current-1u3b {
      color: #313131; }
    .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b.Stepper-module-underline-3z3b {
      position: relative; }
      .Stepper-module-stepper-1J3b .Stepper-module-step-1f3b.Stepper-module-underline-3z3b:after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 2px solid var(--text-on-light); }
  .Stepper-module-stepper-1J3b .Stepper-module-arrow-ab3b {
    margin-inline-start: 8px;
    margin-inline-end: 8px;
    color: #616c79;
    width: 15px; }
  .Stepper-module-stepper-1J3b .Stepper-module-step-icon-123b {
    margin-inline-end: 8px;
    height: 24px;
    width: 24px;
    background: var(--text-on-light);
    font-family: Roboto;
    font-weight: 500;
    font-size: 11px; }
    .Stepper-module-stepper-1J3b .Stepper-module-step-icon-123b.Stepper-module-step-icon-done-3D3b, .Stepper-module-stepper-1J3b .Stepper-module-step-icon-123b.Stepper-module-step-icon-inactive-2f3b {
      background: #f5f7f7;
      border: 1px solid #ced6d9; }
    .Stepper-module-stepper-1J3b .Stepper-module-step-icon-123b.Stepper-module-step-icon-done-3D3b {
      color: var(--text-on-light); }
    .Stepper-module-stepper-1J3b .Stepper-module-step-icon-123b.Stepper-module-step-icon-inactive-2f3b {
      color: #313131; }
`,""]),o.locals={stepper:"Stepper-module-stepper-1J3b",step:"Stepper-module-step-1f3b",clickable:"Stepper-module-clickable-GP3b",current:"Stepper-module-current-1u3b",underline:"Stepper-module-underline-3z3b",arrow:"Stepper-module-arrow-ab3b","step-icon":"Stepper-module-step-icon-123b","step-icon-done":"Stepper-module-step-icon-done-3D3b","step-icon-inactive":"Stepper-module-step-icon-inactive-2f3b"}},"jc7/":function(a,o,t){var e=t("IIJs");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},jj1x:function(a,o,t){var e=t("k79F");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},jnhf:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ChangelogCard-container-1a3b {
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px #f6f6f6;
  margin-bottom: 15px;
  padding-block-start: 20px;
  padding-inline-end: 20px;
  padding-block-end: 20px;
  padding-inline-start: 25px;
  position: relative;
  border-left: 5px solid transparent;
  transition: border-left 0.2s;
  overflow: hidden; }
  .ChangelogCard-container-1a3b:last-child {
    margin-bottom: 0; }
  .ChangelogCard-container-1a3b:hover {
    border-left: 5px solid var(--card-hover-color); }
  .ChangelogCard-container-1a3b .ChangelogCard-title-3L3b {
    cursor: pointer;
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: bold;
    padding-top: 0px;
    padding-bottom: 3px;
    padding-inline-end: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .ChangelogCard-container-1a3b .ChangelogCard-description-3n3b {
    font-family: 'Source Sans Pro';
    font-size: 15px;
    color: #454545;
    padding-top: 0px;
    padding-bottom: 0px;
    height: 37px;
    overflow: hidden; }
`,""]),o.locals={container:"ChangelogCard-container-1a3b",title:"ChangelogCard-title-3L3b",description:"ChangelogCard-description-3n3b"}},juLF:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ControlMenu-module-option-193b {
  display: flex;
  align-items: center;
  cursor: pointer;
  align-items: center; }
  .ControlMenu-module-option-193b .ControlMenu-module-icon-1_3b {
    color: #616c79;
    margin-inline-end: 14px; }
`,""]),o.locals={option:"ControlMenu-module-option-193b",icon:"ControlMenu-module-icon-1_3b"}},jwSP:function(a,o,t){var e=t("xXSY");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},jwYG:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`/**
 *
 * All animations must live in their own file
 * in the animations directory and be included
 * here.
 *
 */
/**
 * Styles shared by multiple animations
 */
/**
 * Dots
 */

@keyframes scale {
  0% {
    transform: scale(1);
    opacity: 1; }
  45% {
    transform: scale(0.1);
    opacity: 0.7; }
  80% {
    transform: scale(1);
    opacity: 1; } }

.ball-pulse > div:nth-child(0) {
  animation: scale 0.75s -0.36s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(1) {
  animation: scale 0.75s -0.24s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(2) {
  animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(3) {
  animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block; }

@keyframes ball-pulse-sync {
  33% {
    transform: translateY(10px); }
  66% {
    transform: translateY(-10px); }
  100% {
    transform: translateY(0); } }

.ball-pulse-sync > div:nth-child(0) {
  animation: ball-pulse-sync 0.6s -0.21s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(1) {
  animation: ball-pulse-sync 0.6s -0.14s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(2) {
  animation: ball-pulse-sync 0.6s -0.07s infinite ease-in-out; }

.ball-pulse-sync > div:nth-child(3) {
  animation: ball-pulse-sync 0.6s 0s infinite ease-in-out; }

.ball-pulse-sync > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block; }

@keyframes ball-scale {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1);
    opacity: 0; } }

.ball-scale > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  height: 60px;
  width: 60px;
  animation: ball-scale 1s 0s ease-in-out infinite; }

@keyframes ball-scale {
  0% {
    transform: scale(0); }
  100% {
    transform: scale(1);
    opacity: 0; } }

.ball-scale > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  height: 60px;
  width: 60px;
  animation: ball-scale 1s 0s ease-in-out infinite; }

.ball-scale-random {
  width: 37px;
  height: 40px; }

.ball-scale-random > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  display: inline-block;
  height: 30px;
  width: 30px;
  animation: ball-scale 1s 0s ease-in-out infinite; }

.ball-scale-random > div:nth-child(1) {
  margin-left: -7px;
  animation: ball-scale 1s 0.2s ease-in-out infinite; }

.ball-scale-random > div:nth-child(3) {
  margin-left: -2px;
  margin-top: 9px;
  animation: ball-scale 1s 0.5s ease-in-out infinite; }

@keyframes rotate {
  0% {
    transform: rotate(0deg); }
  50% {
    transform: rotate(180deg); }
  100% {
    transform: rotate(360deg); } }

.ball-rotate {
  position: relative; }

.ball-rotate > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: relative; }

.ball-rotate > div:first-child {
  animation: rotate 1s 0s cubic-bezier(0.7, -0.13, 0.22, 0.86) infinite; }

.ball-rotate > div:before, .ball-rotate > div:after {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  content: "";
  position: absolute;
  opacity: 0.8; }

.ball-rotate > div:before {
  top: 0px;
  left: -28px; }

.ball-rotate > div:after {
  top: 0px;
  left: 25px; }

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1); }
  50% {
    transform: rotate(180deg) scale(0.6); }
  100% {
    transform: rotate(360deg) scale(1); } }

.ball-clip-rotate > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  height: 25px;
  width: 25px;
  background: transparent !important;
  display: inline-block;
  animation: rotate 0.75s 0s linear infinite; }

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1); }
  50% {
    transform: rotate(180deg) scale(0.6); }
  100% {
    transform: rotate(360deg) scale(1); } }

@keyframes scale {
  30% {
    transform: scale(0.3); }
  100% {
    transform: scale(1); } }

.ball-clip-rotate-pulse {
  position: relative;
  -ms-transform: translateY(-15px);
  transform: translateY(-15px); }

.ball-clip-rotate-pulse > div {
  animation-fill-mode: both;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 100%; }

.ball-clip-rotate-pulse > div:first-child {
  background: #fff;
  height: 16px;
  width: 16px;
  top: 7px;
  left: -7px;
  animation: scale 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite; }

.ball-clip-rotate-pulse > div:last-child {
  position: absolute;
  border: 2px solid #fff;
  width: 30px;
  height: 30px;
  left: -16px;
  top: -2px;
  background: transparent;
  border: 2px solid;
  border-color: #fff transparent #fff transparent;
  animation: rotate 1s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
  animation-duration: 1s; }

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(1); }
  50% {
    transform: rotate(180deg) scale(0.6); }
  100% {
    transform: rotate(360deg) scale(1); } }

.ball-clip-rotate-multiple {
  position: relative; }

.ball-clip-rotate-multiple > div {
  animation-fill-mode: both;
  position: absolute;
  left: -20px;
  top: -20px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 100%;
  height: 35px;
  width: 35px;
  animation: rotate 1s 0s ease-in-out infinite; }

.ball-clip-rotate-multiple > div:last-child {
  display: inline-block;
  top: -10px;
  left: -10px;
  width: 15px;
  height: 15px;
  animation-duration: 0.5s;
  border-color: #fff transparent #fff transparent;
  animation-direction: reverse; }

@keyframes ball-scale-ripple {
  0% {
    transform: scale(0.1);
    opacity: 1; }
  70% {
    transform: scale(1);
    opacity: 0.7; }
  100% {
    opacity: 0.0; } }

.ball-scale-ripple > div {
  animation-fill-mode: both;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid #fff;
  animation: ball-scale-ripple 1s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8); }

@keyframes ball-scale-ripple-multiple {
  0% {
    transform: scale(0.1);
    opacity: 1; }
  70% {
    transform: scale(1);
    opacity: 0.7; }
  100% {
    opacity: 0.0; } }

.ball-scale-ripple-multiple {
  position: relative;
  -ms-transform: translateY(-25px);
  transform: translateY(-25px); }

.ball-scale-ripple-multiple > div:nth-child(0) {
  animation-delay: -0.8s; }

.ball-scale-ripple-multiple > div:nth-child(1) {
  animation-delay: -0.6s; }

.ball-scale-ripple-multiple > div:nth-child(2) {
  animation-delay: -0.4s; }

.ball-scale-ripple-multiple > div:nth-child(3) {
  animation-delay: -0.2s; }

.ball-scale-ripple-multiple > div {
  animation-fill-mode: both;
  position: absolute;
  top: -2px;
  left: -26px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid #fff;
  animation: ball-scale-ripple-multiple 1.25s 0s infinite cubic-bezier(0.21, 0.53, 0.56, 0.8); }

@keyframes ball-beat {
  50% {
    opacity: 0.2;
    transform: scale(0.75); }
  100% {
    opacity: 1;
    transform: scale(1); } }

.ball-beat > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation: ball-beat 0.7s 0s infinite linear; }

.ball-beat > div:nth-child(2n-1) {
  animation-delay: -0.35s !important; }

@keyframes ball-scale-multiple {
  0% {
    transform: scale(0);
    opacity: 0; }
  5% {
    opacity: 1; }
  100% {
    transform: scale(1);
    opacity: 0; } }

.ball-scale-multiple {
  position: relative;
  -ms-transform: translateY(-30px);
  transform: translateY(-30px); }

.ball-scale-multiple > div:nth-child(2) {
  animation-delay: -0.4s; }

.ball-scale-multiple > div:nth-child(3) {
  animation-delay: -0.2s; }

.ball-scale-multiple > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  left: -30px;
  top: 0px;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  animation: ball-scale-multiple 1s 0s linear infinite; }

@keyframes ball-triangle-path-1 {
  33% {
    transform: translate(25px, -50px); }
  66% {
    transform: translate(50px, 0px); }
  100% {
    transform: translate(0px, 0px); } }

@keyframes ball-triangle-path-2 {
  33% {
    transform: translate(25px, 50px); }
  66% {
    transform: translate(-25px, 50px); }
  100% {
    transform: translate(0px, 0px); } }

@keyframes ball-triangle-path-3 {
  33% {
    transform: translate(-50px, 0px); }
  66% {
    transform: translate(-25px, -50px); }
  100% {
    transform: translate(0px, 0px); } }

.ball-triangle-path {
  position: relative;
  -ms-transform: translate(-29.994px, -37.50938px);
  transform: translate(-29.994px, -37.50938px); }

.ball-triangle-path > div:nth-child(1) {
  animation-name: ball-triangle-path-1;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; }

.ball-triangle-path > div:nth-child(2) {
  animation-name: ball-triangle-path-2;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; }

.ball-triangle-path > div:nth-child(3) {
  animation-name: ball-triangle-path-3;
  animation-delay: 0;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite; }

.ball-triangle-path > div {
  animation-fill-mode: both;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid #fff; }

.ball-triangle-path > div:nth-of-type(1) {
  top: 50px; }

.ball-triangle-path > div:nth-of-type(2) {
  left: 25px; }

.ball-triangle-path > div:nth-of-type(3) {
  top: 50px;
  left: 50px; }

@keyframes ball-pulse-rise-even {
  0% {
    transform: scale(1.1); }
  25% {
    transform: translateY(-30px); }
  50% {
    transform: scale(0.4); }
  75% {
    transform: translateY(30px); }
  100% {
    transform: translateY(0);
    transform: scale(1); } }

@keyframes ball-pulse-rise-odd {
  0% {
    transform: scale(0.4); }
  25% {
    transform: translateY(30px); }
  50% {
    transform: scale(1.1); }
  75% {
    transform: translateY(-30px); }
  100% {
    transform: translateY(0);
    transform: scale(0.75); } }

.ball-pulse-rise > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.15, 0.46, 0.9, 0.6);
  animation-iteration-count: infinite;
  animation-delay: 0; }

.ball-pulse-rise > div:nth-child(2n) {
  animation-name: ball-pulse-rise-even; }

.ball-pulse-rise > div:nth-child(2n-1) {
  animation-name: ball-pulse-rise-odd; }

@keyframes ball-grid-beat {
  50% {
    opacity: 0.7; }
  100% {
    opacity: 1; } }

.ball-grid-beat {
  width: 57px; }

.ball-grid-beat > div:nth-child(1) {
  animation-delay: 0.44s;
  animation-duration: 1.27s; }

.ball-grid-beat > div:nth-child(2) {
  animation-delay: 0.2s;
  animation-duration: 1.52s; }

.ball-grid-beat > div:nth-child(3) {
  animation-delay: 0.14s;
  animation-duration: 0.61s; }

.ball-grid-beat > div:nth-child(4) {
  animation-delay: 0.15s;
  animation-duration: 0.82s; }

.ball-grid-beat > div:nth-child(5) {
  animation-delay: -0.01s;
  animation-duration: 1.24s; }

.ball-grid-beat > div:nth-child(6) {
  animation-delay: -0.07s;
  animation-duration: 1.35s; }

.ball-grid-beat > div:nth-child(7) {
  animation-delay: 0.29s;
  animation-duration: 1.44s; }

.ball-grid-beat > div:nth-child(8) {
  animation-delay: 0.63s;
  animation-duration: 1.19s; }

.ball-grid-beat > div:nth-child(9) {
  animation-delay: -0.18s;
  animation-duration: 1.48s; }

.ball-grid-beat > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  float: left;
  animation-name: ball-grid-beat;
  animation-iteration-count: infinite;
  animation-delay: 0; }

@keyframes ball-grid-pulse {
  0% {
    transform: scale(1); }
  50% {
    transform: scale(0.5);
    opacity: 0.7; }
  100% {
    transform: scale(1);
    opacity: 1; } }

.ball-grid-pulse {
  width: 57px; }

.ball-grid-pulse > div:nth-child(1) {
  animation-delay: 0.58s;
  animation-duration: 0.9s; }

.ball-grid-pulse > div:nth-child(2) {
  animation-delay: 0.01s;
  animation-duration: 0.94s; }

.ball-grid-pulse > div:nth-child(3) {
  animation-delay: 0.25s;
  animation-duration: 1.43s; }

.ball-grid-pulse > div:nth-child(4) {
  animation-delay: -0.03s;
  animation-duration: 0.74s; }

.ball-grid-pulse > div:nth-child(5) {
  animation-delay: 0.21s;
  animation-duration: 0.68s; }

.ball-grid-pulse > div:nth-child(6) {
  animation-delay: 0.25s;
  animation-duration: 1.17s; }

.ball-grid-pulse > div:nth-child(7) {
  animation-delay: 0.46s;
  animation-duration: 1.41s; }

.ball-grid-pulse > div:nth-child(8) {
  animation-delay: 0.02s;
  animation-duration: 1.56s; }

.ball-grid-pulse > div:nth-child(9) {
  animation-delay: 0.13s;
  animation-duration: 0.78s; }

.ball-grid-pulse > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  float: left;
  animation-name: ball-grid-pulse;
  animation-iteration-count: infinite;
  animation-delay: 0; }

@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    transform: scale(0.4); }
  100% {
    opacity: 1;
    transform: scale(1); } }

.ball-spin-fade-loader {
  position: relative;
  top: -10px;
  left: -10px; }

.ball-spin-fade-loader > div:nth-child(1) {
  top: 25px;
  left: 0;
  animation: ball-spin-fade-loader 1s -0.96s infinite linear; }

.ball-spin-fade-loader > div:nth-child(2) {
  top: 17.04545px;
  left: 17.04545px;
  animation: ball-spin-fade-loader 1s -0.84s infinite linear; }

.ball-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 25px;
  animation: ball-spin-fade-loader 1s -0.72s infinite linear; }

.ball-spin-fade-loader > div:nth-child(4) {
  top: -17.04545px;
  left: 17.04545px;
  animation: ball-spin-fade-loader 1s -0.6s infinite linear; }

.ball-spin-fade-loader > div:nth-child(5) {
  top: -25px;
  left: 0;
  animation: ball-spin-fade-loader 1s -0.48s infinite linear; }

.ball-spin-fade-loader > div:nth-child(6) {
  top: -17.04545px;
  left: -17.04545px;
  animation: ball-spin-fade-loader 1s -0.36s infinite linear; }

.ball-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -25px;
  animation: ball-spin-fade-loader 1s -0.24s infinite linear; }

.ball-spin-fade-loader > div:nth-child(8) {
  top: 17.04545px;
  left: -17.04545px;
  animation: ball-spin-fade-loader 1s -0.12s infinite linear; }

.ball-spin-fade-loader > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute; }

@keyframes ball-spin-loader {
  75% {
    opacity: 0.2; }
  100% {
    opacity: 1; } }

.ball-spin-loader {
  position: relative; }

.ball-spin-loader > span:nth-child(1) {
  top: 45px;
  left: 0;
  animation: ball-spin-loader 2s 0.9s infinite linear; }

.ball-spin-loader > span:nth-child(2) {
  top: 30.68182px;
  left: 30.68182px;
  animation: ball-spin-loader 2s 1.8s infinite linear; }

.ball-spin-loader > span:nth-child(3) {
  top: 0;
  left: 45px;
  animation: ball-spin-loader 2s 2.7s infinite linear; }

.ball-spin-loader > span:nth-child(4) {
  top: -30.68182px;
  left: 30.68182px;
  animation: ball-spin-loader 2s 3.6s infinite linear; }

.ball-spin-loader > span:nth-child(5) {
  top: -45px;
  left: 0;
  animation: ball-spin-loader 2s 4.5s infinite linear; }

.ball-spin-loader > span:nth-child(6) {
  top: -30.68182px;
  left: -30.68182px;
  animation: ball-spin-loader 2s 5.4s infinite linear; }

.ball-spin-loader > span:nth-child(7) {
  top: 0;
  left: -45px;
  animation: ball-spin-loader 2s 6.3s infinite linear; }

.ball-spin-loader > span:nth-child(8) {
  top: 30.68182px;
  left: -30.68182px;
  animation: ball-spin-loader 2s 7.2s infinite linear; }

.ball-spin-loader > div {
  animation-fill-mode: both;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: green; }

@keyframes ball-zig {
  33% {
    transform: translate(-15px, -30px); }
  66% {
    transform: translate(15px, -30px); }
  100% {
    transform: translate(0, 0); } }

@keyframes ball-zag {
  33% {
    transform: translate(15px, 30px); }
  66% {
    transform: translate(-15px, 30px); }
  100% {
    transform: translate(0, 0); } }

.ball-zig-zag {
  position: relative;
  -ms-transform: translate(-15px, -15px);
  transform: translate(-15px, -15px); }

.ball-zig-zag > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  margin-left: 15px;
  top: 4px;
  left: -7px; }

.ball-zig-zag > div:first-child {
  animation: ball-zig 0.7s 0s infinite linear; }

.ball-zig-zag > div:last-child {
  animation: ball-zag 0.7s 0s infinite linear; }

@keyframes ball-zig-deflect {
  17% {
    transform: translate(-15px, -30px); }
  34% {
    transform: translate(15px, -30px); }
  50% {
    transform: translate(0, 0); }
  67% {
    transform: translate(15px, -30px); }
  84% {
    transform: translate(-15px, -30px); }
  100% {
    transform: translate(0, 0); } }

@keyframes ball-zag-deflect {
  17% {
    transform: translate(15px, 30px); }
  34% {
    transform: translate(-15px, 30px); }
  50% {
    transform: translate(0, 0); }
  67% {
    transform: translate(-15px, 30px); }
  84% {
    transform: translate(15px, 30px); }
  100% {
    transform: translate(0, 0); } }

.ball-zig-zag-deflect {
  position: relative;
  -ms-transform: translate(-15px, -15px);
  transform: translate(-15px, -15px); }

.ball-zig-zag-deflect > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  margin-left: 15px;
  top: 4px;
  left: -7px; }

.ball-zig-zag-deflect > div:first-child {
  animation: ball-zig-deflect 1.5s 0s infinite linear; }

.ball-zig-zag-deflect > div:last-child {
  animation: ball-zag-deflect 1.5s 0s infinite linear; }

/**
 * Lines
 */

@keyframes line-scale {
  0% {
    transform: scaley(1); }
  50% {
    transform: scaley(0.4); }
  100% {
    transform: scaley(1); } }

.line-scale > div:nth-child(1) {
  animation: line-scale 1s -0.4s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.line-scale > div:nth-child(2) {
  animation: line-scale 1s -0.3s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.line-scale > div:nth-child(3) {
  animation: line-scale 1s -0.2s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.line-scale > div:nth-child(4) {
  animation: line-scale 1s -0.1s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.line-scale > div:nth-child(5) {
  animation: line-scale 1s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.line-scale > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block; }

@keyframes line-scale-party {
  0% {
    transform: scale(1); }
  50% {
    transform: scale(0.5); }
  100% {
    transform: scale(1); } }

.line-scale-party > div:nth-child(1) {
  animation-delay: -0.09s;
  animation-duration: 0.83s; }

.line-scale-party > div:nth-child(2) {
  animation-delay: 0.33s;
  animation-duration: 0.64s; }

.line-scale-party > div:nth-child(3) {
  animation-delay: 0.32s;
  animation-duration: 0.39s; }

.line-scale-party > div:nth-child(4) {
  animation-delay: 0.47s;
  animation-duration: 0.52s; }

.line-scale-party > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation-name: line-scale-party;
  animation-iteration-count: infinite;
  animation-delay: 0; }

@keyframes line-scale-pulse-out {
  0% {
    transform: scaley(1); }
  50% {
    transform: scaley(0.4); }
  100% {
    transform: scaley(1); } }

.line-scale-pulse-out > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation: line-scale-pulse-out 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); }

.line-scale-pulse-out > div:nth-child(2), .line-scale-pulse-out > div:nth-child(4) {
  animation-delay: -0.4s !important; }

.line-scale-pulse-out > div:nth-child(1), .line-scale-pulse-out > div:nth-child(5) {
  animation-delay: -0.2s !important; }

@keyframes line-scale-pulse-out-rapid {
  0% {
    transform: scaley(1); }
  80% {
    transform: scaley(0.3); }
  90% {
    transform: scaley(1); } }

.line-scale-pulse-out-rapid > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  animation-fill-mode: both;
  display: inline-block;
  animation: line-scale-pulse-out-rapid 0.9s -0.5s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78); }

.line-scale-pulse-out-rapid > div:nth-child(2), .line-scale-pulse-out-rapid > div:nth-child(4) {
  animation-delay: -0.25s !important; }

.line-scale-pulse-out-rapid > div:nth-child(1), .line-scale-pulse-out-rapid > div:nth-child(5) {
  animation-delay: 0s !important; }

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3; }
  100% {
    opacity: 1; } }

.line-spin-fade-loader {
  position: relative;
  top: -10px;
  left: -4px; }

.line-spin-fade-loader > div:nth-child(1) {
  top: 20px;
  left: 0;
  animation: line-spin-fade-loader 1.2s -0.84s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(2) {
  top: 13.63636px;
  left: 13.63636px;
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  animation: line-spin-fade-loader 1.2s -0.72s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(3) {
  top: 0;
  left: 20px;
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  animation: line-spin-fade-loader 1.2s -0.6s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(4) {
  top: -13.63636px;
  left: 13.63636px;
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  animation: line-spin-fade-loader 1.2s -0.48s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(5) {
  top: -20px;
  left: 0;
  animation: line-spin-fade-loader 1.2s -0.36s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(6) {
  top: -13.63636px;
  left: -13.63636px;
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  animation: line-spin-fade-loader 1.2s -0.24s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(7) {
  top: 0;
  left: -20px;
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  animation: line-spin-fade-loader 1.2s -0.12s infinite ease-in-out; }

.line-spin-fade-loader > div:nth-child(8) {
  top: 13.63636px;
  left: -13.63636px;
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  animation: line-spin-fade-loader 1.2s 0s infinite ease-in-out; }

.line-spin-fade-loader > div {
  background-color: #fff;
  width: 4px;
  height: 35px;
  border-radius: 2px;
  margin: 2px;
  animation-fill-mode: both;
  position: absolute;
  width: 5px;
  height: 15px; }

/**
 * Misc
 */

@keyframes triangle-skew-spin {
  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% {
    transform: perspective(100px) rotateX(0) rotateY(0); } }

.triangle-skew-spin > div {
  animation-fill-mode: both;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid #fff;
  animation: triangle-skew-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite; }

@keyframes square-spin {
  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0); }
  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg); }
  100% {
    transform: perspective(100px) rotateX(0) rotateY(0); } }

.square-spin > div {
  animation-fill-mode: both;
  width: 50px;
  height: 50px;
  background: #fff;
  border: 1px solid red;
  animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite; }

@keyframes rotate_pacman_half_up {
  0% {
    transform: rotate(270deg); }
  50% {
    transform: rotate(360deg); }
  100% {
    transform: rotate(270deg); } }

@keyframes rotate_pacman_half_down {
  0% {
    transform: rotate(90deg); }
  50% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(90deg); } }

@keyframes pacman-balls {
  75% {
    opacity: 0.7; }
  100% {
    transform: translate(-100px, -6.25px); } }

.pacman {
  position: relative; }

.pacman > div:nth-child(2) {
  animation: pacman-balls 1s -0.99s infinite linear; }

.pacman > div:nth-child(3) {
  animation: pacman-balls 1s -0.66s infinite linear; }

.pacman > div:nth-child(4) {
  animation: pacman-balls 1s -0.33s infinite linear; }

.pacman > div:nth-child(5) {
  animation: pacman-balls 1s 0s infinite linear; }

.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #fff;
  border-left: 25px solid #fff;
  border-bottom: 25px solid #fff;
  border-radius: 25px;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
  position: relative;
  left: -30px; }

.pacman > div:nth-child(2) {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #fff;
  border-left: 25px solid #fff;
  border-bottom: 25px solid #fff;
  border-radius: 25px;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -50px;
  position: relative;
  left: -30px; }

.pacman > div:nth-child(3),
.pacman > div:nth-child(4),
.pacman > div:nth-child(5),
.pacman > div:nth-child(6) {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 10px;
  height: 10px;
  position: absolute;
  -ms-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: 25px;
  left: 70px; }

@keyframes cube-transition {
  25% {
    transform: translateX(50px) scale(0.5) rotate(-90deg); }
  50% {
    transform: translate(50px, 50px) rotate(-180deg); }
  75% {
    transform: translateY(50px) scale(0.5) rotate(-270deg); }
  100% {
    transform: rotate(-360deg); } }

.cube-transition {
  position: relative;
  -ms-transform: translate(-25px, -25px);
  transform: translate(-25px, -25px); }

.cube-transition > div {
  animation-fill-mode: both;
  width: 10px;
  height: 10px;
  position: absolute;
  top: -5px;
  left: -5px;
  background-color: #fff;
  animation: cube-transition 1.6s 0s infinite ease-in-out; }

.cube-transition > div:last-child {
  animation-delay: -0.8s; }

@keyframes spin-rotate {
  0% {
    transform: rotate(0deg); }
  50% {
    transform: rotate(180deg); }
  100% {
    transform: rotate(360deg); } }

.semi-circle-spin {
  position: relative;
  width: 35px;
  height: 35px;
  overflow: hidden; }

.semi-circle-spin > div {
  position: absolute;
  border-width: 0px;
  border-radius: 100%;
  animation: spin-rotate 0.6s 0s infinite linear;
  background-image: linear-gradient(transparent 0%, transparent 70%, #fff 30%, #fff 100%);
  width: 100%;
  height: 100%; }

@keyframes bar-progress {
  0% {
    transform: scaleY(20%);
    opacity: 1; }
  25% {
    transform: translateX(6%) scaleY(10%);
    opacity: 0.7; }
  50% {
    transform: translateX(20%) scaleY(20%);
    opacity: 1; }
  75% {
    transform: translateX(6%) scaleY(10%);
    opacity: 0.7; }
  100% {
    transform: scaleY(20%);
    opacity: 1; } }

.bar-progress {
  width: 30%;
  height: 12px; }

.bar-progress > div {
  position: relative;
  width: 20%;
  height: 12px;
  border-radius: 10px;
  background-color: #fff;
  animation: bar-progress 3s cubic-bezier(0.57, 0.1, 0.44, 0.93) infinite;
  opacity: 1; }

@keyframes bar-swing {
  0% {
    left: 0; }
  50% {
    left: 70%; }
  100% {
    left: 0; } }

.bar-swing {
  width: 30%;
  height: 8px; }

.bar-swing > div {
  position: relative;
  width: 30%;
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
  animation: bar-swing 1.5s infinite; }

@keyframes bar-swing-container {
  0% {
    left: 0;
    transform: translateX(0); }
  50% {
    left: 70%;
    transform: translateX(-4px); }
  100% {
    left: 0;
    transform: translateX(0); } }

.bar-swing-container {
  width: 20%;
  height: 8px;
  position: relative; }

.bar-swing-container div:nth-child(1) {
  position: absolute;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 12px;
  border-radius: 10px; }

.bar-swing-container div:nth-child(2) {
  position: absolute;
  width: 30%;
  height: 8px;
  border-radius: 10px;
  background-color: #fff;
  animation: bar-swing-container 2s cubic-bezier(0.91, 0.35, 0.12, 0.6) infinite;
  margin: 2px 2px 0; }
`,""])},jz2t:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.openUnsavedChangesPopup-module-popup-content-ov3b {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 25px;
  font-size: 14px; }
  .openUnsavedChangesPopup-module-popup-content-ov3b *,
  .openUnsavedChangesPopup-module-popup-content-ov3b *::before,
  .openUnsavedChangesPopup-module-popup-content-ov3b *::after {
    box-sizing: border-box;
    text-decoration-skip-ink: none; }
`,""]),o.locals={"popup-content":"openUnsavedChangesPopup-module-popup-content-ov3b"}},k79F:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-circle {
  width: 22px;
  height: 22px;
  position: relative; }

.sk-circle > div {
  background-color: initial;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; }

.sk-circle > div::before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 20%;
  height: 20%;
  background-color: currentColor;
  border-radius: 100%;
  animation: sk-bouncedelay 1.2s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  animation-fill-mode: both; }

.sk-circle > div:nth-child(2) {
  -ms-transform: rotate(30deg);
      transform: rotate(30deg); }

.sk-circle > div:nth-child(3) {
  -ms-transform: rotate(60deg);
      transform: rotate(60deg); }

.sk-circle > div:nth-child(4) {
  -ms-transform: rotate(90deg);
      transform: rotate(90deg); }

.sk-circle > div:nth-child(5) {
  -ms-transform: rotate(120deg);
      transform: rotate(120deg); }

.sk-circle > div:nth-child(6) {
  -ms-transform: rotate(150deg);
      transform: rotate(150deg); }

.sk-circle > div:nth-child(7) {
  -ms-transform: rotate(180deg);
      transform: rotate(180deg); }

.sk-circle > div:nth-child(8) {
  -ms-transform: rotate(210deg);
      transform: rotate(210deg); }

.sk-circle > div:nth-child(9) {
  -ms-transform: rotate(240deg);
      transform: rotate(240deg); }

.sk-circle > div:nth-child(10) {
  -ms-transform: rotate(270deg);
      transform: rotate(270deg); }

.sk-circle > div:nth-child(11) {
  -ms-transform: rotate(300deg);
      transform: rotate(300deg); }

.sk-circle > div:nth-child(12) {
  -ms-transform: rotate(330deg);
      transform: rotate(330deg); }

.sk-circle > div:nth-child(2)::before {
  animation-delay: -1.1s; }

.sk-circle > div:nth-child(3)::before {
  animation-delay: -1.0s; }

.sk-circle > div:nth-child(4)::before {
  animation-delay: -0.9s; }

.sk-circle > div:nth-child(5)::before {
  animation-delay: -0.8s; }

.sk-circle > div:nth-child(6)::before {
  animation-delay: -0.7s; }

.sk-circle > div:nth-child(7)::before {
  animation-delay: -0.6s; }

.sk-circle > div:nth-child(8)::before {
  animation-delay: -0.5s; }

.sk-circle > div:nth-child(9)::before {
  animation-delay: -0.4s; }

.sk-circle > div:nth-child(10)::before {
  animation-delay: -0.3s; }

.sk-circle > div:nth-child(11)::before {
  animation-delay: -0.2s; }

.sk-circle > div:nth-child(12)::before {
  animation-delay: -0.1s; }

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0); }
  40% {
    transform: scale(1); } }
`,""])},k95Q:function(a,o,t){"use strict";o.__esModule=!0,o.createProtoAccessControl=f,o.resultIsAllowed=b,o.resetLoggedProperties=O;function e(p){if(p&&p.__esModule)return p;var m={};if(p!=null)for(var l in p)Object.prototype.hasOwnProperty.call(p,l)&&(m[l]=p[l]);return m.default=p,m}var r=t("+vYJ"),i=t("HB8c"),s=e(i),c=Object.create(null);function f(p){var m=Object.create(null);m.constructor=!1,m.__defineGetter__=!1,m.__defineSetter__=!1,m.__lookupGetter__=!1;var l=Object.create(null);return l.__proto__=!1,{properties:{whitelist:r.createNewLookupObject(l,p.allowedProtoProperties),defaultValue:p.allowProtoPropertiesByDefault},methods:{whitelist:r.createNewLookupObject(m,p.allowedProtoMethods),defaultValue:p.allowProtoMethodsByDefault}}}function b(p,m,l){return typeof p=="function"?h(m.methods,l):h(m.properties,l)}function h(p,m){return p.whitelist[m]!==void 0?p.whitelist[m]===!0:p.defaultValue!==void 0?p.defaultValue:(v(m),!1)}function v(p){c[p]!==!0&&(c[p]=!0,s.log("error",'Handlebars: Access has been denied to resolve the property "'+p+`" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`))}function O(){Object.keys(c).forEach(function(p){delete c[p]})}},kAJf:function(a,o,t){var e=t("rcuq");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},kHCg:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DashboardDomain-module-dashboard-domain-Ee3b {
  max-width: 100%;
  margin-block-start: 0;
  margin-block-end: 0;
  box-shadow: none; }
  .DashboardDomain-module-dashboard-domain-Ee3b .DashboardDomain-module-card-content-qf3b {
    padding-block-start: 30px;
    padding-block-end: 22px; }
`,""]),o.locals={"dashboard-domain":"DashboardDomain-module-dashboard-domain-Ee3b","card-content":"DashboardDomain-module-card-content-qf3b"}},kKBb:function(a,o,t){var e=t("Lg8R");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"kVc/":function(a,o,t){var e=t("GiZD");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},kwwM:function(a,o,t){(function(e,r){var i;/*! JSON v3.3.2 | https://bestiejs.github.io/json3 | Copyright 2012-2015, Kit Cambridge, Benjamin Tan | http://kit.mit-license.org */(function(){var s=t("PDX0"),c={function:!0,object:!0},f=c[typeof o]&&o&&!o.nodeType&&o,b=c[typeof window]&&window||this,h=f&&c[typeof e]&&e&&!e.nodeType&&typeof r=="object"&&r;h&&(h.global===h||h.window===h||h.self===h)&&(b=h);function v(u,n){u||(u=b.Object()),n||(n=b.Object());var x=u.Number||b.Number,y=u.String||b.String,j=u.Object||b.Object,I=u.Date||b.Date,C=u.SyntaxError||b.SyntaxError,S=u.TypeError||b.TypeError,T=u.Math||b.Math,R=u.JSON||b.JSON;typeof R=="object"&&R&&(n.stringify=R.stringify,n.parse=R.parse);var M=j.prototype,A=M.toString,W=M.hasOwnProperty,P;function L(nt,st){try{nt()}catch(ot){st&&st()}}var k=new I(-3509827334573292);L(function(){k=k.getUTCFullYear()==-109252&&k.getUTCMonth()===0&&k.getUTCDate()===1&&k.getUTCHours()==10&&k.getUTCMinutes()==37&&k.getUTCSeconds()==6&&k.getUTCMilliseconds()==708});function G(nt){if(G[nt]!=null)return G[nt];var st;if(nt=="bug-string-char-index")st="a"[0]!="a";else if(nt=="json")st=G("json-stringify")&&G("date-serialization")&&G("json-parse");else if(nt=="date-serialization"){if(st=G("json-stringify")&&k,st){var ot=n.stringify;L(function(){st=ot(new I(-864e13))=='"-271821-04-20T00:00:00.000Z"'&&ot(new I(864e13))=='"+275760-09-13T00:00:00.000Z"'&&ot(new I(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&ot(new I(-1))=='"1969-12-31T23:59:59.999Z"'})}}else{var pt,gt='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(nt=="json-stringify"){var ot=n.stringify,Lt=typeof ot=="function";Lt&&((pt=function(){return 1}).toJSON=pt,L(function(){Lt=ot(0)==="0"&&ot(new x)==="0"&&ot(new y)=='""'&&ot(A)===P&&ot(P)===P&&ot()===P&&ot(pt)==="1"&&ot([pt])=="[1]"&&ot([P])=="[null]"&&ot(null)=="null"&&ot([P,A,null])=="[null,null,null]"&&ot({a:[pt,!0,!1,null,`\0\b
\f\r	`]})==gt&&ot(null,pt)==="1"&&ot([1,2],null,1)==`[
 1,
 2
]`},function(){Lt=!1})),st=Lt}if(nt=="json-parse"){var it=n.parse,ht;typeof it=="function"&&L(function(){it("0")===0&&!it(!1)&&(pt=it(gt),ht=pt.a.length==5&&pt.a[0]===1,ht&&(L(function(){ht=!it('"	"')}),ht&&L(function(){ht=it("01")!==1}),ht&&L(function(){ht=it("1.")!==1})))},function(){ht=!1}),st=ht}}return G[nt]=!!st}if(G["bug-string-char-index"]=G["date-serialization"]=G.json=G["json-stringify"]=G["json-parse"]=null,!G("json")){var Y="[object Function]",J="[object Date]",X="[object Number]",at="[object String]",z="[object Array]",F="[object Boolean]",rt=G("bug-string-char-index"),ct=function(nt,st){var ot=0,pt,gt,Lt;(pt=function(){this.valueOf=0}).prototype.valueOf=0,gt=new pt;for(Lt in gt)W.call(gt,Lt)&&ot++;return pt=gt=null,ot?ct=function(it,ht){var H=A.call(it)==Y,N,U;for(N in it)!(H&&N=="prototype")&&W.call(it,N)&&!(U=N==="constructor")&&ht(N);(U||W.call(it,N="constructor"))&&ht(N)}:(gt=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],ct=function(it,ht){var H=A.call(it)==Y,N,U,q=!H&&typeof it.constructor!="function"&&c[typeof it.hasOwnProperty]&&it.hasOwnProperty||W;for(N in it)!(H&&N=="prototype")&&q.call(it,N)&&ht(N);for(U=gt.length;N=gt[--U];)q.call(it,N)&&ht(N)}),ct(nt,st)};if(!G("json-stringify")&&!G("date-serialization")){var dt={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},vt="000000",Ot=function(nt,st){return(vt+(st||0)).slice(-nt)},Mt=function(nt){var st,ot,pt,gt,Lt,it,ht,H,N;if(k)st=function(Z){ot=Z.getUTCFullYear(),pt=Z.getUTCMonth(),gt=Z.getUTCDate(),it=Z.getUTCHours(),ht=Z.getUTCMinutes(),H=Z.getUTCSeconds(),N=Z.getUTCMilliseconds()};else{var U=T.floor,q=[0,31,59,90,120,151,181,212,243,273,304,334],w=function(Z,mt){return q[mt]+365*(Z-1970)+U((Z-1969+(mt=+(mt>1)))/4)-U((Z-1901+mt)/100)+U((Z-1601+mt)/400)};st=function(Z){for(gt=U(Z/864e5),ot=U(gt/365.2425)+1970-1;w(ot+1,0)<=gt;ot++);for(pt=U((gt-w(ot,0))/30.42);w(ot,pt+1)<=gt;pt++);gt=1+gt-w(ot,pt),Lt=(Z%864e5+864e5)%864e5,it=U(Lt/36e5)%24,ht=U(Lt/6e4)%60,H=U(Lt/1e3)%60,N=Lt%1e3}}return Mt=function(Z){return Z>-1/0&&Z<1/0?(st(Z),Z=(ot<=0||ot>=1e4?(ot<0?"-":"+")+Ot(6,ot<0?-ot:ot):Ot(4,ot))+"-"+Ot(2,pt+1)+"-"+Ot(2,gt)+"T"+Ot(2,it)+":"+Ot(2,ht)+":"+Ot(2,H)+"."+Ot(3,N)+"Z",ot=pt=gt=it=ht=H=N=null):Z=null,Z},Mt(nt)};if(G("json-stringify")&&!G("date-serialization")){let nt=function(st){return Mt(this)};var Vt=nt,Rt=n.stringify;n.stringify=function(st,ot,pt){var gt=I.prototype.toJSON;I.prototype.toJSON=nt;var Lt=Rt(st,ot,pt);return I.prototype.toJSON=gt,Lt}}else{var Yt="\\u00",re=function(nt){var st=nt.charCodeAt(0),ot=dt[st];return ot||Yt+Ot(2,st.toString(16))},Xt=/[\x00-\x1f\x22\x5c]/g,pe=function(nt){return Xt.lastIndex=0,'"'+(Xt.test(nt)?nt.replace(Xt,re):nt)+'"'},de=function(nt,st,ot,pt,gt,Lt,it){var ht,H,N,U,q,w,Z,mt,Et;if(L(function(){ht=st[nt]}),typeof ht=="object"&&ht&&(ht.getUTCFullYear&&A.call(ht)==J&&ht.toJSON===I.prototype.toJSON?ht=Mt(ht):typeof ht.toJSON=="function"&&(ht=ht.toJSON(nt))),ot&&(ht=ot.call(st,nt,ht)),ht==P)return ht===P?ht:"null";switch(H=typeof ht,H=="object"&&(N=A.call(ht)),N||H){case"boolean":case F:return""+ht;case"number":case X:return ht>-1/0&&ht<1/0?""+ht:"null";case"string":case at:return pe(""+ht)}if(typeof ht=="object"){for(Z=it.length;Z--;)if(it[Z]===ht)throw S();if(it.push(ht),U=[],mt=Lt,Lt+=gt,N==z){for(w=0,Z=ht.length;w<Z;w++)q=de(w,ht,ot,pt,gt,Lt,it),U.push(q===P?"null":q);Et=U.length?gt?`[
`+Lt+U.join(`,
`+Lt)+`
`+mt+"]":"["+U.join(",")+"]":"[]"}else ct(pt||ht,function(It){var lt=de(It,ht,ot,pt,gt,Lt,it);lt!==P&&U.push(pe(It)+":"+(gt?" ":"")+lt)}),Et=U.length?gt?`{
`+Lt+U.join(`,
`+Lt)+`
`+mt+"}":"{"+U.join(",")+"}":"{}";return it.pop(),Et}};n.stringify=function(nt,st,ot){var pt,gt,Lt,it;if(c[typeof st]&&st){if(it=A.call(st),it==Y)gt=st;else if(it==z){Lt={};for(var ht=0,H=st.length,N;ht<H;)N=st[ht++],it=A.call(N),(it=="[object String]"||it=="[object Number]")&&(Lt[N]=1)}}if(ot)if(it=A.call(ot),it==X){if((ot-=ot%1)>0)for(ot>10&&(ot=10),pt="";pt.length<ot;)pt+=" "}else it==at&&(pt=ot.length<=10?ot:ot.slice(0,10));return de("",(N={},N[""]=nt,N),gt,Lt,pt,"",[])}}}if(!G("json-parse")){var se=y.fromCharCode,Qt={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:`
`,102:"\f",114:"\r"},St,Ut,zt=function(){throw St=Ut=null,C()},Jt=function(){for(var nt=Ut,st=nt.length,ot,pt,gt,Lt,it;St<st;)switch(it=nt.charCodeAt(St),it){case 9:case 10:case 13:case 32:St++;break;case 123:case 125:case 91:case 93:case 58:case 44:return ot=rt?nt.charAt(St):nt[St],St++,ot;case 34:for(ot="@",St++;St<st;)if(it=nt.charCodeAt(St),it<32)zt();else if(it==92)switch(it=nt.charCodeAt(++St),it){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:ot+=Qt[it],St++;break;case 117:for(pt=++St,gt=St+4;St<gt;St++)it=nt.charCodeAt(St),it>=48&&it<=57||it>=97&&it<=102||it>=65&&it<=70||zt();ot+=se("0x"+nt.slice(pt,St));break;default:zt()}else{if(it==34)break;for(it=nt.charCodeAt(St),pt=St;it>=32&&it!=92&&it!=34;)it=nt.charCodeAt(++St);ot+=nt.slice(pt,St)}if(nt.charCodeAt(St)==34)return St++,ot;zt();default:if(pt=St,it==45&&(Lt=!0,it=nt.charCodeAt(++St)),it>=48&&it<=57){for(it==48&&(it=nt.charCodeAt(St+1),it>=48&&it<=57)&&zt(),Lt=!1;St<st&&(it=nt.charCodeAt(St),it>=48&&it<=57);St++);if(nt.charCodeAt(St)==46){for(gt=++St;gt<st&&(it=nt.charCodeAt(gt),!(it<48||it>57));gt++);gt==St&&zt(),St=gt}if(it=nt.charCodeAt(St),it==101||it==69){for(it=nt.charCodeAt(++St),(it==43||it==45)&&St++,gt=St;gt<st&&(it=nt.charCodeAt(gt),!(it<48||it>57));gt++);gt==St&&zt(),St=gt}return+nt.slice(pt,St)}Lt&&zt();var ht=nt.slice(St,St+4);if(ht=="true")return St+=4,!0;if(ht=="fals"&&nt.charCodeAt(St+4)==101)return St+=5,!1;if(ht=="null")return St+=4,null;zt()}return"$"},ge=function(nt){var st,ot;if(nt=="$"&&zt(),typeof nt=="string"){if((rt?nt.charAt(0):nt[0])=="@")return nt.slice(1);if(nt=="["){for(st=[];nt=Jt(),nt!="]";)ot?nt==","?(nt=Jt(),nt=="]"&&zt()):zt():ot=!0,nt==","&&zt(),st.push(ge(nt));return st}else if(nt=="{"){for(st={};nt=Jt(),nt!="}";)ot?nt==","?(nt=Jt(),nt=="}"&&zt()):zt():ot=!0,(nt==","||typeof nt!="string"||(rt?nt.charAt(0):nt[0])!="@"||Jt()!=":")&&zt(),st[nt.slice(1)]=ge(Jt());return st}zt()}return nt},fe=function(nt,st,ot){var pt=ce(nt,st,ot);pt===P?delete nt[st]:nt[st]=pt},ce=function(nt,st,ot){var pt=nt[st],gt;if(typeof pt=="object"&&pt)if(A.call(pt)==z)for(gt=pt.length;gt--;)fe(A,ct,pt,gt,ot);else ct(pt,function(Lt){fe(pt,Lt,ot)});return ot.call(nt,st,pt)};n.parse=function(nt,st){var ot,pt;return St=0,Ut=""+nt,ot=ge(Jt()),Jt()!="$"&&zt(),St=Ut=null,st&&A.call(st)==Y?ce((pt={},pt[""]=ot,pt),"",st):ot}}}return n.runInContext=v,n}if(f&&!s)v(b,f);else{var O=b.JSON,p=b.JSON3,m=!1,l=v(b,b.JSON3={noConflict:function(){return m||(m=!0,b.JSON=O,b.JSON3=p,O=p=null),l}});b.JSON={parse:l.parse,stringify:l.stringify}}s&&(i=function(){return l}.call(o,t,o,e),i!==void 0&&(e.exports=i))}).call(this)}).call(this,t("YuTi")(a),t("yLpj"))},"l+PW":function(a,o,t){var e=t("OXM4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"l/8K":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CardFooter-mobile-container-2t3b {
  display: flex;
  flex-direction: column; }
  .CardFooter-mobile-container-2t3b .CardFooter-mobile-labels-2S3b {
    padding-top: 8px; }
`,""]),o.locals={"mobile-container":"CardFooter-mobile-container-2t3b","mobile-labels":"CardFooter-mobile-labels-2S3b"}},l09l:function(a,o,t){"use strict";o.__esModule=!0,o.SourceLocation=c,o.id=f,o.stripFlags=b,o.stripComment=h,o.preparePath=v,o.prepareMustache=O,o.prepareRawBlock=p,o.prepareBlock=m,o.prepareProgram=l,o.preparePartialBlock=u;function e(n){return n&&n.__esModule?n:{default:n}}var r=t("tpBh"),i=e(r);function s(n,x){if(x=x.path?x.path.original:x,n.path.original!==x){var y={loc:n.path.loc};throw new i.default(n.path.original+" doesn't match "+x,y)}}function c(n,x){this.source=n,this.start={line:x.first_line,column:x.first_column},this.end={line:x.last_line,column:x.last_column}}function f(n){return/^\[.*\]$/.test(n)?n.substring(1,n.length-1):n}function b(n,x){return{open:n.charAt(2)==="~",close:x.charAt(x.length-3)==="~"}}function h(n){return n.replace(/^\{\{~?!-?-?/,"").replace(/-?-?~?\}\}$/,"")}function v(n,x,y){y=this.locInfo(y);for(var j=n?"@":"",I=[],C=0,S=0,T=x.length;S<T;S++){var R=x[S].part,M=x[S].original!==R;if(j+=(x[S].separator||"")+R,!M&&(R===".."||R==="."||R==="this")){if(I.length>0)throw new i.default("Invalid path: "+j,{loc:y});R===".."&&C++}else I.push(R)}return{type:"PathExpression",data:n,depth:C,parts:I,original:j,loc:y}}function O(n,x,y,j,I,C){var S=j.charAt(3)||j.charAt(2),T=S!=="{"&&S!=="&",R=/\*/.test(j);return{type:R?"Decorator":"MustacheStatement",path:n,params:x,hash:y,escaped:T,strip:I,loc:this.locInfo(C)}}function p(n,x,y,j){s(n,y),j=this.locInfo(j);var I={type:"Program",body:x,strip:{},loc:j};return{type:"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:I,openStrip:{},inverseStrip:{},closeStrip:{},loc:j}}function m(n,x,y,j,I,C){j&&j.path&&s(n,j);var S=/\*/.test(n.open);x.blockParams=n.blockParams;var T=void 0,R=void 0;if(y){if(S)throw new i.default("Unexpected inverse block on decorator",y);y.chain&&(y.program.body[0].closeStrip=j.strip),R=y.strip,T=y.program}return I&&(I=T,T=x,x=I),{type:S?"DecoratorBlock":"BlockStatement",path:n.path,params:n.params,hash:n.hash,program:x,inverse:T,openStrip:n.strip,inverseStrip:R,closeStrip:j&&j.strip,loc:this.locInfo(C)}}function l(n,x){if(!x&&n.length){var y=n[0].loc,j=n[n.length-1].loc;y&&j&&(x={source:y.source,start:{line:y.start.line,column:y.start.column},end:{line:j.end.line,column:j.end.column}})}return{type:"Program",body:n,strip:{},loc:x}}function u(n,x,y,j){return s(n,y),{type:"PartialBlockStatement",name:n.path,params:n.params,hash:n.hash,program:x,openStrip:n.strip,closeStrip:y&&y.strip,loc:this.locInfo(j)}}},l2Rb:function(a,o,t){var e=t("6463");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},l6DM:function(a,o,t){var e=t("b+XZ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},l6Lj:function(a,o,t){"use strict";function e(){this._listeners={}}e.prototype.addEventListener=function(r,i){r in this._listeners||(this._listeners[r]=[]);var s=this._listeners[r];s.indexOf(i)===-1&&(s=s.concat([i])),this._listeners[r]=s},e.prototype.removeEventListener=function(r,i){var s=this._listeners[r];if(!!s){var c=s.indexOf(i);if(c!==-1){s.length>1?this._listeners[r]=s.slice(0,c).concat(s.slice(c+1)):delete this._listeners[r];return}}},e.prototype.dispatchEvent=function(){var r=arguments[0],i=r.type,s=arguments.length===1?[r]:Array.apply(null,arguments);if(this["on"+i]&&this["on"+i].apply(this,s),i in this._listeners)for(var c=this._listeners[i],f=0;f<c.length;f++)c[f].apply(this,s)},a.exports=e},lFKM:function(a,o,t){var e=t("Kz5y"),r=e.isFinite;function i(s){return typeof s=="number"&&r(s)}a.exports=i},lZio:function(a,o,t){var e=t("g8u4");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},lkrH:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ConnectingCustomDomain-page-description-3u3b {
  padding-block-start: 0; }

.ConnectingCustomDomain-card-cancel-button-133b {
  margin-inline-end: 16px;
  align-self: auto;
  color: #616c79;
  font-size: 14px;
  font-family: Source Sans Pro; }

.ConnectingCustomDomain-cancel-button-3r3b {
  margin-inline-end: 8px; }

.ConnectingCustomDomain-footer-ge3b {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%; }

.ConnectingCustomDomain-next-button-vw3b.ConnectingCustomDomain-next-button-vw3b {
  height: 25px;
  padding-inline-end: 25px;
  padding-inline-start: 25px;
  font-weight: 500; }

.ConnectingCustomDomain-scroll-line-1r3b {
  height: 1px; }
`,""]),o.locals={"page-description":"ConnectingCustomDomain-page-description-3u3b","card-cancel-button":"ConnectingCustomDomain-card-cancel-button-133b","cancel-button":"ConnectingCustomDomain-cancel-button-3r3b",footer:"ConnectingCustomDomain-footer-ge3b","next-button":"ConnectingCustomDomain-next-button-vw3b","scroll-line":"ConnectingCustomDomain-scroll-line-1r3b"}},lpBp:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("cDcd")),i=e(t("hSE2")),s=e(t("VSAF")),c=e(t("FJ83")),f=e(t("l+PW")),b=e(t("rf6O")),h=e(t("hzps")),v=function(m){return r.default.createElement(s.default,{className:(0,i.default)(f.default.main,m.className),column:!0,align:"center"},r.default.createElement(h.default,{className:f.default.title,html:m.title}),r.default.createElement(h.default,{className:f.default["sub-title"],text:m.subTitle,noPaddingBottom:!0,noPaddingTop:!0}),m.featuresList&&r.default.createElement(s.default,{className:f.default.featuresWrapper,column:!0,align:"flex-start"},m.featuresList.map(function(l){return r.default.createElement(h.default,{className:f.default.feature,text:l,key:l})})),m.children,r.default.createElement(c.default,{className:f.default.button,text:m.buttonText,onClick:m.onClick,"data-auto":"feature-lock-button"}))};v.propTypes={className:b.default.string,title:b.default.string.isRequired,subTitle:b.default.string,buttonText:b.default.string.isRequired,featuresList:b.default.array,onClick:b.default.func.isRequired};var O=v;o.default=O},luHh:function(a,o,t){var e=t("S/oH");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},lutX:function(a,o,t){"use strict";var e=t("k4gB"),r=t("cpGi"),i=t("wA2W"),s=t.n(i),c=t("5cYt"),f=t.n(c),b=t("cDcd"),h=t.n(b),v=t("rf6O"),O=t.n(v),p=t("EAKQ"),m=t("nKUr"),l=t.n(m);function u({title:n,toolTip:x,tooltipId:y,helpCenterArticleId:j}){const I=()=>{Object(p.a)(j)};return Object(m.jsxs)("div",{className:f.a["card-title"],children:[Object(m.jsx)("div",{children:n}),Object(m.jsx)("div",{className:f.a["info-icon"],"data-for":`card-${y}`,"data-tip":!0,children:Object(m.jsx)(s.a,{size:15})}),Object(m.jsxs)(r.default,{multiline:!0,clickable:!0,id:`card-${y}`,className:f.a.tooltip,effect:"solid",place:"right",delayHide:2e3,children:[Object(e.k)(x)," ",Object(m.jsx)("a",{onClick:I,className:f.a.link,children:Object(e.m)("ui.ed.dashboard.customDomain.tooltip.readMore")})]})]})}u.propTypes={helpCenterArticleId:v.string.isRequired,tooltipId:v.string.isRequired,title:v.string.isRequired,toolTip:v.string.isRequired},o.a=h.a.memo(u)},m6zX:function(a,o,t){"use strict";t.d(o,"a",function(){return Y}),t.d(o,"q",function(){return J}),t.d(o,"j",function(){return X}),t.d(o,"n",function(){return z}),t.d(o,"h",function(){return rt}),t.d(o,"g",function(){return Ot}),t.d(o,"b",function(){return Rt}),t.d(o,"t",function(){return re}),t.d(o,"v",function(){return pe}),t.d(o,"d",function(){return se}),t.d(o,"i",function(){return St}),t.d(o,"u",function(){return zt}),t.d(o,"c",function(){return ge}),t.d(o,"e",function(){return ce}),t.d(o,"r",function(){return nt}),t.d(o,"l",function(){return ot}),t.d(o,"k",function(){return gt}),t.d(o,"f",function(){return it}),t.d(o,"p",function(){return H}),t.d(o,"w",function(){return U}),t.d(o,"s",function(){return w}),t.d(o,"o",function(){return mt}),t.d(o,"m",function(){return It});var e=t("yXPU"),r=t.n(e),i=t("k4gB"),s=t("cDcd"),c=t("c6lS"),f=t.n(c),b=t("RWaG"),h=t.n(b),v=t("hzps"),O=t.n(v),p=t("9Pyt"),m=t.n(p),l=t("+QRC"),u=t.n(l),n=t("KFoM"),x=t("rJga"),y=t("9P9J"),j=t("ALhs"),I=t.n(j),C=t("FfLZ"),S=t("LyWx"),T=t("nKUr");const R=({viewAsClientUrl:et,status:kt,referral:Bt})=>{const[At,jt]=Object(s.useState)(!1),wt=Object(s.useRef)();return Object(s.useEffect)(()=>()=>{clearTimeout(wt.current)},[]),Object(T.jsxs)("div",{className:f.a.container,children:[Object(T.jsx)(O.a,{text:Object(i.m)("ui.ed.dashboard.clientManagement.viewAsClientPopup.text"),flex:!1,noPadding:!0}),Object(T.jsxs)("div",{className:f.a["textbox-with-button"],"data-auto":"view-as-client-input-and-copy-button",children:[Object(T.jsx)(I.a,{className:f.a.textbox,layout:"full",inputClassName:f.a["textbox-input"],value:et,readOnly:!0}),Object(T.jsxs)(n.a,{children:[Object(T.jsx)(x.a,{children:({ref:Zt})=>Object(T.jsx)("div",{ref:Zt,children:Object(T.jsx)(m.a,{className:f.a["copy-button"],text:Object(i.m)("ui.ed.dashboard.clientManagement.viewAsClientPopup.copy"),onClick:()=>{u()(et),jt(!0),wt.current=setTimeout(()=>{jt(!1)},3e3),C.a("d1-client-mgmt-view-as-client",{clientStatus:kt,referral:Bt})},primary:!1})})}),At&&Object(T.jsx)(y.a,{placement:"left",children:({ref:Zt,style:Oe,placement:Se})=>Object(T.jsx)("div",{ref:Zt,style:Oe,"data-placement":Se,children:Object(T.jsx)(h.a,{className:f.a["copy-toast"],children:Object(T.jsx)(O.a,{className:f.a.text,text:Object(i.m)("ui.ed.dashboard.clientManagement.viewAsClientPopup.copiedToClipboard")})})})})]})]})]})},{string:M,oneOf:A}=i.b;R.propTypes={viewAsClientUrl:M.isRequired,status:A(Object.values(S.i)).isRequired,referral:M};var W=R,P=t("9Mi+"),L=t("9iID"),k=t("2i9H");const G="view_as_client_popup_key",Y="d1-client-mgmt";function J({props:et}){Object(k.f)(k.a.LIGHT_HEADER,{key:G,content:Object(T.jsx)(W,Object.assign({},et)),width:"552px",height:"225px",maxHeight:"100vh",zIndex:103,title:Object(i.m)("ui.ed.dashboard.clientManagement.viewAsClientPopup.title"),contentClassName:f.a["view-as-client-popup"],contentInnerClassName:f.a["view-as-client-popup"],closeIconClassName:f.a["view-as-client-popup-close-icon"],closeOnClickOutside:!0})}function X(et){return at.apply(this,arguments)}function at(){return at=r()(function*({page:et,freeTextSearch:kt}){const Bt=L.a.get("dashboard.clientManagement.clientList.numberOfClientsInPage"),At=kt?`&freeTextSearch=${kt}`:"";return Object(P.getFromServer)({url:`/dashboard/permissions/productCustomers?page=${et}&itemsPerPage=${Bt}${At}`})}),at.apply(this,arguments)}function z(et){return F.apply(this,arguments)}function F(){return F=r()(function*({siteAlias:et,page:kt}){const Bt=L.a.get("dashboard.clientManagement.clientList.numberOfClientsInPage");return Object(P.getFromServer)({url:`/overview/permissions/siteCustomers?page=${kt}&itemsPerPage=${Bt}&siteAlias=${et}`})}),F.apply(this,arguments)}function rt(){return ct.apply(this,arguments)}function ct(){return ct=r()(function*(){return Object(P.getFromServer)({url:"/dashboard/permissions/customersCount"})}),ct.apply(this,arguments)}function dt(et){return vt.apply(this,arguments)}function vt(){return vt=r()(function*(et){return Object(P.getFromServer)({url:`/overview/permissions/${et}/customersCount`})}),vt.apply(this,arguments)}function Ot(et){return Mt.apply(this,arguments)}function Mt(){return Mt=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/permissions/v2/customers/${et}`})}),Mt.apply(this,arguments)}function Rt(et){return Yt.apply(this,arguments)}function Yt(){return Yt=r()(function*({clientData:et}){return Object(P.postToServer)({url:"/dashboard/permissions/v2/customers",data:et})}),Yt.apply(this,arguments)}function re(et){return Xt.apply(this,arguments)}function Xt(){return Xt=r()(function*({clientUuid:et,clientData:kt}){return Object(P.putToServer)({url:`/dashboard/permissions/v2/customers/${et}`,data:kt})}),Xt.apply(this,arguments)}function pe(et){return de.apply(this,arguments)}function de(){return de=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/permissions/customers/${et}/status`})}),de.apply(this,arguments)}function se(et){return Qt.apply(this,arguments)}function Qt(){return Qt=r()(function*({clientUuid:et}){return Object(P.deleteToServer)({url:`/dashboard/permissions/v2/customers/${et}`})}),Qt.apply(this,arguments)}function St(et){return Ut.apply(this,arguments)}function Ut(){return Ut=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/permissions/sitesByCustomer/${et}`})}),Ut.apply(this,arguments)}function zt(et){return Jt.apply(this,arguments)}function Jt(){return Jt=r()(function*({accountSitePermissionId:et,clientId:kt,siteId:Bt,permissions:At,statsEmailFrequency:jt}){return Object(P.putToServer)({url:`/dashboard/permissions/v2/accountSitePermissions/${et}`,data:{customer:parseInt(kt,10),site:parseInt(Bt,10),permissions:At,statsEmailFrequency:jt}})}),Jt.apply(this,arguments)}function ge(et){return fe.apply(this,arguments)}function fe(){return fe=r()(function*({clientId:et,siteId:kt}){return Object(P.postToServer)({url:"/dashboard/permissions/v2/accountSitePermissions",data:{customer:parseInt(et,10),site:parseInt(kt,10),permissions:[]}})}),fe.apply(this,arguments)}function ce(et){return Vt.apply(this,arguments)}function Vt(){return Vt=r()(function*({accountSitePermissionId:et}){return Object(P.deleteToServer)({url:`/dashboard/permissions/accountSitePermissions/${et}`})}),Vt.apply(this,arguments)}function nt(et){return st.apply(this,arguments)}function st(){return st=r()(function*({clientUuid:et}){return Object(P.postToServer)({url:`/dashboard/resellerssettings/sendWelcomeEmail/${et}`})}),st.apply(this,arguments)}function ot(et){return pt.apply(this,arguments)}function pt(){return pt=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/resellerssettings/lastWelcomeEmailDate/${et}`})}),pt.apply(this,arguments)}function gt(){return Lt.apply(this,arguments)}function Lt(){return Lt=r()(function*(){return Object(P.getFromServer)({url:"/dashboard/resellerssettings/inviteEmail/getInviteEmailData"})}),Lt.apply(this,arguments)}function it(et){return ht.apply(this,arguments)}function ht(){return ht=r()(function*({clientUuid:et}){return Object(P.postToServer)({url:`/dashboard/permissions/welcomeLink/${et}`})}),ht.apply(this,arguments)}function H(et){return N.apply(this,arguments)}function N(){return N=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/permissions/welcomeLink/${et}`})}),N.apply(this,arguments)}function U(et){return q.apply(this,arguments)}function q(){return q=r()(function*({clientUuid:et}){return Object(P.postToServer)({url:`/dashboard/permissions/${et}/welcomeLinkCopied`})}),q.apply(this,arguments)}function w(et){return Z.apply(this,arguments)}function Z(){return Z=r()(function*({clientUuid:et,shouldSuspend:kt}){return Object(P.putToServer)({url:`/dashboard/permissions/${et}/suspend`,data:kt.toString()})}),Z.apply(this,arguments)}function mt(et){return Et.apply(this,arguments)}function Et(){return Et=r()(function*({clientUuid:et}){return Object(P.postToServer)({url:`/dashboard/permissions/${et}/viewAsLink`})}),Et.apply(this,arguments)}function It(et){return lt.apply(this,arguments)}function lt(){return lt=r()(function*({clientUuid:et}){return Object(P.getFromServer)({url:`/dashboard/resellerssettings/previewHost/${et}`})}),lt.apply(this,arguments)}},mIIl:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.sk-cube-grid {
  width: 27px;
  height: 27px; }

.sk-cube-grid > div {
  width: 33%;
  height: 33%;
  background-color: currentColor;
  float: left;
  animation: sk-scaleDelay 1.3s infinite ease-in-out; }

/*
 * Spinner positions
 * 1 2 3
 * 4 5 6
 * 7 8 9
 */
.sk-cube-grid > div:nth-child(1) {
  animation-delay: 0.2s; }

.sk-cube-grid > div:nth-child(2) {
  animation-delay: 0.3s; }

.sk-cube-grid > div:nth-child(3) {
  animation-delay: 0.4s; }

.sk-cube-grid > div:nth-child(4) {
  animation-delay: 0.1s; }

.sk-cube-grid > div:nth-child(5) {
  animation-delay: 0.2s; }

.sk-cube-grid > div:nth-child(6) {
  animation-delay: 0.3s; }

.sk-cube-grid > div:nth-child(7) {
  animation-delay: 0.0s; }

.sk-cube-grid > div:nth-child(8) {
  animation-delay: 0.1s; }

.sk-cube-grid > div:nth-child(9) {
  animation-delay: 0.2s; }

@keyframes sk-scaleDelay {
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1); }
  35% {
    transform: scale3D(0, 0, 1); } }
`,""])},"mIx/":function(a,o,t){"use strict";o.__esModule=!0,o.default=function(e){e.registerHelper("log",function(){for(var r=[void 0],i=arguments[arguments.length-1],s=0;s<arguments.length-1;s++)r.push(arguments[s]);var c=1;i.hash.level!=null?c=i.hash.level:i.data&&i.data.level!=null&&(c=i.data.level),r[0]=c,e.log.apply(e,r)})},a.exports=o.default},mXBh:function(a,o,t){"use strict";t.r(o),t.d(o,"init",function(){return eh}),t.d(o,"clean",function(){return nh});var e=t("yXPU"),r=t.n(e),i=t("KcJB"),s=t("cDcd"),c=t("k4gB"),f=t("2DvP"),b=t.n(f),h=t("55Ip"),v=t("ohCu"),O=t("sLIw"),p=t.n(O),m=t("oxKc"),l=t.n(m),u=t("XYu/"),n=t("nKUr"),y=()=>{const{account:d}=Object(s.useContext)(u.a);return Object(n.jsx)("div",{className:Object(c.h)(l.a.logo,"custom-css-top-bar-logo"),style:{backgroundImage:`url(${d.logo})`},"data-auto":"logo"})},j=t("jwSP"),I=t.n(j),C=t("LyWx"),S=t("9iID");function T({account:d}){return S.a.getFlag("pricing.allFeatureForNone.enabled",!1)?d.permissions[C.d.MANAGE_STAFF]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB||d.planType===C.a.NONE:d.permissions[C.d.MANAGE_STAFF]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB}function R({account:d}){return S.a.getFlag("pricing.allFeatureForNone.enabled",!1)?d.permissionsForAtLeastOneSite[C.y.EDIT_TEAM_SECTION]&&S.a.get("feature.flag.sections.team.sections",!1)||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB||d.planType===C.a.NONE:d.permissionsForAtLeastOneSite[C.y.EDIT_TEAM_SECTION]&&S.a.get("feature.flag.sections.team.sections",!1)||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB}function M({account:d}){return d.permissions[C.d.WIDGETS_BUILDER_TOOL]}function A({account:d}){return S.a.getFlag("pricing.allFeatureForNone.enabled",!1)?d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB||d.planType===C.a.NONE:d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB}function W({account:d}){return!d.featuresInPlan[C.r.WIDGET_BUILDER]}var P={shouldShowPermissions:T,shouldShowTeamSections:R,shouldShowWidgetBuilder:M,shouldLockTeam:A,shouldLockWidgetBuilder:W};function L({account:d}){return S.a.getFlag("pricing.allFeatureForNone.enabled",!1)?d.permissions[C.d.PARTNER_PORTAL]||d.permissions[C.d.EDITOR_CUSTOM_DOMAIN]||d.permissions[C.d.EDIT_BRANDING]||d.permissions[C.d.COMMUNICATION]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB||d.planType===C.a.NONE:d.permissions[C.d.PARTNER_PORTAL]||d.permissions[C.d.EDITOR_CUSTOM_DOMAIN]||d.permissions[C.d.EDIT_BRANDING]||d.permissions[C.d.COMMUNICATION]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB}function k({account:d}){return P.shouldShowTeamSections({account:d})||P.shouldShowWidgetBuilder({account:d})||P.shouldShowPermissions({account:d})}function G({account:d}){return S.a.getFlag("pricing.allFeatureForNone.enabled",!1)?d.permissions[C.d.MANAGE_CUSTOMERS]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB||d.planType===C.a.NONE:d.permissions[C.d.MANAGE_CUSTOMERS]||d.planType===C.a.BASIC||d.planType===C.a.TRILOBITE_SMB}function Y({account:d}){return d.permissionsForAtLeastOneSite[C.y.STATS_TAB]}function J({account:d}){return d.permissions[C.d.D_AWARE]}function X({account:d}){return d.permissions[C.d.SHOW_HELP]}var at={shouldShowWhiteLabel:L,shouldShowTeam:k,shouldShowPermissions:G,shouldShowStats:Y,shouldShowResources:J,shouldShowHelp:X},z=t("VYWo"),F=t.n(z),rt=t("wPJT"),ct=t.n(rt),dt=t("lOfb"),vt=t.n(dt),Ot=t("kVc/"),Mt=t.n(Ot),Rt=t("ZiIQ");const Yt=({icon:d,text:g,labelClassName:E,showNewLabel:D=!1})=>Object(n.jsxs)(n.Fragment,{children:[d&&Object(n.jsx)(Rt.a,{name:d.name,size:d.size,iconType:C.m.SVG}),g&&Object(n.jsx)("label",{className:Object(c.h)(E,Mt.a.text),children:g}),D&&Object(n.jsx)(vt.a,{className:Mt.a["new-label"],children:Object(c.m)("common.new")})]}),{string:re,shape:Xt,number:pe,bool:de}=c.b;Yt.propTypes={icon:Xt({name:re,size:pe}),text:re,labelClassName:re,showNewLabel:de};var se=Yt;const Qt={};var Ut=Object(c.g)(Qt);const zt=({text:d,icon:g,to:E,exact:D,external:B,externalNewTab:V,className:K,labelClassName:tt,onClick:_,showNewLabel:bt=!1})=>{const{setAnalyticsParams:Tt}=Object(s.useContext)(Ut),Dt=Object(s.useCallback)(()=>{Tt({referral:"topBar"}),_&&_()},[_,Tt]);return E?B?Object(n.jsx)("a",{className:Object(c.h)(K,ct.a.link),href:E,onClick:Dt,target:V?"_blank":"",children:Object(n.jsx)(se,{onClick:Dt,icon:g,text:d,labelClassName:tt,showNewLabel:bt})}):Object(n.jsx)(h.b,{className:Object(c.h)(K,ct.a.link),activeClassName:ct.a["link-selected"],to:E,exact:D,onClick:Dt,children:Object(n.jsx)(se,{icon:g,text:d,labelClassName:tt,showNewLabel:bt})}):Object(n.jsx)("div",{className:Object(c.h)(K,ct.a.link),onClick:_,children:Object(n.jsx)(se,{icon:g,text:d,labelClassName:tt,showNewLabel:bt})})},{string:Jt,bool:ge,shape:fe,number:ce,oneOfType:Vt,object:nt,func:st}=c.b;zt.propTypes={text:Jt,to:Vt([Jt,nt]),exact:ge,external:ge,externalNewTab:ge,className:Jt,labelClassName:Jt,icon:fe({name:Jt,size:ce}),onClick:st,showNewLabel:ge},zt.defaultProps={exact:!1,external:!1,externalNewTab:!1};var ot=zt;const pt=({text:d,icon:g,to:E,exact:D,external:B,externalNewTab:V,className:K,globalClass:tt,onClick:_,"data-auto":bt})=>Object(n.jsx)("div",{className:Object(c.h)(K,F.a.container,tt),"data-auto":bt,children:Object(n.jsx)(ot,{text:d,icon:g,to:E,exact:D,external:B,externalNewTab:V,labelClassName:F.a.label,onClick:_})}),{string:gt,bool:Lt,shape:it,number:ht,oneOfType:H,object:N,func:U}=c.b;pt.propTypes={className:gt,text:gt,to:H([gt,N]),exact:Lt,external:Lt,externalNewTab:Lt,icon:it({name:gt,size:ht}),globalClass:gt,onClick:U,"data-auto":gt},pt.defaultProps={exact:!1,external:!1,externalNewTab:!1,onClick:()=>{}};var q=pt,w=t("WArL"),mt=()=>Object(n.jsx)(q,{text:Object(c.m)("ui.ed.dashboard.topBar.sites"),to:w.g.SITES,exact:!0,globalClass:"custom-css-top-bar-sites","data-auto":"sites"}),Et=t("AQP1"),It=t.n(Et),lt=t("Ty5D"),et=t("TpSx"),kt=t.n(et),Bt=t("9dXR"),At=t.n(Bt);const jt=({className:d,labelClassName:g,text:E})=>Object(n.jsx)("div",{className:Object(c.h)(d,At.a.container),children:Object(n.jsx)("label",{className:g,children:E})}),{string:wt}=c.b;jt.propTypes={className:wt,labelClassName:wt,text:wt.isRequired};var Zt=jt;const Oe=({className:d,labelClassName:g,text:E,to:D,external:B})=>B?Object(n.jsx)("a",{className:kt.a.link,href:D,target:"_blank",children:Object(n.jsx)(Zt,{className:d,labelClassName:Object(c.h)(g,kt.a.text),text:E})}):Object(n.jsx)(Zt,{className:d,labelClassName:g,text:E}),{string:Se,bool:He,oneOfType:to,object:wn}=c.b;Oe.propTypes={className:Se,labelClassName:Se,text:Se.isRequired,to:to([Se,wn]),external:He},Oe.defaultProps={external:!1};var $e=Oe;const Dn=({text:d,className:g,labelContainerClassName:E,labelClassName:D,childrenClassName:B,locationPrefix:V,location:K,children:tt,to:_,external:bt,icon:Tt,"data-auto":Dt,globalClass:$t,showNewLabel:xe=!1})=>Object(n.jsxs)("div",{className:Object(c.h)(g,It.a.container,$t,{[It.a["sub-nav-is-active"]]:K.pathname.startsWith(V)}),"data-auto":Dt,children:[Tt&&Object(n.jsx)(Rt.a,{name:Tt.name,size:Tt.size,iconType:C.m.SVG,innerElementClassName:It.a.icon}),Object(n.jsx)($e,{className:Object(c.h)(E,It.a.text,{[It.a["new-label"]]:xe}),labelClassName:D,text:d,to:_,external:bt}),Object(n.jsx)("div",{className:Object(c.h)(B,It.a.children),children:tt})]}),{string:ze,object:Me,bool:Fn,shape:we,number:In,oneOfType:zn}=c.b;Dn.propTypes={className:ze,labelClassName:ze,labelContainerClassName:ze,childrenClassName:ze,text:ze.isRequired,locationPrefix:ze,location:Me.isRequired,to:zn([ze,Me]),external:Fn,icon:we({name:ze,size:In}),"data-auto":ze,globalClass:ze,showNewLabel:Fn};var qe=Object(lt.j)(Dn),xn=t("i09R"),Un=t.n(xn);const nn=({text:d,to:g,external:E,externalNewTab:D,children:B,"data-auto":V,globalClass:K,onClick:tt,showNewLabel:_=!1})=>Object(n.jsxs)("div",{className:Object(c.h)(Un.a.container,K),"data-auto":V,children:[Object(n.jsx)(ot,{text:d,to:g,external:E,externalNewTab:D,className:Un.a.link,labelClassName:Un.a.label,onClick:tt,showNewLabel:_}),B]}),{string:Wt,bool:Ee,oneOfType:ke,object:qt,func:Fe}=c.b;nn.propTypes={text:Wt.isRequired,to:ke([Wt,qt]),external:Ee,externalNewTab:Ee,"data-auto":Wt,globalClass:Wt,onClick:Fe,showNewLabel:Ee};var _t=nn,on=t("8OQS"),_e=t.n(on),On=t("X59v"),mn=t.n(On),kn=t("rf2p");const yn=["featureId","align","data-auto"],Ke=d=>{let{featureId:g,align:E,"data-auto":D}=d,B=_e()(d,yn);return Object(n.jsx)(u.a.Consumer,{children:({account:V,blockUI:K,unblockUI:tt})=>Object(n.jsx)("div",{className:mn.a.container,"data-auto":D,children:Object(n.jsx)(kn.a,Object.assign({data:{hoveredOn:g,align:E},isStaffMember:V.isStaffMember,account:V,purchaseOptions:{accountId:V.id},blockUI:K,unblockUI:tt},B))})})},{string:an}=c.b;Ke.propTypes={featureId:an.isRequired,align:an,"data-auto":an},Ke.defaultProps={align:"center"};var Ie=Ke,te=t("1ONn"),Re=t("tpNr"),Nt=t("FfLZ");function Ue(d){S.a.getFlag("ms.branding.client.enable",!1)&&Object(Nt.a)(w.c.onCustomBrandingClicked,{referral:d})}const Ct=()=>{const d=S.a.getFlag("dashboard.customEmailDomain.new.enabled",!1),g=S.a.getFlag("custom.domain.new.indication.enabled",!1),E=S.a.getFlag("dashboard.domain.new.enabled",!1);return Object(n.jsx)(u.a.Consumer,{children:({account:D})=>Object(n.jsx)(qe,{text:Object(c.m)("ui.ed.dashboard.topBar.whiteLabel"),locationPrefix:w.g.WHITE_LABEL,"data-auto":"white-label",globalClass:"custom-css-top-bar-white-label",showNewLabel:(Object(Re.g)({account:D})||E)&&(d||g),children:ut({account:D})})})};function ut({account:d}){const g=S.a.getFlag("dashboard.customEmailDomain.new.enabled",!1),E=S.a.getFlag("custom.domain.new.indication.enabled",!1);return[...Object(Re.b)({account:d})?[Object(n.jsx)(Ie,{featureId:te.a.WHITE_LABEL,"data-auto":"white-label-lock"},"white-label-lock")]:[],...Object(Re.f)({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.customDomain"),to:w.g.CUSTOM_DOMAIN,"data-auto":"custom-domain",globalClass:"custom-css-top-bar-custom-domain",showNewLabel:E},"custom-domain")]:[],...Object(Re.g)({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.customEmailDomain"),to:w.g.CUSTOM_EMAIL_DOMAIN,"data-auto":"custom-email-domain",globalClass:"custom-css-top-bar-custom-email-domain",showNewLabel:g},"custom-email-domain")]:[],...Object(Re.e)({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.customBranding"),to:w.g.CUSTOM_BRANDING,"data-auto":"custom-branding",globalClass:"custom-css-top-bar-custom-branding",onClick:()=>Ue("topBar")},"custom-branding")]:[],...Object(Re.d)({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.communications"),to:w.g.COMMUNICATIONS,"data-auto":"communications",globalClass:"custom-css-top-bar-communications"},"communications")]:[],...Object(Re.c)({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.apiAccess"),to:w.g.API_ACCESS,"data-auto":"api-access",globalClass:"custom-css-top-bar-api-access",children:!S.a.getFlag("dashboard.api.access.new.enabled",!1)&&Object(Re.a)({account:d})&&Object(n.jsx)(Ie,{featureId:te.a.API,align:"right","data-auto":"api-access-lock",showContactSupport:!d.isApiAvailableForAgency,contactSupportDescription:Object(c.m)("ui.ed.ContactSupportLock.lockDescription",{type:Object(c.m)("ui.ed.lock.api.access"),plan:Object(c.m)("ui.ed.ContactSupportLock.customPlan")}),contactSupportButtonLink:S.a.get("common.upgrade.account.url.for.api")})},"api-access")]:[]]}var Ft=Ct;const Ht=()=>Object(n.jsx)(u.a.Consumer,{children:({account:d})=>Object(n.jsx)(qe,{text:Object(c.m)("ui.ed.dashboard.topBar.team"),locationPrefix:w.g.TEAM,"data-auto":"team",globalClass:"custom-css-top-bar-team",children:ne({account:d})})});function ne({account:d}){return[...A({account:d})?[Object(n.jsx)(Ie,{featureId:te.a.TEAM_SECTIONS,"data-auto":"team-lock"},"team-lock")]:[],...T({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.teamPermissions"),to:w.g.TEAM_PERMISSIONS,"data-auto":"team-permissions",globalClass:"custom-css-top-bar-team-permissions"},"permissions")]:[],Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.teamTemplates"),to:w.g.TEAM_TEMPLATES,"data-auto":"team-templates",globalClass:"custom-css-top-bar-team-templates"},"team-templates"),...R({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.teamSections"),to:w.g.TEAM_SECTIONS,"data-auto":"team-sections",globalClass:"custom-css-top-bar-team-sections"},"team-sections")]:[],...M({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.widgetBuilder"),to:w.g.WIDGET_BUILDER,external:!0,"data-auto":"widget-builder",globalClass:"custom-css-top-bar-widget-builder",children:W({account:d})&&Object(n.jsx)(Ie,{featureId:te.a.WIDGET_BUILDER,align:"right","data-auto":"widget-builder-lock"})},"widget-builder")]:[]]}var oe=Ht;function le({account:d}){return!d.featuresInPlan[C.r.PERMISSIONS]}var ft={shouldLockPermissions:le},yt=t("/eu3"),Q=t("o/li");const xt=()=>{const[d,g]=Object(s.useState)(!1);return Object(s.useEffect)(()=>{function E(){return D.apply(this,arguments)}function D(){return D=r()(function*(){yield Q.a.waitForPlansLoad(),yield Q.a.waitForAccountPlanLoader(),g(Q.a.isFeatureInCurrentPlan("ClientBilling"))}),D.apply(this,arguments)}E()},[]),Object(n.jsx)(u.a.Consumer,{children:({account:E})=>Object(n.jsx)(qe,{text:Object(c.m)("ui.ed.dashboard.topBar.clients"),locationPrefix:w.g.CLIENTS,"data-auto":"clients",globalClass:"custom-css-top-bar-clients",children:Gt({account:E,clientBillingFeatureInPlan:d})})})};function Gt({account:d,clientBillingFeatureInPlan:g}){return[...le({account:d})?[Object(n.jsx)(Ie,{featureId:te.a.CLIENTS,align:"right","data-auto":"permissions-lock"},"permissions-lock")]:[],Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.clientManagement"),to:`${w.g.CLIENT_MANAGEMENT}?referral=top-bar`,"data-auto":"client-management",globalClass:"custom-css-top-bar-client-management"},"client-management"),...S.a.getFlag("pricing.clientBilling.enabled",!1)&&d.userTypeNew==="Account_owner"&&Object(yt.a)()&&g?[Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.clientBilling"),to:`${w.g.CLIENT_BILLING}?referral=top-bar`,"data-auto":"client-billing"},"client-billing")]:[]]}var ae=xt,Ce=()=>Object(n.jsx)(q,{text:Object(c.m)("ui.ed.dashboard.topBar.stats"),to:w.g.STATS,globalClass:"custom-css-top-bar-stats","data-auto":"stats"});function ue({account:d}){return d.permissions[C.d.PARTNER_PORTAL]}var Ne={shouldShowSalesCollateral:ue};const rn="d1-link-ideaBoard",Nn=()=>Object(n.jsx)(u.a.Consumer,{children:({account:d})=>Object(n.jsx)(qe,{text:Object(c.m)("dashboard.topBar.resources"),to:w.g.RESOURCES,external:!0,externalNewTab:!0,"data-auto":"resources",globalClass:"custom-css-top-bar-resources",children:Ye({account:d})})});function Ye({account:d}){return[Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.whatsNew"),to:w.g.WHATS_NEW,external:!0,externalNewTab:!0,"data-auto":"whats-new",globalClass:"custom-css-top-bar-product-updates"},"whats-new"),Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.duda.uservoice"),to:w.g.DUDA_USERVOICE_SSO,external:!0,externalNewTab:!0,"data-auto":"duda-uservoice",globalClass:"custom-css-top-bar-product-uservoice",onClick:Kn},"duda-uservoice"),...ue({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.salesCollateral"),to:w.g.SALES_COLLATERAL,external:!0,externalNewTab:!0,"data-auto":"sales-collateral",globalClass:"custom-css-top-bar-sales-collateral"},"sales-collateral")]:[],Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.caseStudies"),to:w.g.CASE_STUDIES,external:!0,externalNewTab:!0,"data-auto":"case-studies",globalClass:"custom-css-top-bar-case-studies"},"case-studies"),Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.webinars"),to:w.g.WEBINARS,external:!0,externalNewTab:!0,"data-auto":"webinars",globalClass:"custom-css-top-bar-webinars"},"webinars"),Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.developersPortal"),to:w.g.DEVELOPERS_PORTAL,external:!0,externalNewTab:!0,"data-auto":"developers-portal",globalClass:"custom-css-top-bar-developers-portal"},"developers-portal")]}function Kn(){Object(Nt.a)(rn)}var Yn=Nn,eo=t("CVzT"),Rn=t.n(eo),no=t("vlw9"),An=t.n(no),Qn=t("wy3E");const fn=({"data-auto":d})=>Object(n.jsx)(u.a.Consumer,{children:({account:g,blockUI:E,unblockUI:D})=>Object(n.jsxs)("div",{className:An.a.container,"data-auto":d,children:[Object(n.jsx)("label",{className:An.a.text,children:`${Object(c.m)("ui.ed.dashboard.topBar.plan")}: ${g.planType===C.a.NONE?Object(c.m)("ui.ed.dashboard.topBar.unassigned"):C.b[g.planType]}`}),Object(n.jsx)("div",{className:An.a["upgrade-button"],onClick:hn({account:g,blockUI:E,unblockUI:D}),children:g.planType===C.a.NONE?Object(c.m)("ui.ed.dashboard.topBar.purchase"):Object(c.m)("ui.ed.dashboard.topBar.upgrade")})]})});function hn({account:d,blockUI:g,unblockUI:E}){return()=>Sn({account:d,blockUI:g,unblockUI:E})}function Sn(d){return Mn.apply(this,arguments)}function Mn(){return Mn=r()(function*({account:d,blockUI:g,unblockUI:E}){const D="Dashboard current plan upgrade message",B=yield Object(Qn.a)();yield Q.a.waitForPlansLoad(),B.upgradeAccount({popupProps:{height:"calc(100vh - 120px)"},referral:D,account:d,blockUI:g,unblockUI:E})}),Mn.apply(this,arguments)}const{string:Ho}=c.b;fn.propTypes={"data-auto":Ho};var Ae=fn,je=typeof globalThis!="undefined"&&globalThis||typeof self!="undefined"&&self||typeof je!="undefined"&&je,Le={searchParams:"URLSearchParams"in je,iterable:"Symbol"in je&&"iterator"in Symbol,blob:"FileReader"in je&&"Blob"in je&&function(){try{return new Blob,!0}catch(d){return!1}}(),formData:"FormData"in je,arrayBuffer:"ArrayBuffer"in je};function Go(d){return d&&DataView.prototype.isPrototypeOf(d)}if(Le.arrayBuffer)var zo=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],We=ArrayBuffer.isView||function(d){return d&&zo.indexOf(Object.prototype.toString.call(d))>-1};function Be(d){if(typeof d!="string"&&(d=String(d)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(d)||d==="")throw new TypeError("Invalid character in header field name");return d.toLowerCase()}function En(d){return typeof d!="string"&&(d=String(d)),d}function Wn(d){var g={next:function(){var E=d.shift();return{done:E===void 0,value:E}}};return Le.iterable&&(g[Symbol.iterator]=function(){return g}),g}function ye(d){this.map={},d instanceof ye?d.forEach(function(g,E){this.append(E,g)},this):Array.isArray(d)?d.forEach(function(g){this.append(g[0],g[1])},this):d&&Object.getOwnPropertyNames(d).forEach(function(g){this.append(g,d[g])},this)}ye.prototype.append=function(d,g){d=Be(d),g=En(g);var E=this.map[d];this.map[d]=E?E+", "+g:g},ye.prototype.delete=function(d){delete this.map[Be(d)]},ye.prototype.get=function(d){return d=Be(d),this.has(d)?this.map[d]:null},ye.prototype.has=function(d){return this.map.hasOwnProperty(Be(d))},ye.prototype.set=function(d,g){this.map[Be(d)]=En(g)},ye.prototype.forEach=function(d,g){for(var E in this.map)this.map.hasOwnProperty(E)&&d.call(g,this.map[E],E,this)},ye.prototype.keys=function(){var d=[];return this.forEach(function(g,E){d.push(E)}),Wn(d)},ye.prototype.values=function(){var d=[];return this.forEach(function(g){d.push(g)}),Wn(d)},ye.prototype.entries=function(){var d=[];return this.forEach(function(g,E){d.push([E,g])}),Wn(d)},Le.iterable&&(ye.prototype[Symbol.iterator]=ye.prototype.entries);function Cn(d){if(d.bodyUsed)return Promise.reject(new TypeError("Already read"));d.bodyUsed=!0}function oo(d){return new Promise(function(g,E){d.onload=function(){g(d.result)},d.onerror=function(){E(d.error)}})}function Oo(d){var g=new FileReader,E=oo(g);return g.readAsArrayBuffer(d),E}function Ca(d){var g=new FileReader,E=oo(g);return g.readAsText(d),E}function ao(d){for(var g=new Uint8Array(d),E=new Array(g.length),D=0;D<g.length;D++)E[D]=String.fromCharCode(g[D]);return E.join("")}function io(d){if(d.slice)return d.slice(0);var g=new Uint8Array(d.byteLength);return g.set(new Uint8Array(d)),g.buffer}function Ko(){return this.bodyUsed=!1,this._initBody=function(d){this.bodyUsed=this.bodyUsed,this._bodyInit=d,d?typeof d=="string"?this._bodyText=d:Le.blob&&Blob.prototype.isPrototypeOf(d)?this._bodyBlob=d:Le.formData&&FormData.prototype.isPrototypeOf(d)?this._bodyFormData=d:Le.searchParams&&URLSearchParams.prototype.isPrototypeOf(d)?this._bodyText=d.toString():Le.arrayBuffer&&Le.blob&&Go(d)?(this._bodyArrayBuffer=io(d.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):Le.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(d)||We(d))?this._bodyArrayBuffer=io(d):this._bodyText=d=Object.prototype.toString.call(d):this._bodyText="",this.headers.get("content-type")||(typeof d=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):Le.searchParams&&URLSearchParams.prototype.isPrototypeOf(d)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},Le.blob&&(this.blob=function(){var d=Cn(this);if(d)return d;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var d=Cn(this);return d||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Oo)}),this.text=function(){var d=Cn(this);if(d)return d;if(this._bodyBlob)return Ca(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(ao(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},Le.formData&&(this.formData=function(){return this.text().then(Xo)}),this.json=function(){return this.text().then(JSON.parse)},this}var Yo=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Qo(d){var g=d.toUpperCase();return Yo.indexOf(g)>-1?g:d}function Ln(d,g){if(!(this instanceof Ln))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');g=g||{};var E=g.body;if(d instanceof Ln){if(d.bodyUsed)throw new TypeError("Already read");this.url=d.url,this.credentials=d.credentials,g.headers||(this.headers=new ye(d.headers)),this.method=d.method,this.mode=d.mode,this.signal=d.signal,!E&&d._bodyInit!=null&&(E=d._bodyInit,d.bodyUsed=!0)}else this.url=String(d);if(this.credentials=g.credentials||this.credentials||"same-origin",(g.headers||!this.headers)&&(this.headers=new ye(g.headers)),this.method=Qo(g.method||this.method||"GET"),this.mode=g.mode||this.mode||null,this.signal=g.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&E)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(E),(this.method==="GET"||this.method==="HEAD")&&(g.cache==="no-store"||g.cache==="no-cache")){var D=/([?&])_=[^&]*/;if(D.test(this.url))this.url=this.url.replace(D,"$1_="+new Date().getTime());else{var B=/\?/;this.url+=(B.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}Ln.prototype.clone=function(){return new Ln(this,{body:this._bodyInit})};function Xo(d){var g=new FormData;return d.trim().split("&").forEach(function(E){if(E){var D=E.split("="),B=D.shift().replace(/\+/g," "),V=D.join("=").replace(/\+/g," ");g.append(decodeURIComponent(B),decodeURIComponent(V))}}),g}function Jo(d){var g=new ye,E=d.replace(/\r?\n[\t ]+/g," ");return E.split("\r").map(function(D){return D.indexOf(`
`)===0?D.substr(1,D.length):D}).forEach(function(D){var B=D.split(":"),V=B.shift().trim();if(V){var K=B.join(":").trim();g.append(V,K)}}),g}Ko.call(Ln.prototype);function bn(d,g){if(!(this instanceof bn))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');g||(g={}),this.type="default",this.status=g.status===void 0?200:g.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in g?g.statusText:"",this.headers=new ye(g.headers),this.url=g.url||"",this._initBody(d)}Ko.call(bn.prototype),bn.prototype.clone=function(){return new bn(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new ye(this.headers),url:this.url})},bn.error=function(){var d=new bn(null,{status:0,statusText:""});return d.type="error",d};var Bn=[301,302,303,307,308];bn.redirect=function(d,g){if(Bn.indexOf(g)===-1)throw new RangeError("Invalid status code");return new bn(null,{status:g,headers:{location:d}})};var jn=je.DOMException;try{new jn}catch(d){jn=function(g,E){this.message=g,this.name=E;var D=Error(g);this.stack=D.stack},jn.prototype=Object.create(Error.prototype),jn.prototype.constructor=jn}function Ii(d,g){return new Promise(function(E,D){var B=new Ln(d,g);if(B.signal&&B.signal.aborted)return D(new jn("Aborted","AbortError"));var V=new XMLHttpRequest;function K(){V.abort()}V.onload=function(){var _={status:V.status,statusText:V.statusText,headers:Jo(V.getAllResponseHeaders()||"")};_.url="responseURL"in V?V.responseURL:_.headers.get("X-Request-URL");var bt="response"in V?V.response:V.responseText;setTimeout(function(){E(new bn(bt,_))},0)},V.onerror=function(){setTimeout(function(){D(new TypeError("Network request failed"))},0)},V.ontimeout=function(){setTimeout(function(){D(new TypeError("Network request failed"))},0)},V.onabort=function(){setTimeout(function(){D(new jn("Aborted","AbortError"))},0)};function tt(_){try{return _===""&&je.location.href?je.location.href:_}catch(bt){return _}}V.open(B.method,tt(B.url),!0),B.credentials==="include"?V.withCredentials=!0:B.credentials==="omit"&&(V.withCredentials=!1),"responseType"in V&&(Le.blob?V.responseType="blob":Le.arrayBuffer&&B.headers.get("Content-Type")&&B.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(V.responseType="arraybuffer")),g&&typeof g.headers=="object"&&!(g.headers instanceof ye)?Object.getOwnPropertyNames(g.headers).forEach(function(_){V.setRequestHeader(_,En(g.headers[_]))}):B.headers.forEach(function(_,bt){V.setRequestHeader(bt,_)}),B.signal&&(B.signal.addEventListener("abort",K),V.onreadystatechange=function(){V.readyState===4&&B.signal.removeEventListener("abort",K)}),V.send(typeof B._bodyInit=="undefined"?null:B._bodyInit)})}Ii.polyfill=!0,je.fetch||(je.fetch=Ii,je.Headers=ye,je.Request=Ln,je.Response=bn);function Gs(d){return ja.apply(this,arguments)}function ja(){return ja=r()(function*(d){return(yield fetch(d,{credentials:"include"})).json()}),ja.apply(this,arguments)}function Ni(d){return Pa.apply(this,arguments)}function Pa(){return Pa=r()(function*({url:d,data:g}){return yo({url:d,data:g,method:"POST"})}),Pa.apply(this,arguments)}function zs(d){return Ta.apply(this,arguments)}function Ta(){return Ta=r()(function*({url:d,data:g}){return yo({url:d,data:g,method:"PUT"})}),Ta.apply(this,arguments)}function Ks(d){return Da.apply(this,arguments)}function Da(){return Da=r()(function*({url:d,data:g}){return yo({url:d,data:g,method:"PATCH"})}),Da.apply(this,arguments)}function Ys(d){return Ia.apply(this,arguments)}function Ia(){return Ia=r()(function*({url:d,data:g}){return yo({url:d,data:g,method:"DELETE"})}),Ia.apply(this,arguments)}function yo(d){return Na.apply(this,arguments)}function Na(){return Na=r()(function*({url:d,data:g,method:E,extraHeaders:D={}}){const V=yield(yield window.fetch(`/api/uis${d}`,Object.assign({},Qs(E,D),{body:JSON.stringify(g)}))).text();return V?JSON.parse(V):null}),Na.apply(this,arguments)}function Qs(d,g){return{method:d,headers:Object.assign({"Content-Type":"application/json"},g),credentials:"include"}}var ah={get:Gs,post:Ni,put:zs,patch:Ks,del:Ys,request:yo},Xs=t("4qC0"),Ra=t.n(Xs);let Zo,So;function Js(){Zo={},So={};const d=60;for(let g=1;g<d;g++){const E=S.a.get(`locale.active.${g}`,!0);Ra()(E)&&(Zo[E]=g,So[g]=E)}}Js();function Ri(d){return So[d]}function Zs(d){return Zo[d]}function $s(){return Object.keys(Zo)}function qs(){return Object.keys(So).map(d=>({id:d,name:So[d]}))}var ih={getLanguageNameById:Ri,getLanguageIdByName:Zs,getLanguagesNames:$s},_s=t("7fIo"),$o=t.n(_s);const Ai=({languages:d,usedLanguageName:g,onLanguageClick:E,"data-auto":D})=>Object(n.jsxs)("div",{className:Object(c.h)($o.a.container,"custom-css-top-bar-languages"),"data-auto":D,children:[Object(n.jsx)("label",{className:$o.a["used-language"],children:g}),Object(n.jsx)("div",{className:$o.a.languages,children:d.map(B=>Object(n.jsx)("div",{"data-auto":`language-id-${B.id}`,className:$o.a.language,onClick:tl({currLanguage:B,onLanguageClick:E}),children:B.name},B.id))})]});function tl({currLanguage:d,onLanguageClick:g}){return()=>g(d)}const{string:qo,func:el,arrayOf:nl,shape:ol}=c.b;Ai.propTypes={languages:nl(ol({id:qo.isRequired,name:qo.isRequired})).isRequired,usedLanguageName:qo.isRequired,onLanguageClick:el.isRequired,"data-auto":qo};var al=Ai,il=t("pMJh");const Mi=({"data-auto":d})=>Object(n.jsx)(u.a.Consumer,{children:({account:g})=>{const E=Ri(g.localeId),D=rl({usedLanguageName:E});return Object(n.jsx)(al,{languages:D,usedLanguageName:E,onLanguageClick:sl,"data-auto":d})}});function rl({usedLanguageName:d}){return qs().filter(g=>g.name!==d)}function sl(d){return Aa.apply(this,arguments)}function Aa(){return Aa=r()(function*(d){yield Ni({url:`/account/changelocale?locale=${d.id}`}),il.a(window).reload()}),Aa.apply(this,arguments)}const{string:ll}=c.b;Mi.propTypes={"data-auto":ll};var cl=Mi;function Li(){return S.a.get("dashboard.hasAccountSettings",!0)}function Bi({account:d}){return d.permissions[C.d.PAYMENTS]&&(d.isNewPricing&&d.planType!==C.a.ENTERPRISE&&!d.isInTrial&&d.permissionsForAtLeastOneSite[C.y.FIRST_PUBLISH]||d.hasPayments)}function wi({account:d}){return d.permissions[C.d.PAYMENTS]&&(d.isEligibleForAutoBilling||d.isIVRAutomaticallydBilled||d.isEligibleForStripeAccount)}function Fi({account:d}){return d.isNewPricing&&d.planType!==C.a.AGENCY&&d.planType!==C.a.AGENCY_PLUS&&d.planType!==C.a.ENTERPRISE&&!d.isInTrial&&d.isProductOwner}function Ui({productType:d}){const g=S.a.get("logout.next.url"),E=S.a.get("login.entryPoint");return d===C.u.DM_DIRECT?g:E}var rh={shouldShowAccount:Li,shouldShowPayment:Bi,shouldShowBilling:wi,shouldShowUpgrade:Fi,getLogoutRedirectUrl:Ui};const dl=()=>Object(n.jsx)(u.a.Consumer,{children:({account:d,environment:g})=>Object(n.jsx)(qe,{text:d.name,locationPrefix:w.g.USER,className:Rn.a["username-item"],childrenClassName:Rn.a["username-item-children"],labelContainerClassName:Rn.a["username-item-text-container"],labelClassName:Rn.a["username-item-text"],icon:{name:"user",size:16},globalClass:"custom-css-top-bar-user","data-auto":"user",children:ul({account:d,environment:g})})});function ul({account:d,environment:g}){const{productType:E}=g;return[...Li({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.account"),to:w.g.ACCOUNT,"data-auto":"account",globalClass:"custom-css-top-bar-account",onClick:()=>Nt.a("account-page-enter",{referral:"TopBar"})},"account")]:[],...Bi({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.payment"),to:w.g.PAYMENT,"data-auto":"payment",globalClass:"custom-css-top-bar-payment"},"payment")]:[],...wi({account:d})?[Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.paymentInfo"),to:w.g.BILLING,"data-auto":"payment-info",globalClass:"custom-css-top-bar-payment-info"},"payment-info")]:[],...Fi({account:d})?[Object(n.jsx)(Ae,{"data-auto":"upgrade"},"upgrade")]:[],Object(n.jsx)(cl,{"data-auto":"language"},"language"),Object(n.jsx)(_t,{text:Object(c.m)("ui.ed.dashboard.topBar.signOut"),to:w.g.SIGN_OUT.replace(`${w.f.LOGOUT_REDIRECT_URL}`,Ui({productType:E})),external:!0,"data-auto":"sign-out",globalClass:"custom-css-top-bar-sign-out"},"sign-out")]}var pl=dl,Eo=t("7Ozw"),ml=t("luHh"),Ma=t.n(ml);function fl(d){return d.permissions[C.d.D_AWARE]?d.dudaHelpUrl:S.a.get("custom.support.link")||d.wlHelpUrl}const La="zendesk";var hl=()=>{const{account:d}=Object(s.useContext)(u.a),g=Object(s.useCallback)(()=>{Object(Nt.a)("d1-topbar-customershelp",{})},[]),E=fl(d),D=d.permissions[C.d.D_AWARE],B=D&&S.a.getFlag("editor.helpMenu.vanillaCommunityLink.enabled",!1),V=D&&S.a.getFlag("helpMenu.expertsLink.enabled",!1);return Object(Eo.b)(La,d.permissions)===La?Object(n.jsxs)(qe,{text:Object(c.m)("ui.help"),"data-auto":"help",className:Ma.a.container,childrenClassName:Ma.a.sub,children:[B?Object(n.jsx)(_t,{text:Object(c.m)("ui.support.vanilla"),onClick:Eo.d},"vanilla"):null,Object(n.jsx)(_t,{text:Object(c.m)("ui.support.portal"),onClick:()=>Object(Eo.f)(E)},"portal"),D&&Object(n.jsx)(_t,{text:Object(c.m)("dashboard.topBar.duda.university"),to:w.g.DUDA_UNIVERSITY_SSO,external:!0,externalNewTab:!0,"data-auto":"duda-uni",globalClass:"custom-css-top-bar-product-training"},"duda-university"),V&&Object(n.jsx)(_t,{text:Object(c.m)("ui.hire.expert"),onClick:Eo.c},"expert"),Object(n.jsx)(_t,{to:La,text:Object(c.m)("ui.contact.support"),onClick:Eo.e},"contact")]}):Object(n.jsx)(q,{icon:{name:"question-mark",size:16},to:E,external:!0,externalNewTab:!0,className:Ma.a.item,globalClass:"custom-css-top-bar-help",onClick:g,"data-auto":"help"})},bl=t("/oeM"),gl=t("7Qtb"),vl=t.n(gl),Kt=t("rf6O"),ie=t.n(Kt);const ki=({msSrcs:d,account:g})=>{const[E,D]=Object(s.useState)(!1),{clientBilling:B}=d||{};return Object(s.useEffect)(()=>{function V(){return K.apply(this,arguments)}function K(){return K=r()(function*(){const tt=yield Object(bl.d)(B,{uuid:g.uuid});D(!!tt)}),K.apply(this,arguments)}!B||!g||!g.isCustomer||V()},[B,g]),E?Object(n.jsx)(q,{text:Object(c.m)("dashboard.html.title.customerPaymentRequests"),to:w.g.PAYMENT_REQUESTS,"data-auto":"payment-requests",className:vl.a["payment-requests"]}):null};ki.propTypes={msSrcs:Kt.string,account:Object(Kt.shape)({uuid:Kt.string,isCustomer:Kt.bool})};var xl=ki;const Ol=()=>Object(n.jsx)(u.a.Consumer,{children:({account:d,msSrcs:g})=>Object(n.jsx)("div",{className:I.a.container,children:yl({account:d,msSrcs:g})})});function yl({account:d,msSrcs:g}){return[Object(n.jsx)(mt,{},"sites"),...L({account:d})?[Object(n.jsx)(Ft,{},"white-label")]:[],...k({account:d})?[Object(n.jsx)(oe,{},"team")]:[],...G({account:d})?[Object(n.jsx)(ae,{},"permissions")]:[],...Y({account:d})?[Object(n.jsx)(Ce,{},"stats")]:[],Object(n.jsx)(xl,{msSrcs:g,account:d},"payment-requests"),...J({account:d})?[Object(n.jsx)(Yn,{},"resources")]:[],Object(n.jsx)(pl,{},"user"),...X({account:d})?[Object(n.jsx)(hl,{},"help")]:[]]}var Sl=Ol,El=()=>Object(n.jsxs)("div",{className:Object(c.h)(p.a.container,"custom-css-top-bar"),"data-auto":"top-bar",children:[Object(n.jsx)(y,{}),Object(n.jsx)(Sl,{})]}),Ba=t("IISL"),Cl=t.n(Ba),Wi=t("w2jt"),_o=t("INEn"),Co=t("JzJd"),wa=t("YtDI"),Vi=t("oGBQ"),jo=t("iLAm"),Hi=t("5xxK"),Fa=t.n(Hi),Po=t("SGXX"),gn=t.n(Po),jl=t("tZPy"),sn=t.n(jl),Pl=t("Hmni"),ro=t.n(Pl),Tl=()=>Object(n.jsxs)("div",{className:ro.a.container,"data-auto":"empty-site-list",children:[Object(n.jsxs)("div",{className:ro.a["moon-container"],children:[Object(n.jsx)(gn.a,{className:ro.a["moon-icon"],iconType:C.m.SVG,name:"moon",height:331,size:807}),Object(n.jsxs)("div",{className:ro.a["text-container"],children:[Object(n.jsx)(sn.a,{className:ro.a.title,text:Object(c.m)("ui.ed.dashboard.sitepage.nosites.title")}),Object(n.jsx)(sn.a,{className:ro.a.text,text:Object(c.m)("ui.ed.dashboard.sitepage.nosites.line1")})]})]}),Object(n.jsxs)("div",{className:ro.a.footer,children:[Object(n.jsx)(gn.a,{height:79,iconType:C.m.SVG,name:"left_cloud"}),Object(n.jsx)(gn.a,{height:98,iconType:C.m.SVG,name:"right_cloud"})]})]}),Dl=t("JXTY"),Gi=t.n(Dl),Qe=t("2i9H"),Il=t("rJYc"),ta=t.n(Il),Nl=t("OhMr"),Rl=t.n(Nl),Al=t("nQG1"),Ml=t("sFjE"),Vn=t.n(Ml);const zi=({title:d,description:g,buttonText:E,path:D,iconName:B,name:V,stopStopWatch:K,shouldShowVideoLink:tt,onVideoLinkClick:_,onActionClick:bt})=>{const{setAnalyticsParams:Tt}=Object(s.useContext)(Ut),Dt=()=>{const $t=Math.round(K()/1e3);Nt.a("d1-emptyDash-explore",{cardContent:V,timeOnScreen:$t}),Tt({referral:w.a,origin:w.a}),bt()};return Object(n.jsxs)(Rl.a,{className:Vn.a.container,children:[Object(n.jsx)(gn.a,{className:Vn.a.icon,iconType:C.m.SVG,name:B}),Object(n.jsx)(sn.a,{flex:!1,className:Vn.a.title,text:d,noPadding:!0}),Object(n.jsx)(sn.a,{flex:!1,className:Vn.a.text,text:g,noPadding:!0}),Object(n.jsxs)("div",{className:Vn.a["links-container"],children:[Object(n.jsx)(h.b,{to:D,className:Vn.a["button-container"],children:Object(n.jsx)(ta.a,{secondary:!0,className:Vn.a.button,text:E,onClick:Dt})}),tt&&Object(n.jsx)(Al.a,{className:Vn.a.video,onClick:_,"data-auto":"video-link",children:Object(n.jsx)(gn.a,{className:Vn.a["play-icon"],name:"video-round",iconType:Po.Type.SVG})})]})]})},{string:ho,func:Ua,bool:Ll}=c.b;zi.propTypes={title:ho.isRequired,description:ho.isRequired,buttonText:ho.isRequired,path:ho.isRequired,iconName:ho.isRequired,name:ho.isRequired,stopStopWatch:Ua.isRequired,shouldShowVideoLink:Ll.isRequired,onVideoLinkClick:Ua,onActionClick:Ua};var Bl=zi,wl=t("2jxq"),To=t.n(wl);const Fl=[{title:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.branding.title"),description:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.branding.description"),buttonText:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.buttonText"),path:w.g.CUSTOM_BRANDING,iconName:"fingerprint",name:"Custom Branding",videoUrl:S.a.get("empty.dashboard.custom.branding.video.url"),onActionClick:()=>Ue("emptyDashCard")},{title:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.clientManagement.title"),description:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.clientManagement.description"),buttonText:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.buttonText"),path:`${w.g.CLIENT_MANAGEMENT}?referral=${w.a}`,iconName:"team",name:"Client Management",videoUrl:S.a.get("empty.dashboard.client.management.video.url")},{title:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.collaboration.title"),description:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.collaboration.description"),buttonText:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.buttonText"),path:w.g.TEAM_PERMISSIONS,iconName:"circle-with-circles",name:"Team Permissions",videoUrl:S.a.get("empty.dashboard.team.collaboration.video.url")}],Ul="d1-promoVideo-open",kl="d1-promoVideo-close",Ki=({stopStopWatch:d,startStopWatch:g,account:E,environment:D})=>{const B=Object(s.useRef)(),V=Object(s.useCallback)(()=>Math.round((Date.now()-B.current)/1e3),[B]),K=Object(s.useCallback)(()=>Math.round(d()/1e3),[d]),tt=Object(s.useCallback)(Tt=>{Object(Nt.a)(kl,{cardContent:Tt,referral:w.a,timeOnVideo:V()}),g()},[g,V]),_=Object(s.useCallback)(({name:Tt,videoUrl:Dt})=>{Object(Nt.a)(Ul,{cardContent:Tt,referral:w.a,timeOnScreen:K()}),B.current=Date.now(),Object(Qe.f)(Qe.a.DARK_HEADER,{width:"857px",height:"516px",content:Object(n.jsx)("iframe",{width:"100%",height:"100%",frameBorder:0,src:Dt,allowfullscreen:!0}),showContainer:!1,onClose:()=>tt(Tt),noMargin:!0})},[tt,K]),bt=E.permissions.D_AWARE&&D.productType!==C.u.RESELLER;return Object(n.jsxs)("div",{className:To.a.container,children:[Object(n.jsxs)("div",{className:To.a["divider-container"],children:[Object(n.jsx)(Gi.a,{className:To.a.divider}),Object(n.jsx)(sn.a,{noPadding:!0,className:To.a["divider-label"],text:Object(c.m)("ui.ed.dashboard.sitepage.empty.actions.more")}),Object(n.jsx)(Gi.a,{className:To.a.divider})]}),Fl.map(({title:Tt,description:Dt,buttonText:$t,path:xe,iconName:Te,name:Ve,videoUrl:he,onActionClick:me=()=>{}},De)=>Object(n.jsx)(Bl,{title:Tt,description:Dt,buttonText:$t,path:xe,iconName:Te,name:Ve,stopStopWatch:d,shouldShowVideoLink:bt,onActionClick:me,onVideoLinkClick:()=>_({name:Ve,videoUrl:he})},De))]})},{func:Yi,shape:Qi,string:dh,oneOf:Wl,object:Vl}=c.b;Ki.propTypes={account:Qi({permissions:Vl.isRequired}).isRequired,environment:Qi({productType:Wl(Object.values(C.u)).isRequired}).isRequired,startStopWatch:Yi,stopStopWatch:Yi};var Hl=Ki,Gl=t("8+zp"),zl=t.n(Gl),Kl=t("pT3E"),Do=t.n(Kl);const Xi=({account:d,blockUI:g,unblockUI:E})=>{const D=function(){var B=r()(function*(){(yield Object(Qn.a)()).upgradeAccount({referral:"Empty Dashboard promo",account:d,blockUI:g,unblockUI:E})});return function(){return B.apply(this,arguments)}}();return Object(n.jsx)("div",{className:Do.a.container,"data-auto":"promo-banner",children:Object(n.jsxs)("div",{className:Do.a.content,children:[Object(n.jsx)(sn.a,{flex:!1,className:Do.a["banner-title"],text:Object(Co.a)("dashboard.empty.site.list.promo.banner.title")}),Object(n.jsx)(sn.a,{flex:!1,className:Do.a["banner-text"],text:Object(Co.a)("dashboard.empty.site.list.promo.banner.text")}),Object(n.jsx)(ta.a,{"data-auto":"promo-button",className:Do.a["banner-button"],text:Object(Co.a)("dashboard.empty.site.list.promo.banner.button"),primary:!1,onClick:D})]})})},{func:Ji,object:Yl}=ie.a;Xi.propTypes={account:Yl.isRequired,blockUI:Ji.isRequired,unblockUI:Ji.isRequired};var Ql=Xi,Xl=t("Diiz"),Io=t.n(Xl),Jl=t("g1OK"),ka=t.n(Jl),Zl=t("TSYQ"),ln=t.n(Zl),$l=t("3nnA"),ql=t.n($l),_l=t("fyLq"),No=t.n(_l);const Zi=({value:d,description:g,onChange:E})=>Object(n.jsx)(ql.a,{className:No.a.main,value:d,label:g,hideLabel:!0,onChange:E,children:Object(n.jsxs)("div",{className:No.a.content,children:[Object(n.jsx)(gn.a,{iconType:Po.Type.SVG,name:d,size:28,className:ln()(No.a.icon,No.a[d])}),Object(n.jsx)(sn.a,{text:g,noPadding:!0,className:No.a.description})]})});Zi.propTypes={value:Kt.string,description:Kt.string,onChange:Kt.func};var tc=Zi,ec=t("GtI6"),ea=t.n(ec),nc=t("3L3I"),oc=t.n(nc),Xe=t("9Mi+");function ac({account:d}){return d.permissions[C.d.CREATE_SITE]&&(d.isInTrial||d.planType!==C.a.NONE)}const ic=[C.a.NONE,C.a.TEAM,C.a.AGENCY,C.a.ENTERPRISE,C.q.LEGACY_PRO];function rc({account:d}){const g=d.permissions[C.d.D_AWARE],E=ic.includes(d.planType),D=d.permissions[C.d.EDIT_BRANDING]&&d.permissions[C.d.MANAGE_STAFF]&&d.permissions[C.d.MANAGE_CUSTOMERS];return g&&D&&(E||d.isInTrial)}function sc(d){return Object(Xe.postToServer)({url:"/dashboard/sites/templateIntent",data:{value:d}})}var Wa=t("6Yxu"),$i=t("CHFC");const lc="templateIntent-popupOpen",cc="templateIntent-popupClose",dc="templateIntent-popupSubmit",qi="dashboard.templateIntent.popup",_i=({show:d,closePopup:g})=>{const E=Object(lt.h)();Object(s.useEffect)(()=>{d&&Nt.a(lc)},[d]);const D=_=>{localStorage.setItem(Wa.b,_)},B=_=>{Nt.a(dc,{templateIntent:_}),sc(_)},V=_=>{E.push({pathname:w.g.TEMPLATES,state:{predefinedCategory:$i.p[_]}})},K=_=>{D(_),B(_),g(),V(_)},tt=()=>{g(),Nt.a(cc)};return Object(n.jsxs)(ka.a,{show:d,onClose:tt,className:ea.a.main,children:[Object(n.jsx)("div",{className:ea.a.header,children:Object(n.jsx)(ka.a.CloseButton,{onClick:tt})}),Object(n.jsxs)(ka.a.Body,{children:[Object(n.jsx)(sn.a,{html:Object(c.m)(`${qi}.title`),className:ea.a.title}),Object(n.jsx)(oc.a,{optionsGroupClassName:ea.a["cards-container"],onSelect:K,children:Object.entries(uc()).map(([_,bt])=>Object(n.jsx)(tc,{value:bt,description:Object(c.m)(`${qi}.cards.${bt}`)},_))})]})]})};_i.propTypes={show:Kt.bool,closePopup:Kt.func};function uc(){return Object.values($i.q).reduce((d,g)=>Object.assign({},d,{[g]:g}),{})}var tr=_i;const pc="d1-link-create-site",na="dashboard.sitepage.empty",er=({stopStopWatch:d,account:g})=>{const[E,D]=Object(s.useState)(!1),B=Object(lt.h)(),V=g.permissions[C.d.D_AWARE],K=V?Object(c.m)(`${na}.title`):Object(c.m)(`${na}.wl.title`),tt=V?Object(c.m)(`${na}.text`):Object(c.m)(`${na}.wl.text`),_=Q.a.isInTrial&&!localStorage.getItem(Wa.b)&&S.a.getFlag("dashboard.template-intent-popup-enabled")&&V;function bt(){B.push(w.g.TEMPLATES)}function Tt(){const xe=Math.round(d()/1e3);Nt.a(pc,{referral:w.a,timeOnScreen:xe})}function Dt(){Tt(),_?D(!0):bt()}function $t(){D(!1)}return Object(n.jsxs)("div",{className:Io.a.container,"data-auto":"empty-site-list",children:[Object(n.jsx)("div",{className:Io.a.image}),Object(n.jsx)(sn.a,{flex:!1,className:Io.a.title,text:K}),Object(n.jsx)(sn.a,{flex:!1,className:Io.a.text,text:tt}),Object(n.jsx)(ta.a,{"data-auto":"create-site-button",className:Io.a.button,text:Object(c.m)("dashboard.sitepage.empty.button"),onClick:Dt}),_&&Object(n.jsx)(tr,{show:E,closePopup:$t})]})};er.propTypes={stopStopWatch:Kt.func.isRequired,account:Kt.object.isRequired};var mc=er;const nr=({account:d,shouldShowActions:g,stopStopWatch:E,startStopWatch:D,environment:B,location:V})=>{const{blockUI:K,unblockUI:tt}=Object(s.useContext)(u.a);Object(s.useEffect)(()=>{const bt=new URLSearchParams(V.search);(bt.get("purchaseAccount")||S.a.getFlag("empty.dash.selectAccount.param.enabled")&&bt.get("selectAccount"))&&Object(wa.i)({account:d,blockUI:K,unblockUI:tt})},[d]);const _=()=>S.a.getFlag("pricing.promo.banner.enabled",!1)&&d.permissions[C.d.PAYMENTS]&&d.permissions[C.d.D_AWARE]&&d.isProductOwner&&d.isInTrial;return Object(n.jsxs)(n.Fragment,{children:[_()&&Object(n.jsx)(Ql,{account:d,blockUI:K,unblockUI:tt}),Object(n.jsxs)(Wi.a,{column:!0,className:zl.a.content,children:[Object(n.jsx)(mc,{stopStopWatch:E,account:d}),g&&Object(n.jsx)(Hl,{stopStopWatch:E,startStopWatch:D,account:d,environment:B})]})]})},{bool:Va,shape:or,object:ar,func:ir,oneOf:fc}=ie.a;nr.propTypes={account:or({isProductOwner:Va.isRequired,isInTrial:Va.isRequired,permissions:ar.isRequired}).isRequired,shouldShowActions:Va.isRequired,stopStopWatch:ir.isRequired,startStopWatch:ir.isRequired,environment:or({productType:fc(Object.values(C.u)).isRequired}).isRequired,location:ar.isRequired};var hc=nr,bc=t("i7k0"),gc=t.n(bc);const vc=Object(s.lazy)(()=>t.e(32).then(t.bind(null,"LqFK")));class oa extends c.a{constructor(g){super(g);this.showSiteDeletedNotification=()=>{_o.b.addNotification({type:_o.a.timeout,duration:4e3,component:Object(n.jsx)(Cl.a,{text:Object(Co.a)("ui.ed.dashboard.sitepage.deleted.site.alert.confirmation"),type:Ba.MESSAGE_TYPE.FLOATING,alertType:Ba.ALERT_TYPE.SUCCESS})});const E=Object.assign({},location.state);delete E.showDeletedSiteNotification,this.props.history.replace({state:E})},this.stopStopWatch=()=>this.stopWatch.stop(),this.startStopWatch=()=>this.stopWatch.start(),this.stopWatch=Object(Vi.a)(),this.state={shouldRenderGeneralEmptyDashboard:!1,shouldShowActions:!1,shouldRenderCustomerEmptyDashboard:!1,showNewSiteListPage:!1}}render(){const{shouldRenderCustomerEmptyDashboard:g,shouldRenderGeneralEmptyDashboard:E,shouldShowActions:D,showNewSiteListPage:B}=this.state;return g?Object(n.jsxs)("div",{className:Hi.container,children:[Object(n.jsx)(Tl,{}),Object(n.jsx)(jo.a,{})]}):E?(Object(Nt.a)("dashboard-loaded",{"dashboard-type":"emptyDashboard",darkMode:window.matchMedia("(prefers-color-scheme: dark)").matches}),S.a.getFlag("top.banners.new.empty.dashboard.enabled",!1)&&this.context.setIsNewDashboardPage(!0),Object(n.jsxs)(Wi.a,{column:!0,className:gc.a["empty-dashboard-container"],children:[Object(n.jsx)(hc,{shouldShowActions:D,account:this.context.account,environment:this.context.environment,stopStopWatch:this.stopStopWatch,startStopWatch:this.startStopWatch,location:this.props.location}),Object(n.jsx)(jo.a,{})]})):B?Object(n.jsx)(vc,{}):null}componentDidMount(){this.init()}init(){var g=this;return r()(function*(){g.stopWatch.start();const{isOldDashboardInitialized:E,navigateOldDashboardTo:D,setOldDashboardInitialSrc:B,account:V}=g.context,K=yield Object(wa.g)();if(S.a.getFlag("enable.site.overview",!1)){var tt;if(((tt=g.props.location.state)===null||tt===void 0?void 0:tt.showDeletedSiteNotification)&&g.showSiteDeletedNotification(),V.isCustomer){if(K===0){g.setState({shouldRenderCustomerEmptyDashboard:!0});return}else if(K===1){const bt=yield Object(wa.h)({siteType:C.A.DUDAONE});if(bt.length){Object(Nt.a)("RedirectToOverview"),g.redirectToSitePage(bt[0].alias);return}}}}if(K===0&&ac({account:V})){const _=yield rc({account:V});g.setState({shouldRenderGeneralEmptyDashboard:!0,shouldShowActions:_});return}if(Object(Nt.a)("dashboard-loaded",{"dashboard-type":"siteList",darkMode:window.matchMedia("(prefers-color-scheme: dark)").matches}),S.a.getFlag("dashboard.site.list.page.new.enabled",!1)){g.setState({showNewSiteListPage:!0});return}if(E())D(w.e.SITES);else{const{location:_}=g.props,bt=_.search?`${_.search}&dashboardV1=true`:"?dashboardV1=true";B(`/home${bt}`)}})()}redirectToSitePage(g){this.props.history.replace(w.g.SITE_PAGE.replace(`:${w.f.SITE_ALIAS}`,g))}}oa.displayName="Sites",oa.propTypes={location:Kt.object.isRequired,history:Kt.object.isRequired},oa.contextType=u.a;var xc=oa;const{object:rr}=c.b;class aa extends c.a{constructor(...g){super(...g);this.getInitialDashboardSrc=()=>{const{params:E}=this.props.match;return`/home/dashboard?stat:${E[w.f.SITE_ALIAS]}&dashboardV1=true`}}render(){return null}componentDidMount(){Object(Nt.a)("d1-stats-enter",{mode:"siteSelected",Referral:window.Referral}),this.context.setOldDashboardInitialSrc(this.getInitialDashboardSrc())}}aa.displayName="SiteStats",aa.propTypes={match:rr.isRequired,location:rr.isRequired},aa.contextType=u.a;var Oc=aa;const{object:yc}=c.b;class ia extends c.a{constructor(...g){super(...g);this.getInitialDashboardSrc=()=>{const{params:E}=this.props.match,{referral:D}=window;return`/home/dashboard?form_responses:siteAlias=${E[w.f.SITE_ALIAS]}s:&dashboardV1=true${D?`&referral=${D}`:""}`}}render(){return null}componentDidMount(){this.context.setOldDashboardInitialSrc(this.getInitialDashboardSrc())}}ia.displayName="SiteFormResponses",ia.propTypes={match:yc.isRequired},ia.contextType=u.a;var Sc=ia;const{object:Ec}=c.b;class ra extends c.a{constructor(...g){super(...g);this.getInitialDashboardSrc=()=>{const{params:E}=this.props.match;return`/home/dashboard?manage:${E[w.f.SITE_ALIAS]}:PAYMENT&dashboardV1=true`}}render(){return null}componentDidMount(){this.context.setOldDashboardInitialSrc(this.getInitialDashboardSrc())}}ra.displayName="SitePaymentInfoForOldPricing",ra.propTypes={match:Ec.isRequired},ra.contextType=u.a;var Cc=ra;const{object:jc}=c.b;class sa extends c.a{constructor(...g){super(...g);this.getInitialDashboardSrc=()=>{const{params:E}=this.props.match;return`/home/dashboard?site_payment:${E[w.f.SITE_ID]}&dashboardV1=true`}}render(){return null}componentDidMount(){this.context.setOldDashboardInitialSrc(this.getInitialDashboardSrc())}}sa.displayName="SitePaymentInfoForNewPricing",sa.propTypes={match:jc.isRequired},sa.contextType=u.a;var Pc=sa,Tc=t("8K+W"),Dc=t.n(Tc);const Ge={DOMAINS:"/domains",DOMAINS_PLATFORM:"/domains/platform",DOMAINS_SITES:"/domains/sites",DOMAINS_EMAIL:"/domains/email"},Pt={DOMAIN_SETUP:"DOMAIN_SETUP",VALIDATE_RECORDS:"VALIDATE_RECORDS",DEFAULT_DOMAIN_UPDATE:"DEFAULT_DOMAIN_UPDATE",SUCCESS:"SUCCESS",DEFAULT:"DEFAULT",ERROR:"ERROR"},sr=[Pt.DEFAULT,Pt.SUCCESS,Pt.ERROR],Ic=[{title:Object(c.m)("dashboard.customDomain.dashboardDomain.stepper.domainStep")},{title:Object(c.m)("dashboard.customDomain.dashboardDomain.stepper.recordsStep")}],Ha={DEPLOYED:"DEPLOYED",REJECTED:"REJECTED",PENDING:"PENDING"},Xn={PLATFORM_DOMAIN_CUSTOM_START:"platformDomain-custom-start",PLATFORM_DOMAIN_CUSTOM_COPY_RECORD:"platformDomain-custom-copyRecord",PLATFORM_DOMAIN_CUSTOM_SAVE:"platformDomain-custom-save",PLATFORM_DOMAIN_DEFAULT_EDIT_START:"platformDomain-default-editStart",PLATFORM_DOMAIN_DEFAULT_SAVE:"platformDomain-default-save",PLATFORM_DOMAIN_REVERT_TO_DEFAULT_CONFIRM:"platformDomain-revertToDefault-confirm",PLATFORM_DOMAIN_CHANGE_DOMAIN_CONFIRM:"platformDomain-changeDomain-confirm",PLATFORM_DOMAIN_CONNECTED_CHECK_RECORDS:"platformDomain-connected-checkRecords",PLATFORM_DOMAIN_CUSTOM_NEXT:"platformDomain-custom-next"},Hn={SITE_DOMAIN_CUSTOM_START:"siteDomain-custom-start",SITE_DOMAIN_CUSTOM_NEXT:"siteDomain-custom-next",SITE_DOMAIN_CUSTOM_COPY_RECORD:"siteDomain-custom-copyRecord",SITE_DOMAIN_CUSTOM_SAVE:"siteDomain-custom-save",SITE_DOMAIN_PUBLISHED_SITES_ALERT_DISPLAYED:"siteDomain-publishedSites-alertDisplayed",SITE_DOMAIN_PUBLISHED_SITES_ALERT_CONTINUE:"siteDomain-publishedSites-alertContinue",SITE_DOMAIN_REVERT_TO_DEFAULT_CONFIRM:"siteDomain-revertToDefault-confirm",SITE_DOMAIN_CHANGE_DOMAIN_CONFIRM:"siteDomain-changeDomain-confirm",SITE_DOMAIN_CONNECTED_CHECK_RECORDS:"siteDomain-connected-checkRecords"},lr=61;function Nc(d){const g=d==null?void 0:d.getBoundingClientRect();if(!g)return!1;const E=g.top-lr,D=window.innerHeight-lr;if(g.height>D){const V=E>=0?g.height:g.height+E;return V<0||E>D?!1:V/g.height*100>55}return E>=0&&g.bottom<=D}var Rc=t("Ozdf"),so=t.n(Rc),Pe=t("ddYX"),Ro=t("oD08");function Ac(){return Ga.apply(this,arguments)}function Ga(){return Ga=r()(function*(){try{return yield Object(Xe.getFromServer)({url:"/domains/dashboard"})}catch(d){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:d}),null}}),Ga.apply(this,arguments)}function Mc(d){return za.apply(this,arguments)}function za(){return za=r()(function*(d){try{return yield Object(Xe.putToServer)({url:"/domains/dashboard/custom",data:{value:d}})}catch(g){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:g}),null}}),za.apply(this,arguments)}function cr(d){return Ka.apply(this,arguments)}function Ka(){return Ka=r()(function*(d){try{return yield Object(Xe.putToServer)({url:"/domains/dashboard/default",data:{value:d}})}catch(E){var g;return E!=null&&(g=E.responseJSON)!==null&&g!==void 0&&g.error_code?E.responseJSON:(yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:E}),Object(Ro.c)(),null)}}),Ka.apply(this,arguments)}function Lc(d){return Ya.apply(this,arguments)}function Ya(){return Ya=r()(function*(d){try{return yield Object(Xe.postToServer)({url:"/domains/dashboard/validate/custom",data:{value:d}})}catch(g){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:g}),null}}),Ya.apply(this,arguments)}const Ao="www";function Bc(d,g){if(g<0)return Ao;const E=d.substring(0,g);return E.indexOf(".")<0?Ao:E.substring(0,E.lastIndexOf("."))}function wc(d){return Qa.apply(this,arguments)}function Qa(){return Qa=r()(function*(d){try{let g=d;if(!RegExp("^(http|https)://","i").test(g)){g="http://"+g;let D=new URL(g).hostname;const B=yield Object(Xe.getFromServer)({url:`/utils/geturlsuffix?url=${D}`});if(B.value){const V=B.value;D.startsWith(Ao+".")&&(D=D.substring(Ao.length+1));const K=D.lastIndexOf(V);return Bc(D,K)}}}catch(g){yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:g})}return Ao}),Qa.apply(this,arguments)}var Jn=t("P8Th"),Fc=function(d){const[g,E]=Object(s.useState)(null),{blockUI:D,unblockUI:B}=Object(Jn.b)(),V=function(){var K=r()(function*(){var tt;D();const _=yield Ac();if(B(),E(_),_===null){d(Pt.ERROR);return}if(_!=null&&(tt=_.customDashboardDomainData)!==null&&tt!==void 0&&tt.customDomain){d(Pt.SUCCESS);return}d(Pt.DEFAULT)});return function(){return K.apply(this,arguments)}}();return Object(s.useEffect)(()=>{V()},[]),{getData:V,domainsData:g,setDomainsData:E}},Mo=t("L2to");const bo={NOT_CORRECTLY_REDIRECTED:"EditorDomainNotCorrectlyRedirected",DOMAIN_ALREADY_IN_USE:"DOMAIN_ALREADY_IN_USE",SUBDOMAIN_ALREADY_IN_USE:"SubDomainAlreadyInUse",INVALID_DOMAIN_FORMAT:"INVALID_DOMAIN_FORMAT",INVALID_INPUT:"InvalidInput"};function Uc({domainsData:d,setCurrentStep:g,setDomainTakenError:E,setDomainInputError:D,setInvalidDomainFormatError:B,setDomain:V,setDomainsData:K,domain:tt}){const _=Object(s.useCallback)(()=>{g(Pt.DEFAULT_DOMAIN_UPDATE),V(d.defaultDashboardDomainData.defaultSubdomain)},[d,g,V]),bt=Object(s.useCallback)(({target:{value:Dt}})=>{V(Dt),E(!1),D(Object(Mo.d)(Dt))},[V,D,E]),Tt=Object(s.useCallback)(function(){var Dt=r()(function*({redirectToNewDomain:$t=!1}={}){const xe=`${tt}.${d.defaultDashboardDomainData.defaultDomains[0]}`,Te=yield cr(xe);if(Te.error_code===bo.SUBDOMAIN_ALREADY_IN_USE){E(!0);return}if(Te.error_code===bo.INVALID_INPUT){B();return}if(Object(Nt.a)(Xn.PLATFORM_DOMAIN_DEFAULT_SAVE),$t){window.location.href=`http://${xe}`;return}g(Pt.DEFAULT),K(Object.assign({},d,{defaultDashboardDomainData:Te})),V(""),Object(Ro.d)({text:Object(c.m)("dashboard.customDomain.editDefaultDomain.success")})});return function(){return Dt.apply(this,arguments)}}(),[tt,d,g,V,E,K,B]);return{onDefaultDomainEditClick:_,onDefaultDomainChange:bt,onDefaultDomainSave:Tt}}var kc=t("Puqe"),Wc=t.n(kc);function Vc({domain:d,domainsData:g,setDomain:E,setDomainsData:D,setDomainTakenError:B,setDomainInputError:V,setCurrentStep:K,setInvalidDomainFormatError:tt}){const{blockUI:_,unblockUI:bt}=Object(Jn.b)(),Tt=Object(s.useCallback)(({target:{value:he}})=>{E(he),B(!1),V(Object(Mo.a)(he))},[E,V,B]),Dt=function(){var he=r()(function*(){_();const me=yield Mc(d);me!=null&&me.customDomain&&(D(Object.assign({},g,{customDashboardDomainData:me})),K(Pt.SUCCESS),E("")),bt()});return function(){return he.apply(this,arguments)}}(),$t=function(){var he=r()(function*(){const me=Object(Mo.b)(d);if(me){V(me);return}const De=yield Lc(d);if(De!=null&&De.success){Object(Nt.a)(Xn.PLATFORM_DOMAIN_CUSTOM_NEXT),K(Pt.VALIDATE_RECORDS);return}(De==null?void 0:De.failurePayload)===bo.DOMAIN_ALREADY_IN_USE&&B(!0),De.failurePayload===bo.INVALID_DOMAIN_FORMAT&&tt()});return function(){return he.apply(this,arguments)}}(),xe=function(){var he=r()(function*({redirectToNewDomain:me=!1}={}){const{defaultDashboardDomainData:{defaultSubdomain:De,defaultDomains:Ze}}=g;Object(Nt.a)(Xn.PLATFORM_DOMAIN_REVERT_TO_DEFAULT_CONFIRM);const dn=`${De}.${Ze[0]}`,un=yield cr(dn);if(un.defaultSubdomain){if(me){window.location.href=`http://${dn}`;return}K(Pt.DEFAULT),D(Object.assign({},Wc()(g,"customDashboardDomainData"),{defaultDashboardDomainData:Object.assign({},un)}))}});return function(){return he.apply(this,arguments)}}(),Te=()=>{E(g.customDashboardDomainData.customDomain),K(Pt.DOMAIN_SETUP)},Ve=Object(s.useCallback)(()=>{Object(Nt.a)(Xn.PLATFORM_DOMAIN_CONNECTED_CHECK_RECORDS),E(g.customDashboardDomainData.customDomain),K(Pt.VALIDATE_RECORDS)},[g,K,E]);return{onDomainValidate:$t,onDomainSave:Dt,onDomainChangeClick:Te,onDomainChange:Tt,onDomainRevert:xe,onCheckRecordsClick:Ve}}const dr=Object(s.createContext)();function Hc({children:d}){const[g,E]=Object(s.useState)(Pt.DEFAULT),[D,B]=Object(s.useState)(""),[V,K]=Object(s.useState)(null),[tt,_]=Object(s.useState)(!1),bt=()=>{K(Object(c.m)("ui.ed.dashboard.customDomain.invalidDomainFormat"))},{getData:Tt,domainsData:Dt,setDomainsData:$t}=Fc(E),{onDomainValidate:xe,onDomainSave:Te,onDomainChange:Ve,onDomainRevert:he,onCheckRecordsClick:me,onDomainChangeClick:De}=Vc({domain:D,domainsData:Dt,setDomain:B,setDomainTakenError:_,setDomainInputError:K,setCurrentStep:E,setDomainsData:$t,setInvalidDomainFormatError:bt}),{onDefaultDomainEditClick:Ze,onDefaultDomainChange:dn,onDefaultDomainSave:un}=Uc({domainsData:Dt,setCurrentStep:E,setDomainTakenError:_,setDomainInputError:K,setDomain:B,setDomainsData:$t,domain:D,setInvalidDomainFormatError:bt}),Gn=Object(s.useCallback)(()=>{var _n;B(""),K(null),_(!1),(_n=Dt.customDashboardDomainData)!==null&&_n!==void 0&&_n.customDomain?E(Pt.SUCCESS):E(Pt.DEFAULT)},[Dt]),mo=Object(s.useMemo)(()=>({domainsData:Dt,domain:D,currentStep:g,domainInputError:V,domainTakenError:tt,onCancel:Gn,setCurrentStep:E,onDefaultDomainEditClick:Ze,onDefaultDomainChange:dn,onDomainChange:Ve,getData:Tt,onDomainSave:Te,onDomainRevert:he,onDomainValidate:xe,onDomainChangeClick:De,onDefaultDomainSave:un,onCheckRecordsClick:me}),[Dt,D,g,V,tt,Gn,Ze,dn,Ve,Tt,Te,he,xe,De,un,me]);return Object(n.jsx)(dr.Provider,{value:mo,children:d})}function Pn(){const d=Object(s.useContext)(dr);if(!d)throw new Error("useDashboardDomainContext must be used within a DashboardDomainProvider");return d}var Gc=t("uaoL"),ur=t.n(Gc),pr=t("c01f");function zc(){const{domainsData:{defaultDashboardDomainData:{defaultSubdomain:d,defaultDomains:g}},setCurrentStep:E,onDefaultDomainEditClick:D}=Pn(),B=()=>{Object(Nt.a)(Xn.PLATFORM_DOMAIN_CUSTOM_START),E(Pt.DOMAIN_SETUP)},V=()=>{Object(Nt.a)(Xn.PLATFORM_DOMAIN_DEFAULT_EDIT_START),D()},K=`${d}.${g[0]}`;return Object(n.jsx)(pr.a,{connectMessage:Object(c.m)("dashboard.customDomain.fullyCustomDomain"),domain:K,onEditClick:V,onConnectClick:B})}var Kc=zc,Yc=t("yftf"),la=t.n(Yc),Qc=t("Fbre"),Xa=t.n(Qc),Xc=t("HUOM"),ca=t.n(Xc);function Jc(){const{domain:d,domainInputError:g,onDomainChange:E}=Pn(),D=Object(s.useRef)(null);return Object(s.useEffect)(()=>{D.current.focus()},[]),Object(n.jsxs)("div",{className:ca.a["input-wrapper"],children:[Object(n.jsx)(la.a,{ref:D,value:d,className:ln()(ca.a.input,{[ca.a["with-error"]]:g}),onChange:E}),g&&Object(n.jsx)(Xa.a,{className:ca.a["error-message"],text:g})]})}var Zc=Jc,$c=t("O/yO"),mr=t.n($c),qc=t("hzps"),Zn=t.n(qc),_c=t("8xT2"),fr=t.n(_c);function hr({title:d,description:g}){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Zn.a,{className:fr.a.title,children:d}),Object(n.jsx)(Zn.a,{className:fr.a.description,children:g})]})}hr.propTypes={title:Object(Kt.oneOfType)([Kt.string,Kt.node]),description:Object(Kt.oneOfType)([Kt.string,Kt.node])};var Ja=hr,td=t("1FgX"),ed=t.n(td),Lo=t("G6Oi"),br=t.n(Lo);function gr({className:d,domainTakenError:g}){return g?Object(n.jsx)("div",{className:ln()(d,ed.a.message),children:Object(n.jsx)(br.a,{grayBackground:!0,type:Lo.MESSAGE_TYPE.INLINE,alertType:Lo.ALERT_TYPE.ERROR,text:Object(c.m)("dashboard.customDomain.domainAlreadyTaken")})}):null}gr.propTypes={className:ie.a.string,domainTakenError:ie.a.bool.isRequired};var Za=gr;function vr({show:d,className:g}){return d?Object(n.jsx)(br.a,{className:g,grayBackground:!0,type:Lo.MESSAGE_TYPE.INLINE,alertType:Lo.ALERT_TYPE.WARNING,text:Object(c.m)("ui.ed.dashboard.customDomain.defaultSubdomain.withClients.message")}):null}vr.propTypes={show:ie.a.bool.isRequired,className:ie.a.string};var xr=vr;const nd=()=>Object(n.jsx)("div",{className:mr.a.description,children:Object(c.k)(Object(c.m)("dashboard.customDomain.dashboardDomain.domainStep.description"))});function od(){const{domainTakenError:d,domainsData:{hasClients:g,customDashboardDomainData:E}}=Pn();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ja,{title:Object(c.m)("dashboard.customDomain.dashboardDomain.domainStep.title"),description:nd()}),Object(n.jsx)(Zc,{}),Object(n.jsx)(Za,{domainTakenError:d}),Object(n.jsx)(xr,{show:!d&&g&&(E==null?void 0:E.customDomain),className:mr.a.message})]})}var ad=od,Or=t("LUOU"),id=t.n(Or),$a=t("2imF"),yr=t.n($a),rd=t("cUkE"),sd=t.n(rd);function Sr({onClick:d}){return Object(n.jsx)(yr.a,{className:sd.a["help-icon"],name:"question-mark",size:16,iconType:$a.Type.SVG,onClick:d})}Sr.propTypes={onClick:ie.a.func};var ld=Sr,cd=t("XOti"),Er=t.n(cd),dd=t("nMFI"),Bo=t.n(dd),Cr=t("mtDC");const jr=ie.a.shape({type:ie.a.string,name:ie.a.string,value:ie.a.string,onRecordsCopy:ie.a.func}),Pr={data:jr},ud=[{headerName:Object(c.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.type"),field:"type",cellClass:Bo.a.cell,width:78},{headerName:Object(c.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.name"),field:"name",cellRendererFramework:Object.assign(({data:{name:d,onRecordsCopy:g}})=>Object(n.jsx)(Cr.a,{text:d,onCopy:g,successText:Object(c.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.copied.name")}),{propTypes:Pr}),cellClass:Bo.a.cell,width:150},{headerName:Object(c.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.value"),field:"value",cellRendererFramework:Object.assign(({data:{value:d,onRecordsCopy:g}})=>Object(n.jsx)(Cr.a,{text:d,onCopy:g,successText:Object(c.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.copied.value")}),{propTypes:Pr}),cellClass:Bo.a.cell}];function Tr({rowData:d}){return Object(n.jsx)(Er.a,{className:Bo.a.table,columnDefs:ud,rowData:d,rowClass:Bo.a.row,domLayout:"autoHeight",defaultColDef:{resizable:!0,suppressMovable:!0}})}Tr.propTypes={rowData:ie.a.arrayOf(jr)};var pd=Tr,md=t("Nzke"),Dr=t.n(md),da=t("EAKQ");function Ir({domain:d,description:g,title:E,rowData:D}){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(id.a,{className:Dr.a.status,text:d,type:Or.StatusType.NEUTRAL}),Object(n.jsx)(Ja,{title:Object(n.jsxs)("div",{className:Dr.a.title,children:[E,Object(n.jsx)(ld,{onClick:()=>{Object(da.a)("specific_domain_hosts")}})]}),description:g}),Object(n.jsx)(pd,{rowData:D})]})}Ir.propTypes={domain:ie.a.string,description:ie.a.string,title:ie.a.string,rowData:ie.a.array};var Nr=Ir;function fd(){const[d,g]=Object(s.useState)(""),{domain:E}=Pn();return Object(s.useEffect)(()=>{r()(function*(){const D=yield wc(E);g(D)})()},[E]),Object(n.jsx)(Nr,{domain:E,title:Object(c.m)("dashboard.customDomain.dashboardDomain.recordsStep.title"),description:Object(c.m)("dashboard.customDomain.dashboardDomain.recordsStep.description"),rowData:[{type:"CNAME",name:d,value:S.a.get("editorUrl.cname.destination"),onRecordsCopy:()=>Object(Nt.a)(Xn.PLATFORM_DOMAIN_CUSTOM_COPY_RECORD)}]})}var hd=fd,Rr=t("Mjr1"),ua=t("KhK4"),bd=t.n(ua),gd=t("eQ0C"),qa=t.n(gd),Ar=t("5Fiw");const vd=d=>{switch(d){case Ha.DEPLOYED:return{status:ua.ValidationStatusType.SUCCESS,label:Object(c.m)("dashboard.customDomain.ssl.approved")};case Ha.REJECTED:return{status:ua.ValidationStatusType.ERROR,label:Object(c.m)("dashboard.customDomain.ssl.notAvailable")};case Ha.PENDING:return{status:ua.ValidationStatusType.PENDING,label:Object(c.m)("dashboard.customDomain.ssl.pending")};default:return null}};function xd(){const{onCheckRecordsClick:d,domainsData:{defaultDashboardDomainData:{defaultSubdomain:g,defaultDomains:E},customDashboardDomainData:{customDomain:D,pointingToDuda:B,sslStatus:V,timeLeftToValidationInMilliseconds:K=0}={}}}=Pn(),tt=vd(V),_=Object(Ar.a)(Date.now()+K),bt=!B&&!!K&&Object(c.k)(Object(c.m)("dashboard.customDomain.dashboardDomain.pendingMessage",{date:_,domain:`${g}.${E[0]}`})),Tt=!B&&!K?Object(c.m)("dashboard.customDomain.dashboardDomain.unableToValidate"):null;return Object(n.jsxs)("div",{className:qa.a["success-card"],children:[Object(n.jsx)(Rr.a,{success:!0,domain:D,subtitle:B?Object(c.m)("dashboard.customDomain.dashboardDomain.allSet"):"",onCheckRecordsClick:d,inlineMessageText:bt,errorMessageText:Tt}),B&&V&&tt&&Object(n.jsxs)("div",{className:qa.a["ssl-status"],children:[Object(n.jsx)(Zn.a,{inline:!0,noPadding:!0,className:qa.a.label,children:Object(c.m)("dashboard.customDomain.sslCertificateStatus")}),Object(n.jsx)(bd.a,{status:tt.status,children:tt.label})]})]})}var Od=xd,yd=t("nN2g"),wo=t.n(yd);function Sd(){const{domain:d,domainsData:{defaultDashboardDomainData:{defaultDomains:g}},domainInputError:E,onDefaultDomainChange:D}=Pn(),B=Object(s.useRef)(null);return Object(s.useEffect)(()=>{B.current.focus()},[]),Object(n.jsxs)("div",{className:wo.a["domain-input"],children:[Object(n.jsx)(la.a,{ref:B,className:ln()(wo.a["sub-domain-input"],{[wo.a["with-error"]]:E}),value:d,onChange:D}),E&&Object(n.jsx)(Xa.a,{className:wo.a["error-message"],text:E}),Object(n.jsx)("div",{className:wo.a["domain-part"],children:g[0]})]})}var Ed=Sd,Cd=t("Of9q"),Mr=t.n(Cd);function jd(){const{domainTakenError:d,domainsData:{hasClients:g}}=Pn();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Ja,{title:Object(c.m)("dashboard.customDomain.defaultDomain.edit.title"),description:Object(c.m)("dashboard.customDomain.defaultDomain.edit.description")}),Object(n.jsx)(Ed,{}),Object(n.jsx)(Za,{className:Mr.a.message,domainTakenError:d}),Object(n.jsx)(xr,{show:!d&&g,className:Mr.a.message})]})}var Pd=jd;function Td(){return window.brandingColors["logo-url"]}function Dd(){return Td()}var Lr=()=>{const{currentStep:d}=Pn(),[g,E]=Object(s.useState)(!1),B=!!Dd()&&[Pt.DEFAULT_DOMAIN_UPDATE,Pt.SUCCESS].includes(d);return{showWLPopup:g,onOpenWLPopup:()=>E(!0),onCloseWLPopup:()=>E(!1),useWLPopup:B}},Id=t("FDPp"),ee=t.n(Id);function Br({onClose:d,onConfirm:g,show:E}){return Object(n.jsx)(ee.a,{show:E,children:E&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(ee.a.Header,{children:[Object(n.jsx)(ee.a.Title,{children:Object(c.m)("dashboard.dashboard.customDomain.wl.popup.title")}),Object(n.jsx)(ee.a.CloseButton,{onClick:d})]}),Object(n.jsx)(ee.a.Body,{children:Object(n.jsx)(vt.a,{children:Object(c.m)("dashboard.dashboard.customDomain.wl.popup.message")})}),Object(n.jsx)(ee.a.Actions,{children:Object(n.jsxs)(ee.a.ConfirmationActions,{children:[Object(n.jsx)(ee.a.ConfirmationActions.Button,{type:"secondary",variant:"grey",height:"32px",onClick:d,children:Object(c.m)("ui.cancel")}),Object(n.jsx)(ee.a.ConfirmationActions.Button,{primary:!0,height:"32px",onClick:g,children:Object(c.m)("dashboard.dashboard.customDomain.wl.popup.refresh")})]})})]})})}Br.propTypes={show:ie.a.bool.isRequired,onConfirm:ie.a.func.isRequired,onClose:ie.a.func.isRequired};var wr=Br,Nd=t("C5xZ"),Rd=t.n(Nd);function Fr({currentStep:d}){return Object(n.jsx)(Rd.a,{isNumerical:!0,steps:Ic,currentStep:[Pt.DOMAIN_SETUP,Pt.VALIDATE_RECORDS].indexOf(d)})}Fr.propTypes={currentStep:Kt.string};var Ad=Fr,Md=t("VQpA"),Ld=t("w89+"),Bd=t.n(Ld);function Ur({show:d,onClose:g,revertToDomain:E,onRevert:D,text:B}){return Object(n.jsxs)(ee.a,{show:d,onClose:g,children:[Object(n.jsxs)(ee.a.Header,{children:[Object(n.jsx)(ee.a.Title,{children:Object(c.m)("dashboard.customDomain.revertToDefault.popup.title")}),Object(n.jsx)(ee.a.CloseButton,{onClick:g})]}),Object(n.jsxs)(ee.a.Body,{children:[Object(n.jsx)(vt.a,{children:B}),Object(n.jsx)(vt.a,{variant:"bodySubtitle",className:Bd.a.domain,children:E})]}),Object(n.jsx)(ee.a.Actions,{children:Object(n.jsxs)(ee.a.ConfirmationActions,{children:[Object(n.jsx)(ee.a.ConfirmationActions.Button,{type:"secondary",variant:"grey",height:"32px",onClick:g,children:Object(c.m)("ui.cancel")}),Object(n.jsx)(ee.a.ConfirmationActions.Button,{primary:!0,variant:"destructive",height:"32px",onClick:D,children:Object(c.m)("dashboard.customDomain.switchToDefault")})]})})]})}Ur.propTypes={onClose:ie.a.func.isRequired,onRevert:ie.a.func.isRequired,revertToDomain:ie.a.string.isRequired,show:ie.a.bool.isRequired,text:ie.a.string.isRequired};var wd=Ur;function kr({currentStep:d,revertToDomain:g,onRevert:E,onEdit:D,revertText:B}){const[V,K]=Object(s.useState)(!1);if([Pt.VALIDATE_RECORDS,Pt.DOMAIN_SETUP].includes(d))return Object(n.jsx)(Ad,{currentStep:d});const tt=()=>{K(!1)};return d===Pt.SUCCESS?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Md.a,{editAction:{onClick:D},revertAction:{onClick:()=>{K(!0)}}}),Object(n.jsx)(wd,{revertToDomain:g,text:B,onRevert:()=>{tt(),E()},show:V,onClose:tt})]}):null}kr.propTypes={currentStep:Kt.string,revertText:Kt.string,revertToDomain:Kt.string,onRevert:Kt.func,onEdit:Kt.func};var Wr=kr;function Fd(){const{domainsData:d,currentStep:g,onDomainChangeClick:E,onDomainRevert:D}=Pn(),{useWLPopup:B,showWLPopup:V,onOpenWLPopup:K,onCloseWLPopup:tt}=Lr();if(!d)return null;const{defaultDashboardDomainData:_}=d,bt=()=>{if(B){K();return}D()};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Wr,{revertToDomain:`${_==null?void 0:_.defaultSubdomain}.${_==null?void 0:_.defaultDomains[0]}`,onRevert:bt,onEdit:E,currentStep:g,revertText:Object(c.m)("dashboard.customDomain.revertToDefault.popup.message")}),B&&Object(n.jsx)(wr,{show:V,onConfirm:()=>D({redirectToNewDomain:!0}),onClose:tt})]})}var Ud=Fd,Vr=t("lutX"),kd=t("yncJ"),pa=t.n(kd),Wd=t("9Pyt"),Hr=t.n(Wd),Vd=t("M4Wz"),ma=t.n(Vd);function Hd(){const{domain:d,domainInputError:g,domainTakenError:E,currentStep:D,onDomainSave:B,onDomainValidate:V,onDefaultDomainSave:K,onCancel:tt,setCurrentStep:_,domainsData:bt}=Pn(),{showWLPopup:Tt,onOpenWLPopup:Dt,onCloseWLPopup:$t,useWLPopup:xe}=Lr(),Te=()=>{_(Pt.DOMAIN_SETUP)},Ve=()=>{if(D===Pt.DOMAIN_SETUP){V();return}if(D===Pt.DEFAULT_DOMAIN_UPDATE){if(xe){Dt();return}K();return}D===Pt.VALIDATE_RECORDS&&(Object(Nt.a)(Xn.PLATFORM_DOMAIN_CUSTOM_SAVE),B())},he=()=>{if([Pt.DOMAIN_SETUP,Pt.DEFAULT_DOMAIN_UPDATE].includes(D)){var De,Ze;return!!g||!!E||!!(bt!=null&&(De=bt.customDashboardDomainData)!==null&&De!==void 0&&De.customDomain)&&(bt==null||(Ze=bt.customDashboardDomainData)===null||Ze===void 0?void 0:Ze.customDomain)===d}return!1},me=()=>D===Pt.DEFAULT_DOMAIN_UPDATE?Object(c.m)("ui.save"):D===Pt.DOMAIN_SETUP?Object(c.m)("dashboard.customDomain.next"):D===Pt.VALIDATE_RECORDS?Object(c.m)("ui.save"):null;return Object(n.jsxs)("div",{className:pa.a["footer-buttons"],children:[Object(n.jsx)("div",{className:pa.a["left-group"],children:D===Pt.VALIDATE_RECORDS&&Object(n.jsx)(ma.a,{secondary:!0,type:"text",size:"small",variant:"grey",startIconProps:{name:"arrow-left-short"},text:Object(c.m)("ui.back"),onClick:Te})}),Object(n.jsxs)("div",{className:pa.a["right-group"],children:[Object(n.jsx)(ma.a,{"data-auto":"footer-cancel-button",type:"text",size:"small",variant:"grey",onClick:tt,text:Object(c.m)("ui.cancel")}),Object(n.jsx)(Hr.a,{small:!0,disabled:he(),className:pa.a["primary-button"],text:me(),onClick:Ve})]}),xe&&Object(n.jsx)(wr,{show:Tt,onClose:$t,onConfirm:()=>K({redirectToNewDomain:!0})})]})}var Gd=Hd,Gr=t("EcLS"),zd=t("AMj6"),zr=t.n(zd),Kr=t("Jwdp"),Kd=Object(s.forwardRef)((d,g)=>{const{currentStep:E,getData:D,domainsData:B={}}=Pn(),V=()=>{switch(E){case Pt.DOMAIN_SETUP:return Object(n.jsx)(ad,{});case Pt.VALIDATE_RECORDS:return Object(n.jsx)(hd,{});case Pt.DEFAULT_DOMAIN_UPDATE:return Object(n.jsx)(Pd,{});case Pt.SUCCESS:return Object(n.jsx)(Od,{});case Pt.ERROR:return Object(n.jsx)(Kr.a,{onRefresh:D});case Pt.DEFAULT:default:return Object(n.jsx)(Kc,{})}};return!B&&E!==Pt.ERROR?null:Object(n.jsx)(Gr.a,{ref:g,children:Object(n.jsx)(ur.a,{className:zr.a["dashboard-domain"],title:Object(n.jsx)(Vr.a,{helpCenterArticleId:"configure_platform_domain",tooltipId:"dashboard",title:Object(c.m)("dashboard.customDomain.dashboardCard.title"),toolTip:Object(c.m)("dashboard.customDomain.dashboardCard.infoTooltip")}),headerRightContent:Object(n.jsx)(Ud,{}),footer:sr.includes(E)?null:Object(n.jsx)(Gd,{}),contentClass:zr.a["card-content"],children:V()})})}),Yd=Object(s.forwardRef)((d,g)=>Object(n.jsx)(Hc,{children:Object(n.jsx)(Kd,{ref:g})}));function _a(){return ti.apply(this,arguments)}function ti(){return ti=r()(function*(){try{return yield Object(Xe.getFromServer)({url:"/domains/livesites"})}catch(d){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:d}),null}}),ti.apply(this,arguments)}function Qd(d){return ei.apply(this,arguments)}function ei(){return ei=r()(function*(d){try{return yield Object(Xe.putToServer)({url:"/domains/livesites/default",data:{updatePublishedSitesDomain:d}})}catch(g){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:g}),Object(Ro.c)(),null}}),ei.apply(this,arguments)}function Xd(d){return ni.apply(this,arguments)}function ni(){return ni=r()(function*({customDomain:d,updatePublishedSitesDomain:g}){try{return yield Object(Xe.putToServer)({url:"/domains/livesites/custom",data:{customDomain:d,updatePublishedSitesDomain:g}})}catch(E){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:E}),Object(Ro.c)(),null}}),ni.apply(this,arguments)}function Jd(d){return oi.apply(this,arguments)}function oi(){return oi=r()(function*(d){try{return yield Object(Xe.postToServer)({url:"/domains/livesites/validate/custom",data:{customDomain:d}})}catch(g){return yield Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:g}),Object(Ro.c)(),null}}),oi.apply(this,arguments)}const Yr=Object(s.createContext)();function Zd({children:d}){const{blockUI:g,unblockUI:E}=Object(Jn.b)(),[D,B]=Object(s.useState)(Pt.DEFAULT),[V,K]=Object(s.useState)(null),[tt,_]=Object(s.useState)(!1),[bt,Tt]=Object(s.useState)(""),[Dt,$t]=Object(s.useState)(null),[xe,Te]=Object(s.useState)([]),Ve=()=>{K(Object(c.m)("ui.ed.dashboard.customDomain.invalidDomainFormat"))},he=Object(s.useCallback)(()=>{Tt(""),K(null),_(!1),B(Pt.DEFAULT)},[]),me=Object(s.useCallback)(r()(function*(){g();const en=yield _a();if(E(),en===null){B(Pt.ERROR);return}en&&($t(en),en.customDomain?B(Pt.SUCCESS):B(Pt.DEFAULT))}),[]);Object(s.useEffect)(()=>{me()},[]);const De=Object(s.useCallback)(({target:{value:en}})=>{Tt(en),_(!1),K(Object(Mo.a)(en))},[]),Ze=Object(s.useCallback)(r()(function*(){const en=Object(Mo.b)(bt);if(en){K(en);return}const pn=yield Jd(bt);pn!=null&&pn.success&&(Object(Nt.a)(Hn.SITE_DOMAIN_CUSTOM_NEXT),B(Pt.VALIDATE_RECORDS)),(pn==null?void 0:pn.failurePayload)===bo.DOMAIN_ALREADY_IN_USE&&_(!0),(pn==null?void 0:pn.failurePayload)===bo.INVALID_DOMAIN_FORMAT&&Ve()}),[bt]),dn=Object(s.useCallback)(function(){var en=r()(function*(pn=!1){g();const fo=yield Xd({customDomain:bt,updatePublishedSitesDomain:pn});if(fo.listOfSitesFailedToUpdate){const Di=yield _a();$t(Di),B(Pt.SUCCESS),fo.listOfSitesFailedToUpdate.length&&Te(fo.listOfSitesFailedToUpdate)}E()});return function(){return en.apply(this,arguments)}}(),[g,bt,E]),un=Object(s.useCallback)(()=>{Object(Nt.a)(Hn.SITE_DOMAIN_CONNECTED_CHECK_RECORDS),Tt(Dt.customDomain),B(Pt.VALIDATE_RECORDS)},[Dt]),Gn=Object(s.useCallback)(function(){var en=r()(function*(pn=!1){g(),Object(Nt.a)(Hn.SITE_DOMAIN_REVERT_TO_DEFAULT_CONFIRM);const fo=yield Qd(pn);if(fo.listOfSitesFailedToUpdate){he();const Di=yield _a();$t(Di),fo.listOfSitesFailedToUpdate.length&&Te(fo.listOfSitesFailedToUpdate)}E()});return function(){return en.apply(this,arguments)}}(),[g,he,E]),mo=Object(s.useCallback)(()=>{Dt.customDomain?B(Pt.SUCCESS):he()},[Dt,he]),_n=Object(s.useCallback)(()=>{B(Pt.DOMAIN_SETUP),Tt(Dt.customDomain)},[Dt]),xo=Object(s.useMemo)(()=>({domain:bt,domainInputError:V,domainTakenError:tt,domainData:Dt,currentStep:D,getData:me,onCancel:mo,onDomainValidate:Ze,onDomainChange:De,onDomainSave:dn,onRevertToDefault:Gn,onCheckRecordsClick:un,onDomainChangeClick:_n,setCurrentStep:B,sitesFailedToUpdate:xe,setSitesFailedToUpdate:Te}),[bt,V,tt,Dt,D,me,mo,Ze,De,dn,Gn,un,_n,xe]);return Object(n.jsx)(Yr.Provider,{value:xo,children:d})}function Tn(){const d=Object(s.useContext)(Yr);if(!d)throw new Error("useSitesDomainContext must be used within a SitesDomainProvider");return d}function $d(){const{setCurrentStep:d,domainData:{defaultDomain:g}}=Tn(),E=()=>{Object(Nt.a)(Hn.SITE_DOMAIN_CUSTOM_START,{referral:"start"}),d(Pt.DOMAIN_SETUP)};return Object(n.jsx)(pr.a,{connectMessage:Object(c.m)("dashboard.customDomain.sitesDomain.brandTheDefault"),domain:`{sitename}.${g}`,onConnectClick:E})}var qd=$d,_d=t("O9di"),lo=t.n(_d);function tu(){const{domain:d,domainInputError:g,onDomainChange:E}=Tn(),D=Object(s.useRef)(null);return Object(s.useEffect)(()=>{D.current.focus()},[]),Object(n.jsxs)("div",{className:lo.a["input-wrapper"],children:[Object(n.jsx)(la.a,{disabled:!0,value:"{sitename}",className:ln()(lo.a["disabled-input"],lo.a.input)}),Object(n.jsx)("div",{className:lo.a["dot-divider"],children:"."}),Object(n.jsx)(la.a,{ref:D,value:d,className:ln()(lo.a.input,{[lo.a["with-error"]]:g}),onChange:E}),g&&Object(n.jsx)(Xa.a,{className:lo.a["error-message"],text:g})]})}var eu=tu,nu=t("iGgY"),ou=t.n(nu);function au(){const{domainTakenError:d=!0}=Tn();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:ou.a.label,children:Object(c.m)("ui.ed.dashboard.customDomain.sites.enterOwnSubdomain")}),Object(n.jsx)(eu,{}),Object(n.jsx)(Za,{domainTakenError:d})]})}var iu=au;function ru(){const{domain:d}=Tn();return Object(n.jsx)(Nr,{domain:`{sitename}.${d}`,title:Object(c.m)("dashboard.customDomain.sitesDomain.addDnsRecords"),description:Object(c.m)("dashboard.customDomain.sitesDomain.validateRecords.description"),rowData:[{type:"CNAME",name:"*",value:S.a.get("runtimeUrl.dudaone.cname.destination"),onRecordsCopy:()=>{Object(Nt.a)(Hn.SITE_DOMAIN_CUSTOM_COPY_RECORD)}}]})}var su=ru,lu=t("tfsG"),cu=t.n(lu);function du(){const{domainData:{customDomain:d,timeLeftToValidationInMilliseconds:g,pointingToDuda:E},onCheckRecordsClick:D}=Tn(),B=Object(Ar.a)(Date.now()+g),V=!E&&g>0?Object(c.k)(Object(c.m)("dashboard.customDomain.sitesDomain.pendingMessage",{date:B})):null,K=!E&&g<=0?Object(c.m)("dashboard.customDomain.dashboardDomain.unableToValidate"):null;return Object(n.jsx)("div",{className:cu.a.wrapper,children:Object(n.jsx)(Rr.a,{success:!0,domain:`{sitename}.${d}`,subtitle:Object(c.m)("dashboard.customDomain.sitesDomain.success.message"),errorMessageText:K,inlineMessageText:V,onCheckRecordsClick:D})})}var uu=du,pu=t("GUAn"),Qr=t.n(pu),mu=t("IGE0"),fa=t.n(mu);function Xr(){const{currentStep:d,domainData:g}=Tn(),[E,D]=Object(s.useState)(!1),[B,V]=Object(s.useState)(!1),K=(g==null?void 0:g.customDomain)&&d===Pt.VALIDATE_RECORDS,tt=()=>D(!0),_=()=>D(!1),bt=(g==null?void 0:g.hasPublishedSitesWithoutSpecificDomain)&&d===Pt.VALIDATE_RECORDS;return{useNoSitesChangePopup:K,showNoSitesChangeDomainPopup:E,onShowNoSitesChangeDomainPopup:tt,onCloseNoSitesChangeDomainPopup:_,useWithSitesChangePopup:bt,showWithSitesChangeDomainPopup:B,onShowWithSitesChangeDomainPopup:()=>V(!0),onCloseWithSitesChangeDomainPopup:()=>V(!1)}}function Jr({show:d,onClose:g,onConfirm:E}){const{domain:D}=Tn();return Object(n.jsxs)(ee.a,{show:d,children:[Object(n.jsxs)(ee.a.Header,{children:[Object(n.jsx)(ee.a.Title,{children:Object(c.m)("dashboard.customDomain.dashboardDomain.changeDomain.popup.title")}),Object(n.jsx)(ee.a.CloseButton,{onClick:g})]}),Object(n.jsx)(ee.a.Body,{children:Object(n.jsx)(vt.a,{children:Object(c.k)(Object(c.m)("dashboard.customDomain.sitesDomain.changeDomain.popup.message",{domain:`{new domain}.${D}`}))})}),Object(n.jsx)(ee.a.Actions,{children:Object(n.jsxs)(ee.a.ConfirmationActions,{children:[Object(n.jsx)(ee.a.ConfirmationActions.Button,{type:"secondary",variant:"grey",height:"32px",onClick:g,children:Object(c.m)("ui.cancel")}),Object(n.jsx)(ee.a.ConfirmationActions.Button,{primary:!0,variant:"destructive",height:"32px",onClick:E,children:Object(c.m)("dashboard.customDomain.dashboardDomain.changeDomain.popup.continue")})]})})]})}Jr.propTypes={onClose:ie.a.func.isRequired,onConfirm:ie.a.func.isRequired,show:ie.a.bool.isRequired};var fu=Jr,hu=t("cbSK"),bu=t.n(hu),gu=t("8eRL"),Fo=t.n(gu);const vu=[{label:Object(c.m)("dashboard.customDomain.sitesDomain.domainWithSites.changePopup.no"),value:!1},{label:Object(c.m)("dashboard.customDomain.sitesDomain.domainWithSites.changePopup.yes"),value:!0}];function Zr({show:d,onClose:g,onDomainSave:E,currentDomain:D,newDomain:B}){const[V,K]=Object(s.useState)(!1),tt=()=>{Object(Nt.a)(Hn.SITE_DOMAIN_PUBLISHED_SITES_ALERT_CONTINUE,{selection:V?"yes, change domain":"no, keep domain"}),E(V)};return Object(n.jsxs)(ee.a,{show:d,children:[Object(n.jsxs)(ee.a.Header,{children:[Object(n.jsx)(ee.a.Title,{children:Object(c.m)("dashboard.customDomain.dashboardDomain.changeDomain.popup.title")}),Object(n.jsx)(ee.a.CloseButton,{onClick:g})]}),Object(n.jsxs)(ee.a.Body,{children:[Object(n.jsx)(vt.a,{className:Fo.a["message-line"],children:Object(c.k)(Object(c.m)("dashboard.customDomain.sitesDomain.domainWithSites.changePopup.currentMessage",{domain:`<span class='${Fo.a["current-domain"]}'>{existing domain}.${D}</span>`}))}),Object(n.jsx)(vt.a,{children:Object(c.m)("dashboard.customDomain.sitesDomain.domainWithSites.changePopup.switchToNew")}),Object(n.jsx)(vt.a,{variant:"bodySubtitle",className:Fo.a["message-line"],children:`{new domain}.${B}`}),Object(n.jsx)(bu.a,{selectedValue:V,optionsGroupClassName:Fo.a["radio-buttons"],optionClassName:Fo.a.label,options:vu,onSelect:K})]}),Object(n.jsx)(ee.a.Divider,{}),Object(n.jsx)(ee.a.Actions,{children:Object(n.jsxs)(ee.a.ConfirmationActions,{children:[Object(n.jsx)(ee.a.ConfirmationActions.Button,{type:"secondary",variant:"grey",height:"32px",onClick:g,children:Object(c.m)("ui.cancel")}),Object(n.jsx)(ee.a.ConfirmationActions.Button,{primary:!0,height:"32px",onClick:tt,children:Object(c.m)("dashboard.customDomain.dashboardDomain.changeDomain.popup.continue")})]})})]})}Zr.propTypes={onClose:ie.a.func.isRequired,onDomainSave:ie.a.func.isRequired,show:ie.a.bool.isRequired,currentDomain:ie.a.string.isRequired,newDomain:ie.a.string.isRequired};var $r=Zr;function xu(){const{domainData:{customDomain:d,defaultDomain:g,hasPublishedSitesWithoutSpecificDomain:E},domain:D,domainInputError:B,domainTakenError:V,currentStep:K,onCancel:tt,onDomainSave:_,onDomainValidate:bt,setCurrentStep:Tt}=Tn(),{useNoSitesChangePopup:Dt,showNoSitesChangeDomainPopup:$t,onShowNoSitesChangeDomainPopup:xe,onCloseNoSitesChangeDomainPopup:Te,useWithSitesChangePopup:Ve,showWithSitesChangeDomainPopup:he,onShowWithSitesChangeDomainPopup:me,onCloseWithSitesChangeDomainPopup:De}=Xr(),Ze=()=>{Tt(Pt.DOMAIN_SETUP)},dn=()=>{if(K===Pt.DOMAIN_SETUP){bt();return}if(K===Pt.VALIDATE_RECORDS){if(Dt){Object(Nt.a)(Hn.SITE_DOMAIN_CHANGE_DOMAIN_CONFIRM),xe();return}if(Ve){Object(Nt.a)(Hn.SITE_DOMAIN_PUBLISHED_SITES_ALERT_DISPLAYED),me();return}Object(Nt.a)(Hn.SITE_DOMAIN_CUSTOM_SAVE),_()}},un=()=>K===Pt.DOMAIN_SETUP?!!B||!!V||!!d&&D===d:!1,Gn=()=>K===Pt.DOMAIN_SETUP?Object(c.m)("dashboard.customDomain.next"):K===Pt.VALIDATE_RECORDS?Object(c.m)("ui.save"):null;return Object(n.jsxs)("div",{className:fa.a["footer-buttons"],children:[Object(n.jsx)("div",{className:fa.a["left-group"],children:K===Pt.VALIDATE_RECORDS&&Object(n.jsx)(ma.a,{secondary:!0,type:"text",size:"small",variant:"grey",startIconProps:{name:"arrow-left-short"},text:Object(c.m)("ui.back"),onClick:Ze})}),Object(n.jsxs)("div",{className:fa.a["right-group"],children:[Object(n.jsx)(ma.a,{"data-auto":"footer-cancel-button",type:"text",size:"small",variant:"grey",onClick:tt,text:Object(c.m)("ui.cancel")}),Object(n.jsx)(Hr.a,{small:!0,disabled:un(),className:fa.a["primary-button"],text:Gn(),onClick:dn})]}),Dt&&Object(n.jsx)(fu,{show:$t,onConfirm:E?me:_,onClose:Te}),Ve&&Object(n.jsx)($r,{currentDomain:d||g,newDomain:D,onDomainSave:_,show:he,onClose:De})]})}var Ou=xu,yu=t("e9I4"),Su=t.n(yu),Eu=t("Do56"),go=t.n(Eu);function Cu(){const{sitesFailedToUpdate:d,setSitesFailedToUpdate:g}=Tn(),E=()=>{g([])};return Object(n.jsx)(ee.a,{show:!!d.length,onClose:E,children:Object(n.jsxs)(Su.a,{onClose:E,children:[Object(n.jsx)(yr.a,{size:100,iconType:$a.Type.SVG,name:"screen_window_warning",className:go.a.icon}),Object(n.jsx)(vt.a,{className:go.a.title,variant:"h4",children:Object(c.m)("ui.ed.dashboard.customDomain.sitesDomain.siteFailedToUpdate.popup.title")}),Object(n.jsx)(vt.a,{children:Object(c.m)("ui.ed.dashboard.customDomain.sitesDomain.siteFailedToUpdate.popup.description")}),Object(n.jsx)("ul",{className:go.a["site-list"],children:d.map(({name:D,domain:B})=>Object(n.jsxs)("li",{className:go.a["site-item"],children:[Object(n.jsx)(vt.a,{variant:"bodySubtitle",className:go.a["site-item-name"],children:D}),Object(n.jsx)(vt.a,{className:go.a["site-item-url"],children:B})]},`${D}-${B}`))})]})})}var ju=Cu;function Pu(){const{currentStep:d,onRevertToDefault:g,onDomainChangeClick:E,domainData:D}=Tn(),{showWithSitesChangeDomainPopup:B,onShowWithSitesChangeDomainPopup:V,onCloseWithSitesChangeDomainPopup:K}=Xr(),tt=function(){var Dt=r()(function*(){g(),K()});return function(){return Dt.apply(this,arguments)}}();if(!D)return null;const{defaultDomain:_,customDomain:bt,hasPublishedSitesWithoutSpecificDomain:Tt}=D;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Wr,{revertToDomain:`{default domain}.${_}`,onRevert:Tt?V:g,onEdit:E,currentStep:d,revertText:Object(c.m)("ui.ed.dashboard.customDomain.sites.revertToDefault.popup.message")}),Tt&&d===Pt.SUCCESS&&Object(n.jsx)($r,{newDomain:_,currentDomain:bt,onDomainSave:tt,show:B,onClose:K})]})}var Tu=Pu,Du=Object(s.forwardRef)((d,g)=>{const{getData:E,currentStep:D,domainData:B}=Tn(),V=()=>{switch(D){case Pt.DOMAIN_SETUP:return Object(n.jsx)(iu,{});case Pt.VALIDATE_RECORDS:return Object(n.jsx)(su,{});case Pt.SUCCESS:return Object(n.jsx)(uu,{});case Pt.DEFAULT:return Object(n.jsx)(qd,{});case Pt.ERROR:return Object(n.jsx)(Kr.a,{onRefresh:E});default:return null}};return!B&&D!==Pt.ERROR?null:Object(n.jsx)(Gr.a,{ref:g,children:Object(n.jsxs)(ur.a,{className:Qr.a["sites-domain"],title:Object(n.jsx)(Vr.a,{helpCenterArticleId:"configure_sites_domain",tooltipId:"live-sites",title:Object(c.m)("dashboard.customDomain.sitesCard.title"),toolTip:Object(c.m)("dashboard.customDomain.sitesCard.infoTooltip")}),headerRightContent:Object(n.jsx)(Tu,{}),footer:sr.includes(D)?null:Object(n.jsx)(Ou,{}),contentClass:Qr.a["card-content"],children:[V(),Object(n.jsx)(ju,{})]})})}),Iu=Object(s.forwardRef)((d,g)=>Object(n.jsx)(Zd,{children:Object(n.jsx)(Du,{ref:g})})),Nu=t("pI2m"),Ru=t("8NGj"),Au=()=>{const[d,g]=Object(s.useState)(Ge.DOMAINS_PLATFORM),E={[Ge.DOMAINS]:Object(s.useRef)(null),[Ge.DOMAINS_PLATFORM]:Object(s.useRef)(null),[Ge.DOMAINS_SITES]:Object(s.useRef)(null),[Ge.DOMAINS_EMAIL]:Object(s.useRef)(null)},D=()=>{for(const V in E)if(Nc(E[V].current)){g(V);break}},B=V=>{let K=V,tt=V;tt===Ge.DOMAINS_PLATFORM&&(K=Ge.DOMAINS),tt===Ge.DOMAINS&&(tt=Ge.DOMAINS_PLATFORM),g(tt),E[K].current.scrollIntoView({behavior:"smooth"})};return Object(n.jsxs)("div",{className:so.a["custom-domain"],children:[Object(n.jsx)("div",{className:so.a["navigation-wrapper"],children:Object(n.jsx)(Dc.a,{className:so.a.navigation,selectedItem:d,onItemSelected:B,navItems:[{icon:"world",itemId:Ge.DOMAINS,title:Object(c.m)("ui.ed.dashboard.customDomain.navigation.domains"),children:[{itemId:Ge.DOMAINS_PLATFORM,title:Object(c.m)("ui.ed.dashboard.customDomain.navigation.domains.platform")},{itemId:Ge.DOMAINS_SITES,title:Object(c.m)("ui.ed.dashboard.customDomain.navigation.domains.liveSites")},{itemId:Ge.DOMAINS_EMAIL,title:Object(n.jsxs)("div",{className:so.a["with-new-label"],children:[Object(c.m)("ui.ed.dashboard.customDomain.navigation.domains.emails"),S.a.getFlag("custom.domain.new.indication.enabled",!1)&&Object(n.jsx)(vt.a,{className:so.a["new-label"],children:Object(c.m)("common.new")})]})}]}]})}),Object(n.jsx)("div",{className:so.a["outer-content-wrapper"],onWheel:D,children:Object(n.jsxs)("div",{className:so.a["inner-content-wrapper"],children:[Object(n.jsx)("div",{ref:E[Ge.DOMAINS]}),Object(n.jsx)(Ru.a,{title:Object(c.m)("dashboard.customDomain.title"),subTitle:Object(c.m)("dashboard.customDomain.subTitle")}),Object(n.jsx)(Yd,{ref:E[Ge.DOMAINS_PLATFORM]}),Object(n.jsx)(Iu,{ref:E[Ge.DOMAINS_SITES]}),Object(n.jsx)(Nu.a,{ref:E[Ge.DOMAINS_EMAIL]})]})})]})},qr=t("DEEt"),Mu=t("vlEx"),Lu=t.n(Mu);function Bu(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:Lu.a.container,children:Object(n.jsx)(qr.a,{errorData:{CollaborationErrorId:"custom-domain"},children:Object(n.jsx)(Au,{})})}),Object(n.jsx)(jo.a,{})]})}var wu=Bu,Fu=()=>{const d=Object(s.useContext)(u.a),{analyticsParams:g}=Object(s.useContext)(Ut);return Object(s.useEffect)(()=>{Object(Nt.a)("d1-custom-dmn-enter",g),d.isOldDashboardInitialized()?d.navigateOldDashboardTo(w.e.CUSTOM_DOMAIN):d.setOldDashboardInitialSrc("/home/dashboard?resellers:3:3&dashboardV1=true")},[]),null},Uu=()=>S.a.getFlag("dashboard.domain.new.enabled",!1)?Object(n.jsx)(wu,{}):Object(n.jsx)(Fu,{}),ku=t("E/IR"),Wu=t("IPjk"),co=t("289u"),$n=t("ph46"),Vu=t("+7hy"),Hu=t("75qQ"),_r=t.n(Hu);const{element:Gu}=ie.a,zu=()=>{const[d,g]=Object(s.useState)(Object(n.jsx)("div",{className:_r.a.main})),{setIsNewDashboardPage:E,account:{productUniqueId:D},environment:{productType:B},isOldDashboardInitialized:V,navigateOldDashboardTo:K,setOldDashboardInitialSrc:tt,msSrcs:_,blockUI:bt,unblockUI:Tt}=Object(Jn.b)(),Dt=Object(lt.h)(),{customBranding:$t}=_||{},{analyticsParams:xe}=Object(s.useContext)(Ut),Te=Object(s.useCallback)(()=>{g(null),V()?K(w.e.CUSTOM_BRANDING):tt("/home/dashboard?resellers:5:5&dashboardV1=true")},[V,K,tt]),Ve=Object(s.useCallback)(()=>{E(!0),Object(co.i)($t).then(()=>Q.a.waitForAccountPlanLoader()).then(()=>window.branding.init({productUniqueId:D,utils:{notifications:{actions:_o.b,types:_o.a},openHelpPopup:da.a,createStopwatch:Vi.a,submitFeedback:Nt.h},accountPlanService:Q.a,navigation:{UnsavedChangesRouteGuard:Vu.a,history:Dt},footerRender:()=>Object(n.jsx)(jo.a,{}),blockUI:bt,unblockUI:Tt,getAuthToken:$n.b,authicator:Object($n.a)(),isBrandingUiChangesEnabled:Object(ku.c)(),isWhiteLabel:B===C.u.RESELLER})).then(he=>g(ts({brandingApp:he}))).catch(he=>{Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:`Failed loading branding script from path ${$t}, error: ${he}`})})},[$t,D,Dt,bt,Tt,B,E]);return Object(s.useEffect)(()=>{Object(Nt.a)("d1-custom-brnd-enter",xe),Wu.hubspot.sendHubspotEvent("Visited custom branding (platform)"),S.a.getFlag("ms.branding.client.enable",!1)?Ve():Te()},[]),d};function ts({brandingApp:d}){return Object(n.jsx)("div",{className:_r.a.main,children:d})}ts.propTypes={brandingApp:Gu};var Ku=zu,Yu=()=>{const d=Object(s.useContext)(u.a),{analyticsParams:g}=Object(s.useContext)(Ut);return Object(s.useEffect)(()=>{Object(Nt.a)("d1-team-mgmt-enter",g),Object(Nt.d)("Visited Team Permissions (platform)"),d.isOldDashboardInitialized()?d.navigateOldDashboardTo(w.e.TEAM_PERMISSIONS):d.setOldDashboardInitialSrc("/home/dashboard?users_and_permissions:-1&dashboardV1=true")},[]),null};class ai extends c.a{render(){return null}componentDidMount(){this.context.setOldDashboardInitialSrc("/home/dashboard?manage::UPDATE_STRIPE_PAYMENT&dashboardV1=true")}}ai.displayName="UpdatePaymentInfo",ai.contextType=u.a;var Qu=ai,es=t("sREz");function Xu(d){const{initDashboard:g,init:E}=window.dashboards;return g?g(d):E(d)}function Ju(){return window.dashboards.Apps.SITE_PAGE}var Zu=t("W7aL"),ha=t.n(Zu);const ns=({siteAlias:d,onExit:g})=>Object(n.jsxs)("div",{className:ha.a["store-panel"],children:[Object(n.jsxs)("div",{className:ha.a["close-container"],children:[Object(n.jsx)("span",{className:ha.a["store-panel-title"],children:Object(c.m)("ui.ed.dashboard.manage.store.panel.title")}),Object(n.jsx)(gn.a,{iconType:C.m.SVG,size:16,name:"photo-x",clickable:!0,onClick:g})]}),Object(n.jsx)("iframe",{src:"/ecommerce/dashboard?site-alias="+d+"&new_storefront_enabled=true",name:"store-frame",className:ha.a["store-frame"]})]}),{func:$u,string:qu}=ie.a;ns.propTypes={onExit:$u.isRequired,siteAlias:qu.isRequired};var _u=ns,tp=t("Kqhr"),ii=t.n(tp);const os=({className:d,siteAlias:g})=>Object(n.jsx)("div",{className:ln()(ii.a.container,d),children:Object(n.jsx)(sn.a,{className:ii.a.title,text:Object(Co.a)("ui.ed.dashboard.sitepage.title"),flex:!1,children:Object(n.jsx)(gn.a,{className:ii.a["help-button"],name:"question-mark",size:16,iconType:C.m.SVG,onClick:()=>Object(da.a)("site_overview")})})}),{string:as}=ie.a;os.propTypes={siteAlias:as.isRequired,className:as};var ep=os;let ri;const si={};function np(){return li.apply(this,arguments)}function li(){return li=r()(function*(){return ri||(ri=(yield Object(Xe.getFromServer)({url:"/accounts/current/permissions"})).accountPermissions),ri}),li.apply(this,arguments)}function op(d){return ci.apply(this,arguments)}function ci(){return ci=r()(function*(d){if(!si[d]){const g=yield Object(Xe.getFromServer)({url:`/dashboard/permissions/site/${d}`});si[d]=g.sitePermissions}return si[d]}),ci.apply(this,arguments)}var ap=d=>{const[g,E]=Object(s.useState)({});return Object(s.useEffect)(()=>{op(d).then(D=>{E(B=>Object.assign({sitePermissions:D},B))})},[d]),Object(s.useEffect)(()=>{np().then(D=>{E(B=>Object.assign({accountPermissions:D},B))})},[]),g},ip=t("DaUp"),is=t.n(ip);const ba=is()({DAILY:"DAILY",YEARLY:"YEARLY",MONTHLY:"MONTHLY",ONE_TIME:"ONE_TIME"}),rp=is()({ACTIVE:"ACTIVE",CHARGE_FAILED:"CHARGE_FAILED",CANCELED:"CANCELED",DECLINED:"DECLINED",NONE:"NONE"}),sp={daily:ba.DAILY,monthly:ba.MONTHLY,yearly:ba.YEARLY,onetime:ba.ONE_TIME};function rs(d){const{url:g,isPublished:E,subscriptionRecurrence:D,sitePaymentStatus:B}=d;return Object.assign({},d,{url:E&&g?g:Object(c.m)("ui.ed.dashboard.siteNotPublished.urlNotAvailable"),status:E?C.z.PUBLISHED:C.z.NOT_PUBLISHED,subscription:sp[D],paymentStatus:rp[B]})}function ss(d){return di.apply(this,arguments)}function di(){return di=r()(function*({siteAlias:d}){return Object(Xe.getFromServer)({url:`/overview/sitepage/${d}`})}),di.apply(this,arguments)}function yh(d){return ui.apply(this,arguments)}function ui(){return ui=r()(function*(d){return rs(yield ss({siteAlias:d}))}),ui.apply(this,arguments)}var lp=d=>{const[g,E]=Object(s.useState)(null);return Object(s.useEffect)(()=>{ss({siteAlias:d}).then(D=>{E(rs(D))})},[d]),[g,E]};function cp(){return new URLSearchParams(Object(lt.i)().search)}var dp=cp;const ls=({match:d})=>{var g,E;const D=d.params[w.f.SITE_ALIAS],{account:B,msSrcs:{dashboards:V},blockUI:K,unblockUI:tt,environment:_}=Object(s.useContext)(u.a),{isCustomer:bt,isStaffMember:Tt,isNewPricing:Dt,planType:$t,email:xe}=B;Object(s.useEffect)(()=>(Object($n.d)(D),function(){Object($n.d)()}),[D]);const Te=Object(lt.h)(),Ve=dp(),he=ap(D),[me,De]=lp(D),[Ze,dn]=Object(s.useState)(!1),[un,Gn]=Object(s.useState)({}),mo={permissions:he,siteData:me,planType:$t,updateSiteData:De,log:Pe.b,showStore:()=>dn(!0),getIsStaff:()=>Tt,getIsCustomer:()=>bt,getIsNewPricing:()=>Dt,getAuthToken:$n.b,getReadyAuthToken:$n.c,PageTitle:ep,blockUI:K,unblockUI:tt,navigation:{history:Te,Paths:w.g,PathParam:w.f},localization:{str:c.m},mixpanel:Nt.a,account:B,environment:_,handleHelpClick:da.a,accountPlanService:Q.a},_n={siteAlias:D,sitePageApi:mo};return Object(s.useEffect)(()=>{!he.sitePermissions||!he.accountPermissions||!S.a.getFlag("enable.site.overview",!1)||Object(co.i)(`${V}?src=dashboard`).then(r()(function*(){return yield Object($n.a)()._ready,Xu({appData:{appName:Ju()},getAuthToken:$n.b,sitePageApi:mo,accountPlanService:Q.a})})).then(xo=>Gn({Component:xo})).catch(xo=>{Object(Pe.b)({logLevel:Pe.a.ERROR,dataString:`Failed loading Site Overview's script from path ${V}, site ${D}, account: ${xe}: ${xo}`})})},[V,he,D,xe]),Object(s.useEffect)(()=>{me&&!me.isDudaOneSite&&Te.replace(w.g.SITES)},[me,Te]),me?Object(n.jsxs)("div",{"data-auto":"site-page-container",className:Fa.a.container,children:[Object(n.jsxs)("div",{className:Fa.a["show-last-child"],children:[Object(n.jsx)("div",{className:Fa.a["site-page-container"],children:un.Component?Object(n.jsx)(un.Component,Object.assign({},_n,{referral:((g=Te.location)===null||g===void 0||(E=g.state)===null||E===void 0?void 0:E.referral)||Ve.get("cardReferral")})):Object(n.jsx)("div",{})}),Ze&&Object(n.jsx)(_u,{siteAlias:D,onExit:()=>dn(!1)})]}),Object(n.jsx)(jo.a,{})]}):Object(n.jsx)(es.a,{})},{object:up}=ie.a;ls.propTypes={match:up.isRequired};var pp=Object(s.memo)(ls);const{object:mp}=c.b;class ga extends c.a{constructor(...g){super(...g);this.getInitialDashboardSrc=()=>{const{params:E}=this.props.match;return`/home/dashboard?users_and_permissions:${E[w.f.SITE_ID]}&dashboardV1=true`}}render(){return null}componentDidMount(){this.context.setOldDashboardInitialSrc(this.getInitialDashboardSrc())}}ga.displayName="ClientManagementForSite",ga.propTypes={match:mp.isRequired},ga.contextType=u.a;var fp=ga,hp=()=>{const d=Object(s.useContext)(u.a),{analyticsParams:g}=Object(s.useContext)(Ut);return Object(s.useEffect)(()=>{Object(Nt.a)("d1-stats-enter",g),d.isOldDashboardInitialized()?d.navigateOldDashboardTo(w.e.STATS):d.setOldDashboardInitialSrc("/home/dashboard?stat:&dashboardV1=true")},[]),null};class pi extends c.a{render(){return null}componentDidMount(){this.context.isOldDashboardInitialized()?this.context.navigateOldDashboardTo(w.e.PAYMENT):this.context.setOldDashboardInitialSrc("/home/dashboard?account:2&dashboardV1=true")}}pi.displayName="Payment",pi.contextType=u.a;var bp=pi;class mi extends c.a{render(){return null}componentDidMount(){this.context.isOldDashboardInitialized()?this.context.navigateOldDashboardTo(w.e.BILLING):this.context.setOldDashboardInitialSrc("/home/dashboard?account:4&dashboardV1=true")}}mi.displayName="Billing",mi.contextType=u.a;var gp=mi;const vp=["component","title"],cs=d=>{let{component:g,title:E}=d,D=_e()(d,vp);const{environment:{productType:B}}=Object(s.useContext)(u.a);return Object(s.useEffect)(()=>{const V=`${Object(c.m)("ui.ed.dashboard.html.title.dashboard")} - `,K=B===C.u.DM_DIRECT?" | Duda":"";document.title=`${V}${E}${K}`},[E,B]),Object(n.jsx)(g,Object.assign({},D))},{object:xp,func:Op,oneOfType:yp,string:Sp}=c.b;cs.propTypes={component:yp([xp,Op]).isRequired,title:Sp.isRequired};var ve=cs;const ds=({redirectProps:d,routeProps:g})=>(Object(s.useEffect)(()=>{const E=JSON.stringify({dashboardUnmappedRoute:g.location.pathname});Object(Pe.b)({logLevel:Pe.a.INFO,dataString:E})}),Object(n.jsx)(lt.b,Object.assign({},d))),{object:us}=c.b;ds.propTypes={redirectProps:us.isRequired,routeProps:us.isRequired};var Ep=ds;function Cp({location:d}){let g;const E=`${d.pathname}${d.search}`;if(E.startsWith("/home/dashboard?templates"))E.includes("custom:true")?g=w.g.TEAM_TEMPLATES:g=w.g.TEMPLATES;else if(E.startsWith("/home/dashboard?manage::UPDATE_STRIPE_PAYMENT"))g=w.g.UPDATE_PAYMENT_INFO;else if(E.startsWith("/home/dashboard?stat"))if(E.includes("stat:")){const D=Uo({locationSearch:d.search,queryParamKey:"stat",equalDelimiter:":"});g=w.g.SITE_STATS.replace(`:${w.f.SITE_ALIAS}`,D)}else g=w.g.STATS;else if(E.startsWith("/home/dashboard?form_responses")){const D=Uo({locationSearch:d.search,queryParamKey:"form_responses",equalDelimiter:":"}).replace("siteAlias[","").replace("]","");g=w.g.SITE_FORM_RESPONSES.replace(`:${w.f.SITE_ALIAS}`,D)}else if(E.startsWith("/home/dashboard?manage")){const D=Uo({locationSearch:d.search,queryParamKey:"manage",equalDelimiter:":"});g=w.g.SITE_PAYMENT_INFO_FOR_OLD_PRICING.replace(`:${w.f.SITE_ALIAS}`,D)}else if(E.startsWith("/home/dashboard?site_payment")){const D=Uo({locationSearch:d.search,queryParamKey:"site_payment",equalDelimiter:":"});g=w.g.SITE_PAYMENT_INFO_FOR_NEW_PRICING.replace(`:${w.f.SITE_ID}`,D)}else if(E.startsWith("/home/dashboard?resellers:3:3"))g=w.g.CUSTOM_DOMAIN;else if(E.startsWith("/home/dashboard?resellers:5:5"))g=w.g.CUSTOM_BRANDING;else if(E.startsWith("/home/dashboard?resellers:6:6"))g=w.g.COMMUNICATIONS;else if(E.startsWith("/home/dashboard?resellers:7:7"))g=w.g.API_ACCESS;else if(E.startsWith("/home/dashboard?users_and_permissions:-1"))g=w.g.TEAM_PERMISSIONS;else if(E.startsWith("/home/dashboard?users_and_permissions"))if(E.includes("users_and_permissions:")){const D=Uo({locationSearch:d.search,queryParamKey:"users_and_permissions",equalDelimiter:":"});g=w.g.CLIENT_MANAGEMENT_FOR_SITE.replace(`:${w.f.SITE_ID}`,D)}else g=w.g.CLIENT_MANAGEMENT;else E.startsWith("/home/dashboard?team_sections")?g=w.g.TEAM_SECTIONS:E.startsWith("/home/dashboard?account:1")||E==="/home/dashboard?account"?g=w.g.ACCOUNT:E.startsWith("/home/dashboard?account:2")?g=w.g.PAYMENT:E.startsWith("/home/dashboard?account:4")?g=w.g.BILLING:d.pathname==="/home"&&(g=`${w.g.SITES}${d.search}`);return g}function ps({location:d,queryParamToRemove:g}){const E=new URLSearchParams(d.search);return E.delete(g),`${d.pathname}?${E.toString()}`}function Uo({locationSearch:d,queryParamKey:g,equalDelimiter:E}){let D;return d.substring(1).split("&").some(B=>{const V=B.split(E||"=");return V[0]===g?(D=V[1],!0):!1}),D}var jp=t("gwAw"),ko=t.n(jp),Pp=t("Eli+"),fi=t.n(Pp),Tp=t("7zqB"),Je=t.n(Tp),Dp=t("5Muu"),uo=t.n(Dp),Ip=t("RdXZ"),ms=t.n(Ip),Np=t("350d"),Rp=t.n(Np);const fs=({text:d,detail:g,link:E,info:D,detailInfo:B})=>{const V=K=>Object(n.jsx)(Rp.a,{toolTip:K,toolTipPosition:"top",children:Object(n.jsx)(gn.a,{className:uo.a.icon,size:16,name:"info",iconType:Po.Type.SVG,fontAwesome:!0})});return Object(n.jsxs)("div",{className:uo.a["details-cell"],children:[d&&Object(n.jsxs)("div",{className:uo.a.detail,children:[Object(n.jsx)("div",{className:uo.a["details-title"],children:d}),D&&V(D)]}),g&&Object(n.jsxs)("div",{className:ln()(uo.a.detail,uo.a.description),children:[E?Object(n.jsx)(ms.a,{className:uo.a.link,text:g,href:E}):g,B&&V(B)]})]})};fs.propTypes={text:Kt.string,detail:Kt.string,link:Kt.string,info:Kt.string,detailInfo:Kt.string};var va=fs,Ap=t("rQlA"),Mp=t.n(Ap),Lp=t("/D2C"),hi=t.n(Lp);function hs({className:d,isRenewOn:g}){return Object(n.jsx)("div",{className:ln()(d,hi.a.status,g?hi.a.on:hi.a.off),children:g?Object(c.m)("payment.my.subscriptions.status.renew.on"):Object(c.m)("payment.my.subscriptions.status.renew.off")})}hs.propTypes={className:Kt.string,isRenewOn:Kt.bool};var Bp=hs;const bs=({isRenewOn:d})=>Object(n.jsx)(Bp,{isRenewOn:d,className:Mp.a["status-cell"]});bs.propTypes={isRenewOn:Kt.bool};var wp=bs,Fp=t("iCZy"),bi=t.n(Fp);const gs=({text:d,link:g})=>Object(n.jsx)("div",{className:bi.a["download-invoice"],children:Object(n.jsx)(ms.a,{download:!0,href:g,text:d,className:bi.a.link,children:Object(n.jsx)(gn.a,{className:bi.a.icon,size:14,name:"download",fontAwesome:!0})})});gs.propTypes={text:Kt.string,link:Kt.string};var Up=gs;const Wo={SUBSCRIPTION_TYPE:"subscriptionType",LAST_PAYMENT:"lastPayment",RENEWAL_DATE:"renewalDate",STATUS:"autoRenew",NEXT_PAYMENT_DUE:"nextPaymentDue",CATEGORY:"category"},kp=[{headerName:Object(c.m)("payment.active.subscriptions.table.column.subscription.type"),field:Wo.SUBSCRIPTION_TYPE,cellRendererFramework:({data:d})=>Object(n.jsx)(va,{text:d.subscriptionType,detail:d.subscriptionTypeDescription,link:d.subscriptionTypeLink}),cellClass:Je.a.cell},{headerName:Object(c.m)("payment.active.subscriptions.table.column.last.payment"),field:Wo.LAST_PAYMENT,cellRendererFramework:({data:d})=>Object(n.jsx)(va,{text:d.lastPayment,detail:Object(n.jsx)(Up,{text:Object(c.m)("payment.active.subscriptions.table.column.last.payment.download.invoice"),link:d.invoiceLink})}),cellClass:()=>Je.a.cell},{headerName:Object(c.m)("payment.active.subscriptions.table.column.renewal.date"),field:Wo.RENEWAL_DATE,cellRendererFramework:({data:d})=>Object(n.jsx)(va,{text:d.renewalDate,info:d.renewalDateInfo}),cellClass:()=>Je.a.cell},{headerName:Object(c.m)("payment.active.subscriptions.table.column.status"),field:Wo.STATUS,cellRendererFramework:({data:d})=>Object(n.jsx)(wp,{isRenewOn:d.autoRenew}),cellClass:()=>ln()(Je.a.cell,Je.a["status-cell"])},{headerName:Object(c.m)("payment.active.subscriptions.table.column.payment.due"),field:Wo.NEXT_PAYMENT_DUE,cellRendererFramework:({data:d})=>Object(n.jsx)(va,{text:d.nextPaymentDue,detail:d.estimatedPrice,detailInfo:d.estimatedPriceMessage}),cellClass:()=>Je.a.cell}],Wp=[{items:[{subscriptionType:"Account plan",subscriptionTypeDescription:"Agency",lastPayment:"1621755021",invoiceLink:"/invoice",renewalDate:"1621755021",renewalDateInfo:"renewal tooltip",autoRenew:!0,nextPaymentDue:"1621755021",estimatedPrice:"11.00",estimatedPriceCurrency:"USD",estimatedPriceMessage:"Tooltip content"}]},{category:"Sites",items:[{subscriptionType:"Sites",subscriptionTypeDescription:"some site",subscriptionTypeLink:"www.site.url",lastPayment:"1621755021",invoiceLink:"/invoice",renewalDate:"1621755021",renewalDateInfo:"renewal tooltip",autoRenew:!1,nextPaymentDue:"1621755021",estimatedPrice:"11.00",estimatedPriceCurrency:"USD",estimatedPriceMessage:"Tooltip content"},{subscriptionType:"Sites",subscriptionTypeDescription:"some site",subscriptionTypeLink:"www.site.url",lastPayment:"1621755021",invoiceLink:"/invoice",renewalDate:"1621755021",renewalDateInfo:"renewal tooltip",autoRenew:!1,nextPaymentDue:"1621755021",estimatedPrice:"11.00",estimatedPriceCurrency:"USD",estimatedPriceMessage:"Tooltip content"},{subscriptionType:"Sites",subscriptionTypeDescription:"some site",subscriptionTypeLink:"www.site.url",lastPayment:"1621755021",invoiceLink:"/invoice",renewalDate:"1621755021",renewalDateInfo:"renewal tooltip",autoRenew:!0,nextPaymentDue:"1621755021",estimatedPrice:"11.00",estimatedPriceCurrency:"USD",estimatedPriceMessage:"Tooltip content"},{subscriptionType:"Sites",subscriptionTypeDescription:"some site",subscriptionTypeLink:"www.site.url",lastPayment:"1621755021",invoiceLink:"/invoice",renewalDate:"1621755021",renewalDateInfo:"renewal tooltip",autoRenew:!1,nextPaymentDue:"1621755021",estimatedPrice:"11.00",estimatedPriceCurrency:"USD",estimatedPriceMessage:"Tooltip content"}]}];function gi({date:d,longMonth:g}){let E={dateStyle:"medium"};g&&(E={month:"long",year:"numeric",day:"2-digit"});try{const D=new Intl.DateTimeFormat("en-GB",Object.assign({},E)).format(d*1e3),B=D.lastIndexOf(" ");return D.substring(0,B)+", "+D.substring(B+1)}catch(D){return""}}function Vp({value:d,currency:g="USD",addCurrencyCode:E}){let D=new Intl.NumberFormat("en-US",{style:"currency",currency:g}).format(d);return E&&(D+=` ${g.toUpperCase()}`),D}const Hp=d=>{var g;const E=d.category?[{group:!0,category:d.category,itemsCount:((g=d.items)===null||g===void 0?void 0:g.length)||0,collapsed:!1}]:[];return Object.assign({},d,{items:[...E,...d.items]})},Gp=d=>d.map(Hp).flatMap(g=>g.items.map(E=>Object.assign({},E,{category:g.category}))).map(g=>Object.assign({},g,{lastPayment:gi({date:g.lastPayment}),renewalDate:gi({date:g.renewalDate}),nextPaymentDue:gi({date:g.nextPaymentDue}),estimatedPrice:`${Object(c.m)("payment.active.subscriptions.table.column.payment.due.estimated.price")}: ${Vp({value:g.estimatedPrice,currency:g.estimatedPriceCurrency,addCurrencyCode:!0})}`}));var zp=t("vwwZ"),vi=t.n(zp);const vs=({text:d,collapseProps:g,rowCount:E})=>{const D=E?` (${E})`:"(0)",B=`${d}${D}`,V=()=>{g.setCollapsed({category:d,collapsed:!g.collapsed})};return Object(n.jsxs)("div",{className:vi.a["group-cell"],children:[g&&Object(n.jsx)(gn.a,{className:vi.a.icon,size:20,fontAwesome:!0,onClick:V,name:g.collapsed?"angle-down":"angle-up"}),Object(n.jsx)(sn.a,{text:B,className:vi.a.header})]})};vs.propTypes={text:Kt.string,rowCount:Kt.number,collapseProps:Object(Kt.shape)({collapsed:Kt.bool,setCollapsed:Kt.func})};var Kp=vs,Yp=()=>{const[d]=Object(s.useState)(Gp(Wp)),g=()=>{Object(Nt.c)({feedbackSource:"payment",postFeedbackToServer:!0})};return Object(n.jsxs)("div",{className:Je.a.subscriptions,children:[Object(n.jsx)(Zn.a,{className:Je.a.header,children:Object(c.m)("payment.my.subscriptions.header")}),Object(n.jsxs)("div",{className:Je.a.subheader,children:[Object(n.jsx)(Zn.a,{children:Object(c.m)("payment.my.subscriptions.subheader")}),Object(n.jsx)(gn.a,{iconType:Po.Type.SVG,name:"feedback",size:20,onClick:g,className:Je.a.feedbackIcon})]}),Object(n.jsxs)("div",{className:Je.a["active-subscriptions"],children:[Object(n.jsx)(Zn.a,{className:Je.a["table-header"],children:Object(c.m)("payment.active.subscriptions.table.header")}),Object(n.jsx)(Er.a,{className:ln()(Je.a["table-container"]),domLayout:"autoHeight",columnDefs:kp,rowData:d,rowClass:Je.a.row,isFullWidthCell:function(E){return E.data.group},fullWidthCellRendererFramework:({data:E})=>Object(n.jsx)(Kp,{text:E.category,rowCount:E.itemsCount}),getRowHeight:({node:E})=>E.data.group?56:null,getRowClass:({node:E})=>E.data.group?Je.a["group-row"]:"",suppressHorizontalScroll:!0,suppressNoRowsOverlay:!0,animateRows:!0})]})]})};const qn={ACCOUNT_SETTINGS:"account-settings",MY_SUBSCRIPTIONS:"my-subscriptions",PAYMENTS:"payments",PAYMENT_METHOD:"payment-method"},Qp=[{id:qn.ACCOUNT_SETTINGS,title:Object(c.m)("payment.tabs.account.settings.title"),component:Object(n.jsx)("div",{children:"Blank page"})},{id:qn.MY_SUBSCRIPTIONS,title:Object(c.m)("payment.tabs.my.subscriptions.title"),component:Object(n.jsx)(Yp,{})},{id:qn.PAYMENTS,title:Object(c.m)("payment.tabs.payments.title"),component:Object(n.jsx)("div",{children:"Blank page"})},{id:qn.PAYMENT_METHOD,title:Object(c.m)("payment.tabs.payment.method.title"),component:Object(n.jsx)("div",{children:"Blank page"})}];var Xp=t("6ojZ"),xa=t.n(Xp),Jp=()=>{const{account:d}=Object(s.useContext)(u.a),{firstName:g="",lastName:E="",accountOwnerEmail:D=""}=d||{};return Object(n.jsxs)("div",{className:xa.a["account-info"],children:[Object(n.jsxs)("div",{className:xa.a.avatar,children:[g[0],E[0]]}),Object(n.jsxs)(Zn.a,{className:xa.a.name,children:[g," ",E]}),Object(n.jsx)(Zn.a,{className:xa.a.email,children:D})]})},Zp=()=>{const d=g=>{g===qn.ACCOUNT_SETTINGS&&(window.location="/home/dashboard/user/account"),g===qn.PAYMENTS&&(window.location="/home/dashboard/user/payment"),g===qn.PAYMENT_METHOD&&(window.location="/home/dashboard/user/payment")};return Object(n.jsx)("div",{className:ko.a.container,children:Object(n.jsxs)(fi.a,{vertical:!0,current:qn.MY_SUBSCRIPTIONS,onTabChange:d,navClassName:ko.a["tabs-container"],activePanelClassName:ko.a["active-panel"],tabClassName:ko.a["tab-name"],children:[Object(n.jsx)(fi.a.CustomComponent,{children:Object(n.jsx)(Jp,{})}),Qp.map(g=>Object(n.jsx)(fi.a.Tab,{tabId:g.id,titleElement:Object(n.jsx)("div",{className:ko.a["tab-title"],children:g.title}),children:g.component},g.id))]})})};const $p=Object(c.i)(()=>t.e(2).then(t.bind(null,"44Fb"))),qp=Object(c.i)(()=>Promise.all([t.e(5),t.e(12)]).then(t.bind(null,"FKNb"))),_p=Object(c.i)(()=>t.e(19).then(t.bind(null,"SxuJ"))),tm=Object(c.i)(()=>t.e(18).then(t.bind(null,"WEwI"))),em=Object(c.i)(()=>t.e(15).then(t.bind(null,"kL1t"))),nm=Object(c.i)(()=>t.e(14).then(t.bind(null,"94YW"))),om=Object(c.i)(()=>t.e(17).then(t.bind(null,"UwY0"))),am=Object(c.i)(()=>Promise.all([t.e(7),t.e(3)]).then(t.bind(null,"cXIX"))),im=Object(c.i)(()=>t.e(0).then(t.bind(null,"0p/H"))),rm=Object(c.i)(()=>t.e(0).then(t.bind(null,"GSMn"))),sm=Object(c.i)(()=>t.e(13).then(t.bind(null,"mFSE"))),lm=Object(c.i)(()=>t.e(16).then(t.bind(null,"eCyR"))),cm=Object(c.i)(()=>t.e(20).then(t.bind(null,"pLdM"))),xs=({location:d,history:g})=>{const E=Cp({location:d});return E?(g.replace(E),null):S.a.get("common.dmssoParamRemove")&&d.search.includes(`${w.f.SSO}=`)?(g.replace(ps({location:d,queryParamToRemove:w.f.SSO})),null):d.search.includes(`${w.f.SUPPORT_OR_STAFF}=`)?(g.replace(ps({location:d,queryParamToRemove:w.f.SUPPORT_OR_STAFF})),null):Object(n.jsx)(c.e,{fallback:Object(n.jsx)(es.a,{}),children:Object(n.jsxs)(lt.e,{children:[Object(n.jsx)(lt.b,{exact:!0,from:w.g.HOME,to:w.g.SITES}),Object(n.jsx)(lt.b,{exact:!0,from:w.g.HALL,to:w.g.SITES}),S.a.getFlag("dashboard.domain.new.enabled",!1)&&Object(n.jsx)(lt.b,{exact:!0,from:w.g.CUSTOM_EMAIL_DOMAIN,to:w.g.CUSTOM_DOMAIN}),Object(n.jsx)(lt.c,{path:w.g.TEMPLATES,render:D=>Object(n.jsx)(ve,Object.assign({component:im,title:Object(c.m)("dashboard.html.title.templates")},D))}),Object(n.jsx)(lt.c,{path:w.g.UPDATE_PAYMENT_INFO,render:D=>Object(n.jsx)(ve,Object.assign({component:Qu,title:Object(c.m)("dashboard.html.title.updatePaymentInfo")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_STATS,render:D=>Object(n.jsx)(ve,Object.assign({component:Oc,title:Object(c.m)("ui.ed.dashboard.html.title.stats")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_FORM_RESPONSES,render:D=>Object(n.jsx)(ve,Object.assign({component:Sc,title:Object(c.m)("ui.ed.dashboard.html.title.sites")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_PAYMENT_INFO_FOR_OLD_PRICING,render:D=>Object(n.jsx)(ve,Object.assign({component:Cc,title:Object(c.m)("ui.ed.dashboard.html.title.sites")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_PAYMENT_INFO_FOR_NEW_PRICING,render:D=>Object(n.jsx)(ve,Object.assign({component:Pc,title:Object(c.m)("ui.ed.dashboard.html.title.sites")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_PAGE,render:D=>Object(n.jsx)(ve,Object.assign({component:pp,title:Object(c.m)("ui.ed.dashboard.sitepage.title")},D))}),Object(n.jsx)(lt.c,{path:w.g.SITES,render:D=>Object(n.jsx)(ve,Object.assign({component:xc,title:Object(c.m)("ui.ed.dashboard.html.title.sites")},D))}),S.a.getFlag("dashboard.customEmailDomain.new.enabled",!1)&&!S.a.getFlag("dashboard.domain.new.enabled",!1)&&Object(n.jsx)(lt.c,{path:w.g.CUSTOM_EMAIL_DOMAIN,render:D=>Object(n.jsx)(ve,Object.assign({component:lm,title:Object(c.m)("ui.ed.dashboard.html.title.customEmailDomain")},D))}),Object(n.jsx)(lt.c,{path:w.g.CUSTOM_DOMAIN,render:D=>Object(n.jsx)(ve,Object.assign({component:Uu,title:Object(c.m)("ui.ed.dashboard.html.title.customDomain")},D))}),Object(n.jsx)(lt.c,{path:w.g.CUSTOM_BRANDING,render:D=>Object(n.jsx)(ve,Object.assign({component:Ku,title:Object(c.m)("ui.ed.dashboard.html.title.customBranding")},D))}),Object(n.jsx)(lt.c,{path:w.g.COMMUNICATIONS,render:D=>Object(n.jsx)(ve,Object.assign({component:$p,title:Object(c.m)("ui.ed.dashboard.html.title.communications")},D))}),Object(n.jsx)(lt.c,{path:w.g.API_ACCESS,render:D=>Object(n.jsx)(ve,Object.assign({component:qp,title:Object(c.m)("ui.ed.dashboard.html.title.apiAccess")},D))}),Object(n.jsx)(lt.c,{path:w.g.TEAM_PERMISSIONS,render:D=>Object(n.jsx)(ve,Object.assign({component:Yu,title:Object(c.m)("ui.ed.dashboard.html.title.teamPermissions")},D))}),Object(n.jsx)(lt.c,{path:w.g.TEAM_TEMPLATES,render:D=>Object(n.jsx)(ve,Object.assign({component:rm,title:Object(c.m)("ui.ed.dashboard.html.title.teamTemplates")},D))}),Object(n.jsx)(lt.c,{path:w.g.TEAM_SECTIONS,render:D=>Object(n.jsx)(ve,Object.assign({component:am,title:Object(c.m)("ui.ed.dashboard.html.title.teamSections")},D))}),Object(n.jsx)(lt.c,{path:w.g.CLIENT_MANAGEMENT_FOR_SITE,render:D=>Object(n.jsx)(ve,Object.assign({component:fp,title:Object(c.m)("ui.ed.dashboard.html.title.clientManagement")},D))}),Object(n.jsx)(lt.c,{path:w.g.CLIENT_MANAGEMENT,render:D=>Object(n.jsx)(ve,Object.assign({component:em,title:Object(c.m)("ui.ed.dashboard.html.title.clientManagement")},D))}),Object(n.jsx)(lt.c,{path:w.g.CLIENT_BILLING,render:D=>Object(n.jsx)(ve,Object.assign({component:nm,title:Object(c.m)("ui.ed.dashboard.html.title.clientBilling")},D))}),Object(n.jsx)(lt.c,{path:w.g.PAYMENT_REQUESTS,render:D=>Object(n.jsx)(ve,Object.assign({component:om,title:Object(c.m)("ui.ed.dashboard.html.title.customerPaymentRequests")},D))}),Object(n.jsx)(lt.c,{path:w.g.STATS,render:D=>Object(n.jsx)(ve,Object.assign({component:hp,title:Object(c.m)("ui.ed.dashboard.html.title.stats")},D))}),Object(n.jsx)(lt.c,{path:w.g.ACCOUNT,render:D=>Object(n.jsx)(ve,Object.assign({component:sm,title:Object(c.m)("ui.ed.dashboard.html.title.account")},D))}),Object(n.jsx)(lt.c,{path:w.g.PAYMENT,render:D=>Object(n.jsx)(ve,Object.assign({component:bp,title:Object(c.m)("ui.ed.dashboard.html.title.payment")},D))}),S.a.getFlag("pricing.new.payment.page.enabled",!1)&&Object(n.jsx)(lt.c,{path:w.g.SUBSCRIPTIONS,render:D=>Object(n.jsx)(ve,Object.assign({component:Zp,title:Object(c.m)("ui.ed.dashboard.html.title.payment")},D))}),Object(n.jsx)(lt.c,{path:w.g.BILLING,render:D=>Object(n.jsx)(ve,Object.assign({component:gp,title:Object(c.m)("ui.ed.dashboard.html.title.billing")},D))}),S.a.get("feature.flag.dashboard.enableDevelopersPlayground")&&Object(n.jsx)(lt.c,{path:w.g.DEVELOPERS_PLAYGROUND,render:D=>Object(n.jsx)(ve,Object.assign({component:_p,title:"Developers Playground"},D))}),S.a.getFlag("dashboard.debugPlaygroundPage")&&Object(n.jsx)(lt.c,{path:w.g.DEBUG_PLAYGROUND,render:D=>Object(n.jsx)(ve,Object.assign({component:tm,title:"Debug Playground"},D))}),Object(n.jsx)(lt.c,{path:w.g.SITE_TRANSFER,render:D=>Object(n.jsx)(ve,Object.assign({component:cm,title:Object(c.m)("Site Transfer")},D))}),Object(n.jsx)(lt.c,{render:D=>Object(n.jsx)(Ep,{redirectProps:{to:w.g.SITES},routeProps:D})})]})})},{object:Os}=c.b;xs.propTypes={location:Os.isRequired,history:Os.isRequired};var dm=Object(lt.j)(xs),um=({children:d})=>{const[g,E]=Object(s.useState)({analyticsParams:{},setAnalyticsParams:D=>{E(B=>Object.assign({},B,{analyticsParams:D}))}});return Object(n.jsx)(Ut.Provider,{value:g,children:d})},pm=t("9QEl"),ys=t.n(pm),mm=t("wd/R"),Ss=t.n(mm),fm=t("KAEc"),hm=t.n(fm);const bm=`<html>
    <head>
        {{{head}}}
        <style>
            .top-section {
                position: relative;
                display: flex;
                justify-content: center;
            }
            .title {
                margin-top: 0;
                text-transform: uppercase;
                font-weight: 500;
                font-size: 22px;
                max-width: 600px;
                word-break: break-word;
                line-height: 1.8;
            }
            .pdf-bold {
                font-weight: 500;
            }
            .stats-pdf-description {
                line-height: 1.5;
            }
            .pdf-site-name {
                color: $app-main-color;
            }
            .stats-pdf-row {
                display: table-row;
                line-height: 2.5;
            }
            .stats-pdf-row > div {
                display: table-cell;
                vertical-align: middle;
            }
            .stats-pdf-description {
                display: table;
                text-align: left;
            }
            .stats-pdf-label {
                width: 130px;
                text-align: left;
            }
            .stats-pdf-value {
                text-align: left;
            }
        </style>
    </head>
    <body>
    <section class="container_fluid top-section">
        <div style="text-align: left; line-height: 2;">
                <h1 style="text-align: left; font-weight: 500;" class="title">
                    {{title}}: {{alias}}
                </h1>
                <div class="stats-pdf-row">
                    <div class="stats-pdf-label">{{siteUrlLabel}}:</div> <div class="stats-pdf-value"><a href={{url}}><u>{{url}}</u></a></div>
                </div>

                <div class="stats-pdf-row">
                    <div class="stats-pdf-label">{{dateRangeLabel}}:</div> <div class="stats-pdf-value">{{startDate}} -  {{endDate}}</div>
                </div>
                <div class="stats-pdf-row">
                    <div class="stats-pdf-label">{{devicesLabel}}:</div> <div class="stats-pdf-value">{{devices}}</div>
                </div>
            </div>
        </section>
        <div id="mainContent" class="clearfix">
        <div id="dashboardAppWrapper" class="contentWrapper dashboardPanel dashboardAppWrapper ember-application stats-wrapper" current-parent-route="stats">
            <div class="channel-panel container_fluid desktop ember-view has-mind-touch mobile multiple-devices onesite overview tablet">
                {{{visitsSection}}}
                {{{totalSection}}}
            </div>
        </div>
    </div>
    <script>
        window.print();
    </script>
    </body>
</html>`,gm=d=>{let g="";if(d.getElementsByTagName!==null){const E=d.getElementsByTagName("head");E.length>0&&(g+=E[0].innerHTML)}return g};var vm=(d,g)=>d.getElementsByClassName("visits-section")[0]===null?null:hm.a.compile(bm)({head:gm(d),title:Object(c.m)("ui.stats.pdf.title"),siteUrlLabel:Object(c.m)("ui.stats.pdf.siteUrl"),url:g.url,dateRangeLabel:Object(c.m)("ui.stats.pdf.datesRange"),startDate:Ss()(g.dateRange[0],"DDMMYYYY").format("DD-MMM-YYYY"),endDate:Ss()(g.dateRange[1],"DDMMYYYY").format("DD-MMM-YYYY"),devicesLabel:Object(c.m)("ui.stats.pdf.devices"),devices:g.devices.reduce((V,K,tt)=>`${V}${tt?",":""}${K}`,""),visitsSection:d.getElementsByClassName("visits-section")[0].outerHTML,totalSection:d.getElementsByClassName("total-section")[0].outerHTML});const xm=(d,g)=>d.split("~~").filter(E=>E!==g&&E!==""),Om=({total:d,desktop:g,tablet:E,mobile:D})=>{if(d)return[Object(c.m)("ui.stats.total")];const B=[];return g&&B.push(Object(c.m)("ui.stats.desktop")),E&&B.push(Object(c.m)("ui.stats.tablet")),D&&B.push(Object(c.m)("ui.stats.mobile")),B};var ym=(d,g)=>{if(d.getElementsByClassName("visits-section")[0]===null)return;const D=window.open("","processPrintInsideIframe");D.document.open(),D.document.write(vm(d,g)),D.document.close()};const Sm=["siteAlias"],Em={[w.e.SITES]:"navigateToSites",[w.e.CUSTOM_DOMAIN]:"navigateToCustomDomain",[w.e.CUSTOM_BRANDING]:"navigateToCustomBranding",[w.e.COMMUNICATIONS]:"navigateToCommunications",[w.e.API_ACCESS]:"navigateToAPIAccess",[w.e.TEAM_PERMISSIONS]:"navigateToTeamPermissions",[w.e.TEAM_TEMPLATES]:"navigateToTeamTemplates",[w.e.TEAM_SECTIONS]:"navigateToTeamSections",[w.e.CLIENT_MANAGEMENT]:"navigateToClientManagement",[w.e.STATS]:"navigateToStats",[w.e.ACCOUNT]:"navigateToAccount",[w.e.PAYMENT]:"navigateToPayment",[w.e.BILLING]:"navigateToBilling"};function Cm({oldDashboardWindow:d,history:g}){d.hallDashboard={replaceHistoryState:!0,setPathToSiteStats:({siteAlias:E})=>{g.push(w.g.SITE_STATS.replace(`:${w.f.SITE_ALIAS}`,E))},setPathToSitePage:E=>{let{siteAlias:D}=E,B=_e()(E,Sm);g.push(w.g.SITE_PAGE.replace(`:${w.f.SITE_ALIAS}`,D),B)},setPathToFormResponses:({siteAlias:E})=>{g.push(w.g.SITE_FORM_RESPONSES.replace(`:${w.f.SITE_ALIAS}`,E))},setPathToSitePaymentInfoForOldPricing:({siteAlias:E})=>{g.push(w.g.SITE_PAYMENT_INFO_FOR_OLD_PRICING.replace(`:${w.f.SITE_ALIAS}`,E))},setPathToSitePaymentInfoForNewPricing:({siteId:E})=>{g.push(w.g.SITE_PAYMENT_INFO_FOR_NEW_PRICING.replace(`:${w.f.SITE_ID}`,E))},setPathToTemplates:E=>{g.push(w.g.TEMPLATES,{templatesPageAppProps:E})},setPathToClientManagementForSite:({siteId:E})=>{g.push(w.g.CLIENT_MANAGEMENT_FOR_SITE.replace(`:${w.f.SITE_ID}`,E))},printPdf:({id:E},{alias:D,mobileUrl:B},V)=>{ym(d.document,{alias:D,url:B,dateRange:xm(E,D),devices:Om(V,D)})}}}function jm(){const d=Object(lt.h)(),g=Object(s.useRef)(null),{oldDashboardSrc:E,setNavigateOldDashboardTo:D}=Object(Jn.b)(),[B,V]=Object(s.useState)(null),[K,tt]=Object(s.useState)(null);!K&&g.current&&tt(g.current);const _=Object(s.useCallback)($t=>{K.contentWindow.dashboardAPI[Em[$t]]()},[K]),bt=Object(s.useCallback)(()=>{B&&(_(B),V(null))},[_,B]),Tt=Object(s.useCallback)(()=>{Cm({oldDashboardWindow:K.contentWindow,history:d}),bt()},[bt,K,d]),Dt=Object(s.useCallback)($t=>{const{readyState:xe}=K.contentDocument;xe==="complete"?_($t):V($t)},[_,K]);return Object(s.useEffect)(()=>{D(Dt)},[Dt]),Object(n.jsx)("div",{className:ys.a.container,children:Object(n.jsx)("iframe",{ref:g,className:ys.a.iframe,src:E,onLoad:Tt,"data-auto":"old-dashboard-iframe"})})}var Pm=jm,Tm=t("l6DM"),xi=t.n(Tm),Dm=t("WkgK"),Im=t.n(Dm);const Es=({spinnerOptions:d})=>{var g;return Object(n.jsx)("div",{className:xi.a.container,children:Object(n.jsx)(Im.a,{size:60,color:(g=d.color)!==null&&g!==void 0?g:"white",className:ln()(xi.a.spinner,{[xi.a["with-overlay"]]:!d.noOverlay})})})};Es.propTypes={spinnerOptions:Object(Kt.shape)({color:Kt.string,noOverlay:Kt.bool})};var Nm=Es,Rm=()=>{const{isUIBlocked:d,spinnerOptions:g}=Object(s.useContext)(u.a);return d?c.d.createPortal(Object(n.jsx)(Nm,{spinnerOptions:g}),document.getElementById("dashboard-loader")):null},Am=t("5S0r"),Cs=t("dSQ3"),Mm=t.n(Cs),Ih=t("Jjbe");function Lm(d){return Oi.apply(this,arguments)}function Oi(){return Oi=r()(function*({referral:d,account:g,blockUI:E,unblockUI:D}){(yield Object(Qn.a)()).upgradeAccount({referral:d,account:g,blockUI:E,unblockUI:D})}),Oi.apply(this,arguments)}function js({isExpired:d}){const{account:g,blockUI:E,unblockUI:D}=Object(Jn.b)(),{daysBeforeTrialEnds:B,trialDays:V}=g,K=d?Object(c.m)("dashboard.trial.main.title.expired"):Object(c.m)("dashboard.trial.main.title",{x:B}),tt=d?Object(c.m)("dashboard.trial.secondary.title.expired"):Object(c.m)("dashboard.trial.secondary.title"),_=()=>Lm({referral:"Dashboard trial progress bar",account:g,blockUI:E,unblockUI:D}),bt=Math.floor(100-100*(1-B/V))+"%";return Object(n.jsx)("div",{id:"trial-notification",className:"show-notification",children:Object(n.jsxs)("div",{id:"trial-container",className:ln()({"trial-is-over":d}),children:[d&&Object(n.jsx)("div",{className:"enf-trial-gif"}),Object(n.jsxs)("div",{id:"message-container",children:[Object(n.jsx)("div",{id:"notificationMainMessage",children:K}),Object(n.jsx)("div",{id:"notificationSecondaryMessage",children:tt}),!d&&Object(n.jsxs)("div",{id:"trialTimeLineContainer",afterLabel:Object(c.m)("dashboard.trial.expired"),beforeLabel:Object(c.m)("dashboard.trial.begin"),children:[Object(n.jsx)("div",{id:"trial-timeline-mask",style:{width:bt}}),Object(n.jsx)("div",{id:"trialTimeLine"})]})]}),Object(n.jsx)("div",{id:"action-container",children:Object(n.jsx)("div",{id:"trial-action",onClick:_,children:Object(c.m)("pricing.banners.trialBanner.cta")})})]})})}js.propTypes={isExpired:Kt.bool};var Bm=js,wm=t("a0xs"),Fm=t.n(wm);function Um(){const{isNewDashboardPage:d,setIsTopBannerShown:g,account:{isInTrial:E,isNewPricing:D,isProductOwner:B,planType:V}}=Object(Jn.b)(),K=V===C.a.NONE,tt=(E||K)&&D&&B;return d&&tt&&g(!0),d&&Object(n.jsx)("div",{className:Fm.a.container,children:tt&&Object(n.jsx)(Bm,{isExpired:K})})}var km=Um;const Ps=({shellData:d})=>{const[g,E]=Object(s.useState)(!1),[D,B]=Object(s.useState)(!1);return Object(s.useEffect)(()=>{E(!0)},[]),Object(s.useEffect)(()=>{function V({data:K}){(K==null?void 0:K.message)==="create-d1-site"&&B(!0)}return window.addEventListener("message",V,!1),()=>{window.removeEventListener("message",V,!1)}},[]),Object(n.jsx)(h.a,{children:Object(n.jsx)(Jn.a,{shellData:d,children:Object(n.jsx)(um,{children:Object(n.jsxs)(qr.a,{errorData:{CollaborationErrorId:"dashboard"},children:[Object(n.jsx)(Mm.a,{class:"tooltip"},"tooltips"),Object(n.jsx)(Cs.ReactTooltip,{id:Wa.c,place:"bottom",html:!0,effect:"solid",globalEventOff:"click"}),Object(n.jsxs)("div",{className:Object(c.h)(b.a.container,{"automation-no-animation":Object(v.a)()}),children:[Object(n.jsx)(El,{}),Object(n.jsx)(km,{}),Object(n.jsx)(dm,{}),g&&Object(n.jsx)(Pm,{}),Object(n.jsx)(Rm,{}),Object(n.jsx)(Am.a,{className:b.a["dashboard-notifications-container"],notificationClassName:b.a["dashboard-notifications"]})]}),Object(n.jsx)(tr,{show:D,closePopup:()=>B(!1)})]})})})})},{object:Wm}=c.b;Ps.propTypes={shellData:Wm.isRequired};var Vm=Ps,Nh=t("uuRP"),Hm=t("2xqg"),Gm=t.n(Hm),zm=t("bNQv"),Km=t.n(zm),Ym=t("lSCD"),yi=t.n(Ym);const Oa=window.Symbol?Symbol("empty"):"empty";class Ts{constructor(){this.registry=Ds(2,3),this.on=this.add,this.off=this.remove,this.find=this.findBucketByString}findBucketByString(g=""){const E=Ra()(g)?Qm(g):g,{ctrl:D,alt:B,shift:V,keyCode:K}=E;return K?(this.registry[D][B][V][K]=this.registry[D][B][V][K]||{[Oa]:!0},this.registry[D][B][V][K]):(Object(co.q)(`[Keyboard events] Unparsable key combination: ${g}`),null)}findBucketByEvent(g={}){const{ctrl:E,alt:D,shift:B,keyCode:V}=g;return V?this.registry[E][D][B][V]:null}add(g="",E,D,B={}){const V=this.findBucketByString(g);if(!!V){if(!E)throw new Error(`[Keyboard events] please supply handler name for ${g}`);if(V[E]&&!B.replaceCurrentHandler){Object(co.q)(`[Keyboard events] handler name already exists: ${g} ${E}`);return}V[E]={handler:D,options:Object.assign({preventDefault:!0,considerAsHandled:!0},B)},V[Oa]=!1}}remove(g="",E){const D=this.findBucketByString(g);if(!D)return;if(!E)throw new Error(`[Keyboard events] please supply handler name for removal for ${g}`);let B;if(yi()(E)?B=Object.keys(D).filter(V=>D[V]===E):B=D[E]?[E]:[],B.length)B.forEach(V=>delete D[V]);else{Object(co.q)(`[Keyboard events] could not find handler for removal - ${g} ${E}`);return}D[Oa]=!Object.keys(D).length}trigger(g){if(g.location||this.conditionFn&&!this.conditionFn(g))return!1;let E=!1,D=!1;const B={ctrl:+(g.ctrlKey||g.metaKey),alt:+g.altKey,shift:+g.shiftKey,keyCode:""+g.keyCode},V=this.findBucketByEvent(B);return!V||V[Oa]?!1:(Km()(V,({handler:K,options:tt})=>{K(g,tt),tt.considerAsHandled&&(E=!0),tt.preventDefault&&(D=!0)}),D&&g.preventDefault(),E)}setCondition(g){this.conditionFn=g}}Ts.displayName="KeyboardRegistry";function Qm(d=""){const g={DEL:"46",BACKSPACE:"8",TAB:"9",ESC:"27",ENTER:"13",LEFTARROW:"37",RIGHTARROW:"39"},E=d.toUpperCase().replace(/ /g,"").split("+");let D=0,B=0,V=0,K;return E.forEach(tt=>{tt==="CTRL"?B=1:tt==="ALT"?D=1:tt==="SHIFT"?V=1:/^[A-Z0-9]$/.test(tt)?K=""+tt.charCodeAt(0):/^[0-9]*?$/.test(tt)?K=tt:g[tt]&&(K=g[tt])}),{ctrl:B,shift:V,alt:D,keyCode:K}}function Ds(d=1,g=0){return g?Gm()(d,()=>Ds(d,g-1)):{}}var Xm=t("oZP7"),vn=t.n(Xm),Jm=t("2G/j"),Zm=t("jc7/"),tn=t.n(Zm),Is=t("Kn5R"),$m=t("g8Lk"),qm=t("ALhs"),Ns=t.n(qm);const Rs=({account:d})=>{const[g,E]=Object(s.useState)(""),[D,B]=Object(s.useState)(""),V=Object(s.useMemo)(()=>Object.assign({},window.commonProps),[]),K=Object(s.useMemo)(()=>Object.keys(V).map(tt=>({label:tt,value:tt})),[V]);return Object(s.useEffect)(()=>{const tt=V[g];B((tt==null?void 0:tt.toString())||"")},[g,V]),Object(n.jsxs)("div",{className:tn.a.container,children:[Object(n.jsxs)("span",{className:tn.a["title-container"],children:[Object(n.jsx)("span",{className:tn.a.title,children:"Set Product Prop"}),Object(n.jsxs)("span",{className:tn.a.count,children:["\xA0 (",Object.keys(V).length,")"]})]}),Object(n.jsxs)("div",{className:tn.a["dropdown-and-textbox"],children:[Object(n.jsxs)("div",{className:tn.a["dropdown-with-title"],children:[Object(n.jsx)("span",{children:"key:"}),Object(n.jsx)(Is.a,{className:tn.a.dropdown,style:{boxShadow:"none",borderRadius:"3px"},menuStyle:{maxHeight:"none"},menuContainerStyle:{maxHeight:"none"},autofocus:!0,options:K,value:g,onChange:E})]}),Object(n.jsxs)("div",{className:tn.a["textbox-with-title"],children:[Object(n.jsx)("span",{className:tn.a["textbox-title"],children:"value:"}),Object(n.jsx)(Ns.a,{className:tn.a.textbox,inputClassName:tn.a["textbox-input"],value:D,onInput:B})]})]}),Object(n.jsx)("span",{className:Object(c.h)(tn.a["switch-bool-value"],{[tn.a["switch-bool-value-visible"]]:D==="true"||D==="false"}),onClick:()=>{B((D!=="true").toString())},children:"switch bool value"}),Object(n.jsx)($m.a,{className:tn.a["save-button"],text:"Save & Refresh",primary:!0,onClick:r()(function*(){yield Object(Xe.postToServer)({url:`/support/updateProductProps/${d.productUniqueId}`,data:{[g]:D}}),window.location.reload()})})]})},{shape:_m,number:tf}=c.b;Rs.propTypes={account:_m({productUniqueId:tf}).isRequired};var ef=Rs,nf=t("MOm0"),cn=t.n(nf),of=()=>{const[d,g]=Object(s.useState)(""),[E,D]=Object(s.useState)(""),B=Object(s.useMemo)(()=>Object.assign({},window._flags),[]),V=Object(s.useMemo)(()=>Object.keys(B).map(K=>({label:K,value:K})),[B]);return Object(s.useEffect)(()=>{const K=B[d];D((K==null?void 0:K.toString())||"")},[d,B]),Object(n.jsxs)("div",{className:cn.a.container,children:[Object(n.jsxs)("span",{className:cn.a["title-container"],children:[Object(n.jsx)("span",{className:cn.a.title,children:"Feature Flags"}),Object(n.jsxs)("span",{className:cn.a.count,children:["\xA0 (",Object.keys(B).length,")"]})]}),Object(n.jsxs)("div",{className:cn.a["dropdown-and-textbox"],children:[Object(n.jsxs)("div",{className:cn.a["dropdown-with-title"],children:[Object(n.jsx)("span",{children:"key:"}),Object(n.jsx)(Is.a,{className:cn.a.dropdown,style:{boxShadow:"none",borderRadius:"3px"},menuStyle:{maxHeight:"none"},menuContainerStyle:{maxHeight:"none"},autofocus:!0,options:V,value:d,onChange:g})]}),Object(n.jsxs)("div",{className:cn.a["textbox-with-title"],children:[Object(n.jsx)("span",{className:cn.a["textbox-title"],children:"value:"}),Object(n.jsx)(Ns.a,{className:cn.a.textbox,inputClassName:cn.a["textbox-input"],value:E,onInput:D})]})]}),Object(n.jsxs)("div",{className:cn.a["launch-darkly-link-container"],onClick:()=>window.open(`https://app.launchdarkly.com/duda/master/features/${d}`),children:[Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://app.launchdarkly.com"}),Object(n.jsx)("span",{className:cn.a["launch-darkly-link"],children:"LaunchDarkly"})]})]})},af=t("lFKM"),rf=t.n(af),sf=t("tLB3"),lf=t.n(sf),cf=t("1vdF"),po=t.n(cf);const df="<id>",uf=["grid","inner_grid"],pf=()=>{const[d,g]=Object(s.useState)(!1),[E,D]=Object(s.useState)([]),[B,V]=Object(s.useState)([]),K=Object(s.useCallback)(()=>{D(mf()),V(hf())},[]),tt=Object(s.useCallback)(()=>{ff({modelMissingElements:E}),gf({modelElementsWithInvalidGridRows:B})},[E,B]),_=Object(s.useMemo)(()=>[...E.map(({childId:bt,parentId:Tt})=>({label:"MissingElement",text:`element with id '${bt}' is set as child of '${Tt}' but it doesn't exist`})),...B.map(({elementId:bt,breakpoint:Tt,gridTemplateRows:Dt})=>({label:"InvalidGridRows",text:`grid element with id '${bt}' at breakpoint '${Tt}' has grid-template-rows style with invalid value of '${Dt}'`}))],[E,B]);return Object(s.useEffect)(()=>{g(!!document.querySelector("[class|=DudaFlexTopBar]"))},[]),Object(s.useEffect)(()=>{d&&K()},[d,K]),Object(n.jsxs)("div",{className:po.a.container,children:[Object(n.jsx)("span",{className:po.a.title,children:"Duda Flex"}),d?_.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:po.a.warnings,children:[Object(n.jsx)("div",{children:"warnings:"}),_.map(bt=>Object(n.jsxs)("div",{children:["-"," ",Object(n.jsxs)("span",{className:po.a["warning-label"],children:["[",bt.label,"]"]})," ",bt.text]},bt))]}),Object(n.jsx)(ta.a,{className:po.a["fix-model-button"],text:"Fix Warnings",primary:!0,onClick:()=>{tt(),window.location.reload()}})]}):Object(n.jsx)("div",{className:po.a["center-message"],children:"All's Good!"}):Object(n.jsx)("div",{className:po.a["center-message"],children:"This popup content can only be viewed within flex mode"})]})};function mf(){const d=[],{structureState:g}=window.editorManager;return Object.keys(g.elements).forEach(E=>{const D=g.elements[E];D.children.length&&D.children.forEach(B=>{g.elements[B]||d.push({childId:B,parentId:E})})}),d}function ff({modelMissingElements:d}){const{structureState:g}=window.editorManager;d.forEach(({childId:E,parentId:D})=>{g.elements[D].removeChild(E)})}function hf(){const d=[];return Object.entries(window.editorManager.styleState.getAllStyles()).forEach(([g,E])=>{Object.entries(E).forEach(([D,B])=>{const V=window.editorManager.getElementType(D);if(uf.includes(V)){const K=B[df]["grid-template-rows"];bf(K)||d.push({elementId:D,breakpoint:g,gridTemplateRows:K})}})}),d}function bf(d){return!d||d==="minmax(max-content, 100%)"?!0:!d.replace(/(minmax\(|px|vh|,\s*max-content\))/g,"").split(" ").map(E=>lf()(E)).some(E=>E===0||!rf()(E))}function gf({modelElementsWithInvalidGridRows:d}){d.forEach(({elementId:g,breakpoint:E,gridTemplateRows:D})=>{window.editorManager.styleState.styleUpdate({id:g,breakpoint:E,styles:{"grid-template-rows":Array.from(Array(D.match(/minmax/g).length),()=>"minmax(100px, max-content)").join(" ")}})})}var vf=pf;const As=({adminUrl:d,account:g,site:E})=>{const[D,B]=Object(s.useState)(""),[V,K]=Object(s.useState)(""),tt=Object(s.useRef)(null),_=Object(s.useMemo)(()=>xf({adminUrl:d,account:g,site:E}).filter(Tt=>Tt.text.toLowerCase().includes(D.toLowerCase())),[d,g,E,D]);Object(s.useMemo)(()=>{_.length>0?K(_[0].text):K("")},[_]),Object(s.useEffect)(()=>{tt.current&&tt.current.scrollIntoView({block:"end"})},[V]);function bt(Tt){if(Tt.key==="Enter"&&V){const Dt=_.find($t=>$t.text===V);Ms(Dt)}else if(Tt.key==="ArrowDown"&&_.length>0){const Dt=_.findIndex($t=>$t.text===V);Dt<_.length-1&&K(_[Dt+1].text)}else if(Tt.key==="ArrowUp"&&_.length>0){const Dt=_.findIndex($t=>$t.text===V);Dt>0&&K(_[Dt-1].text)}}return Object(n.jsxs)("div",{className:vn.a.container,onKeyDown:bt,children:[Object(n.jsxs)("div",{className:vn.a.welcome,children:["welcome, ",Object(n.jsx)("b",{children:g.email})]}),Object(n.jsxs)("div",{className:vn.a["whats-new"],children:[Object(n.jsx)("div",{className:vn.a["whats-new-title"],children:"What's new:"}),Object(n.jsx)("div",{children:"04/10/21 - view feature flags"}),Object(n.jsx)("div",{children:"02/08/21 - new action: clear local storage"}),Object(n.jsx)("div",{children:"13/05/21 - new action: serve js files from localhost"})]}),Object(n.jsx)(Jm.a,{className:vn.a["search-textbox"],placeholder:"Search",defaultValue:D,overrideValue:D,onSearch:B,debounceDelay:50,autofocus:!0,focusOnSearchHotkey:!0}),Object(n.jsx)("div",{className:vn.a["admin-actions-list"],children:_.map(Tt=>Object(n.jsxs)("div",{className:Object(c.h)(vn.a["admin-action-item"],{[vn.a["admin-action-item-selected"]]:Tt.text===V}),ref:Tt.text===V?tt:null,onClick:()=>{Ms(Tt)},children:[Tt.elementBeforeText,Object(n.jsx)("span",{className:vn.a["admin-action-item-text"],children:Tt.text}),Tt.elementAfterText]},Tt.text))})]})};function Ms(d){Object(Qe.b)(),d.action(),Nt.a("d1-admin-actions-action-invoked",{text:d.text})}function xf({adminUrl:d,account:g,site:E}){const D=Boolean(S.a.get("server.for.resources"));return[{text:"Action - create blank row site",elementBeforeText:Object(n.jsx)(Rt.a,{name:"p_landing_page",size:14,iconType:C.m.SVG}),action:()=>{window.location.assign("/editor/d1?specificTemplate=true&themeId=1008252&manifestId=-1")}},{text:"Action - clear local storage",elementBeforeText:Object(n.jsx)(Rt.a,{name:"dynamic_page",size:14,iconType:C.m.SVG}),action:function(){var B=r()(function*(){window.localStorage.clear(),(yield Object(Qe.c)({key:"reload-page",title:"Reload Page?",text:"",yesText:"Yes",noText:"No",closeOnClickOutside:!0}))&&window.location.reload()});return function(){return B.apply(this,arguments)}}()},{text:`Action - ${window.logTracking?"disable":"enable"} logging mixpanel events`,elementBeforeText:Object(n.jsx)(Rt.a,{name:"article-link",size:14,iconType:C.m.SVG}),action:()=>{window.logTracking=!window.logTracking,Object(Qe.e)({title:"Mixpanel Logs",text:`Logging ${window.logTracking?"enabled":"disabled"}. ${window.logTracking?"Logging to dev tools console.":""}`,closeOnClickOutside:!0})}},{text:`Action - load page ${new URLSearchParams(window.location.search).get("lang")?"without":"with"} strings keys`,elementBeforeText:Object(n.jsx)("span",{className:vn.a["lang-override-text"],children:"S"}),action:()=>{const B=new URLSearchParams(window.location.search);B.get("lang")?B.delete("lang"):B.set("lang","override"),window.location.search=B}},{text:"Action - set product prop",elementBeforeText:Object(n.jsx)(Rt.a,{name:"popup",size:14,iconType:C.m.SVG}),action:()=>{Object(Qe.f)(Qe.a.FREESTYLE,{key:"set-product-prop",content:Object(n.jsx)(ef,{account:g}),width:"800px",height:"210px",maxHeight:"100vh",closeOnClickOutside:!0})}},{text:"Action - switch back to last used account",elementBeforeText:Object(n.jsx)(Rt.a,{name:"s_visits",size:14,iconType:C.m.SVG}),action:()=>{const B="/home/switchback",V=window.open(B,"_blank",`height=1,width=1,left=${window.innerWidth/2},top=${window.innerHeight/2}`),K=setInterval(()=>{V.location.pathname!==B&&(V.close(),clearInterval(K),window.location.reload())},300)}},...E&&S.a.getFlag("dashboard.debugPlaygroundPage")?[{text:"Action - view as client",elementBeforeText:Object(n.jsx)(Rt.a,{name:"s_visits",size:14,iconType:C.m.SVG}),action:()=>{const B=`action=viewAsClient&siteIdToConnect=${E.id}&siteAliasToConnect=${E.alias}`;window.open(`/home/dashboard/debug-playground?${B}`)}}]:[],{text:"Admin",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(d)}},{text:"Admin - account info",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(`${d}/vaadin/accountinfo`)}},{text:"Admin - common props monitor",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(`${d}/monitor.jsp?monitor=Common+Properties+Monitor`)}},{text:"Admin - product info",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(`${d}/support/product_info_shards?pid=${g.id}`)}},{text:"Admin - site info",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(`${d}/vaadin/siteinfo/${E?E.alias:""}`)}},{text:"Admin - strings monitor",elementBeforeText:Object(n.jsx)(Rt.a,{name:"admin",size:14,iconType:C.m.SVG}),action:()=>{window.open(`${d}/monitor.jsp?monitor=Strings+Monitor`)}},{text:"Dashboard - create site from template",elementBeforeText:Object(n.jsx)(Rt.a,{name:"duda-square",size:14,iconType:C.m.SVG}),action:()=>{window.open("/home/dashboard/templates")}},{text:`Dev - serve js files from ${D?"server":"localhost"}`,elementBeforeText:Object(n.jsx)(Rt.a,{name:"dev",size:14,iconType:C.m.SVG,color:D?"#f66035":""}),action:()=>{const B={"server.for.resources":D?"":"http://localhost:8888","site.resources.packaged":D,"editor.resources.packaged":D};window.$.ajax({type:"POST",url:`/api/uis/support/updateProductProps/${window.product_unique_id}`,data:JSON.stringify(B),contentType:"application/json",dataType:"json",success:()=>{document.location.reload()}})}},{text:"Docs - duda dev environment setup",elementBeforeText:Object(n.jsx)(Rt.a,{name:"documentation",size:14,iconType:C.m.SVG}),action:()=>{window.open("https://docs.google.com/document/d/1m9XtJDAzvZYZrBxTrge58naorQSouonweDhNEdU24cs/edit")}},{text:"Docs - stackoverflow for duda",elementBeforeText:Object(n.jsx)(Rt.a,{name:"documentation",size:14,iconType:C.m.SVG}),action:()=>{window.open("https://stackoverflow.com/c/duda/questions")}},{text:"Docs - notion",elementBeforeText:Object(n.jsx)(Rt.a,{name:"documentation",size:14,iconType:C.m.SVG}),action:()=>{window.open("https://www.notion.so/duda")}},{text:"Domo",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://duda-co.domo.com"}),action:()=>{window.open("https://duda-co.domo.com/home")}},{text:"Duda Flex",elementBeforeText:Object(n.jsx)("div",{className:vn.a["duda-flex-action-item-text"],children:"\u0192"}),action:()=>{Object(Qe.f)(Qe.a.FREESTYLE,{key:"DudaFlexPopup",content:Object(n.jsx)(vf,{}),width:"800px",height:"300px",maxHeight:"100vh",closeOnClickOutside:!0})}},{text:"Feature Flags",elementBeforeText:Object(n.jsx)(Rt.a,{name:"popup",size:14,iconType:C.m.SVG}),action:()=>{Object(Qe.f)(Qe.a.FREESTYLE,{key:"set-feature-flag",content:Object(n.jsx)(of,{}),width:"800px",height:"210px",maxHeight:"100vh",closeOnClickOutside:!0})}},{text:"Jenkins",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://jenkins.io"}),action:()=>{window.open("https://jenkins.dud4.co/jenkins/")}},{text:"Jenkins - deploy branch",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://jenkins.io"}),action:()=>{window.open("https://jenkins.dud4.co/jenkins/job/deploy_branch/")}},{text:"Jenkins - master",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://jenkins.io"}),action:()=>{window.open("https://jenkins.dud4.co/jenkins/job/master/")}},{text:"Jenkins - tests",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://jenkins.io"}),action:()=>{window.open("https://jenkins.dud4.co/jenkins/view/Tests/")}},{text:"Launchdarkly - feature flags",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://app.launchdarkly.com"}),action:()=>{window.open("https://app.launchdarkly.com")}},{text:"Logz.io",elementBeforeText:Object(n.jsx)("img",{src:"https://s2.googleusercontent.com/s2/favicons?domain_url=https://logz.io"}),action:()=>{window.open("https://app.logz.io/")}},...E?[{text:"Preview - show site in preview",elementBeforeText:Object(n.jsx)(Rt.a,{name:"preview",size:14,iconType:C.m.SVG}),action:()=>{const B=window.location.pathname.replace(/home\/(ed\/)?/,"");window.open(`${B}?preview=true&dm_device=desktop`)}}]:[],{text:"Strings Admin",elementBeforeText:Object(n.jsx)("span",{className:vn.a["strings-admin-element-before-text"],children:"S"}),action:()=>{window.open("http://strings-admin.dudamobile.com/")}}]}const{shape:Ls,number:Si,string:Ei}=c.b;As.propTypes={adminUrl:Ei.isRequired,account:Ls({id:Si.isRequired,email:Ei.isRequired,productUniqueId:Si}).isRequired,site:Ls({id:Si.isRequired,alias:Ei.isRequired})};var Of=As,yf=t("dg3h"),ya=t.n(yf);function Sf({adminUrl:d,account:g,site:E}){Object(Qe.f)(Qe.a.LIGHT_HEADER,{key:"admin-actions",content:Object(n.jsx)(Of,{adminUrl:d,account:g,site:E}),title:"Admin Actions",width:"500px",height:"620px",maxHeight:"100vh",contentClassName:ya.a["admin-actions-popup"],contentInnerClassName:ya.a["admin-actions-popup"],closeOnClickOutside:!0})}function Ef(){Object(Qe.f)(Qe.a.FREESTYLE,{key:"admin-actions-hotkey-changed",content:Object(n.jsx)("h1",{children:"hoykey combination changed to cmd+i / ctrl+i"}),width:"800px",height:"120px",maxHeight:"100vh",contentClassName:ya.a["admin-actions-popup"],contentInnerClassName:ya.a["admin-actions-popup"],closeOnClickOutside:!0})}const Vo=new Ts;function Cf({account:d,environment:g}){window.addEventListener("keydown",Bs),jf({account:d,environment:g})}function Ah(){window.removeEventListener("keydown",Bs),Pf()}function Bs(d){!d||!d.keyCode||Vo.trigger(d)}function jf({account:d,environment:g}){d.isSuperAdmin&&(Vo.on("ctrl+i","open admin actions popup",()=>{Sf({adminUrl:g.adminUrl,account:d})}),Vo.on("ctrl+k","admin actions popup hoykey changed",()=>{Ef()}))}function Pf(){Vo.off("ctrl+i","open admin actions popup"),Vo.off("ctrl+k","admin actions popup hoykey changed")}var ws=t("UN9y"),Tf=t("TjZJ");function Df(){const d="integrationhub",g=window.ms.auth.onAuth(E=>{E&&(If({service:d,token:E.value}),setTimeout(()=>{g()},0))})}function If({service:d,token:g}){const E=S.a.get("ms."+d+".script.location");if(E){Fs({src:E+"static/js/integrationhub.js"});return}Object(Xe.request)({url:"/ms/"+d+"/client/resources",authToken:g}).then(D=>Fs(D))}function Fs(d){if(!d||!d.src)return;const g=document.createElement("script");g.id="appstore",g.src=d.src,g.type="text/javascript",g.async=!0,document.body.appendChild(g)}var Nf=t("/nT+"),Rf=t("7nxj"),Af=t.n(Rf),Mf=t("zH15"),Lf=t.n(Mf);let Sa;const Ea={};let Us=0,vo;function Bf(){Sa||(Sa=Uf())}function wf({event:d,handler:g,accountUuid:E}){const D=Ws({event:d,accountUuid:E});return Sa.then(B=>{Ea[D]=g,B.subscribe(D,g)})}function Mh({event:d,accountUuid:g}){const E=Ws({event:d,accountUuid:g});return Reflect.deleteProperty(Ea,E),Sa.then(D=>D.unsubscribe(E))}function Ff(){return vo&&vo.urlParams?`?${vo.urlParams.map(g=>`${g.name}=${g.value}`).join("&")}&webRootSessionID=${vo.sessionID}`:""}function ks(){return Ci.apply(this,arguments)}function Ci(){return Ci=r()(function*(){return vo=yield(yield fetch("/api/uis/accounts/current/sso")).json(),vo}),Ci.apply(this,arguments)}function Uf(){return ji.apply(this,arguments)}function ji(){return ji=r()(function*(){const d=S.a.get("editor.websockets.enable"),g=kf({websocketEnabled:d});return yield ks(),new Promise(E=>g.connect({},()=>{Object.keys(Ea).forEach(D=>{const B=Ea[D];g.subscribe(D,B)}),E(g)},Vf))}),ji.apply(this,arguments)}function kf({websocketEnabled:d}){if(!d)return{connect(){}};const g=Af.a.over(()=>{if(Us++,Us>S.a.get("editor.websockets.maxretries"))return null;const E=Wf(),D=Ff(),B=S.a.get("editor.websockets.transports");return new Lf.a(E+D,null,{transports:B})});return g.reconnect_delay=5e3,g.debug=co.a,window.clientws=g,g}function Wf(){const g=window.location.protocol.slice(0,-1),E=g||"http",D=S.a.get("editor.websockets.host"),B=S.a.get(`editor.websockets.port.${g}`);return`${E}://${D}:${B}/editor/mvc/ws`}function Vf(d){ks(),Object(co.a)(d)}function Ws({event:d,accountUuid:g}){return`/topic/account.${g}.${d}`}var Hf=t("MjcL"),Vs=t("ZQ9w");function Gf(d){!window.growsurf||d.recurrency==="yearly"&&window.growsurf.getParticipantByEmail(Object(Vs.a)(),g=>{g&&window.growsurf.triggerReferral(Object(Vs.a)())})}function zf({accountUuid:d}){wf({event:"PAYMENT.accountPlanPurchase",handler:g=>{if(g&&g.body){const E=JSON.parse(g.body);Object(Hf.b)(E),Gf(E)}},accountUuid:d})}function Kf(d=[]){setTimeout(()=>{d.forEach(g=>{Qf(g)})},S.a.getFlag("editor.execute.external.scripts.when.idle.waitTime",2e3))}function Hs(d,g=!1){return Ra()(d)?new Promise((E,D)=>{const B=document.createElement("script");B.src=d,B.addEventListener("load",()=>{E(!0)}),document.head.appendChild(B)}):yi()(d)?g?new Promise((E,D)=>{E(d)}):(d(),null):null}function Yf(d){return d.reduce((g,E)=>g.then(()=>E.then(D=>(yi()(D)&&D(),!0))),Promise.resolve([]))}function Qf(d){if(Array.isArray(d)){const g=d.map(E=>Hs(E,!0));return Yf(g)}else return Hs(d)}function Xf({account:d}){d.isProductOwner&&zf({accountUuid:d.uuid})}function Jf({hallDashboardData:d}){$f({hallDashboardData:d}),qf({hallDashboardData:d}),Bf(),Xf(d)}function Zf({hallDashboardData:{account:d,environment:g}}){const{registrationFormCompleted:E,shouldFillRegistrationForm:D,accountDesc:B,creationDate:V,localeCode:K,permissions:tt,lastLoginDate:_}=d;Object(Nf.d)({registrationFormCompleted:E,shouldFillRegistrationForm:D,accountDesc:B,lastLoginDate:_}),_f({accountCreationDate:V,accountLocale:K,isDudaAware:tt.D_AWARE}),th(),Cf({account:d,environment:g}),Kf(window.scriptsToLoadWhenIdle)}function $f({hallDashboardData:d}){Tf.b({data:{account:{id:d.account.id,uuid:d.account.uuid,name:d.account.name,email:d.account.email,localeId:d.account.localeId,localeCode:d.account.localeCode,planType:d.account.planType,isCustomer:d.account.isCustomer,isStaffMember:d.account.isStaffMember,isWLReseller:d.account.isWLReseller,isProductOwner:d.account.isProductOwner,accountOwnerEmail:d.account.accountOwnerEmail,isInTrial:d.account.isInTrial,trialDays:d.account.trialDays,daysBeforeTrialEnds:d.account.daysBeforeTrialEnds,isNewPricing:d.account.isNewPricing,creationDate:d.account.creationDate,permissions:d.account.permissions,isSuperAdmin:d.account.isSuperAdmin},environment:{productType:d.environment.productType}}})}function qf({hallDashboardData:d}){const{uuid:g,name:E,isWLReseller:D,isCustomer:B,isInTrial:V}=d.account;Nt.b({uuid:g,name:E,isWLReseller:D,isCustomer:B,isInTrial:V,moreProperties:d.defaultMixPanelProps})}function _f({accountCreationDate:d,accountLocale:g,isDudaAware:E}){Object(ws.c)({accountCreationDate:d,isDudaAware:E})&&Object(ws.a)({referral:"dashboard",accountLocale:g})}function th(){S.a.get("feature.flag.microServices.active").split(",").filter(g=>!!g).includes("integrationhub")&&Df()}let Pi=null;function eh(d){return Ti.apply(this,arguments)}function Ti(){return Ti=r()(function*({containerId:d,hallDashboardData:g}){Jf({hallDashboardData:g}),Pi=document.getElementById(d);const E=Object(i.b)(Vm,{shellData:g},Pi);return yield E,Zf({hallDashboardData:g}),E}),Ti.apply(this,arguments)}function nh(){return i.a.unmountComponentAtNode(Pi)}},mgBO:function(a,o,t){"use strict";o.__esModule=!0;var e=function(){var r={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,0],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(f,b,h,v,O,p,m){var l=p.length-1;switch(O){case 1:return p[l-1];case 2:this.$=v.prepareProgram(p[l]);break;case 3:this.$=p[l];break;case 4:this.$=p[l];break;case 5:this.$=p[l];break;case 6:this.$=p[l];break;case 7:this.$=p[l];break;case 8:this.$=p[l];break;case 9:this.$={type:"CommentStatement",value:v.stripComment(p[l]),strip:v.stripFlags(p[l],p[l]),loc:v.locInfo(this._$)};break;case 10:this.$={type:"ContentStatement",original:p[l],value:p[l],loc:v.locInfo(this._$)};break;case 11:this.$=v.prepareRawBlock(p[l-2],p[l-1],p[l],this._$);break;case 12:this.$={path:p[l-3],params:p[l-2],hash:p[l-1]};break;case 13:this.$=v.prepareBlock(p[l-3],p[l-2],p[l-1],p[l],!1,this._$);break;case 14:this.$=v.prepareBlock(p[l-3],p[l-2],p[l-1],p[l],!0,this._$);break;case 15:this.$={open:p[l-5],path:p[l-4],params:p[l-3],hash:p[l-2],blockParams:p[l-1],strip:v.stripFlags(p[l-5],p[l])};break;case 16:this.$={path:p[l-4],params:p[l-3],hash:p[l-2],blockParams:p[l-1],strip:v.stripFlags(p[l-5],p[l])};break;case 17:this.$={path:p[l-4],params:p[l-3],hash:p[l-2],blockParams:p[l-1],strip:v.stripFlags(p[l-5],p[l])};break;case 18:this.$={strip:v.stripFlags(p[l-1],p[l-1]),program:p[l]};break;case 19:var u=v.prepareBlock(p[l-2],p[l-1],p[l],p[l],!1,this._$),n=v.prepareProgram([u],p[l-1].loc);n.chained=!0,this.$={strip:p[l-2].strip,program:n,chain:!0};break;case 20:this.$=p[l];break;case 21:this.$={path:p[l-1],strip:v.stripFlags(p[l-2],p[l])};break;case 22:this.$=v.prepareMustache(p[l-3],p[l-2],p[l-1],p[l-4],v.stripFlags(p[l-4],p[l]),this._$);break;case 23:this.$=v.prepareMustache(p[l-3],p[l-2],p[l-1],p[l-4],v.stripFlags(p[l-4],p[l]),this._$);break;case 24:this.$={type:"PartialStatement",name:p[l-3],params:p[l-2],hash:p[l-1],indent:"",strip:v.stripFlags(p[l-4],p[l]),loc:v.locInfo(this._$)};break;case 25:this.$=v.preparePartialBlock(p[l-2],p[l-1],p[l],this._$);break;case 26:this.$={path:p[l-3],params:p[l-2],hash:p[l-1],strip:v.stripFlags(p[l-4],p[l])};break;case 27:this.$=p[l];break;case 28:this.$=p[l];break;case 29:this.$={type:"SubExpression",path:p[l-3],params:p[l-2],hash:p[l-1],loc:v.locInfo(this._$)};break;case 30:this.$={type:"Hash",pairs:p[l],loc:v.locInfo(this._$)};break;case 31:this.$={type:"HashPair",key:v.id(p[l-2]),value:p[l],loc:v.locInfo(this._$)};break;case 32:this.$=v.id(p[l-1]);break;case 33:this.$=p[l];break;case 34:this.$=p[l];break;case 35:this.$={type:"StringLiteral",value:p[l],original:p[l],loc:v.locInfo(this._$)};break;case 36:this.$={type:"NumberLiteral",value:Number(p[l]),original:Number(p[l]),loc:v.locInfo(this._$)};break;case 37:this.$={type:"BooleanLiteral",value:p[l]==="true",original:p[l]==="true",loc:v.locInfo(this._$)};break;case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:v.locInfo(this._$)};break;case 39:this.$={type:"NullLiteral",original:null,value:null,loc:v.locInfo(this._$)};break;case 40:this.$=p[l];break;case 41:this.$=p[l];break;case 42:this.$=v.preparePath(!0,p[l],this._$);break;case 43:this.$=v.preparePath(!1,p[l],this._$);break;case 44:p[l-2].push({part:v.id(p[l]),original:p[l],separator:p[l-1]}),this.$=p[l-2];break;case 45:this.$=[{part:v.id(p[l]),original:p[l]}];break;case 46:this.$=[];break;case 47:p[l-1].push(p[l]);break;case 48:this.$=[];break;case 49:p[l-1].push(p[l]);break;case 50:this.$=[];break;case 51:p[l-1].push(p[l]);break;case 58:this.$=[];break;case 59:p[l-1].push(p[l]);break;case 64:this.$=[];break;case 65:p[l-1].push(p[l]);break;case 70:this.$=[];break;case 71:p[l-1].push(p[l]);break;case 78:this.$=[];break;case 79:p[l-1].push(p[l]);break;case 82:this.$=[];break;case 83:p[l-1].push(p[l]);break;case 86:this.$=[];break;case 87:p[l-1].push(p[l]);break;case 90:this.$=[];break;case 91:p[l-1].push(p[l]);break;case 94:this.$=[];break;case 95:p[l-1].push(p[l]);break;case 98:this.$=[p[l]];break;case 99:p[l-1].push(p[l]);break;case 100:this.$=[p[l]];break;case 101:p[l-1].push(p[l]);break}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{15:[2,48],17:39,18:[2,48]},{20:41,56:40,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:44,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:45,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:41,56:48,64:42,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:49,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,50]},{72:[1,35],86:51},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:52,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:53,38:55,39:[1,57],43:56,44:[1,58],45:54,47:[2,54]},{28:59,43:60,44:[1,58],47:[2,56]},{13:62,15:[1,20],18:[1,61]},{33:[2,86],57:63,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:64,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:65,47:[1,66]},{30:67,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:68,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:69,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:70,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:74,33:[2,80],50:71,63:72,64:75,65:[1,43],69:73,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,79]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,50]},{20:74,53:80,54:[2,84],63:81,64:75,65:[1,43],69:82,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:83,47:[1,66]},{47:[2,55]},{4:84,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:85,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:86,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:87,47:[1,66]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:74,33:[2,88],58:88,63:89,64:75,65:[1,43],69:90,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:91,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:92,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,31:93,33:[2,60],63:94,64:75,65:[1,43],69:95,70:76,71:77,72:[1,78],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,66],36:96,63:97,64:75,65:[1,43],69:98,70:76,71:77,72:[1,78],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,22:99,23:[2,52],63:100,64:75,65:[1,43],69:101,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:74,33:[2,92],62:102,63:103,64:75,65:[1,43],69:104,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,105]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:106,72:[1,107],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,108],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,109]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:55,39:[1,57],43:56,44:[1,58],45:111,46:110,47:[2,76]},{33:[2,70],40:112,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,113]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:74,63:115,64:75,65:[1,43],67:114,68:[2,96],69:116,70:76,71:77,72:[1,78],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,117]},{32:118,33:[2,62],74:119,75:[1,120]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:121,74:122,75:[1,120]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,123]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,124]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,108]},{20:74,63:125,64:75,65:[1,43],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:74,33:[2,72],41:126,63:127,64:75,65:[1,43],69:128,70:76,71:77,72:[1,78],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,129]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,130]},{33:[2,63]},{72:[1,132],76:131},{33:[1,133]},{33:[2,69]},{15:[2,12],18:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:134,74:135,75:[1,120]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,137],77:[1,136]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,138]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],54:[2,55],56:[2,20],60:[2,57],73:[2,81],82:[2,85],86:[2,18],90:[2,89],101:[2,53],104:[2,93],110:[2,19],111:[2,77],116:[2,97],119:[2,63],122:[2,69],135:[2,75],136:[2,32]},parseError:function(f,b){throw new Error(f)},parse:function(f){var b=this,h=[0],v=[null],O=[],p=this.table,m="",l=0,u=0,n=0,x=2,y=1;this.lexer.setInput(f),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var j=this.lexer.yylloc;O.push(j);var I=this.lexer.options&&this.lexer.options.ranges;typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);function C(at){h.length=h.length-2*at,v.length=v.length-at,O.length=O.length-at}function S(){var at;return at=b.lexer.lex()||1,typeof at!="number"&&(at=b.symbols_[at]||at),at}for(var T,R,M,A,W,P,L={},k,G,Y,J;;){if(M=h[h.length-1],this.defaultActions[M]?A=this.defaultActions[M]:((T===null||typeof T=="undefined")&&(T=S()),A=p[M]&&p[M][T]),typeof A=="undefined"||!A.length||!A[0]){var X="";if(!n){J=[];for(k in p[M])this.terminals_[k]&&k>2&&J.push("'"+this.terminals_[k]+"'");this.lexer.showPosition?X="Parse error on line "+(l+1)+`:
`+this.lexer.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[T]||T)+"'":X="Parse error on line "+(l+1)+": Unexpected "+(T==1?"end of input":"'"+(this.terminals_[T]||T)+"'"),this.parseError(X,{text:this.lexer.match,token:this.terminals_[T]||T,line:this.lexer.yylineno,loc:j,expected:J})}}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+M+", token: "+T);switch(A[0]){case 1:h.push(T),v.push(this.lexer.yytext),O.push(this.lexer.yylloc),h.push(A[1]),T=null,R?(T=R,R=null):(u=this.lexer.yyleng,m=this.lexer.yytext,l=this.lexer.yylineno,j=this.lexer.yylloc,n>0&&n--);break;case 2:if(G=this.productions_[A[1]][1],L.$=v[v.length-G],L._$={first_line:O[O.length-(G||1)].first_line,last_line:O[O.length-1].last_line,first_column:O[O.length-(G||1)].first_column,last_column:O[O.length-1].last_column},I&&(L._$.range=[O[O.length-(G||1)].range[0],O[O.length-1].range[1]]),P=this.performAction.call(L,m,u,l,this.yy,A[1],v,O),typeof P!="undefined")return P;G&&(h=h.slice(0,-1*G*2),v=v.slice(0,-1*G),O=O.slice(0,-1*G)),h.push(this.productions_[A[1]][0]),v.push(L.$),O.push(L._$),Y=p[h[h.length-2]][h[h.length-1]],h.push(Y);break;case 3:return!0}}return!0}},i=function(){var c={EOF:1,parseError:function(b,h){if(this.yy.parser)this.yy.parser.parseError(b,h);else throw new Error(b)},setInput:function(b){return this._input=b,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var b=this._input[0];this.yytext+=b,this.yyleng++,this.offset++,this.match+=b,this.matched+=b;var h=b.match(/(?:\r\n?|\n).*/g);return h?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),b},unput:function(b){var h=b.length,v=b.split(/(?:\r\n?|\n)/g);this._input=b+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-h-1),this.offset-=h;var O=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),v.length-1&&(this.yylineno-=v.length-1);var p=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:v?(v.length===O.length?this.yylloc.first_column:0)+O[O.length-v.length].length-v[0].length:this.yylloc.first_column-h},this.options.ranges&&(this.yylloc.range=[p[0],p[0]+this.yyleng-h]),this},more:function(){return this._more=!0,this},less:function(b){this.unput(this.match.slice(b))},pastInput:function(){var b=this.matched.substr(0,this.matched.length-this.match.length);return(b.length>20?"...":"")+b.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var b=this.match;return b.length<20&&(b+=this._input.substr(0,20-b.length)),(b.substr(0,20)+(b.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var b=this.pastInput(),h=new Array(b.length+1).join("-");return b+this.upcomingInput()+`
`+h+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var b,h,v,O,p,m;this._more||(this.yytext="",this.match="");for(var l=this._currentRules(),u=0;u<l.length&&(v=this._input.match(this.rules[l[u]]),!(v&&(!h||v[0].length>h[0].length)&&(h=v,O=u,!this.options.flex)));u++);return h?(m=h[0].match(/(?:\r\n?|\n).*/g),m&&(this.yylineno+=m.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:m?m[m.length-1].length-m[m.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+h[0].length},this.yytext+=h[0],this.match+=h[0],this.matches=h,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(h[0].length),this.matched+=h[0],b=this.performAction.call(this,this.yy,this,l[O],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),b||void 0):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var b=this.next();return typeof b!="undefined"?b:this.lex()},begin:function(b){this.conditionStack.push(b)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(b){this.begin(b)}};return c.options={},c.performAction=function(b,h,v,O){function p(l,u){return h.yytext=h.yytext.substring(l,h.yyleng-u+l)}var m=O;switch(v){case 0:if(h.yytext.slice(-2)==="\\\\"?(p(0,1),this.begin("mu")):h.yytext.slice(-1)==="\\"?(p(0,1),this.begin("emu")):this.begin("mu"),h.yytext)return 15;break;case 1:return 15;case 2:return this.popState(),15;break;case 3:return this.begin("raw"),15;break;case 4:return this.popState(),this.conditionStack[this.conditionStack.length-1]==="raw"?15:(p(5,9),"END_RAW_BLOCK");case 5:return 15;case 6:return this.popState(),14;break;case 7:return 65;case 8:return 68;case 9:return 19;case 10:return this.popState(),this.begin("raw"),23;break;case 11:return 55;case 12:return 60;case 13:return 29;case 14:return 47;case 15:return this.popState(),44;break;case 16:return this.popState(),44;break;case 17:return 34;case 18:return 39;case 19:return 51;case 20:return 48;case 21:this.unput(h.yytext),this.popState(),this.begin("com");break;case 22:return this.popState(),14;break;case 23:return 48;case 24:return 73;case 25:return 72;case 26:return 72;case 27:return 87;case 28:break;case 29:return this.popState(),54;break;case 30:return this.popState(),33;break;case 31:return h.yytext=p(1,2).replace(/\\"/g,'"'),80;break;case 32:return h.yytext=p(1,2).replace(/\\'/g,"'"),80;break;case 33:return 85;case 34:return 82;case 35:return 82;case 36:return 83;case 37:return 84;case 38:return 81;case 39:return 75;case 40:return 77;case 41:return 72;case 42:return h.yytext=h.yytext.replace(/\\([\\\]])/g,"$1"),72;break;case 43:return"INVALID";case 44:return 5}},c.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]+?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],c.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},c}();r.lexer=i;function s(){this.yy={}}return s.prototype=r,r.Parser=s,new s}();o.default=e,a.exports=o.default},ml1U:function(a,o,t){"use strict";var e=t("TqRt");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=e(t("cDcd")),i=e(t("rf6O")),s=e(t("2imF")),c=e(t("LgEJ"));function f(p){var m=p.leftIcon,l=p.className,u=p.addSvgIdPrefix,n=p.iconType,x=p.iconSize;return m?r.default.createElement(s.default,{addSvgIdPrefix:u,"data-auto":"left-icon",className:l,iconType:n,name:m,size:x}):r.default.createElement("span",null)}var b=i.default.string,h=i.default.bool,v=i.default.number;f.propTypes={leftIcon:b,className:b,addSvgIdPrefix:h,iconType:c.default,iconSize:v};var O=r.default.memo(f);o.default=O},moM4:function(a,o,t){"use strict";function e(r){this.type=r}e.prototype.initEvent=function(r,i,s){return this.type=r,this.bubbles=i,this.cancelable=s,this.timeStamp=+new Date,this},e.prototype.stopPropagation=function(){},e.prototype.preventDefault=function(){},e.CAPTURING_PHASE=1,e.AT_TARGET=2,e.BUBBLING_PHASE=3,a.exports=e},mtDC:function(a,o,t){"use strict";var e=t("3kDS"),r=t.n(e),i=t("rf6O"),s=t.n(i),c=t("JnYi"),f=t.n(c),b=t("nKUr"),h=t.n(b);const v=({text:O,onCopy:p,successText:m})=>Object(b.jsxs)("div",{className:f.a.container,children:[Object(b.jsx)("div",{className:f.a.text,children:O}),Object(b.jsx)(r.a,{successText:m,successTextPosition:"left",stringToCopy:O,iconClass:f.a.icon,onCopy:p})]});v.propTypes={text:s.a.string,successText:s.a.string,onCopy:s.a.func},o.a=v},mtLA:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavigationItem-module-navItem-3u3b {
  width: 100%;
  height: 100%;
  list-style: none; }

.NavigationItem-module-link-t73b {
  height: 44px;
  font-weight: 500;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-decoration: none;
  padding-inline-start: 26px;
  padding-inline-end: 24px;
  font-family: Roboto;
  font-size: 14px;
  color: #313131;
  position: relative;
  transition: all 0.4s ease; }
  .NavigationItem-module-link-t73b:hover:not(.NavigationItem-module-child-2m3b) {
    color: var(--button-color); }
    .NavigationItem-module-link-t73b:hover:not(.NavigationItem-module-child-2m3b) [data-auto='icon'] {
      fill: var(--button-color); }
  .NavigationItem-module-link-t73b.NavigationItem-module-child-2m3b {
    font-size: 13px;
    color: #616c79; }
    .NavigationItem-module-link-t73b.NavigationItem-module-child-2m3b:hover {
      background: #fafafb; }
    .NavigationItem-module-link-t73b.NavigationItem-module-child-2m3b.NavigationItem-module-selected-E-3b {
      background: #f5f5f7; }

.NavigationItem-module-title-az3b {
  flex-grow: 1;
  margin-inline-start: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-inline-end: 16px; }

.NavigationItem-module-elementContainer-5S3b {
  min-width: 18px; }

.NavigationItem-module-marker-2P3b:before {
  content: '';
  width: calc(5px * 2);
  height: 40px;
  border-radius: 100px;
  background-color: var(--button-color);
  position: absolute;
  left: calc(5px * -1); }
`,""]),o.locals={navItem:"NavigationItem-module-navItem-3u3b",link:"NavigationItem-module-link-t73b",child:"NavigationItem-module-child-2m3b",selected:"NavigationItem-module-selected-E-3b",title:"NavigationItem-module-title-az3b",elementContainer:"NavigationItem-module-elementContainer-5S3b",marker:"NavigationItem-module-marker-2P3b"}},n3cV:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Root-custom-domain-1s3b {
  display: flex;
  height: 100%;
  overflow: hidden; }
  .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b {
    height: 100%;
    width: 265px; }
    .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b .Root-navigation-3b3b {
      margin: 0;
      padding-block-start: 16px;
      height: 100%;
      background-color: white; }
      .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b .Root-navigation-3b3b li {
        height: auto; }
    .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b nav {
      height: 100%; }
    .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b .Root-with-new-label-3P3b {
      display: flex; }
    .Root-custom-domain-1s3b .Root-navigation-wrapper-2s3b .Root-new-label-1t3b {
      color: var(--button-color);
      border: 1px solid var(--button-color);
      padding-inline-start: 6px;
      padding-inline-end: 6px;
      margin-inline-start: 12px;
      border-radius: 4px;
      text-transform: uppercase;
      font-size: 10px;
      line-height: normal; }
  .Root-custom-domain-1s3b .Root-outer-content-wrapper-3I3b {
    padding-inline-start: 93px;
    height: 100%;
    flex: 1;
    overflow-y: auto; }
    .Root-custom-domain-1s3b .Root-outer-content-wrapper-3I3b .Root-inner-content-wrapper-JJ3b {
      max-width: 990px; }
`,""]),o.locals={"custom-domain":"Root-custom-domain-1s3b","navigation-wrapper":"Root-navigation-wrapper-2s3b",navigation:"Root-navigation-3b3b","with-new-label":"Root-with-new-label-3P3b","new-label":"Root-new-label-1t3b","outer-content-wrapper":"Root-outer-content-wrapper-3I3b","inner-content-wrapper":"Root-inner-content-wrapper-JJ3b"}},n6ct:function(a,o,t){"use strict";var e=t("Yh+D"),r=t("woL0"),i=t("kwwM"),s=t("uzES"),c=t("xSnx"),f=t("8fj+"),b=t("oOIF"),h=function(){};a.exports=function(v,O){var p={};O.forEach(function(l){l.facadeTransport&&(p[l.facadeTransport.transportName]=l.facadeTransport)}),p[c.transportName]=c;var m;v.bootstrap_iframe=function(){var l;f.currentWindowId=b.hash.slice(1);var u=function(n){if(n.source===parent&&(typeof m=="undefined"&&(m=n.origin),n.origin===m)){var x;try{x=i.parse(n.data)}catch(T){h("bad json",n.data);return}if(x.windowId===f.currentWindowId)switch(x.type){case"s":var y;try{y=i.parse(x.data)}catch(T){h("bad json",x.data);break}var j=y[0],I=y[1],C=y[2],S=y[3];if(h(j,I,C,S),j!==v.version)throw new Error('Incompatible SockJS! Main site uses: "'+j+'", the iframe: "'+v.version+'".');if(!e.isOriginEqual(C,b.href)||!e.isOriginEqual(S,b.href))throw new Error("Can't connect to different domain from within an iframe. ("+b.href+", "+C+", "+S+")");l=new s(new p[I](C,S));break;case"m":l._send(x.data);break;case"c":l&&l._close(),l=null;break}}};r.attachEvent("message",u),f.postMessage("s")}}},n6ec:function(a,o,t){var e=t("O0De");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},nMFI:function(a,o,t){var e=t("CQBh");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},nN2g:function(a,o,t){var e=t("fH3i");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},nQG1:function(a,o,t){"use strict";var e=t("8OQS"),r=t.n(e),i=t("k4gB"),s=t("ID16"),c=t("IyIJ"),f=t.n(c),b=t("ZiIQ"),h=t("w2jt"),v=t("LyWx"),O=t("Kpqk"),p=t.n(O),m=t("nKUr");const{string:l,func:u,number:n}=i.b,x=W=>Object(m.jsx)(b.a,{className:Object(i.h)(W.className,p.a.icon),iconType:v.m.SVG,forceTouchTip:!0,name:"question-mark",size:W.size,toolTip:W.toolTip,onClick:W.onClick});x.propTypes={className:l,toolTip:l,onClick:u,size:n},x.defaultProps={size:16};var y=Object(i.l)(x,{styles:p.a,displayName:"HelpIcon"}),j=t("289u");const I=["className","onClick","href","text","icon","arrow","children","disabled","newWindow","relNoReferrer","underlineOnHover","noOverflow","iconProps","styleName","blueLink","innerClassName","noFlex","justify","styles","inline","help"],{string:C,func:S,bool:T,object:R}=i.b,M=W=>{let{className:P,onClick:L,href:k,text:G,icon:Y,arrow:J,children:X,disabled:at,newWindow:z,relNoReferrer:F,underlineOnHover:rt,noOverflow:ct,iconProps:dt,styleName:vt,blueLink:Ot,innerClassName:Mt,noFlex:Rt,justify:Yt,inline:re,help:Xt}=W,pe=r()(W,I);const de=Object(i.h)(P,f.a.main,f.a[vt],{[f.a.underlineOnHover]:rt,[f.a.noOverflow]:ct,[f.a.blueLink]:Ot,[f.a.disabled]:at}),se=Object(s.a)(pe);return k||re?Object(m.jsxs)("a",Object.assign({className:de,href:k,target:z?"_blank":"",rel:F?"noreferrer":"",onClick:at?()=>{}:L},se,{children:[G,X]})):Object(m.jsx)("div",Object.assign({className:de,onClick:at?()=>{}:L},se,{style:J?{textDecoration:"none",fontSize:"14px"}:null,children:Object(m.jsxs)(h.a,{noFlex:Rt,align:"center",justify:Yt,className:Object(i.h)(Mt,f.a.innerContainer),children:[Y&&Object(m.jsx)(b.a,Object.assign({className:f.a.icon,name:Y},dt)),G,J&&Object(m.jsx)(b.a,Object.assign({className:f.a.arrowIcon,name:Object(j.c)(),fontAwesome:!0},dt)),Xt&&Object(m.jsx)(y,{toolTip:Xt,className:Object(i.h)(f.a.help,"helpIcon")}),X]})}))};M.propTypes={className:C,href:C,onClick:S,text:C,icon:C,arrow:T,disabled:T,newWindow:T,relNoReferrer:T,underlineOnHover:T,noOverflow:T,iconProps:R,styleName:C,blueLink:T,innerClassName:C,justify:C,noFlex:T,inline:T,help:C,"data-auto":C};var A=o.a=Object(i.l)(M,{styles:f.a,displayName:"Link"})},nX0T:function(a,o,t){"use strict";(function(e){var r=t("raCH").EventEmitter,i=t("P7XM"),s=t("woL0"),c=t("JqAl"),f=t("Yh+D"),b=function(){};function h(v,O,p){b(v,O);var m=this;r.call(this),setTimeout(function(){m._start(v,O,p)},0)}i(h,r),h.prototype._start=function(v,O,p){b("_start");var m=this,l=new e.XDomainRequest;O=f.addQuery(O,"t="+ +new Date),l.onerror=function(){b("onerror"),m._error()},l.ontimeout=function(){b("ontimeout"),m._error()},l.onprogress=function(){b("progress",l.responseText),m.emit("chunk",200,l.responseText)},l.onload=function(){b("load"),m.emit("finish",200,l.responseText),m._cleanup(!1)},this.xdr=l,this.unloadRef=s.unloadAdd(function(){m._cleanup(!0)});try{this.xdr.open(v,O),this.timeout&&(this.xdr.timeout=this.timeout),this.xdr.send(p)}catch(u){this._error()}},h.prototype._error=function(){this.emit("finish",0,""),this._cleanup(!1)},h.prototype._cleanup=function(v){if(b("cleanup",v),!!this.xdr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xdr.ontimeout=this.xdr.onerror=this.xdr.onprogress=this.xdr.onload=null,v)try{this.xdr.abort()}catch(O){}this.unloadRef=this.xdr=null}},h.prototype.close=function(){b("close"),this._cleanup(!0)},h.enabled=!!(e.XDomainRequest&&c.hasDomain()),a.exports=h}).call(this,t("yLpj"))},nZZ8:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Link-main-7Z3b {
  color: #313131;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  text-decoration: underline;
  align-self: flex-start; }
  .Link-main-7Z3b.Link-underlineOnHover-2M3b {
    text-decoration: none; }
    .Link-main-7Z3b.Link-underlineOnHover-2M3b:hover {
      text-decoration: underline; }
  .Link-main-7Z3b.Link-noOverflow-2b3b {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
  .Link-main-7Z3b .Link-innerContainer-2W3b {
    width: 100%;
    height: 100%;
    position: relative; }

.Link-help-333b {
  margin-inline-start: 3px; }

.Link-icon-1F3b {
  margin-inline-end: 5px; }

.Link-arrowIcon-3g3b {
  font-size: 0.8em;
  color: var(--text-on-light);
  text-decoration: none;
  float: right;
  padding: 0.4em 0 0.3em 0.3em; }

.Link-disabled-3B3b {
  opacity: 0.5;
  pointer-events: none; }

.Link-blueLink-2E3b {
  color: #226eaf;
  font-size: 14px;
  font-family: Source sans pro;
  font-weight: 300;
  padding-block-start: 16px;
  padding-inline-end: 0;
  padding-block-end: 6px;
  padding-inline-start: 0; }
`,""]),o.locals={main:"Link-main-7Z3b",underlineOnHover:"Link-underlineOnHover-2M3b",noOverflow:"Link-noOverflow-2b3b",innerContainer:"Link-innerContainer-2W3b",help:"Link-help-333b",icon:"Link-icon-1F3b",arrowIcon:"Link-arrowIcon-3g3b",disabled:"Link-disabled-3B3b",blueLink:"Link-blueLink-2E3b"}},nbdK:function(a,o,t){var e=t("UNgE");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},nzop:function(a,o,t){"use strict";var e=t("P7XM"),r=t("kwwM"),i=t("raCH").EventEmitter,s=t("EBWB"),c=t("Yh+D"),f=t("8fj+"),b=t("woL0"),h=t("JYLm"),v=function(){};function O(p,m,l){if(!O.enabled())throw new Error("Transport created when disabled");i.call(this);var u=this;this.origin=c.getOrigin(l),this.baseUrl=l,this.transUrl=m,this.transport=p,this.windowId=h.string(8);var n=c.addPath(l,"/iframe.html")+"#"+this.windowId;v(p,m,n),this.iframeObj=f.createIframe(n,function(x){v("err callback"),u.emit("close",1006,"Unable to load an iframe ("+x+")"),u.close()}),this.onmessageCallback=this._message.bind(this),b.attachEvent("message",this.onmessageCallback)}e(O,i),O.prototype.close=function(){if(v("close"),this.removeAllListeners(),this.iframeObj){b.detachEvent("message",this.onmessageCallback);try{this.postMessage("c")}catch(p){}this.iframeObj.cleanup(),this.iframeObj=null,this.onmessageCallback=this.iframeObj=null}},O.prototype._message=function(p){if(v("message",p.data),!c.isOriginEqual(p.origin,this.origin)){v("not same origin",p.origin,this.origin);return}var m;try{m=r.parse(p.data)}catch(u){v("bad json",p.data);return}if(m.windowId!==this.windowId){v("mismatched window id",m.windowId,this.windowId);return}switch(m.type){case"s":this.iframeObj.loaded(),this.postMessage("s",r.stringify([s,this.transport,this.transUrl,this.baseUrl]));break;case"t":this.emit("message",m.data);break;case"c":var l;try{l=r.parse(m.data)}catch(u){v("bad json",m.data);return}this.emit("close",l[0],l[1]),this.close();break}},O.prototype.postMessage=function(p,m){v("postMessage",p,m),this.iframeObj.post(r.stringify({windowId:this.windowId,type:p,data:m||""}),this.origin)},O.prototype.send=function(p){v("send",p),this.postMessage("m",p)},O.enabled=function(){return f.iframeEnabled},O.transportName="iframe",O.roundTrips=2,a.exports=O},"o/li":function(a,o,t){"use strict";var e=t("yXPU"),r=t.n(e),i=t("k4gB"),s=t("U13z"),c=t("9Mi+"),f=t("LyWx"),b=t("9iID");class h{constructor(){this.plans={},this.plansLoadedPromise=void 0,this.accountPlanLoadedPromise=void 0,this.initPlans()}initPlans(){var l=this;return r()(function*(){l.plansLoadedPromise=new Promise(function(){var u=r()(function*(n){const x=yield s.f();l.plans=v(x),n()});return function(n){return u.apply(this,arguments)}}()),l.accountPlanLoadedPromise=new Promise(function(){var u=r()(function*(n){yield s.a(),n()});return function(n){return u.apply(this,arguments)}}())})()}waitForPlansLoad(){return this.plansLoadedPromise}waitForAccountPlanLoader(){return this.accountPlanLoadedPromise}isInTrial(){return s.g()}setInTrial(l){return s.i(l)}getAccountPlanType(){return s.b()}setAccountPlanType(l){s.h(l)}getTrialRemainingDays(){const l=s.e(),u=Math.min(l,s.c()),n=Math.max(u,s.d());return Math.ceil((s.c()-n)/(1e3*60*60*24))}isIvr(){return this.getAccountPlanType()==="ENTERPRISE"}isNewPricingModel(){return Object.values(f.a).includes(this.getAccountPlanType())}isLegacyUser(){return!this.isNewPricingModel()}isLegacyPro(){return this.getAccountPlanType()===f.q.LEGACY_PRO}isBasicPlan(){return this.getAccountPlanType()===f.a.BASIC}isTeamPlan(){return this.getAccountPlanType()===f.a.TEAM}isTrilobiteProFree(){return this.getAccountPlanType()===f.a.TRILOBITE_PRO_FREE}isTrilobiteProPaid(){return this.getAccountPlanType()===f.a.TRILOBITE_PRO_PAID}hasAvailableSiteCreditWithAccountPlan(l){return r()(function*(){return Object(c.getFromServer)({url:"/account/hasFreeCreditForAccountPlanType?accountPlanType="+l})})()}hasAvailableSiteCredit(){return r()(function*(){return Object(c.getFromServer)({url:"/account/hasFreeCredit"})})()}getSiteCreditUsage(){return r()(function*(){return Object(c.getFromServer)({url:"/payment/account/siteCreditUsage"})})()}isSitePartOfSiteCredit({siteId:l}){return r()(function*(){return Object(c.getFromServer)({url:`/payment/sites/${l}/isPartOfSiteCredit`})})()}isAccountFailedBilling(){return r()(function*(){return Object(c.getFromServer)({url:"/account/failedbilling"})})()}getNumOfFreeSites(l){return this.plans[l].numOfFreeSites}getNumOfInternalCollections(l){return this.plans[l].numOfInternalCollections}getNumOfInternalCollectionRows(l){return this.plans[l].numOfInternalCollectionRows}getNumOfStaffMembers(l){return this.plans[l].numOfStaffUsers}getSiteContracts(l){return this.plans[l].siteContracts}isFeatureInPlan(l,u){const n=this.plans[l];return n&&p(n.features,u)}isFeatureInCurrentPlan(l){return this.isFeatureInPlan(this.getAccountPlanType(),l)}getFirstPlanWithFeature(l){return Object.values(f.a).find(u=>this.isFeatureInPlan(u,l))}getFirstPlanWithAllFeatures(l){return Object.values(f.a).find(u=>l.every(n=>this.isFeatureInPlan(u,n)))}isPromoApplicable({plan:l,recurrency:u,account:n}){const x=n?n.isInTrial:this.isInTrial(),y=n?n.planType:this.getAccountPlanType();return l&&f.v.YEARLY===u&&b.a.getFlag("pricing.promo.enabled",!1)&&(x||y===f.a.NONE)}getActiveCoupon(l,u,n){return this.isPromoApplicable({plan:l,recurrency:u,account:n})&&b.a.get(`edtior.pricing.discountBadge.coupon.${l.toLowerCase()}`)||null}getActiveCouponDiscount({plan:l,recurrency:u,account:n}){return this.isPromoApplicable({plan:l,recurrency:u,account:n})&&b.a.get(`edtior.pricing.promo.coupon.discount.${l.toLowerCase()}`)||null}getPriceWithActiveCouponDiscount({price:l,plan:u,recurrency:n,account:x,monthlyPrice:y}){const j=this.getActiveCouponDiscount({plan:u,recurrency:n,account:x});return j?this.formatPrice(this.getPriceWithDiscount({price:y,discount:j})):l}getPriceWithDiscount({price:l,discount:u}){return u?l*u/100:l}formatPrice(l){const u=l.toFixed(2).toString();return u.endsWith("00")?parseInt(l,10).toString():u}getAgencyLockBullets(){return[Object(i.m)("pricing.lock.feature.export"),Object(i.m)("pricing.lock.users.agency"),Object(i.m)("pricing.lock.free.sites.agency")]}getTeamLockBullets(){return[Object(i.m)("account.plan.feature.teamCollab"),Object(i.m)("pricing.lock.white.label"),Object(i.m)("pricing.lock.users.team")]}}h.displayName="AccountPlanService",o.a=new h;function v(m){if(m){const l=Array.isArray(m)?m:JSON.parse(atob(m));return O(l)}else return{}}function O(m){const l={};return m.forEach(u=>{l[u.type]=Object.freeze(u)}),Object.freeze(l)}function p(m,l){return m.indexOf(l)!==-1||l&&l.toString&&m.indexOf(l.toString())!==-1}},"o0/o":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.UpgradeItem-container-1W3b {
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--header-border-color);
  height: 42px;
  background-color: var(--header-color);
  color: var(--header-text-color);
  user-select: none; }
  .UpgradeItem-container-1W3b .UpgradeItem-text-2n3b {
    margin-inline-start: 15px;
    flex: 1; }
  .UpgradeItem-container-1W3b .UpgradeItem-upgrade-button-1b3b {
    color: white;
    border-radius: 15px;
    padding-block-start: 5px;
    padding-inline-end: 9px;
    padding-block-end: 5px;
    padding-inline-start: 9px;
    background-color: #3ac280;
    border: solid 1px #1f2527;
    height: 26px;
    font-size: 12px;
    margin-inline-end: 5px;
    cursor: pointer; }
    .UpgradeItem-container-1W3b .UpgradeItem-upgrade-button-1b3b:hover {
      opacity: 0.8; }
`,""]),o.locals={container:"UpgradeItem-container-1W3b",text:"UpgradeItem-text-2n3b","upgrade-button":"UpgradeItem-upgrade-button-1b3b"}},oD08:function(a,o,t){"use strict";t.d(o,"c",function(){return p}),t.d(o,"d",function(){return m}),t.d(o,"b",function(){return l}),t.d(o,"a",function(){return u});var e=t("INEn"),r=t("G6Oi"),i=t.n(r),s=t("k4gB"),c=t("9iID"),f=t("o/li"),b=t("LyWx"),h=t("RHta"),v=t("nKUr"),O=t.n(v);const p=()=>{e.b.addNotification({type:e.a.timeout,duration:3e4,component:Object(v.jsx)(i.a,{title:Object(s.m)("ui.ed.dashboard.apiQueryError.title"),text:Object(s.m)("ui.ed.dashboard.apiQueryError.text"),type:r.MESSAGE_TYPE.SECTION,alertType:r.ALERT_TYPE.ERROR})})},m=({text:n,duration:x=3e3})=>{e.b.addNotification({type:e.a.timeout,duration:x,component:Object(v.jsx)(i.a,{text:n,type:r.MESSAGE_TYPE.FLOATING,alertType:r.ALERT_TYPE.SUCCESS})})};function l(){return c.a.getFlag("dashboard.customEmailDomain.enabled",!1)?!f.a.isFeatureInCurrentPlan(b.r.CUSTOM_EMAIL_DOMAIN):!0}const u=n=>n===0?h.h.FAILED:n>0?h.h.PENDING:h.h.NOT_VALIDATED},oGBQ:function(a,o,t){"use strict";t.d(o,"a",function(){return r});class e{constructor(){this.start=()=>{this.stop(),this.startTime=Date.now(),this.pauseDuration=0,document.addEventListener("visibilitychange",this.handleVisibilityChange,{passive:!0}),this.handleVisibilityChange()},this.read=()=>Date.now()-this.startTime-this.pauseDuration,this.stop=()=>(document.removeEventListener("visibilitychange",this.handleVisibilityChange,{passive:!0}),this.read()),this.handleVisibilityChange=()=>{document.visibilityState==="hidden"?this.pauseStartTime=Date.now():document.visibilityState==="visible"&&this.pauseStartTime&&(this.pauseDuration+=Date.now()-this.pauseStartTime)}}}e.displayName="Stopwatch";function r(){return new e}},oOIF:function(a,o,t){"use strict";(function(e){a.exports=e.location||{origin:"http://localhost:80",protocol:"http:",host:"localhost",port:80,href:"http://localhost/",hash:""}}).call(this,t("yLpj"))},oRqH:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CustomerEmptySiteListView-container-2h3b {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 120px);
  border-bottom: 1px solid #e1e1e1; }
  .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-moon-container-2w3b {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    margin-top: 15vh; }
    .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-moon-container-2w3b .CustomerEmptySiteListView-moon-icon-283b {
      margin-inline-end: -5px; }
    .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-moon-container-2w3b .CustomerEmptySiteListView-text-container-3o3b {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: -10px; }
      .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-moon-container-2w3b .CustomerEmptySiteListView-text-container-3o3b .CustomerEmptySiteListView-title-1t3b {
        padding: 0;
        font-family: Roboto;
        color: #617379;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px; }
      .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-moon-container-2w3b .CustomerEmptySiteListView-text-container-3o3b .CustomerEmptySiteListView-text-113b {
        padding: 0;
        font-size: 14px;
        color: #727e8c;
        text-align: center; }
  .CustomerEmptySiteListView-container-2h3b .CustomerEmptySiteListView-footer-cB3b {
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between; }
`,""]),o.locals={container:"CustomerEmptySiteListView-container-2h3b","moon-container":"CustomerEmptySiteListView-moon-container-2w3b","moon-icon":"CustomerEmptySiteListView-moon-icon-283b","text-container":"CustomerEmptySiteListView-text-container-3o3b",title:"CustomerEmptySiteListView-title-1t3b",text:"CustomerEmptySiteListView-text-113b",footer:"CustomerEmptySiteListView-footer-cB3b"}},oZP7:function(a,o,t){var e=t("E7CR");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},obdN:function(a,o,t){"use strict";t.d(o,"a",function(){return v});var e=t("k4gB"),r=t("Zzv5"),i=t.n(r),s=t("2i9H"),c=t("tZPy"),f=t.n(c),b=t("nKUr"),h=t.n(b);const v=({title:O,content:p,cancelText:m,confirmText:l,onConfirm:u,onCancel:n})=>{Object(s.f)(s.a.CONFIRMATION,{title:O||Object(e.m)("ui.ed.dashboard.unsavedChangesPopup.title"),content:Object(b.jsx)("div",{className:i.a["popup-content"],children:p||Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f.a,{noPadding:!0,text:Object(e.m)("ui.ed.dashboard.unsavedChangesPopup.defaultContent.line1")}),Object(b.jsx)(f.a,{text:Object(e.m)("ui.ed.dashboard.unsavedChangesPopup.defaultContent.line2")})]})}),text:"",yesText:l||Object(e.m)("ui.ed.dashboard.unsavedChangesPopup.yesText"),noText:m||Object(e.m)("ui.ed.dashboard.unsavedChangesPopup.noText"),onYes:u,onNo:n})}},oquz:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Button-module-main-2C3b {
  flex: none; }
  .Button-module-main-2C3b.Button-module-disabled-1A3b {
    opacity: 0.5;
    cursor: default; }
  .Button-module-main-2C3b.Button-module-mobile-2X3b {
    height: 33px;
    box-sizing: border-box;
    font-size: 15px; }

.Button-module-btn-XU3b {
  border-radius: 30px;
  height: 23px;
  min-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-family: Roboto, sans-serif;
  outline: none;
  cursor: pointer;
  user-select: none; }

.Button-module-primary-FB3b {
  height: 30px;
  background-color: var(--button-color);
  color: var(--text-on-button);
  padding-block-start: 0;
  padding-inline-end: 15px;
  padding-block-end: 0;
  padding-inline-start: 15px; }
  .Button-module-primary-FB3b:not(.Button-module-noHover-363b):hover {
    background-color: var(--button-hover-color); }
  .Button-module-primary-FB3b.Button-module-small-3w3b {
    padding-inline-end: 10px;
    padding-inline-start: 10px;
    height: 24px;
    min-width: 60px;
    width: auto;
    font-weight: 500; }

.Button-module-destructive-yk3b {
  background-color: #d30000; }
  .Button-module-destructive-yk3b:not(.Button-module-noHover-363b):hover {
    background-color: #de2727; }

.Button-module-secondary-3H3b {
  border: 1px solid #616c79;
  color: #616c79;
  min-width: 60px;
  width: auto;
  padding-block-start: 2px;
  padding-inline-end: 10px;
  padding-block-end: 2px;
  padding-inline-start: 10px;
  font-size: 13px;
  height: 21px; }
  .Button-module-secondary-3H3b:not(.Button-module-noHover-363b):hover {
    color: var(--text-on-light);
    border-color: var(--text-on-light); }
    .Button-module-secondary-3H3b:not(.Button-module-noHover-363b):hover svg {
      fill: var(--text-on-light); }
  .Button-module-secondary-3H3b.Button-module-filled-3g3b {
    background-color: #616c79;
    color: var(--text-on-button); }
    .Button-module-secondary-3H3b.Button-module-filled-3g3b:hover {
      color: var(--text-on-button);
      background-color: #828894;
      border-color: #616c79; }
      .Button-module-secondary-3H3b.Button-module-filled-3g3b:hover svg {
        fill: var(--text-on-button); }
  .Button-module-secondary-3H3b.Button-module-big-2U3b {
    height: 28px;
    padding-block-start: 0;
    padding-inline-end: 14px;
    padding-block-end: 0;
    padding-inline-start: 14px; }

.Button-module-left-icon-1D3b {
  padding-inline-end: 7px; }

.Button-module-right-icon-2u3b {
  padding-inline-start: 7px; }

.Button-module-icon-no-padding-353b {
  padding-block-start: 0;
  padding-inline-end: 0;
  padding-block-end: 0;
  padding-inline-start: 0;
  flex: 1 1 auto; }

.Button-module-main-2C3b.Button-module-mobile-2X3b {
  height: 33px;
  box-sizing: border-box;
  font-size: 15px; }
`,""]),o.locals={main:"Button-module-main-2C3b",disabled:"Button-module-disabled-1A3b",mobile:"Button-module-mobile-2X3b",btn:"Button-module-btn-XU3b",primary:"Button-module-primary-FB3b Button-module-btn-XU3b",noHover:"Button-module-noHover-363b",small:"Button-module-small-3w3b",destructive:"Button-module-destructive-yk3b Button-module-primary-FB3b Button-module-btn-XU3b",secondary:"Button-module-secondary-3H3b Button-module-btn-XU3b",filled:"Button-module-filled-3g3b",big:"Button-module-big-2U3b","left-icon":"Button-module-left-icon-1D3b","right-icon":"Button-module-right-icon-2u3b","icon-no-padding":"Button-module-icon-no-padding-353b"}},oxKc:function(a,o,t){var e=t("1ilc");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},p83S:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.HelpIcon-module-help-icon-363b {
  margin-inline-start: 8px;
  cursor: pointer; }
`,""]),o.locals={"help-icon":"HelpIcon-module-help-icon-363b"}},pI2m:function(a,o,t){"use strict";var e=t("cDcd"),r=t("yXPU"),i=t.n(r),s=t("uaoL"),c=t.n(s),f=t("hzps"),b=t.n(f),h=t("9Pyt"),v=t.n(h),O=t("LUOU"),p=t.n(O),m=t("lpBp"),l=t.n(m),u=t("pIMm"),n=t.n(u),x=t("M4Wz"),y=t.n(x),j=t("2imF"),I=t.n(j),C=t("rf6O"),S=t.n(C),T=t("k4gB"),R=t("7mRB"),M=t.n(R),A=t("5Uqf"),W=t.n(A),P=t("RHta"),L=t("wy3E"),k=t("LyWx"),G=t("P8Th"),Y=t("oD08"),J=t("FfLZ"),X=t("9iID"),at=t("c01f"),z=t("lutX"),F=t("nKUr");const rt=({setPageState:Ct,defaultEmailDomain:ut})=>{const{account:Ft,blockUI:Ht,unblockUI:ne}=Object(G.b)(),oe=()=>{Object(Y.b)()||(Ct(P.f.CONNECTING),Object(J.a)(P.g.emailDomainCustomStart,{referral:"start"}))},le=function(){var Q=i()(function*(){Object(J.a)(P.g.pricingOpenAccountPlanPopup,{referral:"upgrade lock - custom email domain"}),(yield Object(L.a)()).upgradeAccount({referral:`Upgrade lock - ${k.r.CUSTOM_EMAIL_DOMAIN}`,keepQueryParamsOnReload:!1,account:Ft,blockUI:Ht,unblockUI:ne})});return function(){return Q.apply(this,arguments)}}(),ft=Object(Y.b)(),yt=()=>Object(F.jsx)(n.a,{placement:"right-start",offset:[-66,8],showArrow:!0,hidePopover:!ft,hideDelay:1500,content:Object(F.jsx)(l.a,{className:M.a["feature-lock"],buttonText:Object(T.m)("common.upgrade"),title:Object(T.m)("ui.ed.dashboard.customEmailDomain.lock.feature.title"),featuresList:Object(T.m)("ui.ed.dashboard.customEmailDomain.lock.feature.list").split(", "),subTitle:Object(T.m)("ui.ed.dashboard.customEmailDomain.lock.feature.subTitle"),onClick:le}),children:X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(y.a,{type:"text",size:"small",domAttrs:{"data-auto":"connect-button"},onClick:oe,text:Object(T.m)("ui.ed.dashboard.customDomain.connect"),endIconProps:{name:"arrow-right-short",size:18,iconType:j.Type.SVG}}):Object(F.jsx)(v.a,{text:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.connectButton"),small:!0,onClick:oe,className:M.a.button,disabled:ft,"data-auto":"connect-button"})});return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(c.a,{title:X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(z.a,{helpCenterArticleId:"custom_wl_email",tooltipId:"emails",title:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),toolTip:Object(T.m)("ui.ed.dashboard.customDomain.customEmailDomain.infoTooltip")}):Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),contentClass:W.a["content-card"],className:W.a.card,children:X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(at.a,{domain:ut,connectMessage:Object(T.m)("ui.ed.dashboard.custom.email.domain.connectCustomDomainMessage"),connectButton:yt()}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:M.a["content1-wrapper"],children:[Object(F.jsx)(b.a,{flex:!1,className:M.a.label,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.content.1")}),Object(F.jsx)(p.a,{type:O.StatusType.NEUTRAL,text:ut,className:M.a.status})]}),Object(F.jsxs)(b.a,{inactive:!0,noPaddingTop:!0,className:M.a["or-text"],children:["-"," ",Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.content.or")," ","-"]}),Object(F.jsx)(b.a,{className:M.a.label,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.content.2")}),yt()]})})})};rt.propTypes={setPageState:S.a.func.isRequired,defaultEmailDomain:S.a.string.isRequired};var ct=rt,dt=t("TSYQ"),vt=t.n(dt),Ot=t("G6Oi"),Mt=t.n(Ot),Rt=t("Fbre"),Yt=t.n(Rt),re=t("yftf"),Xt=t.n(re),pe=t("3kd8"),de=t.n(pe),se=t("2ir5"),Qt=t.n(se),St=t("Qej2"),Ut=t.n(St),zt=t("C5xZ"),Jt=t.n(zt);const ge=X.a.getFlag("dashboard.domain.new.enabled",!1)?Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"):Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.cardTitle"),fe=({children:Ct,footer:ut,step:Ft})=>Object(F.jsx)(c.a,{title:X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(z.a,{helpCenterArticleId:"custom_wl_email",tooltipId:"emails",title:ge,toolTip:Object(T.m)("ui.ed.dashboard.customDomain.customEmailDomain.infoTooltip")}):ge,contentClass:W.a["content-card"],className:W.a.card,footer:Object(F.jsx)("div",{className:Ut.a.footer,children:ut}),headerRightContent:Object(F.jsx)(Jt.a,{steps:P.b,currentStep:Ft,isNumerical:!0,isDisabled:!0}),children:Ct});fe.propTypes={footer:S.a.node,step:S.a.number.isRequired};var ce=fe;const Vt=({localPartValue:Ct,onLocalPartChange:ut,domainValue:Ft,onDomainChange:Ht,onLocalPartBlur:ne,onCancel:oe,registerDomain:le,onDomainBlur:ft,domainError:yt,defaultEmailDomain:Q,step:xt,registerDomainApiError:Gt,localPartError:ae})=>{const be=Object(e.useRef)(null);Object(e.useEffect)(()=>{be.current.focus()},[]);const Ce=Object(F.jsxs)(F.Fragment,{children:[X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(y.a,{type:"text",size:"small",variant:"grey",onClick:oe,className:Ut.a["cancel-button"],text:Object(T.m)("ui.cancel"),domAttrs:{"data-auto":"reset-to-default-domain-button"}}):Object(F.jsx)(de.a,{text:Object(T.m)("ui.cancel"),className:Ut.a["card-cancel-button"],justify:"center",onClick:oe,"data-auto":"reset-to-default-domain-button"}),Object(F.jsx)(v.a,{text:Object(T.m)("ui.next"),onClick:le,disabled:!(!yt&&!ae),small:!0,className:Ut.a["next-button"],"data-auto":"register-domain-button"})]});return Object(F.jsxs)(ce,{footer:Ce,step:xt,children:[Object(F.jsx)(b.a,{title:!0,className:Qt.a.title,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.title")}),Object(F.jsx)("div",{className:Qt.a.content,children:Object(T.k)(Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.content"))}),Object(F.jsxs)("div",{className:Qt.a["fields-container"],children:[Object(F.jsxs)("div",{className:Qt.a["field-wrapper"],children:[Object(F.jsx)(Xt.a,{className:vt()(Qt.a["domain-prefix"],{[Qt.a["input-error"]]:ae}),value:Ct,onChange:ut,onBlur:ne,"data-auto":"input-local-part"}),ae&&Object(F.jsx)(Yt.a,{className:Qt.a["error-message"],text:ae})]}),Object(F.jsx)("span",{className:Qt.a["at-sign"],children:"@"}),Object(F.jsxs)("div",{className:Qt.a["field-wrapper"],children:[Object(F.jsx)(Xt.a,{className:vt()(Qt.a["domain-affix"],{[Qt.a["input-error"]]:yt}),value:Ft,onChange:Ht,onBlur:ft,"data-auto":"input-domain",ref:be}),yt&&Object(F.jsx)(Yt.a,{className:Qt.a["error-message"],text:yt})]})]}),Object(F.jsx)(b.a,{className:Qt.a.disclaimer,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.disclaimer",{domain:Q})}),Gt===P.d.EMAIL_DOMAIN_ALREADY_IN_USE&&Object(F.jsx)(Mt.a,{grayBackground:!0,type:Ot.MESSAGE_TYPE.FLOATING,alertType:Ot.ALERT_TYPE.ERROR,text:Object(T.m)("dashboard.customDomain.domainAlreadyTaken"),shadow:!1})]})};Vt.propTypes={defaultEmailDomain:S.a.string.isRequired,localPartValue:S.a.string.isRequired,onLocalPartChange:S.a.func.isRequired,domainValue:S.a.string.isRequired,onDomainChange:S.a.func.isRequired,localPartError:S.a.string,domainError:S.a.string,onLocalPartBlur:S.a.func.isRequired,onDomainBlur:S.a.func.isRequired,onCancel:S.a.func.isRequired,registerDomain:S.a.func.isRequired,registerDomainApiError:S.a.oneOf(Object.values(P.d)),step:S.a.number.isRequired};var nt=Vt,st=t("+QRC"),ot=t.n(st),pt=t("XOti"),gt=t.n(pt),Lt=t("ZAv2"),it=t.n(Lt),ht=t("mtDC");const H=({data:Ct})=>{switch(Ct.status){case P.c.VALIDATED:return Object(F.jsx)(p.a,{text:Object(T.m)("common.status.verified"),type:O.StatusType.POSITIVE});case P.c.PENDING:return Object(F.jsx)(p.a,{text:Object(T.m)("common.status.pending"),type:O.StatusType.PENDING});case P.c.FAILED:return Object(F.jsx)(p.a,{text:Object(T.m)("common.status.failed"),type:O.StatusType.ERROR});default:return null}};H.propTypes={data:S.a.shape({status:S.a.string}).isRequired};var N=H;const U=()=>Object(J.a)(P.g.emailDomainCustomCopyRecord),q=[{headerName:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.type"),field:"type",maxWidth:120,valueGetter:()=>Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.cell.cname")},{headerName:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.name"),field:"name",maxWidth:220,cellRendererFramework:({data:Ct})=>Object(F.jsx)(ht.a,{text:Ct.name,successText:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.copied.name")})},{headerName:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.value"),field:"value",cellRendererFramework:({data:Ct})=>Object(F.jsx)(ht.a,{text:Ct.value,onCopy:U,successText:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.copied.value")})},{headerName:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.table.column.status"),field:"status",maxWidth:150,cellRendererFramework:N}];var w=t("EAKQ"),Z=t("XfAf"),mt=t.n(Z),Et=t("5Fiw");function It({domainData:Ct,defaultEmailDomain:ut}){const Ft=Object(Et.a)(Date.now()+Ct.timeLeftToValidationInMilliseconds),Ht=Object(Y.a)(Ct==null?void 0:Ct.timeLeftToValidationInMilliseconds);if(Ht===P.h.NOT_VALIDATED)return null;if(Ht===P.h.FAILED)return Object(F.jsx)(Mt.a,{className:mt.a.message,type:Ot.MESSAGE_TYPE.INLINE,alertType:Ot.ALERT_TYPE.ERROR,grayBackground:!0,shadow:!1,text:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.validation.notConnected.text"),title:Object(T.m)("dashboard.customDomain.dashboardDomain.validation.notConnected.title")});const ne=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.validation.pending.text",{day:Ft,defaultEmailDomain:ut});return Object(F.jsx)(Mt.a,{className:mt.a.message,type:Ot.MESSAGE_TYPE.INLINE,alertType:Ot.ALERT_TYPE.WARNING,grayBackground:!0,shadow:!1,text:ne,title:Object(T.m)("dashboard.customDomain.dashboardDomain.validation.pending.title"),customIcon:()=>Object(F.jsx)(I.a,{name:"pending",size:18,iconType:j.Type.SVG,className:mt.a["pending-icon"]}),"data-auto":"pending-message"})}It.propTypes={domainData:P.i,defaultEmailDomain:S.a.string};var lt=It,et=t("TP7S"),kt=t.n(et);const Bt=({value:Ct})=>{ot()(Ct)},At=({domainData:Ct,defaultEmailDomain:ut,scrollToContent:Ft,onOpenRevertDomainModal:Ht,onValidateDomain:ne,onRevalidateDomain:oe,step:le})=>{const ft=Object(F.jsxs)(F.Fragment,{children:[X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(y.a,{type:"text",size:"small",variant:"grey",onClick:Ht,className:Ut.a["cancel-button"],text:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.revertModal.revertButton"),domAttrs:{"data-auto":"reset-to-default-domain-button"}}):Object(F.jsx)(de.a,{text:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.revertModal.revertButton"),className:Ut.a["card-cancel-button"],justify:"center",onClick:Ht,"data-auto":"reset-to-default-domain-button"}),kt()(Ct.timeLeftToValidationInMilliseconds)?Object(F.jsx)(v.a,{text:Object(T.m)("dashboard.customDomain.validate"),onClick:ne,small:!0,className:Ut.a["next-button"],"data-auto":"validate-button"}):Object(F.jsx)(v.a,{text:Object(T.m)("dashboard.customDomain.revalidate"),onClick:oe,small:!0,className:Ut.a["next-button"],"data-auto":"revalidate-button"})]});return Object(F.jsxs)(ce,{footer:ft,step:le,children:[Object(F.jsx)(p.a,{type:O.StatusType.NEUTRAL,text:`${Ct.localPart}@${Ct.domain}`,dataAuto:"connect-domain-text"}),Object(F.jsxs)("div",{className:it.a["title-wrapper"],children:[Object(F.jsx)(b.a,{title:!0,className:it.a.title,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.title")}),Object(F.jsx)(I.a,{className:it.a["help-icon"],name:"question-mark",size:16,iconType:j.Type.SVG,onClick:()=>Object(w.a)("specific_domain_hosts")})]}),Object(F.jsx)(b.a,{className:it.a.description,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.contentText")}),Object(F.jsx)("div",{className:it.a.hint,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.hint",{defaultEmailDomain:ut})}),Object(F.jsx)(lt,{domainData:Ct,defaultEmailDomain:ut}),Object(F.jsx)(gt.a,{columnDefs:q,rowData:Ct.dnsRecordsList,domLayout:"autoHeight",noTitleTheme:!0,onFirstDataRendered:Ft,onCellDoubleClicked:Bt})]})};At.propTypes={domainData:P.i,defaultEmailDomain:S.a.string,scrollToContent:S.a.func.isRequired,onOpenRevertDomainModal:S.a.func.isRequired,onValidateDomain:S.a.func.isRequired,onRevalidateDomain:S.a.func.isRequired,step:S.a.number.isRequired};var jt=At,wt=t("9Mi+"),Zt=t("ddYX");const Oe=function(){var Ct=i()(function*(){try{const ut=yield Object(wt.getFromServer)({url:"/resellerssettings/domains/email"});return Object.assign({dnsRecordsList:[]},ut)}catch(ut){return yield Object(Zt.b)({logLevel:Zt.a.ERROR,dataString:ut}),null}});return function(){return Ct.apply(this,arguments)}}(),Se=function(){var Ct=i()(function*(){try{return Object(wt.deleteToServer)({url:"/resellerssettings/domains/email"})}catch(ut){throw yield Object(Zt.b)({logLevel:Zt.a.ERROR,dataString:{error:ut,url:"/resellerssettings/domains/email",type:"DELETE"}}),ut}});return function(){return Ct.apply(this,arguments)}}(),He=function(){var Ct=i()(function*(ut,Ft){try{return Object(wt.postToServer)({url:"/resellerssettings/domains/email/register",data:{domain:Ft,localPart:ut}})}catch(Ht){throw yield Object(Zt.b)({logLevel:Zt.a.ERROR,dataString:Ht}),Ht}});return function(Ft,Ht){return Ct.apply(this,arguments)}}(),to=function(){var Ct=i()(function*(){try{return Object(wt.postToServer)({url:"/resellerssettings/domains/email/validate"})}catch(ut){throw yield Object(Zt.b)({logLevel:Zt.a.ERROR,dataString:{error:ut,url:"/resellerssettings/domains/email/validate",type:"POST"}}),ut}});return function(){return Ct.apply(this,arguments)}}(),wn=function(){var Ct=i()(function*(){const ut="/resellerssettings/domains/email/default";try{return(yield Object(wt.getFromServer)({url:ut})).value}catch(Ft){return yield Object(Zt.b)({logLevel:Zt.a.ERROR,dataString:{error:Ft,url:ut,type:"GET"}}),""}});return function(){return Ct.apply(this,arguments)}}();var $e=t("L2to");const Dn=(Ct,ut,Ft)=>{const{blockUI:Ht,unblockUI:ne}=Object(G.b)(),[oe,le]=Object(e.useState)((ut==null?void 0:ut.validated)===!1?P.a.VALIDATE_RECORDS:P.a.ENTER_DOMAIN),[ft,yt]=Object(e.useState)("noreply"),[Q,xt]=Object(e.useState)(""),[Gt,ae]=Object(e.useState)(!0),[be,Ce]=Object(e.useState)(!0),[ue,Ne]=Object(e.useState)(P.d.NONE),[rn,Nn]=Object(e.useState)(null),Ye=Ae=>{yt(Ae.target.value)},Kn=Ae=>{xt(Ae.target.value),Nn(Object($e.a)(Ae.target.value))},Yn=Ae=>{ae(!1)},eo=Ae=>{Ce(!1)},Rn=Object($e.c)(ft),no=()=>{const Ae=Object($e.b)(Q);if(Ae){Nn(Ae);return}Ht(),Ne(P.d.NONE),He(ft,Q).then(je=>{Ct(je),le(P.a.VALIDATE_RECORDS),Object(J.a)(P.g.emailDomainCustomSubmitDomain,{referral:"next"})}).catch(je=>{var Le;(je==null||(Le=je.responseJSON)===null||Le===void 0?void 0:Le.message)===P.e?Ne(P.d.EMAIL_DOMAIN_ALREADY_IN_USE):Ne(P.d.GENERAL_ERROR)}).finally(()=>{ne()})},An=()=>(Ht(),to().then(Ae=>{Ct(Ae),Ae.validated&&Ft(P.f.CONNECTED)}).catch(Ae=>{Object(Y.c)()}).finally(()=>{ne()})),Qn=()=>{An(),Object(J.a)(P.g.emailDomainCustomValidate)},fn=()=>{An();const Ae=Object(Y.a)(ut==null?void 0:ut.timeLeftToValidationInMilliseconds);Object(J.a)(P.g.emailDomainCustomRevalidate,{validationState:Ae.toLowerCase()})},hn=()=>{Ft(P.f.NON_CONNECTED)},Sn=Object(e.useRef)(),Mn=Object(e.useCallback)(()=>{setTimeout(()=>{!Sn.current||Sn.current.scrollIntoView({block:"start",inline:"nearest",behavior:"smooth"})},200)},[]);return{step:oe,setStep:le,onDomainBlur:eo,onLocalPartBlur:Yn,onDomainChange:Kn,onLocalPartChange:Ye,domainError:rn,localPartError:Rn,isDomainPersist:be,isLocalPartPersist:Gt,domainValue:Q,localPartValue:ft,registerDomainApiError:ue,onCloseErrorModal:()=>{Ne(P.d.NONE)},registerDomain:no,onCancel:hn,onValidateDomain:Qn,onRevalidateDomain:fn,scrollLineNode:Sn,scrollToContent:Mn}};var ze=t("FDPp"),Me=t.n(ze),Fn=t("bdnp"),we=t.n(Fn);const In=({show:Ct,onClose:ut,onTry:Ft})=>Object(F.jsxs)(Me.a,{onClose:ut,className:we.a["pending-modal"],show:Ct,children:[Object(F.jsx)(Me.a.CloseButton,{onClick:ut,className:we.a["close-button"]}),Object(F.jsxs)(Mt.a,{shadow:!0,grayBackground:!0,type:Ot.MESSAGE_TYPE.SECTION,title:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.errorAlert.title"),alertType:Ot.ALERT_TYPE.ERROR,className:we.a["error-message"],children:[Object(F.jsx)(b.a,{noPadding:!0,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.errorAlert.text1")}),Object(F.jsx)(b.a,{noPadding:!0,children:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.errorAlert.text2")}),Object(F.jsx)(v.a,{text:Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step1.tryButton"),onClick:Ft,secondary:!0,className:we.a["try-button"]})]})]});In.propTypes={show:S.a.bool.isRequired,onClose:S.a.func.isRequired,onTry:S.a.func.isRequired};var zn=In;const qe=X.a.getFlag("dashboard.domain.new.enabled",!1),xn=({setDomainData:Ct,domainData:ut,defaultEmailDomain:Ft,setPageState:Ht,onOpenRevertDomainModal:ne})=>{const{domainValue:oe,onDomainBlur:le,onDomainChange:ft,onLocalPartBlur:yt,onLocalPartChange:Q,domainError:xt,localPartError:Gt,isDomainPersist:ae,isLocalPartPersist:be,localPartValue:Ce,step:ue,registerDomainApiError:Ne,onCloseErrorModal:rn,registerDomain:Nn,onCancel:Ye,onValidateDomain:Kn,onRevalidateDomain:Yn,scrollLineNode:eo,scrollToContent:Rn}=Dn(Ct,ut,Ht),no=ue===P.a.ENTER_DOMAIN,An=ue===P.a.VALIDATE_RECORDS;return Object(F.jsxs)(F.Fragment,{children:[!qe&&Object(F.jsx)("div",{ref:eo,className:Ut.a["scroll-line"]}),no&&Object(F.jsx)(nt,{localPartValue:Ce,onLocalPartChange:Q,domainValue:oe,onDomainChange:ft,onLocalPartBlur:yt,onDomainBlur:le,domainError:!ae&&xt,localPartError:!be&&Gt,defaultEmailDomain:Ft,onCancel:Ye,registerDomain:Nn,step:ue,registerDomainApiError:Ne}),An&&Object(F.jsx)(jt,{domainData:ut,defaultEmailDomain:Ft,scrollToContent:qe?()=>{}:Rn,onOpenRevertDomainModal:ne,onValidateDomain:Kn,onRevalidateDomain:Yn,step:ue}),Object(F.jsx)(zn,{show:Ne===P.d.GENERAL_ERROR,onClose:rn,onTry:Nn})]})};xn.propTypes={setDomainData:S.a.func.isRequired,defaultEmailDomain:S.a.string.isRequired,setPageState:S.a.func.isRequired,onOpenRevertDomainModal:S.a.func.isRequired,domainData:P.i};var Un=xn,nn=t("n6ec"),Wt=t.n(nn),Ee=t("Mjr1"),ke=t("VQpA");const qt=72*60*60*1e3,Fe=({onOpenRevertDomainModal:Ct,domainData:ut,defaultEmailDomain:Ft})=>{const Ht=((ut==null?void 0:ut.validationSuccessDateInMilliseconds)||0)+qt,ne=Object(Et.a)(Ht),oe=Date.now()>Ht,le=X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1);return Object(F.jsx)(F.Fragment,{children:Object(F.jsx)(c.a,{title:le?Object(F.jsx)(z.a,{helpCenterArticleId:"custom_wl_email",tooltipId:"emails",title:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),toolTip:Object(T.m)("ui.ed.dashboard.customDomain.customEmailDomain.infoTooltip")}):Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),headerRightContent:le?Object(F.jsx)(ke.a,{revertAction:{onClick:Ct,"data-auto":"revert-email-domain-button"}}):"",contentClass:W.a["content-card"],className:W.a.card,children:le?Object(F.jsx)(Ee.a,{success:!0,inlineMessageText:!oe&&Object(T.k)(Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.message.domain",{date:ne,domain:Ft})),domain:`${ut==null?void 0:ut.localPart}@${ut==null?void 0:ut.domain}`,subtitle:Object(T.m)("ui.ed.dashboard.customDomain.emailDomain.allSet")}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:Wt.a["text-wrapper"],children:[Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.content1"),Object(F.jsx)(p.a,{type:O.StatusType.POSITIVE,text:`${ut==null?void 0:ut.localPart}@${ut==null?void 0:ut.domain}`,className:Wt.a.status,dataAuto:"connected-domain-text"})]}),oe?Object(F.jsx)("div",{className:Wt.a["disclaimer-wrapper"],children:"~"}):Object(F.jsx)(Mt.a,{type:Ot.MESSAGE_TYPE.SECTION,alertType:Ot.ALERT_TYPE.NOTE,text:Object(T.k)(Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.message.domain",{date:ne,domain:Ft})),grayBackground:!0,shadow:!1,className:Wt.a.message}),Object(F.jsx)("div",{className:Wt.a["disclaimer-wrapper"],children:Object(F.jsxs)("div",{children:[Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.content2"),` ${Ft} `,Object(F.jsxs)("span",{className:Wt.a.button,onClick:Ct,"data-auto":"revert-email-domain-button",children:[Object(T.m)("ui.form.clickHere"),"."]})]})})]})})})};Fe.propTypes={onOpenRevertDomainModal:S.a.func.isRequired,defaultEmailDomain:S.a.string.isRequired,domainData:P.i};var _t=Fe,on=t("Jwdp");function _e({onRefresh:Ct}){return Object(F.jsx)(c.a,{title:X.a.getFlag("custom.email.domain.full.domain.ui.enabled",!1)?Object(F.jsx)(z.a,{helpCenterArticleId:"custom_wl_email",tooltipId:"emails",title:Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),toolTip:Object(T.m)("ui.ed.dashboard.customDomain.customEmailDomain.infoTooltip")}):Object(T.m)("ui.ed.dashboard.customEmailDomain.initialCard.title"),contentClass:W.a["content-card"],className:W.a.card,children:Object(F.jsx)(on.a,{onRefresh:Ct})})}_e.propTypes={onRefresh:S.a.func.isRequired};var On=_e,mn=t("o/li");const kn=()=>{Object(e.useEffect)(()=>{Object(J.a)(P.g.whiteLabelDomainEnter,{referral:"topBar"})},[]);const{blockUI:Ct,unblockUI:ut}=Object(G.b)(),[Ft,Ht]=Object(e.useState)(P.f.FETCHING),[ne,oe]=Object(e.useState)(null),[le,ft]=Object(e.useState)(null),[yt,Q]=Object(e.useState)(!1),xt=Object(e.useCallback)(()=>{Ct();const Ce=(Ne,rn)=>{if(rn){Ht(P.f.ERROR);return}if(!Ne){oe(null),Ht(P.f.NON_CONNECTED);return}if(!Ne.validated){oe(Ne),Ht(P.f.CONNECTING);return}oe(Ne),Ht(P.f.CONNECTED)},ue=Ne=>{ft(Ne)};Promise.all([Oe(),wn(),mn.a.waitForPlansLoad(),mn.a.waitForAccountPlanLoader()]).then(([Ne,rn])=>{Ce(Ne,!rn),ue(rn)}).finally(()=>{ut()})},[]);return Object(e.useEffect)(()=>{xt()},[xt]),{domainData:ne,defaultEmailDomain:le,pageState:Ft,setPageState:Ht,setDomainData:oe,onRevertDomain:()=>{Ft===P.f.CONNECTED&&Object(J.a)(P.g.emailDomainCustomRevertToDefault,{referral:"validatedDomain"}),Ct(),Q(!1),Se().then(()=>{Ht(P.f.NON_CONNECTED),oe(null)}).catch(Ce=>{Object(Y.c)()}).finally(()=>{ut()})},onCloseRevertDomainModal:()=>{Q(!1)},isRevertDomainModalOpen:yt,onOpenRevertDomainModal:()=>{Q(!0)},fetchEmailDomainData:xt}};var yn=t("9NJp"),Ke=t.n(yn);const an=(Ct,ut)=>{let Ft,Ht,ne;return Ct===P.f.CONNECTING&&(ne=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.revertModal.name"),Ft=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.revertModal.text",{domain:ut}),Ht=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectingDomain.Step2.revertModal.revertButton",{domain:ut})),Ct===P.f.CONNECTED&&(ne=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.revertModal.title"),Ft=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.revertModal.text",{domain:ut}),Ht=Object(T.m)("ui.ed.dashboard.customEmailDomain.connectedDomain.revertModal.revertButton")),{title:ne,content:Ft,revertButton:Ht}},Ie=({show:Ct,onClose:ut,onRevertDomain:Ft,defaultEmailDomain:Ht,pageState:ne})=>{const{title:oe,content:le,revertButton:ft}=an(ne,Ht);return Object(F.jsx)(Me.a,{show:Ct,children:Ct&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(Me.a.Header,{children:[Object(F.jsx)(Me.a.Title,{children:oe}),Object(F.jsx)(Me.a.CloseButton,{onClick:ut})]}),Object(F.jsx)(Me.a.Body,{children:Object(F.jsx)("div",{className:Ke.a.text,children:Object(T.k)(le)})}),Object(F.jsx)(Me.a.Actions,{children:Object(F.jsxs)(Me.a.ConfirmationActions,{children:[Object(F.jsx)(Me.a.ConfirmationActions.Button,{secondary:!0,onClick:ut,className:Ke.a["cancel-button"],children:Object(T.m)("ui.cancel")}),Object(F.jsx)(Me.a.ConfirmationActions.Button,{onClick:Ft,className:Ke.a["revert-button"],destructive:!0,"data-auto":"approve-reset-to-default-domain-button",children:ft})]})})]})})};Ie.propTypes={defaultEmailDomain:S.a.string.isRequired,show:S.a.bool.isRequired,onClose:S.a.func.isRequired,onRevertDomain:S.a.func.isRequired,pageState:S.a.oneOf(Object.values(P.f))};var te=Ie,Re=t("EcLS");const Nt=Object(e.forwardRef)((Ct,ut)=>{const{pageState:Ft,setPageState:Ht,setDomainData:ne,domainData:oe,defaultEmailDomain:le,onRevertDomain:ft,onCloseRevertDomainModal:yt,onOpenRevertDomainModal:Q,isRevertDomainModalOpen:xt,fetchEmailDomainData:Gt}=kn(),ae=()=>{switch(Ft){case P.f.FETCHING:return null;case P.f.ERROR:return Object(F.jsx)(On,{onRefresh:Gt});case P.f.CONNECTED:return Object(F.jsx)(_t,{onOpenRevertDomainModal:Q,domainData:oe,defaultEmailDomain:le});case P.f.CONNECTING:return Object(F.jsx)(Un,{setDomainData:ne,domainData:oe,defaultEmailDomain:le,setPageState:Ht,onOpenRevertDomainModal:Q});case P.f.NON_CONNECTED:return Object(F.jsx)(ct,{setPageState:Ht,defaultEmailDomain:le});default:return null}};return Object(F.jsxs)(Re.a,{ref:ut,children:[ae(),Object(F.jsx)(te,{show:xt,onRevertDomain:ft,onClose:yt,defaultEmailDomain:le,pageState:Ft})]})});var Ue=o.a=Nt},pIMm:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("pVnL")),s=e(t("J4zp")),c=O(t("cDcd")),f=t("I7VN"),b=e(t("hSE2")),h=e(t("4dZ6"));function v(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(v=function(y){return y?n:u})(l)}function O(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||r(l)!=="object"&&typeof l!="function")return{default:l};var n=v(u);if(n&&n.has(l))return n.get(l);var x={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in l)if(j!=="default"&&Object.prototype.hasOwnProperty.call(l,j)){var I=y?Object.getOwnPropertyDescriptor(l,j):null;I&&(I.get||I.set)?Object.defineProperty(x,j,I):x[j]=l[j]}return x.default=l,n&&n.set(l,x),x}var p=function(u){var n=u.children,x=u.placement,y=x===void 0?"auto":x,j=u.offset,I=j===void 0?[0,8]:j,C=u.className,S=u.popperClassName,T=u.arrowClassName,R=u.content,M=u.showArrow,A=M===void 0?!1:M,W=u.containerProps,P=u.positionStrategy,L=u.hidePopover,k=L===void 0?!1:L,G=u.hideDelay,Y=G===void 0?500:G,J=(0,c.useState)(!1),X=(0,s.default)(J,2),at=X[0],z=X[1],F=(0,c.useState)(null),rt=(0,s.default)(F,2),ct=rt[0],dt=rt[1],vt=(0,c.useRef)(null),Ot=(0,c.useRef)(null),Mt=(0,c.useRef)(),Rt=(0,c.useMemo)(function(){var se=[];return A&&se.push({name:"arrow",options:{element:Ot.current}}),I&&se.push({name:"offset",options:{offset:I}}),se},[A,I,Ot.current]),Yt=(0,f.usePopper)(vt.current,ct,{placement:y,modifiers:Rt,strategy:P}),re=Yt.styles,Xt=Yt.attributes,pe=(0,c.useCallback)(function(){Mt.current&&clearTimeout(Mt.current),z(!0)},[]),de=(0,c.useCallback)(function(){Mt.current=setTimeout(function(){z(!1)},Y)},[]);return c.default.createElement("div",(0,i.default)({className:(0,b.default)(h.default.container,C),ref:vt,onMouseEnter:pe,onMouseLeave:de},W),n,!k&&at&&c.default.createElement("div",(0,i.default)({className:(0,b.default)(h.default.popper,S),ref:dt,style:re.popper},Xt.popper),A&&c.default.createElement("div",{className:(0,b.default)(h.default.arrow,T),ref:Ot,style:re.arrow}),R))},m=p;o.default=m},pMJh:function(a,o,t){"use strict";t.d(o,"a",function(){return e});function e(r){return r.location}},pNm2:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.EmptySiteListView-container-203b {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block-start: 58px;
  margin-block-end: 70px; }
  .EmptySiteListView-container-203b .EmptySiteListView-image-1O3b {
    height: 119px;
    width: 145px;
    background-image: url("https://static-cdn.multiscreensite.com/dashboard/empty-sites-list/computer-with-sticky-notes.svg"); }
  .EmptySiteListView-container-203b .EmptySiteListView-title-3N3b {
    font-size: 30px;
    font-weight: bold;
    padding-block-end: 10px;
    padding-block-start: 10px;
    font-family: Roboto; }
  .EmptySiteListView-container-203b .EmptySiteListView-text-3T3b {
    padding-block-end: 25px;
    font-size: 16px; }
  .EmptySiteListView-container-203b .EmptySiteListView-link-3T3b {
    text-decoration: none; }
  .EmptySiteListView-container-203b .EmptySiteListView-button-233b {
    height: 33px;
    min-width: 180px; }
`,""]),o.locals={container:"EmptySiteListView-container-203b",image:"EmptySiteListView-image-1O3b",title:"EmptySiteListView-title-3N3b",text:"EmptySiteListView-text-3T3b",link:"EmptySiteListView-link-3T3b",button:"EmptySiteListView-button-233b"}},pORW:function(a,o,t){"use strict";var e=t("rf6O"),r=t.n(e),i=t("TSYQ"),s=t.n(i),c=t("GvOo"),f=t.n(c),b=t("nKUr"),h=t.n(b);const{string:v,bool:O,func:p,oneOf:m}=r.a,l=n=>Object(b.jsx)("label",{"data-auto":n["data-auto"]||"checkbox","data-checked":n.checked,className:s()(n.className,f.a.main,{[f.a.disabled]:n.disabled}),onClick:u(n),children:Object(b.jsx)("span",{className:s()(f.a.checkbox,n.innerClassName,f.a[n.size],{[f.a.descriptionLabel]:n.description,[f.a.checked]:n.checked}),children:n.text})});l.propTypes={className:v,innerClassName:v,text:v,description:O,onChange:p,checked:O,size:m(["small","large"]),disabled:O,"data-auto":v},l.defaultProps={checked:!1,size:"small"};function u(n){return()=>{if(!n.disabled){const x=!n.checked;n.onChange&&n.onChange(x)}}}o.a=l},pPMm:function(a,o,t){var e=t("vI97");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},pT3E:function(a,o,t){var e=t("N5mZ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},qORB:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.FeatureLock-main-2c3b {
  height: 100%; }
  .FeatureLock-main-2c3b:not(.maskOutside) {
    position: relative; }
  .FeatureLock-main-2c3b .mask {
    cursor: pointer;
    cursor: default;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    z-index: 1; }
    .FeatureLock-main-2c3b .mask.mouseover {
      opacity: 1; }
    .FeatureLock-main-2c3b .mask:not(.transparentMask) {
      background-color: rgba(216, 221, 222, 0.7); }
  .FeatureLock-main-2c3b:hover .mask {
    opacity: 1; }
  .FeatureLock-main-2c3b .FeatureLock-upgradeBtn-103b {
    cursor: pointer;
    position: relative;
    height: 37px;
    display: inline-block;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    min-width: 0;
    padding-block-start: 0;
    padding-inline-end: 21px;
    padding-block-end: 0;
    padding-inline-start: 14px;
    background: #fff;
    color: #313131;
    font-weight: bold;
    font-family: roboto;
    font-size: 13px;
    margin-block-start: auto;
    margin-inline-end: auto;
    margin-block-end: auto;
    margin-inline-start: auto;
    text-align: center;
    line-height: 37px;
    white-space: nowrap; }
    .FeatureLock-main-2c3b .FeatureLock-upgradeBtn-103b:after {
      background-color: #3ac280;
      background-image: url("//dd-cdn.multiscreensite.com/editor/assets/svgs/upgrade_lock.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px 12px;
      border-radius: 999px;
      border: 2px solid white;
      content: ' ';
      position: absolute;
      right: -15px;
      width: 30px;
      top: 4px;
      box-sizing: border-box;
      bottom: 3px; }
    .FeatureLock-main-2c3b .FeatureLock-upgradeBtn-103b.FeatureLock-notAvailable-8P3b:after {
      background-color: #e7463a; }
    .FeatureLock-main-2c3b .FeatureLock-upgradeBtn-103b.FeatureLock-short-2i3b {
      height: 27px;
      line-height: 27px; }
      .FeatureLock-main-2c3b .FeatureLock-upgradeBtn-103b.FeatureLock-short-2i3b:after {
        right: -11px;
        width: 25px; }
  .FeatureLock-main-2c3b.vertical .FeatureLock-mask-1a3b {
    background-color: rgba(0, 0, 0, 0); }
  .FeatureLock-main-2c3b.vertical .FeatureLock-upgradeBtn-103b {
    position: absolute;
    top: calc(50% - 18px);
    line-height: 43px;
    left: 50%;
    padding-block-start: 0;
    padding-inline-end: 15px;
    padding-block-end: 0;
    padding-inline-start: 15px;
    transform: translate(-50%, 0); }
    .FeatureLock-main-2c3b.vertical .FeatureLock-upgradeBtn-103b:after {
      right: 50%;
      margin-inline-end: -15px;
      top: -15px;
      height: 30px; }

.tooltipWrapper {
  position: fixed;
  z-index: 20000;
  transition: opacity 0.5s ease;
  min-width: 250px;
  max-width: 300px; }
  .tooltipWrapper.removeTooltip {
    opacity: 0;
    z-index: 1; }
  .tooltipWrapper.tooltipHover {
    opacity: 0;
    z-index: 1; }
    .tooltipWrapper.tooltipHover:hover {
      opacity: 1;
      z-index: 20000; }
  .tooltipWrapper.hidden {
    visibility: hidden; }
    .tooltipWrapper.hidden .FeatureLock-bottomLeftArrow-RS3b {
      opacity: 0; }
  .tooltipWrapper.noArrow .FeatureLock-leftArrow-3G3b {
    display: none; }
  .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b {
    display: flex; }
    .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b .FeatureLock-upgradeTooltip-353b {
      position: relative;
      text-align: center;
      background-color: #fff;
      border-radius: 3px;
      padding-block-start: 23px;
      padding-inline-end: 20px;
      padding-block-end: 25px;
      padding-inline-start: 20px;
      z-index: 2;
      box-shadow: 4px 4px 8px 0px rgba(64, 65, 71, 0.28); }
      .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b .FeatureLock-upgradeTooltip-353b:after {
        background-color: #3ac280;
        background-image: url("//dd-cdn.multiscreensite.com/editor/assets/svgs/upgrade_lock.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 18px 18px;
        border-radius: 999px;
        border: 5px solid white;
        position: absolute;
        content: ' ';
        margin-inline-start: -25px;
        width: 50px;
        height: 50px;
        box-sizing: border-box;
        top: -25px; }
      .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b .FeatureLock-upgradeTooltip-353b:before {
        border-radius: 3px;
        content: ' ';
        border: 1px solid #ced6d9;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; }
      .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b .FeatureLock-upgradeTooltip-353b .FeatureLock-tooltipButton-3p3b {
        box-sizing: border-box;
        background-color: #3ac280;
        width: 162px;
        margin-block-start: 0;
        margin-inline-end: auto;
        margin-block-end: 0;
        margin-inline-start: auto; }
        .tooltipWrapper .FeatureLock-upgradeTooltipWrapper-zc3b .FeatureLock-upgradeTooltip-353b .FeatureLock-tooltipButton-3p3b:hover {
          background-color: #3fcf89; }
  .tooltipWrapper.rightArrow .FeatureLock-leftArrow-3G3b {
    transform: rotate(59deg) skewY(-14deg) skewX(10deg) rotateZ(180deg);
    right: -4px;
    bottom: 18px;
    left: initial; }
  .tooltipWrapper.rightArrow .FeatureLock-hiddenMask-3A3b {
    left: initial;
    right: -20px; }
  .tooltipWrapper.bottomArrow .FeatureLock-leftArrow-3G3b {
    bottom: 18px; }
  .tooltipWrapper.topArrow .FeatureLock-leftArrow-3G3b {
    top: 18px;
    bottom: initial; }
  .tooltipWrapper.topArrow .FeatureLock-hiddenMask-3A3b {
    bottom: initial;
    top: 0; }
  .tooltipWrapper .FeatureLock-leftArrow-3G3b {
    transition-delay: 0;
    position: absolute;
    left: -4px;
    box-shadow: -1px 1px 1px 0px #ced6d9;
    transform: rotate(59deg) skewY(-14deg) skewX(10deg);
    border: 6px solid black;
    border-color: transparent transparent #fff #fff;
    background: #fff;
    z-index: 2; }
  .tooltipWrapper .FeatureLock-hiddenMask-3A3b {
    position: absolute;
    width: 20px;
    height: 70px;
    background: transparent;
    bottom: 0;
    left: -20px; }
  .tooltipWrapper.topHiddenMask .FeatureLock-hiddenMask-3A3b {
    width: 300px;
    top: -20px;
    left: initial; }

.FeatureLock-title-1J3b {
  font-family: roboto;
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 5px;
  color: #313131; }

.FeatureLock-bulletsWrapper-1P3b {
  padding-block-start: 10px;
  padding-inline-end: 20px;
  padding-block-end: 10px;
  padding-inline-start: 20px;
  margin-block-start: auto;
  margin-inline-end: auto;
  margin-block-end: auto;
  margin-inline-start: auto; }

.FeatureLock-upgrade-1X3b {
  font-family: 'Source Sans Pro';
  color: #313131;
  text-align: left;
  font-size: 14px;
  line-height: 14px;
  padding: 0 0 10px 20px;
  position: relative;
  font-family: 'Source Sans Pro'; }
  .FeatureLock-upgrade-1X3b:before {
    background-image: url("//dd-cdn.multiscreensite.com/editor/assets/svgs/v.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    content: ' ';
    width: 12px;
    height: 12px;
    left: 0;
    top: calc(50% - 9px); }

.FeatureLock-bullets-title-fV3b {
  font-size: 14px;
  font-style: italic;
  color: #8a8a8a;
  font-family: 'Source Sans Pro';
  margin-top: 15px; }
`,""]),o.locals={main:"FeatureLock-main-2c3b",upgradeBtn:"FeatureLock-upgradeBtn-103b",notAvailable:"FeatureLock-notAvailable-8P3b",short:"FeatureLock-short-2i3b",mask:"FeatureLock-mask-1a3b",bottomLeftArrow:"FeatureLock-bottomLeftArrow-RS3b",leftArrow:"FeatureLock-leftArrow-3G3b",upgradeTooltipWrapper:"FeatureLock-upgradeTooltipWrapper-zc3b",upgradeTooltip:"FeatureLock-upgradeTooltip-353b",tooltipButton:"FeatureLock-tooltipButton-3p3b",hiddenMask:"FeatureLock-hiddenMask-3A3b",title:"FeatureLock-title-1J3b",bulletsWrapper:"FeatureLock-bulletsWrapper-1P3b",upgrade:"FeatureLock-upgrade-1X3b","bullets-title":"FeatureLock-bullets-title-fV3b"}},qSQR:function(a,o,t){var e=t("Natf");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},qZaT:function(a,o,t){var e=t("Fifm");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},qok4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Link-module-main-1v3b {
  color: #313131;
  cursor: pointer;
  user-select: none;
  font-size: 12px;
  text-decoration: underline;
  align-self: flex-start; }
  .Link-module-main-1v3b.Link-module-underlineOnHover-2d3b {
    text-decoration: none; }
    .Link-module-main-1v3b.Link-module-underlineOnHover-2d3b:hover {
      text-decoration: underline; }
  .Link-module-main-1v3b.Link-module-noOverflow-3s3b {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
  .Link-module-main-1v3b .Link-module-innerContainer-2h3b {
    width: 100%;
    height: 100%;
    position: relative; }

.Link-module-help-1k3b {
  margin-inline-start: 3px; }

.Link-module-icon-1W3b {
  margin-inline-end: 5px; }

.Link-module-arrowIcon-1E3b {
  font-size: 0.8em;
  color: var(--text-on-light);
  text-decoration: none;
  float: right;
  padding: 0.4em 0 0.3em 0.3em; }

.Link-module-disabled-3v3b {
  opacity: 0.5;
  pointer-events: none; }

.Link-module-blueLink-383b {
  color: #226eaf;
  font-size: 14px;
  font-family: Source sans pro;
  font-weight: 500;
  padding-block-start: 16px;
  padding-inline-end: 0;
  padding-block-end: 6px;
  padding-inline-start: 0; }
`,""]),o.locals={main:"Link-module-main-1v3b",underlineOnHover:"Link-module-underlineOnHover-2d3b",noOverflow:"Link-module-noOverflow-3s3b",innerContainer:"Link-module-innerContainer-2h3b",help:"Link-module-help-1k3b",icon:"Link-module-icon-1W3b",arrowIcon:"Link-module-arrowIcon-1E3b",disabled:"Link-module-disabled-3v3b",blueLink:"Link-module-blueLink-383b"}},"r1s+":function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavBarLink-link-1l3b {
  color: var(--header-text-color);
  text-decoration: none;
  flex: 1;
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; }
  .NavBarLink-link-1l3b:hover {
    color: var(--button-color); }

.NavBarLink-link-selected-1Y3b {
  color: var(--button-color); }
`,""]),o.locals={link:"NavBarLink-link-1l3b","link-selected":"NavBarLink-link-selected-1Y3b"}},rQlA:function(a,o,t){var e=t("/lRL");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},raCH:function(a,o,t){"use strict";var e=t("P7XM"),r=t("l6Lj");function i(){r.call(this)}e(i,r),i.prototype.removeAllListeners=function(s){s?delete this._listeners[s]:this._listeners={}},i.prototype.once=function(s,c){var f=this,b=!1;function h(){f.removeListener(s,h),b||(b=!0,c.apply(this,arguments))}this.on(s,h)},i.prototype.emit=function(){var s=arguments[0],c=this._listeners[s];if(!!c){for(var f=arguments.length,b=new Array(f-1),h=1;h<f;h++)b[h-1]=arguments[h];for(var v=0;v<c.length;v++)c[v].apply(this,b)}},i.prototype.on=i.prototype.addListener=r.prototype.addEventListener,i.prototype.removeListener=r.prototype.removeEventListener,a.exports.EventEmitter=i},rcuq:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Cards-container-283b {
  padding-bottom: 2px; }
  .Cards-container-283b .Cards-new-dot-2W3b {
    position: relative; }
    .Cards-container-283b .Cards-new-dot-2W3b::after {
      content: '';
      position: absolute;
      top: 18px;
      right: 18px;
      background-color: var(--button-color);
      border-radius: 50%;
      height: 8px;
      width: 8px; }
`,""]),o.locals={container:"Cards-container-283b","new-dot":"Cards-new-dot-2W3b"}},rf2p:function(a,o,t){"use strict";var e=t("yXPU"),r=t.n(e),i=t("TP7S"),s=t.n(i),c=t("k4gB"),f=t("ZiIQ"),b=t("DzJC"),h=t.n(b),v=t("D0BC"),O=t.n(v),p=t("g8Lk"),m=t("tZPy"),l=t.n(m),u=t("w2jt"),n=t("xies"),x=t.n(n),y=t("UnFm"),j=t("7nWi"),I=t.n(j),C=t("av65"),S=t("9iID"),T=t("nKUr"),R,M,A,W;const{string:P,bool:L,func:k,oneOf:G,arrayOf:Y}=c.b;var X=(R=Object(c.f)({}),R(M=(W=A=class extends c.a{constructor(ce){super(ce);this.onClick=Vt=>{Vt.stopPropagation(),this.showUpgradeTooltip()},this.getButtonText=()=>this.props.btnText?this.props.btnText:this.props.isFeatureInTier?Object(c.m)("common.upgrade"):Object(c.m)("ui.upgrade.notAvailable"),this.onUpgradeClick=Vt=>{this.noUpgradeAction||(this.refs.mainElement.classList.remove("mouseover"),this.tooltipWrapper.classList.remove("tooltipHover"),this.hideUpgradeTooltip(Vt,!0),this.props.onUpgradeClick&&this.props.onUpgradeClick())},this.getTooltip=()=>this.props.noTooltip?null:Object(T.jsxs)(u.a,{className:I.a.upgradeTooltipWrapper,onMouseEnter:this.mouseOver,onMouseLeave:this.mouseOut,children:[Object(T.jsxs)("div",{className:Object(c.h)(I.a.upgradeTooltip,"tooltipInner"),children:[this.getFeaturesUpgradeContent(),this.noUpgradeAction?null:Object(T.jsx)(p.a,{className:I.a.tooltipButton,text:this.getButtonText(),onClick:this.onUpgradeClick,"data-auto":"upgradeButtonTooltip"})]}),this.props.centerOnFrame?null:Object(T.jsx)("span",{className:Object(c.h)(I.a.leftArrow)}),Object(T.jsx)("span",{className:I.a.hiddenMask})]}),this.getFeaturesUpgradeContent=()=>this.props.renderContent?this.props.renderContent():this.props.upgradeTitle&&this.props.upgradeBullets?Object(T.jsxs)(x.a,{className:"featureContainerGroup",children:[Object(T.jsx)(l.a,{html:Object(c.m)(this.props.upgradeTitle),className:I.a.title}),this.getBulletsTitleOrDivider(),this.props.upgradeBullets.length?Object(T.jsx)("div",{className:I.a.bulletsWrapper,children:this.props.upgradeBullets.map(Vt=>Object(T.jsx)(l.a,{text:Vt,className:I.a.upgrade},Vt))}):Object(T.jsx)("br",{})]}):"",this.getBulletsTitleOrDivider=()=>this.props.bulletsTitle?Object(T.jsx)(l.a,{text:this.props.bulletsTitle,flex:!1,noPaddingBottom:!0,noPaddingTop:!0,className:I.a["bullets-title"]}):this.props.upgradeBullets.length?Object(T.jsx)(y.a,{}):null,this.showUpgradeTooltip=()=>{(this.props.noTooltip||!this.props.isFeatureInTier)&&!this.props.alwaysShowUpgradeTooltip||(this.setState({showingTooltip:!0}),c.d.render(this.getTooltip(),this.tooltipWrapper,()=>{const Vt=this.refs.mainElement.querySelector('[data-id="upgradeButton"]');let nt={};Vt&&(nt=Vt.getBoundingClientRect());let st;if(this.props.tooltipLocation==="onFrame"?st=this.refs.mainElement.getBoundingClientRect():this.props.tooltipLocation==="onButton"&&(st=nt),this.props.centerOnFrame){const ot=this.tooltipWrapper.querySelector(".tooltipInner");this.tooltipWrapper.style.top=st.height/2+st.top-ot.clientHeight/2-25+"px",this.tooltipWrapper.style.left=st.left+st.width/2-ot.clientWidth/2+"px"}else{const ot=this.tooltipWrapper.clientWidth,pt=this.tooltipWrapper.clientHeight;if(window.innerHeight-(window.innerHeight-st.bottom)>pt&&!this.props.positionTooltipVertically){if(window.innerWidth>ot+st.right+10){const gt=this.props.tooltipLocation==="onFrame"?10:25;this.tooltipWrapper.style.left=st.right+gt+"px"}else this.tooltipWrapper.style.left=st.left-ot-10+"px",this.tooltipWrapper.classList.add("rightArrow");window.innerHeight/2>(st.bottom+st.top)/2?(this.tooltipWrapper.style.top=st.top+st.height/2-25+"px",this.tooltipWrapper.classList.add("topArrow")):(this.tooltipWrapper.style.bottom=window.innerHeight-st.bottom+st.height/2-25+"px",this.tooltipWrapper.classList.add("bottomArrow"))}else window.innerWidth/2>st.left?this.tooltipWrapper.style.left=st.left+"px":this.tooltipWrapper.style.left=st.right-ot+"px",this.tooltipWrapper.classList.add("noArrow"),this.tooltipWrapper.classList.add("topHiddenMask"),this.tooltipWrapper.style.top=st.bottom+5+"px"}this.tooltipWrapper.classList.remove("removeTooltip","hidden")}))},this.hideUpgradeTooltip=(Vt,nt=!1)=>{this.props.noTooltip||(this.tooltipWrapper.className.match(/tooltipHover/)&&!nt?this.tooltipWrapper.classList.add("removeTooltip"):(this.tooltipWrapper.classList.add("removeTooltip","hidden"),this.tooltipWrapper.classList.remove("noArrow","bottomArrow","topArrow","rightArrow"),this.tooltipWrapper.style.bottom="initial",this.tooltipWrapper.style.top="initial",this.tooltipWrapper.style.left="initial",this.tooltipWrapper.style.right="initial",this.setState({showingTooltip:!1})))},this.state={showingTooltip:!1},this.lockId=O()(1e5),this.mouseOver=()=>{this.refs.mainElement&&this.refs.mainElement.classList.add("mouseover"),this.tooltipWrapper.classList.add("tooltipHover"),this.tooltipWrapper.classList.remove("hidden")},this.mouseOut=()=>{this.refs.mainElement&&this.refs.mainElement.classList.remove("mouseover"),this.tooltipWrapper.classList.remove("tooltipHover"),this.tooltipWrapper.classList.add("hidden")}}render(){const{isFeatureInTier:ce,isFeatureAvailable:Vt,hideIfUnavailable:nt,vertical:st,maskOutside:ot,transparentMask:pt,className:gt,maskClassName:Lt,short:it,centerOnFrame:ht,hideLock:H,children:N}=this.props,U=this.getButtonText();return!ce&&nt?null:Object(T.jsxs)("div",{className:Object(c.h)(I.a.main,"featureContainer",gt,{vertical:st,maskOutside:ot}),children:[N,Vt?null:Object(T.jsx)("div",{className:Object(c.h)("mask",Lt,!Vt,{transparentMask:pt}),ref:"mainElement",children:ht||H?null:Object(T.jsx)(p.a,{className:Object(c.h)(I.a.upgradeBtn,{[I.a.notAvailable]:!ce,[I.a.short]:it}),noHover:!0,text:U,onClick:this.onUpgradeClick,"data-auto":"upgradeButton",domAttrs:{"data-id":"upgradeButton"}})})]})}UNSAFE_componentWillMount(){this.props.isFeatureAvailable||!this.props.isFeatureInTier&&this.props.hideIfUnavailable||(this.noUpgradeAction=(S.a.get("upgrade.locks.action.disable")||this.props.hideButton||!this.props.isFeatureInTier)&&!this.props.alwaysShowUpgradeTooltip,this.tooltipWrapper=document.createElement("div"),this.tooltipWrapper.setAttribute("class","tooltipWrapper hidden contextMenuExtendedWrapper"),document.body.appendChild(this.tooltipWrapper))}componentDidMount(){if(this.props.isFeatureAvailable||!this.props.isFeatureInTier&&this.props.hideIfUnavailable)return;this.refs.mainElement&&this.refs.mainElement.addEventListener("mouseenter",this.showUpgradeTooltip),this.refs.mainElement&&this.refs.mainElement.addEventListener("mouseleave",this.hideUpgradeTooltip),C.a.isTouchDevice&&this.refs.mainElement&&this.refs.mainElement.addEventListener("click",this.onClick);const ce=$(this.refs.mainElement).parents(".scrollableInner");ce.off(`scroll.feature-${this.lockId}`).on(`scroll.feature-${this.lockId}`,ce,h()(Vt=>{Vt.currentTarget.scrollTop>0&&this.state.showingTooltip&&this.hideUpgradeTooltip()},100))}componentWillUnmount(){if(this.props.isFeatureAvailable||!this.props.isFeatureInTier&&this.props.hideIfUnavailable)return;this.refs.mainElement&&this.refs.mainElement.removeEventListener("mouseenter",this.showUpgradeTooltip),this.refs.mainElement&&this.refs.mainElement.removeEventListener("mouseleave",this.hideUpgradeTooltip),$(this.refs.mainElement).parents(".scrollableInner").off(`scroll.feature-${this.lockId}`),$(this.tooltipWrapper).remove()}},A.displayName="FeatureLock",A.propTypes={className:P,isFeatureAvailable:L,isFeatureInTier:L,onUpgradeClick:k,vertical:L,transparentMask:L,maskOutside:L,centerOnFrame:L,noTooltip:L,tooltipLocation:G(["onButton","onFrame"]),hideIfUnavailable:L,upgradeTitle:P,upgradeBullets:Y(P),hideLock:L,bulletsTitle:P,hideButton:L,alwaysShowUpgradeTooltip:L,btnText:P,short:L,renderContent:k,positionTooltipVertically:L,maskClassName:P},A.defaultProps={maskOutside:!1,transparentMask:!1,hideIfUnavailable:!1,tooltipLocation:"onFrame",bulletsTitle:"",hideButton:!1,short:!1,positionTooltipVertically:!1},W))||M),at=t("1ONn"),z=t("wy3E"),F=t("SxS9"),rt=t("TNeN"),ct=t.n(rt),dt=t("LyWx"),vt=t("o/li"),Ot=t("5ax+"),Mt=t.n(Ot);function Rt({title:fe,description:ce}){return Object(T.jsxs)("div",{className:Mt.a.main,children:[Object(T.jsx)(l.a,{className:Mt.a.title,html:fe}),Object(T.jsx)(l.a,{className:Mt.a.description,text:ce})]})}Rt.propTypes={title:c.b.string,description:c.b.string};var Yt=Rt,re,Xt,pe,de;const{string:se,object:Qt,bool:St,func:Ut,shape:zt}=c.b;let Jt=(re=Object(c.f)({styles:ct.a}),re(Xt=(de=pe=class extends c.a{constructor(ce){var Vt;super(ce);Vt=this,this.onUpgradeButtonClicked=r()(function*(){if(Vt.props.showContactSupport){window.open(Vt.getUpgradeClickUrl());return}const{account:st}=Vt.props,ot=`Upgrade lock - ${Vt.props.data.hoveredOn}`;if(Vt.props.data.targetPlan==="ENTERPRISE")window.open(S.a.get("pricing.enterprise.contact.link"),"_blank");else{const pt=yield Object(z.a)();yield vt.a.waitForPlansLoad(),pt.upgradeAccount({popupProps:{popupTitle:Object(c.m)("ui.upgrade.title.2"),height:"calc(100vh - 120px)"},purchaseOptions:Vt.props.purchaseOptions,referral:ot,account:st,blockUI:Vt.props.blockUI||F.a,unblockUI:Vt.props.unblockUI||F.d})}}),this.isStaffMember=s()(this.props.isStaffMember)?window.isStaffMember:this.props.isStaffMember;const nt=this.props.showContactSupport?Object(c.m)("ui.ed.ContactSupportLock.customPlan"):null;this.state=at.b({featureId:ce.data.hoveredOn,planNameOverride:nt})}render(){const ce=this.props.data.align==="right",Vt=ce?10:19;return Object(T.jsx)(X,{isFeatureAvailable:!1,upgradeTitle:this.state.upgradeTitle,upgradeBullets:this.state.bullets,isFeatureInTier:!0,onUpgradeClick:this.onUpgradeButtonClicked,transparentMask:!0,hideLock:!0,bulletsTitle:this.props.data.customBulletsTitle?this.props.data.customBulletsTitle:this.state.bulletsTitle,renderContent:this.props.showContactSupport?()=>Object(T.jsx)(Yt,{title:this.state.upgradeTitle,description:this.props.contactSupportDescription}):null,btnText:this.getBtnText(),hideButton:this.isStaffMember,children:Object(T.jsx)(u.a,{className:Object(c.h)(ct.a.main,{[ct.a.right]:ce,[ct.a.center]:!ce}),children:Object(T.jsx)(f.a,{name:"lock",iconType:dt.m.SVG,color:"#ffffff",size:Vt})})})}getBtnText(){return this.props.showContactSupport?Object(c.m)("ui.ed.common.contact"):this.props.data.buttonText}getUpgradeClickUrl(){return this.props.account.isNewPricing?this.props.contactSupportButtonLink||S.a.get("common.upgrade.account.url"):S.a.get("common.migrate.account.url")}},pe.displayName="NavigationLock",pe.propTypes={className:se,data:Qt,isStaffMember:St,account:zt({isInTrial:St.isRequired,planType:se.isRequired}),purchaseOptions:Qt,blockUI:Ut,unblockUI:Ut,showContactSupport:St,contactSupportDescription:se,contactSupportButtonLink:se},pe.defaultProps={showContactSupport:!1},de))||Xt);var ge=o.a=Jt},"s/Ma":function(a,o,t){var e=t("Sa5d");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},sFjE:function(a,o,t){var e=t("A3El");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},sLIw:function(a,o,t){var e=t("TJSn");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},sREz:function(a,o,t){"use strict";var e=t("k4gB"),r=t("wnJ8"),i=t.n(r),s=t("1z8J"),c=t.n(s),f=t("nKUr"),b=t.n(f);const h=()=>Object(f.jsx)("div",{className:i.a.container,children:Object(f.jsx)(c.a,{name:"ball-clip-rotate",fadeIn:"none"})});o.a=h},sTlx:function(a,o,t){"use strict";o.__esModule=!0,o.extend=c,o.indexOf=v,o.escapeExpression=O,o.isEmpty=p,o.createFrame=m,o.blockParams=l,o.appendContextPath=u;var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,i=/[&<>"'`=]/;function s(n){return e[n]}function c(n){for(var x=1;x<arguments.length;x++)for(var y in arguments[x])Object.prototype.hasOwnProperty.call(arguments[x],y)&&(n[y]=arguments[x][y]);return n}var f=Object.prototype.toString;o.toString=f;var b=function(x){return typeof x=="function"};b(/x/)&&(o.isFunction=b=function(n){return typeof n=="function"&&f.call(n)==="[object Function]"}),o.isFunction=b;var h=Array.isArray||function(n){return n&&typeof n=="object"?f.call(n)==="[object Array]":!1};o.isArray=h;function v(n,x){for(var y=0,j=n.length;y<j;y++)if(n[y]===x)return y;return-1}function O(n){if(typeof n!="string"){if(n&&n.toHTML)return n.toHTML();if(n==null)return"";if(!n)return n+"";n=""+n}return i.test(n)?n.replace(r,s):n}function p(n){return!n&&n!==0?!0:!!(h(n)&&n.length===0)}function m(n){var x=c({},n);return x._parent=n,x}function l(n,x){return n.path=x,n}function u(n,x){return(n?n+".":"")+x}},sYUk:function(a,o,t){"use strict";var e=t("P7XM"),r=t("dXd4"),i=t("FUii"),s=t("nX0T");function c(f){if(!s.enabled)throw new Error("Transport created when disabled");r.call(this,f,"/xhr_streaming",i,s)}e(c,r),c.enabled=function(f){return f.cookie_needed||f.nullOrigin?!1:s.enabled&&f.sameScheme},c.transportName="xdr-streaming",c.roundTrips=2,a.exports=c},scbj:function(a,o,t){"use strict";o.__esModule=!0;function e(r){this.string=r}e.prototype.toString=e.prototype.toHTML=function(){return""+this.string},o.default=e,a.exports=o.default},soQ7:function(a,o,t){var e=t("1MhX");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},sqGa:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("pVnL")),s=e(t("lSNA")),c=v(t("cDcd")),f=e(t("Xsag")),b=e(t("hSE2"));function h(m){if(typeof WeakMap!="function")return null;var l=new WeakMap,u=new WeakMap;return(h=function(x){return x?u:l})(m)}function v(m,l){if(!l&&m&&m.__esModule)return m;if(m===null||r(m)!=="object"&&typeof m!="function")return{default:m};var u=h(l);if(u&&u.has(m))return u.get(m);var n={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in m)if(y!=="default"&&Object.prototype.hasOwnProperty.call(m,y)){var j=x?Object.getOwnPropertyDescriptor(m,y):null;j&&(j.get||j.set)?Object.defineProperty(n,y,j):n[y]=m[y]}return n.default=m,u&&u.set(m,n),n}var O=function(l){var u,n=l.title,x=l.onClick,y=l.itemId,j=l.rightElement,I=j===void 0?null:j,C=l.leftElement,S=C===void 0?null:C,T=l.selected,R=T===void 0?!1:T,M=l.isChild,A=M===void 0?!1:M,W=l.hasChildren,P=W===void 0?!1:W,L=l.dataAuto,k=(0,c.useCallback)(function(J){J.preventDefault(),x(y)},[y]),G=R&&!P,Y=(0,b.default)(f.default.link,(u={},(0,s.default)(u,f.default.marker,G),(0,s.default)(u,f.default.selected,R),(0,s.default)(u,f.default.child,A),u));return c.default.createElement("li",(0,i.default)({className:f.default.navItem},L?{"data-auto":L}:{}),c.default.createElement("a",{className:Y,onClick:k,href:"#"},c.default.createElement("div",{className:f.default.elementContainer},S),c.default.createElement("div",{className:f.default.title},n),c.default.createElement("div",{className:f.default.elementContainer},I)))},p=c.default.memo(O);o.default=p},srKl:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.PaymentStatus-module-status-2j3b {
  border-radius: 3px;
  padding-inline-start: 17px;
  padding-inline-end: 17px;
  padding-block-start: 3px;
  padding-block-end: 3px;
  font-size: 14px; }
  .PaymentStatus-module-status-2j3b.PaymentStatus-module-on-383b {
    background: #eef6fd;
    color: #657b91;
    border: 1px solid #657b91; }
  .PaymentStatus-module-status-2j3b.PaymentStatus-module-off-3a3b {
    background: #feeeee;
    color: #e43838;
    border: 1px solid #e43838; }
`,""]),o.locals={status:"PaymentStatus-module-status-2j3b",on:"PaymentStatus-module-on-383b",off:"PaymentStatus-module-off-3a3b"}},tFjy:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Divider-container-3V3b {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #a4a8aa;
  margin-bottom: 10px;
  padding-top: 5px;
  font-family: 'Source Sans Pro';
  font-size: 14px; }

.Divider-container-3V3b::before,
.Divider-container-3V3b::after {
  content: '';
  flex-grow: 1;
  background: #ced6d9;
  height: 1px;
  font-size: 0px;
  line-height: 0px; }

.Divider-container-3V3b::before {
  margin-inline-end: 8px; }

.Divider-container-3V3b::after {
  margin-inline-start: 8px; }
`,""]),o.locals={container:"Divider-container-3V3b"}},tfsG:function(a,o,t){var e=t("ZwNO");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},thkb:function(a,o,t){"use strict";o.__esModule=!0;function e(c){return c&&c.__esModule?c:{default:c}}var r=t("sTlx"),i=t("tpBh"),s=e(i);o.default=function(c){c.registerHelper("with",function(f,b){if(arguments.length!=2)throw new s.default("#with requires exactly one argument");r.isFunction(f)&&(f=f.call(this));var h=b.fn;if(r.isEmpty(f))return b.inverse(this);var v=b.data;return b.data&&b.ids&&(v=r.createFrame(b.data),v.contextPath=r.appendContextPath(b.data.contextPath,b.ids[0])),h(f,{data:v,blockParams:r.blockParams([f],[v&&v.contextPath])})})},a.exports=o.default},tpBh:function(a,o,t){"use strict";o.__esModule=!0;var e=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function r(i,s){var c=s&&s.loc,f=void 0,b=void 0,h=void 0,v=void 0;c&&(f=c.start.line,b=c.end.line,h=c.start.column,v=c.end.column,i+=" - "+f+":"+h);for(var O=Error.prototype.constructor.call(this,i),p=0;p<e.length;p++)this[e[p]]=O[e[p]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{c&&(this.lineNumber=f,this.endLineNumber=b,Object.defineProperty?(Object.defineProperty(this,"column",{value:h,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:v,enumerable:!0})):(this.column=h,this.endColumn=v))}catch(m){}}r.prototype=new Error,o.default=r,a.exports=o.default},tpNr:function(a,o,t){"use strict";t.d(o,"f",function(){return i}),t.d(o,"g",function(){return s}),t.d(o,"e",function(){return c}),t.d(o,"d",function(){return f}),t.d(o,"c",function(){return b}),t.d(o,"b",function(){return h}),t.d(o,"a",function(){return v});var e=t("LyWx"),r=t("9iID");function i({account:O}){return r.a.getFlag("pricing.allFeatureForNone.enabled",!1)?O.permissions[e.d.EDITOR_CUSTOM_DOMAIN]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB||O.planType===e.a.NONE:O.permissions[e.d.EDITOR_CUSTOM_DOMAIN]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB}function s({account:O}){return!r.a.getFlag("dashboard.customEmailDomain.enabled",!1)||r.a.getFlag("dashboard.domain.new.enabled",!1)?!1:O.permissions[e.d.D_AWARE]&&!O.isMasterAccount&&(O.userTypeNew===e.E.ACCOUNT_OWNER||O.permissions[e.d.EDITOR_CUSTOM_DOMAIN])}function c({account:O}){return r.a.getFlag("pricing.allFeatureForNone.enabled",!1)?O.permissions[e.d.EDIT_BRANDING]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB||O.planType===e.a.NONE:O.permissions[e.d.EDIT_BRANDING]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB}function f({account:O}){return r.a.getFlag("pricing.allFeatureForNone.enabled",!1)?O.permissions[e.d.COMMUNICATION]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB||O.planType===e.a.NONE:O.permissions[e.d.COMMUNICATION]||O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB}function b({account:O}){return r.a.getFlag("pricing.allFeatureForNone.enabled",!1)?O.planType!==e.a.BASIC&&O.planType!==e.a.TRILOBITE_SMB&&O.planType!==e.a.NONE:O.planType!==e.a.BASIC&&O.planType!==e.a.TRILOBITE_SMB}function h({account:O}){return r.a.getFlag("pricing.allFeatureForNone.enabled",!1)?O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB||O.planType===e.a.NONE:O.planType===e.a.BASIC||O.planType===e.a.TRILOBITE_SMB}function v({account:O}){return O.planType===e.a.AGENCY&&!O.isApiAvailableForAgency?!0:!O.featuresInPlan[e.r.API]}},tvWm:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.WhatsNewPopup-container-1D3b {
  display: flex;
  flex-direction: column;
  height: 100%; }
  .WhatsNewPopup-container-1D3b .WhatsNewPopup-title-4K3b {
    display: flex;
    justify-content: center;
    font-family: Roboto;
    color: #2f373a;
    padding-block-start: 18px;
    padding-inline-end: 0px;
    padding-block-end: 18px;
    padding-inline-start: 0px;
    font-size: 24px; }
  .WhatsNewPopup-container-1D3b .WhatsNewPopup-title-mobile-1_3b {
    font-size: 21px; }
  .WhatsNewPopup-container-1D3b .WhatsNewPopup-content-1F3b {
    background-color: #fafafa;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-block-start: 0px;
    padding-inline-end: 14px;
    padding-block-end: 0px;
    padding-inline-start: 30px; }

.whats-new-popup-mobile .WhatsNewPopup-content-1F3b {
  padding-block-start: 0px;
  padding-inline-end: 17px;
  padding-block-end: 0px;
  padding-inline-start: 17px; }
`,""]),o.locals={container:"WhatsNewPopup-container-1D3b",title:"WhatsNewPopup-title-4K3b","title-mobile":"WhatsNewPopup-title-mobile-1_3b",content:"WhatsNewPopup-content-1F3b"}},uTZF:function(a,o,t){var e=t("0tPZ");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},uajq:function(a,o,t){"use strict";var e=t("raCH").EventEmitter,r=t("P7XM"),i=t("Yh+D"),s=t("nX0T"),c=t("3wkl"),f=t("c6pU"),b=t("9wH6"),h=t("fCBv"),v=t("ibx3"),O=function(){};function p(m,l){O(m);var u=this;e.call(this),setTimeout(function(){u.doXhr(m,l)},0)}r(p,e),p._getReceiver=function(m,l,u){return u.sameOrigin?new v(l,f):c.enabled?new v(l,c):s.enabled&&u.sameScheme?new v(l,s):h.enabled()?new h(m,l):new v(l,b)},p.prototype.doXhr=function(m,l){var u=this,n=i.addPath(m,"/info");O("doXhr",n),this.xo=p._getReceiver(m,n,l),this.timeoutRef=setTimeout(function(){O("timeout"),u._cleanup(!1),u.emit("finish")},p.timeout),this.xo.once("finish",function(x,y){O("finish",x,y),u._cleanup(!0),u.emit("finish",x,y)})},p.prototype._cleanup=function(m){O("_cleanup"),clearTimeout(this.timeoutRef),this.timeoutRef=null,!m&&this.xo&&this.xo.close(),this.xo=null},p.prototype.close=function(){O("close"),this.removeAllListeners(),this._cleanup(!1)},p.timeout=8e3,a.exports=p},uaoL:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("cDcd")),s=e(t("yR5n")),c=O(t("2imF")),f=e(t("rf6O")),b=e(t("kyEO")),h=e(t("hSE2"));function v(l){if(typeof WeakMap!="function")return null;var u=new WeakMap,n=new WeakMap;return(v=function(y){return y?n:u})(l)}function O(l,u){if(!u&&l&&l.__esModule)return l;if(l===null||r(l)!=="object"&&typeof l!="function")return{default:l};var n=v(u);if(n&&n.has(l))return n.get(l);var x={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in l)if(j!=="default"&&Object.prototype.hasOwnProperty.call(l,j)){var I=y?Object.getOwnPropertyDescriptor(l,j):null;I&&(I.get||I.set)?Object.defineProperty(x,j,I):x[j]=l[j]}return x.default=l,n&&n.set(l,x),x}var p=function(u){var n=u.className,x=u.iconSize,y=u.iconType,j=u.iconName,I=u.title,C=u.children,S=u.footer,T=u.headerRightContent,R=u.headerClass,M=u.footerClass,A=u.contentClass;return i.default.createElement("div",{className:(0,h.default)(n,s.default["content-card"])},i.default.createElement("div",{className:(0,h.default)(s.default.header,R)},j&&i.default.createElement(c.default,{size:x,className:s.default.icon,name:j,iconType:y}),i.default.createElement("div",{className:s.default.title},I),T&&i.default.createElement("div",{className:s.default.extra},T)),i.default.createElement(b.default,{noMargin:!0,light:!0}),i.default.createElement("div",{className:(0,h.default)(s.default["card-content"],A)},C),S&&i.default.createElement(i.default.Fragment,null,i.default.createElement(b.default,{noMargin:!0,light:!0}),i.default.createElement("div",{className:(0,h.default)(s.default.footer,M)},S)))};p.propTypes={iconSize:f.default.number,iconName:f.default.string,iconType:f.default.string,className:f.default.string,title:f.default.oneOfType([f.default.string,f.default.element]).isRequired,footer:f.default.element,headerRightContent:f.default.element,contentClass:f.default.string,headerClass:f.default.string,footerClass:f.default.string},p.defaultProps={iconSize:18,iconType:c.Type.SVG};var m=p;o.default=m},ucTV:function(a,o,t){var e=t("iBH0");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},ugx8:function(a){a.exports=JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["I\xF1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.33","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0","_resolved":"https://registry.npmjs.org/websocket/-/websocket-1.0.33.tgz","_integrity":"sha512-XwNqM2rN5eh3G2CUQE3OHZj+0xfdH42+OFK6LdC2yqiC0YU8e5UK0nYre220T0IyyN031V/XOvtHvXozvJYFWA==","_from":"websocket@1.0.33"}')},usdS:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.ContentCard-module-content-card-1I3b {
  max-width: 940px;
  border-radius: 2px;
  margin-block-start: 24px;
  margin-block-end: 24px;
  margin-inline-start: auto;
  margin-inline-end: auto;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }
  .ContentCard-module-content-card-1I3b .ContentCard-module-header-2A3b,
  .ContentCard-module-content-card-1I3b .ContentCard-module-footer-3E3b {
    display: flex;
    align-items: center;
    padding-block-start: 8px;
    padding-block-end: 8px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
    min-height: 60px; }
  .ContentCard-module-content-card-1I3b .ContentCard-module-header-2A3b .ContentCard-module-title-7X3b {
    font-family: Roboto;
    font-size: 16px;
    font-weight: 600;
    color: #313131; }
  .ContentCard-module-content-card-1I3b .ContentCard-module-header-2A3b .ContentCard-module-icon-2a3b {
    margin-inline-end: 10px;
    color: #313131; }
  .ContentCard-module-content-card-1I3b .ContentCard-module-header-2A3b .ContentCard-module-extra-3K3b {
    margin-inline-start: auto; }
  .ContentCard-module-content-card-1I3b .ContentCard-module-card-content-1i3b {
    padding-block-start: 34px;
    padding-block-end: 34px;
    padding-inline-start: 40px;
    padding-inline-end: 40px; }
`,""]),o.locals={"content-card":"ContentCard-module-content-card-1I3b",header:"ContentCard-module-header-2A3b",footer:"ContentCard-module-footer-3E3b",title:"ContentCard-module-title-7X3b",icon:"ContentCard-module-icon-2a3b",extra:"ContentCard-module-extra-3K3b","card-content":"ContentCard-module-card-content-1i3b"}},uuRP:function(a,o,t){var e=t("B/qk");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},uzES:function(a,o,t){"use strict";var e=t("kwwM"),r=t("8fj+");function i(s){this._transport=s,s.on("message",this._transportMessage.bind(this)),s.on("close",this._transportClose.bind(this))}i.prototype._transportClose=function(s,c){r.postMessage("c",e.stringify([s,c]))},i.prototype._transportMessage=function(s){r.postMessage("t",s)},i.prototype._send=function(s){this._transport.send(s)},i.prototype._close=function(){this._transport.close(),this._transport.removeAllListeners()},a.exports=i},v0om:function(a,o,t){"use strict";(function(e){var r=t("JYLm"),i=t("Yh+D"),s=function(){},c,f;function b(v){s("createIframe",v);try{return e.document.createElement('<iframe name="'+v+'">')}catch(p){var O=e.document.createElement("iframe");return O.name=v,O}}function h(){s("createForm"),c=e.document.createElement("form"),c.style.display="none",c.style.position="absolute",c.method="POST",c.enctype="application/x-www-form-urlencoded",c.acceptCharset="UTF-8",f=e.document.createElement("textarea"),f.name="d",c.appendChild(f),e.document.body.appendChild(c)}a.exports=function(v,O,p){s(v,O),c||h();var m="a"+r.string(8);c.target=m,c.action=i.addQuery(i.addPath(v,"/jsonp_send"),"i="+m);var l=b(m);l.id=m,l.style.display="none",c.appendChild(l);try{f.value=O}catch(n){}c.submit();var u=function(n){s("completed",m,n),!!l.onerror&&(l.onreadystatechange=l.onerror=l.onload=null,setTimeout(function(){s("cleaning up",m),l.parentNode.removeChild(l),l=null},500),f.value="",p(n))};return l.onerror=function(){s("onerror",m),u()},l.onload=function(){s("onload",m),u()},l.onreadystatechange=function(n){s("onreadystatechange",m,l.readyState,n),l.readyState==="complete"&&u()},function(){s("aborted",m),u(new Error("Aborted"))}}}).call(this,t("yLpj"))},"v0q/":function(a,o,t){var e=t("G8ce");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},vI97:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.RegularNotifications-main-2y3b {
  position: relative;
  margin-block-start: 5px;
  margin-inline-end: 5px;
  margin-block-end: 5px;
  margin-inline-start: 5px;
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  padding-block-start: 20px;
  padding-inline-end: 20px;
  padding-block-end: 20px;
  padding-inline-start: 20px; }
  .RegularNotifications-main-2y3b .RegularNotifications-icon-2G3b {
    position: absolute;
    top: 12px;
    right: 12px;
    color: currentColor;
    margin-inline-start: auto;
    padding-block-start: 0;
    padding-inline-end: 0;
    padding-block-end: 0;
    padding-inline-start: 0;
    height: auto; }
    [dir='rtl'] .RegularNotifications-main-2y3b .RegularNotifications-icon-2G3b {
      right: auto;
      left: 12px; }
`,""]),o.locals={main:"RegularNotifications-main-2y3b",icon:"RegularNotifications-icon-2G3b"}},vPBx:function(a,o,t){var e=t("fhYk");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},vRmd:function(a,o,t){"use strict";o.__esModule=!0,o.checkRevision=p,o.template=m,o.wrapProgram=l,o.resolvePartial=u,o.invokePartial=n,o.noop=x;function e(S){return S&&S.__esModule?S:{default:S}}function r(S){if(S&&S.__esModule)return S;var T={};if(S!=null)for(var R in S)Object.prototype.hasOwnProperty.call(S,R)&&(T[R]=S[R]);return T.default=S,T}var i=t("sTlx"),s=r(i),c=t("tpBh"),f=e(c),b=t("BEYS"),h=t("6f8O"),v=t("TdM0"),O=t("k95Q");function p(S){var T=S&&S[0]||1,R=b.COMPILER_REVISION;if(!(T>=b.LAST_COMPATIBLE_COMPILER_REVISION&&T<=b.COMPILER_REVISION))if(T<b.LAST_COMPATIBLE_COMPILER_REVISION){var M=b.REVISION_CHANGES[R],A=b.REVISION_CHANGES[T];throw new f.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+M+") or downgrade your runtime to an older version ("+A+").")}else throw new f.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+S[1]+").")}function m(S,T){if(!T)throw new f.default("No environment passed to template");if(!S||!S.main)throw new f.default("Unknown template object: "+typeof S);S.main.decorator=S.main_d,T.VM.checkRevision(S.compiler);var R=S.compiler&&S.compiler[0]===7;function M(P,L,k){k.hash&&(L=s.extend({},L,k.hash),k.ids&&(k.ids[0]=!0)),P=T.VM.resolvePartial.call(this,P,L,k);var G=s.extend({},k,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),Y=T.VM.invokePartial.call(this,P,L,G);if(Y==null&&T.compile&&(k.partials[k.name]=T.compile(P,S.compilerOptions,T),Y=k.partials[k.name](L,G)),Y!=null){if(k.indent){for(var J=Y.split(`
`),X=0,at=J.length;X<at&&!(!J[X]&&X+1===at);X++)J[X]=k.indent+J[X];Y=J.join(`
`)}return Y}else throw new f.default("The partial "+k.name+" could not be compiled when running in runtime-only mode")}var A={strict:function(L,k,G){if(!L||!(k in L))throw new f.default('"'+k+'" not defined in '+L,{loc:G});return L[k]},lookupProperty:function(L,k){var G=L[k];if(G==null||Object.prototype.hasOwnProperty.call(L,k)||O.resultIsAllowed(G,A.protoAccessControl,k))return G},lookup:function(L,k){for(var G=L.length,Y=0;Y<G;Y++){var J=L[Y]&&A.lookupProperty(L[Y],k);if(J!=null)return L[Y][k]}},lambda:function(L,k){return typeof L=="function"?L.call(k):L},escapeExpression:s.escapeExpression,invokePartial:M,fn:function(L){var k=S[L];return k.decorator=S[L+"_d"],k},programs:[],program:function(L,k,G,Y,J){var X=this.programs[L],at=this.fn(L);return k||J||Y||G?X=l(this,L,at,k,G,Y,J):X||(X=this.programs[L]=l(this,L,at)),X},data:function(L,k){for(;L&&k--;)L=L._parent;return L},mergeIfNeeded:function(L,k){var G=L||k;return L&&k&&L!==k&&(G=s.extend({},k,L)),G},nullContext:Object.seal({}),noop:T.VM.noop,compilerInfo:S.compiler};function W(P){var L=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],k=L.data;W._setup(L),!L.partial&&S.useData&&(k=y(P,k));var G=void 0,Y=S.useBlockParams?[]:void 0;S.useDepths&&(L.depths?G=P!=L.depths[0]?[P].concat(L.depths):L.depths:G=[P]);function J(X){return""+S.main(A,X,A.helpers,A.partials,k,Y,G)}return J=j(S.main,J,A,L.depths||[],k,Y),J(P,L)}return W.isTop=!0,W._setup=function(P){if(P.partial)A.protoAccessControl=P.protoAccessControl,A.helpers=P.helpers,A.partials=P.partials,A.decorators=P.decorators,A.hooks=P.hooks;else{var L=s.extend({},T.helpers,P.helpers);I(L,A),A.helpers=L,S.usePartial&&(A.partials=A.mergeIfNeeded(P.partials,T.partials)),(S.usePartial||S.useDecorators)&&(A.decorators=s.extend({},T.decorators,P.decorators)),A.hooks={},A.protoAccessControl=O.createProtoAccessControl(P);var k=P.allowCallsToHelperMissing||R;h.moveHelperToHooks(A,"helperMissing",k),h.moveHelperToHooks(A,"blockHelperMissing",k)}},W._child=function(P,L,k,G){if(S.useBlockParams&&!k)throw new f.default("must pass block params");if(S.useDepths&&!G)throw new f.default("must pass parent depths");return l(A,P,S[P],L,0,k,G)},W}function l(S,T,R,M,A,W,P){function L(k){var G=arguments.length<=1||arguments[1]===void 0?{}:arguments[1],Y=P;return P&&k!=P[0]&&!(k===S.nullContext&&P[0]===null)&&(Y=[k].concat(P)),R(S,k,S.helpers,S.partials,G.data||M,W&&[G.blockParams].concat(W),Y)}return L=j(R,L,S,P,M,W),L.program=T,L.depth=P?P.length:0,L.blockParams=A||0,L}function u(S,T,R){return S?!S.call&&!R.name&&(R.name=S,S=R.partials[S]):R.name==="@partial-block"?S=R.data["partial-block"]:S=R.partials[R.name],S}function n(S,T,R){var M=R.data&&R.data["partial-block"];R.partial=!0,R.ids&&(R.data.contextPath=R.ids[0]||R.data.contextPath);var A=void 0;if(R.fn&&R.fn!==x&&function(){R.data=b.createFrame(R.data);var W=R.fn;A=R.data["partial-block"]=function(L){var k=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];return k.data=b.createFrame(k.data),k.data["partial-block"]=M,W(L,k)},W.partials&&(R.partials=s.extend({},R.partials,W.partials))}(),S===void 0&&A&&(S=A),S===void 0)throw new f.default("The partial "+R.name+" could not be found");if(S instanceof Function)return S(T,R)}function x(){return""}function y(S,T){return(!T||!("root"in T))&&(T=T?b.createFrame(T):{},T.root=S),T}function j(S,T,R,M,A,W){if(S.decorator){var P={};T=S.decorator(T,P,R,M&&M[0],A,W,M),s.extend(T,P)}return T}function I(S,T){Object.keys(S).forEach(function(R){var M=S[R];S[R]=C(M,T)})}function C(S,T){var R=T.lookupProperty;return v.wrapHelper(S,function(M){return s.extend({lookupProperty:R},M)})}},vdep:function(a,o,t){"use strict";o.__esModule=!0;function e(v){return v&&v.__esModule?v:{default:v}}var r=t("zLjz"),i=e(r);function s(){var v=arguments.length<=0||arguments[0]===void 0?{}:arguments[0];this.options=v}s.prototype=new i.default,s.prototype.Program=function(v){var O=!this.options.ignoreStandalone,p=!this.isRootSeen;this.isRootSeen=!0;for(var m=v.body,l=0,u=m.length;l<u;l++){var n=m[l],x=this.accept(n);if(!!x){var y=c(m,l,p),j=f(m,l,p),I=x.openStandalone&&y,C=x.closeStandalone&&j,S=x.inlineStandalone&&y&&j;x.close&&b(m,l,!0),x.open&&h(m,l,!0),O&&S&&(b(m,l),h(m,l)&&n.type==="PartialStatement"&&(n.indent=/([ \t]+$)/.exec(m[l-1].original)[1])),O&&I&&(b((n.program||n.inverse).body),h(m,l)),O&&C&&(b(m,l),h((n.inverse||n.program).body))}}return v},s.prototype.BlockStatement=s.prototype.DecoratorBlock=s.prototype.PartialBlockStatement=function(v){this.accept(v.program),this.accept(v.inverse);var O=v.program||v.inverse,p=v.program&&v.inverse,m=p,l=p;if(p&&p.chained)for(m=p.body[0].program;l.chained;)l=l.body[l.body.length-1].program;var u={open:v.openStrip.open,close:v.closeStrip.close,openStandalone:f(O.body),closeStandalone:c((m||O).body)};if(v.openStrip.close&&b(O.body,null,!0),p){var n=v.inverseStrip;n.open&&h(O.body,null,!0),n.close&&b(m.body,null,!0),v.closeStrip.open&&h(l.body,null,!0),!this.options.ignoreStandalone&&c(O.body)&&f(m.body)&&(h(O.body),b(m.body))}else v.closeStrip.open&&h(O.body,null,!0);return u},s.prototype.Decorator=s.prototype.MustacheStatement=function(v){return v.strip},s.prototype.PartialStatement=s.prototype.CommentStatement=function(v){var O=v.strip||{};return{inlineStandalone:!0,open:O.open,close:O.close}};function c(v,O,p){O===void 0&&(O=v.length);var m=v[O-1],l=v[O-2];if(!m)return p;if(m.type==="ContentStatement")return(l||!p?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(m.original)}function f(v,O,p){O===void 0&&(O=-1);var m=v[O+1],l=v[O+2];if(!m)return p;if(m.type==="ContentStatement")return(l||!p?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(m.original)}function b(v,O,p){var m=v[O==null?0:O+1];if(!(!m||m.type!=="ContentStatement"||!p&&m.rightStripped)){var l=m.value;m.value=m.value.replace(p?/^\s+/:/^[ \t]*\r?\n?/,""),m.rightStripped=m.value!==l}}function h(v,O,p){var m=v[O==null?v.length-1:O-1];if(!(!m||m.type!=="ContentStatement"||!p&&m.leftStripped)){var l=m.value;return m.value=m.value.replace(p?/\s+$/:/[ \t]+$/,""),m.leftStripped=m.value!==l,m.leftStripped}}o.default=s,a.exports=o.default},vlEx:function(a,o,t){var e=t("Rr8H");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},vlw9:function(a,o,t){var e=t("o0/o");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},vwwZ:function(a,o,t){var e=t("9v4T");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"w89+":function(a,o,t){var e=t("9dab");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},wA2W:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(t("pVnL")),s=e(t("QILm")),c=e(t("cDcd")),f=e(t("QSPI")),b=p(t("2imF")),h=t("rf6O"),v=["tooltipClassName","onClick","iconClassName","tooltipText","size"];function O(u){if(typeof WeakMap!="function")return null;var n=new WeakMap,x=new WeakMap;return(O=function(j){return j?x:n})(u)}function p(u,n){if(!n&&u&&u.__esModule)return u;if(u===null||r(u)!=="object"&&typeof u!="function")return{default:u};var x=O(n);if(x&&x.has(u))return x.get(u);var y={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in u)if(I!=="default"&&Object.prototype.hasOwnProperty.call(u,I)){var C=j?Object.getOwnPropertyDescriptor(u,I):null;C&&(C.get||C.set)?Object.defineProperty(y,I,C):y[I]=u[I]}return y.default=u,x&&x.set(u,y),y}function m(u){var n=u.tooltipClassName,x=u.onClick,y=u.iconClassName,j=u.tooltipText,I=u.size,C=I===void 0?14:I,S=(0,s.default)(u,v);return c.default.createElement(f.default,(0,i.default)({forceTouchTip:!0,className:n,toolTip:j},S),c.default.createElement(b.default,{iconType:b.Type.SVG,size:C,onClick:x,name:"info",className:y}))}m.propTypes={tooltipText:h.string,tooltipClassName:h.string,iconClassName:h.string,onClick:h.func,size:h.number};var l=m;o.default=l},wPJT:function(a,o,t){var e=t("r1s+");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},wbRU:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CurrentDomain-module-title-wrapper-3o3b {
  display: flex;
  flex-direction: column; }
  .CurrentDomain-module-title-wrapper-3o3b.CurrentDomain-module-row-2J3b {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-block-end: 6px; }
    .CurrentDomain-module-title-wrapper-3o3b.CurrentDomain-module-row-2J3b .CurrentDomain-module-title-293b {
      flex: initial;
      margin-block-end: 0;
      margin-inline-end: 6px; }
  .CurrentDomain-module-title-wrapper-3o3b .CurrentDomain-module-title-293b {
    font-family: Roboto;
    font-weight: 500;
    margin-block-end: 8px; }
  .CurrentDomain-module-title-wrapper-3o3b .CurrentDomain-module-status-wrapper-3A3b {
    display: flex; }
    .CurrentDomain-module-title-wrapper-3o3b .CurrentDomain-module-status-wrapper-3A3b .CurrentDomain-module-status-2l3b {
      margin-inline-end: 8px; }
    .CurrentDomain-module-title-wrapper-3o3b .CurrentDomain-module-status-wrapper-3A3b .CurrentDomain-module-link-3O3b {
      color: #616c79;
      font-size: 14px;
      align-self: center;
      margin-block-end: 2px; }

.CurrentDomain-module-subtitle-3E3b {
  font-size: 14px;
  color: #828894;
  padding-block-end: 0; }

.CurrentDomain-module-inline-message-ZV3b.CurrentDomain-module-inline-message-ZV3b {
  width: 632px;
  padding-block-start: 13px;
  padding-block-end: 13px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
  margin-block-start: 8px;
  margin-block-end: 8px;
  color: #313131;
  font-size: 14px; }

.CurrentDomain-module-message-link-1u3b {
  display: inline-flex;
  font-size: inherit;
  color: inherit; }
`,""]),o.locals={"title-wrapper":"CurrentDomain-module-title-wrapper-3o3b",row:"CurrentDomain-module-row-2J3b",title:"CurrentDomain-module-title-293b","status-wrapper":"CurrentDomain-module-status-wrapper-3A3b",status:"CurrentDomain-module-status-2l3b",link:"CurrentDomain-module-link-3O3b",subtitle:"CurrentDomain-module-subtitle-3E3b","inline-message":"CurrentDomain-module-inline-message-ZV3b","message-link":"CurrentDomain-module-message-link-1u3b"}},wnJ8:function(a,o,t){var e=t("U7fe");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},woL0:function(a,o,t){"use strict";(function(e){var r=t("JYLm"),i={},s=!1,c=e.chrome&&e.chrome.app&&e.chrome.app.runtime;a.exports={attachEvent:function(b,h){typeof e.addEventListener!="undefined"?e.addEventListener(b,h,!1):e.document&&e.attachEvent&&(e.document.attachEvent("on"+b,h),e.attachEvent("on"+b,h))},detachEvent:function(b,h){typeof e.addEventListener!="undefined"?e.removeEventListener(b,h,!1):e.document&&e.detachEvent&&(e.document.detachEvent("on"+b,h),e.detachEvent("on"+b,h))},unloadAdd:function(b){if(c)return null;var h=r.string(8);return i[h]=b,s&&setTimeout(this.triggerUnloadCallbacks,0),h},unloadDel:function(b){b in i&&delete i[b]},triggerUnloadCallbacks:function(){for(var b in i)i[b](),delete i[b]}};var f=function(){s||(s=!0,a.exports.triggerUnloadCallbacks())};c||a.exports.attachEvent("unload",f)}).call(this,t("yLpj"))},wy3E:function(a,o,t){"use strict";t.d(o,"a",function(){return s});var e=t("yXPU"),r=t.n(e),i=t("lRKB");function s(){return c.apply(this,arguments)}function c(){return c=r()(function*(){return(yield Object(i.a)("accountPlan")).getAccountPlansService()}),c.apply(this,arguments)}},wyZ4:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.CommonCardContent-module-title-1-3b {
  font-family: Roboto;
  font-weight: 500;
  margin-block-end: 4px; }

.CommonCardContent-module-description-3W3b {
  line-height: 1.43;
  margin-block-end: 16px;
  max-width: 843px; }
  .CommonCardContent-module-description-3W3b .CommonCardContent-module-highlighted-Eo3b {
    color: #828894; }

.CommonCardContent-module-title-1-3b,
.CommonCardContent-module-description-3W3b {
  padding-block-start: 0;
  padding-block-end: 0; }
`,""]),o.locals={title:"CommonCardContent-module-title-1-3b",description:"CommonCardContent-module-description-3W3b",highlighted:"CommonCardContent-module-highlighted-Eo3b"}},xLgD:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.SetFeatureFlagPopup-container-xw3b {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px; }
  .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-title-container-2N3b {
    display: flex;
    align-self: center;
    margin-bottom: 20px; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-title-container-2N3b .SetFeatureFlagPopup-title-3U3b {
      font-size: 28px;
      font-weight: bold; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-title-container-2N3b .SetFeatureFlagPopup-count-1D3b {
      margin-top: 12px;
      font-size: 15px; }
  .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b {
    display: flex; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-dropdown-with-title-3r3b {
      display: flex;
      flex-direction: column; }
      .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-dropdown-with-title-3r3b .SetFeatureFlagPopup-dropdown-1Y3b {
        width: 400px; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-textbox-with-title-2O3b {
      display: flex;
      flex-direction: column; }
      .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-textbox-with-title-2O3b .SetFeatureFlagPopup-textbox-title-3_3b {
        margin-left: 10px; }
      .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-textbox-with-title-2O3b .SetFeatureFlagPopup-textbox-363b {
        margin-left: 10px; }
      .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-dropdown-and-textbox-2y3b .SetFeatureFlagPopup-textbox-with-title-2O3b .SetFeatureFlagPopup-textbox-input-203b {
        width: 350px;
        height: 32px;
        box-shadow: none;
        text-align: initial; }
  .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-launch-darkly-link-container-133b {
    display: flex;
    align-self: center;
    margin-top: 20px;
    cursor: pointer; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-launch-darkly-link-container-133b:hover .SetFeatureFlagPopup-launch-darkly-link-3z3b {
      color: #0095ff; }
    .SetFeatureFlagPopup-container-xw3b .SetFeatureFlagPopup-launch-darkly-link-container-133b .SetFeatureFlagPopup-launch-darkly-link-3z3b {
      font-family: 'Source Sans Pro';
      font-size: 14px;
      margin-left: 10px;
      color: #0077cc;
      text-decoration: underline; }
`,""]),o.locals={container:"SetFeatureFlagPopup-container-xw3b","title-container":"SetFeatureFlagPopup-title-container-2N3b",title:"SetFeatureFlagPopup-title-3U3b",count:"SetFeatureFlagPopup-count-1D3b","dropdown-and-textbox":"SetFeatureFlagPopup-dropdown-and-textbox-2y3b","dropdown-with-title":"SetFeatureFlagPopup-dropdown-with-title-3r3b",dropdown:"SetFeatureFlagPopup-dropdown-1Y3b","textbox-with-title":"SetFeatureFlagPopup-textbox-with-title-2O3b","textbox-title":"SetFeatureFlagPopup-textbox-title-3_3b",textbox:"SetFeatureFlagPopup-textbox-363b","textbox-input":"SetFeatureFlagPopup-textbox-input-203b","launch-darkly-link-container":"SetFeatureFlagPopup-launch-darkly-link-container-133b","launch-darkly-link":"SetFeatureFlagPopup-launch-darkly-link-3z3b"}},xSnx:function(a,o,t){"use strict";var e=t("P7XM"),r=t("raCH").EventEmitter,i=t("kwwM"),s=t("c6pU"),c=t("ibx3");function f(b){var h=this;r.call(this),this.ir=new c(b,s),this.ir.once("finish",function(v,O){h.ir=null,h.emit("message",i.stringify([v,O]))})}e(f,r),f.transportName="iframe-info-receiver",f.prototype.close=function(){this.ir&&(this.ir.close(),this.ir=null),this.removeAllListeners()},a.exports=f},xXSY:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.NavigationBar-container-173b {
  display: flex;
  align-self: stretch; }
`,""]),o.locals={container:"NavigationBar-container-173b"}},y22v:function(a,o,t){"use strict";o.__esModule=!0;var e=t("sTlx"),r=void 0;try{if(!1)var i}catch(f){}r||(r=function(f,b,h,v){this.src="",v&&this.add(v)},r.prototype={add:function(b){e.isArray(b)&&(b=b.join("")),this.src+=b},prepend:function(b){e.isArray(b)&&(b=b.join("")),this.src=b+this.src},toStringWithSourceMap:function(){return{code:this.toString()}},toString:function(){return this.src}});function s(f,b,h){if(e.isArray(f)){for(var v=[],O=0,p=f.length;O<p;O++)v.push(b.wrap(f[O],h));return v}else if(typeof f=="boolean"||typeof f=="number")return f+"";return f}function c(f){this.srcFile=f,this.source=[]}c.prototype={isEmpty:function(){return!this.source.length},prepend:function(b,h){this.source.unshift(this.wrap(b,h))},push:function(b,h){this.source.push(this.wrap(b,h))},merge:function(){var b=this.empty();return this.each(function(h){b.add(["  ",h,`
`])}),b},each:function(b){for(var h=0,v=this.source.length;h<v;h++)b(this.source[h])},empty:function(){var b=this.currentLocation||{start:{}};return new r(b.start.line,b.start.column,this.srcFile)},wrap:function(b){var h=arguments.length<=1||arguments[1]===void 0?this.currentLocation||{start:{}}:arguments[1];return b instanceof r?b:(b=s(b,this,h),new r(h.start.line,h.start.column,this.srcFile,b))},functionCall:function(b,h,v){return v=this.generateList(v),this.wrap([b,h?"."+h+"(":"(",v,")"])},quotedString:function(b){return'"'+(b+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(b){var h=this,v=[];Object.keys(b).forEach(function(p){var m=s(b[p],h);m!=="undefined"&&v.push([h.quotedString(p),":",m])});var O=this.generateList(v);return O.prepend("{"),O.add("}"),O},generateList:function(b){for(var h=this.empty(),v=0,O=b.length;v<O;v++)v&&h.add(","),h.add(s(b[v],this));return h},generateArray:function(b){var h=this.generateList(b);return h.prepend("["),h.add("]"),h}},o.default=c,a.exports=o.default},yR5n:function(a,o,t){var e=t("usdS");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},yftf:function(a,o,t){"use strict";var e=t("TqRt"),r=t("cDf5");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0,o.useArrowKeys=y,o.useDelayedChange=I;var i=e(t("J4zp")),s=e(t("pVnL")),c=e(t("QILm")),f=l(t("cDcd")),b=t("rf6O"),h=e(t("CAM5")),v=e(t("hSE2")),O=e(t("ryzx")),p=["className"];function m(C){if(typeof WeakMap!="function")return null;var S=new WeakMap,T=new WeakMap;return(m=function(M){return M?T:S})(C)}function l(C,S){if(!S&&C&&C.__esModule)return C;if(C===null||r(C)!=="object"&&typeof C!="function")return{default:C};var T=m(S);if(T&&T.has(C))return T.get(C);var R={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in C)if(A!=="default"&&Object.prototype.hasOwnProperty.call(C,A)){var W=M?Object.getOwnPropertyDescriptor(C,A):null;W&&(W.get||W.set)?Object.defineProperty(R,A,W):R[A]=C[A]}return R.default=C,T&&T.set(C,R),R}var u=f.default.forwardRef(function(C,S){var T=C.className,R=(0,c.default)(C,p);return f.default.createElement("input",(0,s.default)({className:(0,v.default)(T,h.default.main)},R,{ref:S}))}),n=u;o.default=n;var x=function(){};function y(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=C.onChange,T=S===void 0?x:S;return(0,f.useCallback)(function(R){if(!!/arrow(?:up|down)/i.test(R.key)){R.preventDefault();var M=/down/i.test(R.key)?-1:1,A=R.shiftKey?10:1,W=parseFloat(R.target.value)||0;T(W+M*A)}},[T])}function j(C){return C.target.value}function I(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},S=C.debounced,T=S===void 0?!0:S,R=C.delay,M=R===void 0?500:R,A=C.onChange,W=A===void 0?x:A,P=C.getValue,L=P===void 0?j:P,k=C.initialValue,G=k===void 0?"":k,Y=(0,f.useState)(G),J=(0,i.default)(Y,2),X=J[0],at=J[1],z=(0,f.useState)(!0),F=(0,i.default)(z,2),rt=F[0],ct=F[1],dt=(0,f.useMemo)(function(){return T?O.default.debounce(function(){ct(!0)},M,{leading:!1}):function(){}},[M,T]);(0,f.useEffect)(function(){rt&&X&&W&&(W(X),at(""))},[rt,W,X]);var vt=(0,f.useCallback)(function(Ot){if(!T||!L(Ot)){W(L(Ot));return}at(L(Ot)),ct(!1),dt()},[T,dt,L,W]);return[X,vt]}I.propTypes={debounced:b.bool,delay:b.number,onChange:b.func,getValue:b.func}},yjSe:function(a,o,t){(function(e){a.exports=e.EventSource}).call(this,t("yLpj"))},yncJ:function(a,o,t){var e=t("9uVA");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)},"z+YZ":function(a,o,t){"use strict";(function(e){e.crypto&&e.crypto.getRandomValues?a.exports.randomBytes=function(r){var i=new Uint8Array(r);return e.crypto.getRandomValues(i),i}:a.exports.randomBytes=function(r){for(var i=new Array(r),s=0;s<r;s++)i[s]=Math.floor(Math.random()*256);return i}}).call(this,t("yLpj"))},z8gy:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.Text-container-2r3b {
  color: var(--header-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center; }
`,""]),o.locals={container:"Text-container-2r3b"}},zBGt:function(a,o,t){o=a.exports=t("I1BE")(!1),o.push([a.i,`.DomainInput-module-input-wrapper-1N3b {
  margin-block-end: 79px;
  position: relative; }
  .DomainInput-module-input-wrapper-1N3b .DomainInput-module-input-2O3b {
    font-size: 14px;
    width: 363px;
    height: 35px;
    padding-inline-start: 12px;
    padding-inline-end: 12px;
    border: 1px solid #ced6d9; }
    .DomainInput-module-input-wrapper-1N3b .DomainInput-module-input-2O3b:focus {
      border-color: #a1abb0; }
    .DomainInput-module-input-wrapper-1N3b .DomainInput-module-input-2O3b.DomainInput-module-with-error-qj3b {
      border-color: #e7463a; }
  .DomainInput-module-input-wrapper-1N3b .DomainInput-module-error-message-2e3b {
    top: 36px; }
`,""]),o.locals={"input-wrapper":"DomainInput-module-input-wrapper-1N3b",input:"DomainInput-module-input-2O3b","with-error":"DomainInput-module-with-error-qj3b","error-message":"DomainInput-module-error-message-2e3b"}},zH15:function(a,o,t){"use strict";(function(e){var r=t("aUWK");a.exports=t("SGzc")(r),"_sockjs_onload"in e&&setTimeout(e._sockjs_onload,1)}).call(this,t("yLpj"))},zLjz:function(a,o,t){"use strict";o.__esModule=!0;function e(h){return h&&h.__esModule?h:{default:h}}var r=t("tpBh"),i=e(r);function s(){this.parents=[]}s.prototype={constructor:s,mutating:!1,acceptKey:function(v,O){var p=this.accept(v[O]);if(this.mutating){if(p&&!s.prototype[p.type])throw new i.default('Unexpected node type "'+p.type+'" found when accepting '+O+" on "+v.type);v[O]=p}},acceptRequired:function(v,O){if(this.acceptKey(v,O),!v[O])throw new i.default(v.type+" requires "+O)},acceptArray:function(v){for(var O=0,p=v.length;O<p;O++)this.acceptKey(v,O),v[O]||(v.splice(O,1),O--,p--)},accept:function(v){if(!!v){if(!this[v.type])throw new i.default("Unknown type: "+v.type,v);this.current&&this.parents.unshift(this.current),this.current=v;var O=this[v.type](v);if(this.current=this.parents.shift(),!this.mutating||O)return O;if(O!==!1)return v}},Program:function(v){this.acceptArray(v.body)},MustacheStatement:c,Decorator:c,BlockStatement:f,DecoratorBlock:f,PartialStatement:b,PartialBlockStatement:function(v){b.call(this,v),this.acceptKey(v,"program")},ContentStatement:function(){},CommentStatement:function(){},SubExpression:c,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(v){this.acceptArray(v.pairs)},HashPair:function(v){this.acceptRequired(v,"value")}};function c(h){this.acceptRequired(h,"path"),this.acceptArray(h.params),this.acceptKey(h,"hash")}function f(h){c.call(this,h),this.acceptKey(h,"program"),this.acceptKey(h,"inverse")}function b(h){this.acceptRequired(h,"name"),this.acceptArray(h.params),this.acceptKey(h,"hash")}o.default=s,a.exports=o.default},zj6R:function(a,o,t){var e=t("wbRU");typeof e=="string"&&(e=[[a.i,e,""]]);var r;r=t("/I6Q");var i={transform:"modules/common/cssVariablesPolyfill"};i.transform=r;var s=t("aET+")(e,i);e.locals&&(a.exports=e.locals)}}])})();
