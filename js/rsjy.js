
let toastIsTrue = true; // 报销金额是否用完，默认用完
if(toastIsTrue) {
    $('#fybx,.help').attr('href','javascript:;');
    $('.help,#fybx').click(function() {
        $('.rsjy .mask').show();
    })
    $('.rsjy .know').click(function() {
        $('.rsjy .mask').hide();
    })
} else {
    $('#fybx,.help').attr('href','');
}


