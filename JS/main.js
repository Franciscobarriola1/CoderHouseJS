//TERCERA ENTREGA
// function eliminarCamiseta(array){
//     console.log("Ingrese el id que desea eliminar")
//     for(let elemento of array){
//         console.log(`${elemento.id} - ${elemento.club} de la marca ${elemento.marca}`)
//     }
//     let idEliminar = parseInt(prompt("Id a eliminar"))

//     let arrayID = array.map((camiseta) => camiseta.id)
//     console.log(arrayID)
    
//     let index = arrayID.indexOf(idEliminar)

//     array.splice(index, 1)
//     verCatalogo(array)
// }



///////////////////////////////////////////////////////////////////////////////

// AGARRAR DOM
let camisetasDiv = document.getElementById("camisetas")
let guardarCamisetasBtn = document.getElementById("guardarCamisetasBtn")
let btnVerCamisetas = document.getElementById("verCamisetas")
let ocultarCamisetasBtn = document.getElementById("ocultarCamisetas")




function mostrarCatalogo(array){
    
    camisetasDiv.innerHTML = ""

    for(let camisetas of array){
        let nuevaCamiseta = document.createElement("div")
        nuevaCamiseta.classList.add("col-12", "col-md-6", "col-lg-3", "mb-3")
        nuevaCamiseta.innerHTML = 
        `
        <div id="${camisetas.id}" class="card" style="width: 18rem;">
                <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${camisetas.imagen}" alt="${camisetas.club} de marca ${camisetas.marca}">
                <div class="card-body">
                    <h4 class="card-title">${camisetas.club}</h4>
                    <p> Marca: ${camisetas.marca}</p>
                    <p> Talle: ${camisetas.talle}</p>
                    <p class="">Precio: ${camisetas.precio}</p>
                <button id="agregarBtn${camisetas.id}" class="btn btn-outline-success">Agregar al carrito</button>
                </div>
        </div>
        `

        camisetasDiv.appendChild(nuevaCamiseta)
       
        let agregarBtn = document.getElementById(`agregarBtn${camisetas.id}`)
       
        agregarBtn.addEventListener("click", ()=>{
            // console.log(camisetas)
            console.log(`La camiseta del club ${camisetas.club} de la marca ${camisetas.marca} ha sido agregado al carrito. Vale ${camisetas.precio}`)
        })
    }
}

//CARGAR CAMISETAS
function cargarCamisetas(array){
    let clubInput = document.getElementById("clubInput")
    let marcaInput = document.getElementById("marcaInput")
    let talleInput = document.getElementById("talleInput")
    let precioInput = document.getElementById("precioInput")
    
    const camisetaNueva = new Ropa(array.length+1, clubInput.value, marcaInput.value, talleInput.value, parseInt(precioInput.value), "camiseta.jpg")
    console.log(camisetaNueva)
    
    array.push(camisetaNueva)
    console.log(array)

    localStorage.setItem("camisetas", JSON.stringify(array))
    // mostrarCatalogo(array)
    clubInput.value = ""
    marcaInput.value = ""
    talleInput.value = ""
    precioInput.value = ""
    
}


//ARRAY 
let camisetas = [];
if(localStorage.getItem("camisetas")){
    camisetas = JSON.parse(localStorage.getItem("camisetas"))
    console.log(camisetas)
}
else{
    console.log("primera vez")
    camisetas.push(camisetaBoca, camisetaRiver, camisetaRacing, camisetaIndependiente, camisetaRealMadrid, camisetaBarcelona, camisetaLiverpool, camisetaPSG)
    localStorage.setItem("camisetas", JSON.stringify(camisetas))
}


//VER U OCULTAR
guardarCamisetasBtn.addEventListener("click", ()=>{
    cargarCamisetas(camisetas)}
)

btnVerCamisetas.onclick = ()=>{mostrarCatalogo(camisetas)}

ocultarCamisetasBtn.onclick =  ()=>{
        camisetasDiv.innerHTML =""
}