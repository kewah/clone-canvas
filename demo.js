var cloneCanvas = require('./');

var source = document.createElement('canvas');
source.width = 400;
source.height = 400;
var context = source.getContext('2d');
context.beginPath();
context.rect(0, 0, 400, 400);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 7;
context.strokeStyle = 'black';
context.stroke();

var clone = cloneCanvas(source);
document.body.appendChild(source);
document.body.appendChild(clone);
