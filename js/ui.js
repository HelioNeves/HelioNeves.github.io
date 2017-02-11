$(document).ready(function(){
  $("img:not(#first, #botao)").mouseenter(function(){
    $(this).animate({
        width: '-=10px',
        height: '-=10px'
      });
  });

  $("img:not(#first, #botao)").mouseleave(function(){
    $(this).animate({
        width: '+=10px',
        height: '+=10px'
      });
  });

  $("#botao").on({
 "mouseover" : function() {
    this.src = 'img/button.png';
  },
  "mouseout" : function() {
    this.src='img/buttonclick.png';
  }
});

  $('[data-toggle="tooltip"]').tooltip();

});
