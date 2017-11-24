//navbar change color after scrolling
$(document).ready(function(){
   var scroll_start = 0;
   var colorchange = $('#colorchange');
   var offset = colorchange.offset();
    if (colorchange.length){
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".fixed-top").css('background-color', 'rgba(0, 0, 0, 0.8)');// if yes, then change the color of class "navbar-fixed-top"
       } else {
          $('.fixed-top').css('background-color', 'transparent');// if not, change it back to transparent
       }
   });
    }
});
