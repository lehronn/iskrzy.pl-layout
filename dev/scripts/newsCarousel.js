// news carousel
$(document).ready(function(){
  var clickEvent = false;
  $('#news-carousel').carousel({
    interval:   4000
  }).on('click', '.list-group li', function() {
      clickEvent = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active');
      }
    }
    clickEvent = false;
  });
})

$(window).on('load', function() {
  var boxheight = $('#news-carousel .carousel-inner').innerHeight();
  var itemlength = $('#news-carousel .carousel-item').length;
  var triggerheight = Math.round(boxheight/itemlength-16);
	$('#news-carousel .list-group-item').outerHeight(triggerheight);
});
