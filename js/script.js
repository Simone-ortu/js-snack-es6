// 1) Utilizzando const e/o let. Inserire un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// const numInsert = parseInt(prompt('Inserisci un numero'))

// if (numInsert %2 ==0) {
//     console.log(numInsert);
// } else {
//     console.log(numInsert+1);
// }
// Utilizzando const e/o let e template literal. Creare due tag div con due id diversi. 
// Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const num = [];
let numOdd = 'red'
let numEven = 'green'
let evenNum = [];
let oddNum = [];
for (let i = 0; i < 10; i++) {
    num.push(genaraRnd(10, 1))
    if (num[i] % 2 == 0) {
        evenNum.push(num[i])
    }
    else {
        oddNum.push(num[i])
    }
}

console.log(num);
console.log(evenNum);
console.log(oddNum);


document.getElementById('numeriP').innerHTML = `<p class="${numEven}">${evenNum}</p>`

document.getElementById('numeriD').innerHTML = `<p class="${numOdd}">${oddNum}</p>`




function genaraRnd() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}


//   3) Utilizzando const e/o let. Dare la possibilità di inserire due parole.
//    Verificare se le due parole hanno la stessa lunghezza. Se hanno la stessa lunghezza, 
//   stamparle entrambe altrimenti stampare la più lunga delle due.

const primaParola = prompt('Inserire una parola')
const secondaParola = prompt('Inserire una parola')

if (primaParola.length > secondaParola.length) {
    console.log(primaParola);
}else if (primaParola.length == secondaParola.length) {
    console.log(primaParola + ' '+ secondaParola);
}else{
    console.log(secondaParola);
}
    



