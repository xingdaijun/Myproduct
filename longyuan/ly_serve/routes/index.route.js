const express=require("express");
const router=express.Router();
const pool=require("../pool");
//功能一：获取首页图片
router.get("/",(req,res)=>{
  var output={
    banner:{},
    news:{}
  };
  var sql=`select * from ly_banner`;
  pool.query(sql,(err,result)=>{
    if(err) console.log(err);
    output.banner=result;
    if(result.length!=0){
      var sql=`select * from ly_news`;
      pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        output.news=result;
        res.write(JSON.stringify(output));
        res.end();
      })
    }else{
      res.write(JSON.stringify(output));
      res.end();
    }
  })
})
module.exports=router;