// pruductos , descripcion y precio

$(function () {
  console.log("El DOM esta listo");
});

// carrito de compras

const carrito = document.getElementById("carrito");
const productos = document.getElementById("lista-productos");
const listaProductos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners() {
  productos.addEventListener("click", comprarProducto);
  carrito.addEventListener("click", eliminarProducto);
  vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const producto = e.target.parentElement.parentElement;
    leerDatosProducto(producto);
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector("h4").textContent,
    precio: producto.querySelector(".precio span").textContent,
    id: producto.querySelector("a").getAttribute("data-id"),
  };

  insertarCarrito(infoProducto);
}

function insertarCarrito(producto) {
  const row = document.createElement("tr");
  row.innerHTML = `
       <td>
           <img src="${producto.imagen}" width=100> 
       </td> 
       <td>${producto.titulo}
       </td>
       <td>${producto.precio}
       </td>
       <td>
        <a href="#" class="borrar-producto" data-id="${producto.id}">X</a>
       </td>
    `;
  listaProductos.appendChild(row);
  guardarProductoLocalStorage(producto);
}

function eliminarProducto(e) {
  e.preventDefault();

  let producto, productoId;

  if (e.target.classList.contains("borrar-producto")) {
    e.target.parentElement.parentElement.remove();
    producto = e.target.parentElement.parentElement;
    productoId = producto.querySelector("a").getAttribute("data-id");
  }
  eliminarProductoLocalStorage(productoId);
}

function vaciarCarrito() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }
  vaciarLocalStorage();

  return false;
}

function guardarProductoLocalStorage(producto) {
  let productos;

  productos = obtenerProductosLocalStorage();
  producto.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
  let productosLS;

  if (localStorage.getItem("productos") === null) {
    productosLS = [];
  } else {
    productosLS = JSON.parse(localStorage.getItem("productos"));
  }
  return productosLS;
}

function leerLocalStorage() {
  let productosLS;

  productosLS = obtenerProductosLocalStorage();

  productosLS.forEach(function (producto) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${producto.imagen}" width=100>
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-platillo" data-id="${producto.id}">X</a>
            </td>
        `;
    listaProductos.appendChild(row);
  });
}

function eliminarProductoLocalStorage(producto) {
  let productosLS;
  productosLS = obtenerProductosLocalStorage();

  productosLS.forEach(function (productosLS, index) {
    if (productosLS.id === producto) {
      productosLS.splice(index, 1);
    }
  });

  localStorage.setItem("productos", JSON.stringify(productosLS));
}

function vaciarLocalStorage() {
  localStorage.clear();
}

// const carrito = document.getElementById("producto");
// const productos = document.getElementById("lista_producto");
// const listaProductos = document.querySelector("#lista-carrito tbody");
// const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

// cargarEventListeners();

// function cargarEventListeners() {
//   productos.addEventListener("click", comprarProducto);
//   carrito.addEventListener("click", eliminarProducto);
//   vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
//   document.addEventListener("DOMContentLoaded", leerLocalStorage);
// }

// function compraProducto(e) {
//     e.preventDefault();
//     if(e.target.classList.contains('agregar-carrito')){
//         const producto = e.target.parentElement.parentElement;
//         leerDatosProducto(producto);
//     }
// }

// function leerDatosProducto(producto){
//     const infoProducto = {
//         imagen: producto.querySelector('img').src,
//         titulo: producto.querySelector('h4').textContent,
//         precio: producto.querySelector('.precio span').textContent,
//         id: producto.querySelector('a').getAttribute('data-id')
//     }

//     insertarCarrito(infoProducto);
// }

// function insertarCarrito(producto) {
//     const row = document.createElement('tr');
//     row.innerHTML = `
//        <td>
//            <img src="${producto.imagen}" width=100>
//        </td>
//        <td>${producto.titulo}</td>
//        <td>${producto.precio}</td>
//        <td>
//         <a href="#" class="borrar-platillo" data-id="${producto.id}">X</a>
//        </td>
//     `;
//     listaProductos.appendChild(row);
//     guardarProductoLocalStorage(producto);
// }

// function eliminarProducto(e) {
//     e.preventDefault();

//     let producto,
//         productoId;

//     if(e.target.classList.contains('borrar-producto')) {
//         e.target.parentElement.parentElement.remove();
//         producto = e.target.parentElement.parentElement;
//         productoId = platillo.querySelector('a').getAttribute('data-id');
//     }
//     eliminarProductoLocalStorage(productoId)
// }

// function vaciarCarrito(){
//     while(listaProducto.firstChild){
//         listaProducto.removeChild(listaProducto.firstChild);
//     }
//     vaciarLocalStorage();

//     return false;
// }

// function guardarProductoLocalStorage(producto) {
//     let producto;

//     producto = obtenerProductoLocalStorage();
//     producto.push(producto);

//     localStorage.setItem('producto', JSON.stringify(producto));
// }

// function obtenerProductiLocalStorage() {
//     let productoLS;

//     if(localStorage.getItem('producto') === null) {
//         productoLS = [];
//     }else {
//         productoLS = JSON.parse(localStorage.getItem('producto'));
//     }
//     return productoLS;
// }

// function leerLocalStorage() {
//     let productoLS;

//     productoLS = obtenerProductoLocalStorage();

//     productoLS.forEach(function(producto){
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>
//                 <img src="${producto.imagen}" width=100>
//             </td>
//             <td>${producto.titulo}</td>
//             <td>${producto.precio}</td>
//             <td>
//                 <a href="#" class="borrar-platillo" data-id="${producto.id}">X</a>
//             </td>
//         `;
//         listaProducto.appendChild(row);
//     });
// }

// function eliminarProductoLocalStorage(producto) {
//     let productoLS;
//     productoLS = obtenerProductoLocalStorage();

//     productoLS.forEach(function(productoLS, index){
//         if(productoLS.id === producto) {
//             productoLS.splice(index, 1);
//         }
//     });

//     localStorage.setItem('producto', JSON.stringify(productoLS));
// }

// function vaciarLocalStorage() {
//     localStorage.clear();
// }
