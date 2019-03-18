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
    success:function(data){
      // 轮播图
      var banner=data.banner;
      $banner=$(".banner-ul");
      var html="";
      for(var bid=0;bid<4;bid++){
        html+=` 
        <li>
          <a href="javascript:;"><img src="${banner[bid].bic}"></a>
        </li>`
      };
      $banner.html(html);
      //静态广告
      var html="";
      var $rightstaticbanner=$(".right-static-banner ul");
      for(var b=4;b<banner.length;b++){
        html+=`
        <li>
          <a href="javascript:;">
              <img src="${banner[b].bic}">
          </a>
        </li>
        `
      }
      $rightstaticbanner.html(html);
      // 侧边栏
      var nav=data.nav;
      $ounav=$(".dropright ul:even");
      var html="";
      for(var i=0;i<nav.length;i++){
        html+= 
        `<li>
          <a href="javascript:;">
              <img src="${nav[i].nic}">
              <span>${nav[i].title}</span>
          </a>
        </li>
        `
      }
      $ounav.html(html);
      var html="";
      $jinav=$(".dropright ul:odd");
      for(var a=19;a>=0;a--){
        html+= 
        `<li>
          <a href="javascript:;">
              <img src="${nav[a].nic}">
              <span>${nav[a].title}</span>
          </a>
        </li>
        `
      }
      $jinav.html(html);
    //闪购商品详情
      var html="";
      $Flash=$(".Flash-purchase-list ul");
      var laptopfloor=data.floor;
      for(var F=16;F<laptopfloor.length;F++){
        html+=`
          <li class="content">
            <a href="javascript:;"><img src="${laptopfloor[F].lic}" alt=""></a>
            <h3>${laptopfloor[F].title}</h3>
            <p class="desc">${laptopfloor[F].subtitle}</p>
            <p class="price">
                <span>9.9元</span>
                <del>${laptopfloor[F].price}</del>
            </p>
          </li>
        `
        $Flash.html(html)
      }
    //手机楼层
      var html="";
      $phone=$(".floor-phone .right-banner ul")
      for(var p=0;p<8;p++){
        html+=`
          <li class="content">
            <div>新品</div>
            <a href="http://127.0.0.1:5500/public/product_details.html" target="_blank"><img src="${laptopfloor[p].lic}" alt=""></a>
            <a class="product-name"href="javascript:;">${laptopfloor[p].title}</a>
            <p class="desc">${laptopfloor[p].subtitle}</p>
            <p class="price"><span>${laptopfloor[p].price}元</span></p>
          </li>      
        `
      }
      $phone.html(html);
      var html="";
      var floorpic=data.floorpic;
      $otherfloor=$(".other-floor");
      var floor=["家电","智能","搭配","配件","周边"];
      for(var f of floor){
        html+=`
        <div class="floor floor-household">
          <div class="floor-top">
              <h2>${f}</h2>
              <div class="top-nav">
                  <ul>
                      <li><a href="javascript:;">热门</a></li>
                      <li><a href="javascript:;">电视影音</a></li>
                      <li><a href="javascript:;">电脑</a></li>
                      <li><a href="javascript:;">家居</a></li>
                  </ul>
              </div>
          </div>
          <div class="floor-body">
              <div class="left-banner">
                  <ul>
                      <li>
                          <a href="javascript:;">
                              <img src="${floorpic[1].fic}">
                          </a>
                      </li>
                      <li>
                          <a href="javascript:;">
                              <img src="${floorpic[2].fic}">
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="right-banner">
                <ul> 
                </ul>
              </div>
            </div>
        </div>`
      }
      $otherfloor.html(html)
      //楼层商品详情
      var html="";
      var $floordetails=$(".floor-household .right-banner ul");
      for(d=8;d<15;d++){
        html+=`
        <li class="content">
          <div>新品</div>
            <a href="http://127.0.0.1:5500/public/product_details.html" target="_blank"><img src="${laptopfloor[d].lic}" alt=""></a>
          <a class="product-name"href="javascript:;">${laptopfloor[d].title}</a>
          <p class="desc">${laptopfloor[d].subtitle}</p>
          <p class="price"><span>${laptopfloor[d].price}元</span></p>
          <div class="comment">
              <a href="javascript:;">
                  <span class="review">已安装好了，是不是很气派</span>
                  <span class="author"> 来自于 孙李 的评价 </span>
              </a>
          </div>
        </li>
        `
      }
      $floordetails.html(html)
      //楼层最后一个商品
      var html="";
      html+=`
      <li class="content last-content">
      <span class="last-content-top">
          <h3><a href="javascript:;">${laptopfloor[15].title}</a></h3>
          <p class="price"><span>${laptopfloor[15].price}元</span></p>
          <img src="${laptopfloor[15].lic}" alt="">
      </span>
      </li>
      <li class="content last-content ">
          <span class="last-content-top last-content-bottom">
              <h3><a href="javascript:;">浏览更多</a></h3>
              <p class="price">热门</p>
              <img class="arrow-right" src="./img/index/youjiantou.png" alt="">
          </span>
      </li> 
      `
      $floordetails.append(html);
      var html="";
      var $floorbanner=$(".floor-phone,.floor-household")
      var footer=data.footer;
      for(var footerpic=0;footerpic<floor.length;footerpic++){
        html=`
        <div class="floor-footer">
          <a href="javascript:;">
              <img src="${footer[footerpic].footerPic}" alt="">
          </a>
          </div>
        `
        $.each($floorbanner,function(){
          if($(this).index()==footerpic){
            $(this).append(html)
          }
        })
      } 
      //热评
      var html="";
      var $reputable=$(".Reputable-goods div ul");
      var reping=data.reputable
      for(var re of reping){
        html+=`
        <li>
          <a href="javascript:;">
              <img src="${re.ric}" alt="">
          </a>
          <a class="evaluate" href="javascript:;">${re.evaluate}</a>
          <p>来自于 田密 的评价</p>
          <div class="info">
              <h3>
                  ${re.title}
              </h3>
              <span>|</span>
              <p class="price">${re.price}元</p>
          </div>
        </li>
        `
      }
      $reputable.html(html);
      var html="";
      var $video=$(".video-body ul");
      var videodetails=data.video;
      for(var v of videodetails){
        html+=`
        <li class="video-content">
          <a href="javascript:;">
              <img src="${v.vic}" alt="">
          </a>
          <h3>${v.title}</h3>
          <p class="desc">${v.subtitle}</p>
          <a href="javascript:;"  class="start">
              <img src="./img/index/shipinbofang.png" alt="">
          </a>
        </li>
        `
      }
      $video.html(html)
    }
  })
//1.轮播图
  //左右箭头上下张
  var $img=$(".banner-ul");
  var $btnprev=$(".banner>a.arrow-left");
  var $btnnext=$(".banner>a.arrow-right")
  var n=0; 
  /*上一张*/
  $btnprev.click(function(){
    if(n!=0){
      n++;
    }else{
      n=-3
    }
    $img.css("margin-left",`${n*1226}px`)
    bang()
  });
   /*下一张*/
  function next(){
    if(n!=-3){
      n--;
    }else{
      n=0;
    }
    $img.css("margin-left",`${n*1226}px`);
    bang();
  }
  $btnnext.click(next);
  /*自动轮播*/
  var timea=setInterval(next,3000)
   var $btn=$(".banner-circle>li,.banner>a");
   $btn.hover(function(){
     clearInterval(timea);
   },
   function(){
    timea=setInterval(next,3000)
   })
   /*原点控制图片显示 */
  var $circle=$(".banner-circle li");
  $.each($circle,function(){
    $(this).click(function(){
      var i=$(this).index();
      $img.css("margin-left",`${-i*1226}px`)
      $(this).addClass("active").
      siblings().removeClass("active");
    }) 
  })
  function bang(){
    $.each($circle,function(){
      if($(this).text()==n*-1){
        $(this).addClass("active")
      }else{
        $(this).removeClass("active")
      }
    })
  }
//2.侧边栏
var $dropright=$(".dropright");
var $droprightul=$("dropright ul")
$.each($dropright,function(){
  $(this).hover(
    function(){
    $droprightul.css("display","block")
    },
    function(){
      $droprightul.css("display","none")
    }
  )
})
//3.闪购
 //计时器
 var $chang=$(".time-title");
 var $minutes=$(".minutes");
 var $hours=$(".hours");
 var $secound=$(".secound");
 function dao(){
    var now=new Date();
    var miao=60*60*2;
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var secound=now.getSeconds()
    var chang=parseInt(hours/2)*2;
    var daohours=Math.floor(dao/3600);
    var dao=miao-3600-secound;
    if(hours==chang+1){
      daohours=0;
    }else{
      daohours=1;
    }
    var daomin=parseInt((dao-minutes*60)/60);
    var daosec=dao-daomin*60-minutes*60;
    $hours.html(daohours);
    $minutes.html(daomin);
    $secound.html(daosec);
    $chang.html(`${chang}:00 场`);
    return `${daohours},${daomin},${daosec}`;
}
 var timeb=setInterval(function(){
    var daojishi=dao();
    if(daojishi=="0,0,0"){
      dao();
    }
 },1000)
 //轮播图
 var $Flash=$(".Flash-purchase-list ul");
  var $btnleft=$(".Arrow .left");
  var $btnright=$(".Arrow .right")
  var m=0; 
  /*上一张*/
  $btnleft.click(function(){
    if(m!=0){
      m++;
    }else{
      m=-2
    }
    $Flash.css("margin-left",`${m*992}px`)
  });
   /*下一张*/
  function right(){
    if(m!=-2){
      m--;
    }else{
      m=0;
    }
    $Flash.css("margin-left",`${m*992}px`);
  }
  $btnright.click(right);
  /*自动轮播*/
  var timec=setInterval(right,3000)
   var $Flashbtn=$(".Arrow,.Flash-purchase-list>.content");
   $Flashbtn.hover(function(){
     clearInterval(timec);
   },
   function(){
    timec=setInterval(right,3000)
   })
//楼层
//下浮
  setTimeout(function(){
  var  $content=$(".floor-household .content");
  $.each($content,function(){
    $(this).hover(
      function(){
        $(this).addClass("active");
      },
      function(){
        $(this).removeClass("active");
      }
    )
  })
  },1000)
})()
