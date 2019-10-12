'use strict';

(function () {
  // переменные

  var wizardCoat = window.settingsSetup.setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = window.settingsSetup.setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = window.settingsSetup.setup.querySelector('.setup-fireball-wrap');

  var inputCoatColor = window.settingsSetup.setup.querySelector('input[name=coat-color]');
  var inputEyesColor = window.settingsSetup.setup.querySelector('input[name=eyes-color]');
  var inputFireballColor = window.settingsSetup.setup.querySelector('input[name=fireball-color]');


  // находим блок с похожими персонажами
  var similarListElement = window.settingsSetup.setup.querySelector('.setup-similar-list');

  // находим шаблон для каждого персонажа
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


  // функция генерации случайного атрибута волшебника
  var getRandomAtribut = function (arr) {
    var randomAtribut = Math.floor(Math.random() * arr.length);
    return arr[randomAtribut];
  };

  // функция создания друзей волшебника
  var renderWizardFriends = function () {
    var wizardFriends = [];
    for (var i = 1; i <= window.data.WIZARD_AMOUNT; i++) {
      var wizard = {
        name: getRandomAtribut(window.data.WIZARD_NAMES) + ' ' + getRandomAtribut(window.data.WIZARD_SURNAMES),
        coatColor: getRandomAtribut(window.data.WIZARD_COATCOLORS),
        eyesColor: getRandomAtribut(window.data.WIZARD_EYESCOLORS)
      };
      wizardFriends.push(wizard);
    }
    return wizardFriends;
  };

  var wizardFriends = renderWizardFriends();


  // клонируем шаблон волшебника со всем содержимым
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardFriends.length; i++) {
    fragment.appendChild(renderWizard(wizardFriends[i]));
  }
  similarListElement.appendChild(fragment);

  window.settingsSetup.setup.querySelector('.setup-similar').classList.remove('hidden');


  // меняем цвет мантии
  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = getRandomAtribut(window.data.WIZARD_COATCOLORS);
    wizardCoat.style.fill = randomCoatColor;
    inputCoatColor.value = randomCoatColor;
  });

  // меняем цвет глаз
  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = getRandomAtribut(window.data.WIZARD_EYESCOLORS);
    wizardEyes.style.fill = randomEyesColor;
    inputEyesColor.value = randomEyesColor;
  });

  // меняем цвет фаербола
  wizardFireball.addEventListener('click', function () {
    var randomFireballColor = getRandomAtribut(window.data.WIZARD_FIREBALL);
    wizardFireball.style.background = randomFireballColor;
    inputFireballColor.value = randomFireballColor;
  });

})();
