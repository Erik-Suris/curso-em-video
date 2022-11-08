function parimpar(n)/* Parâmetro Formal*/ {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpar(8)/* Parâmetro Real*/
console.debug(res)