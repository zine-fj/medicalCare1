
let dbsqjlObj = {num1: 1,num2: 2};
$('#theNum0').html(dbsqjlObj.num1);
$('#theNum1').html(dbsqjlObj.num2);

let dbsqjlList = [
    {danhao: 'jn12345677888760',type: '待审核',money: '待审核',time: '2019-08-11 10:26'},
    {danhao: 'jn12345677888760',type: '已打款',money: 60,time: '2019-08-11 10:26'},
    {danhao: 'jn12345677888760',type: '驳回',money: '超过24小时',time: '2019-08-11 10:26'},
];
let dbsqjlLi = '';
dbsqjlList.forEach((item,index)=>{
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
    if(item.type == '驳回') {
        theReason = `<p class="reject-reason">驳回原因：${item.money}</p>`
    } else {
        theReason = `<p class="money">${item.money}元</p>`
    }
    dbsqjlLi += `<div class="jl-li">
                    <div class="jl-li-l">
                        <p class="danhao">申请单号：<span>${item.danhao}</span></p>
                        ${theReason}
                    </div>
                    <div class="jl-li-r">
                        <p class="type ${theType}">${item.type}</p>
                        <p class="time">2019-08-11 10:26</p>
                    </div>
            </div>`
});
$('.dbsqjl-list').html(dbsqjlLi);




if(dbsqjlList.length > 0) {
    $('.dbsqjl .footer').hide();
} else {
    $('.dbsqjl .footer').show();
}