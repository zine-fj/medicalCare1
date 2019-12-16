


let jyObj = {num: 2,money: 350,lastMoney: 600};
$('#theNum').html(jyObj.num);
$('#theMoney').html(jyObj.money);
$('.num').html(jyObj.lastMoney);

let jyList = [
    {danhao: 'jn12345677888760',type: '待审核',money: 60,time: '2019-08-11 10:26'},
    {danhao: 'jn12345677888760',type: '已打款',money: 60,time: '2019-08-11 10:26'},
    {danhao: 'jn12345677888760',type: '平台垫付',money: 60,time: '2019-08-11 10:26'},
    {danhao: 'jn12345677888760',type: '驳回',money: 60,time: '2019-08-11 10:26',reason: '超过24小时'},
];
let jyLi = '';
jyList.forEach((item,index)=>{
    let theType = ''
    if(item.type == '待审核') {
        theType = 'type';
    } else if(item.type == '已打款') {
        theType = 'type1';
    } else if(item.type == '平台垫付') {
        theType = 'type2';
    } else if(item.type == '驳回') {
        theType = 'type3';
    }
    let theReason = ''
    if(item.reason) {
        theReason = `<p class="reject-reason">驳回原因：${item.reason}</p>`
    }
    jyLi += `<div class="jl-li">
                <div class="jl-li-cont">
                    <div class="jl-li-l">
                        <p class="danhao">申请单号：<span>${item.danhao}</span></p>
                        <p class="money">${item.money}元</p>
                    </div>
                    <div class="jl-li-r">
                        <p class="type ${theType}">${item.type}</p>
                        <p class="time">2019-08-11 10:26</p>
                    </div>
                </div>
                ${theReason}
            </div>`
});
$('.jl-list').html(jyLi);




if(jyList.length > 0) {
    $('.jyjl .footer').hide();
} else {
    $('.jyjl .footer').show();
}