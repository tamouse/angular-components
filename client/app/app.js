/*
 * DONE: import angular and other dependencies
 * like our app.styl and normalize.css and components/home
 * ui-router
 * so the below code works
 */

// NOTE: WTF: normalize.css is a **NODE_MODULE** not a file!
import 'normalize.css';
import './app.styl';
//import './components/home/home.styl';


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {home} from './components/home/home'

angular.module('app', [
  // TODO: register other modules here.
  // remember, this array takes strings
  // not objects
  uiRouter,
  home.name
]);
