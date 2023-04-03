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
