
// 回复内容列表
let askList = [
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58',over: 3, },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58',over: 2, },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58',over: 3, },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58',over: 2, },
    { cont: '咨询内容咨询内容咨询内容咨询内容咨询内容咨询内容咨', time: '2019-10-26 10:58',over: 3, },
];
let askLi = '';
askList.forEach((item, index) => {
    let img = '';
    if(item.over >= 3) {
        img = '';
    } else {
        img = `<img class="img" src="../images/consult/consult-over.png" />`;
    }
    askLi += `<div class="reply-li consult-cont">
                <p class="cont">${item.cont}</p>
                <p class="time">${item.time}</p>
                ${img}
            </div>`
});
$('.reply-list').html(askLi);


// 如果咨询超过三天
var consultOver = true;
if(consultOver) {
    
};
