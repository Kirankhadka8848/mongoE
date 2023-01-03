import mongoose from "mongoose";

// Defining schema for The Student dataBase

    const studentSchema=new mongoose.Schema({
        name:{type:String, required:true, trim:true},
        age:{type:Number, required:true, min:18, max:50},
        fees:{type:mongoose.Decimal128, required:true, validate:v =>v>=5500.5},
        hobbies:{type:Array},
        isactive:{type:Boolean},
        comments:[{value:{type:String}, publish:{type:Date, default:Date.now()}}],
        join:{type:Date,default:Date.now}
    })

    


// const t=studentSchema.path("age");
// console.log(t);

// Compiling Schema


    const studentModel=mongoose.model("student",studentSchema);



//Creating New Document
// const createDocument=async(nm,ag,fs,hob,isact,comt)=>{
//     try{
//     const studentDocument=new studentModel({
//         name:nm,
//         age:ag,
//         fees: fs,
//         hobbies:hob,
//         isactive:isact,
//         comments:comt
//     })
//     const result= await studentDocument.save()
//     console.log("this is after student");

    

// }catch(err){

//     console.log("error has occured",err);
// }}
// export default createDocument;
   
//         // const studentDocument=new studentModel({
        //     name:"kiran",
        //     age:23,
        //     fees: 6700.45,
        //     hobbies:["playing", "reading"],
        //     isactive:true,
        //     comments:[{value:"Worth spending time"}]
        // })


        
        
    //     // saving an Documents
    // try{
      
    // //   result.then((data)=>{
    // //     console.log(data);
    // //   })

    // }catch(err){
    //     console.log("error is here");

    // }
    // Retriving document in DataBase
    

       
        // const getAlldocument=async ()=>{
            
          
        //    const result=await studentModel.find()
        //    console.log(result);
            
        //     }
            
            
      
       
// export default createDocument;
// export {getAlldocument};

// const updateDocument=async (id)=>{
//     try{
//        const result= await studentModel.findByIdAndUpdate(id,{name:"kiran"})
//        console.log(result);
//     } catch(err){
//         console.log("this is error");
//     }

// }
//     export {updateDocument};



// retrieving documents

const updateDocument=async(id)=>{
    // const result=await studentModel.findById("63b2f2d7c166590f8387dcd2")
    try{
        const result=await studentModel.findByIdAndUpdate(id,{name:"Sujan"});
        console.log(result);
        console.log("SuccesFully Updated");

    }catch(err){}
   
}
export default updateDocument;