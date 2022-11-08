import { Schema, model } from "mongoose";

const CamposTabla = new Schema({
  nombre: {
    type: String,
    required: true,
  },

  apellido: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
});

export default model("Autor", CamposTabla);
