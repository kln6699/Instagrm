﻿"use strict";(self.webpackChunkhaisha_recharge_website=self.webpackChunkhaisha_recharge_website||[]).push([[8415],{26540:(e,n,o)=>{o.d(n,{vn:()=>a,$M:()=>t,p7:()=>r,w2:()=>c,g4:()=>i,T:()=>u});var a="https://steam-files.haishagame.com",t=["\u672a\u8ba4\u8bc1","\u5df2\u8ba4\u8bc1","\u5ba1\u6838\u4e2d","\u5ba1\u6838\u62d2\u7edd"],r="OPEN_SCAN_PAY",c="isAlipay",i=20,u=["www.kardz.cn","localhost","10.13.3.13","hs-recharge-ssr.test.kunluncb.com","kardzvip.com","www.kardzvip.com","www2.test.kardz.cn","www.test.kardz.cn","www3.test.kardz.cn"]},57525:(e,n,o)=>{o.d(n,{BD:()=>m,ZP:()=>h});var a=o(1413),t=o(29439),r=o(74165),c=o(15861),i=o(20048),u=o(26540),l=o(55444),s=o(62118),d=o(66825),p=o(41532),v=o(47313),b=o(68507),f=o(98857),g=o(88666),y=["payermax","kakaopay","toss","payco","internetbanking","touchngo","boost","grabpay","enets","dana","gopay","duitnow","shopeepay","ovo","truemoney","linepay","paypal","binance","visa","googlepay"],m=["wechat_wap","alipay_wap","wechat_scan","alipay_scan","payermax","paypal","kakaopay","toss","payco","internetbanking","touchngo","boost","grabpay","enets","dana","gopay","duitnow","shopeepay","ovo","truemoney","linepay","card","binance","visa","googlepay"];const h=function usePay(e,n){var o=(0,s.hk)(),h=(0,s.oR)(),w=((0,s.TH)(),(0,f.Z)()),k=w.currencyCode,C=w.country,F=((0,d.f)().isLogin,(0,p.t)()),x=F.getUAParser,_=F.checkIsIOS,P=m.find((function(n){return e.includes(n)}))||(null===e||void 0===e?void 0:e[0])||"",Z=e.includes("balance"),B=null===n||void 0===n?void 0:n.returnUrl,N=null===n||void 0===n?void 0:n.successUrl,I=null===n||void 0===n?void 0:n.gclid,L=null===n||void 0===n?void 0:n.bdvid,A=null===n||void 0===n?void 0:n.source,E=1===e.length&&"balance"===e[0],Y=function getBalancePayAmt(e){var n;return Z?Math.min((null===(n=h.ConfigStore.userinfo)||void 0===n?void 0:n.balance)||0,(null===e||void 0===e?void 0:e.payAmt)||(null===e||void 0===e?void 0:e.amount)||0):void 0},M=function getReturnUrl(e,o,a,t,r){var c=a?function getMultiLanguagePayResultUrl(e,o,a,t){var r;return B?"".concat(window.location.origin).concat(B):"".concat(window.location.origin).concat(o?"/".concat(h.CommonStore.languageCode,"-").concat(h.CommonStore.currencyCode.toLowerCase()):"").concat(null!==(r=null===n||void 0===n?void 0:n.returnPath)&&void 0!==r?r:"/pay_result","?no=").concat((null===e||void 0===e?void 0:e.orderNo)||"","&payMode=").concat(P).concat(N?"&successUrl="+encodeURIComponent(N):"","&t=").concat((0,i.cD)().headers.Authorization||a).concat(I?"&gclid="+I:"").concat(L?"&bd_vid="+L:"").concat(t?"&orderCreateInfo="+t:"")}(e,a,t,r):function getPayResultUrl(e,o,a,t){var r;return B?"".concat(window.location.origin).concat(B):"".concat(window.location.origin).concat(o?"/"+o:"").concat(null!==(r=null===n||void 0===n?void 0:n.returnPath)&&void 0!==r?r:"/pay_result","?no=").concat((null===e||void 0===e?void 0:e.orderNo)||"","&payMode=").concat(P).concat(N?"&successUrl="+encodeURIComponent(N):"","&t=").concat((0,i.cD)().headers.Authorization||a).concat(I?"&gclid="+I:"").concat(L?"&bd_vid="+L:"").concat(A?"&source="+A:"").concat(t?"&orderCreateInfo="+t:"")}(e,o,t,r);return c},R=function getPayMode(){return E?"":P}(),S=(P.includes("wechat_wap"),function(){var n=(0,c.Z)((0,r.Z)().mark((function _callee(n,a,t,c,u){var s,d;return(0,r.Z)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.userApis.gatewayPay({balanceNo:(null===n||void 0===n?void 0:n.balanceNo)||"",orderNo:(null===n||void 0===n?void 0:n.orderNo)||"",payType:R,currencyCode:t?h.CommonStore.currencyCode:k,channel:(0,i.mr)(h.CommonStore.nodeAdminConfig),frontCallbackURL:(0,i.at)()&&e.includes("alipay")?"":M(n,a,t,c,u),balancePayAmt:Y(n),country:a||C,goodsType:n.goodsType||n.accountType,orderType:n.orderType,goodsNo:n.goodsId||n.gameId},(0,i.cD)(c));case 3:return s=r.sent,d=s.result,r.abrupt("return",{result:{thirdPayAmt:d.thirdPayAmt,payLaunch:d.launchInfo}});case 8:r.prev=8,r.t0=r.catch(0),l.FN.show(r.t0.message);case 11:case"end":return r.stop()}}),_callee,null,[[0,8]])})));return function overseaPay(e,o,a,t,r){return n.apply(this,arguments)}}()),T=function(){var e=(0,c.Z)((0,r.Z)().mark((function _callee2(e,n){var c,u,l,s,d,p,v;return(0,r.Z)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Promise.all([(0,i.fm)(),(0,i.Qs)()]);case 3:if(c=r.sent,u=(0,t.Z)(c,2),l=u[0],s=l.fingerprint,d=l.simpleFingerprint,p=u[1],v=JSON.stringify((0,a.Z)((0,a.Z)({},p),{},{envSimpleInfo:d})),!(y.includes(R)||null!==n&&void 0!==n&&n.isOverseaPay)){r.next=16;break}return r.next=13,S(e,null===n||void 0===n?void 0:n.country,null===n||void 0===n?void 0:n.isMultiLanguage,null===n||void 0===n?void 0:n.token,null===n||void 0===n?void 0:n.orderCreateInfo);case 13:r.t0=r.sent,r.next=19;break;case 16:return r.next=18,o.userApis.javaPayLaunch({balanceNo:(null===e||void 0===e?void 0:e.balanceNo)||"",orderNo:(null===e||void 0===e?void 0:e.orderNo)||"",payMode:R,returnUrl:M(e,"",null===n||void 0===n?void 0:n.isMultiLanguage,null===n||void 0===n?void 0:n.token,null===n||void 0===n?void 0:n.orderCreateInfo),balancePayAmt:Y(e),version:1,envInfo:s,deviceInfo:v,country:null===n||void 0===n?void 0:n.country,isWechat:(0,i.at)()?1:void 0},(0,i.cD)(null===n||void 0===n?void 0:n.token));case 18:r.t0=r.sent;case 19:return r.abrupt("return",r.t0);case 22:return r.prev=22,r.t1=r.catch(0),console.log("eeeee",r.t1),r.abrupt("return",null);case 26:case"end":return r.stop()}}),_callee2,null,[[0,22]])})));return function pay(n,o){return e.apply(this,arguments)}}(),U=function(){var e=(0,c.Z)((0,r.Z)().mark((function _callee3(e){return(0,r.Z)().wrap((function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.userApis.checkJavaOrder({order_no:e},(0,i.cD)()));case 1:case"end":return n.stop()}}),_callee3)})));return function queryResult(n){return e.apply(this,arguments)}}(),z=(0,g.Z)(U,(function(e){return[1,2,3].includes(e.data.status)})),D=z.polling,$=(z.stop,(0,v.useRef)(0)),j=(0,v.useRef)(null),O=function(){var e=(0,c.Z)((0,r.Z)().mark((function _callee4(e,n){var o;return(0,r.Z)().wrap((function _callee4$(a){for(;;)switch(a.prev=a.next){case 0:return window.location.assign(e),a.next=3,Promise.race([new Promise((function(e){j.current=function(){document.removeEventListener("visibilitychange",j.current),j.current=null,e(!0)},document.addEventListener("visibilitychange",j.current)})),new Promise((function(e){$.current=window.setTimeout(e,1e4)}))]);case 3:o=new URL(n),i.m8.push(o.pathname+o.search);case 5:case"end":return a.stop()}}),_callee4)})));return function appletPay(n,o){return e.apply(this,arguments)}}(),W=function(){var e=(0,c.Z)((0,r.Z)().mark((function _callee5(e,n){var o,a,t,c,s,d,p;return(0,r.Z)().wrap((function _callee5$(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,T(e,n);case 2:if(o=r.sent,a=null===o||void 0===o?void 0:o.result){r.next=6;break}return r.abrupt("return",!1);case 6:try{null===n||void 0===n||null===(t=n.onPay)||void 0===t||t.call(n,a,e)}catch(v){console.log("onPay err",v)}if(0!==(null===a||void 0===a?void 0:a.thirdPayAmt)){r.next=10;break}return i.m8.replace(N||(0,i.hW)("/success?no=".concat(null===e||void 0===e?void 0:e.orderNo).concat(A?"&source="+A:""))),r.abrupt("return",!1);case 10:if(null!==a&&void 0!==a&&a.payLaunch){r.next=13;break}return l.FN.show("\u652f\u4ed8\u53c2\u6570\u9519\u8bef"),r.abrupt("return",!1);case 13:c=M(e,"",null===n||void 0===n?void 0:n.isMultiLanguage,null===n||void 0===n?void 0:n.token,null===n||void 0===n?void 0:n.orderCreateInfo),console.log("returnUrl",c),r.t0=R,r.next="wechat_wap"===r.t0?18:"alipay_wap"===r.t0?22:"wechat_scan"===r.t0?42:"alipay_scan"===r.t0?44:"paypal"===r.t0||"payermax"===r.t0||"kakaopay"===r.t0||"toss"===r.t0||"payco"===r.t0||"internetbanking"===r.t0||"touchngo"===r.t0||"boost"===r.t0||"grabpay"===r.t0||"enets"===r.t0||"dana"===r.t0||"gopay"===r.t0||"duitnow"===r.t0||"shopeepay"===r.t0||"ovo"===r.t0||"truemoney"===r.t0||"linepay"===r.t0||"binance"===r.t0||"visa"===r.t0||"googlepay"===r.t0?46:48;break;case 18:return s=a.payLaunch,r.next=21,O(s,c);case 21:return r.abrupt("break",49);case 22:if(!(d=a.payLaunch).startsWith("alipays://")){r.next=31;break}if(!(0,i.at)()){r.next=27;break}return h.CommonStore.alipayToBrowserVisible=!0,r.abrupt("return",!1);case 27:return r.next=29,O(d,c);case 29:r.next=41;break;case 31:if(!(0,i.at)()||!["kardznbapp"].includes((0,i.mr)(h.CommonStore.nodeAdminConfig))){r.next=34;break}return h.CommonStore.alipayToBrowserVisible=!0,r.abrupt("return",!1);case 34:(p=document.createElement("div")).innerHTML=a.payLaunch,document.body.appendChild(p),p.getElementsByTagName("form")[0].submit(),document.body.removeChild(p),b.Z.set(u.w2,"1"),"Chrome"!==x().getBrowser().name||_()||D(null===e||void 0===e?void 0:e.orderNo).then((function(n){i.m8.replace({pathname:N||(0,i.hW)("/success?no=".concat(null===e||void 0===e?void 0:e.orderNo).concat(A?"&source="+A:""))})})).catch((function(){l.FN.clear()}));case 41:return r.abrupt("break",49);case 42:return i.YB.emit(u.p7,{payInfo:a.payLaunch,orderInfo:e,returnUrl:N||B,isRecharge:void 0,type:"wechat"}),r.abrupt("break",49);case 44:return i.YB.emit(u.p7,{payInfo:a.payLaunch,orderInfo:e,returnUrl:N||B,isRecharge:void 0,type:"alipay"}),r.abrupt("break",49);case 46:return window.location.assign(a.payLaunch),r.abrupt("break",49);case 48:l.FN.show("\u652f\u4ed8\u5931\u8d25");case 49:return r.abrupt("return",!1);case 50:case"end":return r.stop()}}),_callee5)})));return function toPay(n,o){return e.apply(this,arguments)}}();return(0,v.useEffect)((function(){return function(){j.current&&document.removeEventListener("visibilitychange",j.current),$.current&&clearTimeout($.current)}}),[]),{toPay:W,thirdPayMode:P,hasBalancePay:Z,isBalancePay:E}}},43501:(e,n,o)=>{o.d(n,{Z:()=>c});var a=o(47313),t=o(62118),r=o(20048);const c=function usePayInfo(e,n){var o,c=(0,t.oR)(),i=1===n.length&&"balance"===n[0],u=n.includes("balance"),l=["wechat_wap","alipay_wap","wechat_scan","alipay_scan","payermax","paypal","kakaopay","toss","payco","internetbanking","touchngo","boost","grabpay","enets","dana","gopay","duitnow","shopeepay","ovo","truemoney","linepay","binance","visa","googlepay"].find((function(e){return n.includes(e)}))||"",s=(0,a.useMemo)((function(){return i?"":l}),[i,l]),d=(0,a.useMemo)((function(){var n;return u?Math.min((null===(n=c.ConfigStore.userinfo)||void 0===n?void 0:n.balance)||0,e||0):void 0}),[u,null===(o=c.ConfigStore.userinfo)||void 0===o?void 0:o.balance,e]),p=(0,a.useMemo)((function(){return Math.max((0,r.$X)(e,null!==d&&void 0!==d?d:0),0)}),[e,d]);return{payMode:s,hasBalancePay:u,balancePayAmt:d,isBalancePay:i,thirdPayAmt:p}}},88666:(e,n,o)=>{o.d(n,{Z:()=>i});var a=o(74165),t=o(15861),r=o(29439),c=o(47313);const i=function usePolling(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=(0,c.useRef)(!1),l=(0,c.useRef)(),s=(0,c.useState)(i),d=(0,r.Z)(s,2),p=d[0],v=d[1];(0,c.useEffect)((function(){return function(){l.current&&clearTimeout(l.current)}}),[]);return{polling:function polling(r){u.current=!0;var c=function _polling(c,s,d){v(d),u.current&&(i&&d<=0?s("timeout"):l.current=setTimeout((0,t.Z)((0,a.Z)().mark((function _callee(){var t;return(0,a.Z)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e(r);case 3:t=a.sent,n(t)?c(t):_polling(c,s,d-o),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),s(a.t0);case 10:case"end":return a.stop()}}),_callee,null,[[0,7]])}))),o))};return new Promise((function(e,n){c(e,n,i)}))},stop:function stop(){u.current=!1,l.current&&clearTimeout(l.current),v(i)},remainTime:p}}},36343:(e,n,o)=>{o.d(n,{Z:()=>p});var a=o(44925),t=o(47313),r=o(36540),c=o(44781),i=o(55444),u=o(20048),l=["children"],s=(0,c.iv)(["&.adm-button{border:0 none;font-size:",";box-shadow:none;text-shadow:none;padding:0 ",";height:",";line-height:1;display:flex;align-items:center;justify-content:center;border-radius:",";&[disabled]{background:var(--secondaryColor);color:#fff;}}&.adm-button-primary:not([disabled]){background:var(--mainColor);color:#fff;&:hover{background:var(--mainColorLight);}}&.adm-button-default:not([disabled]){background:var(--secondaryColor);color:#fff;&:hover{background:var(--secondaryColor);}}"],(0,u.gY)(14),(0,u.gY)(10),(0,u.gY)(42),(0,u.gY)(4)),d=(0,c.ZP)(i.zx).withConfig({displayName:"common__StyledBaseButton",componentId:"sc-i5j5h9-0"})(["",""],s);const p=(0,r.Pi)((function CommonButton(e){var n=e.children,o=(0,a.Z)(e,l);return t.createElement(d,o,n)}))},54016:(e,n,o)=>{o.d(n,{Yd:()=>g,Jr:()=>y.Z,R9:()=>k});var a=o(44925),t=o(47313),r=o(36540),c=o(38376),i=o(58417),u=o(20048),l=o(57600),s=o(42868),d=o(44781),p=o(46123),v=o.n(p),b=["children","onFocus","onBlur","className","type","shape","disabled","loading","onClick"],f=d.ZP.div.withConfig({displayName:"base__StyledBaseButtonContainer",componentId:"sc-1aa1zwm-0"})(["width:100%;height:",";background:var(--background-color-button);border-radius:",";color:var(--text-color-FFFFFF);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:",";&.antd-btn{border-radius:",";}.loading-box{margin-left:",";}&.webuff-base-button-primary{background:linear-gradient(270deg,var(--special-color-C598FF) 0%,var(--special-color-C998FF) 100%);color:var(--text-color-17023B);}&.webuff-base-button-circle{border-radius:",";}&.webuff-base-button-dark{background:var(--background-color-2E2E32);color:var(--text-color-FFFFFF);}&.webuff-base-button-gold{background:linear-gradient(270deg,var(--special-color-FFC875) 0%,var(--special-color-FFDC98) 100%);color:var(--text-color-1E1E20);}&.webuff-base-button-brownness{background:linear-gradient(270deg,var(--special-color-AD7647) 0%,var(--special-color-E09D4A) 100%);color:var(--text-color-FFFFFF);}&.webuff-base-button-blue{background:linear-gradient(270deg,var(--special-color-2C5CD1) 0%,var(--special-color-306CDF) 100%);color:var(--text-color-FFFFFF);}&.webuff-base-button-violet{background:linear-gradient(270deg,var(--special-color-652C80) 0%,var(--special-color-8E62B8) 100%);color:var(--text-color-FFFFFF);}&.webuff-base-button-special{background:url(",") no-repeat;background-size:cover;box-shadow:inset 0 0 "," 1px var(--special-color-8C4FB5);color:var(--text-color-FFFFFF);transition:0.2s;&:hover{box-shadow:inset 0 0 "," "," var(--special-color-8C4FB5);}}&.webuff-base-button-loading{filter:brightness(0.85) !important;}&.webuff-base-button-disabled{cursor:not-allowed;background:var(--background-color-7C7C7C);color:var(--text-color-D7D7D7);box-shadow:none !important;}&:hover{filter:brightness(1.1);}"],(0,u.gY)(40),(0,u.gY)(20),(0,u.gY)(14),(0,u.gY)(20),(0,u.gY)(10),(0,u.gY)(100),(function(e){return e.specialBtnBgImg}),(0,u.gY)(3),(0,u.gY)(10),(0,u.gY)(2));const g=(0,r.Pi)((function BaseButton(e){var n=e.children,o=(e.onFocus,e.onBlur,e.className),r=e.type,u=void 0===r?"normal":r,d=e.shape,p=void 0===d?"default":d,g=e.disabled,y=e.loading,m=e.onClick,h=(0,a.Z)(e,b),w=(0,l.w)().formatImageURL,k=(0,i.Z)((function(){!g&&!y&&(null===m||void 0===m||m())}),{leading:!0,trailing:!1,wait:300}).run;return t.createElement(f,Object.assign({specialBtnBgImg:w(s),className:v()("webuff-base-button",o||"",{"webuff-base-button-loading":!!y,"webuff-base-button-primary":"primary"===u,"webuff-base-button-dark":"dark"===u,"webuff-base-button-gold":"gold"===u,"webuff-base-button-brownness":"brownness"===u,"webuff-base-button-blue":"blue"===u,"webuff-base-button-violet":"violet"===u,"webuff-base-button-special":"special"===u,"webuff-base-button-circle":"circle"===p,"webuff-base-button-disabled":!!g}),onClick:function onClick(){return k()}},h),n,y&&t.createElement("div",{className:"loading-box"},t.createElement(c.$,{loading:y})))}));var y=o(36343),m=o(55444),h=["children"],w=(0,d.ZP)(m.zx).withConfig({displayName:"new-button__StyledButtonNew",componentId:"sc-1r7igup-0"})(["font-size:",";border-radius:",";display:flex;align-items:center;justify-content:center;&.adm-button-default{background:#f3f3f3;}&.adm-button-primary{background:linear-gradient(134deg,#4f545d 0%,#131321 100%);border:none;}"],(0,u.gY)(15),(0,u.gY)(8));const k=(0,r.Pi)((function NewButton(e){var n=e.children,o=(0,a.Z)(e,h);return t.createElement(w,o,n)}))}}]);