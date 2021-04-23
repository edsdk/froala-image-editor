/*!
 * This file contains N1ED component.
 * Developer: N1ED/EdSDK
 * Website: https://n1ed.com/
 * License: Private N1ED license
 */
!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=842)}({842:function(e,n){!function(e){if(!e.PLUGINS.image)throw new Error("ImgPen plugin requires image plugin to be enabled in Froala.");if(e.PLUGINS.ImgPen)throw new Error("ImgPen plugin was already registered.");e.RegisterCommand("ImgPen",{title:"Edit image with ImgPen",undo:!1,focus:!1,modal:!0,callback:function(){this.ImgPen.launch(this,!0,null)},plugin:"ImgPen"}),e.DefineIcon("ImgPen",{NAME:"folder",PATH:"M3,17v2h6v-2H3z M3,5v2h10V5H3z M13,21v-2h8v-2h-8v-2h-2v6H13z M7,9v2H3v2h4v2h2V9H7z M21,13v-2H11v2H21z M15,9h2V7h4V5h-4  V3h-2V9z"}),e.DEFAULTS.imageEditButtons.push("ImgPen"),e.PLUGINS.ImgPen=function(n){return{_init:function(){var e=n.opts.Flmngr&&"string"==typeof n.opts.Flmngr.apiKey?n.opts.Flmngr.apiKey:n.opts.ImgPen&&"string"==typeof n.opts.ImgPen.apiKey?n.opts.ImgPen.apiKey:"FROADFLT";window.onImgPenLoaded=function(){n.isImgPenLoaded=!0},function(e,n,t){n||(n=document);for(var a=n.getElementsByTagName("script"),i=!1,o=0;o<a.length;o++){var r=a[o].getAttribute("src");r&&-1!==r.indexOf(e)&&(i=!0,a[o])}if(i)return null;var l=n.createElement("script");l.type="text/javascript",null!=t&&(l.readyState?l.onreadystatechange=function(){"loaded"!==l.readyState&&"compvare"!==l.readyState||(l.onreadystatechange=null)}:l.onload=function(){}),l.src=e,n.getElementsByTagName("head")[0].appendChild(l)}("https://cloud.n1ed.com/cdn/"+e+"/n1imgpen.js",document,function(){}),n.imageTUI||(n.imageTUI={}),n.imageTUI.launch=n.ImgPen.launch,-1===n.opts.pluginsEnabled.indexOf("imageTUI")&&n.opts.pluginsEnabled.push("imageTUI"),new MutationObserver(function(e){for(var n=0;n<e.length;n++){var t=e[n];if(t.addedNodes)for(var a=0;a<t.addedNodes.length;a++){var i=t.addedNodes.item(a);if(i.nodeType===Node.ELEMENT_NODE&&i.classList.contains("fr-popup")){var o=i.querySelector("[data-cmd='imageTUI']");o&&o.parentElement.removeChild(o)}}}}).observe(document.getElementsByTagName("body")[0],{childList:!0,subtree:!0})},getImgPenInstanceNoWait:function(){if(window.imgpen){var e="ImgPen"in n.opts?n.opts.ImgPen:{};return e.integration="froala",window.imgpen.create(e)}},getImgPenInstance:function(e){n.ImgPen.waitImgPenAndProbablyFlmngr(function(){var t="ImgPen"in n.opts?n.opts.ImgPen:{};t.integration="froala",e(window.imgpen.create(t))})},waitImgPenAndProbablyFlmngr:function(t){!0!==n.isImgPenLoaded||e.PLUGINS.Flmngr&&!0!==n.isFlmngrLoaded?setTimeout(function(){n.ImgPen.waitImgPenAndProbablyFlmngr(t)},50):t()},launch:function(e,n,t){e.ImgPen.waitImgPenAndProbablyFlmngr(function(){!function(){if(e.Flmngr.checkConfWithAlert()){var a,i=(a=n?e.image.get()[0]:e.filesManager.get()).src;e.ImgPen.getImgPenInstance(function(o){o.editImage({url:i,forcePng:!1,onCancel:function(){e.filesManager.setChildWindowState(!1)},onSave:function(i,o){if(n)e.image.edit(e.$(a)),e.image.upload([i]);else{var r=new Blob([i],{type:i.type});e.filesManager.saveImage([r]),null!=t?(e.filesManager.upload(r,[r],null,t),e.filesManager.getFileThumbnail(t,r,!0)):e.filesManager.upload(r,[r],null,a)}e.filesManager.setChildWindowState(!1),o(!0)}})})}}()})}}}}(window.FroalaEditor)}});