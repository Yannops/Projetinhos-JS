
function verify() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.lenght == 0 || Number(fano.value) > ano || Number(fano.value) == 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var img = document.createElement('img')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        img.setAttribute('id', 'foto')
        
        var op = fsex[0].checked ? 'Homen' : 'Mulher'
        
        idade <= 12 ? img.setAttribute('src', 'criança.png') : idade < 18 ? img.setAttribute('src', 'adolescente.png') : idade < 60 ? img.setAttribute('src', 'adulto.png') : img.setAttribute('src', 'idoso.png')

        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos: ' + op + ' de ' + idade + ' Anos'
        res.appendChild(img)
    } 
}