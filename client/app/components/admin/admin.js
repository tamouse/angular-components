// DONE: define and register the admin component

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {adminDirective} from './admin.directive';

const admin = angular.module('admin', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    })
  })
  .directive('admin', adminDirective);

export {admin};