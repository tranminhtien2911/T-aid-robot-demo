
$(document).ready(function () {
    window.addEventListener("load", function () {
        let box_wrapper = document.querySelector('.ex-numQuiz-box-wrapper');
        let box_body = document.querySelectorAll('.ex-numQuiz-box-body');
        let box_width = 0;
        let box_length = box_body.length;
        let cushion = 0;
        let index = 0;
        $('.ex-numQuiz-wrapper').click(function () {
            $('.ex-numQuiz-box').addClass('checkClickBox');
            if ($('.ex-numQuiz-box').hasClass('checkClickBox') && $('.ex-numQuiz-box').hasClass('ex-show')) {
                $('.ex-numQuiz-box').removeClass('ex-show');
            } else {
                $('.ex-numQuiz-box').addClass('ex-show');
            }

        });
        $(document).mouseup(function (e) {
            if (!$(".ex-numQuiz").is(e.target) && $(".ex-numQuiz").has(e.target).length === 0) {
                $('.ex-numQuiz-box').removeClass('ex-show');
            }
        })
        $(window).resize(function () {
            let win = $(this);
            if (win.width() > 576) {
                box_width = 296;
                $('.ex-numQuiz-box-body').css('width', '296px');
                $('.ex-numQuiz-box-next').click(function () {
                    handleChangeBody(1);
                });

                $('.ex-numQuiz-box-back').click(function () {
                    handleChangeBody(-1);
                });

                function handleChangeBody(direction) {
                    if (direction === 1) {
                        if (index >= box_length - 1) {
                            index = box_length - 1;
                            return;
                        };
                        cushion = cushion - box_width - 20;
                        box_wrapper.style = `transform: translateX(${cushion}px)`;
                        if (box_width > -1) {
                            $('.ex-numQuiz-box-back').addClass('ex-show');
                        }
                        index++;

                    } else if (direction === -1) {
                        if (index <= 0) {
                            index = 0;
                            return;
                        };
                        cushion = cushion + box_width + 20;
                        box_wrapper.style = `transform: translateX(${cushion}px)`;
                        if (cushion === 0) {
                            $('.ex-numQuiz-box-back').removeClass('ex-show');
                            // $('.ex-numQuiz-box-next').addClass('ex-box-nextBack-active');
                        }
                        index--;
                    }
                }
            } else {
                box_width = 266;
                $('.ex-numQuiz-box-body').css('width', '266px');
                $('.ex-numQuiz-box-next').click(function () {
                    handleChangeBody(1);
                });

                $('.ex-numQuiz-box-back').click(function () {
                    handleChangeBody(-1);
                });

                function handleChangeBody(direction) {
                    if (direction === 1) {
                        if (index >= box_length - 1) {
                            index = box_length - 1;
                            return;
                        };
                        cushion = cushion - box_width - 20;
                        box_wrapper.style = `transform: translateX(${cushion}px)`;
                        if (box_width > -1) {
                            $('.ex-numQuiz-box-back').addClass('ex-show');
                        }
                        index++;
                    } else if (direction === -1) {
                        if (index <= 0) {
                            index = 0;
                            return;
                        };
                        cushion = cushion + box_width + 20;
                        box_wrapper.style = `transform: translateX(${cushion}px)`;
                        if (cushion === 0) {
                            $('.ex-numQuiz-box-back').removeClass('ex-show');
                            $('.ex-numQuiz-box-next').addClass('ex-box-nextBack-active');

                        }
                        index--;
                    }
                }
            }
        }).resize();

        //Check Radio
        $('.ex-content-answer-label').click(function () {
            $('.ex-content-item').removeClass('ex-answer-checked');
            if ($(this).prev().attr('checked', true)) {
                $(this).parent().addClass('ex-answer-checked');
            }
        });
    });

    for (const dropdown of document.querySelectorAll('.ex-content-match-select-wrapper')) {
        dropdown.addEventListener('click', function () {
            this.querySelector('.ex-content-match-select').classList.toggle('open');
        })
    }
    for (const option of document.querySelectorAll('.ex-content-match-option')) {
        option.addEventListener('click', function () {
            if (!this.classList.contains('selected') || this.classList.contains('selected')) {
                this.parentNode.querySelector('.ex-content-match-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.ex-content-match-select').querySelector('.ex-content-match-trigger span').textContent = this.textContent;
            }
        })
    }
    window.addEventListener('click', function (e) {
        for (const select of this.document.querySelectorAll('.ex-content-match-select')) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
            }
        }
    })
    //countdown
    let countdown = $('.ex-submit-time > span').text();
    let interval = setInterval(function () {
        let timer = countdown.split(':');
        //by parsing integer, I avoid all extra string processing
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        if (minutes < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        //minutes = (minutes < 10) ?  minutes : minutes;
        countdown = minutes + ':' + seconds;
        $('.ex-submit-time > span').html(minutes + ':' + seconds);
        if(minutes == 0 && (seconds <= 59)){
            $('.ex-submit-time').addClass('ex-timesUp');
        }
    }, 1000);





});