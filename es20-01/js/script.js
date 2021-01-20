// jsnack 1
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const bici = [
    {
        nome:'city bike',
        peso: 60
    },
    {
        nome: 'downhill',
        peso: 65
    },
    {
        nome: 'bici da corsa',
        peso: 30
    },
    {
        nome: 'BMX',
        peso: 25
    },
]

const [bici1, bici2, bici3, bici4] = bici
let biciDefault = bici1.peso


if (bici2.peso < biciDefault) {
    biciDefault = bici2
} else if (bici3.peso < biciDefault){
    biciDefault = bici3
}else if (bici4.peso < biciDefault) {
    biciDefault = bici4
}
console.log(`La bici che pesa meno é :${biciDefault.nome},il suo peso é :${biciDefault.peso}`);