function contar() {
    var ini = Number(document.getElementById('txtini').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var cont = document.getElementById('contando')

    if (document.getElementById('txtini').value == '' || document.getElementById('txtfim').value == '' || document.getElementById('txtpasso').value == '') {
        alert('Necessário Preencher Campos!')
    } else if (fim == 0 || passo == 0) {
        alert('Não é Possível Contar!')
    } else {
    if (ini < fim) {
        for (ini; ini < fim; ini += passo) {
            cont.innerHTML += ' ' + ini + '\u{27a1}'
        }
        cont.innerHTML += '\u{1f3c1}'
    } else {
        for (ini; ini > fim; ini -= passo) {
            cont.innerHTML += ' ' + ini + '\u{27a1}'
        }
        cont.innerHTML += '\u{1f3c1}'
    }
    }
}

function  limpar() {
    document.getElementById('txtini').value = ''
    document.getElementById('txtfim').value = ''
    document.getElementById('txtpasso').value = ''
    document.getElementById('contando').innerHTML = ''
}