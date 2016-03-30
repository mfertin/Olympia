var Niveau1 = {
	preload: function(){
		//this.load.image('background', 'assets/images/fondgrec.jpg');
		
	},

	create: function(){
		//this.background = this.game.add.sprite(0, 0, 'background');

		
		game.state.add('Boot', BasicGame.Boot);
		game.state.start('Boot');

	},

	update: function(){
		
	}
};