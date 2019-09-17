'use strict';

var CLOUD_WIDTH = 420; // ширина облака
var CLOUD_HEIGHT = 270; // высота облака
var CLOUD_X = 100; // точка отсчета облака по горизонтали
var CLOUD_Y = 10; // точка отсчета облака по вертикали
var GAP = 10;
var TEXT_HEIGHT = 75;

var GIST_HEIGHT = 150; // высота гистограммы
var BAR_WIDTH = 40; // ширина колонки
var BAR_GAP = 50; // расстояние между колонками


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) { // получаем максимальный элемент
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 45);
  ctx.fillText('Список результатов:', 120, 65);

  var maxTime = Math.floor(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {

    var colorFill = function() {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(220, ' + Math.random() + '%, 50%)';
      }
    };

    colorFill(names[i]);

    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP + TEXT_HEIGHT + (GIST_HEIGHT - GIST_HEIGHT * times[i] / maxTime) - GAP);

    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + GAP + TEXT_HEIGHT + (GIST_HEIGHT - GIST_HEIGHT * times[i] / maxTime), BAR_WIDTH, (GIST_HEIGHT * times[i]) / maxTime);
  }
};
