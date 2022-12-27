$(function(){
  /*vh 호환 - window height (section에 전달, 마우스 휠 한번에 대한 이동거리의 기준)
    section 수
    이동 목표변수*/
  let winH=$(window).height();
  $('section').height(winH);
  let sectNum=$('section').length;
  let tarPos=0;
  let num=0;

  $(window).resize(function(){
    winH=$(window).height();
    $('section').height(winH);
    /* tarPos=winH*num*(-1);
    if(num==sectNum){
      tarPos=($('#wrap').height()-winH)*(-1);
    }
    $('#wrap').css('top',tarPos); */
  });

  //snb 색깔 바뀌는 함수
  function btnCtrl(n){
    $('#snb a').filter('.on').removeClass('on');
    $('#snb>ul>li').eq(n).find('a').addClass('on');
  }

  //tarPos=winH*num*(-1)
  $('#snb a').on('click',function(event){
    event.preventDefault();
    num=$(this).parent().index();
    btnCtrl(num);
    tarPos=winH*num*(-1);
    if(num==sectNum){ //section 끝, footer 호출 (기존 fullscroll말고 footer가 끝에 걸쳐질만큼의 이동)
      tarPos=($('#wrap').height()-winH)*(-1); //wrap 높이(전체길이) - 윈도우높이 만큼 위로 wrap이 이동해야한다
    }
    $('#wrap').stop().animate({top:tarPos},800,'easeInOutCubic');
  });

  $(document).on('keydown',function(event){
    console.log(event.keyCode);
  });
});