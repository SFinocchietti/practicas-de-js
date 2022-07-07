// function edad(){   
//     edad = prompt("Ingresa tu edad");
//     if (edad > 18) {
//         alert("Podes pasar")
//     } else {
//         alert("Sos menor, no pasas")
//     }

// }

// edad();

// function horario(){
//     horario = prompt("Que hora es?")
//     if (horario > 2){
//         alert("Podes entrar sin pagar")
//     } else {
//         alert("Tenes que pagar 200$")
//     }
// }

// horario();

let free = false;

const validarCliente = (time) =>{
    let edad = prompt("Cual es tu edad?");
    if (edad > 18 ) {
        if (time >= 2 && time < 7 && free == false){
            alert("podes pasar gratis porque sos la primer persona despues de las 2am");
            free = true;
        } else {
            alert (`son las ${time} :00Hs y podes pasar, pero tenes que pagar la entreda`);
        }
    } else {
        alert("sos menor, no podes ingresar");
    }
}

validarCliente(23);
validarCliente(2);
validarCliente(6);

document.write("<br>")

let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del Alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, p ) =>{
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (i = 0; i < 30; i ++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________Asistencias : ${alumnosTotales[alumno][1]}<br>
    ___________Ausencias : ${30 - alumnosTotales[alumno][1]}`;
    if(30 - alumnosTotales[alumno][1] > 18 ){
        resultado+= " Reprobado por inasistencia <br><br>"
    } else {
        resultado+= "<br><br>"
    } document.write(resultado);
}

document.write("<br>")

/*********************************************************************************/
/*********************************Crear una calculadora**************************/

const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);    
}
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const multi = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}
const divi = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}

alert("Que operacion queres realizar?");
let operacion = prompt("1: sumar , 2: restar , 3: multiplucar , 4 dividir")

if (operacion == 1){
    let num1 = prompt("ingresa el primer numero para sumar");
    let num2 = prompt("ingresa el segundo numero para sumar");
    alert(`El resultado es ${suma(num1,num2)}`);
} else if (operacion == 2){
    let num1 = prompt("ingresa el primer numero para restar");
    let num2 = prompt("ingresa el segundo numero para restar");
    alert(`El resultado es ${resta(num1,num2)}`);
}else if (operacion == 3){
    let num1 = prompt("ingresa el primer numero para multiplicar");
    let num2 = prompt("ingresa el segundo numero para multiplicar");
    alert(`El resultado es ${multi(num1,num2)}`);
}else if (operacion == 4){
    let num1 = prompt("ingresa el primer numero para dividir");
    let num2 = prompt("ingresa el segundo numero para dividir");
    alert(`El resultado es ${divi(num1,num2)}`);
} else {
    document.write("operacion invalida")
}


