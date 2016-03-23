function map(x, y) {
  this.cells = new Array();//Tableau contenant la liste des cellules de la map.
  this.xSize = x;
  this.ySize = y;
  this.image;//Contient l'image de la map.
  this.initCells = function(x, y) {
    for (var i = 1; i <= x ; i++) {
      for (var j = 1; j <= y; j++) {
        this.cells.push(new cell(i, j));
      }
    }
  }
  this.initCells(x, y);

  this.getCellByCoordinates = function(x,y) {
    return this.cells[(x-1)*this.xSize + (y-1)];
  }

  this.getEntitiesAround = function(cell, range) {
    var entities = new Array();
    for (var i = cell.x - range; i <= cell.x + range; i++) {
      for (var j = cell.y - range; j <= cell.y + range ; j++) {
        if (i >= 1 && i <= this.xSize && j >= 1 && j <= this.ySize) {
          if (getDistance(cell, this.getCellByCoordinates(i, j)) <= range && typeof this.getCellByCoordinates(i, j).entity !== 'undefined') {
            entities.push(this.getCellByCoordinates(i, j).entity);
          }
        }
      }
    }
    return entities;
  }


}
