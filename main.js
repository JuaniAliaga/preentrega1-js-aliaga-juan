
const PRODUCTO1 = 25;
const PRODUCTO2 = 50;
const PRODUCTO3 = 75;
let cantidad;
let total = 0;
let opcion;
let agregar;


function calculo(total,producto,cantidad) {
    return total + producto*cantidad
}

alert("Bienvenido a nuestro carrito, presione aceptar para comenzar");



    do{

        opcion = parseInt (prompt("Bienvenido a nuestra tienda, que producto desea elegir?" + "\n" +
"Producto 1: $" + PRODUCTO1 + "\n" +
"Producto 2: $" + PRODUCTO2 + "\n" +
"Producto 3: $" + PRODUCTO3 + "\n"));


        
switch (opcion) {

    case 1:
    cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
    total = calculo (total,PRODUCTO1,cantidad);
        break;

    case 2:
    cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
    total = calculo(total,PRODUCTO2,cantidad)
    break;

    case 3:
    cantidad = parseInt(prompt("Ingrese la cantidad que desea"));
    total = calculo(total,PRODUCTO3,cantidad)
        break;
    
    default:
        alert("Ingrese una opcion correcta");
}
agregar = prompt("Deseas agregar mas productos al carrito? si/no")
} while (agregar == "si")





alert("El total a pagar de su compra es de: $" + total)