﻿"use strict";(self.webpackChunkhaisha_recharge_website=self.webpackChunkhaisha_recharge_website||[]).push([[4690],{93873:(e,n,o)=>{o.d(n,{Ky:()=>f,x$:()=>p});var t=o(1413),r=o(74165),c=o(15861),a=o(62118),i=o(23708),u=o(20048),l=o(18683),s=o(46753),f=function useCallCustomerServices(){var e=(0,a.oR)(),n=(0,a.hk)(),o=(0,s.Z)().isZh,l=function(){var o=(0,c.Z)((0,r.Z)().mark((function _callee(o,t){var c,a,l,s;return(0,r.Z)().wrap((function _callee$(r){for(;;)switch(r.prev=r.next){case 0:if(a="",c=o){r.next=9;break}return r.next=5,n.configApis.getCustomerUrl({type:null!==(l=null===t||void 0===t?void 0:t.type)&&void 0!==l?l:20,token:(0,i.KU)(),channel:(0,u.mr)(e.CommonStore.nodeAdminConfig),gameNo:null===t||void 0===t?void 0:t.gameNo});case 5:s=r.sent,a=s.result.url,r.next=10;break;case 9:a=c;case 10:window.open(a,"_blank");case 11:case"end":return r.stop()}}),_callee)})));return function call(e,n){return o.apply(this,arguments)}}();return{call:l,multiLanguageCall:function multiLanguageCall(e,n){var t,r,c;o?l(e,n):null===(t=window)||void 0===t||null===(r=t.$crisp)||void 0===r||null===(c=r.push)||void 0===c||c.call(r,["do","chat:open"])},accountBoyCall:function accountBoyCall(e,n){var o,r;null!==(o=n)&&void 0!==o&&o.type||(n=(0,t.Z)((0,t.Z)({},null!==(r=n)&&void 0!==r?r:{}),{},{type:21}));l(e,n)}}},p=function useMobileCustomer(){var e=(0,a.oR)(),n=(0,a.hk)(),o=(0,l.Z)(),f=o.isVip,p=o.kvipLevel,d=(0,s.Z)().isZh,m=function(){var o=(0,c.Z)((0,r.Z)().mark((function _callee2(o,t){var c,a,l,s,d,m,v,g,k,C;return(0,r.Z)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:if(console.log(t,"customerUrl"),!t){r.next=5;break}return e.ConfigStore.contactUrl=t,e.ConfigStore.contactVisible=!0,r.abrupt("return");case 5:if(a=null!==(c=null===o||void 0===o?void 0:o.type)&&void 0!==c?c:20,l=function openContact(n){e.ConfigStore.contactUrl=n,e.ConfigStore.contactVisible=!0},s=(0,u.zK)(e.CommonStore.nodeAdminConfig),d=(0,u.jP)(e.CommonStore.nodeAdminConfig),!f||s||d){r.next=21;break}if(0!==p){r.next=17;break}return r.next=13,n.userApis.getUserPayInfo({},(0,u.cD)());case 13:if(!r.sent.result.hasWechatPay){r.next=17;break}return l("https://chatbot.aliyuncs.com/intl/index.htm?locale=zh-CN&from=vHHz6gvTD1"),r.abrupt("return");case 17:if(!(g=null===(m=e.CommonStore.customerUrlList)||void 0===m||null===(v=m.find((function(n){var o,t=null===(o=n.blackChannel)||void 0===o?void 0:o.includes(e.CommonStore.nodeAdminConfig.channel);return Number(n.type)===p&&!t})))||void 0===v?void 0:v.url)){r.next=21;break}return l(g),r.abrupt("return");case 21:if(e.ConfigStore.contactEnd||!e.ConfigStore.contactUrlTemp[a]){r.next=24;break}return l(e.ConfigStore.contactUrlTemp[a]),r.abrupt("return");case 24:return k="https://cschat-ccs.cdn.namejin.com/index.htm?tntInstId=_1KlnA7c&scene=SCE00009089",r.prev=25,r.next=28,n.configApis.getCustomerUrl({type:a,token:(0,i.KU)(),channel:(0,u.mr)(e.CommonStore.nodeAdminConfig),gameNo:null===o||void 0===o?void 0:o.gameNo});case 28:C=r.sent,e.ConfigStore.contactUrlTemp[a]=C.result.url,l(C.result.url),r.next=36;break;case 33:r.prev=33,r.t0=r.catch(25),l(k);case 36:case"end":return r.stop()}}),_callee2,null,[[25,33]])})));return function call(e,n){return o.apply(this,arguments)}}();return{call:m,multiLanguageCall:function multiLanguageCall(e,n){var o,t,r;d?m(e,n):null===(o=window)||void 0===o||null===(t=o.$crisp)||void 0===t||null===(r=t.push)||void 0===r||r.call(t,["do","chat:open"])},accountBoyCall:function accountBoyCall(e,n){var o,r;null!==(o=n)&&void 0!==o&&o.type||(n=(0,t.Z)((0,t.Z)({},null!==(r=n)&&void 0!==r?r:{}),{},{type:21}));m(n,e)}}}},57600:(e,n,o)=>{o.d(n,{w:()=>c});var t=o(62118),r=o(20048),c=function useFormatImageURL(){var e,n,o,c,a=(0,t.oR)(),i=(0,t.TH)(),u="\u662f"===(null===(e=a.CommonStore)||void 0===e||null===(n=e.nodeAdminConfig)||void 0===n?void 0:n.is_google_popularize),l="\u662f"===(null===(o=a.CommonStore)||void 0===o||null===(c=o.nodeAdminConfig)||void 0===c?void 0:c.is_seo_channel),s="",f=(0,r.jP)(a.CommonStore.nodeAdminConfig),p=(0,r.zK)(a.CommonStore.nodeAdminConfig);return u||l?s=(0,r.Br)((null===i||void 0===i?void 0:i.hostname)||""):f?s="kardz.com":p&&(s="accountboy.com"),{formatImageURL:function formatImageURL(e){var n=e;return s&&"string"===typeof e&&(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=(n=n.replace(/dc-sfs\.w\.kunluncb\.com/g,"steam-files.".concat(s))).replace(/dc-mfs\.w\.kunluncb\.com/g,"m-files.".concat(s))).replace(/dc-fs\.w\.kunluncb\.com/g,"files.".concat(s))).replace(/dc-static-kk\.w\.kunluncb\.com/g,"static-kk.".concat(s))).replace(/dc-api-web\.w\.kunluncb\.com/g,"api-web.".concat(s))).replace(/static-kk\.kardz\.cn/g,"static-kk.".concat(s))).replace(/steam-files\.kardz\.cn/g,"steam-files.".concat(s))).replace(/m-files\.kardz\.cn/g,"m-files.".concat(s))).replace(/files\.kardz\.cn/g,"files.".concat(s))).replace(/files\.zuhaohao\.com/g,"files.".concat(s))).replace(/m-files\.zuhaohao\.com/g,"m-files.".concat(s))),n}}}},66825:(e,n,o)=>{o.d(n,{f:()=>f});var t=o(74165),r=o(15861),c=o(62118),a=o(66654),i=o(43798),u=o(20048),l=o(23708),s=o(13138),f=function useLogin(){var e=(0,c.oR)(),n=(0,c.hk)(),o=((0,u.dr)(e.CommonStore.nodeAdminConfig),(0,c.TH)()),f=function(){var o=(0,r.Z)((0,t.Z)().mark((function _callee(){var o;return(0,t.Z)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:if(e.ConfigStore.userinfo=null,e.ConfigStore.isNewUser=!1,e.ConfigStore.authStatus=0,e.UserStore.rightsInfo=null,e.UserStore.baseInfo=null,e.UserStore.userPoints=0,o=(0,l.KU)(),a.J.remove(i.$.MALL_TOKEN),a.J.remove(i.$.USER_INFO),t.prev=9,t.t0=o,!t.t0){t.next=14;break}return t.next=14,n.userApis.userLogoutHttp({token:o},{headers:{Authorization:o}});case 14:t.next=18;break;case 16:t.prev=16,t.t1=t.catch(9);case 18:case"end":return t.stop()}}),_callee,null,[[9,16]])})));return function logout(){return o.apply(this,arguments)}}(),p=function(){var o=(0,r.Z)((0,t.Z)().mark((function _callee2(){var o;return(0,t.Z)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.userApis.getUserPoints({},(0,u.cD)());case 2:o=t.sent,e.UserStore.userPoints=o.result;case 4:case"end":return t.stop()}}),_callee2)})));return function getUserPoints(){return o.apply(this,arguments)}}(),d=function(){var o=(0,r.Z)((0,t.Z)().mark((function _callee3(o){var r;return(0,t.Z)().wrap((function _callee3$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.userApis.getUserInfoHttp({token:o},{headers:{Authorization:o}});case 3:return r=t.sent,e.ConfigStore.userinfo=r.data,a.J.set(i.$.USER_INFO,r.data),t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t.catch(0),new Error(t.t0.message);case 12:case"end":return t.stop()}}),_callee3,null,[[0,9]])})));return function getUserInfo(e){return o.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)((0,t.Z)().mark((function _callee4(n){var o;return(0,t.Z)().wrap((function _callee4$(t){for(;;)switch(t.prev=t.next){case 0:return a.J.set(i.$.MALL_TOKEN,n),t.next=3,d(n);case 3:o=t.sent,b(),p(),(0,u.BD)("loginSuccess",{token:n}),s.Hx.login("".concat(o.data.id)),s.Hx.track("user_login",{event_source:(0,u.m3)(e.CommonStore.inApp,e.CommonStore.device),user_register_by_today:(0,u.bR)(e.ConfigStore.userinfo.register_time)});case 9:case"end":return t.stop()}}),_callee4)})));return function loginSuccess(e){return n.apply(this,arguments)}}(),v=function showLoginModal(){e.ConfigStore.loginVisible=!0},g=!!e.ConfigStore.userinfo,k=function toH5LoginPage(n,o,t,r){(0,u.cW)("/login?origin=".concat(encodeURIComponent(n),"&sucessTarget=").concat(encodeURIComponent(o),"&concelBackUrl=").concat(encodeURIComponent(t||n)).concat(r?"&"+r:""),!0,e.CommonStore.inApp)},C=function(){var e=(0,r.Z)((0,t.Z)().mark((function _callee5(e,n){var r,c,a;return(0,t.Z)().wrap((function _callee5$(t){for(;;)switch(t.prev=t.next){case 0:if(r=(0,l.KU)(),c="".concat(o.pathname).concat(o.search),a=null!==n&&void 0!==n?n:"/",r){t.next=6;break}return k(a,null!==e&&void 0!==e?e:c,a),t.abrupt("return",Promise.reject("\u672a\u767b\u5f55"));case 6:return t.abrupt("return",!0);case 7:case"end":return t.stop()}}),_callee5)})));return function checkLogin(n,o){return e.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)((0,t.Z)().mark((function _callee6(){return(0,t.Z)().wrap((function _callee6$(n){for(;;)switch(n.prev=n.next){case 0:if(!(0,l.KU)()){n.next=3;break}return n.abrupt("return",Promise.resolve(!1));case 3:return e.UserStore.loginModalVisible=!0,n.abrupt("return",new Promise((function(e){(0,u.SB)(u.cl.LOGIN_MODAL).resolve=e})));case 5:case"end":return n.stop()}}),_callee6)})));return function checkH5LoginModal(){return n.apply(this,arguments)}}(),S=function(){var e=(0,r.Z)((0,t.Z)().mark((function _callee7(e){var n,r=arguments;return(0,t.Z)().wrap((function _callee7$(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]&&r[1],t.next=3,C(e,"".concat(o.pathname).concat(o.search));case 3:(0,u.cW)(e,!0,n);case 4:case"end":return t.stop()}}),_callee7)})));return function toNeedLoginPage(n){return e.apply(this,arguments)}}(),b=function(){var o=(0,r.Z)((0,t.Z)().mark((function _callee8(){var o,r;return(0,t.Z)().wrap((function _callee8$(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.userApis.getBaseInfo(null,(0,u.cD)());case 2:return o=t.sent,r=o.result,e.UserStore.baseInfo=r,t.abrupt("return",r);case 6:case"end":return t.stop()}}),_callee8)})));return function getBaseInfo(){return o.apply(this,arguments)}}(),U=e.ConfigStore.userinfo?e.ConfigStore.userinfo.emailAccount?e.ConfigStore.userinfo.emailAccount:(0,u.yh)(e.ConfigStore.userinfo.mobile):"";return{logout:f,getUserInfo:d,hideLoginModal:function hideLoginModal(){e.ConfigStore.loginVisible=!1},loginSuccess:m,showLoginModal:v,isLogin:g,isLogged:function isLogged(){return new Promise((function(n,o){g?n(e.ConfigStore.userinfo):(v(),o())}))},toH5LoginPage:k,getBaseInfo:b,checkLogin:C,toNeedLoginPage:S,userName:U,toMultiLanguageLoginPage:function toMultiLanguageLoginPage(n,o,t,r){var c=(0,u.h4)("/login",e);console.log(t,"concelBackUrl"),(0,u.cW)("".concat(c,"?origin=").concat(encodeURIComponent(n),"&sucessTarget=").concat(encodeURIComponent(o),"&concelBackUrl=").concat(encodeURIComponent(t||n)).concat(r?"&"+r:""),!0,e.CommonStore.inApp)},checkH5LoginModal:h,getUserPoints:p}}},18683:(e,n,o)=>{o.d(n,{Z:()=>a});var t=o(47313),r=o(66825),c=o(62118);const a=function useVip(){var e=(0,c.oR)(),n=(0,r.f)().getBaseInfo,o=(0,t.useMemo)((function(){var n,o,t,r,c,a,i,u=null!==(n=e.UserStore.baseInfo)&&void 0!==n&&n.popUpReminder?null===(o=JSON.parse(e.UserStore.baseInfo.popUpReminder))||void 0===o?void 0:o.LEVEL_UPGRADE_POP_UP:"";return{isVip:null===(t=e.UserStore.baseInfo)||void 0===t?void 0:t.kvip,kval:null===(r=e.UserStore.baseInfo)||void 0===r?void 0:r.kval,kvipLevel:null===(c=e.UserStore.baseInfo)||void 0===c?void 0:c.kvipLevel,nextkvipLevelkval:null===(a=e.UserStore.baseInfo)||void 0===a?void 0:a.nextkvipLevelkval,popUpReminder:void 0!==u?u:"",kDiscount:null===(i=e.UserStore.baseInfo)||void 0===i?void 0:i.kDiscount}}),[e.UserStore.baseInfo]);return{isVip:o.isVip,kval:o.kval,kvipLevel:o.kvipLevel,nextkvipLevelkval:o.nextkvipLevelkval,popUpReminder:o.popUpReminder,getVipInfo:function getVipInfo(){n()},kDiscount:o.kDiscount}}},46753:(e,n,o)=>{o.d(n,{I:()=>a,Z:()=>i});var t=o(62118),r=o(20048),c=o(47313),a=function getCurrencyInfo(e){return r.Zo.find((function(n){return n.currencyCode===e}))||r.Zo[0]};const i=function useMultiLanguage(){var e=(0,t.oR)(),n=e.CommonStore.nodeAdminConfig,o=(0,r.jP)(n,e.CommonStore.device),i=(0,r.D)(n,e.CommonStore.device),u=e.CommonStore.languageCode.startsWith("zh"),l=(0,c.useMemo)((function(){return a(e.CommonStore.currencyCode)}),[e.CommonStore.currencyCode]),s=l.currencyCode,f=l.mark,p=l.country;return{isMultiLanguage:o,isMultiLanguageNews:i,currencyCode:s,currencyMark:f,country:p,isZh:u,getCurrencyInfo:a,formatMoney:function formatMoney(e,n,o){if(!e)return e;var t=f;if(n){var c=a(n);t=(null===c||void 0===c?void 0:c.mark)||t}return"".concat(t).concat(o?" ":"").concat((0,r.uf)(e,n||s))}}}}}]);