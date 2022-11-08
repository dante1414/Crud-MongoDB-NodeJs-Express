import Libro from "../db/libros.js";

export const crearLibro = async (req, res) => {
  try {
    const { titulo, descripcion, autorId } = req.body;
    if (!titulo || !descripcion || !autorId) {
      return res.status(400).send({
        success: false,
        message: "Faltan datos por completar!",
      });
    }

    let libro = await Libro({
      titulo,
      descripcion,
      autor: autorId,
    });
    await libro.save();
    return res.status(200).send({
      success: true,
      message: "Libro creado correctamente!",
      libro,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

export const unLibro = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "No se encontró ningun id",
      });
    }
    const libro = await Libro.findById(id).populate({
      path: "autor",
      select: "nombre edad",
    });
    return res.status(200).send({
      success: true,
      message: "Libro seleccionado correctamente",
      libro,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
