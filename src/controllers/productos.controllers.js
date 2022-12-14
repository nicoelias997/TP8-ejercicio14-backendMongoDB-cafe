import { validationResult } from "express-validator";
import {Producto} from "../models/producto";

//aqui vendra la logica que controlara los productos
export const listarProductos = async (req, res) => {
  try{
    //tenemos que buscar los productos si es que existen..
    const productos = await Producto.find() //metodo de mongoose, puede tener parametros, consulta para que encuentre en mi base de datos
    // const dulces = await Producto.find({categoria: "salado"}) De esta manera filtrara los docs que tengan categoria salado en la base de datos...
    res.status(200).json(productos);
    //si existen... responder con ese array de productso
  } catch(e){
    console.log(e)
    //enviar una respuesta al frontend
    res.status(404).json({
      message: "Error al buscar los productos."
    })
  }
  };
  //tiene que haber una unica res. si algo falla o funciona


export const crearProducto = async (req, res) => {
  try {
    //manejamos los errores de validacion
    const errors = validationResult(req)
    if(!errors.isEmpty()){
     return res.status(400).json({
        errors: errors.array()
      })
    }
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


export const obtenerProducto = async (req, res) => {
  try{
      //Debemos obtener el parametro
      console.log(req.params.id)
      //Traemos el producto que tenga ese parametro si es que encontramos el parametro
      const productoBuscado = await Producto.findById(req.params.id)
      //enviar el producto con ese parametro al frontend
      res.status(200).json(productoBuscado)
  } catch(e){
    console.log(e)
    res.status(404).json({
      message: "Error al buscar un producto."
    })
  }
  };

  export const borrarProducto = async (req, res) => {
    try{
       //obtener el parametro req.params.id
        
        //Luego de ser validados, debo actualizar y guardar en nuestra base de datos
        await Producto.findByIdAndDelete(req.params.id)
        res.status(200).json({
          message: "El producto fue eliminado correctamente."
        })
    } catch(e){
      console.log(e)
      res.status(404).json({
        message: "Error al intentar borrar un producto."
      })
    }
    };

    export const editarProducto = async (req,res) => {
      try{
        //obtener el parametro req.params.id
        
        //obtener los datos del body VALIDADOS req.bdoy

        //Luego de ser validados, debo actualizar y guardar en nuestra base de datos
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
          message: "El producto fue editado correctamente."
        })
      } catch(e){
        console.log(e)
        res.status(400).json({
          message: "Error al intentar editar un producto."
        }) //codigo que falla cuando no me envian el producto correcto(400: bad request)
      }
    }
