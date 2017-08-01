// Wait till the browser is ready to render the game
// import {GameManager} from "./game_manager";
// import {HTMLActuator} from './html_actuator.js';
// import {LocalStorageManager} from './local_storage_manager.js';

// window.requestAnimationFrame(function () {
//   new GameManager(5, KeyboardInputManager, HTMLActuator, LocalStorageManager);
// });

const canvas = document.getElementById("canvas"); 
var context = canvas.getContext('2d');
context.fillStyle = "#FF0000";
context.fillRect(0,0,175,175);	