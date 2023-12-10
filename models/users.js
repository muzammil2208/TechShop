
import mongoose from "mongoose";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";
import { orderSchema } from "./order";

const userSchema=new Schema({
    
        id:{
            requred:true,
            type:String,
            default: () => nanoid(7),
            index: { unique: true },
        },
        name:{
            type:String,
            required:true
        },
        email:{type:String,required:true},
        orders:[orderSchema],
        address:String,
    }
    ,
    {
        timestamps:true
    }
)

const users=mongoose.models.users||mongoose.model("users",userSchema)
export {users,userSchema}