console.log('už funguji')

//1
// Napište cyklus WHILE, který do konzole postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.
//1a

/*
for (let hours = 0; hours < 24; hours++) {
    for (let minutes = 0; minutes < 60; minutes++) {
        console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)
    }
}
*/

//1b
let hours = 0
let minutes = 0
while (hours < 24) {
    while (minutes < 60) {
        console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)
        minutes += 1
    }
    hours += 1
    minutes = 0
}
