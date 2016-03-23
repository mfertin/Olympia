var Choix = {
	preload: function(){
		this.load.image('background', 'assets/images/choix.jpg');
		this.load.image('grec', 'assets/images/zeus.jpg');
		this.load.image('egypt', 'assets/images/ra.jpg');
		this.load.image('nord', 'assets/images/odin.jpg');
		this.load.image('retour', 'assets/images/retour2.png');
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.button(78, 419, 'grec', vgrec, this);
		this.add.button(436, 419, 'egypt', vegypt, this);
		this.add.button(793, 419, 'nord', vnord, this);
		this.add.button(20, 575, 'retour', back, this);

		function vgrec(){
			faction = "grec";
			game.state.start('Valid');
		}

		function vegypt(){
			faction = "egypt";
			game.state.start('Valid');
		}

		function vnord(){
			faction = "nord";
			game.state.start('Valid');
		}

		function back(){
			game.state.start('Menu');
		}
	},

	update: function(){

	}
};