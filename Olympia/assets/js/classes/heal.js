function heal(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  //Inflige [physical_attack] points de dégats.
  //Coût : 4 AP.
  //Portée : 3 cellules.
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

  //Inflige 10 points de dégats mais retire 1 point de mouvement et 2 points d'actions.
  //Coût : 4 AP.
  //Portée : 4 cellules.
  this.spell2 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,target.cell) <=4) {
          addHP(target, this.magical_attack);
          damage(this, this.magical_attack/2);
          if (target.burning > 0) {
            target.burning = 0;
          }
          this.ap -= 4;
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


  this.spell3 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=4) {
          var entities = partie.map.getEntitiesAround(cell, 3);
          for (var i = 0; i < entities.length; i++) {
            if (entities[i].faction == this.faction) {
              addHP(entities[i], this.magical_attack/2);
            }
          }
          this.ap -= 4;
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


  this.spell4 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 6) {
        if (getDistance(this.cell,target.cell) <=4) {
          addHP(target, this.magical_attack*2);
          this.ap -= 6;
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

  this.spells = new Array(this.spell1, this.spell2, this.spell3, this.spell4);
}
