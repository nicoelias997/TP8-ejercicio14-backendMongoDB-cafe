//aqui tendran todas las rutas
import { Router } from "express";
import {
  borrarProducto,
  crearProducto,
  editarProducto,
  listarProductos,
  obtenerProducto,
} from "../controllers/productos.controllers";
import { check } from "express-validator"; //herramienta que generalmente queremos validar

//instanciar el Router, aqui solo necesito esto
const router = Router();
//este router me servira para definir todas las rutas

// app.get("/prueba", (req, res) => {
//     res.send("Hola, desde el backend en la peticion get")
// })

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
        check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres."),
    check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico.")
        .custom((value) => {
            if(value > 0 && value <= 100){
                return true
            } else {
                throw new Error("El precio debe ser mayor o igual a 0.1 y menor o igual a 100 euros.")
                return false
            }
        }),
    check("imagen", "La imagen del producto es obligatorio")
        .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/
        )
        .withMessage("Debe enviar una url valida."),

    check("categoria", "La categoria del producto es obligatoria")
    .notEmpty()
    .isIn([
        "bebida-fria",
        "bebida-caliente",
        "dulce",
        "salado"
    ])
    .withMessage("La categoria debe ser valida.")
],
    crearProducto
  );
//Asi es el objetivo, por cuestion de organizacion de codigo, todo lo que queremos que vaya detnro de las funciones post get, etc deberiamos llevarla a un controlador, donde pondremos toda nuestra logica
// .get(listarProductos) se llama asi cuando => hacemos una peticion get, ejecuta la funcion listarProductos que viene desde nuestro controlador

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .put(editarProducto)
  .delete(borrarProducto);

//hay que agregar las validaciones en donde recibamos o enviemos datos!! en este caso put and post..

export default router;
