
// 获取验证码倒计时
let countdown = 60;
function settime() {
    if (countdown == 0) {
        $('.get-code').removeClass('hui');
        $('.get-code').html("获取验证码").attr("disabled", false);;
        countdown = 60;
        return false;
    } else {
        $('.get-code').addClass('hui');
        $('.get-code').html("重新发送(" + countdown + ")").attr("disabled", true);;
        countdown--;
    }
    setTimeout(function () {
        settime();
    }, 1000);
};

$('.phone-input').blur(function () {
    console.log($('.phone-input').val())
    if ((phoneRep($('.phone-input').val()))) {
        $('.phone-error').hide()
    } else {
        console.log('error')
        $('.phone-error').show()
    }
})
// 点击获取验证码
$('.get-code').click(function () {
    if ((phoneRep($('.phone-input').val()))) {
        settime();
    }
});

// 车型
$('.car-code').blur(function () {
    if (!(carCodeRep($('.car-code').val()))) {
        $('.car-code-error').show();
    } else {
        $('.car-code-error').hide();
    };
})
$('.car-type').blur(function () {
    if (!(carTypeRep($('.car-type').val()))) {
        $('.car-type-error').show();
    } else {
        $('.car-type-error').hide();
    }
})
$('.login-button').click(function () {
    // 验证码校验 暂定为 000 正确
    if ($('.code-input').val() == '000') {
        $('.code-error').hide();
        // 车牌车号校验
        if ((carCodeRep($('.car-code').val())) && (carTypeRep($('.car-type').val()))) {
            alert('可以登录')
        }
    } else {
        $('.code-error').show();
    }



})
