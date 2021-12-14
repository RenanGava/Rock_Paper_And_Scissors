const elementos = document.querySelectorAll('.player-options div > img')
const enemyOptions = document.querySelectorAll('.enemy-options > div > img')
const contador = document.querySelectorAll('.titulo-placar > h2')
var Player = 0
var Inimigo = 0
var enemyOpt = ''
var playerOpt = ''


function resetOpacity(){
    for(let i = 0; i< elementos.length; i++){
        elementos[i].style.opacity = 0.3
        enemyOptions[i].style.opacity = 0.3
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random() * 3)

    for(let i = 0; i < enemyOptions.length; i++){
        if( i == rand){
            enemyOptions[i].style.opacity = 1
            enemyOpt = enemyOptions[i].getAttribute('opt')
        }
    }
}

function verificarVencedor(){

    if(playerOpt == 'papel'){
        if(enemyOpt == 'papel'){
            alert('empate')
            
        }
        else if(enemyOpt == 'pedra'){
            alert('Player venceu')
            Player += 1
        }
        else if(enemyOpt == 'tesoura'){
            alert('player perdeu')
            Inimigo += 1
        }
    }
    if(playerOpt == 'pedra'){
        if(enemyOpt == 'papel'){
            alert('player perdeu')
            Inimigo += 1
        }
        else if(enemyOpt == 'pedra'){
            alert('empate')
        }
        else if(enemyOpt == 'tesoura'){
            alert('player venceu')
            Player += 1
        }
    }
    if(playerOpt == 'tesoura'){
        if(enemyOpt == 'papel'){
            alert('Player venceu')
            Player += 1
        }
        else if(enemyOpt == 'pedra'){
            alert('Player perdeu')
            Inimigo += 1
        }
        else if(enemyOpt == 'tesoura'){
            alert('empate')
        }
    }
    contador[0].innerHTML = `Player_1: <span>${Player}</span>`
    contador[1].innerHTML = `Player_2: <span>${Inimigo}</span>`

}



for(let i = 0; i< elementos.length; i++){
    elementos[i].addEventListener('click', (t)=>{
        resetOpacity()
        t.target.style.opacity = 1
        playerOpt = t.target.getAttribute('opt')
        inimigoJogar()
        setTimeout(() => verificarVencedor(), 1000)
    })
}

