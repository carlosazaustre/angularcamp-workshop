/**
 * components/components.js
 *
 * Module that contains the specific components for the application.
 */

import angular from 'angular'

import speaker from './speaker'

const components = angular
  .module('app.components', [speaker])
  .name

export default components
