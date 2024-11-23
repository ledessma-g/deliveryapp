function realizarPedido(){
    let nombreIng = document.getElementById("input-nombre").value
    let nombreIng1 = nombreIng.innerHTML
    let direccionIng = document.getElementById("input-direccion").value
    let direccionIng1 = direccionIng.innerHTML
    let comboIng = document.getElementById("menu-platos").value
    let tipoIng = document.getElementById("menu-tipo-combo").value
    let cantidadIng = document.getElementById("input-cantidad").value
    let cantidadIng1 = cantidadIng.innerHTML
    let medioPago = document.getElementById("medio-de-pago").value
    let cuponIngresado = document.getElementById("input-cupon").value
    let cuponValido = "DELIVERYTENOFF"

    if(nombreIng && direccionIng && tipoIng){
        if(cuponIngresado === cuponValido && medioPago === "efectivo"){
            let costoTotal = (tipoIng * cantidadIng) * 0.85
            if(confirm("El precio total es " + costoTotal + ". ¿Desea realizar el pedido?")){
                document.getElementById("parrafo-estado-pedido").innerHTML = "Gracias, " + nombreIng + ". Tu pedido de " + comboIng + " va en camino a " + direccionIng + " con costo total de " + costoTotal + "."
            }
        }else if(cuponIngresado === cuponValido){
            let costoTotal = (tipoIng * cantidadIng) * 0.90
            if(confirm("El precio total es " + costoTotal + ". ¿Desea realizar el pedido?")){
                document.getElementById("parrafo-estado-pedido").innerHTML = "Gracias, " + nombreIng + ". Tu pedido de " + comboIng + " va en camino a " + direccionIng + " con costo total de " + costoTotal + "."
            }
        }else if(medioPago === "efectivo"){
            let costoTotal = (tipoIng * cantidadIng) * 0.95
            if(confirm("El precio total es " + costoTotal + ". ¿Desea realizar el pedido?")){
                document.getElementById("parrafo-estado-pedido").innerHTML = "Gracias, " + nombreIng + ". Tu pedido de " + comboIng + " va en camino a " + direccionIng + " con costo total de " + costoTotal + "."
            }
        }else{
            let costoTotal = tipoIng * cantidadIng;
            if(confirm("El precio total es " + costoTotal + ". ¿Desea realizar el pedido?")){
                document.getElementById("parrafo-estado-pedido").innerHTML = "Gracias, " + nombreIng + ". Tu pedido de " + comboIng + " va en camino a " + direccionIng + " con costo total de " + costoTotal + "."
            }
        }
    }else{
        alert("Por favor completa los campos obligatorios para continuar: Nombre, dirección y cantidad")
    }

    let linkBase = "https://assets.digitalhouse.com/content/ar/sch/"
    let extension = ".png"
    document.getElementById("imagen-estado-pedido").src = linkBase + comboIng + extension
}

function mostrarDescuento(){
    alert('Código de descuento del 10%: "DELIVERYTENOFF"\nIngresar sin las comillas!')
}
