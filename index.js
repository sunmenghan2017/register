// $(function(){
    //实现点击发送验证码的JS效果，即点击后倒计时(6秒)效果，且按钮变为不可用
    var a=$('input[type="button"]'),e=6;
        a.val("获取验证码"),
        a.click(function(){
        let count = 6;
        const countDown = setInterval(() => {
            if (count === 0) {
                a.removeAttr('disabled');
                a.css({
                    background: '#fff',
                });
                clearInterval(countDown);
            } else {
                a.attr('disabled', true);
                a.css({
                    background: '#d8d8d8',
                });
            }
            count--;
            }, 1000);
        })
        function checkForm(){ 

         var nametip = checkUserName(); 
         var passtip = checkPassword();  
         var conpasstip = ConfirmPassword(); 
         var phonetip = checkPhone(); 
         return nametip && passtip && conpasstip && phonetip; 
         } 
        var user = /^(?!(\d+)$)[\u4e00-\u9fffa-zA-Z\d\-_]+$/;
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var password =/(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;
        var yzm = /^\d{4}$/;
        
         //验证用户名   
         function checkUserName(){ 
         var username = document.getElementById('userName'); 
         var errname = document.getElementById('nameErr'); 
         if(username.value.length == 0){ 
           errname.innerHTML="用户名不能为空"
           errname.className="error"
           return false; 
           } 
         if(!user.test(username.value)){ 
           errname.innerHTML="用户名仅支持中英文、数字和下划线,且不能为纯数字"
           errname.className="error"
           return false; 
           } 
          else{ 
            errname.innerHTML="OK"
            errname.className="success"; 
            return true; 
            } 
         } 
         //验证手机号 
         function checkPhone(){ 
         var userphone = document.getElementById('userPhone'); 
         var phonrErr = document.getElementById('phoneErr'); 
         if(!myreg.test(userphone.value)){ 
           phonrErr.innerHTML="手机号码格式不正确"
           phonrErr.className="error"
           return false; 
           } 
          else{ 
            phonrErr.innerHTML="OK"
            phonrErr.className="success"; 
            return true; 
            } 
         } 
         //验证密码   
       function checkPassword(){ 
         var userpasswd = document.getElementById('userPasword'); 
         var errPasswd = document.getElementById('passwordErr'); 
         if(!password.test(userpasswd.value)){ 
           errPasswd.innerHTML="密码设置不符合要求"
           errPasswd.className="error"
           return false; 
           } 
          else{ 
            errPasswd.innerHTML="OK"
            errPasswd.className="success"; 
            return true; 
            } 
         } 
         //验证码 
         function ConfirmPassword(){ 
         var boxword = document.getElementsByClassName('box')[0]; 
         var userConPassword = document.getElementById('userConfirmPasword'); 
         var errConPasswd = document.getElementById('conPasswordErr'); 
         if((boxword.value)!=(userConPassword.value) || userConPassword.value.length == 0){ 
           errConPasswd.innerHTML="请求超时，请稍后再试"
           errConPasswd.className="error"
           return false; 
           } 
          else{ 
            errConPasswd.innerHTML="OK"
            errConPasswd.className="success"; 
            return true; 
            }    
         } 
       
// });