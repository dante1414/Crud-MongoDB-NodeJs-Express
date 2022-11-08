import Autor from "../db/autor.js";

export const verAutores = async (req, res) => {
  const autor = await Autor.find({});
  return res.status(200).send({
    success: true,
    autor,
  });
};

export const verUnAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await Autor.findById(id);
    res.status(200).send({
      success: true,
      message: "autor encontrado",
      autor,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const agregarAutor = async (req, res) => {
  try {
    const { nombre, apellido, edad } = req.body;
    if (!nombre || !apellido || !edad) {
      return res.status(400).send({
        success: false,
        message: "Nombre/Apellido/Edad no válido",
      });
    }
    const autor = new Autor({
      nombre,
      apellido,
      edad,
    });
    await autor.save();
    return res.status(200).send({
      success: true,
      message: "Autor agregado",
      autor,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const actualizarAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, edad } = req.body;
    const autor = await Autor.findOneAndUpdate(id, { nombre, apellido, edad });
    return res.status(200).send({
      success: true,
      message: "autor modificado",
      autor,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const eliminarAutor = async (req, res) => {
  try {
    const { id } = req.params;
    await Autor.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Autor eliminado",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
