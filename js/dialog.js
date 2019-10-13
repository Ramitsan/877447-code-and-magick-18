'use strict';

// Учебный проект: в движении

(function () {
  // находим элемент, за который будем тащить окно
  // добавим обработчик
  var dialogHandler = window.settingsSetup.setup.querySelector('.upload'); // аватар
  var setupStartX = window.settingsSetup.setup.style.left;
  var setupStartY = window.settingsSetup.setup.style.top;


  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    // стартовые координаты
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    // отграничиваем перемещение окна и выбор аватара
    var dragged = false;

    // обновление координат смещения относительно первоначальной точки
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.settingsSetup.setup.style.top = (window.settingsSetup.setup.offsetTop - shift.y) + 'px';
      window.settingsSetup.setup.style.left = (window.settingsSetup.setup.offsetLeft - shift.x) + 'px';
    };

    // обработчик на отпускание кнопки мыши
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    // добавим обработчики перемещения и отпускания мыши
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  // сброс стартовых координат при повторном открытии окна
  var resetCoordsHandler = function () {
    window.settingsSetup.setup.style.left = setupStartX;
    window.settingsSetup.setup.style.top = setupStartY;
  };

  window.settingsSetup.setupOpen.addEventListener('click', resetCoordsHandler);

})();
