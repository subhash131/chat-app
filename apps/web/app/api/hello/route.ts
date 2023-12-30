import { connectDb } from "../config/db";

/* eslint-disable turbo/no-undeclared-env-vars */
export const GET = () => {
  connectDb();
  console.log(process.env.TEST);
  return Response.json("HI from server");
};
