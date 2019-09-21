$(document).ready(function(){

	$("#header-projects").addClass("nav-chosen");
	$(".body-resume").addClass("hidden");


	$("html, body").animate({scrollTop: 0}, 10);
	
	$("#header-resume").click(function(){
		$("#header-projects").removeClass("nav-chosen");
		$("#header-resume").addClass("nav-chosen");
		$(".body-projects").addClass("hidden");
		$(".body-resume").removeClass("hidden");
	})

	$("#header-projects").click(function(){
		$("#header-resume").removeClass("nav-chosen");
		$("#header-projects").addClass("nav-chosen");
		$(".body-resume").addClass("hidden");
		$(".body-projects").removeClass("hidden");
	})

	$("#arrow").click(function(){
	    $([document.documentElement, document.body]).animate({
	        scrollTop: $(".projects-grid").offset().top
	    }, 900);
	})

	$("#arrow-resume").click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".resume-content").offset().top
		}, 900);
	})

	$("#menu-button").click(function(){
		$(".mobile-nav").animate({marginRight: 0}, 500);
	})

	$("#window-close").click(function(){
		$(".mobile-nav").animate({marginRight: '-301px'}, 500);
	})

	const parallax = document.querySelector(".page-background");

	$(window).scroll(function(){
		let offset = window.pageYOffset;
		console.log(offset);
		if(screen.width > 1000){
			parallax.style.backgroundPositionY = (offset - 550) * 0.6 + "px";	
		}
		else {
			parallax.style.backgroundPositionY = (offset - 430) + "px";
		}
	})
})