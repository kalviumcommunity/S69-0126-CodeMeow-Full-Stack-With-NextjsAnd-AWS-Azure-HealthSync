import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/db";
import Record from "@/models/records";
import Patient from "@/models/patient";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      patientId,
      visitDate,
      visitType,
      symptoms,
      diagnosis,
      prescription,
      doctorNotes,
      status,
    } = body;

    if (
      !patientId ||
      !visitDate ||
      !visitType ||
      !symptoms ||
      !diagnosis ||
      !prescription
    ) {
      return NextResponse.json(
        { message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return NextResponse.json(
        { message: "Invalid patient ID" },
        { status: 400 }
      );
    }

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    const record = await Record.create({
      patient: patient._id,
      patientName: patient.name,
      visitDate,
      visitType,
      symptoms,
      diagnosis,
      prescription,
      doctorNotes,
      status,
    });

    return NextResponse.json(
      {
        message: "Record added successfully",
        record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add record error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
