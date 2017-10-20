import {Game} from './game';

export const GameView = function(game, $el, size){
	this.game = game;
	this.$el = $el;
	this.size = size;
	this.setupBoard();
	this.updateTile(this.game.grid);
	this.bindEvent();
};

GameView.prototype.bindEvent = function(){

	this.$el.on("click", "li", (event => {
		const $block = $(event.currentTarget);
		this.makeMove($block);
	}));
};	

GameView.prototype.makeMove = function($block){
	const pos = $block.data("pos");
	const val = parseInt($block.context.innerText);

	if(this.game.isOver()){
		this.$el.off("click");
		this.$el.addClass("game-over");
		let msg = document.querySelector('#msg');
		msg.textContent = "You Win!";
	}
	
	try {
		this.game.playMove(pos, val);
		this.updateTile(this.game.grid);
		this.game.reArrange();
		const grid = this.game.grid;
		const that = this;
		setTimeout(function(){ return that.updateTile(grid);}, 500);
		setTimeout(function(){that.game.insertTile();}, 1000);
		setTimeout(function(){ return that.updateTile(grid);}, 1500);
	} catch(e){
		let msg = document.querySelector('#msg');
		msg.textContent = "Invalid move! Try again";
		setTimeout(this.removeAlert.bind(this), 1000);
		return;
	}

	
};

GameView.prototype.removeAlert = function(){
	let msg = document.querySelector('#msg');
	msg.textContent = "";
};

GameView.prototype.setupBoard = function(){

	for(let rowIdx = 0; rowIdx < this.size; rowIdx ++){
		const $ul = $("<ul>");
		$ul.addClass("group");
		for(let colIdx = 0; colIdx < this.size; colIdx ++){
			var li = document.createElement("li");
			li.setAttribute("class",rowIdx + "-" + colIdx);
			let $li = $(li);
			$li.data("pos", [rowIdx, colIdx]);
			$ul.append($li);	
		}	
		this.$el.append($ul);
		}	
};

GameView.prototype.updateTile = function(grid){
	const that = this;
	console.log(grid,"grid");
    for (let row_idx = 0; row_idx < grid.rows.length; row_idx ++){
    	for (let col_idx = 0; col_idx < grid.rows[row_idx].length; col_idx ++){
    		if (grid.rows[row_idx][col_idx]){
    			that.addTile(grid.rows[row_idx][col_idx]);
    		} else{
    			that.removeTile([row_idx, col_idx]);
    		}
    	}
    }
};

GameView.prototype.addTile = function(block){
	var inner = document.createElement("div");
	inner.textContent = block.value;
	var className = "tile " + "tile-position-"+ block.x + "-" + block.y + " value-" + block.value;
	this.applyClass(inner,className);
	var li = document.getElementsByClassName(block.x + "-" + block.y)[0];	
	li.setAttribute("id", block.value);
	$(li).empty();
	$(li).wrapInner(inner);
};

GameView.prototype.removeTile = function(block){
	const className = block[0] + "-" + block[1];
	const parentNode = document.getElementsByClassName(className);
	if (parentNode[0].childNodes[0]){
		parentNode[0].childNodes[0].remove();
		parentNode[0].setAttribute("id", 0);
	}
};

GameView.prototype.applyClass = function(element, className){
	element.setAttribute("class", className);
};

