
//4 Malé algoritmy

const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

/* 4a, 4b
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])                   // všechna čísla
    console.log(Math.pow(numbers[i], 2))      // druhá mocnina všech čísel
}
*/

//4c pouze záporná čísla
console.log('záporná čísla')
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        console.log(numbers[i])
    }
}

//4d absolutní hodnota všech čísel
console.log('absolutní hodnota')
for (let i = 0; i < numbers.length; i++) {
    console.log(Math.abs(numbers[i]))
}

//4e pouze sudá čísla
console.log('sudá čísla')
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

//4f čísla, jejichž absolutní hodnota je dělitelná třemi
console.log('absolutní hodnota dělitelná 3')
numbers.forEach((number) => {
    if (Math.abs(number) % 3 === 0) {
        console.log(number)
    }
})

//4g jak daleko je každé číslo v seznamu od čísla 5
console.log('vzdálenost od čísla 5')
numbers.forEach((number) => {
    console.log(numbers.indexOf(5) - numbers.indexOf(number))
})

//4h druhá mocnina vzdáleností všech čísel od čísla 5
console.log('druhá mocnina vzdáleností od čísla 5')
numbers.forEach((number) => {
    console.log(Math.pow((numbers.indexOf(5) - numbers.indexOf(number)), 2))
})

//4i počet záporných čísel v seznamu
console.log('počet záporných čísel')
let pocet = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        pocet += 1
    }
}
console.log(pocet)

//4j součet všech čísel v poli
console.log('součet všech čísel')
let sum = 0
numbers.forEach((number) => {
    sum += number
})
console.log(sum)

//4k průměr všech čísel v poli
console.log('průměr všech čísel')
sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(sum / numbers.length)

//4l součet všech kladných čísel v poli
console.log('součet kladných čísel')
sum = 0
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sum += numbers[i]
    }
}
console.log(sum)

