const width = prompt("Введіть довжину масиву")
const height = prompt("Введіть висоту масиву")
const arr = []
let ind = 0;
let suma = 0
for(let i = 0; i < height; i++){
    arr.push([ ])
    for(let j = 0; j < width; j++){
        arr[i][j]= Number(prompt(`Введіть число в комірку [${i}] [${j}]`))
        if(arr[i][j] === undefined){
            arr[i][j] = 0
        }
    }
}
console.log(arr)
for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
        suma += arr[i][j]
    }
    console.log(`Сума всіх чисел ${i+1} рядку: ${suma}`)
    suma = 0
}
console.log("\n")
for(let i = 0; i < width; i++){
    for(let j = 0; j < height; j++){2
        suma += arr[j][i]
    }
    console.log(`Сума всіх чисел ${i+1} стовпцю: ${suma}`)
    suma = 0
}
