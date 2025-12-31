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
console.log("Contar caracteres: ", contarCaracter(c, d));

//**********************************************************

// 7 - Suma de un rango 

function range(inicio, fin) {
    let arr = [];
    for (let i = inicio; i < fin + 1; i++) {
        arr.push(i)
    }
    return arr;
}
console.log("range: ", range(2, 6));

function sumaArr(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}
let neo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("suma arrays", sumaArr(neo));

function range2(inicio, fin, paso) {
    let arr = [];
    if (paso === 0) {
        return "Paso no puede ser igual a 0";
    }
    else if (paso > 0) {
        for (let i = inicio; i < fin + 1; i += paso) {
            arr.push(i);
        }
    }
    else if (paso < 0) {
        for (let i = inicio; i > fin - 1; i += paso) {
            arr.push(i);
        }
    }
    return arr;
}
console.log("range2: ", range2(1, 10, 2));
console.log("range2: ", range2(5, 2, -1));


// *************************************************************

// 8 - Reversion de un array

function reverseArray(arr) {
    let nuevoArr = [];
    for (let i = arr.length-1; i >= 0; i--) {
        nuevoArr.push(arr[i]);
    }
    return nuevoArr;
}

let array1 = [1,2,3,4,5,6,7,8,9,10];
let array2 = [1,2,3,4,5]
console.log("reverseArray: ", reverseArray(array2));

function reverseArrayInPlace(arr) {
    let temp;

    for (let i = 0; i < (arr.length)/2; i++) {
        temp = arr[i];
        arr[i] = arr[(arr.length-1)-i];
        arr[(arr.length-1)-i] = temp;
    }
    return arr;  
}
console.log("reverseArrayInPlace: ", reverseArrayInPlace(array1));

// *************************************************************

// 9 - Lista











