'use strict';

(function () {
  // переменные
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireball = setup.querySelector('.setup-fireball-wrap');

  var heroName = setup.querySelector('input[name="username"]');

  var inputCoatColor = setup.querySelector('input[name=coat-color]');
  var inputEyesColor = setup.querySelector('input[name=eyes-color]');
  var inputFireballColor = setup.querySelector('input[name=fireball-color]');

  // находим и показываем окно с настройками волшебников
  var userDialog = document.querySelector('.setup');
  // userDialog.classList.remove('hidden');

  // находим блок с похожими персонажами
  var similarListElement = userDialog.querySelector('.setup-similar-list');

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
    for (var i = 1; i <= window.util.WIZARD_AMOUNT; i++) {
      var wizard = {
        name: getRandomAtribut(window.util.WIZARD_NAMES) + ' ' + getRandomAtribut(window.util.WIZARD_SURNAMES),
        coatColor: getRandomAtribut(window.util.WIZARD_COATCOLORS),
        eyesColor: getRandomAtribut(window.util.WIZARD_EYESCOLORS)
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

  userDialog.querySelector('.setup-similar').classList.remove('hidden');


  // открытие окна с настройками персонажа
  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // закрытие окна с настройками персонажа
  var closePopup = function () {
    setup.classList.add('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // закрытие окна с настройками персонажа по кнопке ESC
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && evt.target !== heroName) {
      closePopup();
    }
  };

  // обработчики
  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  // меняем цвет мантии
  wizardCoat.addEventListener('click', function () {
    var randomCoatColor = getRandomAtribut(window.util.WIZARD_COATCOLORS);
    wizardCoat.style.fill = randomCoatColor;
    inputCoatColor.value = randomCoatColor;
  });

  // меняем цвет глаз
  wizardEyes.addEventListener('click', function () {
    var randomEyesColor = getRandomAtribut(window.util.WIZARD_EYESCOLORS);
    wizardEyes.style.fill = randomEyesColor;
    inputEyesColor.value = randomEyesColor;
  });

  // меняем цвет фаербола
  wizardFireball.addEventListener('click', function () {
    var randomFireballColor = getRandomAtribut(window.util.WIZARD_FIREBALL);
    wizardFireball.style.background = randomFireballColor;
    inputFireballColor.value = randomFireballColor;
  });

})();
