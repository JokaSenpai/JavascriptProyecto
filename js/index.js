const GETJSON = "./chupe.json";
let precio = 0;
const precioTotal = document.getElementById("precioTotal");
let bodyModal = document.getElementById("carrito-body");
let carroNumero = document.getElementById("carroNumero");
let carNum = 22;
let botonContacto = document.getElementById("btn-contacto");


function obtenerData() {
  fetch(GETJSON)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data.cervezas);
    })
}
obtenerData();

function postearData() {
  fetch(GETJSON)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log(data);
      const cervezas = data.cervezas;
      const whiskies = data.whisky;
      const variados = data.variados;
      const sinAlcohol = data.sinAlcohol;
      console.log(cervezas);
      cervezas.forEach((cerveza) => {
        document.getElementById("cerveza").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${cerveza.imagen}" class="card-img-top" alt="cerveza ${cerveza.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${cerveza.nombre}</h5>
                </div>
                <div><p class="card-text precioTexto">Precio: ${cerveza.precio}</p> </div>
                <div class="card-footer">
                <button id="btn${cerveza.id}" class="btn btn-primary" >Agregar al carro</button>
            </div>
            </div>
            `
      })
      //Agregando una cerveza al carrito
      data.cervezas.forEach((cerveza) => {
        document.getElementById(`btn${cerveza.id}`).addEventListener("click", function () {
          console.log("probando si hay respuesta al boton para agregar al carrito");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${cerveza.nombre} ha sido agregado al carrito`,
            showConfirmButton: false,
            timer: 1500
          })

          calcularTotal();
          comprobarElementos(cerveza);




        })

      })



      whiskies.forEach((whisky) => {
        document.getElementById("whisky").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${whisky.imagen}" class="card-img-top" alt="whisky ${whisky.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${whisky.nombre}</h5>
                </div>
                <div><p class="card-text precioTexto">Precio: ${whisky.precio}</p> </div>
                <div class="card-footer">
                <button id="btn${whisky.id}" class="btn btn-primary" >Agregar al carro</button>
            </div>
            </div>
            `
      })

      data.whisky.forEach((whisky) => {
        document.getElementById(`btn${whisky.id}`).addEventListener("click", function () {
          console.log("probando si agrega un whisky al carrito");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${whisky.nombre} ha sido agregado al carrito`,
            showConfirmButton: false,
            timer: 1500
          })
          comprobarElementos(whisky);
          calcularTotal();
        })

      })




      variados.forEach((variado) => {
        document.getElementById("variados").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${variado.imagen}" class="card-img-top" alt="variados ${variado.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${variado.nombre}</h5>
                </div>
                <div><p class="card-text precioTexto">Precio: ${variado.precio}</p> </div>
                <div class="card-footer">
                <button id="btn${variado.id}" class="btn btn-primary" >Agregar al carro</button>
            </div>
            </div>
            `
      })
      data.variados.forEach((variado) => {
        document.getElementById(`btn${variado.id}`).addEventListener("click", function () {
          console.log("probando si agrega un variado al carrito");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${variado.nombre} ha sido agregado al carrito`,
            showConfirmButton: false,
            timer: 1500
          })
          comprobarElementos(variado);
          calcularTotal();
        })


      })


      sinAlcohol.forEach((bebida) => {
        document.getElementById("sinAlcohol").innerHTML += `
            <div class="card" style="width: 18rem;">
            <img src="${bebida.imagen}" class="card-img-top" alt="bebida sin alcohol ${bebida.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${bebida.nombre}</h5>
                </div>
                <div><p class="card-text precioTexto">Precio: ${bebida.precio}</p> </div>
                <div class="card-footer">
                <button id="btn${bebida.id}" class="btn btn-primary" >Agregar al carro</button>
            </div>
            </div>
            `
      })

      data.sinAlcohol.forEach((bebida) => {
        document.getElementById(`btn${bebida.id}`).addEventListener("click", function () {
          console.log("probando si agrega una bebida al carrito");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${bebida.nombre} ha sido agregado al carrito`,
            showConfirmButton: false,
            timer: 1500
          })

          comprobarElementos(bebida);
          calcularTotal();
        })

      })

    })




}

postearData();


// boton de finalizar compra utilizando Sweet Alert

let finalizarCompra = document.getElementById("finalizar-compra");

finalizarCompra.addEventListener("click", () => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estas seguro de la compra?',
    text: "¡Asegurese de corroborar antes de comprar!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí,¡Comprar!',
    cancelButtonText: 'No, ¡Cancelar!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Compra realizada con éxito!',
        text: 'Gracias por elegirnos, será redirigido al inicio en segundos',
        imageUrl: 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/04/10/5e9979503d769.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'brindis-cerveza'
      })
      localStorage.clear();
      console.log("Compra con exito, el user sera redirigido para el inicio en 4 segundos");
      setTimeout(()=>{
        window.location = "./index.html";
      }, "4000")
      
    } else {
      console.log("testeando si pudo cancelar bien");
      window.location = "./index.html";

    }
  })

})


// Agrega los productos al carrito y al modal
function comprobarElementos(item) {
  if (carritoCompra.some((elemento) => elemento.id === item.id)) {
    item.cantidad++;
    conteoProductos++;
    renderizarCarrito();
    console.log("Se agrego otro producto que ya se encontraba en el carrito");
    console.log(carritoCompra);
  } else {
    carritoCompra.push(item);
    conteoProductos++;
    renderizarCarrito();
    console.log("Se agrego la primera bebida de esta marca al carrito");
    console.log(carritoCompra);
  }
}

function renderizarCarrito() {
  document.getElementById("carrito-body").innerHTML = ``;
  carritoCompra.forEach(item => {
    document.getElementById("carrito-body").innerHTML +=
      `
                    <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${item.imagen}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${item.nombre}</h5>
                          <p class="card-text">Precio: $${item.precio}</p>
                          <p class="card-text">Cantidad: 
                            <button id="disminuir${item.id}">
                              <i class="fa-solid fa-minus"></i>
                            </button> 
                              ${item.cantidad} 
                            <button id="aumentar${item.id}">
                              <i class="fa-solid fa-plus"></i>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                    `

   
    calcularTotal();

  })
  calcularTotal();
  agregarCantidad();
  disminuirCantidad();
  meterCarritoLocal("carroJson", JSON.stringify(carritoCompra));

}


function agregarCantidad() {
  carritoCompra.forEach(item => {
    document.getElementById(`aumentar${item.id}`).addEventListener("click", () => {
      console.log("entro aca");
      if (item.cantidad >= 0 && item.cantidad < 10) {
        item.cantidad++;
        console.log("se esta sumando");
        renderizarCarrito();
        calcularTotal();
        conteoProductos++;
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `¡No puedes agregar mas de 10 items de: ${item.nombre}!`,
          footer: '<a href="./index.html">Ir al inicio</a>'
        })
      }
    })
  })

}

function disminuirCantidad() {
  carritoCompra.forEach(item => {
    document.getElementById(`disminuir${item.id}`).addEventListener("click", () => {
      console.log("entro aca");
      if (item.cantidad > 0) {
        item.cantidad--;
        conteoProductos--;
        console.log("se esta restando");
        renderizarCarrito();
        renderizarPrecio(item);
        calcularTotal();
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `¡No puedes eliminar si no hay elementos para quitar!`,
          footer: '<a href="./index.html">Ir al inicio</a>'
        })
      }
    })
  })
}




const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Almacenar productos y obtenerlos en el local storage
let meterCarritoLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
let recuperarCarritoLocal = JSON.parse(localStorage.getItem("carroJson"));


if (recuperarCarritoLocal) {
  carritoCompra = recuperarCarritoLocal;
  renderizarCarrito();
}



function calcularTotal(){

  let total = carritoCompra.reduce((acc, ite)=>acc + ite.precio * ite.cantidad ,0)

 precioTotal.innerHTML = `<h6>El precio total es : $${total}</h6>`
  ;
}

// interaccion el boton del formulario de contacto


botonContacto.addEventListener("click",()=>{
  console.log("entro xd");

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tu mensaje ha sido enviado correctamente',
    showConfirmButton: false,
    timer: 1500
  })
})

carroNumero.innerHTML=`<p>${conteoProductos}</p>`;