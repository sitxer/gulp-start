$(function(){$("#header").length>0&&$("body").css("padding-top",$("#header").outerHeight()),$("#header").length>0&&$(window).on("resize",function(){$("body").css("padding-top",$("#header").outerHeight())}),$("input,textarea").length>0&&$("input,textarea").focus(function(){$(this).data("placeholder",$(this).attr("placeholder")).attr("placeholder","")}).blur(function(){$(this).attr("placeholder",$(this).data("placeholder"))}),$("input[type=tel]").length>0&&$("input[type=tel]").mask("+7 (999) 999 99 99")});