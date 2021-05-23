const list = document.querySelector(".list");




const ListaProductos = () =>{
    list.innerHTML = "";
    //trayendo valores de localStorage
    arrayBotonDetalle1 = JSON.parse(localStorage.getItem("Detalle Producto"));
    arrCantidadP = JSON.parse(localStorage.getItem("Cantidad"));
    arrPrecioP = JSON.parse(localStorage.getItem("Precio"))

    //declarando variables para la funcion multiplicar
    let cantidad =  parseFloat(arrCantidadP);
    let precioP = parseFloat(arrPrecioP);

    const Multiplicacion = () =>{
        let subtotal = cantidad * precioP;
        return subtotal
    }


    //agregando contenido
    arrayBotonDetalle1  .forEach(element => {
        list.innerHTML = 
        `<img src="${element.imagen}" alt="">
        <p>${arrCantidadP}</p>
        <p>${arrPrecioP}</p>
        <p>${Multiplicacion()}</p>`
    });
    //mostrando el total a pagar 
    document.getElementById("pagarPM").innerHTML = Multiplicacion();
}

ListaProductos();

//Evento que me llev al formulario de pago
const pagar = document.querySelector("#pagar");

pagar.addEventListener("click", () =>{
    document.location.href="pay.html";
});