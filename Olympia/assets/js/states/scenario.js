var Scenario = {
	preload: function(){
		this.load.image('backgroundne', 'assets/images/sne.png');
		this.load.image('backgroundg', 'assets/images/sg.png');
		this.load.image('retour', 'assets/images/retour2.png');
		this.load.image('commencer', 'assets/images/commencer.png');
	},

	create: function(){
		if(faction == "grec"){
			this.background = this.game.add.sprite(0, 0, 'backgroundg');
		}

		if(faction == "egypt"){
			this.background = this.game.add.sprite(0, 0, 'backgroundne');
		}

		if(faction == "nord"){
			this.background = this.game.add.sprite(0, 0, 'backgroundne');
		}

		//this.add.button(20, 582, 'retour', backv, this); //à retirer
		this.add.button(419, 570, 'commencer', commencer, this);

		/*function backv(){
			game.state.start('Valid'); //à retirer
		}*/

		function commencer(){
			level1 = true;
			game.state.start('Niveaux');
		}
	},

	update: function(){
		
	}
};