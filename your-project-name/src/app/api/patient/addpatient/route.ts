import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Patient from "@/models/patient";

export async function POST(req: Request) {
  try {
    // 1. Read body
    const body = await req.json();
    const { name, age, gender, phone, address, medicalNotes } = body;

    // 2. Validation
    if (!name || !age || !gender || !phone || !address) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    // 3. Connect DB
    await connectToDatabase();

    // 4. Create patient
    const patient = await Patient.create({
      name,
      age,
      gender,
      phone,
      address,
      medicalNotes,
    });

    // 5. Response
    return NextResponse.json(
      {
        message: "Patient added successfully",
        patient,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Add patient error:", error);
    return NextResponse.json(
      { message: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
