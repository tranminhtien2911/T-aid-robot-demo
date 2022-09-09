$('.nav-bar_menu').click(function(){
    $(".main-content_tree").toggleClass('showTree');
    $(".main-content_lesson").toggleClass('blurLesson'); 
});
$('.main-content_lesson').click(function(){
    $(".main-content_tree").removeClass('showTree');
    $(".main-content_lesson").removeClass('blurLesson');
    $(".header-Acount_category").removeClass('show-Category');
    $('.header-Acount_icon').removeClass('rote90');
});
$('.header-General_left').click(function(){
    $(".header-Acount_category").removeClass('show-Category');
    $('.header-Acount_icon').removeClass('rote90');
})
$('.nav-bar').click(function(){
    $(".header-Acount_category").removeClass('show-Category');
    $('.header-Acount_icon').removeClass('rote90');
})
//MB
$('.header-Action_acount').click(function () {
    $('.header-Acount_category').toggleClass('show-Category');
    $('.header-Acount_icon').toggleClass('rote90');
});
if($('.header-Acount_icon').css('transform','rotate(90)') >=1 ){
    $(".header-Acount_category").removeClass('show-Category');
}
//Mobile
// if(screen.width == 1020){
//     $('.header-GeneralMB').removeClass('showCategoryMB')
// }
$('.header-Menu > i').click(function(){
    $('.header-GeneralMB').toggleClass('showCategoryMB');
});

$('.header-Top_cancel').click(function(){
    $('.header-GeneralMB').removeClass('showCategoryMB');
});
$('section').click(function(){
    $('.header-GeneralMB').removeClass('showCategoryMB');
});
