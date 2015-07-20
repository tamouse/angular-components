// DONE: register your routes for the blog and the directive
import angular from 'angular';
import {blogDirective} from './blog.directive.js';

export const blog = angular.module('blog', [])
  .config(function($stateProvider) {
    "use strict";
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    })
  })
  .directive('blog', blogDirective);
