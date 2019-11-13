

// 底部
$('.footer').find('.footer-1').click(function() {
    let eqIndex = $(this).index();
    if(eqIndex == 0) {
        $('.footer').find('.footer-1').eq(0).find('img').attr('src','../images/home-select.png');
        $('.footer').find('.footer-1').eq(0).find('.footer-1-word').addClass('footer-act');
        $('.footer').find('.footer-1').eq(1).find('img').attr('src','../images/my.png');
        $('.footer').find('.footer-1').eq(1).find('.footer-1-word').removeClass('footer-act');
    } else if(eqIndex == 1) {
        $('.footer').find('.footer-1').eq(0).find('img').attr('src','../images/home.png');
        $('.footer').find('.footer-1').eq(0).find('.footer-1-word').removeClass('footer-act');
        $('.footer').find('.footer-1').eq(1).find('img').attr('src','../images/my-select.png');
        $('.footer').find('.footer-1').eq(1).find('.footer-1-word').addClass('footer-act');
    }
})