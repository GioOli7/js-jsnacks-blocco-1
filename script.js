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








/////////////////////////////////////////////////////Snack 3.
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
/*
var nomi = ['giovanni', 'fabio', 'paolo', 'andrea'];
var cognomi = ['olivieri', 'duzioni', 'forghieri', 'Rossi'];
var lista = [];

for (var i = 0; i < nomi.length; i++) {
    var nomeCompleto = nomi[ Math.floor(Math.random() * nomi.length) ] + ' ' + cognomi[ Math.floor(Math.random() * cognomi.length) ];
    lista.push(nomeCompleto);
}
console.log(lista);
*/







///////////////////////////////////////////////////Snack 2.
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
/*
var numero = parseInt(prompt('Inserisci un numero'));

if (numero % 2 != 0) {
    console.log(numero + 1);
} else {
    console.log(numero);
}
*/







////////////////////////////////////////////////////////Snack 1.
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while

//FOR
/*
somma = 0;
ripetizioni = 5;
for (var i = 1; i <= ripetizioni; i++) {
    somma += parseInt(prompt(`inserisci numero - ${i} su ${ripetizioni}`));
}
console.log(somma);
*/

//WHILE
/*
somma = 0;
contatore = 1;
ripetizioni = 5;

while (contatore <= ripetizioni) {
    somma += parseInt(prompt(`inserisci numero - ${contatore} su ${ripetizioni}`));
    contatore++
}
console.log(somma);
*/
