import mongoose, { Schema, models, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: "doctor" | "admin" | "staff";
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["doctor", "admin", "staff"],
      default: "doctor",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

// Prevent model overwrite during hot reload
const User = models.User || model<IUser>("User", UserSchema);

export default User;
