// 一些简单的正则

// 非空判断
const kongRep = function (kong) {
    let rep = /^[\s\S]*.*[^\s][\s\S]*$/;
    if (rep.test(kong)) {
        return true;
    } else {
        return false;
    }
}

// 手机号
const phoneRep = function (phone) {
    let rep = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
    if (rep.test(phone)) {
        return true;
    } else {
        return false;
    }
}

// 身份证号 18位
const telPhoneRep = function (telPhone) {
    let rep = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/;
    if (rep.test(telPhone)) {
        return true;
    } else {
        return false;
    }
}

// 车牌号 (新能源+非新能源)
const carCodeRep = function (carCode) {
    let rep = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/;
    if (rep.test(carCode)) {
        return true;
    } else {
        return false;
    }
}

// 车型
const carTypeRep = function (carType) {
    let rep = /^[\u4E00-\u9FFF]+$/;
    if (rep.test(carType)) {
        return true;
    } else {
        return false;
    }
}

// 姓名正则
const nameTest = function (choiceName) {
    let endInfo = {};
    endInfo.isNameOk = '';
    let {
        length
    } = choiceName.replace(/[\u4e00-\u9fa5]/g, '**')
    let isReg =
        (
            /^[\u4e00-\u9fa5]|[a-zA-Z]$/.test(choiceName) &&
            /^(?![·\-_\s])(?!.*[·\-_\s]$)/.test(choiceName) &&
            /^[·\-\s\w\u4e00-\u9fa5]*$/.test(choiceName) &&
            !/[0-9]/.test(choiceName) &&
            !/[\u4e00-\u9fa5][a-zA-Z]{1}|[a-zA-Z][\u4e00-\u9fa5]{1}/.test(choiceName) &&
            !/[·_\-\s]{2}/.test(choiceName) &&
            !/[\u4e00-\u9fa5]\s[\u4e00-\u9fa5a]/.test(choiceName) &&
            !/[a-z]\s{2,}[a-z]/i.test(choiceName)
        ) &&
        2 < length && length < 51;
    if (isReg) {
        endInfo.isNameOk = true;
    } else {
        endInfo.isNameOk = false;
    }
    return endInfo;
}












