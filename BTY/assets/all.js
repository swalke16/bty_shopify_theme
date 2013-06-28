
$(document).ready(function(){
  $('nav a').click(function(e){
    // e.preventDefault();
    $('.dropdown').toggleClass('dropdown_open');
    $(this).toggleClass('selected');
    $(this).siblings().removeClass('selected');
  })
});
