import {Tile} from './tile';

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
		if(tile && tile.value === 10){
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

Grid.prototype.reArrange = function(){
	// add logic of the removed tile!

	let newArr=[];
	for(let x=0; x < this.size; x++){
		newArr[x] = [];
		for(let y=0; y< this.size; y++){
			if(this.rows[x][y]){
				let tile = new Tile({x: x, y: newArr[x].length}, this.rows[x][y].value);
				newArr[x].push(tile);
			}
		}

		while(newArr[x].length !== 5){
			newArr[x].push(null);
		}

	}

	this.rows = newArr;
};


// helper method

Grid.prototype.eachBlock = function(callback){
	for (let x=0; x< this.size; x++){
		for(let y=0; y< this.size; y++){
			callback(x,y,this.rows[x][y]);
		}
	}
};

Grid.prototype.withinBounds = function (pos) {
  return pos.x >= 0 && pos.x < this.size &&
         pos.y >= 0 && pos.y < this.size;
};


// };

