import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.nextTick.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch {
    console.log(error);
  }
};

export default connectMongoDB;
