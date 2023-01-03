import mongoose from 'mongoose';
const connectDB=async ()=>{
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/schooldb");
        console.log("Connected SUccedsfully");
    } catch (err) {
        console.log(err);
    }
}




export default connectDB;