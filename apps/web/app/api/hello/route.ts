/* eslint-disable turbo/no-undeclared-env-vars */
export const GET = () => {
  console.log(process.env.TEST);
  return Response.json("HI from server");
};
