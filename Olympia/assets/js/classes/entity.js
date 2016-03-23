function entity(targetable) {
	this.targetable = targetable;//Définit si l'entité est ciblable ou non - Doit être une variable de type "boolean".
	this.cell = new cell(0,0);//Contient la cellule sur laquelle est l'entité.
}
