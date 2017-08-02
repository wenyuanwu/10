import {Game} from './game';

export const GameView = function(game, $el, size){
	this.game = game;
	this.$el = $el;
	this.size = size;
	this.setupBoard();
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
	
	try {
		this.game.playMove(pos);
	} catch(e){
		alert("Invalid move! Try again");
		return;
	}

	if(this.game.isOver()){
		this.$el.off("click");
		this.$el.addClass("game-over");
	}
};

GameView.prototype.setupBoard = function(){

	for(let rowIdx = 0; rowIdx < this.size; rowIdx ++){
		const $ul = $("<ul>");
		$ul.addClass("group");
		for(let colIdx = 0; colIdx < this.size; colIdx ++){
			let $li = $("<li>");
			$li.data("pos", [rowIdx, colIdx]);

			$ul.append($li);
		}

		this.$el.append($ul);
	}

};
