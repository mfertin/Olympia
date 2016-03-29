var Niveau1 = {
	preload: function(){
		this.load.image('background', 'assets/images/fondgrec.jpg');
		this.load.image('options', 'assets/images/options.png');
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.button(400, 300, 'options', gagner, this);

		function gagner(){
			level2 = true;
			game.state.start('Niveaux');
		}
	},

	update: function(){
		
	}
};