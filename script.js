////////////////
//    MENU    //
///////////////
function MENU(){
    let exitMenu = false
    do{
        let selector = parseInt(prompt(`
        Bienvenido a la APP de SURF CLUB  ${nombre}!
        
        Seleccione una accion:
        1 - Medidor de vela para kitesurf
        2 - Ver nuestros modelos de Balance Board
        3 - Personalizar tu Balance Board
        4 - Administrar tu carrito
        0 - Exit`))
        
        switch(selector){
            case 1:
                iniciarMedidor()
            break
            case 2:
                verTodas()
            break
            case 3:
                personalizarTabla()
            break
            case 4:
                administrarCarrito()
            break
            case 0:
                alert('Un gusto tenerte en nuestra web!!')
                exitMenu = true
            break
            default:
                alert('Error, ingresa del 1 al 4 para elegir una funcion. Si queres salir ingresa 0')
            break
        }
    }while(!exitMenu)
}

////////////////////////
//CASE 1 - MENU PRINCIPAL
//Iniciadora de APP MEDIDOR DE VELAS kitesurf
function iniciarMedidor(){
    let salir = false
    while(!salir){
        let pregunta = prompt(`Queres probar nuestro medidor?
        - Si
        - No`)
        if(pregunta.toLowerCase() == "no"){
            alert("Saludos!")
            salir = true
        }else if(pregunta.toLowerCase() == "si"){
            medidor()
        }else{
            alert("Respuesta incorrecta, ingrese 'si' o 'no' ")
        }
    }
}

//Aplicacion MEDIDOR DE VIENTO
function medidor(){
    let nudos = prompt("Ingresa en numeros la cantidad de nudos que sopla en tu spot.");
    
    if (nudos <= 10){
        alert("Hay muy poco viento, espera a otro dia que sople, no seas manija.");
    }
    else if ((nudos >= 11) && (nudos <= 19)){
        alert("Usa el kite 12 de metros.");
    }
    else if ((nudos >= 20) && (nudos <= 23)){
        alert("Usa el kite de 10 metros.");
    }
    else if ((nudos >= 24) && (nudos <= 28)){
        alert("Usa el kite de 9 metros.");
    }
    else if ((nudos >= 29) && (nudos <= 35)){
        alert("Usa el kite de 7 metros.");
    }
    else {
        alert("Peligro!!! Hay mucho mucho viento. No Apto para kitesurf.");
    }
}

/////////////////////////
//CASE 2 - MENU PRINCIPAL 
//Ver todas las tablas
function verTodas(){
    let exitMenuu = false
    do{
        let eleccion3 = parseInt(prompt(`
        Seleccione una opcion             
        1 - Ver todos los modelos con detalles
        2 - Ver los modelos ordenados por precio
        3 - Buscar stock de un modelo especifico
        0 - Volver al menu principal
        `))
            switch(eleccion3){
                    case 1:
                        verTablas(tablas)
                    break
                    case 2:

                    break
                    case 3:
                        buscarModelo(tablas)
                    break
                    case 0:
                        exitMenuu = true
                    break
                    default:
                        alert("Ingrese con numeros del 1 al 3 para realizar una accion. Ingrese 0 para salir.")
                    break
                    }
    }while(!exitMenuu)
}

//Ver catalogo
function verTablas(tablas){
    tablas.forEach((tabla)=>{
        alert(`MODELO:  
        Nombre: ${tabla.nombre} 
        Precio: ${tabla.precio}
        Width: ${tabla.width}
        Heigth: ${tabla.heigth} `)
    })
}

//Consulta stock nombre de tablas
function buscarModelo(array){
    let modeloBuscado  = prompt(`    Fabricamos los modelos:

    - Wakeboard
    - Skate
    - Retrofish
    - Shortfish
    - Snowboard
    - Bigwave
    - Longboard
    - Kiteboard

    Escribi la que quieras consultar si tenemos en stock.
    `).toUpperCase()
    let modeloEncontrado = array.find(
        (board)=> board.nombre == modeloBuscado
        )
    if( modeloEncontrado == undefined){
        alert("No hay stock")
    }else {
        alert( "Hay stock")
    }
}

/////////////////////////
//CASE 3 - MENU PRINCIPAL
//clase CONSTRUCTORA de objetos (tablas personalizadas por clientes)
class tablaPer{
    constructor (tail, color, largo, ancho) {
        this.tail = tail;
        this.color = color;
        this.largo = largo;
        this.ancho = ancho;
    }
}

//Function INSTANCIADORA de objetos (tablas personalizadas por clientes) + push carrito
function personalizarTabla(){
    let tail = prompt(`Escriba el tipo de Tail para su tabla:
    - Short
    - Fish
    - RetroFish
    - Wake `)
    let color = prompt(`Escriba el color de la tabla.
Tenemos en stock:
    - Rojo
    - Azul
    - Negra`)
    let largo = parseInt(prompt("Ingrese el largo en cm de la tabla"))
    let ancho = parseInt(prompt("Ingrese el ancho en cm de la tabla"))
    const tablaPersonalizada = new tablaPer(tail, color, largo, ancho)
    carrito.push(tablaPersonalizada) 
    tablasPersonalizadas.push(tablaPersonalizada)
    alert(`Tu tabla perzonalizada ${tablaPersonalizada.tail.toUpperCase()} fue cargada al carrito con exito.
            Color: ${tablaPersonalizada.color}
            Largo: ${tablaPersonalizada.largo}
            Ancho: ${tablaPersonalizada.ancho}`)
}

/////////////////////////
//CASE 4 - MENU PRINCIPAL
//Function administradora de carrito 
function administrarCarrito(){
    let exitMenuuu = false
    do{
        let eleccion4 = parseInt(prompt(`
        Seleccione una opcion             
        1 - Ver tu carrito de compras
        2 - Borrar carrito
        0 - Volver al menu principal
        `))
            switch(eleccion4){
                    case 1:
                        if(carrito.length == 0){
                            alert("Su carrito esta vacio")
                        }else{
                            verCarrito(carrito)}
                    break
                    case 2:
                        carrito.splice(0, carrito.length)
                        alert(`Tu carrito tiene ${carrito.length} productos. Fue borrado con exito!`)
                    break
                    case 0:
                        exitMenuuu = true
                    break
                    default:
                    alert("Ingrese con numeros del 1 al 2 para realizar una accion. Ingrese 0 para salir.")
                    break
            }
        }while(!exitMenuuu)
    }

//Function para ver array carrito
function verCarrito(carrito){
    carrito.forEach((personalizarTabla)=>{
        alert(`Tienes ${tablasPersonalizadas.length} "Tabla Personalizada" en tu carrito: 
        Tail: ${personalizarTabla.tail}
        Color: ${personalizarTabla.color}
        Largo: ${personalizarTabla.largo}
        Ancho: ${personalizarTabla.ancho} `)
    })
}

//Saludo final 
function gracias(nombre){
    alert("Gracias por utilizar nuestra aplicacion, buenos vientos " + nombre + "!!!");
    console.log("Gracias por ver mi codigo programador ;)");
}

// clase  CONSTRUCTORA de objetos (tablas estandar)
class tabla {
    constructor (nombre, precio, width, heigth) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.width   = width;
        this.heigth  = heigth;
    }
    mostrarNombre (){
        console.log("Tu tabla"+ this.nombre + "fue cargada al sistema con exito")
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

//ARRAY de tablas estandar
const tablas = []

//ARRAY de tablas personalizadas 
const tablasPersonalizadas = []

//ARRAY de carrito
const carrito = []

//INSTANCIACION de objetos (tablas estandar)
const retrofish = new tabla("retrofish", 5600, 36, 74);
const shortfish = new tabla("shortfish", 5500, 34, 75);
const longboard = new tabla("longboard", 6000, 37, 85);
const kiteboard = new tabla("kiteboard", 5100, 34, 74);
const wakeboard = new tabla("wakeboard", 5500, 35, 75);

//AGREGAMOS OBJETOS al array tablas estandar
tablas.push(retrofish, shortfish, longboard, kiteboard, wakeboard);
tablas.push(new tabla("bigwave", 5800, 36, 76));

//BUCLE FOR para sumar iva a las tablas estandar
for(const sumarI of tablas){
    sumarI.sumaIva();
}



/////////////////
//    GO      //
///////////////
const nombre = prompt("Ingrese su nombre");
MENU();
gracias(nombre);


