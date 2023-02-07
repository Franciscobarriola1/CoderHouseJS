 


// VER catalogo
function verCatalogo(array){
    console.log("Bienvenido! Nuestro catalogo es:")
    array.forEach((ropa)=>{
        console.log(ropa.id, ropa.club, ropa.marca, ropa.talle, ropa.precio)
    })
}

//BUSCAR POR CLUB para entrega final
function buscarPorClub(array){
    let clubBuscado = prompt("Ingrese la camiseta que desea buscar:")
    let clubEncontrado = array.find(
        (camiseta)=> camiseta.club.toLowerCase() == clubBuscado.toLowerCase()
        )
    if(clubEncontrado == undefined){
        console.log(`La camiseta ${clubBuscado} no está en stock`)
    }
    else{
        console.log(clubEncontrado) 
    }
}

// FUNCTION ORDENAR para entrega final

function ordenarAlfabeticamente(array){
    const ordenadoAlfabeticamente = [].concat(array)
     ordenadoAlfabeticamente.sort((a,b) => {
          if(a.club > b.club) {
            return 1
          }
          if (a.club < b.club) {
            return -1
          }
          
          return 0;
    })
    verCatalogo(ordenadoAlfabeticamente)
} 

function MayorMenor(arr){
   
    const mayorMenor = [].concat(arr)
    mayorMenor.sort((parameter1, parameter2)=>{
        return parameter2.precio - parameter1.precio
    })
    verCatalogo(mayorMenor)
}
function MenorMayor(array){
    
    const menorMayor = [].concat(array)
    
    menorMayor.sort((a,b) => a.precio - b.precio)
    verCatalogo(menorMayor)
}



function ordenarCamisetas(array){
    let option = parseInt(prompt(`
    1 - Ordenar alfabeticamente
    2 - Ordenar de mayor a menor
    3 - Ordenar de menor a mayor `))
    switch(option){
        case 1:
            ordenarAlfabeticamente(array)
        break
        case 2:
            MayorMenor(array)
        break
        case 3:
            MenorMayor(array)
        break
        default:
            console.log(`${option} no es válida`)
        break    
    }
}