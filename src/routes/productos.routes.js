//aqui tendran todas las rutas
import {Router} from "express"
import { crearProducto, listarProductos } from '../controllers/productos.controllers';
//instanciar el Router, aqui solo necesito esto
const router = Router()
//este router me servira para definir todas las rutas

// app.get("/prueba", (req, res) => {
//     res.send("Hola, desde el backend en la peticion get")
// })

router.route('/productos').get(listarProductos).post(crearProducto);
//Asi es el objetivo, por cuestion de organizacion de codigo, todo lo que queremos que vaya detnro de las funciones post get, etc deberiamos llevarla a un controlador, donde pondremos toda nuestra logica

// .get(listarProductos) se llama asi cuando => hacemos una peticion get, ejecuta la funcion listarProductos que viene desde nuestro controlador

export default router