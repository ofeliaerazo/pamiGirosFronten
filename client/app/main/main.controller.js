'use strict';

(function() {

  class MainController {

    constructor() {

    }


  }

  angular.module('palmiGirosApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
