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
    if (!cumple);{
        console.log(dia);
        console.log(semana[dia]);
    }
    else {console.log("No cumple")}
}

