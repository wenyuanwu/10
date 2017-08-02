
export function Grid (size){
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

