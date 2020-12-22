/*
注册功能模板
2020.12.15
魏滢
*/
$(function(){
    //调用验证插件
    $('#registerForm').validate({
    //调用验证插件
    rules:{
        //用户名验证
        username:{
            required:true,   //非空
            rangelength: [3,6]  //长度验证
        },
        //验证密码
        password:{
            required:true,   //非空
            isPassword:true   //自定义密码验证
        },
        //确认密码
        checkPassword:{
            required:true,   //非空
            equalTo:"#password"   //密码验证
        },
        //电话号码
        tel:{
            required:true,   //非空
            isTel:true       //自定义的电话号码验证
        }
    },
    //提示信息
    messages:{
         //用户名提示信息
        username:{
            required:'用户名不能为空！',   //非空
            rangelength: '长度在 3 ~ 6位'  //长度验证
        },
        //密码的提示信息
        password:{
            required:'密码不能为空！',   //非空
            isPassword:'亲！输入5-10个以字母开头、可带数字、“_”、“.”的字符串哟!'
        },
        //确认密码的提示信息
        checkPassword:{
            required:'请再此输入密码！',   //非空
            equalTo:'两次密码输入不一致'   //密码一致性
        },
        //电话号码提示信息
        tel:{
            required:'电话号码不能为空',
            isTel:'电话号码格式不正确'
        }
    }
  })

  //密码自定义验证
  jQuery.validator.addMethod("isPassword",function(value,element){
      var pwdReg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,9}$/;
      return this.optional(element) || (pwdReg.test(value));
  });
  //手机号自定义验证
  jQuery.validator.addMethod("isTel",function(value,element){
    var telReg = /^[1]+[3,8,5,7]+\d{9}$/;
    return this.optional(element)||(telReg.test(value));
});
})