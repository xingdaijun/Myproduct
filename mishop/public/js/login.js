$a=$(".box-top a");
var $zhanghao=$(".id-login");
var $erweima=$(".erweima-login");
$.each($a,function(){
  $(this).click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var $active=$(".box-top .active");
    if($active.html()=="账号登录"){
      $zhanghao.css("display","block").siblings().css("display","none");
    }else{
      $erweima.css("display","block").siblings().css("display","none");
    }
  })
})
$name=$("#text");
$pwd=$("#pwd");
$spanuname=$(".uname")
$spanupwd=$(".upwd");
var login=false;
var reg=/^[a-z0-9]{3,12}$/i;
$name.blur(function(){
  if($name.val()==""){
    $spanuname.css("display","block");
    login=false;
  }else{
    login=true;
    $spanuname.css("display","none");
  }
  if(!reg.test($name.val())){
    $spanuname.text("用户名格式不正确，请检查")
    $spanuname.css("display","block");
    login=false;
  }else{
    login=true;
    $spanuname.css("display","none");
  }
})
$pwd.blur(function(){
  if($pwd.val()==""){
    $spanupwd.css("display","block");
    login=false
  }else{
    login=true;
    $spanupwd.css("display","none");
  }
  if(!reg.test($pwd.val())){
    $spanuname.text("密码格式不正确，请检查")
    $spanupwd.css("display","block")
    login=false;
  }else{
    login=true;
    $spanupwd.css("display","none");
  }
})
var $loginbtn=$("#btn");
 function tiao(){
   setTimeout(function(){
    window.location="http://127.0.0.1:5500/public/index.html"
   },3000)
 }
 var $alert=$(".alert")
 $loginbtn.click(function(e){
   e.preventDefault();
   if(login==true){
    $alert.css("visibility","visible")
    tiao();
  }
 })


  
