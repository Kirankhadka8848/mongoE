import express from "express"
const app=express()
const port= process.env.PORT|| 3900;
import mongoose from "mongoose";
import connectDB from "./db/connectdb.js";
// import {getAlldocument} from "./models/student.js";
// import "./models/student.js"
// import createDocument from "./models/student.js";
// mongoose.connect("mongodb://localhost:27017/schooldb").then(()=>{
//      console.log("Successfully connnected with the datbase ");

// })
// connectDB();
// createDocument("sanjok",29,8999.67,["gamming","dancing"],false,[{value:"this is bad"}])
// getAlldocument()
// import createDocument from "./models/student.js";
import updateDocumet from "./models/student.js";
connectDB();
updateDocumet("63b2f2d7c166590f8387dcd2");
// createDocument("sarju Basnet", 27, 6777.6,["footbal","volleyabl"],true,[{value:"she loves studying"}])



app.listen(port,()=>{
    console.log("Server has Started");
})


