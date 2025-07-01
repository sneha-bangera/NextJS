import { NextResponse } from "next/server"
import connect from "@/utils/db";
import POst from "@/models/POst";

export const GET = async(req, {params})=>{

    const {id}= params
    try {
        await connect();
        const posts= await POst.findById(id);

        return new NextResponse(JSON.stringify(posts), {status: 200})

    } catch (error) {
       return new NextResponse("Database err", {status:404}); 
    }
}


export const DELETE = async (req, { params }) => {
    const { id } = params;
  
    try {
      await connect();
      await POst.findByIdAndDelete(id);
  
      return new NextResponse("Post has been deleted", { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };