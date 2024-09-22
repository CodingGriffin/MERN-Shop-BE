import mongoose from "mongoose";
import { nodeType } from "../types/node.type";

const nodeSchema = new mongoose.Schema<nodeType>(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    ipAddress: {
      type: String,
      trim: true,
    },
    period: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    lastPaidAt: {
      type: Date,
      trim: true,
    },
    nextPaidDate: {
      type: Date,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Nodes", nodeSchema);
