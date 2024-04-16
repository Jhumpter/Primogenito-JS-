var i = document.getElementById ('inicio')
var f = document.getElementById ('fim')
var p = document.getElementById ('intervalo')
var res = document.getElementById ('res')
var b = document.getElementById ("botao")
b.addEventListener('click',clicar)
function clicar(){
        ini = parseInt(i.value)
        pas = parseInt(p.value)
        fin = parseInt(f.value)
if (i.value.length == 0 || p.value.length == 0 || f.value.length == 0) {
        alert('Tá sentindo falta de nada não?')
} else if ((pas<0)&&(ini<fin)||(pas>0)&&(ini>fin)) {
        alert('Tem parada errada aí, irmão.')
} else if (pas==0){
        alert('Considerando o intervalo como 1')
        pas=1
        res.innerHTML = ini
        while (ini<fin) {
                ini += pas
                res.innerHTML  += ' &#x1F449; ' + ini
                        }
        res.innerHTML+=' &#x1F449; &#x1F3C1;'
} else {
        res.innerHTML = ini
        while (ini<fin) {
                ini += pas
                res.innerHTML  += ' &#x1F449; ' + ini
                        }
        res.innerHTML+=' &#x1F449; &#x1F3C1;'
        }
}

