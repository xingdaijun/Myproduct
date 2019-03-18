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
//横线随动图片
  function bang(){
    var $a=$(".four-line>.list-item>a");
    var $img=$(".banner-img>.active"); 
    $.each($a,function(i,val ){
      if($(this).html()==$img.attr("alt")){
        $(this).addClass("active")
      }else{
        $(this).removeClass("active")
      }
    })
  }
/*箭头控制上下图片*/
/*下一张*/
  var $btnnext=$(".controls-direction>a.next");
  function next(){
    var $img=$(".banner-img>.active"); 
    $img.removeClass("active");
    if($img.next().length==0){
      $(".banner-img>img:first-child").addClass("active");
    }else{
      $img.next().addClass("active");
    }
    bang();
  }
  $btnnext.click(next);
  /*上一张*/
  var $$btnprev=$(".controls-direction>a.prev");
  $$btnprev.click(function(){
    var $img=$(".banner-img>.active"); 
    $img.removeClass("active");
    if($img.prev().length==0){
      $(".banner-img>img:last-child").addClass("active")
    }else{
      $img.prev().addClass("active");
    }
    bang();
  })
  /*自动轮播*/
  var n=setInterval(next,3000)
  var $btn=$(".controls-direction>a,.four-line>.list-item>a,.banner-img");
  $btn.hover(function(){
    clearInterval(n);
  },
  function(){
    n=setInterval(next,3000)
  })
  /*横线控制图片显示 */
  var $a=$(".four-line>.list-item>a");
  $a.click(function(){
    var $a=$(this);
    $a.addClass("active");
    $a.parent().siblings().children().removeClass("active");
    var $img=$(".banner-img>img");
    $.each($img,function(){
      if($(this).attr("alt")==$a.html()){
        $(this).addClass("active");
      }else{
        $(this).removeClass("active")
      }
    })
  })
  /*滚动条事件 */
  $(window).scroll(function(){
    var $top=$(window).scrollTop();
    if($top>=105&&$top<=1050){
      $(".product-box").css({
        "position":"fixed",
        "top":0,
        "left":0
      })
      $(".left-banner").css("margin-top",$top-105);
    }
    if($top<145)$(".product-box").css("position","relative")
  })
  /*总计的变化*/
  function sum(){
    var sum=0
    var $price=$(".choosed-pro ul li");
    sum+=parseInt($(".choosed-pro ul li:first-child span").html());
    $.each($price,function(){
      if($(this).css("display")=="block"){
        sum+=parseInt($(this).find("span").html())
      }
    })
    $(".choosed-pro ul li.totalPrice").text(`   总计   ：${sum}元  `)
  }
  /*点击手机版本变化颜色小计*/
  $(".pro-list").click(function(){
    $list=$(this);
    $list.addClass("selection").siblings().removeClass("selection");
  })
  $(".pro-phone-choose .pro-list").click(function(){
    $price=$(this).find(".price").html();
    $(".choosed-pro>ul>.one>span").text(`${$price}`);
    sum();
  })
  /*点击保险变化颜色小计*/
  $(".insurance-list").click(function(){
    var $list=$(this);
    var $n=$(".insurance-list").index(this);
    var $btn=$list.find(".btn");
    if(!$list.hasClass("selection")){
     $list.addClass("selection");
      $btn.addClass("agree");
      if($n==0){
        $(`.choosed-pro>ul>li:nth-child(${$n+2})`).css("display","block");
        $(`.choosed-pro>ul>li:nth-child(${$n+3})`).css("display","none");
        sum();
      }else if($n==1){
        $(`.choosed-pro>ul>li:nth-child(${$n+2})`).css("display","block");
        $(`.choosed-pro>ul>li:nth-child(${$n+1})`).css("display","none");      
        sum();
      }
      $(`.choosed-pro>ul>li:nth-child(${$n+2})`).css("display","block");
      sum();
      if($list.siblings().hasClass("selection")){
        $list.siblings().removeClass("selection")
        .find(".btn").removeClass("agree");
      }
    }else{
      $list.removeClass("selection")
      $btn.removeClass("agree");
      $(`.choosed-pro>ul>li:nth-child(${$n+2})`).css("display","none");
      sum();
    }
  })
})();
