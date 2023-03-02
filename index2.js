const width = prompt("Введіть довжину масиву")
const height = prompt("Введіть висоту масиву")
const maxNum = 100
const minNum = 10
const arr = []
let ind = 0;
let suma = 0
let tmpSuma = 0

for(let i = 0; i < height; i++){
    arr.push([ ])
    for(let j = 0; j < width; j++){
        arr[i][j]= Math.floor(Math.random() * (maxNum - minNum) + minNum)
    }
}
console.log(arr)

for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
        suma += arr[i][j]
        if(suma > tmpSuma){
            tmpSuma = suma
            ind = i
        }
    }
    console.log(`Сума всіх чисел ${i+1} рядку: ${suma}`)
    suma = 0
}
console.log(`Максимальна сума в ${ind+1} рядку: ${tmpSuma}`)