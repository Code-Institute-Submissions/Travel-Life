$(document).ready(function() {
    $(".firm").click(function() {
        $(".img-text").hide("slow", '2000')
    });
$(".intro-title").mouseenter(function() {
    $(this).next().children("img").addClass("bg-color")
});
    $(".btn-primary").click(function() {
        $(this).next("p").toggle()
    });
    $(".img-text").mouseenter(function(){
        $(this).addClass("bg-color")
    });
    $(".img-text").mouseleave(function(){
        $(this).removeClass("bg-color")
    });
    
});
