console.log("Hola Mundo");
var numero1=100;
var numero2=90;
var numero3=80;
resultado=numero1+numero2+numero3;
console.log(resultado); //IMPRIMIR VARIABLE
var cadena = "(El resultado es:";
console.log(cadena);
var resultado2=cadena+resultado;
console.log(resultado2);
cadena="Lorem ipsum dolor sit \"amet\" consectetur adipisicing elit.";
console.log(cadena);

var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]; //EJEMPLO DE ARREGLOS

console.log(semana);

var cumple=true;
console.log(cumple);

for (var i = 0; i<semana.length;i++){//EJEMPLO DE OPERADORES LOGICOS "FOR"
    console.log(semana[i]);
}

for (var dia in semana){//EJEMPLO DE OPERADORES LOGICOS "FOR IN"
    if (!cumple){
        console.log(dia);
        console.log(semana[dia]);
    }else{
        console.log("Si cumple");
    }
}

function suma(){
var n1=12;
var n2=34;
var res=n1+n2;
console.log("la suma es:" +res);//concatena con el +
}
suma();

function resta(val1, val2){
    console.log(val1-val2);
}
resta(1234-5678);



var cadena="En un lugar de la mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";
for(i in letras){
    if (letras[i]=='a'){
        continue;
    }else{
        resultado+=letras[i];
    }
}
console.log(resultado)

var parrafos = document.getElementsByTagName("p");
console.log(parrafos);
parrafos[1].innerText="Nuevo Texto";
var mimensaje = document.getElementById("mensaje");
console.log(mimensaje);
mimensaje.style.background="grey";

function refrescarvalor(){
    var entrada=document.getElementById("entrada");
    mimensaje.innerHTML=entrada.value;
}