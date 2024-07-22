import mongoose from "mongoose";
export const connection = async ()=>{
    mongoose.connect(process.env.DB_URL).then (()=>{
        console.log("DB Success")
    })
}

