//variaveis
var jogador = "x" //qual jogador realizará o click

//bloqueios de jogada
var bcasa1 = "a"
var bcasa2 = "a";
var bcasa3 = "a";
var bcasa4 = "a";
var bcasa5 = "a";
var bcasa6 = "a";
var bcasa7 = "a";
var bcasa8 = "a";
var bcasa9 = "a";
//funções
function zera(){
    var img1 = window.document.getElementById('img1')
    var img2 = window.document.getElementById('img2')
    var img3 = window.document.getElementById('img3')
    var img4 = window.document.getElementById('img4')
    var img5 = window.document.getElementById('img5')
    var img6 = window.document.getElementById('img6')
    var img7 = window.document.getElementById('img7')
    var img8 = window.document.getElementById('img8')
    var img9 = window.document.getElementById('img9')
    img1.src = "nulo.png"
    img2.src = "nulo.png"
    img3.src = "nulo.png"
    img4.src = "nulo.png"
    img5.src = "nulo.png"
    img6.src = "nulo.png"
    img7.src = "nulo.png"
    img8.src = "nulo.png"
    img9.src = "nulo.png"
    jogador = "x"
    bcasa1 = "a"
    bcasa2 = "a";
    bcasa3 = "a";
    bcasa4 = "a";
    bcasa5 = "a";
    bcasa6 = "a";
    bcasa7 = "a";
    bcasa8 = "a";
    bcasa9 = "a";
}

function casa1(){
    var casa = window.document.getElementById('img1')
    if(bcasa1 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa1 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa2(){
    var casa = window.document.getElementById('img2')
    if(bcasa2 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa2 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa3(){
    var casa = window.document.getElementById('img3')
    if(bcasa3 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa3 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa4(){
    var casa = window.document.getElementById('img4')
    if(bcasa4 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa4 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa5(){
    var casa = window.document.getElementById('img5')
    if(bcasa5 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa5 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa6(){
    var casa = window.document.getElementById('img6')
    if(bcasa6 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa6 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa7(){
    var casa = window.document.getElementById('img7')
    if(bcasa7 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa7 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa8(){
    var casa = window.document.getElementById('img8')
    if(bcasa8 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa8 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
}
function casa9(){
    var casa = window.document.getElementById('img9')
    if(bcasa9 == "a"){
        if(jogador == "x"){
            casa.src = "x.png"
            jogador = "y"
        }
        else {
            casa.src = "O.png"
            jogador = "x"
        }
        bcasa9 = "b"
    }
    else{
        alert("Casa ja escolhida! Tente outra.")
    }
} //9