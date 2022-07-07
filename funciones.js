/*Function = se usa para reutilizar codigo y no escribir tanto, ejemplo */

function saludar(){
    respuesta = prompt("Buen dia, como estas?")
    if (respuesta == "bien" ){
        alert("que bueno");
    } else {
        alert("una pena");
    }
}

saludar();


/*Funciones con "return"*/

function saludo(){
    alert("Hola que tal");
    return "como estas?";
}

let hola = saludo();

document.write(hola)
document.write("<br>")

/*********Pasar un valor a la funcion por parametro *******/

function suma (num1, num2){
    let res = num1 + num2;
    document.write(res);
    document.write("<br>");
}
document.write("el resultado es: ");
suma(30,12);

document.write("<br>")


/*********Funcion flecha => *******/
/*********cumple la misma funcion que la palabra "function", pero se reemplaza con => *******/

// const saludar1 = function (nombre){
//     let frase = `Hola ${nombre}! ¿Como te va?`;
//     document.write(frase)
// }


const saludar1 = (nombre) =>{
    let frase = `Hola ${nombre}! ¿Como te va?`;
    document.write(frase)
}

saludar1("Lucio");