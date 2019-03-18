$dropbtn=$("#phone img");
$dropdown=$(".dropdown");
$dropbtn.click(function(){
  $dropdown.toggle();
})
$dropspan=$("#phone span")
$dropli=$(".dropdown li");
$.each($dropli,function(){
  $(this).click(function(){
    var span=$(this).children(":last-child()").text();
    $dropspan.html(span)
  })
})