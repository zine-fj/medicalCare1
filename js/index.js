// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})    

// 热门推荐
let hotList = [
    {img: 'images/home/hot-1.png',title: '专属预约挂号服务',word: '专属客服协助客户预约门诊时间'},
    {img: 'images/home/hot-2.png',title: '全程就医协助',word: '专属客服协助客户预约门诊时间'},
];
let hotLi = '';
hotList.forEach((item,index)=>{
    hotLi += `<div class="hot-li">
                <div class="li-img">
                    <img src="${item.img}" alt="">
                </div>
                <div class="li-r">
                    <p class="li-r-title">${item.title}</p>
                    <p class="li-r-word">${item.word}</p>
                </div>
            </div>`
});
$('.hot-list').html(hotLi);

// 底部
$('.footer').find('.footer-1').click(function() {
    let eqIndex = $(this).index();
    if(eqIndex == 0) {
        $('.footer').find('.footer-1').eq(0).find('img').attr('src','images/home-select.png');
        $('.footer').find('.footer-1').eq(0).find('.footer-1-word').addClass('footer-act');
        $('.footer').find('.footer-1').eq(1).find('img').attr('src','images/my.png');
        $('.footer').find('.footer-1').eq(1).find('.footer-1-word').removeClass('footer-act');
    } else if(eqIndex == 1) {
        $('.footer').find('.footer-1').eq(0).find('img').attr('src','images/home.png');
        $('.footer').find('.footer-1').eq(0).find('.footer-1-word').removeClass('footer-act');
        $('.footer').find('.footer-1').eq(1).find('img').attr('src','images/my-select.png');
        $('.footer').find('.footer-1').eq(1).find('.footer-1-word').addClass('footer-act');
    }
})











