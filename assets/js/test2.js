$.fn.extend({
    treed: function (o) {

        var openedClass = 'fi-rr-angle-small-down';
        var closedClass = 'fi-rr-angle-small-right';

        if (typeof o != 'undefined') {
            if (typeof o.openedClass != 'undefined') {
                openedClass = o.openedClass;
            }
            if (typeof o.closedClass != 'undefined') {
                closedClass = o.closedClass;
            }
        };
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.children('a').prepend("<i class='fi " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('a').children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
        tree.find('.branch .indicator').each(function () {
            $(this).on('click', function () {
                $(this).closest('li').click();
            });
        });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch > a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('#tree1').treed();

$('#tree2').treed({ openedClass: 'fi-rr-angle-small-down', closedClass: 'fi-rr-angle-small-right' });

$('#tree3').treed({ openedClass: 'fi-rr-angle-small-down', closedClass: 'fi-rr-angle-small-right' });
$('a').mouseover(function () {
    $(this).parent().children('i').addClass('colorHover');
    $(this).addClass('colorHover');
});
$('a').mouseout(function () {
    $(this).parent().children('i').removeClass('colorHover');
    $(this).removeClass('colorHover');
});
$('li > a').each(function(){
     var closedClass = 'fi-rr-angle-small-right';
    if($(this).next('ul').length === 0){
        $(this).prepend("<i class='fi " + closedClass + "'></i>");
        $(this).children('i').css({"opacity": "0"});
    }
});

$('li > a').click(function () {
    $('.active').removeClass('active');
    $(this).prev().addClass('active');
    $(this).addClass('active');
    if($(this).next().length === 0){
        $('.bg-color').removeClass('bg-color');
        $(this).parent().addClass('bg-color');
    }else{
        $('.bg-color').removeClass('bg-color');
    }
});

//Book_Mark
$('.lesson-general_favorite').click(function(){
    if($(this).children().attr('src') == './assets/img/SVG/book_mark.svg'){
        $(this).children().attr("src", "./assets/img/SVG/book_mark_solid.svg");
        $(this).children('.lesson-general_announce').children().text('Đã thêm vào mục yêu thích');
        $(this).children('.lesson-general_announce').addClass('click-announce');
        setTimeout(function(){
            $('.lesson-general_announce').removeClass('click-announce');
        }, 1000);
    }else if($(this).children().attr('src') == './assets/img/SVG/book_mark_solid.svg'){
        $(this).children().attr("src", "./assets/img/SVG/book_mark.svg");
        $('.lesson-general_announce').removeClass('click-announce');
    }
});
// if($('.main-content_lesson').height() > $('.main-content_tree').height()){
//     $('.main-content_tree').height($('.main-content_lesson').height());
// }


