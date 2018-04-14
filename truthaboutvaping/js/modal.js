$(document).ready(function(){
  $('.pop').click(function (event) {
    event.preventDefault();
    $('.modal img').attr('src', $(this).attr('src'));
    $('.modal').modal('show');
  });
});
