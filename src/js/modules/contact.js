$(".view-in-map").click(function(){
    $(".all-places").removeClass("active");
    setTimeout(function(){
        $(".transition-wrapper").addClass("reduced-height")
        $(".selected-place").addClass("active");
    }, 350)
})

$(".return-to-map").click(function(){
    $(".transition-wrapper").removeClass("reduced-height")
    $(".selected-place").removeClass("active")
    setTimeout(function(){
        $(".all-places").addClass("active")
    }, 350)
})