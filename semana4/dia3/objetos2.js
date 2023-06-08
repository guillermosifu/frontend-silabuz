//crear objeto
//key y el value
const persona = {
  nombre: "guillermo",
  Edad: 35,
  profesion: "ingeniero",
  calcularEdad: function () {
    console.log("calculando la edad");
  },
};

persona.nombre = "piero";

console.log(persona);
//creen que un objeto puede tener un funcion?
// como acceemo a una funcion interna en un objeto???

persona.calcularEdad;

//vamos a ver comoa acceder a los datos del objeto padre
// this // va permitir acceder  a los datps del objeto padre

const computadora = {
  color: "azul",
  marca: "msi",
  nuevo: true,
  mostrarDetalle: function () {
    console.log("color", this.color);
  },
  mostrarDetalleCompleto: function () {
    // en las funciones flecha el this no existe
    console.log(
      "detalle",
      `Color : ${this.color} marca:${this.marca} es nuevo ?${
        this.nuevo ? "si" : "no"
      }`
    );
  },
};
