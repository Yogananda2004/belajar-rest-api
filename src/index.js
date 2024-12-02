require("dotenv").config();
const PORT = process.env.PORT || 4000;
const express = require("express");
//latihan github
const usersRoutes = require("./routes/users.js");
const app = express();
const middlewareLogs = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

app.use(express.json());
app.use(middlewareLogs);
app.use("/asset", express.static("public/images"));
app.use("/users", usersRoutes);
// app.get("/", (req, res) => {
//   res.send("hello world");
// });
app.post("/upload", upload.single("photo"), (req, res) => {
  res.status(201).json({
    message: "upload succes",
  });
});
app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});
app.listen(PORT, () => {
  console.log(`server berjalan di PORT ${PORT}`);
});
