import angular from 'angular'
import header from './header'
import footer from './footer'

const common = angular
  .module('app.common', [
    header,
    footer
  ])
  .name

export default common
