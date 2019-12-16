
// 获取邮寄地址
let mailAddressObj = {
    address: '北京市朝阳区十里河富华弘大厦四层  8002',
    name: '远盟康健急救组（注明：救护车）',
    mail: '100122'
}
$('#mailAddress').html(mailAddressObj.address);
$('#mailName').html(mailAddressObj.name);
$('#mailNum').html(mailAddressObj.mail);

$('.address').click(function() {
    $('.address-mask').show();
})
$('.know').click(function() {
    $('.address-mask').hide();
})

// 使用时间
new Jdate({
    el: '#starTime',
    format: 'YYYY-MM-DD hh:mm',
    beginYear: 1900,
    endYear: 2100
});

// 上传图片
let mostImgNum = 8;
let imgUrls = [];

$("#uploadImg").on("click", function (e) {
    var newFileInput = "<input class='upload-input' id='uploaderInput' type='file' name='name' accept='image/*' multiple />";
    $(this).parent().append($(newFileInput));
    $("#uploaderInput").bind("change", function (e) {
        //onFileUploaded(e);预览等操作
        let imgfiles = $(this)[0].files;
        for (let i = 0; i < imgfiles.length; i++) {
            let filePath = imgfiles[i].name;
            let fileFormat = filePath.split('.')[1].toLowerCase()
            let src = window.URL.createObjectURL(imgfiles[i])
            console.log(imgfiles[0]) // 图片名字
            console.log(fileFormat) // 图片后缀名
            console.log(src) // 图片本地可预览的地址
            imgUrls.push(src);
            let imgLi = '';
            imgLi += `<div class='upload-img-li'><img src='${src}' /></div>`;
            $('.upload-img-png').before(imgLi);
        }
        let imgList = $('.uploadImgs').find('.upload-img-li');
        console.log(imgList.length, mostImgNum)
        // if (imgList.length > mostImgNum) {
        //     alert('最多只能上传八张图片！');
        //     let imgMonNum = imgList.length - mostImgNum;
        //     console.log(imgMonNum)
        //     for (let i = 0; i < imgMonNum; i++) {
        //         imgList.eq(imgList.length - i - 1).remove();
        //     }
        // }

        $(this).removeAttr("id");
    });
    $("#uploaderInput").click();
});

// 提交
$('.sub').click(function() {
    // 姓名
    let nameIsTrue = nameTest($('#name').val()).isNameOk;
    // 电话
    let phoneIsTrue = phoneRep($('#phone').val());
    // 车牌号
    let chephaoIsTrue = carCodeRep($('#chephao').val());
    // 使用时间
    let starTimeIsTrue = kongRep($('#starTime').val());
    // 发票金额
    let fpMoneyIsTrue = kongRep($('#fpMoney').val());
    // 快递单号
    let kuaidiHaoIsTrue = kongRep($('#kuaidiHao').val());
    // 是否同意协议
    let agreeIsTrue = $('#ok')[0].checked;

    if(!nameIsTrue) {
        $('.name-error').show();
        return;
    } else {
        $('.name-error').hide();
    }
    if(!phoneIsTrue) {
        $('.phone-error').show();
        return;
    } else {
        $('.phone-error').hide();
    }
    if(!chephaoIsTrue) {
        $('.cheph-error').show();
        return;
    } else {
        $('.cheph-error').hide();
    }
    if(!starTimeIsTrue) {
        $('.startime-error').show();
        return;
    } else {
        $('.startime-error').hide();
    }
    if(!fpMoneyIsTrue) {
        $('.fpmoney-error').show();
        return;
    } else {
        $('.fpmoney-error').hide();
    }
    if(!kuaidiHaoIsTrue) {
        $('.kuaidi-error').show();
        return;
    } else {
        $('.kuaidi-error').hide();
    }
    if(!agreeIsTrue) {
        alert('请阅读并同意隐私申明')
        return;
    }
    console.log('下一步')

})