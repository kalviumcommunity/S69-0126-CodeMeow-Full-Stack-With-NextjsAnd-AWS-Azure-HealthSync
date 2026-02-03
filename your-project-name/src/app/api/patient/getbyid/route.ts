import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Patient from "@/models/patient";
import mongoose from "mongoose";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid patient ID" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const patient = await Patient.findById(id);

    if (!patient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Patient fetched successfully",
      patient,
    });
  } catch (error) {
    console.error("Get patient by ID error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
