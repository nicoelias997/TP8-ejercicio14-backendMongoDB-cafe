//aqui modelaremos por mongoose
//mongoDB es una base de dato que nos permite crear algo parecido a un objeto, es NO RELACIONAL, Cada prod es como una hoja que tendra todas sus propiedades ys era un producto... denominada documento, como un registro
import mongoose, {Schema} from "mongoose"; //Schema nos permite crear el modelo de nuestra base de datos

const productoSchema = new Schema({
    
        nombreProducto: {
            type: String,
            required: true,
            unique: true,
            maxLength: 50,
            minLength: 2,
        },
        precio:{
            type: Number,
            required: true
        },
        imagen:{
            type: String,
            required: true
        },
        categoria:{
            type: String,
            required: true
        }
      
})

//esto Producto, representara todo el objeto, todo el modelo de lo que creamos arriba
const Producto = mongoose.model("producto", productoSchema)

export default Producto