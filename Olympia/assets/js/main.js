var game = new Phaser.Game(1000, 625, Phaser.AUTO, '');

var faction;
var level1 = true;
var level2;
var level3;
var level4;
var level5;
var level6;

game.state.add('Menu', Menu);
game.state.add('Choix', Choix);
game.state.add('Valid', Valid);
game.state.add('Scenario', Scenario);
game.state.add('GameOver', GameOver);
game.state.add('Instructions', Instructions);
game.state.add('Niveaux', Niveaux);
game.state.add('Niveau1', Niveau1);
//game.state.add('Options', Options);
//game.state.add('Credits', Credits);

game.state.start('Menu');