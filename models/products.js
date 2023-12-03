import mongoose from "mongoose";
import { Schema } from "mongoose";
import { nanoid } from "nanoid";

const ProductSchema = new Schema(
    {
        id:{
            requred:true,
            type:String,
            default: () => nanoid(7),
            index: { unique: true },
        },
        title:String,
        description:String,
        price:Number,
        category:String
    },
    {
        timestamps:true
    }
)
const Product=mongoose.models.Product||mongoose.model("Product",ProductSchema)
export default Product;
