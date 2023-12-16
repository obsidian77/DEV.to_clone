const express = require("express");
const Blog = require("../model/blog.model");
const router = express.Router();

router.get("/blogs", async (req, res, next) => {
  try {
    const result = await Blog.find({}, { __v: 0 });
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});
router.get("/blogs:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Blog.findById(id);
    // const result = await Blog.findOne({ _id: id });
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});
router.post("/blogs", async (req, res, next) => {
  /*  const newBlog = new Blog({
    title: req.body.title,
    description: req.body.description,
  });
  newBlog
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => console.log(err)); */
  try {
    const newBlog = new Blog(req.body);
    const resp = await newBlog.save();
    res.send(resp);
    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
});
router.put("/blogs:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateBlog = req.body;
    const result = await Blog.findByIdAndUpdate(id, updateBlog, { new: true });
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
});
router.delete("/blogs:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Blog.findByIdAndDelete(id);
    res.send(result);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
