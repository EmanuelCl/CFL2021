let suma=0;
let azucar=document.getElementById("comprarAzucar");
let fideos=document.getElementById("comprarFideos");
let harina=document.getElementById("comprarHarina");
let masita=document.getElementById("comprarMasita");
let pan=document.getElementById("comprarPan");
let facturas=document.getElementById("comprarFacturas");
let arroz=document.getElementById("comprarArroz");
let pure=document.getElementById("comprarPure");
let total=document.getElementById("total");
let resultado=document.getElementById("resultado");


azucar.addEventListener("click" , sumarAzucar);
fideos.addEventListener("click" , sumarFideos);
harina.addEventListener("click" , sumarHarina);
masita.addEventListener("click" , sumarMasita);
pan.addEventListener("click" , sumarPan);
facturas.addEventListener("click" , sumarFacturas);
arroz.addEventListener("click" , sumarArroz);
pure.addEventListener("click" , sumarPure);
total.addEventListener("click" ,mostrar);

function sumarPure() {
    sumarProducto(90);
}

function sumarArroz() {
    sumarProducto(120);
}

function sumarFacturas() {
    sumarProducto(250);
}

function sumarPan() {
    sumarProducto(200);
}

function sumarMasita() {
    sumarProducto(40);
}

function sumarHarina() {
    sumarProducto(65);
}

function sumarFideos() {
    sumarProducto(70);
}

function sumarAzucar() {
    sumarProducto(50);
}
function sumarProducto(precioProducto) {
    suma=suma + precioProducto;
}
function mostrar() {
    resultado.innerHTML=" Precio Final: " + suma
}