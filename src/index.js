import express from "express"
import cors from "cors"
import morgan from "morgan"
import path from "path"
import productoRouter from "./routes/productos.routes"
//Aqui llamaremos a la base de datos
import "./database" 
//Se tendria que mostrar el mensaje en clg que dejamos!! si se muestra!!

//creamos una instancia de express
const app = express()
//configurar un puerto, si existe usa el PORT, sino usa el puerto 4000.
app.set("port", process.env.PORT || 4000)
//la fc es la q se ejecutara si el backend ya esta escuchando alugn port o el 4000
app.listen( app.get("port"), () => {
    console.log("Estoy en el puerto "+ app.get("port"))
})

//middlewares: se ejecutan antes de llegar a las rutas(son las fc de javascript)
//cors es el que permite las peticiones externas
// permite que mi servidor pueda leer los archivos enviroment, archivos de entorno
//morgan nos da informacion extra unicamente, util para el programador

app.use(cors()); //permite peticiones remotas

//el sig permite recibir y usar objetos en formato json()
app.use(express.json())

//descarga e interpreta el formato json(, hay que configurarle un parametro)
//los parametros de urlencoded se encuentran en la pag oficial con sus diferentes opciones
app.use(express.urlencoded({extended: true}))//este parametro, solo recibe y extrae el formato json, pueden haber cambios

//informacion extra
app.use(morgan("dev")) //tamb lleva parametros, hay que ver q palabras y respuestas podemos usar

//cargar un archivo estatico
//queremos que un archivo se cargue de manera inicial, eso hacemos aca con una herramienta de node
app.use(express.static(path.join(__dirname, "../public")))
//__dirname es una variable de node, devuelve el directorio donde esta el index.js
//path.join nos permite concatenar rutas   
// console.log(path.join(__dirname, "../public"))//cuando ya tengamos la direccion mandamos dentro del static


//rutas
//cuando reciba una peticion a esta ruta, yo voy a ejecutar tal logica(minimo 2 parametros) pero no sabemos si un cliente hizo esta peticion o no
// app.get("/prueba", (req, res) => {
//     res.send("Hola, desde el backend en la peticion get")
// })
//Lo llevamos a la carpeta productos.route, directamente lo importamos arriba::: ahora lo llamamos asi luego de ser importado..
//http://localhost:4000/apicafe/prueba //para que no coincida las rutas del backend con el frontend
app.use("/apicafe", productoRouter)



//rutas(son las peticiones GET, POST, PUT, DELETE, etc)