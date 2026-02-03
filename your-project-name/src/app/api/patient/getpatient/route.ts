import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Patient from "@/models/patient";

export async function GET() {
  try {
    // 1. Connect to DB
    await connectToDatabase();

    // 2. Fetch patients
    const patients = await Patient.find().sort({ createdAt: -1 });

    // 3. Response
    return NextResponse.json(
      {
        message: "Patients fetched successfully",
        patients,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Get patients error:", error);

    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
