import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRecord extends Document {
  patient: mongoose.Types.ObjectId;
  patientName?: string;

  visitDate: Date;
  visitType: string;

  symptoms: string;
  diagnosis: string;
  prescription: string;
  doctorNotes?: string;

  status: "pending" | "completed" | "cancelled";

  createdAt: Date;
  updatedAt: Date;
}

const RecordSchema: Schema<IRecord> = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    patientName: {
      type: String,
      trim: true,
    },

    visitDate: {
      type: Date,
      required: true,
    },

    visitType: {
      type: String,
      required: true,
      enum: ["Checkup", "Follow-up", "Emergency", "Consultation"],
    },

    symptoms: {
      type: String,
      required: true,
      trim: true,
    },

    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },

    prescription: {
      type: String,
      required: true,
      trim: true,
    },

    doctorNotes: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Record: Model<IRecord> =
  mongoose.models.Record || mongoose.model<IRecord>("Record", RecordSchema);

export default Record;
