$('.nav-bar_menu').click(function(){
    $(".main-content_tree").toggleClass('showTree');
    $(".main-content_lesson").toggleClass('blurLesson'); 
});
$('.header-Acount_category').mouseover(function(){
    $(".header-Acount_category").addClass('show-Category');
    $('.header-Acount_icon').addClass('rote90');
});
$('.header-Acount_category').mouseout(function(){
    $(".header-Acount_category").removeClass('show-Category');
    $('.header-Acount_icon').removeClass('rote90');
});
//MB
$('.header-Action_acount').click(function () {
    $('.header-Acount_category').toggleClass('show-Category');
    $('.header-Acount_icon').toggleClass('rote90');
});
if($('.header-Acount_icon').css('transform','rotate(90)') >=1 ){
    $(".header-Acount_category").removeClass('show-Category');
}
//Mobile
$('.header-Menu > i').click(function(){
    $('.header-GeneralMB').toggleClass('showCategoryMB');
});

$('.header-Top_cancel').click(function(){
    $('.header-GeneralMB').removeClass('showCategoryMB');
});
$('section').click(function(){
    $('.header-GeneralMB').removeClass('showCategoryMB');
    $('.header-Acount_category').removeClass('show-Category');
});
