$(document).ready(function(){
  $('#year').text(new Date().getFullYear());
  $('.lab-card').on('click', function(){
    const link = $(this).data('link');
    if(link){
      window.open(link, '_blank');
    }
  });
});
