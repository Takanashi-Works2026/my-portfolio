const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
});

/* 背景クリックで閉じる */
overlay.addEventListener('click', () => {
    nav.classList.remove('active');
    overlay.classList.remove('active');
});

$(function () {
    // TOPに戻るボタン
    var topBtn = $('#page-top');
    topBtn.hide();

    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        var w = $(window).width();
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    //スムーススクロールでページトップへ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});