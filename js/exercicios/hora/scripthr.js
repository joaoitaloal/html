function carregar(){
const hora = new Date();
var mostrarhora = document.getElementById('showhour')
var mostrarimg = document.getElementById('img')
var horatual = hora.getHours();
var minutos = hora.getMinutes();
if(6 < horatual && horatual < 12){
    mostrarhora.innerHTML = `A hora atual é ${horatual}, está de dia`
    mostrarimg.innerHTML = '<img src="imagens/dia.jpg" alt="imagem de dia" width="200">'
}else if(12 <= horatual && horatual < 18){
    mostrarhora.innerHTML = `A hora atual é ${horatual}, está de tarde`
    mostrarimg.innerHTML = '<img src="imagens/tarde.jpg" alt="imagem de tarde" width="200">'
    document.getElementById('secao').style.backgroundColor = "#a36248"
    document.body.style.backgroundColor = "#90a348"
}else{
    mostrarhora.innerHTML = `A hora atual é ${horatual}, está de noite`
    mostrarimg.innerHTML = '<img src="imagens/noite.jpg" alt="imagem de noite" width="200">'
    document.getElementById('titulo').style.color = "#ffffff"
    document.getElementById('copy').style.color = "#ffffff"
    document.getElementById('secao').style.backgroundColor = "#ffffff"
    document.body.style.backgroundColor = "#1a1919"
}
}

