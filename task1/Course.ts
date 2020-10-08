import * as mongoose from "mongoose";

const coursesSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
  date: Date,
  tags: [String],
});

export default mongoose.model("Course", coursesSchema);
