
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
$('li > a').each(function () {
    var closedClass = 'fi-rr-angle-small-right';
    if ($(this).next('ul').length === 0) {
        $(this).prepend("<i class='fi " + closedClass + "'></i>");
        $(this).children('i').css({ "opacity": "0" });
    }
});

$('li > a').click(function () {
    $('.active').removeClass('active');
    $(this).prev().addClass('active');
    $(this).addClass('active');
    if ($(this).next().length === 0) {
        $('.bg-color').removeClass('bg-color');
        $(this).parent().addClass('bg-color');
    } else {
        $('.bg-color').removeClass('bg-color');
    }
});

//Book_Mark
$('.lesson-general_favorite').click(function () {
    if ($(this).children().attr('src') == './assets/img/SVG/book_mark.svg') {
        $(this).children().attr("src", "./assets/img/SVG/book_mark_solid.svg");
        $(this).children('.lesson-general_announce').children().text('Đã thêm vào mục yêu thích');
        $(this).children('.lesson-general_announce').addClass('click-announce');
        setTimeout(function () {
            $('.lesson-general_announce').removeClass('click-announce');
        }, 1000);
    } else if ($(this).children().attr('src') == './assets/img/SVG/book_mark_solid.svg') {
        $(this).children().attr("src", "./assets/img/SVG/book_mark.svg");
        $('.lesson-general_announce').removeClass('click-announce');
    }
});
// if($('.main-content_lesson').height() > $('.main-content_tree').height()){
//     $('.main-content_tree').height($('.main-content_lesson').height());
// }
var audioPlayer = document.querySelector('.green-audio-player');
var playPause = audioPlayer.querySelector('#playPause');
var playpauseBtn = audioPlayer.querySelector('.play-pause-btn');
var loading = audioPlayer.querySelector('.loading');
var progress = audioPlayer.querySelector('.progressing');
var sliders = audioPlayer.querySelectorAll('.slider');
var volumeBtn = audioPlayer.querySelector('.volume-btn');
var volumeControls = audioPlayer.querySelector('.volume-controls');
var volumeProgress = volumeControls.querySelector('.slider .progressing');
var player = audioPlayer.querySelector('audio');
var currentTime = audioPlayer.querySelector('.current-time');
var totalTime = audioPlayer.querySelector('.total-time');
var speaker = audioPlayer.querySelector('#speaker');

var draggableClasses = ['pining'];
var currentlyDragged = null;

window.addEventListener('mousedown', function (event) {

    if (!isDraggable(event.target)) return false;

    currentlyDragged = event.target;
    let handleMethod = currentlyDragged.dataset.method;

    this.addEventListener('mousemove', window[handleMethod], false);

    window.addEventListener('mouseup', () => {
        currentlyDragged = false;
        window.removeEventListener('mousemove', window[handleMethod], false);
    }, false);
});

playpauseBtn.addEventListener('click', togglePlay);
player.addEventListener('timeupdate', updateProgress);
player.addEventListener('volumechange', updateVolume);
player.addEventListener('loadedmetadata', () => {
    totalTime.textContent = formatTime(player.duration);
});
player.addEventListener('canplay', makePlay);
player.addEventListener('ended', function () {
    playPause.attributes.d.value = "M18 12L0 24V0";
    player.currentTime = 0;
});

volumeBtn.addEventListener('click', () => {
    volumeBtn.classList.toggle('open');
    volumeControls.classList.toggle('hidden');
})

window.addEventListener('resize', directionAware);

sliders.forEach(slider => {
    let pin = slider.querySelector('.pining');
    slider.addEventListener('click', window[pin.dataset.method]);
});

directionAware();

function isDraggable(el) {
    let canDrag = false;
    let classes = Array.from(el.classList);
    draggableClasses.forEach(draggable => {
        if (classes.indexOf(draggable) !== -1)
            canDrag = true;
    })
    return canDrag;
}

function inRange(event) {
    let rangeBox = getRangeBox(event);
    let rect = rangeBox.getBoundingClientRect();
    let direction = rangeBox.dataset.direction;
    if (direction == 'horizontal') {
        var min = rangeBox.offsetLeft;
        var max = min + rangeBox.offsetWidth;
        if (event.clientX < min || event.clientX > max) return false;
    } else {
        var min = rect.top;
        var max = min + rangeBox.offsetHeight;
        if (event.clientY < min || event.clientY > max) return false;
    }
    return true;
}

function updateProgress() {
    var current = player.currentTime;
    var percent = (current / player.duration) * 100;
    progress.style.width = percent + '%';

    currentTime.textContent = formatTime(current);
}

function updateVolume() {
    volumeProgress.style.height = player.volume * 100 + '%';
    if (player.volume >= 0.5) {
        speaker.attributes.d.value = 'M14.667 0v2.747c3.853 1.146 6.666 4.72 6.666 8.946 0 4.227-2.813 7.787-6.666 8.934v2.76C20 22.173 24 17.4 24 11.693 24 5.987 20 1.213 14.667 0zM18 11.693c0-2.36-1.333-4.386-3.333-5.373v10.707c2-.947 3.333-2.987 3.333-5.334zm-18-4v8h5.333L12 22.36V1.027L5.333 7.693H0z';
    } else if (player.volume < 0.5 && player.volume > 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667M17.333 11.373C17.333 9.013 16 6.987 14 6v10.707c2-.947 3.333-2.987 3.333-5.334z';
    } else if (player.volume <= 0.05) {
        speaker.attributes.d.value = 'M0 7.667v8h5.333L12 22.333V1L5.333 7.667';
    }
}

function getRangeBox(event) {
    let rangeBox = event.target;
    let el = currentlyDragged;
    if (event.type == 'click' && isDraggable(event.target)) {
        rangeBox = event.target.parentElement.parentElement;
    }
    if (event.type == 'mousemove') {
        rangeBox = el.parentElement.parentElement;
    }
    return rangeBox;
}

function getCoefficient(event) {
    let slider = getRangeBox(event);
    let rect = slider.getBoundingClientRect();
    let K = 0;
    if (slider.dataset.direction == 'horizontal') {

        let offsetX = event.clientX - slider.offsetLeft;
        let width = slider.clientWidth;
        K = offsetX / width;

    } else if (slider.dataset.direction == 'vertical') {

        let height = slider.clientHeight;
        var offsetY = event.clientY - rect.top;
        K = 1 - offsetY / height;

    }
    return K;
}

function rewind(event) {
    if (inRange(event)) {
        player.currentTime = player.duration * getCoefficient(event);
    }
}

function changeVolume(event) {
    if (inRange(event)) {
        player.volume = getCoefficient(event);
    }
}

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + ((sec < 10) ? ('0' + sec) : sec);
}

function togglePlay() {
    if (player.paused) {
        playPause.attributes.d.value = "M0 0h6v24H0zM12 0h6v24h-6z";
        player.play();
    } else {
        playPause.attributes.d.value = "M18 12L0 24V0";
        player.pause();
    }
}

function makePlay() {
    playpauseBtn.style.display = 'block';
    loading.style.display = 'none';
}

function directionAware() {
    if (window.innerHeight < 250) {
        volumeControls.style.bottom = '-54px';
        volumeControls.style.left = '54px';
    } else if (audioPlayer.offsetTop < 154) {
        volumeControls.style.bottom = '-164px';
        volumeControls.style.left = '-3px';
    } else {
        volumeControls.style.bottom = '-54px';
        volumeControls.style.left = '54px';
    }
}

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
$('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
});
