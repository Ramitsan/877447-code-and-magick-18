'use strict';
(function () {
  var wizardElement = document.querySelector('.setup-wizard');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var wizard = {
    onEyesChange: function (color) {},
    onCoatChange: function (color) {}
  };

  // функция генерации случайного атрибута волшебника
  var getRandomAtribut = function (arr) {
    var randomAtribut = Math.floor(Math.random() * arr.length);
    return arr[randomAtribut];
  };

  // меняем цвет мантии
  wizardCoat.addEventListener('click', function () {
    var newColor = getRandomAtribut(window.data.WIZARD_COATCOLORS);
    this.style.fill = newColor;
    wizard.onCoatChange(newColor);
  });

  // меняем цвет глаз
  wizardEyes.addEventListener('click', function () {
    var newColor = getRandomAtribut(window.data.WIZARD_EYESCOLORS);
    this.style.fill = newColor;
    wizard.onEyesChange(newColor);
  });

  // меняем цвет фаербола
  wizardFireball.addEventListener('click', function () {
    var newColor = getRandomAtribut(window.data.WIZARD_FIREBALL);
    this.style.background = newColor;
  });

  return window.wizard = wizard;

  window.wizard = {
    wizardElement: wizardElement,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    wizardFireball: wizardFireball
  };
})();
