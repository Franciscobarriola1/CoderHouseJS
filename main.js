
let precioRemera = 2500;
let precioPantalones = 3500;
let precioZapatillas = 5000;
let precioGorra = 1500;
let precioMedias = 500;

// Creo clases

class Ropa{
    constructor(tipo,marca,talle,precio){
        this.tipo = tipo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
}
//Objetos con distinto talle
const remeraRealMadrid = new Ropa ("remera","Adiddas","large",19000);
const remeraBarcelona = new Ropa ("remera","Nike","medium",18000);
const remeraLiverpool = new Ropa ("remera","Nike","small",15000);
const remeraPSG= new Ropa ("remera","Nike","XL",20000);
const remeraAjax = new Ropa ("remera","Adiddas","XXL",10000);

//Array de Objetos Creados
const camisetas = [remeraRealMadrid, remeraBarcelona, remeraLiverpool, remeraPSG, remeraAjax];

/* console.log(camisetas[2])
//Sort Por Precio menor mayor
console.log(camisetas.sort((a, b) => parseInt(a.precio) - parseInt(b.precio)))
//Sort Por precio Mayor menor
console.log(camisetas.sort((a, b) => parseInt(b.precio) - parseInt(a.precio))) */



function nuevaVestimenta(){
    const tipoIngresado = prompt("Igresar tipo de vestimenta: ");
    const marcaIngresado = prompt("Ingresar la marca de la vestimenta: ");
    const talleIngresado = prompt("Ingresar el talle de la vestimenta: ");
    const precioIngresado = parseInt(prompt("Ingresar el precio de la vestimenta: "));
    const nuevaRopa =  new Ropa (tipoIngresado, marcaIngresado, talleIngresado, precioIngresado)
    
    camisetas.push(nuevaRopa);
    console.log(camisetas)
   
}



function buscarTalle(){
    alert('Talles son : small, medium, large, XL , XXL')
    let talleSeleccionado = prompt("Elija su talle:")
    let resultado = camisetas.find(obj => {/* 
        console.log(obj.talle === talleSeleccionado); */
        return obj.talle === talleSeleccionado;
    })
    if(resultado){
        console.log(resultado)
    }else{
        alert('El talle es inexistente')
    }
}

// Uncaught ReferenceError: Cannot access 'ropa' before initializationat precioRopa (main.js:96:21) at main.js:128:1 (resuelto)
function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 

function consultarCatálogo(array){
    console.log(`Prendas disponibles: `)
        for(let camiseta of array){
            console.log(camiseta.tipo, camiseta.marca, camiseta.talle, camiseta.precio)
        }
         

}

function preguntarOpcion(exit){
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
               1 - Comprar Vestimenta
               2 - Agregar Vestimenta
               3 - Consultar Catálogo:
               4 - Encontrar por talle:
               5 - placeHolder:
               0 - Exit`))
   
            switch(opcionIngresada){
                case 1:
                    realizarCompra()
                    break;
                case 2:
                    nuevaVestimenta()
                    break;
                case 3:
                    consultarCatálogo(camisetas)
                    break
                case 4:
                    buscarTalle()
                    break
                case 5:
                    break
                case 0:
                    console.log('Gracias por visitarnos, vuelva pronto')
                    exit = true
                    return exit
                    break
                default:
                    console.log('Opción Incorrecta')
                    break
            }

        }


        function realizarCompra(){
            let nombre = prompt("Ingrese su nombre:")
            let apellido = prompt ("Ingrese su apellidio")
            console.log("Bienvenido " + nombre + " " + apellido)
            let cantidadRopa = parseInt(prompt("Actualmente se encuentra a la venta remeras, pantalones, zapatillas, gorras y medias. ¿Cuantos Articulos desea llevar?"))
       
            let total = 0;
            for (let i=1;  i <= cantidadRopa; i++){
                let ropa = parseInt(prompt("Selecionar:\n Remera=1\n Pantalones=2\n Zapatillas=3\n Gorra=4\n Medias=5"))
                
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


 preguntarOpcion();