// 1 - Triangulo

let charact = "#";
let size = 7;
let line= "";
for (let i = 0; i < size; i++) {
    line+=charact;
    console.log(line);
}
//************************************************************* */

// 2 - FIZZBUZZ

let cien = 100;
for (let i = 1; i < cien; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if(i % 3 === 0) console.log("Fizz");
    else if(i % 5 === 0) console.log("Buzz");
    else console.log(i);  
}

//************************************************************* */

// 3 - Tablero ajedrez

let hashtag= "#";
let space = " ";
let tablero = "";
let tam = 8;

for (let fila = 1; fila <= tam; fila++){
    let linea = "";
    for (let columna = 1; columna < tam; columna++) {
        if ((fila+columna) % 2 === 0) linea+= space;
        else linea+= hashtag;
    }
    tablero += linea + "\n";
}
console.log(tablero);

//************************************************************* */



