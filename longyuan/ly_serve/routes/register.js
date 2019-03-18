const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.post("/registers",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  //var sql="INSERT INTO ly_user VALUES uname=?,";
  var sql=" INSERT INTO ly_user (uid,uname,upwd) VALUES (null, ?,?)";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows==0){
      res.send({code:-1,msg:"注册失败,用户名或密码已被占用"})
    }else{
      res.send({code:1,msg:"注册成功，3秒后跳转至登录界面"})
    }
  })
}); 
module.exports=router;