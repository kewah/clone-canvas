'use strict';

module.exports = function cloneCanvas(source) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = source.width;
  canvas.height = source.height;
  ctx.drawImage(source, 0, 0);

  return canvas;
};
