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
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    dataType:"json",
    success: function(data) {
      var banner=data.banner;
      var html="";
      $swiper=$(".swiper-wrapper");
      for(var a=0;a<4;a++){
        html+=`
        <div class="swiper-slide">
        <div>
          <a href="javascript:;">
            <img src="${banner[2*a].bic}" alt="" class="background">
            <img src="${banner[2*a+1].bic}" alt="" class="name ${banner[2*a].name}">
          </a>
        </div>
        </div> 
        `
      }
      $swiper.html(html);
      var html="";
      $ul=$("section ul");
      var news=data.news;
      for(var n of news){
        html+=`
        <li>
          <div class="cart">
            <div class="cart-details">
              <div class="cart-img">
                <img src="${n.nic}" alt="">
              </div>
              <p class="title">《${n.title}》</p>
            </div>
          </div>
        </li>
        `
      }
      $ul.html(html);
    }
  })
})()