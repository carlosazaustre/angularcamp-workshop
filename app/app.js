import angular from 'angular'
import { AppComponent } from './app.component'
import common from './common/common'
import components from './components/components'

angular
  .module('myApp', [
    common,
    components
  ])
  .component('app', AppComponent)
