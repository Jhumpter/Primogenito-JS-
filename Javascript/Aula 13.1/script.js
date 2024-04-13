var b = document.querySelector('input#but')
b.addEventListener('click',clicar)
function clicar() {
    var res = document.querySelector('div#res')
    res.innerHTML = ''
    var n = document.querySelector('input#num')
    if (n.value.length == 0){
        alert('Por favor, digite um número')
    } else {
        var numero = parseFloat(n.value)        
        for (var c=1 ; c<=10 ; c++){
            res.innerHTML += `${numero}x${c}=${numero*c} <br>`
        }
            }
    }
    
