// 轮播图
let mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
});

// 点击导航
$('.nav-cont-2,.nav-cont-3').hide();
$('.nav-list').find('p').click(function() {
    let eqIndex = $(this).index();
    console.log(eqIndex)
    $(this).addClass('nav-li-act').siblings().removeClass('nav-li-act');
    if(eqIndex == 0) {
        $('.nav-cont-1').show();
        $('.nav-cont-2,.nav-cont-3').hide();
    } else if(eqIndex == 2) {
        $('.nav-cont-2').show();
        $('.nav-cont-1,.nav-cont-3').hide();
    } else if(eqIndex == 4) {
        $('.nav-cont-3').show();
        $('.nav-cont-2,.nav-cont-1').hide();
    }
})

// 导航内容
let navList1 = [
    '1、诊前关怀服务：订单受理后，陪诊人员将会与您联系，了解病情与就诊需求，嘱咐诊前注意事项。',
    '2、全程代办服务：为您代办就诊手续，包含办卡、缴费、取药等，您只需在休息区候诊。',
    '3、专业助医服务：陪诊人员陪您就诊，代向医生描述病情，让医生了解病情，为您解释医生的专业叮嘱。',
    '4、现场陪护：在陌生、嘈杂的环境中，陪诊人员给您贴心的关爱，让您感受家人般的温暖呵护。',
    '5、诊后关怀：诊后2—3个工作日内回访人员进行诊后贴心关怀服务，关心您的健康，让您更快康复。'
];
let navList2 = [
    {title: '订单确认',cont: '陪诊订单受理后，将用短信提示客户陪诊的信息，陪护人员会与客户电话联系，确认订单信息，了解客户的需求并留下联系方式。'},
    {title: '诊前关怀',cont: '根据客户病情叮嘱诊前注意事项，以及看诊需携带的证件物品等。'},
    {title: '代办服务',cont: '客户与陪诊人员碰面后，只需在休息区休息，陪护人员携带客户证件前往窗口排队办理各项诊前事宜，如医保卡开通、病历办理、缴费、取号等。'},
    {title: '助医服务',cont: '陪护人员带领客户至就诊室就诊，帮助用户向医生更准确的描述病情，同时将医嘱简单易懂的表达给用户，并且在离院时再次叮嘱客户。'},
    {title: '指导检查',cont: '如客户需做检查，陪护人员会带领客户至检查地点，代为做好取号、排队等系列工作，在客户检查时细心安抚客户、协助指导、进行检查。'},
    {title: '代取药',cont: '如客户需取药，客户只需在休息区休息，陪护人员代为取号排队并领取药品，取药后，将药品交给客户的同时，提醒告知用药方式及注意事项。'},
    {title: '诊后关怀',cont: '诊后2—3个工作日内，回访人员进行诊后贴心关怀服务，关心客户健康，让客户更快康复。'},
];
let navList3 = [
    {title: '1、服务期限',cont: `陪诊服务按单个就诊号收费，仅限当次就诊门诊当天时段使用，陪伴时长不超过4小时。`},
    {title: '2、预约截止时间',cont: `1）陪诊日期为周一至周六，预约截止时间为前一天下午16点前；<br/>
    2）陪诊日期为周日及国家法定节假日，则不可预约陪诊，如：元旦、五一、国庆等。
    `},
    {title: '3、服务范围',cont: `1）提供全程陪诊、协助就医服务，全程陪诊包含诊前关怀服务、全程代办服务、专业助医服务、现场陪护服务、诊后关怀服务等就医陪伴服务；协助就医包括诊前提醒服务、流程规划服务、就诊引导服务、诊后关爱服务等便捷就医服务。<br/>
    2）陪诊服务范围不包括急诊就医、插队、排队、加号、住院陪护、急诊留观陪护等。<br/>
    3）陪诊服务过程中产生的医疗费用，包含但不限于挂号费、检查费、治疗费、药品费、床位费、护理费等，由用户自行承担，服务提供方不承担经济责任。
    `},
    {title: '4、其他',cont: `
    1)陪诊人员在提供服务时，不会直接收取任何服务费用，除陪诊人员事先垫付的挂号、建卡、病历本、等费用外，请勿直接向陪诊人员支付任何其他费用。<br/>
    2)用户在陪诊服务过程中，如对陪诊人员恶意中伤、语言攻击、人身攻击等任何不当行为，陪诊人员有权终止服务，且用户无权要求退款。`},
];

let navList1_li = '';
navList1.forEach((item,index)=>{
    navList1_li += `<div class="cont-li">${item}</div>`
})
$('#navCont1').html(navList1_li);

let navList2_li = '';
navList2.forEach((item,index)=>{
    navList2_li += `<div class="cont-li">
                        <p class="title-index">
                            <span class="index">${index + 1}</span>
                            <span class="title">${item.title}</span>
                        </p>
                        <p class="cont">${item.cont}</p>
                    </div>`
})
$('#navCont2').html(navList2_li);

let navList3_li = '';
navList3.forEach((item,index)=>{
    navList3_li += `<div class="cont-li">
                        <p class="title-index title-index-3">
                            <span class="title">${item.title}</span>
                        </p>
                        <p class="cont">${item.cont}</p>
                    </div>`
})
$('#navCont3').html(navList3_li);


