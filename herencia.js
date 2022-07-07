class Animal {
    constructor (especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${especie} de ${edad} y de color ${color}`;
    }
    verInfo(){
        document.write(this.info);
    }
}
class Perro extends Animal {
    constructor(especie, edad, color, raza){
    super(especie,edad,color);
    this.raza = raza;
    }
    ladrar(){
        alert("Guau");
    }
}

let perro = new Perro ("perro", 5, "marrón", "doberman <br>");
let gato = new Animal ("gato", 3, "negro <br>");



perro.ladrar();

