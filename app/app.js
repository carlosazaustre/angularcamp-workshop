import angular from 'angular'
import uiRouter from 'angular-ui-router'

import common from './common/common'
import components from './components/components'
import { AppComponent } from './app.component'

angular
  .module('angularCamp', [
    uiRouter,
    common,
    components
  ])
  .component('acApp', AppComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('speakers', {
        url: '/speakers',
        component: 'speakerList'
      })
    $urlRouterProvider.otherwise('/')
  })

angular.element(document).ready(() => angular.bootstrap(document, ['angularCamp']))
