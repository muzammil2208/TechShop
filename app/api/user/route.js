import connectMongo from "@/libs/mongodb";
import { users } from "@/models/users";
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

export async function DELETE(request)
{
    const id=request.nextUrl.searchParams.get("id")
    await connectMongo();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message:"element has been deleted"})

}
export async function PUT(request)
{
    const id=request.nextUrl.searchParams.get("id");
    const {title,description,price,category}=await request.json();
    await Product.findByIdAndUpdate(id,{title,description,price,category});
    return NextResponse.json({message:"element has been updated"})

}