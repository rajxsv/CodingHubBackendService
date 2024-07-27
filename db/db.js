import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.MONGODB_URI;

export default async function connect() {
  await mongoose
    .connect(uri)
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.error("Connection Unsuccessful\n", err));
}
