// DONE: create the admin directive
// be sure to include all the stuff
import './admin.styl';
import template from './admin.html';
import {AdminController as controller} from './admin.controller.js';

export const adminDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
