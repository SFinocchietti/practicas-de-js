
let pc = {
    monitor : "rectangular",
    teclado : "mecanico",
    procesador : "Core7",
    memoria : "16gb",
    sonido : "parlantes"
};

// document.write(pc["monitor"]);

let monitor = pc["monitor"];
let teclado = pc["teclado"];
let procesador = pc["procesador"];
let memoria = pc["memoria"];
let sonido = pc["sonido"];



frase = `Mi pc tiene un monitor: ${monitor}, <br> 
con un teclado ${teclado}, <br>
con un procesador: ${procesador}, <br>
de memoria tiene ${memoria}, <br>
y con sonido por ${sonido}`;

document.write(frase);


