import { NextRequest, NextResponse } from "next/server";
import { User } from "../mongodb/models/userModel";
import { connectDb } from "../config/db";

export const GET = async (req: NextRequest) => {
  const { email } = await req.json();
  try {
    await connectDb();
    const userId = await User?.findOne({ email });
    return NextResponse.json(userId, { status: 200 });
  } catch (err) {
    return NextResponse.json("Error Occured", { status: 500 });
  }
};
