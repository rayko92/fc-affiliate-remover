// ==UserScript==
// @name         FC Aff Remove
// @version      0.1
// @description  Reemplazo de links de afiliados
// @match        *://*.forocoches.com/foro/*
// @include      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant        none
// @run-at document-end
// ==/UserScript==
$('a[href*="url="]').each(function(){$(this).attr("href",decodeURIComponent($(this).attr("href").split("url=")[1]))});
