$(document).ready(function(){
  var modal = $('.modal');
  var overlay = $('.overlay');
  var btnClose = $('.modal__close-btn');
  var linkClose = $('.header-wrap__link-close');

  linkClose.on('click', function(e) {
    e.preventDefault();
    overlay.show();
    modal.toggleClass('modal-active');
  });

  btnClose.click(function(){
    overlay.hide();
    modal.toggleClass('modal-active');
  });

  overlay.click(function(){
    overlay.hide();
    modal.toggleClass('modal-active');
  });
var navbar = $('.main__navbar');
var button = $('.btn');
button.on('click', function(){
  navbar.toggleClass('main__navbar-active');
  button.toggleClass('btn-active');
});
// -------Слайдер---------

  var SlideSpeed = 700;
  var TimeOut = 5000;

  $(document).ready(function(e) {
  	$('.slide').css(
  		{"position" : "absolute",
  		 "top":'0', "left": '0'}).hide().eq(0).show();
  	var slideNum = 0;
  	var slideTime;
  	slideCount = $(".slider-content .slide").size();
  	var animSlide = function(arrow){
  		clearTimeout(slideTime);
  		$('.slide').eq(slideNum).fadeOut(SlideSpeed);
  		if(arrow == "next"){
  			if(slideNum == (slideCount-1)){slideNum=0;}
  			else{slideNum++}
  			}
  		else if(arrow == "prew")
  		{
  			if(slideNum == 0){slideNum=slideCount-1;}
  			else{slideNum-=1}
  		}
  		else{
  			slideNum = arrow;
  			}
  		$('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
  		$(".control-slide.active").removeClass("active");
  		$('.control-slide').eq(slideNum).addClass('active');
  		}
  	var $adderSpan = '';
  	$('.slide').each(function(index) {
  			$adderSpan += '<span class = "control-slide">' + index + '</span>';
  		});
  	$('<div class ="slider-controls">' + $adderSpan +'</div>').appendTo('.slider');
  	$(".control-slide:first").addClass("active");
  	$('.control-slide').click(function(){
  	var goToNum = parseFloat($(this).text());
  	animSlide(goToNum);
  	});
  	var pause = false;
  	var rotator = function(){
  			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
  			}
  });
});
