let pedirEdad = parseInt(prompt(`Bienvenido a ChupeShop!\nPara poder visualizar nuestra web debe ser igual o mayor a 18 años.\nIngrese su edad:`));
if(pedirEdad >=18){
    alert("Usted puede visualizar la web ya que es mayor de edad. Bienvenido!!");
}else{
    alert("Usted debe abandonar el sitio ya que es menor de edad.\nVuelva cuando sea mayor!");
    // CON ESTA FUNCIÓN ECHAMOS AL USER MENOR Y LO REDIRIGIMOS A UN VIDEO DE YT
    setTimeout( function() { window.location.href = "https://youtu.be/XqZsoesa55w"; }, 10 );
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
      <a href="#" class="btn btn-primary">Agregar al carro</a>
    </div>
  </div>
    `
    productos.append(prods)
}


