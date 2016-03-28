function tank(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  this.spell1 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 3) {
        if (getDistance(this.cell,cell) <=3) {
          damage(target, this.physical_attack);
          this.ap -= 3;
        }
        else {
          console.log('La cible est trop éloignée.');
        }
      }
      else {
        console.log('Vous n\'avez pas assez de PA pour cette action.');
      }
    }
    else {
      console.log('Ceci n\'est pas une cible valide');
    }
  }.bind(this);


  this.spell2 = function() {
    if (this.ap >= 4) {
      this.shield += 50;
      this.physical_attack -= 10;
      this.magical_attack -= 10;
      this.ap -= 4;
    }
    else {
      console.log('Vous n\'avez pas assez de PA pour cette action.');
    }
  }.bind(this);


  this.spell3 = function() {
    if (this.ap >= 4) {
      var entities = partie.map.getEntitiesAround(this.cell, 3);
      for (var i = 0; i < entities.length; i++) {
        if (entities[i].faction == this.faction) {
          entities[i].shield += this.magical_attack;
        }
      }
      this.ap -= 4;
    }
    else {
      console.log('Vous n\'avez pas assez de PA pour cette action.');
    }
  }.bind(this);


  this.spell4 = function(cell) {
    /* A coder */
  }.bind(this);

  this.spells = new Array(this.spell1, this.spell2, this.spell3, this.spell4);
}
