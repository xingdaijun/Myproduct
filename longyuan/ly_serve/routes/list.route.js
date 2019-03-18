const express=require("express");
const router=express.Router();
const pool=require("../pool");
//功能一：获取首页图片
router.get("/",(req,res)=>{
  var output={
    list:{}
  };
  var sql=`select * from ly_list`;
  pool.query(sql,(err,result)=>{
    if(err) console.log(err);
    output.list=result;
    res.write(JSON.stringify(output));
    res.end();
  })
})
module.exports=router;