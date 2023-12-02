import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema(
    {
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
