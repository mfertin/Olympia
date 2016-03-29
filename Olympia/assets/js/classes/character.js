function character(hp, ap, mp , init, name, faction, p_a, m_a){
	this.max_hp = hp;
	this.hp = hp;// Points de vie - Doit contenir une variable de type "int".
	this.ap = ap;// Points d'actions - Doit contenir une variable de type "int".
	this.mp = mp;// Points de déplacement - Doit contenir une variable de type "int".
	this.init = init;//Initiative - Doit contenir une variable de type "int".
	this.name = name;// Nom du personnage - Doit contenir une variable de type "string".
	this.faction = faction;//Contient la faction du personnage.
	this.physical_attack = p_a;//Attaque physique du personnage.
	this.magical_attack = m_a;//Attaque magique du personnage.
	this.burning = [0, 0];//[0] -> Nombre de tours d'effet.  /  [1] −> Dégats infligés à chaque coup.
	this.poison = [0, 0];//[0] -> Nombre de tours d'effet.  /  [1] −> Dégats infligés à chaque coup.
	this.block = false;//Indique si le prochain coup doit être paré ou non.
	this.shield = 0;//Montant du bouclier.
	entity.call(this, true);
}
