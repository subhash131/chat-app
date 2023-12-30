import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const con = await mongoose.connect(process.env.MONGO_URI!);
    console.log("connected to Mongo DB :: ", con.connection.host);
  } catch (err) {
    console.log("error :: ", err);
  }
};
