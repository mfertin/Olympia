var Menu = {
	preload: function(){
		this.load.image('background', 'assets/images/olympia.jpg');
		this.load.image('scenario', 'assets/images/scenario.png');
		this.load.image('versus', 'assets/images/versus.png');
		this.load.image('instructions', 'assets/images/instructions.png');
		this.load.image('options', 'assets/images/options.png');
		this.load.image('credits', 'assets/images/credits.png');
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.button(410, 300, 'scenario', play, this);
		this.add.button(410, 365, 'versus', this.Versus, this);
		this.add.button(410, 430, 'instructions', howtoplay, this);
		this.add.button(410, 495, 'options', this.Options, this);
		this.add.button(410, 560, 'credits', this.Credits, this);

		function play(){
			game.state.start('Choix');
		}

		function howtoplay(){
			game.state.start('Instructions');
		}
	},

	update: function(){

	}
};

//it's our battle