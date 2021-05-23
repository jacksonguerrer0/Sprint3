//variable para cambiar el contenido
let mainContent = document.querySelector("#mainContent");

//funcion para hacer que el maincontent cambie de contenido segun los datos en el array 
const PintarDB = () =>{
    mainContent.innerHTML = "";

    arrayBotonDetalle1 = JSON.parse(localStorage.getItem("Detalle Producto"));
    if (arrayBotonDetalle1  === null) {
        arrayBotonDetalle1  = [];
    }
    else{
        arrayBotonDetalle1 .forEach(element => {
            mainContent.innerHTML += `<div id="img">
            <img src="${element.imagen}" alt="" id="imagenP">
            </div>
            <div id="info">
                <h2 id="nombreP">${element.nombre}</h2>
                <p id="descripcionP">${element.descripcion}</p>
                <p id="precioP">${element.precio}</p>
            <div class="opcion">
                <input type="number" placeholder="0" id="añadirNumero" min="0">
                <button id="añadir">Añadir al carrito</button>
            </div>
            </div>`;
        });
    }
}
PintarDB()

//Creando algoritmo que agregue al carrito la cantidad de productos 


const añadir = document.querySelector("#añadir");

let arrayCantidadP = [];
let arrayPrecio = [];
let arrayImagen = [];

añadir.addEventListener("click", () =>{
    document.location.href="carrito.html";
    const añadirNumero = document.querySelector("#añadirNumero").value;
    arrayCantidadP.push(añadirNumero);

    arrayBotonDetalle1 .forEach(element => {
        const precio = element.precio;
        const imagen = element.imagen;

        arrayImagen.push(imagen);
        arrayPrecio.push(precio);


        const GuardadDBP = () => {
            localStorage.setItem("Precio", JSON.stringify(arrayPrecio));
        }
        GuardadDBP();
        const GuardadDBI = () => {
            localStorage.setItem("Imagen", JSON.stringify(arrayImagen));
        }
        GuardadDBI();
    });

    const GuardadDB = () => {
        localStorage.setItem("Cantidad", JSON.stringify(arrayCantidadP));
    }
    GuardadDB();
});