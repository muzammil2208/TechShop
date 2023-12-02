import mongoose from "mongoose";

const connectMongo=async()=>{
    try{
        mongoose.connect(process.env.mongodburi)
        console.log("database connected")
    }
    catch(error)
    {
        console.log("not able to connect to database due to some error")
    }
}

export default connectMongo;