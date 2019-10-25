'use strict';

(function () {
  // переменные
  // var inputCoatColor = window.settingsSetup.setup.querySelector('input[name=coat-color]');
  // var inputEyesColor = window.settingsSetup.setup.querySelector('input[name=eyes-color]');
  // var inputFireballColor = window.settingsSetup.setup.querySelector('input[name=fireball-color]');


  // находим блок с похожими персонажами
  var similarList = window.settingsSetup.setup.querySelector('.setup-similar-list');

  // находим шаблон для каждого персонажа
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // // функция создания друзей волшебника
  // var renderWizardFriends = function () {
  //   var wizardFriends = [];
  //   for (var i = 1; i <= window.data.WIZARD_AMOUNT; i++) {
  //     var wizard = {
  //       name: getRandomAtribut(window.data.WIZARD_NAMES) + ' ' + getRandomAtribut(window.data.WIZARD_SURNAMES),
  //       coatColor: getRandomAtribut(window.data.WIZARD_COATCOLORS),
  //       eyesColor: getRandomAtribut(window.data.WIZARD_EYESCOLORS)
  //     };
  //     wizardFriends.push(wizard);
  //   }
  //   return wizardFriends;
  // };

  // var wizardFriends = renderWizardFriends();


  // клонируем шаблон волшебника со всем содержимым
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };


  // обработчик успешной загрузки
  window.render = function (data) {
    var takeNumber = data.length > 4 ? 4 : data.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      similarList.appendChild(renderWizard(data[i]));
    }
    window.settingsSetup.setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  // var form = window.settingsSetup.setup.querySelector('.setup-wizard-form');
  // form.addEventListener('submit', function(evt) {
  //   window.save(new FormData(form), function (response) {
  //     window.settingsSetup.setup.classList.add('hidden');
  //   });
  //   evt.preventDefault();
  // });

})();
