var game = new Phaser.Game(616, 616, Phaser.AUTO, 'gameContainer', { preload: preload, create: create, update: update });

function preload() {
    game.load.tilemap('carte', 'images/carte_lvl1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'images/tileset_flat.png');
    game.load.image('mage', 'images/Mage.png');
    game.load.image('assassin', 'images/Assassin.png');
    game.load.image('tank', 'images/Tank.png');
    game.load.image('distance', 'images/Distance.png');
    game.load.image('heal', 'images/Heal.png');
}

var map;
var layer;
var perso;

function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    map = game.add.tilemap('carte');
    map.addTilesetImage('tileset_flat', 'tiles');
    layer = map.createLayer('Calque de Tile 1');

    perso = game.add.sprite(0, 0, 'mage');
    perso = game.add.sprite(0, 28, 'assassin');
    perso = game.add.sprite(0, 56, 'tank');
    perso = game.add.sprite(0, 84, 'distance');
    perso = game.add.sprite(0, 112, 'heal');
}

function update() {

}
