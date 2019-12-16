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
// 院内代办次数
let yndbTime = true; // 默认已用完
$('.yndb-button').click(function () {
    if (yndbTime) {
        $('.yndb .mask').show();
        $('.know').click(function () {
            $('.yndb .mask').hide();
        })
    } else {
        let location = $('#location').val() != '';
        let hospital = $('#hospital').val() != '';
        let dateChoice = $('#dateChoice').val() != '';
        let nameError = $('.name-error').css('display') == 'none';
        let phoneError = $('.phone-error').css('display') == 'none';

        if (location && hospital && dateChoice && nameError && phoneError) {
            alert('成功')
        } else {
            console.log('error')
        }
    }

})



