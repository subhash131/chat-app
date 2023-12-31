import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { User } from "../mongodb/models/userModel";
import { connectDb } from "../config/db";

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDb();
    const res = await User!.create({
      name,
      email,
      password: hashedPassword,
      profilePic: "abcd",
    });
    console.log("res: ", res);
    return NextResponse.json(
      {
        message: "User Registered!",
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: "An error occured while registering the user",
        err,
      },
      { status: 500 }
    );
  }
};
