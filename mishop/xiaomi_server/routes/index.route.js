const express=require("express");
const router=express.Router();
const pool=require("../pool");
//功能一：获取导航栏图片内容
router.get("/",(req,res)=>{
  var output={
    nav:{},
    banner:{},
    floor:{}
  };
  var sql=`select * from xm_nav`;
  pool.query(sql,(err,result)=>{
    if(err) console.log(err);
    output.nav=result;
    if(result.length!=0){
      var sql=`select * from xm_bannerpic`;
      pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        output.banner=result;
        if(result.length!=0){
          var sql=`select * from xm_laptopfloor`;
          pool.query(sql,(err,result)=>{
            if(err) console.log(err);
            output.floor=result;
            if(result.length!=0){
              var sql=`select * from xm_floorbanner`;
              pool.query(sql,(err,result)=>{
                if(err) console.log(err);
                output.floorpic=result;
                if(result.length!=0){
                  var sql=`select * from xm_floorfooter`;
                  pool.query(sql,(err,result)=>{
                    if(err) console.log(err);
                    output.footer=result;
                    if(result.length!=0){
                      var sql=`select * from xm_reputable`;
                      pool.query(sql,(err,result)=>{
                        if(err) console.log(err);
                        output.reputable=result;
                        if(result.length!=0){
                          var sql=`select * from xm_video`;
                          pool.query(sql,(err,result)=>{
                            if(err) console.log(err);
                            output.video=result;
                            res.write(JSON.stringify(output));
                            res.end();
                          })
                        }else{
                          res.write(JSON.stringify(output));
                          res.end();
                        }
                      })
                    }else{
                      res.write(JSON.stringify(output));
                      res.end();
                    }
                  })
                }else{
                res.write(JSON.stringify(output));
                res.end();
                }
              }) 
            }else{
              res.write(JSON.stringify(output));
              res.end();
            }
          })
        }else{
          res.write(JSON.stringify(output));
          res.end();
        } 
      })
    }else{
      res.write(JSON.stringify(output));
      res.end();
    }
  })
});
module.exports=router;