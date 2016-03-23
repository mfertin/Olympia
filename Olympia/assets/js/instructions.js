var Instructions = {
	preload: function(){
		this.load.image('background', 'assets/images/fondinstru.png');
		this.load.image('retour', 'assets/images/retour3.png');
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.button(20, 575, 'retour', back, this);

		function back(){
			game.state.start('Menu');
		}
	},

	update: function(){

	}
};