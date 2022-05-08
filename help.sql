/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80011
 Source Host           : localhost:3306
 Source Schema         : help

 Target Server Type    : MySQL
 Target Server Version : 80011
 File Encoding         : 65001

 Date: 03/05/2022 13:07:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES (1, '18879827237', '123');
INSERT INTO `register` VALUES (16, '18879827237', 'luyuping.');
INSERT INTO `register` VALUES (20, '18879827237', '1234');
INSERT INTO `register` VALUES (21, '13155765416', '123456a');
INSERT INTO `register` VALUES (22, '18879827999', 'asd123');
INSERT INTO `register` VALUES (32, '1231', '231');
INSERT INTO `register` VALUES (33, 'admin', '123456');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uptime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `downtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `money` int(11) NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` int(11) NOT NULL,
  `style` varchar(2) CHARACTER SET swe7 COLLATE swe7_swedish_ci NULL DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES (1, '带书', '中午去班上帮拿一本六级词汇。', '2022/4/18 12.00', '2022/4/18 14.00', 6, '13155765416', 12, NULL, '/images/2.jpg');
INSERT INTO `task` VALUES (2, '扔垃圾', 'E2607，帮扔垃圾一袋。', '2022/4/18 12.00', '2022/4/18 14.00', 1, '18879827237', 5, NULL, '/images/4.jpg');
INSERT INTO `task` VALUES (8, '带早点', '带一个炸酱饼去E2607。', '2022/4/18 9.00 ', '2022/4/18  10.00 ', 2, '18879827237', 4, NULL, '/images/6.jpg');
INSERT INTO `task` VALUES (9, '借伞', '创客大厦急需借用一把伞，一小时后归还。', '2022/4/18 12.50', '2022/4/18  13.50', 2, '13155765416', 3, NULL, '/images/1.jpg');
INSERT INTO `task` VALUES (14, '带奶茶', '送一杯奶茶到E2607,小陆收', '2022/4/18 12.50', '2022/4/18  13.50', 1, '18879827237', 2, NULL, '/images/5.jpg');
INSERT INTO `task` VALUES (15, '带饭', '带饭到b8 301', '2022/4/18 13.37', '2022/4/18  13.57', 12, '18879827237', 1, NULL, '/images/3.jpg');
INSERT INTO `task` VALUES (17, '带过桥米线', '带一个米线到607', '2022/4/18 11.30', '2022/4/18 12：30', 11, '18720095772', 2, NULL, '/images/7.jpg');

-- ----------------------------
-- Table structure for touch
-- ----------------------------
DROP TABLE IF EXISTS `touch`;
CREATE TABLE `touch`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `refer` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of touch
-- ----------------------------
INSERT INTO `touch` VALUES (1, '小陆', '设置里面有一个bug', '2022/3/23', '13155765416', '1', '是');
INSERT INTO `touch` VALUES (5, '小陆', '举报陆陆，恶意接单', '2022/3/23', '13155765416', 'qqqer', '是');
INSERT INTO `touch` VALUES (6, '头像不可以更改', '我的头像不能更改', '2022/3/37 13.06', '13155765416', '1', '是');
INSERT INTO `touch` VALUES (8, '我头像不能修改', '头像不能修改', '2022/4/18 11：34', '18720095772', '2', '否');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, NULL, '111', '123', '1', '123');

SET FOREIGN_KEY_CHECKS = 1;
