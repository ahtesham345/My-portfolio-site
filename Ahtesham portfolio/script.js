$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
        
    });
    // toggle menu navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //slide up script
    $('.scroll-up-button').click(function(){
        $('html').animate({scrolltop: 0});
    });

    // typing animation
    var typed = new Typed(".typing", {
                strings: ["", " Web Developer", "", " Web Designer", ""],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
        
            var typed = new Typed(".typing-2", {
                strings: ["", " Web Developer", "", " Web Designer", ""],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
            });
             // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
         
        }
    });
});