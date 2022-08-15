// ---------  Script Back to top -------------------------------------------------
// hide #back-top first
$("#back-top").hide();
// fade in #back-top
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#back-top').fadeIn();
  } else {
    $('#back-top').fadeOut();
  }
});
// scroll body to 0px on click
$('#back-top a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});
// Slider func

$(document).ready(function () {
  $('.func-mobile').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
