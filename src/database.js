import mongoose from "mongoose";

//aqui nos conectaremos, y le pedimos a la libreria que nos conectemos... cafe-.. es el nombre de nuestra base de datos
// const url = "mongodb://localhost:27017/cafe-benito-santos"/local
const url = "mongodb+srv://nicoelias997:nicoelias997@cluster0.qo1exxt.mongodb.net/cafebenitosantos"//produccion

mongoose.connect(url)

const connection = mongoose.connection

connection.once("open", () => {
    console.log("estoy conectado a la database")
})