// Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall'utente
// Usiamo i nuovi metodi degli array foreach o filter
// Esempio:
// const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
// Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina'


const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

let numIns1 =parseInt(prompt('inserire un numero da 0 a 5'));
let numIns2 =parseInt(prompt('inserire un numero da 0 a 5'));

if (numIns1 < 0 || numIns2 < 0) {
    alert('inserire un numero maggiore o uguale a zero')
}else if (numIns1 > 6 || numIns2 > 6){
    alert('inserire un numero inferiore o uguale a 5')
}else if  (numIns1 == NaN || numIns2 == NaN) {
    alert('inserire un numero')
} 
const numIns = [];

myArray.forEach((element,index) => {
    if ( index >= numIns1 && index <= numIns2 ){
        numIns.push(element);
    }
});
console.log(numIns);