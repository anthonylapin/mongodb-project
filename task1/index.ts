import Course from "./Course";
import * as mongoose from "mongoose";

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongo-exercises", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};

async function getPublishedBackendCourses() {
  try {
    const courses = await Course.find({ isPublished: true, tags: "backend" })
      .sort({ name: 1 })
      .select({ name: 1, author: 1, _id: 0 });
    return courses;
  } catch (error) {
    throw new Error(error);
  }
}

async function main() {
  try {
    await connectToDb();

    const courses = await getPublishedBackendCourses();
    console.log(courses);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
