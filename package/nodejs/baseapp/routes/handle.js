const express = require("express");
const router = express.Router();

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now());
  next();
};

router.use(timeLog);

const cb0 = function (req, res, next) {
  console.log("CB0");
  next();
};

const cb1 = function (req, res, next) {
  console.log("CB1");
  next();
};

const cb2 = function (req, res) {
  res.send("Hello from C!");
};

router.get("/handle", [cb0, cb1, cb2]);
// 等价
router.get("/handle1", cb0, cb1, cb2);

module.exports = router