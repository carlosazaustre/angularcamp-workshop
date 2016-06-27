import angular from 'angular'
import { AppComponent } from './app.component'
import common from './common/common'

angular
  .module('myApp', [
    common
  ])
  .component('app', AppComponent)
