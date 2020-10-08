import { connect } from "mongoose";

export const connectToDb = async () => {
  try {
    await connect("mongodb://localhost:27017/mongo-exercises", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
