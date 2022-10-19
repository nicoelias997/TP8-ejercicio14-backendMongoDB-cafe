import express from "express"

//creamos una instancia de express
const app = express()
//configurar un puerto, si existe usa el PORT, sino usa el puerto 4000.
app.set("port", process.env.PORT || 4000)
//la fc es la q se ejecutara si el backend ya esta escuchando alugn port o el 4000
app.listen( app.get("port"), () => {
    console.log("Estoy en el puerto "+ app.get("port"))
})


console.log("Hola mundo")