// ==UserScript==
// @name         FC Aff Remove
// @version      0.1
// @description  Reemplazo de links de afiliados
// @match        *://*.forocoches.com/foro/*
// @include      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @grant        none
// ==/UserScript==
$(document).ready(function(){
 $("div[name=\"HOTWordsTxt\"]").each(function(){
 	var html = $(this);

 	$('a', html).each(function(){
 		var href 	= $(this).attr('href');
 		var href2 	= href.split('link.php?url=');
 		var decode  = decodeURIComponent(href2[1]);

 		if(typeof href2[1] !== 'undefined'){
 			$(this).attr('href', decode);
 			console.log(decode);
 		}
 	});
 });
});