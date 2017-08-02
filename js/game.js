import {Grid} from './grid';
import {Tile} from './tile';

export const Game = function(){
	this.grid = new Grid();
	this.insertTile();
};

// Game.prototype.playMove = function(){
// 	if(this.isValidMove){

// 	} else{

// 	}
// };

Game.prototype.insertTile = function(){
	if(this.grid.blocksAvailable()){

		var emptyBlocks = this.grid.emptyBlocks;

		emptyBlocks.this.grid.forEach(function(block){
			// assign randomNumber
			var randomNumber = Math.random();
			var value;
			if(randomNumber < 0.5){
				value = 1; 
			} else if (randomNumber < 0.8){
				value = 2;
			} else if (randomNumber < 0.95){
				value = 3;
			} else{
				value = 4;
			}

			var tile = new Tile({x: block.x, y: block.y}, value);

			this.grid.insertTile(tile);
		});
	}
};

Game.prototype.shareBorderBlocks = function(pos){

};

Game.prototype.isValidMove = function(pos){
	!!this.shareBorderBlocks(pos);
};

Game.prototype.isOver = function(){
	return this.grid.isOver();
};