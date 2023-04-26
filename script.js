$(document).ready(function(){

  var Step = $('.slider-item').width();
  var sliderWidth = Step * $('.slider-wrap li').length + 500;
  var stepTest = Step;
  $('.slider-wrap').css({
    width: sliderWidth,
  })

  for(i=0; i < 6; i++){
    $('.slider-wrap').animate({
      left: + Step,
    },3, function(){
      $('.slider-wrap li:last-child').prependTo('.slider-wrap');
      $('.slider-wrap').css({
         left:'',
      })
    })
  }

  $('.c-left').click(function(){
    moveLeft();
  });

  $('.c-right').click(function(){
    moveRight();
  });

  function moveRight(){
    $('.slider-wrap').animate({
      left: -stepTest
    },500,function(){
      $('.slider-wrap li:first-child').appendTo('.slider-wrap');
      $('.slider-wrap').css({
         left:'',
      })
    })
  }
    function moveLeft(){
      $('.slider-wrap').animate({
        left: +stepTest
      },500,function(){
        $('.slider-wrap li:last-child').prependTo('.slider-wrap');
        $('.slider-wrap').css({
           left:'',
        })
      })
    }

  $('.footer-item .fa').click(function(){
    $(this).toggleClass('act icon');
  })

  $('#playit').click(function(){
    $(this).toggleClass('fa-play, fa-pause');
  });

 var audio = new Audio('http://bloo.ovh/music-player/songs/Walk_Away_From_The_Sun.mp3');
var t = false;
audio.volume = '0.2';
  $('.c-on .fa').click(function(){
   if(!t){
     audio.play();
     t = true;
   }else{
     audio.pause();
     t = false;
   }


  })
  
});