import mongoose,{Schema} from mongoose;
import { nanoid } from "nanoid";
import { ProductSchema } from "./products";

const orderSchema=new Schema({
    id:{
        required:true,
        type:String,
        default: () => nanoid(7),
        index: { unique: true },
    },
    customerName:String,
    products:[ProductSchema]
})
 
const orders=mongoose.models.orders||mongoose.model("orders",orderSchema)
export {orderSchema,orders}