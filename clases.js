class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy un ${especie} de ${edad} años y de color ${color}`;
    }
    verInfo () {
        document.write(this.informacion);
    }
}



let perro = new animal ("perro", 5, "marrón <br>");
let gato = new animal ("gato", 3, "negro <br>");

/*************Una forma de mostrar la informacion***************/

// document.write(perro.informacion);
// document.write(gato.informacion);




/*************Otra forma de mostrar la informacion***************/

perro.verInfo();
gato.verInfo();