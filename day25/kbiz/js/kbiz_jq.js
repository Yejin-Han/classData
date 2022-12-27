$(function(){
  $('.gnb').on('mouseenter',function(){
    if($(window).width()>1024){
      $('.sub').stop().slideDown(300);
      $('.gnb_bg').stop().slideDown(300);
    }
  });
  $('.gnb').on('mouseleave',function(){
    if($(window).width()>1024){
      $('.sub').stop().slideUp(250);
      $('.gnb_bg').stop().slideUp(250);
    }
  });
  function responNav(){
    if($(window).width()>1024){
      $('.gnb').show();
      $('.sub,.gnb_bg').hide();
    } else if($(window).width()>640){
      $('.gnb,.gnb_bg').hide();
      $('.sub').height('auto').show();
    } else{
      $('.gnb,.sub,.gnb_bg').hide();
      $('.sub').height('auto');
    }
  }
  responNav(); //최초인식
  $('#togglebtn').on('click',function(){
    responNav();
    $('.gnb').slideToggle(300);
  });
  $('#close1,#close2').on('click',function(){
    $('.gnb').slideUp(250);
  });
  const listNum=$('.gnb>ul>li').length;
  $('.gnb>ul>li>a').on('click',function(event){
    if($(window).width()<=640){
      event.preventDefault();
      const a=$(this);
      if(a.parent().index()!=listNum-1){
        if(a.next().css('display')=='none'){
          //$('.sub').slideUp, $('.sub:visible').slideUp, a.parent().siblings().children('.sub').slideUp
          $('.sub:visible').stop().slideUp(250);
          a.next().stop().slideDown(250);
        } else{
          a.next().stop().slideUp(250);
        }
      } else{
        $('.sub:visible').stop().slideUp(250);
      }
    }
  });

  function bxslideBegin(){
    $('.slide1').bxSlider({
      autoControls:true,
      pager:true,
      auto:true,
      speed:350,
      controls:false,
    });
    $('.slide2').bxSlider({
      autoControls:true,
      pager:true,
      auto:true,
      speed:350,
      controls:false,
    });
  }
  setTimeout(bxslideBegin,20);

  $('#familysite').on('change',function(){
    let url=$('#familysite').find('option:selected').val();
    window.open(url);
  });

  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
    autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
  });

  const rollNum=$('.rolling_box').find('li').length;
  let showNum=0;
  if($(window).width()>1024){
    showNum=7;
  } else if($(window).width()>640){
    showNum=5;
  }
  let totPg=Math.ceil(rollNum/showNum); //desktop은 7개씩, tablet은 5개씩 보여야 함
  let dist=($('.rolling_box').find('img').width()+15)*showNum;
  let currIndex=0;
  let tarL=0; //-dist*currIndex(0,1,2,3)
  $('.rolling_nav>.next').on('click',function(e){
    e.preventDefault();
    if(currIndex<totPg-1){ //데탑기준 totPg=4, currIndex가 3보다 작을 때, 3이되면 더이상 증가 및 animate x
      currIndex++;
      tarL=-dist*currIndex;
      $('.rolling_box>ul').stop().animate({left:tarL},500);
    }
  });
  $('.rolling_nav>.prev').on('click',function(e){
    e.preventDefault();
    if(currIndex>0){
      currIndex--;
      tarL=-dist*currIndex;
      $('.rolling_box>ul').stop().animate({left:tarL},500);
    }
  });

  //1번 방법
  /* function sub7Change(){
    let newsList=$('.sub7').find('ul');
    newsList.eq(0).hide();
    newsList.eq(1).show();
    newsList.eq(0).appendTo($('.sub7'));
  } */
  //2번 방법
  /* const newsList=$('.sub7').find('ul');
  const listNum2=newsList.length-1;
  let currIndex2=0;
  let newIndex=0;
  function sub7Change(){
    newIndex2=currIndex2+1;
    if(currIndex2>=listNum){
      newIndex2=0;
    }
    newsList.eq(currIndex2).hide();
    newsList.eq(newIndex2).show();
    currIndex2=newIndex2;
  } */
  //3번 방법 - ul 2개면 성립
  /* 
  const newsList=$('.sub7').find('ul');
  let newsIndex=0;
  function sub7Change(){
    if(newsIndex==0){
      newsList.eq(newsIndex).hide();
      newsIndex++;
      newsList.eq(newsIndex).show();
    } else{
      newsList.eq(newsIndex).hide();
      newsIndex--;
      newsList.eq(newsIndex).show();
    }
  } */
  //4번 방법
  const newsList=$('.sub7').find('ul');
  let newsIndex=0;
  function sub7Change(){
    newsList.eq(newsIndex).hide();
    newsIndex++;
    newsIndex=newsIndex%(newsList.length); //순환식 <==> if(newsIndex>=newsList.length){newsIndex=0};
    newsList.eq(newsIndex).show();
  }
  setInterval(sub7Change,5000);

  //내 방법 (역시 ul이 2개일 때만 성립)
  /* let visibleul;
  function ulshowhide(){
    visibleul=$('.sub7>ul:visible');
    visibleul.hide();
    visibleul.siblings().show();
  }
  setInterval(ulshowhide,5000); */

  $(window).resize(function(){
    responNav();
    $('.rolling_box>ul').css('left',0);
    currIndex=0;
  });
});