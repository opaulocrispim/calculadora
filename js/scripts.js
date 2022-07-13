function inserir(num){
    var valor = window.document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = valor + num;
}

function limpar(){
    document.getElementById('visor').innerHTML = '';
}

function apagar(){
    var valores = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = valores.substring(0, valores.length - 1)
}

function calcular(){
    var resultado = document.getElementById('visor').innerHTML;
    if(resultado){
        document.getElementById('visor').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('visor').innerHTML = "teste"
    }
}