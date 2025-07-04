import mongoose from "mongoose";

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Database connected successfully!")
    } catch (error) {
      throw new Error("Connection failed!");
    }
  };
  
  export default connect;