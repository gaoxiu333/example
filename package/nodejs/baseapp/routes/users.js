// 路由指南：https://expressjs.com/en/guide/routing.html

const express = require("express");
const router = express.Router();
console.log("user router start");
router.get("/users", (req, res) => {
  res.send("users");
});

router.post("/", (req, res) => {
  res.send("Got a POST request");
});

// router.put
// router.delete
// ... more

// 特殊路由 all
// router.all("/user", (_, __, next) => {
// });
// 路由参数 :userId/book/:bookId
router.get("/user/:userId/book/:bookId", (req, res, next) => {
  const { userId, bookId } = req.params;
  res.send(req.params);
});

module.exports = router;
/**
 * 
 * 疑问：
 * next() 方法
 * 中间件
 */
