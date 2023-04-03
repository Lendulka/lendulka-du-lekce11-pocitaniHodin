console.log('cekani na sestku')

//3 Čekání na šestku
/*
Založte JavaScriptový program a splňte následující úkoly.

Napište funkci roll, která simuluje hod kostkou. Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.
Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.
*/

let rollResult = 1
let attempt = 0

const roll = () => {
    while (rollResult !== 6) {
        rollResult = Math.ceil(Math.random() * 6)
        attempt++
        console.log(`Hodilo se číslo ${rollResult}`)
    }
}
roll()
console.log(`Šestka byla hozena na ${attempt} pokus`)



