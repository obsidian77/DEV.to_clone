const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const userApi = require("./routes/user.route");
const PORT = 9001;
const app = express();
const blogApi = require("./routes/blog.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb+srv://obsidian77:yZikhosdznlkeVOU@cluster0.htvegyg.mongodb.net/NODE-API?retryWrites=true&w=majority")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api/v1", userApi);
app.use("/api/v1", blogApi);


app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
