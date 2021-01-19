// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numInsert = parseInt(prompt('Inserisci un numero'))

if (numInsert %2 ==0) {
    console.log(numInsert);
} else {
    console.log(numInsert+1);
}