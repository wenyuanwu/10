import {Grid} from './grid';
import {Tile} from './tile';
import {GameView} from './game_view';

export const Game = function(size){
	this.size = size;
	this.grid = new Grid(size);
	this.insertTile();
};

Game.prototype.playMove = function(pos){
	if(this.isValidMove(pos)){

	} else{

	}
};

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

Game.prototype.shareBorderBlocks = function(arr, pos){

// set up the tracking array
	const dim = 5;
	let taken = new Array(dim);
	let row = new Array(dim);
	for (let i = 0; i < dim; i++) {
		row[i] = false;
	}
	for (let i = 0; i < dim; i++) {
		taken[i] = row.slice(0);
	}

	let shareBorderBlocks = [];
	let tempQue = [];

//helper method 
	let addBlock = function(position){
		let x = position[0];
		let y = position[1];
		let dirs = [[1,0], [0,1], [-1,0], [0,-1]]; 
		dirs.forEach( 
			function(dir){
				let newPos = [x + dir[0], y+ dir[1]];
				if(newPos[0]> 4 || newPos[1] > 4 ||
					newPos[0] < 0 || newPos[1] < 0 ||
					taken[newPos[0]][newPos[1]]) {
					return;
				} 
				if (arr[newPos[0]][newPos[1]] === arr[x][y]){
					tempQue.push(newPos);
					taken[newPos[0]][newPos[1]] = true;
				}
			} 
		);
	};

	tempQue.push(pos);
	taken[pos[0]][pos[1]] = true;
	while(tempQue.length > 0){
		let posInQue = tempQue.shift();
		shareBorderBlocks.push(posInQue);
		addBlock(posInQue);
	}
	return shareBorderBlocks;
};

Game.prototype.isValidMove = function(pos){
	!!this.shareBorderBlocks(pos);
};

Game.prototype.isOver = function(){
	return this.grid.isOver();
};