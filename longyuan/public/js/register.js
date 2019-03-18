var $btna=$(".login-btn");
var $alertuser=$(".user");
var $alertupwd=$(".upwd");
var $alertangin=$(".angin")
var $uname=$("#uname");
var $upwd=$("#upwd");
var $upwd2=$("#upwd2");
var $rigmsg=$(".register-msg");
var isreg=false;
$btna.click(function(){
  if($uname.val()==""){
    $alertuser.html("用户名不能为空")
    isreg=false;
  }else{
    $alertuser.html("");
    isreg=true;
  };
  if($upwd.val()==""){
    $alertupwd.html("密码不能为空");
    isreg=false;
  }else{
    $alertupwd.html("");
    isreg=true;
  };
  if($upwd2.val()==""){
    $alertangin.html("确认密码不能为空");
    isreg=false;
  }else{
    $alertangin.html("");
    isreg=true;
  };
  if($upwd.val()==$upwd2.val()){
    $alertangin.html("");
    isreg=true;
  }else{
    $alertangin.html("两次密码不一致")
    isreg=false;
  }
  if(isreg==true){
    var uname=$uname.val();
    var upwd=$upwd.val();
    $.ajax({
      url:"http://localhost:3000/register/registers",
      type:"post",
      data:{uname,upwd},
      dataType:"json",
      success: function(result) {
        if(result.code==-1){
          $rigmsg.html("登录出错，用户名或密码出错");
          $rigmsg.show();
          setInterval(function(){
            $rigmsg.hide()
          },1000)
        }else{
          $rigmsg.html("登录成功,3秒后跳转至登录");
          $rigmsg.show();
          setInterval(function(){
            window.location="http://127.0.0.1:5500/public/user.html"
          },3000)
        }
      }
    })
  }
})