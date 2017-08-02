// Wait till the browser is ready to render the game
import {GameView} from './game_view';
import {Game} from './game';

document.addEventListener ("DOMContentLoaded", function(){

	// if(window.innerHeight < window.innerWidth){
	// 	Game.X = window.innerHeight * 0.8;
	// 	Game.Y = window.innerHeight * 0.8;
	// } else{
	// 	Game.X = window.innerWidth * 0.8 ;
	// 	Game.Y = window.innerWidth * 0.8;
	// }

	const rootElement = $('.root');
	const game = new Game(5);
	new GameView(game, rootElement, 5);
});
