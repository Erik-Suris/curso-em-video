let num = [2, 8, 4]
num[3] = 6
num.push(9)

//num.sort() para deixar em ordem crescente

console.log(num)
console.log(`Seu vetor é o ${num}`)
console.log(`O tamanho dele é ${num.length}`)
console.log(`Em ordem crescente, seus elementos ficam da seguinte forma: ${num.sort()})`)
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado...')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}