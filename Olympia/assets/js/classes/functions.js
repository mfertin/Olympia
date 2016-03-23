function getDistance(cell1, cell2) {
  var x = cell2.x - cell1.x;
  var y = cell2.y - cell1.y;
  var distance = 0;
  if (x < 0) {
    distance -= x;
  }
  else {
    distance += x;
  }
  if (y < 0) {
    distance -= y;
  }
  else {
    distance += y;
  }
  return distance;
}

function moveEntityToCell(entity, x, y) {
  cell = partie.map.getCellByCoordinates(x, y);
  cell.entity = entity;
  entity.cell = cell;
}
