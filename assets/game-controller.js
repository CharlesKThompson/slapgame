function GameController() {
    var gameService = new GameService()
    
    function draw() {
        var healthElem = document.getElementById('health')
        healthElem.innerHTML = gameService.getHealth()
        var hitsElem = document.getElementById('hits')
        hitsElem.innerHTML = gameService.getHits()
    }
    // end of private section

    this.giveItem = function giveItem(itemType) {
        gameService.giveItem(itemType)
    }

    this.attack = function attack(attackType) {
        gameService.attack(attackType)
        draw()
    }

    this.reset = function reset() {
        gameService.reset()
        draw()
    }


}