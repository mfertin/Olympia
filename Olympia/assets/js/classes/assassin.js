function assassin(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  this.spells_descriptions = ["Attaque basique infligeant [physical_attack] dégats\nPortée : 3\nCoût : 3 AP",
                              "Inflige  un poison sur 2 tours de [physical_attack/2] dégats par tour.\nPortée : 6\nCoût : 4 AP",
                              "Inflige [physical_attack / 2] dégats à la cible et le lanceur régenère le même montant d'HP\nPortée : 4\nCoût : 4 AP",
                              "Inflige [physical_attack * 2] dégats à la cible et le lanceur gagne un MP pour ce tour.\nPortée : 4\nCoût : 6 AP"];

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
    Portée : 6
    Coût en AP : 4
    Effet : Inflige  un poison sur 2 tours de [physical_attack/2] dégats par tour.
    Particularité : Ignore la parade du tank et les dégats par tour sont cumulables
                    mais le poison disparaitra au bout de 2 tours quoi qu'il en soit
                    sauf si la cible re-reçoit un poison*/
  this.spell2 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=6) {
          target.poison[0] = 2;
          target.poison[1] += this.physical_attack/2;
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

  /*Zone/Monocible : Monocible
    Portée : 4
    Coût en AP : 4
    Effet : Inflige [physical_attack / 2] dégats à la cible et le lanceur régenère le même montant d'HP*/
  this.spell3 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 4) {
        if (getDistance(this.cell,cell) <=4) {
          if(target.block != true){
            damage(target, this.physical_attack/2);
            addHP(this, this.physical_attack/2);
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

  /*Zone/Monocible : Monocible
    Portée : 4
    Coût en AP : 6
    Effet : Inflige [physical_attack * 2] dégats à la cible et le lanceur gagne un MP pour ce tour.*/
  this.spell4 = function(cell) {
    var target = cell.entity;
    if (target.targetable) {
      if (this.ap >= 6) {
        if (getDistance(this.cell,cell) <=4) {
          if(target.block != true){
            damage(target, this.physical_attack*2);
            this.mp += 1;
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
