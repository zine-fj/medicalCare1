
let toastIsTrue = true; // 报销金额是否用完，默认用完
if(toastIsTrue) {
    $('#dbsq').attr('href','javascript:;');
    $('#dbsq').click(function() {
        $('.dbsq .mask').show();
    })
    $('.dbsq .know').click(function() {
        $('.dbsq .mask').hide();
    })
} else {
    $('#dbsq').attr('href','');
}
