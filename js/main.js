const miObjeto = {
    nombre: "Ejemplo Objeto",
    version: 1.0,
    descripcion: "Un objeto de ejemplo con funcion",
    mostrarInformacion: function(p1, p2){
        console.log("Nombre " + this.nombre);
        console.log("Version " + this.version);
        console.log("Descripcion " + this.descripcion);
        console.log("Parametro 1 " + p1);
        console.log("Parametro 2 " + p2);
    }
};
miObjeto.mostrarInformacion("Valor 1", "Valor 2");