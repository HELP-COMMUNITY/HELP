/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80027
 Source Host           : localhost:3306
 Source Schema         : help

 Target Server Type    : MySQL
 Target Server Version : 80027
 File Encoding         : 65001

 Date: 12/05/2022 19:52:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 31 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES (1, '18879827237', '123');
INSERT INTO `register` VALUES (16, '18879827237', 'luyuping.');
INSERT INTO `register` VALUES (20, '18879827237', '1234');
INSERT INTO `register` VALUES (21, '13155765416', '123456a');
INSERT INTO `register` VALUES (35, 'admin', '123456');

-- ----------------------------
-- Table structure for task
-- ----------------------------
DROP TABLE IF EXISTS `task`;
CREATE TABLE `task`  (
  `id` int(0) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `downtime` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `money` int(0) NOT NULL,
  `tel` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `address` int(0) NOT NULL,
  `photo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of touch
-- ----------------------------
INSERT INTO `touch` VALUES (1, '小陆', '设置里面有一个bug', '2022/3/23', '13155765416', '1', '是');
INSERT INTO `touch` VALUES (5, '小陆', '举报陆陆，恶意接单', '2022/3/23', '13155765416', 'qqqer', '是');

SET FOREIGN_KEY_CHECKS = 1;
