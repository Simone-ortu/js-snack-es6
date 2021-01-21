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
        peso: 15
    },
    {
        nome: 'BMX',
        peso: 25
    },
]


let biciMinore = bici[0]
bici.forEach((Element)=>{
    if(biciMinore.peso > Element.peso){
        biciMinore = Element
    }
})


console.log(`La bici che pesa meno é :${biciMinore.nome},il suo peso é :${biciMinore.peso}`);