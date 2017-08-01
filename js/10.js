// Wait till the browser is ready to render the game
import {GridView} from './grid_view';


document.addEventListener ("DOMContentLoaded", function(){
	const canvas = document.getElementById("canvas"); 
	var context = canvas.getContext('2d');
	context.fillStyle = "#FF0000";
	context.fillRect(0,0,175,175);	

	const rootElement = $('.10-root');
	new GridView(context, rootElement);
});
