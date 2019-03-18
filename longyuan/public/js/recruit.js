(function(){
  $.ajax({
    url:"http://localhost:5500/public/header.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("header").innerHTML=res
  });
  $.ajax({
    url:"http://localhost:5500/public/footer.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("footer").innerHTML=res
  }); 
                                                                                       

 //巨幕弹出框
  $back=$(".back");
  $msg=$(".msg")
  $span3=$(".span3");
  function gao(){
    var height=$(document).height();   
    $back.css("height",`${height}px`);
  }
  $span3.click(function(){
    gao();
    if($back.hasClass("active")){
      $back.removeClass("active")
    }else{
      $back.addClass("active")
    }
  })
  $close=$("#close");
  $close.click(function(){
    $back.removeClass("active")
  })
  $menuspan=$(".menuBox span");
  $.each($menuspan,function(){
    $(this).click(function(){
      if(!$(this).hasClass("select")){
        $(this).addClass("select").siblings().removeClass("select");
      }
    })
  })
  $btn=$(".btn");
  $.each($btn,function(){
    var $this=$(this);
    var $content=$this.parent().next();
    $this.click(function(){
      var $btn1=$this.find(".btn1");
      if($btn1.html()=="+"){
        $btn1.html("-")
      }else{
        $btn1.html("+")
      }
      $content.toggle("linear");
    })
  })
  $sociology=$(".sociology");
  $school=$(".school");
  $one=$(".one");
  $two=$(".two");
  $sociology.click(function(){
    $one.show();
    $two.hide();
  })
  $school.click(function(){
    $one.hide();
    $two.show();
  })
})()