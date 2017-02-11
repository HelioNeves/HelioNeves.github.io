$(document).ready(function(){
  $("img:not(#first)").mouseenter(function(){
    $(this).animate({
        width: '-=10px',
        height: '-=10px'
      });
  });

  $("img:not(#first)").mouseleave(function(){
    $(this).animate({
        width: '+=10px',
        height: '+=10px'
      });
  });

});
