// DONE: include the directive
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {blogPostDirective} from './blogPost.directive';

const blogPost = angular.module('blogPost', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blogPost', {
      url: '/blog/:title',
      // setup attr to accept post from controller
      template: '<blog-post post="post"></blog-post>',
      // DONE: configure the resolve to work
      // with a controller here
      controller: function($scope, post) {
        $scope.post = post;
      },
      resolve: {
        post: function(Posts, $stateParams) {
          // get the post based on title
          // in url
          let {title} = $stateParams;
          // slug generation should def be a server
          // thing but we don't have one :)
          title = title.replace(/\-+/g, ' ');
          return Posts.getOne({title});
        }
      }
    });
  })
  .directive('blogPost' /* DONE: register the directive here*/, blogPostDirective);

export {blogPost};