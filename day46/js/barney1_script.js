$(function(){
  let imgW=$('.slides').children('img').width();
  let imgNum=$('.slides').children('img').length;
  $('.slides').width(imgW*imgNum);
  let num=0; //이동 목표 증가변수
  $('.prev').hide();
  $('.next').on('click',function(event){
    event.preventDefault();
    if(num==0){
      $('.prev').fadeIn();
    }
    if(num<(imgNum-1)){ //num<3, ==3이 되면 num++에서 num이 4가 되기 때문에 안됨
      num++;
      $('.slides').stop().animate({left:-imgW*num},600);
    }
    if(num==(imgNum-1)){
      $('.next').fadeOut();
    }
  });
  $('.prev').on('click',function(event){
    event.preventDefault();
    if(num==(imgNum-1)){
      $('.next').fadeIn();
    }
    if(num>0){
      num--;
      $('.slides').stop().animate({left:-imgW*num},600);
    }
    if(num==0){
      $('.prev').fadeOut();
    }
  });
});