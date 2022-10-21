$('.nav-bar_menu').click(function(){
    $(".main-content_tree").toggleClass('showTree');
    $(".main-content_lesson").toggleClass('blurLesson'); 
});
// $('.main-content_lesson').click(function(){
//     $(".main-content_tree").removeClass('showTree');
//     $(".main-content_lesson").removeClass('blurLesson');
//     $(".header-Acount_category").removeClass('show-Category');
//     $('.header-Acount_icon').removeClass('rote90');
// });
// $('.header-General_left').click(function(){
//     $(".header-Acount_category").removeClass('show-Category');
//     $('.header-Acount_icon').removeClass('rote90');
// })
// $('.nav-bar').click(function(){
//     $(".header-Acount_category").removeClass('show-Category');
//     $('.header-Acount_icon').removeClass('rote90');
// })

const onMouseUpDesk = e => {
    if (!$(".header-Acount_category").is(e.target) // If the target of the click isn't the container...
        && $(".header-Acount_category").has(e.target).length === 0); // ... or a descendant of the container.
    {
        $(".header-Acount_category").removeClass('show-Category');
        $('.header-Acount_icon').removeClass('rote90');

    }
}

$('.header-Action_acount').on('click', () => {
    // $('.header-Acount_icon').addClass('rote90');
    $(".header-Acount_category").toggleClass('show-Category');
    if (!$(".header-Acount_category").is(e.target) // If the target of the click isn't the container...
        && $(".header-Acount_category").has(e.target).length === 0); // ... or a descendant of the container.
    {
        $(".header-Acount_category").removeClass('show-Category');
    }
    $('.header-Acount_icon').removeClass('rote90');
      
});

//Mobile
const $menuMB = $('.header-GeneralMB');

const onMouseUpMB = e => {
    if (!$menuMB.is(e.target) // If the target of the click isn't the container...
        && $menuMB.has(e.target).length === 0); // ... or a descendant of the container.
    {
        $menuMB.removeClass('showCategoryMB');
    }
}

$('.header-Menu > i').on('click', () => {
    $menuMB.toggleClass('showCategoryMB').promise().done(() => {
        if ($menuMB.hasClass('showCategoryMB')) {
            $(document).on('mouseup', onMouseUpMB); // Only listen for mouseup when menu is active...
        } else {
            $(document).off('mouseup', onMouseUpMB); // else remove listener.
        }
    })
});

