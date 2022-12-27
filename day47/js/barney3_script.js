$(function(){
  /* <기본 기능>
    현재 보이는 순번의 이미지는 사라지고
      currNum   animate{left:-w}
    현재순번의 바로 다음순번 이미지가 나타난다.
      newNum=currNum+1    animate{left:0}
    - 현재순번이 마지막 이미지 순서가 되면 다음 순번은 첫번째로 지정된다.
      if(currNum>=(img.length-1))   newNum=0
    - 움직임이 완료되면 다음 순번 변수값이 현재 보이는 순번 변수값에 정의된다.
      animate의 function()    currNum=newNum
  */

  const imgs=$('.slides').children('img');
  let imgW=imgs.width();
  let imgNum=imgs.length;
  let currNum=0;
  let newNum=0;

  // 정방향 이동, timer에 매번 쓰기 때문에 함수로 선언
  function slideMove(){
    newNum=currNum+1;
    if(newNum>=imgNum){ //currNum>=(imgNum-1)
      newNum=0;
    }
    // $('.btns>ul>li').eq(currNum).children('a').removeClass('on');
    $('.btns a').filter('.on').removeClass('on');
    $('.btns>ul>li').eq(newNum).children('a').addClass('on');
    imgs.eq(currNum).stop().animate({left:-imgW},600);
    // 이미지를 +imgW 자리로 보내놔야 예쁘게 진행됨, zIndex는 혹시나 뒷 순번 이미지가 더 위에 있어서 다시 1번이 메인으로 올 때 약간 가려질까봐
    imgs.eq(newNum).css({left:imgW,zIndex:20});
    imgs.eq(newNum).stop().animate({left:0},600,function(){
      currNum=newNum;
    });
  }

  // 기본 실행
  let timer=setInterval(slideMove,2000);

  // next 클릭 시(정방향 이동)
  $('.next').on('click',function(event){
    event.preventDefault();
    clearInterval(timer);
    slideMove();
    timer=setInterval(slideMove,2000);
  });

  // prev 클릭 시(역방향 이동)
  $('.prev').on('click',function(event){
    event.preventDefault();
    clearInterval(timer);
    newNum=currNum-1;
    if(newNum<0){
      newNum=imgNum-1;
    }
    $('.btns a').filter('.on').removeClass('on');
    $('.btns>ul>li').eq(newNum).children('a').addClass('on');
    imgs.eq(currNum).stop().animate({left:imgW},600);
    imgs.eq(newNum).css({left:-imgW,zIndex:20});
    imgs.eq(newNum).stop().animate({left:0},600,function(){
      currNum=newNum;
    });
    timer=setInterval(slideMove,2000);
  });

  // pagination 클릭 시(정방향 이동)
  $('.btns a').on('click',function(event){
    event.preventDefault();
    clearInterval(timer);
    // .btns 내 a 클릭하면 --> 해당 li의 순번을 newNum에 정의, 기본움직임 실행
    newNum=$(this).parent().index();
    // 같은 거 눌렀을 때(currNum=newNum)를 제외하고 실행
    if(currNum!=newNum){
      $('.btns a').filter('.on').removeClass('on');
      $('.btns li').eq(newNum).children('a').addClass('on');
      imgs.eq(currNum).stop().animate({left:-imgW},600);
      imgs.eq(newNum).css({left:imgW,'z-index':20});
      imgs.eq(newNum).stop().animate({left:0},600,function(){
        currNum=newNum;
      });
    }
    timer=setInterval(slideMove,2000);
  });
});