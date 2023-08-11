import mongoose from "mongoose";


    async function connectToDb(){
        try{
        await mongoose.connect(process.env.MONGO_URI,{dbName : "promptopia"})
        console.log('database is connected');
        }
        catch(err){
            console.log(err);
        }
    }



export default connectToDb;
