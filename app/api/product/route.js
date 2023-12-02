import connectMongo from "@/libs/mongodb";
import Product from "@/models/products";
import { NextResponse } from "next/server";

export async function POST(request)
{
    const{title,description,price,category}= await request.json();
    await connectMongo()
    await Product.create({title,description,price,category})
    return NextResponse.json({message:"new product saved"},{status:201})

}

export async function GET(request)
{
    await connectMongo();
    const items=await Product.find();
    return NextResponse.json(items);
}