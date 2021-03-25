/////////////////////////////////Snack 5 - Bonus
//Crea due array di numeri che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var listUno = [1, 2, 5, 8, 13, 18, 25, 34, 42, 50, 62, 84]
var listDue = [2, 5, 6]
console.log(`Elementi lista uno originale: ${listUno} --- n elementi:${listUno.length}`)
console.log(`Elementi lista due originale: ${listDue} --- n elementi:${listDue.length}`)

//verifico quale array sia più lunga
if (listUno.length > listDue.length){
    var diff = listUno.length - listDue.length;
    for (var i = 0; i < diff; i++) {
        listDue.push( Math.floor(Math.random() * 100) + 1)
    }
} else {
    var diff = listDue.length - listUno.length;
    for (var i = 0; i < diff; i++) {
        listUno.push( Math.floor(Math.random() * 100) + 1)
    }
}
console.log(`elementi lista uno post: ${listUno} --- n elementi:${listUno.length}`)
console.log(`elementi lista due post: ${listDue} --- n elementi:${listDue.length}`)


///////////////////////////////////////Snack 4.
//Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

/*
var numInteri = [1, 3, 3, 4, 5, 12, 15, 18, 27, 32, 41, 52];
var somma = 0;

for (var i = 0; i < numInteri.length; i++) {
    // console.log(numInteri[i])
    if (i % 2 != 0) {
        somma += numInteri[i]
    }
}
console.log(somma);
*/
