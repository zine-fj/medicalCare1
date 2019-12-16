
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
        if (imgList.length > mostImgNum) {
            alert('最多只能上传八张图片！');
            let imgMonNum = imgList.length - mostImgNum;
            console.log(imgMonNum)
            for (let i = 0; i < imgMonNum; i++) {
                imgList.eq(imgList.length - i - 1).remove();
            }
        }

        $(this).removeAttr("id");
    });
    $("#uploaderInput").click();
});



// 点击提交问题
$('.sub-problem').click(function () {
    console.log($('#uploaderInput'))
    let problemCont = $('#consultCont').val();
    imgUrls = imgUrls.splice(0, 8);
    if (problemCont.length < 10 || problemCont.length > 500) {
        alert('请输入10～500字的描述')
        return;
    };

    if(!phoneRep($('#phone').val())) {
        alert('请输入正确的手机号');
        return;
    }
    console.log(problemCont);
    console.log(imgUrls)
})