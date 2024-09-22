import mongoose from "mongoose";
import { nodeType } from "../types/node.type";

const nodeSchema = new mongoose.Schema<nodeType>(
  {
    title: {
      type: String,
      trim: true,
    },
    alias: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    version: {
      type: String,
      trim: true,
    },
    nodeAddress: {
      type: String,
      trim: true,
    },
    coinType: {
      type: String,
      trim: true,
    },
    period: {
      type: String,
      trim: true,
    },
    rewards: {
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
    startedAt: {
      type: Date,
      trim: true,
    },
    expireDate: {
      type: Date,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Nodes", nodeSchema);
