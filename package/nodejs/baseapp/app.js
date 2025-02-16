const express = require("express");
const usersRouter = require('./routes/users')
const handleRouter = require('./routes/handle')
const app = express();
const port = 3001;

// 静态文件
app.use(express.static("public"));
app.use('/',usersRouter);
app.use('/',handleRouter)

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log("App start on:", port);
});
