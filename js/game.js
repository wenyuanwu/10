import {Grid} from './grid';
import {Tile} from './tile';
import {GameView} from './game_view';

export const Game = function(size){
	this.size = size;
	this.grid = new Grid(size);
	this.insertTile();
};

// Game.prototype.playMove = function(){
// 	if(this.isValidMove){

// 	} else{

// 	}
// };

Game.prototype.insertTile = function(){

	const that = this;

	if(this.grid.blocksAvailable()){

		const emptyBlocks = this.grid.emptyBlocks();

		emptyBlocks.forEach(function(block){
			// assign randomNumber
			const randomNumber = Math.random();
			let value;
			if(randomNumber < 0.5){
				value = 1; 
			} else if (randomNumber < 0.8){
				value = 2;
			} else if (randomNumber < 0.95){
				value = 3;
			} else{
				value = 4;
			}
			const tile = new Tile(block, value);
			that.grid.insertTile(tile);
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