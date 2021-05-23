//Categorias- ocultando categoria opuesta a la slecionada

const categ1 = document.querySelector("#categ1");
const categ2 = document.querySelector("#categ2");

categ1.addEventListener("click", () => {
    document.querySelector("#torta").style.display = "none";
    document.querySelector("#dulce").style.display = "";
});
categ2.addEventListener("click", () => {
    document.querySelector("#dulce").style.display = "none";
    document.querySelector("#torta").style.display = "";
});
//Dar click a detalle desde productos y se muestre el detalle 
//declaradno botones para que ejecuten la funcion
let botonDetalle1 = document.querySelector('.botonDetalle1');
let botonDetalle2 = document.querySelector('.botonDetalle2');
let botonDetalle3 = document.querySelector('.botonDetalle3');
let botonDetalle4 = document.querySelector('.botonDetalle4');
let botonDetalle5 = document.querySelector('.botonDetalle5');
let botonDetalle6 = document.querySelector('.botonDetalle6');
let botonDetalle7 = document.querySelector('.botonDetalle7');
let botonDetalle8 = document.querySelector('.botonDetalle8');
//eventos
let arrayBotonDetalle1 = [];



botonDetalle1.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto1 = {
            imagen: "./img/dulces.jpg",
            nombre: "Dulces Chocolatados",
            descripcion: "Ricos dulces chocolatados",
            precio:  1000
        }
    arrayBotonDetalle1.push(producto1);
    return producto1
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});

botonDetalle2.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto2 = {
            imagen: "./img/dulce2.jpg",
            nombre: "Chocolate Blanco",
            descripcion: "Ricos chocolates blancos",
            precio: 2000
        }
    arrayBotonDetalle1.push(producto2);
    return producto2
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle3.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto3 = {
            imagen: "./img/dulce3.jpg",
            nombre: "Paletas Chocolatados",
            descripcion: "Ricas Paletas Chocolatados",
            precio:  5000
        }
    arrayBotonDetalle1.push(producto3);
    return producto3
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle4.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto4 = {
            imagen: "./img/dulce4.jpg",
            nombre: "Manjar",
            descripcion: "Rico Manjar",
            precio: 3000
        }
    arrayBotonDetalle1.push(producto4);
    return producto4
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle5.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto5 = {
            imagen: "./img/tortas.jpg",
            nombre: "Torta Cremada",
            descripcion: "Rica torata cremada",
            precio:  5000
        }
    arrayBotonDetalle1.push(producto5);
    return producto5
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle6.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto6 = {
            imagen: "./img/torta2.jpg",
            nombre: "Postre Chocolatado",
            descripcion: "Rico postre chocolatado",
            precio:  7000
        }
    arrayBotonDetalle1.push(producto6);
    return producto6
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle7.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto7 = {
            imagen: "./img/torta3.jpg",
            nombre: "Pasabocas",
            descripcion: "Ricos pasabocas",
            precio:  2000
        }
    arrayBotonDetalle1.push(producto7);
    return producto7
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});
botonDetalle8.addEventListener("click", () =>{
    document.location.href="detalle.html";
    const CrearItem = () => {
        let producto8 = {
            imagen: "./img/torta.jpg",
            nombre: "Torta Familiar",
            descripcion: "Ricas tortas familiares",
            precio:  50000
        }
    arrayBotonDetalle1.push(producto8);
    return producto8
    };
    const GuardadDB = () => {
        localStorage.setItem("Detalle Producto", JSON.stringify(arrayBotonDetalle1));
    }
    CrearItem();
    GuardadDB();
});

