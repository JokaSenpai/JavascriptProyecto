const carritoCompra = recuperarCarritoLocal || []; 
const carrito = document.getElementById("carrito");
let meterConteoLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
let recuperarConteoLocal = JSON.parse(localStorage.getItem("conteoLocal"));
let conteoProductos =recuperarConteoLocal || 0;





// function renderizarProductos() {
//     for (producto of prod) {
//         container.innerHTML += `
//         <div class="card col-sm-3 col-lg-2">
//             <img src="${producto.img}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${producto.id}</h5>
//                 <p class="card-text">${producto.nombre}</p>
//                 <p class="card-text">${producto.precio}</p>

//                 <a href="#" id="boton${producto.id}" class="btn btn-primary">Comprar22</a>
//             </div>
//       </div>
        
//         `;
//     }



// //Agregando eventos
// prod.forEach((producto)=>{
//     document.getElementById(`boton${producto.id}`).addEventListener("click",function(){
//         agregarAlCarrito(producto);
//     });
// })


// }

// renderizarProductos();

// function agregarAlCarrito(productoCompra){
// carritoCompra.push(productoCompra)
// // console.table(carritoCompra);
// document.getElementById("tablabody").innerHTML += `
// <tr> 
//     <td>${productoCompra.id} </td>
//     <td>${productoCompra.nombre} </td>
//     <td>${productoCompra.precio} </td>
// </tr>
// `
// let total = carritoCompra.reduce((acumulador,elemento)=>acumulador + elemento.precio,0);
// document.getElementById("total").innerText = `Total a pagar (UY): ${total}`
// }


