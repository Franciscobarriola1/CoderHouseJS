// Creo clase

class Ropa{
    constructor(id,club,marca,talle,precio,imagen){
        this.id = id;
        this.club = club;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
        this.imagen = imagen;
    }
}
//Objetos con distintas Características
const camisetaBoca = new Ropa (1,"Boca Juniors","Addidas","small",19000, "Boca.jpg");

const camisetaRiver = new Ropa (2,"River Plate","Addidas","medium", 19000, "river.jpg");

const camisetaRacing = new Ropa (3,"Racing","Kappa","Large",15000, "racing.jpg");

const camisetaIndependiente = new Ropa (4,"Independiente","Puma","small",15000, "independiente.jpg");

const camisetaRealMadrid = new Ropa (5,"Real Madrid","Adiddas","large",29000, "realmadrid.jpg");

const camisetaBarcelona = new Ropa (6, "Barcelona","Nike","medium",28000, "Barcelona.jpg");

const camisetaLiverpool = new Ropa (7, "Liverpool","Nike","small",25000, "liverpool.jpg");

const camisetaPSG= new Ropa (8, "PSG","Nike","XL",25000, "psg.jpg");
