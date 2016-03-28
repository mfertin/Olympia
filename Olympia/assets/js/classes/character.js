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
	this.burning = 0;
	this.shield = 0;
	entity.call(this, true);
}
