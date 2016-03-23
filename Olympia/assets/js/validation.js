var Valid = {
	preload: function(){
		if(faction == "grec"){
			this.load.image('background', 'assets/images/fondgrec.jpg');
			this.load.image('mage', 'assets/images/zeusnc.png');
			this.load.image('tank', 'assets/images/poseidonnc.png');
			this.load.image('assassin', 'assets/images/hadesnc.png');
			this.load.image('archer', 'assets/images/apollonc.png');
			this.load.image('heal', 'assets/images/heranc.png');
		}
		if(faction == "egypt"){
			this.load.image('background', 'assets/images/fondegypt.jpg');
			this.load.image('mage', 'assets/images/ranc.png');
			this.load.image('heal', 'assets/images/isisnc.png');
			this.load.image('tank', 'assets/images/anubisnc.png');
			this.load.image('archer', 'assets/images/osirisnc.png');
			this.load.image('assassin', 'assets/images/setnc.png');
		}
		if(faction == "nord"){
			this.load.image('background', 'assets/images/fondnord.jpg');
			this.load.image('mage', 'assets/images/odinnc.png');
			this.load.image('heal', 'assets/images/freyjanc.png');
			this.load.image('tank', 'assets/images/thornc.png');
			this.load.image('archer', 'assets/images/njordnc.png');
			this.load.image('assassin', 'assets/images/lokinc.png');
		}
		this.load.image('retour', 'assets/images/retour.png');
		this.load.image('valider', 'assets/images/valider.png')
	},

	create: function(){
		this.background = this.game.add.sprite(0, 0, 'background');
		this.add.image(36, 250, 'mage');
		this.add.image(236, 250, 'heal');
		this.add.image(436, 250, 'tank');
		this.add.image(636, 250, 'archer');
		this.add.image(836, 250, 'assassin');
		this.add.button(20, 555, 'retour', back, this);
		this.add.button(800, 555, 'valider', ok, this);

		function back(){
			game.state.start('Choix');
		}

		function ok(){
			game.state.start('Scenario');
		}
	},

	update: function(){
		
	}
};