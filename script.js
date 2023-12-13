var Pontos = 0;
var up1 = 1;

function diminuirTamanho() {
    var imagem = document.getElementById('alpaca');
    imagem.style.transform = 'scale(0.9)';
    setTimeout(function() {
        imagem.style.transform = 'scale(1)';
    }, 100); 
    Pontos = Pontos + up1;
    document.getElementById('contador').innerHTML = "Pontos " + Pontos;
    finalizarjogo();
}
function upgrade1(ValorBaseUpgrade){
    if (Pontos >= 10) {
        Pontos = Pontos - 10;
        up1 = up1 + ValorBaseUpgrade;
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('poder').innerHTML = "Poder de Click " + up1;
    }
}
function upgrade2(ValorBaseUpgrade2){
    if(Pontos >= 50){
        Pontos = Pontos - 50;
        up1 = up1 + ValorBaseUpgrade2
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('poder').innerHTML = "Poder de Click " + up1;
    }
}
function upgrade3(ValorBaseUpgrade3){
    if(Pontos >= 100){
        Pontos = Pontos - 100;
        up1 = up1 + ValorBaseUpgrade3
        document.getElementById('contador').innerHTML = "Pontos " + Pontos;
        document.getElementById('poder').innerHTML = "Poder de Click " + up1;
    }
}
function finalizarjogo(){
    if(Pontos >= 500){
        alert("Parabéns você conseguiu,chegou no final!!!")
        location.reload();
    }
}


