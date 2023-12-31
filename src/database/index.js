import mongoose from " mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("MongoDB is Connected!");
  } catch (e) {
    console.log(e);
  }
};
export default connectToDB;
