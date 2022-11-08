import "dotenv/config";
import mongoose from "mongoose";


const dbLocal = process.env.BASE_LOCAL;
const dbInternet = process.env.BASE_ATLAS;


export const base = (async()=>{
try {
    const db =  await mongoose.connect(dbInternet);
    console.log(`connect ${db.connection.name}`);
} catch (error) {
    console.log(error)
}
});



