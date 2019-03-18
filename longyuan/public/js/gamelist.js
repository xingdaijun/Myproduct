(function(){
  $.ajax({
    url:"http://localhost:5500/public/header.html",
    type:"get"
  })
  .then(res=>{
    document.getElementById("header").innerHTML=res
  });
  $.ajax({
    url:"http://localhost:3000/list",
    type:"get",
    dataType:"json",
    success: function(data) {
      var list=data.list;
      var html="";
      $ul=$("section ul");
      for( var li of list){
        html+=`
        <li>
          <a href="javascipt:;">
            <img src="${li.lic}">
            <span>《${li.name}》</span>
          </a>
        </li>
        `
      }
      $ul.html(html);
    }
  })
})()