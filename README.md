## 10

[10 live](https://wenyuanwu.github.io/10/)

![](image/10.png)

### Background & Functionality 

10 is a single-player sliding cell puzzle game in the honor of the lengendary [2048](https://gabrielecirulli.github.io/2048/). The game follows the following rules: 

1) The game starts with a fully filled board which is consisted of 25 cells. Each cell is assigned a initial value from 1 to 4 
2) Only cell in a cluster (has adjacent cell with the same value) would be able to be removed through the click. The adjacency is defined as the existence of any shared border 
3) After the click, the cluster of the cells would be removed all together. A new cell with the orginal value plus one would be created and placed on the same row of the cell be clicked. All the existing cells would be shifted towards the left and new random cells would be generated on the right to fill the unoccupied space    
4) The cluster of the block would be removed all together and replaced by one block with the value as the original value plus 1 

### Implementation   

### Future Features  

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- Webpack to bundle and serve up the various scripts.

