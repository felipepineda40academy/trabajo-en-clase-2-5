//1. Hacer un if con operadores logicos que revise la siguiente condicion:
// Si mi edad es menor que 20 años o mayor a 60, *en mi cumpleaños compran helados de chocochips *esto es el console.log

/*
var edad = 15;

if ((edad<20)||(edad>=60)) {
    console.log('en mi cumpleaños compran helados de chocochips')
}
*/



//1.5 if con operadores logicos que revise la siguiente condicion
// si mi perro esta en la casa y mi gato tambien, *entonces estoy feliz! var perro = true; 
/*
var perro = true;
var gato = false;

if ((perro==true)&&(gato==true)){
    console.log('entonces estoy feliz');
}else{
    console.log('estoy triste');
}
*/

//2. Hacer un counter que imprima un numero del 1 al 100 pero por cada iteracion no se le suma 1, sino 3 unidades 
//ejemplo:
//1
//4
//7
/*
var numero_inicial =1;

function contador_de_numeros (numero_inicial){

    while (numero_inicial<=100){
        if (numero_inicial%3==1){
            console.log (numero_inicial);
        }
        numero_inicial=numero_inicial+3
    }

}

contador_de_numeros (numero_inicial);
*/

/*
var numero_inicial =1;

function contador_de_numeros (){

    for (var inicial =1;inicial<=100;inicial=inicial+3){
        console.log(inicial)
    }

}

contador_de_numeros();
*/

