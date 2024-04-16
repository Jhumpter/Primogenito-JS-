document.getElementById
function  clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.querySelector('div#seg')
    var idade = ano - nasc.value
    var m = document.getElementById("masc")
    var f = document.getElementById('fem')
    if ((nasc.value.length == 0)||(nasc.value >= ano)){
        alert("Tá zoando com a minha cara, tio?????")
    } else if ((idade <= 12) && (idade > 0)) {
        if (m.checked){
            res.innerHTML = `Menino de ${idade} anos` + "<br><img src='Imagens/crianca_M.png' alt='Menino'>"
        } else if  (f.checked){
            res.innerHTML = `Menina de ${idade} anos` + "<br><img src='Imagens/crianca_F.png' alt='Menina'>"
        }
    } else if (idade < 25){
        if (m.checked) {
            res.innerHTML = `Jovem de ${idade} anos` + "<br><img src='Imagens/jovem_M.png' alt='Jovem'>"
        } else if (f.checked) {
            res.innerHTML = `Jovem de ${idade} anos` + "<br><img src='Imagens/jovem_F.png' alt='Jovem'>"
        }
    } else if (idade < 65){
        if (m.checked) {
            res.innerHTML = `Adulto de ${idade} anos` + "<br><img src='Imagens/adulto_M.png' alt='Homem'>"
        } else if (f.checked) {
            res.innerHTML = `Adulta de ${idade} anos` + "<br><img src='Imagens/adulto_F.png' alt='Mulher'>"
        }
    } else if (idade < 150){
        if (m.checked) {
            res.innerHTML = `Senhor de ${idade} anos` + "<br><img src='Imagens/idoso_M.png' alt='Véio'>"
        } else if (f.checked) {
            res.innerHTML = `Senhora de ${idade} anos` + "<br><img src='Imagens/idoso_F.png' alt='Véia'>"
        }
    } else {
        res.innerHTML = `&#x1F480; Cadáver de ${idade} anos &#x1F480;` + "<br><img src='Imagens/caveira.png' alt='Caveira'>"
    }

        
        
}
