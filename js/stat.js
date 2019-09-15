'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // точка отсчета облака по горизонтали
var CLOUD_Y = 10; // точка отсчета облака по вертикали
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40; // ширина колонки
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) { // получаем максимальный элемент
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_WiDTH) * i);
    // ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP + (GAP + BAR_WiDTH) * i, (barWidth * times[i]) / maxTime, BAR_WiDTH);
  }
};
