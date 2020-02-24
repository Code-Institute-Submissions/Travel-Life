$(document).ready(function() {

    //when the logo is clicked,the images and text in the main body will stay hidden

    $(".firm").click(function() {
        $("img").next().siblings().hide()
    });
    // when the mouse hovers over the mid-title it will highlight the images and texts with a gold color

    $(".intro-title").mouseenter(function() {
        $(this).next().addClass("bg-color")
    });
    //and when leaves the title it will turn back to the normal background color

    $(".intro-title").mouseleave(function() {
        $(this).next().removeClass("bg-color")
    });
    //this function will toggle the image and text whenever its button is clicked

    $(".btn-primary").click(function() {
        $(this).next("p").toggle();
        $(this).prev("img").toggle();
    });
    //this function adds a gold background color and increases the font size of the links in the current paragraph whenever the pointer enters the text

    $(".img-text").mouseenter(function() {
        $(this).children("a").addClass("bg-color").css("text-decoration", "none").css("font-size", "22px")
    });

    //this functon will remove both the background color and font size of the anchors in the current paragraph every time the pointer leaves the text
    $(".img-text").mouseleave(function() {
        $(this).children("a").removeClass("bg-color").css("font-size", "20px")
    });

});
