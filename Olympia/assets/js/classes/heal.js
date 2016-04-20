function heal(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  this.spells_descriptions = ["Attaque basique infligeant [physical_attack] dégats\nPortée : 3\nCoût : 3 AP",
                              "Soigne la cible de [magical_attack] HP mais le lanceur reçoit [magical_attack / 2] dégats.\nPortée : 4\nCoût : 4 AP",
                              "Soigne de [magical_attack] tous les alliés dans la zone de 4 autour de la celulle ciblée.\nPortée : 4\nCoût : 4 AP",
                              "Soigne de [magical_attack * 2] la cible.\nPortée : 4\nCoût : 6 AP"];

  /*Zone/Monocible : Monocible
    Portée : 3
    Coût en AP : 3
    Effet : Inflige [physical_attack] dégats à la cible.*/
  this.spell1 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 3) {
        if (getDistance(this.cell,cell) <=3) {
          if(target.block != true){
            damage(target, this.physical_attack);
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
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

  /*Zone/Monocible : Monocible
    Portée : 4
    Coût en AP : 4
    Effet : Soigne la cible de [magical_attack] HP mais le lanceur reçoit
            [magical_attack / 2] dégats.
    Particularité : Supprime les effets de brulure et de poison à la cible.*/
  this.spell2 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,target.cell) <=4) {
          addHP(target, this.magical_attack);
          damage(this, this.magical_attack/2);
          if (target.burning[0] > 0) {
            target.burning = [0, 0];
          }
          if (target.poison[0] > 0) {
            target.poison = [0, 0];
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

  /*Zone/Monocible : Zone de 3 cellules
    Portée : 4
    Coût en AP : 4
    Effet : Soigne de [magical_attack] tous les alliés dans la zone.*/
  this.spell3 = function(cell) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <= 4) {
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
  }.bind(this);

  /*Zone/Monocible : Monocible
    Portée : 4
    Coût en AP : 6
    Effet : Soigne de [magical_attack * 2] la cible.*/
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
