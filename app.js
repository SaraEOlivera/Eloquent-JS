// 1 - Triangulo

let charact = "#";
let size = 7;
let line = "";
for (let i = 0; i < size; i++) {
    line += charact;
    console.log(line);
}
//************************************************************* */

// 2 - FIZZBUZZ

let cien = 100;
for (let i = 1; i < cien; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
}

//************************************************************* */

// 3 - Tablero ajedrez

let hashtag = "#";
let space = " ";
let tablero = "";
let tam = 8;

for (let fila = 1; fila <= tam; fila++) {
    let linea = "";
    for (let columna = 1; columna < tam; columna++) {
        if ((fila + columna) % 2 === 0) linea += space;
        else linea += hashtag;
    }
    tablero += linea + "\n";
}
console.log(tablero);

//************************************************************* */

// 4 - Minimo

function buscarMinimo(a, b) {
    let menor = Math.min(a, b);
    return menor;
}

console.log(buscarMinimo(11, 77));

//**********************************************************

// 5 - Recursion

function isEven(n) {
    if (n < 0) return isEven(-n);
    else if (n === 0) return true;
    else if (n === 1) return false;
    else return isEven(n - 2);
}
console.log(isEven(13));
console.log(isEven(0));
console.log(isEven(-4));

//***********************************************

// 6 - Contar Bs
let palabra = "carrusel";

function contarBs(n) {
    let total = 0;
    letra = "B";
    for (let i = 0; i < n.length; i++) {
        console.log(n[i])
        if (n[i] === "B") total++;
    }
    return total;
}
x = "BfdsfBBhHFvBdRthfsBnmj";
console.log("Cantidad de 'B': ", contarBs(x));

function contarCaracter(a, b) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i])
        if (a[i] === b) total++;

    }
    return total;
}
c = "zkjkzjfjuztez";
d = "z";
console.log("Contar caracteres: ", contarCaracter(c,d));

//**********************************************************





