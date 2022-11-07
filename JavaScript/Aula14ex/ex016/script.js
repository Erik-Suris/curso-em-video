function contar() {
    var min = document.getElementById('inicio')
    var max = document.getElementById('fim')
    var step = document.getElementById('passo')
    var res = document.getElementById('res')

    if ((min.value.length == 0) || (max.value.length == 0)) {
        alert('[ERRO] Impossível contar, faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(min.value)
        let f = Number(max.value)
        let s = Number(step.value)
        if (s <= 0) {
            alert('Valor de passo inválido! Considerando PASSO 1')
            s = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c+=s) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            for(let c = i; c >= f; c-=s) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}