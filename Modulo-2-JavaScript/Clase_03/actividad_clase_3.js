//nota, prompt-sync no funciona en la consola de VScode, hay que levantar el archivo desde un shell, tira un error de tty.

const prompt = require("prompt-sync")({sigint: true});

//agrego el paquete "colors" para darle mas onda a la salida de la shell.

const colors = require("colors");

console.log(colors.brightMagenta(`
/***
 *    ███╗   ███╗ █████╗ ██████╗     ██████╗ ███████╗██╗         ██████╗ ██╗      █████╗ ████████╗ █████╗     
 *    ████╗ ████║██╔══██╗██╔══██╗    ██╔══██╗██╔════╝██║         ██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔══██╗    
 *    ██╔████╔██║███████║██████╔╝    ██║  ██║█████╗  ██║         ██████╔╝██║     ███████║   ██║   ███████║    
 *    ██║╚██╔╝██║██╔══██║██╔══██╗    ██║  ██║██╔══╝  ██║         ██╔═══╝ ██║     ██╔══██║   ██║   ██╔══██║    
 *    ██║ ╚═╝ ██║██║  ██║██║  ██║    ██████╔╝███████╗███████╗    ██║     ███████╗██║  ██║   ██║   ██║  ██║    
 *    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚═════╝ ╚══════╝╚══════╝    ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    
 *                                                                                                            
 *    ██████╗ ██████╗  ██████╗  ██████╗ ██████╗  █████╗ ███╗   ███╗ █████╗                                    
 *    ██╔══██╗██╔══██╗██╔═══██╗██╔════╝ ██╔══██╗██╔══██╗████╗ ████║██╔══██╗                                   
 *    ██████╔╝██████╔╝██║   ██║██║  ███╗██████╔╝███████║██╔████╔██║███████║                                   
 *    ██╔═══╝ ██╔══██╗██║   ██║██║   ██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══██║                                   
 *    ██║     ██║  ██║╚██████╔╝╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║  ██║                                   
 *    ╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝                                   
 *                                                                                                            
 *                                                                                                            
 *     ejercicios del clase 3
 * 
 * 1) PRACTICA mostrar números mayores a 10.
 * Del siguiente array de números:
 * let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];
 * Realizar un programa que imprima por consola únicamente los números mayores a 10
 * Se imaginan que sentencia usar para recorrer los elementos? (no existe sólo una)
 * 
 * 
 * 2) PRÁCTICA  Array de autos.
 * En una agencia multimarca de autos tenemos un array con los autos a la venta estacionados en la playa:
 * let autos = ["VW Up", "Renault Sandero", "VW Gol", "Fiat Uno"];
 * Nos avisan que se vendió el Fiat Uno ubicado en al ultimo lugar del estacionamiento. Entonces tenés 
 * que eliminar el último elemento.
 * Luego, entra un nuevo vehículo (un “Ford Fiesta”), por lo que hay que agregarlo en el 
 * final de la lista de autos.
 *                                                                                                       
 *                                                                                                            
 *                                                                                                            
*/`));


let numeros = [15, 2, 35, 4, 5, 16, 7, 8, 10];

console.log("\n\nEjercicio 1:\n")


numeros.forEach((elem) => {
    if(elem > 10){
        console.log(colors.yellow(elem));
    }


});


console.log("\n\nEjercicio 2:\n");



let autos = ["VW Up", "Renault Sandero", "VW Gol", "Fiat Uno"];


console.log(autos);

autos.pop();

console.log(colors.yellow(autos));

autos.push("Ford Fiesta");

console.log(colors.blue(autos));


console.log(colors.red(`\n\n/**
 * Por último, se encontró un error en la lista, equivocados se había 
 * dado de alta un VW UP cuando en realidad se trataba de un  VW Fox. 
 * Entonces hay que modificar la posición número 0 de nuestra “playa de estacionamiento” 
 * por el modelo correcto de auto.
 * Escribí el código necesario para cumplir con todos los requerimientos pedidos.
 * 
 */`));


 autos.shift();

 autos.unshift("VW Fox");

 console.log(colors.blue(autos));
