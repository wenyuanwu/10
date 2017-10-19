/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile__ = __webpack_require__(1);




const Game = function(size){
	this.size = size;
	this.grid = new __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* Grid */](size);
	this.insertTile();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


Game.prototype.playMove = function(pos){
	const shareBorderBlocks = this.shareBorderBlocks(this.grid.rows, pos);
	const that = this;
	if(shareBorderBlocks.length > 1){
		shareBorderBlocks.forEach(
			function(block_pos){
				that.removeTile({x: block_pos[0], y: block_pos[1]});
			});
		this.reArrange();
		this.insertTile();

	} else{	
		throw new Error('error');
	}
};

Game.prototype.insertTile = function(){

	const that = this;

	if(this.grid.blocksAvailable()){

		const emptyBlocks = this.grid.emptyBlocks();

		emptyBlocks.forEach(function(block){
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
			const tile = new __WEBPACK_IMPORTED_MODULE_1__tile__["a" /* Tile */](block, value);
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
				if (arr[newPos[0]][newPos[1]].value === arr[x][y].value){
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


Game.prototype.reArrange = function(){
	return this.grid.reArrange();
};

Game.prototype.isOver = function(){
	return this.grid.isOver();
};

Game.prototype.removeTile = function(tile){
	return this.grid.removeTile(tile);
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Tile;

function Tile (position, value){
	this.x = position.x;
	this.y = position.y;
	this.value = value;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_view__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(0);
// Wait till the browser is ready to render the game



document.addEventListener ("DOMContentLoaded", function(){

	// if(window.innerHeight < window.innerWidth){
	// 	Game.X = window.innerHeight * 0.8;
	// 	Game.Y = window.innerHeight * 0.8;
	// } else{
	// 	Game.X = window.innerWidth * 0.8 ;
	// 	Game.Y = window.innerWidth * 0.8;
	// }

	const rootElement = $('.root');
	const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */](5);
	new __WEBPACK_IMPORTED_MODULE_0__game_view__["a" /* GameView */](game, rootElement, 5);
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(0);


const GameView = function(game, $el, size){
	this.game = game;
	this.$el = $el;
	this.size = size;
	this.setupBoard();
	this.updateTile(this.game.grid);
	this.bindEvent();
};
/* harmony export (immutable) */ __webpack_exports__["a"] = GameView;


GameView.prototype.bindEvent = function(){

	this.$el.on("click", "li", (event => {
		const $block = $(event.currentTarget);
		this.makeMove($block);
	}));
};	

GameView.prototype.makeMove = function($block){

	const pos = $block.data("pos");
	// console.log(this.game.grid.rows, "grid!!");
	try {
		this.game.playMove(pos);
		this.updateTile(this.game.grid);
	} catch(e){
		let msg = document.querySelector('#msg');
		msg.textContent = "Invalid move! Try again";
		setTimeout(this.removeAlert.bind(this), 1000);
		return;
	}

	if(this.game.isOver()){
		this.$el.off("click");
		this.$el.addClass("game-over");
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
    // console.log("row-view", grid.rows);
	grid.rows.forEach(function (row) {
      row.forEach(function (block) {
        if (block) {
          that.addTile(block);
        }
      });
    });
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

GameView.prototype.applyClass = function(element, className){
	element.setAttribute("class", className);
};



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile__ = __webpack_require__(1);


function Grid (size){
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
				let tile = new __WEBPACK_IMPORTED_MODULE_0__tile__["a" /* Tile */]({x: x, y: newArr[x].length}, this.rows[x][y].value);
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



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map