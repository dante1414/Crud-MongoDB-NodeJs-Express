import { Router } from "express";
import {
  verAutores,
  verUnAutor,
  agregarAutor,
  eliminarAutor,
  actualizarAutor,
} from "../controller/autorController.js";

export const router = Router();

router.get("/", verAutores);
router.get("/ver/:id", verUnAutor);
router.post("/agregar", agregarAutor);
router.put("/actualizar/:id", actualizarAutor);
router.delete("/eliminar/:id", eliminarAutor);
