function tabuada() {
    var num = Number(document.getElementById('numero').value)
    var tab = document.getElementById('seltab')

    if (document.getElementById('numero').value == '') {
        alert('Por favor, digite um número!')
    } else {
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = ' ' + num + ' X ' + ' ' + c + ' = ' + ' ' + num * c
            item.value = 'tab' + c
            tab.appendChild(item)
            c++
        }
    }
}