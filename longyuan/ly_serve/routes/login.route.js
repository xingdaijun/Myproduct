const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.post("/logins",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql="SELECT * FROM ly_user WHERE uname = ? AND upwd =?"
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码错误"})
    }else{
      res.send({code:1,msg:"登录成功"})
    }
  })
});
module.exports=router;