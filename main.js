
let precioRemera = 2500;
let precioPantalones = 3500;
let precioZapatillas = 5000;
let precioGorra = 1500;
let precioMedias = 500;

 
// Uncaught ReferenceError: Cannot access 'ropa' before initializationat precioRopa (main.js:96:21) at main.js:128:1 (resuelto)
   
function realizarCompra(){
    let nombre = prompt("Ingrese su nombre:")
    let apellido = prompt ("Ingrese su apellidio")
    console.log("Bienvenido " + nombre + " " + apellido)
    let cantidadRopa = parseInt(prompt("Actualmente se encuentra a la venta remeras, pantalones, zapatillas, gorras y medias. ¿Cuantos Articulos desea llevar?"))
   
    let total = 0;
    for (let i=1;  i <= cantidadRopa; i++){
        let ropa = parseInt(prompt("Selecionar:\n Remera=1, Pantalones=2, Zapatillas=3, Gorra=4, Medias=5"))
          
        switch(ropa){
            case 1:
                console.log("Has agregado 1 remera");
                total = total + precioRemera;
            break;
            case 2:
                console.log("Has agregado 1 pantalón");
                total = total + precioPantalones;
            break;
            case 3:
                console.log("Has agregado 1 par de Zapatillas");
                total = total + precioZapatillas;
            break;
            case 4:
                console.log("Has agregado 1 gorra");
                total = total + precioGorra;
            break;
            case 5:
                console.log("Has agregado 1 par de medias");
                total = total + precioMedias;
            break;
            default:
                console.log("Ingresar una opción definida")
        }
    }
    
    console.log(nombre + " " + apellido + " " + "su total igual a: " + total + "$")
    
}
realizarCompra();

