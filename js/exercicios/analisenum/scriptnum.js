const dad = document.getElementById('ad')
const dan = document.getElementById('analise')
const pan = document.getElementById('pan')

var list = [];

function adicionar(){
    var num = document.getElementById('numinput')
    let val = Number(num.value);
    if(val > 100 || val < 1){
        alert('input invalido');
    }
    else{
        if(list.indexOf(val) == -1){
            if(list.length == 0){
                dad.innerHTML = `Número ${val} adicionado <br>`
            }else{
                dad.innerHTML += `Número ${val} adicionado <br>`
            }
            list.push(val);
            pan.innerHTML = '<p>Esperando...</p>'
        }else{
            alert('número já adicionado')
        }
    }
    num.value = '';
    num.focus();
}

function analisar(){
    if(list.length == 0){
        alert('Adicione algum número à lista')
    }else{
        list.sort((a, b) => a - b);
        let qntd = list.length;
        let maior = list[list.length-1];
        let menor = list[0];
        let soma = 0;

        for(i = 0; i < qntd; i++){
            soma += list[i];
        }
        media = soma/qntd;
        pan.innerHTML = `Analise: <br> 
        Ao todo, existem ${qntd} elementos na lista <br>
        O maior valor da lista é ${maior} <br>
        O menor valor da lista é ${menor} <br>
        A soma de todos os valores é ${soma} <br>
        A média da soma dos valores é ${media}`
        console.log(list);

    }
}