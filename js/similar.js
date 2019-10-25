'use strict';

(function () {

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var updateWizards = function () {
    window.render(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
      }
      return rankDiff;
    }));
  };

  window.wizard.onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.wizard.onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  // обработчик ошибки, DOM элемент
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style.position = 'absolute';
    node.style.zIndex = '100';
    node.style.width = '400px';
    node.style.top = '35%';
    node.style.left = '35%';
    node.style.paddingTop = '50px';
    node.style.paddingBottom = '100px';
    node.style.backgroundColor = 'red';
    node.style.color = 'yellow';
    node.style.fontSize = '30px';
    node.style.fontWeight = 'bold';
    node.style.lineHeight = '65px';
    node.style.textAlign = 'center';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.load(successHandler, errorHandler);

})();
