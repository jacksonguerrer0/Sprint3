const pagar = document.querySelector("#pagar");
const form = document.querySelector("#form");



//eliminando
//localStorage.removeItem("Nombre Usuario");
let arrPersona = [];

const CrearUsuario = (n,c,t) => {
    let persona = {
    nombre: n,
    correo: c,
    tarjeta: t,
    };
    arrPersona.push(persona);
    return persona;
    
}
const GuardarDatos = () =>{
    localStorage.setItem("Persona",JSON.stringify(arrPersona));
}

form.addEventListener("submit", e =>{
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let correo = document.querySelector("#correo").value;
    let tarjeta = document.querySelector("#tarjeta").value;

    alert(`Hola ${nombre} da click en borrar y así eliminaras tu informacion`)
    CrearUsuario(nombre, correo, tarjeta);
    GuardarDatos();
    form.reset();
});


//borrar todos los datos almacenados en local
const borrar = document.querySelector("#borrar");

borrar.addEventListener("click", () =>{
    localStorage.removeItem("Persona");
    localStorage.removeItem("Imagen");
    localStorage.removeItem("Cantidad");
    localStorage.removeItem("Precio");
    localStorage.removeItem("Detalle Producto");
});
