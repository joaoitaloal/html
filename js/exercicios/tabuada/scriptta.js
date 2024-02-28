const tabdiv = document.getElementById('tabdiv');
var input = document.getElementById('input');

function calcular(){
    tabdiv.innerHTML = "";
    let inputn = Number(input.value);
    if(input.value.length == 0){
        alert("Digite um número");
    }else{
        for(i = 0; i <= 10; i++){
            let tempp = document.createElement("p")
            let tempcontent = document.createTextNode(`${i}*${inputn}=${inputn*i}`);
            tempp.appendChild(tempcontent);
            tabdiv.appendChild(tempp);
        }
    }
}
