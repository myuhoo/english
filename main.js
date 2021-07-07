$(function(){

  $('.navi-button').on('click', function() {
    // #headerにopenクラスが存在する場合
    if ($('#navi').hasClass('open')) {
    
      $('#navi').removeClass('open');

   
    } else {
      $('#navi').addClass('open');
    }
  });

  $(".navi-button").on("click",function(){
    if ($('#navi').hasClass('open')) {
    
      $('.navi-button').addClass('open');
    }

    else{
      $('.navi-button').removeClass('open');
    
    }

  });


});
