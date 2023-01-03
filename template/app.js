const express=require("express");
const app=express();
const port=process.env.PORT || 2000;
import web from "./routes/web.js";
app.use("/",web);
app.listen(port,()=>{
    console.log("Server has started!!!!");
})