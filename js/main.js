$(function () {
   'use strict';
        new WOW().init();
    
 $(window).scroll(function(){

        if($(window).scrollTop() >= $('.nav').height()){
                                    $("nav").addClass('scrolled');

        }else{


                                    $("nav").removeClass('scrolled');


    }
 });
	
	    $('.navbar-nav li').click(function(){
                  $(this).addClass("activ");

        $(this).siblings().removeClass("activ");


});

    
    // FIRST ONE
	
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
    });
    
    
//SECOD ONE
    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $('#header').offset().top) {
            
            $('.our-nav #lheader').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        if ($(window).scrollTop() >= $('#about').offset().top) {
            
            $('.our-nav #labout').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        if ($(window).scrollTop() >= $('#skills').offset().top) {
            
            $('.our-nav #lskills').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        if ($(window).scrollTop() >= $('#service').offset().top) {
            
            $('.our-nav #lservice').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        if ($(window).scrollTop() >= $('#work').offset().top) {
            
            $('.our-nav #lwork').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        if ($(window).scrollTop() >= $('#contact').offset().top) {
            
            $('.our-nav #lcontact').addClass('activ').siblings(this).removeClass('activ');
            
        }
        
        
    });
    



















$('.portfolio  li').click(function(){
                  $(this).addClass("act");

        $(this).siblings().removeClass("act");


});
    

    
    $('.portfolio').mixItUp();
$(".portfolio  a.works").fancybox();

/*

    $(window).scroll(function(){

        if($(window).scrollTop() >= $('.nav').height()){
                                    $("nav").add("background" , "#212b36");

        }else{


                                    $("nav").css("background" , "rgba(33, 43, 54,0.6)");


    };

   

 $('#aba').click(function(){
       $('html, body').animate({scrollTop:$('#about').position().top}, 300);

    });
    $('#serva').click(function(){
     $('html, body').animate({scrollTop:$('#serv').position().top}, 'slow');
    });

    $('#porta').click(function(){
     $('html, body').animate({scrollTop:$('#portfolio').position().top}, 'slow');
    });
    $('#hire').click(function(){
     $('html, body').animate({scrollTop:$('#cont').position().top},2300 );
    }); $('#work').click(function(){
     $('html, body').animate({scrollTop:$('#portfolio').position().top},2300 );
    }); $('#hire').click(function(){
     $('html, body').animate({scrollTop:$('#cont').position().top},2300 );
    });





    $('.portfolio-list ul li').click(function(){
        $(this).siblings().removeClass("activ");
        $(this).addClass("activ");


});

});
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 7) || 1000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 400;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #034EA1}";
        document.body.appendChild(css);
    };
    $('.portfolio-item').mixItUp();
    */
