$(function(){
  var  $btna=$(".login-btn");
  var $alertuser=$(".user");
  var $alertupwd=$(".upwd");
  var islogin=false;
  var $loginMsg=$(".login-msg");
  $btna.on("click",function(e){
    var  uname=$("#uname").val();
    var  upwd=$("#upwd").val();
    if(uname==""){
      islogin=false;
      $alertuser.html("用户名不能为空")
    }else{
      $alertuser.html("");
      islogin=true;
    };
    if(upwd==""){
      $alertupwd.html("密码不能为空");
      islogin=false;
    }else{
      
      $alertupwd.html("");
      islogin=true;
    };
    if(islogin==true){
      $.ajax({
        url:"http://localhost:3000/login/logins",
        type:"post",
        data:{uname,upwd},
        dataType:"json",
        success: function(result) {
          if(result.code==-1){
            $loginMsg.html("登录出错，用户名或密码出错");
            $loginMsg.show();
            setInterval(function(){
              $loginMsg.hide()
            },1000)
          }else{
            $loginMsg.html("登录成功,3秒后跳转至首页");
            $loginMsg.show();
            setInterval(function(){
              window.location="http://127.0.0.1:5500/public/index.html"
            },3000)
          }
        }
      })
    }
  })
})
