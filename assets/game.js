var playerHealth = document.getElementById('health')
var hitsElem = document.getElementById('hits')

var health = 100


var players = [
    {
        name: "Gharnef",
        health: 100,
        hits: 0
    },
    {
        name: "Chrom",
        health: 100,
        hits: 0
    }]



function draw() {

    playerHealth.textContent = players[0].health
    hitsElem.textContent = players[0].hits
}
draw()


function sword(i) {
    players[i].health -= 2
    draw(players)
}

function axe(i) {
    players[i].health -= 5
    draw(players)
}

function lance(i) {
    players[i].health -= 3
    draw(players)
}

function countHits() 
    
 {
    if (players[0].health -= 2) {
        players[0].hits++
    }
    else if (players[0].health -= 3) {
        players[0].hits++
    }
    else if (players[0].health -= 5) {
        players[0].hits++
    }

}
countHits()