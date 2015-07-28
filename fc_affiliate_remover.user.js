// ==UserScript==
// @name         FC Aff Remove
// @version      0.2
// @description  Reemplazo de links de afiliados
// @match        *://*.forocoches.com/foro/*
// @grant        none
// @run-at document-end
// ==/UserScript==
var l=document.querySelectorAll('a[href*="url="]');for(i=0;i<l.length;i++)l[i].href=decodeURIComponent(l[i].href.substr(l[i].href.indexOf("url=")));
