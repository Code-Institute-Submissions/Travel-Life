$(document).ready(function() {
    $(".firm").click(function() {
        $("img").next().siblings().hide()
    });
    $(".intro-title").mouseenter(function() {
        $(this).next().addClass("bg-color")
    });
    $(".intro-title").mouseleave(function() {
        $(this).next().removeClass("bg-color")
    });
    $(".btn-primary").click(function() {
        $(this).next("p").toggle();
        $(this).prev("img").toggle()
    });
    $(".img-text").mouseenter(function() {
        $(this).children("a").addClass("bg-color").css("text-decoration", "none").css("font-size", "22px")
    });
   
    $(".img-text").mouseleave(function() {
        $(this).children("a").removeClass("bg-color").css("font-size", "20px")
    });

});
