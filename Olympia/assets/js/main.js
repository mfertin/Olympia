var game = new Phaser.Game(1000, 625, Phaser.AUTO, '');

var faction;
var level1 = true;
var level2 = false;
var level3 = false;
var level4 = false;
var level5 = false;
var level6 = false;

game.state.add('Menu', Menu);
game.state.add('Choix', Choix);
game.state.add('Valid', Valid);
game.state.add('Scenario', Scenario);
game.state.add('Jeu', Jeu);
game.state.add('GameOver', GameOver);
game.state.add('Instructions', Instructions);
//game.state.add('Options', Options);
//game.state.add('Credits', Credits);
game.state.start('Menu');