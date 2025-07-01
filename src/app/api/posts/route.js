import { NextResponse } from "next/server"
import connect from "@/utils/db";
import POst from "@/models/POst";

export const GET = async(request)=>{
    const url = new URL(request.url);

    const username = url.searchParams.get("username");

    try {
    await connect();

    const posts = await POst.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};


export const POST = async (request) => {
    const body = await request.json();
  
    const newPost = new POst(body);
  
    try {
      await connect();
  
      await newPost.save();
  
      return new NextResponse("Post has been created", { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };