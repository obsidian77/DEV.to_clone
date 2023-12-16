const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter the title for your post"]
  },
  description: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },  
},
{
    timestamps:true
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
