var inicio = document.getElementById('inicio');
var fim = document.getElementById('fim');
var passo = document.getElementById('passo');

function contar(){
    let contagem = new Array();
    let inicion = Number(inicio.value)
    let fimn = Number(fim.value)
    let passon = Number(passo.value)
    var control;

    if(passon <= 0){
        alert('Passo invalido')
    }else if(inicion > fimn){
        passon = -passon;
        for(var i = inicion; i >= fimn; i+=passon){
            if(i > fimn){
                contagem.push(i)
                contagem.push('&#x1F449')
            } 
            else {
                contagem.push(`${i} &#x1F3C1`)
            }
            control = i;
        }
        if((fimn - inicion) % passon !== 0){
            contagem.splice(contagem.length - 2,2);
            contagem.push(`${control}&#x1F3C1`);
        }
        document.getElementById('contdiv').innerHTML = contagem;
    }else{
        for(var i = inicion; i <= fimn; i+=passon){
            if(i < fimn){
                contagem.push(i)
                contagem.push('&#x1F449')
            } 
            else {
                contagem.push(`${i} &#x1F3C1`)
            }
            control = i;
        }
        if((fimn - inicion) % passon !== 0){
            contagem.splice(contagem.length - 2,2);
            contagem.push(`${control}&#x1F3C1`);
        }
        document.getElementById('contdiv').innerHTML = "<p>Contagem:</p> "+"<p>"+contagem+"</p>";
    }
    /*console.log("NAN:"+inicion)
    console.log("NAN:"+isNaN(fimn))
    console.log("NAN:"+isNaN(passon))
    console.log((fimn - inicion) % passon);*/
}
