let btnToggle = document.getElementById("btnToggle")

if(localStorage.getItem("modoOscuro")){
    
}else{
    localStorage.setItem("modoOscuro", false)
    
}

btnToggle.addEventListener("click", ()=>{

    document.body.classList.toggle("darkMode")

    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        btnToggle.innerText = `Light`
        btnToggle.className = ("btn btn-light")
        
        localStorage.setItem("modoOscuro", true)
       
    }else if
    (JSON.parse(localStorage.getItem("modoOscuro")) == true){
        btnToggle.innerText = `Dark`
        
        btnToggle.className = ("btn btn-dark")
       
        localStorage.setItem("modoOscuro", false)
        

    }

})