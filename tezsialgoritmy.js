console.log('tezsi algoritmy')

//2 Těžší algoritmy
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

//2a Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
for (let i = 0; i < (numbers.length - 1); i++) {
    if (numbers[i + 1] > numbers[i]) {
        console.log(numbers[i + 1])
    }
}

//2b Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho
//následovník.
console.log('všechny vrcholy')
for (let i = 0; i < (numbers.length - 2); i++) {
    if (numbers[i + 1] > numbers[i] && numbers[i + 1] > numbers[i + 2]) {
        console.log(numbers[i + 1])
    }
}

//2c Nejprve spočítejte průměr čísel v poli a výsledek si uložte do proměnné mean. Poté spočítejte součet druhých mocnin
//vzdáleností všech čísel od průměru.
console.log('součet druhých mocnin vzdáleností')
let sum = 0
numbers.forEach((number) => {
    sum += number
})
let mean = sum / numbers.length

let sumDistance = 0
numbers.forEach((number) => {
    sumDistance += Math.pow(Math.abs(number - mean), 2)
})
console.log(sumDistance)

//2d Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr
//druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce Math.sqrt.
const standDev = () => {
    return Math.sqrt(sumDistance / numbers.length)
}
let dev = standDev()
let devRounded = dev.toFixed(2)
console.log('směrodatná odchylka' + ' ' + devRounded)

//2e Najděte v seznamu největší prvek.
let maxStart = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxStart) {
        maxStart = numbers[i]
    }
}
console.log('největší prvek je ' + maxStart)

//2f Najděte v seznamu největší prvek, který je menší než číslo 16. 
let maxStart1 = numbers[0]

for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] > maxStart1) && (numbers[i] < 16)) {
        maxStart1 = numbers[i]
    }
}
console.log('největší prvek menší než 16 je ' + maxStart1)
