
export function Grid (size){
	this.size = size;
	this.rows = [];
	this.setup();
}

Grid.prototype.setup = function(){
  for(let i =0; i < this.size; i++) {
  	  	this.rows[i] = [];
  	for(let j=0; j< this.size; j++){
  		this.rows[i].push(null);
  	} 
  }
};

Grid.prototype.isOver = function(){
	this.eachBlock(function(x,y,tile){
		if(tile.value === 10){
			return true;
		}
	});

	return false;
};

// check blocks need to be filled

Grid.prototype.emptyBlocks = function(){
	var blocks = [];
	this.eachBlock(function(x,y,tile){
		if(!tile){
			blocks.push({x: x, y: y});
		}
	});
	return blocks;
};

Grid.prototype.blocksAvailable = function(){
	return (this.emptyBlocks().length !== 0); 
};

Grid.prototype.insertTile = function(tile){
	this.rows[tile.x][tile.y] = tile;
};

Grid.prototype.removeTile = function(tile){
	this.rows[tile.x][tile.y] = null;
};


// helper method

Grid.prototype.eachBlock = function(callback){
	for (var x=0; x< this.size; x++){
		for(var y=0; y< this.size; y++){
			callback(x,y,this.rows[x][y]);
		}
	}
};

Grid.prototype.withinBounds = function (pos) {
  return pos.x >= 0 && pos.x < this.size &&
         pos.y >= 0 && pos.y < this.size;
};

// Grid.prototype.serialize = function(){
// 	var blocks = [];

// 	for (var x = 0; x < this.size; x++){
// 		var row = blocks[x] = [];
// 		for(var y=0; y < this.size; y++){
// 			row.push(this.rows[x][y]? this.rows[x][y].serialize() : null);
// 		}
// 	}
// };

