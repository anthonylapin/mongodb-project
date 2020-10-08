import { connectToDb } from "../common/connectDb";
import Course from "../common/Course";

async function getCourses() {
  try {
    const courses = await Course.find({
      tags: { $in: ["frontend", "backend"] },
      isPublished: true,
    })
      .sort({ price: -1 })
      .select({ name: 1, author: 1, _id: 0 });
    return courses;
  } catch (error) {
    throw new Error(error);
  }
}

async function main() {
  try {
    await connectToDb();
    const courses = await getCourses();
    console.log(courses);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
