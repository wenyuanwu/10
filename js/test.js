
let map = 
	[[0, 1, 2, 0, 1],
	 [0, 0, 2, 0, 2],
	 [0, 1, 1, 2, 2], 
	 [1, 1, 1, 1, 0], 
	 [2, 2, 1, 2, 0]]; 

const dim = 5;
let taken = new Array(dim);
let row = new Array(dim);
for (var i = 0; i < dim; i++) {
	row[i] = false;
}
for (var i = 0; i < dim; i++) {
	taken[i] = row.slice(0);
}

 const bfs= function(arr, pos){

	let shareBorderBlocks = [];
	let tempQue = [];

//helper method 
	let addBlock = function(position){
		console.log("pos", position);
		let x = position[0];
		let y = position[1];
		let dirs = [[1,0], [0,1], [-1,0], [0,-1]]; 
		dirs.forEach( 
			function(dir){

				let newPos = [x + dir[0], y+ dir[1]];
				console.log("newPos", newPos);
				if(newPos[0]> 4 || newPos[1] > 4 ||
					newPos[0] < 0 || newPos[1] < 0 ||
					taken[newPos[0]][newPos[1]]) {
					return;
				} 
				console.log("newPos: " + newPos + "value:" + arr[newPos[0]][newPos[1]]);

				if (arr[newPos[0]][newPos[1]] === arr[x][y]){
					console.log("shareBorderBlocks", shareBorderBlocks);
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



console.log(bfs(map, [3,0]));