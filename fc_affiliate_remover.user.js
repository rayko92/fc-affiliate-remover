// ==UserScript==
// @name         FC Aff Remove
// @version      0.1
// @description  Reemplazo de links de afiliados
// @match        *://*.forocoches.com/foro/*
// @grant        none
// @run-at document-end
// ==/UserScript==
var l=document.querySelectorAll('a[href*="url="]');for(i=0;i<l.length;i++)l[i].href=decodeURIComponent(l[i].href.split("url=")[1]);
