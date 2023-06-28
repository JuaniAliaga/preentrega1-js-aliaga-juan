
const productos = [
    { nombre: "Gomitas", precio: 25, marca: "Mogul" },
    { nombre: "Chicle", precio: 50, marca: "Topline" },
    { nombre: "Chocolate", precio: 75, marca: "Block" },
    { nombre: "Galletitas", precio: 100, marca: "Toddy" }
];

const detalleFactura = [];
let cantidad;
let total = 0;
let opcion;
let agregar;



alert("Bienvenido a nuestro carrito, presione aceptar para comenzar");

function ejecucionDePrograma() {

    do {
        const listaStringProductos = productos.map(
            (product, index) => `
                    ${index + 1}: ${product.nombre} precio: ${product.precio}
`);
        opcion = parseInt(
            prompt("Que producto desea elegir?" + "\n" + listaStringProductos.join('\n')));

        while (opcion <= 0 || opcion > productos.length || isNaN(opcion)) {
            opcion = parseInt(
                prompt("Ingrese una opción válida" + "\n" + listaStringProductos.join('\n')));
        }

        cantidad = parseInt(prompt("Ingrese la cantidad que desea"));

        while (cantidad <= 0 || isNaN(cantidad)) {
            cantidad = parseInt(prompt("Ingrese una cantidad valida"));
        }

        detalleFactura.push({
            nombre: productos[opcion - 1].nombre,
            precioUnitario: productos[opcion - 1].precio,
            cantidad,
            subtotal: productos[opcion - 1].precio * cantidad
        });

        agregar = prompt("Deseas agregar mas productos al carrito? si/no").toLowerCase();

    } while (agregar == "si")

    total = detalleFactura.reduce((acc, itemFactura) => acc + itemFactura.precioUnitario * itemFactura.cantidad, 0);

    const detalleFacturaString = detalleFactura.map((itemFactura) =>
        `Producto: ${itemFactura.nombre}, Cantidad: ${itemFactura.cantidad}, Subtotal: $${itemFactura.subtotal}`);

    alert("El total a pagar de su compra es de: $" + total + "\n" + "\n" + detalleFacturaString.join('\n'));
}

ejecucionDePrograma()