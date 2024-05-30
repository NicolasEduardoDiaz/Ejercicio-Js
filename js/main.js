const persona = {
    nombre: "Alice",
    edad: 28,
    casado: true,
    secretos: {
        contraseña: "miContraseñaSecreta",
        hobby: "programacion"
    }
};
function filtroReplacer(key, value){
    return (key === "contraseña") ? "*********": value && (key === "nombre") ? "ALICE": value;
}

console.log(JSON.stringify(persona, filtroReplacer, 4));