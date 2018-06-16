//1、验证正整数
function verifyPositiveInt(number){
	var reg=/^[1-9]\d*$/;
	return reg.test(number);
}
//2、验证正数
function verifyPositiveDouble(number){
	var reg=/^(([1-9]\d*)|0)(\.\d+)?$/
	return reg.test(number);
}
//3、验证邮箱
function verifyEmail(email){
	var reg=/^\w+@(163|126|sina|qq|yahoo|souhu)\.(com|cn)$/;
	return reg.test(email);
}
//4、验证手机号码
function verifyPhone(phone){
	var reg=/^1(3[456789]|5[012789]|8[23478]|78)\d{8}$/;
	return reg.test(phone);
} 
