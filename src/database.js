import mongoose from "mongoose";

//aqui nos conectaremos, y le pedimos a la libreria que nos conectemos... cafe-.. es el nombre de nuestra base de datos
const url = "mongodb://localhost:27017/cafe-benito-santos"

mongoose.connect(url)

const connection = mongoose.connection

connection.once("open", () => {
    console.log("estoy conectado a la database")
})