function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (form_ano.length == 0 || Number(form_ano.value) > ano || Number(form_ano.value) < (ano - 150)) {
        alert('[ERRO] Verifique os dados e tente nvoamente')
    } else {
        var form_sex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (form_sex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (form_sex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 24) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}