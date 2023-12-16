const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const userApi = require("./routes/user.route");
const PORT = 9001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb+srv://obsidian77:yZikhosdznlkeVOU@cluster0.htvegyg.mongodb.net/NODE-API?retryWrites=true&w=majority")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api/users", userApi);


app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
