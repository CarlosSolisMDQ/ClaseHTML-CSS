//nota, prompt-sync no funciona en la consola de VScode, hay que levantar el archivo desde un shell, tira un error de tty.

const prompt = require("prompt-sync")({sigint: true});

//agrego el paquyete "colors" para darle mas onda a la salida de la shell.

const colors = require("colors");





/**
 * 
 * 
 * ejercicios del laboratorio 1
 * 
 * 
 * 1) Ingresar tres valores por usuario y encontrar el mayor y el menor
 * 
 * 2) Realizar la tabla de multiplicar de un valor ingresado por usuario.
 * 
 * 3) Realizar la tabla de dividir dado un valor ingresado por usuario.
 * 
 */


//1

console.log(colors.rainbow("Ejercicios laboratorio 1 Mar del Plata Programa JavaScript\n\n\n\n\n"));


console.log(colors.red("Ingresar tres numeros para determinar el mayor y el menor"));

let val1 = 0, val2 = 0, val3 = 0;

val1 = prompt("ingrese un numero: ");
val2 = prompt("ingrese un numero: ");
val3 = prompt("ingrese un numero: ");

let menor = val3 < ((val1 < val2) ? val1 : val2) ? val3 : ((val1 < val2) ? val1 : val2);

let mayor = val3 > ((val1 > val2) ? val1 : val2) ? val3 : ((val1 > val2) ? val1 : val2);

console.log(colors.yellow("mayor: " + mayor));

console.log(colors.yellow("menor: " + menor));

//2

console.log(colors.red("Ingresar un numero para imprimir su tabla de multiplicar"));

let val4 = 0;

val4 = prompt("Ingrese un valor para multiplicar: ");

for (let i = 1; i <= 10; i++){
    console.log(colors.yellow(i + " * " + val4 + " = " + (val4*i)));
}

//3

console.log(colors.red("Ingresar un numero para imprimir su tabla de dividir"));

let val5 = 0;

val5 = prompt("Ingrese un numero para dividir: ");

for (let i = 10; i >= 1; i--){
    console.log(colors.yellow((val5*i) + " / " + val5 + " = " + i));
}
