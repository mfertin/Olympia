function magus(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  //Inflige 10 points de dégats.
  //Coût : 4 AP.
  //Portée : 3 cellules
  this.spell1 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (getDistance(this.cell,cell) <=3) {
        target.hp -= this.physical_attack;
        this.ap -= 3;
        console.log(target.name+ '(' + target.faction +  ') : -' + this.physical_attack + ' HP.');
      }
      else {
        console.log('La cible est trop éloignée.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }

  //Inflige 10 points de dégats mais retire 1 point de mouvement et 2 points d'actions.
  //Coût : 4 AP.
  //Portée : 4 cellules.
  this.spell2 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (getDistance(this.cell,target.cell) <=4) {
        target.hp -= 10;
        target.mp -= 1;
        target.ap -= 2;
        this.ap -= 4;
        console.log(target.name+ '(' + target.faction +  ') : -10 HP.');
        console.log(target.name+ '(' + target.faction +  ') : -1 PM.');
        console.log(target.name+ '(' + target.faction +  ') : -2 PA.');
      }
      else {
        console.log('La cible est trop éloignée.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }


  this.spell3 = function(cell) {
    if (getDistance(this.cell,cell) <=4) {
      var entities = partie.map.getEntitiesAround(cell, 3);
      for (var i = 0; i < entities.length; i++) {
        if (entities[i].faction !== this.faction) {
          entities[i].hp -= this.magical_attack;
          console.log(entities[i].name+ '(' + entities[i].faction +  ') : - ' + this.magical_attack + 'HP.');
        }
      }
    }
    else {
      console.log('La cible est trop éloignée.');
    }
  }


  this.spell4 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (getDistance(this.cell,target.cell) <=4) {
        target.hp -= this.magical_attack*2;
        target.burning = 3;
        console.log(target.name+ '(' + target.faction +  ') : -' + this.magical_attack*2 + ' HP.');
      }
      else {
        console.log('La cible est trop éloignée.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }

  this.spells = new Array(this.spell1, this.spell2, this.spell3, this.spell4);
}
