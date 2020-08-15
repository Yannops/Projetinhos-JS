var res = document.getElementById('content2')
let vet = []
document.body.onload(document.getElementById('numero').focus())

function adiciona() {
    var num = Number(document.getElementById('numero').value)
    var add = document.getElementById('seltab')
    
    if (document.getElementById('numero').value == '') {
        alert('Necessário Preencher O Campo!')
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    } else if (num < 1 || num > 100) {
        alert('Número Invalido!')
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    } else {        
        let adic = document.createElement('option')
        adic.text = ' Valor ' + num + ' Adicionado '
        adic.value = num
        vet.push(num)
        add.appendChild(adic)
        res.innerHTML = ''
        document.getElementById('numero').value = ''
        document.getElementById('numero').focus()
    }
}

function finalizar() {
    
    if (vet.length == 0) {
        alert('Vetor Vazio!')
    } else {
        let soma = 0, maior = vet[0], menor = vet[0]
        for (const i in vet) {
             soma += vet[i]
             if (vet[i] > maior) {
                 maior = vet[i]
             }
             if (vet[i] < menor) {
                 menor = vet[i]
             }
        }
        
        res.innerHTML = ''
        res.innerHTML += 'O vetor possui ' + vet.length + ' posições'
        res.innerHTML += '<p>O maior valor é -> ' + maior + '</p>'
        res.innerHTML += '<p>O menor valor é -> ' + menor + '</p>'
        res.innerHTML += '<p>A soma de tudo é -> ' + soma + '</p>'
        res.innerHTML += '<p>A média é -> ' + (soma / vet.length).toFixed(2) + '</p>'
    }
}


