
$(document).ready(function(){
  $('nav a.affiliates_link').click(function(e){
    e.preventDefault();
    $('.dropdown').toggleClass('dropdown_open');
    $(this).toggleClass('selected');
  })

  $('.color').click(function(e){
    $(this).siblings().addClass('fade');
    $(this).removeClass('fade');
  })
  $('.sizes').click(function(e){
    $(this).siblings().addClass('fade');
    $(this).removeClass('fade');
  })
});
