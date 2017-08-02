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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(3);


const Game = function(){
	this.grid = new __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* Grid */];
};
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


Game.prototype.playMove = function(){
	
};

Game.prototype.isOver = function(){

};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_view__ = __webpack_require__(2);
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
	const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* Game */]();
	new __WEBPACK_IMPORTED_MODULE_0__game_view__["a" /* GameView */](game, rootElement, 5);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(0);


const GameView = function(game, $el, size){
	this.game = game;
	this.$el = $el;
	this.size = size;
	this.setupBoard();
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Grid;

function Grid (size){
	this.size = size;
	this.setup();
	this.grid = [];
}

Grid.prototype.setup = function(){
  for(let i =0; i < this.size; i++) {
  	this.grid[i] = [];
  	for(let j=0; j< this.size; j++){
  		this.grid[i][j] = null;
  	} 
  }
};



/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map