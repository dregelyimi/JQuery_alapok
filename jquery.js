//$("p") --> összes bekezdés
//$("p").eq --> 2. p tag
//
//$(this);
//$(".osztalynev");
//$("#idnev");
//
//$(document).ready(function() {
//    
//})

$(function() {
    init();
});

function init() {
    $("#kezd").click(betolt);
}

function betolt() {
    //    var txt="";
    $("#jatekter").empty();
    for (var i = 0; i < 7; i++) {
//        txt+="<img src='kartya/makk-hetes.png' alt=''>";
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).append("<p>");
        $("#jatekter div p").eq(i).text("Nevek");
        $("#jatekter div img").eq(i).attr("src", "kartya/makk-hetes.png");
    }
//        $("#jatekter").html(txt);
        $("#jatekter div p").css("color", "red");
        $("#jatekter div").addClass("kartya");
        
        $("#jatekter div").mouseenter(function(){
            $(this).css("background", "red");
        });
        $("#jatekter div").mouseleave(function(){
            $(this).css("background", "white");
        });
        
        $("#jatekter div").click(function(){
            $(this).hide(1000);
            $(this).show(100);
        });
}
