$(document).ready(function () {
    $('.listEx_popup-content').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(window).resize(function () {
        $('.slick-next').html(`<i class="fi fi-rr-angle-right"></i>`);
        $('.slick-prev').html(`<i class="fi fi-rr-angle-left"></i>`);
    }).resize();
   
})