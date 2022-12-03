$(document).ready(function(){
    window.addEventListener('load', function(){
        let trueAnswer_all = $('.box-result-trueAnswer-all').text();
        let trueAnswer_true = $('.box-result-trueAnswer-true').text();
        let percentage = ((trueAnswer_true / trueAnswer_all) * 100)

        $(window).resize(function(){
            $('.box-result-process').width(percentage + '%');
        }).resize();
    })
});