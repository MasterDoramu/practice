$(function(){
	$(".burg").on("click", function(){
		$(".menu1").toggleClass("first")
		$(".menu2").toggleClass("middle")
		$(".menu3").toggleClass("last")
		$(".nav").toggleClass("link")
	

	})






	var scrollOffset = $(window).scrollTop(),
	header = $(".header").innerHeight()


    
    checkScroll(scrollOffset);

	$(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= header ) {
            $(".header__inner").addClass("fixed");
        } else {
            $(".header__inner").removeClass("fixed");
        }
    }
	
})
	