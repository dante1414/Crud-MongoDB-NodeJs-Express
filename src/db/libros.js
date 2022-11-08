import mongoose,{ Schema, model } from "mongoose";


const librosTabla = new Schema (
    {
        titulo : {
         type: String,
        required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        autor: {
            type: mongoose.Types.ObjectId,
            ref:"Autor"
        },
    }
) 

export default model ("Libro", librosTabla)