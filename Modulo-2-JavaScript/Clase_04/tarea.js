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
 *   tarea clase 4 javaScript                                                                                                         
 *                                                                                                            
 *   Agregar 15 elementos a un array del objeto "persona" con diferente data.
 * 
 *   mostrar el promedio de edades
 * 
 *   filtrar por nombre o apellido un valor ingresado por el usuario que coincida por letra o palabra                                                                                                         
 *                                                                                                            
 *                                                                                                            
 *                                                                                                            
 */
`));


let arrayPersona = [];


let createPersona = (firstName, lastName, age, status)=>{
    let persona = {
        firstName,
        lastName,
        age,
        status

    }

    return persona;
}


let add = (arr, obj)=> {arr.push(obj)};




add(arrayPersona, createPersona("pepe", "pipi", 23, 1));

add(arrayPersona, createPersona("lucas", "lopez", 44, 2));

add(arrayPersona, createPersona("eduardo", "severin", 34, 2));

add(arrayPersona, createPersona("juan", "sintierra", 14, 3));

add(arrayPersona, createPersona("carlos", "quinto", 50, 3));

add(arrayPersona, createPersona("juan", "carrizo", 20, 2));

add(arrayPersona, createPersona("laura", "luz", 17, 1));

add(arrayPersona, createPersona("julio", "roca", 19, 2));

add(arrayPersona, createPersona("carlos", "martell", 32, 1));

add(arrayPersona, createPersona("alejandra", "borenztein", 40, 3));

add(arrayPersona, createPersona("maria", "estuardo", 12, 1));

add(arrayPersona, createPersona("JuanCarlos", "batman", 60, 3));


console.table(arrayPersona);


let input = prompt(colors.yellow("Ingrese una busqueda: "));


let busqueda = arrayPersona.filter((elemento)=> {
    if((elemento.firstName).includes(input) || (elemento.lastName).includes(input)){
        return elemento;
    }
});

console.table(busqueda);

