let numero = 0;

/****************Buble WHILE*********************/


while (numero < 6 ){
    numero ++;
    document.write(numero + "<br>")
}


/******************Bucle Do While***********************/

let num1 = 0;

do {

num1 ++;

document.write(num1);

}
while (num1 < 6 );

document.write("<br>")

/******************While con Breack***********************/

let num2 = 0;

while (num2 < 50){  
    num2 ++ ;
    document.write(num2);
    if(num2 == 10){
        break;
        
    }
}

document.write("<br>")

/******************FOR***********************/

for (let i = 0; i < 6 ; i++){
    document.write(i + "<br>")
}

document.write("<br>")

/******************FOR con Continue***********************/
/*Si quiero hacer un bucle y que no muestre algo del medio uso "Continue"*/
/* No se muestra el numero 12 */
for (let i = 10; i < 15; i++){
    if (i == 12){
        continue;
    }
    document.write(i + "<br>");
}

document.write("<br>")

/******************FOR IN y FOR OF***********************/

let animales = ["gato", "perro", "vaca"];

// for (animal in animales){
//     document.write(animales[animal] + "<br>");  
// }
/*Con esto obtenemos los nombres de las posiciones*/


for (animal in animales){
    document.write(animal + "<br>");  
}


document.write("<br>")

for (animal of animales){
    document.write(animal + "<br>")
}

/*Con esto muestra el valor de las posiciones*/

/*******************************************************************/
document.write("<br>")

/**************Recorrer un array dentro de otro array***************/

array1 = ["maria","lucia", "nancy"];
array2 = ["carlos", "pedro", "luis"];

for (let array in array2){
    if(array == 2){
        for (let array of array1){
            document.write(array + "<br>")
        }
    } else {
        document.write(array2[array] + "<br>")
    }

}



