'use strict';

// объявляем массивы данных
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARD_AMOUNT = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


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
  for (var i = 1; i <= WIZARD_AMOUNT; i++) {
    var wizard = {
      name: getRandomAtribut(WIZARD_NAMES) + ' ' + getRandomAtribut(WIZARD_SURNAMES),
      coatColor: getRandomAtribut(WIZARD_COATCOLORS),
      eyesColor: getRandomAtribut(WIZARD_EYESCOLORS)
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


// открываем окно с настройками персонажа
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');


var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});


setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

