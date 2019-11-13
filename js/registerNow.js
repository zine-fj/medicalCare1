// 省市
new MultiPicker({
    input: 'location',//点击触发插件的input框的id
    container: 'targetContainer',//插件插入的容器id
    jsonData: $city,
    success: function (arr) {

        let province = arr[0].value;
        let city = arr[1].value;
        console.log(province + ' ' + city)
        $('#location').val(province + ' ' + city);
    }//回调
});


// 时分
new Jdate({
    el: '#dateChoice',
    format: 'YYYY-MM-DD hh:mm',
    beginYear: 1900,
    endYear: 2100
})
$('#phone').blur(function () {
    if (!(phoneRep($('#phone').val()))) {
        $('.phone-error').show();
    } else {
        $('.phone-error').hide();
    }
})

// 医生姓名
$('#docterName').blur(function () {
    console.log(nameTest($('#docterName').val()).isNameOk)
    if (nameTest($('#docterName').val()).isNameOk) {
        $('.docter-error').hide();
    } else {
        $('.docter-error').show();
    }
})
// 身份证号
$('#telphoneName').blur(function () {
    if (!(telPhoneRep($('#telphoneName').val()))) {
        $('.telphone-error').show();
    } else {
        $('.telphone-error').hide();
    }
})

// 姓名
$('#name').blur(function () {
    console.log(nameTest($('#name').val()).isNameOk)
    if (nameTest($('#name').val()).isNameOk) {
        $('.name-error').hide();
    } else {
        $('.name-error').show();
    }
})

// 选择医院
$('#hospital').focus(function () {
    $('.hospital-list').show();
})
$('#hospital').blur(function () {
    $('.hospital-list').hide();
})
// 
$('.register-button').click(function () {
    let location = $('#location').val() != '';
    let hospital = $('#hospital').val() != '';
    let docterError = $('.docter-error').css('display') == 'none';
    let dateChoice = $('#dateChoice').val() != '';
    let nameError = $('.name-error').css('display') == 'none';
    let telphoneError = $('.telphone-error').css('display') == 'none';
    let phoneError = $('.phone-error').css('display') == 'none';

    if (location && hospital && docterError && dateChoice && nameError && telphoneError && phoneError) {
        alert('成功')
    } else {
        console.log('error')
    }
})


