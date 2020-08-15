function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora São ' + hora + ' Horas'

    if (hora >= 0 && hora < 12) {
        //manhã
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //tarde
        img.src = 'tarde.png'
        document.body.style.background = '#ff7300'
    } else {
        //noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}