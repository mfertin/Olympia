var Niveaux = {
	preload: function(){
		this.load.image('background', 'assets/images/levels.png');
		this.load.image('niveau1', 'assets/images/level1.png');
		this.load.image('niveau2', 'assets/images/level2.png');
		this.load.image('niveau3', 'assets/images/level3.png');
		this.load.image('niveau4', 'assets/images/level4.png');
		this.load.image('niveau5', 'assets/images/level5.png');
		this.load.image('niveau6', 'assets/images/level6.png');
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.button(400, 575, 'niveau1', startlvl1, this);

		if(level2 == true){
			this.add.button(400, 475, 'niveau2', startlvl2, this);
		}
		if(level3 == true){
			this.add.button(400, 375, 'niveau3', startlvl3, this);
		}
		if(level4 == true){
			this.add.button(400, 275, 'niveau4', startlvl4, this);
		}
		if(level5 == true){
			this.add.button(400, 175, 'niveau5', startlvl5, this);
		}
		if(level6 == true){
			this.add.button(400, 75, 'niveau6', startlvl6, this);
		}

		function startlvl1(){
			game.state.start('Niveau1');
		}

		function startlvl2(){
			//game.state.start('Niveau2');
		}

		function startlvl3(){
			//game.state.start('Niveau3');
		}

		function startlvl4(){
			//game.state.start('Niveau4');
		}

		function startlvl5(){
			//game.state.start('Niveau5');
		}

		function startlvl6(){
			//game.state.start('Niveau6');
		}
	},

	update: function(){
		
	}
};