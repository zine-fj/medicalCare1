
let jysmObj = [
    {title: '服务内容',contList: [
        `在发生事故中涉及使用120救护车服务的情况下，所产生的急救费用，平台分担。`,
        `一年内不限次数，累计<span class="red">限额1000元</span>，超出部分需要自费。`,
        `含车上人员及第三者；`,
        ` 救护车急救费用包含救护车出车费、抢救药品及其他必要施救费用（7座以下非营运乘用车辆）。`,
    ]},
    {title: '使用方式：',contList: [
        `1、选择通过会员专属渠道：公众号<span class="red">一键报警</span>功能，可直接垫付救护车费用（未开通垫付区域除外）；`,
        `2、如选择直接拨打120急救，未通过专属渠道，需在使用后<span class="red">24小时内</span>通过微信公众号【人伤救援】-【费用报销】进行备案，邮寄急救车发票到指定地点报销，邮费需自费。`
    ]}
];
let jysmLi = '';
jysmObj.forEach((item,index)=>{
    let jysmLiLi = '';
    item.contList.forEach((itemLi,indexLi)=>{
        jysmLiLi += `<p class="cont-li-li">${itemLi}</p>`
    });
    jysmLi += `<div class="cont-li">
                <h3 class="title">${item.title}</h3>
                ${jysmLiLi}
            </div>`
});
$('#jysmCont').html(jysmLi);