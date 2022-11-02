let carrito = document.getElementById("carrito");


let pedirEdad = parseInt(prompt(`Bienvenido a ChupeShop!\nPara poder visualizar nuestra web debe ser igual o mayor a 18 años.\nIngrese su edad:`));
if(pedirEdad >=18){
    alert("Usted puede visualizar la web ya que es mayor de edad. Bienvenido!!");
}else{
    alert("Usted debe abandonar el sitio ya que es menor de edad.\nVuelva cuando sea mayor!");
    // CON ESTA FUNCIÓN ECHAMOS AL USER MENOR Y LO REDIRIGIMOS A UN VIDEO DE YT
    // setTimeout( function() { window.location.href = "https://youtu.be/XqZsoesa55w"; }, 10 );
}

let productos = document.getElementById("productos");
const prod = [
    {
        id: 1,
        nombre: "cerve1",
        precio: 100,
        img: "imgs/cervezas/cervezaAguila.jpg"
    },
    {
        id: 2,
        nombre: "cerve2",
        precio: 110,
        img: "imgs/cervezas/cervezaCorona.jpg"
    },
    {
        id: 3,
        nombre: "cerve3",
        precio: 120,
        img: "/imgs/cervezas/cervezaPatagonia.jpg"
    },
    {
        id: 4,
        nombre: "cerve4",
        precio: 159,
        img: "/imgs/cervezas/cervezaPeroni.jpg"
    },
    {
        id: 5,
        nombre: "cerve5",
        precio: 133,
        img: "/imgs/cervezas/cervezaPilsen.jpg"
    },
    {
        id: 6,
        nombre: "cerve6",
        precio: 177,
        img: "/imgs/cervezas/cervezaBudweiser.jpg"
    }
];
for(e of prod){
    let prods = document.createElement("div");
    prods.innerHTML =
    `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${e.img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${e.nombre}</h5>
      <p class="card-text">Precio: ${e.precio}</p>
      <a href="#" id="boton" class="btn btn-primary">Agregar al carro</a>
    </div>
  </div>
    `
    productos.append(prods)
}

carrito.addEventListener("click", ()=> {
    console.log("testeando");
    window.location = "carrito.html";
})


