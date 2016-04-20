function tank(hp, ap, mp , init, name, faction, p_a, m_a) {

  character.call(this, hp, ap, mp , init, name, faction, p_a, m_a);

  this.spells_descriptions = ["Attaque basique infligeant [physical_attack] dégats\nPortée : 3\nCoût : 3 AP",
                              "Vous confère un bouclier de 50 mais vous retire 10 physical_attack\nPortée 0: \nCoût : 4 AP",
                              "Confère à vous et vos alliers à une distance de 3 ou moins un bouclier de [magical_attack]\nPortée : 0\nCoût : 4 AP",
                              "Vous bloquerez le prochain sort\nPortée : 0\nCoût : 6 AP"];

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
    Portée : 0
    Coût en AP : 4
    Effet : +50 points de bouclier / -10 physical_attack et magical_attack*/
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

  /*Zone/Monocible : Zone de 3 cellules
    Portée : 0
    Coût en AP : 4
    Effet : Donne un bouclier de [magical_attack] aux alliés autour du lanceur.*/
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

  /*Zone/Monocible : Monocible
    Portée : 0
    Coût en AP : 6
    Effet : Le lanceur bloquera la prochaine attaque.
    Particularité : Les sorts de boost et de soin ne seront pas bloqués, et ce peu importe si le lanceur est allié ou non.*/
  this.spell4 = function() {
    if (this.ap >= 6) {
      this.block = true;
      this.ap -= 6;
    }
    else {
      console.log('Vous n\'avez pas assez de PA pour cette action.');
    }
  }.bind(this);

  this.spells = new Array(this.spell1, this.spell2, this.spell3, this.spell4);
}
