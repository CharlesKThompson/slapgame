
var playerHealth = document.getElementById('health')
var hitsElem = document.getElementById('hits')

var health = 100


var players = [
    {
        name: "Gharnef",
        health: 100,
        hits: 0,
        items: []
    },
    {
        name: "Chrom",
        health: 100,
        hits: 0,
        items: [],
        attacks: {
            sword: 2,
            lance: 4,
            axe: 6,
        }
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
    players[i].health -= 6
    players[i].hits++
    draw(players)
}

function lance(i) {
    players[i].health -= 4
    players[i].hits++
    draw(players)
}

var Item = function (name, properties, description) {
    this.name = name
    this.properties = properties
    this.description = description
}

var items = {
    shield: new Item("shield", 0.5, "This is an awesome shield!"),
    gauntlet: new Item("gauntlet", 1.5, "restorative panacea"),
    banner: new Item("banner", 2.0, "Rally to the cause!")
}

// function giveItems() {
//     players[i].items.push(shield, gauntlet, banner)
// }
function giveShield(){
    var item = items.shield
    var player=players[0]
    player.items.push(item)
}

function giveGauntlet(){
    var item= items.gauntlet
    var player=players[0]
    player.items.push(item)
}

function giveBanner(){
    var item = items.banner
    var player=players[0]
    player.items.push(item)
}
function addMods() {
    var modTotal = 0

    for (let i = 0; i < players.length; i++) {
        modTotal += players.items[i].properties;
        return modTotal

    }


}
//function shield(i) {
//     players[i].health -= damage *= 0.5

// }

/*
var pizza = {
    toppings: [toppings.pepperoni, toppings.cheese]
}

var toppingsList = {
    pepperoni: {name: 'pepperoni'}
    cheese: {name: 'cheese'}
    anchovies: {name: 'anchovies'}
    olives: {name: 'olives'}
}

var pizza ={
    toppings: []
}

function addTopping(toppingName) {
var topping = toppingsList[toppingName]
if(topping){
    pizza.toppings.push(topping)
}else {
    console.log('SORRY WE DONT HAVE THAT AS AN OPTION')
    console.log('here is a list of the available toppings', toppingsList)
}
}

addTopping('pepperoni')

function totalKCals(pizza){
    var totalKCals = 0
    for (let i = 0; i < pizza.toppings.length; i++){
        const topping = pizza.toppings[i]; *ALIAS
        totalKCals += topping.kcal
    }
    return totalKCals
}

if(pizza.toppings.includes(topping)) { return }
*is the same as*
for (let i = 0; i < pizza.toppings.length; i++)
const topping = pizza.toppings[i];
if (topping.name == toppingName) { return }

optional { return cosole.log('.....')}
*/

