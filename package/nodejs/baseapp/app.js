const express = require("express");
const app = express();
const port = 3001;

// 静态文件
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log("App start on:", port);
});
