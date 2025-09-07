import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // optional for OAuth
    uid: { type: String, unique: true, sparse: true }, // optional
    photoURL: { type: String }, // optional
    provider: { type: String, default: "local" }, // "google", "facebook", etc.
    extraData: { type: mongoose.Schema.Types.Mixed }, // store any extra info
  },
  { timestamps: true }
);


export default mongoose.model("User", userSchema);
