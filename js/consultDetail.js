
// 咨询内容详情
let consult = {
    cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58'
}
$('#consultCont').html(consult.cont);
$('#consultTime').html(consult.time);
// 回复内容列表
let askList = [
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58' },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58' },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58' },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58' },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58' },
];
let askLi = '';
askList.forEach((item, index) => {
    askLi += `<div class="reply-li consult-cont">
                <p class="cont">${item.cont}</p>
                <p class="time">${item.time}</p>
            </div>`
});
$('.reply-list').html(askLi);


// 时间
let time = new Date();
let Y = time.getFullYear();
let M = time.getMonth() + 1;
M = M < 10 ? '0' + M : M;
let N = time.getDate();
N = N < 10 ? '0' + N : N;
let H = time.getHours();
let Min = time.getMinutes();
Min = Min < 10 ? '0' + Min : Min;
let endTime = Y + '-' + M + '-' + N + ' ' + H + ':' + Min;

$('.ask').click(function () {
    let val = $('.ask-input').val();
    if(kongRep(val)) {
        let newAskLi = `<div class="reply-li consult-cont">
                        <p class="cont">${val}</p>
                        <p class="time">${endTime}</p>
                    </div>`
        $('.reply-list').find('.reply-li').eq(0).before(newAskLi);
        $('.ask-input').val('');
    } else {
        alert('请输入内容！')
    }
    
})



// 如果咨询超过三天
var consultOver = true;
if(consultOver) {
    $('.consult-over').show();
    $('.questioning').hide();
    $('.consult').css('height','100%')
};
