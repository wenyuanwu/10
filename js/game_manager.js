import {Grid} from './grid';


export const GameManager = (size, InputManager, Actuator, StorageManager) => {
	this.size = size; 
	this.inputManager = new InputManager;
	this.storageManager = new StorageManager;
	this.actuator = new Actuator;

	this.setup();
};


GameManager.prototype.setup = function(){
	const previousState = this.storageManager.getGameState();

	if (previousState){
		this.grid = new Grid(previousState.grid.size, previousState.grid.cells);
		this.score = previousState.score;
		this.over = previousState.over;
		this.won = previousState.won;
		this.keepPlaying = previousState.keepPlaying;
	} else{
		this.grid = new Grid(this.size);
		this.score = 0;
		this.over = false;
		this.won = false;
		this.keepPlaying = false;
	}
};