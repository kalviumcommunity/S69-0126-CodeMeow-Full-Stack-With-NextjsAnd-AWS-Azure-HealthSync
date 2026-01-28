// models/patient.ts
import mongoose, { Schema, models, model } from "mongoose";

const PatientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    medicalNotes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Patient = models.Patient || model("Patient", PatientSchema);
export default Patient;
