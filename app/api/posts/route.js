import PostModel from "@/app/models/postModel";
import { connection } from "mongoose";

export async function GET(request) {
    try{
        await connection();
        const postData = await PostModel.find({})
        return Response.json (postData);

    }
    catch (error){
        return Response.json (error);
    }
}