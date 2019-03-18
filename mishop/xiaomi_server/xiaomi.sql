#丢弃数据库，如果有的话
SET NAMES UTF8;
DROP DATABASE IF EXISTS xiaomi;
#创建新的数据库
CREATE DATABASE xiaomi CHARSET=UTF8;
#进入数据库
USE xiaomi;
#创建数据表
#用户表
CREATE TABLE xm_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,             #编号
  uname VARCHAR(12),      #用户名
  upwd VARCHAR(25),       #密码
  phone VARCHAR(11)       #电话号码
);
INSERT INTO xm_user VALUES(1,"tom",md5("123465"),13333664488);
#商品表
CREATE TABLE xm_laptopfloor(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(24),
  subtitle VARCHAR(128),
  price INT,
  lic VARCHAR(128)
);
INSERT INTO xm_laptopfloor VALUES
  (null,"小米8 青春版 4GB+64GB","潮流镜面渐变色，2400万自拍旗舰",1399,"../public/img/index/pms_1537356460.6227958!220x220.png"),
  (null,"小米8 屏幕指纹版 8GB+128GB","全球首款压感屏幕指纹 双频GPS超精准定位",3599,"../public/img/index/pms_1527684990.93616987!220x220.jpg"),
  (null,"小米8 SE 4GB+64GB","AI 超感光双摄，三星 AMOLED 屏幕",1799,"../public/img/index/pms_1528719461.20891365!220x220.jpg"),
  (null,"小米MIX 2S 8GB+256GB","骁龙845 年度旗舰处理器艺术品般陶瓷机身",3399,"../public/img/index/pms_1522034061.12391230!220x220.jpg"),
  (null,"小米6X 6GB+128GB","轻薄美观的拍照手机",1399,"../public/img/index/pms_1524621350.77238418!220x220.jpg"),
  (null,"小米Max 3 4GB+64GB","大屏大电量 震撼视界",1599,"../public/img/index/pms_1531878001.22998509!220x220.jpg"),
  (null,"红米6 Pro 4GB+64GB","不足千元的全面屏",999,"../public/img/index/pms_1529635815.88254264!220x220.jpg"),
  (null,"红米6A 2GB+16GB","好用好看好用不贵",599,"../public/img/index/pms_1528719461.20891365!220x220.jpg"),
  (null,"小米电视4S 75英寸","超薄人工智能语音电视",7999,"../public/img/index/pms_1542712545.6051427!220x220.jpg"),
  (null,"小米电视4A 43英寸青春版","全高清屏 / 人工智能语音",1399,"../public/img/index/pms_1524883847.49276938!220x220.jpg"),
  (null,"15.6寸 笔记本 i5 4G MX110",null,3499,"../public/img/index/xmad_15350951136177_QUuVm.png"),
  (null,"13.3寸 小米笔记本Air 四核i7 8G256G MX150 银色",null,5999,"../public/img/index/pms_1524636075.71677607!220x220.jpg"),
  (null,"米家空气净化器Pro","OLED 显示屏幕 / 激光颗粒物传感器",1499,"../public/img/index/xmad_14972549116226_tZpod.png
  "),
  (null,"米家电水壶","一杯水，是一家人的安心",99,"../public/img/index/pms_1504498936.11861982!220x220.jpg"),
  (null,"米家LED吸顶灯","用光线，还原理想生活",399,"../public/img/index/xmad_15281923207128_rOfDp.png"),
  (null,"小米净水器（厨下式）",null,1999,"../public/img/index/pms_1521634907.16181074!220x220.jpg"),
  (null,"米家电动剃须刀 黑色","剃得干净，剃得快",199,"../public/img/index/220.png"),
  (null,"米家电动剃须刀 黑色","剃得干净，剃得快",199,"../public/img/index/220.png"),
  (null,"米家电动剃须刀 黑色","剃得干净，剃得快",199,"../public/img/index/220.png"),
  (null,"米家电动剃须刀 黑色","剃得干净，剃得快",199,"../public/img/index/220.png"),
  (null,"小米蓝牙耳机青春版 黑色 黑色","6.5 克轻巧，高清通话音质",59,"../public/img/index/4.png"),
  (null,"小米蓝牙耳机青春版 黑色 黑色","6.5 克轻巧，高清通话音质",59,"../public/img/index/4.png"),
  (null,"小米蓝牙耳机青春版 黑色 黑色","6.5 克轻巧，高清通话音质",59,"../public/img/index/4.png"),
  (null,"小米蓝牙耳机青春版 黑色 黑色","6.5 克轻巧，高清通话音质",59,"../public/img/index/4.png"),
  (null,"Amazfit智能运动手表2 黑色","陶瓷表圈，50米防水",999,"../public/img/index/214.png"),
  (null,"Amazfit智能运动手表2 黑色","陶瓷表圈，50米防水",999,"../public/img/index/214.png"),
  (null,"Amazfit智能运动手表2 黑色","陶瓷表圈，50米防水",999,"../public/img/index/214.png"),
  (null,"Amazfit智能运动手表2 黑色","陶瓷表圈，50米防水",999,"../public/img/index/214.png");
CREATE TABLE xm_bannerPic(
  bid  INT PRIMARY KEY AUTO_INCREMENT,
  family VARCHAR(12),
  bic VARCHAR(128)
);
INSERT INTO xm_bannerPic VALUES
  (null,"轮播图","../public/img/index/xmad_15427942125674_JlLUW.jpg"),
  (null,"轮播图","../public/img/index/xmad_15402884393036_KqnCH.jpg"),
  (null,"轮播图","../public/img/index/xmad_15435597497649_Bvpmg.jpg"),
  (null,"轮播图","../public/img/index/xmad_15419444592813_JwZlv.jpg"),
  (null,"静态广告","../public/img/index/xmad_15381015124677_QcEGp.jpg"),
  (null,"静态广告","../public/img/index/xmad_15410029988871_TdzPQ.jpg"),
  (null,"静态广告","../public/img/index/xmad_15216851889979_XatQS.jpg");
CREATE TABLE xm_nav(
  pid  INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(12),
  nic VARCHAR(128)
);
INSERT INTO xm_nav VALUES
  (null,"小米MIX 3","../public/img/index/mix3-80.png"),
  (null,"小米max 3","../public/img/index/max3-80-80.png"),
  (null,"红米 6A","../public/img/index/6AAAA.png"),
  (null,"小米8屏幕指纹版","../public/img/index/pingmu-80.png"),
  (null,"小米8","../public/img/index/m8-80.png"),
  (null,"小米8青春版","../public/img/index/pingmu-80.png"),
  (null,"小米SE","../public/img/index/m8se-80.png"),
  (null,"红米6 pro","../public/img/index/6pro140-140.png"),
  (null,"小米6x","../public/img/index/6x.jpg"),
  (null,"红米6","../public/img/index/666666.png"),
  (null,"黑鲨游戏手机 Hello","../public/img/index/heishahelo-80.png"),
  (null,"黑鲨游戏手机","../public/img/index/heisha-80.png"),
  (null,"红米note5","../public/img/index/note5-80-80.png"),
  (null,"小米MIX 2s","../public/img/index/mix2s80-80white.png"),
  (null,"移动4G+专区","../public/img/index/4g.jpg"),
  (null,"对比手机","../public/img/index/compare.jpg"),
  (null,"米粉卡","../public/img/index/mifenka-1.jpg"),
  (null,"小米移动 电话卡","../public/img/index/mimobile.jpg"),
  (null,"手机上门维修","../public/img/index/weixiu80-80.png"),
  (null,"云服务空间月卡","../public/img/index/yunfuwu.jpg");

CREATE TABLE xm_floorbanner(
  fic VARCHAR(128)
);
INSERT INTO  xm_floorbanner VALUES
  ("../public/img/index/xmad_15407792204208_jtrJc.jpg"),
  ("../public/img/index/xmad_15232433421155_vCzhJ.jpg"),
  ("../public/img/index/xmad_15123939053142_dFlAw.jpg");
CREATE TABLE xm_floorfooter(
  footerPic VARCHAR(128)
);
INSERT INTO xm_floorfooter VALUES
  ("../public/img/index/xma_hengfu1.jpg"),
  ("../public/img/index/xmad_hengfu2.jpg"),
  ("../public/img/index/xmad_hengfu3.jpg"),
  ("../public/img/index/xmad_hengfu4.jpg"),
  ("../public/img/index/xmad_hengfu5.jpg"),
  ("../public/img/index/xmad_hengfu6.jpg");
CREATE table xm_reputable(
  ric VARCHAR(128),
  evaluate VARCHAR(128),
  author VARCHAR(32),
  title VARCHAR(32),
  price INT
);
INSERT INTO xm_reputable VALUES   
  ("../public/img/index/xmad_15094337975564_BSRIq.jpg","外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...","来自于 酸小妞～！ 的评价"," 米家车载空气净化器（USB车充版） 灰色",449),
  ("../public/img/index/032d0ff1-f77f-4830-a469-f3564d55e0c5.jpg","非常可爱，一拿到小宝宝还没享受，一帮大宝宝先high了一把，同事也想买，希望早点大卖"," 来自于 秘密 的评价 ","米兔智能故事机","199"),
  ("../public/img/index/97d80b35-152e-4934-af34-402251458e16.jpg","非常好用，孩子使用防止沉迷于电话影响学习。做工很好，定位基本准确，通话清晰。如果加入时间显示就更完美..."," 来自于 178576259 的评价 ","米兔定位电话",169);
CREATE table xm_video(
  vic VARCHAR(128),
  title VARCHAR(16),
  subtitle VARCHAR(32)
);
INSERT INTO xm_video VALUES
  ("../public/img/index/xmad_15318974928021_cthgC.jpg","一团火","小米创业8年内部纪录片（手机篇）"),
  ("../public/img/index/xmad_15278351912522_frJQc.jpg","小米8，一部与众不同的手机","透明探索版，将科技与美学完美结合"),
  ("../public/img/index/xmad_15278359339164_dDTJC.jpg","小米MIX 2S，一面科技 一面艺术","艺术品般陶瓷机身，惊艳、璀璨"),
  ("../public/img/index/xmad_15278358912266_LDHfI.jpg","生活中无所不在的小爱同学","一句话搞定手机复杂操作");








