//使用express构建web服务器
const express=require('express');
const bodyParser=require('body-parser');
/*引入路由模块 */
const index=require("./routes/index.route");
/*创建服务器对象 */
var app=express();
/*监听3000 */
var server=app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
/*制定静态目录 public */
app.use(express.static("public"));
/*加载跨域访问模块 */
const cors=require("cors");
//6.配置跨域访问呢模块 那个域名跨域访问允许
//脚手架8080允许
//origin    允许跨域访问域名列表
//credentials  跨域访问保存session  id
app.use(cors({
  origin:["http://127.0.0.1:5500","http://localhost:5050"],
  credentials:true
}))
/*使用路由管理器路由 */
app.use("/index",index);