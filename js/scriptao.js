var bool = false;

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('div').click(function() {
        if(!bool){
           bool = true;
        $(this).animate({
           height: '+=100px'
       });
        } else {
            bool = false;
        $(this).animate({
           height: '-=100px'
       });   
       }
   }); 
});