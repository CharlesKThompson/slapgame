function GameService() {


    function Player(name, health, sword, lance, axe) {
        this.name = name
        this.health = health
        this.maxHealth = health
        this.attacks = {
            sword: sword,
            lance: lance,
            axe: axe
        }
        this.hits = 0
        this.items = []
    }

    var vignette = new Player("Vignette", 150, 4, 6, 8)
    var chrom = new Player("Chrom", 150, 4, 6, 8)

    function Item(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };

    var items = {
        shield: new Item("Shield", 0.5, "This is an awesome shield!"),
        gauntlet: new Item("Gauntlet", 1.5, "Better to punch with!"),
        banner: new Item("Banner", 2.0, "Rally to the cause!"),
        ring: new Item("Ring", 0.5, "A sneaky magical defense"),
        orb: new Item("Orb", 1.5, "I foresee pain"),
        tome: new Item("Tome", 2.0, "The darkness calls...")
    };

    function addMods() {
        var total = 1;
        for (var index = 0; index < vignette.items.length; index++) {
            var item = vignette.items[index];
            total += item.modifier
        }
        return total
    };

    
    //end private section

    this.attack = function attack(attackType) {
        vignette.health -= vignette.attacks[attackType] * addMods()
        vignette.hits++
    }

    this.giveItem = function giveItem(itemType) {
        vignette.items.push(items[itemType])
    }

    this.reset = function reset() {
        vignette.health = vignette.maxHealth
        vignette.hits = 0
        vignette.items = []
        
    }

    this.getHealth = function getHealth() {
        return vignette.health
    }

    this.getHits = function getHits(){
        return vignette.hits
    }

}

