function magus(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

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
    Effet : Inflige 10 dégats à la cible et lui retire 1 MP et 2 AP pour son prochain tour.*/
  this.spell2 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=4) {
          if(target.block != true){
            damage(target, 10);
            target.mp -= 1;
            target.ap -= 2;
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
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

  /*Zone/Monocible : Zone de 3 cellules.
    Portée : 4
    Coût en AP : 4
    Effet : Inflige [magical_attack] à tous les ennemis compris dans la zone.*/
  this.spell3 = function(cell) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=4) {
          var entities = partie.map.getEntitiesAround(cell, 3);
          for (var i = 0; i < entities.length; i++) {
            if (entities[i].faction != this.faction) {
              if(entities[i].block != true){
                damage(entities[i], this.magical_attack);
              }
              else {
                console.log('L\'adversaire pare votre attaque.');
                entities[i].block = false;
              }
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
    Effet : Inflige [magical_attack * 2] dégats à la cible et le brûle
            pendant 3 tours à hauteur de [magical_attack / 2] dégats par tour.*/
  this.spell4 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 6) {
        if (getDistance(this.cell,cell) <=4) {
          if(target.block != true){
            damage(target, this.magical_attack*2);
            target.burning = [3, this.magical_attack/2];
          }
          else {
            console.log('L\'adversaire pare votre attaque.');
            target.block = false;
          }
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
