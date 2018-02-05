var playerHealth = document.getElementById('health')
var hitsElem = document.getElementById('hits')

var health = 100


var players = [
    {
        name: "Gharnef",
        health: 100,
        hits: 0,
        items:[]
    },
    {
        name: "Chrom",
        health: 100,
        hits: 0,
        items:[]
    }]



function draw() {

    playerHealth.textContent = players[0].health
    hitsElem.textContent = players[0].hits
}
draw()


function sword(i) {
    players[i].health -= 2
    players[i].hits++
    draw(players)
}

function axe(i) {
    players[i].health -= 5
    players[i].hits++
    draw(players)
}

function lance(i) {
    players[i].health -= 3
    players[i].hits++
    draw(players)
}

var Item = function (name, properties, description){
    this.name = name
    this.properties = properties
    this.description = description
}

var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    potion:new Item("Potion",15,"restorative panacea"),
    banner:new Item("Banner",3.2,"Rally to the cause!")
}

function giveShield(){
    players[i].items.push(items.shield)
}
