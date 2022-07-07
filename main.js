dineroCofla = prompt("Cuanto dinero tiene Cofla?");
dineroRoberto = prompt("Cuanto dinero tiene Roberto?");
dineroPedro = prompt("Cuanto dinero tiene Pedro?");

dineroCofla = parseInt(dineroCofla);


if (dineroCofla >= 0.6 && dineroCofla < 1 ){
    alert("Cofla; compra helado de agua");
}
else if (dineroCofla >= 1 && dineroCofla <1.6){
    alert("Cofla; compra helado de heladix");
}
else if (dineroCofla >= 1.7 && dineroCofla <1.8){
    alert("Cofla; compra helado de heladovich");
}
else if (dineroCofla >= 1.8 && dineroCofla <2.9){
    alert("Cofla; compra helado de helardo");
}
else if (dineroCofla >= 2.9){
    alert("Cofla; podes comprar helado de confites o pote 1/4kg y el vuelto es " + (dineroCofla - 2.9));
}
else {
    alert("lo siento Cofla, no tenes dinero");
}

if (dineroRoberto >= 0.6 && dineroRoberto < 1 ){
    alert("Roberto; compra helado de agua");
}
else if (dineroRoberto >= 1 && dineroRoberto <1.6){
    alert("Roberto; compra helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto <1.8){
    alert("Roberto; compra helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto <2.9){
    alert("Roberto; compra helado de helardo");
}
else if (dineroRoberto >= 2.9){
    alert("Roberto; podes comprar helado de confites o pote 1/4kg");
}
else {
    alert("lo siento Roberto, no tenes dinero");
}

if (dineroPedro >= 0.6 && dineroPedro < 1 ){
    alert("Pedro; compra helado de agua");
}
else if (dineroPedro >= 1 && dineroPedro <1.6){
    alert("Pedro; compra helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro <1.8){
    alert("Pedro; compra helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro <2.9){
    alert("Pedro; compra helado de helardo");
}
else if (dineroPedro >= 2.9){
    alert("Pedro; podes comprar helado de confites o pote 1/4kg");
}
else {
    alert("lo siento Pedro, no tenes dinero");
}