var shop=setTimeout(function(){
  $shopCar=$("#shop-car");
  $shopCardrop=$(".shop-car-dropdown")
  $shopCar.hover(function(){
    $shopCardrop.css("visibility","visible")
  },function(){
    $shopCardrop.css("visibility","hidden")
    }
  )
},1000)
