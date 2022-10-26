import {Producto} from "../models/producto";

//aqui vendra la logica que controlara los productos
export const listarProductos = (req, res) => {
  res.send("Hola, desde el backend en la peticion get");
};

export const crearProducto = async (req, res) => {
  try {
    // console.log(req.body);
    //aqui deberiamos validar los datos de objeto
    //guardar el objeto en la base de datos

    //Debemos leer la doc de mongoose, nos pide primero tener un modelo y luego crear un objeto nuevo con instancia
    const productoNuevo = new Producto(req.body); //decimos creame un nuevo producto con el request del body(q yaa vimos que nos devuelve el objeto nuevo)
    await productoNuevo.save(); //metodo que nos guarda un objeto en la base de datos

    res.status(201).json({
      message: "El producto fue creado correctamente",
    }); //201 sign objeto creado en el post
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: "Error al intentar agregar un nuevo producto.",
    });
  }
};
