
// 我的订单列表
let myOrderList = [
    {href: 'order.html',type: '预约挂号',hospital: '山东省立医院',time: '2019-10-26 10:58'},
    {href: '',type: '预约陪诊',hospital: '山东省立医院',time: '2019-10-26 10:58'},
];
let myOrderLi = '';
myOrderList.forEach((item,index)=>{
    let num = index % 2;
    myOrderLi += `<div class="my-order-li">
                    <a class="title" href="${item.href}">
                        <span class="title-span${num}">${item.type}</span>
                        <img src="../images/my/arrow-right.png" alt="">
                    </a>
                    <div class="cont">
                        <p class="hospital">${item.hospital}</p>
                        <p class="time">${item.time}</p>
                    </div>
                </div>`
});
$('.my-order-list').html(myOrderLi);