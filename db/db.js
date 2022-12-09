const mongoose=require("mongoose");
const db="mongodb+srv://echo:vivek@echo.kobjjb0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db).then(()=>
{
    console.log("connected...");
}).catch((err)=>
{
    console.log(err);
})