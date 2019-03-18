(function(){
  $.ajax({
    url:"http://localhost:5500/public/header.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("header").innerHTML=res
  });
  var height=$(window).height();
  var $div=$(".section");
  var $kuang=$(".kuang");
  $.each($div,function(){
    $(this).css("height",`${height}px`)
  });
  $.each($kuang,function(){
    $(this).css("height",`${height*0.87}px`)
  })
  $("body").on("touchstart", function(e) {
    // 判断默认行为是否可以被禁用
    if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
    }   
    startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
  });
  $(".box").on("touchend", function(e) {
      // 判断默认行为是否可以被禁用
      if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
            e.preventDefault();
        }
      }               
      moveEndX = e.originalEvent.changedTouches[0].pageX,
      moveEndY = e.originalEvent.changedTouches[0].pageY,
      X = moveEndX - startX,
      Y = moveEndY - startY;
      if ( Y > 0) {
        var $top=$(window).scrollTop();
        $('html,body').animate({scrollTop:$top-height},'5000');
      }
      else if ( Y < 0 ) { 
        var $top=$(window).scrollTop();
        $('html,body').animate({scrollTop:$top+height},'5000');
      }
  });
})()