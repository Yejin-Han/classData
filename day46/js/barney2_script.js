$(function(){
  let imgW=$('.slides').children('img').width();
  let imgNum=$('.slides').children('img').length;
  $('.slides').width(imgW*imgNum);
  let num=0; //이동 목표 증가변수
  function slideMove(){
    $('.slides').animate({left:-imgW},600,function(){
      $('.slides').find('img').eq(0).appendTo($('.slides'));
      $('.slides').css('left','0');
    });
  }
  let timer=setInterval(slideMove,2000);
  $('.next').on('click',function(event){
    event.preventDefault();
    clearInterval(timer);
    slideMove();
    timer=setInterval(slideMove,2000);
  });
  $('.prev').on('click',function(event){
    event.preventDefault();
    clearInterval(timer);
    $('.slides').find('img').eq(imgNum-1).prependTo($('.slides'));
    $('.slides').css('left',-imgW);
    $('.slides').animate({left:0},600);
    timer=setInterval(slideMove,2000);
  });
});