-- #丢弃数据库，如果有的话
SET NAMES UTF8;
DROP DATABASE IF EXISTS longyuan;
-- #创建新的数据库
CREATE DATABASE longyuan CHARSET=UTF8;
-- #进入数据库
USE longyuan;
-- #创建数据表
-- #用户表
CREATE TABLE ly_banner(
  name VARCHAR(12),
  bic VARCHAR(128)
);
INSERT INTO ly_banner VALUES(
  "one","../public/img/index/cytus_bg.jpg"),
  ("one","../public/img/index/cytus_logo.png"),
  ("two","../public/img/index/banner_sdorica_bg.jpg"),
  ("two","../public/img/index/060172944915483854498672405.png"),
  ("three","../public/img/index/banner03_bg.png"),
  ("three","../public/img/index/banner_st01_four.png"),
  ("four","../public/img/index/060165362015483096209442183.jpg"),
  ("four","../public/img/index/060158326015482392605089460.png");
CREATE TABLE ly_news(
  title VARCHAR(12),
  nic VARCHAR(128)
);
INSERT INTO ly_news VALUES(
  "迷雾大陆","../public/img/index/5a2f5295c84ad.jpg"),
  ("放学别跑","../public/img/index/5a15213ca1a46.jpg"),
  ("无名之辈","../public/img/index/58761871406dd.png"),
  ("龙渊网络设百万奖学金激励学弟学妹","../public/img/index/587618e1ce465.jpg");
CREATE TABLE ly_list(
  name VARCHAR(12),
  lic VARCHAR(128)
);
INSERT INTO ly_list VALUES(
  "万象物语","img/gamelist/5a39cde2a303e.png"),
  ("伊甸之战","img/gamelist/5a30e0797a23c.png"),
  ("聚爆Implosion","img/gamelist/5878679e81268.png"),
  ("迷雾大陆","img/gamelist/5a39cec049ce2.png"),
  ("王座争霸","img/gamelist/587c66cd2561b.png"),
  ("放学别跑","img/gamelist/5a39cfc8cefcc.png"),
  ("Cytus（音乐世界）","img/gamelist/5a38d7cb1283f.png"),
  ("Demmo","img/gamelist/587c672d578da.png"),
  ("VOZE","img/gamelist/59a7a9ecbe6b7.png"),
  ("巨龙之战","img/gamelist/587c656694960.png"),
  ("自由之战","img/gamelist/587c67a7136dc.png");
CREATE TABLE ly_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(12),
  upwd  VARCHAR(16)
);
INSERT INTO ly_user VALUES(
null, "Xing","123456");