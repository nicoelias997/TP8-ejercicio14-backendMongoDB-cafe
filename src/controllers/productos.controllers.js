//aqui vendra la logica que controlara los productos
export const listarProductos = (req, res) => {
  res.send("Hola, desde el backend en la peticion get");
};

export const crearProducto = (req, res) => {
  console.log(req.body)
  //aqui deberiamos validar los datos de objeto
  //guardar el objeto en la base de datos
  res.send("Aqui tendria que agregar un producto");
};
