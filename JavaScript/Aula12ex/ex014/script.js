function carregar() {
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Manhã
        img.src = 'imagens/manha.png'
        document.body.style.background = "#a69900"
    } else if (hora >= 12 && hora < 18) {
        //Tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = "#ac6b4b"
    } else {
        //Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = "#02295f"
    }
}