//3 Algoritmy pro fajnšmekry
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

//3a Vypište na výstup délku nejdelší rostoucí sekvence čísel, které v poli následují přímo po sobě.
let differArray = []
let diff = 0
for (let i = 0; i < (numbers.length - 1); i++) {
    diff = numbers[i + 1] - numbers[i]
    differArray.push(diff)
}
console.log(differArray)

let differArrayParts = []
for (let i = 0; i < differArray.length; i++) {
    if (differArray[i + 1] > differArray[i]) {
        differArrayParts.push([i + 1])
    }
}
//else délka pole