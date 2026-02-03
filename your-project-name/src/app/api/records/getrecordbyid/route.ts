import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";
import Record from "@/models/records";

export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const patientId = searchParams.get("id");

    if (!patientId) {
      return NextResponse.json(
        { message: "Patient ID is required" },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return NextResponse.json(
        { message: "Invalid patient ID" },
        { status: 400 }
      );
    }

    // ✅ Fetch ALL records of this patient
    const records = await Record.find({ patient: patientId })
      .sort({ visitDate: -1 }); // latest first

    return NextResponse.json(
      {
        message: "Patient records fetched successfully",
        totalRecords: records.length,
        records,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Get records error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
