import { Router } from "express";
import { crearLibro, unLibro } from "../controller/librosController.js";

export const routerLibro = new Router();

routerLibro.get("/libro/:id", unLibro);
routerLibro.post("/libro", crearLibro);
