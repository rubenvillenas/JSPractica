/* tipos de datos
console.log("Esto es una cadena");
alert('Funcionando'); 

let passDB = "ADMIN1234";
let input = "ADMIN1234";
let result = input == passDB;

if (result == true)
{
console.log("LoginCorrecto");
}
else
{
console.log("LoginInCorrecto");
}
================================================================
let score = 10;

if(score >15)
{
    console.log("VamosPorMas");
}
else if(score >30)
{
    console.log("Mejoraste");
}
else
{
    console.log("MaloQlo")
}
================================================================
let typeCard = 'reditCard';
switch(typeCard)
{
    case "DebidCard":
        console.log("EstaEsUnaTarjetaDebito");
        break;
    case "CreditCard":
        console.log("EstaEsUnaTarjetaCredito");
        break;
    default:
        console.log("SinTarjeta");
}
================================================================
let count = 0;
while(count < 50){
    console.log(count);
    count = count + 1;
}
//ARREGLOS
let names = ["ruben","marco","diego"];
//console.log(names[2]);
//console.log(names.length);
for(let ind=0; ind < names.length; ind++) {//ind es menor long max, ejecuta el console y suma 1
    console.log(names[ind]);
}
for(let ind = names.length - 1; ind >= 0; ind--) {//ind es mayo igual long max, ejecuta el console y resta 1
    console.log(names[ind]);
}
================================================================*/
//INTRUCCIONES Y PARAMETROS ()
function saludar() {
    console.log('HHH');
}
saludar("HOLA FUNCION");