// ==UserScript==
// @name         Rewards
// @namespace    https://github.com/JayQY/Rewards
// @updateURL    https://raw.githubusercontent.com/JayQY/Rewards/main/Rewards.user.js
// @downloadURL  https://raw.githubusercontent.com/JayQY/Rewards/main/Rewards.user.js
// @version      1.0.50
// @description  Microsoft Rewards
// @author       JayQY
// @match        https://rewards.bing.com/
// @match        *://www.bing.com/*
// @match        *://www.msn.com/en-us/shopping
// @match        *://www.msn.cn/en-us/shopping
// @icon         https://www.google.com/s2/favicons?domain=bing.com
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @grant        window.focus
// @grant        window.close
// @connect      www.bing.com
// @connect      rewards.bing.com
// ==/UserScript==

this.$=this.jQuery=jQuery.noConflict(!0);var _self=unsafeWindow,url=location.pathname,top=_self,parent=_self==top?self:_self.parent,clickTimeout=5e3;!function(){"use strict";if(-1!=window.location.href.indexOf("rewards.bing.com")){function t(){var t=document.querySelectorAll("a.ds-card-sec"),e=1,i=t.length;i>0&&(t.forEach((t=>{e<=i&&($(t).find("span.mee-icon").hasClass("mee-icon-SkypeCircleCheck")||setTimeout((()=>{t.click()}),clickTimeout*e)),e++})),setTimeout((()=>{$("#modal-host div.actionLink a").length>0&&document.querySelector("#modal-host div.actionLink a").click()}),clickTimeout*i),setTimeout((()=>{window.focus()}),clickTimeout*(i+37)))}setTimeout((()=>{t()}),2*clickTimeout)}if(-1!=window.location.href.indexOf("www.bing.com")){if($("#ListOfQuestionAndAnswerPanes").length>0){var t=$("#ListOfQuestionAndAnswerPanes").find("div.wk_OptionClickClass");t.length>0&&setInterval((()=>{var i=e(0,t.length-1);t.eq(i).click()}),clickTimeout)}$(".btOptionCard").length>0&&setInterval((()=>{var t=e(0,1);$(".btOptionCard").eq(t).click()}),clickTimeout),$(".btoption").length>0&&setTimeout((()=>{var t=e(0,1);$(".btoption").eq(t).click()}),clickTimeout),$(".btOption").length>0&&setTimeout((()=>{var t=e(0,1);$(".btOption").eq(t).click()}),clickTimeout),$(".btOption.b_cards").length>0&&setTimeout((()=>{var t=e(0,1);$(".btOption.b_cards").eq(t).click()}),clickTimeout),$(".b_cards.bt_lstcl_card:not(.btsel)").length>0&&setInterval((()=>{$(".b_cards.bt_lstcl_card:not(.btsel)").click()}),clickTimeout),$(".rqOption").length>0&&setInterval((()=>{$(".rqOption").click()}),clickTimeout),$("div.wk_buttons input[type=submit]").length>0&&setTimeout((()=>{$("div.wk_buttons input[type=submit]").click()}),clickTimeout)}function e(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);break;case 2:return parseInt(Math.random()*(e-t+1)+t,10);break;default:return 0;break}}}();
