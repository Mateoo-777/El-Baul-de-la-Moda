function agregarCarrito(nombre, precio){

    let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];

    const existe =
    carrito.find(item => item.nombre === nombre);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push({
            nombre:nombre,
            precio:precio,
            cantidad:1
        });

    }

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    alert("Producto agregado al carrito");
}