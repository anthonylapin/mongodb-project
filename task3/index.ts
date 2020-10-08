import { connectToDb } from "../common/connectDb";
import Course from "../common/Course";

async function getCourses() {
  try {
    const courses = await Course.find({
      isPublished: true,
    }).or([
      {
        price: { $gte: 15 },
      },
      {
        name: "/*.by.*/i",
      },
    ]);
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
