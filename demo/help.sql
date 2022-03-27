/*
 Navicat Premium Data Transfer

 Source Server         : lyp
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : help

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 27/03/2022 13:52:03
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `idcard` varchar(18) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES (1, '1', '18879827237', '123456', '123');
INSERT INTO `register` VALUES (2, '1', '1', '1', '1');
INSERT INTO `register` VALUES (10, '1www', 'asdfffg', 'sahjbdewyu', '123456');
INSERT INTO `register` VALUES (16, '陆陆', '18879827237', '360222', 'luyuping.');
INSERT INTO `register` VALUES (20, 'xx', '18879827237', '1234', '1234');
INSERT INTO `register` VALUES (21, '小陆', '13155765416', '3602**200103076823', '123456a');
INSERT INTO `register` VALUES (22, '小小', '18879827237', '360222***', 'asd123');
INSERT INTO `register` VALUES (23, '强哥', '18870072897', '360*8****', '123456');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `uptime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `downtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `money` int(0) NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` int(0) NOT NULL,
  `style` varchar(2) CHARACTER SET swe7 COLLATE swe7_swedish_ci NULL DEFAULT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of task
-- ----------------------------
INSERT INTO `task` VALUES (1, '带书', '中午去班上帮拿一本思政课本。', '2022/3/28 12.00', '2022/3/28 14.00', 6, '13155765416', 12, NULL, '/images/g1.jpg');
INSERT INTO `task` VALUES (2, '扔垃圾', 'E2607，帮扔垃圾一袋。', '2022/3/28 12.00', '2022/3/28 14.00', 1, '18879827237', 1, NULL, '/images/g2.jpg');
INSERT INTO `task` VALUES (8, '带早点', '带一个炸酱饼去E2607。', '2022/3/27 9.00 ', '2022/3/27 10.00 ', 2, '18879827237', 2, NULL, '/images/g3.jpg');
INSERT INTO `task` VALUES (9, '借伞', '创客大厦急需借用一把伞，一小时后归还。', '2022/3/27 12.50', '2022/3/27 13.50', 2, '13155765416', 1, NULL, '/images/g4.jpg');
INSERT INTO `task` VALUES (14, '带一杯奶茶', '送一杯奶茶到E2607,小陆收', '2022/3/27 12.50', '2022/3/27 13.50', 1, '18879827237', 1, NULL, '/images/g6.jpg');
INSERT INTO `task` VALUES (15, '带饭', '带饭到b8 301', '2022/3/27 13.37', '2022/3/27 13.57', 12, '18879827237', 1, NULL, '/images/g4.jpg');

-- ----------------------------
-- Table structure for touch
-- ----------------------------
DROP TABLE IF EXISTS `touch`;
CREATE TABLE `touch`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `refer` varchar(2) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of touch
-- ----------------------------
INSERT INTO `touch` VALUES (1, '小陆', '设置里面有一个bug', '2022/3/23', '13155765416', '1', '是');
INSERT INTO `touch` VALUES (5, '小陆', '举报陆陆，恶意接单', '2022/3/23', '13155765416', 'qqqer', '是');
INSERT INTO `touch` VALUES (6, '头像不可以更改', '我的头像不能更改', '2022/3/37 13.06', '13155765416', '1', '是');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
