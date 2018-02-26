// localScroll
$(document).ready(function () {
  // start of LOCALSCROLL ANIMATE
  $("#navbar ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    var target = this.hash;
    e.preventDefault();

    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1300, function(){
          // when done, add hash to url
          // (default click behaviour)
          window.location.hash = target;
        });
  });
  // end of LOCALSCROLL ANIMATE
});
